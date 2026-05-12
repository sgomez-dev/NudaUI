import type { NudaComponent } from "./types";

export const settingsPreferences: NudaComponent[] = [
  /* ─────────────── PREFERENCE ROW ─────────────── */
  {
    id: "preference-row",
    name: "Preference Row",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-pref-row">
        <div className="nuda-pref-row__text">
          <div className="nuda-pref-row__label">Marketing emails</div>
          <div className="nuda-pref-row__desc">Receive product updates and offers from us.</div>
        </div>
        <label className="nuda-pref-row__switch">
          <input type="checkbox" defaultChecked />
          <span />
        </label>
      </div>
    ),
    cssInline: `
      .nuda-pref-row{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:480px}
      .nuda-pref-row__text{display:flex;flex-direction:column;gap:.25rem;min-width:0}
      .nuda-pref-row__label{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-pref-row__desc{color:#a0a0a8;font-size:.75rem;line-height:1.4}
      .nuda-pref-row__switch{position:relative;width:36px;height:20px;flex-shrink:0;cursor:pointer}
      .nuda-pref-row__switch input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer;z-index:1}
      .nuda-pref-row__switch span{position:absolute;inset:0;background:rgba(255,255,255,.1);border-radius:999px;transition:background .25s ease}
      .nuda-pref-row__switch span::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fafafa;border-radius:50%;transition:transform .25s ease}
      .nuda-pref-row__switch input:checked + span{background:#e4ff54}
      .nuda-pref-row__switch input:checked + span::after{transform:translateX(16px);background:#09090b}
      @media(prefers-reduced-motion:reduce){.nuda-pref-row__switch span,.nuda-pref-row__switch span::after{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pref-row">
  <div class="nuda-pref-row__text">
    <div class="nuda-pref-row__label">Marketing emails</div>
    <div class="nuda-pref-row__desc">Receive product updates and offers from us.</div>
  </div>
  <label class="nuda-pref-row__switch">
    <input type="checkbox" checked />
    <span></span>
  </label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Preference Row
   A labeled row with description and a toggle switch.
   Customize: --row-bg, --row-border, --switch-on */

.nuda-pref-row {
  --row-bg: #0c0c10;
  --row-border: rgba(255, 255, 255, 0.06);
  --switch-on: #e4ff54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--row-bg);
  border: 1px solid var(--row-border);
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
}

.nuda-pref-row__text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.nuda-pref-row__label {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-pref-row__desc {
  color: #a0a0a8;
  font-size: 0.75rem;
  line-height: 1.4;
}

.nuda-pref-row__switch {
  position: relative;
  width: 36px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
}

.nuda-pref-row__switch input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 1;
}

.nuda-pref-row__switch span {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  transition: background 0.25s ease;
}

.nuda-pref-row__switch span::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: #fafafa;
  border-radius: 50%;
  transition: transform 0.25s ease;
}

.nuda-pref-row__switch input:checked + span {
  background: var(--switch-on);
}

.nuda-pref-row__switch input:checked + span::after {
  transform: translateX(16px);
  background: #09090b;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pref-row__switch span,
  .nuda-pref-row__switch span::after {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SETTINGS CARD GROUP ─────────────── */
  {
    id: "settings-card-group",
    name: "Settings Card Group",
    category: "Settings & Preferences",
    preview: (
      <section className="nuda-set-group">
        <header className="nuda-set-group__head">
          <h3>Profile</h3>
          <p>Manage your public profile information.</p>
        </header>
        <div className="nuda-set-group__body">
          <div className="nuda-set-group__row">
            <span>Display name</span>
            <span className="nuda-set-group__val">Santiago G.</span>
          </div>
          <div className="nuda-set-group__row">
            <span>Username</span>
            <span className="nuda-set-group__val">@santi</span>
          </div>
          <div className="nuda-set-group__row">
            <span>Bio</span>
            <span className="nuda-set-group__val">Designer at Evenbytes</span>
          </div>
        </div>
      </section>
    ),
    cssInline: `
      .nuda-set-group{background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;overflow:hidden;width:100%;max-width:480px}
      .nuda-set-group__head{padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-set-group__head h3{margin:0 0 .25rem;color:#fafafa;font-size:1rem;font-weight:600;letter-spacing:-.01em}
      .nuda-set-group__head p{margin:0;color:#a0a0a8;font-size:.8125rem;line-height:1.4}
      .nuda-set-group__body{padding:.5rem 0}
      .nuda-set-group__row{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.75rem 1.5rem;color:#a0a0a8;font-size:.875rem}
      .nuda-set-group__val{color:#fafafa;font-weight:500}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<section class="nuda-set-group">
  <header class="nuda-set-group__head">
    <h3>Profile</h3>
    <p>Manage your public profile information.</p>
  </header>
  <div class="nuda-set-group__body">
    <div class="nuda-set-group__row">
      <span>Display name</span>
      <span class="nuda-set-group__val">Santiago G.</span>
    </div>
    <div class="nuda-set-group__row">
      <span>Username</span>
      <span class="nuda-set-group__val">@santi</span>
    </div>
    <div class="nuda-set-group__row">
      <span>Bio</span>
      <span class="nuda-set-group__val">Designer at Evenbytes</span>
    </div>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Settings Card Group
   A titled section that groups related preferences together.
   Customize: --group-bg, --group-border */

.nuda-set-group {
  --group-bg: #0c0c10;
  --group-border: rgba(255, 255, 255, 0.06);
  background: var(--group-bg);
  border: 1px solid var(--group-border);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
}

.nuda-set-group__head {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--group-border);
}

.nuda-set-group__head h3 {
  margin: 0 0 0.25rem;
  color: #fafafa;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nuda-set-group__head p {
  margin: 0;
  color: #a0a0a8;
  font-size: 0.8125rem;
  line-height: 1.4;
}

.nuda-set-group__body {
  padding: 0.5rem 0;
}

.nuda-set-group__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  color: #a0a0a8;
  font-size: 0.875rem;
}

.nuda-set-group__val {
  color: #fafafa;
  font-weight: 500;
}`,
      },
    ],
  },

  /* ─────────────── THEME SELECTOR ─────────────── */
  {
    id: "theme-selector",
    name: "Theme Selector",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-theme-sel" role="radiogroup" aria-label="Theme">
        <label className="nuda-theme-sel__swatch nuda-theme-sel__swatch--light">
          <input type="radio" name="nuda-theme-sel" value="light" />
          <span className="nuda-theme-sel__chip" />
          <span className="nuda-theme-sel__name">Light</span>
        </label>
        <label className="nuda-theme-sel__swatch nuda-theme-sel__swatch--dark">
          <input type="radio" name="nuda-theme-sel" value="dark" defaultChecked />
          <span className="nuda-theme-sel__chip" />
          <span className="nuda-theme-sel__name">Dark</span>
        </label>
        <label className="nuda-theme-sel__swatch nuda-theme-sel__swatch--system">
          <input type="radio" name="nuda-theme-sel" value="system" />
          <span className="nuda-theme-sel__chip" />
          <span className="nuda-theme-sel__name">System</span>
        </label>
      </div>
    ),
    cssInline: `
      .nuda-theme-sel{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;width:100%;max-width:420px}
      .nuda-theme-sel__swatch{position:relative;display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:.75rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px;cursor:pointer;transition:border-color .2s ease,background .2s ease}
      .nuda-theme-sel__swatch input{position:absolute;opacity:0;inset:0;cursor:pointer}
      .nuda-theme-sel__chip{width:100%;height:48px;border-radius:8px;border:1px solid rgba(255,255,255,.08)}
      .nuda-theme-sel__swatch--light .nuda-theme-sel__chip{background:linear-gradient(135deg,#fafafa,#e4e4e8)}
      .nuda-theme-sel__swatch--dark .nuda-theme-sel__chip{background:linear-gradient(135deg,#1a1a1f,#09090b)}
      .nuda-theme-sel__swatch--system .nuda-theme-sel__chip{background:linear-gradient(135deg,#fafafa 0 50%,#1a1a1f 50% 100%)}
      .nuda-theme-sel__name{color:#a0a0a8;font-size:.75rem;font-weight:500}
      .nuda-theme-sel__swatch:has(input:checked){border-color:#e4ff54;background:#111114}
      .nuda-theme-sel__swatch:has(input:checked) .nuda-theme-sel__name{color:#fafafa}
      .nuda-theme-sel__swatch:has(input:focus-visible){outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-theme-sel__swatch{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-theme-sel" role="radiogroup" aria-label="Theme">
  <label class="nuda-theme-sel__swatch nuda-theme-sel__swatch--light">
    <input type="radio" name="theme" value="light" />
    <span class="nuda-theme-sel__chip"></span>
    <span class="nuda-theme-sel__name">Light</span>
  </label>
  <label class="nuda-theme-sel__swatch nuda-theme-sel__swatch--dark">
    <input type="radio" name="theme" value="dark" checked />
    <span class="nuda-theme-sel__chip"></span>
    <span class="nuda-theme-sel__name">Dark</span>
  </label>
  <label class="nuda-theme-sel__swatch nuda-theme-sel__swatch--system">
    <input type="radio" name="theme" value="system" />
    <span class="nuda-theme-sel__chip"></span>
    <span class="nuda-theme-sel__name">System</span>
  </label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Theme Selector
   Three swatches in a row, one selected at a time.
   Customize: --selected, --swatch-bg */

.nuda-theme-sel {
  --selected: #e4ff54;
  --swatch-bg: #0c0c10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  width: 100%;
  max-width: 420px;
}

.nuda-theme-sel__swatch {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: var(--swatch-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.nuda-theme-sel__swatch input {
  position: absolute;
  opacity: 0;
  inset: 0;
  cursor: pointer;
}

.nuda-theme-sel__chip {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.nuda-theme-sel__swatch--light .nuda-theme-sel__chip {
  background: linear-gradient(135deg, #fafafa, #e4e4e8);
}

.nuda-theme-sel__swatch--dark .nuda-theme-sel__chip {
  background: linear-gradient(135deg, #1a1a1f, #09090b);
}

.nuda-theme-sel__swatch--system .nuda-theme-sel__chip {
  background: linear-gradient(135deg, #fafafa 0 50%, #1a1a1f 50% 100%);
}

.nuda-theme-sel__name {
  color: #a0a0a8;
  font-size: 0.75rem;
  font-weight: 500;
}

.nuda-theme-sel__swatch:has(input:checked) {
  border-color: var(--selected);
  background: #111114;
}

.nuda-theme-sel__swatch:has(input:checked) .nuda-theme-sel__name {
  color: #fafafa;
}

.nuda-theme-sel__swatch:has(input:focus-visible) {
  outline: 2px solid var(--selected);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-theme-sel__swatch {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── NOTIFICATION PREFERENCE BLOCK ─────────────── */
  {
    id: "notification-preference-block",
    name: "Notification Preference Block",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-notif-pref">
        <div className="nuda-notif-pref__head">Notify me about</div>
        <label className="nuda-notif-pref__row">
          <input type="checkbox" defaultChecked />
          <span className="nuda-notif-pref__box" />
          <span className="nuda-notif-pref__text">
            <span className="nuda-notif-pref__name">Push</span>
            <span className="nuda-notif-pref__desc">On this device</span>
          </span>
        </label>
        <label className="nuda-notif-pref__row">
          <input type="checkbox" defaultChecked />
          <span className="nuda-notif-pref__box" />
          <span className="nuda-notif-pref__text">
            <span className="nuda-notif-pref__name">Email</span>
            <span className="nuda-notif-pref__desc">santiago@evenbytes.com</span>
          </span>
        </label>
        <label className="nuda-notif-pref__row">
          <input type="checkbox" />
          <span className="nuda-notif-pref__box" />
          <span className="nuda-notif-pref__text">
            <span className="nuda-notif-pref__name">SMS</span>
            <span className="nuda-notif-pref__desc">+1 (555) 010-0099</span>
          </span>
        </label>
      </div>
    ),
    cssInline: `
      .nuda-notif-pref{display:flex;flex-direction:column;gap:.5rem;padding:1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:420px}
      .nuda-notif-pref__head{color:#a0a0a8;font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.25rem}
      .nuda-notif-pref__row{position:relative;display:flex;align-items:center;gap:.75rem;padding:.625rem .75rem;border-radius:10px;cursor:pointer;transition:background .2s ease}
      .nuda-notif-pref__row:hover{background:#111114}
      .nuda-notif-pref__row input{position:absolute;opacity:0;pointer-events:none}
      .nuda-notif-pref__box{position:relative;width:18px;height:18px;border-radius:5px;border:1px solid rgba(255,255,255,.15);background:#111114;flex-shrink:0;transition:background .2s ease,border-color .2s ease}
      .nuda-notif-pref__box::after{content:"";position:absolute;top:2px;left:6px;width:4px;height:9px;border:solid #09090b;border-width:0 2px 2px 0;transform:rotate(45deg) scale(0);transition:transform .2s ease}
      .nuda-notif-pref__row input:checked + .nuda-notif-pref__box{background:#e4ff54;border-color:#e4ff54}
      .nuda-notif-pref__row input:checked + .nuda-notif-pref__box::after{transform:rotate(45deg) scale(1)}
      .nuda-notif-pref__row input:focus-visible + .nuda-notif-pref__box{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-notif-pref__text{display:flex;flex-direction:column;gap:.125rem;min-width:0}
      .nuda-notif-pref__name{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-notif-pref__desc{color:#63636e;font-size:.75rem}
      @media(prefers-reduced-motion:reduce){.nuda-notif-pref__row,.nuda-notif-pref__box,.nuda-notif-pref__box::after{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-notif-pref">
  <div class="nuda-notif-pref__head">Notify me about</div>
  <label class="nuda-notif-pref__row">
    <input type="checkbox" checked />
    <span class="nuda-notif-pref__box"></span>
    <span class="nuda-notif-pref__text">
      <span class="nuda-notif-pref__name">Push</span>
      <span class="nuda-notif-pref__desc">On this device</span>
    </span>
  </label>
  <label class="nuda-notif-pref__row">
    <input type="checkbox" checked />
    <span class="nuda-notif-pref__box"></span>
    <span class="nuda-notif-pref__text">
      <span class="nuda-notif-pref__name">Email</span>
      <span class="nuda-notif-pref__desc">santiago@evenbytes.com</span>
    </span>
  </label>
  <label class="nuda-notif-pref__row">
    <input type="checkbox" />
    <span class="nuda-notif-pref__box"></span>
    <span class="nuda-notif-pref__text">
      <span class="nuda-notif-pref__name">SMS</span>
      <span class="nuda-notif-pref__desc">+1 (555) 010-0099</span>
    </span>
  </label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Notification Preference Block
   Channel checkboxes (push / email / sms).
   Customize: --accent, --card-bg */

.nuda-notif-pref {
  --accent: #e4ff54;
  --card-bg: #0c0c10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  width: 100%;
  max-width: 420px;
}

.nuda-notif-pref__head {
  color: #a0a0a8;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.25rem;
}

.nuda-notif-pref__row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.nuda-notif-pref__row:hover {
  background: #111114;
}

.nuda-notif-pref__row input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.nuda-notif-pref__box {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #111114;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nuda-notif-pref__box::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 6px;
  width: 4px;
  height: 9px;
  border: solid #09090b;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s ease;
}

.nuda-notif-pref__row input:checked + .nuda-notif-pref__box {
  background: var(--accent);
  border-color: var(--accent);
}

.nuda-notif-pref__row input:checked + .nuda-notif-pref__box::after {
  transform: rotate(45deg) scale(1);
}

.nuda-notif-pref__row input:focus-visible + .nuda-notif-pref__box {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.nuda-notif-pref__text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.nuda-notif-pref__name {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-notif-pref__desc {
  color: #63636e;
  font-size: 0.75rem;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-notif-pref__row,
  .nuda-notif-pref__box,
  .nuda-notif-pref__box::after {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── ACCOUNT SECTION ─────────────── */
  {
    id: "account-section",
    name: "Account Section",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-account">
        <div className="nuda-account__avatar" aria-hidden="true">SG</div>
        <div className="nuda-account__info">
          <div className="nuda-account__name">Santiago Gómez</div>
          <div className="nuda-account__email">santiago@evenbytes.com</div>
        </div>
        <button type="button" className="nuda-account__action">Change</button>
      </div>
    ),
    cssInline: `
      .nuda-account{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:480px}
      .nuda-account__avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#a8c93f);color:#09090b;font-weight:600;font-size:.875rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;letter-spacing:.02em}
      .nuda-account__info{display:flex;flex-direction:column;gap:.125rem;min-width:0;flex:1}
      .nuda-account__name{color:#fafafa;font-size:.9375rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-account__email{color:#a0a0a8;font-size:.8125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-account__action{background:transparent;border:1px solid rgba(255,255,255,.1);color:#fafafa;font-size:.8125rem;font-weight:500;padding:.5rem .875rem;border-radius:8px;cursor:pointer;transition:background .2s ease,border-color .2s ease}
      .nuda-account__action:hover{background:#111114;border-color:rgba(255,255,255,.18)}
      .nuda-account__action:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-account__action{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-account">
  <div class="nuda-account__avatar" aria-hidden="true">SG</div>
  <div class="nuda-account__info">
    <div class="nuda-account__name">Santiago Gómez</div>
    <div class="nuda-account__email">santiago@evenbytes.com</div>
  </div>
  <button type="button" class="nuda-account__action">Change</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Account Section
   Avatar + name + email with a change link.
   Customize: --accent, --card-bg */

.nuda-account {
  --accent: #e4ff54;
  --card-bg: #0c0c10;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  width: 100%;
  max-width: 480px;
}

.nuda-account__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #a8c93f);
  color: #09090b;
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.nuda-account__info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
  flex: 1;
}

.nuda-account__name {
  color: #fafafa;
  font-size: 0.9375rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nuda-account__email {
  color: #a0a0a8;
  font-size: 0.8125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nuda-account__action {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fafafa;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nuda-account__action:hover {
  background: #111114;
  border-color: rgba(255, 255, 255, 0.18);
}

.nuda-account__action:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-account__action {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── DANGER ZONE ─────────────── */
  {
    id: "danger-zone",
    name: "Danger Zone",
    category: "Settings & Preferences",
    preview: (
      <section className="nuda-danger">
        <header className="nuda-danger__head">
          <h3>Danger Zone</h3>
          <p>These actions are permanent and cannot be undone.</p>
        </header>
        <div className="nuda-danger__row">
          <div className="nuda-danger__text">
            <span className="nuda-danger__name">Transfer ownership</span>
            <span className="nuda-danger__desc">Move this workspace to another account.</span>
          </div>
          <button type="button" className="nuda-danger__btn nuda-danger__btn--ghost">Transfer</button>
        </div>
        <div className="nuda-danger__row">
          <div className="nuda-danger__text">
            <span className="nuda-danger__name">Delete account</span>
            <span className="nuda-danger__desc">Permanently remove your account and data.</span>
          </div>
          <button type="button" className="nuda-danger__btn">Delete</button>
        </div>
      </section>
    ),
    cssInline: `
      .nuda-danger{background:#0c0c10;border:1px solid rgba(239,68,68,.35);border-radius:14px;overflow:hidden;width:100%;max-width:480px}
      .nuda-danger__head{padding:1.25rem 1.5rem;border-bottom:1px solid rgba(239,68,68,.18);background:rgba(239,68,68,.04)}
      .nuda-danger__head h3{margin:0 0 .25rem;color:#fca5a5;font-size:1rem;font-weight:600;letter-spacing:-.01em}
      .nuda-danger__head p{margin:0;color:#a0a0a8;font-size:.8125rem;line-height:1.4}
      .nuda-danger__row{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.5rem}
      .nuda-danger__row + .nuda-danger__row{border-top:1px solid rgba(255,255,255,.04)}
      .nuda-danger__text{display:flex;flex-direction:column;gap:.125rem;min-width:0}
      .nuda-danger__name{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-danger__desc{color:#a0a0a8;font-size:.75rem;line-height:1.4}
      .nuda-danger__btn{background:#ef4444;color:#fafafa;border:1px solid #ef4444;font-size:.8125rem;font-weight:500;padding:.5rem .875rem;border-radius:8px;cursor:pointer;flex-shrink:0;transition:background .2s ease,border-color .2s ease}
      .nuda-danger__btn:hover{background:#dc2626;border-color:#dc2626}
      .nuda-danger__btn--ghost{background:transparent;color:#fca5a5;border-color:rgba(239,68,68,.4)}
      .nuda-danger__btn--ghost:hover{background:rgba(239,68,68,.08);border-color:rgba(239,68,68,.6)}
      .nuda-danger__btn:focus-visible{outline:2px solid #ef4444;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-danger__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<section class="nuda-danger">
  <header class="nuda-danger__head">
    <h3>Danger Zone</h3>
    <p>These actions are permanent and cannot be undone.</p>
  </header>
  <div class="nuda-danger__row">
    <div class="nuda-danger__text">
      <span class="nuda-danger__name">Transfer ownership</span>
      <span class="nuda-danger__desc">Move this workspace to another account.</span>
    </div>
    <button type="button" class="nuda-danger__btn nuda-danger__btn--ghost">Transfer</button>
  </div>
  <div class="nuda-danger__row">
    <div class="nuda-danger__text">
      <span class="nuda-danger__name">Delete account</span>
      <span class="nuda-danger__desc">Permanently remove your account and data.</span>
    </div>
    <button type="button" class="nuda-danger__btn">Delete</button>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Danger Zone
   A red-tinted section for destructive account actions.
   Customize: --danger, --danger-border */

.nuda-danger {
  --danger: #ef4444;
  --danger-border: rgba(239, 68, 68, 0.35);
  background: #0c0c10;
  border: 1px solid var(--danger-border);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
}

.nuda-danger__head {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(239, 68, 68, 0.18);
  background: rgba(239, 68, 68, 0.04);
}

.nuda-danger__head h3 {
  margin: 0 0 0.25rem;
  color: #fca5a5;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nuda-danger__head p {
  margin: 0;
  color: #a0a0a8;
  font-size: 0.8125rem;
  line-height: 1.4;
}

.nuda-danger__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
}

.nuda-danger__row + .nuda-danger__row {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.nuda-danger__text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.nuda-danger__name {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-danger__desc {
  color: #a0a0a8;
  font-size: 0.75rem;
  line-height: 1.4;
}

.nuda-danger__btn {
  background: var(--danger);
  color: #fafafa;
  border: 1px solid var(--danger);
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nuda-danger__btn:hover {
  background: #dc2626;
  border-color: #dc2626;
}

.nuda-danger__btn--ghost {
  background: transparent;
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.4);
}

.nuda-danger__btn--ghost:hover {
  background: rgba(239, 68, 68, 0.08);
  border-color: rgba(239, 68, 68, 0.6);
}

.nuda-danger__btn:focus-visible {
  outline: 2px solid var(--danger);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-danger__btn {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SAVE INDICATOR ─────────────── */
  {
    id: "save-indicator",
    name: "Save Indicator",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-save" role="status" aria-live="polite">
        <span className="nuda-save__dot" aria-hidden="true" />
        <span className="nuda-save__text">Autosaved just now</span>
      </div>
    ),
    cssInline: `
      .nuda-save{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem .875rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:999px}
      .nuda-save__dot{position:relative;width:8px;height:8px;border-radius:50%;background:#22c55e;flex-shrink:0}
      .nuda-save__dot::before{content:"";position:absolute;inset:-4px;border-radius:50%;background:#22c55e;opacity:.35;animation:_savepulse 2s ease-out infinite}
      .nuda-save__text{color:#a0a0a8;font-size:.75rem;font-weight:500;letter-spacing:.01em}
      @keyframes _savepulse{0%{transform:scale(.5);opacity:.5}100%{transform:scale(1.6);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-save__dot::before{animation:none;opacity:.4;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-save" role="status" aria-live="polite">
  <span class="nuda-save__dot" aria-hidden="true"></span>
  <span class="nuda-save__text">Autosaved just now</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Save Indicator
   A small autosaved pill with a pulsing green dot.
   Customize: --save-color, --save-bg */

.nuda-save {
  --save-color: #22c55e;
  --save-bg: #0c0c10;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: var(--save-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 999px;
}

.nuda-save__dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--save-color);
  flex-shrink: 0;
}

.nuda-save__dot::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: var(--save-color);
  opacity: 0.35;
  animation: nuda-save-pulse 2s ease-out infinite;
}

.nuda-save__text {
  color: #a0a0a8;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

@keyframes nuda-save-pulse {
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-save__dot::before {
    animation: none;
    opacity: 0.4;
    transform: scale(1);
  }
}`,
      },
    ],
  },

  /* ─────────────── SEARCH SETTINGS INPUT ─────────────── */
  {
    id: "search-settings-input",
    name: "Search Settings Input",
    category: "Settings & Preferences",
    preview: (
      <label className="nuda-set-search">
        <svg className="nuda-set-search__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input type="search" placeholder="Search settings..." defaultValue="" />
        <kbd className="nuda-set-search__kbd">⌘K</kbd>
      </label>
    ),
    cssInline: `
      .nuda-set-search{display:flex;align-items:center;gap:.625rem;padding:0 .875rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:10px;width:100%;max-width:420px;transition:border-color .2s ease,background .2s ease}
      .nuda-set-search:focus-within{border-color:rgba(228,255,84,.4);background:#111114}
      .nuda-set-search__icon{width:16px;height:16px;color:#63636e;flex-shrink:0}
      .nuda-set-search input{flex:1;background:transparent;border:0;outline:0;color:#fafafa;font-size:.875rem;padding:.625rem 0;font-family:inherit}
      .nuda-set-search input::placeholder{color:#63636e}
      .nuda-set-search__kbd{font-family:inherit;font-size:.6875rem;color:#a0a0a8;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:5px;padding:.125rem .375rem;flex-shrink:0;letter-spacing:.04em}
      @media(prefers-reduced-motion:reduce){.nuda-set-search{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<label class="nuda-set-search">
  <svg class="nuda-set-search__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5" />
    <path d="m11 11 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>
  <input type="search" placeholder="Search settings..." />
  <kbd class="nuda-set-search__kbd">⌘K</kbd>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Search Settings Input
   A search field with leading icon and trailing keyboard hint.
   Customize: --search-bg, --search-accent */

.nuda-set-search {
  --search-bg: #0c0c10;
  --search-accent: rgba(228, 255, 84, 0.4);
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0 0.875rem;
  background: var(--search-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  width: 100%;
  max-width: 420px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.nuda-set-search:focus-within {
  border-color: var(--search-accent);
  background: #111114;
}

.nuda-set-search__icon {
  width: 16px;
  height: 16px;
  color: #63636e;
  flex-shrink: 0;
}

.nuda-set-search input {
  flex: 1;
  background: transparent;
  border: 0;
  outline: 0;
  color: #fafafa;
  font-size: 0.875rem;
  padding: 0.625rem 0;
  font-family: inherit;
}

.nuda-set-search input::placeholder {
  color: #63636e;
}

.nuda-set-search__kbd {
  font-family: inherit;
  font-size: 0.6875rem;
  color: #a0a0a8;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  padding: 0.125rem 0.375rem;
  flex-shrink: 0;
  letter-spacing: 0.04em;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-set-search {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── TWO-COLUMN SETTING ─────────────── */
  {
    id: "two-column-setting",
    name: "Two-column Setting",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-two-col">
        <div className="nuda-two-col__label">
          <div className="nuda-two-col__name">Default workspace</div>
          <div className="nuda-two-col__hint">Opened when you launch the app.</div>
        </div>
        <div className="nuda-two-col__control">
          <select defaultValue="evenbytes">
            <option value="evenbytes">Evenbytes</option>
            <option value="personal">Personal</option>
            <option value="acme">Acme Inc.</option>
          </select>
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-two-col{display:grid;grid-template-columns:1fr auto;gap:1rem 2rem;align-items:center;padding:1.25rem 0;border-bottom:1px solid rgba(255,255,255,.06);width:100%;max-width:560px}
      .nuda-two-col__label{display:flex;flex-direction:column;gap:.25rem;min-width:0}
      .nuda-two-col__name{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-two-col__hint{color:#a0a0a8;font-size:.75rem;line-height:1.4}
      .nuda-two-col__control{position:relative;display:flex;align-items:center}
      .nuda-two-col__control select{appearance:none;background:#0c0c10;border:1px solid rgba(255,255,255,.08);color:#fafafa;font-size:.8125rem;font-family:inherit;padding:.5rem 2rem .5rem .875rem;border-radius:8px;cursor:pointer;min-width:160px;transition:border-color .2s ease}
      .nuda-two-col__control select:hover{border-color:rgba(255,255,255,.15)}
      .nuda-two-col__control select:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-two-col__control svg{position:absolute;right:.625rem;width:12px;height:12px;color:#a0a0a8;pointer-events:none}
      @media(prefers-reduced-motion:reduce){.nuda-two-col__control select{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-two-col">
  <div class="nuda-two-col__label">
    <div class="nuda-two-col__name">Default workspace</div>
    <div class="nuda-two-col__hint">Opened when you launch the app.</div>
  </div>
  <div class="nuda-two-col__control">
    <select>
      <option value="evenbytes" selected>Evenbytes</option>
      <option value="personal">Personal</option>
      <option value="acme">Acme Inc.</option>
    </select>
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Two-column Setting
   Label on the left, control on the right.
   Customize: --row-border, --control-bg */

.nuda-two-col {
  --row-border: rgba(255, 255, 255, 0.06);
  --control-bg: #0c0c10;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem 2rem;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--row-border);
  width: 100%;
  max-width: 560px;
}

.nuda-two-col__label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.nuda-two-col__name {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-two-col__hint {
  color: #a0a0a8;
  font-size: 0.75rem;
  line-height: 1.4;
}

.nuda-two-col__control {
  position: relative;
  display: flex;
  align-items: center;
}

.nuda-two-col__control select {
  appearance: none;
  background: var(--control-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fafafa;
  font-size: 0.8125rem;
  font-family: inherit;
  padding: 0.5rem 2rem 0.5rem 0.875rem;
  border-radius: 8px;
  cursor: pointer;
  min-width: 160px;
  transition: border-color 0.2s ease;
}

.nuda-two-col__control select:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.nuda-two-col__control select:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

.nuda-two-col__control svg {
  position: absolute;
  right: 0.625rem;
  width: 12px;
  height: 12px;
  color: #a0a0a8;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-two-col__control select {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── ACCESSIBILITY SECTION ─────────────── */
  {
    id: "accessibility-section",
    name: "Accessibility Section",
    category: "Settings & Preferences",
    preview: (
      <section className="nuda-a11y">
        <h3 className="nuda-a11y__title">Accessibility</h3>
        <div className="nuda-a11y__row">
          <div className="nuda-a11y__label">
            <span>Font size</span>
            <span className="nuda-a11y__val">16px</span>
          </div>
          <input className="nuda-a11y__slider" type="range" min={12} max={24} defaultValue={16} aria-label="Font size" />
        </div>
        <div className="nuda-a11y__row nuda-a11y__row--toggle">
          <div className="nuda-a11y__text">
            <span className="nuda-a11y__name">Reduce motion</span>
            <span className="nuda-a11y__desc">Minimize animations across the app.</span>
          </div>
          <label className="nuda-a11y__switch">
            <input type="checkbox" defaultChecked />
            <span />
          </label>
        </div>
      </section>
    ),
    cssInline: `
      .nuda-a11y{display:flex;flex-direction:column;gap:1.25rem;padding:1.25rem 1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:480px}
      .nuda-a11y__title{margin:0;color:#fafafa;font-size:.9375rem;font-weight:600;letter-spacing:-.01em}
      .nuda-a11y__row{display:flex;flex-direction:column;gap:.625rem}
      .nuda-a11y__row--toggle{flex-direction:row;align-items:center;justify-content:space-between;gap:1rem}
      .nuda-a11y__label{display:flex;align-items:center;justify-content:space-between;color:#a0a0a8;font-size:.8125rem}
      .nuda-a11y__val{color:#fafafa;font-variant-numeric:tabular-nums;font-weight:500}
      .nuda-a11y__slider{appearance:none;width:100%;height:4px;border-radius:999px;background:linear-gradient(90deg,#e4ff54 0 33%,rgba(255,255,255,.1) 33% 100%);cursor:pointer;outline:0}
      .nuda-a11y__slider::-webkit-slider-thumb{appearance:none;width:16px;height:16px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer;transition:transform .2s ease}
      .nuda-a11y__slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer}
      .nuda-a11y__slider:focus-visible::-webkit-slider-thumb{transform:scale(1.15)}
      .nuda-a11y__text{display:flex;flex-direction:column;gap:.125rem;min-width:0}
      .nuda-a11y__name{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-a11y__desc{color:#a0a0a8;font-size:.75rem;line-height:1.4}
      .nuda-a11y__switch{position:relative;width:36px;height:20px;flex-shrink:0;cursor:pointer}
      .nuda-a11y__switch input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer;z-index:1}
      .nuda-a11y__switch span{position:absolute;inset:0;background:rgba(255,255,255,.1);border-radius:999px;transition:background .25s ease}
      .nuda-a11y__switch span::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fafafa;border-radius:50%;transition:transform .25s ease}
      .nuda-a11y__switch input:checked + span{background:#e4ff54}
      .nuda-a11y__switch input:checked + span::after{transform:translateX(16px);background:#09090b}
      @media(prefers-reduced-motion:reduce){.nuda-a11y__slider::-webkit-slider-thumb,.nuda-a11y__switch span,.nuda-a11y__switch span::after{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<section class="nuda-a11y">
  <h3 class="nuda-a11y__title">Accessibility</h3>
  <div class="nuda-a11y__row">
    <div class="nuda-a11y__label">
      <span>Font size</span>
      <span class="nuda-a11y__val">16px</span>
    </div>
    <input class="nuda-a11y__slider" type="range" min="12" max="24"
           value="16" aria-label="Font size" />
  </div>
  <div class="nuda-a11y__row nuda-a11y__row--toggle">
    <div class="nuda-a11y__text">
      <span class="nuda-a11y__name">Reduce motion</span>
      <span class="nuda-a11y__desc">Minimize animations across the app.</span>
    </div>
    <label class="nuda-a11y__switch">
      <input type="checkbox" checked />
      <span></span>
    </label>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Accessibility Section
   Font size slider + reduce motion toggle.
   Customize: --accent, --card-bg */

.nuda-a11y {
  --accent: #e4ff54;
  --card-bg: #0c0c10;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  width: 100%;
  max-width: 480px;
}

.nuda-a11y__title {
  margin: 0;
  color: #fafafa;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nuda-a11y__row {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.nuda-a11y__row--toggle {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nuda-a11y__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #a0a0a8;
  font-size: 0.8125rem;
}

.nuda-a11y__val {
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}

.nuda-a11y__slider {
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--accent) 0 33%,
    rgba(255, 255, 255, 0.1) 33% 100%
  );
  cursor: pointer;
  outline: 0;
}

.nuda-a11y__slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid var(--accent);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.nuda-a11y__slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid var(--accent);
  cursor: pointer;
}

.nuda-a11y__slider:focus-visible::-webkit-slider-thumb {
  transform: scale(1.15);
}

.nuda-a11y__text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.nuda-a11y__name {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-a11y__desc {
  color: #a0a0a8;
  font-size: 0.75rem;
  line-height: 1.4;
}

.nuda-a11y__switch {
  position: relative;
  width: 36px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
}

.nuda-a11y__switch input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 1;
}

.nuda-a11y__switch span {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  transition: background 0.25s ease;
}

.nuda-a11y__switch span::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: #fafafa;
  border-radius: 50%;
  transition: transform 0.25s ease;
}

.nuda-a11y__switch input:checked + span {
  background: var(--accent);
}

.nuda-a11y__switch input:checked + span::after {
  transform: translateX(16px);
  background: #09090b;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-a11y__slider::-webkit-slider-thumb,
  .nuda-a11y__switch span,
  .nuda-a11y__switch span::after {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── CONNECTED APPS ROW ─────────────── */
  {
    id: "connected-apps-row",
    name: "Connected Apps Row",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-app-row">
        <div className="nuda-app-row__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="2" fill="#36c5f0" />
            <rect x="13" y="3" width="8" height="8" rx="2" fill="#2eb67d" />
            <rect x="3" y="13" width="8" height="8" rx="2" fill="#ecb22e" />
            <rect x="13" y="13" width="8" height="8" rx="2" fill="#e01e5a" />
          </svg>
        </div>
        <div className="nuda-app-row__info">
          <div className="nuda-app-row__name">Slack</div>
          <div className="nuda-app-row__meta">Connected · evenbytes.slack.com</div>
        </div>
        <button type="button" className="nuda-app-row__btn">Disconnect</button>
      </div>
    ),
    cssInline: `
      .nuda-app-row{display:flex;align-items:center;gap:1rem;padding:.875rem 1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:480px}
      .nuda-app-row__icon{width:36px;height:36px;border-radius:9px;background:#111114;display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .nuda-app-row__icon svg{width:22px;height:22px}
      .nuda-app-row__info{flex:1;display:flex;flex-direction:column;gap:.125rem;min-width:0}
      .nuda-app-row__name{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-app-row__meta{color:#a0a0a8;font-size:.75rem;display:flex;align-items:center;gap:.375rem}
      .nuda-app-row__meta::before{content:"";width:6px;height:6px;border-radius:50%;background:#22c55e;flex-shrink:0;box-shadow:0 0 6px rgba(34,197,94,.6)}
      .nuda-app-row__btn{background:transparent;border:1px solid rgba(255,255,255,.1);color:#a0a0a8;font-size:.75rem;font-weight:500;padding:.4375rem .75rem;border-radius:7px;cursor:pointer;flex-shrink:0;transition:color .2s ease,border-color .2s ease,background .2s ease}
      .nuda-app-row__btn:hover{color:#fca5a5;border-color:rgba(239,68,68,.35);background:rgba(239,68,68,.06)}
      .nuda-app-row__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-app-row__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-app-row">
  <div class="nuda-app-row__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#36c5f0" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="#2eb67d" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="#ecb22e" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="#e01e5a" />
    </svg>
  </div>
  <div class="nuda-app-row__info">
    <div class="nuda-app-row__name">Slack</div>
    <div class="nuda-app-row__meta">Connected · evenbytes.slack.com</div>
  </div>
  <button type="button" class="nuda-app-row__btn">Disconnect</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Connected Apps Row
   App icon + name + connected status + disconnect button.
   Customize: --row-bg, --status, --danger */

.nuda-app-row {
  --row-bg: #0c0c10;
  --status: #22c55e;
  --danger: #fca5a5;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  background: var(--row-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
}

.nuda-app-row__icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: #111114;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nuda-app-row__icon svg {
  width: 22px;
  height: 22px;
}

.nuda-app-row__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.nuda-app-row__name {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-app-row__meta {
  color: #a0a0a8;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.nuda-app-row__meta::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--status);
  flex-shrink: 0;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
}

.nuda-app-row__btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a0a0a8;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4375rem 0.75rem;
  border-radius: 7px;
  cursor: pointer;
  flex-shrink: 0;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.nuda-app-row__btn:hover {
  color: var(--danger);
  border-color: rgba(239, 68, 68, 0.35);
  background: rgba(239, 68, 68, 0.06);
}

.nuda-app-row__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-app-row__btn {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── PLAN TIER CARD ─────────────── */
  {
    id: "plan-tier-card",
    name: "Plan Tier Card",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-plan">
        <div className="nuda-plan__badge">Current plan</div>
        <div className="nuda-plan__head">
          <div className="nuda-plan__name">Pro</div>
          <div className="nuda-plan__price"><span>$24</span>/mo</div>
        </div>
        <ul className="nuda-plan__features">
          <li>Unlimited projects</li>
          <li>Priority support</li>
          <li>Custom domains</li>
        </ul>
        <div className="nuda-plan__foot">
          <span className="nuda-plan__renew">Renews May 28, 2026</span>
          <button type="button" className="nuda-plan__btn">Manage</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-plan{position:relative;display:flex;flex-direction:column;gap:1rem;padding:1.5rem;background:linear-gradient(180deg,#111114,#0c0c10);border:1px solid rgba(228,255,84,.25);border-radius:16px;width:100%;max-width:360px;overflow:hidden}
      .nuda-plan::before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(135deg,rgba(228,255,84,.4),transparent 50%);-webkit-mask:linear-gradient(#000,#000) content-box,linear-gradient(#000,#000);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
      .nuda-plan__badge{align-self:flex-start;font-size:.6875rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#09090b;background:#e4ff54;padding:.25rem .5rem;border-radius:5px}
      .nuda-plan__head{display:flex;align-items:baseline;justify-content:space-between;gap:1rem}
      .nuda-plan__name{color:#fafafa;font-size:1.5rem;font-weight:700;letter-spacing:-.02em}
      .nuda-plan__price{color:#a0a0a8;font-size:.8125rem;font-weight:500}
      .nuda-plan__price span{color:#fafafa;font-size:1.25rem;font-weight:600;margin-right:.125rem}
      .nuda-plan__features{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:.5rem}
      .nuda-plan__features li{position:relative;padding-left:1.375rem;color:#a0a0a8;font-size:.8125rem}
      .nuda-plan__features li::before{content:"";position:absolute;left:0;top:.375rem;width:14px;height:14px;border-radius:50%;background:rgba(34,197,94,.15);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='m4 7 2 2 4-4' fill='none' stroke='%2322c55e' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
      .nuda-plan__foot{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.06)}
      .nuda-plan__renew{color:#63636e;font-size:.75rem}
      .nuda-plan__btn{background:#e4ff54;color:#09090b;border:0;font-size:.8125rem;font-weight:600;padding:.5rem .875rem;border-radius:8px;cursor:pointer;transition:background .2s ease}
      .nuda-plan__btn:hover{background:#d4ef44}
      .nuda-plan__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-plan__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-plan">
  <div class="nuda-plan__badge">Current plan</div>
  <div class="nuda-plan__head">
    <div class="nuda-plan__name">Pro</div>
    <div class="nuda-plan__price"><span>$24</span>/mo</div>
  </div>
  <ul class="nuda-plan__features">
    <li>Unlimited projects</li>
    <li>Priority support</li>
    <li>Custom domains</li>
  </ul>
  <div class="nuda-plan__foot">
    <span class="nuda-plan__renew">Renews May 28, 2026</span>
    <button type="button" class="nuda-plan__btn">Manage</button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Plan Tier Card
   Highlighted current plan with features and renewal info.
   Customize: --accent, --check */

.nuda-plan {
  --accent: #e4ff54;
  --check: #22c55e;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(180deg, #111114, #0c0c10);
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 16px;
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}

.nuda-plan::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(228, 255, 84, 0.4), transparent 50%);
  -webkit-mask:
    linear-gradient(#000, #000) content-box,
    linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
}

.nuda-plan__badge {
  align-self: flex-start;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #09090b;
  background: var(--accent);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

.nuda-plan__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.nuda-plan__name {
  color: #fafafa;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nuda-plan__price {
  color: #a0a0a8;
  font-size: 0.8125rem;
  font-weight: 500;
}

.nuda-plan__price span {
  color: #fafafa;
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 0.125rem;
}

.nuda-plan__features {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nuda-plan__features li {
  position: relative;
  padding-left: 1.375rem;
  color: #a0a0a8;
  font-size: 0.8125rem;
}

.nuda-plan__features li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.375rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(34, 197, 94, 0.15);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='m4 7 2 2 4-4' fill='none' stroke='%2322c55e' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.nuda-plan__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-plan__renew {
  color: #63636e;
  font-size: 0.75rem;
}

.nuda-plan__btn {
  background: var(--accent);
  color: #09090b;
  border: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.nuda-plan__btn:hover {
  background: #d4ef44;
}

.nuda-plan__btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-plan__btn {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── EMAIL VERIFICATION STATUS ─────────────── */
  {
    id: "email-verification-status",
    name: "Email Verification Status",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-verify">
        <div className="nuda-verify__icon" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="nuda-verify__info">
          <div className="nuda-verify__email">santiago@evenbytes.com</div>
          <div className="nuda-verify__status">
            <span className="nuda-verify__pill">Verified</span>
            <span className="nuda-verify__meta">on Apr 14, 2026</span>
          </div>
        </div>
        <button type="button" className="nuda-verify__btn">Change</button>
      </div>
    ),
    cssInline: `
      .nuda-verify{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:480px}
      .nuda-verify__icon{width:36px;height:36px;border-radius:50%;background:rgba(34,197,94,.12);color:#22c55e;display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .nuda-verify__icon svg{width:18px;height:18px}
      .nuda-verify__info{flex:1;display:flex;flex-direction:column;gap:.25rem;min-width:0}
      .nuda-verify__email{color:#fafafa;font-size:.875rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-verify__status{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}
      .nuda-verify__pill{font-size:.6875rem;font-weight:600;color:#22c55e;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);padding:.125rem .5rem;border-radius:999px;letter-spacing:.02em}
      .nuda-verify__meta{color:#63636e;font-size:.75rem}
      .nuda-verify__btn{background:transparent;border:1px solid rgba(255,255,255,.1);color:#fafafa;font-size:.75rem;font-weight:500;padding:.4375rem .75rem;border-radius:7px;cursor:pointer;flex-shrink:0;transition:background .2s ease,border-color .2s ease}
      .nuda-verify__btn:hover{background:#111114;border-color:rgba(255,255,255,.18)}
      .nuda-verify__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-verify__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-verify">
  <div class="nuda-verify__icon" aria-hidden="true">
    <svg viewBox="0 0 20 20" fill="none">
      <path d="m5 10 3 3 7-7" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="nuda-verify__info">
    <div class="nuda-verify__email">santiago@evenbytes.com</div>
    <div class="nuda-verify__status">
      <span class="nuda-verify__pill">Verified</span>
      <span class="nuda-verify__meta">on Apr 14, 2026</span>
    </div>
  </div>
  <button type="button" class="nuda-verify__btn">Change</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Email Verification Status
   Shows a verified email with status pill and change link.
   Customize: --ok, --row-bg */

.nuda-verify {
  --ok: #22c55e;
  --row-bg: #0c0c10;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--row-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  width: 100%;
  max-width: 480px;
}

.nuda-verify__icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.12);
  color: var(--ok);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nuda-verify__icon svg {
  width: 18px;
  height: 18px;
}

.nuda-verify__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.nuda-verify__email {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nuda-verify__status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nuda-verify__pill {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--ok);
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.nuda-verify__meta {
  color: #63636e;
  font-size: 0.75rem;
}

.nuda-verify__btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fafafa;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4375rem 0.75rem;
  border-radius: 7px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nuda-verify__btn:hover {
  background: #111114;
  border-color: rgba(255, 255, 255, 0.18);
}

.nuda-verify__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-verify__btn {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── LANGUAGE PICKER ─────────────── */
  {
    id: "language-picker",
    name: "Language Picker",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-lang">
        <button type="button" className="nuda-lang__trigger" aria-expanded="true">
          <span className="nuda-lang__flag" aria-hidden="true">🇺🇸</span>
          <span className="nuda-lang__name">English (US)</span>
          <svg className="nuda-lang__caret" viewBox="0 0 12 12" aria-hidden="true">
            <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <ul className="nuda-lang__menu" role="listbox">
          <li className="nuda-lang__opt nuda-lang__opt--active" role="option" aria-selected="true">
            <span className="nuda-lang__flag" aria-hidden="true">🇺🇸</span>
            <span>English (US)</span>
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m3 6.5 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </li>
          <li className="nuda-lang__opt" role="option"><span className="nuda-lang__flag" aria-hidden="true">🇪🇸</span><span>Español</span></li>
          <li className="nuda-lang__opt" role="option"><span className="nuda-lang__flag" aria-hidden="true">🇫🇷</span><span>Français</span></li>
          <li className="nuda-lang__opt" role="option"><span className="nuda-lang__flag" aria-hidden="true">🇯🇵</span><span>日本語</span></li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-lang{position:relative;width:100%;max-width:280px;display:flex;flex-direction:column;gap:.5rem}
      .nuda-lang__trigger{display:flex;align-items:center;gap:.625rem;width:100%;padding:.625rem .875rem;background:#0c0c10;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;font-size:.875rem;font-family:inherit;cursor:pointer;transition:border-color .2s ease}
      .nuda-lang__trigger:hover{border-color:rgba(255,255,255,.18)}
      .nuda-lang__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-lang__flag{font-size:1.1rem;line-height:1;flex-shrink:0}
      .nuda-lang__name{flex:1;text-align:left}
      .nuda-lang__caret{width:12px;height:12px;color:#a0a0a8}
      .nuda-lang__menu{margin:0;padding:.375rem;list-style:none;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:10px;display:flex;flex-direction:column;gap:1px;box-shadow:0 12px 32px rgba(0,0,0,.4)}
      .nuda-lang__opt{display:flex;align-items:center;gap:.625rem;padding:.5rem .625rem;border-radius:7px;color:#a0a0a8;font-size:.8125rem;cursor:pointer;transition:background .15s ease,color .15s ease}
      .nuda-lang__opt:hover{background:#0c0c10;color:#fafafa}
      .nuda-lang__opt span:not(.nuda-lang__flag){flex:1}
      .nuda-lang__opt svg{width:12px;height:12px;color:#e4ff54}
      .nuda-lang__opt--active{background:#0c0c10;color:#fafafa}
      @media(prefers-reduced-motion:reduce){.nuda-lang__trigger,.nuda-lang__opt{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-lang">
  <button type="button" class="nuda-lang__trigger" aria-expanded="true">
    <span class="nuda-lang__flag" aria-hidden="true">🇺🇸</span>
    <span class="nuda-lang__name">English (US)</span>
    <svg class="nuda-lang__caret" viewBox="0 0 12 12" aria-hidden="true">
      <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
  <ul class="nuda-lang__menu" role="listbox">
    <li class="nuda-lang__opt nuda-lang__opt--active" role="option" aria-selected="true">
      <span class="nuda-lang__flag" aria-hidden="true">🇺🇸</span>
      <span>English (US)</span>
      <svg viewBox="0 0 12 12" aria-hidden="true">
        <path d="m3 6.5 2 2 4-5" fill="none" stroke="currentColor"
              stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </li>
    <li class="nuda-lang__opt" role="option">
      <span class="nuda-lang__flag" aria-hidden="true">🇪🇸</span><span>Español</span>
    </li>
    <li class="nuda-lang__opt" role="option">
      <span class="nuda-lang__flag" aria-hidden="true">🇫🇷</span><span>Français</span>
    </li>
    <li class="nuda-lang__opt" role="option">
      <span class="nuda-lang__flag" aria-hidden="true">🇯🇵</span><span>日本語</span>
    </li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Language Picker
   Dropdown listing languages with flag + name + active check.
   Customize: --accent, --menu-bg */

.nuda-lang {
  --accent: #e4ff54;
  --menu-bg: #111114;
  position: relative;
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nuda-lang__trigger {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0.625rem 0.875rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  font-size: 0.875rem;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.nuda-lang__trigger:hover {
  border-color: rgba(255, 255, 255, 0.18);
}

.nuda-lang__trigger:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.nuda-lang__flag {
  font-size: 1.1rem;
  line-height: 1;
  flex-shrink: 0;
}

.nuda-lang__name {
  flex: 1;
  text-align: left;
}

.nuda-lang__caret {
  width: 12px;
  height: 12px;
  color: #a0a0a8;
}

.nuda-lang__menu {
  margin: 0;
  padding: 0.375rem;
  list-style: none;
  background: var(--menu-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.nuda-lang__opt {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  border-radius: 7px;
  color: #a0a0a8;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.nuda-lang__opt:hover {
  background: #0c0c10;
  color: #fafafa;
}

.nuda-lang__opt span:not(.nuda-lang__flag) {
  flex: 1;
}

.nuda-lang__opt svg {
  width: 12px;
  height: 12px;
  color: var(--accent);
}

.nuda-lang__opt--active {
  background: #0c0c10;
  color: #fafafa;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-lang__trigger,
  .nuda-lang__opt {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── TIME ZONE PICKER ─────────────── */
  {
    id: "time-zone-picker",
    name: "Time Zone Picker",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-tz">
        <label className="nuda-tz__search">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input type="search" placeholder="Search time zone..." defaultValue="Madrid" />
        </label>
        <ul className="nuda-tz__list" role="listbox">
          <li className="nuda-tz__item nuda-tz__item--active" role="option" aria-selected="true">
            <div className="nuda-tz__name">Europe / Madrid</div>
            <div className="nuda-tz__offset">GMT+2 · 14:32</div>
          </li>
          <li className="nuda-tz__item" role="option">
            <div className="nuda-tz__name">Europe / Lisbon</div>
            <div className="nuda-tz__offset">GMT+1 · 13:32</div>
          </li>
          <li className="nuda-tz__item" role="option">
            <div className="nuda-tz__name">Africa / Casablanca</div>
            <div className="nuda-tz__offset">GMT+1 · 13:32</div>
          </li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-tz{display:flex;flex-direction:column;gap:.5rem;padding:.625rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:340px}
      .nuda-tz__search{display:flex;align-items:center;gap:.5rem;padding:0 .75rem;background:#111114;border:1px solid rgba(255,255,255,.06);border-radius:8px;transition:border-color .2s ease}
      .nuda-tz__search:focus-within{border-color:rgba(228,255,84,.4)}
      .nuda-tz__search svg{width:14px;height:14px;color:#63636e;flex-shrink:0}
      .nuda-tz__search input{flex:1;background:transparent;border:0;outline:0;color:#fafafa;font-size:.8125rem;padding:.5rem 0;font-family:inherit}
      .nuda-tz__search input::placeholder{color:#63636e}
      .nuda-tz__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:1px;max-height:200px;overflow-y:auto}
      .nuda-tz__item{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.625rem .75rem;border-radius:7px;cursor:pointer;transition:background .15s ease}
      .nuda-tz__item:hover{background:#111114}
      .nuda-tz__item--active{background:#111114}
      .nuda-tz__item--active .nuda-tz__name{color:#e4ff54}
      .nuda-tz__name{color:#fafafa;font-size:.8125rem;font-weight:500}
      .nuda-tz__offset{color:#a0a0a8;font-size:.75rem;font-variant-numeric:tabular-nums}
      @media(prefers-reduced-motion:reduce){.nuda-tz__search,.nuda-tz__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tz">
  <label class="nuda-tz__search">
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5" />
      <path d="m11 11 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
    <input type="search" placeholder="Search time zone..." value="Madrid" />
  </label>
  <ul class="nuda-tz__list" role="listbox">
    <li class="nuda-tz__item nuda-tz__item--active" role="option" aria-selected="true">
      <div class="nuda-tz__name">Europe / Madrid</div>
      <div class="nuda-tz__offset">GMT+2 · 14:32</div>
    </li>
    <li class="nuda-tz__item" role="option">
      <div class="nuda-tz__name">Europe / Lisbon</div>
      <div class="nuda-tz__offset">GMT+1 · 13:32</div>
    </li>
    <li class="nuda-tz__item" role="option">
      <div class="nuda-tz__name">Africa / Casablanca</div>
      <div class="nuda-tz__offset">GMT+1 · 13:32</div>
    </li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Time Zone Picker
   Search input + list of selectable zones with local time.
   Customize: --accent, --card-bg */

.nuda-tz {
  --accent: #e4ff54;
  --card-bg: #0c0c10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.625rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  width: 100%;
  max-width: 340px;
}

.nuda-tz__search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.nuda-tz__search:focus-within {
  border-color: rgba(228, 255, 84, 0.4);
}

.nuda-tz__search svg {
  width: 14px;
  height: 14px;
  color: #63636e;
  flex-shrink: 0;
}

.nuda-tz__search input {
  flex: 1;
  background: transparent;
  border: 0;
  outline: 0;
  color: #fafafa;
  font-size: 0.8125rem;
  padding: 0.5rem 0;
  font-family: inherit;
}

.nuda-tz__search input::placeholder {
  color: #63636e;
}

.nuda-tz__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  max-height: 200px;
  overflow-y: auto;
}

.nuda-tz__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.nuda-tz__item:hover {
  background: #111114;
}

.nuda-tz__item--active {
  background: #111114;
}

.nuda-tz__item--active .nuda-tz__name {
  color: var(--accent);
}

.nuda-tz__name {
  color: #fafafa;
  font-size: 0.8125rem;
  font-weight: 500;
}

.nuda-tz__offset {
  color: #a0a0a8;
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tz__search,
  .nuda-tz__item {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── PRIVACY SETTING ROW ─────────────── */
  {
    id: "privacy-setting-row",
    name: "Privacy Setting Row",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-privacy">
        <div className="nuda-privacy__icon" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="nuda-privacy__info">
          <div className="nuda-privacy__name">Profile visibility</div>
          <div className="nuda-privacy__desc">Who can see your profile and activity.</div>
        </div>
        <div className="nuda-privacy__level">
          <span className="nuda-privacy__pill">Private</span>
          <svg className="nuda-privacy__chev" viewBox="0 0 12 12" aria-hidden="true">
            <path d="m4.5 3 3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-privacy{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:480px;cursor:pointer;transition:background .2s ease,border-color .2s ease}
      .nuda-privacy:hover{background:#111114;border-color:rgba(255,255,255,.1)}
      .nuda-privacy__icon{width:32px;height:32px;border-radius:8px;background:rgba(228,255,84,.08);color:#e4ff54;display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .nuda-privacy__icon svg{width:18px;height:18px}
      .nuda-privacy__info{flex:1;display:flex;flex-direction:column;gap:.125rem;min-width:0}
      .nuda-privacy__name{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-privacy__desc{color:#a0a0a8;font-size:.75rem;line-height:1.4}
      .nuda-privacy__level{display:flex;align-items:center;gap:.5rem;flex-shrink:0}
      .nuda-privacy__pill{font-size:.6875rem;font-weight:600;color:#fafafa;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);padding:.1875rem .5rem;border-radius:999px;letter-spacing:.02em}
      .nuda-privacy__chev{width:12px;height:12px;color:#63636e}
      @media(prefers-reduced-motion:reduce){.nuda-privacy{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-privacy">
  <div class="nuda-privacy__icon" aria-hidden="true">
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" stroke-width="1.5" />
      <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  </div>
  <div class="nuda-privacy__info">
    <div class="nuda-privacy__name">Profile visibility</div>
    <div class="nuda-privacy__desc">Who can see your profile and activity.</div>
  </div>
  <div class="nuda-privacy__level">
    <span class="nuda-privacy__pill">Private</span>
    <svg class="nuda-privacy__chev" viewBox="0 0 12 12" aria-hidden="true">
      <path d="m4.5 3 3 3-3 3" fill="none" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Privacy Setting Row
   Lock icon + label + current privacy level pill.
   Customize: --accent, --row-bg */

.nuda-privacy {
  --accent: #e4ff54;
  --row-bg: #0c0c10;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--row-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nuda-privacy:hover {
  background: #111114;
  border-color: rgba(255, 255, 255, 0.1);
}

.nuda-privacy__icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(228, 255, 84, 0.08);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nuda-privacy__icon svg {
  width: 18px;
  height: 18px;
}

.nuda-privacy__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.nuda-privacy__name {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-privacy__desc {
  color: #a0a0a8;
  font-size: 0.75rem;
  line-height: 1.4;
}

.nuda-privacy__level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.nuda-privacy__pill {
  font-size: 0.6875rem;
  font-weight: 600;
  color: #fafafa;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.1875rem 0.5rem;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.nuda-privacy__chev {
  width: 12px;
  height: 12px;
  color: #63636e;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-privacy {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SOUND PREFERENCES ─────────────── */
  {
    id: "sound-preferences",
    name: "Sound Preferences",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-sound">
        <div className="nuda-sound__head">
          <span className="nuda-sound__title">Sound effects</span>
          <span className="nuda-sound__val">62%</span>
        </div>
        <div className="nuda-sound__controls">
          <button type="button" className="nuda-sound__play" aria-label="Play sample">
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3.5 2.5v7l6-3.5z" fill="currentColor" />
            </svg>
          </button>
          <div className="nuda-sound__track">
            <input className="nuda-sound__slider" type="range" min={0} max={100} defaultValue={62} aria-label="Volume" />
          </div>
          <div className="nuda-sound__bars" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sound{display:flex;flex-direction:column;gap:.875rem;padding:1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:420px}
      .nuda-sound__head{display:flex;align-items:center;justify-content:space-between}
      .nuda-sound__title{color:#fafafa;font-size:.875rem;font-weight:500}
      .nuda-sound__val{color:#e4ff54;font-size:.8125rem;font-variant-numeric:tabular-nums;font-weight:600}
      .nuda-sound__controls{display:flex;align-items:center;gap:.75rem}
      .nuda-sound__play{width:32px;height:32px;border-radius:50%;background:#e4ff54;color:#09090b;border:0;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;transition:transform .2s ease,background .2s ease}
      .nuda-sound__play svg{width:12px;height:12px;margin-left:1px}
      .nuda-sound__play:hover{background:#d4ef44;transform:scale(1.05)}
      .nuda-sound__play:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sound__track{flex:1}
      .nuda-sound__slider{appearance:none;width:100%;height:4px;border-radius:999px;background:linear-gradient(90deg,#e4ff54 0 62%,rgba(255,255,255,.1) 62% 100%);cursor:pointer;outline:0}
      .nuda-sound__slider::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer}
      .nuda-sound__slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer}
      .nuda-sound__bars{display:flex;align-items:flex-end;gap:2px;height:20px;flex-shrink:0}
      .nuda-sound__bars span{width:3px;background:#e4ff54;border-radius:2px;animation:_soundbar 1.1s ease-in-out infinite}
      .nuda-sound__bars span:nth-child(1){height:40%;animation-delay:0s}
      .nuda-sound__bars span:nth-child(2){height:75%;animation-delay:.1s}
      .nuda-sound__bars span:nth-child(3){height:100%;animation-delay:.2s}
      .nuda-sound__bars span:nth-child(4){height:60%;animation-delay:.3s}
      .nuda-sound__bars span:nth-child(5){height:35%;animation-delay:.4s}
      @keyframes _soundbar{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-sound__play{transition:none}.nuda-sound__bars span{animation:none;transform:scaleY(.7)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sound">
  <div class="nuda-sound__head">
    <span class="nuda-sound__title">Sound effects</span>
    <span class="nuda-sound__val">62%</span>
  </div>
  <div class="nuda-sound__controls">
    <button type="button" class="nuda-sound__play" aria-label="Play sample">
      <svg viewBox="0 0 12 12" aria-hidden="true">
        <path d="M3.5 2.5v7l6-3.5z" fill="currentColor" />
      </svg>
    </button>
    <div class="nuda-sound__track">
      <input class="nuda-sound__slider" type="range" min="0" max="100"
             value="62" aria-label="Volume" />
    </div>
    <div class="nuda-sound__bars" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sound Preferences
   Volume slider with a sample player button and animated bars.
   Customize: --accent, --card-bg */

.nuda-sound {
  --accent: #e4ff54;
  --card-bg: #0c0c10;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.25rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  width: 100%;
  max-width: 420px;
}

.nuda-sound__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nuda-sound__title {
  color: #fafafa;
  font-size: 0.875rem;
  font-weight: 500;
}

.nuda-sound__val {
  color: var(--accent);
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.nuda-sound__controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nuda-sound__play {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  color: #09090b;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s ease, background 0.2s ease;
}

.nuda-sound__play svg {
  width: 12px;
  height: 12px;
  margin-left: 1px;
}

.nuda-sound__play:hover {
  background: #d4ef44;
  transform: scale(1.05);
}

.nuda-sound__play:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.nuda-sound__track {
  flex: 1;
}

.nuda-sound__slider {
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--accent) 0 62%,
    rgba(255, 255, 255, 0.1) 62% 100%
  );
  cursor: pointer;
  outline: 0;
}

.nuda-sound__slider::-webkit-slider-thumb {
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid var(--accent);
  cursor: pointer;
}

.nuda-sound__slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid var(--accent);
  cursor: pointer;
}

.nuda-sound__bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 20px;
  flex-shrink: 0;
}

.nuda-sound__bars span {
  width: 3px;
  background: var(--accent);
  border-radius: 2px;
  animation: nuda-sound-bar 1.1s ease-in-out infinite;
}

.nuda-sound__bars span:nth-child(1) { height: 40%;  animation-delay: 0s;   }
.nuda-sound__bars span:nth-child(2) { height: 75%;  animation-delay: 0.1s; }
.nuda-sound__bars span:nth-child(3) { height: 100%; animation-delay: 0.2s; }
.nuda-sound__bars span:nth-child(4) { height: 60%;  animation-delay: 0.3s; }
.nuda-sound__bars span:nth-child(5) { height: 35%;  animation-delay: 0.4s; }

@keyframes nuda-sound-bar {
  0%, 100% { transform: scaleY(0.4); }
  50%      { transform: scaleY(1);   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sound__play {
    transition: none;
  }
  .nuda-sound__bars span {
    animation: none;
    transform: scaleY(0.7);
  }
}`,
      },
    ],
  },

  /* ─────────────── RESET TO DEFAULTS BUTTON ─────────────── */
  {
    id: "reset-to-defaults",
    name: "Reset to Defaults Button",
    category: "Settings & Preferences",
    preview: (
      <div className="nuda-reset">
        <button type="button" className="nuda-reset__btn">
          <svg className="nuda-reset__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2.5 2.5v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Reset to defaults</span>
        </button>
        <div className="nuda-reset__confirm" role="alertdialog" aria-label="Confirm reset">
          <span className="nuda-reset__msg">Reset all preferences?</span>
          <div className="nuda-reset__actions">
            <button type="button" className="nuda-reset__cancel">Cancel</button>
            <button type="button" className="nuda-reset__yes">Reset</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-reset{position:relative;width:100%;max-width:340px;height:44px}
      .nuda-reset__btn,.nuda-reset__confirm{position:absolute;inset:0;display:flex;align-items:center;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#0c0c10;transition:opacity .25s ease,transform .25s ease,visibility .25s}
      .nuda-reset__btn{justify-content:center;gap:.5rem;color:#a0a0a8;font-size:.8125rem;font-weight:500;font-family:inherit;cursor:pointer;padding:0 1rem}
      .nuda-reset__btn:hover{color:#fafafa;border-color:rgba(255,255,255,.18)}
      .nuda-reset__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-reset__icon{width:14px;height:14px;flex-shrink:0}
      .nuda-reset__confirm{justify-content:space-between;gap:.5rem;padding:0 .375rem 0 .875rem;background:#111114;border-color:rgba(239,68,68,.3);opacity:0;visibility:hidden;transform:scale(.96)}
      .nuda-reset:hover .nuda-reset__btn,.nuda-reset:focus-within .nuda-reset__btn{opacity:0;visibility:hidden;transform:scale(.96)}
      .nuda-reset:hover .nuda-reset__confirm,.nuda-reset:focus-within .nuda-reset__confirm{opacity:1;visibility:visible;transform:scale(1)}
      .nuda-reset__msg{color:#fafafa;font-size:.8125rem;font-weight:500}
      .nuda-reset__actions{display:flex;align-items:center;gap:.25rem;flex-shrink:0}
      .nuda-reset__cancel,.nuda-reset__yes{font-family:inherit;font-size:.75rem;font-weight:500;padding:.375rem .625rem;border-radius:6px;cursor:pointer;border:0;transition:background .2s ease}
      .nuda-reset__cancel{background:transparent;color:#a0a0a8}
      .nuda-reset__cancel:hover{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-reset__yes{background:#ef4444;color:#fafafa}
      .nuda-reset__yes:hover{background:#dc2626}
      .nuda-reset__cancel:focus-visible,.nuda-reset__yes:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-reset__btn,.nuda-reset__confirm,.nuda-reset__cancel,.nuda-reset__yes{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-reset">
  <button type="button" class="nuda-reset__btn">
    <svg class="nuda-reset__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" />
      <path d="M2.5 2.5v3h3" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span>Reset to defaults</span>
  </button>
  <div class="nuda-reset__confirm" role="alertdialog" aria-label="Confirm reset">
    <span class="nuda-reset__msg">Reset all preferences?</span>
    <div class="nuda-reset__actions">
      <button type="button" class="nuda-reset__cancel">Cancel</button>
      <button type="button" class="nuda-reset__yes">Reset</button>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reset to Defaults Button
   A neutral button that morphs into a confirmation row on hover/focus.
   Customize: --danger, --card-bg */

.nuda-reset {
  --danger: #ef4444;
  --card-bg: #0c0c10;
  position: relative;
  width: 100%;
  max-width: 340px;
  height: 44px;
}

.nuda-reset__btn,
.nuda-reset__confirm {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--card-bg);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s;
}

.nuda-reset__btn {
  justify-content: center;
  gap: 0.5rem;
  color: #a0a0a8;
  font-size: 0.8125rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  padding: 0 1rem;
}

.nuda-reset__btn:hover {
  color: #fafafa;
  border-color: rgba(255, 255, 255, 0.18);
}

.nuda-reset__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

.nuda-reset__icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.nuda-reset__confirm {
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 0.375rem 0 0.875rem;
  background: #111114;
  border-color: rgba(239, 68, 68, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: scale(0.96);
}

.nuda-reset:hover .nuda-reset__btn,
.nuda-reset:focus-within .nuda-reset__btn {
  opacity: 0;
  visibility: hidden;
  transform: scale(0.96);
}

.nuda-reset:hover .nuda-reset__confirm,
.nuda-reset:focus-within .nuda-reset__confirm {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.nuda-reset__msg {
  color: #fafafa;
  font-size: 0.8125rem;
  font-weight: 500;
}

.nuda-reset__actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
}

.nuda-reset__cancel,
.nuda-reset__yes {
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.375rem 0.625rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  transition: background 0.2s ease;
}

.nuda-reset__cancel {
  background: transparent;
  color: #a0a0a8;
}

.nuda-reset__cancel:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fafafa;
}

.nuda-reset__yes {
  background: var(--danger);
  color: #fafafa;
}

.nuda-reset__yes:hover {
  background: #dc2626;
}

.nuda-reset__cancel:focus-visible,
.nuda-reset__yes:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-reset__btn,
  .nuda-reset__confirm,
  .nuda-reset__cancel,
  .nuda-reset__yes {
    transition: none;
  }
}`,
      },
    ],
  },
];
