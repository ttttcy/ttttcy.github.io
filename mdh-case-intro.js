(function () {
  const style = document.createElement("style");
  style.textContent = `
    .deck-stage { position: relative; }
    .client-experience-gate {
      position: absolute;
      inset: 0;
      z-index: 10;
      display: grid;
      place-items: center;
      padding: clamp(16px, 4vw, 42px);
      background: rgba(5, 8, 15, 0.72);
      backdrop-filter: blur(8px);
    }
    .client-experience-dialog {
      width: min(460px, 100%);
      box-sizing: border-box;
      padding: clamp(20px, 3vw, 34px);
      border: 1px solid rgba(79, 230, 243, 0.5);
      border-radius: 8px;
      background: rgba(8, 16, 29, 0.94);
      box-shadow: 0 20px 54px rgba(0, 0, 0, 0.38);
      color: #f7fbff;
      text-align: center;
      animation: clientTipIn 420ms ease-out both;
    }
    .client-experience-dialog h2 {
      margin: 0;
      font-size: clamp(1.25rem, 2.6vw, 2rem);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .client-experience-dialog p {
      margin: 8px 0 20px;
      color: rgba(247, 251, 255, 0.72);
      font-size: clamp(0.78rem, 1.4vw, 0.95rem);
      font-weight: 700;
    }
    .client-confirm-button { min-width: 156px; }
    @keyframes clientTipIn {
      from { opacity: 0; transform: translateY(-6px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  const showcaseTitle = document.querySelector(".showcase-copy h2");
  if (showcaseTitle) {
    showcaseTitle.innerHTML = "Media Detective Hub (MDH)<br>智媒侦察局";
  }

  let acceptedCase = "";

  function syncClientGate() {
    const inner = document.querySelector(".slide-screen-inner");
    const current = inner?.querySelector(".slide-layer-current");
    const stage = inner?.closest(".deck-stage");
    const caseName = document.getElementById("caseTitle")?.textContent || "case";
    const firstSlide = current?.getAttribute("alt") === "PPT slide 1";
    const existing = stage?.querySelector(".client-experience-gate");
    const advance = document.getElementById("slideAdvance");

    if (advance) {
      advance.disabled = Boolean(firstSlide && acceptedCase !== caseName);
    }

    if (!firstSlide || !stage || acceptedCase === caseName) {
      existing?.remove();
      return;
    }

    if (existing) {
      return;
    }

    const panel = document.createElement("div");
    panel.className = "client-experience-gate";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");

    const dialog = document.createElement("div");
    dialog.className = "client-experience-dialog";

    const heading = document.createElement("h2");
    heading.textContent = "客户端使用效果更佳";

    const english = document.createElement("p");
    english.textContent = "Best experienced in the client";

    const button = document.createElement("button");
    button.className = "nav-button client-confirm-button";
    button.type = "button";
    button.textContent = "确定 / Confirm";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      acceptedCase = caseName;
      if (advance) {
        advance.disabled = false;
      }
      panel.remove();
    });

    dialog.append(heading, english, button);
    panel.appendChild(dialog);
    stage.appendChild(panel);
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest?.("#backHome, #homeStep, #homeFromResult, #restartCase")) {
      acceptedCase = "";
    }
  }, true);

  new MutationObserver(syncClientGate).observe(document.body, {
    childList: true,
    subtree: true
  });
  syncClientGate();
})();
