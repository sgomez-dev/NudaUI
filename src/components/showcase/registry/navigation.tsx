import type { NudaComponent } from "./types";

export const navigation: NudaComponent[] = [
  /* ─────────────── UNDERLINE NAV ─────────────── */
  {
    id: "underline-nav",
    name: "Underline Nav",
    category: "Navigation",
    preview: (
      <nav className="nuda-underline-nav" aria-label="Main navigation">
        <a className="nuda-underline-nav__link active" href="#" aria-current="page">Home</a>
        <a className="nuda-underline-nav__link" href="#">About</a>
        <a className="nuda-underline-nav__link" href="#">Work</a>
        <a className="nuda-underline-nav__link" href="#">Contact</a>
      </nav>
    ),
    cssInline: `
      .nuda-underline-nav{--c:#e4ff54;--bg:transparent;display:flex;gap:2rem;position:relative;padding-bottom:2px}
      .nuda-underline-nav__link{color:#ccc;text-decoration:none;font-size:.9rem;padding:.5rem 0;position:relative;transition:color .3s}
      .nuda-underline-nav__link::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:2px;background:var(--c);transform:scaleX(0);transition:transform .3s ease;transform-origin:left}
      .nuda-underline-nav__link:hover{color:#fff}
      .nuda-underline-nav__link:hover::after,.nuda-underline-nav__link.active::after{transform:scaleX(1)}
      .nuda-underline-nav__link.active{color:#fff}
      @media(prefers-reduced-motion:reduce){.nuda-underline-nav__link::after{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-underline-nav" aria-label="Main navigation">
  <a class="nuda-underline-nav__link active" href="#" aria-current="page">Home</a>
  <a class="nuda-underline-nav__link" href="#">About</a>
  <a class="nuda-underline-nav__link" href="#">Work</a>
  <a class="nuda-underline-nav__link" href="#">Contact</a>
</nav>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Underline Nav
   Nav links with sliding underline indicator.
   Customize: --nav-accent, --nav-text, --nav-text-hover */

.nuda-underline-nav {
  --nav-accent: #e4ff54;
  --nav-text: #999;
  --nav-text-hover: #fff;
  display: flex;
  gap: 2rem;
  position: relative;
  padding-bottom: 2px;
}

.nuda-underline-nav__link {
  color: var(--nav-text);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nuda-underline-nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--nav-accent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.nuda-underline-nav__link:hover {
  color: var(--nav-text-hover);
}

.nuda-underline-nav__link:hover::after,
.nuda-underline-nav__link.active::after {
  transform: scaleX(1);
}

.nuda-underline-nav__link.active {
  color: var(--nav-text-hover);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-underline-nav__link::after {
    transition: none;
  }
  .nuda-underline-nav__link {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── PILL NAV ─────────────── */
  {
    id: "pill-nav",
    name: "Pill Nav",
    category: "Navigation",
    preview: (
      <nav className="nuda-pill-nav" aria-label="Section navigation">
        <a className="nuda-pill-nav__link active" href="#" aria-current="page">Dashboard</a>
        <a className="nuda-pill-nav__link" href="#">Analytics</a>
        <a className="nuda-pill-nav__link" href="#">Settings</a>
      </nav>
    ),
    cssInline: `
      .nuda-pill-nav{--c:#e4ff54;--bg:rgba(255,255,255,.06);display:flex;gap:4px;background:var(--bg);border-radius:12px;padding:4px}
      .nuda-pill-nav__link{color:#999;text-decoration:none;font-size:.85rem;padding:.5rem 1rem;border-radius:10px;transition:all .3s ease;position:relative}
      .nuda-pill-nav__link:hover{color:#fff;background:rgba(255,255,255,.06)}
      .nuda-pill-nav__link.active{color:#0a0a0a;background:var(--c);font-weight:600}
      @media(prefers-reduced-motion:reduce){.nuda-pill-nav__link{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-pill-nav" aria-label="Section navigation">
  <a class="nuda-pill-nav__link active" href="#" aria-current="page">Dashboard</a>
  <a class="nuda-pill-nav__link" href="#">Analytics</a>
  <a class="nuda-pill-nav__link" href="#">Settings</a>
</nav>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pill Nav
   Navigation with sliding pill background on active item.
   Customize: --pill-accent, --pill-bg, --pill-text */

.nuda-pill-nav {
  --pill-accent: #e4ff54;
  --pill-bg: rgba(255, 255, 255, 0.06);
  --pill-text: #999;
  display: flex;
  gap: 4px;
  background: var(--pill-bg);
  border-radius: 12px;
  padding: 4px;
}

.nuda-pill-nav__link {
  color: var(--pill-text);
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nuda-pill-nav__link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.nuda-pill-nav__link.active {
  color: #0a0a0a;
  background: var(--pill-accent);
  font-weight: 600;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pill-nav__link {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── TAB SLIDE ─────────────── */
  {
    id: "tab-slide",
    name: "Tab Slide",
    category: "Navigation",
    preview: (
      <div className="nuda-tab-slide" role="tablist" aria-label="Content tabs">
        <button className="nuda-tab-slide__tab active" role="tab" aria-selected="true">Overview</button>
        <button className="nuda-tab-slide__tab" role="tab" aria-selected="false">Features</button>
        <button className="nuda-tab-slide__tab" role="tab" aria-selected="false">Pricing</button>
        <div className="nuda-tab-slide__indicator" />
      </div>
    ),
    cssInline: `
      .nuda-tab-slide{--c:#e4ff54;display:flex;position:relative;gap:0;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tab-slide__tab{background:none;border:none;color:#999;font-size:.85rem;padding:.75rem 1.25rem;cursor:pointer;transition:color .3s}
      .nuda-tab-slide__tab:hover{color:#fff}
      .nuda-tab-slide__tab.active{color:var(--c)}
      .nuda-tab-slide__indicator{position:absolute;bottom:-1px;left:0;height:2px;width:33.33%;background:var(--c);border-radius:2px;transition:transform .3s ease}
      .nuda-tab-slide__tab:nth-child(1).active~.nuda-tab-slide__indicator{transform:translateX(0)}
      .nuda-tab-slide__tab:nth-child(2).active~.nuda-tab-slide__indicator{transform:translateX(100%)}
      .nuda-tab-slide__tab:nth-child(3).active~.nuda-tab-slide__indicator{transform:translateX(200%)}
      @media(prefers-reduced-motion:reduce){.nuda-tab-slide__indicator{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tab-slide" role="tablist" aria-label="Content tabs">
  <button class="nuda-tab-slide__tab active" role="tab" aria-selected="true">Overview</button>
  <button class="nuda-tab-slide__tab" role="tab" aria-selected="false">Features</button>
  <button class="nuda-tab-slide__tab" role="tab" aria-selected="false">Pricing</button>
  <div class="nuda-tab-slide__indicator"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tab Slide
   Tabs with animated sliding indicator bar.
   Customize: --tab-accent, --tab-text, --tab-border */

.nuda-tab-slide {
  --tab-accent: #e4ff54;
  --tab-text: #999;
  --tab-border: rgba(255, 255, 255, 0.1);
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--tab-border);
}

.nuda-tab-slide__tab {
  background: none;
  border: none;
  color: var(--tab-text);
  font-size: 0.85rem;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nuda-tab-slide__tab:hover {
  color: #fff;
}

.nuda-tab-slide__tab.active {
  color: var(--tab-accent);
}

.nuda-tab-slide__indicator {
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: var(--tab-accent);
  border-radius: 2px;
  transition: transform 0.3s ease, width 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tab-slide__indicator {
    transition: none;
  }
  .nuda-tab-slide__tab {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Tab Slide — Indicator positioning
   Moves the indicator to align with the active tab. */

(function () {
  const tablist = document.querySelector('.nuda-tab-slide');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('.nuda-tab-slide__tab');
  const indicator = tablist.querySelector('.nuda-tab-slide__indicator');
  if (!indicator) return;

  function moveIndicator(tab) {
    indicator.style.width = tab.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      moveIndicator(tab);
    });
  });

  // Initialize indicator position
  var active = tablist.querySelector('.nuda-tab-slide__tab.active');
  if (active) moveIndicator(active);
})();`,
      },
    ],
  },

  /* ─────────────── BREADCRUMB FADE ─────────────── */
  {
    id: "breadcrumb-fade",
    name: "Breadcrumb Fade",
    category: "Navigation",
    preview: (
      <nav className="nuda-breadcrumb-fade" aria-label="Breadcrumb">
        <ol className="nuda-breadcrumb-fade__list">
          <li className="nuda-breadcrumb-fade__item"><a href="#">Home</a></li>
          <li className="nuda-breadcrumb-fade__sep" aria-hidden="true">/</li>
          <li className="nuda-breadcrumb-fade__item"><a href="#">Products</a></li>
          <li className="nuda-breadcrumb-fade__sep" aria-hidden="true">/</li>
          <li className="nuda-breadcrumb-fade__item current" aria-current="page">Details</li>
        </ol>
      </nav>
    ),
    cssInline: `
      .nuda-breadcrumb-fade__list{--c:#e4ff54;display:flex;align-items:center;gap:.5rem;list-style:none;padding:0;margin:0}
      .nuda-breadcrumb-fade__item a{color:#999;text-decoration:none;font-size:.85rem;transition:color .3s}
      .nuda-breadcrumb-fade__item a:hover{color:#fff}
      .nuda-breadcrumb-fade__item.current{color:var(--c);font-size:.85rem;font-weight:600}
      .nuda-breadcrumb-fade__sep{color:#555;font-size:.75rem;animation:_bfade .6s ease-out both}
      .nuda-breadcrumb-fade__item{animation:_bslide .5s ease-out both}
      .nuda-breadcrumb-fade__item:nth-child(1){animation-delay:0s}
      .nuda-breadcrumb-fade__sep:nth-child(2){animation-delay:.1s}
      .nuda-breadcrumb-fade__item:nth-child(3){animation-delay:.2s}
      .nuda-breadcrumb-fade__sep:nth-child(4){animation-delay:.3s}
      .nuda-breadcrumb-fade__item:nth-child(5){animation-delay:.4s}
      @keyframes _bslide{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
      @keyframes _bfade{from{opacity:0}to{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-breadcrumb-fade__item,.nuda-breadcrumb-fade__sep{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-breadcrumb-fade" aria-label="Breadcrumb">
  <ol class="nuda-breadcrumb-fade__list">
    <li class="nuda-breadcrumb-fade__item"><a href="#">Home</a></li>
    <li class="nuda-breadcrumb-fade__sep" aria-hidden="true">/</li>
    <li class="nuda-breadcrumb-fade__item"><a href="#">Products</a></li>
    <li class="nuda-breadcrumb-fade__sep" aria-hidden="true">/</li>
    <li class="nuda-breadcrumb-fade__item current" aria-current="page">Details</li>
  </ol>
</nav>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Breadcrumb Fade
   Breadcrumb items and chevrons animate in with staggered fade.
   Customize: --breadcrumb-accent, --breadcrumb-text, --breadcrumb-sep */

.nuda-breadcrumb-fade__list {
  --breadcrumb-accent: #e4ff54;
  --breadcrumb-text: #999;
  --breadcrumb-sep: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nuda-breadcrumb-fade__item a {
  color: var(--breadcrumb-text);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.nuda-breadcrumb-fade__item a:hover {
  color: #fff;
}

.nuda-breadcrumb-fade__item.current {
  color: var(--breadcrumb-accent);
  font-size: 0.85rem;
  font-weight: 600;
}

.nuda-breadcrumb-fade__sep {
  color: var(--breadcrumb-sep);
  font-size: 0.75rem;
  animation: nuda-breadcrumb-fade-in 0.6s ease-out both;
}

.nuda-breadcrumb-fade__item {
  animation: nuda-breadcrumb-slide 0.5s ease-out both;
}

.nuda-breadcrumb-fade__item:nth-child(1) { animation-delay: 0s; }
.nuda-breadcrumb-fade__sep:nth-child(2)  { animation-delay: 0.1s; }
.nuda-breadcrumb-fade__item:nth-child(3) { animation-delay: 0.2s; }
.nuda-breadcrumb-fade__sep:nth-child(4)  { animation-delay: 0.3s; }
.nuda-breadcrumb-fade__item:nth-child(5) { animation-delay: 0.4s; }

@keyframes nuda-breadcrumb-slide {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes nuda-breadcrumb-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-breadcrumb-fade__item,
  .nuda-breadcrumb-fade__sep {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SIDEBAR COLLAPSE ─────────────── */
  {
    id: "nav-sidebar-toggle",
    name: "Sidebar Collapse",
    category: "Navigation",
    preview: (
      <div className="nuda-sidebar" aria-label="Sidebar" data-collapsed="false">
        <button className="nuda-sidebar__toggle" aria-label="Toggle sidebar" aria-expanded="true">
          <span className="nuda-sidebar__toggle-icon" />
        </button>
        <nav className="nuda-sidebar__nav">
          <a className="nuda-sidebar__link active" href="#">
            <span className="nuda-sidebar__icon">&#9679;</span>
            <span className="nuda-sidebar__label">Home</span>
          </a>
          <a className="nuda-sidebar__link" href="#">
            <span className="nuda-sidebar__icon">&#9679;</span>
            <span className="nuda-sidebar__label">Search</span>
          </a>
          <a className="nuda-sidebar__link" href="#">
            <span className="nuda-sidebar__icon">&#9679;</span>
            <span className="nuda-sidebar__label">Settings</span>
          </a>
        </nav>
      </div>
    ),
    cssInline: `
      .nuda-sidebar{--c:#e4ff54;--w:180px;--wc:52px;width:var(--w);background:rgba(255,255,255,.04);border-radius:12px;padding:.75rem;transition:width .3s ease;overflow:hidden;position:relative}
      .nuda-sidebar[data-collapsed="true"]{width:var(--wc)}
      .nuda-sidebar__toggle{background:none;border:1px solid rgba(255,255,255,.1);border-radius:6px;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;margin-bottom:.75rem;color:#999;transition:color .2s}
      .nuda-sidebar__toggle:hover{color:#fff}
      .nuda-sidebar__toggle-icon{display:block;width:14px;height:2px;background:currentColor;position:relative}
      .nuda-sidebar__toggle-icon::before,.nuda-sidebar__toggle-icon::after{content:'';position:absolute;width:100%;height:2px;background:currentColor;left:0}
      .nuda-sidebar__toggle-icon::before{top:-5px}
      .nuda-sidebar__toggle-icon::after{top:5px}
      .nuda-sidebar__nav{display:flex;flex-direction:column;gap:2px}
      .nuda-sidebar__link{display:flex;align-items:center;gap:.75rem;color:#999;text-decoration:none;padding:.5rem;border-radius:8px;font-size:.8rem;transition:all .2s;white-space:nowrap}
      .nuda-sidebar__link:hover{color:#fff;background:rgba(255,255,255,.06)}
      .nuda-sidebar__link.active{color:var(--c);background:rgba(228,255,84,.08)}
      .nuda-sidebar__icon{flex-shrink:0;font-size:8px}
      .nuda-sidebar__label{transition:opacity .3s ease}
      .nuda-sidebar[data-collapsed="true"] .nuda-sidebar__label{opacity:0}
      @media(prefers-reduced-motion:reduce){.nuda-sidebar,.nuda-sidebar__label{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sidebar" aria-label="Sidebar" data-collapsed="false">
  <button class="nuda-sidebar__toggle" aria-label="Toggle sidebar" aria-expanded="true">
    <span class="nuda-sidebar__toggle-icon"></span>
  </button>
  <nav class="nuda-sidebar__nav">
    <a class="nuda-sidebar__link active" href="#">
      <span class="nuda-sidebar__icon">&#9679;</span>
      <span class="nuda-sidebar__label">Home</span>
    </a>
    <a class="nuda-sidebar__link" href="#">
      <span class="nuda-sidebar__icon">&#9679;</span>
      <span class="nuda-sidebar__label">Search</span>
    </a>
    <a class="nuda-sidebar__link" href="#">
      <span class="nuda-sidebar__icon">&#9679;</span>
      <span class="nuda-sidebar__label">Settings</span>
    </a>
  </nav>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sidebar Collapse
   Collapsible sidebar with smooth width transition.
   Customize: --sidebar-accent, --sidebar-width, --sidebar-width-collapsed */

.nuda-sidebar {
  --sidebar-accent: #e4ff54;
  --sidebar-width: 200px;
  --sidebar-width-collapsed: 56px;
  width: var(--sidebar-width);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 0.75rem;
  transition: width 0.3s ease;
  overflow: hidden;
  position: relative;
}

.nuda-sidebar[data-collapsed="true"] {
  width: var(--sidebar-width-collapsed);
}

.nuda-sidebar__toggle {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  color: #999;
  transition: color 0.2s ease;
}

.nuda-sidebar__toggle:hover {
  color: #fff;
}

.nuda-sidebar__toggle-icon {
  display: block;
  width: 14px;
  height: 2px;
  background: currentColor;
  position: relative;
}

.nuda-sidebar__toggle-icon::before,
.nuda-sidebar__toggle-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: currentColor;
  left: 0;
}

.nuda-sidebar__toggle-icon::before { top: -5px; }
.nuda-sidebar__toggle-icon::after  { top: 5px; }

.nuda-sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nuda-sidebar__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #999;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nuda-sidebar__link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.nuda-sidebar__link.active {
  color: var(--sidebar-accent);
  background: rgba(228, 255, 84, 0.08);
}

.nuda-sidebar__icon {
  flex-shrink: 0;
  font-size: 8px;
}

.nuda-sidebar__label {
  transition: opacity 0.3s ease;
}

.nuda-sidebar[data-collapsed="true"] .nuda-sidebar__label {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sidebar,
  .nuda-sidebar__label {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Sidebar Collapse — Toggle logic */

(function () {
  var sidebar = document.querySelector('.nuda-sidebar');
  var toggle = document.querySelector('.nuda-sidebar__toggle');
  if (!sidebar || !toggle) return;

  toggle.addEventListener('click', function () {
    var isCollapsed = sidebar.getAttribute('data-collapsed') === 'true';
    sidebar.setAttribute('data-collapsed', String(!isCollapsed));
    toggle.setAttribute('aria-expanded', String(isCollapsed));
  });
})();`,
      },
    ],
  },
];
