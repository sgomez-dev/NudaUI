import type { NudaComponent } from "./types";

/* Breadcrumbs (extra) — preview + cssInline + HTML; CSS copy tab derived by reconcile. */
const CAT = "Breadcrumbs";

export const breadcrumbsExtra: NudaComponent[] = [
  /* ─────────────── SLIDING HIGHLIGHT ─────────────── */
  {
    id: "bc2-slide",
    name: "Sliding Highlight Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-slide">
        <ol className="nuda-bc2-slide__list">
          <li className="nuda-bc2-slide__item"><a className="nuda-bc2-slide__link" href="#">Home</a></li>
          <li className="nuda-bc2-slide__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-slide__item"><a className="nuda-bc2-slide__link" href="#">Library</a></li>
          <li className="nuda-bc2-slide__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-slide__item"><span className="nuda-bc2-slide__link nuda-bc2-slide__link--cur" aria-current="page">Data</span></li>
        </ol>
        <span className="nuda-bc2-slide__highlight" aria-hidden="true"></span>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-slide{position:relative;width:260px}
      .nuda-bc2-slide__list{display:flex;align-items:center;list-style:none;margin:0;padding:0 0 .5rem;font-size:.78rem;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-bc2-slide__item{width:76px;text-align:center}
      .nuda-bc2-slide__sep{width:20px;text-align:center;color:#444}
      .nuda-bc2-slide__link{color:#999;text-decoration:none;transition:color .15s}
      .nuda-bc2-slide__link:hover{color:#fafafa}
      .nuda-bc2-slide__link--cur{color:#fafafa;font-weight:700}
      .nuda-bc2-slide__highlight{position:absolute;bottom:0;left:0;width:76px;height:2px;background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.7);transform:translateX(192px);animation:_nuda-bc2slide 6s ease-in-out infinite;will-change:transform}
      @keyframes _nuda-bc2slide{
        0%,20%{transform:translateX(0)}
        35%,50%{transform:translateX(96px)}
        65%,100%{transform:translateX(192px)}
      }
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-slide__highlight{animation:none !important;transform:translateX(192px)}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-slide">
  <ol class="nuda-bc2-slide__list">
    <li class="nuda-bc2-slide__item"><a class="nuda-bc2-slide__link" href="#">Home</a></li>
    <li class="nuda-bc2-slide__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-slide__item"><a class="nuda-bc2-slide__link" href="#">Library</a></li>
    <li class="nuda-bc2-slide__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-slide__item"><span class="nuda-bc2-slide__link nuda-bc2-slide__link--cur" aria-current="page">Data</span></li>
  </ol>
  <span class="nuda-bc2-slide__highlight" aria-hidden="true"></span>
</nav>` }],
  },

  /* ─────────────── COPYABLE PATH ─────────────── */
  {
    id: "bc2-path",
    name: "Copyable Path Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-path">
        <ol className="nuda-bc2-path__list">
          <li className="nuda-bc2-path__item"><a className="nuda-bc2-path__link" href="#">~</a></li>
          <li className="nuda-bc2-path__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-path__item"><a className="nuda-bc2-path__link" href="#">src</a></li>
          <li className="nuda-bc2-path__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-path__item"><span className="nuda-bc2-path__link nuda-bc2-path__link--cur" aria-current="page">index.ts</span></li>
        </ol>
        <button type="button" className="nuda-bc2-path__copy" aria-label="Copy path">
          <svg className="nuda-bc2-path__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><rect x="9" y="9" width="10" height="10" rx="1"></rect><path d="M5 15V6a1 1 0 0 1 1-1h9"></path></svg>
          <svg className="nuda-bc2-path__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M4 12l5 5L20 6"></path></svg>
        </button>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-path{display:inline-flex;align-items:center;gap:.4rem;max-width:300px;padding:.3rem .4rem;background:#111;border:1px solid rgba(255,255,255,.08);border-radius:8px;font-family:ui-monospace,Menlo,monospace;font-size:.74rem}
      .nuda-bc2-path__list{display:flex;align-items:center;gap:.25rem;list-style:none;margin:0;padding:0 .3rem;flex:1;min-width:0;overflow:hidden;white-space:nowrap}
      .nuda-bc2-path__item{color:#888}
      .nuda-bc2-path__sep{color:#444}
      .nuda-bc2-path__link{color:#888;text-decoration:none}
      .nuda-bc2-path__link:hover{color:#e4ff54}
      .nuda-bc2-path__link--cur{color:#e4ff54;font-weight:600}
      .nuda-bc2-path__copy{position:relative;flex:none;width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:8px;background:#1c1c1c;color:#999;cursor:pointer}
      .nuda-bc2-path__copy:hover{background:#262626;color:#fafafa}
      .nuda-bc2-path__copy:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-bc2-path__icon,.nuda-bc2-path__check{width:16px;height:16px;position:absolute}
      .nuda-bc2-path__check{opacity:0;transform:scale(.4);color:#6ee7b7}
      .nuda-bc2-path__copy:hover .nuda-bc2-path__icon,.nuda-bc2-path__copy:focus-visible .nuda-bc2-path__icon{opacity:0;transform:scale(.5) rotate(20deg);transition:opacity .18s,transform .18s}
      .nuda-bc2-path__copy:hover .nuda-bc2-path__check,.nuda-bc2-path__copy:focus-visible .nuda-bc2-path__check{animation:_nuda-bc2pathcheck .4s ease forwards}
      @keyframes _nuda-bc2pathcheck{0%{opacity:0;transform:scale(.4)}60%{opacity:1;transform:scale(1.2)}100%{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-path__icon,.nuda-bc2-path__check{transition:none}
        .nuda-bc2-path__copy:hover .nuda-bc2-path__check,.nuda-bc2-path__copy:focus-visible .nuda-bc2-path__check{animation:none !important;opacity:1;transform:scale(1)}
        .nuda-bc2-path__copy:hover .nuda-bc2-path__icon,.nuda-bc2-path__copy:focus-visible .nuda-bc2-path__icon{opacity:0;transform:none}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-path">
  <ol class="nuda-bc2-path__list">
    <li class="nuda-bc2-path__item"><a class="nuda-bc2-path__link" href="#">~</a></li>
    <li class="nuda-bc2-path__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-path__item"><a class="nuda-bc2-path__link" href="#">src</a></li>
    <li class="nuda-bc2-path__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-path__item"><span class="nuda-bc2-path__link nuda-bc2-path__link--cur" aria-current="page">index.ts</span></li>
  </ol>
  <button type="button" class="nuda-bc2-path__copy" aria-label="Copy path">
    <svg class="nuda-bc2-path__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="10" height="10" rx="1"></rect><path d="M5 15V6a1 1 0 0 1 1-1h9"></path></svg>
    <svg class="nuda-bc2-path__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12l5 5L20 6"></path></svg>
  </button>
</nav>` }],
  },

  /* ─────────────── SCROLL FADE ─────────────── */
  {
    id: "bc2-scroll",
    name: "Scroll Fade Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-scroll">
        <div className="nuda-bc2-scroll__track" tabIndex={0}>
          <ol className="nuda-bc2-scroll__list">
            <li className="nuda-bc2-scroll__item"><a className="nuda-bc2-scroll__link" href="#">Home</a></li>
            <li className="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
            <li className="nuda-bc2-scroll__item"><a className="nuda-bc2-scroll__link" href="#">Workspace</a></li>
            <li className="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
            <li className="nuda-bc2-scroll__item"><a className="nuda-bc2-scroll__link" href="#">Projects</a></li>
            <li className="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
            <li className="nuda-bc2-scroll__item"><a className="nuda-bc2-scroll__link" href="#">2024-Q3</a></li>
            <li className="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
            <li className="nuda-bc2-scroll__item"><span className="nuda-bc2-scroll__link nuda-bc2-scroll__link--cur" aria-current="page">Summary</span></li>
          </ol>
        </div>
        <span className="nuda-bc2-scroll__hint" aria-hidden="true">›</span>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-scroll{position:relative;width:260px}
      .nuda-bc2-scroll__track{overflow-x:auto;overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent,#000 20px,#000 calc(100% - 28px),transparent);mask-image:linear-gradient(to right,transparent,#000 20px,#000 calc(100% - 28px),transparent);scrollbar-width:none}
      .nuda-bc2-scroll__track::-webkit-scrollbar{display:none}
      .nuda-bc2-scroll__track:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-bc2-scroll__list{display:flex;align-items:center;gap:.4rem;list-style:none;margin:0;padding:.4rem 24px;white-space:nowrap;font-size:.78rem}
      .nuda-bc2-scroll__link{color:#999;text-decoration:none}
      .nuda-bc2-scroll__link:hover{color:#e4ff54}
      .nuda-bc2-scroll__link--cur{color:#fafafa;font-weight:600}
      .nuda-bc2-scroll__sep{color:#444}
      .nuda-bc2-scroll__hint{position:absolute;right:2px;top:50%;color:#e4ff54;pointer-events:none;animation:_nuda-bc2scrollhint 1.8s ease-in-out infinite}
      @keyframes _nuda-bc2scrollhint{0%,100%{opacity:.3;transform:translate(0,-50%)}50%{opacity:1;transform:translate(3px,-50%)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-scroll__hint{animation:none !important;opacity:.6;transform:translate(0,-50%)}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-scroll">
  <div class="nuda-bc2-scroll__track" tabindex="0">
    <ol class="nuda-bc2-scroll__list">
      <li class="nuda-bc2-scroll__item"><a class="nuda-bc2-scroll__link" href="#">Home</a></li>
      <li class="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
      <li class="nuda-bc2-scroll__item"><a class="nuda-bc2-scroll__link" href="#">Workspace</a></li>
      <li class="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
      <li class="nuda-bc2-scroll__item"><a class="nuda-bc2-scroll__link" href="#">Projects</a></li>
      <li class="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
      <li class="nuda-bc2-scroll__item"><a class="nuda-bc2-scroll__link" href="#">2024-Q3</a></li>
      <li class="nuda-bc2-scroll__sep" aria-hidden="true">/</li>
      <li class="nuda-bc2-scroll__item"><span class="nuda-bc2-scroll__link nuda-bc2-scroll__link--cur" aria-current="page">Summary</span></li>
    </ol>
  </div>
  <span class="nuda-bc2-scroll__hint" aria-hidden="true">›</span>
</nav>` }],
  },

  /* ─────────────── DROPDOWN TRUNCATION ─────────────── */
  {
    id: "bc2-dropdown",
    name: "Dropdown Truncation Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-dropdown">
        <ol className="nuda-bc2-dropdown__list">
          <li className="nuda-bc2-dropdown__item"><a className="nuda-bc2-dropdown__link" href="#">Home</a></li>
          <li className="nuda-bc2-dropdown__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-dropdown__item nuda-bc2-dropdown__item--trunc">
            <button type="button" className="nuda-bc2-dropdown__trigger" aria-haspopup="true" aria-expanded="false">…</button>
            <ul className="nuda-bc2-dropdown__menu">
              <li><a className="nuda-bc2-dropdown__menulink" href="#">Library</a></li>
              <li><a className="nuda-bc2-dropdown__menulink" href="#">2024</a></li>
            </ul>
          </li>
          <li className="nuda-bc2-dropdown__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-dropdown__item"><span className="nuda-bc2-dropdown__link nuda-bc2-dropdown__link--cur" aria-current="page">Report</span></li>
        </ol>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-dropdown{width:260px;font-size:.8rem}
      .nuda-bc2-dropdown__list{display:flex;align-items:center;gap:.3rem;list-style:none;margin:0;padding:0}
      .nuda-bc2-dropdown__item{position:relative}
      .nuda-bc2-dropdown__item--trunc{display:flex;align-items:center}
      .nuda-bc2-dropdown__link{color:#999;text-decoration:none}
      .nuda-bc2-dropdown__link:hover{color:#e4ff54}
      .nuda-bc2-dropdown__link--cur{color:#fafafa;font-weight:600}
      .nuda-bc2-dropdown__sep{color:#444}
      .nuda-bc2-dropdown__trigger{min-width:44px;min-height:44px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;color:#999;font-size:1rem;cursor:pointer;border-radius:6px;line-height:1}
      .nuda-bc2-dropdown__trigger:hover{background:#1c1c1c;color:#fafafa}
      .nuda-bc2-dropdown__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-bc2-dropdown__menu{position:absolute;top:calc(100% + 4px);left:0;min-width:130px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:.3rem;margin:0;list-style:none;box-shadow:0 12px 28px rgba(0,0,0,.45);opacity:0;pointer-events:none;transform:translateY(-6px) scale(.96);transform-origin:top left;z-index:5}
      .nuda-bc2-dropdown__item--trunc:hover .nuda-bc2-dropdown__menu,.nuda-bc2-dropdown__item--trunc:focus-within .nuda-bc2-dropdown__menu{opacity:1;pointer-events:auto;animation:_nuda-bc2dropdownin .18s ease forwards}
      .nuda-bc2-dropdown__menulink{display:block;padding:.35rem .5rem;color:#ccc;text-decoration:none;border-radius:5px;font-size:.76rem}
      .nuda-bc2-dropdown__menulink:hover{background:#232323;color:#e4ff54}
      @keyframes _nuda-bc2dropdownin{from{opacity:0;transform:translateY(-6px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-dropdown__item--trunc:hover .nuda-bc2-dropdown__menu,.nuda-bc2-dropdown__item--trunc:focus-within .nuda-bc2-dropdown__menu{animation:none !important;opacity:1;transform:none}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-dropdown">
  <ol class="nuda-bc2-dropdown__list">
    <li class="nuda-bc2-dropdown__item"><a class="nuda-bc2-dropdown__link" href="#">Home</a></li>
    <li class="nuda-bc2-dropdown__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-dropdown__item nuda-bc2-dropdown__item--trunc">
      <button type="button" class="nuda-bc2-dropdown__trigger" aria-haspopup="true" aria-expanded="false">…</button>
      <ul class="nuda-bc2-dropdown__menu">
        <li><a class="nuda-bc2-dropdown__menulink" href="#">Library</a></li>
        <li><a class="nuda-bc2-dropdown__menulink" href="#">2024</a></li>
      </ul>
    </li>
    <li class="nuda-bc2-dropdown__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-dropdown__item"><span class="nuda-bc2-dropdown__link nuda-bc2-dropdown__link--cur" aria-current="page">Report</span></li>
  </ol>
</nav>` }],
  },

  /* ─────────────── PROGRESS GLOW ─────────────── */
  {
    id: "bc2-progress",
    name: "Progress Glow Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-progress">
        <ol className="nuda-bc2-progress__list">
          <li className="nuda-bc2-progress__item nuda-bc2-progress__item--done"><span className="nuda-bc2-progress__dot" aria-hidden="true"></span><a className="nuda-bc2-progress__link" href="#">Cart</a></li>
          <li className="nuda-bc2-progress__sep" aria-hidden="true"></li>
          <li className="nuda-bc2-progress__item nuda-bc2-progress__item--done"><span className="nuda-bc2-progress__dot" aria-hidden="true"></span><a className="nuda-bc2-progress__link" href="#">Address</a></li>
          <li className="nuda-bc2-progress__sep" aria-hidden="true"></li>
          <li className="nuda-bc2-progress__item nuda-bc2-progress__item--cur"><span className="nuda-bc2-progress__dot" aria-hidden="true"></span><span className="nuda-bc2-progress__link" aria-current="page">Payment</span></li>
          <li className="nuda-bc2-progress__sep" aria-hidden="true"></li>
          <li className="nuda-bc2-progress__item"><span className="nuda-bc2-progress__dot" aria-hidden="true"></span><span className="nuda-bc2-progress__link">Confirm</span></li>
        </ol>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-progress{width:280px}
      .nuda-bc2-progress__list{display:flex;align-items:center;list-style:none;margin:0;padding:0;font-size:.74rem}
      .nuda-bc2-progress__item{display:flex;align-items:center;gap:.3rem;color:#666}
      .nuda-bc2-progress__sep{width:16px;height:1px;background:rgba(255,255,255,.12);margin:0 .25rem}
      .nuda-bc2-progress__dot{width:8px;height:8px;border-radius:50%;background:#333;flex:none}
      .nuda-bc2-progress__link{color:#666;text-decoration:none}
      .nuda-bc2-progress__item--done{color:#b6d94a}
      .nuda-bc2-progress__item--done .nuda-bc2-progress__dot{background:#e4ff54}
      .nuda-bc2-progress__item--done .nuda-bc2-progress__link{color:#b6d94a}
      .nuda-bc2-progress__item--cur{color:#fafafa}
      .nuda-bc2-progress__item--cur .nuda-bc2-progress__link{color:#fafafa;font-weight:700}
      .nuda-bc2-progress__item--cur .nuda-bc2-progress__dot{background:#e4ff54;animation:_nuda-bc2progressglow 1.6s ease-in-out infinite}
      @keyframes _nuda-bc2progressglow{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.55)}50%{box-shadow:0 0 0 5px rgba(228,255,84,0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-progress__item--cur .nuda-bc2-progress__dot{animation:none !important;box-shadow:0 0 0 3px rgba(228,255,84,.35)}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-progress">
  <ol class="nuda-bc2-progress__list">
    <li class="nuda-bc2-progress__item nuda-bc2-progress__item--done"><span class="nuda-bc2-progress__dot" aria-hidden="true"></span><a class="nuda-bc2-progress__link" href="#">Cart</a></li>
    <li class="nuda-bc2-progress__sep" aria-hidden="true"></li>
    <li class="nuda-bc2-progress__item nuda-bc2-progress__item--done"><span class="nuda-bc2-progress__dot" aria-hidden="true"></span><a class="nuda-bc2-progress__link" href="#">Address</a></li>
    <li class="nuda-bc2-progress__sep" aria-hidden="true"></li>
    <li class="nuda-bc2-progress__item nuda-bc2-progress__item--cur"><span class="nuda-bc2-progress__dot" aria-hidden="true"></span><span class="nuda-bc2-progress__link" aria-current="page">Payment</span></li>
    <li class="nuda-bc2-progress__sep" aria-hidden="true"></li>
    <li class="nuda-bc2-progress__item"><span class="nuda-bc2-progress__dot" aria-hidden="true"></span><span class="nuda-bc2-progress__link">Confirm</span></li>
  </ol>
</nav>` }],
  },

  /* ─────────────── LIVE COUNT ─────────────── */
  {
    id: "bc2-badge",
    name: "Live Count Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-badge">
        <ol className="nuda-bc2-badge__list">
          <li className="nuda-bc2-badge__item">
            <a className="nuda-bc2-badge__link" href="#">Inbox</a>
            <span className="nuda-bc2-badge__count">12</span>
          </li>
          <li className="nuda-bc2-badge__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-badge__item">
            <a className="nuda-bc2-badge__link" href="#">Team</a>
            <span className="nuda-bc2-badge__count">3</span>
          </li>
          <li className="nuda-bc2-badge__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-badge__item">
            <span className="nuda-bc2-badge__link nuda-bc2-badge__link--cur" aria-current="page">Unread</span>
            <span className="nuda-bc2-badge__count nuda-bc2-badge__count--on">5</span>
          </li>
        </ol>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-badge{width:280px}
      .nuda-bc2-badge__list{display:flex;align-items:center;list-style:none;margin:0;padding:0;font-size:.78rem;gap:.4rem}
      .nuda-bc2-badge__item{display:inline-flex;align-items:center;gap:.3rem}
      .nuda-bc2-badge__link{color:#999;text-decoration:none}
      .nuda-bc2-badge__link:hover{color:#e4ff54}
      .nuda-bc2-badge__link--cur{color:#fafafa;font-weight:600}
      .nuda-bc2-badge__sep{color:#444}
      .nuda-bc2-badge__count{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 .3rem;border-radius:99px;background:#262626;color:#bbb;font-size:.62rem;font-weight:700;animation:_nuda-bc2badgepop .4s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-bc2-badge__count--on{background:#e4ff54;color:#0a0a0a}
      .nuda-bc2-badge__item:nth-child(1) .nuda-bc2-badge__count{animation-delay:0s}
      .nuda-bc2-badge__item:nth-child(3) .nuda-bc2-badge__count{animation-delay:.12s}
      .nuda-bc2-badge__item:nth-child(5) .nuda-bc2-badge__count{animation-delay:.24s}
      @keyframes _nuda-bc2badgepop{0%{transform:scale(0)}70%{transform:scale(1.25)}100%{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-badge__count{animation:none !important;transform:scale(1)}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-badge">
  <ol class="nuda-bc2-badge__list">
    <li class="nuda-bc2-badge__item">
      <a class="nuda-bc2-badge__link" href="#">Inbox</a>
      <span class="nuda-bc2-badge__count">12</span>
    </li>
    <li class="nuda-bc2-badge__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-badge__item">
      <a class="nuda-bc2-badge__link" href="#">Team</a>
      <span class="nuda-bc2-badge__count">3</span>
    </li>
    <li class="nuda-bc2-badge__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-badge__item">
      <span class="nuda-bc2-badge__link nuda-bc2-badge__link--cur" aria-current="page">Unread</span>
      <span class="nuda-bc2-badge__count nuda-bc2-badge__count--on">5</span>
    </li>
  </ol>
</nav>` }],
  },

  /* ─────────────── FOLDER MORPH ─────────────── */
  {
    id: "bc2-folder",
    name: "Folder Morph Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-folder">
        <ol className="nuda-bc2-folder__list">
          <li className="nuda-bc2-folder__item">
            <svg className="nuda-bc2-folder__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"></path></svg>
            <a className="nuda-bc2-folder__link" href="#">root</a>
          </li>
          <li className="nuda-bc2-folder__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-folder__item">
            <svg className="nuda-bc2-folder__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"></path></svg>
            <a className="nuda-bc2-folder__link" href="#">assets</a>
          </li>
          <li className="nuda-bc2-folder__sep" aria-hidden="true">/</li>
          <li className="nuda-bc2-folder__item nuda-bc2-folder__item--cur">
            <span className="nuda-bc2-folder__iconwrap" aria-hidden="true">
              <svg className="nuda-bc2-folder__icon nuda-bc2-folder__icon--closed" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"></path></svg>
              <svg className="nuda-bc2-folder__icon nuda-bc2-folder__icon--open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M3 8a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 .97 1.24l-1.4 6A1 1 0 0 1 17.6 18H5a1 1 0 0 1-1-1V8z"></path><path d="M3 8V6a1 1 0 0 1 1-1h4l2 2"></path></svg>
            </span>
            <span className="nuda-bc2-folder__link nuda-bc2-folder__link--cur" aria-current="page">icons</span>
          </li>
        </ol>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-folder{width:260px}
      .nuda-bc2-folder__list{display:flex;align-items:center;gap:.35rem;list-style:none;margin:0;padding:0;font-size:.78rem}
      .nuda-bc2-folder__item{display:inline-flex;align-items:center;gap:.3rem;color:#999}
      .nuda-bc2-folder__icon{width:14px;height:14px;color:#777;flex:none}
      .nuda-bc2-folder__link{color:#999;text-decoration:none}
      .nuda-bc2-folder__link:hover{color:#e4ff54}
      .nuda-bc2-folder__sep{color:#444}
      .nuda-bc2-folder__link--cur{color:#e4ff54;font-weight:600}
      .nuda-bc2-folder__iconwrap{position:relative;width:14px;height:14px;flex:none;display:inline-block}
      .nuda-bc2-folder__iconwrap .nuda-bc2-folder__icon{position:absolute;inset:0}
      .nuda-bc2-folder__icon--closed{color:#e4ff54;animation:nuda-bc2-folder-close .7s ease .2s both}
      .nuda-bc2-folder__icon--open{color:#e4ff54;opacity:0;transform:scale(.7);animation:nuda-bc2-folder-open .7s ease .2s both}
      @keyframes nuda-bc2-folder-close{0%{opacity:1;transform:scale(1)}55%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.7)}}
      @keyframes nuda-bc2-folder-open{0%{opacity:0;transform:scale(.7)}55%{opacity:0;transform:scale(.7)}100%{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-folder__icon--closed{animation:none !important;opacity:0;transform:scale(.7)}
        .nuda-bc2-folder__icon--open{animation:none !important;opacity:1;transform:scale(1)}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-folder">
  <ol class="nuda-bc2-folder__list">
    <li class="nuda-bc2-folder__item">
      <svg class="nuda-bc2-folder__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"></path></svg>
      <a class="nuda-bc2-folder__link" href="#">root</a>
    </li>
    <li class="nuda-bc2-folder__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-folder__item">
      <svg class="nuda-bc2-folder__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"></path></svg>
      <a class="nuda-bc2-folder__link" href="#">assets</a>
    </li>
    <li class="nuda-bc2-folder__sep" aria-hidden="true">/</li>
    <li class="nuda-bc2-folder__item nuda-bc2-folder__item--cur">
      <span class="nuda-bc2-folder__iconwrap" aria-hidden="true">
        <svg class="nuda-bc2-folder__icon nuda-bc2-folder__icon--closed" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"></path></svg>
        <svg class="nuda-bc2-folder__icon nuda-bc2-folder__icon--open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8a1 1 0 0 1 1-1h4l2 2h9a1 1 0 0 1 .97 1.24l-1.4 6A1 1 0 0 1 17.6 18H5a1 1 0 0 1-1-1V8z"></path><path d="M3 8V6a1 1 0 0 1 1-1h4l2 2"></path></svg>
      </span>
      <span class="nuda-bc2-folder__link nuda-bc2-folder__link--cur" aria-current="page">icons</span>
    </li>
  </ol>
</nav>` }],
  },

  /* ─────────────── STACKED TRAIL ─────────────── */
  {
    id: "bc2-stack",
    name: "Stacked Trail Breadcrumb",
    category: CAT,
    preview: (
      <nav aria-label="Breadcrumb" className="nuda-bc2-stack">
        <ol className="nuda-bc2-stack__list">
          <li className="nuda-bc2-stack__item"><a className="nuda-bc2-stack__link" href="#">Home</a></li>
          <li className="nuda-bc2-stack__item"><a className="nuda-bc2-stack__link" href="#">Settings</a></li>
          <li className="nuda-bc2-stack__item"><a className="nuda-bc2-stack__link" href="#">Account</a></li>
          <li className="nuda-bc2-stack__item nuda-bc2-stack__item--cur"><span className="nuda-bc2-stack__link nuda-bc2-stack__link--cur" aria-current="page">Security</span></li>
        </ol>
      </nav>
    ),
    cssInline: `
      .nuda-bc2-stack{width:200px}
      .nuda-bc2-stack__list{position:relative;display:flex;flex-direction:column;list-style:none;margin:0;padding:0 0 0 .9rem;font-size:.78rem}
      .nuda-bc2-stack__list::before{content:"";position:absolute;left:.28rem;top:6px;bottom:6px;width:1px;background:rgba(255,255,255,.12)}
      .nuda-bc2-stack__item{position:relative;padding:.3rem 0;opacity:0;transform:translateX(-10px);animation:_nuda-bc2stackin .4s ease both}
      .nuda-bc2-stack__item::before{content:"";position:absolute;left:-.9rem;top:50%;width:6px;height:6px;border-radius:50%;background:#555;transform:translateY(-50%)}
      .nuda-bc2-stack__item:nth-child(1){animation-delay:0s}
      .nuda-bc2-stack__item:nth-child(2){animation-delay:.08s}
      .nuda-bc2-stack__item:nth-child(3){animation-delay:.16s}
      .nuda-bc2-stack__item:nth-child(4){animation-delay:.24s}
      .nuda-bc2-stack__link{color:#999;text-decoration:none}
      .nuda-bc2-stack__link:hover{color:#e4ff54}
      .nuda-bc2-stack__item--cur::before{background:#e4ff54}
      .nuda-bc2-stack__link--cur{color:#fafafa;font-weight:700}
      @keyframes _nuda-bc2stackin{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-bc2-stack__item{animation:none !important;opacity:1;transform:none}
      }
    `,
    code: [{ label: "HTML", language: "html", code: `<nav aria-label="Breadcrumb" class="nuda-bc2-stack">
  <ol class="nuda-bc2-stack__list">
    <li class="nuda-bc2-stack__item"><a class="nuda-bc2-stack__link" href="#">Home</a></li>
    <li class="nuda-bc2-stack__item"><a class="nuda-bc2-stack__link" href="#">Settings</a></li>
    <li class="nuda-bc2-stack__item"><a class="nuda-bc2-stack__link" href="#">Account</a></li>
    <li class="nuda-bc2-stack__item nuda-bc2-stack__item--cur"><span class="nuda-bc2-stack__link nuda-bc2-stack__link--cur" aria-current="page">Security</span></li>
  </ol>
</nav>` }],
  },
];
