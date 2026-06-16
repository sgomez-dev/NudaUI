import type { NudaComponent } from "./types";

/* ============================================================
   TEXT EFFECTS — 10 copy-paste animation components
   Pure HTML + CSS (+ optional vanilla JS). No frameworks.
   ============================================================ */

export const textEffects: NudaComponent[] = [
  /* -------------------------------------------------------
     1. Typewriter
     ------------------------------------------------------- */
  {
    id: "typewriter",
    name: "Typewriter",
    category: "Text Effects",
    cssInline: `
      @keyframes _typewriter { from { width: 0 } to { width: 100% } }
      @keyframes _blink { 50% { border-color: transparent } }
    `,
    preview: (
      <div style={{ fontFamily: "monospace", fontSize: "1.5rem" }}>
        <span
          style={{
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRight: "3px solid currentColor",
            width: "100%",
            animation: "_typewriter 2.8s steps(22) forwards, _blink 0.7s step-end infinite",
          }}
        >
          Welcome to NudaUI.
        </span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Typewriter — text types character by character with blinking cursor -->
<div class="nuda-typewriter">
  <span class="nuda-typewriter__text">Welcome to NudaUI.</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Typewriter ─────────────────────────────────────────────
   Customize:
     --nuda-tw-speed       : total typing duration
     --nuda-tw-steps       : number of characters in your text
     --nuda-tw-cursor-clr  : cursor color
     --nuda-tw-cursor-w    : cursor width
   ──────────────────────────────────────────────────────────── */
.nuda-typewriter {
  --nuda-tw-speed: 2.8s;
  --nuda-tw-steps: 19;       /* update to match character count */
  --nuda-tw-cursor-clr: currentColor;
  --nuda-tw-cursor-w: 3px;

  font-family: monospace;
  display: inline-block;
}

.nuda-typewriter__text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: var(--nuda-tw-cursor-w) solid var(--nuda-tw-cursor-clr);
  width: 0;
  animation:
    nuda-typewriter-type var(--nuda-tw-speed) steps(var(--nuda-tw-steps)) forwards,
    nuda-typewriter-blink 0.7s step-end infinite;
}

@keyframes nuda-typewriter-type {
  to { width: 100%; }
}

@keyframes nuda-typewriter-blink {
  50% { border-color: transparent; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-typewriter__text {
    animation: none;
    width: 100%;
    border-right-color: transparent;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     2. Glitch Text
     ------------------------------------------------------- */
  {
    id: "glitch-text",
    name: "Glitch Text",
    category: "Text Effects",
    cssInline: `
      @keyframes _glitch1 {
        0%   { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 2px); }
        20%  { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
        40%  { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 1px); }
        60%  { clip-path: inset(80% 0 5% 0);  transform: translate(2px, -2px); }
        80%  { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 2px); }
        100% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
      }
      @keyframes _glitch2 {
        0%   { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
        20%  { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 2px); }
        40%  { clip-path: inset(80% 0 5% 0);  transform: translate(1px, -2px); }
        60%  { clip-path: inset(30% 0 50% 0); transform: translate(-3px, 1px); }
        80%  { clip-path: inset(50% 0 30% 0); transform: translate(2px, -1px); }
        100% { clip-path: inset(20% 0 60% 0); transform: translate(-1px, 2px); }
      }
    `,
    preview: (
      <div
        style={{
          position: "relative",
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
        }}
      >
        <span>GLITCH</span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            color: "cyan",
            animation: "_glitch1 0.6s infinite linear alternate-reverse",
          }}
        >
          GLITCH
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            color: "red",
            animation: "_glitch2 0.6s infinite linear alternate-reverse",
          }}
        >
          GLITCH
        </span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glitch Text — RGB split glitch effect -->
<div class="nuda-glitch" data-text="GLITCH">
  <span class="nuda-glitch__text">GLITCH</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glitch Text ────────────────────────────────────────────
   Uses ::before / ::after pseudo-elements for the RGB layers.
   Customize:
     --nuda-glitch-clr-r  : red channel offset color
     --nuda-glitch-clr-c  : cyan channel offset color
     --nuda-glitch-speed  : animation duration
   ──────────────────────────────────────────────────────────── */
.nuda-glitch {
  --nuda-glitch-clr-r: rgba(255, 0, 0, 0.75);
  --nuda-glitch-clr-c: rgba(0, 255, 255, 0.75);
  --nuda-glitch-speed: 0.6s;

  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.nuda-glitch__text {
  position: relative;
}

/* Shared pseudo-element base */
.nuda-glitch::before,
.nuda-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.nuda-glitch::before {
  color: var(--nuda-glitch-clr-c);
  animation: nuda-glitch-1 var(--nuda-glitch-speed) infinite linear alternate-reverse;
}

.nuda-glitch::after {
  color: var(--nuda-glitch-clr-r);
  animation: nuda-glitch-2 var(--nuda-glitch-speed) infinite linear alternate-reverse;
}

@keyframes nuda-glitch-1 {
  0%   { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 2px); }
  20%  { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
  40%  { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 1px); }
  60%  { clip-path: inset(80% 0 5% 0);  transform: translate(2px, -2px); }
  80%  { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 2px); }
  100% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
}

@keyframes nuda-glitch-2 {
  0%   { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
  20%  { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 2px); }
  40%  { clip-path: inset(80% 0 5% 0);  transform: translate(1px, -2px); }
  60%  { clip-path: inset(30% 0 50% 0); transform: translate(-3px, 1px); }
  80%  { clip-path: inset(50% 0 30% 0); transform: translate(2px, -1px); }
  100% { clip-path: inset(20% 0 60% 0); transform: translate(-1px, 2px); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch::before,
  .nuda-glitch::after {
    animation: none;
    clip-path: none;
    transform: none;
    opacity: 0;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     3. Gradient Slide
     ------------------------------------------------------- */
  {
    id: "gradient-slide",
    name: "Gradient Slide",
    category: "Text Effects",
    cssInline: `
      @keyframes _gradSlide { to { background-position: -200% center; } }
    `,
    preview: (
      <span
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b, #6366f1)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "_gradSlide 3s linear infinite",
        }}
      >
        Gradient Slide
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Slide — gradient color slides across text -->
<span class="nuda-gradient-slide">Gradient Slide</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Gradient Slide ──────────────────────────────────────────
   Customize:
     --nuda-gs-gradient  : the gradient colors
     --nuda-gs-speed     : slide duration
   ──────────────────────────────────────────────────────────── */
.nuda-gradient-slide {
  --nuda-gs-gradient: linear-gradient(
    90deg,
    #6366f1,
    #ec4899,
    #f59e0b,
    #6366f1
  );
  --nuda-gs-speed: 3s;

  font-size: 2rem;
  font-weight: 800;
  background: var(--nuda-gs-gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent; /* fallback for non-webkit */
  animation: nuda-gradient-slide var(--nuda-gs-speed) linear infinite;
}

@keyframes nuda-gradient-slide {
  to { background-position: -200% center; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-slide {
    animation: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     4. Blur Reveal
     ------------------------------------------------------- */
  {
    id: "blur-reveal",
    name: "Blur Reveal",
    category: "Text Effects",
    cssInline: `
      @keyframes _blurReveal {
        from { filter: blur(16px); opacity: 0; transform: translateY(8px); }
        to   { filter: blur(0);    opacity: 1; transform: translateY(0); }
      }
    `,
    preview: (
      <span
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          display: "inline-block",
          animation: "_blurReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        }}
      >
        Blur Reveal
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Blur Reveal — text un-blurs into view -->
<span class="nuda-blur-reveal">Blur Reveal</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Blur Reveal ─────────────────────────────────────────────
   Customize:
     --nuda-br-blur    : initial blur amount
     --nuda-br-speed   : reveal duration
     --nuda-br-offset  : initial vertical offset
   ──────────────────────────────────────────────────────────── */
.nuda-blur-reveal {
  --nuda-br-blur: 16px;
  --nuda-br-speed: 1.2s;
  --nuda-br-offset: 8px;

  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  animation: nuda-blur-reveal var(--nuda-br-speed) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes nuda-blur-reveal {
  from {
    filter: blur(var(--nuda-br-blur));
    opacity: 0;
    transform: translateY(var(--nuda-br-offset));
  }
  to {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-blur-reveal {
    animation: none;
    filter: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     5. Letter Spacing Wave
     ------------------------------------------------------- */
  {
    id: "letter-spacing-wave",
    name: "Letter Spacing Wave",
    category: "Text Effects",
    cssInline: `
      @keyframes _lsWave {
        0%, 100% { letter-spacing: 0.02em; }
        50%      { letter-spacing: 0.35em; }
      }
    `,
    preview: (
      <span
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          textTransform: "uppercase",
          display: "inline-block",
          animation: "_lsWave 2.5s ease-in-out infinite",
        }}
      >
        Spacing
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Letter Spacing Wave — letter spacing oscillates in wave -->
<span class="nuda-ls-wave">Spacing</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Letter Spacing Wave ─────────────────────────────────────
   Customize:
     --nuda-lsw-min    : tightest spacing
     --nuda-lsw-max    : widest spacing
     --nuda-lsw-speed  : cycle duration
   ──────────────────────────────────────────────────────────── */
.nuda-ls-wave {
  --nuda-lsw-min: 0.02em;
  --nuda-lsw-max: 0.35em;
  --nuda-lsw-speed: 2.5s;

  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  animation: nuda-ls-wave var(--nuda-lsw-speed) ease-in-out infinite;
}

@keyframes nuda-ls-wave {
  0%, 100% { letter-spacing: var(--nuda-lsw-min); }
  50%      { letter-spacing: var(--nuda-lsw-max); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-ls-wave {
    animation: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     6. Neon Glow
     ------------------------------------------------------- */
  {
    id: "neon-glow",
    name: "Neon Glow",
    category: "Text Effects",
    cssInline: `
      @keyframes _neonPulse {
        0%, 100% {
          text-shadow:
            0 0 4px #fff,
            0 0 11px #fff,
            0 0 19px #fff,
            0 0 40px #bc13fe,
            0 0 80px #bc13fe,
            0 0 90px #bc13fe;
        }
        50% {
          text-shadow:
            0 0 2px #fff,
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #bc13fe,
            0 0 40px #bc13fe,
            0 0 50px #bc13fe;
        }
      }
    `,
    preview: (
      <span
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fff",
          animation: "_neonPulse 2s ease-in-out infinite",
        }}
      >
        Neon Glow
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Glow — text with animated neon glow effect -->
<span class="nuda-neon-glow">Neon Glow</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Glow ───────────────────────────────────────────────
   Customize:
     --nuda-neon-clr    : glow color
     --nuda-neon-text   : text color (usually white)
     --nuda-neon-speed  : pulse duration
   ──────────────────────────────────────────────────────────── */
.nuda-neon-glow {
  --nuda-neon-clr: #bc13fe;
  --nuda-neon-text: #fff;
  --nuda-neon-speed: 2s;

  font-size: 2rem;
  font-weight: 700;
  color: var(--nuda-neon-text);
  animation: nuda-neon-pulse var(--nuda-neon-speed) ease-in-out infinite;
}

@keyframes nuda-neon-pulse {
  0%, 100% {
    text-shadow:
      0 0 4px  var(--nuda-neon-text),
      0 0 11px var(--nuda-neon-text),
      0 0 19px var(--nuda-neon-text),
      0 0 40px var(--nuda-neon-clr),
      0 0 80px var(--nuda-neon-clr),
      0 0 90px var(--nuda-neon-clr);
  }
  50% {
    text-shadow:
      0 0 2px  var(--nuda-neon-text),
      0 0 5px  var(--nuda-neon-text),
      0 0 10px var(--nuda-neon-text),
      0 0 20px var(--nuda-neon-clr),
      0 0 40px var(--nuda-neon-clr),
      0 0 50px var(--nuda-neon-clr);
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-neon-glow {
    animation: none;
    text-shadow:
      0 0 4px var(--nuda-neon-text),
      0 0 20px var(--nuda-neon-clr);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     7. Scramble Text
     ------------------------------------------------------- */
  {
    id: "scramble-text",
    name: "Scramble Text",
    category: "Text Effects",
    preview: (
      <span
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: "0.05em",
        }}
        data-nuda-scramble="SCRAMBLE"
      >
        SCRAMBLE
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scramble Text — scrambles through random chars before resolving -->
<span class="nuda-scramble" data-nuda-scramble="SCRAMBLE">SCRAMBLE</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Scramble Text ───────────────────────────────────────────
   The effect is JS-driven; CSS handles the base styling.
   Customize:
     --nuda-scr-font   : font family (monospace recommended)
     --nuda-scr-size   : font size
   ──────────────────────────────────────────────────────────── */
.nuda-scramble {
  --nuda-scr-font: monospace;
  --nuda-scr-size: 1.8rem;

  font-family: var(--nuda-scr-font);
  font-size: var(--nuda-scr-size);
  font-weight: 700;
  letter-spacing: 0.05em;
  display: inline-block;
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Scramble Text — vanilla JS ──────────────────────────────
   Scrambles each character through random glyphs before
   resolving to the final text. Respects reduced-motion.
   ──────────────────────────────────────────────────────────── */
;(function () {
  /* Bail out if the user prefers reduced motion */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  document.querySelectorAll("[data-nuda-scramble]").forEach(function (el) {
    var finalText = el.getAttribute("data-nuda-scramble") || el.textContent;
    var iterations = 0;
    var speed = 40;      /* ms per frame */
    var resolveAt = 3;   /* frames per character before it locks */

    var interval = setInterval(function () {
      el.textContent = finalText
        .split("")
        .map(function (char, i) {
          if (i < Math.floor(iterations / resolveAt)) return finalText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      iterations++;
      if (iterations >= finalText.length * resolveAt) clearInterval(interval);
    }, speed);
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     8. Stroke Fill
     ------------------------------------------------------- */
  {
    id: "stroke-fill",
    name: "Stroke Fill",
    category: "Text Effects",
    cssInline: `
      @keyframes _strokeFill {
        0%   { -webkit-text-fill-color: transparent; -webkit-text-stroke-color: #6366f1; }
        100% { -webkit-text-fill-color: #6366f1;     -webkit-text-stroke-color: #6366f1; }
      }
    `,
    preview: (
      <span
        style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          WebkitTextStroke: "2px #6366f1",
          WebkitTextFillColor: "transparent",
          animation: "_strokeFill 2s ease forwards",
        }}
      >
        Stroke Fill
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stroke Fill — text starts as outline, fills with color -->
<span class="nuda-stroke-fill">Stroke Fill</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Stroke Fill ─────────────────────────────────────────────
   Customize:
     --nuda-sf-clr     : stroke & fill color
     --nuda-sf-stroke  : stroke width
     --nuda-sf-speed   : fill duration
   ──────────────────────────────────────────────────────────── */
.nuda-stroke-fill {
  --nuda-sf-clr: #6366f1;
  --nuda-sf-stroke: 2px;
  --nuda-sf-speed: 2s;

  font-size: 2.5rem;
  font-weight: 900;
  -webkit-text-stroke: var(--nuda-sf-stroke) var(--nuda-sf-clr);
  -webkit-text-fill-color: transparent;
  animation: nuda-stroke-fill var(--nuda-sf-speed) ease forwards;
}

@keyframes nuda-stroke-fill {
  0%   { -webkit-text-fill-color: transparent; }
  100% { -webkit-text-fill-color: var(--nuda-sf-clr); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-stroke-fill {
    animation: none;
    -webkit-text-fill-color: var(--nuda-sf-clr);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     9. Bouncy Letters
     ------------------------------------------------------- */
  {
    id: "bouncy-letters",
    name: "Bouncy Letters",
    category: "Text Effects",
    cssInline: `
      @keyframes _bouncy {
        0%, 100% { transform: translateY(0); }
        40%      { transform: translateY(-12px); }
        60%      { transform: translateY(-4px); }
      }
    `,
    preview: (
      <div style={{ fontSize: "2rem", fontWeight: 800, display: "flex", gap: "2px" }}>
        {"Bouncy".split("").map((ch, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              animation: `_bouncy 0.8s ${i * 0.08}s ease infinite`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bouncy Letters — each letter bounces independently
     Wrap every character in a <span> with increasing delay.
     The CSS variable --i drives per-letter stagger. -->
<div class="nuda-bouncy-letters" aria-label="Bouncy">
  <span class="nuda-bouncy-letters__char" style="--i:0">B</span>
  <span class="nuda-bouncy-letters__char" style="--i:1">o</span>
  <span class="nuda-bouncy-letters__char" style="--i:2">u</span>
  <span class="nuda-bouncy-letters__char" style="--i:3">n</span>
  <span class="nuda-bouncy-letters__char" style="--i:4">c</span>
  <span class="nuda-bouncy-letters__char" style="--i:5">y</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Bouncy Letters ──────────────────────────────────────────
   Customize:
     --nuda-bl-height   : bounce peak height
     --nuda-bl-speed    : bounce cycle duration
     --nuda-bl-stagger  : delay between each letter
   ──────────────────────────────────────────────────────────── */
.nuda-bouncy-letters {
  --nuda-bl-height: -12px;
  --nuda-bl-speed: 0.8s;
  --nuda-bl-stagger: 0.08s;

  display: flex;
  gap: 2px;
  font-size: 2rem;
  font-weight: 800;
}

.nuda-bouncy-letters__char {
  display: inline-block;
  animation: nuda-bouncy var(--nuda-bl-speed) ease infinite;
  animation-delay: calc(var(--i, 0) * var(--nuda-bl-stagger));
}

@keyframes nuda-bouncy {
  0%, 100% { transform: translateY(0); }
  40%      { transform: translateY(var(--nuda-bl-height)); }
  60%      { transform: translateY(calc(var(--nuda-bl-height) / 3)); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-bouncy-letters__char {
    animation: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     10. Fade Up Words
     ------------------------------------------------------- */
  {
    id: "fade-up-words",
    name: "Fade Up Words",
    category: "Text Effects",
    cssInline: `
      @keyframes _fadeUpWord {
        from { opacity: 0; transform: translateY(20px) rotateX(20deg); filter: blur(4px); }
        to   { opacity: 1; transform: translateY(0) rotateX(0deg);    filter: blur(0); }
      }
    `,
    preview: (
      <div
        style={{
          fontSize: "1.6rem",
          fontWeight: 700,
          display: "flex",
          gap: "0.35em",
          perspective: "600px",
        }}
      >
        {["Words", "fade", "up", "one", "by", "one"].map((w, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: 0,
              animation: `_fadeUpWord 0.6s ${i * 0.15}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
            }}
          >
            {w}
          </span>
        ))}
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Fade Up Words — words fade up one by one
     Each word gets a stagger delay via --i custom property. -->
<div class="nuda-fade-up-words" aria-label="Words fade up one by one">
  <span class="nuda-fade-up-words__word" style="--i:0">Words</span>
  <span class="nuda-fade-up-words__word" style="--i:1">fade</span>
  <span class="nuda-fade-up-words__word" style="--i:2">up</span>
  <span class="nuda-fade-up-words__word" style="--i:3">one</span>
  <span class="nuda-fade-up-words__word" style="--i:4">by</span>
  <span class="nuda-fade-up-words__word" style="--i:5">one</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Fade Up Words ───────────────────────────────────────────
   Customize:
     --nuda-fuw-offset   : vertical travel distance
     --nuda-fuw-speed    : per-word animation duration
     --nuda-fuw-stagger  : delay between words
   ──────────────────────────────────────────────────────────── */
.nuda-fade-up-words {
  --nuda-fuw-offset: 20px;
  --nuda-fuw-speed: 0.6s;
  --nuda-fuw-stagger: 0.15s;

  display: flex;
  flex-wrap: wrap;
  gap: 0.35em;
  font-size: 1.6rem;
  font-weight: 700;
  perspective: 600px;
}

.nuda-fade-up-words__word {
  display: inline-block;
  opacity: 0;
  animation: nuda-fade-up-word var(--nuda-fuw-speed)
    cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i, 0) * var(--nuda-fuw-stagger));
}

@keyframes nuda-fade-up-word {
  from {
    opacity: 0;
    transform: translateY(var(--nuda-fuw-offset)) rotateX(20deg);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    filter: blur(0);
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-fade-up-words__word {
    animation: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     11. Scramble Decode
     ------------------------------------------------------- */
  {
    id: "scramble-decode",
    name: "Scramble Decode",
    category: "Text Effects",
    cssInline: `
      .nuda-scramble-decode{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:1.8rem;font-weight:700;letter-spacing:0.08em;color:#e4ff54;display:inline-block;text-shadow:0 0 18px rgba(228,255,84,0.35)}
    `,
    preview: (
      <span
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "1.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#e4ff54",
          textShadow: "0 0 18px rgba(228,255,84,0.35)",
        }}
        data-nuda-decode="DECODE"
      >
        DECODE
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scramble Decode — text decodes from random chars (vanilla JS) -->
<span class="nuda-scramble-decode" data-nuda-decode="DECODE">DECODE</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Scramble Decode ─────────────────────────────────────────
   JS-driven decode reveal; CSS handles the base styling.
   Customize:
     --nuda-sd-clr   : text color
     --nuda-sd-size  : font size
   ──────────────────────────────────────────────────────────── */
.nuda-scramble-decode {
  --nuda-sd-clr: #e4ff54;
  --nuda-sd-size: 1.8rem;

  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--nuda-sd-size);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--nuda-sd-clr);
  display: inline-block;
  text-shadow: 0 0 18px rgba(228, 255, 84, 0.35);
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Scramble Decode — vanilla JS ────────────────────────────
   Each character scrambles through random glyphs, locking in
   left-to-right until the final word is revealed.
   Respects prefers-reduced-motion.
   ──────────────────────────────────────────────────────────── */
;(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&*";

  document.querySelectorAll("[data-nuda-decode]").forEach(function (el) {
    var finalText = el.getAttribute("data-nuda-decode") || el.textContent;

    if (reduce) {
      el.textContent = finalText;
      return;
    }

    var frame = 0;
    var perChar = 3; /* frames before a char locks */
    var timer = setInterval(function () {
      var locked = Math.floor(frame / perChar);
      el.textContent = finalText
        .split("")
        .map(function (ch, i) {
          if (i < locked || ch === " ") return finalText[i];
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");
      frame++;
      if (locked >= finalText.length) clearInterval(timer);
    }, 45);
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     12. Gradient Wave
     ------------------------------------------------------- */
  {
    id: "gradient-wave-text",
    name: "Gradient Wave",
    category: "Text Effects",
    cssInline: `
      .nuda-gradient-wave{font-size:2rem;font-weight:800;background:linear-gradient(90deg,#e4ff54,#fafafa,#e4ff54,#a3b800,#e4ff54);background-size:300% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:_gwWave 4s linear infinite}
      @keyframes _gwWave{to{background-position:-300% center}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-wave{animation:none}}
    `,
    preview: (
      <span
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          background:
            "linear-gradient(90deg,#e4ff54,#fafafa,#e4ff54,#a3b800,#e4ff54)",
          backgroundSize: "300% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          animation: "_gwWave 4s linear infinite",
        }}
      >
        Gradient Wave
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Wave — animated gradient sweep over text -->
<span class="nuda-gradient-wave">Gradient Wave</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Gradient Wave ───────────────────────────────────────────
   Customize:
     --nuda-gw-gradient : the sweeping gradient
     --nuda-gw-speed    : sweep duration
   ──────────────────────────────────────────────────────────── */
.nuda-gradient-wave {
  --nuda-gw-gradient: linear-gradient(
    90deg,
    #e4ff54,
    #fafafa,
    #e4ff54,
    #a3b800,
    #e4ff54
  );
  --nuda-gw-speed: 4s;

  font-size: 2rem;
  font-weight: 800;
  background: var(--nuda-gw-gradient);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* fallback */
  animation: nuda-gradient-wave var(--nuda-gw-speed) linear infinite;
}

@keyframes nuda-gradient-wave {
  to { background-position: -300% center; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-wave {
    animation: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     13. Typewriter Caret
     ------------------------------------------------------- */
  {
    id: "typewriter-caret",
    name: "Typewriter Caret",
    category: "Text Effects",
    cssInline: `
      .nuda-tw-caret{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:1.5rem;font-weight:600;color:#fafafa;display:inline-block;overflow:hidden;white-space:nowrap;border-right:3px solid #e4ff54;width:0;animation:_twcType 3s steps(20) forwards,_twcBlink 0.7s step-end infinite}
      @keyframes _twcType{to{width:100%}}
      @keyframes _twcBlink{50%{border-color:transparent}}
      @media (prefers-reduced-motion:reduce){.nuda-tw-caret{animation:none;width:100%;border-right-color:#e4ff54}}
    `,
    preview: (
      <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "1.5rem" }}>
        <span
          style={{
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: 600,
            color: "#fafafa",
            borderRight: "3px solid #e4ff54",
            width: 0,
            animation:
              "_twcType 3s steps(20) forwards, _twcBlink 0.7s step-end infinite",
          }}
        >
          Hello, operator.
        </span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Typewriter Caret — typing effect with blinking caret -->
<span class="nuda-tw-caret">Hello, operator.</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Typewriter Caret ────────────────────────────────────────
   Customize:
     --nuda-twc-steps   : number of characters in your text
     --nuda-twc-speed   : total typing duration
     --nuda-twc-caret   : caret color
   ──────────────────────────────────────────────────────────── */
.nuda-tw-caret {
  --nuda-twc-steps: 16;   /* update to match character count */
  --nuda-twc-speed: 3s;
  --nuda-twc-caret: #e4ff54;

  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fafafa;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--nuda-twc-caret);
  width: 0;
  animation:
    nuda-tw-caret-type var(--nuda-twc-speed) steps(var(--nuda-twc-steps)) forwards,
    nuda-tw-caret-blink 0.7s step-end infinite;
}

@keyframes nuda-tw-caret-type {
  to { width: 100%; }
}

@keyframes nuda-tw-caret-blink {
  50% { border-color: transparent; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-tw-caret {
    animation: none;
    width: 100%;
    border-right-color: var(--nuda-twc-caret);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     14. Char Stagger Rise
     ------------------------------------------------------- */
  {
    id: "char-stagger-rise",
    name: "Char Stagger Rise",
    category: "Text Effects",
    cssInline: `
      .nuda-char-rise{display:inline-flex;font-size:2rem;font-weight:800;color:#fafafa}
      .nuda-char-rise__char{display:inline-block;white-space:pre;opacity:0;transform:translateY(0.6em);animation:_crRise 0.5s cubic-bezier(0.22,1,0.36,1) forwards;animation-delay:calc(var(--i,0) * 0.06s)}
      @keyframes _crRise{to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-char-rise__char{animation:none;opacity:1;transform:none}}
    `,
    preview: (
      <div
        style={{ display: "inline-flex", fontSize: "2rem", fontWeight: 800, color: "#fafafa" }}
        aria-label="Rise up"
      >
        {"Rise up".split("").map((ch, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 0,
              transform: "translateY(0.6em)",
              animation: `_crRise 0.5s ${i * 0.06}s cubic-bezier(0.22,1,0.36,1) forwards`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Char Stagger Rise — characters rise in sequence
     Each char gets a stagger delay via the --i custom property. -->
<span class="nuda-char-rise" aria-label="Rise up">
  <span class="nuda-char-rise__char" style="--i:0" aria-hidden="true">R</span>
  <span class="nuda-char-rise__char" style="--i:1" aria-hidden="true">i</span>
  <span class="nuda-char-rise__char" style="--i:2" aria-hidden="true">s</span>
  <span class="nuda-char-rise__char" style="--i:3" aria-hidden="true">e</span>
  <span class="nuda-char-rise__char" style="--i:4" aria-hidden="true">&nbsp;</span>
  <span class="nuda-char-rise__char" style="--i:5" aria-hidden="true">u</span>
  <span class="nuda-char-rise__char" style="--i:6" aria-hidden="true">p</span>
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Char Stagger Rise ───────────────────────────────────────
   Customize:
     --nuda-cr-offset   : starting vertical offset
     --nuda-cr-speed    : per-character duration
     --nuda-cr-stagger  : delay between characters
   ──────────────────────────────────────────────────────────── */
.nuda-char-rise {
  --nuda-cr-offset: 0.6em;
  --nuda-cr-speed: 0.5s;
  --nuda-cr-stagger: 0.06s;

  display: inline-flex;
  font-size: 2rem;
  font-weight: 800;
  color: #fafafa;
}

.nuda-char-rise__char {
  display: inline-block;
  white-space: pre;
  opacity: 0;
  transform: translateY(var(--nuda-cr-offset));
  animation: nuda-char-rise var(--nuda-cr-speed)
    cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i, 0) * var(--nuda-cr-stagger));
}

@keyframes nuda-char-rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-char-rise__char {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     15. Glitch Hover Text
     ------------------------------------------------------- */
  {
    id: "glitch-hover-text",
    name: "Glitch Hover Text",
    category: "Text Effects",
    cssInline: `
      .nuda-glitch-hover-text{position:relative;display:inline-block;font-size:2rem;font-weight:800;letter-spacing:0.04em;color:#fafafa;cursor:pointer}
      .nuda-glitch-hover-text__layer{position:absolute;inset:0;opacity:0;pointer-events:none}
      .nuda-glitch-hover-text:hover .nuda-glitch-hover-text__layer,.nuda-glitch-hover-text:focus-visible .nuda-glitch-hover-text__layer{opacity:0.85}
      .nuda-glitch-hover-text:focus-visible{outline:2px solid #e4ff54;outline-offset:4px}
      .nuda-glitch-hover-text__layer--a{color:#e4ff54}
      .nuda-glitch-hover-text__layer--b{color:#ff6dd4}
      .nuda-glitch-hover-text:hover .nuda-glitch-hover-text__layer--a,.nuda-glitch-hover-text:focus-visible .nuda-glitch-hover-text__layer--a{animation:_ghA 0.4s steps(2) 2}
      .nuda-glitch-hover-text:hover .nuda-glitch-hover-text__layer--b,.nuda-glitch-hover-text:focus-visible .nuda-glitch-hover-text__layer--b{animation:_ghB 0.4s steps(2) 2}
      @keyframes _ghA{0%{transform:translate(0)}50%{transform:translate(-2px,1px)}100%{transform:translate(2px,-1px)}}
      @keyframes _ghB{0%{transform:translate(0)}50%{transform:translate(2px,-1px)}100%{transform:translate(-2px,1px)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-hover-text__layer{display:none}}
    `,
    preview: (
      <span
        tabIndex={0}
        style={{
          position: "relative",
          display: "inline-block",
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          color: "#fafafa",
          cursor: "pointer",
        }}
      >
        GLITCH
        <span
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, color: "#e4ff54", opacity: 0.35 }}
        >
          GLITCH
        </span>
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glitch Hover Text — subtle RGB glitch on hover/focus (seizure-safe) -->
<span class="nuda-glitch-hover-text" tabindex="0">
  GLITCH
  <span class="nuda-glitch-hover-text__layer nuda-glitch-hover-text__layer--a" aria-hidden="true">GLITCH</span>
  <span class="nuda-glitch-hover-text__layer nuda-glitch-hover-text__layer--b" aria-hidden="true">GLITCH</span>
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glitch Hover Text ───────────────────────────────────────
   Two offset color layers flicker briefly on hover/focus.
   Capped at two short cycles (≤3 flashes/sec) — seizure-safe.
   Customize:
     --nuda-gh-clr-a / --nuda-gh-clr-b : the two channel colors
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-hover-text {
  --nuda-gh-clr-a: #e4ff54;
  --nuda-gh-clr-b: #ff6dd4;

  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #fafafa;
  cursor: pointer;
}

.nuda-glitch-hover-text:focus-visible {
  outline: 2px solid var(--nuda-gh-clr-a);
  outline-offset: 4px;
}

.nuda-glitch-hover-text__layer {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
}

.nuda-glitch-hover-text__layer--a { color: var(--nuda-gh-clr-a); }
.nuda-glitch-hover-text__layer--b { color: var(--nuda-gh-clr-b); }

.nuda-glitch-hover-text:hover .nuda-glitch-hover-text__layer,
.nuda-glitch-hover-text:focus-visible .nuda-glitch-hover-text__layer {
  opacity: 0.85;
}

.nuda-glitch-hover-text:hover .nuda-glitch-hover-text__layer--a,
.nuda-glitch-hover-text:focus-visible .nuda-glitch-hover-text__layer--a {
  animation: nuda-glitch-hover-text-a 0.4s steps(2) 2;
}

.nuda-glitch-hover-text:hover .nuda-glitch-hover-text__layer--b,
.nuda-glitch-hover-text:focus-visible .nuda-glitch-hover-text__layer--b {
  animation: nuda-glitch-hover-text-b 0.4s steps(2) 2;
}

@keyframes nuda-glitch-hover-text-a {
  0%   { transform: translate(0); }
  50%  { transform: translate(-2px, 1px); }
  100% { transform: translate(2px, -1px); }
}

@keyframes nuda-glitch-hover-text-b {
  0%   { transform: translate(0); }
  50%  { transform: translate(2px, -1px); }
  100% { transform: translate(-2px, 1px); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-hover-text__layer { display: none; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     16. Neon Flicker Text
     ------------------------------------------------------- */
  {
    id: "neon-flicker-text",
    name: "Neon Flicker Text",
    category: "Text Effects",
    cssInline: `
      .nuda-neon-flicker{font-size:2rem;font-weight:700;color:#fafafa;animation:_nfFlicker 4s linear infinite}
      @keyframes _nfFlicker{0%,18%,22%,25%,53%,57%,100%{text-shadow:0 0 4px #fafafa,0 0 12px #e4ff54,0 0 32px #e4ff54,0 0 64px #a3b800}20%,24%,55%{text-shadow:none}}
      @media (prefers-reduced-motion:reduce){.nuda-neon-flicker{animation:none;text-shadow:0 0 4px #fafafa,0 0 18px #e4ff54}}
    `,
    preview: (
      <span
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fafafa",
          animation: "_nfFlicker 4s linear infinite",
        }}
      >
        Neon Flicker
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Flicker Text — subtle neon flicker (≤3 flashes/sec) -->
<span class="nuda-neon-flicker">Neon Flicker</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Flicker Text ───────────────────────────────────────
   Flicker keyframes are sparse (a few short drops over 4s) to
   stay well under 3 flashes/sec. Disabled under reduced-motion.
   Customize:
     --nuda-nf-clr   : neon glow color
     --nuda-nf-text  : base text color
   ──────────────────────────────────────────────────────────── */
.nuda-neon-flicker {
  --nuda-nf-clr: #e4ff54;
  --nuda-nf-text: #fafafa;

  font-size: 2rem;
  font-weight: 700;
  color: var(--nuda-nf-text);
  animation: nuda-neon-flicker 4s linear infinite;
}

@keyframes nuda-neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 4px  var(--nuda-nf-text),
      0 0 12px var(--nuda-nf-clr),
      0 0 32px var(--nuda-nf-clr),
      0 0 64px #a3b800;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-neon-flicker {
    animation: none;
    text-shadow:
      0 0 4px  var(--nuda-nf-text),
      0 0 18px var(--nuda-nf-clr);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     17. Blur In
     ------------------------------------------------------- */
  {
    id: "blur-in-text",
    name: "Blur In",
    category: "Text Effects",
    cssInline: `
      .nuda-blur-in{display:inline-block;font-size:2rem;font-weight:700;color:#fafafa;animation:_biIn 1.1s cubic-bezier(0.25,0.46,0.45,0.94) forwards}
      @keyframes _biIn{from{filter:blur(14px);opacity:0}to{filter:blur(0);opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-blur-in{animation:none;filter:none;opacity:1}}
    `,
    preview: (
      <span
        style={{
          display: "inline-block",
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fafafa",
          animation: "_biIn 1.1s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        }}
      >
        Blur In
      </span>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Blur In — text resolves from blur -->
<span class="nuda-blur-in">Blur In</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Blur In ─────────────────────────────────────────────────
   Customize:
     --nuda-bi-blur   : starting blur amount
     --nuda-bi-speed  : resolve duration
   ──────────────────────────────────────────────────────────── */
.nuda-blur-in {
  --nuda-bi-blur: 14px;
  --nuda-bi-speed: 1.1s;

  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: #fafafa;
  animation: nuda-blur-in var(--nuda-bi-speed)
    cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes nuda-blur-in {
  from { filter: blur(var(--nuda-bi-blur)); opacity: 0; }
  to   { filter: blur(0); opacity: 1; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-blur-in {
    animation: none;
    filter: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     18. Underline Grow
     ------------------------------------------------------- */
  {
    id: "underline-grow-text",
    name: "Underline Grow",
    category: "Text Effects",
    cssInline: `
      .nuda-underline-grow{position:relative;display:inline-block;font-size:1.6rem;font-weight:700;color:#fafafa;text-decoration:none;cursor:pointer}
      .nuda-underline-grow::after{content:'';position:absolute;left:0;bottom:-4px;width:100%;height:2px;background:#e4ff54;transform:scaleX(0);transform-origin:left center;transition:transform 0.32s cubic-bezier(0.22,1,0.36,1)}
      .nuda-underline-grow:hover::after,.nuda-underline-grow:focus-visible::after{transform:scaleX(1)}
      .nuda-underline-grow:focus-visible{outline:2px solid #e4ff54;outline-offset:4px}
      @media (prefers-reduced-motion:reduce){.nuda-underline-grow::after{transition:none}}
    `,
    preview: (
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{
          position: "relative",
          display: "inline-block",
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "#fafafa",
          textDecoration: "none",
          cursor: "pointer",
          paddingBottom: "4px",
          borderBottom: "2px solid rgba(228,255,84,0.25)",
        }}
      >
        Hover me
      </a>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Underline Grow — underline grows on hover/focus -->
<a href="#" class="nuda-underline-grow">Hover me</a>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Underline Grow ──────────────────────────────────────────
   Underline scales in from the left on hover/focus.
   Customize:
     --nuda-ug-clr    : underline color
     --nuda-ug-thick  : underline thickness
     --nuda-ug-speed  : grow duration
   ──────────────────────────────────────────────────────────── */
.nuda-underline-grow {
  --nuda-ug-clr: #e4ff54;
  --nuda-ug-thick: 2px;
  --nuda-ug-speed: 0.32s;

  position: relative;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fafafa;
  text-decoration: none;
  cursor: pointer;
}

.nuda-underline-grow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: var(--nuda-ug-thick);
  background: var(--nuda-ug-clr);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform var(--nuda-ug-speed) cubic-bezier(0.22, 1, 0.36, 1);
}

.nuda-underline-grow:hover::after,
.nuda-underline-grow:focus-visible::after {
  transform: scaleX(1);
}

.nuda-underline-grow:focus-visible {
  outline: 2px solid var(--nuda-ug-clr);
  outline-offset: 4px;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-underline-grow::after {
    transition: none;
  }
}`,
      },
    ],
  },
];
