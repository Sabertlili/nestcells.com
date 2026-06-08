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
      navOptions: "Options",
      heroEyebrow: "SignalWall by Nestcells",
      heroLead: "A free open-source wallpaper host for Windows screens that should feel intentional.",
      primaryCta: "Install with Codex / Claude",
      sourceCta: "View source",
      heroStatus: "Windows / WebView2 / MIT licensed / Source-first install",
      heroNote: "The alpha installer is unsigned. The recommended path is to let Codex, Claude Code, or an equivalent inspect the source, build locally, and report security findings before launching.",
      installLabel: "Safer install",
      installTitle: "Install from verified source.",
      installIntro: "Instead of asking people to bypass Windows warnings, SignalWall gives them a prompt that asks a local coding agent to inspect the repository, build it, and explain the result first.",
      promptLabel: "Codex / Claude prompt",
      promptTitle: "Copy one prompt. Build only after checks.",
      promptBody: "The prompt verifies the repo origin, reviews app code and scripts, checks release signatures and hashes when relevant, builds from source, and asks before running anything sensitive.",
      promptCta: "Open prompt",
      checkOne: "Clone the official GitHub repository.",
      checkTwo: "Inspect source, scripts, workflows, and dependencies.",
      checkThree: "Build locally and report findings before launch.",
      capturesLabel: "Product captures",
      capturesTitle: "Wallpaper, controls, and screen workflow.",
      captureWallpaper: "Live quote wallpaper",
      captureControls: "Single control center",
      captureScreens: "Screen order and modes",
      captureWallpaperAlt: "SignalWall quote wallpaper capture",
      captureControlsAlt: "SignalWall customization workflow",
      captureScreensAlt: "SignalWall multi-screen layout modes",
      optionsLabel: "Personalization",
      optionsTitle: "Make each screen behave exactly how you want.",
      timingTitle: "Timing",
      timingBody: "Choose fast quote rotation or slow ambient reading, up to five minutes per quote.",
      screenModeTitle: "Screen modes",
      screenModeBody: "Use the same quote everywhere or a different quote on each monitor.",
      textThemeTitle: "Text themes",
      textThemeBody: "Assign Design, Focus, Strategy, or custom phrase groups globally or per screen.",
      colorThemeTitle: "Color themes",
      colorThemeBody: "Switch between Signal, Paper Dark, Paper Light, or future custom backgrounds.",
      motionTitle: "Motion",
      motionBody: "Control particles, particle speed, grid opacity, progress bar, random order, and transitions.",
      orderTitle: "Screen order",
      orderBody: "Map screen 1, 2, and 3 to left, center, or right based on your real desk setup.",
      releaseLabel: "Release status",
      releaseTitle: "Free, open, unsigned alpha.",
      releaseBody: "The release binary remains available for transparency, but source verification and local build are the recommended route until a signed installer exists.",
      releaseCta: "Open GitHub release"
    },
    fr: {
      metaDescription: "SignalWall par Nestcells est un host gratuit et open source de fonds d'ecran dynamiques Windows avec installation verifiee depuis la source.",
      navInstall: "Installer",
      navOptions: "Options",
      heroEyebrow: "SignalWall par Nestcells",
      heroLead: "Un host gratuit et open source pour des fonds d'ecran Windows calmes, utiles et personnalisables.",
      primaryCta: "Installer avec Codex / Claude",
      sourceCta: "Voir le code",
      heroStatus: "Windows / WebView2 / licence MIT / installation depuis la source",
      heroNote: "L'installateur alpha n'est pas signe. Le chemin recommande est de laisser Codex, Claude Code ou un equivalent inspecter le code source, compiler localement et presenter un rapport de securite avant lancement.",
      installLabel: "Installation plus sure",
      installTitle: "Installer depuis une source verifiee.",
      installIntro: "Au lieu de demander aux utilisateurs de contourner les avertissements Windows, SignalWall fournit un prompt qui demande a un agent local d'inspecter le depot, compiler l'app et expliquer le resultat avant lancement.",
      promptLabel: "Prompt Codex / Claude",
      promptTitle: "Copiez un prompt. Compilez seulement apres verification.",
      promptBody: "Le prompt verifie l'origine du depot, relit le code et les scripts, controle signatures et hashes si pertinent, compile depuis la source et demande votre accord avant toute action sensible.",
      promptCta: "Ouvrir le prompt",
      checkOne: "Cloner le depot GitHub officiel.",
      checkTwo: "Inspecter source, scripts, workflows et dependances.",
      checkThree: "Compiler localement et presenter le rapport avant lancement.",
      capturesLabel: "Captures produit",
      capturesTitle: "Fond d'ecran, controles et workflow ecrans.",
      captureWallpaper: "Fond d'ecran citation dynamique",
      captureControls: "Centre de controle unique",
      captureScreens: "Ordre des ecrans et modes",
      captureWallpaperAlt: "Capture du fond d'ecran SignalWall",
      captureControlsAlt: "Workflow de personnalisation SignalWall",
      captureScreensAlt: "Modes multi-ecrans SignalWall",
      optionsLabel: "Personnalisation",
      optionsTitle: "Ajustez chaque ecran exactement comme vous le voulez.",
      timingTitle: "Duree",
      timingBody: "Choisissez une rotation rapide ou une lecture lente, jusqu'a cinq minutes par citation.",
      screenModeTitle: "Modes ecran",
      screenModeBody: "Affichez la meme citation partout ou une citation differente par moniteur.",
      textThemeTitle: "Themes texte",
      textThemeBody: "Assignez Design, Focus, Strategy ou vos propres groupes de phrases globalement ou par ecran.",
      colorThemeTitle: "Themes couleur",
      colorThemeBody: "Passez entre Signal, Paper Dark, Paper Light ou de futurs backgrounds personnalises.",
      motionTitle: "Mouvement",
      motionBody: "Controlez particules, vitesse, opacite de grille, barre de progression, ordre aleatoire et transitions.",
      orderTitle: "Ordre des ecrans",
      orderBody: "Mappez les ecrans 1, 2 et 3 a gauche, au centre ou a droite selon votre setup reel.",
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
