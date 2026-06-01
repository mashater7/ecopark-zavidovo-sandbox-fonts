/* Переключатель шрифтов: применяет выбранный шрифт к обычному тексту (не к заголовкам). */
(function () {
  var THRESHOLD = 26; // фактический отображаемый размер: трогаем только мелкий текст

  // Список шрифтов. css=null — оригинал. Добавляй новые сюда по мере появления.
  var FONTS = [
    { name: 'Оригинал', css: null },
    { name: 'Poiret One', css: "'Poiret One', sans-serif" },
    { name: 'Onest', css: "'Onest', sans-serif" },
    { name: 'Doloman Pavljenko', css: "'Doloman Pavljenko', sans-serif" },
    { name: 'Stereonic XS', css: "'Stereonic XS', sans-serif" },
    { name: 'Zerno', css: "'Zerno', sans-serif", scale: 0.8 },
    { name: 'L&C (наш)', css: "'LC Hairline', sans-serif", scale: 0.8 }
  ];

  var cache = null;       // кэш целевых элементов
  var touched = [];       // элементы, которым мы навязали инлайн-стили — чтобы откатывать
  var activeCss = null;   // какой шрифт сейчас выбран (защита от гонки при быстрых кликах)
  var baseCharW = null;   // средняя ширина символа базового шрифта страницы (эталон)

  // Средняя ширина символа для семейства (мерим скрытым образцом).
  function avgCharWidth(family) {
    var s = document.createElement('span');
    s.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-size:20px;white-space:nowrap;font-family:' + family + ';';
    s.textContent = 'Экопарк Завидово участки рядом курорт продажа домов';
    document.body.appendChild(s);
    var w = s.getBoundingClientRect().width / s.textContent.length;
    document.body.removeChild(s);
    return w;
  }

  // Во сколько уменьшить кегль, чтобы более широкий шрифт занял столько же места,
  // сколько базовый. Иначе текст переносится на лишнюю строку, блок растёт вниз и
  // наезжает на нижний (вёрстка на фиксированных координатах — блоки не двигаются).
  // Замер: широкий Zerno давал 40 наездов, с компенсацией — 17 (как у оригинала).
  function widthFactor(css) {
    if (baseCharW == null) baseCharW = avgCharWidth('Arial, sans-serif');
    var w = avgCharWidth(css);
    if (!w) return 1;
    var f = baseCharW / w;
    if (f > 1) f = 1;        // узкие шрифты не растягиваем
    if (f < 0.7) f = 0.7;    // предохранитель
    return f;
  }

  // Снять все наши инлайн-стили (вернуть страницу к оригиналу).
  function clearTouched() {
    for (var i = 0; i < touched.length; i++) {
      var el = touched[i];
      el.style.removeProperty('font-family');
      el.style.removeProperty('font-weight');
      el.style.removeProperty('font-size');
      el.style.removeProperty('line-height');
    }
    touched = [];
  }

  function hasDirectText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.nodeValue.trim().length > 0) return true;
    }
    return false;
  }
  function actualFontSize(el) {
    var cs = parseFloat(window.getComputedStyle(el).fontSize) || 0;
    var ow = el.offsetWidth;
    if (ow > 0) {
      var rw = el.getBoundingClientRect().width;
      if (rw > 0) cs = cs * (rw / ow);
    }
    return cs;
  }
  function collect() {
    var out = [], els = document.body.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], tag = el.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'SVG' || tag === 'PATH') continue;
      if (el.closest && el.closest('#font-switcher')) continue;
      if (!hasDirectText(el)) continue;
      if (actualFontSize(el) < THRESHOLD) out.push(el);
    }
    return out;
  }
  function doApply(f) {
    cache = collect();                 // собираем на чистом DOM → видим настоящие размеры
    // f.scale — явный ручной коэффициент (Zerno/Л&С), иначе авто-компенсация по ширине.
    var factor = f.scale || widthFactor(f.css);
    for (var i = 0; i < cache.length; i++) {
      var el = cache[i];
      var orig = parseFloat(window.getComputedStyle(el).fontSize) || 0;
      el.style.setProperty('font-family', f.css, 'important');
      if (f.weight) el.style.setProperty('font-weight', f.weight, 'important');
      // Компенсируем ширину кеглем; line-height НЕ трогаем (родной = минимум прироста высоты).
      if (factor < 1 && orig > 0) el.style.setProperty('font-size', (orig * factor).toFixed(2) + 'px', 'important');
      el.style.removeProperty('line-height');
      touched.push(el);
    }
  }

  function applyFont(f) {
    clearTouched();                    // всегда сначала откат — collect увидит оригинальные размеры
    activeCss = (f && f.css) || null;
    if (!activeCss) return;            // «Оригинал» — просто откатили и вышли
    doApply(f);
    // Шрифт мог ещё не догрузиться (font-display:swap): тогда ширину мы измерили по
    // запасному шрифту, компенсация неверная — отсюда «то наезжает, то нет после F5».
    // Дожидаемся настоящего шрифта и пересчитываем. Это убирает гонку.
    var fam = f.css.split(',')[0].trim();
    if (document.fonts && document.fonts.load) {
      document.fonts.load('20px ' + fam).then(function () {
        if (activeCss === f.css) { clearTouched(); doApply(f); adjustPad(); }
      }).catch(function () {});
    }
  }
  function buildUI() {
    if (document.getElementById('font-switcher')) return;
    var bar = document.createElement('div');
    bar.id = 'font-switcher';
    var t = document.createElement('span'); t.className = 'fs-title'; t.textContent = 'Шрифт текста:'; bar.appendChild(t);
    FONTS.forEach(function (f, idx) {
      var b = document.createElement('button');
      b.textContent = f.name;
      if (idx === 0) b.className = 'active';
      b.onclick = function () {
        cache = null;                // пересобрать (вдруг Tilda дорисовала)
        applyFont(f);
        var btns = bar.querySelectorAll('button');
        for (var k = 0; k < btns.length; k++) btns[k].className = '';
        b.className = 'active';
      };
      bar.appendChild(b);
    });
    var note = document.createElement('span'); note.className = 'fs-note';
    note.textContent = 'тест шрифтов — переключай кнопками';
    bar.appendChild(note);
    document.body.appendChild(bar);
    adjustPad();
  }

  // отступ под панель = её реальная высота (чтобы контент не наезжал на мобилке)
  function adjustPad() {
    var bar = document.getElementById('font-switcher');
    if (bar) document.body.style.setProperty('padding-top', bar.offsetHeight + 'px', 'important');
  }
  window.addEventListener('resize', adjustPad);
  window.addEventListener('orientationchange', function () { setTimeout(adjustPad, 200); });

  function init() { buildUI(); adjustPad(); }
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  setTimeout(init, 800);
})();
