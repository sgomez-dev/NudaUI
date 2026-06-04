import type { NudaComponent } from "./types";

const CAT = "Cookie & Consent";

export const cookieConsent: NudaComponent[] = [
  /* ─────────────── 1. Bottom Bar ─────────────── */
  {
    id: "cookie-bottom-bar",
    name: "Bottom Bar",
    category: CAT,
    preview: (
      <div className="nuda-ck-bar">
        <div className="nuda-ck-bar__left">
          <span className="nuda-ck-bar__icon">🍪</span>
          <p className="nuda-ck-bar__text">
            We use cookies to improve your experience.{" "}
            <a className="nuda-ck-bar__link" href="#">Learn more</a>
          </p>
        </div>
        <div className="nuda-ck-bar__actions">
          <button className="nuda-ck-bar__btn nuda-ck-bar__btn--ghost">Decline</button>
          <button className="nuda-ck-bar__btn nuda-ck-bar__btn--accent">Accept</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-bar{display:flex;align-items:center;justify-content:space-between;gap:1rem;background:#1a1a1a;border-top:1px solid rgba(255,255,255,.1);padding:.75rem 1.25rem;width:100%;box-sizing:border-box;animation:_nuda-ckbarUp .4s ease-out}
      .nuda-ck-bar__left{display:flex;align-items:center;gap:.6rem;flex:1;min-width:0}
      .nuda-ck-bar__icon{font-size:1.1rem;flex-shrink:0}
      .nuda-ck-bar__text{color:#cfcfcf;font-size:.75rem;margin:0;line-height:1.4}
      .nuda-ck-bar__link{color:#e4ff54;text-decoration:none}
      .nuda-ck-bar__link:hover{text-decoration:underline}
      .nuda-ck-bar__actions{display:flex;gap:.5rem;flex-shrink:0}
      .nuda-ck-bar__btn{border:none;border-radius:6px;padding:.4rem .9rem;font-size:.75rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-ck-bar__btn:hover{opacity:.8}
      .nuda-ck-bar__btn--ghost{background:transparent;border:1px solid rgba(255,255,255,.15);color:#cfcfcf}
      .nuda-ck-bar__btn--accent{background:#e4ff54;color:#0a0a0a}
      @keyframes _nuda-ckbarUp{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-bar">
  <div class="nuda-ck-bar__left">
    <span class="nuda-ck-bar__icon">🍪</span>
    <p class="nuda-ck-bar__text">
      We use cookies to improve your experience.
      <a class="nuda-ck-bar__link" href="#">Learn more</a>
    </p>
  </div>
  <div class="nuda-ck-bar__actions">
    <button class="nuda-ck-bar__btn nuda-ck-bar__btn--ghost">Decline</button>
    <button class="nuda-ck-bar__btn nuda-ck-bar__btn--accent">Accept</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Corner Card ─────────────── */
  {
    id: "cookie-corner-card",
    name: "Corner Card",
    category: CAT,
    preview: (
      <div className="nuda-ck-corner">
        <div className="nuda-ck-corner__header">
          <svg className="nuda-ck-corner__logo" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="9" cy="7" r="2" />
            <circle cx="15" cy="11" r="1.5" />
            <circle cx="8" cy="15" r="1.5" />
            <circle cx="17" cy="16" r="1" />
            <circle cx="12" cy="4" r="1" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span className="nuda-ck-corner__title">Cookies</span>
        </div>
        <p className="nuda-ck-corner__body">
          This site uses cookies to personalise content and analyse traffic.
        </p>
        <div className="nuda-ck-corner__btns">
          <button className="nuda-ck-corner__btn nuda-ck-corner__btn--accept">Accept all</button>
          <button className="nuda-ck-corner__btn nuda-ck-corner__btn--manage">Manage</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-corner{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1rem 1.1rem;width:220px;box-shadow:0 16px 40px rgba(0,0,0,.5);animation:_nuda-ckcornerIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck-corner__header{display:flex;align-items:center;gap:.45rem;margin-bottom:.6rem}
      .nuda-ck-corner__logo{color:#e4ff54;flex-shrink:0}
      .nuda-ck-corner__title{color:#fafafa;font-size:.85rem;font-weight:700}
      .nuda-ck-corner__body{color:#777;font-size:.72rem;line-height:1.5;margin:0 0 .85rem}
      .nuda-ck-corner__btns{display:flex;flex-direction:column;gap:.4rem}
      .nuda-ck-corner__btn{border:none;border-radius:8px;padding:.45rem 0;font-size:.75rem;font-weight:600;cursor:pointer;width:100%;transition:opacity .15s}
      .nuda-ck-corner__btn:hover{opacity:.85}
      .nuda-ck-corner__btn--accept{background:#e4ff54;color:#0a0a0a}
      .nuda-ck-corner__btn--manage{background:rgba(255,255,255,.06);color:#cfcfcf;border:1px solid rgba(255,255,255,.1)}
      @keyframes _nuda-ckcornerIn{from{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-corner{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-corner">
  <div class="nuda-ck-corner__header">
    <svg class="nuda-ck-corner__logo" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="11" r="1.5" />
      <circle cx="8" cy="15" r="1.5" />
      <circle cx="17" cy="16" r="1" />
      <circle cx="12" cy="4" r="1" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
    <span class="nuda-ck-corner__title">Cookies</span>
  </div>
  <p class="nuda-ck-corner__body">
    This site uses cookies to personalise content and analyse traffic.
  </p>
  <div class="nuda-ck-corner__btns">
    <button class="nuda-ck-corner__btn nuda-ck-corner__btn--accept">Accept all</button>
    <button class="nuda-ck-corner__btn nuda-ck-corner__btn--manage">Manage</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Centered Modal ─────────────── */
  {
    id: "cookie-centered-modal",
    name: "Centered Modal",
    category: CAT,
    preview: (
      <div className="nuda-ck-modal">
        <div className="nuda-ck-modal__badge">Privacy Notice</div>
        <h3 className="nuda-ck-modal__title">We value your privacy</h3>
        <p className="nuda-ck-modal__desc">
          We use cookies for essential site functions, analytics, and personalised content. You can customise your preferences.
        </p>
        <div className="nuda-ck-modal__row">
          <button className="nuda-ck-modal__btn nuda-ck-modal__btn--outline">Preferences</button>
          <button className="nuda-ck-modal__btn nuda-ck-modal__btn--fill">Accept All</button>
        </div>
        <a className="nuda-ck-modal__policy" href="#">Privacy Policy</a>
      </div>
    ),
    cssInline: `
      .nuda-ck-modal{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:1.4rem 1.5rem;width:240px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.7);animation:_nuda-ckmodalIn .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck-modal__badge{display:inline-block;background:rgba(228,255,84,.12);color:#e4ff54;font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .55rem;border-radius:999px;margin-bottom:.75rem}
      .nuda-ck-modal__title{color:#fafafa;font-size:.95rem;font-weight:700;margin:0 0 .5rem}
      .nuda-ck-modal__desc{color:#777;font-size:.72rem;line-height:1.55;margin:0 0 1rem}
      .nuda-ck-modal__row{display:flex;gap:.5rem;margin-bottom:.65rem}
      .nuda-ck-modal__btn{flex:1;border:none;border-radius:9px;padding:.5rem 0;font-size:.75rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-ck-modal__btn:hover{opacity:.8}
      .nuda-ck-modal__btn--outline{background:transparent;border:1px solid rgba(255,255,255,.15);color:#cfcfcf}
      .nuda-ck-modal__btn--fill{background:#e4ff54;color:#0a0a0a}
      .nuda-ck-modal__policy{color:#555;font-size:.68rem;text-decoration:none}
      .nuda-ck-modal__policy:hover{color:#cfcfcf}
      @keyframes _nuda-ckmodalIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-modal{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-modal">
  <div class="nuda-ck-modal__badge">Privacy Notice</div>
  <h3 class="nuda-ck-modal__title">We value your privacy</h3>
  <p class="nuda-ck-modal__desc">
    We use cookies for essential site functions, analytics, and personalised content.
    You can customise your preferences.
  </p>
  <div class="nuda-ck-modal__row">
    <button class="nuda-ck-modal__btn nuda-ck-modal__btn--outline">Preferences</button>
    <button class="nuda-ck-modal__btn nuda-ck-modal__btn--fill">Accept All</button>
  </div>
  <a class="nuda-ck-modal__policy" href="#">Privacy Policy</a>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Slide-Up Banner ─────────────── */
  {
    id: "cookie-slide-up-banner",
    name: "Slide-Up Banner",
    category: CAT,
    preview: (
      <div className="nuda-ck-slideup">
        <div className="nuda-ck-slideup__stripe" />
        <div className="nuda-ck-slideup__content">
          <p className="nuda-ck-slideup__text">
            🍪 By continuing you agree to our use of cookies.
          </p>
          <div className="nuda-ck-slideup__actions">
            <button className="nuda-ck-slideup__btn nuda-ck-slideup__btn--reject">Reject</button>
            <button className="nuda-ck-slideup__btn nuda-ck-slideup__btn--ok">Got it</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-slideup{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px 14px 0 0;width:100%;box-sizing:border-box;overflow:hidden;animation:_nuda-ckslideup .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck-slideup__stripe{height:3px;background:linear-gradient(90deg,#e4ff54,#a8ff54)}
      .nuda-ck-slideup__content{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.75rem 1rem}
      .nuda-ck-slideup__text{color:#cfcfcf;font-size:.75rem;margin:0;flex:1}
      .nuda-ck-slideup__actions{display:flex;gap:.4rem;flex-shrink:0}
      .nuda-ck-slideup__btn{border:none;border-radius:6px;padding:.35rem .75rem;font-size:.72rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-ck-slideup__btn:hover{opacity:.8}
      .nuda-ck-slideup__btn--reject{background:transparent;border:1px solid rgba(255,255,255,.12);color:#777}
      .nuda-ck-slideup__btn--ok{background:#e4ff54;color:#0a0a0a}
      @keyframes _nuda-ckslideup{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-slideup{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-slideup">
  <div class="nuda-ck-slideup__stripe"></div>
  <div class="nuda-ck-slideup__content">
    <p class="nuda-ck-slideup__text">
      🍪 By continuing you agree to our use of cookies.
    </p>
    <div class="nuda-ck-slideup__actions">
      <button class="nuda-ck-slideup__btn nuda-ck-slideup__btn--reject">Reject</button>
      <button class="nuda-ck-slideup__btn nuda-ck-slideup__btn--ok">Got it</button>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Minimal Pill ─────────────── */
  {
    id: "cookie-minimal-pill",
    name: "Minimal Pill",
    category: CAT,
    preview: (
      <div className="nuda-ck-pill">
        <span className="nuda-ck-pill__dot" />
        <span className="nuda-ck-pill__text">We use cookies.</span>
        <a className="nuda-ck-pill__link" href="#">Details</a>
        <button className="nuda-ck-pill__ok">OK</button>
        <button className="nuda-ck-pill__close" aria-label="Dismiss">&times;</button>
      </div>
    ),
    cssInline: `
      .nuda-ck-pill{display:inline-flex;align-items:center;gap:.55rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:.35rem .75rem .35rem .55rem;font-size:.73rem;animation:_nuda-ckpillIn .4s ease-out}
      .nuda-ck-pill__dot{width:7px;height:7px;border-radius:50%;background:#e4ff54;flex-shrink:0}
      .nuda-ck-pill__text{color:#cfcfcf;white-space:nowrap}
      .nuda-ck-pill__link{color:#e4ff54;text-decoration:none;font-weight:600}
      .nuda-ck-pill__link:hover{text-decoration:underline}
      .nuda-ck-pill__ok{background:#e4ff54;color:#0a0a0a;border:none;border-radius:999px;padding:.2rem .65rem;font-size:.7rem;font-weight:700;cursor:pointer;transition:opacity .15s}
      .nuda-ck-pill__ok:hover{opacity:.85}
      .nuda-ck-pill__close{background:none;border:none;color:#555;font-size:.9rem;cursor:pointer;padding:0;line-height:1}
      .nuda-ck-pill__close:hover{color:#cfcfcf}
      @keyframes _nuda-ckpillIn{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-pill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-pill">
  <span class="nuda-ck-pill__dot"></span>
  <span class="nuda-ck-pill__text">We use cookies.</span>
  <a class="nuda-ck-pill__link" href="#">Details</a>
  <button class="nuda-ck-pill__ok">OK</button>
  <button class="nuda-ck-pill__close" aria-label="Dismiss">&times;</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Granular Toggles Panel ─────────────── */
  {
    id: "cookie-granular-toggles",
    name: "Granular Toggles Panel",
    category: CAT,
    preview: (
      <div className="nuda-ck-toggles">
        <div className="nuda-ck-toggles__head">
          <span className="nuda-ck-toggles__title">Cookie Preferences</span>
          <button className="nuda-ck-toggles__close" aria-label="Close">&times;</button>
        </div>
        <div className="nuda-ck-toggles__list">
          {[
            { label: "Essential", desc: "Required for the site to work", on: true, locked: true },
            { label: "Analytics", desc: "Help us improve performance", on: true, locked: false },
            { label: "Marketing", desc: "Personalised advertisements", on: false, locked: false },
          ].map((item) => (
            <div className="nuda-ck-toggles__row" key={item.label}>
              <div className="nuda-ck-toggles__info">
                <span className="nuda-ck-toggles__label">{item.label}</span>
                <span className="nuda-ck-toggles__desc">{item.desc}</span>
              </div>
              <div className={`nuda-ck-toggles__switch${item.on ? " nuda-ck-toggles__switch--on" : ""}${item.locked ? " nuda-ck-toggles__switch--locked" : ""}`}>
                <span className="nuda-ck-toggles__thumb" />
              </div>
            </div>
          ))}
        </div>
        <div className="nuda-ck-toggles__footer">
          <button className="nuda-ck-toggles__save">Save preferences</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-toggles{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;width:240px;overflow:hidden;animation:_nuda-cktogIn .45s cubic-bezier(.16,1,.3,1) both;box-shadow:0 20px 50px rgba(0,0,0,.6)}
      .nuda-ck-toggles__head{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;border-bottom:1px solid rgba(255,255,255,.07)}
      .nuda-ck-toggles__title{color:#fafafa;font-size:.8rem;font-weight:700}
      .nuda-ck-toggles__close{background:none;border:none;color:#555;font-size:1rem;cursor:pointer;padding:0;line-height:1}
      .nuda-ck-toggles__close:hover{color:#cfcfcf}
      .nuda-ck-toggles__list{padding:.4rem 0}
      .nuda-ck-toggles__row{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding:.55rem 1rem}
      .nuda-ck-toggles__info{display:flex;flex-direction:column;gap:.1rem;flex:1;min-width:0}
      .nuda-ck-toggles__label{color:#cfcfcf;font-size:.75rem;font-weight:600}
      .nuda-ck-toggles__desc{color:#555;font-size:.65rem;line-height:1.3}
      .nuda-ck-toggles__switch{position:relative;width:32px;height:18px;border-radius:999px;background:rgba(255,255,255,.1);cursor:pointer;flex-shrink:0;transition:background .2s}
      .nuda-ck-toggles__switch--on{background:#e4ff54}
      .nuda-ck-toggles__switch--locked{opacity:.5;cursor:not-allowed}
      .nuda-ck-toggles__thumb{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#0a0a0a;transition:transform .2s}
      .nuda-ck-toggles__switch--on .nuda-ck-toggles__thumb{transform:translateX(14px)}
      .nuda-ck-toggles__switch--locked .nuda-ck-toggles__thumb{background:#555}
      .nuda-ck-toggles__footer{padding:.65rem 1rem;border-top:1px solid rgba(255,255,255,.07)}
      .nuda-ck-toggles__save{width:100%;background:#e4ff54;color:#0a0a0a;border:none;border-radius:8px;padding:.45rem 0;font-size:.75rem;font-weight:700;cursor:pointer;transition:opacity .15s}
      .nuda-ck-toggles__save:hover{opacity:.85}
      @keyframes _nuda-cktogIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-toggles{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-toggles">
  <div class="nuda-ck-toggles__head">
    <span class="nuda-ck-toggles__title">Cookie Preferences</span>
    <button class="nuda-ck-toggles__close" aria-label="Close">&times;</button>
  </div>
  <div class="nuda-ck-toggles__list">
    <!-- Essential (locked on) -->
    <div class="nuda-ck-toggles__row">
      <div class="nuda-ck-toggles__info">
        <span class="nuda-ck-toggles__label">Essential</span>
        <span class="nuda-ck-toggles__desc">Required for the site to work</span>
      </div>
      <div class="nuda-ck-toggles__switch nuda-ck-toggles__switch--on nuda-ck-toggles__switch--locked">
        <span class="nuda-ck-toggles__thumb"></span>
      </div>
    </div>
    <!-- Analytics (on) -->
    <div class="nuda-ck-toggles__row">
      <div class="nuda-ck-toggles__info">
        <span class="nuda-ck-toggles__label">Analytics</span>
        <span class="nuda-ck-toggles__desc">Help us improve performance</span>
      </div>
      <div class="nuda-ck-toggles__switch nuda-ck-toggles__switch--on">
        <span class="nuda-ck-toggles__thumb"></span>
      </div>
    </div>
    <!-- Marketing (off) -->
    <div class="nuda-ck-toggles__row">
      <div class="nuda-ck-toggles__info">
        <span class="nuda-ck-toggles__label">Marketing</span>
        <span class="nuda-ck-toggles__desc">Personalised advertisements</span>
      </div>
      <div class="nuda-ck-toggles__switch">
        <span class="nuda-ck-toggles__thumb"></span>
      </div>
    </div>
  </div>
  <div class="nuda-ck-toggles__footer">
    <button class="nuda-ck-toggles__save">Save preferences</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Dark Glass Banner ─────────────── */
  {
    id: "cookie-dark-glass-banner",
    name: "Dark Glass Banner",
    category: CAT,
    preview: (
      <div className="nuda-ck-glass">
        <div className="nuda-ck-glass__glow" />
        <div className="nuda-ck-glass__inner">
          <div className="nuda-ck-glass__left">
            <svg className="nuda-ck-glass__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <p className="nuda-ck-glass__title">Cookie Policy</p>
              <p className="nuda-ck-glass__sub">We store minimal data to keep things running.</p>
            </div>
          </div>
          <div className="nuda-ck-glass__btns">
            <button className="nuda-ck-glass__btn nuda-ck-glass__btn--deny">Deny</button>
            <button className="nuda-ck-glass__btn nuda-ck-glass__btn--allow">Allow</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-glass{position:relative;width:100%;box-sizing:border-box;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:rgba(20,20,20,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);animation:_nuda-ckglassIn .5s ease-out}
      .nuda-ck-glass__glow{position:absolute;top:-60px;left:50%;width:200px;height:120px;transform:translateX(-50%);background:radial-gradient(ellipse at center,rgba(228,255,84,.15) 0%,transparent 70%);pointer-events:none}
      .nuda-ck-glass__inner{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.9rem 1.1rem;position:relative}
      .nuda-ck-glass__left{display:flex;align-items:center;gap:.65rem;flex:1;min-width:0}
      .nuda-ck-glass__icon{color:#e4ff54;flex-shrink:0}
      .nuda-ck-glass__title{color:#fafafa;font-size:.8rem;font-weight:700;margin:0}
      .nuda-ck-glass__sub{color:#555;font-size:.68rem;margin:.1rem 0 0}
      .nuda-ck-glass__btns{display:flex;gap:.4rem;flex-shrink:0}
      .nuda-ck-glass__btn{border:none;border-radius:7px;padding:.38rem .75rem;font-size:.72rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-ck-glass__btn:hover{opacity:.8}
      .nuda-ck-glass__btn--deny{background:rgba(255,255,255,.07);color:#777;border:1px solid rgba(255,255,255,.1)}
      .nuda-ck-glass__btn--allow{background:#e4ff54;color:#0a0a0a}
      @keyframes _nuda-ckglassIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-glass{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-glass">
  <div class="nuda-ck-glass__glow"></div>
  <div class="nuda-ck-glass__inner">
    <div class="nuda-ck-glass__left">
      <svg class="nuda-ck-glass__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <div>
        <p class="nuda-ck-glass__title">Cookie Policy</p>
        <p class="nuda-ck-glass__sub">We store minimal data to keep things running.</p>
      </div>
    </div>
    <div class="nuda-ck-glass__btns">
      <button class="nuda-ck-glass__btn nuda-ck-glass__btn--deny">Deny</button>
      <button class="nuda-ck-glass__btn nuda-ck-glass__btn--allow">Allow</button>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Two-Button Accept/Reject ─────────────── */
  {
    id: "cookie-two-button",
    name: "Two-Button Accept/Reject",
    category: CAT,
    preview: (
      <div className="nuda-ck-twobtn">
        <div className="nuda-ck-twobtn__icon">🛡️</div>
        <p className="nuda-ck-twobtn__msg">
          We use cookies for analytics and to improve your experience.
        </p>
        <div className="nuda-ck-twobtn__row">
          <button className="nuda-ck-twobtn__btn nuda-ck-twobtn__btn--reject">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="10" height="10"><line x1="2" y1="2" x2="14" y2="14" /><line x1="14" y1="2" x2="2" y2="14" /></svg>
            Reject All
          </button>
          <button className="nuda-ck-twobtn__btn nuda-ck-twobtn__btn--accept">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><polyline points="2,8 6,12 14,4" /></svg>
            Accept All
          </button>
        </div>
        <a className="nuda-ck-twobtn__more" href="#">Customise settings →</a>
      </div>
    ),
    cssInline: `
      .nuda-ck-twobtn{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1.1rem 1.25rem;width:230px;text-align:center;animation:_nuda-cktwobtnIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck-twobtn__icon{font-size:1.6rem;margin-bottom:.55rem}
      .nuda-ck-twobtn__msg{color:#cfcfcf;font-size:.73rem;line-height:1.5;margin:0 0 .9rem}
      .nuda-ck-twobtn__row{display:flex;gap:.5rem;margin-bottom:.6rem}
      .nuda-ck-twobtn__btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:.3rem;border:none;border-radius:9px;padding:.5rem 0;font-size:.73rem;font-weight:700;cursor:pointer;transition:opacity .15s}
      .nuda-ck-twobtn__btn:hover{opacity:.8}
      .nuda-ck-twobtn__btn--reject{background:rgba(255,107,107,.12);color:#ff6b6b;border:1px solid rgba(255,107,107,.25)}
      .nuda-ck-twobtn__btn--accept{background:#e4ff54;color:#0a0a0a}
      .nuda-ck-twobtn__more{color:#555;font-size:.68rem;text-decoration:none}
      .nuda-ck-twobtn__more:hover{color:#cfcfcf}
      @keyframes _nuda-cktwobtnIn{from{opacity:0;transform:translateY(14px) scale(.95)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-twobtn{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-twobtn">
  <div class="nuda-ck-twobtn__icon">🛡️</div>
  <p class="nuda-ck-twobtn__msg">
    We use cookies for analytics and to improve your experience.
  </p>
  <div class="nuda-ck-twobtn__row">
    <button class="nuda-ck-twobtn__btn nuda-ck-twobtn__btn--reject">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" width="10" height="10">
        <line x1="2" y1="2" x2="14" y2="14" />
        <line x1="14" y1="2" x2="2" y2="14" />
      </svg>
      Reject All
    </button>
    <button class="nuda-ck-twobtn__btn nuda-ck-twobtn__btn--accept">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round" width="10" height="10">
        <polyline points="2,8 6,12 14,4" />
      </svg>
      Accept All
    </button>
  </div>
  <a class="nuda-ck-twobtn__more" href="#">Customise settings &rarr;</a>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. GDPR Settings List ─────────────── */
  {
    id: "cookie-gdpr-settings-list",
    name: "GDPR Settings List",
    category: CAT,
    preview: (
      <div className="nuda-ck-gdpr">
        <div className="nuda-ck-gdpr__header">
          <span className="nuda-ck-gdpr__logo">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <circle cx="10" cy="10" r="8" />
              <path d="M10 6v4l3 3" />
            </svg>
          </span>
          <div>
            <p className="nuda-ck-gdpr__site">acme.io</p>
            <p className="nuda-ck-gdpr__sub">Manage cookie consent</p>
          </div>
        </div>
        <ul className="nuda-ck-gdpr__list">
          {[
            { name: "Strictly Necessary", badge: "Required", color: "#e4ff54" },
            { name: "Functional", badge: "Optional", color: "#7dd3fc" },
            { name: "Performance", badge: "Optional", color: "#7dd3fc" },
            { name: "Targeting", badge: "Optional", color: "#7dd3fc" },
          ].map((item) => (
            <li className="nuda-ck-gdpr__item" key={item.name}>
              <span className="nuda-ck-gdpr__name">{item.name}</span>
              <span className="nuda-ck-gdpr__badge" style={{ color: item.color, borderColor: item.color + "40", background: item.color + "14" }}>{item.badge}</span>
            </li>
          ))}
        </ul>
        <div className="nuda-ck-gdpr__footer">
          <button className="nuda-ck-gdpr__btn nuda-ck-gdpr__btn--ess">Essentials only</button>
          <button className="nuda-ck-gdpr__btn nuda-ck-gdpr__btn--all">Accept all</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-gdpr{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;width:240px;overflow:hidden;animation:_nuda-ckgdprIn .5s cubic-bezier(.16,1,.3,1) both;box-shadow:0 18px 45px rgba(0,0,0,.55)}
      .nuda-ck-gdpr__header{display:flex;align-items:center;gap:.65rem;padding:.85rem 1rem;border-bottom:1px solid rgba(255,255,255,.07)}
      .nuda-ck-gdpr__logo{display:inline-flex;color:#e4ff54;flex-shrink:0}
      .nuda-ck-gdpr__site{color:#fafafa;font-size:.8rem;font-weight:700;margin:0}
      .nuda-ck-gdpr__sub{color:#555;font-size:.65rem;margin:.1rem 0 0}
      .nuda-ck-gdpr__list{list-style:none;margin:0;padding:.3rem 0}
      .nuda-ck-gdpr__item{display:flex;align-items:center;justify-content:space-between;padding:.45rem 1rem}
      .nuda-ck-gdpr__name{color:#cfcfcf;font-size:.73rem}
      .nuda-ck-gdpr__badge{font-size:.62rem;font-weight:600;padding:.15rem .45rem;border-radius:999px;border:1px solid}
      .nuda-ck-gdpr__footer{display:flex;gap:.4rem;padding:.7rem 1rem;border-top:1px solid rgba(255,255,255,.07)}
      .nuda-ck-gdpr__btn{flex:1;border:none;border-radius:8px;padding:.45rem 0;font-size:.72rem;font-weight:700;cursor:pointer;transition:opacity .15s}
      .nuda-ck-gdpr__btn:hover{opacity:.8}
      .nuda-ck-gdpr__btn--ess{background:rgba(255,255,255,.07);color:#777;border:1px solid rgba(255,255,255,.1)}
      .nuda-ck-gdpr__btn--all{background:#e4ff54;color:#0a0a0a}
      @keyframes _nuda-ckgdprIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-gdpr{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-gdpr">
  <div class="nuda-ck-gdpr__header">
    <span class="nuda-ck-gdpr__logo">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 3" />
      </svg>
    </span>
    <div>
      <p class="nuda-ck-gdpr__site">acme.io</p>
      <p class="nuda-ck-gdpr__sub">Manage cookie consent</p>
    </div>
  </div>
  <ul class="nuda-ck-gdpr__list">
    <li class="nuda-ck-gdpr__item">
      <span class="nuda-ck-gdpr__name">Strictly Necessary</span>
      <span class="nuda-ck-gdpr__badge" style="color:#e4ff54;border-color:rgba(228,255,84,.25);background:rgba(228,255,84,.08)">Required</span>
    </li>
    <li class="nuda-ck-gdpr__item">
      <span class="nuda-ck-gdpr__name">Functional</span>
      <span class="nuda-ck-gdpr__badge" style="color:#7dd3fc;border-color:rgba(125,211,252,.25);background:rgba(125,211,252,.08)">Optional</span>
    </li>
    <li class="nuda-ck-gdpr__item">
      <span class="nuda-ck-gdpr__name">Performance</span>
      <span class="nuda-ck-gdpr__badge" style="color:#7dd3fc;border-color:rgba(125,211,252,.25);background:rgba(125,211,252,.08)">Optional</span>
    </li>
    <li class="nuda-ck-gdpr__item">
      <span class="nuda-ck-gdpr__name">Targeting</span>
      <span class="nuda-ck-gdpr__badge" style="color:#7dd3fc;border-color:rgba(125,211,252,.25);background:rgba(125,211,252,.08)">Optional</span>
    </li>
  </ul>
  <div class="nuda-ck-gdpr__footer">
    <button class="nuda-ck-gdpr__btn nuda-ck-gdpr__btn--ess">Essentials only</button>
    <button class="nuda-ck-gdpr__btn nuda-ck-gdpr__btn--all">Accept all</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Floating Bottom-Left Card ─────────────── */
  {
    id: "cookie-floating-card",
    name: "Floating Bottom-Left Card",
    category: CAT,
    preview: (
      <div className="nuda-ck-float">
        <div className="nuda-ck-float__pulse" />
        <div className="nuda-ck-float__top">
          <span className="nuda-ck-float__emoji">🍪</span>
          <div>
            <p className="nuda-ck-float__title">Cookies on this site</p>
            <p className="nuda-ck-float__time">Last updated Jun 2025</p>
          </div>
        </div>
        <p className="nuda-ck-float__body">
          We use essential cookies plus optional ones to measure engagement and show relevant content.
        </p>
        <div className="nuda-ck-float__actions">
          <button className="nuda-ck-float__btn nuda-ck-float__btn--settings">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
              <circle cx="8" cy="8" r="2.5" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.42 1.42M11.53 11.53l1.42 1.42M3.05 12.95l1.42-1.42M11.53 4.47l1.42-1.42" />
            </svg>
            Settings
          </button>
          <button className="nuda-ck-float__btn nuda-ck-float__btn--accept">Accept &amp; close</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck-float{position:relative;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1rem 1.1rem;width:230px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.6);animation:_nuda-ckfloatIn .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck-float__pulse{position:absolute;top:-40px;right:-40px;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.12) 0%,transparent 70%);animation:_nuda-ckfloatPulse 3s ease-in-out infinite;pointer-events:none}
      .nuda-ck-float__top{display:flex;align-items:center;gap:.6rem;margin-bottom:.65rem}
      .nuda-ck-float__emoji{font-size:1.4rem;flex-shrink:0}
      .nuda-ck-float__title{color:#fafafa;font-size:.8rem;font-weight:700;margin:0}
      .nuda-ck-float__time{color:#555;font-size:.63rem;margin:.1rem 0 0}
      .nuda-ck-float__body{color:#777;font-size:.7rem;line-height:1.5;margin:0 0 .9rem}
      .nuda-ck-float__actions{display:flex;gap:.45rem}
      .nuda-ck-float__btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:.3rem;border:none;border-radius:8px;padding:.45rem 0;font-size:.72rem;font-weight:600;cursor:pointer;transition:opacity .15s}
      .nuda-ck-float__btn:hover{opacity:.8}
      .nuda-ck-float__btn--settings{background:rgba(255,255,255,.06);color:#cfcfcf;border:1px solid rgba(255,255,255,.1)}
      .nuda-ck-float__btn--accept{background:#e4ff54;color:#0a0a0a;font-weight:700}
      @keyframes _nuda-ckfloatIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:none}}
      @keyframes _nuda-ckfloatPulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.3);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-ck-float{animation:none}.nuda-ck-float__pulse{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck-float">
  <div class="nuda-ck-float__pulse"></div>
  <div class="nuda-ck-float__top">
    <span class="nuda-ck-float__emoji">🍪</span>
    <div>
      <p class="nuda-ck-float__title">Cookies on this site</p>
      <p class="nuda-ck-float__time">Last updated Jun 2025</p>
    </div>
  </div>
  <p class="nuda-ck-float__body">
    We use essential cookies plus optional ones to measure engagement and show relevant content.
  </p>
  <div class="nuda-ck-float__actions">
    <button class="nuda-ck-float__btn nuda-ck-float__btn--settings">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" width="11" height="11">
        <circle cx="8" cy="8" r="2.5" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.42 1.42M11.53 11.53l1.42 1.42M3.05 12.95l1.42-1.42M11.53 4.47l1.42-1.42" />
      </svg>
      Settings
    </button>
    <button class="nuda-ck-float__btn nuda-ck-float__btn--accept">Accept &amp; close</button>
  </div>
</div>`,
      },
    ],
  },
];
