import type { NudaComponent } from "./types";

export const accordionsTabs: NudaComponent[] = [
  /* ─────────────── ACCORDION ─────────────── */
  {
    id: "accordion",
    name: "Accordion",
    category: "Accordions & Tabs",
    preview: (
      <div className="nuda-accordion-demo" aria-hidden="true">
        <div className="nuda-accordion-demo__item nuda-accordion-demo__item--open">
          <div className="nuda-accordion-demo__header">
            <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>Section One</span>
            <span style={{ fontSize: "0.6rem", color: "#e4ff54" }}>&#8722;</span>
          </div>
          <div className="nuda-accordion-demo__body">
            <span style={{ fontSize: "0.55rem", color: "#888" }}>Content visible here</span>
          </div>
        </div>
        <div className="nuda-accordion-demo__item">
          <div className="nuda-accordion-demo__header">
            <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#ccc" }}>Section Two</span>
            <span style={{ fontSize: "0.6rem", color: "#666" }}>&#43;</span>
          </div>
        </div>
        <div className="nuda-accordion-demo__item">
          <div className="nuda-accordion-demo__header">
            <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#ccc" }}>Section Three</span>
            <span style={{ fontSize: "0.6rem", color: "#666" }}>&#43;</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accordion-demo{display:flex;flex-direction:column;gap:2px;width:100%;max-width:100%}
      .nuda-accordion-demo__item{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;overflow:hidden}
      .nuda-accordion-demo__header{display:flex;justify-content:space-between;align-items:center;padding:.45rem .6rem;cursor:pointer}
      .nuda-accordion-demo__body{padding:0 .6rem .45rem;animation:_accopen .3s ease-out}
      @keyframes _accopen{from{opacity:0;max-height:0}to{opacity:1;max-height:100px}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accordion">
  <details class="nuda-accordion__item" open>
    <summary class="nuda-accordion__header">
      <span>Section One</span>
      <span class="nuda-accordion__icon"></span>
    </summary>
    <div class="nuda-accordion__body">
      <p>Content for section one goes here.</p>
    </div>
  </details>
  <details class="nuda-accordion__item">
    <summary class="nuda-accordion__header">
      <span>Section Two</span>
      <span class="nuda-accordion__icon"></span>
    </summary>
    <div class="nuda-accordion__body">
      <p>Content for section two goes here.</p>
    </div>
  </details>
  <details class="nuda-accordion__item">
    <summary class="nuda-accordion__header">
      <span>Section Three</span>
      <span class="nuda-accordion__icon"></span>
    </summary>
    <div class="nuda-accordion__body">
      <p>Content for section three goes here.</p>
    </div>
  </details>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Accordion
   Native <details> accordion with smooth animation.
   Zero JS required. Customize: --acc-accent, --acc-bg */

.nuda-accordion {
  --acc-accent: #e4ff54;
  --acc-bg: rgba(255, 255, 255, 0.03);
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 500px;
}

.nuda-accordion__item {
  background: var(--acc-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  overflow: hidden;
}

.nuda-accordion__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ccc;
  cursor: pointer;
  list-style: none;
  transition: color 0.2s;
}

.nuda-accordion__header::-webkit-details-marker { display: none; }
.nuda-accordion__header::marker { display: none; content: ''; }

.nuda-accordion__header:hover { color: #fff; }

.nuda-accordion__icon::after {
  content: '+';
  font-size: 1rem;
  color: #666;
  transition: transform 0.3s ease;
  display: inline-block;
}

.nuda-accordion__item[open] .nuda-accordion__icon::after {
  content: '\\2212';
  color: var(--acc-accent);
  transform: rotate(180deg);
}

.nuda-accordion__body {
  padding: 0 1rem 1rem;
  font-size: 0.85rem;
  color: #999;
  animation: nuda-acc-open 0.3s ease-out;
}

@keyframes nuda-acc-open {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nuda-accordion__item[open] {
  border-color: rgba(228, 255, 84, 0.1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-accordion__body {
    animation: none;
  }
  .nuda-accordion__icon::after {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── ANIMATED TABS ─────────────── */
  {
    id: "animated-tabs",
    name: "Animated Tabs",
    category: "Accordions & Tabs",
    preview: (
      <div className="nuda-tabs-demo" aria-hidden="true">
        <div className="nuda-tabs-demo__bar">
          <div className="nuda-tabs-demo__tab nuda-tabs-demo__tab--active">Tab 1</div>
          <div className="nuda-tabs-demo__tab">Tab 2</div>
          <div className="nuda-tabs-demo__tab">Tab 3</div>
          <div className="nuda-tabs-demo__indicator" />
        </div>
        <div className="nuda-tabs-demo__panel">
          <span style={{ fontSize: "0.6rem", color: "#888" }}>Panel content</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tabs-demo{width:100%;max-width:100%}
      .nuda-tabs-demo__bar{display:flex;position:relative;background:rgba(255,255,255,.03);border-radius:8px;padding:3px;gap:2px}
      .nuda-tabs-demo__tab{flex:1;text-align:center;font-size:.6rem;padding:.35rem .3rem;color:#888;border-radius:6px;cursor:pointer;position:relative;z-index:1;transition:color .2s}
      .nuda-tabs-demo__tab--active{color:#0a0a0a;font-weight:600}
      .nuda-tabs-demo__indicator{position:absolute;top:3px;bottom:3px;left:3px;width:calc(33.33% - 2px);background:#e4ff54;border-radius:6px;transition:transform .3s cubic-bezier(.16,1,.3,1)}
      .nuda-tabs-demo__panel{margin-top:.4rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:8px;padding:.5rem}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tabs">
  <div class="nuda-tabs__bar" role="tablist">
    <button class="nuda-tabs__tab is-active" role="tab" aria-selected="true" data-tab="1">Tab 1</button>
    <button class="nuda-tabs__tab" role="tab" aria-selected="false" data-tab="2">Tab 2</button>
    <button class="nuda-tabs__tab" role="tab" aria-selected="false" data-tab="3">Tab 3</button>
    <div class="nuda-tabs__indicator"></div>
  </div>
  <div class="nuda-tabs__panel is-active" data-panel="1" role="tabpanel">Panel 1 content</div>
  <div class="nuda-tabs__panel" data-panel="2" role="tabpanel">Panel 2 content</div>
  <div class="nuda-tabs__panel" data-panel="3" role="tabpanel">Panel 3 content</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Animated Tabs
   Tabs with a sliding indicator pill.
   Customize: --tab-accent, --tab-bg */

.nuda-tabs {
  --tab-accent: #e4ff54;
  --tab-bg: rgba(255, 255, 255, 0.03);
  max-width: 500px;
}

.nuda-tabs__bar {
  display: flex;
  position: relative;
  background: var(--tab-bg);
  border-radius: 10px;
  padding: 4px;
  gap: 2px;
}

.nuda-tabs__tab {
  flex: 1;
  text-align: center;
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
  color: #888;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.2s;
}

.nuda-tabs__tab.is-active {
  color: #0a0a0a;
  font-weight: 600;
}

.nuda-tabs__indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(33.33% - 4px);
  background: var(--tab-accent);
  border-radius: 8px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}

.nuda-tabs__panel {
  display: none;
  padding: 1rem;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: #ccc;
  font-size: 0.85rem;
  animation: nuda-tab-fade 0.3s ease-out;
}

.nuda-tabs__panel.is-active { display: block; }

@keyframes nuda-tab-fade {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tabs__indicator { transition: none; }
  .nuda-tabs__panel { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Animated Tabs — Slide indicator and switch panels */

(function () {
  var containers = document.querySelectorAll('.nuda-tabs');
  containers.forEach(function (tabs) {
    var tabBtns = tabs.querySelectorAll('.nuda-tabs__tab');
    var panels = tabs.querySelectorAll('.nuda-tabs__panel');
    var indicator = tabs.querySelector('.nuda-tabs__indicator');
    if (!tabBtns.length || !indicator) return;

    tabBtns.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        tabBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        panels.forEach(function (p) { p.classList.remove('is-active'); });

        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        var panel = tabs.querySelector('[data-panel="' + btn.dataset.tab + '"]');
        if (panel) panel.classList.add('is-active');

        indicator.style.transform = 'translateX(' + (i * 100) + '%)';
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── COLLAPSIBLE CARD ─────────────── */
  {
    id: "collapsible-card",
    name: "Collapsible Card",
    category: "Accordions & Tabs",
    preview: (
      <div className="nuda-collapse-demo" aria-hidden="true">
        <div className="nuda-collapse-demo__card">
          <div className="nuda-collapse-demo__header">
            <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#fff" }}>Card Title</span>
            <span style={{ fontSize: "0.7rem", color: "#e4ff54", animation: "_cchevron 2s ease-in-out infinite" }}>&#9660;</span>
          </div>
          <div className="nuda-collapse-demo__body">
            <div style={{ width: "100%", height: 3, background: "rgba(255,255,255,.06)", borderRadius: 2, marginBottom: 3 }} />
            <div style={{ width: "70%", height: 3, background: "rgba(255,255,255,.06)", borderRadius: 2 }} />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-collapse-demo{width:100%;max-width:100%}
      .nuda-collapse-demo__card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px;overflow:hidden}
      .nuda-collapse-demo__header{display:flex;justify-content:space-between;align-items:center;padding:.5rem .6rem;cursor:pointer}
      .nuda-collapse-demo__body{padding:0 .6rem .5rem;animation:_ccbody 2.5s ease-in-out infinite}
      @keyframes _ccbody{0%{opacity:1;max-height:60px}40%{opacity:0;max-height:0}60%{opacity:0;max-height:0}100%{opacity:1;max-height:60px}}
      @keyframes _cchevron{0%{transform:rotate(0)}40%{transform:rotate(-180deg)}60%{transform:rotate(-180deg)}100%{transform:rotate(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-collapse-demo__body{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-collapse-card">
  <button class="nuda-collapse-card__header" aria-expanded="true">
    <span>Card Title</span>
    <span class="nuda-collapse-card__chevron">&#9660;</span>
  </button>
  <div class="nuda-collapse-card__body">
    <p>Card content goes here. Click the header to toggle.</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Collapsible Card
   Card with animated expand/collapse body.
   Customize: --collapse-accent */

.nuda-collapse-card {
  --collapse-accent: #e4ff54;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  max-width: 400px;
}

.nuda-collapse-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.85rem 1rem;
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.nuda-collapse-card__chevron {
  font-size: 0.75rem;
  color: var(--collapse-accent);
  transition: transform 0.3s ease;
}

.nuda-collapse-card[aria-collapsed="true"] .nuda-collapse-card__chevron {
  transform: rotate(-180deg);
}

.nuda-collapse-card__body {
  padding: 0 1rem 1rem;
  color: #999;
  font-size: 0.85rem;
  overflow: hidden;
  max-height: 200px;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
}

.nuda-collapse-card.is-collapsed .nuda-collapse-card__body {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-collapse-card__body,
  .nuda-collapse-card__chevron {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Collapsible Card — Toggle collapse */

(function () {
  var cards = document.querySelectorAll('.nuda-collapse-card');
  cards.forEach(function (card) {
    var header = card.querySelector('.nuda-collapse-card__header');
    if (!header) return;

    header.addEventListener('click', function () {
      var isCollapsed = card.classList.toggle('is-collapsed');
      header.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── VERTICAL TABS ─────────────── */
  {
    id: "vertical-tabs",
    name: "Vertical Tabs",
    category: "Accordions & Tabs",
    preview: (
      <div className="nuda-vtabs-demo" aria-hidden="true">
        <div className="nuda-vtabs-demo__sidebar">
          <div className="nuda-vtabs-demo__tab nuda-vtabs-demo__tab--active">Tab A</div>
          <div className="nuda-vtabs-demo__tab">Tab B</div>
          <div className="nuda-vtabs-demo__tab">Tab C</div>
        </div>
        <div className="nuda-vtabs-demo__content">
          <span style={{ fontSize: "0.55rem", color: "#888" }}>Panel A</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vtabs-demo{display:flex;gap:4px;width:100%;max-width:100%;height:80px}
      .nuda-vtabs-demo__sidebar{display:flex;flex-direction:column;gap:2px;min-width:50px}
      .nuda-vtabs-demo__tab{padding:.3rem .4rem;font-size:.55rem;color:#888;border-radius:6px;cursor:pointer;transition:all .2s}
      .nuda-vtabs-demo__tab--active{background:rgba(228,255,84,.1);color:#e4ff54;border-left:2px solid #e4ff54}
      .nuda-vtabs-demo__content{flex:1;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:8px;padding:.4rem;display:flex;align-items:center;justify-content:center}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vtabs">
  <div class="nuda-vtabs__sidebar" role="tablist" aria-orientation="vertical">
    <button class="nuda-vtabs__tab is-active" role="tab" data-tab="a">Tab A</button>
    <button class="nuda-vtabs__tab" role="tab" data-tab="b">Tab B</button>
    <button class="nuda-vtabs__tab" role="tab" data-tab="c">Tab C</button>
  </div>
  <div class="nuda-vtabs__panel is-active" data-panel="a" role="tabpanel">Panel A content</div>
  <div class="nuda-vtabs__panel" data-panel="b" role="tabpanel">Panel B content</div>
  <div class="nuda-vtabs__panel" data-panel="c" role="tabpanel">Panel C content</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Vertical Tabs
   Side-by-side tabs with left sidebar.
   Customize: --vtab-accent */

.nuda-vtabs {
  --vtab-accent: #e4ff54;
  display: flex;
  gap: 0.5rem;
  max-width: 600px;
}

.nuda-vtabs__sidebar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 120px;
}

.nuda-vtabs__tab {
  padding: 0.6rem 0.75rem;
  font-size: 0.85rem;
  color: #888;
  background: none;
  border: none;
  border-left: 2px solid transparent;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.nuda-vtabs__tab:hover { color: #ccc; background: rgba(255, 255, 255, 0.02); }

.nuda-vtabs__tab.is-active {
  color: var(--vtab-accent);
  background: rgba(228, 255, 84, 0.06);
  border-left-color: var(--vtab-accent);
}

.nuda-vtabs__panel {
  display: none;
  flex: 1;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: #ccc;
  font-size: 0.85rem;
  animation: nuda-vtab-fade 0.3s ease-out;
}

.nuda-vtabs__panel.is-active { display: block; }

@keyframes nuda-vtab-fade {
  from { opacity: 0; transform: translateX(8px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-vtabs__tab { transition: none; }
  .nuda-vtabs__panel { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Vertical Tabs — Switch panels */

(function () {
  var containers = document.querySelectorAll('.nuda-vtabs');
  containers.forEach(function (vtabs) {
    var tabs = vtabs.querySelectorAll('.nuda-vtabs__tab');
    var panels = vtabs.querySelectorAll('.nuda-vtabs__panel');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        panels.forEach(function (p) { p.classList.remove('is-active'); });
        tab.classList.add('is-active');
        var panel = vtabs.querySelector('[data-panel="' + tab.dataset.tab + '"]');
        if (panel) panel.classList.add('is-active');
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── SEGMENTED CONTROL ─────────────── */
  {
    id: "segmented-control",
    name: "Segmented Control",
    category: "Accordions & Tabs",
    preview: (
      <div className="nuda-segmented-demo" aria-hidden="true">
        <div className="nuda-segmented-demo__bar">
          <div className="nuda-segmented-demo__option nuda-segmented-demo__option--active">Daily</div>
          <div className="nuda-segmented-demo__option">Weekly</div>
          <div className="nuda-segmented-demo__option">Monthly</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-segmented-demo__bar{display:flex;background:rgba(255,255,255,.04);border-radius:10px;padding:3px;gap:2px}
      .nuda-segmented-demo__option{flex:1;text-align:center;font-size:.6rem;padding:.35rem .3rem;border-radius:8px;color:#888;cursor:pointer;transition:all .2s}
      .nuda-segmented-demo__option--active{background:rgba(228,255,84,.15);color:#e4ff54;font-weight:600}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-segmented" role="radiogroup" aria-label="View">
  <button class="nuda-segmented__option is-active" role="radio" aria-checked="true">Daily</button>
  <button class="nuda-segmented__option" role="radio" aria-checked="false">Weekly</button>
  <button class="nuda-segmented__option" role="radio" aria-checked="false">Monthly</button>
  <div class="nuda-segmented__indicator"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Segmented Control
   iOS-style segmented control with sliding indicator.
   Customize: --seg-accent */

.nuda-segmented {
  --seg-accent: #e4ff54;
  display: flex;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
  max-width: 360px;
}

.nuda-segmented__option {
  flex: 1;
  text-align: center;
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.2s;
}

.nuda-segmented__option.is-active {
  color: #0a0a0a;
  font-weight: 600;
}

.nuda-segmented__indicator {
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 3px;
  width: calc(33.33% - 3px);
  background: var(--seg-accent);
  border-radius: 8px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-segmented__indicator { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Segmented Control — Slide indicator */

(function () {
  var controls = document.querySelectorAll('.nuda-segmented');
  controls.forEach(function (ctrl) {
    var options = ctrl.querySelectorAll('.nuda-segmented__option');
    var indicator = ctrl.querySelector('.nuda-segmented__indicator');
    if (!options.length || !indicator) return;

    options.forEach(function (opt, i) {
      opt.addEventListener('click', function () {
        options.forEach(function (o) {
          o.classList.remove('is-active');
          o.setAttribute('aria-checked', 'false');
        });
        opt.classList.add('is-active');
        opt.setAttribute('aria-checked', 'true');
        indicator.style.transform = 'translateX(' + (i * 100) + '%)';
      });
    });
  });
})();`,
      },
    ],
  },
];
