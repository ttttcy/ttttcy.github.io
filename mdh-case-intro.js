(function () {
  const assets = {
    manualPdf: "/assets/learning-resources/organizer-operation-manual-participant-action-record.pdf",
    flowchartZh: "/assets/learning-resources/45-minute-flowchart-zh-hd.webp",
    flowchartEn: "/assets/learning-resources/45-minute-flowchart-en-hd.webp",
    questionnaireQr: "/assets/questionnaire/wjx-questionnaire-qr.png",
    questionnaireUrl: "https://v.wjx.cn/vm/O4quBht.aspx",
    mdhLogo: "/assets/brand/mdh-round-logo.svg",
    baseLogo: "/assets/brand/swup-media-literacy-base-logo.svg"
  };
  const style = document.createElement("style");
  style.textContent = `
    .home-showcase {
      display: block;
      margin-bottom: 24px;
    }
    .showcase-copy {
      position: relative;
      display: flex;
      min-height: 260px;
      padding: clamp(24px, 4vw, 48px);
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: linear-gradient(105deg, rgba(239,75,79,.13), transparent 38%), linear-gradient(135deg, rgba(79,230,243,.06), transparent 64%), rgba(12,18,29,.86);
      box-shadow: 0 14px 36px rgba(0,0,0,.22);
      flex-direction: column;
      justify-content: space-between;
    }
    .showcase-copy::after {
      position: absolute;
      top: 50%;
      right: clamp(24px, 6vw, 84px);
      color: rgba(243,247,251,.075);
      content: "01 / 05";
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: clamp(4.4rem, 10vw, 9rem);
      font-weight: 950;
      line-height: 1;
      transform: translateY(-50%);
      white-space: nowrap;
    }
    .showcase-copy > * {
      position: relative;
      z-index: 1;
    }
    .showcase-copy > div:first-child { max-width: 760px; }
    .showcase-copy h2 {
      margin: 0;
      color: var(--text);
      font-size: clamp(2rem, 4.8vw, 4.8rem);
      line-height: 1.02;
      letter-spacing: 0;
    }
    .showcase-copy h2 span {
      display: block;
      margin-top: 8px;
      color: var(--cyan);
      font-size: .42em;
      font-weight: 760;
      line-height: 1.1;
    }
    .showcase-copy p {
      max-width: 690px;
      margin: 14px 0 0;
      color: var(--soft);
      font-size: .98rem;
      font-weight: 680;
      line-height: 1.65;
    }
    .showcase-copy .signal-strip {
      width: min(680px, 100%);
      margin-top: 22px;
    }
    .showcase-preview { display: none !important; }
    .case-section-heading {
      display: flex;
      gap: 24px;
      align-items: end;
      justify-content: space-between;
      margin: clamp(28px, 4vw, 44px) 0 15px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--line);
    }
    .case-section-heading h2 {
      margin: 0;
      font-size: clamp(1.3rem, 2.4vw, 1.9rem);
      line-height: 1.18;
      letter-spacing: 0;
    }
    .case-count {
      flex: 0 0 auto;
      color: var(--cyan);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .78rem;
      font-weight: 900;
      line-height: 1.45;
      text-align: right;
    }
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
    .about-us {
      position: relative;
      margin-top: clamp(34px, 5vw, 68px);
      padding: clamp(28px, 4vw, 52px) clamp(18px, 3vw, 36px);
      overflow: hidden;
      border-top: 1px solid rgba(79,230,243,.42);
      border-bottom: 1px solid var(--line);
      background: linear-gradient(135deg, rgba(79,230,243,.06), transparent 34%), rgba(8,13,22,.72);
    }
    .about-us::before {
      position: absolute;
      inset: 0 auto 0 0;
      width: 4px;
      background: linear-gradient(var(--red), var(--cyan), var(--orange));
      content: "";
    }
    .about-heading {
      display: grid;
      grid-template-columns: minmax(230px, .65fr) minmax(0, 1.35fr);
      gap: clamp(20px, 4vw, 56px);
      align-items: end;
      padding-bottom: clamp(24px, 3vw, 38px);
      border-bottom: 1px solid var(--line);
    }
    .about-heading h2 {
      margin: 0;
      font-size: clamp(2rem, 4.4vw, 4.4rem);
      line-height: .98;
      letter-spacing: 0;
    }
    .about-heading h2 span {
      display: block;
      margin-top: 8px;
      color: var(--cyan);
      font-size: .48em;
      line-height: 1.1;
    }
    .about-heading-copy {
      max-width: 720px;
      margin: 0;
      color: var(--soft);
      font-size: clamp(.92rem, 1.4vw, 1.05rem);
      font-weight: 680;
      line-height: 1.72;
    }
    .about-layout {
      display: grid;
      grid-template-columns: minmax(300px, .78fr) minmax(0, 1.22fr);
      gap: clamp(28px, 5vw, 66px);
      padding-top: clamp(26px, 4vw, 46px);
    }
    .about-role-group + .about-role-group {
      margin-top: 24px;
      padding-top: 22px;
      border-top: 1px solid var(--line);
    }
    .about-role-label {
      display: flex;
      gap: 10px;
      align-items: baseline;
      margin: 0 0 10px;
      color: var(--cyan);
      font-size: .78rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .about-role-label span {
      color: var(--muted);
      font-size: .7rem;
      font-weight: 760;
      text-transform: none;
    }
    .team-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .team-person {
      display: grid;
      grid-template-columns: minmax(76px, .24fr) minmax(0, 1fr);
      gap: 14px;
      padding: 11px 0;
      border-bottom: 1px solid rgba(117,152,185,.14);
    }
    .team-person:last-child { border-bottom: 0; }
    .team-person strong {
      display: grid;
      gap: 2px;
      align-content: start;
      color: var(--text);
      font-size: 1rem;
      line-height: 1.45;
    }
    .person-name-en {
      color: var(--cyan);
      font-size: .72rem;
      font-weight: 760;
    }
    .team-affiliation {
      display: grid;
      gap: 3px;
      min-width: 0;
      color: var(--soft);
      font-size: .84rem;
      line-height: 1.55;
    }
    .team-affiliation [lang="en"] {
      color: var(--muted);
      font-size: .76rem;
    }
    .about-base {
      min-width: 0;
      padding-left: clamp(24px, 4vw, 52px);
      border-left: 1px solid var(--line);
    }
    .about-base h3 {
      margin: 0;
      font-size: clamp(1.25rem, 2.3vw, 1.85rem);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .about-base h3 span {
      display: block;
      margin-top: 5px;
      color: var(--cyan);
      font-size: .64em;
      font-weight: 760;
    }
    .base-description {
      margin: 17px 0 0;
      color: var(--soft);
      font-size: .88rem;
      line-height: 1.76;
    }
    .base-description[lang="en"] {
      margin-top: 12px;
      color: var(--muted);
      font-size: .8rem;
    }
    .base-facts {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin: 24px 0 0;
      padding: 0;
      border-top: 1px solid var(--line);
    }
    .base-fact {
      min-width: 0;
      padding: 14px 12px 12px 0;
      border-bottom: 1px solid var(--line);
    }
    .base-fact strong {
      display: block;
      color: var(--cyan);
      font-size: clamp(1.12rem, 2vw, 1.55rem);
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .base-fact span {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: .68rem;
      font-weight: 750;
      line-height: 1.42;
    }
    .brand-footer {
      margin-top: clamp(34px, 5vw, 64px);
      padding: clamp(22px, 3vw, 32px) 0 10px;
      border-top: 1px solid rgba(79,230,243,.42);
    }
    .brand-lockups {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: min(100%, 880px);
      margin: 0 auto;
      border-bottom: 1px solid var(--line);
    }
    .brand-lockup {
      display: grid;
      grid-template-columns: clamp(72px, 7vw, 88px) minmax(0, 1fr);
      gap: clamp(14px, 2vw, 20px);
      align-items: center;
      min-width: 0;
      padding: clamp(14px, 2vw, 20px) 0;
    }
    .brand-lockup + .brand-lockup {
      margin-left: clamp(18px, 3vw, 36px);
      padding-left: clamp(18px, 3vw, 36px);
      border-left: 1px solid var(--line);
    }
    .brand-mark {
      display: grid;
      width: 100%;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 50%;
      aspect-ratio: 1;
      background: #fff;
      place-items: center;
    }
    .brand-lockup:first-child .brand-mark {
      border-radius: 50%;
      background: #050a14;
    }
    .brand-mark img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .brand-lockup:last-child .brand-mark img {
      width: 74%;
      height: 74%;
    }
    .brand-copy { min-width: 0; }
    .brand-copy h3 {
      margin: 0;
      color: var(--text);
      font-size: .92rem;
      line-height: 1.3;
      letter-spacing: 0;
      white-space: nowrap;
    }
    .brand-copy p {
      margin: 6px 0 0;
      color: var(--cyan);
      font-size: .68rem;
      font-weight: 760;
      line-height: 1.5;
      white-space: nowrap;
    }
    .contact-row {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      padding-top: 18px;
      text-align: center;
    }
    .contact-row p {
      margin: 0;
      color: var(--muted);
      font-size: .78rem;
      font-weight: 760;
      line-height: 1.5;
    }
    .contact-email {
      color: var(--cyan);
      font-size: .78rem;
      font-weight: 760;
      text-decoration: none;
      overflow-wrap: anywhere;
    }
    .contact-email:hover,
    .contact-email:focus-visible {
      color: var(--text);
      outline: none;
      text-decoration: underline;
      text-underline-offset: 4px;
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
      .about-heading,
      .about-layout { grid-template-columns: 1fr; }
      .about-base {
        padding-top: 28px;
        padding-left: 0;
        border-top: 1px solid var(--line);
        border-left: 0;
      }
    }
    @media (max-width: 760px) {
      .showcase-copy {
        min-height: 230px;
        padding: 24px 20px;
      }
      .showcase-copy h2 { font-size: clamp(1.8rem, 8vw, 2.8rem) !important; }
      .showcase-copy::after {
        right: 20px;
        font-size: clamp(3.7rem, 17vw, 6rem);
      }
      .case-section-heading {
        align-items: flex-start;
        flex-direction: column;
        gap: 6px;
      }
      .case-count { text-align: left; }
      .learning-resources { gap: 16px; padding: 20px 0; }
      .about-us {
        margin-top: 30px;
        padding: 25px 17px;
      }
      .about-heading h2 { font-size: clamp(2rem, 12vw, 3.1rem); }
      .team-person {
        grid-template-columns: 1fr;
        gap: 4px;
      }
      .base-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .brand-lockups { grid-template-columns: 1fr; }
      .brand-lockup {
        grid-template-columns: 64px minmax(0, 1fr);
        gap: 12px;
      }
      .brand-copy h3 { font-size: .78rem; }
      .brand-copy p { font-size: .58rem; }
      .brand-lockup + .brand-lockup {
        margin-left: 0;
        padding-left: 0;
        border-top: 1px solid var(--line);
        border-left: 0;
      }
      .contact-row {
        flex-direction: column;
        gap: 4px;
      }
      .resource-download { grid-template-columns: 34px minmax(0, 1fr); }
      .resource-meta { grid-column: 2; justify-self: start; text-align: left; }
      .site-header,
      .site-header > *,
      .home-showcase,
      .showcase-copy,
      .learning-resources,
      .resource-intro,
      .resource-download,
      .resource-name,
      .about-us,
      .about-heading,
      .about-layout,
      .about-base,
      .team-person,
      .team-affiliation {
        min-width: 0;
      }
      .site-header h1,
      .site-header .eyebrow,
      .showcase-copy h2,
      .resource-intro h2,
      .resource-name strong,
      .resource-name span,
      .about-heading h2,
      .about-heading-copy,
      .team-affiliation,
      .about-base h3,
      .base-description,
      .header-note,
      .header-note span {
        overflow-wrap: anywhere;
        word-break: normal;
      }
      .site-header h1 { font-size: clamp(1.65rem, 8vw, 2rem) !important; }
      .showcase-copy h2 { font-size: clamp(1.8rem, 8vw, 2.8rem) !important; }
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
    @media (max-width: 480px) {
      .showcase-copy::after { display: none; }
    }
  `;
  document.head.appendChild(style);

  let activeCase = "";
  let introStage = "orientation";
  let flowchartLanguage = "zh";

  function ensureHomeMaterials() {
    const showcase = document.querySelector(".home-showcase");
    const showcaseCopy = showcase?.querySelector(".showcase-copy");
    if (showcaseCopy && showcaseCopy.dataset.homeOptimized !== "true") {
      const copyBlock = showcaseCopy.querySelector("div:first-child");
      if (copyBlock) {
        copyBlock.innerHTML = `
          <p class="eyebrow">Media literacy case lab / 媒介素养案例实验室</p>
          <h2>观察、核验、判断<span lang="en">Observe. Verify. Decide.</span></h2>
          <p>通过五个互动案例识别信息线索、核验证据并审慎作出传播决定。<br><span lang="en">Build stronger media judgment through five interactive cases focused on clues, evidence, and responsible sharing.</span></p>
        `;
      }
      showcaseCopy.dataset.homeOptimized = "true";
    }
    showcase?.querySelector(".showcase-preview")?.remove();

    const caseGrid = document.getElementById("caseGrid");
    if (!caseGrid) {
      return;
    }

    if (!document.getElementById("learningResources")) {
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

    if (!document.getElementById("caseSectionHeading")) {
      const caseHeading = document.createElement("div");
      caseHeading.className = "case-section-heading";
      caseHeading.id = "caseSectionHeading";
      caseHeading.innerHTML = `
        <div>
          <p class="eyebrow">Interactive cases / 互动案例</p>
          <h2>选择案例开始学习 / Choose a case to begin</h2>
        </div>
        <div class="case-count">05 CASES<br>五个案例模块</div>
      `;
      caseGrid.before(caseHeading);
    }

    if (!document.getElementById("aboutUs")) {
      const about = document.createElement("section");
      about.className = "about-us";
      about.id = "aboutUs";
      about.setAttribute("aria-labelledby", "about-title");
      about.innerHTML = `
        <div class="about-heading">
          <div>
            <p class="eyebrow">Production team / 制作团队</p>
            <h2 id="about-title">About us<span>关于我们</span></h2>
          </div>
          <p class="about-heading-copy">由西南政法大学新闻传播学院师生共同策划与制作，依托学校媒介素养科普基地开展内容研发与教学实践。<br><span lang="en">Designed and produced by faculty and students from the School of Journalism and Communication at Southwest University of Political Science and Law, with support from the university's Media Literacy Public Education Base.</span></p>
        </div>
        <div class="about-layout">
          <div class="about-roster">
            <section class="about-role-group" aria-labelledby="lead-label">
              <h3 class="about-role-label" id="lead-label">项目负责人 <span>Project Lead</span></h3>
              <ul class="team-list">
                <li class="team-person"><strong>谭淳允<span class="person-name-en" lang="en">Chunyun Tan</span></strong><span class="team-affiliation">西南政法大学新闻传播学院2026级博士研究生<span lang="en">Doctoral student, 2026 cohort, School of Journalism and Communication, Southwest University of Political Science and Law</span></span></li>
              </ul>
            </section>
            <section class="about-role-group" aria-labelledby="member-label">
              <h3 class="about-role-label" id="member-label">项目成员 <span>Team Members</span></h3>
              <ul class="team-list">
                <li class="team-person"><strong>卢燕燕<span class="person-name-en" lang="en">Yanyan Lu</span></strong><span class="team-affiliation">西南政法大学新闻传播学院2025级新闻学硕士研究生<span lang="en">Master's student in Journalism, 2025 cohort, School of Journalism and Communication, Southwest University of Political Science and Law</span></span></li>
                <li class="team-person"><strong>敬婵瑞<span class="person-name-en" lang="en">Chanrui Jing</span></strong><span class="team-affiliation">西南政法大学新闻传播学院2025级新闻与传播硕士研究生<span lang="en">Master's student in Journalism and Communication, 2025 cohort, School of Journalism and Communication, Southwest University of Political Science and Law</span></span></li>
                <li class="team-person"><strong>闵闻达<span class="person-name-en" lang="en">Wenda Min</span></strong><span class="team-affiliation">西南政法大学新闻传播学院2025级新闻与传播硕士研究生<span lang="en">Master's student in Journalism and Communication, 2025 cohort, School of Journalism and Communication, Southwest University of Political Science and Law</span></span></li>
                <li class="team-person"><strong>高梦媛<span class="person-name-en" lang="en">Mengyuan Gao</span></strong><span class="team-affiliation">西南政法大学新闻传播学院2025级新闻与传播硕士研究生<span lang="en">Master's student in Journalism and Communication, 2025 cohort, School of Journalism and Communication, Southwest University of Political Science and Law</span></span></li>
              </ul>
            </section>
            <section class="about-role-group" aria-labelledby="advisor-label">
              <h3 class="about-role-label" id="advisor-label">指导老师 <span>Academic Advisor</span></h3>
              <ul class="team-list">
                <li class="team-person"><strong>李韧<span class="person-name-en" lang="en">Ren Li</span></strong><span class="team-affiliation">西南政法大学新闻传播学院教授，硕博导师<span lang="en">Professor and supervisor of master's and doctoral students, School of Journalism and Communication, Southwest University of Political Science and Law</span></span></li>
              </ul>
            </section>
          </div>
          <article class="about-base">
            <h3>西南政法大学媒介素养科普基地<span lang="en">SWUPL Media Literacy Public Education Base</span></h3>
            <p class="base-description">依托本校新闻传播学院，西南政法大学媒介素养科普基地于2020年8月获批设立，2025年8月获批成为联合国教科文组织媒介和信息素养联盟（MIL Alliance）成员，聚焦非遗传播、媒介素养科普、国际传播三大科普方向。基地汇聚高层次复合型师资，现有专兼职人员70名，师资力量雄厚，多名骨干入选国家级、省级人才培育项目。基地深耕数字素养提升工作，组织架构完备，具备稳定制度与经费支撑，拥有约500平方米固定活动场地。配套建设重庆市实验教学示范中心——新闻传播实验教学中心，搭建融媒体、人权传播等多个实验平台，配备435套专业影音采编设备，总值约900万元，可自主常态化开展各类媒介素养科普实践活动。</p>
            <p class="base-description" lang="en">Based at the School of Journalism and Communication, the SWUPL Media Literacy Public Education Base was approved in August 2020 and became a member of UNESCO's Media and Information Literacy Alliance (MIL Alliance) in August 2025. Its work focuses on the communication of intangible cultural heritage, media literacy education, and international communication. The Base brings together a multidisciplinary team of highly qualified educators, with 70 full-time and part-time staff members and several key members selected for national and provincial talent-development programs. It has a complete organizational structure, stable institutional and financial support, and approximately 500 square meters of dedicated activity space. Supported by the Chongqing Experimental Teaching Demonstration Center—the Journalism and Communication Experimental Teaching Center—it operates platforms for converged media, human rights communication, and related fields. The Base has 435 sets of professional audiovisual production and editing equipment valued at approximately RMB 9 million, enabling regular, independently organized media literacy education and public-engagement activities.</p>
            <div class="base-facts" aria-label="基地数据 / Base facts">
              <div class="base-fact"><strong>2020.08</strong><span>获批设立 / Base established</span></div>
              <div class="base-fact"><strong>2025.08</strong><span>加入 MIL Alliance / Joined the MIL Alliance</span></div>
              <div class="base-fact"><strong>70</strong><span>专兼职人员 / Full- and part-time staff</span></div>
              <div class="base-fact"><strong>≈500 m²</strong><span>固定活动场地 / Dedicated activity space</span></div>
              <div class="base-fact"><strong>435</strong><span>专业设备 / Professional equipment sets</span></div>
              <div class="base-fact"><strong>≈¥9M</strong><span>设备总值 / Total equipment value</span></div>
            </div>
          </article>
        </div>
      `;
      caseGrid.after(about);
    }

    const aboutSection = document.getElementById("aboutUs");
    if (aboutSection && !document.getElementById("brandFooter")) {
      const footer = document.createElement("footer");
      footer.className = "brand-footer";
      footer.id = "brandFooter";
      footer.setAttribute("aria-label", "合作标志及联系邮箱 / Logos and contact");
      footer.innerHTML = `
        <div class="brand-lockups">
          <div class="brand-lockup">
            <div class="brand-mark">
              <img id="mdhBrandLogo" alt="智媒侦察局标志 / Media Detective Hub logo">
            </div>
            <div class="brand-copy">
              <h3>智媒侦察局</h3>
              <p lang="en">Media Detective Hub (MDH)</p>
            </div>
          </div>
          <div class="brand-lockup">
            <div class="brand-mark">
              <img id="baseBrandLogo" alt="西南政法大学媒介素养科普基地标志 / SWUPL Media Literacy Public Education Base logo">
            </div>
            <div class="brand-copy">
              <h3>西南政法大学媒介素养科普基地</h3>
              <p lang="en">SWUPL Media Literacy Public Education Base</p>
            </div>
          </div>
        </div>
        <div class="contact-row">
          <p>联系邮箱 / Contact email</p>
          <a class="contact-email" href="mailto:pioneer928@163.com">pioneer928@163.com</a>
        </div>
      `;
      footer.querySelector("#mdhBrandLogo").src = assets.mdhLogo;
      footer.querySelector("#baseBrandLogo").src = assets.baseLogo;
      aboutSection.after(footer);
    }
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
