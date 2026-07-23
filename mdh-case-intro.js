(function () {
  const assets = {
    manualPdf: "/assets/learning-resources/organizer-operation-manual-participant-action-record.pdf",
    flowchartZh: "/assets/learning-resources/45-minute-flowchart-zh.webp",
    flowchartEn: "/assets/learning-resources/45-minute-flowchart-en.webp"
  };
  const style = document.createElement("style");
  style.textContent = `
    .learning-resources {
      display: grid;
      grid-template-columns: minmax(250px, .8fr) minmax(0, 1.2fr);
      gap: clamp(18px, 3vw, 38px);
      align-items: center;
      margin-bottom: 18px;
      padding: clamp(20px, 3vw, 32px) 0;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .resource-intro h2 {
      margin: 6px 0 0;
      font-size: clamp(1.25rem, 2.2vw, 1.8rem);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .resource-intro p:last-child {
      margin: 10px 0 0;
      color: var(--muted);
      font-size: .9rem;
      line-height: 1.6;
    }
    .resource-download {
      display: grid;
      grid-template-columns: 34px minmax(0, 1fr) auto;
      gap: 12px;
      align-items: center;
      min-height: 64px;
      padding: 10px 13px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 6px;
      background: rgba(12,18,29,.78);
      color: var(--text);
      text-decoration: none;
    }
    .resource-download:hover,
    .resource-download:focus-visible {
      border-color: var(--cyan);
      background: rgba(79,230,243,.08);
      outline: none;
    }
    .download-symbol {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(79,230,243,.12);
      color: var(--cyan);
      font-size: 1.2rem;
      font-weight: 900;
    }
    .resource-name {
      display: grid;
      gap: 3px;
      min-width: 0;
    }
    .resource-name strong {
      font-size: .9rem;
      line-height: 1.3;
    }
    .resource-name span,
    .resource-meta {
      color: var(--muted);
      font-size: .74rem;
      line-height: 1.3;
    }
    .resource-meta {
      text-align: right;
      white-space: nowrap;
    }
    .deck-stage { position: relative; }
    .deck-stage.has-case-intro {
      min-height: min(76vh, 760px);
    }
    .deck-stage.has-case-intro .slide-screen {
      position: absolute;
      inset: 0;
      height: 100%;
      aspect-ratio: auto;
      opacity: 0;
      pointer-events: none;
    }
    .case-intro-overlay {
      position: absolute;
      inset: 0;
      z-index: 10;
      display: grid;
      min-height: 100%;
      padding: clamp(16px, 3vw, 34px);
      background:
        linear-gradient(90deg, rgba(100,129,158,.1) 1px, transparent 1px),
        linear-gradient(rgba(100,129,158,.1) 1px, transparent 1px),
        #070b13;
      background-size: 30px 30px;
      box-sizing: border-box;
    }
    .case-intro-overlay.is-orientation { place-items: center; }
    .orientation-panel {
      width: min(520px, 100%);
      box-sizing: border-box;
      padding: clamp(20px, 3vw, 34px);
      border: 1px solid rgba(79,230,243,.5);
      border-radius: 8px;
      background: rgba(8,16,29,.94);
      box-shadow: 0 20px 54px rgba(0,0,0,.38);
      color: #f7fbff;
      text-align: center;
      animation: clientTipIn 420ms ease-out both;
    }
    .orientation-panel h2 {
      margin: 0;
      font-size: clamp(1.25rem, 2.6vw, 2rem);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .orientation-panel p {
      margin: 8px 0 0;
      color: rgba(247,251,255,.72);
      font-size: clamp(.78rem, 1.4vw, .95rem);
      font-weight: 700;
    }
    .orientation-panel .client-note {
      margin: 18px 0 22px;
      color: var(--cyan);
    }
    .intro-confirm-button { min-width: 156px; }
    .flowchart-panel {
      display: grid;
      grid-template-rows: auto minmax(0, 1fr) auto;
      gap: 12px;
      width: 100%;
      min-height: 0;
    }
    .flowchart-header,
    .flowchart-actions {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
    }
    .flowchart-header h2 {
      margin: 3px 0 0;
      font-size: clamp(1.05rem, 2vw, 1.55rem);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .flowchart-tabs {
      display: inline-flex;
      flex: 0 0 auto;
      gap: 3px;
      padding: 3px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 6px;
      background: rgba(255,255,255,.05);
    }
    .flowchart-tab {
      min-height: 36px;
      padding: 7px 12px;
      border: 0;
      border-radius: 4px;
      background: transparent;
      color: var(--muted);
      font: inherit;
      font-size: .8rem;
      font-weight: 850;
    }
    .flowchart-tab.is-active {
      background: var(--cyan);
      color: #051018;
    }
    .flowchart-viewport {
      min-height: 0;
      overflow: auto;
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 6px;
      background: #05080f;
    }
    .flowchart-viewport img {
      display: block;
      width: 100%;
      min-width: 760px;
      height: auto;
    }
    .flowchart-actions { justify-content: flex-end; }
    .flowchart-action-group {
      display: flex;
      gap: 8px;
    }
    @keyframes clientTipIn {
      from { opacity: 0; transform: translateY(-6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 1080px) {
      .learning-resources { grid-template-columns: 1fr; }
    }
    @media (max-width: 760px) {
      .learning-resources { gap: 16px; padding: 20px 0; }
      .resource-download { grid-template-columns: 34px minmax(0, 1fr); }
      .resource-meta { grid-column: 2; text-align: left; }
      .site-header,
      .site-header > *,
      .home-showcase,
      .showcase-copy,
      .learning-resources,
      .resource-intro,
      .resource-download,
      .resource-name {
        min-width: 0;
      }
      .site-header h1,
      .site-header .eyebrow,
      .showcase-copy h2,
      .resource-intro h2,
      .resource-name strong,
      .resource-name span,
      .header-note,
      .header-note span {
        overflow-wrap: anywhere;
        word-break: normal;
      }
      .site-header h1 { font-size: clamp(1.65rem, 8vw, 2rem) !important; }
      .showcase-copy h2 { font-size: clamp(1.32rem, 7vw, 1.75rem) !important; }
      .case-intro-overlay { padding: 12px; }
      body.is-presenting .deck-stage.has-case-intro {
        min-height: calc(100svh - 20px);
      }
      .orientation-panel { padding: 22px 16px; }
      .flowchart-header,
      .flowchart-actions {
        align-items: stretch;
        flex-direction: column;
      }
      .flowchart-tabs,
      .flowchart-action-group { width: 100%; }
      .flowchart-tab { flex: 1 1 0; }
      .flowchart-action-group {
        display: grid;
        grid-template-columns: 1fr;
      }
      .flowchart-action-group .nav-button { width: 100%; }
    }
  `;
  document.head.appendChild(style);

  let activeCase = "";
  let introStage = "orientation";
  let flowchartLanguage = "zh";

  function ensureHomeMaterials() {
    const showcaseTitle = document.querySelector(".showcase-copy h2");
    if (showcaseTitle && showcaseTitle.innerHTML !== "Media Detective Hub (MDH)<br>智媒侦察局") {
      showcaseTitle.innerHTML = "Media Detective Hub (MDH)<br>智媒侦察局";
    }

    const caseGrid = document.getElementById("caseGrid");
    if (!caseGrid || document.getElementById("learningResources")) {
      return;
    }

    const section = document.createElement("section");
    section.className = "learning-resources";
    section.id = "learningResources";
    section.setAttribute("aria-labelledby", "resource-title");
    section.innerHTML = `
      <div class="resource-intro">
        <p class="eyebrow">Before learning / 学习前准备</p>
        <h2 id="resource-title">请先下载操作手册与记录表<br>Download the manual and record form first</h2>
        <p>文件包含组织者操作说明与参与者行动记录表，共 27 页。请在案例学习前下载，配合课堂组织、判断记录与学习复盘使用。 / This 27-page file contains organizer guidance and the participant action record form. Download it before learning for facilitation, response tracking, and review.</p>
      </div>
      <a class="resource-download" id="manualDownload" download="Organizer-Operation-Manual-and-Participant-Action-Record.pdf">
        <span class="download-symbol" aria-hidden="true">↓</span>
        <span class="resource-name">
          <strong>组织者操作手册与参与者行动记录表</strong>
          <span>Organizer Operation Manual & Participant Action Record Form</span>
        </span>
        <span class="resource-meta">PDF · 27 页</span>
      </a>
    `;
    section.querySelector("#manualDownload").href = assets.manualPdf || "#";
    caseGrid.before(section);
  }

  function renderOrientation(overlay) {
    overlay.className = "case-intro-overlay is-orientation";
    overlay.dataset.stage = "orientation";
    overlay.innerHTML = `
      <div class="orientation-panel">
        <h2>横屏阅读效果最佳</h2>
        <p>Best viewed in landscape mode</p>
        <p class="client-note">客户端使用效果更佳<br>Best experienced in the client</p>
        <button class="nav-button intro-confirm-button" type="button" id="confirmOrientation">确定 / Confirm</button>
      </div>
    `;
    overlay.querySelector("#confirmOrientation").addEventListener("click", () => {
      introStage = "flowchart";
      renderCaseIntro(overlay);
    });
  }

  function renderFlowchart(overlay) {
    const isChinese = flowchartLanguage === "zh";
    overlay.className = "case-intro-overlay is-flowchart";
    overlay.dataset.stage = "flowchart";
    overlay.dataset.language = flowchartLanguage;
    overlay.innerHTML = `
      <div class="flowchart-panel">
        <div class="flowchart-header">
          <div>
            <span class="stage-label">Learning flow / 学习流程</span>
            <h2>${isChinese ? "45分钟标准教学方案流程图" : "45-Minute Standard Teaching Flowchart"}</h2>
          </div>
          <div class="flowchart-tabs" role="tablist" aria-label="流程图语言 / Flowchart language">
            <button class="flowchart-tab ${isChinese ? "is-active" : ""}" type="button" role="tab" aria-selected="${isChinese}" data-flowchart-language="zh">中文版 / Chinese</button>
            <button class="flowchart-tab ${!isChinese ? "is-active" : ""}" type="button" role="tab" aria-selected="${!isChinese}" data-flowchart-language="en">English / 英文版</button>
          </div>
        </div>
        <div class="flowchart-viewport"><img alt="${isChinese ? "45分钟标准教学方案流程图" : "45-Minute Standard Teaching Flowchart"}"></div>
        <div class="flowchart-actions">
          <div class="flowchart-action-group">
            <button class="nav-button secondary" type="button" id="backToOrientation">返回 / Back</button>
            <button class="nav-button" type="button" id="startCaseLearning">正式进入案例学习 / Enter learning case</button>
          </div>
        </div>
      </div>
    `;
    overlay.querySelector(".flowchart-viewport img").src = isChinese ? assets.flowchartZh : assets.flowchartEn;
    overlay.querySelectorAll("[data-flowchart-language]").forEach((button) => {
      button.addEventListener("click", () => {
        flowchartLanguage = button.dataset.flowchartLanguage;
        renderFlowchart(overlay);
      });
    });
    overlay.querySelector("#backToOrientation").addEventListener("click", () => {
      introStage = "orientation";
      renderOrientation(overlay);
    });
    overlay.querySelector("#startCaseLearning").addEventListener("click", () => {
      introStage = "learning";
      const advance = document.getElementById("slideAdvance");
      const nextStep = document.getElementById("nextStep");
      overlay.closest(".deck-stage")?.classList.remove("has-case-intro");
      if (advance) {
        advance.disabled = false;
      }
      if (nextStep) {
        nextStep.disabled = false;
      }
      overlay.remove();
    });
  }

  function renderCaseIntro(overlay) {
    if (introStage === "orientation") {
      renderOrientation(overlay);
    } else {
      renderFlowchart(overlay);
    }
  }

  function syncCaseIntro() {
    ensureHomeMaterials();

    const inner = document.querySelector(".slide-screen-inner");
    const current = inner?.querySelector(".slide-layer-current");
    const stage = inner?.closest(".deck-stage");
    const caseName = document.getElementById("caseTitle")?.textContent || "case";
    const firstSlide = current?.getAttribute("alt") === "PPT slide 1";
    const existing = stage?.querySelector(".case-intro-overlay");
    const advance = document.getElementById("slideAdvance");
    const nextStep = document.getElementById("nextStep");

    if (!firstSlide || !stage) {
      existing?.remove();
      stage?.classList.remove("has-case-intro");
      return;
    }

    if (caseName !== activeCase) {
      activeCase = caseName;
      introStage = "orientation";
      flowchartLanguage = "zh";
    }

    if (advance) {
      advance.disabled = introStage !== "learning";
    }
    if (nextStep) {
      nextStep.disabled = introStage !== "learning";
    }

    if (introStage === "learning") {
      existing?.remove();
      stage.classList.remove("has-case-intro");
      return;
    }

    stage.classList.add("has-case-intro");
    const overlay = existing || document.createElement("div");
    if (!existing) {
      stage.appendChild(overlay);
    }

    if (overlay.dataset.stage !== introStage ||
        (introStage === "flowchart" && overlay.dataset.language !== flowchartLanguage)) {
      renderCaseIntro(overlay);
    }
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest?.("#backHome, #homeStep, #homeFromResult, #restartCase")) {
      activeCase = "";
      introStage = "orientation";
      flowchartLanguage = "zh";
    }
  }, true);

  new MutationObserver(syncCaseIntro).observe(document.body, {
    childList: true,
    subtree: true
  });
  syncCaseIntro();
})();
