document.addEventListener("DOMContentLoaded", () => {
  // === обрабатываем все контейнеры с id вида R#... ===
  const ROOTS_SELECTOR = '[id^="R#"]';

  // ====== КОНФИГ (твой, без изменений по значениям) ======
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

  // ====== НАСТРОЙКИ ======
  const TOL = 2, MIN_REAPPLY_MS = 80, POLL_EVERY_MS = 80;
  const PURE_HIDE_ONLY = true;    // только class="hide" без id и без других классов
  const DIRECT_ONLY = true;       // .sp_graphic — прямой ребёнок

  // ====== УТИЛИТЫ ======
  const log = (...a) => console.log("[multi-root]", ...a);
  const px = v => (typeof v === "string" && v.endsWith("px")) ? parseFloat(v) : NaN;
  const closeTo = (a,b,t=TOL) => Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=t;

  const isPureHide = el =>
    el && el.nodeType === 1 && !el.id && el.classList?.length === 1 && el.classList.contains("hide");

  function hasSpGraphic(el) {
    if (!el) return false;
    if (DIRECT_ONLY) {
      for (const ch of el.children) {
        if (ch.classList && ch.classList.contains("sp_graphic")) return true;
      }
      return false;
    }
    return !!el.querySelector(".sp_graphic");
  }

  function isTargetHide(el) {
    if (!el.classList?.contains("hide")) return false;
    if (PURE_HIDE_ONLY && !isPureHide(el)) return false;
    return hasSpGraphic(el);
  }

  function readPosComputed(el) {
    const cs = getComputedStyle(el);
    const l = px(cs.left), t = px(cs.top);
    if (Number.isFinite(l) && Number.isFinite(t)) return { left: Math.round(l), top: Math.round(t) };
    return { left: NaN, top: NaN };
  }
  function readPosRect(el) {
    const rect = el.getBoundingClientRect();
    const parent = el.offsetParent || el.parentElement || document.documentElement;
    const pr = parent.getBoundingClientRect ? parent.getBoundingClientRect() : { left:0, top:0 };
    return { left: Math.round(rect.left - pr.left), top: Math.round(rect.top - pr.top) };
  }
  const readPos = el => {
    const a = readPosComputed(el);
    return (Number.isFinite(a.left) && Number.isFinite(a.top)) ? a : readPosRect(el);
  };

  function ensureAbsoluteAtCurrent(el) {
    const cs = getComputedStyle(el);
    if (cs.position === "" || cs.position === "static" || cs.position === "relative") {
      const base = readPos(el);
      el.style.position = "absolute";
      if (Number.isFinite(base.left) && Number.isFinite(base.top)) {
        el.style.left = base.left + "px";
        el.style.top  = base.top  + "px";
      }
    }
  }

  // ====== ЛОГИКА ДЛЯ ОДНОГО КОРНЯ ======
  function runForRoot(root) {
    if (!root?.isConnected) return;

    // локальные помощники (в пределах root / его parentSelector)
    function countTargetHides(scopeEl) {
      const scope = scopeEl || root;
      let n = 0;
      scope.querySelectorAll(".hide").forEach(el => {
        if (isTargetHide(el) && getComputedStyle(el).display !== "none") n++;
      });
      return n;
    }

    function pickScenario(entry) {
      // считаем hide внутри parentSelector, но ОТНОСИТЕЛЬНО root
      const parent = entry.parentSelector ? root.querySelector(entry.parentSelector) : root;
      const cnt = countTargetHides(parent);
      const map = entry.scenarios || {};
      const chosen = map[String(cnt)] || map["default"];
      // лог
      console.log("[multi-root] root:", root.id || root,
                  "| entry:", entry.name, "| hide+graphic:", cnt,
                  "| scenario:", map[String(cnt)] ? String(cnt) : (chosen ? "default" : "none"));
      return chosen || null;
    }

    function matchTargetIndex(pos, targets) {
      for (let i=0;i<targets.length;i++){
        const t = targets[i];
        if (closeTo(pos.left,t.left) && closeTo(pos.top,t.top)) return i;
      }
      return -1;
    }

    function setPercent(el, perc) {
      if (perc.left != null) el.style.left = perc.left + "%";
      if (perc.top  != null) el.style.top  = perc.top  + "%";
    }

    function applyPercentForIndex(el, entry, idx, percents) {
      if (idx < 0 || idx >= percents.length) return false;
      const last = Number(el.dataset._pctAt || 0);
      if (Date.now() - last < MIN_REAPPLY_MS) return false;

      ensureAbsoluteAtCurrent(el);
      el.dataset._pctLock = "1";
      setPercent(el, percents[idx]);
      el.dataset._pctAt = String(Date.now());
      setTimeout(() => { delete el.dataset._pctLock; }, MIN_REAPPLY_MS);
      console.log("[multi-root] SET%", entry.name, "idx", idx, "=>", percents[idx], "in", root.id || root);
      return true;
    }

    function processElement(el, entry) {
      if (!el || el.dataset._pctLock) return;
      // если это .hide — обязателен фильтр (чистый + sp_graphic)
      if (el.classList?.contains("hide") && !isTargetHide(el)) return;
      if (getComputedStyle(el).display === "none") return;

      const sc = pickScenario(entry);
      if (!sc || !sc.targets || !sc.percents || sc.targets.length !== sc.percents.length) return;

      const pos = readPos(el);
      const idx = matchTargetIndex(pos, sc.targets);
      if (idx >= 0) applyPercentForIndex(el, entry, idx, sc.percents);
    }

    function attachWatch(el, entry) {
      if (!el || el._pctAttached) return;
      el._pctAttached = true;

      const mo = new MutationObserver(() => processElement(el, entry));
      mo.observe(el, { attributes: true, attributeFilter: ["style", "class"] });

      let lastTick = 0;
      function tick(ts) {
        if (!el.isConnected) return;
        if (ts - lastTick >= POLL_EVERY_MS) { lastTick = ts; processElement(el, entry); }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    function getCandidates(entry) {
      const set = new Set();
      // множественные
      entry.selectorsAll?.forEach(sel => root.querySelectorAll(sel).forEach(el => set.add(el)));
      // одиночные (берём первый найденный в root)
      entry.selectors?.forEach(sel => { const el = root.querySelector(sel); if (el) set.add(el); });
      // parent + index (относительно root)
      if (entry.parentSelector && Number.isInteger(entry.childIndex)) {
        const parent = root.querySelector(entry.parentSelector);
        if (parent) {
          const kids = Array.from(parent.children);
          const el = kids[entry.childIndex];
          if (el) set.add(el);
        }
      }
      return Array.from(set);
    }

    // init по корню
    ENTRIES.forEach(entry => {
      const els = getCandidates(entry);
      els.forEach(el => { processElement(el, entry); attachWatch(el, entry); });
    });

    // отслеживаем добавления внутри корня
    const ro = new MutationObserver(muts => {
      for (const m of muts) {
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          ENTRIES.forEach(entry => {
            entry.selectorsAll?.forEach(sel => {
              if (n.matches?.(sel)) { processElement(n, entry); attachWatch(n, entry); }
              n.querySelectorAll?.(sel).forEach(el => { processElement(el, entry); attachWatch(el, entry); });
            });
            entry.selectors?.forEach(sel => {
              if (n.matches?.(sel)) { processElement(n, entry); attachWatch(n, entry); }
              const q = n.querySelector?.(sel); if (q) { processElement(q, entry); attachWatch(q, entry); }
            });
            if (entry.parentSelector && n.matches?.(entry.parentSelector)) {
              const kids = Array.from(n.children);
              const el = kids[entry.childIndex];
              if (el) { processElement(el, entry); attachWatch(el, entry); }
            }
          });
        }
      }
    });
    ro.observe(root, { childList:true, subtree:true });
  }

  // запустить для всех текущих корней
  document.querySelectorAll(ROOTS_SELECTOR).forEach(runForRoot);

  // если новые корни появляются динамически
  const bodyObs = new MutationObserver(muts => {
    for (const m of muts) {
      for (const n of m.addedNodes) {
        if (n.nodeType !== 1) continue;
        if (n.matches?.(ROOTS_SELECTOR)) runForRoot(n);
        n.querySelectorAll?.(ROOTS_SELECTOR).forEach(runForRoot);
      }
    }
  });
  bodyObs.observe(document.body, { childList:true, subtree:true });

  console.log("[multi-root] initialized for roots", ROOTS_SELECTOR);
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





