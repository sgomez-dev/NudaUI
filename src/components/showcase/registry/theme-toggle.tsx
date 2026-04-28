import type { NudaComponent } from "./types";

export const themeToggle: NudaComponent[] = [
  /* ─────────────── 1. Sun/Moon Morph ─────────────── */
  {
    id: "sun-moon-morph",
    name: "Sun/Moon Morph",
    category: "Theme Toggle",
    preview: (
      <button className="nuda-sunmoon is-dark" type="button" aria-label="Toggle theme">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle className="nuda-sunmoon__sun" cx="12" cy="12" r="5" />
          <g className="nuda-sunmoon__rays">
            <path d="M12 2 L12 5" />
            <path d="M12 19 L12 22" />
            <path d="M2 12 L5 12" />
            <path d="M19 12 L22 12" />
            <path d="M4.9 4.9 L7 7" />
            <path d="M17 17 L19.1 19.1" />
            <path d="M4.9 19.1 L7 17" />
            <path d="M17 7 L19.1 4.9" />
          </g>
          <path className="nuda-sunmoon__moon" d="M21 13 A 9 9 0 1 1 11 3 A 7 7 0 0 0 21 13 Z" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-sunmoon{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:#fafafa;cursor:pointer;transition:background .25s,border-color .25s,transform .25s}
      .nuda-sunmoon:hover{background:rgba(255,255,255,.06);border-color:rgba(228,255,84,.3);transform:rotate(-12deg)}
      .nuda-sunmoon svg{width:16px;height:16px;overflow:visible}
      .nuda-sunmoon__sun,.nuda-sunmoon__rays,.nuda-sunmoon__moon{transition:opacity .35s,transform .45s cubic-bezier(.4,0,.2,1);transform-origin:center}
      .nuda-sunmoon:not(.is-dark) .nuda-sunmoon__moon{opacity:0;transform:scale(.5) rotate(-30deg)}
      .nuda-sunmoon.is-dark .nuda-sunmoon__sun,.nuda-sunmoon.is-dark .nuda-sunmoon__rays{opacity:0;transform:scale(.5) rotate(30deg)}
      .nuda-sunmoon.is-dark{color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sun/Moon Morph — toggle .is-dark on the button -->
<button class="nuda-sunmoon" type="button" aria-label="Toggle theme">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle class="nuda-sunmoon__sun" cx="12" cy="12" r="5" />
    <g class="nuda-sunmoon__rays">
      <path d="M12 2 L12 5" /><path d="M12 19 L12 22" />
      <path d="M2 12 L5 12" /><path d="M19 12 L22 12" />
      <path d="M4.9 4.9 L7 7" /><path d="M17 17 L19.1 19.1" />
      <path d="M4.9 19.1 L7 17" /><path d="M17 7 L19.1 4.9" />
    </g>
    <path class="nuda-sunmoon__moon"
          d="M21 13 A 9 9 0 1 1 11 3 A 7 7 0 0 0 21 13 Z" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sun/Moon Morph
   Sun (circle + rays) cross-fades into a moon path. Tilts on hover.
   Customize: --tt-accent */

.nuda-sunmoon {
  --tt-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, transform 0.25s, color 0.25s;
}

.nuda-sunmoon:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(228, 255, 84, 0.3);
  transform: rotate(-12deg);
}

.nuda-sunmoon svg {
  width: 18px;
  height: 18px;
  overflow: visible;
}

.nuda-sunmoon__sun,
.nuda-sunmoon__rays,
.nuda-sunmoon__moon {
  transition:
    opacity 0.35s,
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

/* Light mode default — show sun, hide moon */
.nuda-sunmoon:not(.is-dark) .nuda-sunmoon__moon {
  opacity: 0;
  transform: scale(0.5) rotate(-30deg);
}

/* Dark mode — show moon, hide sun */
.nuda-sunmoon.is-dark .nuda-sunmoon__sun,
.nuda-sunmoon.is-dark .nuda-sunmoon__rays {
  opacity: 0;
  transform: scale(0.5) rotate(30deg);
}

.nuda-sunmoon.is-dark { color: var(--tt-accent); }`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Sun/Moon Morph — toggle and persist theme. */

(function () {
  var btn = document.querySelector('.nuda-sunmoon');
  if (!btn) return;
  var KEY = 'theme';

  // Initial state from preference / system.
  var saved = localStorage.getItem(KEY);
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var dark = saved ? saved === 'dark' : prefersDark;

  apply();
  btn.addEventListener('click', function () {
    dark = !dark;
    apply();
    localStorage.setItem(KEY, dark ? 'dark' : 'light');
  });

  function apply() {
    btn.classList.toggle('is-dark', dark);
    document.documentElement.classList.toggle('dark', dark);
  }
})();`,
      },
    ],
  },

  /* ─────────────── 2. Switch Slider ─────────────── */
  {
    id: "theme-switch",
    name: "Theme Switch",
    category: "Theme Toggle",
    preview: (
      <label className="nuda-tswitch">
        <input type="checkbox" defaultChecked />
        <span className="nuda-tswitch__track">
          <span className="nuda-tswitch__thumb">
            <svg className="nuda-tswitch__sun" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5" />
            </svg>
            <svg className="nuda-tswitch__moon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 13 A 9 9 0 1 1 11 3 A 7 7 0 0 0 21 13 Z" />
            </svg>
          </span>
          <span className="nuda-tswitch__star nuda-tswitch__star--a" />
          <span className="nuda-tswitch__star nuda-tswitch__star--b" />
        </span>
      </label>
    ),
    cssInline: `
      .nuda-tswitch{position:relative;display:inline-block;cursor:pointer}
      .nuda-tswitch input{position:absolute;opacity:0;pointer-events:none}
      .nuda-tswitch__track{display:flex;align-items:center;width:48px;height:24px;background:linear-gradient(90deg,#87ceeb 0%,#4a7ba8 100%);border-radius:999px;padding:2px;transition:background .4s ease;position:relative;overflow:hidden}
      .nuda-tswitch input:checked+.nuda-tswitch__track{background:linear-gradient(90deg,#1a1a2e 0%,#0a0a18 100%)}
      .nuda-tswitch__thumb{position:relative;width:20px;height:20px;background:#fafafa;border-radius:50%;transform:translateX(0);transition:transform .4s cubic-bezier(.34,1.56,.64,1),background .4s;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px rgba(0,0,0,.3)}
      .nuda-tswitch input:checked+.nuda-tswitch__track .nuda-tswitch__thumb{transform:translateX(24px);background:#e4ff54}
      .nuda-tswitch__sun,.nuda-tswitch__moon{position:absolute;width:10px;height:10px;color:#1a1a2e;transition:opacity .3s,transform .35s}
      .nuda-tswitch__moon{opacity:0;transform:scale(.5)}
      .nuda-tswitch input:checked+.nuda-tswitch__track .nuda-tswitch__sun{opacity:0;transform:scale(.5)}
      .nuda-tswitch input:checked+.nuda-tswitch__track .nuda-tswitch__moon{opacity:1;transform:scale(1)}
      .nuda-tswitch__star{position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;opacity:0;transition:opacity .4s}
      .nuda-tswitch__star--a{top:5px;right:8px}
      .nuda-tswitch__star--b{bottom:5px;right:14px}
      .nuda-tswitch input:checked+.nuda-tswitch__track .nuda-tswitch__star{opacity:1;animation:_ts-twink 2s ease-in-out infinite}
      .nuda-tswitch__star--b{animation-delay:.5s}
      @keyframes _ts-twink{0%,100%{opacity:.4}50%{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Theme Switch — labelled checkbox with sky→night gradient + star reveal -->
<label class="nuda-tswitch">
  <input type="checkbox" />
  <span class="nuda-tswitch__track">
    <span class="nuda-tswitch__thumb">
      <svg class="nuda-tswitch__sun" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5" />
      </svg>
      <svg class="nuda-tswitch__moon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 13 A 9 9 0 1 1 11 3 A 7 7 0 0 0 21 13 Z" />
      </svg>
    </span>
    <span class="nuda-tswitch__star nuda-tswitch__star--a"></span>
    <span class="nuda-tswitch__star nuda-tswitch__star--b"></span>
  </span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Theme Switch
   Day/night switch: gradient track shifts, thumb morphs sun↔moon,
   stars twinkle in dark mode.
   Customize: track gradients, --ts-accent */

.nuda-tswitch {
  --ts-accent: #e4ff54;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.nuda-tswitch input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.nuda-tswitch__track {
  display: flex;
  align-items: center;
  width: 56px;
  height: 28px;
  background: linear-gradient(90deg, #87ceeb 0%, #4a7ba8 100%);
  border-radius: 999px;
  padding: 3px;
  transition: background 0.4s ease;
  position: relative;
  overflow: hidden;
}

.nuda-tswitch input:checked + .nuda-tswitch__track {
  background: linear-gradient(90deg, #1a1a2e 0%, #0a0a18 100%);
}

.nuda-tswitch__thumb {
  position: relative;
  width: 22px;
  height: 22px;
  background: #fafafa;
  border-radius: 50%;
  transform: translateX(0);
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.nuda-tswitch input:checked + .nuda-tswitch__track .nuda-tswitch__thumb {
  transform: translateX(28px);
  background: var(--ts-accent);
}

.nuda-tswitch__sun,
.nuda-tswitch__moon {
  position: absolute;
  width: 12px;
  height: 12px;
  color: #1a1a2e;
  transition: opacity 0.3s, transform 0.35s;
}

.nuda-tswitch__moon { opacity: 0; transform: scale(0.5); }

.nuda-tswitch input:checked + .nuda-tswitch__track .nuda-tswitch__sun {
  opacity: 0;
  transform: scale(0.5);
}

.nuda-tswitch input:checked + .nuda-tswitch__track .nuda-tswitch__moon {
  opacity: 1;
  transform: scale(1);
}

.nuda-tswitch__star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s;
}

.nuda-tswitch__star--a { top: 6px; right: 10px; }
.nuda-tswitch__star--b { bottom: 6px; right: 16px; }

.nuda-tswitch input:checked + .nuda-tswitch__track .nuda-tswitch__star {
  opacity: 1;
  animation: nuda-ts-twink 2s ease-in-out infinite;
}

.nuda-tswitch input:checked + .nuda-tswitch__track .nuda-tswitch__star--b {
  animation-delay: 0.5s;
}

@keyframes nuda-ts-twink {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tswitch__star { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Circle Reveal ─────────────── */
  {
    id: "circle-reveal",
    name: "Circle Reveal",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-circle">
        <div className="nuda-circle__light">
          <span className="nuda-circle__sun" />
          <p className="nuda-circle__text">Light</p>
        </div>
        <div className="nuda-circle__dark">
          <span className="nuda-circle__moon" />
          <p className="nuda-circle__text">Dark</p>
        </div>
        <button className="nuda-circle__btn" type="button">Toggle</button>
      </div>
    ),
    cssInline: `
      .nuda-circle{position:relative;width:140px;height:90px;border-radius:10px;overflow:hidden;cursor:pointer}
      .nuda-circle__light,.nuda-circle__dark{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px}
      .nuda-circle__light{background:linear-gradient(135deg,#fef3c7,#fde68a)}
      .nuda-circle__dark{background:linear-gradient(135deg,#0f172a,#1e293b);clip-path:circle(0% at 90% 18%);transition:clip-path .8s cubic-bezier(.4,0,.2,1)}
      .nuda-circle:hover .nuda-circle__dark{clip-path:circle(150% at 90% 18%)}
      .nuda-circle__sun{width:18px;height:18px;border-radius:50%;background:#f59e0b;box-shadow:0 0 16px #fbbf24}
      .nuda-circle__moon{width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#e4ff54,#a8c93a);box-shadow:0 0 12px rgba(228,255,84,.5)}
      .nuda-circle__text{font:600 10px ui-sans-serif,system-ui;margin:0}
      .nuda-circle__light .nuda-circle__text{color:#92400e}
      .nuda-circle__dark .nuda-circle__text{color:#e4ff54}
      .nuda-circle__btn{position:absolute;bottom:6px;right:6px;padding:3px 8px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.3);color:inherit;border-radius:4px;font:600 9px ui-sans-serif,system-ui;cursor:pointer;backdrop-filter:blur(4px);z-index:2}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Circle Reveal — radial wipe between light + dark layers -->
<div class="nuda-circle">
  <div class="nuda-circle__light">
    <span class="nuda-circle__sun"></span>
    <p class="nuda-circle__text">Light</p>
  </div>
  <div class="nuda-circle__dark">
    <span class="nuda-circle__moon"></span>
    <p class="nuda-circle__text">Dark</p>
  </div>
  <button class="nuda-circle__btn" type="button">Toggle</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Circle Reveal
   Two layers (light/dark); the dark one expands from a corner via clip-path.
   Pair with the View Transitions API in production for full-page transitions.
   Customize: --circle-origin, --circle-duration */

.nuda-circle {
  --circle-origin-x: 90%;
  --circle-origin-y: 18%;
  --circle-duration: 0.8s;
  position: relative;
  width: 100%;
  max-width: 280px;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}

.nuda-circle__light,
.nuda-circle__dark {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nuda-circle__light {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
}

.nuda-circle__dark {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  clip-path: circle(0% at var(--circle-origin-x) var(--circle-origin-y));
  transition: clip-path var(--circle-duration) cubic-bezier(0.4, 0, 0.2, 1);
}

.nuda-circle:hover .nuda-circle__dark,
.nuda-circle.is-dark .nuda-circle__dark {
  clip-path: circle(150% at var(--circle-origin-x) var(--circle-origin-y));
}

.nuda-circle__sun {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 16px #fbbf24;
}

.nuda-circle__moon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #e4ff54, #a8c93a);
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.5);
}

.nuda-circle__text {
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  margin: 0;
}

.nuda-circle__light .nuda-circle__text { color: #92400e; }
.nuda-circle__dark  .nuda-circle__text { color: #e4ff54; }

.nuda-circle__btn {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: inherit;
  border-radius: 5px;
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  backdrop-filter: blur(4px);
  z-index: 2;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-circle__dark { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Three-State Toggle ─────────────── */
  {
    id: "three-state-toggle",
    name: "Three-State Toggle",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-three" role="radiogroup" aria-label="Theme">
        <button className="nuda-three__opt" type="button" role="radio" aria-checked="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 2 L12 4" /><path d="M12 20 L12 22" />
            <path d="M2 12 L4 12" /><path d="M20 12 L22 12" />
          </svg>
        </button>
        <button className="nuda-three__opt is-active" type="button" role="radio" aria-checked="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 12 L21 12" />
          </svg>
        </button>
        <button className="nuda-three__opt" type="button" role="radio" aria-checked="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 13 A 9 9 0 1 1 11 3 A 7 7 0 0 0 21 13 Z" />
          </svg>
        </button>
        <span className="nuda-three__pill" />
      </div>
    ),
    cssInline: `
      .nuda-three{position:relative;display:inline-flex;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:999px;padding:3px}
      .nuda-three__opt{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;background:transparent;border:none;color:#a1a1aa;cursor:pointer;border-radius:999px;transition:color .3s}
      .nuda-three__opt svg{width:13px;height:13px}
      .nuda-three__opt.is-active{color:#e4ff54}
      .nuda-three__pill{position:absolute;z-index:1;top:3px;left:3px;width:26px;height:26px;background:rgba(228,255,84,.12);border:1px solid rgba(228,255,84,.25);border-radius:999px;transform:translateX(26px);transition:transform .35s cubic-bezier(.4,0,.2,1);box-shadow:0 0 8px rgba(228,255,84,.2)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Three-State Toggle — Light / System / Dark -->
<div class="nuda-three" role="radiogroup" aria-label="Theme">
  <button class="nuda-three__opt"           type="button" role="radio" aria-checked="false" data-theme="light">…</button>
  <button class="nuda-three__opt is-active" type="button" role="radio" aria-checked="true"  data-theme="system">…</button>
  <button class="nuda-three__opt"           type="button" role="radio" aria-checked="false" data-theme="dark">…</button>
  <span class="nuda-three__pill"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Three-State Toggle
   Segmented Light / System / Dark with sliding pill.
   Customize: --three-accent, --three-size */

.nuda-three {
  --three-accent: #e4ff54;
  --three-size: 32px;
  position: relative;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  padding: 4px;
}

.nuda-three__opt {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--three-size);
  height: var(--three-size);
  background: transparent;
  border: none;
  color: #a1a1aa;
  cursor: pointer;
  border-radius: 999px;
  transition: color 0.3s;
}

.nuda-three__opt svg { width: 16px; height: 16px; }

.nuda-three__opt.is-active { color: var(--three-accent); }

.nuda-three__pill {
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 4px;
  width: var(--three-size);
  height: var(--three-size);
  background: rgba(228, 255, 84, 0.12);
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 999px;
  transform: translateX(var(--three-size));
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.2);
}

/* Move pill via inline transform: translateX(0) | calc(var(--three-size)) | calc(var(--three-size) * 2) */`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Three-State Toggle — Light / System / Dark with system-pref watch. */

(function () {
  var group = document.querySelector('.nuda-three');
  if (!group) return;
  var opts = group.querySelectorAll('.nuda-three__opt');
  var pill = group.querySelector('.nuda-three__pill');
  var KEY  = 'theme';
  var size = parseFloat(getComputedStyle(group).getPropertyValue('--three-size')) || 32;

  function apply(theme) {
    opts.forEach(function (o, i) {
      var active = o.dataset.theme === theme;
      o.classList.toggle('is-active', active);
      o.setAttribute('aria-checked', String(active));
      if (active) pill.style.transform = 'translateX(' + (i * size) + 'px)';
    });

    var dark = theme === 'dark' ||
      (theme === 'system' &&
       window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  }

  opts.forEach(function (o) {
    o.addEventListener('click', function () {
      var theme = o.dataset.theme;
      localStorage.setItem(KEY, theme);
      apply(theme);
    });
  });

  apply(localStorage.getItem(KEY) || 'system');
})();`,
      },
    ],
  },

  /* ─────────────── 5. Color Schemes Picker ─────────────── */
  {
    id: "color-schemes",
    name: "Color Schemes",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-schemes">
        <button className="nuda-schemes__sw is-active" style={{ background: "linear-gradient(135deg,#e4ff54,#a8c93a)" }} aria-label="Lime" />
        <button className="nuda-schemes__sw" style={{ background: "linear-gradient(135deg,#a78bfa,#8b5cf6)" }} aria-label="Violet" />
        <button className="nuda-schemes__sw" style={{ background: "linear-gradient(135deg,#fb7185,#e11d48)" }} aria-label="Rose" />
        <button className="nuda-schemes__sw" style={{ background: "linear-gradient(135deg,#38bdf8,#0284c7)" }} aria-label="Sky" />
        <button className="nuda-schemes__sw" style={{ background: "linear-gradient(135deg,#fbbf24,#d97706)" }} aria-label="Amber" />
      </div>
    ),
    cssInline: `
      .nuda-schemes{display:inline-flex;gap:6px;padding:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-schemes__sw{width:22px;height:22px;border-radius:50%;border:none;cursor:pointer;transition:transform .25s,box-shadow .25s;position:relative;flex-shrink:0}
      .nuda-schemes__sw:hover{transform:scale(1.15)}
      .nuda-schemes__sw.is-active{box-shadow:0 0 0 2px rgba(0,0,0,.6),0 0 0 4px currentColor}
      .nuda-schemes__sw:nth-child(1).is-active{color:#e4ff54}
      .nuda-schemes__sw::after{content:"";position:absolute;inset:0;border-radius:50%;border:1px solid rgba(255,255,255,.1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Color Schemes — accent picker -->
<div class="nuda-schemes">
  <button class="nuda-schemes__sw is-active"
          style="background: linear-gradient(135deg, #e4ff54, #a8c93a)"
          aria-label="Lime"></button>
  <button class="nuda-schemes__sw"
          style="background: linear-gradient(135deg, #a78bfa, #8b5cf6)"
          aria-label="Violet"></button>
  <button class="nuda-schemes__sw"
          style="background: linear-gradient(135deg, #fb7185, #e11d48)"
          aria-label="Rose"></button>
  <button class="nuda-schemes__sw"
          style="background: linear-gradient(135deg, #38bdf8, #0284c7)"
          aria-label="Sky"></button>
  <button class="nuda-schemes__sw"
          style="background: linear-gradient(135deg, #fbbf24, #d97706)"
          aria-label="Amber"></button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Color Schemes
   Round swatches; .is-active gets a ring matching its accent.
   Customize: per-swatch gradients via inline background. */

.nuda-schemes {
  display: inline-flex;
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
}

.nuda-schemes__sw {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
  flex-shrink: 0;
}

.nuda-schemes__sw:hover { transform: scale(1.15); }

.nuda-schemes__sw.is-active {
  box-shadow:
    0 0 0 2px rgba(0, 0, 0, 0.6),
    0 0 0 4px currentColor;
}

/* Set color: per-swatch from JS or pick a default for the active state */
.nuda-schemes__sw:nth-child(1).is-active { color: #e4ff54; }
.nuda-schemes__sw:nth-child(2).is-active { color: #a78bfa; }
.nuda-schemes__sw:nth-child(3).is-active { color: #fb7185; }
.nuda-schemes__sw:nth-child(4).is-active { color: #38bdf8; }
.nuda-schemes__sw:nth-child(5).is-active { color: #fbbf24; }

.nuda-schemes__sw::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}`,
      },
    ],
  },

  /* ─────────────── 6. Icon Button ─────────────── */
  {
    id: "theme-icon-btn",
    name: "Icon Button",
    category: "Theme Toggle",
    preview: (
      <button className="nuda-tibtn" type="button" aria-label="Toggle theme">
        <span className="nuda-tibtn__inner">
          <svg className="nuda-tibtn__sun" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="4" />
          </svg>
          <span className="nuda-tibtn__moon" />
        </span>
      </button>
    ),
    cssInline: `
      .nuda-tibtn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:50%;cursor:pointer;transition:transform .25s,background .25s,border-color .25s;color:#fafafa;overflow:hidden;position:relative}
      .nuda-tibtn:hover{background:rgba(228,255,84,.06);border-color:rgba(228,255,84,.3);transform:rotate(45deg)}
      .nuda-tibtn__inner{position:relative;width:14px;height:14px}
      .nuda-tibtn__sun{position:absolute;inset:0;width:100%;height:100%;color:#e4ff54;transition:transform .4s,opacity .3s;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-tibtn__moon{position:absolute;inset:0;width:14px;height:14px;background:#fafafa;border-radius:50%;box-shadow:inset -3px -2px 0 0 currentColor;color:rgba(255,255,255,.04);transform:scale(0);transition:transform .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-tibtn:active .nuda-tibtn__sun{transform:scale(0)}
      .nuda-tibtn:active .nuda-tibtn__moon{transform:scale(1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Icon Button — minimal sun↔moon morph (active state shown on click).
     Toggle from JS by setting a body/html class. -->
<button class="nuda-tibtn" type="button" aria-label="Toggle theme">
  <span class="nuda-tibtn__inner">
    <svg class="nuda-tibtn__sun" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
    </svg>
    <span class="nuda-tibtn__moon"></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Icon Button
   Compact circular toggle: sun shrinks, moon (a circle with inset shadow) grows.
   Customize: --tibtn-accent */

.nuda-tibtn {
  --tibtn-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.25s, background 0.25s, border-color 0.25s;
  color: #fafafa;
  overflow: hidden;
  position: relative;
}

.nuda-tibtn:hover {
  background: rgba(228, 255, 84, 0.06);
  border-color: rgba(228, 255, 84, 0.3);
  transform: rotate(45deg);
}

.nuda-tibtn__inner {
  position: relative;
  width: 16px;
  height: 16px;
}

.nuda-tibtn__sun {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  color: var(--tibtn-accent);
  transition: transform 0.4s, opacity 0.3s;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-tibtn__moon {
  position: absolute;
  inset: 0;
  width: 16px;
  height: 16px;
  background: #fafafa;
  border-radius: 50%;
  box-shadow: inset -4px -3px 0 0 currentColor;
  color: rgba(255, 255, 255, 0.04);
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Toggle by adding .is-dark from JS (or :active for demo) */
.nuda-tibtn.is-dark .nuda-tibtn__sun,
.nuda-tibtn:active .nuda-tibtn__sun  { transform: scale(0); }
.nuda-tibtn.is-dark .nuda-tibtn__moon,
.nuda-tibtn:active .nuda-tibtn__moon { transform: scale(1); }`,
      },
    ],
  },

  /* ─────────────── 7. Theme Dropdown ─────────────── */
  {
    id: "theme-dropdown",
    name: "Theme Dropdown",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-tdd">
        <button className="nuda-tdd__trigger" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2 L12 4" /><path d="M12 20 L12 22" />
            <path d="M4.9 4.9 L6.3 6.3" /><path d="M17.7 17.7 L19.1 19.1" />
          </svg>
          Theme
          <svg className="nuda-tdd__chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 4.5 L6 7.5 L9 4.5" />
          </svg>
        </button>
        <ul className="nuda-tdd__menu">
          <li className="nuda-tdd__item is-active">
            <span className="nuda-tdd__check" />
            Light
          </li>
          <li className="nuda-tdd__item">
            <span className="nuda-tdd__check" />
            Dark
          </li>
          <li className="nuda-tdd__item">
            <span className="nuda-tdd__check" />
            System
          </li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-tdd{position:relative;display:inline-block}
      .nuda-tdd__trigger{display:inline-flex;align-items:center;gap:6px;padding:6px 8px 6px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:7px;color:#fafafa;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:border-color .25s}
      .nuda-tdd__trigger svg{width:13px;height:13px}
      .nuda-tdd__trigger:hover{border-color:rgba(228,255,84,.3)}
      .nuda-tdd__chev{transition:transform .25s;color:#a1a1aa}
      .nuda-tdd:hover .nuda-tdd__chev{transform:rotate(180deg)}
      .nuda-tdd__menu{position:absolute;top:calc(100% + 4px);left:0;list-style:none;padding:4px;margin:0;background:rgba(20,20,24,.95);border:1px solid rgba(255,255,255,.08);border-radius:7px;min-width:100%;backdrop-filter:blur(8px);box-shadow:0 8px 20px -4px rgba(0,0,0,.5);opacity:0;transform:translateY(-4px);pointer-events:none;transition:opacity .2s,transform .2s;z-index:10}
      .nuda-tdd:hover .nuda-tdd__menu{opacity:1;transform:translateY(0);pointer-events:auto}
      .nuda-tdd__item{display:flex;align-items:center;gap:6px;padding:5px 8px;font:500 11px ui-sans-serif,system-ui;color:#a1a1aa;border-radius:5px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-tdd__item:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-tdd__check{width:8px;height:8px;border-radius:50%;background:transparent;border:1.5px solid rgba(255,255,255,.15);transition:all .25s}
      .nuda-tdd__item.is-active{color:#fafafa}
      .nuda-tdd__item.is-active .nuda-tdd__check{background:#e4ff54;border-color:#e4ff54;box-shadow:0 0 6px rgba(228,255,84,.5)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Theme Dropdown -->
<div class="nuda-tdd">
  <button class="nuda-tdd__trigger" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2 L12 4" /><path d="M12 20 L12 22" />
      <path d="M4.9 4.9 L6.3 6.3" /><path d="M17.7 17.7 L19.1 19.1" />
    </svg>
    Theme
    <svg class="nuda-tdd__chev" viewBox="0 0 12 12" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 4.5 L6 7.5 L9 4.5" />
    </svg>
  </button>
  <ul class="nuda-tdd__menu">
    <li class="nuda-tdd__item is-active"><span class="nuda-tdd__check"></span>Light</li>
    <li class="nuda-tdd__item"><span class="nuda-tdd__check"></span>Dark</li>
    <li class="nuda-tdd__item"><span class="nuda-tdd__check"></span>System</li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Theme Dropdown
   Trigger reveals a menu on hover with three options + a glowing check.
   Customize: --tdd-accent. Replace :hover with .is-open from JS for click-trigger. */

.nuda-tdd {
  --tdd-accent: #e4ff54;
  position: relative;
  display: inline-block;
}

.nuda-tdd__trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px 8px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: border-color 0.25s;
}

.nuda-tdd__trigger svg { width: 15px; height: 15px; }

.nuda-tdd__trigger:hover { border-color: rgba(228, 255, 84, 0.3); }

.nuda-tdd__chev {
  transition: transform 0.25s;
  color: #a1a1aa;
}

.nuda-tdd:hover .nuda-tdd__chev,
.nuda-tdd.is-open .nuda-tdd__chev { transform: rotate(180deg); }

.nuda-tdd__menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  list-style: none;
  padding: 6px;
  margin: 0;
  background: rgba(20, 20, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  min-width: 100%;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(-4px);
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 10;
}

.nuda-tdd:hover .nuda-tdd__menu,
.nuda-tdd.is-open .nuda-tdd__menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.nuda-tdd__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.nuda-tdd__item:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
}

.nuda-tdd__check {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  transition: all 0.25s;
}

.nuda-tdd__item.is-active { color: #fafafa; }

.nuda-tdd__item.is-active .nuda-tdd__check {
  background: var(--tdd-accent);
  border-color: var(--tdd-accent);
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.5);
}`,
      },
    ],
  },

  /* ─────────────── 8. Animated BG Swap ─────────────── */
  {
    id: "bg-swap",
    name: "Animated BG Swap",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-bgswap">
        <div className="nuda-bgswap__layer nuda-bgswap__layer--light">
          <div className="nuda-bgswap__sun" />
          <p>Day</p>
        </div>
        <div className="nuda-bgswap__layer nuda-bgswap__layer--dark">
          <div className="nuda-bgswap__moon" />
          <div className="nuda-bgswap__star" style={{ top: "20%", left: "30%" }} />
          <div className="nuda-bgswap__star" style={{ top: "40%", left: "70%" }} />
          <div className="nuda-bgswap__star" style={{ top: "60%", left: "20%" }} />
          <p>Night</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bgswap{position:relative;width:140px;height:90px;border-radius:10px;overflow:hidden;cursor:pointer}
      .nuda-bgswap__layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:opacity .8s ease}
      .nuda-bgswap__layer p{font:700 12px ui-sans-serif,system-ui;margin:0}
      .nuda-bgswap__layer--light{background:linear-gradient(180deg,#fde68a 0%,#fbbf24 50%,#f59e0b 100%);color:#92400e}
      .nuda-bgswap__layer--dark{background:linear-gradient(180deg,#0f172a 0%,#1e293b 100%);color:#e4ff54;opacity:0}
      .nuda-bgswap:hover .nuda-bgswap__layer--light{opacity:0}
      .nuda-bgswap:hover .nuda-bgswap__layer--dark{opacity:1}
      .nuda-bgswap__sun{position:absolute;top:14px;right:14px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 0 16px #fff,0 0 24px #fbbf24;animation:_bs-sun 3s ease-in-out infinite}
      .nuda-bgswap__moon{position:absolute;top:14px;right:14px;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 40% 40%,#e4ff54,#a8c93a);box-shadow:0 0 12px rgba(228,255,84,.6)}
      .nuda-bgswap__star{position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;animation:_bs-twink 2s ease-in-out infinite}
      .nuda-bgswap__star:nth-child(3){animation-delay:.5s}
      .nuda-bgswap__star:nth-child(4){animation-delay:1s}
      @keyframes _bs-sun{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
      @keyframes _bs-twink{0%,100%{opacity:.3}50%{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Animated BG Swap — full-section day/night switcher (toggle .is-dark) -->
<div class="nuda-bgswap">
  <div class="nuda-bgswap__layer nuda-bgswap__layer--light">
    <div class="nuda-bgswap__sun"></div>
    <p>Day</p>
  </div>
  <div class="nuda-bgswap__layer nuda-bgswap__layer--dark">
    <div class="nuda-bgswap__moon"></div>
    <div class="nuda-bgswap__star" style="top: 20%; left: 30%"></div>
    <div class="nuda-bgswap__star" style="top: 40%; left: 70%"></div>
    <div class="nuda-bgswap__star" style="top: 60%; left: 20%"></div>
    <p>Night</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Animated BG Swap
   Two stacked layers cross-fade to flip a hero section between day/night.
   Customize: gradients, content per layer. */

.nuda-bgswap {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.nuda-bgswap__layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.8s ease;
}

.nuda-bgswap__layer p {
  font: 700 1rem ui-sans-serif, system-ui, sans-serif;
  margin: 0;
}

.nuda-bgswap__layer--light {
  background: linear-gradient(180deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%);
  color: #92400e;
}

.nuda-bgswap__layer--dark {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  color: #e4ff54;
  opacity: 0;
}

.nuda-bgswap:hover .nuda-bgswap__layer--light,
.nuda-bgswap.is-dark .nuda-bgswap__layer--light { opacity: 0; }

.nuda-bgswap:hover .nuda-bgswap__layer--dark,
.nuda-bgswap.is-dark .nuda-bgswap__layer--dark  { opacity: 1; }

.nuda-bgswap__sun {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 16px #fff, 0 0 24px #fbbf24;
  animation: nuda-bs-sun 3s ease-in-out infinite;
}

.nuda-bgswap__moon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, #e4ff54, #a8c93a);
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.6);
}

.nuda-bgswap__star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  animation: nuda-bs-twink 2s ease-in-out infinite;
}

.nuda-bgswap__star:nth-child(3) { animation-delay: 0.5s; }
.nuda-bgswap__star:nth-child(4) { animation-delay: 1s; }

@keyframes nuda-bs-sun {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.1); }
}

@keyframes nuda-bs-twink {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bgswap__sun,
  .nuda-bgswap__star { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. System Indicator ─────────────── */
  {
    id: "system-indicator",
    name: "System Indicator",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-sysind">
        <div className="nuda-sysind__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 12 L21 12" />
          </svg>
        </div>
        <div className="nuda-sysind__info">
          <span className="nuda-sysind__label">System theme</span>
          <span className="nuda-sysind__value">Following <i>dark</i></span>
        </div>
        <span className="nuda-sysind__pulse" />
      </div>
    ),
    cssInline: `
      .nuda-sysind{display:inline-flex;align-items:center;gap:10px;padding:7px 10px 7px 8px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.2);border-radius:8px;position:relative}
      .nuda-sysind__icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.12);color:#e4ff54;border-radius:5px;flex-shrink:0}
      .nuda-sysind__icon svg{width:13px;height:13px}
      .nuda-sysind__info{display:flex;flex-direction:column;line-height:1}
      .nuda-sysind__label{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.06em}
      .nuda-sysind__value{font:700 11px ui-sans-serif,system-ui;color:#fafafa;margin-top:2px}
      .nuda-sysind__value i{font-style:normal;color:#e4ff54;font-weight:600}
      .nuda-sysind__pulse{position:absolute;top:8px;right:8px;width:6px;height:6px;border-radius:50%;background:#e4ff54;box-shadow:0 0 6px #e4ff54}
      .nuda-sysind__pulse::after{content:"";position:absolute;inset:0;border-radius:50%;background:#e4ff54;animation:_sy-pulse 1.6s ease-out infinite}
      @keyframes _sy-pulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.5);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- System Indicator — shows that "auto" is following the OS preference -->
<div class="nuda-sysind">
  <div class="nuda-sysind__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 12 L21 12" />
    </svg>
  </div>
  <div class="nuda-sysind__info">
    <span class="nuda-sysind__label">System theme</span>
    <span class="nuda-sysind__value">Following <i>dark</i></span>
  </div>
  <span class="nuda-sysind__pulse"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* System Indicator
   Pill showing "auto" mode is active and which OS theme is currently mirrored.
   Customize: --sys-accent */

.nuda-sysind {
  --sys-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px 9px 10px;
  background: rgba(228, 255, 84, 0.06);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 10px;
  position: relative;
}

.nuda-sysind__icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(228, 255, 84, 0.12);
  color: var(--sys-accent);
  border-radius: 6px;
  flex-shrink: 0;
}

.nuda-sysind__icon svg { width: 15px; height: 15px; }

.nuda-sysind__info {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.nuda-sysind__label {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.nuda-sysind__value {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin-top: 3px;
}

.nuda-sysind__value i {
  font-style: normal;
  color: var(--sys-accent);
  font-weight: 600;
}

.nuda-sysind__pulse {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sys-accent);
  box-shadow: 0 0 6px var(--sys-accent);
}

.nuda-sysind__pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--sys-accent);
  animation: nuda-sys-pulse 1.6s ease-out infinite;
}

@keyframes nuda-sys-pulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.6); opacity: 0;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sysind__pulse::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Slider Track ─────────────── */
  {
    id: "theme-slider",
    name: "Slider Track",
    category: "Theme Toggle",
    preview: (
      <div className="nuda-tslide">
        <span className="nuda-tslide__icon nuda-tslide__icon--sun">☀</span>
        <div className="nuda-tslide__track">
          <span className="nuda-tslide__fill" />
          <span className="nuda-tslide__thumb" />
        </div>
        <span className="nuda-tslide__icon nuda-tslide__icon--moon">☾</span>
      </div>
    ),
    cssInline: `
      .nuda-tslide{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:999px}
      .nuda-tslide__icon{font-size:11px;width:14px;text-align:center;transition:opacity .25s,transform .25s}
      .nuda-tslide__icon--sun{color:#fbbf24}
      .nuda-tslide__icon--moon{color:#e4ff54;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-tslide__track{position:relative;width:54px;height:5px;background:rgba(255,255,255,.06);border-radius:3px;cursor:pointer}
      .nuda-tslide__fill{position:absolute;left:0;top:0;height:100%;width:65%;background:linear-gradient(90deg,#fbbf24,#e4ff54);border-radius:3px;animation:_sl-fill 1.6s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-tslide__thumb{position:absolute;left:65%;top:50%;width:11px;height:11px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;transform:translate(-50%,-50%);box-shadow:0 0 8px rgba(228,255,84,.5);transition:left .35s cubic-bezier(.4,0,.2,1)}
      @keyframes _sl-fill{from{width:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Slider Track — set --pos (0–100) for the thumb position -->
<div class="nuda-tslide" style="--pos: 65">
  <span class="nuda-tslide__icon nuda-tslide__icon--sun" aria-hidden="true">☀</span>
  <div class="nuda-tslide__track">
    <span class="nuda-tslide__fill"></span>
    <span class="nuda-tslide__thumb"></span>
  </div>
  <span class="nuda-tslide__icon nuda-tslide__icon--moon" aria-hidden="true">☾</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Slider Track
   Sun → moon slider that doubles as a "warmth/contrast" control.
   Customize: --pos (current position 0–100), --slide-warm, --slide-cool */

.nuda-tslide {
  --pos: 50;
  --slide-warm: #fbbf24;
  --slide-cool: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 999px;
}

.nuda-tslide__icon {
  font-size: 0.875rem;
  width: 16px;
  text-align: center;
  transition: opacity 0.25s, transform 0.25s;
}

.nuda-tslide__icon--sun  { color: var(--slide-warm); }
.nuda-tslide__icon--moon {
  color: var(--slide-cool);
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-tslide__track {
  position: relative;
  width: 70px;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  cursor: pointer;
}

.nuda-tslide__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(var(--pos) * 1%);
  background: linear-gradient(90deg, var(--slide-warm), var(--slide-cool));
  border-radius: 3px;
  animation: nuda-tslide-fill 1.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-tslide__thumb {
  position: absolute;
  left: calc(var(--pos) * 1%);
  top: 50%;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid var(--slide-cool);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.5);
  transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes nuda-tslide-fill { from { width: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-tslide__fill,
  .nuda-tslide__thumb { animation: none; transition: none; }
}`,
      },
    ],
  },
];
