import type { NudaComponent } from "./types";

const CAT = "Modals & Overlays";

export const modalsOverlaysExtra: NudaComponent[] = [
  /* ─────────────── CONFIRM DIALOG ─────────────── */
  {
    id: "mdx-confirm-dialog",
    name: "Confirm Dialog",
    category: CAT,
    preview: (
      <div className="nuda-mdx-confirm" aria-hidden="true">
        <div className="nuda-mdx-confirm__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#e4ff54" strokeWidth="1.5" />
            <path d="M12 7v5" stroke="#e4ff54" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="16" r="1" fill="#e4ff54" />
          </svg>
        </div>
        <p className="nuda-mdx-confirm__title">Delete item?</p>
        <p className="nuda-mdx-confirm__body">This action cannot be undone.</p>
        <div className="nuda-mdx-confirm__actions">
          <button className="nuda-mdx-confirm__btn nuda-mdx-confirm__btn--cancel">Cancel</button>
          <button className="nuda-mdx-confirm__btn nuda-mdx-confirm__btn--ok">Delete</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mdx-confirm{display:flex;flex-direction:column;align-items:center;gap:.45rem;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1.1rem 1rem;max-width:220px;margin:auto;animation:_nuda-mdxConfirmIn .35s cubic-bezier(.16,1,.3,1) both}
      .nuda-mdx-confirm__icon{width:44px;height:44px;border-radius:50%;background:rgba(228,255,84,.08);display:flex;align-items:center;justify-content:center}
      .nuda-mdx-confirm__title{margin:0;font-size:.78rem;font-weight:700;color:#fafafa;text-align:center}
      .nuda-mdx-confirm__body{margin:0;font-size:.68rem;color:#777;text-align:center}
      .nuda-mdx-confirm__actions{display:flex;gap:.5rem;margin-top:.2rem}
      .nuda-mdx-confirm__btn{border:none;border-radius:8px;padding:.38rem .85rem;font-size:.7rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-mdx-confirm__btn:hover{opacity:.8}
      .nuda-mdx-confirm__btn--cancel{background:rgba(255,255,255,.07);color:#cfcfcf}
      .nuda-mdx-confirm__btn--ok{background:#ff6b6b;color:#fff}
      @keyframes _nuda-mdxConfirmIn{from{opacity:0;transform:scale(.92) translateY(6px)}to{opacity:1;transform:scale(1) translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-confirm{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-confirm" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title">
  <div class="nuda-mdx-confirm__icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#e4ff54" stroke-width="1.5"/>
      <path d="M12 7v5" stroke="#e4ff54" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="16" r="1" fill="#e4ff54"/>
    </svg>
  </div>
  <p class="nuda-mdx-confirm__title" id="confirm-title">Delete item?</p>
  <p class="nuda-mdx-confirm__body">This action cannot be undone.</p>
  <div class="nuda-mdx-confirm__actions">
    <button class="nuda-mdx-confirm__btn nuda-mdx-confirm__btn--cancel">Cancel</button>
    <button class="nuda-mdx-confirm__btn nuda-mdx-confirm__btn--ok">Delete</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── FULL-SCREEN OVERLAY ─────────────── */
  {
    id: "mdx-fullscreen-overlay",
    name: "Full-Screen Overlay",
    category: CAT,
    preview: (
      <div className="nuda-mdx-fsoverlay" aria-hidden="true">
        <div className="nuda-mdx-fsoverlay__blur" />
        <div className="nuda-mdx-fsoverlay__content">
          <div className="nuda-mdx-fsoverlay__close">&times;</div>
          <div className="nuda-mdx-fsoverlay__logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#e4ff54" />
              <path d="M9 16 L16 9 L23 16 L16 23 Z" fill="#0a0a0a" />
            </svg>
          </div>
          <p className="nuda-mdx-fsoverlay__headline">Full Coverage</p>
          <p className="nuda-mdx-fsoverlay__sub">Takes over the entire viewport</p>
          <div className="nuda-mdx-fsoverlay__nav">
            <span className="nuda-mdx-fsoverlay__link">Home</span>
            <span className="nuda-mdx-fsoverlay__link">Work</span>
            <span className="nuda-mdx-fsoverlay__link">About</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mdx-fsoverlay{position:relative;width:100%;min-height:160px;border-radius:12px;overflow:hidden;background:#0d0d0d;display:flex;align-items:center;justify-content:center;animation:_nuda-mdxFsIn .5s ease-out both}
      .nuda-mdx-fsoverlay__blur{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 50%,rgba(228,255,84,.06) 0%,transparent 70%)}
      .nuda-mdx-fsoverlay__content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:.35rem;padding:1rem}
      .nuda-mdx-fsoverlay__close{position:absolute;top:.6rem;right:.8rem;font-size:1rem;color:#555;cursor:pointer;line-height:1}
      .nuda-mdx-fsoverlay__logo{margin-bottom:.1rem}
      .nuda-mdx-fsoverlay__headline{margin:0;font-size:.85rem;font-weight:800;color:#fafafa;letter-spacing:-.01em}
      .nuda-mdx-fsoverlay__sub{margin:0;font-size:.62rem;color:#555}
      .nuda-mdx-fsoverlay__nav{display:flex;gap:.75rem;margin-top:.3rem}
      .nuda-mdx-fsoverlay__link{font-size:.65rem;color:#cfcfcf;cursor:pointer;border-bottom:1px solid rgba(228,255,84,.3);padding-bottom:1px}
      @keyframes _nuda-mdxFsIn{from{opacity:0}to{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-fsoverlay{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-fsoverlay" role="dialog" aria-modal="true" aria-label="Full-screen overlay">
  <div class="nuda-mdx-fsoverlay__blur"></div>
  <div class="nuda-mdx-fsoverlay__content">
    <button class="nuda-mdx-fsoverlay__close" aria-label="Close">&times;</button>
    <div class="nuda-mdx-fsoverlay__logo">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#e4ff54"/>
        <path d="M9 16 L16 9 L23 16 L16 23 Z" fill="#0a0a0a"/>
      </svg>
    </div>
    <p class="nuda-mdx-fsoverlay__headline">Full Coverage</p>
    <p class="nuda-mdx-fsoverlay__sub">Takes over the entire viewport</p>
    <nav class="nuda-mdx-fsoverlay__nav">
      <a href="#" class="nuda-mdx-fsoverlay__link">Home</a>
      <a href="#" class="nuda-mdx-fsoverlay__link">Work</a>
      <a href="#" class="nuda-mdx-fsoverlay__link">About</a>
    </nav>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── SIDE SHEET RIGHT ─────────────── */
  {
    id: "mdx-side-sheet-right",
    name: "Side Sheet Right",
    category: CAT,
    preview: (
      <div className="nuda-mdx-ssheet" aria-hidden="true">
        <div className="nuda-mdx-ssheet__dim" />
        <aside className="nuda-mdx-ssheet__panel">
          <div className="nuda-mdx-ssheet__header">
            <span className="nuda-mdx-ssheet__title">Details</span>
            <span className="nuda-mdx-ssheet__x">&times;</span>
          </div>
          <div className="nuda-mdx-ssheet__row" />
          <div className="nuda-mdx-ssheet__row nuda-mdx-ssheet__row--short" />
          <div className="nuda-mdx-ssheet__row" />
          <div className="nuda-mdx-ssheet__chip">Save changes</div>
        </aside>
      </div>
    ),
    cssInline: `
      .nuda-mdx-ssheet{position:relative;width:100%;height:150px;border-radius:10px;overflow:hidden;background:rgba(0,0,0,.25)}
      .nuda-mdx-ssheet__dim{position:absolute;inset:0;background:rgba(0,0,0,.45)}
      .nuda-mdx-ssheet__panel{position:absolute;top:0;right:0;bottom:0;width:62%;background:#1a1a1a;border-left:1px solid rgba(255,255,255,.09);padding:.7rem .75rem;display:flex;flex-direction:column;gap:.45rem;animation:_nuda-mdxSsheetIn .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-mdx-ssheet__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.1rem}
      .nuda-mdx-ssheet__title{font-size:.7rem;font-weight:700;color:#fafafa}
      .nuda-mdx-ssheet__x{font-size:.85rem;color:#555;cursor:pointer}
      .nuda-mdx-ssheet__row{height:5px;border-radius:3px;background:rgba(255,255,255,.07);width:100%}
      .nuda-mdx-ssheet__row--short{width:65%}
      .nuda-mdx-ssheet__chip{margin-top:auto;background:rgba(228,255,84,.12);border:1px solid rgba(228,255,84,.25);border-radius:7px;color:#e4ff54;font-size:.6rem;font-weight:600;padding:.3rem .6rem;text-align:center;cursor:pointer}
      @keyframes _nuda-mdxSsheetIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-ssheet__panel{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-ssheet" role="complementary">
  <div class="nuda-mdx-ssheet__dim"></div>
  <aside class="nuda-mdx-ssheet__panel" role="dialog" aria-label="Details panel">
    <div class="nuda-mdx-ssheet__header">
      <span class="nuda-mdx-ssheet__title">Details</span>
      <button class="nuda-mdx-ssheet__x" aria-label="Close">&times;</button>
    </div>
    <div class="nuda-mdx-ssheet__row"></div>
    <div class="nuda-mdx-ssheet__row nuda-mdx-ssheet__row--short"></div>
    <div class="nuda-mdx-ssheet__row"></div>
    <button class="nuda-mdx-ssheet__chip">Save changes</button>
  </aside>
</div>`,
      },
    ],
  },

  /* ─────────────── BOTTOM ACTION SHEET ─────────────── */
  {
    id: "mdx-bottom-action-sheet",
    name: "Bottom Action Sheet",
    category: CAT,
    preview: (
      <div className="nuda-mdx-bas" aria-hidden="true">
        <div className="nuda-mdx-bas__backdrop" />
        <div className="nuda-mdx-bas__sheet">
          <div className="nuda-mdx-bas__handle" />
          <p className="nuda-mdx-bas__label">Choose an action</p>
          <button className="nuda-mdx-bas__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7-7 7 7" stroke="#cfcfcf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Share
          </button>
          <button className="nuda-mdx-bas__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#cfcfcf" strokeWidth="1.8" /><path d="M9 7h6M9 12h6M9 17h4" stroke="#cfcfcf" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Copy link
          </button>
          <button className="nuda-mdx-bas__item nuda-mdx-bas__item--danger">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="3 6 5 6 21 6" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" /><path d="M19 6l-1 14H6L5 6" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" /><path d="M10 11v6M14 11v6" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Delete
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mdx-bas{position:relative;width:100%;height:170px;border-radius:10px;overflow:hidden;background:rgba(0,0,0,.2)}
      .nuda-mdx-bas__backdrop{position:absolute;inset:0;background:rgba(0,0,0,.4)}
      .nuda-mdx-bas__sheet{position:absolute;bottom:0;left:0;right:0;background:#1a1a1a;border-top:1px solid rgba(255,255,255,.08);border-radius:14px 14px 0 0;padding:.65rem .75rem .8rem;display:flex;flex-direction:column;gap:.2rem;animation:_nuda-mdxBasIn .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-mdx-bas__handle{width:32px;height:3px;background:rgba(255,255,255,.18);border-radius:2px;margin:0 auto .5rem}
      .nuda-mdx-bas__label{margin:0 0 .3rem;font-size:.62rem;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:.06em}
      .nuda-mdx-bas__item{display:flex;align-items:center;gap:.5rem;background:none;border:none;width:100%;text-align:left;color:#cfcfcf;font-size:.7rem;padding:.4rem .5rem;border-radius:8px;cursor:pointer;transition:background .15s}
      .nuda-mdx-bas__item:hover{background:rgba(255,255,255,.05)}
      .nuda-mdx-bas__item--danger{color:#ff6b6b}
      .nuda-mdx-bas__item--danger:hover{background:rgba(255,107,107,.07)}
      @keyframes _nuda-mdxBasIn{from{transform:translateY(100%)}to{transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-bas__sheet{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-bas" role="dialog" aria-modal="true" aria-label="Action sheet">
  <div class="nuda-mdx-bas__backdrop"></div>
  <div class="nuda-mdx-bas__sheet">
    <div class="nuda-mdx-bas__handle"></div>
    <p class="nuda-mdx-bas__label">Choose an action</p>
    <button class="nuda-mdx-bas__item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7-7 7 7" stroke="#cfcfcf" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Share
    </button>
    <button class="nuda-mdx-bas__item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#cfcfcf" stroke-width="1.8"/><path d="M9 7h6M9 12h6M9 17h4" stroke="#cfcfcf" stroke-width="1.5" stroke-linecap="round"/></svg>
      Copy link
    </button>
    <button class="nuda-mdx-bas__item nuda-mdx-bas__item--danger">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="3 6 5 6 21 6" stroke="#ff6b6b" stroke-width="1.8" stroke-linecap="round"/><path d="M19 6l-1 14H6L5 6" stroke="#ff6b6b" stroke-width="1.8" stroke-linecap="round"/><path d="M10 11v6M14 11v6" stroke="#ff6b6b" stroke-width="1.5" stroke-linecap="round"/></svg>
      Delete
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── IMAGE LIGHTBOX FRAME ─────────────── */
  {
    id: "mdx-image-lightbox",
    name: "Image Lightbox Frame",
    category: CAT,
    preview: (
      <div className="nuda-mdx-lightbox" aria-hidden="true">
        <div className="nuda-mdx-lightbox__backdrop" />
        <div className="nuda-mdx-lightbox__frame">
          <button className="nuda-mdx-lightbox__close">&times;</button>
          <div className="nuda-mdx-lightbox__img">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="4" fill="#222" />
              <circle cx="18" cy="18" r="5" fill="#333" />
              <path d="M4 36 L14 24 L22 32 L30 22 L44 36 Z" fill="#2a2a2a" />
            </svg>
          </div>
          <div className="nuda-mdx-lightbox__nav">
            <button className="nuda-mdx-lightbox__arrow">&#8592;</button>
            <span className="nuda-mdx-lightbox__count">1 / 4</span>
            <button className="nuda-mdx-lightbox__arrow">&#8594;</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mdx-lightbox{position:relative;width:100%;height:155px;border-radius:10px;overflow:hidden;background:rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center}
      .nuda-mdx-lightbox__backdrop{position:absolute;inset:0;background:rgba(0,0,0,.75)}
      .nuda-mdx-lightbox__frame{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:.45rem;background:rgba(18,18,18,.95);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:.7rem .75rem;animation:_nuda-mdxLbIn .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-mdx-lightbox__close{position:absolute;top:.4rem;right:.55rem;background:rgba(255,255,255,.07);border:none;border-radius:50%;width:18px;height:18px;font-size:.65rem;color:#aaa;cursor:pointer;line-height:1;display:flex;align-items:center;justify-content:center}
      .nuda-mdx-lightbox__img{border-radius:8px;overflow:hidden;display:flex}
      .nuda-mdx-lightbox__nav{display:flex;align-items:center;gap:.7rem}
      .nuda-mdx-lightbox__arrow{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#cfcfcf;font-size:.65rem;padding:.2rem .45rem;cursor:pointer}
      .nuda-mdx-lightbox__count{font-size:.6rem;color:#555}
      @keyframes _nuda-mdxLbIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-lightbox__frame{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
  <div class="nuda-mdx-lightbox__backdrop"></div>
  <div class="nuda-mdx-lightbox__frame">
    <button class="nuda-mdx-lightbox__close" aria-label="Close">&times;</button>
    <div class="nuda-mdx-lightbox__img">
      <img src="your-image.jpg" alt="Lightbox image" />
    </div>
    <div class="nuda-mdx-lightbox__nav">
      <button class="nuda-mdx-lightbox__arrow" aria-label="Previous">&#8592;</button>
      <span class="nuda-mdx-lightbox__count">1 / 4</span>
      <button class="nuda-mdx-lightbox__arrow" aria-label="Next">&#8594;</button>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── ALERT DIALOG DANGER ─────────────── */
  {
    id: "mdx-alert-dialog-danger",
    name: "Alert Dialog Danger",
    category: CAT,
    preview: (
      <div className="nuda-mdx-alertdanger" aria-hidden="true">
        <div className="nuda-mdx-alertdanger__strip" />
        <div className="nuda-mdx-alertdanger__inner">
          <div className="nuda-mdx-alertdanger__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L22 20 H2 Z" stroke="#ff6b6b" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M12 9v5" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="#ff6b6b" />
            </svg>
          </div>
          <div>
            <p className="nuda-mdx-alertdanger__title">Permanent deletion</p>
            <p className="nuda-mdx-alertdanger__body">All data will be lost. You cannot undo this.</p>
          </div>
        </div>
        <div className="nuda-mdx-alertdanger__actions">
          <button className="nuda-mdx-alertdanger__btn nuda-mdx-alertdanger__btn--ghost">Cancel</button>
          <button className="nuda-mdx-alertdanger__btn nuda-mdx-alertdanger__btn--destroy">Yes, delete all</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mdx-alertdanger{background:#141414;border:1px solid rgba(255,107,107,.22);border-radius:14px;overflow:hidden;max-width:240px;margin:auto;animation:_nuda-mdxAlertIn .35s ease-out both}
      .nuda-mdx-alertdanger__strip{height:3px;background:linear-gradient(90deg,#ff6b6b,#ff4444)}
      .nuda-mdx-alertdanger__inner{display:flex;align-items:flex-start;gap:.6rem;padding:.8rem .85rem .5rem}
      .nuda-mdx-alertdanger__icon{flex-shrink:0;width:36px;height:36px;border-radius:50%;background:rgba(255,107,107,.1);display:flex;align-items:center;justify-content:center}
      .nuda-mdx-alertdanger__title{margin:0 0 .18rem;font-size:.72rem;font-weight:700;color:#fafafa}
      .nuda-mdx-alertdanger__body{margin:0;font-size:.62rem;color:#777;line-height:1.45}
      .nuda-mdx-alertdanger__actions{display:flex;gap:.4rem;justify-content:flex-end;padding:.55rem .85rem .75rem}
      .nuda-mdx-alertdanger__btn{border:none;border-radius:8px;padding:.36rem .7rem;font-size:.65rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-mdx-alertdanger__btn:hover{opacity:.8}
      .nuda-mdx-alertdanger__btn--ghost{background:rgba(255,255,255,.06);color:#cfcfcf}
      .nuda-mdx-alertdanger__btn--destroy{background:#ff6b6b;color:#fff}
      @keyframes _nuda-mdxAlertIn{from{opacity:0;transform:scale(.94) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-alertdanger{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-alertdanger" role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-desc">
  <div class="nuda-mdx-alertdanger__strip"></div>
  <div class="nuda-mdx-alertdanger__inner">
    <div class="nuda-mdx-alertdanger__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L22 20 H2 Z" stroke="#ff6b6b" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M12 9v5" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="17" r="1" fill="#ff6b6b"/>
      </svg>
    </div>
    <div>
      <p class="nuda-mdx-alertdanger__title" id="alert-title">Permanent deletion</p>
      <p class="nuda-mdx-alertdanger__body" id="alert-desc">All data will be lost. You cannot undo this.</p>
    </div>
  </div>
  <div class="nuda-mdx-alertdanger__actions">
    <button class="nuda-mdx-alertdanger__btn nuda-mdx-alertdanger__btn--ghost">Cancel</button>
    <button class="nuda-mdx-alertdanger__btn nuda-mdx-alertdanger__btn--destroy">Yes, delete all</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── LOADING OVERLAY WITH SPINNER ─────────────── */
  {
    id: "mdx-loading-overlay",
    name: "Loading Overlay",
    category: CAT,
    preview: (
      <div className="nuda-mdx-loadover" aria-hidden="true">
        <div className="nuda-mdx-loadover__veil" />
        <div className="nuda-mdx-loadover__box">
          <div className="nuda-mdx-loadover__ring">
            <svg className="nuda-mdx-loadover__svg" viewBox="0 0 40 40" fill="none" width="40" height="40">
              <circle className="nuda-mdx-loadover__track" cx="20" cy="20" r="16" stroke="rgba(255,255,255,.08)" strokeWidth="3" />
              <circle className="nuda-mdx-loadover__arc" cx="20" cy="20" r="16" stroke="#e4ff54" strokeWidth="3" strokeLinecap="round" strokeDasharray="60 41" />
            </svg>
          </div>
          <p className="nuda-mdx-loadover__label">Processing…</p>
          <p className="nuda-mdx-loadover__sub">Please wait</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mdx-loadover{position:relative;width:100%;height:155px;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#0d0d0d}
      .nuda-mdx-loadover__veil{position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(2px)}
      .nuda-mdx-loadover__box{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:.35rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:1rem 1.4rem}
      .nuda-mdx-loadover__ring{position:relative;width:40px;height:40px}
      .nuda-mdx-loadover__svg{animation:_nuda-mdxSpin 1s linear infinite}
      .nuda-mdx-loadover__label{margin:0;font-size:.75rem;font-weight:700;color:#fafafa}
      .nuda-mdx-loadover__sub{margin:0;font-size:.62rem;color:#555}
      @keyframes _nuda-mdxSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-mdx-loadover__svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mdx-loadover" role="dialog" aria-modal="true" aria-label="Loading" aria-live="polite">
  <div class="nuda-mdx-loadover__veil"></div>
  <div class="nuda-mdx-loadover__box">
    <div class="nuda-mdx-loadover__ring">
      <svg class="nuda-mdx-loadover__svg" viewBox="0 0 40 40" fill="none" width="40" height="40">
        <circle class="nuda-mdx-loadover__track" cx="20" cy="20" r="16" stroke="rgba(255,255,255,.08)" stroke-width="3"/>
        <circle class="nuda-mdx-loadover__arc" cx="20" cy="20" r="16" stroke="#e4ff54" stroke-width="3" stroke-linecap="round" stroke-dasharray="60 41"/>
      </svg>
    </div>
    <p class="nuda-mdx-loadover__label">Processing…</p>
    <p class="nuda-mdx-loadover__sub">Please wait</p>
  </div>
</div>`,
      },
    ],
  },
];
