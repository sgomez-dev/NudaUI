import type { NudaComponent } from "./types";

const CAT = "Theme Toggle";

export const themeToggleExtra: NudaComponent[] = [
  /* ─────────────── 1. Day/Night Scene ─────────────── */
  {
    id: "tt2-daynight",
    name: "Day/Night Scene",
    category: CAT,
    preview: (
      <button className="nuda-tt2-daynight" type="button" aria-pressed="true" aria-label="Toggle day and night theme">
        <span className="nuda-tt2-daynight__sun" aria-hidden="true" />
        <span className="nuda-tt2-daynight__star nuda-tt2-daynight__star--a" aria-hidden="true" />
        <span className="nuda-tt2-daynight__star nuda-tt2-daynight__star--b" aria-hidden="true" />
        <span className="nuda-tt2-daynight__star nuda-tt2-daynight__star--c" aria-hidden="true" />
        <span className="nuda-tt2-daynight__ground" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-tt2-daynight{position:relative;display:block;width:100%;max-width:150px;aspect-ratio:14/9;border-radius:12px;overflow:hidden;cursor:pointer;padding:0;border:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,#7ec8e3 0%,#fde68a 65%,#f59e0b 100%);transition:background 1s ease}
      .nuda-tt2-daynight:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-tt2-daynight[aria-pressed="true"]{background:linear-gradient(180deg,#0a0a1a 0%,#141432 65%,#0a0a18 100%)}
      .nuda-tt2-daynight__sun{position:absolute;top:14%;left:18%;width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fffbe6,#fbbf24);box-shadow:0 0 16px #fbbf24;transform:translate(0,0) scale(1);opacity:1;transition:transform 1.1s cubic-bezier(.4,0,.2,1),opacity .8s ease;will-change:transform,opacity}
      .nuda-tt2-daynight[aria-pressed="true"] .nuda-tt2-daynight__sun{transform:translate(46px,58px) scale(.4);opacity:0}
      .nuda-tt2-daynight__star{position:absolute;width:2px;height:2px;border-radius:50%;background:#fff;opacity:0;transition:opacity .8s ease}
      .nuda-tt2-daynight[aria-pressed="true"] .nuda-tt2-daynight__star{opacity:1;animation:nuda-tt2-daynight-twinkle 2.4s ease-in-out infinite}
      .nuda-tt2-daynight__star--a{top:16%;left:60%}
      .nuda-tt2-daynight__star--b{top:32%;left:78%;animation-delay:.6s}
      .nuda-tt2-daynight__star--c{top:22%;left:38%;animation-delay:1.2s}
      .nuda-tt2-daynight__ground{position:absolute;left:0;right:0;bottom:0;height:22%;background:linear-gradient(180deg,rgba(20,40,20,.4),rgba(10,20,10,.7))}
      @keyframes nuda-tt2-daynight-twinkle{0%,100%{opacity:.4}50%{opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-daynight,.nuda-tt2-daynight__sun{transition:none}
        .nuda-tt2-daynight__star{animation:none;opacity:1}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Day/Night Scene — toggle aria-pressed to sink the sun and reveal stars -->
<button class="nuda-tt2-daynight" type="button" aria-pressed="true" aria-label="Toggle day and night theme">
  <span class="nuda-tt2-daynight__sun" aria-hidden="true"></span>
  <span class="nuda-tt2-daynight__star nuda-tt2-daynight__star--a" aria-hidden="true"></span>
  <span class="nuda-tt2-daynight__star nuda-tt2-daynight__star--b" aria-hidden="true"></span>
  <span class="nuda-tt2-daynight__star nuda-tt2-daynight__star--c" aria-hidden="true"></span>
  <span class="nuda-tt2-daynight__ground" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Day/Night Scene — flips aria-pressed; CSS drives the arc + star fade. */
(function () {
  var btn = document.querySelector('.nuda-tt2-daynight');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    document.documentElement.classList.toggle('dark', !pressed);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Eclipse Slide ─────────────── */
  {
    id: "tt2-eclipse",
    name: "Eclipse Slide",
    category: CAT,
    preview: (
      <button className="nuda-tt2-eclipse" type="button" aria-pressed="true" aria-label="Toggle theme">
        <span className="nuda-tt2-eclipse__stage" aria-hidden="true">
          <span className="nuda-tt2-eclipse__corona" />
          <span className="nuda-tt2-eclipse__sun" />
          <span className="nuda-tt2-eclipse__moon" />
        </span>
      </button>
    ),
    cssInline: `
      .nuda-tt2-eclipse{position:relative;display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);cursor:pointer;overflow:hidden}
      .nuda-tt2-eclipse:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-tt2-eclipse__stage{position:relative;width:28px;height:28px}
      .nuda-tt2-eclipse__corona{position:absolute;inset:-4px;border-radius:50%;box-shadow:0 0 0 2px rgba(228,255,84,.15),0 0 18px 4px rgba(228,255,84,.35);opacity:0;transition:opacity .5s ease}
      .nuda-tt2-eclipse[aria-pressed="true"] .nuda-tt2-eclipse__corona{opacity:1}
      .nuda-tt2-eclipse__sun{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff8dc,#fbbf24);box-shadow:0 0 14px #fbbf24}
      .nuda-tt2-eclipse__moon{position:absolute;inset:0;border-radius:50%;background:#0a0a0a;border:1px solid rgba(255,255,255,.12);transform:translateX(-42px);transition:transform .6s cubic-bezier(.4,0,.2,1)}
      .nuda-tt2-eclipse[aria-pressed="true"] .nuda-tt2-eclipse__moon{transform:translateX(0)}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-eclipse__moon,.nuda-tt2-eclipse__corona{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Eclipse Slide — a dark disc slides over the sun to represent dark mode -->
<button class="nuda-tt2-eclipse" type="button" aria-pressed="true" aria-label="Toggle theme">
  <span class="nuda-tt2-eclipse__stage" aria-hidden="true">
    <span class="nuda-tt2-eclipse__corona"></span>
    <span class="nuda-tt2-eclipse__sun"></span>
    <span class="nuda-tt2-eclipse__moon"></span>
  </span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Eclipse Slide — toggle aria-pressed to slide the moon over the sun. */
(function () {
  var btn = document.querySelector('.nuda-tt2-eclipse');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    document.documentElement.classList.toggle('dark', !pressed);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Pull Cord Switch ─────────────── */
  {
    id: "tt2-pullcord",
    name: "Pull Cord Switch",
    category: CAT,
    preview: (
      <button className="nuda-tt2-pullcord" type="button" aria-pressed="true" aria-label="Toggle theme">
        <span className="nuda-tt2-pullcord__glow" aria-hidden="true" />
        <span className="nuda-tt2-pullcord__bulb" aria-hidden="true" />
        <span className="nuda-tt2-pullcord__string" aria-hidden="true" />
        <span className="nuda-tt2-pullcord__knob" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-tt2-pullcord{position:relative;display:flex;flex-direction:column;align-items:center;width:64px;height:120px;background:transparent;border:none;cursor:pointer;padding:8px 0 0}
      .nuda-tt2-pullcord:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:8px}
      .nuda-tt2-pullcord__bulb{width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fffbe6,#fbbf24);box-shadow:0 0 20px 6px rgba(251,191,36,.55);transition:background .4s ease,box-shadow .4s ease}
      .nuda-tt2-pullcord[aria-pressed="true"] .nuda-tt2-pullcord__bulb{background:radial-gradient(circle at 35% 30%,#3a3a42,#18181c);box-shadow:0 0 0 rgba(0,0,0,0)}
      .nuda-tt2-pullcord__glow{position:absolute;top:8px;width:60px;height:60px;border-radius:50%;background:radial-gradient(circle,rgba(251,191,36,.35),transparent 70%);opacity:1;transition:opacity .4s ease;pointer-events:none}
      .nuda-tt2-pullcord[aria-pressed="true"] .nuda-tt2-pullcord__glow{opacity:0}
      .nuda-tt2-pullcord__string{width:2px;height:46px;background:rgba(255,255,255,.35);transform-origin:top center;transform:rotate(0deg)}
      .nuda-tt2-pullcord[aria-pressed="true"] .nuda-tt2-pullcord__string{animation:nuda-tt2-pullcord-swing .9s cubic-bezier(.34,1.56,.64,1)}
      .nuda-tt2-pullcord__knob{width:10px;height:14px;border-radius:5px;background:#e4ff54;margin-top:-2px;box-shadow:0 0 6px rgba(228,255,84,.5)}
      @keyframes nuda-tt2-pullcord-swing{0%{transform:rotate(0)}30%{transform:rotate(14deg)}60%{transform:rotate(-8deg)}100%{transform:rotate(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-pullcord__string{animation:none}
        .nuda-tt2-pullcord__bulb,.nuda-tt2-pullcord__glow{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pull Cord Switch — click to pull the cord and swap the bulb state -->
<button class="nuda-tt2-pullcord" type="button" aria-pressed="true" aria-label="Toggle theme">
  <span class="nuda-tt2-pullcord__glow" aria-hidden="true"></span>
  <span class="nuda-tt2-pullcord__bulb" aria-hidden="true"></span>
  <span class="nuda-tt2-pullcord__string" aria-hidden="true"></span>
  <span class="nuda-tt2-pullcord__knob" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Pull Cord Switch — toggle aria-pressed to swing the cord and dim the bulb. */
(function () {
  var btn = document.querySelector('.nuda-tt2-pullcord');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    document.documentElement.classList.toggle('dark', !pressed);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. Desk Lamp Glow ─────────────── */
  {
    id: "tt2-lamp",
    name: "Desk Lamp Glow",
    category: CAT,
    preview: (
      <button className="nuda-tt2-lamp" type="button" aria-pressed="true" aria-label="Toggle theme">
        <span className="nuda-tt2-lamp__bloom" aria-hidden="true" />
        <svg className="nuda-tt2-lamp__shade" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 3 L20 3 L16 11 L8 11 Z" />
          <rect x="11" y="11" width="2" height="7" />
          <rect x="7" y="18" width="10" height="2" rx="1" />
        </svg>
        <span className="nuda-tt2-lamp__bulb" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-tt2-lamp{position:relative;display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#8a8a8a;cursor:pointer;transition:color .4s ease,border-color .4s ease}
      .nuda-tt2-lamp:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-tt2-lamp__shade{position:relative;z-index:2;width:22px;height:22px}
      .nuda-tt2-lamp[aria-pressed="true"]{color:#fbbf24;border-color:rgba(251,191,36,.35)}
      .nuda-tt2-lamp__bloom{position:absolute;width:20px;height:20px;top:8px;border-radius:50%;background:radial-gradient(circle,rgba(251,191,36,.55),transparent 70%);opacity:0;transform:scale(.6);transition:opacity .4s ease,transform .4s ease}
      .nuda-tt2-lamp[aria-pressed="true"] .nuda-tt2-lamp__bloom{opacity:1;transform:scale(1);animation:nuda-tt2-lamp-breathe 2.6s ease-in-out infinite}
      .nuda-tt2-lamp__bulb{position:absolute;width:5px;height:5px;top:16px;border-radius:50%;background:transparent;transition:background .4s ease,box-shadow .4s ease}
      .nuda-tt2-lamp[aria-pressed="true"] .nuda-tt2-lamp__bulb{background:#fff8dc;box-shadow:0 0 8px 2px #fbbf24}
      @keyframes nuda-tt2-lamp-breathe{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.15);opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-lamp__bloom{animation:none}
        .nuda-tt2-lamp,.nuda-tt2-lamp__shade,.nuda-tt2-lamp__bloom,.nuda-tt2-lamp__bulb{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Desk Lamp Glow — click to bloom a warm glow behind the lamp icon -->
<button class="nuda-tt2-lamp" type="button" aria-pressed="true" aria-label="Toggle theme">
  <span class="nuda-tt2-lamp__bloom" aria-hidden="true"></span>
  <svg class="nuda-tt2-lamp__shade" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 3 L20 3 L16 11 L8 11 Z" />
    <rect x="11" y="11" width="2" height="7" />
    <rect x="7" y="18" width="10" height="2" rx="1" />
  </svg>
  <span class="nuda-tt2-lamp__bulb" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Desk Lamp Glow — toggle aria-pressed to bloom the glow and light the bulb. */
(function () {
  var btn = document.querySelector('.nuda-tt2-lamp');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    document.documentElement.classList.toggle('dark', !pressed);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 5. Contrast Stepper ─────────────── */
  {
    id: "tt2-contrast",
    name: "Contrast Stepper",
    category: CAT,
    preview: (
      <div className="nuda-tt2-contrast" role="radiogroup" aria-label="Contrast level">
        <button className="nuda-tt2-contrast__opt" type="button" role="radio" aria-checked="false" data-level="normal">
          <span className="nuda-tt2-contrast__bars" aria-hidden="true">
            <span className="nuda-tt2-contrast__bar" />
            <span className="nuda-tt2-contrast__bar" />
            <span className="nuda-tt2-contrast__bar" />
          </span>
          <span className="nuda-tt2-contrast__label">Normal</span>
        </button>
        <button className="nuda-tt2-contrast__opt is-active" type="button" role="radio" aria-checked="true" data-level="high">
          <span className="nuda-tt2-contrast__bars" aria-hidden="true">
            <span className="nuda-tt2-contrast__bar" />
            <span className="nuda-tt2-contrast__bar" />
            <span className="nuda-tt2-contrast__bar" />
          </span>
          <span className="nuda-tt2-contrast__label">High</span>
        </button>
        <button className="nuda-tt2-contrast__opt" type="button" role="radio" aria-checked="false" data-level="max">
          <span className="nuda-tt2-contrast__bars" aria-hidden="true">
            <span className="nuda-tt2-contrast__bar" />
            <span className="nuda-tt2-contrast__bar" />
            <span className="nuda-tt2-contrast__bar" />
          </span>
          <span className="nuda-tt2-contrast__label">Max</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-tt2-contrast{display:inline-flex;gap:4px;padding:4px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px}
      .nuda-tt2-contrast__opt{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-width:44px;min-height:44px;padding:6px 8px;background:transparent;border:1px solid transparent;border-radius:8px;color:#a1a1aa;cursor:pointer;transition:background .25s,border-color .25s,color .25s}
      .nuda-tt2-contrast__opt:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-tt2-contrast__opt.is-active{background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.3);color:#e4ff54}
      .nuda-tt2-contrast__bars{display:flex;align-items:flex-end;gap:2px;height:12px}
      .nuda-tt2-contrast__bar{width:3px;height:100%;border-radius:1px;background:currentColor;opacity:.25;transform:scaleY(.4);transform-origin:bottom;transition:opacity .3s,transform .3s}
      .nuda-tt2-contrast__opt[data-level="normal"] .nuda-tt2-contrast__bar:first-child{opacity:1;transform:scaleY(.4)}
      .nuda-tt2-contrast__opt[data-level="high"] .nuda-tt2-contrast__bar:nth-child(1){opacity:1;transform:scaleY(.6)}
      .nuda-tt2-contrast__opt[data-level="high"] .nuda-tt2-contrast__bar:nth-child(2){opacity:1;transform:scaleY(.8)}
      .nuda-tt2-contrast__opt[data-level="max"] .nuda-tt2-contrast__bar{opacity:1}
      .nuda-tt2-contrast__opt[data-level="max"] .nuda-tt2-contrast__bar:nth-child(1){transform:scaleY(.6)}
      .nuda-tt2-contrast__opt[data-level="max"] .nuda-tt2-contrast__bar:nth-child(2){transform:scaleY(.8)}
      .nuda-tt2-contrast__opt[data-level="max"] .nuda-tt2-contrast__bar:nth-child(3){transform:scaleY(1)}
      .nuda-tt2-contrast__label{font:600 9px ui-sans-serif,system-ui;letter-spacing:.02em}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-contrast__opt,.nuda-tt2-contrast__bar{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Contrast Stepper — Normal / High / Max, radiogroup semantics -->
<div class="nuda-tt2-contrast" role="radiogroup" aria-label="Contrast level">
  <button class="nuda-tt2-contrast__opt" type="button" role="radio" aria-checked="false" data-level="normal">
    <span class="nuda-tt2-contrast__bars" aria-hidden="true">
      <span class="nuda-tt2-contrast__bar"></span>
      <span class="nuda-tt2-contrast__bar"></span>
      <span class="nuda-tt2-contrast__bar"></span>
    </span>
    <span class="nuda-tt2-contrast__label">Normal</span>
  </button>
  <button class="nuda-tt2-contrast__opt is-active" type="button" role="radio" aria-checked="true" data-level="high">
    <span class="nuda-tt2-contrast__bars" aria-hidden="true">
      <span class="nuda-tt2-contrast__bar"></span>
      <span class="nuda-tt2-contrast__bar"></span>
      <span class="nuda-tt2-contrast__bar"></span>
    </span>
    <span class="nuda-tt2-contrast__label">High</span>
  </button>
  <button class="nuda-tt2-contrast__opt" type="button" role="radio" aria-checked="false" data-level="max">
    <span class="nuda-tt2-contrast__bars" aria-hidden="true">
      <span class="nuda-tt2-contrast__bar"></span>
      <span class="nuda-tt2-contrast__bar"></span>
      <span class="nuda-tt2-contrast__bar"></span>
    </span>
    <span class="nuda-tt2-contrast__label">Max</span>
  </button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Contrast Stepper — radiogroup: one option active at a time. */
(function () {
  var group = document.querySelector('.nuda-tt2-contrast');
  if (!group) return;
  var opts = group.querySelectorAll('.nuda-tt2-contrast__opt');
  opts.forEach(function (opt) {
    opt.addEventListener('click', function () {
      opts.forEach(function (o) {
        var active = o === opt;
        o.classList.toggle('is-active', active);
        o.setAttribute('aria-checked', String(active));
      });
      document.documentElement.dataset.contrast = opt.dataset.level;
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 6. Density Toggle ─────────────── */
  {
    id: "tt2-density",
    name: "Density Toggle",
    category: CAT,
    preview: (
      <button className="nuda-tt2-density" type="button" aria-pressed="true" aria-label="Toggle layout density">
        <span className="nuda-tt2-density__card" aria-hidden="true">
          <span className="nuda-tt2-density__row" />
          <span className="nuda-tt2-density__row" />
          <span className="nuda-tt2-density__row" />
          <span className="nuda-tt2-density__row" />
        </span>
        <span className="nuda-tt2-density__label">Compact</span>
      </button>
    ),
    cssInline: `
      .nuda-tt2-density{display:inline-flex;flex-direction:column;align-items:center;gap:6px;width:96px;padding:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#cfcfcf;cursor:pointer}
      .nuda-tt2-density:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-tt2-density__card{position:relative;width:100%;height:56px}
      .nuda-tt2-density__row{position:absolute;left:0;width:100%;height:6px;border-radius:2px;background:rgba(255,255,255,.14);transform:translateY(0);transition:transform .35s cubic-bezier(.4,0,.2,1),background .3s}
      .nuda-tt2-density__row:nth-child(2){transform:translateY(18px)}
      .nuda-tt2-density__row:nth-child(3){transform:translateY(36px)}
      .nuda-tt2-density__row:nth-child(4){transform:translateY(54px)}
      .nuda-tt2-density[aria-pressed="true"] .nuda-tt2-density__row:nth-child(1){transform:translateY(0)}
      .nuda-tt2-density[aria-pressed="true"] .nuda-tt2-density__row:nth-child(2){transform:translateY(11px)}
      .nuda-tt2-density[aria-pressed="true"] .nuda-tt2-density__row:nth-child(3){transform:translateY(22px)}
      .nuda-tt2-density[aria-pressed="true"] .nuda-tt2-density__row:nth-child(4){transform:translateY(33px)}
      .nuda-tt2-density[aria-pressed="true"] .nuda-tt2-density__row{background:rgba(228,255,84,.35)}
      .nuda-tt2-density__label{font:600 10px ui-sans-serif,system-ui;color:#a1a1aa}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-density__row{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Density Toggle — Comfortable / Compact, rows re-space via transform -->
<button class="nuda-tt2-density" type="button" aria-pressed="true" aria-label="Toggle layout density">
  <span class="nuda-tt2-density__card" aria-hidden="true">
    <span class="nuda-tt2-density__row"></span>
    <span class="nuda-tt2-density__row"></span>
    <span class="nuda-tt2-density__row"></span>
    <span class="nuda-tt2-density__row"></span>
  </span>
  <span class="nuda-tt2-density__label">Compact</span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Density Toggle — toggle aria-pressed and swap the visible label. */
(function () {
  var btn = document.querySelector('.nuda-tt2-density');
  if (!btn) return;
  var label = btn.querySelector('.nuda-tt2-density__label');
  btn.addEventListener('click', function () {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    if (label) label.textContent = pressed ? 'Comfortable' : 'Compact';
    document.documentElement.dataset.density = pressed ? 'comfortable' : 'compact';
  });
})();`,
      },
    ],
  },

  /* ─────────────── 7. Radio Theme Swap ─────────────── */
  {
    id: "tt2-hasswap",
    name: "Radio Theme Swap",
    category: CAT,
    preview: (
      <div className="nuda-tt2-hasswap">
        <fieldset className="nuda-tt2-hasswap__fieldset">
          <legend className="nuda-tt2-hasswap__legend">Theme</legend>
          <label className="nuda-tt2-hasswap__opt" htmlFor="tt2-hasswap-light">
            <input className="nuda-tt2-hasswap__radio" type="radio" name="tt2-hasswap-theme" id="tt2-hasswap-light" defaultChecked />
            Light
          </label>
          <label className="nuda-tt2-hasswap__opt" htmlFor="tt2-hasswap-dark">
            <input className="nuda-tt2-hasswap__radio" type="radio" name="tt2-hasswap-theme" id="tt2-hasswap-dark" />
            Dark
          </label>
        </fieldset>
        <div className="nuda-tt2-hasswap__preview">
          <span className="nuda-tt2-hasswap__dot" aria-hidden="true" />
          Preview card
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tt2-hasswap{display:inline-flex;flex-direction:column;gap:10px;padding:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#cfcfcf}
      .nuda-tt2-hasswap__fieldset{display:flex;gap:10px;border:none;margin:0;padding:0}
      .nuda-tt2-hasswap__legend{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
      .nuda-tt2-hasswap__opt{display:flex;align-items:center;gap:6px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;min-height:44px}
      .nuda-tt2-hasswap__radio{width:16px;height:16px;accent-color:#e4ff54;cursor:pointer}
      .nuda-tt2-hasswap__radio:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-tt2-hasswap__preview{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:8px;background:#fdf6e3;color:#3a3a1a;color-scheme:light;transition:background .4s ease,color .4s ease;font:600 11px ui-sans-serif,system-ui}
      .nuda-tt2-hasswap__dot{width:8px;height:8px;border-radius:50%;background:#f59e0b;transition:background .4s ease,box-shadow .4s ease}
      .nuda-tt2-hasswap:has(#tt2-hasswap-dark:checked) .nuda-tt2-hasswap__preview{background:#141418;color:#e8e8ea;color-scheme:dark}
      .nuda-tt2-hasswap:has(#tt2-hasswap-dark:checked) .nuda-tt2-hasswap__dot{background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.5)}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-hasswap__preview,.nuda-tt2-hasswap__dot{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Radio Theme Swap — pure CSS via :has(); no JS required.
     :has() reads the checked radio and swaps the preview's color-scheme. -->
<div class="nuda-tt2-hasswap">
  <fieldset class="nuda-tt2-hasswap__fieldset">
    <legend class="nuda-tt2-hasswap__legend">Theme</legend>
    <label class="nuda-tt2-hasswap__opt" for="tt2-hasswap-light">
      <input class="nuda-tt2-hasswap__radio" type="radio" name="tt2-hasswap-theme" id="tt2-hasswap-light" checked />
      Light
    </label>
    <label class="nuda-tt2-hasswap__opt" for="tt2-hasswap-dark">
      <input class="nuda-tt2-hasswap__radio" type="radio" name="tt2-hasswap-theme" id="tt2-hasswap-dark" />
      Dark
    </label>
  </fieldset>
  <div class="nuda-tt2-hasswap__preview">
    <span class="nuda-tt2-hasswap__dot" aria-hidden="true"></span>
    Preview card
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Coin Flip Toggle ─────────────── */
  {
    id: "tt2-coinflip",
    name: "Coin Flip Toggle",
    category: CAT,
    preview: (
      <button className="nuda-tt2-coinflip" type="button" aria-pressed="true" aria-label="Toggle theme by flipping a coin">
        <span className="nuda-tt2-coinflip__coin" aria-hidden="true">
          <span className="nuda-tt2-coinflip__face nuda-tt2-coinflip__face--sun">☀</span>
          <span className="nuda-tt2-coinflip__face nuda-tt2-coinflip__face--moon">☾</span>
        </span>
      </button>
    ),
    cssInline: `
      .nuda-tt2-coinflip{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:transparent;border:none;cursor:pointer;-webkit-perspective:240px;perspective:240px}
      .nuda-tt2-coinflip:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:50%}
      .nuda-tt2-coinflip__coin{position:relative;width:40px;height:40px;transform-style:preserve-3d;transform:rotateY(0deg);transition:transform .7s cubic-bezier(.4,0,.2,1)}
      .nuda-tt2-coinflip[aria-pressed="true"] .nuda-tt2-coinflip__coin{animation:nuda-tt2-coinflip-spin .7s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-tt2-coinflip__face{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:50%;backface-visibility:hidden;-webkit-backface-visibility:hidden;font-size:18px;box-shadow:0 0 0 1px rgba(255,255,255,.12) inset}
      .nuda-tt2-coinflip__face--sun{background:radial-gradient(circle at 35% 35%,#fff8dc,#fbbf24);color:#7a4a00}
      .nuda-tt2-coinflip__face--moon{background:radial-gradient(circle at 35% 35%,#1e1e28,#0a0a12);color:#e4ff54;transform:rotateY(180deg)}
      @keyframes nuda-tt2-coinflip-spin{0%{transform:rotateY(0)}60%{transform:rotateY(200deg)}100%{transform:rotateY(180deg)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-tt2-coinflip__coin{animation:none;transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Coin Flip Toggle — click flips a coin between a sun and moon face -->
<button class="nuda-tt2-coinflip" type="button" aria-pressed="true" aria-label="Toggle theme by flipping a coin">
  <span class="nuda-tt2-coinflip__coin" aria-hidden="true">
    <span class="nuda-tt2-coinflip__face nuda-tt2-coinflip__face--sun">☀</span>
    <span class="nuda-tt2-coinflip__face nuda-tt2-coinflip__face--moon">☾</span>
  </span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Coin Flip Toggle — toggle aria-pressed to replay the flip animation. */
(function () {
  var btn = document.querySelector('.nuda-tt2-coinflip');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    document.documentElement.classList.toggle('dark', !pressed);
  });
})();`,
      },
    ],
  },
];
