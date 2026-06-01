/* Переключатель шрифтов: применяет выбранный шрифт к обычному тексту (не к заголовкам). */
(function () {
  var THRESHOLD = 26; // фактический отображаемый размер: трогаем только мелкий текст

  // Список шрифтов. css=null — оригинал. Добавляй новые сюда по мере появления.
  var FONTS = [
    { name: 'Оригинал', css: null },
    { name: 'Poiret One', css: "'Poiret One', sans-serif", stroke: '0.4px' },
    { name: 'Onest', css: "'Onest', sans-serif" },
    { name: 'Actay', css: "'Actay', sans-serif" },
    { name: 'Actay Condensed', css: "'Actay Condensed', sans-serif" },
    { name: 'Deledda Open', css: "'Deledda Open', sans-serif" },
    { name: 'Doloman Pavljenko', css: "'Doloman Pavljenko', sans-serif" },
    { name: 'Gothic 60', css: "'Gothic 60', sans-serif" },
    { name: 'Stereonic XS', css: "'Stereonic XS', sans-serif" }
  ];

  var cache = null; // кэш целевых элементов

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
  function applyFont(f) {
    if (!cache) cache = collect();
    for (var i = 0; i < cache.length; i++) {
      var el = cache[i];
      if (f && f.css) {
        el.style.setProperty('font-family', f.css, 'important');
        if (f.weight) el.style.setProperty('font-weight', f.weight, 'important');
        if (f.stroke) { el.style.setProperty('-webkit-text-stroke', f.stroke + ' currentColor'); }
        else { el.style.removeProperty('-webkit-text-stroke'); }
      } else {
        el.style.removeProperty('font-family');
        el.style.removeProperty('font-weight');
        el.style.removeProperty('-webkit-text-stroke');
      }
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
  }

  function init() { buildUI(); }
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
  setTimeout(init, 800);
})();
