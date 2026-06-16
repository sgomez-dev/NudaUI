import type { NudaComponent } from "./types";

export const glassmorphism: NudaComponent[] = [
  /* ─────────────── Glass Card ─────────────── */
  /* NOTE: the catalog already has a `glass-card` (Cards & Hover) using the
     `nuda-glass-card` prefix. The global <style> is shared, so this frosted
     card uses the unique `glass-frost` slug/prefix to avoid id + class
     collisions. */
  {
    id: "glass-frost-card",
    name: "Glass Card",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-frost">
        <div className="nuda-glass-frost__sheen" aria-hidden="true" />
        <p className="nuda-glass-frost__title">Frosted</p>
        <p className="nuda-glass-frost__sub">backdrop-filter glass</p>
      </div>
    ),
    cssInline: `
      .nuda-glass-frost{position:relative;width:200px;padding:20px;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px) saturate(140%);-webkit-backdrop-filter:blur(12px) saturate(140%);box-shadow:0 8px 32px rgba(0,0,0,.35)}
      .nuda-glass-frost__sheen{position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(228,255,84,.18) 50%,transparent 70%);transform:translateX(-100%);animation:nuda-glass-frost-sheen 4s ease-in-out infinite}
      .nuda-glass-frost__title{margin:0;color:#fafafa;font:700 1.1rem ui-sans-serif,system-ui;letter-spacing:-.02em}
      .nuda-glass-frost__sub{margin:.25rem 0 0;color:rgba(250,250,250,.6);font:500 .75rem ui-sans-serif,system-ui}
      @keyframes nuda-glass-frost-sheen{0%,100%{transform:translateX(-100%)}50%{transform:translateX(100%)}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-frost__sheen{animation:none;opacity:.4}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-frost">
  <div class="nuda-glass-frost__sheen" aria-hidden="true"></div>
  <p class="nuda-glass-frost__title">Frosted</p>
  <p class="nuda-glass-frost__sub">backdrop-filter glass</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Card
   Frosted card with an animated diagonal sheen.
   Customize: --glass-frost-tint, --glass-frost-accent, --glass-frost-blur */

.nuda-glass-frost {
  --glass-frost-tint: rgba(255, 255, 255, 0.06);
  --glass-frost-accent: rgba(228, 255, 84, 0.18);
  --glass-frost-blur: 12px;
  position: relative;
  width: 200px;
  padding: 20px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--glass-frost-tint);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(var(--glass-frost-blur)) saturate(140%);
  -webkit-backdrop-filter: blur(var(--glass-frost-blur)) saturate(140%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

.nuda-glass-frost__sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 30%, var(--glass-frost-accent) 50%, transparent 70%);
  transform: translateX(-100%);
  animation: nuda-glass-frost-sheen 4s ease-in-out infinite;
  will-change: transform;
}

.nuda-glass-frost__title {
  margin: 0;
  color: #fafafa;
  font: 700 1.1rem ui-sans-serif, system-ui;
  letter-spacing: -0.02em;
}

.nuda-glass-frost__sub {
  margin: 0.25rem 0 0;
  color: rgba(250, 250, 250, 0.6);
  font: 500 0.75rem ui-sans-serif, system-ui;
}

@keyframes nuda-glass-frost-sheen {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-frost__sheen {
    animation: none;
    opacity: 0.4;
  }
}`,
      },
    ],
  },

  /* ─────────────── Glass Navbar ─────────────── */
  {
    id: "glass-nav",
    name: "Glass Navbar",
    category: "Glassmorphism",
    preview: (
      <nav className="nuda-glass-nav" aria-label="Demo navigation">
        <span className="nuda-glass-nav__brand">Nuda</span>
        <ul className="nuda-glass-nav__links">
          <li><a className="nuda-glass-nav__link nuda-glass-nav__link--active" href="#" aria-current="page">Home</a></li>
          <li><a className="nuda-glass-nav__link" href="#">Docs</a></li>
          <li><a className="nuda-glass-nav__link" href="#">Pricing</a></li>
        </ul>
      </nav>
    ),
    cssInline: `
      .nuda-glass-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;width:260px;padding:10px 14px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(14px) saturate(150%);-webkit-backdrop-filter:blur(14px) saturate(150%);box-shadow:0 8px 28px rgba(0,0,0,.35)}
      .nuda-glass-nav__brand{color:#fafafa;font:800 .9rem ui-sans-serif,system-ui;letter-spacing:-.02em}
      .nuda-glass-nav__links{display:flex;gap:4px;margin:0;padding:0;list-style:none}
      .nuda-glass-nav__link{display:block;padding:5px 10px;border-radius:8px;color:rgba(250,250,250,.6);font:600 .72rem ui-sans-serif,system-ui;text-decoration:none;transition:color .25s ease,background .25s ease}
      .nuda-glass-nav__link:hover,.nuda-glass-nav__link:focus-visible{color:#fafafa;outline:none}
      .nuda-glass-nav__link:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.6)}
      .nuda-glass-nav__link--active{color:#09090b;background:#e4ff54;box-shadow:0 0 14px rgba(228,255,84,.5);animation:nuda-glass-nav-pulse 3s ease-in-out infinite}
      @keyframes nuda-glass-nav-pulse{0%,100%{box-shadow:0 0 10px rgba(228,255,84,.4)}50%{box-shadow:0 0 18px rgba(228,255,84,.7)}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-nav__link--active{animation:none}.nuda-glass-nav__link{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-glass-nav" aria-label="Main navigation">
  <span class="nuda-glass-nav__brand">Nuda</span>
  <ul class="nuda-glass-nav__links">
    <li><a class="nuda-glass-nav__link nuda-glass-nav__link--active" href="#" aria-current="page">Home</a></li>
    <li><a class="nuda-glass-nav__link" href="#">Docs</a></li>
    <li><a class="nuda-glass-nav__link" href="#">Pricing</a></li>
  </ul>
</nav>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Navbar
   Blurred sticky nav with a glowing lime active pill.
   Customize: --glass-nav-accent, --glass-nav-tint */

.nuda-glass-nav {
  --glass-nav-accent: #e4ff54;
  --glass-nav-tint: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 260px;
  padding: 10px 14px;
  border-radius: 14px;
  background: var(--glass-nav-tint);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

.nuda-glass-nav__brand {
  color: #fafafa;
  font: 800 0.9rem ui-sans-serif, system-ui;
  letter-spacing: -0.02em;
}

.nuda-glass-nav__links {
  display: flex;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nuda-glass-nav__link {
  display: block;
  padding: 5px 10px;
  border-radius: 8px;
  color: rgba(250, 250, 250, 0.6);
  font: 600 0.72rem ui-sans-serif, system-ui;
  text-decoration: none;
  transition: color 0.25s ease, background 0.25s ease;
}

.nuda-glass-nav__link:hover,
.nuda-glass-nav__link:focus-visible {
  color: #fafafa;
  outline: none;
}

.nuda-glass-nav__link:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.6);
}

.nuda-glass-nav__link--active {
  color: #09090b;
  background: var(--glass-nav-accent);
  box-shadow: 0 0 14px rgba(228, 255, 84, 0.5);
  animation: nuda-glass-nav-pulse 3s ease-in-out infinite;
  will-change: box-shadow;
}

@keyframes nuda-glass-nav-pulse {
  0%, 100% { box-shadow: 0 0 10px rgba(228, 255, 84, 0.4); }
  50% { box-shadow: 0 0 18px rgba(228, 255, 84, 0.7); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-nav__link--active { animation: none; }
  .nuda-glass-nav__link { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── Glass Toggle ─────────────── */
  {
    id: "glass-toggle",
    name: "Glass Toggle",
    category: "Glassmorphism",
    preview: (
      <button
        className="nuda-glass-toggle"
        role="switch"
        aria-checked="true"
        aria-label="Frosted toggle"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.setAttribute("aria-checked", String(btn.getAttribute("aria-checked") !== "true"));
        }}
      >
        <span className="nuda-glass-toggle__thumb" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-glass-toggle{position:relative;width:64px;height:34px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:rgba(255,255,255,.05);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);cursor:pointer;padding:0;outline:none;transition:background .3s ease,box-shadow .3s ease}
      .nuda-glass-toggle:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.5)}
      .nuda-glass-toggle__thumb{position:absolute;top:3px;left:3px;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.5);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .3s ease,box-shadow .3s ease;will-change:transform}
      .nuda-glass-toggle[aria-checked="true"]{background:rgba(228,255,84,.18)}
      .nuda-glass-toggle[aria-checked="true"] .nuda-glass-toggle__thumb{transform:translateX(30px);background:#e4ff54;box-shadow:0 0 14px rgba(228,255,84,.8)}
      @media (prefers-reduced-motion:reduce){.nuda-glass-toggle,.nuda-glass-toggle__thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-glass-toggle" role="switch" aria-checked="true" aria-label="Frosted toggle">
  <span class="nuda-glass-toggle__thumb" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Toggle
   Frosted switch with a glowing lime thumb when on.
   Customize: --glass-toggle-accent */

.nuda-glass-toggle {
  --glass-toggle-accent: #e4ff54;
  position: relative;
  width: 64px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.nuda-glass-toggle:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.5);
}

.nuda-glass-toggle__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.nuda-glass-toggle[aria-checked="true"] {
  background: rgba(228, 255, 84, 0.18);
}

.nuda-glass-toggle[aria-checked="true"] .nuda-glass-toggle__thumb {
  transform: translateX(30px);
  background: var(--glass-toggle-accent);
  box-shadow: 0 0 14px rgba(228, 255, 84, 0.8);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-toggle,
  .nuda-glass-toggle__thumb { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Glass Toggle — vanilla JS
   Toggles aria-checked on the switch. */

(function () {
  document.querySelectorAll(".nuda-glass-toggle").forEach(function (sw) {
    sw.addEventListener("click", function () {
      var on = sw.getAttribute("aria-checked") === "true";
      sw.setAttribute("aria-checked", String(!on));
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Glass Modal ─────────────── */
  {
    id: "glass-modal",
    name: "Glass Modal",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-modal">
        <button
          className="nuda-glass-modal__open"
          onClick={(e) => e.currentTarget.parentElement!.classList.add("nuda-glass-modal--open")}
        >
          Open dialog
        </button>
        <div className="nuda-glass-modal__backdrop" role="dialog" aria-modal="true" aria-label="Demo dialog">
          <div className="nuda-glass-modal__panel">
            <p className="nuda-glass-modal__title">Frosted Dialog</p>
            <p className="nuda-glass-modal__body">A backdrop-blur modal that scales in.</p>
            <button
              className="nuda-glass-modal__close"
              aria-label="Close dialog"
              onClick={(e) =>
                e.currentTarget.closest(".nuda-glass-modal")!.classList.remove("nuda-glass-modal--open")
              }
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-glass-modal{position:relative;width:240px;height:150px;border-radius:14px;overflow:hidden;background:#0e0e12;border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center}
      .nuda-glass-modal__open{padding:9px 16px;border:1px solid rgba(255,255,255,.16);border-radius:10px;background:rgba(255,255,255,.05);color:#fafafa;font:600 .8rem ui-sans-serif,system-ui;cursor:pointer;transition:background .2s ease}
      .nuda-glass-modal__open:hover{background:rgba(255,255,255,.1)}
      .nuda-glass-modal__backdrop{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(9,9,11,.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease}
      .nuda-glass-modal__panel{width:180px;padding:16px;border-radius:14px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);box-shadow:0 12px 40px rgba(0,0,0,.5);transform:scale(.85);opacity:0;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .3s ease}
      .nuda-glass-modal__title{margin:0;color:#fafafa;font:700 .9rem ui-sans-serif,system-ui}
      .nuda-glass-modal__body{margin:.35rem 0 .8rem;color:rgba(250,250,250,.65);font:500 .72rem ui-sans-serif,system-ui;line-height:1.4}
      .nuda-glass-modal__close{padding:6px 12px;border:none;border-radius:8px;background:#e4ff54;color:#09090b;font:700 .72rem ui-sans-serif,system-ui;cursor:pointer}
      .nuda-glass-modal--open .nuda-glass-modal__backdrop{opacity:1;visibility:visible}
      .nuda-glass-modal--open .nuda-glass-modal__panel{transform:scale(1);opacity:1}
      @media (prefers-reduced-motion:reduce){.nuda-glass-modal__backdrop,.nuda-glass-modal__panel{transition:opacity .2s ease,visibility .2s ease}.nuda-glass-modal__panel{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-modal">
  <button class="nuda-glass-modal__open">Open dialog</button>
  <div class="nuda-glass-modal__backdrop" role="dialog" aria-modal="true" aria-label="Demo dialog">
    <div class="nuda-glass-modal__panel">
      <p class="nuda-glass-modal__title">Frosted Dialog</p>
      <p class="nuda-glass-modal__body">A backdrop-blur modal that scales in.</p>
      <button class="nuda-glass-modal__close" aria-label="Close dialog">Got it</button>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Modal
   Backdrop-blur dialog that scales in.
   Toggle the .nuda-glass-modal--open class on the root to show it.
   Customize: --glass-modal-accent */

.nuda-glass-modal {
  --glass-modal-accent: #e4ff54;
  position: relative;
  width: 240px;
  height: 150px;
  border-radius: 14px;
  overflow: hidden;
  background: #0e0e12;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-glass-modal__open {
  padding: 9px 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #fafafa;
  font: 600 0.8rem ui-sans-serif, system-ui;
  cursor: pointer;
  transition: background 0.2s ease;
}

.nuda-glass-modal__open:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nuda-glass-modal__backdrop {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(9, 9, 11, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.nuda-glass-modal__panel {
  width: 180px;
  padding: 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  transform: scale(0.85);
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
  will-change: transform, opacity;
}

.nuda-glass-modal__title {
  margin: 0;
  color: #fafafa;
  font: 700 0.9rem ui-sans-serif, system-ui;
}

.nuda-glass-modal__body {
  margin: 0.35rem 0 0.8rem;
  color: rgba(250, 250, 250, 0.65);
  font: 500 0.72rem ui-sans-serif, system-ui;
  line-height: 1.4;
}

.nuda-glass-modal__close {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background: var(--glass-modal-accent);
  color: #09090b;
  font: 700 0.72rem ui-sans-serif, system-ui;
  cursor: pointer;
}

.nuda-glass-modal--open .nuda-glass-modal__backdrop {
  opacity: 1;
  visibility: visible;
}

.nuda-glass-modal--open .nuda-glass-modal__panel {
  transform: scale(1);
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-modal__backdrop,
  .nuda-glass-modal__panel { transition: opacity 0.2s ease, visibility 0.2s ease; }
  .nuda-glass-modal__panel { transform: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Glass Modal — vanilla JS
   Opens and closes the frosted dialog. */

(function () {
  document.querySelectorAll(".nuda-glass-modal").forEach(function (root) {
    var open = root.querySelector(".nuda-glass-modal__open");
    var close = root.querySelector(".nuda-glass-modal__close");
    if (open) open.addEventListener("click", function () {
      root.classList.add("nuda-glass-modal--open");
    });
    if (close) close.addEventListener("click", function () {
      root.classList.remove("nuda-glass-modal--open");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Glass Pricing Card ─────────────── */
  {
    id: "glass-pricing",
    name: "Glass Pricing Card",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-pricing" tabIndex={0}>
        <div className="nuda-glass-pricing__shine" aria-hidden="true" />
        <p className="nuda-glass-pricing__tier">Pro</p>
        <p className="nuda-glass-pricing__price"><span>$</span>24<small>/mo</small></p>
        <ul className="nuda-glass-pricing__feats">
          <li>Unlimited projects</li>
          <li>Priority support</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-glass-pricing{position:relative;width:180px;padding:18px;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px) saturate(140%);-webkit-backdrop-filter:blur(12px) saturate(140%);box-shadow:0 8px 32px rgba(0,0,0,.35);transition:transform .35s ease,border-color .35s ease;outline:none}
      .nuda-glass-pricing:hover,.nuda-glass-pricing:focus-visible{transform:translateY(-4px);border-color:rgba(228,255,84,.4)}
      .nuda-glass-pricing:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.5)}
      .nuda-glass-pricing__shine{position:absolute;top:-60%;left:-60%;width:80%;height:220%;background:linear-gradient(transparent,rgba(228,255,84,.25),transparent);transform:translateX(-120%) rotate(20deg)}
      .nuda-glass-pricing:hover .nuda-glass-pricing__shine,.nuda-glass-pricing:focus-visible .nuda-glass-pricing__shine{animation:nuda-glass-pricing-shine .9s ease forwards}
      .nuda-glass-pricing__tier{margin:0;color:#e4ff54;font:700 .72rem ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.12em}
      .nuda-glass-pricing__price{margin:.3rem 0 .6rem;color:#fafafa;font:800 2rem ui-sans-serif,system-ui;letter-spacing:-.03em}
      .nuda-glass-pricing__price span{font-size:1rem;vertical-align:super}
      .nuda-glass-pricing__price small{font-size:.7rem;font-weight:500;color:rgba(250,250,250,.5)}
      .nuda-glass-pricing__feats{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:5px}
      .nuda-glass-pricing__feats li{color:rgba(250,250,250,.7);font:500 .72rem ui-sans-serif,system-ui}
      @keyframes nuda-glass-pricing-shine{0%{transform:translateX(-120%) rotate(20deg)}100%{transform:translateX(320%) rotate(20deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-pricing{transition:none}.nuda-glass-pricing:hover .nuda-glass-pricing__shine,.nuda-glass-pricing:focus-visible .nuda-glass-pricing__shine{animation:none;opacity:.3;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-pricing" tabindex="0">
  <div class="nuda-glass-pricing__shine" aria-hidden="true"></div>
  <p class="nuda-glass-pricing__tier">Pro</p>
  <p class="nuda-glass-pricing__price"><span>$</span>24<small>/mo</small></p>
  <ul class="nuda-glass-pricing__feats">
    <li>Unlimited projects</li>
    <li>Priority support</li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Pricing Card
   Frosted tier card with a lime shine that sweeps on hover/focus.
   Customize: --glass-pricing-accent */

.nuda-glass-pricing {
  --glass-pricing-accent: #e4ff54;
  position: relative;
  width: 180px;
  padding: 18px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s ease, border-color 0.35s ease;
  outline: none;
}

.nuda-glass-pricing:hover,
.nuda-glass-pricing:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(228, 255, 84, 0.4);
}

.nuda-glass-pricing:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.5);
}

.nuda-glass-pricing__shine {
  position: absolute;
  top: -60%;
  left: -60%;
  width: 80%;
  height: 220%;
  background: linear-gradient(transparent, rgba(228, 255, 84, 0.25), transparent);
  transform: translateX(-120%) rotate(20deg);
  will-change: transform;
}

.nuda-glass-pricing:hover .nuda-glass-pricing__shine,
.nuda-glass-pricing:focus-visible .nuda-glass-pricing__shine {
  animation: nuda-glass-pricing-shine 0.9s ease forwards;
}

.nuda-glass-pricing__tier {
  margin: 0;
  color: var(--glass-pricing-accent);
  font: 700 0.72rem ui-sans-serif, system-ui;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.nuda-glass-pricing__price {
  margin: 0.3rem 0 0.6rem;
  color: #fafafa;
  font: 800 2rem ui-sans-serif, system-ui;
  letter-spacing: -0.03em;
}

.nuda-glass-pricing__price span {
  font-size: 1rem;
  vertical-align: super;
}

.nuda-glass-pricing__price small {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(250, 250, 250, 0.5);
}

.nuda-glass-pricing__feats {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.nuda-glass-pricing__feats li {
  color: rgba(250, 250, 250, 0.7);
  font: 500 0.72rem ui-sans-serif, system-ui;
}

@keyframes nuda-glass-pricing-shine {
  0% { transform: translateX(-120%) rotate(20deg); }
  100% { transform: translateX(320%) rotate(20deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-pricing { transition: none; }
  .nuda-glass-pricing:hover .nuda-glass-pricing__shine,
  .nuda-glass-pricing:focus-visible .nuda-glass-pricing__shine {
    animation: none;
    opacity: 0.3;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Glass Toast ─────────────── */
  {
    id: "glass-notification",
    name: "Glass Toast",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-toast" role="status">
        <span className="nuda-glass-toast__dot" aria-hidden="true" />
        <div className="nuda-glass-toast__body">
          <p className="nuda-glass-toast__title">Saved</p>
          <p className="nuda-glass-toast__msg">Your changes are live.</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-glass-toast{display:flex;align-items:center;gap:10px;width:210px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(14px) saturate(150%);-webkit-backdrop-filter:blur(14px) saturate(150%);box-shadow:0 10px 30px rgba(0,0,0,.4);transform:translateX(110%);opacity:0;animation:nuda-glass-toast-in 4s ease-in-out infinite}
      .nuda-glass-toast__dot{flex:none;width:9px;height:9px;border-radius:50%;background:#e4ff54;box-shadow:0 0 10px rgba(228,255,84,.8)}
      .nuda-glass-toast__body{min-width:0}
      .nuda-glass-toast__title{margin:0;color:#fafafa;font:700 .8rem ui-sans-serif,system-ui}
      .nuda-glass-toast__msg{margin:.1rem 0 0;color:rgba(250,250,250,.6);font:500 .72rem ui-sans-serif,system-ui}
      @keyframes nuda-glass-toast-in{0%{transform:translateX(110%);opacity:0}12%,80%{transform:translateX(0);opacity:1}95%,100%{transform:translateX(110%);opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-toast{animation:none;transform:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-toast" role="status">
  <span class="nuda-glass-toast__dot" aria-hidden="true"></span>
  <div class="nuda-glass-toast__body">
    <p class="nuda-glass-toast__title">Saved</p>
    <p class="nuda-glass-toast__msg">Your changes are live.</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Toast
   Frosted toast that slides in from the right.
   Customize: --glass-toast-accent */

.nuda-glass-toast {
  --glass-toast-accent: #e4ff54;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 210px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transform: translateX(110%);
  opacity: 0;
  animation: nuda-glass-toast-in 4s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-glass-toast__dot {
  flex: none;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--glass-toast-accent);
  box-shadow: 0 0 10px rgba(228, 255, 84, 0.8);
}

.nuda-glass-toast__body { min-width: 0; }

.nuda-glass-toast__title {
  margin: 0;
  color: #fafafa;
  font: 700 0.8rem ui-sans-serif, system-ui;
}

.nuda-glass-toast__msg {
  margin: 0.1rem 0 0;
  color: rgba(250, 250, 250, 0.6);
  font: 500 0.72rem ui-sans-serif, system-ui;
}

/* In production, trigger a single play instead of an infinite loop. */
@keyframes nuda-glass-toast-in {
  0% { transform: translateX(110%); opacity: 0; }
  12%, 80% { transform: translateX(0); opacity: 1; }
  95%, 100% { transform: translateX(110%); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-toast {
    animation: none;
    transform: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* ─────────────── Glass Tabs ─────────────── */
  {
    id: "glass-tabs",
    name: "Glass Tabs",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-tabs" role="tablist" aria-label="Demo tabs">
        <span className="nuda-glass-tabs__indicator" aria-hidden="true" />
        <button className="nuda-glass-tabs__tab nuda-glass-tabs__tab--active" role="tab" aria-selected="true">Day</button>
        <button className="nuda-glass-tabs__tab" role="tab" aria-selected="false">Week</button>
        <button className="nuda-glass-tabs__tab" role="tab" aria-selected="false">Month</button>
      </div>
    ),
    cssInline: `
      .nuda-glass-tabs{position:relative;display:flex;gap:2px;padding:4px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);--nuda-glass-tabs-i:0}
      .nuda-glass-tabs__indicator{position:absolute;top:4px;left:4px;width:calc((100% - 8px) / 3);height:calc(100% - 8px);border-radius:9px;background:rgba(228,255,84,.18);border:1px solid rgba(228,255,84,.4);box-shadow:0 0 14px rgba(228,255,84,.3);transform:translateX(calc(var(--nuda-glass-tabs-i) * 100%));transition:transform .35s cubic-bezier(.34,1.4,.64,1);will-change:transform}
      .nuda-glass-tabs__tab{position:relative;z-index:1;flex:1;padding:7px 14px;border:none;background:none;color:rgba(250,250,250,.55);font:600 .74rem ui-sans-serif,system-ui;cursor:pointer;border-radius:9px;transition:color .25s ease;outline:none}
      .nuda-glass-tabs__tab:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.6)}
      .nuda-glass-tabs__tab--active{color:#fafafa}
      @media (prefers-reduced-motion:reduce){.nuda-glass-tabs__indicator{transition:none}.nuda-glass-tabs__tab{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-tabs" role="tablist" aria-label="View range" style="--nuda-glass-tabs-i:0">
  <span class="nuda-glass-tabs__indicator" aria-hidden="true"></span>
  <button class="nuda-glass-tabs__tab nuda-glass-tabs__tab--active" role="tab" aria-selected="true">Day</button>
  <button class="nuda-glass-tabs__tab" role="tab" aria-selected="false">Week</button>
  <button class="nuda-glass-tabs__tab" role="tab" aria-selected="false">Month</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Tabs
   Pill tabs with a sliding frosted-lime indicator.
   Drive position by setting --nuda-glass-tabs-i to the active index (0,1,2).
   Customize: --glass-tabs-accent */

.nuda-glass-tabs {
  --glass-tabs-accent: #e4ff54;
  --nuda-glass-tabs-i: 0;
  position: relative;
  display: flex;
  gap: 2px;
  padding: 4px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nuda-glass-tabs__indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc((100% - 8px) / 3);
  height: calc(100% - 8px);
  border-radius: 9px;
  background: rgba(228, 255, 84, 0.18);
  border: 1px solid rgba(228, 255, 84, 0.4);
  box-shadow: 0 0 14px rgba(228, 255, 84, 0.3);
  transform: translateX(calc(var(--nuda-glass-tabs-i) * 100%));
  transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
  will-change: transform;
}

.nuda-glass-tabs__tab {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 7px 14px;
  border: none;
  background: none;
  color: rgba(250, 250, 250, 0.55);
  font: 600 0.74rem ui-sans-serif, system-ui;
  cursor: pointer;
  border-radius: 9px;
  transition: color 0.25s ease;
  outline: none;
}

.nuda-glass-tabs__tab:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.6);
}

.nuda-glass-tabs__tab--active {
  color: #fafafa;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-tabs__indicator { transition: none; }
  .nuda-glass-tabs__tab { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Glass Tabs — vanilla JS
   Moves the indicator and updates aria-selected on click. */

(function () {
  document.querySelectorAll(".nuda-glass-tabs").forEach(function (group) {
    var tabs = group.querySelectorAll(".nuda-glass-tabs__tab");
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        group.style.setProperty("--nuda-glass-tabs-i", String(i));
        tabs.forEach(function (t, j) {
          t.classList.toggle("nuda-glass-tabs__tab--active", j === i);
          t.setAttribute("aria-selected", String(j === i));
        });
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Glass Search Bar ─────────────── */
  {
    id: "glass-search",
    name: "Glass Search Bar",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-search">
        <svg className="nuda-glass-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
        <input className="nuda-glass-search__input" type="text" placeholder="Search…" aria-label="Search" />
      </div>
    ),
    cssInline: `
      .nuda-glass-search{display:flex;align-items:center;gap:8px;width:220px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px) saturate(140%);-webkit-backdrop-filter:blur(12px) saturate(140%);transition:border-color .3s ease,box-shadow .3s ease}
      .nuda-glass-search:focus-within{border-color:rgba(228,255,84,.5);box-shadow:0 0 18px rgba(228,255,84,.25)}
      .nuda-glass-search__icon{flex:none;width:17px;height:17px;color:rgba(250,250,250,.5);transition:color .3s ease}
      .nuda-glass-search:focus-within .nuda-glass-search__icon{color:#e4ff54}
      .nuda-glass-search__input{flex:1;min-width:0;background:none;border:none;outline:none;color:#fafafa;font:500 .82rem ui-sans-serif,system-ui}
      .nuda-glass-search__input::placeholder{color:rgba(250,250,250,.4)}
      @media (prefers-reduced-motion:reduce){.nuda-glass-search,.nuda-glass-search__icon{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-search">
  <svg class="nuda-glass-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
  <input class="nuda-glass-search__input" type="text" placeholder="Search&hellip;" aria-label="Search" />
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Search Bar
   Frosted pill input with a lime focus glow.
   Customize: --glass-search-accent */

.nuda-glass-search {
  --glass-search-accent: #e4ff54;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 220px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.nuda-glass-search:focus-within {
  border-color: rgba(228, 255, 84, 0.5);
  box-shadow: 0 0 18px rgba(228, 255, 84, 0.25);
}

.nuda-glass-search__icon {
  flex: none;
  width: 17px;
  height: 17px;
  color: rgba(250, 250, 250, 0.5);
  transition: color 0.3s ease;
}

.nuda-glass-search:focus-within .nuda-glass-search__icon {
  color: var(--glass-search-accent);
}

.nuda-glass-search__input {
  flex: 1;
  min-width: 0;
  background: none;
  border: none;
  outline: none;
  color: #fafafa;
  font: 500 0.82rem ui-sans-serif, system-ui;
}

.nuda-glass-search__input::placeholder {
  color: rgba(250, 250, 250, 0.4);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-search,
  .nuda-glass-search__icon { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── Glass Badge ─────────────── */
  {
    id: "glass-badge",
    name: "Glass Badge",
    category: "Glassmorphism",
    preview: (
      <span className="nuda-glass-badge">
        <span className="nuda-glass-badge__dot" aria-hidden="true" />
        Online
      </span>
    ),
    cssInline: `
      .nuda-glass-badge{display:inline-flex;align-items:center;gap:7px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px) saturate(140%);-webkit-backdrop-filter:blur(10px) saturate(140%);color:#fafafa;font:600 .74rem ui-sans-serif,system-ui}
      .nuda-glass-badge__dot{position:relative;width:8px;height:8px;border-radius:50%;background:#e4ff54}
      .nuda-glass-badge__dot::after{content:'';position:absolute;inset:0;border-radius:50%;background:#e4ff54;animation:nuda-glass-badge-pulse 2s ease-out infinite}
      @keyframes nuda-glass-badge-pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(3);opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-badge__dot::after{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-glass-badge">
  <span class="nuda-glass-badge__dot" aria-hidden="true"></span>
  Online
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Badge
   Translucent status chip with a pulsing lime dot.
   Customize: --glass-badge-accent */

.nuda-glass-badge {
  --glass-badge-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px) saturate(140%);
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  color: #fafafa;
  font: 600 0.74rem ui-sans-serif, system-ui;
}

.nuda-glass-badge__dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--glass-badge-accent);
}

.nuda-glass-badge__dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--glass-badge-accent);
  animation: nuda-glass-badge-pulse 2s ease-out infinite;
  will-change: transform, opacity;
}

@keyframes nuda-glass-badge-pulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(3); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-badge__dot::after {
    animation: none;
    opacity: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── Blur Reveal ─────────────── */
  {
    id: "glass-blur-reveal",
    name: "Blur Reveal",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-reveal" tabIndex={0} aria-label="Hover to sharpen">
        <p className="nuda-glass-reveal__title">Focus</p>
        <p className="nuda-glass-reveal__sub">hover to sharpen</p>
      </div>
    ),
    cssInline: `
      .nuda-glass-reveal{display:flex;flex-direction:column;align-items:center;justify-content:center;width:180px;height:110px;border-radius:16px;background:linear-gradient(135deg,rgba(228,255,84,.12),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.12);filter:blur(5px);opacity:.7;transition:filter .45s ease,opacity .45s ease,transform .45s ease;outline:none}
      .nuda-glass-reveal:hover,.nuda-glass-reveal:focus-visible{filter:blur(0);opacity:1;transform:scale(1.03)}
      .nuda-glass-reveal:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.5)}
      .nuda-glass-reveal__title{margin:0;color:#fafafa;font:800 1.3rem ui-sans-serif,system-ui;letter-spacing:-.03em}
      .nuda-glass-reveal__sub{margin:.2rem 0 0;color:rgba(250,250,250,.6);font:500 .72rem ui-sans-serif,system-ui}
      @media (prefers-reduced-motion:reduce){.nuda-glass-reveal{transition:none;filter:blur(0);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-reveal" tabindex="0" aria-label="Hover to sharpen">
  <p class="nuda-glass-reveal__title">Focus</p>
  <p class="nuda-glass-reveal__sub">hover to sharpen</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Blur Reveal
   Content sharpens from a frosted blur on hover/focus.
   Customize: --glass-reveal-blur */

.nuda-glass-reveal {
  --glass-reveal-blur: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 110px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(228, 255, 84, 0.12), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.12);
  filter: blur(var(--glass-reveal-blur));
  opacity: 0.7;
  transition: filter 0.45s ease, opacity 0.45s ease, transform 0.45s ease;
  outline: none;
  will-change: filter, transform;
}

.nuda-glass-reveal:hover,
.nuda-glass-reveal:focus-visible {
  filter: blur(0);
  opacity: 1;
  transform: scale(1.03);
}

.nuda-glass-reveal:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.5);
}

.nuda-glass-reveal__title {
  margin: 0;
  color: #fafafa;
  font: 800 1.3rem ui-sans-serif, system-ui;
  letter-spacing: -0.03em;
}

.nuda-glass-reveal__sub {
  margin: 0.2rem 0 0;
  color: rgba(250, 250, 250, 0.6);
  font: 500 0.72rem ui-sans-serif, system-ui;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-reveal {
    transition: none;
    filter: blur(0);
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* ─────────────── Glass Dock ─────────────── */
  {
    id: "glass-dock",
    name: "Glass Dock",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-dock" role="toolbar" aria-label="Demo dock">
        <button className="nuda-glass-dock__app" aria-label="App one" />
        <button className="nuda-glass-dock__app" aria-label="App two" />
        <button className="nuda-glass-dock__app" aria-label="App three" />
        <button className="nuda-glass-dock__app" aria-label="App four" />
      </div>
    ),
    cssInline: `
      .nuda-glass-dock{display:flex;align-items:flex-end;gap:10px;padding:10px 14px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(16px) saturate(150%);-webkit-backdrop-filter:blur(16px) saturate(150%);box-shadow:0 10px 34px rgba(0,0,0,.4)}
      .nuda-glass-dock__app{width:38px;height:38px;border:none;border-radius:11px;background:linear-gradient(135deg,#e4ff54,#a3c93a);cursor:pointer;transition:transform .28s cubic-bezier(.34,1.56,.64,1);transform-origin:bottom center;will-change:transform;padding:0}
      .nuda-glass-dock__app:nth-child(2){background:linear-gradient(135deg,#7dd3fc,#38bdf8)}
      .nuda-glass-dock__app:nth-child(3){background:linear-gradient(135deg,#f0abfc,#d946ef)}
      .nuda-glass-dock__app:nth-child(4){background:linear-gradient(135deg,#fda4af,#fb7185)}
      .nuda-glass-dock__app:hover,.nuda-glass-dock__app:focus-visible{transform:scale(1.35) translateY(-6px);outline:none}
      .nuda-glass-dock__app:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.6)}
      .nuda-glass-dock__app:hover+.nuda-glass-dock__app,.nuda-glass-dock__app:focus-visible+.nuda-glass-dock__app{transform:scale(1.15) translateY(-3px)}
      @media (prefers-reduced-motion:reduce){.nuda-glass-dock__app{transition:none}.nuda-glass-dock__app:hover,.nuda-glass-dock__app:focus-visible{transform:scale(1.12)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-dock" role="toolbar" aria-label="Application dock">
  <button class="nuda-glass-dock__app" aria-label="App one"></button>
  <button class="nuda-glass-dock__app" aria-label="App two"></button>
  <button class="nuda-glass-dock__app" aria-label="App three"></button>
  <button class="nuda-glass-dock__app" aria-label="App four"></button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Dock
   Frosted bottom dock; icons magnify on hover (macOS-style).
   Customize: --glass-dock-accent */

.nuda-glass-dock {
  --glass-dock-accent: #e4ff54;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.4);
}

.nuda-glass-dock__app {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 11px;
  background: linear-gradient(135deg, #e4ff54, #a3c93a);
  cursor: pointer;
  transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: bottom center;
  will-change: transform;
  padding: 0;
}

.nuda-glass-dock__app:nth-child(2) { background: linear-gradient(135deg, #7dd3fc, #38bdf8); }
.nuda-glass-dock__app:nth-child(3) { background: linear-gradient(135deg, #f0abfc, #d946ef); }
.nuda-glass-dock__app:nth-child(4) { background: linear-gradient(135deg, #fda4af, #fb7185); }

.nuda-glass-dock__app:hover,
.nuda-glass-dock__app:focus-visible {
  transform: scale(1.35) translateY(-6px);
  outline: none;
}

.nuda-glass-dock__app:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.6);
}

/* Neighbour gets a smaller lift for the magnify falloff. */
.nuda-glass-dock__app:hover + .nuda-glass-dock__app,
.nuda-glass-dock__app:focus-visible + .nuda-glass-dock__app {
  transform: scale(1.15) translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-dock__app { transition: none; }
  .nuda-glass-dock__app:hover,
  .nuda-glass-dock__app:focus-visible { transform: scale(1.12); }
}`,
      },
    ],
  },

  /* ─────────────── Glass Stat Tile ─────────────── */
  {
    id: "glass-stat",
    name: "Glass Stat Tile",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-stat">
        <div className="nuda-glass-stat__glow" aria-hidden="true" />
        <p className="nuda-glass-stat__label">Revenue</p>
        <p className="nuda-glass-stat__value">$48.2k</p>
        <p className="nuda-glass-stat__trend">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v6h-6" />
          </svg>
          +12.4%
        </p>
      </div>
    ),
    cssInline: `
      .nuda-glass-stat{position:relative;width:170px;padding:16px;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px) saturate(140%);-webkit-backdrop-filter:blur(12px) saturate(140%);box-shadow:0 8px 32px rgba(0,0,0,.35)}
      .nuda-glass-stat__glow{position:absolute;top:-40%;right:-30%;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.35),transparent 70%);filter:blur(8px);animation:nuda-glass-stat-glow 5s ease-in-out infinite}
      .nuda-glass-stat__label{position:relative;margin:0;color:rgba(250,250,250,.55);font:600 .7rem ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.1em}
      .nuda-glass-stat__value{position:relative;margin:.3rem 0 .25rem;color:#fafafa;font:800 1.7rem ui-sans-serif,system-ui;letter-spacing:-.03em}
      .nuda-glass-stat__trend{position:relative;display:flex;align-items:center;gap:4px;margin:0;color:#e4ff54;font:700 .74rem ui-sans-serif,system-ui}
      .nuda-glass-stat__trend svg{width:14px;height:14px}
      @keyframes nuda-glass-stat-glow{0%,100%{transform:translate(0,0) scale(1);opacity:.8}50%{transform:translate(-10px,10px) scale(1.15);opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-stat__glow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-stat">
  <div class="nuda-glass-stat__glow" aria-hidden="true"></div>
  <p class="nuda-glass-stat__label">Revenue</p>
  <p class="nuda-glass-stat__value">$48.2k</p>
  <p class="nuda-glass-stat__trend">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8"/>
      <path d="M21 7v6h-6"/>
    </svg>
    +12.4%
  </p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Stat Tile
   KPI tile with a frosted backdrop and a drifting lime glow.
   Customize: --glass-stat-accent */

.nuda-glass-stat {
  --glass-stat-accent: #e4ff54;
  position: relative;
  width: 170px;
  padding: 16px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

.nuda-glass-stat__glow {
  position: absolute;
  top: -40%;
  right: -30%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(228, 255, 84, 0.35), transparent 70%);
  filter: blur(8px);
  animation: nuda-glass-stat-glow 5s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-glass-stat__label {
  position: relative;
  margin: 0;
  color: rgba(250, 250, 250, 0.55);
  font: 600 0.7rem ui-sans-serif, system-ui;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.nuda-glass-stat__value {
  position: relative;
  margin: 0.3rem 0 0.25rem;
  color: #fafafa;
  font: 800 1.7rem ui-sans-serif, system-ui;
  letter-spacing: -0.03em;
}

.nuda-glass-stat__trend {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  color: var(--glass-stat-accent);
  font: 700 0.74rem ui-sans-serif, system-ui;
}

.nuda-glass-stat__trend svg {
  width: 14px;
  height: 14px;
}

@keyframes nuda-glass-stat-glow {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
  50% { transform: translate(-10px, 10px) scale(1.15); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glass-stat__glow { animation: none; }
}`,
      },
    ],
  },
];
