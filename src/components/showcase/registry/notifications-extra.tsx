import type { NudaComponent } from "./types";

const CAT = "Toasts & Alerts";

export const notificationsExtra: NudaComponent[] = [
  /* ─────────────── 1. Timer Ring Toast ─────────────── */
  {
    id: "ta2-timer-ring",
    name: "Timer Ring Toast",
    category: CAT,
    preview: (
      <div className="nuda-ta2-timer-ring" role="status" aria-live="polite">
        <svg className="nuda-ta2-timer-ring__ring" viewBox="0 0 36 36" width="28" height="28" aria-hidden="true">
          <circle className="nuda-ta2-timer-ring__track" cx="18" cy="18" r="15.5" fill="none" strokeWidth="3" />
          <circle className="nuda-ta2-timer-ring__fill" cx="18" cy="18" r="15.5" fill="none" strokeWidth="3" />
        </svg>
        <div className="nuda-ta2-timer-ring__body">
          <p className="nuda-ta2-timer-ring__title">Link copied</p>
          <p className="nuda-ta2-timer-ring__desc">Closes automatically</p>
        </div>
        <button className="nuda-ta2-timer-ring__close" aria-label="Dismiss notification">&times;</button>
      </div>
    ),
    cssInline: `
      .nuda-ta2-timer-ring{--c:#e4ff54;display:flex;align-items:center;gap:.75rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.7rem .85rem;min-width:270px;max-width:320px;animation:_nuda-ta2timerringin .35s ease-out both}
      .nuda-ta2-timer-ring__ring{flex-shrink:0;transform:rotate(-90deg)}
      .nuda-ta2-timer-ring__track{stroke:rgba(255,255,255,.12)}
      .nuda-ta2-timer-ring__fill{stroke:var(--c);stroke-linecap:round;stroke-dasharray:97.4;stroke-dashoffset:0;animation:_nuda-ta2timerringdeplete 5s linear forwards}
      .nuda-ta2-timer-ring__body{flex:1;min-width:0}
      .nuda-ta2-timer-ring__title{color:#fafafa;font-size:.85rem;font-weight:600;margin:0}
      .nuda-ta2-timer-ring__desc{color:#8a8a8a;font-size:.72rem;margin:.15rem 0 0}
      .nuda-ta2-timer-ring__close{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;margin:-14px -10px -14px 0;background:none;border:none;color:#777;font-size:1.15rem;cursor:pointer}
      .nuda-ta2-timer-ring__close:hover{color:#fafafa}
      .nuda-ta2-timer-ring__close:focus-visible{outline:2px solid var(--c);outline-offset:-2px;border-radius:8px}
      @keyframes _nuda-ta2timerringin{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
      @keyframes _nuda-ta2timerringdeplete{from{stroke-dashoffset:0}to{stroke-dashoffset:97.4}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-timer-ring{animation:none}.nuda-ta2-timer-ring__fill{animation:none;stroke-dashoffset:48.7}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-timer-ring" role="status" aria-live="polite">
  <svg class="nuda-ta2-timer-ring__ring" viewBox="0 0 36 36" width="28" height="28" aria-hidden="true">
    <circle class="nuda-ta2-timer-ring__track" cx="18" cy="18" r="15.5" fill="none" stroke-width="3"></circle>
    <circle class="nuda-ta2-timer-ring__fill" cx="18" cy="18" r="15.5" fill="none" stroke-width="3"></circle>
  </svg>
  <div class="nuda-ta2-timer-ring__body">
    <p class="nuda-ta2-timer-ring__title">Link copied</p>
    <p class="nuda-ta2-timer-ring__desc">Closes automatically</p>
  </div>
  <button class="nuda-ta2-timer-ring__close" aria-label="Dismiss notification">&times;</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Swipe To Dismiss Toast ─────────────── */
  {
    id: "ta2-swipe-dismiss",
    name: "Swipe To Dismiss Toast",
    category: CAT,
    preview: (
      <div className="nuda-ta2-swipe" role="status" aria-live="polite">
        <div className="nuda-ta2-swipe__surface">
          <span className="nuda-ta2-swipe__icon" aria-hidden="true">&#9993;</span>
          <div className="nuda-ta2-swipe__body">
            <p className="nuda-ta2-swipe__title">New message</p>
            <p className="nuda-ta2-swipe__desc">&ldquo;See you at 3pm&rdquo;</p>
          </div>
        </div>
        <span className="nuda-ta2-swipe__hint" aria-hidden="true">&larr; swipe to dismiss</span>
      </div>
    ),
    cssInline: `
      .nuda-ta2-swipe{--c:#e4ff54;display:flex;flex-direction:column;gap:.35rem;min-width:260px;max-width:300px}
      .nuda-ta2-swipe__surface{display:flex;align-items:center;gap:.7rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.7rem .9rem;animation:_nuda-ta2swipehint 2.6s ease-in-out infinite}
      .nuda-ta2-swipe__icon{color:var(--c);font-size:1.05rem;flex-shrink:0}
      .nuda-ta2-swipe__body{min-width:0}
      .nuda-ta2-swipe__title{color:#fafafa;font-size:.85rem;font-weight:600;margin:0}
      .nuda-ta2-swipe__desc{color:#8a8a8a;font-size:.72rem;margin:.15rem 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-ta2-swipe__hint{align-self:center;color:#5c5c5c;font-size:.65rem;letter-spacing:.02em;animation:_nuda-ta2swipehinttext 2.6s ease-in-out infinite}
      @keyframes _nuda-ta2swipehint{0%,20%{transform:translateX(0);opacity:1}45%{transform:translateX(-22px);opacity:.55}60%,100%{transform:translateX(0);opacity:1}}
      @keyframes _nuda-ta2swipehinttext{0%,20%{opacity:.6}45%{opacity:1}60%,100%{opacity:.6}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-swipe__surface,.nuda-ta2-swipe__hint{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-swipe" role="status" aria-live="polite">
  <div class="nuda-ta2-swipe__surface">
    <span class="nuda-ta2-swipe__icon" aria-hidden="true">&#9993;</span>
    <div class="nuda-ta2-swipe__body">
      <p class="nuda-ta2-swipe__title">New message</p>
      <p class="nuda-ta2-swipe__desc">&ldquo;See you at 3pm&rdquo;</p>
    </div>
  </div>
  <span class="nuda-ta2-swipe__hint" aria-hidden="true">&larr; swipe to dismiss</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Promise Toast ─────────────── */
  {
    id: "ta2-promise",
    name: "Promise Toast",
    category: CAT,
    preview: (
      <div className="nuda-ta2-promise" role="status" aria-live="polite">
        <span className="nuda-ta2-promise__icon" aria-hidden="true">
          <svg className="nuda-ta2-promise__spinner" viewBox="0 0 24 24" width="18" height="18">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="42" strokeDashoffset="14" />
          </svg>
          <svg className="nuda-ta2-promise__check" viewBox="0 0 24 24" width="18" height="18">
            <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="20" strokeDashoffset="20" d="M6 12l4 4 8-8" />
          </svg>
        </span>
        <span className="nuda-ta2-promise__text">
          <span className="nuda-ta2-promise__text-loading">Uploading file&hellip;</span>
          <span className="nuda-ta2-promise__text-success">File uploaded</span>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-ta2-promise{--c:#e4ff54;display:flex;align-items:center;gap:.7rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.7rem .9rem;min-width:230px;max-width:290px}
      .nuda-ta2-promise__icon{position:relative;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;flex-shrink:0}
      .nuda-ta2-promise__spinner{position:absolute;color:#8a8a8a;animation:_nuda-ta2promisespin .8s linear infinite,_nuda-ta2promisespinout .25s ease forwards 1.4s}
      .nuda-ta2-promise__check{position:absolute;color:#3ddc97;opacity:0;animation:_nuda-ta2promisecheckin .3s ease forwards 1.5s}
      .nuda-ta2-promise__text{position:relative;display:inline-block;font-size:.82rem;color:#cfcfcf;min-height:1.1em}
      .nuda-ta2-promise__text-loading,.nuda-ta2-promise__text-success{position:absolute;left:0;top:0;white-space:nowrap}
      .nuda-ta2-promise__text-loading{animation:_nuda-ta2promisetextout .25s ease forwards 1.4s}
      .nuda-ta2-promise__text-success{opacity:0;color:#fafafa;font-weight:600;animation:_nuda-ta2promisetextin .3s ease forwards 1.5s}
      @keyframes _nuda-ta2promisespin{to{transform:rotate(360deg)}}
      @keyframes _nuda-ta2promisespinout{to{opacity:0}}
      @keyframes _nuda-ta2promisecheckin{from{opacity:0;stroke-dashoffset:20}to{opacity:1;stroke-dashoffset:0}}
      @keyframes _nuda-ta2promisetextout{to{opacity:0;transform:translateY(-6px)}}
      @keyframes _nuda-ta2promisetextin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-promise__spinner{animation:none;opacity:0}.nuda-ta2-promise__check{animation:none;opacity:1}.nuda-ta2-promise__text-loading{animation:none;opacity:0}.nuda-ta2-promise__text-success{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-promise" role="status" aria-live="polite">
  <span class="nuda-ta2-promise__icon" aria-hidden="true">
    <svg class="nuda-ta2-promise__spinner" viewBox="0 0 24 24" width="18" height="18">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-dasharray="42" stroke-dashoffset="14"></circle>
    </svg>
    <svg class="nuda-ta2-promise__check" viewBox="0 0 24 24" width="18" height="18">
      <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
        stroke-linejoin="round" stroke-dasharray="20" stroke-dashoffset="20" d="M6 12l4 4 8-8"></path>
    </svg>
  </span>
  <span class="nuda-ta2-promise__text">
    <span class="nuda-ta2-promise__text-loading">Uploading file&hellip;</span>
    <span class="nuda-ta2-promise__text-success">File uploaded</span>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Action Toast ─────────────── */
  {
    id: "ta2-action-toast",
    name: "Action Toast",
    category: CAT,
    preview: (
      <div className="nuda-ta2-action-toast" role="status" aria-live="polite">
        <div className="nuda-ta2-action-toast__icon" aria-hidden="true">&#128172;</div>
        <div className="nuda-ta2-action-toast__body">
          <p className="nuda-ta2-action-toast__title">Comment added</p>
          <p className="nuda-ta2-action-toast__desc">Your review comment was posted to the pull request.</p>
          <div className="nuda-ta2-action-toast__actions">
            <button className="nuda-ta2-action-toast__btn nuda-ta2-action-toast__btn--primary">View</button>
            <button className="nuda-ta2-action-toast__btn">Dismiss</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-action-toast{--c:#e4ff54;display:flex;gap:.7rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.85rem;min-width:270px;max-width:320px;animation:_nuda-ta2actiontoastin .4s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-ta2-action-toast__icon{flex-shrink:0;font-size:1.1rem}
      .nuda-ta2-action-toast__body{flex:1;min-width:0}
      .nuda-ta2-action-toast__title{color:#fafafa;font-size:.85rem;font-weight:600;margin:0}
      .nuda-ta2-action-toast__desc{color:#9a9a9a;font-size:.75rem;line-height:1.4;margin:.25rem 0 0}
      .nuda-ta2-action-toast__actions{display:flex;gap:.5rem;margin-top:.6rem}
      .nuda-ta2-action-toast__btn{min-height:32px;padding:0 .7rem;border-radius:7px;border:1px solid rgba(255,255,255,.14);background:transparent;color:#cfcfcf;font-size:.72rem;font-weight:600;cursor:pointer;transition:transform .15s,background .15s}
      .nuda-ta2-action-toast__btn:hover{transform:translateY(-1px);background:rgba(255,255,255,.06)}
      .nuda-ta2-action-toast__btn:focus-visible{outline:2px solid var(--c);outline-offset:2px}
      .nuda-ta2-action-toast__btn--primary{background:var(--c);border-color:var(--c);color:#0a0a0a}
      .nuda-ta2-action-toast__btn--primary:hover{background:#eeff85}
      @keyframes _nuda-ta2actiontoastin{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-action-toast{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-action-toast" role="status" aria-live="polite">
  <div class="nuda-ta2-action-toast__icon" aria-hidden="true">&#128172;</div>
  <div class="nuda-ta2-action-toast__body">
    <p class="nuda-ta2-action-toast__title">Comment added</p>
    <p class="nuda-ta2-action-toast__desc">Your review comment was posted to the pull request.</p>
    <div class="nuda-ta2-action-toast__actions">
      <button class="nuda-ta2-action-toast__btn nuda-ta2-action-toast__btn--primary">View</button>
      <button class="nuda-ta2-action-toast__btn">Dismiss</button>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Mention Toast ─────────────── */
  {
    id: "ta2-mention",
    name: "Mention Toast",
    category: CAT,
    preview: (
      <div className="nuda-ta2-mention" role="status" aria-live="polite">
        <span className="nuda-ta2-mention__avatar">
          AL
          <span className="nuda-ta2-mention__badge" aria-hidden="true">@</span>
        </span>
        <div className="nuda-ta2-mention__body">
          <p className="nuda-ta2-mention__title"><strong>Ana Lima</strong> mentioned you</p>
          <p className="nuda-ta2-mention__desc">in #design-review: &ldquo;great work on this!&rdquo;</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-mention{--c:#e4ff54;display:flex;align-items:flex-start;gap:.7rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.75rem .9rem;min-width:270px;max-width:320px;animation:_nuda-ta2mentionin .4s ease-out both}
      .nuda-ta2-mention__avatar{position:relative;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#9d6dff,#ff6dd4);color:#fff;font-size:.7rem;font-weight:700}
      .nuda-ta2-mention__badge{position:absolute;bottom:-2px;right:-2px;display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:var(--c);color:#0a0a0a;font-size:.6rem;font-weight:800;border:2px solid #161616;animation:_nuda-ta2mentionpulse 2s ease-in-out infinite}
      .nuda-ta2-mention__body{min-width:0}
      .nuda-ta2-mention__title{color:#fafafa;font-size:.82rem;margin:0}
      .nuda-ta2-mention__title strong{font-weight:700}
      .nuda-ta2-mention__desc{color:#8a8a8a;font-size:.72rem;margin:.2rem 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      @keyframes _nuda-ta2mentionin{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
      @keyframes _nuda-ta2mentionpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-mention{animation:none}.nuda-ta2-mention__badge{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-mention" role="status" aria-live="polite">
  <span class="nuda-ta2-mention__avatar">
    AL
    <span class="nuda-ta2-mention__badge" aria-hidden="true">@</span>
  </span>
  <div class="nuda-ta2-mention__body">
    <p class="nuda-ta2-mention__title"><strong>Ana Lima</strong> mentioned you</p>
    <p class="nuda-ta2-mention__desc">in #design-review: &ldquo;great work on this!&rdquo;</p>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Stacked Toast Group ─────────────── */
  {
    id: "ta2-stack",
    name: "Stacked Toast Group",
    category: CAT,
    preview: (
      <div className="nuda-ta2-stack" role="status" aria-live="polite">
        <div className="nuda-ta2-stack__item nuda-ta2-stack__item--3" aria-hidden="true"></div>
        <div className="nuda-ta2-stack__item nuda-ta2-stack__item--2" aria-hidden="true"></div>
        <div className="nuda-ta2-stack__item nuda-ta2-stack__item--1">
          <span className="nuda-ta2-stack__text">Build deployed to production</span>
          <span className="nuda-ta2-stack__badge">+2</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-stack{--c:#e4ff54;position:relative;width:280px;height:64px}
      .nuda-ta2-stack__item{position:absolute;left:0;right:0;top:0;display:flex;align-items:center;gap:.5rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.75rem .9rem;min-height:44px;box-sizing:border-box;opacity:0;transition:transform .25s ease}
      .nuda-ta2-stack__item--1{z-index:3;transform:translateY(0) scale(1);animation:_nuda-ta2stackin1 .35s ease-out forwards .12s}
      .nuda-ta2-stack__item--2{z-index:2;transform:translateY(8px) scale(.96);animation:_nuda-ta2stackin2 .35s ease-out forwards .06s}
      .nuda-ta2-stack__item--3{z-index:1;transform:translateY(16px) scale(.92);animation:_nuda-ta2stackin3 .35s ease-out forwards 0s}
      .nuda-ta2-stack:hover .nuda-ta2-stack__item--2{transform:translateY(14px) scale(.96)}
      .nuda-ta2-stack:hover .nuda-ta2-stack__item--3{transform:translateY(28px) scale(.92)}
      .nuda-ta2-stack__text{flex:1;color:#e6e6e6;font-size:.78rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-ta2-stack__badge{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:22px;padding:0 .35rem;border-radius:99px;background:var(--c);color:#0a0a0a;font-size:.68rem;font-weight:800}
      @keyframes _nuda-ta2stackin1{from{opacity:0}to{opacity:1}}
      @keyframes _nuda-ta2stackin2{from{opacity:0}to{opacity:.7}}
      @keyframes _nuda-ta2stackin3{from{opacity:0}to{opacity:.4}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-stack__item{animation:none;transition:none;opacity:1}.nuda-ta2-stack__item--2{opacity:.7}.nuda-ta2-stack__item--3{opacity:.4}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-stack" role="status" aria-live="polite">
  <div class="nuda-ta2-stack__item nuda-ta2-stack__item--3" aria-hidden="true"></div>
  <div class="nuda-ta2-stack__item nuda-ta2-stack__item--2" aria-hidden="true"></div>
  <div class="nuda-ta2-stack__item nuda-ta2-stack__item--1">
    <span class="nuda-ta2-stack__text">Build deployed to production</span>
    <span class="nuda-ta2-stack__badge">+2</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Upload Progress Toast ─────────────── */
  {
    id: "ta2-upload",
    name: "Upload Progress Toast",
    category: CAT,
    preview: (
      <div className="nuda-ta2-upload" role="status" aria-live="polite">
        <div className="nuda-ta2-upload__row">
          <span className="nuda-ta2-upload__name">brand-assets.zip</span>
          <span className="nuda-ta2-upload__pct">67%</span>
        </div>
        <div className="nuda-ta2-upload__track">
          <div className="nuda-ta2-upload__fill"></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-upload{--c:#e4ff54;display:flex;flex-direction:column;gap:.5rem;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.75rem .9rem;min-width:260px;max-width:300px}
      .nuda-ta2-upload__row{display:flex;align-items:center;justify-content:space-between;gap:.5rem}
      .nuda-ta2-upload__name{color:#fafafa;font-size:.8rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-ta2-upload__pct{flex-shrink:0;color:var(--c);font-size:.72rem;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-ta2-upload__track{position:relative;height:6px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden}
      .nuda-ta2-upload__fill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(0);border-radius:99px;background:linear-gradient(90deg,#b9d63f,var(--c));animation:_nuda-ta2uploadfill 3s cubic-bezier(.2,.7,.3,1) forwards}
      @keyframes _nuda-ta2uploadfill{to{transform:scaleX(.67)}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-upload__fill{animation:none;transform:scaleX(.67)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-upload" role="status" aria-live="polite">
  <div class="nuda-ta2-upload__row">
    <span class="nuda-ta2-upload__name">brand-assets.zip</span>
    <span class="nuda-ta2-upload__pct">67%</span>
  </div>
  <div class="nuda-ta2-upload__track">
    <div class="nuda-ta2-upload__fill"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Destructive Confirm Alert ─────────────── */
  {
    id: "ta2-destructive-confirm",
    name: "Destructive Confirm Alert",
    category: CAT,
    preview: (
      <div className="nuda-ta2-confirm" role="alert" aria-live="assertive">
        <div className="nuda-ta2-confirm__row">
          <span className="nuda-ta2-confirm__icon" aria-hidden="true">&#9888;</span>
          <div className="nuda-ta2-confirm__body">
            <p className="nuda-ta2-confirm__title">Delete 3 files?</p>
            <p className="nuda-ta2-confirm__desc">This action can&rsquo;t be undone once confirmed.</p>
          </div>
        </div>
        <div className="nuda-ta2-confirm__actions">
          <button className="nuda-ta2-confirm__btn nuda-ta2-confirm__btn--cancel">Cancel</button>
          <button className="nuda-ta2-confirm__btn nuda-ta2-confirm__btn--danger">Delete</button>
        </div>
        <div className="nuda-ta2-confirm__track" aria-hidden="true">
          <div className="nuda-ta2-confirm__bar"></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-confirm{--r:#ff5e7a;display:flex;flex-direction:column;gap:.65rem;background:#161616;border:1px solid rgba(255,94,122,.3);border-radius:12px;padding:.85rem .9rem .7rem;min-width:270px;max-width:320px;overflow:hidden;position:relative;animation:_nuda-ta2confirmin .35s ease-out both}
      .nuda-ta2-confirm__row{display:flex;align-items:flex-start;gap:.6rem}
      .nuda-ta2-confirm__icon{color:var(--r);font-size:1rem;flex-shrink:0;margin-top:1px}
      .nuda-ta2-confirm__title{color:#fafafa;font-size:.85rem;font-weight:700;margin:0}
      .nuda-ta2-confirm__desc{color:#9a9a9a;font-size:.74rem;line-height:1.4;margin:.25rem 0 0}
      .nuda-ta2-confirm__actions{display:flex;justify-content:flex-end;gap:.5rem}
      .nuda-ta2-confirm__btn{min-height:36px;padding:0 .8rem;border-radius:7px;border:1px solid rgba(255,255,255,.14);background:transparent;color:#cfcfcf;font-size:.74rem;font-weight:600;cursor:pointer}
      .nuda-ta2-confirm__btn:hover{background:rgba(255,255,255,.06)}
      .nuda-ta2-confirm__btn:focus-visible{outline:2px solid #fff;outline-offset:2px}
      .nuda-ta2-confirm__btn--danger{background:var(--r);border-color:var(--r);color:#1a0a0d}
      .nuda-ta2-confirm__btn--danger:hover{background:#ff7d92}
      .nuda-ta2-confirm__track{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(255,255,255,.08)}
      .nuda-ta2-confirm__bar{height:100%;width:100%;transform-origin:left center;transform:scaleX(1);background:var(--r);animation:_nuda-ta2confirmcountdown 6s linear forwards}
      @keyframes _nuda-ta2confirmin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
      @keyframes _nuda-ta2confirmcountdown{to{transform:scaleX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-confirm{animation:none}.nuda-ta2-confirm__bar{animation:none;transform:scaleX(.4)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-confirm" role="alert" aria-live="assertive">
  <div class="nuda-ta2-confirm__row">
    <span class="nuda-ta2-confirm__icon" aria-hidden="true">&#9888;</span>
    <div class="nuda-ta2-confirm__body">
      <p class="nuda-ta2-confirm__title">Delete 3 files?</p>
      <p class="nuda-ta2-confirm__desc">This action can&rsquo;t be undone once confirmed.</p>
    </div>
  </div>
  <div class="nuda-ta2-confirm__actions">
    <button class="nuda-ta2-confirm__btn nuda-ta2-confirm__btn--cancel">Cancel</button>
    <button class="nuda-ta2-confirm__btn nuda-ta2-confirm__btn--danger">Delete</button>
  </div>
  <div class="nuda-ta2-confirm__track" aria-hidden="true">
    <div class="nuda-ta2-confirm__bar"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Semantic Alert Set ─────────────── */
  {
    id: "ta2-semantic-set",
    name: "Semantic Alert Set",
    category: CAT,
    preview: (
      <div className="nuda-ta2-semset">
        <div className="nuda-ta2-semset__row nuda-ta2-semset__row--info" role="status" aria-live="polite">
          <span className="nuda-ta2-semset__icon" aria-hidden="true">&#8505;</span>
          <span className="nuda-ta2-semset__text">A new version is available</span>
        </div>
        <div className="nuda-ta2-semset__row nuda-ta2-semset__row--success" role="status" aria-live="polite">
          <span className="nuda-ta2-semset__icon" aria-hidden="true">&#10003;</span>
          <span className="nuda-ta2-semset__text">Payment received</span>
        </div>
        <div className="nuda-ta2-semset__row nuda-ta2-semset__row--warning" role="status" aria-live="polite">
          <span className="nuda-ta2-semset__icon" aria-hidden="true">&#9888;</span>
          <span className="nuda-ta2-semset__text">Plan usage at 90%</span>
        </div>
        <div className="nuda-ta2-semset__row nuda-ta2-semset__row--error" role="alert" aria-live="assertive">
          <span className="nuda-ta2-semset__icon" aria-hidden="true">&#10071;</span>
          <span className="nuda-ta2-semset__text">Payment failed</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-semset{display:flex;flex-direction:column;gap:.4rem;min-width:250px;max-width:300px}
      .nuda-ta2-semset__row{display:flex;align-items:center;gap:.55rem;border-radius:9px;border:1px solid var(--bc);background:var(--bg);padding:.5rem .7rem;animation:_nuda-ta2semsetin .3s ease-out both}
      .nuda-ta2-semset__row--info{--bc:rgba(96,165,250,.3);--bg:rgba(96,165,250,.08);animation-delay:0s}
      .nuda-ta2-semset__row--info .nuda-ta2-semset__icon{color:#60a5fa}
      .nuda-ta2-semset__row--success{--bc:rgba(52,211,153,.3);--bg:rgba(52,211,153,.08);animation-delay:.06s}
      .nuda-ta2-semset__row--success .nuda-ta2-semset__icon{color:#34d399}
      .nuda-ta2-semset__row--warning{--bc:rgba(251,191,36,.35);--bg:rgba(251,191,36,.08);animation-delay:.12s}
      .nuda-ta2-semset__row--warning .nuda-ta2-semset__icon{color:#fbbf24}
      .nuda-ta2-semset__row--error{--bc:rgba(255,94,122,.35);--bg:rgba(255,94,122,.08);animation-delay:.18s}
      .nuda-ta2-semset__row--error .nuda-ta2-semset__icon{color:#ff5e7a}
      .nuda-ta2-semset__icon{flex-shrink:0;font-size:.85rem;font-weight:700}
      .nuda-ta2-semset__text{color:#e6e6e6;font-size:.76rem}
      @keyframes _nuda-ta2semsetin{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-semset__row{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-semset">
  <div class="nuda-ta2-semset__row nuda-ta2-semset__row--info" role="status" aria-live="polite">
    <span class="nuda-ta2-semset__icon" aria-hidden="true">&#8505;</span>
    <span class="nuda-ta2-semset__text">A new version is available</span>
  </div>
  <div class="nuda-ta2-semset__row nuda-ta2-semset__row--success" role="status" aria-live="polite">
    <span class="nuda-ta2-semset__icon" aria-hidden="true">&#10003;</span>
    <span class="nuda-ta2-semset__text">Payment received</span>
  </div>
  <div class="nuda-ta2-semset__row nuda-ta2-semset__row--warning" role="status" aria-live="polite">
    <span class="nuda-ta2-semset__icon" aria-hidden="true">&#9888;</span>
    <span class="nuda-ta2-semset__text">Plan usage at 90%</span>
  </div>
  <div class="nuda-ta2-semset__row nuda-ta2-semset__row--error" role="alert" aria-live="assertive">
    <span class="nuda-ta2-semset__icon" aria-hidden="true">&#10071;</span>
    <span class="nuda-ta2-semset__text">Payment failed</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Field Error Alert ─────────────── */
  {
    id: "ta2-field-error",
    name: "Field Error Alert",
    category: CAT,
    preview: (
      <div className="nuda-ta2-field">
        <label className="nuda-ta2-field__label" htmlFor="ta2-field-error-email">Email address</label>
        <input
          id="ta2-field-error-email"
          className="nuda-ta2-field__input"
          type="email"
          defaultValue="ana@company"
          aria-invalid="true"
          aria-describedby="ta2-field-error-msg"
          readOnly
        />
        <p className="nuda-ta2-field__error" id="ta2-field-error-msg" role="alert" aria-live="assertive">
          <span aria-hidden="true">&#9888;</span> Enter a valid email address
        </p>
      </div>
    ),
    cssInline: `
      .nuda-ta2-field{--r:#ff5e7a;display:flex;flex-direction:column;gap:.4rem;min-width:230px;max-width:280px}
      .nuda-ta2-field__label{color:#cfcfcf;font-size:.75rem;font-weight:600}
      .nuda-ta2-field__input{min-height:44px;box-sizing:border-box;padding:0 .75rem;border-radius:8px;border:1.5px solid var(--r);background:#161616;color:#fafafa;font-size:.85rem;animation:_nuda-ta2fieldshake .4s ease}
      .nuda-ta2-field__input:focus-visible{outline:2px solid var(--r);outline-offset:2px}
      .nuda-ta2-field__error{display:flex;align-items:center;gap:.35rem;color:var(--r);font-size:.72rem;margin:0;animation:_nuda-ta2fielderrin .25s ease-out both}
      @keyframes _nuda-ta2fieldshake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-3px)}40%,80%{transform:translateX(3px)}}
      @keyframes _nuda-ta2fielderrin{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-field__input{animation:none}.nuda-ta2-field__error{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-field">
  <label class="nuda-ta2-field__label" for="ta2-field-error-email">Email address</label>
  <input id="ta2-field-error-email" class="nuda-ta2-field__input" type="email"
    value="ana@company" aria-invalid="true" aria-describedby="ta2-field-error-msg">
  <p class="nuda-ta2-field__error" id="ta2-field-error-msg" role="alert" aria-live="assertive">
    <span aria-hidden="true">&#9888;</span> Enter a valid email address
  </p>
</div>`,
      },
    ],
  },

  /* ─────────────── 11. Migration Progress Banner ─────────────── */
  {
    id: "ta2-migration-banner",
    name: "Migration Progress Banner",
    category: CAT,
    preview: (
      <div className="nuda-ta2-migration-banner" role="status" aria-live="polite">
        <div className="nuda-ta2-migration-banner__row">
          <span className="nuda-ta2-migration-banner__spinner" aria-hidden="true"></span>
          <span className="nuda-ta2-migration-banner__text">Migrating your workspace to v3&hellip;</span>
          <span className="nuda-ta2-migration-banner__pct">68%</span>
        </div>
        <div className="nuda-ta2-migration-banner__track" aria-hidden="true">
          <div className="nuda-ta2-migration-banner__fill"></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ta2-migration-banner{--c:#e4ff54;display:flex;flex-direction:column;gap:.5rem;background:#101012;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:.65rem .9rem;width:100%;max-width:320px;animation:_nuda-ta2migrationin .3s ease-out both}
      .nuda-ta2-migration-banner__row{display:flex;align-items:center;gap:.55rem}
      .nuda-ta2-migration-banner__spinner{flex-shrink:0;width:13px;height:13px;border-radius:50%;border:2px solid rgba(228,255,84,.25);border-top-color:var(--c);animation:_nuda-ta2migrationspin .7s linear infinite}
      .nuda-ta2-migration-banner__text{flex:1;color:#e6e6e6;font-size:.78rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-ta2-migration-banner__pct{flex-shrink:0;color:var(--c);font-size:.72rem;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-ta2-migration-banner__track{position:relative;height:4px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden}
      .nuda-ta2-migration-banner__fill{position:absolute;inset:0;transform-origin:left center;transform:scaleX(0);border-radius:99px;background:var(--c);animation:_nuda-ta2migrationfill 4s cubic-bezier(.2,.7,.3,1) forwards}
      @keyframes _nuda-ta2migrationin{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
      @keyframes _nuda-ta2migrationspin{to{transform:rotate(360deg)}}
      @keyframes _nuda-ta2migrationfill{to{transform:scaleX(.68)}}
      @media(prefers-reduced-motion:reduce){.nuda-ta2-migration-banner{animation:none}.nuda-ta2-migration-banner__spinner{animation:none}.nuda-ta2-migration-banner__fill{animation:none;transform:scaleX(.68)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ta2-migration-banner" role="status" aria-live="polite">
  <div class="nuda-ta2-migration-banner__row">
    <span class="nuda-ta2-migration-banner__spinner" aria-hidden="true"></span>
    <span class="nuda-ta2-migration-banner__text">Migrating your workspace to v3&hellip;</span>
    <span class="nuda-ta2-migration-banner__pct">68%</span>
  </div>
  <div class="nuda-ta2-migration-banner__track" aria-hidden="true">
    <div class="nuda-ta2-migration-banner__fill"></div>
  </div>
</div>`,
      },
    ],
  },
];
