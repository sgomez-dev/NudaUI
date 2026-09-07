import type { NudaComponent } from "./types";

const CAT = "Login & Auth";

export const authExtra: NudaComponent[] = [
  /* ─────────────── 1. TOTP Ring Timer ─────────────── */
  {
    id: "au2-totp-ring",
    name: "TOTP Ring Timer",
    category: CAT,
    preview: (
      <div className="nuda-au2-totp-ring">
        <div className="nuda-au2-totp-ring__head">
          <svg className="nuda-au2-totp-ring__ring" aria-hidden="true" viewBox="0 0 44 44">
            <circle className="nuda-au2-totp-ring__track" cx="22" cy="22" r="19" />
            <circle className="nuda-au2-totp-ring__prog" cx="22" cy="22" r="19" />
          </svg>
          <div className="nuda-au2-totp-ring__label">
            <span className="nuda-au2-totp-ring__title">Two-factor code</span>
            <span className="nuda-au2-totp-ring__sub">Refreshes every 30s</span>
          </div>
        </div>
        <form className="nuda-au2-totp-ring__form" onSubmit={(e) => e.preventDefault()}>
          <label className="nuda-au2-totp-ring__fieldlabel" htmlFor="au2-totp-code">
            6-digit code
          </label>
          <input
            id="au2-totp-code"
            className="nuda-au2-totp-ring__input"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            maxLength={6}
            placeholder="••••••"
            required
          />
          <button className="nuda-au2-totp-ring__cta" type="submit">
            Verify
          </button>
        </form>
      </div>
    ),
    cssInline: `
      .nuda-au2-totp-ring{display:flex;flex-direction:column;gap:14px;padding:22px;width:100%;max-width:280px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-au2-totp-ring__head{display:flex;align-items:center;gap:12px}
      .nuda-au2-totp-ring__ring{width:44px;height:44px;flex:0 0 auto;transform:rotate(-90deg)}
      .nuda-au2-totp-ring__track{fill:none;stroke:rgba(255,255,255,.1);stroke-width:3}
      .nuda-au2-totp-ring__prog{fill:none;stroke:#e4ff54;stroke-width:3;stroke-linecap:round;stroke-dasharray:119.4;stroke-dashoffset:0;animation:nuda-au2-totp-ring-drain 30s linear infinite;will-change:stroke-dashoffset}
      .nuda-au2-totp-ring__label{display:flex;flex-direction:column;gap:2px;min-width:0}
      .nuda-au2-totp-ring__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-au2-totp-ring__sub{color:#777;font-size:11px}
      .nuda-au2-totp-ring__form{display:flex;flex-direction:column;gap:10px}
      .nuda-au2-totp-ring__fieldlabel{color:#cfcfcf;font-size:11px}
      .nuda-au2-totp-ring__input{width:100%;box-sizing:border-box;padding:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;font-size:16px;letter-spacing:.35em;text-align:center;outline:none;transition:border-color .2s,box-shadow .2s}
      .nuda-au2-totp-ring__input:focus-visible{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-au2-totp-ring__cta{min-height:44px;padding:10px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
      .nuda-au2-totp-ring__cta:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .nuda-au2-totp-ring__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-au2-totp-ring-drain{0%{stroke-dashoffset:0}100%{stroke-dashoffset:119.4}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-totp-ring__prog{animation:none;stroke-dashoffset:40}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-totp-ring">
  <div class="nuda-au2-totp-ring__head">
    <svg class="nuda-au2-totp-ring__ring" aria-hidden="true" viewBox="0 0 44 44">
      <circle class="nuda-au2-totp-ring__track" cx="22" cy="22" r="19"></circle>
      <circle class="nuda-au2-totp-ring__prog" cx="22" cy="22" r="19"></circle>
    </svg>
    <div class="nuda-au2-totp-ring__label">
      <span class="nuda-au2-totp-ring__title">Two-factor code</span>
      <span class="nuda-au2-totp-ring__sub">Refreshes every 30s</span>
    </div>
  </div>
  <form class="nuda-au2-totp-ring__form">
    <label class="nuda-au2-totp-ring__fieldlabel" for="au2-totp-code">6-digit code</label>
    <input id="au2-totp-code" class="nuda-au2-totp-ring__input" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" maxlength="6" placeholder="••••••" required />
    <button class="nuda-au2-totp-ring__cta" type="submit">Verify</button>
  </form>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. SMS Resend Cooldown ─────────────── */
  {
    id: "au2-sms-cooldown",
    name: "SMS Resend Cooldown",
    category: CAT,
    preview: (
      <div className="nuda-au2-sms-cooldown">
        <div className="nuda-au2-sms-cooldown__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="2" width="12" height="20" rx="2" />
            <line x1="11" y1="18" x2="13" y2="18" />
          </svg>
        </div>
        <div className="nuda-au2-sms-cooldown__title">Verify your phone</div>
        <p className="nuda-au2-sms-cooldown__sub">Code sent to +1 •••-•••-4821</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="nuda-au2-sms-cooldown__label" htmlFor="au2-sms-code">
            One-time code
          </label>
          <input
            id="au2-sms-code"
            className="nuda-au2-sms-cooldown__input"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            placeholder="000000"
          />
        </form>
        <button className="nuda-au2-sms-cooldown__resend" type="button" disabled aria-disabled="true">
          <span className="nuda-au2-sms-cooldown__bar" aria-hidden="true"></span>
          <span className="nuda-au2-sms-cooldown__resendtext" role="status">
            Resend in <span className="nuda-au2-sms-cooldown__count">20</span>s
          </span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-au2-sms-cooldown{display:flex;flex-direction:column;gap:10px;padding:22px;width:100%;max-width:280px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px;text-align:left}
      .nuda-au2-sms-cooldown__icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(228,255,84,.1);color:#e4ff54}
      .nuda-au2-sms-cooldown__icon svg{width:18px;height:18px}
      .nuda-au2-sms-cooldown__title{color:#fafafa;font-size:14px;font-weight:600;margin-top:4px}
      .nuda-au2-sms-cooldown__sub{color:#777;font-size:11px;margin:0 0 4px}
      .nuda-au2-sms-cooldown__label{color:#cfcfcf;font-size:11px;display:block;margin-bottom:6px}
      .nuda-au2-sms-cooldown__input{width:100%;box-sizing:border-box;padding:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;font-size:15px;letter-spacing:.3em;text-align:center;outline:none;transition:border-color .2s,box-shadow .2s}
      .nuda-au2-sms-cooldown__input:focus-visible{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-au2-sms-cooldown__resend{position:relative;overflow:hidden;min-height:44px;padding:0 12px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#777;font-size:12px;cursor:not-allowed}
      .nuda-au2-sms-cooldown__resend:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-au2-sms-cooldown__bar{position:absolute;inset:0;background:rgba(228,255,84,.14);transform-origin:left;transform:scaleX(1);animation:nuda-au2-sms-cooldown-drain 20s linear infinite}
      .nuda-au2-sms-cooldown__resendtext{position:relative;z-index:1}
      .nuda-au2-sms-cooldown__count{color:#e4ff54;font-variant-numeric:tabular-nums}
      @keyframes nuda-au2-sms-cooldown-drain{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-sms-cooldown__bar{animation:none;transform:scaleX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-sms-cooldown">
  <div class="nuda-au2-sms-cooldown__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2"></rect>
      <line x1="11" y1="18" x2="13" y2="18"></line>
    </svg>
  </div>
  <div class="nuda-au2-sms-cooldown__title">Verify your phone</div>
  <p class="nuda-au2-sms-cooldown__sub">Code sent to +1 •••-•••-4821</p>
  <form>
    <label class="nuda-au2-sms-cooldown__label" for="au2-sms-code">One-time code</label>
    <input id="au2-sms-code" class="nuda-au2-sms-cooldown__input" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000" />
  </form>
  <button class="nuda-au2-sms-cooldown__resend" type="button" disabled aria-disabled="true">
    <span class="nuda-au2-sms-cooldown__bar" aria-hidden="true"></span>
    <span class="nuda-au2-sms-cooldown__resendtext" role="status">Resend in <span class="nuda-au2-sms-cooldown__count">20</span>s</span>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Device Session List ─────────────── */
  {
    id: "au2-device-sessions",
    name: "Device Session List",
    category: CAT,
    preview: (
      <div className="nuda-au2-device-sessions">
        <div className="nuda-au2-device-sessions__title">Active sessions</div>
        <ul className="nuda-au2-device-sessions__list">
          <li className="nuda-au2-device-sessions__item">
            <svg className="nuda-au2-device-sessions__icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <line x1="2" y1="20" x2="22" y2="20" />
            </svg>
            <div className="nuda-au2-device-sessions__meta">
              <span className="nuda-au2-device-sessions__name">MacBook Pro — Chrome</span>
              <span className="nuda-au2-device-sessions__time">Active now</span>
            </div>
            <span className="nuda-au2-device-sessions__badge">This device</span>
          </li>
          <li className="nuda-au2-device-sessions__item">
            <svg className="nuda-au2-device-sessions__icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            <div className="nuda-au2-device-sessions__meta">
              <span className="nuda-au2-device-sessions__name">iPhone 15 — Safari</span>
              <span className="nuda-au2-device-sessions__time">2 hours ago</span>
            </div>
            <button className="nuda-au2-device-sessions__revoke" type="button" aria-label="Revoke session on iPhone 15">
              Revoke
            </button>
          </li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-au2-device-sessions{display:flex;flex-direction:column;gap:12px;padding:20px;width:100%;max-width:300px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-au2-device-sessions__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-au2-device-sessions__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
      .nuda-au2-device-sessions__item{display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;opacity:0;transform:translateY(6px);animation:nuda-au2-device-sessions-in .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-au2-device-sessions__item:nth-child(2){animation-delay:.1s}
      .nuda-au2-device-sessions__icon{width:20px;height:20px;flex:0 0 auto;color:#a0a0a8}
      .nuda-au2-device-sessions__meta{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1 1 auto}
      .nuda-au2-device-sessions__name{color:#e5e5e5;font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-au2-device-sessions__time{color:#777;font-size:10.5px}
      .nuda-au2-device-sessions__badge{flex:0 0 auto;padding:4px 8px;background:rgba(228,255,84,.12);color:#e4ff54;border-radius:999px;font-size:9.5px;font-weight:600;text-transform:uppercase;letter-spacing:.04em}
      .nuda-au2-device-sessions__revoke{flex:0 0 auto;min-width:44px;min-height:44px;padding:0 10px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#f3a3a3;font-size:11px;font-weight:600;cursor:pointer;transition:background-color .2s,border-color .2s}
      .nuda-au2-device-sessions__revoke:hover{background:rgba(255,90,90,.1);border-color:rgba(255,90,90,.3)}
      .nuda-au2-device-sessions__revoke:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-au2-device-sessions-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-device-sessions__item{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-device-sessions">
  <div class="nuda-au2-device-sessions__title">Active sessions</div>
  <ul class="nuda-au2-device-sessions__list">
    <li class="nuda-au2-device-sessions__item">
      <svg class="nuda-au2-device-sessions__icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2"></rect>
        <line x1="2" y1="20" x2="22" y2="20"></line>
      </svg>
      <div class="nuda-au2-device-sessions__meta">
        <span class="nuda-au2-device-sessions__name">MacBook Pro — Chrome</span>
        <span class="nuda-au2-device-sessions__time">Active now</span>
      </div>
      <span class="nuda-au2-device-sessions__badge">This device</span>
    </li>
    <li class="nuda-au2-device-sessions__item">
      <svg class="nuda-au2-device-sessions__icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2"></rect>
        <line x1="11" y1="18" x2="13" y2="18"></line>
      </svg>
      <div class="nuda-au2-device-sessions__meta">
        <span class="nuda-au2-device-sessions__name">iPhone 15 — Safari</span>
        <span class="nuda-au2-device-sessions__time">2 hours ago</span>
      </div>
      <button class="nuda-au2-device-sessions__revoke" type="button" aria-label="Revoke session on iPhone 15">Revoke</button>
    </li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. SSO Domain Lookup ─────────────── */
  {
    id: "au2-sso-domain",
    name: "SSO Domain Lookup",
    category: CAT,
    preview: (
      <div className="nuda-au2-sso-domain">
        <div className="nuda-au2-sso-domain__title">Sign in with SSO</div>
        <form className="nuda-au2-sso-domain__form" onSubmit={(e) => e.preventDefault()}>
          <label className="nuda-au2-sso-domain__label" htmlFor="au2-sso-email">
            Work email
          </label>
          <input
            id="au2-sso-email"
            className="nuda-au2-sso-domain__input"
            type="email"
            autoComplete="email"
            defaultValue="you@example.com"
            required
          />
          <div className="nuda-au2-sso-domain__detected" role="status">
            <svg className="nuda-au2-sso-domain__check" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
            <span>
              SSO found for <strong>example.com</strong>
            </span>
          </div>
          <button className="nuda-au2-sso-domain__cta" type="submit">
            Continue with SSO
          </button>
        </form>
      </div>
    ),
    cssInline: `
      .nuda-au2-sso-domain{display:flex;flex-direction:column;gap:12px;padding:22px;width:100%;max-width:290px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-au2-sso-domain__title{color:#fafafa;font-size:14px;font-weight:600}
      .nuda-au2-sso-domain__form{display:flex;flex-direction:column;gap:10px}
      .nuda-au2-sso-domain__label{color:#cfcfcf;font-size:11px}
      .nuda-au2-sso-domain__input{width:100%;box-sizing:border-box;padding:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;font-size:13px;outline:none;transition:border-color .2s,box-shadow .2s}
      .nuda-au2-sso-domain__input:focus-visible{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-au2-sso-domain__detected{display:flex;align-items:center;gap:8px;padding:9px 10px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.25);border-radius:10px;color:#cfe89a;font-size:11.5px;opacity:0;transform:scale(.9);animation:nuda-au2-sso-domain-pop .45s cubic-bezier(.16,1,.3,1) .2s both}
      .nuda-au2-sso-domain__detected strong{color:#e4ff54;font-weight:600}
      .nuda-au2-sso-domain__check{width:14px;height:14px;flex:0 0 auto;color:#e4ff54}
      .nuda-au2-sso-domain__cta{min-height:44px;padding:10px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
      .nuda-au2-sso-domain__cta:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .nuda-au2-sso-domain__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-au2-sso-domain-pop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-sso-domain__detected{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-sso-domain">
  <div class="nuda-au2-sso-domain__title">Sign in with SSO</div>
  <form class="nuda-au2-sso-domain__form">
    <label class="nuda-au2-sso-domain__label" for="au2-sso-email">Work email</label>
    <input id="au2-sso-email" class="nuda-au2-sso-domain__input" type="email" autocomplete="email" value="you@example.com" required />
    <div class="nuda-au2-sso-domain__detected" role="status">
      <svg class="nuda-au2-sso-domain__check" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 8.5l3 3 7-7" />
      </svg>
      <span>SSO found for <strong>example.com</strong></span>
    </div>
    <button class="nuda-au2-sso-domain__cta" type="submit">Continue with SSO</button>
  </form>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Password Policy Checklist ─────────────── */
  {
    id: "au2-password-policy",
    name: "Password Policy Checklist",
    category: CAT,
    preview: (
      <form className="nuda-au2-password-policy" onSubmit={(e) => e.preventDefault()}>
        <label className="nuda-au2-password-policy__label" htmlFor="au2-pw-new">
          New password
        </label>
        <input
          id="au2-pw-new"
          className="nuda-au2-password-policy__input"
          type="password"
          autoComplete="new-password"
          defaultValue="Sunrise!482"
          required
        />
        <ul className="nuda-au2-password-policy__list">
          <li className="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
            <svg className="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
            <span>At least 8 characters</span>
          </li>
          <li className="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
            <svg className="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
            <span>One uppercase letter</span>
          </li>
          <li className="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
            <svg className="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
            <span>One number</span>
          </li>
          <li className="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
            <svg className="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 8.5l3 3 7-7" />
            </svg>
            <span>One symbol</span>
          </li>
        </ul>
        <button className="nuda-au2-password-policy__cta" type="submit">
          Create account
        </button>
      </form>
    ),
    cssInline: `
      .nuda-au2-password-policy{display:flex;flex-direction:column;gap:10px;padding:22px;width:100%;max-width:290px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-au2-password-policy__label{color:#cfcfcf;font-size:11px}
      .nuda-au2-password-policy__input{width:100%;box-sizing:border-box;padding:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;font-size:13px;outline:none;transition:border-color .2s,box-shadow .2s}
      .nuda-au2-password-policy__input:focus-visible{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-au2-password-policy__list{list-style:none;margin:2px 0 0;padding:0;display:flex;flex-direction:column;gap:6px}
      .nuda-au2-password-policy__item{display:flex;align-items:center;gap:8px;color:#777;font-size:11.5px}
      .nuda-au2-password-policy__item--ok{color:#cfcfcf}
      .nuda-au2-password-policy__check{width:15px;height:15px;flex:0 0 auto;fill:none;stroke:#e4ff54;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      .nuda-au2-password-policy__item--ok .nuda-au2-password-policy__check{stroke-dasharray:16;stroke-dashoffset:16;animation:nuda-au2-password-policy-draw .4s ease forwards}
      .nuda-au2-password-policy__item:nth-child(1) .nuda-au2-password-policy__check{animation-delay:.1s}
      .nuda-au2-password-policy__item:nth-child(2) .nuda-au2-password-policy__check{animation-delay:.28s}
      .nuda-au2-password-policy__item:nth-child(3) .nuda-au2-password-policy__check{animation-delay:.46s}
      .nuda-au2-password-policy__item:nth-child(4) .nuda-au2-password-policy__check{animation-delay:.64s}
      .nuda-au2-password-policy__cta{min-height:44px;margin-top:4px;padding:10px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
      .nuda-au2-password-policy__cta:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .nuda-au2-password-policy__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-au2-password-policy-draw{to{stroke-dashoffset:0}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-password-policy__item--ok .nuda-au2-password-policy__check{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<form class="nuda-au2-password-policy">
  <label class="nuda-au2-password-policy__label" for="au2-pw-new">New password</label>
  <input id="au2-pw-new" class="nuda-au2-password-policy__input" type="password" autocomplete="new-password" value="Sunrise!482" required />
  <ul class="nuda-au2-password-policy__list">
    <li class="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
      <svg class="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" /></svg>
      <span>At least 8 characters</span>
    </li>
    <li class="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
      <svg class="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" /></svg>
      <span>One uppercase letter</span>
    </li>
    <li class="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
      <svg class="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" /></svg>
      <span>One number</span>
    </li>
    <li class="nuda-au2-password-policy__item nuda-au2-password-policy__item--ok">
      <svg class="nuda-au2-password-policy__check" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" /></svg>
      <span>One symbol</span>
    </li>
  </ul>
  <button class="nuda-au2-password-policy__cta" type="submit">Create account</button>
</form>`,
      },
    ],
  },

  /* ─────────────── 6. Re-auth Modal ─────────────── */
  {
    id: "au2-reauth-modal",
    name: "Re-auth Modal",
    category: CAT,
    preview: (
      <div className="nuda-au2-reauth-modal" role="dialog" aria-modal="true" aria-labelledby="au2-reauth-title">
        <div className="nuda-au2-reauth-modal__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </div>
        <h3 className="nuda-au2-reauth-modal__title" id="au2-reauth-title">
          Session expired
        </h3>
        <p className="nuda-au2-reauth-modal__sub">Enter your password to continue.</p>
        <form className="nuda-au2-reauth-modal__form" onSubmit={(e) => e.preventDefault()}>
          <label className="nuda-au2-reauth-modal__label" htmlFor="au2-reauth-pw">
            Password
          </label>
          <input
            id="au2-reauth-pw"
            className="nuda-au2-reauth-modal__input"
            type="password"
            autoComplete="current-password"
            required
          />
          <div className="nuda-au2-reauth-modal__actions">
            <button className="nuda-au2-reauth-modal__cancel" type="button">
              Sign out
            </button>
            <button className="nuda-au2-reauth-modal__cta" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    ),
    cssInline: `
      .nuda-au2-reauth-modal{position:relative;display:flex;flex-direction:column;gap:10px;padding:24px;width:100%;max-width:300px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.5);opacity:0;transform:scale(.94) translateY(6px);animation:nuda-au2-reauth-modal-in .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-au2-reauth-modal__icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(228,255,84,.1);color:#e4ff54}
      .nuda-au2-reauth-modal__icon svg{width:18px;height:18px}
      .nuda-au2-reauth-modal__title{color:#fafafa;font-size:15px;font-weight:600;margin:2px 0 0}
      .nuda-au2-reauth-modal__sub{color:#a0a0a8;font-size:11.5px;margin:0}
      .nuda-au2-reauth-modal__form{display:flex;flex-direction:column;gap:10px;margin-top:4px}
      .nuda-au2-reauth-modal__label{color:#cfcfcf;font-size:11px}
      .nuda-au2-reauth-modal__input{width:100%;box-sizing:border-box;padding:12px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;font-size:13px;outline:none;transition:border-color .2s,box-shadow .2s}
      .nuda-au2-reauth-modal__input:focus-visible{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-au2-reauth-modal__actions{display:flex;gap:8px;margin-top:2px}
      .nuda-au2-reauth-modal__cancel{flex:1 1 0;min-height:44px;padding:10px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#cfcfcf;font-size:12.5px;font-weight:600;cursor:pointer;transition:background-color .2s}
      .nuda-au2-reauth-modal__cancel:hover{background:rgba(255,255,255,.06)}
      .nuda-au2-reauth-modal__cancel:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-au2-reauth-modal__cta{flex:1 1 0;min-height:44px;padding:10px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
      .nuda-au2-reauth-modal__cta:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .nuda-au2-reauth-modal__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-au2-reauth-modal-in{from{opacity:0;transform:scale(.94) translateY(6px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-reauth-modal{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-reauth-modal" role="dialog" aria-modal="true" aria-labelledby="au2-reauth-title">
  <div class="nuda-au2-reauth-modal__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2"></rect>
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  </div>
  <h3 class="nuda-au2-reauth-modal__title" id="au2-reauth-title">Session expired</h3>
  <p class="nuda-au2-reauth-modal__sub">Enter your password to continue.</p>
  <form class="nuda-au2-reauth-modal__form">
    <label class="nuda-au2-reauth-modal__label" for="au2-reauth-pw">Password</label>
    <input id="au2-reauth-pw" class="nuda-au2-reauth-modal__input" type="password" autocomplete="current-password" required />
    <div class="nuda-au2-reauth-modal__actions">
      <button class="nuda-au2-reauth-modal__cancel" type="button">Sign out</button>
      <button class="nuda-au2-reauth-modal__cta" type="submit">Continue</button>
    </div>
  </form>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Workspace Picker ─────────────── */
  {
    id: "au2-workspace-picker",
    name: "Workspace Picker",
    category: CAT,
    preview: (
      <div className="nuda-au2-workspace-picker">
        <div className="nuda-au2-workspace-picker__title">Choose a workspace</div>
        <div className="nuda-au2-workspace-picker__list">
          <button className="nuda-au2-workspace-picker__item" type="button">
            <span className="nuda-au2-workspace-picker__avatar" aria-hidden="true">
              A
            </span>
            <span className="nuda-au2-workspace-picker__meta">
              <span className="nuda-au2-workspace-picker__name">Acme Inc</span>
              <span className="nuda-au2-workspace-picker__count">12 members</span>
            </span>
          </button>
          <button className="nuda-au2-workspace-picker__item" type="button">
            <span className="nuda-au2-workspace-picker__avatar" aria-hidden="true">
              B
            </span>
            <span className="nuda-au2-workspace-picker__meta">
              <span className="nuda-au2-workspace-picker__name">Bright Labs</span>
              <span className="nuda-au2-workspace-picker__count">4 members</span>
            </span>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-au2-workspace-picker{display:flex;flex-direction:column;gap:12px;padding:20px;width:100%;max-width:290px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-au2-workspace-picker__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-au2-workspace-picker__list{display:flex;flex-direction:column;gap:8px}
      .nuda-au2-workspace-picker__item{display:flex;align-items:center;gap:10px;min-height:44px;padding:8px 10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:12px;color:#e5e5e5;cursor:pointer;text-align:left;opacity:0;transform:translateX(-6px);animation:nuda-au2-workspace-picker-in .45s cubic-bezier(.16,1,.3,1) both;transition:border-color .2s,transform .2s}
      .nuda-au2-workspace-picker__item:nth-child(2){animation-delay:.1s}
      .nuda-au2-workspace-picker__item:hover{border-color:rgba(228,255,84,.35);transform:translateX(2px)}
      .nuda-au2-workspace-picker__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-au2-workspace-picker__avatar{width:30px;height:30px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;border-radius:9px;background:rgba(228,255,84,.14);color:#e4ff54;font-size:12px;font-weight:700}
      .nuda-au2-workspace-picker__meta{display:flex;flex-direction:column;gap:1px;min-width:0}
      .nuda-au2-workspace-picker__name{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-au2-workspace-picker__count{color:#777;font-size:10.5px}
      @keyframes nuda-au2-workspace-picker-in{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-workspace-picker__item{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-workspace-picker">
  <div class="nuda-au2-workspace-picker__title">Choose a workspace</div>
  <div class="nuda-au2-workspace-picker__list">
    <button class="nuda-au2-workspace-picker__item" type="button">
      <span class="nuda-au2-workspace-picker__avatar" aria-hidden="true">A</span>
      <span class="nuda-au2-workspace-picker__meta">
        <span class="nuda-au2-workspace-picker__name">Acme Inc</span>
        <span class="nuda-au2-workspace-picker__count">12 members</span>
      </span>
    </button>
    <button class="nuda-au2-workspace-picker__item" type="button">
      <span class="nuda-au2-workspace-picker__avatar" aria-hidden="true">B</span>
      <span class="nuda-au2-workspace-picker__meta">
        <span class="nuda-au2-workspace-picker__name">Bright Labs</span>
        <span class="nuda-au2-workspace-picker__count">4 members</span>
      </span>
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Lockout Card ─────────────── */
  {
    id: "au2-lockout-card",
    name: "Lockout Card",
    category: CAT,
    preview: (
      <div className="nuda-au2-lockout-card" role="alert">
        <div className="nuda-au2-lockout-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4" />
            <path d="M10.3 3.6 2.6 17a1.6 1.6 0 0 0 1.4 2.4h16a1.6 1.6 0 0 0 1.4-2.4L13.7 3.6a1.6 1.6 0 0 0-2.8 0Z" />
            <circle cx="12" cy="16.2" r="0.1" />
          </svg>
        </div>
        <div className="nuda-au2-lockout-card__title">Too many attempts</div>
        <p className="nuda-au2-lockout-card__sub">Your account is temporarily locked.</p>
        <div className="nuda-au2-lockout-card__timerwrap">
          <div className="nuda-au2-lockout-card__timerbar" aria-hidden="true">
            <span className="nuda-au2-lockout-card__timerfill"></span>
          </div>
          <span className="nuda-au2-lockout-card__timertext">Try again in 2:00</span>
        </div>
        <button className="nuda-au2-lockout-card__cta" type="button" disabled>
          Sign in
        </button>
      </div>
    ),
    cssInline: `
      .nuda-au2-lockout-card{display:flex;flex-direction:column;gap:10px;padding:22px;width:100%;max-width:280px;background:#0a0a0a;border:1px solid rgba(255,120,120,.25);border-radius:16px}
      .nuda-au2-lockout-card__icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(255,120,120,.12);color:#ff8a8a}
      .nuda-au2-lockout-card__icon svg{width:18px;height:18px}
      .nuda-au2-lockout-card__title{color:#fafafa;font-size:14px;font-weight:600;margin-top:2px}
      .nuda-au2-lockout-card__sub{color:#a0a0a8;font-size:11.5px;margin:0}
      .nuda-au2-lockout-card__timerwrap{display:flex;flex-direction:column;gap:6px;margin-top:2px}
      .nuda-au2-lockout-card__timerbar{position:relative;height:6px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
      .nuda-au2-lockout-card__timerfill{position:absolute;inset:0;background:#ff8a8a;transform-origin:left;transform:scaleX(1);animation:nuda-au2-lockout-card-drain 30s linear infinite}
      .nuda-au2-lockout-card__timertext{color:#777;font-size:10.5px;font-variant-numeric:tabular-nums}
      .nuda-au2-lockout-card__cta{min-height:44px;padding:10px;background:rgba(255,255,255,.06);color:#777;border:1px solid rgba(255,255,255,.08);border-radius:10px;font-size:13px;font-weight:600;cursor:not-allowed}
      .nuda-au2-lockout-card__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-au2-lockout-card-drain{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-au2-lockout-card__timerfill{animation:none;transform:scaleX(.15)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-au2-lockout-card" role="alert">
  <div class="nuda-au2-lockout-card__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 9v4" />
      <path d="M10.3 3.6 2.6 17a1.6 1.6 0 0 0 1.4 2.4h16a1.6 1.6 0 0 0 1.4-2.4L13.7 3.6a1.6 1.6 0 0 0-2.8 0Z" />
      <circle cx="12" cy="16.2" r="0.1"></circle>
    </svg>
  </div>
  <div class="nuda-au2-lockout-card__title">Too many attempts</div>
  <p class="nuda-au2-lockout-card__sub">Your account is temporarily locked.</p>
  <div class="nuda-au2-lockout-card__timerwrap">
    <div class="nuda-au2-lockout-card__timerbar" aria-hidden="true">
      <span class="nuda-au2-lockout-card__timerfill"></span>
    </div>
    <span class="nuda-au2-lockout-card__timertext">Try again in 2:00</span>
  </div>
  <button class="nuda-au2-lockout-card__cta" type="button" disabled>Sign in</button>
</div>`,
      },
    ],
  },
];
