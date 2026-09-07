import type { NudaComponent } from "./types";

const CAT = "Cookie & Consent";

export const cookieConsentExtra: NudaComponent[] = [
  /* ─────────────── 1. Reopen Consent Pill ─────────────── */
  {
    id: "ck2-reopen-pill",
    name: "Reopen Consent Pill",
    category: CAT,
    preview: (
      <div className="nuda-ck2-reopen-pill" role="region" aria-label="Cookie preferences shortcut">
        <button type="button" className="nuda-ck2-reopen-pill__btn" aria-haspopup="dialog">
          <span className="nuda-ck2-reopen-pill__ring" aria-hidden="true" />
          <svg className="nuda-ck2-reopen-pill__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
            <circle cx="14" cy="9" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
            <circle cx="10" cy="15" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span className="nuda-ck2-reopen-pill__label">Cookie settings</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-ck2-reopen-pill{display:inline-flex}
      .nuda-ck2-reopen-pill__btn{position:relative;display:inline-flex;align-items:center;gap:.5rem;min-height:44px;padding:.55rem 1.1rem;border-radius:999px;background:#161616;border:1px solid rgba(255,255,255,.12);color:#cfcfcf;font-size:.72rem;font-weight:600;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.5);transition:border-color .15s,color .15s}
      .nuda-ck2-reopen-pill__btn:hover{color:#fafafa;border-color:rgba(255,255,255,.22)}
      .nuda-ck2-reopen-pill__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-reopen-pill__ring{position:absolute;inset:-1px;border-radius:999px;border:1px solid rgba(228,255,84,.5);opacity:0;animation:_nuda-ck2reopenpillRing 2.6s ease-out infinite;pointer-events:none}
      .nuda-ck2-reopen-pill__icon{color:#e4ff54;flex-shrink:0}
      .nuda-ck2-reopen-pill__label{white-space:nowrap}
      @keyframes _nuda-ck2reopenpillRing{0%{opacity:.6;transform:scale(1)}100%{opacity:0;transform:scale(1.35)}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-reopen-pill__ring{animation:none !important;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-reopen-pill" role="region" aria-label="Cookie preferences shortcut">
  <button type="button" class="nuda-ck2-reopen-pill__btn" aria-haspopup="dialog">
    <span class="nuda-ck2-reopen-pill__ring" aria-hidden="true"></span>
    <svg class="nuda-ck2-reopen-pill__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
    <span class="nuda-ck2-reopen-pill__label">Cookie settings</span>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Age Verification Gate ─────────────── */
  {
    id: "ck2-age-gate",
    name: "Age Verification Gate",
    category: CAT,
    preview: (
      <div className="nuda-ck2-age-gate" role="dialog" aria-modal="true" aria-labelledby="ck2-age-gate-title" aria-describedby="ck2-age-gate-desc">
        <div className="nuda-ck2-age-gate__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </div>
        <p id="ck2-age-gate-title" className="nuda-ck2-age-gate__title">Confirm your age</p>
        <p id="ck2-age-gate-desc" className="nuda-ck2-age-gate__desc">
          You must be 18 or older to view this content and the cookies it sets.
        </p>
        <div className="nuda-ck2-age-gate__actions">
          <button type="button" className="nuda-ck2-age-gate__btn nuda-ck2-age-gate__btn--no">I&apos;m under 18</button>
          <button type="button" className="nuda-ck2-age-gate__btn nuda-ck2-age-gate__btn--yes">I&apos;m 18 or older</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck2-age-gate{width:300px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1.2rem 1.3rem;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,.6);animation:_nuda-ck2agegateIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-age-gate__icon{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:rgba(228,255,84,.1);color:#e4ff54;margin:0 auto .7rem}
      .nuda-ck2-age-gate__title{color:#fafafa;font-size:.9rem;font-weight:700;margin:0 0 .35rem}
      .nuda-ck2-age-gate__desc{color:#777;font-size:.72rem;line-height:1.5;margin:0 0 1rem}
      .nuda-ck2-age-gate__actions{display:flex;gap:.5rem}
      .nuda-ck2-age-gate__btn{flex:1;min-height:44px;border-radius:9px;font-size:.75rem;font-weight:700;cursor:pointer;transition:opacity .15s,transform .15s}
      .nuda-ck2-age-gate__btn:hover{opacity:.85}
      .nuda-ck2-age-gate__btn:active{transform:scale(.97)}
      .nuda-ck2-age-gate__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-age-gate__btn--no{background:rgba(255,255,255,.08);color:#cfcfcf;border:1px solid rgba(255,255,255,.14)}
      .nuda-ck2-age-gate__btn--yes{background:#e4ff54;color:#0a0a0a;border:1px solid transparent}
      @keyframes _nuda-ck2agegateIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-age-gate{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-age-gate" role="dialog" aria-modal="true"
     aria-labelledby="ck2-age-gate-title" aria-describedby="ck2-age-gate-desc">
  <div class="nuda-ck2-age-gate__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  </div>
  <p id="ck2-age-gate-title" class="nuda-ck2-age-gate__title">Confirm your age</p>
  <p id="ck2-age-gate-desc" class="nuda-ck2-age-gate__desc">
    You must be 18 or older to view this content and the cookies it sets.
  </p>
  <div class="nuda-ck2-age-gate__actions">
    <button type="button" class="nuda-ck2-age-gate__btn nuda-ck2-age-gate__btn--no">I'm under 18</button>
    <button type="button" class="nuda-ck2-age-gate__btn nuda-ck2-age-gate__btn--yes">I'm 18 or older</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Terms Scroll Gate ─────────────── */
  {
    id: "ck2-scroll-gate",
    name: "Terms Scroll Gate",
    category: CAT,
    preview: (
      <div className="nuda-ck2-scroll-gate" role="region" aria-label="Terms acceptance">
        <p className="nuda-ck2-scroll-gate__title">Terms of Service</p>
        <div className="nuda-ck2-scroll-gate__box">
          <p className="nuda-ck2-scroll-gate__text">
            By continuing you agree to our data handling practices, including the cookie
            categories described in this policy and how usage data may be aggregated to
            improve the product over time.
          </p>
          <div className="nuda-ck2-scroll-gate__fade" aria-hidden="true" />
        </div>
        <div className="nuda-ck2-scroll-gate__agree">
          <input type="checkbox" id="ck2-scroll-gate-agree" className="nuda-ck2-scroll-gate__checkbox" disabled />
          <label htmlFor="ck2-scroll-gate-agree" className="nuda-ck2-scroll-gate__label">
            I have read and agree to the Terms of Service
          </label>
        </div>
        <p className="nuda-ck2-scroll-gate__hint" aria-live="polite">Scroll to the bottom to continue</p>
        <button type="button" className="nuda-ck2-scroll-gate__submit" disabled>Continue</button>
      </div>
    ),
    cssInline: `
      .nuda-ck2-scroll-gate{width:290px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1rem 1.1rem;box-shadow:0 20px 50px rgba(0,0,0,.55);animation:_nuda-ck2scrollgateIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-scroll-gate__title{color:#fafafa;font-size:.82rem;font-weight:700;margin:0 0 .55rem}
      .nuda-ck2-scroll-gate__box{position:relative;max-height:64px;overflow:hidden;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.55rem .65rem;background:rgba(255,255,255,.03)}
      .nuda-ck2-scroll-gate__text{color:#777;font-size:.68rem;line-height:1.5;margin:0}
      .nuda-ck2-scroll-gate__fade{position:absolute;left:0;right:0;bottom:0;height:28px;background:linear-gradient(to bottom,rgba(20,20,20,0),#141414 90%);pointer-events:none}
      .nuda-ck2-scroll-gate__agree{display:flex;align-items:flex-start;gap:.5rem;margin:.75rem 0 .3rem}
      .nuda-ck2-scroll-gate__checkbox{width:18px;height:18px;min-width:18px;margin-top:1px;accent-color:#e4ff54;cursor:not-allowed}
      .nuda-ck2-scroll-gate__checkbox:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-scroll-gate__label{color:#cfcfcf;font-size:.7rem;line-height:1.4}
      .nuda-ck2-scroll-gate__hint{color:#555;font-size:.63rem;margin:0 0 .7rem}
      .nuda-ck2-scroll-gate__submit{width:100%;min-height:40px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#555;font-size:.75rem;font-weight:700;cursor:not-allowed}
      @keyframes _nuda-ck2scrollgateIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-scroll-gate{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-scroll-gate" role="region" aria-label="Terms acceptance">
  <p class="nuda-ck2-scroll-gate__title">Terms of Service</p>
  <div class="nuda-ck2-scroll-gate__box">
    <p class="nuda-ck2-scroll-gate__text">
      By continuing you agree to our data handling practices, including the cookie
      categories described in this policy and how usage data may be aggregated to
      improve the product over time.
    </p>
    <div class="nuda-ck2-scroll-gate__fade" aria-hidden="true"></div>
  </div>
  <div class="nuda-ck2-scroll-gate__agree">
    <input type="checkbox" id="ck2-scroll-gate-agree" class="nuda-ck2-scroll-gate__checkbox" disabled>
    <label for="ck2-scroll-gate-agree" class="nuda-ck2-scroll-gate__label">
      I have read and agree to the Terms of Service
    </label>
  </div>
  <p class="nuda-ck2-scroll-gate__hint" aria-live="polite">Scroll to the bottom to continue</p>
  <button type="button" class="nuda-ck2-scroll-gate__submit" disabled>Continue</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Data Rights Request Card ─────────────── */
  {
    id: "ck2-data-rights",
    name: "Data Rights Request Card",
    category: CAT,
    preview: (
      <div className="nuda-ck2-data-rights" role="region" aria-label="Manage your data">
        <p className="nuda-ck2-data-rights__title">Your data, your choice</p>
        <p className="nuda-ck2-data-rights__desc">Request a copy of what we store, or ask us to delete it.</p>
        <div className="nuda-ck2-data-rights__actions">
          <button type="button" className="nuda-ck2-data-rights__btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
              <path d="M12 3v12M7 10l5 5 5-5" />
              <path d="M4 19h16" />
            </svg>
            Export my data
          </button>
          <button type="button" className="nuda-ck2-data-rights__btn nuda-ck2-data-rights__btn--danger">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
              <path d="M4 7h16" />
              <path d="M9 7V4h6v3M6 7l1 13h10l1-13" />
            </svg>
            Delete my data
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck2-data-rights{width:296px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1rem 1.1rem;box-shadow:0 20px 50px rgba(0,0,0,.55);animation:_nuda-ck2datarightsIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-data-rights__title{color:#fafafa;font-size:.82rem;font-weight:700;margin:0 0 .3rem}
      .nuda-ck2-data-rights__desc{color:#777;font-size:.7rem;line-height:1.5;margin:0 0 .9rem}
      .nuda-ck2-data-rights__actions{display:flex;flex-direction:column;gap:.5rem}
      .nuda-ck2-data-rights__btn{display:flex;align-items:center;justify-content:center;gap:.45rem;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#cfcfcf;font-size:.73rem;font-weight:600;cursor:pointer;transition:border-color .15s,color .15s}
      .nuda-ck2-data-rights__btn:hover{color:#fafafa;border-color:rgba(255,255,255,.24)}
      .nuda-ck2-data-rights__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-data-rights__btn--danger:hover{color:#fca5a5;border-color:rgba(252,165,165,.4)}
      @keyframes _nuda-ck2datarightsIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-data-rights{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-data-rights" role="region" aria-label="Manage your data">
  <p class="nuda-ck2-data-rights__title">Your data, your choice</p>
  <p class="nuda-ck2-data-rights__desc">Request a copy of what we store, or ask us to delete it.</p>
  <div class="nuda-ck2-data-rights__actions">
    <button type="button" class="nuda-ck2-data-rights__btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">
        <path d="M12 3v12M7 10l5 5 5-5" />
        <path d="M4 19h16" />
      </svg>
      Export my data
    </button>
    <button type="button" class="nuda-ck2-data-rights__btn nuda-ck2-data-rights__btn--danger">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true">
        <path d="M4 7h16" />
        <path d="M9 7V4h6v3M6 7l1 13h10l1-13" />
      </svg>
      Delete my data
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Tracking Transparency Prompt ─────────────── */
  {
    id: "ck2-why-tracking",
    name: "Tracking Transparency Prompt",
    category: CAT,
    preview: (
      <div className="nuda-ck2-why-tracking" role="dialog" aria-modal="true" aria-labelledby="ck2-why-tracking-title">
        <p id="ck2-why-tracking-title" className="nuda-ck2-why-tracking__title">Why we ask to track</p>
        <ul className="nuda-ck2-why-tracking__list">
          <li className="nuda-ck2-why-tracking__item">
            <span className="nuda-ck2-why-tracking__dot" aria-hidden="true" />
            Personalize the content you see
          </li>
          <li className="nuda-ck2-why-tracking__item">
            <span className="nuda-ck2-why-tracking__dot" aria-hidden="true" />
            Measure which features are useful
          </li>
          <li className="nuda-ck2-why-tracking__item">
            <span className="nuda-ck2-why-tracking__dot" aria-hidden="true" />
            Detect fraud and keep accounts safe
          </li>
        </ul>
        <div className="nuda-ck2-why-tracking__actions">
          <button type="button" className="nuda-ck2-why-tracking__btn nuda-ck2-why-tracking__btn--decline">Don&apos;t allow</button>
          <button type="button" className="nuda-ck2-why-tracking__btn nuda-ck2-why-tracking__btn--allow">Allow tracking</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck2-why-tracking{width:300px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1.1rem 1.2rem;box-shadow:0 25px 60px rgba(0,0,0,.6);animation:_nuda-ck2whytrackingIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-why-tracking__title{color:#fafafa;font-size:.85rem;font-weight:700;margin:0 0 .7rem}
      .nuda-ck2-why-tracking__list{list-style:none;margin:0 0 1rem;padding:0;display:flex;flex-direction:column;gap:.45rem}
      .nuda-ck2-why-tracking__item{display:flex;align-items:center;gap:.55rem;color:#cfcfcf;font-size:.71rem;line-height:1.4}
      .nuda-ck2-why-tracking__dot{width:6px;height:6px;border-radius:50%;background:#e4ff54;flex-shrink:0}
      .nuda-ck2-why-tracking__actions{display:flex;gap:.5rem}
      .nuda-ck2-why-tracking__btn{flex:1;min-height:44px;border-radius:9px;font-size:.73rem;font-weight:700;cursor:pointer;transition:opacity .15s,transform .15s}
      .nuda-ck2-why-tracking__btn:hover{opacity:.85}
      .nuda-ck2-why-tracking__btn:active{transform:scale(.97)}
      .nuda-ck2-why-tracking__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-why-tracking__btn--decline{background:rgba(255,255,255,.08);color:#cfcfcf;border:1px solid rgba(255,255,255,.14)}
      .nuda-ck2-why-tracking__btn--allow{background:#e4ff54;color:#0a0a0a;border:1px solid transparent}
      @keyframes _nuda-ck2whytrackingIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-why-tracking{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-why-tracking" role="dialog" aria-modal="true" aria-labelledby="ck2-why-tracking-title">
  <p id="ck2-why-tracking-title" class="nuda-ck2-why-tracking__title">Why we ask to track</p>
  <ul class="nuda-ck2-why-tracking__list">
    <li class="nuda-ck2-why-tracking__item">
      <span class="nuda-ck2-why-tracking__dot" aria-hidden="true"></span>
      Personalize the content you see
    </li>
    <li class="nuda-ck2-why-tracking__item">
      <span class="nuda-ck2-why-tracking__dot" aria-hidden="true"></span>
      Measure which features are useful
    </li>
    <li class="nuda-ck2-why-tracking__item">
      <span class="nuda-ck2-why-tracking__dot" aria-hidden="true"></span>
      Detect fraud and keep accounts safe
    </li>
  </ul>
  <div class="nuda-ck2-why-tracking__actions">
    <button type="button" class="nuda-ck2-why-tracking__btn nuda-ck2-why-tracking__btn--decline">Don't allow</button>
    <button type="button" class="nuda-ck2-why-tracking__btn nuda-ck2-why-tracking__btn--allow">Allow tracking</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Consent Receipt Summary ─────────────── */
  {
    id: "ck2-receipt",
    name: "Consent Receipt Summary",
    category: CAT,
    preview: (
      <div className="nuda-ck2-receipt" role="region" aria-label="Consent receipt">
        <div className="nuda-ck2-receipt__head">
          <span className="nuda-ck2-receipt__check" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div>
            <p className="nuda-ck2-receipt__title">Consent saved</p>
            <p className="nuda-ck2-receipt__meta">Sep 7, 2026 &middot; ID a83f-21c9</p>
          </div>
        </div>
        <ul className="nuda-ck2-receipt__list">
          <li className="nuda-ck2-receipt__row">
            <span>Necessary</span>
            <span className="nuda-ck2-receipt__status nuda-ck2-receipt__status--on">Always on</span>
          </li>
          <li className="nuda-ck2-receipt__row">
            <span>Analytics</span>
            <span className="nuda-ck2-receipt__status nuda-ck2-receipt__status--on">Allowed</span>
          </li>
          <li className="nuda-ck2-receipt__row">
            <span>Marketing</span>
            <span className="nuda-ck2-receipt__status nuda-ck2-receipt__status--off">Denied</span>
          </li>
        </ul>
        <button type="button" className="nuda-ck2-receipt__manage">Manage preferences</button>
      </div>
    ),
    cssInline: `
      .nuda-ck2-receipt{width:284px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1rem 1.1rem;box-shadow:0 20px 50px rgba(0,0,0,.55);animation:_nuda-ck2receiptIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-receipt__head{display:flex;align-items:center;gap:.6rem;margin-bottom:.75rem}
      .nuda-ck2-receipt__check{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:rgba(228,255,84,.12);color:#e4ff54;flex-shrink:0}
      .nuda-ck2-receipt__title{color:#fafafa;font-size:.8rem;font-weight:700;margin:0}
      .nuda-ck2-receipt__meta{color:#555;font-size:.63rem;margin:.1rem 0 0}
      .nuda-ck2-receipt__list{list-style:none;margin:0 0 .8rem;padding:.3rem 0;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07)}
      .nuda-ck2-receipt__row{display:flex;align-items:center;justify-content:space-between;padding:.4rem 0;color:#cfcfcf;font-size:.71rem}
      .nuda-ck2-receipt__status{font-size:.63rem;font-weight:600}
      .nuda-ck2-receipt__status--on{color:#e4ff54}
      .nuda-ck2-receipt__status--off{color:#777}
      .nuda-ck2-receipt__manage{width:100%;min-height:38px;border-radius:9px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#cfcfcf;font-size:.72rem;font-weight:600;cursor:pointer;transition:border-color .15s,color .15s}
      .nuda-ck2-receipt__manage:hover{color:#fafafa;border-color:rgba(255,255,255,.24)}
      .nuda-ck2-receipt__manage:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ck2receiptIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-receipt{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-receipt" role="region" aria-label="Consent receipt">
  <div class="nuda-ck2-receipt__head">
    <span class="nuda-ck2-receipt__check" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
           stroke-linecap="round" stroke-linejoin="round" width="13" height="13">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
    <div>
      <p class="nuda-ck2-receipt__title">Consent saved</p>
      <p class="nuda-ck2-receipt__meta">Sep 7, 2026 &middot; ID a83f-21c9</p>
    </div>
  </div>
  <ul class="nuda-ck2-receipt__list">
    <li class="nuda-ck2-receipt__row">
      <span>Necessary</span>
      <span class="nuda-ck2-receipt__status nuda-ck2-receipt__status--on">Always on</span>
    </li>
    <li class="nuda-ck2-receipt__row">
      <span>Analytics</span>
      <span class="nuda-ck2-receipt__status nuda-ck2-receipt__status--on">Allowed</span>
    </li>
    <li class="nuda-ck2-receipt__row">
      <span>Marketing</span>
      <span class="nuda-ck2-receipt__status nuda-ck2-receipt__status--off">Denied</span>
    </li>
  </ul>
  <button type="button" class="nuda-ck2-receipt__manage">Manage preferences</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. CCPA Do Not Sell Notice ─────────────── */
  {
    id: "ck2-ccpa",
    name: "CCPA Do Not Sell Notice",
    category: CAT,
    preview: (
      <div className="nuda-ck2-ccpa" role="region" aria-label="California privacy notice">
        <p className="nuda-ck2-ccpa__text">
          California residents have the right to opt out of the sale or sharing of personal information.
        </p>
        <div className="nuda-ck2-ccpa__row">
          <input type="checkbox" id="ck2-ccpa-toggle" className="nuda-ck2-ccpa__input" />
          <label htmlFor="ck2-ccpa-toggle" className="nuda-ck2-ccpa__switch" aria-hidden="true">
            <span className="nuda-ck2-ccpa__thumb" />
          </label>
          <label htmlFor="ck2-ccpa-toggle" className="nuda-ck2-ccpa__label">Do Not Sell or Share My Info</label>
        </div>
        <a className="nuda-ck2-ccpa__link" href="#">Learn about your CCPA rights</a>
      </div>
    ),
    cssInline: `
      .nuda-ck2-ccpa{width:300px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1rem 1.1rem;box-shadow:0 18px 45px rgba(0,0,0,.5);animation:_nuda-ck2ccpaIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-ccpa__text{color:#cfcfcf;font-size:.72rem;line-height:1.55;margin:0 0 .8rem}
      .nuda-ck2-ccpa__row{position:relative;display:flex;align-items:center;gap:.55rem;margin-bottom:.65rem}
      .nuda-ck2-ccpa__input{position:absolute;width:36px;height:44px;left:-6px;top:50%;transform:translateY(-50%);margin:0;opacity:0;cursor:pointer}
      .nuda-ck2-ccpa__switch{position:relative;display:inline-flex;width:34px;height:19px;border-radius:999px;background:rgba(255,255,255,.15);flex-shrink:0;transition:background .2s}
      .nuda-ck2-ccpa__thumb{position:absolute;top:2px;left:2px;width:15px;height:15px;border-radius:50%;background:#fafafa;transition:transform .2s}
      .nuda-ck2-ccpa__input:checked ~ .nuda-ck2-ccpa__switch{background:#e4ff54}
      .nuda-ck2-ccpa__input:checked ~ .nuda-ck2-ccpa__switch .nuda-ck2-ccpa__thumb{transform:translateX(15px);background:#0a0a0a}
      .nuda-ck2-ccpa__input:focus-visible ~ .nuda-ck2-ccpa__switch{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-ccpa__label{color:#fafafa;font-size:.73rem;font-weight:600;cursor:pointer}
      .nuda-ck2-ccpa__link{display:inline-block;color:#e4ff54;font-size:.68rem;text-decoration:underline;text-underline-offset:2px}
      .nuda-ck2-ccpa__link:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ck2ccpaIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-ccpa{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-ccpa" role="region" aria-label="California privacy notice">
  <p class="nuda-ck2-ccpa__text">
    California residents have the right to opt out of the sale or sharing of personal information.
  </p>
  <div class="nuda-ck2-ccpa__row">
    <input type="checkbox" id="ck2-ccpa-toggle" class="nuda-ck2-ccpa__input">
    <label for="ck2-ccpa-toggle" class="nuda-ck2-ccpa__switch" aria-hidden="true">
      <span class="nuda-ck2-ccpa__thumb"></span>
    </label>
    <label for="ck2-ccpa-toggle" class="nuda-ck2-ccpa__label">Do Not Sell or Share My Info</label>
  </div>
  <a class="nuda-ck2-ccpa__link" href="#">Learn about your CCPA rights</a>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Consent Renewal Notice ─────────────── */
  {
    id: "ck2-renewal",
    name: "Consent Renewal Notice",
    category: CAT,
    preview: (
      <div className="nuda-ck2-renewal" role="region" aria-label="Cookie consent renewal">
        <div className="nuda-ck2-renewal__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <path d="M21 3v6h-6" />
          </svg>
        </div>
        <div className="nuda-ck2-renewal__body">
          <p className="nuda-ck2-renewal__title">Your privacy choices expire soon</p>
          <p className="nuda-ck2-renewal__desc">Your saved cookie preferences expire in 12 days.</p>
        </div>
        <div className="nuda-ck2-renewal__actions">
          <button type="button" className="nuda-ck2-renewal__btn nuda-ck2-renewal__btn--keep">Keep current settings</button>
          <button type="button" className="nuda-ck2-renewal__btn nuda-ck2-renewal__btn--update">Update settings</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ck2-renewal{width:310px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:1rem 1.1rem;box-shadow:0 20px 50px rgba(0,0,0,.55);animation:_nuda-ck2renewalIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-ck2-renewal__icon{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:rgba(228,255,84,.1);color:#e4ff54;margin-bottom:.6rem}
      .nuda-ck2-renewal__title{color:#fafafa;font-size:.8rem;font-weight:700;margin:0 0 .25rem}
      .nuda-ck2-renewal__desc{color:#777;font-size:.7rem;line-height:1.5;margin:0 0 .9rem}
      .nuda-ck2-renewal__actions{display:flex;gap:.5rem}
      .nuda-ck2-renewal__btn{flex:1;min-height:44px;border-radius:9px;font-size:.72rem;font-weight:700;cursor:pointer;transition:opacity .15s,transform .15s}
      .nuda-ck2-renewal__btn:hover{opacity:.85}
      .nuda-ck2-renewal__btn:active{transform:scale(.97)}
      .nuda-ck2-renewal__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ck2-renewal__btn--keep{background:rgba(255,255,255,.08);color:#cfcfcf;border:1px solid rgba(255,255,255,.14)}
      .nuda-ck2-renewal__btn--update{background:#e4ff54;color:#0a0a0a;border:1px solid transparent}
      @keyframes _nuda-ck2renewalIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-ck2-renewal{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ck2-renewal" role="region" aria-label="Cookie consent renewal">
  <div class="nuda-ck2-renewal__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  </div>
  <div class="nuda-ck2-renewal__body">
    <p class="nuda-ck2-renewal__title">Your privacy choices expire soon</p>
    <p class="nuda-ck2-renewal__desc">Your saved cookie preferences expire in 12 days.</p>
  </div>
  <div class="nuda-ck2-renewal__actions">
    <button type="button" class="nuda-ck2-renewal__btn nuda-ck2-renewal__btn--keep">Keep current settings</button>
    <button type="button" class="nuda-ck2-renewal__btn nuda-ck2-renewal__btn--update">Update settings</button>
  </div>
</div>`,
      },
    ],
  },
];
