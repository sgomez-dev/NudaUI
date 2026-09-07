import type { NudaComponent } from "./types";

/* Pagination — extra set. Prefix: pg2. cssInline drives the live preview; the CSS copy tab is derived by reconcile. */
const CAT = "Pagination";

export const paginationExtra: NudaComponent[] = [
  /* ─────────────── INFINITE SCROLL SENTINEL ─────────────── */
  {
    id: "pg2-infinite-scroll",
    name: "Infinite Scroll Sentinel",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-infinite">
        <div className="nuda-pg2-infinite__list" aria-hidden="true">
          <span className="nuda-pg2-infinite__item"></span>
          <span className="nuda-pg2-infinite__item"></span>
          <span className="nuda-pg2-infinite__item"></span>
        </div>
        <div className="nuda-pg2-infinite__sentinel" role="status" aria-live="polite">
          <span className="nuda-pg2-infinite__spinner" aria-hidden="true"></span>
          <span className="nuda-pg2-infinite__label">Loading more…</span>
        </div>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-infinite{width:280px;display:flex;flex-direction:column;gap:.5rem}
      .nuda-pg2-infinite__list{display:flex;flex-direction:column;gap:.4rem}
      .nuda-pg2-infinite__item{display:block;height:14px;border-radius:5px;background:#1c1c1c}
      .nuda-pg2-infinite__item:nth-child(2){width:85%}
      .nuda-pg2-infinite__item:nth-child(3){width:70%}
      .nuda-pg2-infinite__sentinel{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.75rem;min-height:44px;border-top:1px solid rgba(255,255,255,.08);color:#777;font-size:.75rem}
      .nuda-pg2-infinite__spinner{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.15);border-top-color:#e4ff54;animation:_nuda-pg2infinitespin .7s linear infinite}
      .nuda-pg2-infinite__label{font-variant-numeric:tabular-nums}
      @keyframes _nuda-pg2infinitespin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-infinite__spinner{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-infinite">
  <div class="nuda-pg2-infinite__list" aria-hidden="true">
    <span class="nuda-pg2-infinite__item"></span>
    <span class="nuda-pg2-infinite__item"></span>
    <span class="nuda-pg2-infinite__item"></span>
  </div>
  <div class="nuda-pg2-infinite__sentinel" role="status" aria-live="polite">
    <span class="nuda-pg2-infinite__spinner" aria-hidden="true"></span>
    <span class="nuda-pg2-infinite__label">Loading more…</span>
  </div>
</nav>`,
      },
    ],
  },

  /* ─────────────── CURSOR PAGER ─────────────── */
  {
    id: "pg2-cursor",
    name: "Cursor Pager",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-cursor">
        <button className="nuda-pg2-cursor__btn nuda-pg2-cursor__btn--disabled" aria-disabled="true" aria-label="Previous page">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
        <span className="nuda-pg2-cursor__label">Page 1</span>
        <button className="nuda-pg2-cursor__btn" aria-label="Next page">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-cursor{display:inline-flex;align-items:center;gap:.75rem}
      .nuda-pg2-cursor__btn{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#161616;color:#cfcfcf;cursor:pointer;transition:transform .15s,border-color .15s,color .15s}
      .nuda-pg2-cursor__btn:hover{border-color:rgba(228,255,84,.4);color:#fafafa;transform:translateY(-1px)}
      .nuda-pg2-cursor__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pg2-cursor__btn--disabled{opacity:.35;cursor:not-allowed;pointer-events:none}
      .nuda-pg2-cursor__label{font-size:.78rem;color:#999;min-width:56px;text-align:center;font-variant-numeric:tabular-nums}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-cursor__btn{transition:none}.nuda-pg2-cursor__btn:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-cursor">
  <button class="nuda-pg2-cursor__btn nuda-pg2-cursor__btn--disabled" aria-disabled="true" aria-label="Previous page">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </button>
  <span class="nuda-pg2-cursor__label">Page 1</span>
  <button class="nuda-pg2-cursor__btn" aria-label="Next page">
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </button>
</nav>`,
      },
    ],
  },

  /* ─────────────── RANGE + PAGE SIZE ─────────────── */
  {
    id: "pg2-range",
    name: "Range Pagination",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-range">
        <span className="nuda-pg2-range__info">21–40 of 340</span>
        <label className="nuda-pg2-range__sizer">
          <span className="nuda-pg2-range__sizer-text">Rows</span>
          <select className="nuda-pg2-range__select" aria-label="Rows per page" defaultValue="20">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </label>
        <div className="nuda-pg2-range__nav">
          <button className="nuda-pg2-range__btn" aria-label="Previous page">‹</button>
          <button className="nuda-pg2-range__btn" aria-label="Next page">›</button>
        </div>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-range{width:300px;display:flex;align-items:center;gap:.6rem;flex-wrap:wrap}
      .nuda-pg2-range__info{font-size:.75rem;color:#999;font-variant-numeric:tabular-nums;animation:_nuda-pg2rangein .35s ease-out}
      .nuda-pg2-range__sizer{display:inline-flex;align-items:center;gap:.4rem;margin-left:auto;font-size:.7rem;color:#777}
      .nuda-pg2-range__select{height:44px;background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:7px;color:#fafafa;font-size:.75rem;padding:0 .5rem;cursor:pointer}
      .nuda-pg2-range__select:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pg2-range__nav{display:flex;gap:.4rem}
      .nuda-pg2-range__btn{width:44px;height:44px;border-radius:7px;border:1px solid rgba(255,255,255,.1);background:#161616;color:#cfcfcf;cursor:pointer;transition:border-color .15s,color .15s}
      .nuda-pg2-range__btn:hover{border-color:rgba(228,255,84,.4);color:#fafafa}
      .nuda-pg2-range__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-pg2rangein{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-range__info{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-range">
  <span class="nuda-pg2-range__info">21–40 of 340</span>
  <label class="nuda-pg2-range__sizer">
    <span class="nuda-pg2-range__sizer-text">Rows</span>
    <select class="nuda-pg2-range__select" aria-label="Rows per page">
      <option value="10">10</option>
      <option value="20" selected>20</option>
      <option value="50">50</option>
    </select>
  </label>
  <div class="nuda-pg2-range__nav">
    <button class="nuda-pg2-range__btn" aria-label="Previous page">‹</button>
    <button class="nuda-pg2-range__btn" aria-label="Next page">›</button>
  </div>
</nav>`,
      },
    ],
  },

  /* ─────────────── SEGMENTED PAGE GROUPS ─────────────── */
  {
    id: "pg2-segmented",
    name: "Segmented Page Groups",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-segmented">
        <div className="nuda-pg2-segmented__track">
          <span className="nuda-pg2-segmented__indicator" aria-hidden="true"></span>
          <button className="nuda-pg2-segmented__seg nuda-pg2-segmented__seg--on" aria-current="page">1–10</button>
          <button className="nuda-pg2-segmented__seg">11–20</button>
          <button className="nuda-pg2-segmented__seg">21–30</button>
        </div>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-segmented{width:260px}
      .nuda-pg2-segmented__track{position:relative;display:grid;grid-template-columns:repeat(3,1fr);background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:3px}
      .nuda-pg2-segmented__indicator{position:absolute;top:3px;left:3px;width:calc(33.333% - 4px);height:calc(100% - 6px);background:#e4ff54;border-radius:8px;transform:translateX(0);animation:_nuda-pg2segmentedin .4s cubic-bezier(.2,.8,.2,1)}
      .nuda-pg2-segmented__seg{position:relative;z-index:1;height:40px;border:none;background:transparent;color:#999;font-size:.72rem;cursor:pointer;border-radius:8px;transition:color .15s}
      .nuda-pg2-segmented__seg:hover{color:#fafafa}
      .nuda-pg2-segmented__seg--on{color:#0a0a0a;font-weight:700}
      .nuda-pg2-segmented__seg:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-pg2segmentedin{from{opacity:0;transform:translateX(0) scale(.85)}to{opacity:1;transform:translateX(0) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-segmented__indicator{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-segmented">
  <div class="nuda-pg2-segmented__track">
    <span class="nuda-pg2-segmented__indicator" aria-hidden="true"></span>
    <button class="nuda-pg2-segmented__seg nuda-pg2-segmented__seg--on" aria-current="page">1–10</button>
    <button class="nuda-pg2-segmented__seg">11–20</button>
    <button class="nuda-pg2-segmented__seg">21–30</button>
  </div>
</nav>`,
      },
    ],
  },

  /* ─────────────── KEYBOARD HINT PAGER ─────────────── */
  {
    id: "pg2-keyboard-hint",
    name: "Keyboard Hint Pager",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-kbd">
        <button className="nuda-pg2-kbd__btn" aria-label="Previous page">
          <kbd className="nuda-pg2-kbd__key" aria-hidden="true">←</kbd>
        </button>
        <span className="nuda-pg2-kbd__label">4 / 12</span>
        <button className="nuda-pg2-kbd__btn" aria-label="Next page">
          <kbd className="nuda-pg2-kbd__key nuda-pg2-kbd__key--hint" aria-hidden="true">→</kbd>
        </button>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-kbd{display:inline-flex;align-items:center;gap:.85rem}
      .nuda-pg2-kbd__btn{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#161616;cursor:pointer;transition:border-color .15s}
      .nuda-pg2-kbd__btn:hover{border-color:rgba(228,255,84,.4)}
      .nuda-pg2-kbd__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pg2-kbd__key{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 .3rem;border-radius:5px;background:#262626;border:1px solid rgba(255,255,255,.15);color:#cfcfcf;font-size:.7rem;font-family:inherit}
      .nuda-pg2-kbd__key--hint{background:#e4ff54;border-color:#e4ff54;color:#0a0a0a;animation:_nuda-pg2kbdpulse 1.8s ease-in-out infinite}
      .nuda-pg2-kbd__label{font-size:.78rem;color:#999;font-variant-numeric:tabular-nums}
      @keyframes _nuda-pg2kbdpulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.5)}50%{box-shadow:0 0 0 5px rgba(228,255,84,0)}}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-kbd__key--hint{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-kbd">
  <button class="nuda-pg2-kbd__btn" aria-label="Previous page">
    <kbd class="nuda-pg2-kbd__key" aria-hidden="true">←</kbd>
  </button>
  <span class="nuda-pg2-kbd__label">4 / 12</span>
  <button class="nuda-pg2-kbd__btn" aria-label="Next page">
    <kbd class="nuda-pg2-kbd__key nuda-pg2-kbd__key--hint" aria-hidden="true">→</kbd>
  </button>
</nav>`,
      },
    ],
  },

  /* ─────────────── SLIDING WINDOW PILL ─────────────── */
  {
    id: "pg2-sliding-pill",
    name: "Sliding Window Pill",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-pill">
        <div className="nuda-pg2-pill__track">
          <span className="nuda-pg2-pill__glow" aria-hidden="true"></span>
          <button className="nuda-pg2-pill__page nuda-pg2-pill__page--on" aria-current="page">1</button>
          <button className="nuda-pg2-pill__page">2</button>
          <button className="nuda-pg2-pill__page">3</button>
          <button className="nuda-pg2-pill__page">4</button>
          <button className="nuda-pg2-pill__page">5</button>
        </div>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-pill{width:250px}
      .nuda-pg2-pill__track{position:relative;display:flex;gap:4px}
      .nuda-pg2-pill__glow{position:absolute;top:0;left:0;width:44px;height:44px;border-radius:10px;background:#e4ff54;animation:_nuda-pg2pilltravel 3.6s ease-in-out infinite;z-index:0}
      .nuda-pg2-pill__page{position:relative;z-index:1;width:44px;height:44px;border:none;background:transparent;color:#999;font-size:.8rem;cursor:pointer;border-radius:10px;transition:color .15s}
      .nuda-pg2-pill__page:hover{color:#fafafa}
      .nuda-pg2-pill__page--on{color:#0a0a0a;font-weight:700}
      .nuda-pg2-pill__page:focus-visible{outline:2px solid #fafafa;outline-offset:2px}
      @keyframes _nuda-pg2pilltravel{0%,20%{transform:translateX(0)}40%,60%{transform:translateX(48px)}80%,100%{transform:translateX(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-pill__glow{animation:none !important;transform:translateX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-pill">
  <div class="nuda-pg2-pill__track">
    <span class="nuda-pg2-pill__glow" aria-hidden="true"></span>
    <button class="nuda-pg2-pill__page nuda-pg2-pill__page--on" aria-current="page">1</button>
    <button class="nuda-pg2-pill__page">2</button>
    <button class="nuda-pg2-pill__page">3</button>
    <button class="nuda-pg2-pill__page">4</button>
    <button class="nuda-pg2-pill__page">5</button>
  </div>
</nav>`,
      },
    ],
  },

  /* ─────────────── VERTICAL RAIL ─────────────── */
  {
    id: "pg2-vertical-rail",
    name: "Vertical Pagination Rail",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-rail">
        <button className="nuda-pg2-rail__item" aria-label="Slide 1"></button>
        <button className="nuda-pg2-rail__item nuda-pg2-rail__item--on" aria-current="page" aria-label="Slide 2"></button>
        <button className="nuda-pg2-rail__item" aria-label="Slide 3"></button>
        <button className="nuda-pg2-rail__item" aria-label="Slide 4"></button>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-rail{display:flex;flex-direction:column;align-items:center;gap:.15rem;width:44px}
      .nuda-pg2-rail__item{position:relative;width:44px;height:44px;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center}
      .nuda-pg2-rail__item::before{content:"";display:block;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.25);transition:transform .2s,background .2s}
      .nuda-pg2-rail__item:hover::before{background:rgba(255,255,255,.5)}
      .nuda-pg2-rail__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pg2-rail__item--on::before{background:#e4ff54;transform:scale(1.7);animation:_nuda-pg2railpop .3s ease-out}
      @keyframes _nuda-pg2railpop{from{transform:scale(1)}to{transform:scale(1.7)}}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-rail__item--on::before{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-rail">
  <button class="nuda-pg2-rail__item" aria-label="Slide 1"></button>
  <button class="nuda-pg2-rail__item nuda-pg2-rail__item--on" aria-current="page" aria-label="Slide 2"></button>
  <button class="nuda-pg2-rail__item" aria-label="Slide 3"></button>
  <button class="nuda-pg2-rail__item" aria-label="Slide 4"></button>
</nav>`,
      },
    ],
  },

  /* ─────────────── TABLE FOOTER BAR ─────────────── */
  {
    id: "pg2-table-footer",
    name: "Table Footer Pagination",
    category: CAT,
    preview: (
      <nav aria-label="Pagination" className="nuda-pg2-table">
        <span className="nuda-pg2-table__count">128 rows</span>
        <label className="nuda-pg2-table__perpage">
          <span className="nuda-pg2-table__perpage-text">Rows per page</span>
          <select className="nuda-pg2-table__select" aria-label="Rows per page" defaultValue="25">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </label>
        <div className="nuda-pg2-table__pages">
          <button className="nuda-pg2-table__btn nuda-pg2-table__btn--disabled" aria-disabled="true" aria-label="Previous page">‹</button>
          <span className="nuda-pg2-table__range">1–25 of 128</span>
          <button className="nuda-pg2-table__btn" aria-label="Next page">›</button>
        </div>
      </nav>
    ),
    cssInline: `
      .nuda-pg2-table{width:320px;display:flex;align-items:center;gap:.7rem;padding:.5rem .25rem;border-top:1px solid rgba(255,255,255,.08);flex-wrap:wrap}
      .nuda-pg2-table__count{font-size:.72rem;color:#777}
      .nuda-pg2-table__perpage{display:inline-flex;align-items:center;gap:.4rem;margin-left:auto;font-size:.68rem;color:#777}
      .nuda-pg2-table__select{height:36px;background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#fafafa;font-size:.72rem;padding:0 .4rem;cursor:pointer}
      .nuda-pg2-table__select:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pg2-table__pages{display:flex;align-items:center;gap:.5rem}
      .nuda-pg2-table__range{font-size:.7rem;color:#999;font-variant-numeric:tabular-nums;min-width:80px;text-align:center}
      .nuda-pg2-table__btn{width:44px;height:44px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:#161616;color:#cfcfcf;cursor:pointer;transition:border-color .15s,color .15s}
      .nuda-pg2-table__btn:hover{border-color:rgba(228,255,84,.4);color:#fafafa}
      .nuda-pg2-table__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pg2-table__btn--disabled{opacity:.35;cursor:not-allowed;pointer-events:none}
      @media (prefers-reduced-motion:reduce){.nuda-pg2-table__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Pagination" class="nuda-pg2-table">
  <span class="nuda-pg2-table__count">128 rows</span>
  <label class="nuda-pg2-table__perpage">
    <span class="nuda-pg2-table__perpage-text">Rows per page</span>
    <select class="nuda-pg2-table__select" aria-label="Rows per page">
      <option value="10">10</option>
      <option value="25" selected>25</option>
      <option value="50">50</option>
    </select>
  </label>
  <div class="nuda-pg2-table__pages">
    <button class="nuda-pg2-table__btn nuda-pg2-table__btn--disabled" aria-disabled="true" aria-label="Previous page">‹</button>
    <span class="nuda-pg2-table__range">1–25 of 128</span>
    <button class="nuda-pg2-table__btn" aria-label="Next page">›</button>
  </div>
</nav>`,
      },
    ],
  },
];
