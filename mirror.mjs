// Зеркало главных страниц ecopark-zavidovo.ru -> локальная офлайн-копия (песочница)
// Качаем через curl (Node в сеть не пускают), разбираем/переписываем на Node.
// v2: кавычко-независимый поиск ассетов (Tilda юзает ' и "), пропуск уже скачанного.
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://ecopark-zavidovo.ru";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
const OUT = process.cwd();
const ASSETS = path.join(OUT, "assets");
fs.mkdirSync(ASSETS, { recursive: true });

const PAGES = {
  "/": "index.html",
  "/news": "news.html",
  "/where_eat": "where_eat.html",
  "/where_admire": "where_admire.html",
  "/where_shop": "where_shop.html",
  "/where_fun": "where_fun.html",
  "/privacy": "privacy.html",
};

const log = (...a) => console.log(...a);

function curlTo(url, file) {
  execFileSync("curl", ["-sSL", "--compressed", "-A", UA, "--max-time", "60", url, "-o", file], { stdio: ["ignore", "ignore", "ignore"] });
}
function curlText(url) {
  const tmp = path.join(ASSETS, "_tmp_" + createHash("md5").update(url).digest("hex").slice(0, 8));
  curlTo(url, tmp);
  const t = fs.readFileSync(tmp, "utf8");
  fs.unlinkSync(tmp);
  return t;
}

const assetMap = new Map();
function localNameFor(absUrl) {
  if (assetMap.has(absUrl)) return assetMap.get(absUrl);
  let base = absUrl.split("?")[0].split("#")[0].split("/").pop() || "asset";
  base = base.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-50);
  if (!path.extname(base)) base += ".bin";
  const name = createHash("md5").update(absUrl).digest("hex").slice(0, 8) + "_" + base;
  assetMap.set(absUrl, name);
  return name;
}
function absolutize(u) {
  if (!u) return null;
  u = u.trim();
  if (u.startsWith("//")) return "https:" + u;
  if (u.startsWith("http")) return u;
  if (u.startsWith("/")) return ORIGIN + u;
  return null;
}

const ASSET_EXT = "(?:png|jpe?g|gif|svg|webp|ico|css|js|woff2?|ttf|eot|mp4|webm|mp3)";
// найти все URL ассетов в тексте (без учёта кавычек): абсолютные, протокол-относительные, корневые
const URL_RE = new RegExp(`(?:https?:)?\\/\\/[^\\s"'()]+?\\.${ASSET_EXT}(?:\\?[^\\s"'()]*)?`, "gi");

const downloaded = new Set();
function fetchAsset(absUrl) {
  const name = localNameFor(absUrl);
  const dest = path.join(ASSETS, name);
  if (downloaded.has(absUrl)) return name;
  downloaded.add(absUrl);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    // уже есть — но если css, всё равно надо разобрать вложенные url (один раз)
    if (!name.endsWith(".css")) return name;
  }
  try {
    if (!(fs.existsSync(dest) && fs.statSync(dest).size > 0)) curlTo(absUrl, dest);
    if (name.endsWith(".css")) {
      let css = fs.readFileSync(dest, "utf8");
      let changed = false;
      css = css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (m, q, u) => {
        const a = absolutize(u);
        if (!a || !new RegExp(`\\.${ASSET_EXT}(\\?|$)`, "i").test(a)) return m;
        const ln = fetchAsset(a);
        changed = true;
        return `url(${ln})`;
      });
      if (changed) fs.writeFileSync(dest, css);
    }
    return name;
  } catch {
    log("  ! не скачалось:", absUrl.slice(0, 80));
    return name;
  }
}

function processPage(route, fileName) {
  log(`\n=== ${route} -> ${fileName} ===`);
  let html = curlText(ORIGIN + route);
  log("  размер:", html.length);

  // 1) собрать все URL ассетов, скачать, заменить (кавычко-независимо)
  const urls = new Set();
  let m;
  URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(html))) urls.add(m[0]);
  log("  ассет-URL на странице:", urls.size);
  let done = 0;
  for (const raw of urls) {
    const abs = absolutize(raw);
    if (!abs) continue;
    const ln = fetchAsset(abs);
    html = html.split(raw).join("assets/" + ln);
    if (++done % 50 === 0) log("    скачано", done, "/", urls.size);
  }

  // 2) ленивые картинки: data-original -> локальный src (любые кавычки)
  html = html.replace(/<img\b[^>]*>/gi, (tag) => {
    const dm = tag.match(/data-original=(['"])(assets\/[^'"]+)\1/i);
    if (dm) {
      const local = dm[2];
      if (/\bsrc=(['"])[^'"]*\1/i.test(tag)) tag = tag.replace(/\bsrc=(['"])[^'"]*\1/i, `src="${local}"`);
      else tag = tag.replace(/<img/i, `<img src="${local}"`);
    }
    return tag;
  });

  // 3) внутренние ссылки на скопированные страницы (любые кавычки) + якоря меню
  for (const [r, f] of Object.entries(PAGES)) {
    const target = r === "/" ? "index.html" : f;
    for (const q of ['"', "'"]) {
      html = html.split(`href=${q}${ORIGIN}${r}${q}`).join(`href=${q}${target}${q}`);
      html = html.split(`href=${q}${r}${q}`).join(`href=${q}${target}${q}`);
    }
  }
  for (const q of ['"', "'"]) {
    html = html.split(`href=${q}${ORIGIN}/#`).join(`href=${q}index.html#`);
    html = html.split(`href=${q}${ORIGIN}#`).join(`href=${q}index.html#`);
  }
  // 4) прочие внутренние ссылки (несокпированные новости) -> на живой сайт, в новой вкладке
  html = html.replace(/href=(['"])\/([a-z0-9_-]+)\1/gi, (full, q, slug) => {
    if (PAGES["/" + slug]) return full;
    return `href=${q}${ORIGIN}/${slug}${q} target="_blank" rel="noopener"`;
  });

  fs.writeFileSync(path.join(OUT, fileName), html);
  log("  сохранено ->", fileName);
}

log("Качаю главные страницы и ассеты (v2)...");
for (const [route, file] of Object.entries(PAGES)) {
  try { processPage(route, file); } catch (e) { log("  ОШИБКА", route, e.message); }
}
let total = 0, bytes = 0;
for (const f of fs.readdirSync(ASSETS)) { const s = fs.statSync(path.join(ASSETS, f)); if (s.isFile()) { total++; bytes += s.size; } }
log(`\n✅ Готово. Страниц: ${Object.keys(PAGES).length}, ассетов: ${total}, объём: ${(bytes / 1048576).toFixed(1)} МБ`);
