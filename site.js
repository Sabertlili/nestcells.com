const siteConfig = {
  installUrls: {
    en: "https://github.com/Sabertlili/signalwall/blob/main/docs/ai-assisted-install.en.md",
    fr: "https://github.com/Sabertlili/signalwall/blob/main/docs/ai-assisted-install.fr.md"
  },
  releaseUrls: {
    portable: "https://github.com/Sabertlili/signalwall/releases/download/v0.3.0/SignalWallPortable-v0.3.0-win-x64.zip"
  },
  translations: {
    en: {
      metaDescription: "SignalWall is a free, open-source, typography-first live wallpaper system with independent controls for every Windows screen.",
      pageTitle: "SignalWall - Typography-first live wallpapers for Windows",
      navDemo: "Live demo",
      navControl: "Control center",
      navTrust: "Trust",
      navInstall: "Install",
      heroEyebrow: "Typography-first · Windows · Multi-monitor",
      heroLead: "Turn every screen into a living thought.",
      heroBody: "Per-screen quotes, themes, timing, and motion, built for calm multi-monitor desks and shareable as one preset.",
      heroPrimary: "Get SignalWall",
      heroSecondary: "Try the live demo",
      trustOne: "No telemetry",
      trustTwo: "MIT licensed",
      trustThree: "Agent-verifiable",
      scrollLabel: "See it move",
      stripOne: "Typography, not video",
      stripTwo: "Independent screens",
      stripThree: "Shareable presets",
      stripFour: "Agent-verifiable source",
      demoLabel: "Live product demo",
      demoTitle: "Three displays. One system.",
      demoIntro: "Change the mode, color, tempo, and transition. This is the same wallpaper engine bundled with SignalWall.",
      leftDisplay: "Left display",
      centerDisplay: "Center display",
      rightDisplay: "Right display",
      designNote: "Design note",
      focusNote: "Focus note",
      systemsNote: "Systems note",
      themeLabel: "Theme",
      paperTheme: "Paper",
      nightTheme: "Night",
      quotesLabel: "Quotes",
      sameMode: "Same",
      differentMode: "Different",
      tempoLabel: "Tempo",
      fastTempo: "Fast",
      slowTempo: "Slow",
      transitionLabel: "Transition",
      riseTransition: "Rise",
      slideTransition: "Slide",
      controlLabel: "New in v0.3",
      controlTitle: "The control center now lives inside SignalWall.",
      controlBody: "Open it from the tray. Reorder screens, tune motion, create themes, and import or export complete presets from one place.",
      controlPointOne: "Global or per-screen quote and color themes",
      controlPointTwo: "Five seconds to five minutes per quote",
      controlPointThree: "Light and dark control-center themes",
      controlPointFour: "Shareable preset files for complete setups",
      controlAlt: "SignalWall control center with settings and three screen columns",
      controlCaption: "Everything in one place. No Lively dependency.",
      featuresLabel: "A different wallpaper category",
      featuresTitle: "The words are the visual.",
      featureOneTitle: "Typography-first",
      featureOneBody: "Quotes, hierarchy, rhythm, and contrast are the medium, not an overlay on another wallpaper.",
      featureTwoTitle: "Per-screen logic",
      featureTwoBody: "Run one thought everywhere or assign each physical display its own quote pack and visual role.",
      featureThreeTitle: "Portable setups",
      featureThreeBody: "Export quotes, themes, screen order, timing, and motion as one shareable preset.",
      featureFourTitle: "Motion with restraint",
      featureFourBody: "Particles, grid, progress, and transitions are adjustable or removable.",
      trustLabel: "Proof, not promises",
      trustTitle: "Every release leaves a verifiable trail.",
      trustIntro: "SignalWall publishes the evidence needed to inspect what was built, where it came from, and whether a download changed in transit.",
      proofOneTitle: "Signed provenance",
      proofOneBody: "GitHub and Sigstore bind each binary to its public workflow and commit.",
      proofTwoTitle: "SPDX SBOM",
      proofTwoBody: "Every release includes a machine-readable software bill of materials.",
      proofThreeTitle: "Tests and CodeQL",
      proofThreeBody: "Configuration, monitor mapping, builds, and static analysis run in public.",
      proofFourTitle: "Local verification",
      proofFourBody: "Check hashes and provenance yourself without disabling Windows security.",
      verifyLabel: "Verify a downloaded artifact",
      copyVerify: "Copy command",
      copyDone: "Copied",
      installLabel: "Install with eyes open",
      installTitle: "Let the source prove itself.",
      installIntro: "Windows Smart App Control blocks unsigned desktop apps on strict systems. We do not ask you to disable it. Use the agent-verifiable source workflow today while we pursue free open-source signing through SignPath Foundation.",
      recommendedLabel: "Recommended now",
      sourceInstallTitle: "Agent-verifiable source install",
      sourceInstallBody: "Give Codex or Claude Code a purpose-built prompt to inspect the repository, review dependencies and workflows, build locally, and report security findings before launch.",
      sourceInstallCta: "Open the audit prompt",
      releaseLabel: "For compatible systems",
      releaseTitle: "GitHub release",
      releaseBody: "Portable package, installer, checksums, SBOM, release manifest, and signed build provenance. Windows binaries remain unsigned.",
      downloadCta: "Download portable v0.3",
      releaseCta: "All release files",
      inspectLabel: "For developers",
      inspectTitle: "Inspect everything",
      inspectBody: "Read the architecture, security policy, roadmap, CI, CodeQL, and release scripts.",
      inspectCta: "Browse source",
      closingLabel: "Signal over noise",
      closingTitle: "Not another video wallpaper. A calmer surface for thought.",
      closingPrimary: "Play with the demo",
      productHuntCta: "See the Product Hunt launch",
      footerCopy: "Typography-first, open source, and intentionally quiet.",
      footerSecurity: "Security"
    },
    fr: {
      metaDescription: "SignalWall est un système Windows gratuit et open source de fonds d’écran dynamiques centrés sur la typographie, avec des réglages indépendants pour chaque écran.",
      pageTitle: "SignalWall - Des fonds d’écran typographiques pour Windows",
      navDemo: "Démo",
      navControl: "Centre de contrôle",
      navTrust: "Confiance",
      navInstall: "Installer",
      heroEyebrow: "Centré sur la typographie · Windows · Multi-écran",
      heroLead: "Transformez chaque écran en une pensée vivante.",
      heroBody: "Citations, thèmes, rythme et mouvement par écran, conçus pour un bureau multi-écran calme et partageables dans un seul preset.",
      heroPrimary: "Obtenir SignalWall",
      heroSecondary: "Essayer la démo",
      trustOne: "Aucune télémétrie",
      trustTwo: "Licence MIT",
      trustThree: "Vérifiable par un agent",
      scrollLabel: "Voir le mouvement",
      stripOne: "La typographie, pas la vidéo",
      stripTwo: "Écrans indépendants",
      stripThree: "Presets partageables",
      stripFour: "Source vérifiable par un agent",
      demoLabel: "Démo interactive",
      demoTitle: "Trois écrans. Un seul système.",
      demoIntro: "Changez le mode, la couleur, le rythme et la transition. C’est le même moteur de fond d’écran que celui intégré à SignalWall.",
      leftDisplay: "Écran gauche",
      centerDisplay: "Écran central",
      rightDisplay: "Écran droit",
      designNote: "Note design",
      focusNote: "Note focus",
      systemsNote: "Note système",
      themeLabel: "Thème",
      paperTheme: "Papier",
      nightTheme: "Nuit",
      quotesLabel: "Citations",
      sameMode: "Même",
      differentMode: "Différentes",
      tempoLabel: "Rythme",
      fastTempo: "Rapide",
      slowTempo: "Lent",
      transitionLabel: "Transition",
      riseTransition: "Montée",
      slideTransition: "Glissement",
      controlLabel: "Nouveau dans v0.3",
      controlTitle: "Le centre de contrôle vit maintenant dans SignalWall.",
      controlBody: "Ouvrez-le depuis la barre système. Réorganisez les écrans, ajustez le mouvement, créez des thèmes et importez ou exportez des presets complets depuis un seul endroit.",
      controlPointOne: "Thèmes de citations et de couleurs globaux ou par écran",
      controlPointTwo: "De cinq secondes à cinq minutes par citation",
      controlPointThree: "Centre de contrôle en thème clair ou sombre",
      controlPointFour: "Fichiers de preset partageables pour une configuration complète",
      controlAlt: "Centre de contrôle SignalWall avec paramètres et trois colonnes d’écran",
      controlCaption: "Tout au même endroit. Aucune dépendance à Lively.",
      featuresLabel: "Une autre catégorie de fond d’écran",
      featuresTitle: "Les mots sont le visuel.",
      featureOneTitle: "Centré sur la typographie",
      featureOneBody: "Les citations, la hiérarchie, le rythme et le contraste sont le médium, pas une couche ajoutée à une autre image.",
      featureTwoTitle: "Logique par écran",
      featureTwoBody: "Affichez une pensée partout ou attribuez à chaque écran physique son pack de citations et son rôle visuel.",
      featureThreeTitle: "Configurations portables",
      featureThreeBody: "Exportez les citations, les thèmes, l’ordre des écrans, le rythme et le mouvement dans un preset partageable.",
      featureFourTitle: "Du mouvement avec retenue",
      featureFourBody: "Les particules, la grille, la progression et les transitions sont réglables ou désactivables.",
      trustLabel: "Des preuves, pas des promesses",
      trustTitle: "Chaque release laisse une trace vérifiable.",
      trustIntro: "SignalWall publie les éléments nécessaires pour inspecter ce qui a été compilé, son origine et l’intégrité du téléchargement.",
      proofOneTitle: "Provenance signée",
      proofOneBody: "GitHub et Sigstore relient chaque binaire à son workflow public et à son commit.",
      proofTwoTitle: "SBOM SPDX",
      proofTwoBody: "Chaque release inclut une nomenclature logicielle lisible par machine.",
      proofThreeTitle: "Tests et CodeQL",
      proofThreeBody: "La configuration, le mapping des écrans, les builds et l’analyse statique sont publics.",
      proofFourTitle: "Vérification locale",
      proofFourBody: "Vérifiez les empreintes et la provenance sans désactiver la sécurité Windows.",
      verifyLabel: "Vérifier un artefact téléchargé",
      copyVerify: "Copier la commande",
      copyDone: "Copié",
      installLabel: "Installer en toute connaissance",
      installTitle: "Laissez la source faire ses preuves.",
      installIntro: "Windows Smart App Control bloque les applications non signées sur les systèmes stricts. Nous ne demandons pas de le désactiver. Utilisez aujourd’hui le parcours source vérifiable par un agent pendant que nous poursuivons une signature open source gratuite auprès de SignPath Foundation.",
      recommendedLabel: "Recommandé maintenant",
      sourceInstallTitle: "Installation source vérifiable par un agent",
      sourceInstallBody: "Donnez à Codex ou Claude Code un prompt conçu pour inspecter le dépôt, examiner les dépendances et les workflows, compiler localement et présenter ses conclusions de sécurité avant le lancement.",
      sourceInstallCta: "Ouvrir le prompt d’audit",
      releaseLabel: "Pour les systèmes compatibles",
      releaseTitle: "Version GitHub",
      releaseBody: "Package portable, installateur, empreintes, SBOM, manifeste et provenance de build signée. Les binaires Windows restent non signés.",
      downloadCta: "Télécharger la version portable v0.3",
      releaseCta: "Tous les fichiers",
      inspectLabel: "Pour les développeurs",
      inspectTitle: "Tout inspecter",
      inspectBody: "Consultez l’architecture, la politique de sécurité, la feuille de route, la CI, CodeQL et les scripts de release.",
      inspectCta: "Parcourir le code",
      closingLabel: "Le signal plutôt que le bruit",
      closingTitle: "Pas un autre fond d’écran vidéo. Une surface plus calme pour vos idées.",
      closingPrimary: "Jouer avec la démo",
      productHuntCta: "Voir le lancement Product Hunt",
      footerCopy: "Centré sur la typographie, open source et volontairement calme.",
      footerSecurity: "Sécurité"
    }
  },
  quotes: {
    en: [
      ["Every pixel argues for attention. Most should lose.", "Design note"],
      ["Attention is the budget. Spend it on meaning.", "Focus note"],
      ["Good systems make the next action obvious.", "Systems note"],
      ["Motion should reveal, not perform.", "Animation note"],
      ["Clarity is a design decision.", "Working principle"],
      ["Do fewer things with more consequence.", "Operating rule"]
    ],
    fr: [
      ["Chaque pixel réclame de l’attention. La plupart devraient perdre.", "Note design"],
      ["L’attention est le budget. Dépensez-la sur ce qui compte.", "Note focus"],
      ["Un bon système rend la prochaine action évidente.", "Note système"],
      ["Le mouvement doit révéler, pas se mettre en scène.", "Note animation"],
      ["La clarté est une décision de design.", "Principe de travail"],
      ["Faites moins de choses, avec plus de conséquences.", "Règle d’action"]
    ]
  }
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.getElementById("ambient");
const context = canvas.getContext("2d");
const heroSignal = document.querySelector(".hero-signal");
const heroSignalLabel = document.getElementById("heroSignalLabel");
const heroSignalQuote = document.getElementById("heroSignalQuote");
const heroSignalAuthor = document.getElementById("heroSignalAuthor");
const heroProgress = document.getElementById("heroProgress");
const demoTool = document.getElementById("demoTool");
const demoQuoteNodes = [...document.querySelectorAll("[data-demo-quote]")];
const demoButtons = [...document.querySelectorAll("[data-demo-theme], [data-demo-mode], [data-demo-tempo], [data-demo-transition]")];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const sourceInstallButton = document.getElementById("sourceInstallButton");
const portableDownloadButton = document.getElementById("portableDownloadButton");
const metaDescription = document.getElementById("metaDescription");
const copyVerifyButton = document.getElementById("copyVerifyBtn");
const verifyCommand = document.getElementById("verifyCommand");

let activeLanguage = getInitialLanguage();
let particles = [];
let heroIndex = -1;
let heroCycleStartedAt = performance.now();
let demoCycleIndex = 0;
let demoCycleStartedAt = performance.now();
let animationFrame = 0;
const heroDuration = 7800;
const demoDurations = { fast: 2400, slow: 7000 };
const demoState = {
  theme: "signal",
  mode: "different",
  tempo: "slow",
  transition: "rise"
};

function getInitialLanguage() {
  const stored = localStorage.getItem("signalwall-language");
  if (stored === "en" || stored === "fr") return stored;
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("signalwall-language", language);
  document.documentElement.lang = language;
  const dictionary = siteConfig.translations[language];

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const value = dictionary[node.dataset.i18nAlt];
    if (value) node.setAttribute("alt", value);
  });

  document.title = dictionary.pageTitle;
  metaDescription.setAttribute("content", dictionary.metaDescription);
  sourceInstallButton.href = siteConfig.installUrls[language];
  portableDownloadButton.href = siteConfig.releaseUrls.portable;

  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  heroIndex = -1;
  heroCycleStartedAt = performance.now();
  demoCycleIndex = 0;
  demoCycleStartedAt = performance.now();
  updateHeroQuote(true);
  renderDemoQuotes(false);
}

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * scale);
  canvas.height = Math.floor(window.innerHeight * scale);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(scale, 0, 0, scale, 0, 0);
  seedParticles();
}

function seedParticles() {
  const count = reducedMotion
    ? 20
    : Math.max(42, Math.floor((window.innerWidth * window.innerHeight) / 30000));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.16,
    size: 1 + Math.random() * 2,
    color: Math.floor(Math.random() * 3)
  }));
}

function drawAmbient() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const colors = [[231, 193, 116], [152, 214, 200], [216, 117, 124]];

  particles.forEach((particle) => {
    if (!reducedMotion) {
      particle.x = wrap(particle.x + particle.vx, -20, window.innerWidth + 20);
      particle.y = wrap(particle.y + particle.vy, -20, window.innerHeight + 20);
    }
    const color = colors[particle.color];
    context.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},0.32)`;
    context.fillRect(particle.x, particle.y, particle.size, particle.size);
  });

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const first = particles[i];
      const second = particles[j];
      const distance = Math.hypot(first.x - second.x, first.y - second.y);
      if (distance < 118) {
        context.strokeStyle = `rgba(255,248,237,${0.05 * (1 - distance / 118)})`;
        context.beginPath();
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
        context.stroke();
      }
    }
  }
}

function updateHeroQuote(force = false, now = performance.now()) {
  const quotes = siteConfig.quotes[activeLanguage];
  const elapsed = Math.max(0, now - heroCycleStartedAt);
  const index = Math.floor(elapsed / heroDuration) % quotes.length;
  const progress = (elapsed % heroDuration) / heroDuration;
  heroProgress.style.transform = `scaleX(${progress})`;

  if (!force && index === heroIndex) return;
  heroIndex = index;
  const [quote, author] = quotes[index];
  heroSignalLabel.textContent = `Signal ${String(index + 1).padStart(2, "0")}`;
  heroSignalQuote.textContent = quote;
  heroSignalAuthor.textContent = author;

  if (!reducedMotion) {
    heroSignal.classList.remove("is-changing");
    void heroSignal.offsetWidth;
    heroSignal.classList.add("is-changing");
  }
}

function renderDemoQuotes(animate = true) {
  const quotes = siteConfig.quotes[activeLanguage];
  demoQuoteNodes.forEach((node, index) => {
    const quoteIndex = demoState.mode === "same"
      ? demoCycleIndex % quotes.length
      : (demoCycleIndex + index) % quotes.length;
    node.textContent = quotes[quoteIndex][0];
  });

  if (!animate || reducedMotion) return;
  demoTool.querySelectorAll(".monitor").forEach((monitor) => {
    monitor.classList.remove("is-switching");
    void monitor.offsetWidth;
    monitor.classList.add("is-switching");
  });
}

function updateDemoButtons() {
  demoTool.dataset.theme = demoState.theme;
  demoTool.dataset.mode = demoState.mode;
  demoTool.dataset.tempo = demoState.tempo;
  demoTool.dataset.transition = demoState.transition;

  demoButtons.forEach((button) => {
    const active =
      button.dataset.demoTheme === demoState.theme ||
      button.dataset.demoMode === demoState.mode ||
      button.dataset.demoTempo === demoState.tempo ||
      button.dataset.demoTransition === demoState.transition;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateDemoClock(now) {
  const duration = demoDurations[demoState.tempo];
  const progress = Math.min(1, Math.max(0, now - demoCycleStartedAt) / duration);
  demoTool.style.setProperty("--demo-progress", `${(progress * 100).toFixed(2)}%`);

  if (progress >= 1) {
    demoCycleIndex += 1;
    demoCycleStartedAt = now;
    demoTool.style.setProperty("--demo-progress", "0%");
    renderDemoQuotes(true);
  }
}

function animate(now) {
  drawAmbient();
  updateHeroQuote(false, now);
  updateDemoClock(now);
  animationFrame = requestAnimationFrame(animate);
}

function resetDemoCycle(resetQuotes = false) {
  if (resetQuotes) demoCycleIndex = 0;
  demoCycleStartedAt = performance.now();
  demoTool.style.setProperty("--demo-progress", "0%");
}

function wrap(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const previousMode = demoState.mode;
    const previousTempo = demoState.tempo;
    if (button.dataset.demoTheme) demoState.theme = button.dataset.demoTheme;
    if (button.dataset.demoMode) demoState.mode = button.dataset.demoMode;
    if (button.dataset.demoTempo) demoState.tempo = button.dataset.demoTempo;
    if (button.dataset.demoTransition) demoState.transition = button.dataset.demoTransition;

    resetDemoCycle(previousMode !== demoState.mode || previousTempo !== demoState.tempo);
    updateDemoButtons();
    renderDemoQuotes(true);
  });
});

copyVerifyButton.addEventListener("click", async () => {
  const command = verifyCommand.textContent.trim();
  try {
    await navigator.clipboard.writeText(command);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = command;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
  copyVerifyButton.textContent = siteConfig.translations[activeLanguage].copyDone;
  window.setTimeout(() => {
    copyVerifyButton.textContent = siteConfig.translations[activeLanguage].copyVerify;
  }, 3500);
});

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pagehide", () => cancelAnimationFrame(animationFrame));

applyLanguage(activeLanguage);
updateDemoButtons();
resizeCanvas();
animationFrame = requestAnimationFrame(animate);
