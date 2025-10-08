document.addEventListener("DOMContentLoaded", () => {

  const ENTRIES = [
    {
      name: "el50",
      selectors: ["div:nth-child(3) > div:nth-child(50)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 49,
      scenarios: {
        "2": { targets:[{left:7,top:192},{left:562,top:192}], percents:[{left:4,top:52},{left:78.5,top:52}] },
        "3": { targets:[{left:27,top:102},{left:285,top:341},{left:543,top:102}], percents:[{left:4,top:52},{left:41,top:77},{left:78.5,top:52}] },
        "4": { targets:[{left:27,top:102},{left:27,top:282},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:78.5,top:52},{left:76,top:30}] },
        "5": { targets:[{left:27,top:102},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:41,top:77},{left:78.5,top:52},{left:76,top:30}] },
        "6": { targets:[{left:166,top:52},{left:7,top:192},{left:166,top:341},{left:403,top:341},{left:562,top:192},{left:403,top:52}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el62",
      selectors: ["div:nth-child(3) > div:nth-child(62)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 61,
      scenarios: {
        "2": { targets:[{left:7,top:192},{left:562,top:192}], percents:[{left:4,top:52},{left:78.5,top:52}] },
        "3": { targets:[{left:27,top:102},{left:285,top:341},{left:543,top:102}], percents:[{left:4,top:52},{left:41,top:77},{left:78.5,top:52}] },
        "4": { targets:[{left:27,top:102},{left:27,top:282},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:78.5,top:52},{left:76,top:30}] },
        "5": { targets:[{left:27,top:102},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:41,top:77},{left:78.5,top:52},{left:76,top:30}] },
        "6": { targets:[{left:166,top:52},{left:7,top:192},{left:166,top:341},{left:403,top:341},{left:562,top:192},{left:403,top:52}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el74",
      selectors: ["div:nth-child(3) > div:nth-child(74)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 73,
      scenarios: {
        "3": { targets:[{left:27,top:102},{left:285,top:341},{left:543,top:102}], percents:[{left:4,top:52},{left:41,top:77},{left:78.5,top:52}] },
        "4": { targets:[{left:27,top:102},{left:27,top:282},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:78.5,top:52},{left:76,top:30}] },
        "5": { targets:[{left:27,top:102},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:41,top:77},{left:78.5,top:52},{left:76,top:30}] },
        "6": { targets:[{left:166,top:52},{left:7,top:192},{left:166,top:341},{left:403,top:341},{left:562,top:192},{left:403,top:52}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el86",
      selectors: ["div:nth-child(3) > div:nth-child(86)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 85,
      scenarios: {
        "4": { targets:[{left:27,top:102},{left:27,top:282},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:78.5,top:52},{left:76,top:30}] },
        "5": { targets:[{left:27,top:102},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:41,top:77},{left:78.5,top:52},{left:76,top:30}] },
        "6": { targets:[{left:166,top:52},{left:7,top:192},{left:166,top:341},{left:403,top:341},{left:562,top:192},{left:403,top:52}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el98",
      selectors: ["div:nth-child(3) > div:nth-child(98)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 97,
      scenarios: {
        "5": { targets:[{left:27,top:102},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:41,top:77},{left:78.5,top:52},{left:76,top:30}] },
        "6": { targets:[{left:166,top:52},{left:7,top:192},{left:166,top:341},{left:403,top:341},{left:562,top:192},{left:403,top:52}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el110",
      selectors: ["div:nth-child(3) > div:nth-child(110)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 109,
      scenarios: {
        "6": { targets:[{left:166,top:52},{left:7,top:192},{left:166,top:341},{left:403,top:341},{left:562,top:192},{left:403,top:52}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el122",
      selectors: ["div:nth-child(3) > div:nth-child(122)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 121,
      scenarios: {
        "7": { targets:[{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102}], percents:[{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30}] },
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el134",
      selectors: ["div:nth-child(3) > div:nth-child(134)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 133,
      scenarios: {
        "8": { targets:[{left:166,top:52},{left:27,top:102},{left:27,top:282},{left:166,top:341},{left:403,top:341},{left:543,top:282},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] },
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "el146",
      selectors: ["div:nth-child(3) > div:nth-child(146)"],
      parentSelector: "div:nth-child(3)",
      childIndex: 145,
      scenarios: {
        "9": { targets:[{left:166,top:52},{left:27,top:102},{left:7,top:192},{left:27,top:282},{left:285,top:341},{left:543,top:282},{left:562,top:192},{left:543,top:102},{left:403,top:52}], percents:[{left:14,top:15},{left:6,top:30},{left:4,top:52},{left:5,top:68},{left:41,top:77},{left:77,top:68},{left:78.5,top:52},{left:76,top:30},{left:69,top:15}] }
      }
    },
    {
      name: "dealers",
      selectorsAll: [".dealer"],
      parentSelector: "div:nth-child(3)",
      scenarios: {
        "2": { targets:[{left:533,top:212},{left:145,top:212}], percents:[{left:66,top:49},{left:27,top:47}] },
        "3": { targets:[{left:516,top:137},{left:260,top:314},{left:162,top:137}], percents:[{left:66,top:49},{left:48,top:69},{left:30,top:49}] },
        "4": { targets:[{left:516,top:137},{left:516,top:276},{left:162,top:276},{left:162,top:137}], percents:[{left:66,top:25},{left:66,top:47},{left:30,top:47},{left:30,top:25}] },
        "5": { targets:[{left:516,top:137},{left:516,top:276},{left:260,top:314},{left:162,top:276},{left:162,top:137}], percents:[{left:66,top:25},{left:66,top:47},{left:48,top:69},{left:30,top:47},{left:30,top:25}] },
        "6": { targets:[{left:375,top:74},{left:533,top:212},{left:375,top:323},{left:303,top:323},{left:145,top:212},{left:303,top:74}], percents:[{left:66,top:23},{left:66,top:45},{left:66,top:60},{left:30,top:60},{left:30,top:45},{left:30,top:23}] },
        "7": { targets:[{left:516,top:137},{left:533,top:212},{left:516,top:276},{left:260,top:314},{left:162,top:276},{left:145,top:212},{left:162,top:137}], percents:[{left:66,top:23},{left:66,top:45},{left:66,top:60},{left:48,top:69},{left:30,top:60},{left:30,top:45},{left:30,top:23}] },
        "8": { targets:[{left:375,top:74},{left:516,top:137},{left:516,top:276},{left:375,top:323},{left:303,top:323},{left:162,top:276},{left:162,top:137},{left:303,top:74}], percents:[{left:66,top:6},{left:66,top:23},{left:66,top:45},{left:66,top:60},{left:30,top:60},{left:30,top:45},{left:30,top:23},{left:30,top:6}] },
        "9": { targets:[{left:375,top:74},{left:516,top:137},{left:516,top:276},{left:375,top:323},{left:260,top:314},{left:303,top:323},{left:162,top:276},{left:162,top:137},{left:303,top:74}], percents:[{left:66,top:6},{left:66,top:23},{left:66,top:45},{left:66,top:60},{left:48,top:69},{left:30,top:60},{left:30,top:45},{left:30,top:23},{left:30,top:6}] }
      }
    }
  ];

 /* ===== НАСТРОЙКИ И ФЛАГИ ===== */
  const ROOTS_SELECTOR   = '[id^="R#"]';  // корни вида R#000000006 …
  const TOL              = 4;             // допуск по пикселям
  const STRICT_HIDE_ONLY = true;          // считать только «чистые» .hide (без id, без других классов)
  const DIRECT_GRAPHIC   = false;         // .sp_graphic может быть вложенным потомком
  const DEBUG            = false;         // включи true, если хочешь логи

  const log = (...a) => DEBUG && console.log("[fast]", ...a);

  /* ===== УТИЛИТЫ (дешёвые) ===== */
  const isNumber = v => typeof v === "number" && Number.isFinite(v);
  const closeTo  = (a,b,t=TOL) => isNumber(a) && isNumber(b) && Math.abs(a-b) <= t;

  // читаем позицию: inline px -> computed px -> rect (как fallback)
  function readInlinePx(el) {
    const L = el.style?.left?.trim() || "", T = el.style?.top?.trim() || "";
    const lp = L.endsWith("px") ? parseFloat(L) : NaN;
    const tp = T.endsWith("px") ? parseFloat(T) : NaN;
    return { left: isNumber(lp) ? Math.round(lp) : NaN, top: isNumber(tp) ? Math.round(tp) : NaN, src:"inline" };
  }
  function readComputedPx(el) {
    const cs = getComputedStyle(el);
    const L = cs.left?.trim() || "", T = cs.top?.trim() || "";
    const lp = L.endsWith("px") ? parseFloat(L) : NaN;
    const tp = T.endsWith("px") ? parseFloat(T) : NaN;
    return { left: isNumber(lp) ? Math.round(lp) : NaN, top: isNumber(tp) ? Math.round(tp) : NaN, src:"computed" };
  }
  function readRectRelative(el) {
    const r = el.getBoundingClientRect();
    const p = el.offsetParent || el.parentElement || document.documentElement;
    const pr = p.getBoundingClientRect ? p.getBoundingClientRect() : { left:0, top:0 };
    return { left: Math.round(r.left - pr.left), top: Math.round(r.top - pr.top), src:"rect" };
  }
  function readBestPos(el) {
    const a = readInlinePx(el);   if (isNumber(a.left) && isNumber(a.top)) return a;
    const b = readComputedPx(el); if (isNumber(b.left) && isNumber(b.top)) return b;
    return readRectRelative(el);
  }

  function ensureAbsoluteAtCurrent(el) {
    const cs = getComputedStyle(el);
    if (cs.position === "" || cs.position === "static" || cs.position === "relative") {
      const base = readRectRelative(el);
      el.style.position = "absolute";
      el.style.left = base.left + "px";
      el.style.top  = base.top  + "px";
    }
  }

  // hide-фильтры
  const isPureHide = el => el && el.nodeType === 1 && !el.id && el.classList?.length === 1 && el.classList.contains("hide");
  function hasSpGraphic(el) {
    if (!el) return false;
    if (DIRECT_GRAPHIC) {
      for (const ch of el.children) if (ch.classList?.contains("sp_graphic")) return true;
      return false;
    }
    return !!el.querySelector(".sp_graphic");
  }
  const isTargetHideStrict = el => isPureHide(el) && hasSpGraphic(el);
  const isTargetHideSoft   = el => el.classList?.contains("hide") && hasSpGraphic(el);

  /* ===== ПО КАЖДОМУ КОРНЮ: КЭШ И ФУНКЦИИ ===== */
  const roots = [];
  const rootDirtyHide = new WeakMap();    // root -> dirty flag for hide count
  const rootHideCount = new WeakMap();    // root -> {strict,soft} cache
  const rootEntries   = new WeakMap();    // root -> resolved candidates per entry
  const pendingJobs   = new Set();        // batched elements to (re)process

  function getRoots() {
    const list = document.querySelectorAll(ROOTS_SELECTOR);
    return list.length ? Array.from(list) : [document]; // fallback: весь документ
  }

  function countHides(root, parentSel) {
    if (!rootDirtyHide.get(root) && rootHideCount.get(root)) return rootHideCount.get(root);
    const scope = parentSel ? root.querySelector(parentSel) : root;
    let strict = 0, soft = 0;
    if (scope) {
      scope.querySelectorAll(".hide").forEach(el => {
        if (getComputedStyle(el).display === "none") return;
        if (isTargetHideStrict(el)) strict++;
        if (isTargetHideSoft(el))   soft++;
      });
    }
    const val = { strict, soft };
    rootHideCount.set(root, val);
    rootDirtyHide.set(root, false);
    return val;
  }

  function pickScenario(root, entry) {
    const cnt = countHides(root, entry.parentSelector);
    const key = String(STRICT_HIDE_ONLY ? cnt.strict : cnt.soft);
    const sc  = (entry.scenarios || {})[key] || (entry.scenarios || {})["default"] || null;
    return sc; // {targets, percents}
  }

  function matchIndex(pos, targets) {
    for (let i=0;i<targets.length;i++) {
      const t = targets[i];
      if (closeTo(pos.left, t.left) && closeTo(pos.top, t.top)) return i;
    }
    return -1;
  }

  function setPercent(el, p) {
    if (p.left != null) el.style.left = p.left + "%";
    if (p.top  != null) el.style.top  = p.top  + "%";
  }

  function applyPercent(el, perc) {
    ensureAbsoluteAtCurrent(el);
    el.dataset._pctLock = "1";
    setPercent(el, perc);
    el.dataset._pctAt = String(Date.now());
    // снимаем лок чуть позже, чтобы не ловить эха
    queueMicrotask(() => { delete el.dataset._pctLock; });
  }

  function processElement(root, el, entry) {
    if (!el || !el.isConnected || el.dataset._pctLock) return;

    // .hide — пропускаем нецелевые (экономим расчёты)
    if (el.classList?.contains("hide")) {
      if (STRICT_HIDE_ONLY && !isTargetHideStrict(el)) return;
      if (!STRICT_HIDE_ONLY && !isTargetHideSoft(el)) return;
    }

    if (getComputedStyle(el).display === "none") return;

    const sc = pickScenario(root, entry);
    if (!sc || !sc.targets || !sc.percents || sc.targets.length !== sc.percents.length) return;

    const posA = readInlinePx(el);
    let idx = matchIndex(posA, sc.targets);
    if (idx < 0) {
      const posB = readComputedPx(el);
      idx = matchIndex(posB, sc.targets);
      if (idx < 0) {
        const posC = readRectRelative(el);
        idx = matchIndex(posC, sc.targets);
      }
    }
    if (idx >= 0) applyPercent(el, sc.percents[idx]);
  }

  // батчер — обрабатываем элементы пачкой (один layout-проход вместо десятков)
  let scheduled = false;
  function schedule(el, root, entry) {
    pendingJobs.add({ el, root, entry });
    if (scheduled) return;
    scheduled = true;
    // максимально дешёвая батч-очередь
    setTimeout(() => {
      const jobs = Array.from(pendingJobs);
      pendingJobs.clear();
      scheduled = false;
      for (const { el, root, entry } of jobs) processElement(root, el, entry);
    }, 0);
  }

  // разрешаем кандидатов для entry в конкретном корне (один раз)
  function resolveCandidates(root, entry) {
    const set = new Set();
    entry.selectorsAll?.forEach(sel => root.querySelectorAll(sel).forEach(n => set.add(n)));
    entry.selectors?.forEach(sel => { const n = root.querySelector(sel); if (n) set.add(n); });
    if (entry.parentSelector && Number.isInteger(entry.childIndex)) {
      const p = root.querySelector(entry.parentSelector);
      if (p) { const kids = p.children; const n = kids[entry.childIndex]; if (n) set.add(n); }
    }
    return Array.from(set);
  }

  // инициализация по корню
  function initRoot(root) {
    rootDirtyHide.set(root, true);
    const map = new Map(); // entryName -> [nodes]
    ENTRIES.forEach(entry => {
      const nodes = resolveCandidates(root, entry);
      map.set(entry.name, nodes);
      nodes.forEach(n => schedule(n, root, entry));
    });
    rootEntries.set(root, map);
  }

  // обновить root при изменениях .hide (пересчитать сценарии и переобработать кандидатов)
  function refreshRootForHideChanges(root) {
    rootDirtyHide.set(root, true);
    const map = rootEntries.get(root);
    if (!map) return;
    ENTRIES.forEach(entry => {
      const nodes = map.get(entry.name) || [];
      nodes.forEach(n => schedule(n, root, entry));
    });
  }

  // глобальный наблюдатель
  const MO = new MutationObserver(muts => {
    let anyHideChange = false;
    for (const m of muts) {
      // интересуют только ELEMENT узлы
      if (m.type === "childList") {
        // добавление/удаление .hide влияет на сценарий
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.classList?.contains("hide") || n.querySelector?.(".hide")) anyHideChange = true;
          // новые корни
          if (n.matches?.(ROOTS_SELECTOR)) { initRoot(n); }
          n.querySelectorAll?.(ROOTS_SELECTOR).forEach(initRoot);
        }
        for (const n of m.removedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.classList?.contains("hide") || n.querySelector?.(".hide")) anyHideChange = true;
        }
      } else if (m.type === "attributes") {
        const el = m.target;
        // смена display/class у .hide — может поменять их количество
        if (el.classList?.contains("hide")) anyHideChange = true;

        // если элемент — один из кандидатов, обработаем точечно
        // найдём, к какому root он относится (ближайший предок-root либо документ)
        let root = el.closest(ROOTS_SELECTOR) || document;
        const map = rootEntries.get(root);
        if (!map) continue;

        ENTRIES.forEach(entry => {
          const nodes = map.get(entry.name);
          if (!nodes) return;
          if (nodes.includes(el)) schedule(el, root, entry);
        });
      }
    }
    if (anyHideChange) {
      // обновляем все затронутые корни (быстро: лишь отметим "грязно" и батч-обработаем кандидатов)
      const currentRoots = getRoots();
      currentRoots.forEach(refreshRootForHideChanges);
    }
  });
  MO.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"]
  });

  // старт
  const startRoots = getRoots();
  startRoots.forEach(r => { roots.push(r); initRoot(r); });
  log("ready, roots:", roots.map(r => r.id || "(document)"));
});
//-------------------------------------------------------------------------------------------------------------------


function parseMatrix(transformString) {
  if (!transformString || !transformString.startsWith("matrix")) return null;

  const values = transformString
    .match(/matrix\(([^)]+)\)/)[1]
    .split(",")
    .map((v) => parseFloat(v.trim()));

  return {
    scaleX: values[0],
    scaleY: values[3],
  };
}

function watchTransformChanges(selector, targetScaleY = 0.94732) {
  let lastTransform = "";

  const check = () => {
    const el = document.querySelector(selector);
    if (!el) return;


    const currentTransform = getComputedStyle(el).transform;
    if (currentTransform !== lastTransform) {
      lastTransform = currentTransform;

      const matrix = parseMatrix(currentTransform);

      const targets = [
        { selector: ".dealer", transform: "scale(0.7512, 1.0556)" },
        { selector: ".sp_graphic", transform: "scale(0.7512, 1.0556)" },
        { selector: ".sp_seat", transform: "scale(0.7512, 1.0556)" },
        { selector: ".runtwice", transform: "scale(0.7512, 1.0556)" },
        { selector: ".outnextblind", transform: "scale(0.7512, 1.0556)" },
        { selector: ".outnexthand", transform: "scale(0.7512, 1.0556)" },
        { selector: ".bannerleft", transform: "scale(0.7512, 1.0556)" },
        { selector: ".bannerleft2", transform: "scale(0.7512, 1.0556)" },
        { selector: ".bannermiddle", transform: "scale(0.7512, 1.0556)" },
        { selector: ".bannerright", transform: "scale(0.7512, 1.0556)" },
        { selector: ".bannerright2", transform: "scale(0.7512, 1.0556)" },
        { selector: ".card", transform: "scale(0.7512, 1.0556)" },
        { selector: ".foldanybet", transform: "scale(0.7512, 1.0556)" },
        { selector: ".outnexthand", transform: "scale(0.7512, 1.0556)" },
        { selector: ".outnextblind", transform: "scale(0.7512, 1.0556)" },
        { selector: ".straddle", transform: "scale(0.7512, 1.0556)" },
        { selector: ".icmchop", transform: "scale(0.7512, 1.0556)" },
        { selector: ".runtwice", transform: "scale(0.7512, 1.0556)" },
        { selector: ".outnextblind", transform: "scale(0.7512, 1.0556)" },
        { selector: ".tablemessage", transform: "scale(0.7512, 1.0556)" },
        { selector: ".betbtn1", transform: "scale(0.7512, 1.0556)" },
        { selector: ".betbtn2", transform: "scale(0.7512, 1.0556)" },
        { selector: ".betbtn3", transform: "scale(0.7512, 1.0556)" },
        { selector: ".betbtn4", transform: "scale(0.7512, 1.0556)" },
        { selector: ".endbreak", transform: "scale(0.7512, 1.0556)" },
        { selector: ".nextPanel", transform: "scale(0.7512, 1.0556)" },
        { selector: ".timebankbtn", transform: "scale(0.7512, 1.0556)" },
        { selector: ".raisebox", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn1", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn2", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn3", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn4", transform: "scale(0.7512, 1.0556)" },
        { selector: ".tooltip", transform: "scale(0.7512, 1.0556)" },
      ];
      if (matrix &&  matrix.scaleX === 1.33143) {
        targets.forEach(({ selector, transform }) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el) => {
            el.style.setProperty("transform", transform, "important");
          });
        });
      } else {
        targets.forEach(({ selector, transform }) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el) => {
            el.style.setProperty("transform", "scale(1.2, 1.2)", "important");
          });
        });
      }
    }
  };

  setInterval(check, 100);
}

window.addEventListener("load", () => {
  watchTransformChanges(".tablecontent", 0.94732);
});

const interval = setInterval(() => {
  const div = document.getElementById('mControlsHideBtn');
  if (div) {
    const btn = div.querySelector('button');
    if (btn) {
      btn.textContent = 'Close chat';
      btn.style.backgroundColor = 'red';
      btn.style.color = 'white';
 btn.style.fontWeight= 'bold';
      clearInterval(interval);
    }
  }
}, 100);

const interval_2 = setInterval(() => {
  const div_2 = document.getElementById('ConnectFullBtn');
  if (div_2) {
    const btn_2 = div_2.querySelector('button');
    if (btn_2 && !btn_2.disabled) {
      console.log('Кнопка найдена, имитируем нажатие...');

      // Сначала touch события (для мобильных)
      btn_2.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, cancelable: true }));
      btn_2.dispatchEvent(new TouchEvent('touchend', { bubbles: true, cancelable: true }));

      // Затем мышиные (для безопасности)
      btn_2.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
      btn_2.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
      btn_2.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

      clearInterval(interval_2);
    }
  }
}, 100);

const interval_3 = setInterval(() => {
  const elements = document.querySelectorAll(".grid_data > div > div");
  const sendToServer = (index) => {
    let name = "";
    const text = elements[index].textContent.trim();
    if (
      /^#\d{4}$/.test(text) ||
      /^#\d{5}$/.test(text) ||
      /^#A\d{5} Private$/.test(text) ||
      text.includes("#")
    ) {
      name = text;
    } else {
      let y = index;
      for (let i = 0; i < 6; i++) {
        y = y - 22;
        if (elements[y].textContent.trim().includes("#")) {
          name = elements[y].textContent.trim();
          break;
        }
      }
    }

    fetch("https://playesop.com/api/v1/ring-game/send-value", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: name,
        name: params.loginName ? params.loginName : "",
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  if (elements.length > 0) {
    elements.forEach((el, index) => {
      if (el.textContent.trim() === "") {
      }

      el.addEventListener("mousedown", () => sendToServer(index));
      el.addEventListener("mouseup", (e) => e.preventDefault());

      el.addEventListener("touchstart", () => sendToServer(index), {
        passive: true,
      });
      el.addEventListener("touchend", (e) => e.preventDefault());
    });

    clearInterval(interval_3);
  }
}, 100);

const interval_4 = setInterval(() => {
  const elements = Array.from(document.querySelectorAll(".dialog")).filter(
    (el) =>
      (el.id.includes("R#") || el.id.includes("T#")) &&
      !el.hasAttribute("data-listener-added")
  );

  if (elements.length > 0) {
    elements.forEach((el) => {
      el.setAttribute("data-listener-added", "true");

      const sendToServer = (event) => {
        const clickedEl = event.target.closest(".dialog");
        if (
          clickedEl &&
          (clickedEl.id.includes("R#") || clickedEl.id.includes("T#"))
        ) {
          console.log("Клик по элементу с id:", clickedEl.id);

          fetch("https://playesop.com/api/v1/ring-game/send-value", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              value: clickedEl.id.slice(1).includes("-")
                ? clickedEl.id.slice(1).split("-")[0]
                : clickedEl.id.slice(1),
              name: params.loginName ? params.loginName : "",
            }),
          })
            .then((res) => res.json())
            .catch((err) => console.error(err));
        }
      };

      el.addEventListener("mousedown", sendToServer);
      el.addEventListener("mouseup", (e) => e.preventDefault());
      el.addEventListener("touchstart", sendToServer, { passive: true });
      el.addEventListener("touchend", (e) => e.preventDefault());
    });
  }
}, 100);

const interval_7 = setInterval(() => {
  const div = document.getElementById('RingObserveBtn');
  if (div) {
    const btn = div.querySelector('button');
    if (btn) {
      btn.textContent = 'Register';
   
      btn.style.color = 'white';
    
      clearInterval(interval_7);
    }
  }
}, 100);


const interval_8 = setInterval(() => {
  const div = document.getElementById('mControlsUnhideBtn');
  if (div) {
    const btn = div.querySelector('button');
    if (btn) {
      btn.innerHTML = '<img src="https://i.ibb.co/dwKPpDJH/free-icon-consulting-message-84139-negate.png" width="25" alt="Open chat" class="chat-icon">';
   
      btn.style.width= '41px';
      btn.style.height= '41px';
      btn.style.borderRadius= '50px';

   btn.style.display= 'grid';
   btn.style.alignItems= 'center';
   btn.style.justifyItems= 'center';    
      clearInterval(interval_8);
    }
  }
}, 100);

const interval_9 = setInterval(() => {
  const hide = (el) => el?.style.setProperty('display','block','important');
  const mo = new MutationObserver(() => hide(document.getElementById('mControlsUnhideBtn')));
  mo.observe(document.documentElement, { childList: true, subtree: true });
  hide(document.getElementById('mControlsUnhideBtn'));
 clearInterval(interval_9);
}, 100);

const interval_10 = setInterval(() => { 
const hide_2 = (el) => el?.style.setProperty('display','none','important');
const mo = new MutationObserver(() => hide_2(document.getElementById('OpenTableControls')));
mo.observe(document.documentElement, { childList: true, subtree: true });
// сразу попробовать скрыть
hide_2(document.getElementById('OpenTableControls'));
 clearInterval(interval_10);
}, 100);
//--------------------------------------------------------------------------------------------------------------------
class SeatTextObserver {
  constructor() {
    this.observers = new Map();
    this.init();
  }

  // Инициализация наблюдения
  init() {
    // Находим все контейнеры .hide
    const hideContainers = document.querySelectorAll('.hide');
    
    hideContainers.forEach(container => {
      this.observeContainer(container);
    });

    // Также наблюдаем за появлением новых .hide элементов
    this.observeNewContainers();
  }

  // Наблюдение за конкретным контейнером
  observeContainer(container) {


    // Находим элемент .sp_name.center внутри контейнера
    const nameElement = container.querySelector('.sp_name.center');
    const nameElement_2 = container.querySelector('.sp_info.center');
    const nameElement_3 = container.querySelector('.sp_seat');
    const nameElement_4 = container.querySelector('.sp_avatar');
    
    if (!nameElement) return;

    // Проверяем сразу есть ли текст
    this.checkAndColorize(nameElement_3, nameElement);
    this.checkStyleName(nameElement)
    this.checkStyleInfo(nameElement_2)
    this.checkStyleAvatar(nameElement_3, nameElement)

    // Создаем наблюдатель для изменений текста
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'characterData' || mutation.type === 'childList') {
       
        this.checkAndColorize(nameElement_3, nameElement);
        this.checkStyleName(nameElement)
        this.checkStyleInfo(nameElement_2)
        this.checkStyleAvatar(nameElement_3, nameElement )
        }
      });
    });

    // Начинаем наблюдение
    observer.observe(nameElement, {
      characterData: true,
      childList: true,
      subtree: true
    });

    // Сохраняем наблюдатель
    this.observers.set(container, observer);
  }

  // Наблюдение за появлением новых .hide элементов
  observeNewContainers() {
    const bodyObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.classList.contains('hide')) {
              this.observeContainer(node);
            }
            
            // Также проверяем вложенные .hide элементы
            if (node.querySelectorAll) {
              const nestedHides = node.querySelectorAll('.hide');
             
              nestedHides.forEach(container => {
                if (!this.observers.has(container)) {

                  this.observeContainer(container);
                }
              });
            }
          });
        }
      });
    });

    bodyObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }


  positionHide(element,element_2) {
    const hasText = element_2.textContent.trim() !== '';    
    if (hasText) {
      element.style.background = 'linear-gradient(to bottom, #45484d 0%,#000000 100%)';     
      element.style.padding = '2px';
      element.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2)';
      element.style.fontSize = '18px';
      element.style.height= '80px';
      element.style.width= '160px';
      element.style.borderRadius= '10px';
    } else {
      element.style.background = 'none';
      element.style.boxShadow = 'none';
      element.style.color = '';
      element.style.padding = '';
      element.style.borderRadius = '';
 //  element.style.background = 'linear-gradient(to bottom, #45484d 0%,#000000 100%)';
    }
  }



checkAndColorize(element,element_2) {
    const hasText = element_2.textContent.trim() !== '';
    
    if (hasText) {
      element.style.background = 'linear-gradient(to bottom, #45484d 0%,#000000 100%)';     
      element.style.padding = '2px';
      element.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2)';
      element.style.fontSize = '18px';
      element.style.height= '80px';
      element.style.width= '160px';
      element.style.borderRadius= '10px';
    } else {
      element.style.background = 'none';
      element.style.boxShadow = 'none';
      element.style.color = '';
      element.style.padding = '';
      element.style.borderRadius = '';
   // element.style.background = 'linear-gradient(to bottom, #45484d 0%,#000000 100%)';
    }
  }



  checkStyleName(element) {
    const hasText = element.textContent.trim() !== '';    
    if (hasText) {     
       element.style.color = '#fff';     
      element.style.fontSize = '18px';   
      element.style.setProperty('left', '0px', 'important');
      
      element.style.width= '95%';
      element.style.padding= '20px 2px 5px 2px';
      element.style.fontSize= '25px';
      element.style.height= '25px';
   //   element.style.backgroundColor = '#000';
element.style.textShadow = '1px 1px 2px #000';
    } else {   
   //    element.style.backgroundColor = 'rgba(0,0,0,0)';  
      element.style.color = '';
      element.style.padding = '';
      element.style.borderRadius = '';
    }
  }


  checkStyleInfo(element) {
    const hasText = element.textContent.trim() !== '';    
    if (hasText) {     
      element.style.color = '#000';       
      element.style.fontSize = '18px';   
      element.style.width= '95%';
      element.style.padding= '23px 2px 5px 2px';
      element.style.setProperty('left', '0px', 'important'); 
      element.style.fontSize= '25px';
      element.style.height= '25px';
      element.style.marginTop= '10px';
    } else {     
      element.style.color = '';
      element.style.padding = '';
      element.style.borderRadius = '';
    }
  }

  checkStyleAvatar(element, element_2) {
    const hasText = element_2.textContent.trim() !== '';    
    if (hasText) { 
  let pos = getComputedStyle(element.querySelector(".sp_avatar")).backgroundPosition.split(',')[0].trim(); 
  const m = pos.match(/(-?\d+(?:\.\d+)?)px\s+(-?\d+(?:\.\d+)?)px/i);
  if (!m) return; 

  const x = parseFloat(m[1]);
  const y = parseFloat(m[2]); 
  const newX = - (Math.abs(x) / 32) * 115;
 if (!Math.abs(newX  - Math.round(newX )) > 1e-4) {    
      element.querySelector(".sp_avatar").style.setProperty('background-position', `${newX}px ${y}px`, 'important');
}  
      element.querySelector(".sp_avatar").style.setProperty('background-color', 'rgba(0,0,0,.5)', 'important');
      element.querySelector(".sp_avatar").style.setProperty('display', 'block', 'important');
    } else {     
       element.querySelector(".sp_avatar").style.setProperty('display', 'none', 'important');
    }
  }



  // Остановка всех наблюдателей
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Автоматический запуск при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
  window.seatObserver = new SeatTextObserver();
  
  // Для отладки
  console.log('SeatTextObserver запущен. Наблюдаем за .sp_name.center в .hide контейнерах');
});

// Также запускаем если DOM уже загружен
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initObserver);
} else {
  window.seatObserver = new SeatTextObserver();
}





