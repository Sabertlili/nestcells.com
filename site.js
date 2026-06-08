const siteConfig = {
  installUrls: {
    en: "https://github.com/Sabertlili/signalwall/blob/main/docs/ai-assisted-install.en.md",
    fr: "https://github.com/Sabertlili/signalwall/blob/main/docs/ai-assisted-install.fr.md"
  },
  sourceUrl: "https://github.com/Sabertlili/signalwall",
  translations: {
    en: {
      metaDescription: "SignalWall by Nestcells is a free, open-source Windows live wallpaper app with an AI-assisted source-first install path.",
      navInstall: "Install",
      navPreview: "Preview",
      navOptions: "Options",
      heroEyebrow: "SignalWall by Nestcells",
      heroLead: "A quiet, open-source live wallpaper app for calm, intentional Windows desktops.",
      primaryCta: "Install with Codex or Claude",
      sourceCta: "View source",
      proofOne: "Multi-display",
      proofTwo: "Source-first install",
      proofThree: "MIT licensed",
      heroNote: "Unsigned alpha. Recommended path: inspect the code, build locally, then launch.",
      previewBadge: "3 displays",
      installLabel: "Source-first install",
      installTitle: "Install after reviewing the source.",
      installIntro: "Use the prompt to have Codex, Claude Code, or another local agent inspect the repository, build locally, and report findings before anything runs.",
      promptLabel: "Codex or Claude prompt",
      promptTitle: "Copy the prompt, review the code, then build.",
      promptBody: "It verifies the repository origin, source code, scripts, signatures, hashes, and build output. It also instructs the agent not to disable Windows security.",
      promptCta: "Open prompt",
      checkOne: "Clone the official repository.",
      checkTwo: "Inspect source, scripts, workflows, and dependencies.",
      checkThree: "Build locally and report findings before launch.",
      capturesLabel: "Product",
      capturesTitle: "One control center for every wallpaper setting.",
      captureWallpaper: "Live quote wallpaper",
      captureControls: "Single control center",
      captureScreens: "Screen order and modes",
      captureWallpaperAlt: "SignalWall quote wallpaper capture",
      captureControlsAlt: "SignalWall customization workflow",
      captureScreensAlt: "SignalWall multi-screen layout modes",
      optionsLabel: "Personalization",
      optionsTitle: "Fine-grained controls without a heavy UI.",
      timingTitle: "Timing",
      timingBody: "Choose quick rotation or slow ambient reading, up to five minutes per quote.",
      screenModeTitle: "Screen modes",
      screenModeBody: "Same quote everywhere or different quotes per monitor.",
      textThemeTitle: "Text themes",
      textThemeBody: "Assign Design, Focus, Strategy, or custom phrase groups.",
      colorThemeTitle: "Color themes",
      colorThemeBody: "Use Signal, Paper Dark, Paper Light, or custom backgrounds as the library grows.",
      motionTitle: "Motion",
      motionBody: "Tune particles, speed, grid opacity, progress, random order, and transitions.",
      orderTitle: "Screen order",
      orderBody: "Map screen 1, 2, and 3 to match your real desk layout.",
      releaseLabel: "Release status",
      releaseTitle: "Free, open source, unsigned alpha.",
      releaseBody: "The release binary remains available for transparency, but reviewing the source and building locally is the recommended route until a signed installer exists.",
      releaseCta: "Open GitHub release"
    },
    fr: {
      metaDescription: "SignalWall par Nestcells est une application gratuite et open source pour des fonds d’écran dynamiques Windows calmes et personnalisables, avec installation assistée depuis la source.",
      navInstall: "Installer",
      navPreview: "Aperçu",
      navOptions: "Options",
      heroEyebrow: "SignalWall par Nestcells",
      heroLead: "Une application open source discrète pour des bureaux Windows calmes, utiles et intentionnels.",
      primaryCta: "Installer avec Codex ou Claude",
      sourceCta: "Voir le code",
      proofOne: "Multi-écran",
      proofTwo: "Installation source",
      proofThree: "Licence MIT",
      heroNote: "Alpha non signée. Chemin recommandé : vérifier le code, compiler localement, puis lancer.",
      previewBadge: "3 écrans",
      installLabel: "Installation depuis la source",
      installTitle: "Installer après revue du code source.",
      installIntro: "Utilisez le prompt pour demander à Codex, Claude Code ou un autre agent local d’inspecter le dépôt, de compiler localement, puis de présenter ses conclusions avant toute exécution.",
      promptLabel: "Instruction Codex ou Claude",
      promptTitle: "Copiez le prompt, vérifiez le code, puis compilez.",
      promptBody: "Il vérifie l’origine du dépôt, le code source, les scripts, les signatures, les empreintes et le résultat du build. Il précise aussi de ne pas désactiver la sécurité Windows.",
      promptCta: "Ouvrir le prompt",
      checkOne: "Cloner le dépôt officiel.",
      checkTwo: "Inspecter le code, les scripts, les workflows GitHub Actions et les dépendances.",
      checkThree: "Compiler localement et présenter le rapport avant lancement.",
      capturesLabel: "Produit",
      capturesTitle: "Un centre de contrôle pour tous les paramètres du fond d’écran.",
      captureWallpaper: "Fond d’écran à citations dynamiques",
      captureControls: "Centre de contrôle unique",
      captureScreens: "Ordre des écrans et modes",
      captureWallpaperAlt: "Capture du fond d’écran SignalWall",
      captureControlsAlt: "Flux de personnalisation SignalWall",
      captureScreensAlt: "Modes multi-écrans SignalWall",
      optionsLabel: "Personnalisation",
      optionsTitle: "Des contrôles précis, sans interface lourde.",
      timingTitle: "Durée",
      timingBody: "Choisissez une rotation rapide ou une lecture lente, jusqu’à cinq minutes par citation.",
      screenModeTitle: "Modes d’écran",
      screenModeBody: "Affichez la même citation partout ou une citation différente par moniteur.",
      textThemeTitle: "Thèmes texte",
      textThemeBody: "Assignez Design, Focus, Strategy ou vos propres groupes de phrases.",
      colorThemeTitle: "Thèmes couleur",
      colorThemeBody: "Utilisez Signal, Paper Dark, Paper Light ou des arrière-plans personnalisés à mesure que la bibliothèque évolue.",
      motionTitle: "Mouvement",
      motionBody: "Ajustez les particules, la vitesse, l’opacité de la grille, la progression, l’aléatoire et les transitions.",
      orderTitle: "Ordre des écrans",
      orderBody: "Associez les écrans 1, 2 et 3 à votre disposition physique.",
      releaseLabel: "Statut de version",
      releaseTitle: "Gratuit, open source, alpha non signée.",
      releaseBody: "Le binaire publié reste disponible par transparence, mais la revue du code source et la compilation locale restent le chemin recommandé jusqu’à l’arrivée d’un installateur signé.",
      releaseCta: "Ouvrir la version GitHub"
    }
  },
  quotes: {
    en: [
      ["Every pixel should earn its place.", "Design note"],
      ["Quiet systems guide better.", "Signal note"],
      ["Motion should reveal intent.", "Animation note"]
    ],
    fr: [
      ["Chaque pixel doit mériter sa place.", "Note design"],
      ["Un système calme guide mieux.", "Note signal"],
      ["Le mouvement doit révéler l’intention.", "Note animation"]
    ]
  }
};

const canvas = document.getElementById("ambient");
const ctx = canvas.getContext("2d");
const previewKicker = document.getElementById("previewKicker");
const previewQuote = document.getElementById("previewQuote");
const previewAuthor = document.getElementById("previewAuthor");
const installButton = document.getElementById("installButton");
const promptLink = document.getElementById("promptLink");
const sourceButton = document.getElementById("sourceButton");
const metaDescription = document.getElementById("metaDescription");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageButtons = [...document.querySelectorAll("[data-language]")];

let particles = [];
let lastQuote = -1;
let activeLanguage = getInitialLanguage();

sourceButton.href = siteConfig.sourceUrl;

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
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    if (dictionary[key]) node.setAttribute("alt", dictionary[key]);
  });

  metaDescription.setAttribute("content", dictionary.metaDescription);
  installButton.href = siteConfig.installUrls[language];
  promptLink.href = siteConfig.installUrls[language];
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  lastQuote = -1;
  updateQuote(true);
}

function resize() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * scale);
  canvas.height = Math.floor(window.innerHeight * scale);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  seed();
}

function seed() {
  const count = reducedMotion ? 18 : Math.max(52, Math.floor((window.innerWidth * window.innerHeight) / 28000));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.18,
    color: Math.floor(Math.random() * 3),
    size: 1 + Math.random() * 2.2
  }));
}

function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "#070806";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  const colors = [
    [232, 197, 126],
    [155, 213, 199],
    [216, 117, 124]
  ];

  for (const particle of particles) {
    if (!reducedMotion) {
      particle.x = wrap(particle.x + particle.vx, -20, window.innerWidth + 20);
      particle.y = wrap(particle.y + particle.vy, -20, window.innerHeight + 20);
    }

    const color = colors[particle.color];
    ctx.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},0.34)`;
    ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
  }

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 128) {
        ctx.strokeStyle = `rgba(248,241,223,${0.052 * (1 - distance / 128)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  updateQuote(false);
  requestAnimationFrame(draw);
}

function updateQuote(force) {
  const quotes = siteConfig.quotes[activeLanguage];
  const index = Math.floor(Date.now() / 5200) % quotes.length;
  if (!force && index === lastQuote) return;
  lastQuote = index;

  const [quote, author] = quotes[index];
  previewKicker.textContent = `Signal ${String(index + 1).padStart(2, "0")}`;
  previewQuote.textContent = quote;
  previewAuthor.textContent = author;
}

function wrap(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

window.addEventListener("resize", resize);
applyLanguage(activeLanguage);
resize();
draw();
