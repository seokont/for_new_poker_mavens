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
        // { selector: ".card", transform: "scale(0.7512, 1.0556)" },
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
        // { selector: ".raisebox", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn1", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn2", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn3", transform: "scale(0.7512, 1.0556)" },
        { selector: ".commandbtn4", transform: "scale(0.7512, 1.0556)" },
        { selector: ".tooltip", transform: "scale(0.7512, 1.0556)" },
      ];
      if (matrix && matrix.scaleX === 1.33143) {
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
  const div = document.getElementById("mControlsHideBtn");
  if (div) {
    const btn = div.querySelector("button");
    if (btn) {
      btn.textContent = "Close chat";
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
      btn.style.fontWeight = "bold";
      clearInterval(interval);
    }
  }
}, 100);

const interval_2 = setInterval(() => {
  const div_2 = document.getElementById("ConnectFullBtn");
  if (div_2) {
    const btn_2 = div_2.querySelector("button");
    if (btn_2 && !btn_2.disabled) {
      console.log("Кнопка найдена, имитируем нажатие...");

      // Сначала touch события (для мобильных)
      btn_2.dispatchEvent(
        new TouchEvent("touchstart", { bubbles: true, cancelable: true })
      );
      btn_2.dispatchEvent(
        new TouchEvent("touchend", { bubbles: true, cancelable: true })
      );

      // Затем мышиные (для безопасности)
      btn_2.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true, cancelable: true })
      );
      btn_2.dispatchEvent(
        new MouseEvent("mouseup", { bubbles: true, cancelable: true })
      );
      btn_2.dispatchEvent(
        new MouseEvent("click", { bubbles: true, cancelable: true })
      );

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
  const div = document.getElementById("RingObserveBtn");
  if (div) {
    const btn = div.querySelector("button");
    if (btn) {
      btn.textContent = "Register";

      btn.style.color = "white";

      clearInterval(interval_7);
    }
  }
}, 100);

const interval_8 = setInterval(() => {
  const div = document.getElementById("mControlsUnhideBtn");
  if (div) {
    const btn = div.querySelector("button");
    if (btn) {
      btn.innerHTML =
        '<img src="https://i.ibb.co/dwKPpDJH/free-icon-consulting-message-84139-negate.png" width="25" alt="Open chat" class="chat-icon">';

      btn.style.width = "41px";
      btn.style.height = "41px";
      btn.style.borderRadius = "50px";

      btn.style.display = "grid";
      btn.style.alignItems = "center";
      btn.style.justifyItems = "center";
      clearInterval(interval_8);
    }
  }
}, 100);

// const interval_9 = setInterval(() => {
//   const hide = (el) => el?.style.setProperty("display", "block", "important");
//   const mo = new MutationObserver(() =>
//     hide(document.getElementById("mControlsUnhideBtn"))
//   );
//   mo.observe(document.documentElement, { childList: true, subtree: true });
//   hide(document.getElementById("mControlsUnhideBtn"));
//   clearInterval(interval_9);
// }, 100);

// const interval_10 = setInterval(() => {
//   const hide_2 = (el) => el?.style.setProperty("display", "none", "important");
//   const mo = new MutationObserver(() =>
//     hide_2(document.getElementById("OpenTableControls"))
//   );
//   mo.observe(document.documentElement, { childList: true, subtree: true });

//   hide_2(document.getElementById("OpenTableControls"));
//   clearInterval(interval_10);
// }, 100);

// Автоматический запуск при загрузке DOM
document.addEventListener("DOMContentLoaded", function () {
  window.seatObserver = new SeatTextObserver();

  // Для отладки
  console.log(
    "SeatTextObserver запущен. Наблюдаем за .sp_name.center в .hide контейнерах"
  );
});

// Также запускаем если DOM уже загружен
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initObserver);
} else {
  window.seatObserver = new SeatTextObserver();
}
