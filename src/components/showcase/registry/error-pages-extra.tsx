import type { NudaComponent } from "./types";

const CAT = "Error & 404 Pages";

export const errorPagesExtra: NudaComponent[] = [
  /* ─────────────── 1. Rate Limited (429) ─────────────── */
  {
    id: "ep2-rate-limited",
    name: "Rate Limited Cooldown",
    category: CAT,
    preview: (
      <div className="nuda-ep2-rate-limited">
        <div className="nuda-ep2-rate-limited__ring" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <circle className="nuda-ep2-rate-limited__track" cx="32" cy="32" r="27" />
            <circle className="nuda-ep2-rate-limited__bar" cx="32" cy="32" r="27" />
          </svg>
          <span className="nuda-ep2-rate-limited__code">429</span>
        </div>
        <p className="nuda-ep2-rate-limited__title" role="alert">Too many requests</p>
        <p className="nuda-ep2-rate-limited__sub">You've hit the rate limit. Please wait a moment before trying again.</p>
        <button className="nuda-ep2-rate-limited__btn" type="button">Try again</button>
      </div>
    ),
    cssInline: `
      .nuda-ep2-rate-limited{display:flex;flex-direction:column;align-items:center;gap:8px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-rate-limited__ring{position:relative;width:64px;height:64px;display:flex;align-items:center;justify-content:center}
      .nuda-ep2-rate-limited__ring svg{width:64px;height:64px;transform:rotate(-90deg)}
      .nuda-ep2-rate-limited__track{fill:none;stroke:rgba(255,255,255,.08);stroke-width:4}
      .nuda-ep2-rate-limited__bar{fill:none;stroke:#e4ff54;stroke-width:4;stroke-linecap:round;stroke-dasharray:169.6;stroke-dashoffset:169.6;animation:_nuda-ep2ratelimited-cooldown 4s linear infinite}
      .nuda-ep2-rate-limited__code{position:absolute;font-size:13px;font-weight:800;color:#fafafa;letter-spacing:.02em}
      .nuda-ep2-rate-limited__title{margin:4px 0 0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-rate-limited__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-rate-limited__btn{margin-top:6px;min-height:44px;padding:0 18px;border-radius:10px;border:1px solid rgba(228,255,84,.3);background:rgba(228,255,84,.1);color:#e4ff54;font-size:12px;font-weight:700;cursor:pointer;transition:background .2s}
      .nuda-ep2-rate-limited__btn:hover{background:rgba(228,255,84,.18)}
      .nuda-ep2-rate-limited__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ep2ratelimited-cooldown{0%{stroke-dashoffset:169.6}100%{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-rate-limited__bar{animation:none;stroke-dashoffset:60}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-rate-limited">
  <div class="nuda-ep2-rate-limited__ring" aria-hidden="true">
    <svg viewBox="0 0 64 64">
      <circle class="nuda-ep2-rate-limited__track" cx="32" cy="32" r="27" />
      <circle class="nuda-ep2-rate-limited__bar" cx="32" cy="32" r="27" />
    </svg>
    <span class="nuda-ep2-rate-limited__code">429</span>
  </div>
  <p class="nuda-ep2-rate-limited__title" role="alert">Too many requests</p>
  <p class="nuda-ep2-rate-limited__sub">You've hit the rate limit. Please wait a moment before trying again.</p>
  <button class="nuda-ep2-rate-limited__btn" type="button">Try again</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Session Expired (401) ─────────────── */
  {
    id: "ep2-session-expired",
    name: "Session Expired Re-auth",
    category: CAT,
    preview: (
      <div className="nuda-ep2-session-expired">
        <div className="nuda-ep2-session-expired__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          <span className="nuda-ep2-session-expired__badge" aria-hidden="true">401</span>
        </div>
        <p className="nuda-ep2-session-expired__title" role="alert">Your session expired</p>
        <p className="nuda-ep2-session-expired__sub">For your security, please sign in again to continue.</p>
        <div className="nuda-ep2-session-expired__actions">
          <button className="nuda-ep2-session-expired__btn nuda-ep2-session-expired__btn--primary" type="button">Sign in again</button>
          <button className="nuda-ep2-session-expired__btn" type="button">Go home</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ep2-session-expired{display:flex;flex-direction:column;align-items:center;gap:8px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-session-expired__icon{position:relative;width:56px;height:56px;display:flex;align-items:center;justify-content:center;color:#f5a623;background:rgba(245,166,35,.08);border:1px solid rgba(245,166,35,.22);border-radius:50%}
      .nuda-ep2-session-expired__icon svg{width:26px;height:26px}
      .nuda-ep2-session-expired__icon::before{content:"";position:absolute;inset:-6px;border-radius:50%;border:1.5px solid rgba(245,166,35,.3);animation:_nuda-ep2sessionexpired-ring 2.4s ease-out infinite}
      .nuda-ep2-session-expired__badge{position:absolute;bottom:-4px;right:-6px;font-size:8px;font-weight:800;letter-spacing:.06em;color:#0a0a0a;background:#f5a623;padding:2px 5px;border-radius:99px}
      .nuda-ep2-session-expired__title{margin:4px 0 0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-session-expired__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-session-expired__actions{display:flex;gap:8px;margin-top:6px}
      .nuda-ep2-session-expired__btn{min-height:44px;padding:0 14px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#cfcfcf;font-size:11.5px;font-weight:600;cursor:pointer;transition:background .2s,border-color .2s}
      .nuda-ep2-session-expired__btn:hover{background:rgba(255,255,255,.08)}
      .nuda-ep2-session-expired__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ep2-session-expired__btn--primary{background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.3);color:#e4ff54}
      .nuda-ep2-session-expired__btn--primary:hover{background:rgba(228,255,84,.18)}
      @keyframes _nuda-ep2sessionexpired-ring{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.35);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-session-expired__icon::before{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-session-expired">
  <div class="nuda-ep2-session-expired__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
    <span class="nuda-ep2-session-expired__badge" aria-hidden="true">401</span>
  </div>
  <p class="nuda-ep2-session-expired__title" role="alert">Your session expired</p>
  <p class="nuda-ep2-session-expired__sub">For your security, please sign in again to continue.</p>
  <div class="nuda-ep2-session-expired__actions">
    <button class="nuda-ep2-session-expired__btn nuda-ep2-session-expired__btn--primary" type="button">Sign in again</button>
    <button class="nuda-ep2-session-expired__btn" type="button">Go home</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Gone / Archived (410) ─────────────── */
  {
    id: "ep2-gone",
    name: "Gone Archived Notice",
    category: CAT,
    preview: (
      <div className="nuda-ep2-gone">
        <div className="nuda-ep2-gone__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 8L12 4 3 8l9 4 9-4z" />
            <path d="M3 8v8l9 4 9-4V8" />
            <path d="M12 12v8" />
          </svg>
          <span className="nuda-ep2-gone__dust nuda-ep2-gone__dust--a" />
          <span className="nuda-ep2-gone__dust nuda-ep2-gone__dust--b" />
          <span className="nuda-ep2-gone__dust nuda-ep2-gone__dust--c" />
        </div>
        <span className="nuda-ep2-gone__code">410 — Gone</span>
        <p className="nuda-ep2-gone__title">This page is gone for good</p>
        <p className="nuda-ep2-gone__sub">The content was permanently removed or archived.</p>
        <div className="nuda-ep2-gone__actions">
          <button className="nuda-ep2-gone__btn nuda-ep2-gone__btn--primary" type="button">Go home</button>
          <button className="nuda-ep2-gone__btn" type="button">Browse archive</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ep2-gone{display:flex;flex-direction:column;align-items:center;gap:6px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-gone__icon{position:relative;width:52px;height:52px;display:flex;align-items:center;justify-content:center;color:#8a8a8a}
      .nuda-ep2-gone__icon svg{width:30px;height:30px}
      .nuda-ep2-gone__dust{position:absolute;width:3px;height:3px;border-radius:50%;background:#e4ff54;opacity:0}
      .nuda-ep2-gone__dust--a{top:10px;left:12px;animation:_nuda-ep2gone-dust 3s ease-in-out infinite}
      .nuda-ep2-gone__dust--b{top:6px;right:14px;animation:_nuda-ep2gone-dust 3s ease-in-out .8s infinite}
      .nuda-ep2-gone__dust--c{bottom:14px;left:22px;animation:_nuda-ep2gone-dust 3s ease-in-out 1.6s infinite}
      .nuda-ep2-gone__code{font-size:9px;font-family:ui-monospace,monospace;font-weight:700;letter-spacing:.1em;color:#8a8a8a;text-transform:uppercase;padding:2px 8px;background:rgba(255,255,255,.05);border-radius:99px;border:1px solid rgba(255,255,255,.08)}
      .nuda-ep2-gone__title{margin:4px 0 0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-gone__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-gone__actions{display:flex;gap:8px;margin-top:6px}
      .nuda-ep2-gone__btn{min-height:44px;padding:0 14px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#cfcfcf;font-size:11.5px;font-weight:600;cursor:pointer;transition:background .2s}
      .nuda-ep2-gone__btn:hover{background:rgba(255,255,255,.08)}
      .nuda-ep2-gone__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ep2-gone__btn--primary{background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.3);color:#e4ff54}
      .nuda-ep2-gone__btn--primary:hover{background:rgba(228,255,84,.18)}
      @keyframes _nuda-ep2gone-dust{0%{transform:translateY(0) scale(1);opacity:0}30%{opacity:.8}100%{transform:translateY(-22px) scale(.4);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-gone__dust{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-gone">
  <div class="nuda-ep2-gone__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 8L12 4 3 8l9 4 9-4z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </svg>
    <span class="nuda-ep2-gone__dust nuda-ep2-gone__dust--a"></span>
    <span class="nuda-ep2-gone__dust nuda-ep2-gone__dust--b"></span>
    <span class="nuda-ep2-gone__dust nuda-ep2-gone__dust--c"></span>
  </div>
  <span class="nuda-ep2-gone__code">410 — Gone</span>
  <p class="nuda-ep2-gone__title">This page is gone for good</p>
  <p class="nuda-ep2-gone__sub">The content was permanently removed or archived.</p>
  <div class="nuda-ep2-gone__actions">
    <button class="nuda-ep2-gone__btn nuda-ep2-gone__btn--primary" type="button">Go home</button>
    <button class="nuda-ep2-gone__btn" type="button">Browse archive</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Payment Required / Subscription Lapsed ─────────────── */
  {
    id: "ep2-payment-required",
    name: "Payment Required Notice",
    category: CAT,
    preview: (
      <div className="nuda-ep2-payment-required">
        <div className="nuda-ep2-payment-required__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
          </svg>
          <span className="nuda-ep2-payment-required__lock">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 018 0v3" />
            </svg>
          </span>
        </div>
        <span className="nuda-ep2-payment-required__chip">Pro plan · Past due</span>
        <p className="nuda-ep2-payment-required__title" role="alert">Your subscription has lapsed</p>
        <p className="nuda-ep2-payment-required__sub">Renew your plan to keep access to this feature.</p>
        <div className="nuda-ep2-payment-required__actions">
          <button className="nuda-ep2-payment-required__btn nuda-ep2-payment-required__btn--primary" type="button">Update billing</button>
          <button className="nuda-ep2-payment-required__btn" type="button">Go home</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ep2-payment-required{display:flex;flex-direction:column;align-items:center;gap:6px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-payment-required__icon{position:relative;width:52px;height:34px;display:flex;align-items:center;justify-content:center;color:#8a8a8a;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:8px;margin-bottom:6px;animation:_nuda-ep2paymentrequired-glow 2.6s ease-in-out infinite}
      .nuda-ep2-payment-required__icon svg{width:26px;height:20px}
      .nuda-ep2-payment-required__lock{position:absolute;bottom:-8px;right:-8px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:#ff6b6b;color:#0a0a0a;border-radius:50%;border:2px solid #101010}
      .nuda-ep2-payment-required__lock svg{width:11px;height:11px}
      .nuda-ep2-payment-required__chip{font-size:9px;font-family:ui-monospace,monospace;font-weight:700;letter-spacing:.06em;color:#ff6b6b;padding:2px 8px;background:rgba(255,107,107,.08);border-radius:99px;border:1px solid rgba(255,107,107,.2)}
      .nuda-ep2-payment-required__title{margin:4px 0 0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-payment-required__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-payment-required__actions{display:flex;gap:8px;margin-top:6px}
      .nuda-ep2-payment-required__btn{min-height:44px;padding:0 14px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#cfcfcf;font-size:11.5px;font-weight:600;cursor:pointer;transition:background .2s}
      .nuda-ep2-payment-required__btn:hover{background:rgba(255,255,255,.08)}
      .nuda-ep2-payment-required__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ep2-payment-required__btn--primary{background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.3);color:#e4ff54}
      .nuda-ep2-payment-required__btn--primary:hover{background:rgba(228,255,84,.18)}
      @keyframes _nuda-ep2paymentrequired-glow{0%,100%{box-shadow:0 0 0 0 rgba(255,107,107,0)}50%{box-shadow:0 0 0 6px rgba(255,107,107,.08)}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-payment-required__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-payment-required">
  <div class="nuda-ep2-payment-required__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
    <span class="nuda-ep2-payment-required__lock">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </svg>
    </span>
  </div>
  <span class="nuda-ep2-payment-required__chip">Pro plan · Past due</span>
  <p class="nuda-ep2-payment-required__title" role="alert">Your subscription has lapsed</p>
  <p class="nuda-ep2-payment-required__sub">Renew your plan to keep access to this feature.</p>
  <div class="nuda-ep2-payment-required__actions">
    <button class="nuda-ep2-payment-required__btn nuda-ep2-payment-required__btn--primary" type="button">Update billing</button>
    <button class="nuda-ep2-payment-required__btn" type="button">Go home</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Browser Unsupported ─────────────── */
  {
    id: "ep2-browser-unsupported",
    name: "Browser Unsupported Notice",
    category: CAT,
    preview: (
      <div className="nuda-ep2-browser-unsupported">
        <div className="nuda-ep2-browser-unsupported__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 8h20" />
            <circle cx="5.5" cy="6" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="nuda-ep2-browser-unsupported__bang">!</span>
        </div>
        <p className="nuda-ep2-browser-unsupported__title">Browser not supported</p>
        <p className="nuda-ep2-browser-unsupported__sub">Please update your browser, or switch to a modern one, to continue.</p>
        <div className="nuda-ep2-browser-unsupported__row" aria-hidden="true">
          <span className="nuda-ep2-browser-unsupported__dot" />
          <span className="nuda-ep2-browser-unsupported__dot" />
          <span className="nuda-ep2-browser-unsupported__dot" />
          <span className="nuda-ep2-browser-unsupported__dot" />
        </div>
        <button className="nuda-ep2-browser-unsupported__btn" type="button">Update browser</button>
      </div>
    ),
    cssInline: `
      .nuda-ep2-browser-unsupported{display:flex;flex-direction:column;align-items:center;gap:6px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-browser-unsupported__icon{position:relative;width:52px;height:40px;display:flex;align-items:center;justify-content:center;color:#8a8a8a;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:8px;margin-bottom:6px}
      .nuda-ep2-browser-unsupported__icon svg{width:28px;height:22px}
      .nuda-ep2-browser-unsupported__bang{position:absolute;top:-8px;right:-8px;width:18px;height:18px;display:flex;align-items:center;justify-content:center;background:#f5a623;color:#0a0a0a;border-radius:50%;font-size:11px;font-weight:800;border:2px solid #101010;animation:_nuda-ep2browserunsupported-shake 2.6s ease-in-out infinite}
      .nuda-ep2-browser-unsupported__title{margin:4px 0 0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-browser-unsupported__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-browser-unsupported__row{display:flex;gap:8px;margin-top:4px}
      .nuda-ep2-browser-unsupported__dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.14);animation:_nuda-ep2browserunsupported-fade 2.4s ease-in-out infinite}
      .nuda-ep2-browser-unsupported__dot:nth-child(2){animation-delay:.2s}
      .nuda-ep2-browser-unsupported__dot:nth-child(3){animation-delay:.4s}
      .nuda-ep2-browser-unsupported__dot:nth-child(4){animation-delay:.6s}
      .nuda-ep2-browser-unsupported__btn{margin-top:6px;min-height:44px;padding:0 18px;border-radius:10px;border:1px solid rgba(228,255,84,.3);background:rgba(228,255,84,.1);color:#e4ff54;font-size:12px;font-weight:700;cursor:pointer;transition:background .2s}
      .nuda-ep2-browser-unsupported__btn:hover{background:rgba(228,255,84,.18)}
      .nuda-ep2-browser-unsupported__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ep2browserunsupported-shake{0%,90%,100%{transform:rotate(0)}92%{transform:rotate(-10deg)}94%{transform:rotate(10deg)}96%{transform:rotate(-8deg)}98%{transform:rotate(6deg)}}
      @keyframes _nuda-ep2browserunsupported-fade{0%,100%{opacity:.25}50%{opacity:.9}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-browser-unsupported__bang{animation:none}.nuda-ep2-browser-unsupported__dot{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-browser-unsupported">
  <div class="nuda-ep2-browser-unsupported__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8h20" />
      <circle cx="5.5" cy="6" r="0.5" fill="currentColor" stroke="none" />
    </svg>
    <span class="nuda-ep2-browser-unsupported__bang">!</span>
  </div>
  <p class="nuda-ep2-browser-unsupported__title">Browser not supported</p>
  <p class="nuda-ep2-browser-unsupported__sub">Please update your browser, or switch to a modern one, to continue.</p>
  <div class="nuda-ep2-browser-unsupported__row" aria-hidden="true">
    <span class="nuda-ep2-browser-unsupported__dot"></span>
    <span class="nuda-ep2-browser-unsupported__dot"></span>
    <span class="nuda-ep2-browser-unsupported__dot"></span>
    <span class="nuda-ep2-browser-unsupported__dot"></span>
  </div>
  <button class="nuda-ep2-browser-unsupported__btn" type="button">Update browser</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Deploy In Progress ─────────────── */
  {
    id: "ep2-deploy-progress",
    name: "Deploy In Progress",
    category: CAT,
    preview: (
      <div className="nuda-ep2-deploy-progress">
        <div className="nuda-ep2-deploy-progress__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,.1)" strokeWidth="2.5" />
            <path d="M12 3a9 9 0 019 9" stroke="#e4ff54" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="nuda-ep2-deploy-progress__title" aria-live="polite">Deploying your update</p>
        <p className="nuda-ep2-deploy-progress__sub">This should only take a minute. The page will refresh automatically.</p>
        <div className="nuda-ep2-deploy-progress__bar">
          <div className="nuda-ep2-deploy-progress__bar-fill" />
        </div>
        <span className="nuda-ep2-deploy-progress__pct">Build 3 of 4 · Almost done</span>
      </div>
    ),
    cssInline: `
      .nuda-ep2-deploy-progress{display:flex;flex-direction:column;align-items:center;gap:6px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-deploy-progress__spinner{width:44px;height:44px;margin-bottom:4px}
      .nuda-ep2-deploy-progress__spinner svg{width:100%;height:100%;animation:_nuda-ep2deployprogress-spin 1s linear infinite}
      .nuda-ep2-deploy-progress__title{margin:0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-deploy-progress__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-deploy-progress__bar{width:100%;max-width:190px;height:5px;background:rgba(255,255,255,.07);border-radius:99px;overflow:hidden;margin-top:8px}
      .nuda-ep2-deploy-progress__bar-fill{width:100%;height:100%;background:linear-gradient(90deg,#e4ff54,#9be564);border-radius:99px;transform-origin:left;transform:scaleX(.35);animation:_nuda-ep2deployprogress-fill 2.8s ease-in-out infinite}
      .nuda-ep2-deploy-progress__pct{font-size:10px;color:#666;font-family:ui-monospace,monospace}
      @keyframes _nuda-ep2deployprogress-spin{to{transform:rotate(360deg)}}
      @keyframes _nuda-ep2deployprogress-fill{0%{transform:scaleX(.15)}50%{transform:scaleX(.85)}100%{transform:scaleX(.35)}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-deploy-progress__spinner svg{animation:none}.nuda-ep2-deploy-progress__bar-fill{animation:none;transform:scaleX(.6)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-deploy-progress">
  <div class="nuda-ep2-deploy-progress__spinner" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,.1)" stroke-width="2.5" />
      <path d="M12 3a9 9 0 019 9" stroke="#e4ff54" stroke-width="2.5" stroke-linecap="round" />
    </svg>
  </div>
  <p class="nuda-ep2-deploy-progress__title" aria-live="polite">Deploying your update</p>
  <p class="nuda-ep2-deploy-progress__sub">This should only take a minute. The page will refresh automatically.</p>
  <div class="nuda-ep2-deploy-progress__bar">
    <div class="nuda-ep2-deploy-progress__bar-fill"></div>
  </div>
  <span class="nuda-ep2-deploy-progress__pct">Build 3 of 4 · Almost done</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Error With Copyable Id ─────────────── */
  {
    id: "ep2-error-id",
    name: "Error With Copyable Id",
    category: CAT,
    preview: (
      <div className="nuda-ep2-error-id">
        <div className="nuda-ep2-error-id__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4" />
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <p className="nuda-ep2-error-id__title" role="alert">Something went wrong</p>
        <p className="nuda-ep2-error-id__sub">An unexpected error occurred. Our team has been notified.</p>
        <div className="nuda-ep2-error-id__id">
          <code className="nuda-ep2-error-id__code">ERR-7F3A2C9D</code>
          <button
            className="nuda-ep2-error-id__copy"
            type="button"
            aria-label="Copy error id"
            onClick={(e) => {
              const btn = e.currentTarget;
              btn.classList.add("nuda-ep2-error-id__copy--done");
              setTimeout(() => btn.classList.remove("nuda-ep2-error-id__copy--done"), 1500);
            }}
          >
            <svg className="nuda-ep2-error-id__copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            <svg className="nuda-ep2-error-id__copy-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </div>
        <button className="nuda-ep2-error-id__btn" type="button">Reload page</button>
      </div>
    ),
    cssInline: `
      .nuda-ep2-error-id{display:flex;flex-direction:column;align-items:center;gap:6px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:270px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-error-id__icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;color:#ff6b6b;background:rgba(255,107,107,.08);border:1px solid rgba(255,107,107,.2);border-radius:50%;margin-bottom:4px;animation:_nuda-ep2errorid-pulse 2.2s ease-in-out infinite}
      .nuda-ep2-error-id__icon svg{width:22px;height:22px}
      .nuda-ep2-error-id__title{margin:0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-error-id__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-error-id__id{display:flex;align-items:center;gap:4px;margin-top:6px;padding:2px 2px 2px 12px;background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-ep2-error-id__code{color:#cfcfcf;font-size:10.5px;font-family:ui-monospace,monospace;letter-spacing:.02em}
      .nuda-ep2-error-id__copy{position:relative;width:44px;height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;border:none;border-radius:9px;background:rgba(255,255,255,.05);color:#999;cursor:pointer}
      .nuda-ep2-error-id__copy:hover{background:rgba(255,255,255,.1);color:#fafafa}
      .nuda-ep2-error-id__copy:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ep2-error-id__copy-icon{width:14px;height:14px;transition:opacity .2s,transform .2s}
      .nuda-ep2-error-id__copy-check{position:absolute;inset:0;margin:auto;width:14px;height:14px;color:#22c55e;opacity:0;transform:scale(.5);transition:opacity .2s,transform .2s}
      .nuda-ep2-error-id__copy--done .nuda-ep2-error-id__copy-icon{opacity:0;transform:scale(.5)}
      .nuda-ep2-error-id__copy--done .nuda-ep2-error-id__copy-check{opacity:1;transform:scale(1)}
      .nuda-ep2-error-id__btn{margin-top:6px;min-height:44px;padding:0 18px;border-radius:10px;border:1px solid rgba(228,255,84,.3);background:rgba(228,255,84,.1);color:#e4ff54;font-size:12px;font-weight:700;cursor:pointer;transition:background .2s}
      .nuda-ep2-error-id__btn:hover{background:rgba(228,255,84,.18)}
      .nuda-ep2-error-id__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ep2errorid-pulse{0%,100%{box-shadow:0 0 0 0 rgba(255,107,107,.25)}50%{box-shadow:0 0 0 6px rgba(255,107,107,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-error-id__icon{animation:none}.nuda-ep2-error-id__copy-icon,.nuda-ep2-error-id__copy-check{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-error-id">
  <div class="nuda-ep2-error-id__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 9v4" />
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 17h.01" />
    </svg>
  </div>
  <p class="nuda-ep2-error-id__title" role="alert">Something went wrong</p>
  <p class="nuda-ep2-error-id__sub">An unexpected error occurred. Our team has been notified.</p>
  <div class="nuda-ep2-error-id__id">
    <code class="nuda-ep2-error-id__code">ERR-7F3A2C9D</code>
    <button class="nuda-ep2-error-id__copy" type="button" aria-label="Copy error id">
      <svg class="nuda-ep2-error-id__copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
      <svg class="nuda-ep2-error-id__copy-check" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>
  </div>
  <button class="nuda-ep2-error-id__btn" type="button">Reload page</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Crash Boundary ─────────────── */
  {
    id: "ep2-crash-boundary",
    name: "Crash Boundary Fallback",
    category: CAT,
    preview: (
      <div className="nuda-ep2-crash-boundary">
        <div className="nuda-ep2-crash-boundary__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M4 4l7 7" />
            <path d="M20 20l-7-7" />
            <path d="M4 20l6-6" />
            <path d="M20 4l-6 6" />
          </svg>
        </div>
        <p className="nuda-ep2-crash-boundary__title" role="alert">The app crashed</p>
        <p className="nuda-ep2-crash-boundary__sub">A component failed to render. You can reload or send us a report.</p>
        <div className="nuda-ep2-crash-boundary__actions">
          <button className="nuda-ep2-crash-boundary__btn nuda-ep2-crash-boundary__btn--primary" type="button">Reload page</button>
          <button className="nuda-ep2-crash-boundary__btn" type="button">Report issue</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ep2-crash-boundary{display:flex;flex-direction:column;align-items:center;gap:6px;padding:22px 20px;background:#101010;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:260px;text-align:center;font-family:ui-sans-serif,system-ui}
      .nuda-ep2-crash-boundary__icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;color:#ff6b6b;background:rgba(255,107,107,.08);border:1px solid rgba(255,107,107,.2);border-radius:12px;margin-bottom:4px;animation:_nuda-ep2crashboundary-glitch 3.2s ease-in-out infinite}
      .nuda-ep2-crash-boundary__icon svg{width:24px;height:24px}
      .nuda-ep2-crash-boundary__title{margin:0;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-ep2-crash-boundary__sub{margin:0;color:#8a8a8a;font-size:11px;line-height:1.5;max-width:210px}
      .nuda-ep2-crash-boundary__actions{display:flex;gap:8px;margin-top:6px}
      .nuda-ep2-crash-boundary__btn{min-height:44px;padding:0 14px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#cfcfcf;font-size:11.5px;font-weight:600;cursor:pointer;transition:background .2s}
      .nuda-ep2-crash-boundary__btn:hover{background:rgba(255,255,255,.08)}
      .nuda-ep2-crash-boundary__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ep2-crash-boundary__btn--primary{background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.3);color:#e4ff54}
      .nuda-ep2-crash-boundary__btn--primary:hover{background:rgba(228,255,84,.18)}
      @keyframes _nuda-ep2crashboundary-glitch{0%,88%,100%{transform:translate(0,0);filter:none}90%{transform:translate(-1.5px,1px);filter:hue-rotate(15deg)}92%{transform:translate(1.5px,-1px);filter:hue-rotate(-10deg)}94%{transform:translate(0,0);filter:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ep2-crash-boundary__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ep2-crash-boundary">
  <div class="nuda-ep2-crash-boundary__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 4l7 7" />
      <path d="M20 20l-7-7" />
      <path d="M4 20l6-6" />
      <path d="M20 4l-6 6" />
    </svg>
  </div>
  <p class="nuda-ep2-crash-boundary__title" role="alert">The app crashed</p>
  <p class="nuda-ep2-crash-boundary__sub">A component failed to render. You can reload or send us a report.</p>
  <div class="nuda-ep2-crash-boundary__actions">
    <button class="nuda-ep2-crash-boundary__btn nuda-ep2-crash-boundary__btn--primary" type="button">Reload page</button>
    <button class="nuda-ep2-crash-boundary__btn" type="button">Report issue</button>
  </div>
</div>`,
      },
    ],
  },
];
