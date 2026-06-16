import type { NudaComponent } from "./types";

/* ============================================================
   CSS-ONLY INTERACTIONS — 10 copy-paste components
   ZERO JavaScript. Pure CSS using :checked / :target /
   :focus-within / :has() / <details> / scroll-snap.
   The gallery preview renders the SAME HTML the copy tab ships,
   so the interactions work in the preview with no handlers.
   Brand: dark #09090b + lime #e4ff54.
   Prefix + keyframe stem: nuda-css-*
   ============================================================ */

export const cssOnlyInteractions: NudaComponent[] = [
  /* ─────────────── 1. PURE CSS ACCORDION ─────────────── */
  {
    id: "css-accordion",
    name: "Pure CSS Accordion",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-accordion{--nuda-css-acc-accent:#e4ff54;display:flex;flex-direction:column;gap:6px;width:100%;max-width:340px;color:#fff;font-family:inherit}
      .nuda-css-accordion__item{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;overflow:hidden}
      .nuda-css-accordion__item[open]{border-color:rgba(228,255,84,.2)}
      .nuda-css-accordion__header{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:44px;padding:.6rem .85rem;font-size:.85rem;font-weight:600;color:#ccc;cursor:pointer;list-style:none;transition:color .2s}
      .nuda-css-accordion__header::-webkit-details-marker{display:none}
      .nuda-css-accordion__header:hover{color:#fff}
      .nuda-css-accordion__header:focus-visible{outline:2px solid var(--nuda-css-acc-accent);outline-offset:-2px}
      .nuda-css-accordion__icon{display:inline-block;color:#666;transition:transform .3s ease,color .2s}
      .nuda-css-accordion__item[open] .nuda-css-accordion__icon{color:var(--nuda-css-acc-accent);transform:rotate(45deg)}
      .nuda-css-accordion__body{padding:0 .85rem .7rem;font-size:.78rem;color:#999;animation:nuda-css-acc-open .3s ease-out}
      @keyframes nuda-css-acc-open{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-css-accordion__body{animation:none}.nuda-css-accordion__icon{transition:none}}
    `,
    preview: (
      <div className="nuda-css-accordion" aria-hidden="true">
        <details className="nuda-css-accordion__item" open>
          <summary className="nuda-css-accordion__header">
            <span>What is NudaUI?</span>
            <span className="nuda-css-accordion__icon">&#43;</span>
          </summary>
          <div className="nuda-css-accordion__body">A library of copy-paste CSS components.</div>
        </details>
        <details className="nuda-css-accordion__item">
          <summary className="nuda-css-accordion__header">
            <span>Does it need JavaScript?</span>
            <span className="nuda-css-accordion__icon">&#43;</span>
          </summary>
          <div className="nuda-css-accordion__body">No — this accordion is pure CSS.</div>
        </details>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Accordion — native <details>, zero JS -->
<div class="nuda-css-accordion">
  <details class="nuda-css-accordion__item" open>
    <summary class="nuda-css-accordion__header">
      <span>What is NudaUI?</span>
      <span class="nuda-css-accordion__icon">+</span>
    </summary>
    <div class="nuda-css-accordion__body">A library of copy-paste CSS components.</div>
  </details>
  <details class="nuda-css-accordion__item">
    <summary class="nuda-css-accordion__header">
      <span>Does it need JavaScript?</span>
      <span class="nuda-css-accordion__icon">+</span>
    </summary>
    <div class="nuda-css-accordion__body">No — this accordion is pure CSS.</div>
  </details>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Accordion
   Native <details>/<summary>. No JS.
   Customize: --nuda-css-acc-accent */

.nuda-css-accordion {
  --nuda-css-acc-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 480px;
  color: #fff;
}

.nuda-css-accordion__item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  overflow: hidden;
}

.nuda-css-accordion__item[open] {
  border-color: rgba(228, 255, 84, 0.2);
}

.nuda-css-accordion__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ccc;
  cursor: pointer;
  list-style: none;
  transition: color 0.2s;
}

.nuda-css-accordion__header::-webkit-details-marker { display: none; }

.nuda-css-accordion__header:hover { color: #fff; }

.nuda-css-accordion__header:focus-visible {
  outline: 2px solid var(--nuda-css-acc-accent);
  outline-offset: -2px;
}

.nuda-css-accordion__icon {
  display: inline-block;
  font-size: 1.1rem;
  color: #666;
  transition: transform 0.3s ease, color 0.2s;
}

.nuda-css-accordion__item[open] .nuda-css-accordion__icon {
  color: var(--nuda-css-acc-accent);
  transform: rotate(45deg);
}

.nuda-css-accordion__body {
  padding: 0 1rem 0.9rem;
  font-size: 0.85rem;
  color: #999;
  animation: nuda-css-acc-open 0.3s ease-out;
}

@keyframes nuda-css-acc-open {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-accordion__body { animation: none; }
  .nuda-css-accordion__icon { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. PURE CSS TABS ─────────────── */
  {
    id: "css-tabs",
    name: "Pure CSS Tabs",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-tabs{--nuda-css-tab-accent:#e4ff54;width:100%;max-width:340px;font-family:inherit}
      .nuda-css-tabs__bar{display:flex;background:rgba(255,255,255,.04);border-radius:9px;padding:3px;gap:2px}
      .nuda-css-tabs__radio{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-css-tabs__tab{flex:1;display:flex;align-items:center;justify-content:center;min-height:34px;text-align:center;font-size:.72rem;color:#888;border-radius:7px;cursor:pointer;transition:color .2s,background .2s}
      .nuda-css-tabs__tab:hover{color:#ccc}
      .nuda-css-tabs__panel{display:none;margin-top:.5rem;padding:.7rem;font-size:.75rem;color:#bbb;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:9px;animation:nuda-css-tab-fade .3s ease-out}
      .nuda-css-tabs__radio:focus-visible+.nuda-css-tabs__tab{outline:2px solid var(--nuda-css-tab-accent);outline-offset:2px}
      #nuda-css-tab-r1:checked~.nuda-css-tabs__bar label[for=nuda-css-tab-r1],
      #nuda-css-tab-r2:checked~.nuda-css-tabs__bar label[for=nuda-css-tab-r2]{background:var(--nuda-css-tab-accent);color:#09090b;font-weight:700}
      #nuda-css-tab-r1:checked~.nuda-css-tabs__panel--1,
      #nuda-css-tab-r2:checked~.nuda-css-tabs__panel--2{display:block}
      @keyframes nuda-css-tab-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-css-tabs__panel{animation:none}}
    `,
    preview: (
      <div className="nuda-css-tabs" aria-hidden="true">
        <input className="nuda-css-tabs__radio" type="radio" name="nuda-css-tabs" id="nuda-css-tab-r1" defaultChecked />
        <input className="nuda-css-tabs__radio" type="radio" name="nuda-css-tabs" id="nuda-css-tab-r2" />
        <div className="nuda-css-tabs__bar">
          <label className="nuda-css-tabs__tab" htmlFor="nuda-css-tab-r1">Overview</label>
          <label className="nuda-css-tabs__tab" htmlFor="nuda-css-tab-r2">Details</label>
        </div>
        <div className="nuda-css-tabs__panel nuda-css-tabs__panel--1">Overview panel content.</div>
        <div className="nuda-css-tabs__panel nuda-css-tabs__panel--2">Details panel content.</div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Tabs — radio-driven, zero JS -->
<div class="nuda-css-tabs">
  <input class="nuda-css-tabs__radio" type="radio" name="nuda-css-tabs" id="nuda-css-tab-r1" checked />
  <input class="nuda-css-tabs__radio" type="radio" name="nuda-css-tabs" id="nuda-css-tab-r2" />
  <div class="nuda-css-tabs__bar">
    <label class="nuda-css-tabs__tab" for="nuda-css-tab-r1">Overview</label>
    <label class="nuda-css-tabs__tab" for="nuda-css-tab-r2">Details</label>
  </div>
  <div class="nuda-css-tabs__panel nuda-css-tabs__panel--1">Overview panel content.</div>
  <div class="nuda-css-tabs__panel nuda-css-tabs__panel--2">Details panel content.</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Tabs
   Hidden radios + sibling selectors switch panels. No JS.
   Customize: --nuda-css-tab-accent */

.nuda-css-tabs {
  --nuda-css-tab-accent: #e4ff54;
  max-width: 480px;
}

.nuda-css-tabs__bar {
  display: flex;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  padding: 4px;
  gap: 2px;
}

/* Visually-hidden native radios (still focusable) */
.nuda-css-tabs__radio {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); border: 0;
}

.nuda-css-tabs__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}

.nuda-css-tabs__tab:hover { color: #ccc; }

.nuda-css-tabs__panel {
  display: none;
  margin-top: 0.5rem;
  padding: 1rem;
  font-size: 0.85rem;
  color: #bbb;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  animation: nuda-css-tab-fade 0.3s ease-out;
}

/* Keyboard focus ring on the visible label */
.nuda-css-tabs__radio:focus-visible + .nuda-css-tabs__bar label {
  outline: 2px solid var(--nuda-css-tab-accent);
  outline-offset: 2px;
}

/* Active tab + matching panel */
#nuda-css-tab-r1:checked ~ .nuda-css-tabs__bar label[for="nuda-css-tab-r1"],
#nuda-css-tab-r2:checked ~ .nuda-css-tabs__bar label[for="nuda-css-tab-r2"] {
  background: var(--nuda-css-tab-accent);
  color: #09090b;
  font-weight: 700;
}

#nuda-css-tab-r1:checked ~ .nuda-css-tabs__panel--1,
#nuda-css-tab-r2:checked ~ .nuda-css-tabs__panel--2 {
  display: block;
}

@keyframes nuda-css-tab-fade {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-tabs__panel { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. PURE CSS MODAL ─────────────── */
  {
    id: "css-modal",
    name: "Pure CSS Modal",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-modal{--nuda-css-modal-accent:#e4ff54;font-family:inherit}
      .nuda-css-modal__open{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:.5rem 1rem;font-size:.78rem;font-weight:600;color:#09090b;background:var(--nuda-css-modal-accent);border-radius:8px;text-decoration:none;cursor:pointer}
      .nuda-css-modal__overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);opacity:0;pointer-events:none;transition:opacity .25s ease;border-radius:12px}
      .nuda-css-modal__dialog{width:78%;max-width:240px;padding:1rem;background:#111114;border:1px solid rgba(228,255,84,.2);border-radius:12px;color:#fff;transform:scale(.9);transition:transform .25s cubic-bezier(.16,1,.3,1);box-shadow:0 18px 50px rgba(0,0,0,.6)}
      .nuda-css-modal__title{margin:0 0 .35rem;font-size:.85rem;font-weight:700}
      .nuda-css-modal__text{margin:0 0 .7rem;font-size:.72rem;color:#999}
      .nuda-css-modal__close{display:inline-flex;align-items:center;min-height:34px;padding:.35rem .8rem;font-size:.72rem;color:#ccc;border:1px solid rgba(255,255,255,.15);border-radius:7px;text-decoration:none;cursor:pointer}
      .nuda-css-modal__overlay:target{opacity:1;pointer-events:auto}
      .nuda-css-modal__overlay:target .nuda-css-modal__dialog{transform:scale(1)}
      @media(prefers-reduced-motion:reduce){.nuda-css-modal__overlay,.nuda-css-modal__dialog{transition:none}}
    `,
    preview: (
      <div className="nuda-css-modal" style={{ position: "relative", width: "100%", height: 150 }} aria-hidden="true">
        <a className="nuda-css-modal__open" href="#nuda-css-modal-demo">Open modal</a>
        <div className="nuda-css-modal__overlay" id="nuda-css-modal-demo">
          <div className="nuda-css-modal__dialog" role="dialog" aria-modal="true">
            <h3 className="nuda-css-modal__title">Confirm action</h3>
            <p className="nuda-css-modal__text">This dialog opens via the URL hash. Pure CSS :target.</p>
            <a className="nuda-css-modal__close" href="#">Close</a>
          </div>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Modal — :target dialog, zero JS -->
<div class="nuda-css-modal">
  <a class="nuda-css-modal__open" href="#nuda-css-modal-demo">Open modal</a>

  <div class="nuda-css-modal__overlay" id="nuda-css-modal-demo">
    <div class="nuda-css-modal__dialog" role="dialog" aria-modal="true"
         aria-labelledby="nuda-css-modal-title">
      <h3 class="nuda-css-modal__title" id="nuda-css-modal-title">Confirm action</h3>
      <p class="nuda-css-modal__text">This dialog opens via the URL hash. Pure CSS :target.</p>
      <a class="nuda-css-modal__close" href="#">Close</a>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Modal
   The :target pseudo-class shows the overlay when its id
   is the URL hash. No JS.
   Customize: --nuda-css-modal-accent */

.nuda-css-modal {
  --nuda-css-modal-accent: #e4ff54;
}

.nuda-css-modal__open {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #09090b;
  background: var(--nuda-css-modal-accent);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
}

.nuda-css-modal__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 100;
}

.nuda-css-modal__dialog {
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
  background: #111114;
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 14px;
  color: #fff;
  transform: scale(0.9);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.6);
}

.nuda-css-modal__title { margin: 0 0 0.5rem; font-size: 1.05rem; font-weight: 700; }
.nuda-css-modal__text  { margin: 0 0 1rem; font-size: 0.85rem; color: #999; }

.nuda-css-modal__close {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: #ccc;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
}

/* Open state — driven entirely by the URL hash */
.nuda-css-modal__overlay:target {
  opacity: 1;
  pointer-events: auto;
}

.nuda-css-modal__overlay:target .nuda-css-modal__dialog {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-modal__overlay,
  .nuda-css-modal__dialog { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. PURE CSS DROPDOWN ─────────────── */
  {
    id: "css-dropdown",
    name: "Pure CSS Dropdown",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-dropdown{--nuda-css-dd-accent:#e4ff54;position:relative;display:inline-block;font-family:inherit}
      .nuda-css-dropdown__trigger{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:.5rem .9rem;font-size:.78rem;font-weight:600;color:#fff;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;cursor:pointer}
      .nuda-css-dropdown__trigger:focus-visible{outline:2px solid var(--nuda-css-dd-accent);outline-offset:2px}
      .nuda-css-dropdown__caret{transition:transform .25s ease}
      .nuda-css-dropdown__menu{position:absolute;top:calc(100% + 6px);left:0;min-width:150px;padding:4px;background:#111114;border:1px solid rgba(255,255,255,.1);border-radius:10px;list-style:none;margin:0;opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .2s ease,transform .2s ease;z-index:20;box-shadow:0 12px 30px rgba(0,0,0,.5)}
      .nuda-css-dropdown__link{display:flex;align-items:center;min-height:36px;padding:.4rem .6rem;font-size:.74rem;color:#bbb;border-radius:7px;text-decoration:none;cursor:pointer}
      .nuda-css-dropdown__link:hover,.nuda-css-dropdown__link:focus-visible{background:rgba(228,255,84,.1);color:var(--nuda-css-dd-accent);outline:none}
      .nuda-css-dropdown:focus-within .nuda-css-dropdown__menu{opacity:1;transform:translateY(0);pointer-events:auto}
      .nuda-css-dropdown:focus-within .nuda-css-dropdown__caret{transform:rotate(180deg)}
      @media(prefers-reduced-motion:reduce){.nuda-css-dropdown__menu,.nuda-css-dropdown__caret{transition:none}}
    `,
    preview: (
      <div className="nuda-css-dropdown" aria-hidden="true">
        <button className="nuda-css-dropdown__trigger" type="button">
          Menu <span className="nuda-css-dropdown__caret">&#9662;</span>
        </button>
        <ul className="nuda-css-dropdown__menu">
          <li><a className="nuda-css-dropdown__link" href="#">Profile</a></li>
          <li><a className="nuda-css-dropdown__link" href="#">Settings</a></li>
          <li><a className="nuda-css-dropdown__link" href="#">Sign out</a></li>
        </ul>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Dropdown — opens on :focus-within, zero JS -->
<div class="nuda-css-dropdown">
  <button class="nuda-css-dropdown__trigger" type="button">
    Menu <span class="nuda-css-dropdown__caret">&#9662;</span>
  </button>
  <ul class="nuda-css-dropdown__menu">
    <li><a class="nuda-css-dropdown__link" href="#">Profile</a></li>
    <li><a class="nuda-css-dropdown__link" href="#">Settings</a></li>
    <li><a class="nuda-css-dropdown__link" href="#">Sign out</a></li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Dropdown
   :focus-within keeps the menu open while the trigger OR a
   menu item is focused (click + keyboard friendly). No JS.
   Customize: --nuda-css-dd-accent */

.nuda-css-dropdown {
  --nuda-css-dd-accent: #e4ff54;
  position: relative;
  display: inline-block;
}

.nuda-css-dropdown__trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
}

.nuda-css-dropdown__trigger:focus-visible {
  outline: 2px solid var(--nuda-css-dd-accent);
  outline-offset: 2px;
}

.nuda-css-dropdown__caret { transition: transform 0.25s ease; }

.nuda-css-dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 180px;
  padding: 4px;
  margin: 0;
  list-style: none;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(-6px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 20;
}

.nuda-css-dropdown__link {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  color: #bbb;
  border-radius: 7px;
  text-decoration: none;
  cursor: pointer;
}

.nuda-css-dropdown__link:hover,
.nuda-css-dropdown__link:focus-visible {
  background: rgba(228, 255, 84, 0.1);
  color: var(--nuda-css-dd-accent);
  outline: none;
}

/* Open while anything inside has focus */
.nuda-css-dropdown:focus-within .nuda-css-dropdown__menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.nuda-css-dropdown:focus-within .nuda-css-dropdown__caret {
  transform: rotate(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-dropdown__menu,
  .nuda-css-dropdown__caret { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. PURE CSS TOOLTIP ─────────────── */
  {
    id: "css-tooltip",
    name: "Pure CSS Tooltip",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-tooltip{--nuda-css-tt-accent:#e4ff54;position:relative;display:inline-flex;font-family:inherit}
      .nuda-css-tooltip__trigger{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:.5rem .9rem;font-size:.78rem;font-weight:600;color:#fff;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;cursor:help}
      .nuda-css-tooltip__trigger:focus-visible{outline:2px solid var(--nuda-css-tt-accent);outline-offset:2px}
      .nuda-css-tooltip__bubble{position:absolute;bottom:calc(100% + 8px);left:50%;width:max-content;max-width:180px;padding:.4rem .6rem;font-size:.68rem;line-height:1.3;color:#09090b;background:var(--nuda-css-tt-accent);border-radius:7px;opacity:0;transform:translateX(-50%) translateY(4px) scale(.96);transform-origin:bottom center;pointer-events:none;transition:opacity .2s ease,transform .2s ease;z-index:30}
      .nuda-css-tooltip__bubble::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:var(--nuda-css-tt-accent)}
      .nuda-css-tooltip__trigger:hover+.nuda-css-tooltip__bubble,
      .nuda-css-tooltip__trigger:focus-visible+.nuda-css-tooltip__bubble{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
      @media(prefers-reduced-motion:reduce){.nuda-css-tooltip__bubble{transition:none}}
    `,
    preview: (
      <div className="nuda-css-tooltip" aria-hidden="true" style={{ marginTop: 30 }}>
        <button className="nuda-css-tooltip__trigger" type="button" aria-describedby="nuda-css-tt-demo">Hover me</button>
        <span className="nuda-css-tooltip__bubble" role="tooltip" id="nuda-css-tt-demo">Pure CSS tooltip on hover or focus.</span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Tooltip — shows on hover/focus, zero JS -->
<span class="nuda-css-tooltip">
  <button class="nuda-css-tooltip__trigger" type="button"
          aria-describedby="nuda-css-tt-1">Hover me</button>
  <span class="nuda-css-tooltip__bubble" role="tooltip" id="nuda-css-tt-1">
    Pure CSS tooltip on hover or focus.
  </span>
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Tooltip
   Reveals on :hover and :focus-visible (keyboard accessible).
   No JS. Customize: --nuda-css-tt-accent */

.nuda-css-tooltip {
  --nuda-css-tt-accent: #e4ff54;
  position: relative;
  display: inline-flex;
}

.nuda-css-tooltip__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: help;
}

.nuda-css-tooltip__trigger:focus-visible {
  outline: 2px solid var(--nuda-css-tt-accent);
  outline-offset: 2px;
}

.nuda-css-tooltip__bubble {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  width: max-content;
  max-width: 220px;
  padding: 0.5rem 0.7rem;
  font-size: 0.78rem;
  line-height: 1.3;
  color: #09090b;
  background: var(--nuda-css-tt-accent);
  border-radius: 7px;
  opacity: 0;
  transform: translateX(-50%) translateY(4px) scale(0.96);
  transform-origin: bottom center;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 30;
}

.nuda-css-tooltip__bubble::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--nuda-css-tt-accent);
}

.nuda-css-tooltip__trigger:hover + .nuda-css-tooltip__bubble,
.nuda-css-tooltip__trigger:focus-visible + .nuda-css-tooltip__bubble {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-tooltip__bubble { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. PURE CSS CAROUSEL ─────────────── */
  {
    id: "css-carousel",
    name: "Pure CSS Carousel",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-carousel{--nuda-css-car-accent:#e4ff54;width:100%;max-width:300px;font-family:inherit}
      .nuda-css-carousel__track{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;border-radius:12px;-webkit-overflow-scrolling:touch}
      .nuda-css-carousel__track::-webkit-scrollbar{height:0}
      .nuda-css-carousel__slide{flex:0 0 100%;scroll-snap-align:center;min-height:90px;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:700;color:#09090b;border-radius:12px;background:var(--nuda-css-car-accent)}
      .nuda-css-carousel__slide:nth-child(2){background:#7dd3fc}
      .nuda-css-carousel__slide:nth-child(3){background:#fca5a5}
      .nuda-css-carousel__dots{display:flex;justify-content:center;gap:6px;margin-top:.6rem}
      .nuda-css-carousel__dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.25);transition:background .2s,transform .2s}
      @media(prefers-reduced-motion:reduce){.nuda-css-carousel__track{scroll-behavior:auto}.nuda-css-carousel__dot{transition:none}}
    `,
    preview: (
      <div className="nuda-css-carousel" aria-hidden="true">
        <div className="nuda-css-carousel__track">
          <div className="nuda-css-carousel__slide">Slide 1</div>
          <div className="nuda-css-carousel__slide">Slide 2</div>
          <div className="nuda-css-carousel__slide">Slide 3</div>
        </div>
        <div className="nuda-css-carousel__dots">
          <span className="nuda-css-carousel__dot" />
          <span className="nuda-css-carousel__dot" />
          <span className="nuda-css-carousel__dot" />
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Carousel — scroll-snap, zero JS.
     Swipe / drag / arrow-keys move between slides. -->
<div class="nuda-css-carousel">
  <div class="nuda-css-carousel__track" tabindex="0" aria-label="Slides">
    <div class="nuda-css-carousel__slide">Slide 1</div>
    <div class="nuda-css-carousel__slide">Slide 2</div>
    <div class="nuda-css-carousel__slide">Slide 3</div>
  </div>
  <div class="nuda-css-carousel__dots" aria-hidden="true">
    <span class="nuda-css-carousel__dot"></span>
    <span class="nuda-css-carousel__dot"></span>
    <span class="nuda-css-carousel__dot"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Carousel
   CSS scroll-snap. Swipe / drag / focus + arrow keys.
   No JS. Customize: --nuda-css-car-accent */

.nuda-css-carousel {
  --nuda-css-car-accent: #e4ff54;
  width: 100%;
  max-width: 480px;
}

.nuda-css-carousel__track {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  border-radius: 14px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.nuda-css-carousel__track::-webkit-scrollbar { height: 0; }

.nuda-css-carousel__track:focus-visible {
  outline: 2px solid var(--nuda-css-car-accent);
  outline-offset: 2px;
}

.nuda-css-carousel__slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #09090b;
  border-radius: 14px;
  background: var(--nuda-css-car-accent);
}

.nuda-css-carousel__slide:nth-child(2) { background: #7dd3fc; }
.nuda-css-carousel__slide:nth-child(3) { background: #fca5a5; }

.nuda-css-carousel__dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 0.7rem;
}

.nuda-css-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  transition: background 0.2s, transform 0.2s;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-carousel__track { scroll-behavior: auto; }
  .nuda-css-carousel__dot { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. PURE CSS STAR RATING ─────────────── */
  {
    id: "css-rating",
    name: "Pure CSS Star Rating",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-rating{--nuda-css-rt-accent:#e4ff54;display:inline-flex;flex-direction:row-reverse;justify-content:flex-end;font-family:inherit}
      .nuda-css-rating__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-css-rating__star{font-size:1.8rem;line-height:1;color:rgba(255,255,255,.18);cursor:pointer;padding:0 2px;transition:color .15s ease,transform .15s ease}
      .nuda-css-rating__star:hover,.nuda-css-rating__star:hover~.nuda-css-rating__star{color:var(--nuda-css-rt-accent);transform:scale(1.12)}
      .nuda-css-rating__input:checked~.nuda-css-rating__star{color:var(--nuda-css-rt-accent)}
      .nuda-css-rating__input:focus-visible+.nuda-css-rating__star{outline:2px solid var(--nuda-css-rt-accent);outline-offset:2px;border-radius:4px}
      @media(prefers-reduced-motion:reduce){.nuda-css-rating__star{transition:none}.nuda-css-rating__star:hover,.nuda-css-rating__star:hover~.nuda-css-rating__star{transform:none}}
    `,
    preview: (
      <div className="nuda-css-rating" role="radiogroup" aria-label="Rating" aria-hidden="true">
        <input className="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-5" />
        <label className="nuda-css-rating__star" htmlFor="nuda-css-rt-5">&#9733;</label>
        <input className="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-4" defaultChecked />
        <label className="nuda-css-rating__star" htmlFor="nuda-css-rt-4">&#9733;</label>
        <input className="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-3" />
        <label className="nuda-css-rating__star" htmlFor="nuda-css-rt-3">&#9733;</label>
        <input className="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-2" />
        <label className="nuda-css-rating__star" htmlFor="nuda-css-rt-2">&#9733;</label>
        <input className="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-1" />
        <label className="nuda-css-rating__star" htmlFor="nuda-css-rt-1">&#9733;</label>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Star Rating — radios, reverse order, zero JS.
     row-reverse lets ~ fill all stars before the hovered one. -->
<div class="nuda-css-rating" role="radiogroup" aria-label="Rating">
  <input class="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-5" />
  <label class="nuda-css-rating__star" for="nuda-css-rt-5" aria-label="5 stars">&#9733;</label>
  <input class="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-4" checked />
  <label class="nuda-css-rating__star" for="nuda-css-rt-4" aria-label="4 stars">&#9733;</label>
  <input class="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-3" />
  <label class="nuda-css-rating__star" for="nuda-css-rt-3" aria-label="3 stars">&#9733;</label>
  <input class="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-2" />
  <label class="nuda-css-rating__star" for="nuda-css-rt-2" aria-label="2 stars">&#9733;</label>
  <input class="nuda-css-rating__input" type="radio" name="nuda-css-rating" id="nuda-css-rt-1" />
  <label class="nuda-css-rating__star" for="nuda-css-rt-1" aria-label="1 star">&#9733;</label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Star Rating
   Stars are laid out in reverse with flex-direction:row-reverse,
   so the general-sibling (~) selector can fill every star up to
   the hovered/checked one. No JS.
   Customize: --nuda-css-rt-accent */

.nuda-css-rating {
  --nuda-css-rt-accent: #e4ff54;
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.nuda-css-rating__input {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); border: 0;
}

.nuda-css-rating__star {
  font-size: 2rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.18);
  cursor: pointer;
  padding: 0 2px;
  transition: color 0.15s ease, transform 0.15s ease;
}

/* Hover: fill the hovered star and every one after it */
.nuda-css-rating__star:hover,
.nuda-css-rating__star:hover ~ .nuda-css-rating__star {
  color: var(--nuda-css-rt-accent);
  transform: scale(1.12);
}

/* Selected: fill the checked star and the ones after it */
.nuda-css-rating__input:checked ~ .nuda-css-rating__star {
  color: var(--nuda-css-rt-accent);
}

.nuda-css-rating__input:focus-visible + .nuda-css-rating__star {
  outline: 2px solid var(--nuda-css-rt-accent);
  outline-offset: 2px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-rating__star { transition: none; }
  .nuda-css-rating__star:hover,
  .nuda-css-rating__star:hover ~ .nuda-css-rating__star { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. PURE CSS STEPPER ─────────────── */
  {
    id: "css-stepper",
    name: "Pure CSS Stepper",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-stepper{--nuda-css-st-accent:#e4ff54;width:100%;max-width:320px;font-family:inherit}
      .nuda-css-stepper__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-css-stepper__row{display:flex;align-items:flex-start;justify-content:space-between}
      .nuda-css-stepper__step{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;cursor:pointer;position:relative}
      .nuda-css-stepper__dot{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;font-size:.72rem;font-weight:700;color:#888;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.1);transition:color .25s,background .25s,border-color .25s,transform .25s}
      .nuda-css-stepper__caption{font-size:.62rem;color:#777;transition:color .25s}
      .nuda-css-stepper__step:not(:last-child)::after{content:"";position:absolute;top:15px;left:calc(50% + 18px);width:calc(100% - 36px);height:2px;background:rgba(255,255,255,.1)}
      .nuda-css-stepper__panel{display:none;margin-top:.8rem;padding:.7rem;font-size:.74rem;color:#bbb;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:9px;animation:nuda-css-step-fade .3s ease-out}
      #nuda-css-st-1:checked~.nuda-css-stepper__row label[for=nuda-css-st-1] .nuda-css-stepper__dot,
      #nuda-css-st-2:checked~.nuda-css-stepper__row label[for=nuda-css-st-2] .nuda-css-stepper__dot,
      #nuda-css-st-3:checked~.nuda-css-stepper__row label[for=nuda-css-st-3] .nuda-css-stepper__dot{color:#09090b;background:var(--nuda-css-st-accent);border-color:var(--nuda-css-st-accent);transform:scale(1.08)}
      #nuda-css-st-1:checked~.nuda-css-stepper__row label[for=nuda-css-st-1] .nuda-css-stepper__caption,
      #nuda-css-st-2:checked~.nuda-css-stepper__row label[for=nuda-css-st-2] .nuda-css-stepper__caption,
      #nuda-css-st-3:checked~.nuda-css-stepper__row label[for=nuda-css-st-3] .nuda-css-stepper__caption{color:#fff}
      #nuda-css-st-1:checked~.nuda-css-stepper__panel--1,
      #nuda-css-st-2:checked~.nuda-css-stepper__panel--2,
      #nuda-css-st-3:checked~.nuda-css-stepper__panel--3{display:block}
      .nuda-css-stepper__input:focus-visible+.nuda-css-stepper__row label .nuda-css-stepper__dot{outline:2px solid var(--nuda-css-st-accent);outline-offset:2px}
      @keyframes nuda-css-step-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-css-stepper__dot{transition:none}.nuda-css-stepper__panel{animation:none}}
    `,
    preview: (
      <div className="nuda-css-stepper" aria-hidden="true">
        <input className="nuda-css-stepper__input" type="radio" name="nuda-css-stepper" id="nuda-css-st-1" />
        <input className="nuda-css-stepper__input" type="radio" name="nuda-css-stepper" id="nuda-css-st-2" defaultChecked />
        <input className="nuda-css-stepper__input" type="radio" name="nuda-css-stepper" id="nuda-css-st-3" />
        <div className="nuda-css-stepper__row">
          <label className="nuda-css-stepper__step" htmlFor="nuda-css-st-1">
            <span className="nuda-css-stepper__dot">1</span>
            <span className="nuda-css-stepper__caption">Cart</span>
          </label>
          <label className="nuda-css-stepper__step" htmlFor="nuda-css-st-2">
            <span className="nuda-css-stepper__dot">2</span>
            <span className="nuda-css-stepper__caption">Shipping</span>
          </label>
          <label className="nuda-css-stepper__step" htmlFor="nuda-css-st-3">
            <span className="nuda-css-stepper__dot">3</span>
            <span className="nuda-css-stepper__caption">Pay</span>
          </label>
        </div>
        <div className="nuda-css-stepper__panel nuda-css-stepper__panel--1">Review your cart.</div>
        <div className="nuda-css-stepper__panel nuda-css-stepper__panel--2">Enter shipping details.</div>
        <div className="nuda-css-stepper__panel nuda-css-stepper__panel--3">Complete payment.</div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pure CSS Stepper — radio step indicator, zero JS -->
<div class="nuda-css-stepper">
  <input class="nuda-css-stepper__input" type="radio" name="nuda-css-stepper" id="nuda-css-st-1" />
  <input class="nuda-css-stepper__input" type="radio" name="nuda-css-stepper" id="nuda-css-st-2" checked />
  <input class="nuda-css-stepper__input" type="radio" name="nuda-css-stepper" id="nuda-css-st-3" />

  <div class="nuda-css-stepper__row">
    <label class="nuda-css-stepper__step" for="nuda-css-st-1">
      <span class="nuda-css-stepper__dot">1</span>
      <span class="nuda-css-stepper__caption">Cart</span>
    </label>
    <label class="nuda-css-stepper__step" for="nuda-css-st-2">
      <span class="nuda-css-stepper__dot">2</span>
      <span class="nuda-css-stepper__caption">Shipping</span>
    </label>
    <label class="nuda-css-stepper__step" for="nuda-css-st-3">
      <span class="nuda-css-stepper__dot">3</span>
      <span class="nuda-css-stepper__caption">Pay</span>
    </label>
  </div>

  <div class="nuda-css-stepper__panel nuda-css-stepper__panel--1">Review your cart.</div>
  <div class="nuda-css-stepper__panel nuda-css-stepper__panel--2">Enter shipping details.</div>
  <div class="nuda-css-stepper__panel nuda-css-stepper__panel--3">Complete payment.</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pure CSS Stepper
   Hidden radios drive the active dot + panel via sibling
   selectors. No JS. Customize: --nuda-css-st-accent */

.nuda-css-stepper {
  --nuda-css-st-accent: #e4ff54;
  width: 100%;
  max-width: 420px;
}

.nuda-css-stepper__input {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); border: 0;
}

.nuda-css-stepper__row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.nuda-css-stepper__step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
  cursor: pointer;
}

.nuda-css-stepper__dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 700;
  color: #888;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: color 0.25s, background 0.25s, border-color 0.25s, transform 0.25s;
}

.nuda-css-stepper__caption {
  font-size: 0.72rem;
  color: #777;
  transition: color 0.25s;
}

/* Connector line between steps */
.nuda-css-stepper__step:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 17px;
  left: calc(50% + 20px);
  width: calc(100% - 40px);
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
}

.nuda-css-stepper__panel {
  display: none;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 0.85rem;
  color: #bbb;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  animation: nuda-css-step-fade 0.3s ease-out;
}

/* Active dot */
#nuda-css-st-1:checked ~ .nuda-css-stepper__row label[for="nuda-css-st-1"] .nuda-css-stepper__dot,
#nuda-css-st-2:checked ~ .nuda-css-stepper__row label[for="nuda-css-st-2"] .nuda-css-stepper__dot,
#nuda-css-st-3:checked ~ .nuda-css-stepper__row label[for="nuda-css-st-3"] .nuda-css-stepper__dot {
  color: #09090b;
  background: var(--nuda-css-st-accent);
  border-color: var(--nuda-css-st-accent);
  transform: scale(1.08);
}

/* Active caption */
#nuda-css-st-1:checked ~ .nuda-css-stepper__row label[for="nuda-css-st-1"] .nuda-css-stepper__caption,
#nuda-css-st-2:checked ~ .nuda-css-stepper__row label[for="nuda-css-st-2"] .nuda-css-stepper__caption,
#nuda-css-st-3:checked ~ .nuda-css-stepper__row label[for="nuda-css-st-3"] .nuda-css-stepper__caption {
  color: #fff;
}

/* Matching panel */
#nuda-css-st-1:checked ~ .nuda-css-stepper__panel--1,
#nuda-css-st-2:checked ~ .nuda-css-stepper__panel--2,
#nuda-css-st-3:checked ~ .nuda-css-stepper__panel--3 {
  display: block;
}

.nuda-css-stepper__input:focus-visible + .nuda-css-stepper__row label .nuda-css-stepper__dot {
  outline: 2px solid var(--nuda-css-st-accent);
  outline-offset: 2px;
}

@keyframes nuda-css-step-fade {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-stepper__dot { transition: none; }
  .nuda-css-stepper__panel { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. EXPANDABLE CARD ─────────────── */
  {
    id: "css-expand-card",
    name: "Expandable Card",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-expand{--nuda-css-ex-accent:#e4ff54;width:100%;max-width:320px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;font-family:inherit}
      .nuda-css-expand__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-css-expand__head{display:flex;flex-direction:column;gap:4px;padding:.85rem}
      .nuda-css-expand__title{font-size:.85rem;font-weight:700;color:#fff}
      .nuda-css-expand__sub{font-size:.7rem;color:#888}
      .nuda-css-expand__more{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s cubic-bezier(.16,1,.3,1)}
      .nuda-css-expand__more-inner{overflow:hidden;min-height:0}
      .nuda-css-expand__body{padding:0 .85rem;font-size:.72rem;line-height:1.5;color:#aaa;opacity:0;transition:opacity .3s ease}
      .nuda-css-expand__toggle{display:flex;align-items:center;justify-content:center;gap:6px;min-height:42px;margin:.6rem .85rem .85rem;font-size:.72rem;font-weight:600;color:#09090b;background:var(--nuda-css-ex-accent);border-radius:8px;cursor:pointer}
      .nuda-css-expand__toggle .nuda-css-expand__txt-less{display:none}
      .nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__more{grid-template-rows:1fr}
      .nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__body{opacity:1;padding-bottom:.5rem}
      .nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__txt-more{display:none}
      .nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__txt-less{display:inline}
      .nuda-css-expand__input:focus-visible+.nuda-css-expand__head .nuda-css-expand__title{outline:2px solid var(--nuda-css-ex-accent);outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-css-expand__more,.nuda-css-expand__body{transition:none}}
    `,
    preview: (
      <div className="nuda-css-expand" aria-hidden="true">
        <input className="nuda-css-expand__input" type="checkbox" id="nuda-css-ex-1" defaultChecked />
        <div className="nuda-css-expand__head">
          <span className="nuda-css-expand__title">Project Aurora</span>
          <span className="nuda-css-expand__sub">Realtime collaboration</span>
        </div>
        <div className="nuda-css-expand__more">
          <div className="nuda-css-expand__more-inner">
            <p className="nuda-css-expand__body">Expanded details appear here, animated with the grid-rows 0fr to 1fr trick. No JS.</p>
          </div>
        </div>
        <label className="nuda-css-expand__toggle" htmlFor="nuda-css-ex-1">
          <span className="nuda-css-expand__txt-more">Show more</span>
          <span className="nuda-css-expand__txt-less">Show less</span>
        </label>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Expandable Card — checkbox + :has() + grid-rows trick, zero JS -->
<div class="nuda-css-expand">
  <input class="nuda-css-expand__input" type="checkbox" id="nuda-css-ex-1" />
  <div class="nuda-css-expand__head">
    <span class="nuda-css-expand__title">Project Aurora</span>
    <span class="nuda-css-expand__sub">Realtime collaboration</span>
  </div>
  <div class="nuda-css-expand__more">
    <div class="nuda-css-expand__more-inner">
      <p class="nuda-css-expand__body">
        Expanded details appear here, animated with the
        grid-rows 0fr to 1fr trick. No JS.
      </p>
    </div>
  </div>
  <label class="nuda-css-expand__toggle" for="nuda-css-ex-1">
    <span class="nuda-css-expand__txt-more">Show more</span>
    <span class="nuda-css-expand__txt-less">Show less</span>
  </label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Expandable Card
   A hidden checkbox + :has() toggles the expanded region.
   Height animates via the grid-template-rows 0fr -> 1fr trick
   (animating grid is allowed; no width/height/margin/padding
   transition). No JS. Customize: --nuda-css-ex-accent */

.nuda-css-expand {
  --nuda-css-ex-accent: #e4ff54;
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
}

.nuda-css-expand__input {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); border: 0;
}

.nuda-css-expand__head {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 1rem;
}

.nuda-css-expand__title { font-size: 0.95rem; font-weight: 700; color: #fff; }
.nuda-css-expand__sub   { font-size: 0.8rem; color: #888; }

/* Collapsible region — grid-rows trick */
.nuda-css-expand__more {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-css-expand__more-inner {
  overflow: hidden;
  min-height: 0;
}

.nuda-css-expand__body {
  padding: 0 1rem;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #aaa;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nuda-css-expand__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  margin: 0.75rem 1rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #09090b;
  background: var(--nuda-css-ex-accent);
  border-radius: 8px;
  cursor: pointer;
}

.nuda-css-expand__toggle .nuda-css-expand__txt-less { display: none; }

/* Expanded state via :has() */
.nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__more {
  grid-template-rows: 1fr;
}

.nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__body {
  opacity: 1;
  padding-bottom: 0.5rem;
}

.nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__txt-more { display: none; }
.nuda-css-expand:has(.nuda-css-expand__input:checked) .nuda-css-expand__txt-less { display: inline; }

.nuda-css-expand__input:focus-visible + .nuda-css-expand__head .nuda-css-expand__title {
  outline: 2px solid var(--nuda-css-ex-accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-expand__more,
  .nuda-css-expand__body { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. FILTER CHIPS ─────────────── */
  {
    id: "css-filter-chips",
    name: "Filter Chips",
    category: "CSS-Only Interactions",
    cssInline: `
      .nuda-css-chips{--nuda-css-ch-accent:#e4ff54;width:100%;max-width:320px;font-family:inherit}
      .nuda-css-chips__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-css-chips__bar{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:.7rem}
      .nuda-css-chips__chip{display:inline-flex;align-items:center;min-height:34px;padding:.35rem .75rem;font-size:.7rem;font-weight:600;color:#aaa;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:999px;cursor:pointer;transition:color .2s,background .2s,border-color .2s,transform .15s}
      .nuda-css-chips__chip:hover{color:#fff;transform:translateY(-1px)}
      .nuda-css-chips__grid{display:flex;flex-direction:column;gap:6px}
      .nuda-css-chips__card{display:flex;align-items:center;gap:8px;padding:.5rem .7rem;font-size:.72rem;color:#ccc;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:9px;transition:opacity .25s ease,transform .25s ease}
      .nuda-css-chips__tag{font-size:.58rem;font-weight:700;color:#09090b;background:var(--nuda-css-ch-accent);padding:1px 6px;border-radius:6px}
      #nuda-css-ch-design:checked~.nuda-css-chips__bar label[for=nuda-css-ch-design],
      #nuda-css-ch-dev:checked~.nuda-css-chips__bar label[for=nuda-css-ch-dev]{color:#09090b;background:var(--nuda-css-ch-accent);border-color:var(--nuda-css-ch-accent)}
      #nuda-css-ch-design:checked~.nuda-css-chips__grid .nuda-css-chips__card[data-cat=dev],
      #nuda-css-ch-dev:checked~.nuda-css-chips__grid .nuda-css-chips__card[data-cat=design]{opacity:.15;transform:scale(.97)}
      .nuda-css-chips__input:focus-visible+.nuda-css-chips__bar label{outline:2px solid var(--nuda-css-ch-accent);outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-css-chips__chip,.nuda-css-chips__card{transition:none}}
    `,
    preview: (
      <div className="nuda-css-chips" aria-hidden="true">
        <input className="nuda-css-chips__input" type="radio" name="nuda-css-chips" id="nuda-css-ch-all" defaultChecked />
        <input className="nuda-css-chips__input" type="radio" name="nuda-css-chips" id="nuda-css-ch-design" />
        <input className="nuda-css-chips__input" type="radio" name="nuda-css-chips" id="nuda-css-ch-dev" />
        <div className="nuda-css-chips__bar">
          <label className="nuda-css-chips__chip" htmlFor="nuda-css-ch-all">All</label>
          <label className="nuda-css-chips__chip" htmlFor="nuda-css-ch-design">Design</label>
          <label className="nuda-css-chips__chip" htmlFor="nuda-css-ch-dev">Dev</label>
        </div>
        <div className="nuda-css-chips__grid">
          <div className="nuda-css-chips__card" data-cat="design"><span className="nuda-css-chips__tag">Design</span> Color tokens</div>
          <div className="nuda-css-chips__card" data-cat="dev"><span className="nuda-css-chips__tag">Dev</span> CSS selectors</div>
          <div className="nuda-css-chips__card" data-cat="design"><span className="nuda-css-chips__tag">Design</span> Spacing scale</div>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Filter Chips — radio chips filter the cards, zero JS.
     Selecting a chip dims the cards that don't match its data-cat. -->
<div class="nuda-css-chips">
  <input class="nuda-css-chips__input" type="radio" name="nuda-css-chips" id="nuda-css-ch-all" checked />
  <input class="nuda-css-chips__input" type="radio" name="nuda-css-chips" id="nuda-css-ch-design" />
  <input class="nuda-css-chips__input" type="radio" name="nuda-css-chips" id="nuda-css-ch-dev" />

  <div class="nuda-css-chips__bar">
    <label class="nuda-css-chips__chip" for="nuda-css-ch-all">All</label>
    <label class="nuda-css-chips__chip" for="nuda-css-ch-design">Design</label>
    <label class="nuda-css-chips__chip" for="nuda-css-ch-dev">Dev</label>
  </div>

  <div class="nuda-css-chips__grid">
    <div class="nuda-css-chips__card" data-cat="design"><span class="nuda-css-chips__tag">Design</span> Color tokens</div>
    <div class="nuda-css-chips__card" data-cat="dev"><span class="nuda-css-chips__tag">Dev</span> CSS selectors</div>
    <div class="nuda-css-chips__card" data-cat="design"><span class="nuda-css-chips__tag">Design</span> Spacing scale</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Filter Chips
   Hidden radios select a filter; sibling selectors dim the
   cards whose data-cat doesn't match. "All" dims nothing.
   No JS. Customize: --nuda-css-ch-accent */

.nuda-css-chips {
  --nuda-css-ch-accent: #e4ff54;
  width: 100%;
  max-width: 420px;
}

.nuda-css-chips__input {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); border: 0;
}

.nuda-css-chips__bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0.8rem;
}

.nuda-css-chips__chip {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #aaa;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.15s;
}

.nuda-css-chips__chip:hover { color: #fff; transform: translateY(-1px); }

.nuda-css-chips__grid {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nuda-css-chips__card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.6rem 0.8rem;
  font-size: 0.85rem;
  color: #ccc;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.nuda-css-chips__tag {
  font-size: 0.65rem;
  font-weight: 700;
  color: #09090b;
  background: var(--nuda-css-ch-accent);
  padding: 1px 6px;
  border-radius: 6px;
}

/* Active chip */
#nuda-css-ch-design:checked ~ .nuda-css-chips__bar label[for="nuda-css-ch-design"],
#nuda-css-ch-dev:checked ~ .nuda-css-chips__bar label[for="nuda-css-ch-dev"] {
  color: #09090b;
  background: var(--nuda-css-ch-accent);
  border-color: var(--nuda-css-ch-accent);
}

/* Filtering: dim cards that don't match the active category */
#nuda-css-ch-design:checked ~ .nuda-css-chips__grid .nuda-css-chips__card[data-cat="dev"],
#nuda-css-ch-dev:checked ~ .nuda-css-chips__grid .nuda-css-chips__card[data-cat="design"] {
  opacity: 0.15;
  transform: scale(0.97);
}

.nuda-css-chips__input:focus-visible + .nuda-css-chips__bar label {
  outline: 2px solid var(--nuda-css-ch-accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-css-chips__chip,
  .nuda-css-chips__card { transition: none; }
}`,
      },
    ],
  },
];
