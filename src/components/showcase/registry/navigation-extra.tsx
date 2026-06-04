import type { NudaComponent } from "./types";

const CAT = "Navigation";

export const navigationExtra: NudaComponent[] = [
  /* ─────────────── PILL TAB BAR ─────────────── */
  {
    id: "navx-pill-tab-bar",
    name: "Pill Tab Bar",
    category: CAT,
    preview: (
      <div className="nuda-navx-pill-bar" role="tablist" aria-label="Page sections">
        <button className="nuda-navx-pill-bar__tab nuda-navx-pill-bar__tab--active" role="tab" aria-selected="true">
          <span className="nuda-navx-pill-bar__dot" />
          Explore
        </button>
        <button className="nuda-navx-pill-bar__tab" role="tab" aria-selected="false">Trending</button>
        <button className="nuda-navx-pill-bar__tab" role="tab" aria-selected="false">Saved</button>
        <button className="nuda-navx-pill-bar__tab" role="tab" aria-selected="false">Profile</button>
      </div>
    ),
    cssInline: `
      .nuda-navx-pill-bar{display:inline-flex;gap:4px;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:5px;animation:_nuda-navxpillbar-in .35s ease-out}
      .nuda-navx-pill-bar__tab{display:flex;align-items:center;gap:6px;background:none;border:none;color:#777;font-size:.8rem;font-weight:500;padding:.45rem 1rem;border-radius:10px;cursor:pointer;transition:color .2s,background .2s;white-space:nowrap}
      .nuda-navx-pill-bar__tab:hover{color:#cfcfcf;background:rgba(255,255,255,.05)}
      .nuda-navx-pill-bar__tab--active{background:#e4ff54;color:#0a0a0a;font-weight:700}
      .nuda-navx-pill-bar__tab--active:hover{background:#d8f240;color:#0a0a0a}
      .nuda-navx-pill-bar__dot{width:6px;height:6px;border-radius:50%;background:#0a0a0a;flex-shrink:0}
      @keyframes _nuda-navxpillbar-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-navx-pill-bar{animation:none}.nuda-navx-pill-bar__tab{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-navx-pill-bar" role="tablist" aria-label="Page sections">
  <button class="nuda-navx-pill-bar__tab nuda-navx-pill-bar__tab--active" role="tab" aria-selected="true">
    <span class="nuda-navx-pill-bar__dot"></span>
    Explore
  </button>
  <button class="nuda-navx-pill-bar__tab" role="tab" aria-selected="false">Trending</button>
  <button class="nuda-navx-pill-bar__tab" role="tab" aria-selected="false">Saved</button>
  <button class="nuda-navx-pill-bar__tab" role="tab" aria-selected="false">Profile</button>
</div>`,
      },
    ],
  },

  /* ─────────────── UNDERLINE NAV (THICK ACCENT) ─────────────── */
  {
    id: "navx-underline-thick",
    name: "Thick Underline Nav",
    category: CAT,
    preview: (
      <nav className="nuda-navx-ul-thick" aria-label="Main">
        <a className="nuda-navx-ul-thick__link nuda-navx-ul-thick__link--active" href="#">Work</a>
        <a className="nuda-navx-ul-thick__link" href="#">Studio</a>
        <a className="nuda-navx-ul-thick__link" href="#">Journal</a>
        <a className="nuda-navx-ul-thick__link" href="#">Contact</a>
      </nav>
    ),
    cssInline: `
      .nuda-navx-ul-thick{display:flex;gap:1.75rem;border-bottom:1px solid rgba(255,255,255,.08);padding-bottom:0}
      .nuda-navx-ul-thick__link{color:#777;text-decoration:none;font-size:.85rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;padding:.6rem 0 .5rem;position:relative;transition:color .25s}
      .nuda-navx-ul-thick__link::after{content:'';position:absolute;left:0;bottom:-1px;width:100%;height:3px;background:#e4ff54;border-radius:3px 3px 0 0;transform:scaleX(0);transform-origin:center;transition:transform .25s cubic-bezier(.4,0,.2,1)}
      .nuda-navx-ul-thick__link:hover{color:#fafafa}
      .nuda-navx-ul-thick__link:hover::after{transform:scaleX(.5)}
      .nuda-navx-ul-thick__link--active{color:#fafafa}
      .nuda-navx-ul-thick__link--active::after{transform:scaleX(1)}
      @media(prefers-reduced-motion:reduce){.nuda-navx-ul-thick__link,.nuda-navx-ul-thick__link::after{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-navx-ul-thick" aria-label="Main">
  <a class="nuda-navx-ul-thick__link nuda-navx-ul-thick__link--active" href="#">Work</a>
  <a class="nuda-navx-ul-thick__link" href="#">Studio</a>
  <a class="nuda-navx-ul-thick__link" href="#">Journal</a>
  <a class="nuda-navx-ul-thick__link" href="#">Contact</a>
</nav>`,
      },
    ],
  },

  /* ─────────────── SEGMENTED CONTROL NAV ─────────────── */
  {
    id: "navx-segmented-control",
    name: "Segmented Control",
    category: CAT,
    preview: (
      <div className="nuda-navx-seg" role="group" aria-label="View mode">
        <div className="nuda-navx-seg__track">
          <div className="nuda-navx-seg__thumb" />
          <button className="nuda-navx-seg__btn nuda-navx-seg__btn--active" aria-pressed="true">
            <svg className="nuda-navx-seg__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor"/>
              <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor"/>
              <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor"/>
              <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>
            </svg>
            Grid
          </button>
          <button className="nuda-navx-seg__btn" aria-pressed="false">
            <svg className="nuda-navx-seg__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="2" width="14" height="2" rx="1" fill="currentColor"/>
              <rect x="1" y="7" width="14" height="2" rx="1" fill="currentColor"/>
              <rect x="1" y="12" width="14" height="2" rx="1" fill="currentColor"/>
            </svg>
            List
          </button>
          <button className="nuda-navx-seg__btn" aria-pressed="false">
            <svg className="nuda-navx-seg__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="14" height="9" rx="1.5" fill="currentColor"/>
              <rect x="1" y="12" width="6" height="3" rx="1" fill="currentColor"/>
              <rect x="9" y="12" width="6" height="3" rx="1" fill="currentColor"/>
            </svg>
            Card
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-navx-seg{display:inline-flex}
      .nuda-navx-seg__track{display:flex;align-items:center;position:relative;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:3px;gap:2px}
      .nuda-navx-seg__thumb{position:absolute;top:3px;left:3px;width:calc(33.33% - 3px);height:calc(100% - 6px);background:#e4ff54;border-radius:7px;transition:transform .22s cubic-bezier(.4,0,.2,1);pointer-events:none;z-index:0}
      .nuda-navx-seg__btn{position:relative;z-index:1;display:flex;align-items:center;gap:5px;background:none;border:none;color:#777;font-size:.75rem;font-weight:500;padding:.4rem .75rem;border-radius:7px;cursor:pointer;transition:color .2s;white-space:nowrap}
      .nuda-navx-seg__btn--active{color:#0a0a0a;font-weight:700}
      .nuda-navx-seg__btn:not(.nuda-navx-seg__btn--active):hover{color:#cfcfcf}
      .nuda-navx-seg__icon{width:14px;height:14px;flex-shrink:0}
      .nuda-navx-seg__btn:nth-child(3) ~ .nuda-navx-seg__thumb,.nuda-navx-seg__btn:nth-child(3).nuda-navx-seg__btn--active~*{transform:translateX(100%)}
      .nuda-navx-seg__btn:nth-child(4).nuda-navx-seg__btn--active~*{transform:translateX(200%)}
      @media(prefers-reduced-motion:reduce){.nuda-navx-seg__thumb,.nuda-navx-seg__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-navx-seg" role="group" aria-label="View mode">
  <div class="nuda-navx-seg__track">
    <div class="nuda-navx-seg__thumb"></div>
    <button class="nuda-navx-seg__btn nuda-navx-seg__btn--active" aria-pressed="true">
      <svg class="nuda-navx-seg__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>
      </svg>
      Grid
    </button>
    <button class="nuda-navx-seg__btn" aria-pressed="false">
      <svg class="nuda-navx-seg__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="2" width="14" height="2" rx="1" fill="currentColor"/>
        <rect x="1" y="7" width="14" height="2" rx="1" fill="currentColor"/>
        <rect x="1" y="12" width="14" height="2" rx="1" fill="currentColor"/>
      </svg>
      List
    </button>
    <button class="nuda-navx-seg__btn" aria-pressed="false">
      <svg class="nuda-navx-seg__icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="9" rx="1.5" fill="currentColor"/>
        <rect x="1" y="12" width="6" height="3" rx="1" fill="currentColor"/>
        <rect x="9" y="12" width="6" height="3" rx="1" fill="currentColor"/>
      </svg>
      Card
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── VERTICAL NAV RAIL ─────────────── */
  {
    id: "navx-vertical-rail",
    name: "Vertical Nav Rail",
    category: CAT,
    preview: (
      <nav className="nuda-navx-rail" aria-label="App navigation">
        <div className="nuda-navx-rail__brand">
          <span className="nuda-navx-rail__logo">N</span>
        </div>
        <ul className="nuda-navx-rail__list">
          <li>
            <a className="nuda-navx-rail__item nuda-navx-rail__item--active" href="#" aria-current="page">
              <svg className="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
              <span className="nuda-navx-rail__label">Home</span>
            </a>
          </li>
          <li>
            <a className="nuda-navx-rail__item" href="#">
              <svg className="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
              <span className="nuda-navx-rail__label">Search</span>
            </a>
          </li>
          <li>
            <a className="nuda-navx-rail__item" href="#">
              <svg className="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span className="nuda-navx-rail__label">Apps</span>
            </a>
          </li>
          <li>
            <a className="nuda-navx-rail__item" href="#">
              <svg className="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
              <span className="nuda-navx-rail__label">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    ),
    cssInline: `
      .nuda-navx-rail{display:flex;flex-direction:column;align-items:center;gap:0;width:64px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:.75rem .5rem;min-height:220px}
      .nuda-navx-rail__brand{display:flex;align-items:center;justify-content:center;margin-bottom:1rem}
      .nuda-navx-rail__logo{display:flex;align-items:center;justify-content:center;width:32px;height:32px;background:#e4ff54;border-radius:8px;font-weight:800;font-size:.9rem;color:#0a0a0a}
      .nuda-navx-rail__list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:2px;width:100%}
      .nuda-navx-rail__item{display:flex;flex-direction:column;align-items:center;gap:3px;color:#555;text-decoration:none;padding:.5rem .25rem;border-radius:10px;font-size:.6rem;font-weight:500;transition:color .2s,background .2s;position:relative}
      .nuda-navx-rail__item:hover{color:#cfcfcf;background:rgba(255,255,255,.06)}
      .nuda-navx-rail__item--active{color:#e4ff54;background:rgba(228,255,84,.1)}
      .nuda-navx-rail__item--active::before{content:'';position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:3px;height:20px;background:#e4ff54;border-radius:0 3px 3px 0}
      .nuda-navx-rail__ico{width:20px;height:20px;flex-shrink:0}
      .nuda-navx-rail__label{line-height:1}
      @media(prefers-reduced-motion:reduce){.nuda-navx-rail__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-navx-rail" aria-label="App navigation">
  <div class="nuda-navx-rail__brand">
    <span class="nuda-navx-rail__logo">N</span>
  </div>
  <ul class="nuda-navx-rail__list">
    <li>
      <a class="nuda-navx-rail__item nuda-navx-rail__item--active" href="#" aria-current="page">
        <svg class="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
        <span class="nuda-navx-rail__label">Home</span>
      </a>
    </li>
    <li>
      <a class="nuda-navx-rail__item" href="#">
        <svg class="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>
        <span class="nuda-navx-rail__label">Search</span>
      </a>
    </li>
    <li>
      <a class="nuda-navx-rail__item" href="#">
        <svg class="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        <span class="nuda-navx-rail__label">Apps</span>
      </a>
    </li>
    <li>
      <a class="nuda-navx-rail__item" href="#">
        <svg class="nuda-navx-rail__ico" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>
        <span class="nuda-navx-rail__label">Settings</span>
      </a>
    </li>
  </ul>
</nav>`,
      },
    ],
  },

  /* ─────────────── BREADCRUMB-FREE TOP NAV ─────────────── */
  {
    id: "navx-topbar-minimal",
    name: "Minimal Topbar",
    category: CAT,
    preview: (
      <header className="nuda-navx-topbar">
        <div className="nuda-navx-topbar__left">
          <span className="nuda-navx-topbar__wordmark">nuda</span>
        </div>
        <nav className="nuda-navx-topbar__links" aria-label="Primary">
          <a className="nuda-navx-topbar__link nuda-navx-topbar__link--active" href="#">Products</a>
          <a className="nuda-navx-topbar__link" href="#">Docs</a>
          <a className="nuda-navx-topbar__link" href="#">Blog</a>
        </nav>
        <div className="nuda-navx-topbar__right">
          <a className="nuda-navx-topbar__cta" href="#">Get started</a>
        </div>
      </header>
    ),
    cssInline: `
      .nuda-navx-topbar{display:flex;align-items:center;gap:1rem;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:.6rem 1rem;width:100%;box-sizing:border-box;animation:_nuda-navxtopbar-in .4s ease-out}
      .nuda-navx-topbar__left{flex:1}
      .nuda-navx-topbar__wordmark{font-size:.9rem;font-weight:800;letter-spacing:-.02em;color:#fafafa}
      .nuda-navx-topbar__links{display:flex;gap:0;background:rgba(255,255,255,.05);border-radius:8px;padding:2px}
      .nuda-navx-topbar__link{color:#777;text-decoration:none;font-size:.78rem;font-weight:500;padding:.3rem .7rem;border-radius:6px;transition:color .2s,background .2s}
      .nuda-navx-topbar__link:hover{color:#cfcfcf;background:rgba(255,255,255,.07)}
      .nuda-navx-topbar__link--active{color:#fafafa;background:rgba(255,255,255,.1)}
      .nuda-navx-topbar__right{flex:1;display:flex;justify-content:flex-end}
      .nuda-navx-topbar__cta{display:inline-block;background:#e4ff54;color:#0a0a0a;font-size:.75rem;font-weight:700;padding:.35rem .85rem;border-radius:7px;text-decoration:none;transition:opacity .2s}
      .nuda-navx-topbar__cta:hover{opacity:.85}
      @keyframes _nuda-navxtopbar-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-navx-topbar{animation:none}.nuda-navx-topbar__link,.nuda-navx-topbar__cta{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<header class="nuda-navx-topbar">
  <div class="nuda-navx-topbar__left">
    <span class="nuda-navx-topbar__wordmark">nuda</span>
  </div>
  <nav class="nuda-navx-topbar__links" aria-label="Primary">
    <a class="nuda-navx-topbar__link nuda-navx-topbar__link--active" href="#">Products</a>
    <a class="nuda-navx-topbar__link" href="#">Docs</a>
    <a class="nuda-navx-topbar__link" href="#">Blog</a>
  </nav>
  <div class="nuda-navx-topbar__right">
    <a class="nuda-navx-topbar__cta" href="#">Get started</a>
  </div>
</header>`,
      },
    ],
  },

  /* ─────────────── SCROLLSPY DOTS ─────────────── */
  {
    id: "navx-scrollspy-dots",
    name: "Scrollspy Dots",
    category: CAT,
    preview: (
      <nav className="nuda-navx-dots" aria-label="Page sections">
        <div className="nuda-navx-dots__track">
          <a className="nuda-navx-dots__dot nuda-navx-dots__dot--active" href="#s1" aria-label="Section 1">
            <span className="nuda-navx-dots__tooltip">Hero</span>
          </a>
          <a className="nuda-navx-dots__dot" href="#s2" aria-label="Section 2">
            <span className="nuda-navx-dots__tooltip">Features</span>
          </a>
          <a className="nuda-navx-dots__dot" href="#s3" aria-label="Section 3">
            <span className="nuda-navx-dots__tooltip">Pricing</span>
          </a>
          <a className="nuda-navx-dots__dot" href="#s4" aria-label="Section 4">
            <span className="nuda-navx-dots__tooltip">Team</span>
          </a>
          <a className="nuda-navx-dots__dot" href="#s5" aria-label="Section 5">
            <span className="nuda-navx-dots__tooltip">Contact</span>
          </a>
        </div>
      </nav>
    ),
    cssInline: `
      .nuda-navx-dots{display:flex;align-items:center;justify-content:center;padding:1rem}
      .nuda-navx-dots__track{display:flex;flex-direction:column;align-items:center;gap:10px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:10px 8px}
      .nuda-navx-dots__dot{position:relative;display:flex;align-items:center;justify-content:center;width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.2);text-decoration:none;transition:background .2s,transform .2s}
      .nuda-navx-dots__dot:hover{background:rgba(255,255,255,.5);transform:scale(1.3)}
      .nuda-navx-dots__dot--active{background:#e4ff54;width:10px;height:24px;border-radius:5px}
      .nuda-navx-dots__tooltip{position:absolute;right:calc(100% + 10px);top:50%;transform:translateY(-50%);background:#1a1a1a;border:1px solid rgba(255,255,255,.1);color:#cfcfcf;font-size:.7rem;white-space:nowrap;padding:.25rem .55rem;border-radius:6px;pointer-events:none;opacity:0;transition:opacity .2s}
      .nuda-navx-dots__dot:hover .nuda-navx-dots__tooltip{opacity:1}
      @media(prefers-reduced-motion:reduce){.nuda-navx-dots__dot,.nuda-navx-dots__tooltip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-navx-dots" aria-label="Page sections">
  <div class="nuda-navx-dots__track">
    <a class="nuda-navx-dots__dot nuda-navx-dots__dot--active" href="#s1" aria-label="Section 1">
      <span class="nuda-navx-dots__tooltip">Hero</span>
    </a>
    <a class="nuda-navx-dots__dot" href="#s2" aria-label="Section 2">
      <span class="nuda-navx-dots__tooltip">Features</span>
    </a>
    <a class="nuda-navx-dots__dot" href="#s3" aria-label="Section 3">
      <span class="nuda-navx-dots__tooltip">Pricing</span>
    </a>
    <a class="nuda-navx-dots__dot" href="#s4" aria-label="Section 4">
      <span class="nuda-navx-dots__tooltip">Team</span>
    </a>
    <a class="nuda-navx-dots__dot" href="#s5" aria-label="Section 5">
      <span class="nuda-navx-dots__tooltip">Contact</span>
    </a>
  </div>
</nav>`,
      },
    ],
  },

  /* ─────────────── FLOATING BOTTOM NAV ─────────────── */
  {
    id: "navx-float-bottom",
    name: "Floating Bottom Nav",
    category: CAT,
    preview: (
      <div className="nuda-navx-floatnav" role="navigation" aria-label="Bottom navigation">
        <a className="nuda-navx-floatnav__item nuda-navx-floatnav__item--active" href="#" aria-current="page">
          <svg className="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="nuda-navx-floatnav__label">Home</span>
        </a>
        <a className="nuda-navx-floatnav__item" href="#">
          <svg className="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="nuda-navx-floatnav__label">Search</span>
        </a>
        <a className="nuda-navx-floatnav__item nuda-navx-floatnav__item--center" href="#">
          <svg className="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </a>
        <a className="nuda-navx-floatnav__item" href="#">
          <svg className="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <span className="nuda-navx-floatnav__label">Likes</span>
        </a>
        <a className="nuda-navx-floatnav__item" href="#">
          <svg className="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <span className="nuda-navx-floatnav__label">Profile</span>
        </a>
      </div>
    ),
    cssInline: `
      .nuda-navx-floatnav{display:inline-flex;align-items:center;gap:0;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:.5rem .75rem;box-shadow:0 8px 32px rgba(0,0,0,.4);animation:_nuda-navxfloat-in .45s cubic-bezier(.34,1.56,.64,1)}
      .nuda-navx-floatnav__item{display:flex;flex-direction:column;align-items:center;gap:3px;color:#555;text-decoration:none;padding:.4rem .75rem;border-radius:12px;transition:color .2s,background .2s;position:relative}
      .nuda-navx-floatnav__item:hover{color:#cfcfcf;background:rgba(255,255,255,.06)}
      .nuda-navx-floatnav__item--active{color:#e4ff54}
      .nuda-navx-floatnav__item--active::after{content:'';position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:#e4ff54}
      .nuda-navx-floatnav__item--center{background:#e4ff54;color:#0a0a0a;border-radius:14px;width:44px;height:44px;padding:0;margin:0 .25rem}
      .nuda-navx-floatnav__item--center:hover{background:#d8f240;color:#0a0a0a}
      .nuda-navx-floatnav__ico{width:22px;height:22px;flex-shrink:0}
      .nuda-navx-floatnav__label{font-size:.6rem;font-weight:500;line-height:1}
      @keyframes _nuda-navxfloat-in{from{opacity:0;transform:translateY(20px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-navx-floatnav{animation:none}.nuda-navx-floatnav__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-navx-floatnav" role="navigation" aria-label="Bottom navigation">
  <a class="nuda-navx-floatnav__item nuda-navx-floatnav__item--active" href="#" aria-current="page">
    <svg class="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
    <span class="nuda-navx-floatnav__label">Home</span>
  </a>
  <a class="nuda-navx-floatnav__item" href="#">
    <svg class="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
    <span class="nuda-navx-floatnav__label">Search</span>
  </a>
  <a class="nuda-navx-floatnav__item nuda-navx-floatnav__item--center" href="#">
    <svg class="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  </a>
  <a class="nuda-navx-floatnav__item" href="#">
    <svg class="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
    <span class="nuda-navx-floatnav__label">Likes</span>
  </a>
  <a class="nuda-navx-floatnav__item" href="#">
    <svg class="nuda-navx-floatnav__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
    <span class="nuda-navx-floatnav__label">Profile</span>
  </a>
</div>`,
      },
    ],
  },
];
