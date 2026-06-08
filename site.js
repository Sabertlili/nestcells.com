const siteConfig = {
  installUrls: {
    en: "https://github.com/Sabertlili/signalwall/blob/main/docs/ai-assisted-install.en.md",
    fr: "https://github.com/Sabertlili/signalwall/blob/main/docs/ai-assisted-install.fr.md"
  },
  sourceUrl: "https://github.com/Sabertlili/signalwall",
  translations: {
    en: {
      metaDescription: "SignalWall by Nestcells is a free open-source Windows live wallpaper host with AI-assisted source verification instructions.",
      navInstall: "Install",
      navPreview: "Preview",
      navOptions: "Options",
      heroEyebrow: "SignalWall by Nestcells",
      heroLead: "A quiet open-source wallpaper host for Windows screens that should feel intentional.",
      primaryCta: "Install with Codex / Claude",
      sourceCta: "View source",
      proofOne: "Multi-screen",
      proofTwo: "Source-first",
      proofThree: "MIT licensed",
      heroNote: "Unsigned alpha. The recommended path is source verification, local build, then launch.",
      previewBadge: "3 displays",
      installLabel: "Safer install",
      installTitle: "Install from verified source.",
      installIntro: "SignalWall gives users a prompt for Codex, Claude Code, or an equivalent local agent. The agent inspects the repository, builds locally, and reports findings before anything runs.",
      promptLabel: "Codex / Claude prompt",
      promptTitle: "Copy one prompt. Build only after checks.",
      promptBody: "The prompt verifies origin, source, scripts, signatures, hashes, and build output. It also tells the agent not to disable Windows security.",
      promptCta: "Open prompt",
      checkOne: "Clone the official repository.",
      checkTwo: "Inspect source, scripts, workflows, and dependencies.",
      checkThree: "Build locally and report findings before launch.",
      capturesLabel: "Product",
      capturesTitle: "One wallpaper system. One control surface.",
      captureWallpaper: "Live quote wallpaper",
      captureControls: "Single control center",
      captureScreens: "Screen order and modes",
      captureWallpaperAlt: "SignalWall quote wallpaper capture",
      captureControlsAlt: "SignalWall customization workflow",
      captureScreensAlt: "SignalWall multi-screen layout modes",
      optionsLabel: "Personalization",
      optionsTitle: "Precise controls without a heavy interface.",
      timingTitle: "Timing",
      timingBody: "Fast rotation or slow ambient reading, up to five minutes per quote.",
      screenModeTitle: "Screen modes",
      screenModeBody: "Same quote everywhere or different quotes per monitor.",
      textThemeTitle: "Text themes",
      textThemeBody: "Assign Design, Focus, Strategy, or custom phrase groups.",
      colorThemeTitle: "Color themes",
      colorThemeBody: "Use Signal, Paper Dark, Paper Light, or future custom backgrounds.",
      motionTitle: "Motion",
      motionBody: "Particles, speed, grid opacity, progress bar, random order, and transitions.",
      orderTitle: "Screen order",
      orderBody: "Map screen 1, 2, and 3 to match your real desk layout.",
      releaseLabel: "Release status",
      releaseTitle: "Free, open, unsigned alpha.",
      releaseBody: "The release binary remains available for transparency, but source verification and local build are the recommended route until a signed installer exists.",
      releaseCta: "Open GitHub release"
    },
    fr: {
      metaDescription: "SignalWall par Nestcells est un host gratuit et open source de fonds d'ecran dynamiques Windows avec installation verifiee depuis la source.",
      navInstall: "Installer",
      navPreview: "Apercu",
      navOptions: "Options",
      heroEyebrow: "SignalWall par Nestcells",
      heroLead: "Un host open source discret pour des fonds d'ecran Windows calmes, utiles et intentionnels.",
      primaryCta: "Installer avec Codex / Claude",
      sourceCta: "Voir le code",
      proofOne: "Multi-ecran",
      proofTwo: "Source d'abord",
      proofThree: "Licence MIT",
      heroNote: "Alpha non signee. Le chemin recommande: verification du code, build local, puis lancement.",
      previewBadge: "3 ecrans",
      installLabel: "Installation plus sure",
      installTitle: "Installer depuis une source verifiee.",
      installIntro: "SignalWall fournit un prompt pour Codex, Claude Code ou un agent local equivalent. L'agent inspecte le depot, compile localement et presente ses conclusions avant toute execution.",
      promptLabel: "Prompt Codex / Claude",
      promptTitle: "Copiez un prompt. Compilez seulement apres verification.",
      promptBody: "Le prompt verifie origine, source, scripts, signatures, hashes et resultat de build. Il demande aussi de ne pas desactiver la securite Windows.",
      promptCta: "Ouvrir le prompt",
      checkOne: "Cloner le depot GitHub officiel.",
      checkTwo: "Inspecter source, scripts, workflows et dependances.",
      checkThree: "Compiler localement et presenter le rapport avant lancement.",
      capturesLabel: "Produit",
      capturesTitle: "Un systeme de fond d'ecran. Une seule surface de controle.",
      captureWallpaper: "Fond d'ecran citation dynamique",
      captureControls: "Centre de controle unique",
      captureScreens: "Ordre des ecrans et modes",
      captureWallpaperAlt: "Capture du fond d'ecran SignalWall",
      captureControlsAlt: "Workflow de personnalisation SignalWall",
      captureScreensAlt: "Modes multi-ecrans SignalWall",
      optionsLabel: "Personnalisation",
      optionsTitle: "Des controles precis sans interface lourde.",
      timingTitle: "Duree",
      timingBody: "Rotation rapide ou lecture lente, jusqu'a cinq minutes par citation.",
      screenModeTitle: "Modes ecran",
      screenModeBody: "Affichez la meme citation partout ou une citation differente par moniteur.",
      textThemeTitle: "Themes texte",
      textThemeBody: "Assignez Design, Focus, Strategy ou vos propres groupes de phrases.",
      colorThemeTitle: "Themes couleur",
      colorThemeBody: "Utilisez Signal, Paper Dark, Paper Light ou de futurs backgrounds personnalises.",
      motionTitle: "Mouvement",
      motionBody: "Particules, vitesse, opacite de grille, barre de progression, aleatoire et transitions.",
      orderTitle: "Ordre des ecrans",
      orderBody: "Mappez les ecrans 1, 2 et 3 selon votre layout physique.",
      releaseLabel: "Statut release",
      releaseTitle: "Gratuit, ouvert, alpha non signee.",
      releaseBody: "Le binaire de release reste disponible par transparence, mais la verification du code source et la compilation locale restent recommandees jusqu'a l'existence d'un installateur signe.",
      releaseCta: "Ouvrir la release GitHub"
    }
  },
  quotes: {
    en: [
      ["Every pixel argues for attention. Most should lose.", "Design note"],
      ["A quiet system beats a loud intention.", "Signal note"],
      ["Motion should reveal, not perform.", "Animation note"]
    ],
    fr: [
      ["Chaque pixel demande de l'attention. La plupart devraient perdre.", "Note design"],
      ["Un systeme calme bat une intention bruyante.", "Note signal"],
      ["Le mouvement doit reveler, pas performer.", "Note animation"]
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
