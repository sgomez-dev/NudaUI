import type { NudaComponent } from "./types";

/* ============================================================
   NEON & GLOW — 10 copy-paste animation components
   Pure HTML + CSS (+ vanilla JS only where truly needed).
   Brand: dark #09090b canvas, lime #e4ff54 primary neon accent;
   cyan / pink / green allowed as secondary neon hues.

   Conventions
     • id / class / keyframe stem: "neon-"
     • GPU-only animation: transform / opacity / filter /
       box-shadow / text-shadow / background-position
     • Flicker is SUBTLE and capped at <= 3 flashes / second
     • Every cssInline ends with prefers-reduced-motion that
       stops pulse/flicker but keeps a steady glow.
   ============================================================ */

export const neonGlow: NudaComponent[] = [
  /* ─────────────── 1. Neon Sign ─────────────── */
  {
    id: "neon-sign",
    name: "Neon Sign",
    category: "Neon & Glow",
    preview: (
      <div className="nuda-neon-sign">
        <span className="nuda-neon-sign__text">OPEN</span>
      </div>
    ),
    cssInline: `
      .nuda-neon-sign{display:flex;align-items:center;justify-content:center;padding:28px 40px;background:#09090b;border-radius:12px}
      .nuda-neon-sign__text{font-family:ui-sans-serif,system-ui,sans-serif;font-size:40px;font-weight:800;letter-spacing:.12em;color:#fbffe0;text-shadow:0 0 4px #fff,0 0 10px #e4ff54,0 0 24px #e4ff54,0 0 48px rgba(228,255,84,.6);animation:_neonSignFlicker 5s steps(1) infinite}
      @keyframes _neonSignFlicker{0%,18%,21%,55%,57%,100%{opacity:1}19%,20%,56%{opacity:.55}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-sign__text{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Sign — subtly flickering neon text (<= 3 flashes/sec) -->
<div class="nuda-neon-sign">
  <span class="nuda-neon-sign__text">OPEN</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Sign ───────────────────────────────────────────────
   Glowing text with an occasional, gentle flicker. The flicker
   dips opacity only a few frames per cycle — never strobing.
   Customize:
     --neon-sign-color : neon hue
     --neon-sign-size  : font size
   ──────────────────────────────────────────────────────────── */
.nuda-neon-sign {
  --neon-sign-color: #e4ff54;
  --neon-sign-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 40px;
  background: #09090b;
  border-radius: 12px;
}

.nuda-neon-sign__text {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: var(--neon-sign-size);
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #fbffe0;
  text-shadow:
    0 0 4px #fff,
    0 0 10px var(--neon-sign-color),
    0 0 24px var(--neon-sign-color),
    0 0 48px var(--neon-sign-color);
  animation: nuda-neon-sign-flicker 5s steps(1) infinite;
  will-change: opacity;
}

/* Two short dips per 5s cycle = well under 3 flashes/second. */
@keyframes nuda-neon-sign-flicker {
  0%, 18%, 21%, 55%, 57%, 100% { opacity: 1; }
  19%, 20%, 56%                { opacity: 0.55; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-sign__text {
    animation: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Neon Button ─────────────── */
  {
    id: "neon-button",
    name: "Neon Button",
    category: "Neon & Glow",
    preview: <button className="nuda-neon-button">Launch</button>,
    cssInline: `
      .nuda-neon-button{padding:12px 30px;background:rgba(228,255,84,.06);color:#e4ff54;border:1.5px solid #e4ff54;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:.04em;cursor:pointer;text-shadow:0 0 8px rgba(228,255,84,.7);animation:_neonBtnPulse 2.4s ease-in-out infinite;transition:background .2s}
      .nuda-neon-button:hover{background:rgba(228,255,84,.14)}
      @keyframes _neonBtnPulse{0%,100%{box-shadow:0 0 6px rgba(228,255,84,.4),0 0 16px rgba(228,255,84,.2)}50%{box-shadow:0 0 14px rgba(228,255,84,.7),0 0 40px rgba(228,255,84,.4)}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-button{animation:none;box-shadow:0 0 10px rgba(228,255,84,.5)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Button — pulsing-glow CTA -->
<button class="nuda-neon-button">Launch</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Button ─────────────────────────────────────────────
   A CTA whose halo breathes via box-shadow (GPU friendly).
   Customize:
     --neon-btn-color : neon hue
     --neon-btn-speed : pulse cycle
   ──────────────────────────────────────────────────────────── */
.nuda-neon-button {
  --neon-btn-color: #e4ff54;
  --neon-btn-speed: 2.4s;
  padding: 12px 30px;
  background: rgba(228, 255, 84, 0.06);
  color: var(--neon-btn-color);
  border: 1.5px solid var(--neon-btn-color);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  text-shadow: 0 0 8px rgba(228, 255, 84, 0.7);
  animation: nuda-neon-button-pulse var(--neon-btn-speed) ease-in-out infinite;
  transition: background 0.2s;
  will-change: box-shadow;
}

.nuda-neon-button:hover { background: rgba(228, 255, 84, 0.14); }

.nuda-neon-button:focus-visible {
  outline: 2px solid var(--neon-btn-color);
  outline-offset: 3px;
}

@keyframes nuda-neon-button-pulse {
  0%, 100% {
    box-shadow: 0 0 6px rgba(228, 255, 84, 0.4), 0 0 16px rgba(228, 255, 84, 0.2);
  }
  50% {
    box-shadow: 0 0 14px rgba(228, 255, 84, 0.7), 0 0 40px rgba(228, 255, 84, 0.4);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-button {
    animation: none;
    box-shadow: 0 0 10px rgba(228, 255, 84, 0.5);
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. Neon Border ─────────────── */
  {
    id: "neon-border",
    name: "Neon Border",
    category: "Neon & Glow",
    preview: (
      <div className="nuda-neon-border">
        <span className="nuda-neon-border__inner">Neon Border</span>
      </div>
    ),
    cssInline: `
      .nuda-neon-border{--angle:0deg;position:relative;padding:1.5px;border-radius:14px;background:conic-gradient(from var(--angle),transparent 0deg,#e4ff54 70deg,#62b6ff 140deg,transparent 210deg,transparent 360deg);isolation:isolate;animation:_neonBorderSpin 4s linear infinite}
      .nuda-neon-border::after{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 18px rgba(228,255,84,.45);z-index:-1}
      .nuda-neon-border__inner{display:block;padding:22px 34px;background:#09090b;border-radius:13px;color:#fbffe0;font-size:14px;font-weight:600;text-align:center}
      @property --angle{syntax:'<angle>';inherits:false;initial-value:0deg}
      @keyframes _neonBorderSpin{to{--angle:360deg}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-border{animation:none;background:#e4ff54}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Border — animated glowing outline -->
<div class="nuda-neon-border">
  <span class="nuda-neon-border__inner">Neon Border</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Border ─────────────────────────────────────────────
   A glowing arc sweeps around the outline via an animated conic
   gradient (@property angle). The inner panel masks the centre.
   Customize:
     --neon-border-color : primary neon hue
     --neon-border-speed : rotation cycle
   ──────────────────────────────────────────────────────────── */
@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.nuda-neon-border {
  --neon-border-color: #e4ff54;
  --neon-border-speed: 4s;
  position: relative;
  padding: 1.5px;
  border-radius: 14px;
  background: conic-gradient(
    from var(--angle),
    transparent 0deg,
    var(--neon-border-color) 70deg,
    #62b6ff 140deg,
    transparent 210deg,
    transparent 360deg
  );
  isolation: isolate;
  animation: nuda-neon-border-spin var(--neon-border-speed) linear infinite;
  will-change: background;
}

.nuda-neon-border::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 18px rgba(228, 255, 84, 0.45);
  z-index: -1;
}

.nuda-neon-border__inner {
  display: block;
  padding: 22px 34px;
  background: #09090b;
  border-radius: 13px;
  color: #fbffe0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

@keyframes nuda-neon-border-spin { to { --angle: 360deg; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-border {
    animation: none;
    background: var(--neon-border-color);
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Glow Text ─────────────── */
  {
    id: "neon-text",
    name: "Glow Text",
    category: "Neon & Glow",
    preview: <span className="nuda-neon-text">glow</span>,
    cssInline: `
      .nuda-neon-text{display:inline-block;font-family:ui-sans-serif,system-ui,sans-serif;font-size:38px;font-weight:800;letter-spacing:.04em;color:#fbffe0;text-shadow:0 0 6px #e4ff54,0 0 18px rgba(228,255,84,.7);animation:_neonTextBreathe 3.4s ease-in-out infinite}
      @keyframes _neonTextBreathe{0%,100%{text-shadow:0 0 4px #e4ff54,0 0 12px rgba(228,255,84,.5)}50%{text-shadow:0 0 10px #e4ff54,0 0 28px rgba(228,255,84,.9),0 0 52px rgba(228,255,84,.5)}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-text{animation:none;text-shadow:0 0 8px #e4ff54,0 0 20px rgba(228,255,84,.6)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glow Text — soft breathing text glow -->
<span class="nuda-neon-text">glow</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glow Text ───────────────────────────────────────────────
   The halo gently expands and contracts (no opacity flicker).
   Customize:
     --neon-text-color : neon hue
     --neon-text-speed : breathe cycle
   ──────────────────────────────────────────────────────────── */
.nuda-neon-text {
  --neon-text-color: #e4ff54;
  --neon-text-speed: 3.4s;
  display: inline-block;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #fbffe0;
  text-shadow: 0 0 6px var(--neon-text-color), 0 0 18px rgba(228, 255, 84, 0.7);
  animation: nuda-neon-text-breathe var(--neon-text-speed) ease-in-out infinite;
  will-change: text-shadow;
}

@keyframes nuda-neon-text-breathe {
  0%, 100% {
    text-shadow: 0 0 4px var(--neon-text-color), 0 0 12px rgba(228, 255, 84, 0.5);
  }
  50% {
    text-shadow:
      0 0 10px var(--neon-text-color),
      0 0 28px rgba(228, 255, 84, 0.9),
      0 0 52px rgba(228, 255, 84, 0.5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-text {
    animation: none;
    text-shadow: 0 0 8px var(--neon-text-color), 0 0 20px rgba(228, 255, 84, 0.6);
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Neon Loader ─────────────── */
  {
    id: "neon-loader",
    name: "Neon Loader",
    category: "Neon & Glow",
    preview: (
      <div className="nuda-neon-loader" role="status" aria-label="Loading">
        <div className="nuda-neon-loader__ring" />
      </div>
    ),
    cssInline: `
      .nuda-neon-loader{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-neon-loader__ring{width:44px;height:44px;border-radius:50%;border:3px solid rgba(228,255,84,.12);border-top-color:#e4ff54;filter:drop-shadow(0 0 6px #e4ff54);animation:_neonLoaderSpin 1s linear infinite}
      @keyframes _neonLoaderSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-loader__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Loader — glowing ring spinner -->
<div class="nuda-neon-loader" role="status" aria-label="Loading">
  <div class="nuda-neon-loader__ring"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Loader ─────────────────────────────────────────────
   A spinning ring with a glowing leading edge (drop-shadow).
   Customize:
     --neon-loader-color : neon hue
     --neon-loader-size  : diameter
     --neon-loader-speed : rotation cycle
   ──────────────────────────────────────────────────────────── */
.nuda-neon-loader {
  --neon-loader-color: #e4ff54;
  --neon-loader-size: 44px;
  --neon-loader-speed: 1s;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-neon-loader__ring {
  width: var(--neon-loader-size);
  height: var(--neon-loader-size);
  border-radius: 50%;
  border: 3px solid rgba(228, 255, 84, 0.12);
  border-top-color: var(--neon-loader-color);
  filter: drop-shadow(0 0 6px var(--neon-loader-color));
  animation: nuda-neon-loader-spin var(--neon-loader-speed) linear infinite;
  will-change: transform;
}

@keyframes nuda-neon-loader-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-loader__ring { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Glow Card ─────────────── */
  {
    id: "neon-card",
    name: "Glow Card",
    category: "Neon & Glow",
    preview: (
      <div className="nuda-neon-card">
        <h4 className="nuda-neon-card__title">Glow Card</h4>
        <p className="nuda-neon-card__body">Hover to light the edge.</p>
      </div>
    ),
    cssInline: `
      .nuda-neon-card{position:relative;width:200px;padding:20px;background:#0c0c10;border:1px solid rgba(228,255,84,.18);border-radius:14px;box-shadow:0 0 0 rgba(228,255,84,0);transition:box-shadow .35s ease,border-color .35s ease,transform .35s ease}
      .nuda-neon-card:hover{border-color:rgba(228,255,84,.7);box-shadow:0 0 14px rgba(228,255,84,.35),0 0 34px rgba(228,255,84,.2);transform:translateY(-2px)}
      .nuda-neon-card__title{margin:0 0 6px;font-size:15px;font-weight:700;color:#e4ff54;text-shadow:0 0 8px rgba(228,255,84,.5)}
      .nuda-neon-card__body{margin:0;font-size:12px;line-height:1.5;color:#c9cbd1}
      @media(prefers-reduced-motion:reduce){.nuda-neon-card{transition:none}.nuda-neon-card:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glow Card — hover-lit card edge -->
<div class="nuda-neon-card">
  <h4 class="nuda-neon-card__title">Glow Card</h4>
  <p class="nuda-neon-card__body">Hover to light the edge.</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glow Card ───────────────────────────────────────────────
   Edge stays dim at rest, then lights up (border + halo) on hover.
   Pure transition — no looping animation.
   Customize:
     --neon-card-color : neon hue
   ──────────────────────────────────────────────────────────── */
.nuda-neon-card {
  --neon-card-color: #e4ff54;
  position: relative;
  width: 200px;
  padding: 20px;
  background: #0c0c10;
  border: 1px solid rgba(228, 255, 84, 0.18);
  border-radius: 14px;
  box-shadow: 0 0 0 rgba(228, 255, 84, 0);
  transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
  will-change: box-shadow, transform;
}

.nuda-neon-card:hover,
.nuda-neon-card:focus-within {
  border-color: rgba(228, 255, 84, 0.7);
  box-shadow: 0 0 14px rgba(228, 255, 84, 0.35), 0 0 34px rgba(228, 255, 84, 0.2);
  transform: translateY(-2px);
}

.nuda-neon-card__title {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 700;
  color: var(--neon-card-color);
  text-shadow: 0 0 8px rgba(228, 255, 84, 0.5);
}

.nuda-neon-card__body {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #c9cbd1;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-card { transition: none; }
  .nuda-neon-card:hover,
  .nuda-neon-card:focus-within { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Neon Toggle ─────────────── */
  {
    id: "neon-toggle",
    name: "Neon Toggle",
    category: "Neon & Glow",
    preview: (
      <button
        className="nuda-neon-toggle is-on"
        role="switch"
        aria-checked="true"
        aria-label="Toggle neon"
      >
        <span className="nuda-neon-toggle__thumb" />
      </button>
    ),
    cssInline: `
      .nuda-neon-toggle{position:relative;width:56px;height:30px;padding:0;border:1px solid rgba(228,255,84,.2);border-radius:99px;background:#16161c;cursor:pointer;transition:box-shadow .3s ease,border-color .3s ease}
      .nuda-neon-toggle__thumb{position:absolute;top:50%;left:3px;width:22px;height:22px;border-radius:50%;background:#5b5b66;transform:translateY(-50%);transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .3s,box-shadow .3s}
      .nuda-neon-toggle.is-on{border-color:rgba(228,255,84,.7);box-shadow:inset 0 0 10px rgba(228,255,84,.3),0 0 12px rgba(228,255,84,.35)}
      .nuda-neon-toggle.is-on .nuda-neon-toggle__thumb{transform:translate(26px,-50%);background:#e4ff54;box-shadow:0 0 8px #e4ff54,0 0 16px rgba(228,255,84,.7)}
      .nuda-neon-toggle:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-neon-toggle,.nuda-neon-toggle__thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Toggle — switch with a glowing track -->
<button class="nuda-neon-toggle is-on" role="switch" aria-checked="true" aria-label="Toggle neon">
  <span class="nuda-neon-toggle__thumb"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Toggle ─────────────────────────────────────────────
   Track + thumb light up when the .is-on class is present.
   Toggle .is-on (and aria-checked) from JS on click.
   Customize:
     --neon-toggle-color : neon hue
   ──────────────────────────────────────────────────────────── */
.nuda-neon-toggle {
  --neon-toggle-color: #e4ff54;
  position: relative;
  width: 56px;
  height: 30px;
  padding: 0;
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 99px;
  background: #16161c;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.nuda-neon-toggle__thumb {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #5b5b66;
  transform: translateY(-50%);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, box-shadow 0.3s;
  will-change: transform;
}

.nuda-neon-toggle.is-on {
  border-color: rgba(228, 255, 84, 0.7);
  box-shadow: inset 0 0 10px rgba(228, 255, 84, 0.3), 0 0 12px rgba(228, 255, 84, 0.35);
}

.nuda-neon-toggle.is-on .nuda-neon-toggle__thumb {
  transform: translate(26px, -50%);
  background: var(--neon-toggle-color);
  box-shadow: 0 0 8px var(--neon-toggle-color), 0 0 16px rgba(228, 255, 84, 0.7);
}

.nuda-neon-toggle:focus-visible {
  outline: 2px solid var(--neon-toggle-color);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-toggle,
  .nuda-neon-toggle__thumb { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Toggle the .is-on class and keep aria-checked in sync. */
document.querySelectorAll(".nuda-neon-toggle").forEach(function (sw) {
  sw.addEventListener("click", function () {
    var on = sw.classList.toggle("is-on");
    sw.setAttribute("aria-checked", on ? "true" : "false");
  });
});`,
      },
    ],
  },

  /* ─────────────── 8. Tube Light ─────────────── */
  {
    id: "neon-tube",
    name: "Tube Light",
    category: "Neon & Glow",
    preview: (
      <div className="nuda-neon-tube">
        <span className="nuda-neon-tube__fill" />
      </div>
    ),
    cssInline: `
      .nuda-neon-tube{position:relative;width:220px;height:12px;border-radius:99px;background:#16161c;overflow:hidden;box-shadow:inset 0 0 6px rgba(0,0,0,.6)}
      .nuda-neon-tube__fill{position:absolute;inset:0;border-radius:inherit;background:linear-gradient(90deg,rgba(228,255,84,0) 0%,#e4ff54 30%,#aef0ff 50%,#e4ff54 70%,rgba(228,255,84,0) 100%);background-size:220% 100%;box-shadow:0 0 12px rgba(228,255,84,.6);animation:_neonTubeFill 2.6s linear infinite}
      @keyframes _neonTubeFill{0%{background-position:120% 0}100%{background-position:-120% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-tube__fill{animation:none;background-position:50% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tube Light — animated neon tube fill -->
<div class="nuda-neon-tube">
  <span class="nuda-neon-tube__fill"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Tube Light ──────────────────────────────────────────────
   A glowing band travels along the tube by shifting a gradient's
   background-position (GPU-friendly, no layout work).
   Customize:
     --neon-tube-color : neon hue
     --neon-tube-speed : sweep cycle
   ──────────────────────────────────────────────────────────── */
.nuda-neon-tube {
  --neon-tube-color: #e4ff54;
  --neon-tube-speed: 2.6s;
  position: relative;
  width: 220px;
  height: 12px;
  border-radius: 99px;
  background: #16161c;
  overflow: hidden;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
}

.nuda-neon-tube__fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    rgba(228, 255, 84, 0) 0%,
    var(--neon-tube-color) 30%,
    #aef0ff 50%,
    var(--neon-tube-color) 70%,
    rgba(228, 255, 84, 0) 100%
  );
  background-size: 220% 100%;
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.6);
  animation: nuda-neon-tube-fill var(--neon-tube-speed) linear infinite;
  will-change: background-position;
}

@keyframes nuda-neon-tube-fill {
  0%   { background-position: 120% 0; }
  100% { background-position: -120% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-tube__fill {
    animation: none;
    background-position: 50% 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── 9. Pulse Beacon ─────────────── */
  {
    id: "neon-pulse-dot",
    name: "Pulse Beacon",
    category: "Neon & Glow",
    preview: (
      <span className="nuda-neon-beacon" role="status" aria-label="Online">
        <span className="nuda-neon-beacon__core" />
        <span className="nuda-neon-beacon__ring" />
      </span>
    ),
    cssInline: `
      .nuda-neon-beacon{position:relative;display:inline-flex;width:16px;height:16px}
      .nuda-neon-beacon__core{position:absolute;inset:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#6ee7b7;box-shadow:0 0 8px #6ee7b7,0 0 16px rgba(110,231,183,.7)}
      .nuda-neon-beacon__ring{position:absolute;inset:0;border-radius:50%;border:2px solid #6ee7b7;animation:_neonBeaconPulse 1.8s ease-out infinite}
      @keyframes _neonBeaconPulse{0%{transform:scale(.6);opacity:.8}100%{transform:scale(2.2);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-beacon__ring{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pulse Beacon — glowing status beacon -->
<span class="nuda-neon-beacon" role="status" aria-label="Online">
  <span class="nuda-neon-beacon__core"></span>
  <span class="nuda-neon-beacon__ring"></span>
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Pulse Beacon ────────────────────────────────────────────
   A steady glowing core with an expanding-and-fading halo ring.
   Cyan-green secondary hue reads well as an "online" indicator.
   Customize:
     --neon-beacon-color : status hue
     --neon-beacon-speed : pulse cycle
   ──────────────────────────────────────────────────────────── */
.nuda-neon-beacon {
  --neon-beacon-color: #6ee7b7;
  --neon-beacon-speed: 1.8s;
  position: relative;
  display: inline-flex;
  width: 16px;
  height: 16px;
}

.nuda-neon-beacon__core {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--neon-beacon-color);
  box-shadow: 0 0 8px var(--neon-beacon-color), 0 0 16px rgba(110, 231, 183, 0.7);
}

.nuda-neon-beacon__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--neon-beacon-color);
  animation: nuda-neon-beacon-pulse var(--neon-beacon-speed) ease-out infinite;
  will-change: transform, opacity;
}

@keyframes nuda-neon-beacon-pulse {
  0%   { transform: scale(0.6); opacity: 0.8; }
  100% { transform: scale(2.2); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-beacon__ring {
    animation: none;
    opacity: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── 10. Neon Grid ─────────────── */
  {
    id: "neon-grid",
    name: "Neon Grid",
    category: "Neon & Glow",
    preview: (
      <div className="nuda-neon-grid" aria-hidden="true">
        <div className="nuda-neon-grid__floor" />
      </div>
    ),
    cssInline: `
      .nuda-neon-grid{position:relative;width:240px;height:120px;background:#09090b;border-radius:12px;overflow:hidden;perspective:160px}
      .nuda-neon-grid::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,#09090b 0%,rgba(9,9,11,0) 45%);z-index:1;pointer-events:none}
      .nuda-neon-grid__floor{position:absolute;left:-50%;right:-50%;bottom:-20%;height:160%;background-image:linear-gradient(rgba(228,255,84,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(228,255,84,.5) 1px,transparent 1px);background-size:28px 28px;transform:rotateX(72deg);transform-origin:bottom center;animation:_neonGridScroll 1.6s linear infinite;filter:drop-shadow(0 0 4px rgba(228,255,84,.5))}
      @keyframes _neonGridScroll{0%{background-position:0 0}100%{background-position:0 28px}}
      @media(prefers-reduced-motion:reduce){.nuda-neon-grid__floor{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Grid — retro glowing grid floor -->
<div class="nuda-neon-grid" aria-hidden="true">
  <div class="nuda-neon-grid__floor"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Neon Grid ───────────────────────────────────────────────
   A retro "outrun" floor: a perspective-tilted grid whose lines
   scroll toward the viewer by shifting background-position only.
   Customize:
     --neon-grid-color : grid line hue
     --neon-grid-speed : scroll cycle
   ──────────────────────────────────────────────────────────── */
.nuda-neon-grid {
  --neon-grid-color: #e4ff54;
  --neon-grid-speed: 1.6s;
  position: relative;
  width: 240px;
  height: 120px;
  background: #09090b;
  border-radius: 12px;
  overflow: hidden;
  perspective: 160px;
}

/* Fade the far edge into the background for depth. */
.nuda-neon-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #09090b 0%, rgba(9, 9, 11, 0) 45%);
  z-index: 1;
  pointer-events: none;
}

.nuda-neon-grid__floor {
  position: absolute;
  left: -50%;
  right: -50%;
  bottom: -20%;
  height: 160%;
  background-image:
    linear-gradient(rgba(228, 255, 84, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(228, 255, 84, 0.5) 1px, transparent 1px);
  background-size: 28px 28px;
  transform: rotateX(72deg);
  transform-origin: bottom center;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.5));
  animation: nuda-neon-grid-scroll var(--neon-grid-speed) linear infinite;
  will-change: background-position;
}

@keyframes nuda-neon-grid-scroll {
  0%   { background-position: 0 0; }
  100% { background-position: 0 28px; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-neon-grid__floor { animation: none; }
}`,
      },
    ],
  },
];
