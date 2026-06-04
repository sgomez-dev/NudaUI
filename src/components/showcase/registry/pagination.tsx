import type { NudaComponent } from "./types";

/* Pagination — preview + cssInline + HTML; CSS copy tab derived by reconcile. */
const CAT = "Pagination";

export const pagination: NudaComponent[] = [
  {
    id: "pagination-classic",
    name: "Classic Pagination",
    category: CAT,
    preview: (
      <nav className="nuda-pgc">
        <button className="nuda-pgc__nav">‹</button>
        <button className="nuda-pgc__page">1</button>
        <button className="nuda-pgc__page nuda-pgc__page--on">2</button>
        <button className="nuda-pgc__page">3</button>
        <button className="nuda-pgc__nav">›</button>
      </nav>
    ),
    cssInline: `
      .nuda-pgc{display:inline-flex;gap:.3rem;align-items:center}
      .nuda-pgc__page,.nuda-pgc__nav{min-width:34px;height:34px;border:1px solid rgba(255,255,255,.1);background:#161616;color:#cfcfcf;border-radius:8px;font-size:.8rem;cursor:pointer;transition:all .15s}
      .nuda-pgc__page:hover,.nuda-pgc__nav:hover{border-color:rgba(228,255,84,.4);color:#fafafa}
      .nuda-pgc__page--on{background:#e4ff54;color:#0a0a0a;border-color:#e4ff54;font-weight:700}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgc">
  <button class="nuda-pgc__nav">‹</button>
  <button class="nuda-pgc__page">1</button>
  <button class="nuda-pgc__page nuda-pgc__page--on">2</button>
  <button class="nuda-pgc__page">3</button>
  <button class="nuda-pgc__nav">›</button>
</nav>` }],
  },

  {
    id: "pagination-rounded",
    name: "Rounded Pagination",
    category: CAT,
    preview: (
      <nav className="nuda-pgr">
        <button className="nuda-pgr__page nuda-pgr__page--on">1</button>
        <button className="nuda-pgr__page">2</button>
        <button className="nuda-pgr__page">3</button>
        <button className="nuda-pgr__page">4</button>
      </nav>
    ),
    cssInline: `
      .nuda-pgr{display:inline-flex;gap:.4rem}
      .nuda-pgr__page{width:36px;height:36px;border:none;background:#1a1a1a;color:#cfcfcf;border-radius:50%;font-size:.8rem;cursor:pointer;transition:all .18s}
      .nuda-pgr__page:hover{background:#262626;color:#fafafa}
      .nuda-pgr__page--on{background:#e4ff54;color:#0a0a0a;font-weight:700;transform:scale(1.05)}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgr">
  <button class="nuda-pgr__page nuda-pgr__page--on">1</button>
  <button class="nuda-pgr__page">2</button>
  <button class="nuda-pgr__page">3</button>
  <button class="nuda-pgr__page">4</button>
</nav>` }],
  },

  {
    id: "pagination-minimal",
    name: "Minimal Pager",
    category: CAT,
    preview: (
      <nav className="nuda-pgm">
        <button className="nuda-pgm__btn">‹ Prev</button>
        <span className="nuda-pgm__label">Page 2 of 10</span>
        <button className="nuda-pgm__btn">Next ›</button>
      </nav>
    ),
    cssInline: `
      .nuda-pgm{display:inline-flex;align-items:center;gap:1rem}
      .nuda-pgm__btn{background:transparent;border:1px solid rgba(255,255,255,.12);color:#cfcfcf;border-radius:8px;padding:.45rem .8rem;font-size:.78rem;cursor:pointer;transition:all .15s}
      .nuda-pgm__btn:hover{border-color:rgba(228,255,84,.4);color:#fafafa}
      .nuda-pgm__label{font-size:.75rem;color:#777;font-variant-numeric:tabular-nums}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgm">
  <button class="nuda-pgm__btn">‹ Prev</button>
  <span class="nuda-pgm__label">Page 2 of 10</span>
  <button class="nuda-pgm__btn">Next ›</button>
</nav>` }],
  },

  {
    id: "pagination-dots",
    name: "Dot Pagination",
    category: CAT,
    preview: (
      <nav className="nuda-pgd">
        <span className="nuda-pgd__dot" />
        <span className="nuda-pgd__dot nuda-pgd__dot--on" />
        <span className="nuda-pgd__dot" />
        <span className="nuda-pgd__dot" />
      </nav>
    ),
    cssInline: `
      .nuda-pgd{display:inline-flex;gap:.5rem;align-items:center}
      .nuda-pgd__dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.2);cursor:pointer;transition:all .25s}
      .nuda-pgd__dot--on{width:24px;border-radius:99px;background:#e4ff54}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgd">
  <span class="nuda-pgd__dot"></span>
  <span class="nuda-pgd__dot nuda-pgd__dot--on"></span>
  <span class="nuda-pgd__dot"></span>
  <span class="nuda-pgd__dot"></span>
</nav>` }],
  },

  {
    id: "pagination-load-more",
    name: "Load More",
    category: CAT,
    preview: (
      <button className="nuda-pglm">
        <span className="nuda-pglm__spin" /> Load more
      </button>
    ),
    cssInline: `
      .nuda-pglm{display:inline-flex;align-items:center;gap:.5rem;background:#161616;border:1px solid rgba(255,255,255,.12);color:#cfcfcf;border-radius:99px;padding:.55rem 1.1rem;font-size:.8rem;cursor:pointer;transition:all .15s}
      .nuda-pglm:hover{border-color:rgba(228,255,84,.4);color:#fafafa}
      .nuda-pglm__spin{width:13px;height:13px;border:2px solid rgba(255,255,255,.2);border-top-color:#e4ff54;border-radius:50%;animation:_pglmSpin .7s linear infinite}
      @keyframes _pglmSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-pglm__spin{animation:none}}
    `,
    code: [{ label: "HTML", language: "html", code: `<button class="nuda-pglm">
  <span class="nuda-pglm__spin"></span> Load more
</button>` }],
  },

  {
    id: "pagination-compact",
    name: "Compact Pagination",
    category: CAT,
    preview: (
      <nav className="nuda-pgk">
        <button className="nuda-pgk__page">1</button>
        <span className="nuda-pgk__gap">…</span>
        <button className="nuda-pgk__page">4</button>
        <button className="nuda-pgk__page nuda-pgk__page--on">5</button>
        <button className="nuda-pgk__page">6</button>
        <span className="nuda-pgk__gap">…</span>
        <button className="nuda-pgk__page">20</button>
      </nav>
    ),
    cssInline: `
      .nuda-pgk{display:inline-flex;gap:.25rem;align-items:center}
      .nuda-pgk__page{min-width:32px;height:32px;border:none;background:transparent;color:#cfcfcf;border-radius:7px;font-size:.78rem;cursor:pointer;transition:background .15s}
      .nuda-pgk__page:hover{background:rgba(255,255,255,.07)}
      .nuda-pgk__page--on{background:#e4ff54;color:#0a0a0a;font-weight:700}
      .nuda-pgk__gap{color:#555;font-size:.78rem;padding:0 .15rem}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgk">
  <button class="nuda-pgk__page">1</button>
  <span class="nuda-pgk__gap">…</span>
  <button class="nuda-pgk__page">4</button>
  <button class="nuda-pgk__page nuda-pgk__page--on">5</button>
  <button class="nuda-pgk__page">6</button>
  <span class="nuda-pgk__gap">…</span>
  <button class="nuda-pgk__page">20</button>
</nav>` }],
  },

  {
    id: "pagination-input",
    name: "Jump To Page",
    category: CAT,
    preview: (
      <nav className="nuda-pgi">
        <button className="nuda-pgi__nav">‹</button>
        <span className="nuda-pgi__txt">Go to</span>
        <input className="nuda-pgi__field" defaultValue="2" readOnly />
        <span className="nuda-pgi__txt">/ 10</span>
        <button className="nuda-pgi__nav">›</button>
      </nav>
    ),
    cssInline: `
      .nuda-pgi{display:inline-flex;align-items:center;gap:.5rem}
      .nuda-pgi__nav{width:32px;height:32px;border:1px solid rgba(255,255,255,.1);background:#161616;color:#cfcfcf;border-radius:7px;cursor:pointer}
      .nuda-pgi__txt{font-size:.75rem;color:#777}
      .nuda-pgi__field{width:42px;height:32px;text-align:center;background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:7px;color:#fafafa;font-size:.8rem;outline:none}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgi">
  <button class="nuda-pgi__nav">‹</button>
  <span class="nuda-pgi__txt">Go to</span>
  <input class="nuda-pgi__field" value="2" />
  <span class="nuda-pgi__txt">/ 10</span>
  <button class="nuda-pgi__nav">›</button>
</nav>` }],
  },

  {
    id: "pagination-progress",
    name: "Progress Pagination",
    category: CAT,
    preview: (
      <div className="nuda-pgp">
        <div className="nuda-pgp__bar"><span className="nuda-pgp__fill" /></div>
        <span className="nuda-pgp__txt">3 / 8</span>
      </div>
    ),
    cssInline: `
      .nuda-pgp{display:inline-flex;align-items:center;gap:.7rem;min-width:200px}
      .nuda-pgp__bar{flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden}
      .nuda-pgp__fill{display:block;height:100%;width:37.5%;background:#e4ff54;border-radius:99px;animation:_pgpGrow .6s ease-out}
      .nuda-pgp__txt{font-size:.72rem;color:#777;font-variant-numeric:tabular-nums}
      @keyframes _pgpGrow{from{width:0}to{width:37.5%}}
      @media(prefers-reduced-motion:reduce){.nuda-pgp__fill{animation:none}}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-pgp">
  <div class="nuda-pgp__bar"><span class="nuda-pgp__fill"></span></div>
  <span class="nuda-pgp__txt">3 / 8</span>
</div>` }],
  },

  {
    id: "pagination-arrows",
    name: "Arrow Pager",
    category: CAT,
    preview: (
      <nav className="nuda-pga">
        <button className="nuda-pga__btn">←</button>
        <button className="nuda-pga__btn nuda-pga__btn--primary">→</button>
      </nav>
    ),
    cssInline: `
      .nuda-pga{display:inline-flex;gap:.5rem}
      .nuda-pga__btn{width:40px;height:40px;border:1px solid rgba(255,255,255,.12);background:#161616;color:#cfcfcf;border-radius:10px;font-size:1rem;cursor:pointer;transition:all .18s}
      .nuda-pga__btn:hover{transform:translateY(-2px);color:#fafafa}
      .nuda-pga__btn--primary{background:#e4ff54;color:#0a0a0a;border-color:#e4ff54}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pga">
  <button class="nuda-pga__btn">←</button>
  <button class="nuda-pga__btn nuda-pga__btn--primary">→</button>
</nav>` }],
  },

  {
    id: "pagination-numbered-bar",
    name: "Underline Pagination",
    category: CAT,
    preview: (
      <nav className="nuda-pgu">
        <button className="nuda-pgu__page">1</button>
        <button className="nuda-pgu__page nuda-pgu__page--on">2</button>
        <button className="nuda-pgu__page">3</button>
        <button className="nuda-pgu__page">4</button>
      </nav>
    ),
    cssInline: `
      .nuda-pgu{display:inline-flex;gap:.2rem}
      .nuda-pgu__page{position:relative;min-width:34px;height:34px;border:none;background:transparent;color:#999;font-size:.82rem;cursor:pointer;transition:color .15s}
      .nuda-pgu__page:hover{color:#fafafa}
      .nuda-pgu__page--on{color:#e4ff54;font-weight:700}
      .nuda-pgu__page--on::after{content:"";position:absolute;left:25%;right:25%;bottom:2px;height:2px;background:#e4ff54;border-radius:2px;animation:_pguIn .25s ease-out}
      @keyframes _pguIn{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-pgu__page--on::after{animation:none}}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-pgu">
  <button class="nuda-pgu__page">1</button>
  <button class="nuda-pgu__page nuda-pgu__page--on">2</button>
  <button class="nuda-pgu__page">3</button>
  <button class="nuda-pgu__page">4</button>
</nav>` }],
  },
];
