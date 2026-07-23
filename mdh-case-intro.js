(function () {
  const assets = {
    manualPdf: "/assets/learning-resources/organizer-operation-manual-participant-action-record.pdf",
    flowchartZh: "/assets/learning-resources/45-minute-flowchart-zh-hd.webp",
    flowchartEn: "/assets/learning-resources/45-minute-flowchart-en-hd.webp",
    questionnaireQr: "/assets/questionnaire/wjx-questionnaire-qr.png",
    questionnaireUrl: "https://v.wjx.cn/vm/O4quBht.aspx"
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
      display: grid;
      place-items: center;
      min-width: 132px;
      min-height: 44px;
      padding: 7px 12px;
      border-radius: 4px;
      background: var(--cyan);
      color: #051018;
      text-align: center;
      white-space: normal;
      box-shadow: 0 8px 24px rgba(79,230,243,.18);
    }
    .resource-meta strong,
    .resource-meta small {
      display: block;
      color: inherit;
      line-height: 1.15;
    }
    .resource-meta strong {
      font-size: .82rem;
      font-weight: 950;
    }
    .resource-meta small {
      margin-top: 2px;
      font-size: .65rem;
      font-weight: 800;
    }
    .questionnaire-followup {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 156px;
      gap: clamp(18px, 3vw, 32px);
      align-items: center;
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid rgba(79,230,243,.34);
    }
    .questionnaire-copy h3 {
      margin: 5px 0 0;
      color: var(--text);
      font-size: clamp(1.2rem, 2vw, 1.6rem);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .questionnaire-copy p {
      max-width: 760px;
      margin: 10px 0 0;
      color: var(--soft);
      font-size: .9rem;
      font-weight: 680;
      line-height: 1.58;
    }
    .questionnaire-copy .questionnaire-note {
      color: #d9fbff;
      font-weight: 800;
    }
    .questionnaire-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-top: 14px;
    }
    .questionnaire-open {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 16px;
      border: 1px solid var(--cyan);
      border-radius: 4px;
      background: var(--cyan);
      color: #051018;
      font-size: .84rem;
      font-weight: 950;
      text-decoration: none;
    }
    .questionnaire-url {
      color: var(--cyan);
      font-size: .78rem;
      font-weight: 800;
      overflow-wrap: anywhere;
    }
    .questionnaire-qr {
      display: grid;
      gap: 7px;
      justify-items: center;
      color: var(--muted);
      font-size: .7rem;
      font-weight: 800;
      text-align: center;
      text-decoration: none;
    }
    .questionnaire-qr img {
      display: block;
      width: 140px;
      height: 140px;
      padding: 7px;
      border: 1px solid rgba(79,230,243,.38);
      border-radius: 4px;
      background: #fff;
      box-sizing: border-box;
      image-rendering: pixelated;
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
      .resource-meta { grid-column: 2; justify-self: start; text-align: left; }
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
      .questionnaire-followup {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-top: 18px;
        padding-top: 18px;
      }
      .questionnaire-qr { justify-self: start; }
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
          <span>Organizer Operation Manual & Participant Action Record Form · PDF · 27 页</span>
        </span>
        <span class="resource-meta"><strong>点击下载</strong><small>Download PDF</small></span>
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

  function ensureResultQuestionnaire() {
    const resultFrame = document.querySelector(".result-screen .result-frame");
    const completeResult = resultFrame?.querySelector(".score-box");
    if (!resultFrame || !completeResult || resultFrame.querySelector(".questionnaire-followup")) {
      return;
    }

    const section = document.createElement("section");
    section.className = "questionnaire-followup";
    section.setAttribute("aria-labelledby", "questionnaire-title");
    section.innerHTML = `
      <div class="questionnaire-copy">
        <span class="stage-label">Learning feedback / 学习反馈</span>
        <h3 id="questionnaire-title">完成学习反馈问卷<br>Complete the learning feedback questionnaire</h3>
        <p class="questionnaire-note">建议完整学习案例 1-5 后统一填写，以便回顾完整的判断变化；如只学习了个别案例，也可以在完成当前案例后填写，请根据实际学习范围作答。</p>
        <p>We recommend completing Cases 1-5 before submitting so you can reflect on the full learning journey. You may also respond after studying selected cases; please answer based on the cases you completed.</p>
        <div class="questionnaire-links">
          <a class="questionnaire-open" target="_blank" rel="noopener noreferrer">填写问卷 / Open questionnaire</a>
          <a class="questionnaire-url" target="_blank" rel="noopener noreferrer">v.wjx.cn/vm/O4quBht.aspx</a>
        </div>
      </div>
      <a class="questionnaire-qr" target="_blank" rel="noopener noreferrer" aria-label="扫描二维码填写问卷 / Scan to open questionnaire">
        <img alt="学习反馈问卷二维码 / Learning feedback questionnaire QR code">
        <span>扫码填写 / Scan to respond</span>
      </a>
    `;
    section.querySelectorAll("a").forEach((link) => {
      link.href = assets.questionnaireUrl;
    });
    section.querySelector("img").src = assets.questionnaireQr;
    resultFrame.appendChild(section);
  }

  function syncCaseIntro() {
    ensureHomeMaterials();
    ensureResultQuestionnaire();

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
