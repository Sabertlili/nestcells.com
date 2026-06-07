const siteConfig = {
  downloadUrl: "https://github.com/Sabertlili/signalwall/releases/tag/v0.1.0",
  supportUrl: "",
  quotes: [
    ["Every pixel argues for attention. Most should lose.", "Design note"],
    ["A quiet system beats a loud intention.", "Signal note"],
    ["Motion should reveal, not perform.", "Animation note"]
  ]
};

const canvas = document.getElementById("ambient");
const ctx = canvas.getContext("2d");
const previewKicker = document.getElementById("previewKicker");
const previewQuote = document.getElementById("previewQuote");
const previewAuthor = document.getElementById("previewAuthor");
const downloadButton = document.getElementById("downloadButton");
const supportButton = document.getElementById("supportButton");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let particles = [];
let lastQuote = -1;

downloadButton.href = siteConfig.downloadUrl;

if (siteConfig.supportUrl) {
  supportButton.href = siteConfig.supportUrl;
  supportButton.classList.remove("disabled");
  supportButton.removeAttribute("aria-disabled");
} else {
  supportButton.addEventListener("click", (event) => event.preventDefault());
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
  const count = reducedMotion ? 18 : Math.max(48, Math.floor((window.innerWidth * window.innerHeight) / 28000));
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
        ctx.strokeStyle = `rgba(247,241,228,${0.052 * (1 - distance / 128)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  updateQuote();
  requestAnimationFrame(draw);
}

function updateQuote() {
  const index = Math.floor(Date.now() / 5200) % siteConfig.quotes.length;
  if (index === lastQuote) return;
  lastQuote = index;

  const [quote, author] = siteConfig.quotes[index];
  previewKicker.textContent = `Signal ${String(index + 1).padStart(2, "0")}`;
  previewQuote.textContent = quote;
  previewAuthor.textContent = author;
}

function wrap(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}

window.addEventListener("resize", resize);
resize();
draw();
