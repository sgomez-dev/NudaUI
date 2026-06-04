import type { NudaComponent } from "./types";

export const profileHeaders: NudaComponent[] = [
  /* ─────────────── 1. BIO CARD ─────────────── */
  {
    id: "bio-card",
    name: "Bio Card",
    category: "Profile Headers",
    preview: (
      <div className="nuda-bio-card">
        <div className="nuda-bio-card__avatar">JS</div>
        <div className="nuda-bio-card__body">
          <div className="nuda-bio-card__name">Jordan Sky</div>
          <div className="nuda-bio-card__bio">
            Designer & developer crafting calm, useful interfaces.
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bio-card{display:flex;gap:14px;align-items:center;padding:16px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;max-width:340px;color:#fafafa;font-family:system-ui,sans-serif}
      .nuda-bio-card__avatar{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;font-weight:600;font-size:.95rem;color:#09090b;background:linear-gradient(135deg,#e4ff54,#6ee7b7);flex-shrink:0}
      .nuda-bio-card__body{display:flex;flex-direction:column;gap:4px;min-width:0}
      .nuda-bio-card__name{font-size:.95rem;font-weight:600;letter-spacing:-.01em}
      .nuda-bio-card__bio{font-size:.8rem;color:#a0a0a8;line-height:1.45}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bio-card">
  <div class="nuda-bio-card__avatar">JS</div>
  <div class="nuda-bio-card__body">
    <div class="nuda-bio-card__name">Jordan Sky</div>
    <div class="nuda-bio-card__bio">
      Designer & developer crafting calm, useful interfaces.
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bio Card
   Avatar with name and short bio.
   Customize: --bio-bg, --bio-accent */

.nuda-bio-card {
  --bio-bg: #0c0c10;
  --bio-accent: linear-gradient(135deg, #e4ff54, #6ee7b7);
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 16px;
  background: var(--bio-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  max-width: 340px;
  color: #fafafa;
  font-family: system-ui, sans-serif;
}

.nuda-bio-card__avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 0.95rem;
  color: #09090b;
  background: var(--bio-accent);
  flex-shrink: 0;
}

.nuda-bio-card__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.nuda-bio-card__name {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nuda-bio-card__bio {
  font-size: 0.8rem;
  color: #a0a0a8;
  line-height: 1.45;
}`,
      },
    ],
  },

  /* ─────────────── 2. BANNER + AVATAR ─────────────── */
  {
    id: "banner-avatar",
    name: "Banner + Avatar",
    category: "Profile Headers",
    preview: (
      <div className="nuda-banner-avatar">
        <div className="nuda-banner-avatar__cover" />
        <div className="nuda-banner-avatar__row">
          <div className="nuda-banner-avatar__avatar">AM</div>
          <div className="nuda-banner-avatar__meta">
            <div className="nuda-banner-avatar__name">Avery Moss</div>
            <div className="nuda-banner-avatar__handle">@averymoss</div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-banner-avatar{width:100%;max-width:360px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;color:#fafafa;font-family:system-ui,sans-serif}
      .nuda-banner-avatar__cover{height:80px;background:linear-gradient(135deg,#9d6dff 0%,#62b6ff 50%,#6ee7b7 100%)}
      .nuda-banner-avatar__row{display:flex;align-items:flex-end;gap:12px;padding:0 16px 16px;margin-top:-26px}
      .nuda-banner-avatar__avatar{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font-weight:600;color:#09090b;background:linear-gradient(135deg,#e4ff54,#ffb45e);border:3px solid #0c0c10;flex-shrink:0}
      .nuda-banner-avatar__meta{padding-bottom:4px;min-width:0}
      .nuda-banner-avatar__name{font-size:.95rem;font-weight:600}
      .nuda-banner-avatar__handle{font-size:.78rem;color:#a0a0a8}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-banner-avatar">
  <div class="nuda-banner-avatar__cover"></div>
  <div class="nuda-banner-avatar__row">
    <div class="nuda-banner-avatar__avatar">AM</div>
    <div class="nuda-banner-avatar__meta">
      <div class="nuda-banner-avatar__name">Avery Moss</div>
      <div class="nuda-banner-avatar__handle">@averymoss</div>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Banner + Avatar
   Cover gradient banner with an overlapping circular avatar.
   Customize: --cover, --avatar */

.nuda-banner-avatar {
  --cover: linear-gradient(135deg, #9d6dff 0%, #62b6ff 50%, #6ee7b7 100%);
  --avatar: linear-gradient(135deg, #e4ff54, #ffb45e);
  width: 100%;
  max-width: 360px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  color: #fafafa;
  font-family: system-ui, sans-serif;
}

.nuda-banner-avatar__cover {
  height: 80px;
  background: var(--cover);
}

.nuda-banner-avatar__row {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding: 0 16px 16px;
  margin-top: -26px;
}

.nuda-banner-avatar__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 600;
  color: #09090b;
  background: var(--avatar);
  border: 3px solid #0c0c10;
  flex-shrink: 0;
}

.nuda-banner-avatar__meta { padding-bottom: 4px; }

.nuda-banner-avatar__name {
  font-size: 0.95rem;
  font-weight: 600;
}

.nuda-banner-avatar__handle {
  font-size: 0.78rem;
  color: #a0a0a8;
}`,
      },
    ],
  },

  /* ─────────────── 3. STAT ROW ─────────────── */
  {
    id: "stat-row",
    name: "Stat Row",
    category: "Profile Headers",
    preview: (
      <div className="nuda-stat-row">
        <div className="nuda-stat-row__item">
          <div className="nuda-stat-row__num">12.4k</div>
          <div className="nuda-stat-row__label">Followers</div>
        </div>
        <div className="nuda-stat-row__sep" />
        <div className="nuda-stat-row__item">
          <div className="nuda-stat-row__num">312</div>
          <div className="nuda-stat-row__label">Following</div>
        </div>
        <div className="nuda-stat-row__sep" />
        <div className="nuda-stat-row__item">
          <div className="nuda-stat-row__num">87</div>
          <div className="nuda-stat-row__label">Posts</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-stat-row{display:flex;align-items:center;gap:0;padding:14px 18px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#fafafa;font-family:system-ui,sans-serif}
      .nuda-stat-row__item{flex:1;text-align:center;animation:_statFade .6s ease both}
      .nuda-stat-row__item:nth-child(3){animation-delay:.08s}
      .nuda-stat-row__item:nth-child(5){animation-delay:.16s}
      .nuda-stat-row__num{font-size:1.05rem;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
      .nuda-stat-row__label{font-size:.72rem;color:#63636e;text-transform:uppercase;letter-spacing:.06em;margin-top:2px}
      .nuda-stat-row__sep{width:1px;height:28px;background:rgba(255,255,255,.08)}
      @keyframes _statFade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-stat-row__item{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-stat-row">
  <div class="nuda-stat-row__item">
    <div class="nuda-stat-row__num">12.4k</div>
    <div class="nuda-stat-row__label">Followers</div>
  </div>
  <div class="nuda-stat-row__sep"></div>
  <div class="nuda-stat-row__item">
    <div class="nuda-stat-row__num">312</div>
    <div class="nuda-stat-row__label">Following</div>
  </div>
  <div class="nuda-stat-row__sep"></div>
  <div class="nuda-stat-row__item">
    <div class="nuda-stat-row__num">87</div>
    <div class="nuda-stat-row__label">Posts</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stat Row
   Three-up profile stats with tabular numerals.
   Customize: --stat-bg, --stat-num, --stat-label */

.nuda-stat-row {
  --stat-bg: #0c0c10;
  --stat-num: #fafafa;
  --stat-label: #63636e;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  background: var(--stat-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.nuda-stat-row__item {
  flex: 1;
  text-align: center;
  animation: nuda-stat-fade 0.6s ease both;
}

.nuda-stat-row__item:nth-child(3) { animation-delay: 0.08s; }
.nuda-stat-row__item:nth-child(5) { animation-delay: 0.16s; }

.nuda-stat-row__num {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--stat-num);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}

.nuda-stat-row__label {
  font-size: 0.72rem;
  color: var(--stat-label);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 2px;
}

.nuda-stat-row__sep {
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.08);
}

@keyframes nuda-stat-fade {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stat-row__item { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. SOCIAL LINKS BAR ─────────────── */
  {
    id: "social-links-bar",
    name: "Social Links Bar",
    category: "Profile Headers",
    preview: (
      <div className="nuda-social-bar">
        <a className="nuda-social-bar__item" href="#" aria-label="Twitter">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.8l-5.3-6.4L3.7 21H.7l8-9.1L0 3h7l4.8 5.8L18 3Zm-1.2 16h1.7L7.3 4.9H5.5L16.8 19Z"/></svg>
        </a>
        <a className="nuda-social-bar__item" href="#" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.11.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.42-2.7 5.39-5.27 5.68.42.36.78 1.06.78 2.15v3.18c0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
        </a>
        <a className="nuda-social-bar__item" href="#" aria-label="Dribbble">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.6 4.6a8.5 8.5 0 0 1 1.9 5.2 19 19 0 0 0-5.5-.7c-.3-.7-.6-1.4-1-2A11 11 0 0 0 18.6 6.6ZM12 3.5a8.5 8.5 0 0 1 5.5 2c-1.1.9-2.6 1.7-4.4 2.3A28 28 0 0 0 9.7 3.9 8.5 8.5 0 0 1 12 3.5ZM8 4.5a26 26 0 0 1 3.4 4 30 30 0 0 1-7.7 1A8.6 8.6 0 0 1 8 4.5ZM3.5 12v-.2a32 32 0 0 0 8.6-1.1c.2.4.4.9.6 1.3a13 13 0 0 0-7.2 5A8.5 8.5 0 0 1 3.5 12Zm2.8 6.1a11 11 0 0 1 6.4-4.5c.8 2.2 1.5 4.5 1.9 7a8.5 8.5 0 0 1-8.3-2.5Zm10 1.9a31 31 0 0 0-1.8-6.6 17 17 0 0 1 5.9.9 8.5 8.5 0 0 1-4.1 5.7Z"/></svg>
        </a>
        <a className="nuda-social-bar__item" href="#" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5a4.2 4.2 0 0 1 3.8-2c4 0 4.9 2.6 4.9 6v5.5h-4v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-4v-11Z"/></svg>
        </a>
      </div>
    ),
    cssInline: `
      .nuda-social-bar{display:inline-flex;gap:8px;padding:8px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-social-bar__item{width:34px;height:34px;display:grid;place-items:center;border-radius:8px;color:#a0a0a8;background:transparent;text-decoration:none;transition:transform .25s cubic-bezier(.2,.7,.3,1),color .2s,background .2s}
      .nuda-social-bar__item:hover{transform:translateY(-3px);color:#e4ff54;background:rgba(228,255,84,.08)}
      .nuda-social-bar__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-social-bar__item{transition:color .2s,background .2s}.nuda-social-bar__item:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-social-bar">
  <a class="nuda-social-bar__item" href="#" aria-label="Twitter">
    <!-- inline SVG icon -->
  </a>
  <a class="nuda-social-bar__item" href="#" aria-label="GitHub">…</a>
  <a class="nuda-social-bar__item" href="#" aria-label="Dribbble">…</a>
  <a class="nuda-social-bar__item" href="#" aria-label="LinkedIn">…</a>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Social Links Bar
   Row of icon buttons that lift on hover.
   Customize: --bar-bg, --link-color, --link-hover */

.nuda-social-bar {
  --bar-bg: #0c0c10;
  --link-color: #a0a0a8;
  --link-hover: #e4ff54;
  display: inline-flex;
  gap: 8px;
  padding: 8px;
  background: var(--bar-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.nuda-social-bar__item {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: var(--link-color);
  text-decoration: none;
  transition:
    transform 0.25s cubic-bezier(0.2, 0.7, 0.3, 1),
    color 0.2s,
    background 0.2s;
}

.nuda-social-bar__item:hover {
  transform: translateY(-3px);
  color: var(--link-hover);
  background: rgba(228, 255, 84, 0.08);
}

.nuda-social-bar__item:focus-visible {
  outline: 2px solid var(--link-hover);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-social-bar__item { transition: color 0.2s, background 0.2s; }
  .nuda-social-bar__item:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. EDIT PROFILE BUTTON ─────────────── */
  {
    id: "edit-profile-button",
    name: "Edit Profile Button",
    category: "Profile Headers",
    preview: (
      <button className="nuda-edit-btn" type="button" aria-label="Edit profile">
        <span className="nuda-edit-btn__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </span>
        <span className="nuda-edit-btn__label">Edit Profile</span>
      </button>
    ),
    cssInline: `
      .nuda-edit-btn{--c:#e4ff54;position:relative;display:inline-flex;align-items:center;gap:8px;padding:9px 16px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:999px;color:#fafafa;font:600 .85rem/1 system-ui,sans-serif;cursor:pointer;overflow:hidden;transition:border-color .25s,color .25s}
      .nuda-edit-btn::before{content:"";position:absolute;inset:0;background:var(--c);transform:translateY(100%);transition:transform .35s cubic-bezier(.2,.7,.3,1);z-index:0}
      .nuda-edit-btn__icon,.nuda-edit-btn__label{position:relative;z-index:1;display:inline-flex;align-items:center;transition:color .25s}
      .nuda-edit-btn:hover{border-color:var(--c);color:#09090b}
      .nuda-edit-btn:hover::before{transform:translateY(0)}
      .nuda-edit-btn:focus-visible{outline:2px solid var(--c);outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-edit-btn::before{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-edit-btn" type="button" aria-label="Edit profile">
  <span class="nuda-edit-btn__icon" aria-hidden="true">
    <!-- pencil SVG -->
  </span>
  <span class="nuda-edit-btn__label">Edit Profile</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Edit Profile Button
   Pill button with a fill-from-bottom hover.
   Customize: --c (accent color) */

.nuda-edit-btn {
  --c: #e4ff54;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: #fafafa;
  font: 600 0.85rem/1 system-ui, sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-edit-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--c);
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.3, 1);
  z-index: 0;
}

.nuda-edit-btn__icon,
.nuda-edit-btn__label {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
}

.nuda-edit-btn:hover {
  border-color: var(--c);
  color: #09090b;
}

.nuda-edit-btn:hover::before { transform: translateY(0); }

.nuda-edit-btn:focus-visible {
  outline: 2px solid var(--c);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-edit-btn::before { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. LEVEL / XP PROFILE ─────────────── */
  {
    id: "level-xp-profile",
    name: "Level XP Profile",
    category: "Profile Headers",
    preview: (
      <div className="nuda-xp">
        <div className="nuda-xp__ring">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="29" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="3" />
            <circle className="nuda-xp__progress" cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" pathLength={100} strokeDasharray="68 100" transform="rotate(-90 32 32)" />
          </svg>
          <div className="nuda-xp__avatar">RK</div>
          <div className="nuda-xp__lvl">12</div>
        </div>
        <div className="nuda-xp__meta">
          <div className="nuda-xp__name">Rune Kahn</div>
          <div className="nuda-xp__sub">680 / 1000 XP</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-xp{display:flex;gap:14px;align-items:center;padding:14px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:system-ui,sans-serif}
      .nuda-xp__ring{position:relative;width:64px;height:64px;color:#e4ff54;flex-shrink:0}
      .nuda-xp__ring svg{width:100%;height:100%}
      .nuda-xp__progress{stroke-dasharray:0 100;animation:_xpfill 1.2s cubic-bezier(.2,.7,.3,1) forwards}
      .nuda-xp__avatar{position:absolute;inset:6px;border-radius:50%;display:grid;place-items:center;font-weight:600;font-size:.85rem;color:#09090b;background:linear-gradient(135deg,#62b6ff,#9d6dff)}
      .nuda-xp__lvl{position:absolute;bottom:-2px;right:-2px;background:#e4ff54;color:#09090b;font-size:.65rem;font-weight:700;padding:2px 6px;border-radius:999px;border:2px solid #0c0c10;line-height:1}
      .nuda-xp__name{font-size:.95rem;font-weight:600}
      .nuda-xp__sub{font-size:.78rem;color:#a0a0a8;font-variant-numeric:tabular-nums}
      @keyframes _xpfill{from{stroke-dasharray:0 100}to{stroke-dasharray:68 100}}
      @media(prefers-reduced-motion:reduce){.nuda-xp__progress{animation:none;stroke-dasharray:68 100}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-xp">
  <div class="nuda-xp__ring">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="none"
        stroke="rgba(255,255,255,.08)" stroke-width="3"/>
      <circle class="nuda-xp__progress" cx="32" cy="32" r="29"
        fill="none" stroke="currentColor" stroke-width="3"
        stroke-linecap="round" pathLength="100"
        stroke-dasharray="68 100" transform="rotate(-90 32 32)"/>
    </svg>
    <div class="nuda-xp__avatar">RK</div>
    <div class="nuda-xp__lvl">12</div>
  </div>
  <div class="nuda-xp__meta">
    <div class="nuda-xp__name">Rune Kahn</div>
    <div class="nuda-xp__sub">680 / 1000 XP</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Level / XP Profile
   Avatar with circular XP progress ring + level badge.
   Customize: --c (ring color), stroke-dasharray (XP %) */

.nuda-xp {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 14px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: system-ui, sans-serif;
}

.nuda-xp__ring {
  position: relative;
  width: 64px;
  height: 64px;
  color: #e4ff54;
  flex-shrink: 0;
}

.nuda-xp__progress {
  stroke-dasharray: 0 100;
  animation: nuda-xp-fill 1.2s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
}

@keyframes nuda-xp-fill {
  from { stroke-dasharray: 0 100; }
  to   { stroke-dasharray: 68 100; }
}

.nuda-xp__avatar {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 0.85rem;
  color: #09090b;
  background: linear-gradient(135deg, #62b6ff, #9d6dff);
}

.nuda-xp__lvl {
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: #e4ff54;
  color: #09090b;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 999px;
  border: 2px solid #0c0c10;
  line-height: 1;
}

.nuda-xp__name { font-size: 0.95rem; font-weight: 600; }
.nuda-xp__sub  { font-size: 0.78rem; color: #a0a0a8; font-variant-numeric: tabular-nums; }

@media (prefers-reduced-motion: reduce) {
  .nuda-xp__progress {
    animation: none;
    stroke-dasharray: 68 100;
  }
}`,
      },
    ],
  },

  /* ─────────────── 7. VERIFIED CHECKMARK BADGE ─────────────── */
  {
    id: "verified-checkmark",
    name: "Verified Checkmark Badge",
    category: "Profile Headers",
    preview: (
      <div className="nuda-verified">
        <span className="nuda-verified__name">Mira Vale</span>
        <span className="nuda-verified__badge" aria-label="Verified">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path className="nuda-verified__star" d="M12 1.5l2 3 3.4-.5 1 3.3 3.1 1.7-1.7 3 1.7 3-3.1 1.7-1 3.3-3.4-.5-2 3-2-3-3.4.5-1-3.3L1.5 15l1.7-3-1.7-3L4.6 7.3l1-3.3 3.4.5 2-3Z" fill="currentColor" />
            <path className="nuda-verified__check" d="M7.5 12.2l3 3 6-6" fill="none" stroke="#09090b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-verified{display:inline-flex;align-items:center;gap:6px;color:#fafafa;font-family:system-ui,sans-serif;font-size:.95rem;font-weight:600}
      .nuda-verified__badge{display:inline-flex;color:#62b6ff;animation:_verifiedPop .5s cubic-bezier(.2,1.4,.3,1) both}
      .nuda-verified__star{transform-origin:center;animation:_verifiedSpin .8s cubic-bezier(.2,.7,.3,1) both}
      .nuda-verified__check{stroke-dasharray:14;stroke-dashoffset:14;animation:_verifiedDraw .5s ease-out .35s forwards}
      @keyframes _verifiedPop{from{transform:scale(0)}to{transform:scale(1)}}
      @keyframes _verifiedSpin{from{transform:rotate(-90deg) scale(.6)}to{transform:rotate(0) scale(1)}}
      @keyframes _verifiedDraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-verified__badge,.nuda-verified__star{animation:none}.nuda-verified__check{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-verified">
  <span class="nuda-verified__name">Mira Vale</span>
  <span class="nuda-verified__badge" aria-label="Verified">
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path class="nuda-verified__star"
        d="M12 1.5l2 3 3.4-.5 1 3.3 3.1 1.7-1.7 3 1.7 3-3.1 1.7
           -1 3.3-3.4-.5-2 3-2-3-3.4.5-1-3.3L1.5 15l1.7-3-1.7-3
           L4.6 7.3l1-3.3 3.4.5 2-3Z"
        fill="currentColor"/>
      <path class="nuda-verified__check" d="M7.5 12.2l3 3 6-6"
        fill="none" stroke="#09090b" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Verified Checkmark Badge
   Animated star that pops in then draws a check.
   Customize: --c (badge color) */

.nuda-verified {
  --c: #62b6ff;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #fafafa;
  font-family: system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
}

.nuda-verified__badge {
  display: inline-flex;
  color: var(--c);
  animation: nuda-verified-pop 0.5s cubic-bezier(0.2, 1.4, 0.3, 1) both;
}

.nuda-verified__star {
  transform-origin: center;
  animation: nuda-verified-spin 0.8s cubic-bezier(0.2, 0.7, 0.3, 1) both;
}

.nuda-verified__check {
  stroke-dasharray: 14;
  stroke-dashoffset: 14;
  animation: nuda-verified-draw 0.5s ease-out 0.35s forwards;
}

@keyframes nuda-verified-pop  { from { transform: scale(0); } to { transform: scale(1); } }
@keyframes nuda-verified-spin { from { transform: rotate(-90deg) scale(0.6); } to { transform: rotate(0) scale(1); } }
@keyframes nuda-verified-draw { to { stroke-dashoffset: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-verified__badge,
  .nuda-verified__star { animation: none; }
  .nuda-verified__check { animation: none; stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 8. STATUS PRESENCE DOT ─────────────── */
  {
    id: "status-presence",
    name: "Status Presence Dot",
    category: "Profile Headers",
    preview: (
      <div className="nuda-presence">
        <div className="nuda-presence__row">
          <div className="nuda-presence__avatar" data-status="online">KO</div>
          <div className="nuda-presence__label">Kai Okada<span>Online</span></div>
        </div>
        <div className="nuda-presence__row">
          <div className="nuda-presence__avatar" data-status="away">LI</div>
          <div className="nuda-presence__label">Lina Iverson<span>Away</span></div>
        </div>
        <div className="nuda-presence__row">
          <div className="nuda-presence__avatar" data-status="offline">SP</div>
          <div className="nuda-presence__label">Sam Park<span>Offline</span></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-presence{display:flex;flex-direction:column;gap:10px;padding:14px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#fafafa;font-family:system-ui,sans-serif;min-width:200px}
      .nuda-presence__row{display:flex;gap:10px;align-items:center}
      .nuda-presence__avatar{position:relative;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-size:.78rem;font-weight:600;color:#09090b;background:linear-gradient(135deg,#e4ff54,#62b6ff);flex-shrink:0}
      .nuda-presence__avatar::after{content:"";position:absolute;right:-1px;bottom:-1px;width:11px;height:11px;border-radius:50%;border:2px solid #0c0c10;background:#63636e}
      .nuda-presence__avatar[data-status="online"]::after{background:#6ee7b7;box-shadow:0 0 0 0 rgba(110,231,183,.6);animation:_pulseRing 2s ease-out infinite}
      .nuda-presence__avatar[data-status="away"]::after{background:#ffb45e}
      .nuda-presence__avatar[data-status="offline"]::after{background:#63636e}
      .nuda-presence__label{font-size:.85rem;font-weight:500;display:flex;flex-direction:column;gap:1px}
      .nuda-presence__label span{font-size:.72rem;color:#a0a0a8;font-weight:400}
      @keyframes _pulseRing{0%{box-shadow:0 0 0 0 rgba(110,231,183,.6)}100%{box-shadow:0 0 0 8px rgba(110,231,183,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-presence__avatar[data-status="online"]::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-presence">
  <div class="nuda-presence__row">
    <div class="nuda-presence__avatar" data-status="online">KO</div>
    <div class="nuda-presence__label">Kai Okada<span>Online</span></div>
  </div>
  <div class="nuda-presence__row">
    <div class="nuda-presence__avatar" data-status="away">LI</div>
    <div class="nuda-presence__label">Lina Iverson<span>Away</span></div>
  </div>
  <div class="nuda-presence__row">
    <div class="nuda-presence__avatar" data-status="offline">SP</div>
    <div class="nuda-presence__label">Sam Park<span>Offline</span></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Status Presence Dot
   Avatar with a status dot: online (pulsing), away, offline.
   Customize: data-status attribute */

.nuda-presence__avatar {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: #09090b;
  background: linear-gradient(135deg, #e4ff54, #62b6ff);
}

.nuda-presence__avatar::after {
  content: "";
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid #0c0c10;
  background: #63636e;
}

.nuda-presence__avatar[data-status="online"]::after {
  background: #6ee7b7;
  animation: nuda-presence-pulse 2s ease-out infinite;
}

.nuda-presence__avatar[data-status="away"]::after  { background: #ffb45e; }
.nuda-presence__avatar[data-status="offline"]::after { background: #63636e; }

@keyframes nuda-presence-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(110, 231, 183, 0.6); }
  100% { box-shadow: 0 0 0 8px rgba(110, 231, 183, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-presence__avatar[data-status="online"]::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. FOLLOW BUTTON ─────────────── */
  {
    id: "follow-button",
    name: "Follow Button",
    category: "Profile Headers",
    preview: (
      <div className="nuda-follow">
        <button className="nuda-follow__btn" type="button">
          <span className="nuda-follow__plus" aria-hidden="true">+</span>
          <span>Follow</span>
        </button>
        <button className="nuda-follow__btn nuda-follow__btn--active" type="button">
          <span className="nuda-follow__check" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span>Following</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-follow{display:flex;gap:10px;font-family:system-ui,sans-serif}
      .nuda-follow__btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:999px;font-size:.82rem;font-weight:600;cursor:pointer;border:1px solid #e4ff54;background:#e4ff54;color:#09090b;transition:transform .2s,background .25s,color .25s,border-color .25s}
      .nuda-follow__btn:hover{transform:translateY(-1px)}
      .nuda-follow__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-follow__btn--active{background:transparent;color:#fafafa;border-color:rgba(255,255,255,.18)}
      .nuda-follow__btn--active:hover{border-color:#ff5e7a;color:#ff5e7a}
      .nuda-follow__plus{font-size:1rem;line-height:0;transition:transform .25s}
      .nuda-follow__btn:hover .nuda-follow__plus{transform:rotate(90deg)}
      .nuda-follow__check{display:inline-flex;animation:_followPop .4s cubic-bezier(.2,1.4,.3,1) both}
      @keyframes _followPop{from{transform:scale(0)}to{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-follow__btn:hover{transform:none}.nuda-follow__plus,.nuda-follow__check{animation:none;transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-follow__btn" type="button">
  <span class="nuda-follow__plus" aria-hidden="true">+</span>
  <span>Follow</span>
</button>

<!-- Active state -->
<button class="nuda-follow__btn nuda-follow__btn--active" type="button">
  <span class="nuda-follow__check" aria-hidden="true"><!-- check SVG --></span>
  <span>Following</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Follow Button
   Pill button that toggles between Follow and Following states.
   Toggle the .nuda-follow__btn--active class to switch. */

.nuda-follow__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #e4ff54;
  background: #e4ff54;
  color: #09090b;
  transition:
    transform 0.2s,
    background 0.25s,
    color 0.25s,
    border-color 0.25s;
}

.nuda-follow__btn:hover { transform: translateY(-1px); }

.nuda-follow__btn--active {
  background: transparent;
  color: #fafafa;
  border-color: rgba(255, 255, 255, 0.18);
}

.nuda-follow__btn--active:hover {
  border-color: #ff5e7a;
  color: #ff5e7a;
}

.nuda-follow__plus {
  font-size: 1rem;
  line-height: 0;
  transition: transform 0.25s;
}

.nuda-follow__btn:hover .nuda-follow__plus { transform: rotate(90deg); }

.nuda-follow__check {
  display: inline-flex;
  animation: nuda-follow-pop 0.4s cubic-bezier(0.2, 1.4, 0.3, 1) both;
}

@keyframes nuda-follow-pop {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-follow__btn:hover { transform: none; }
  .nuda-follow__plus,
  .nuda-follow__check { animation: none; transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Toggle Follow / Following state on click
document.querySelectorAll('.nuda-follow__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('nuda-follow__btn--active');
    const label = btn.querySelector('span:last-child');
    if (label) {
      label.textContent = btn.classList.contains('nuda-follow__btn--active')
        ? 'Following'
        : 'Follow';
    }
  });
});`,
      },
    ],
  },

  /* ─────────────── 10. FOLLOWER COUNT TICK-UP ─────────────── */
  {
    id: "follower-count-tick",
    name: "Follower Count Tick-Up",
    category: "Profile Headers",
    preview: (
      <div className="nuda-tick">
        <div className="nuda-tick__num" aria-label="12480 followers">
          <span>1</span>
          <span>2</span>
          <span>,</span>
          <span>4</span>
          <span>8</span>
          <span>0</span>
        </div>
        <div className="nuda-tick__label">Followers</div>
      </div>
    ),
    cssInline: `
      .nuda-tick{display:inline-flex;flex-direction:column;align-items:center;gap:4px;padding:14px 22px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px;font-family:system-ui,sans-serif;color:#fafafa}
      .nuda-tick__num{display:inline-flex;font-size:1.4rem;font-weight:700;font-variant-numeric:tabular-nums;letter-spacing:-.02em;overflow:hidden}
      .nuda-tick__num span{display:inline-block;animation:_tickRoll 1s cubic-bezier(.2,.7,.3,1) both}
      .nuda-tick__num span:nth-child(1){animation-delay:0s}
      .nuda-tick__num span:nth-child(2){animation-delay:.08s}
      .nuda-tick__num span:nth-child(3){animation-delay:.16s}
      .nuda-tick__num span:nth-child(4){animation-delay:.24s}
      .nuda-tick__num span:nth-child(5){animation-delay:.32s}
      .nuda-tick__num span:nth-child(6){animation-delay:.4s}
      .nuda-tick__label{font-size:.72rem;color:#63636e;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _tickRoll{from{transform:translateY(100%);opacity:0}to{transform:none;opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-tick__num span{animation:none;transform:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tick">
  <div class="nuda-tick__num" aria-label="12480 followers">
    <span>1</span><span>2</span><span>,</span>
    <span>4</span><span>8</span><span>0</span>
  </div>
  <div class="nuda-tick__label">Followers</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Follower Count Tick-Up
   Numbers roll in one digit at a time.
   Customize: --tick-color, font-size */

.nuda-tick {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 14px 22px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  font-family: system-ui, sans-serif;
  color: #fafafa;
}

.nuda-tick__num {
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  overflow: hidden;
}

.nuda-tick__num span {
  display: inline-block;
  animation: nuda-tick-roll 1s cubic-bezier(0.2, 0.7, 0.3, 1) both;
}

.nuda-tick__num span:nth-child(1) { animation-delay: 0s; }
.nuda-tick__num span:nth-child(2) { animation-delay: 0.08s; }
.nuda-tick__num span:nth-child(3) { animation-delay: 0.16s; }
.nuda-tick__num span:nth-child(4) { animation-delay: 0.24s; }
.nuda-tick__num span:nth-child(5) { animation-delay: 0.32s; }
.nuda-tick__num span:nth-child(6) { animation-delay: 0.4s; }

.nuda-tick__label {
  font-size: 0.72rem;
  color: #63636e;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@keyframes nuda-tick-roll {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: none; opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tick__num span { animation: none; transform: none; opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── 11. PRONOUNS PILL ─────────────── */
  {
    id: "pronouns-pill",
    name: "Pronouns Pill",
    category: "Profile Headers",
    preview: (
      <div className="nuda-pronouns">
        <span className="nuda-pronouns__pill">she / her</span>
        <span className="nuda-pronouns__pill">they / them</span>
        <span className="nuda-pronouns__pill">he / him</span>
      </div>
    ),
    cssInline: `
      .nuda-pronouns{display:inline-flex;gap:6px;flex-wrap:wrap;font-family:system-ui,sans-serif}
      .nuda-pronouns__pill{display:inline-flex;align-items:center;padding:4px 10px;font-size:.72rem;font-weight:500;letter-spacing:.01em;color:#a0a0a8;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:999px;transition:color .2s,border-color .2s,background .2s}
      .nuda-pronouns__pill:hover{color:#e4ff54;border-color:rgba(228,255,84,.3);background:rgba(228,255,84,.06)}
      @media(prefers-reduced-motion:reduce){.nuda-pronouns__pill{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pronouns">
  <span class="nuda-pronouns__pill">she / her</span>
  <span class="nuda-pronouns__pill">they / them</span>
  <span class="nuda-pronouns__pill">he / him</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pronouns Pill
   Subtle outlined pill for pronoun display.
   Customize: --pill-bg, --pill-text, --pill-accent */

.nuda-pronouns {
  --pill-bg: rgba(255, 255, 255, 0.04);
  --pill-text: #a0a0a8;
  --pill-accent: #e4ff54;
  display: inline-flex;
  gap: 6px;
  flex-wrap: wrap;
  font-family: system-ui, sans-serif;
}

.nuda-pronouns__pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--pill-text);
  background: var(--pill-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.nuda-pronouns__pill:hover {
  color: var(--pill-accent);
  border-color: rgba(228, 255, 84, 0.3);
  background: rgba(228, 255, 84, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pronouns__pill { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 12. COMPACT PROFILE PILL ─────────────── */
  {
    id: "compact-profile-pill",
    name: "Compact Profile Pill",
    category: "Profile Headers",
    preview: (
      <div className="nuda-compact-pill">
        <div className="nuda-compact-pill__avatar">NV</div>
        <div className="nuda-compact-pill__text">
          <span className="nuda-compact-pill__name">Nora Vance</span>
          <span className="nuda-compact-pill__handle">@nvance</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-compact-pill{display:inline-flex;align-items:center;gap:8px;padding:4px 12px 4px 4px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:999px;color:#fafafa;font-family:system-ui,sans-serif;transition:border-color .2s,background .2s;cursor:pointer}
      .nuda-compact-pill:hover{border-color:rgba(228,255,84,.3);background:rgba(228,255,84,.04)}
      .nuda-compact-pill__avatar{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:.7rem;font-weight:600;color:#09090b;background:linear-gradient(135deg,#ff6dd4,#9d6dff);flex-shrink:0}
      .nuda-compact-pill__text{display:inline-flex;align-items:baseline;gap:6px;line-height:1.1}
      .nuda-compact-pill__name{font-size:.82rem;font-weight:600}
      .nuda-compact-pill__handle{font-size:.72rem;color:#63636e}
      @media(prefers-reduced-motion:reduce){.nuda-compact-pill{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-compact-pill">
  <div class="nuda-compact-pill__avatar">NV</div>
  <div class="nuda-compact-pill__text">
    <span class="nuda-compact-pill__name">Nora Vance</span>
    <span class="nuda-compact-pill__handle">@nvance</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Compact Profile Pill
   Inline avatar + name pill, great for mentions or chips.
   Customize: --avatar gradient, pill bg */

.nuda-compact-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  color: #fafafa;
  font-family: system-ui, sans-serif;
  transition: border-color 0.2s, background 0.2s;
  cursor: pointer;
}

.nuda-compact-pill:hover {
  border-color: rgba(228, 255, 84, 0.3);
  background: rgba(228, 255, 84, 0.04);
}

.nuda-compact-pill__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: #09090b;
  background: linear-gradient(135deg, #ff6dd4, #9d6dff);
  flex-shrink: 0;
}

.nuda-compact-pill__text {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  line-height: 1.1;
}

.nuda-compact-pill__name   { font-size: 0.82rem; font-weight: 600; }
.nuda-compact-pill__handle { font-size: 0.72rem; color: #63636e; }

@media (prefers-reduced-motion: reduce) {
  .nuda-compact-pill { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 13. PROFILE SKELETON LOADER ─────────────── */
  {
    id: "profile-skeleton-card",
    name: "Profile Skeleton Loader",
    category: "Profile Headers",
    preview: (
      <div className="nuda-skel" aria-busy="true" aria-live="polite">
        <div className="nuda-skel__avatar" />
        <div className="nuda-skel__lines">
          <div className="nuda-skel__line nuda-skel__line--name" />
          <div className="nuda-skel__line nuda-skel__line--sub" />
          <div className="nuda-skel__line nuda-skel__line--bio" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-skel{display:flex;gap:14px;padding:16px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;max-width:320px;width:100%}
      .nuda-skel__avatar{width:48px;height:48px;border-radius:50%;flex-shrink:0;background:linear-gradient(90deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.1) 50%,rgba(255,255,255,.04) 100%);background-size:200% 100%;animation:_skelShim 1.4s ease-in-out infinite}
      .nuda-skel__lines{flex:1;display:flex;flex-direction:column;gap:8px;justify-content:center}
      .nuda-skel__line{height:10px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.1) 50%,rgba(255,255,255,.04) 100%);background-size:200% 100%;animation:_skelShim 1.4s ease-in-out infinite}
      .nuda-skel__line--name{width:55%;height:12px;animation-delay:.05s}
      .nuda-skel__line--sub{width:35%;animation-delay:.1s}
      .nuda-skel__line--bio{width:90%;animation-delay:.15s}
      @keyframes _skelShim{0%{background-position:200% 0}100%{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skel__avatar,.nuda-skel__line{animation:none;background:rgba(255,255,255,.06)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skel" aria-busy="true" aria-live="polite">
  <div class="nuda-skel__avatar"></div>
  <div class="nuda-skel__lines">
    <div class="nuda-skel__line nuda-skel__line--name"></div>
    <div class="nuda-skel__line nuda-skel__line--sub"></div>
    <div class="nuda-skel__line nuda-skel__line--bio"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Profile Skeleton Loader
   Shimmering avatar + lines for loading state.
   Customize: --skel-base, --skel-shine */

.nuda-skel {
  --skel-base: rgba(255, 255, 255, 0.04);
  --skel-shine: rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 14px;
  padding: 16px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  max-width: 320px;
  width: 100%;
}

.nuda-skel__avatar,
.nuda-skel__line {
  background: linear-gradient(
    90deg,
    var(--skel-base) 0,
    var(--skel-shine) 50%,
    var(--skel-base) 100%
  );
  background-size: 200% 100%;
  animation: nuda-skel-shimmer 1.4s ease-in-out infinite;
}

.nuda-skel__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
}

.nuda-skel__lines {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.nuda-skel__line {
  height: 10px;
  border-radius: 6px;
}

.nuda-skel__line--name { width: 55%; height: 12px; animation-delay: 0.05s; }
.nuda-skel__line--sub  { width: 35%; animation-delay: 0.1s; }
.nuda-skel__line--bio  { width: 90%; animation-delay: 0.15s; }

@keyframes nuda-skel-shimmer {
  0%   { background-position:  200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-skel__avatar,
  .nuda-skel__line {
    animation: none;
    background: rgba(255, 255, 255, 0.06);
  }
}`,
      },
    ],
  },

  /* ─────────────── 14. HERO PROFILE ─────────────── */
  {
    id: "hero-profile",
    name: "Hero Profile",
    category: "Profile Headers",
    preview: (
      <div className="nuda-hero">
        <div className="nuda-hero__bg" aria-hidden="true" />
        <div className="nuda-hero__avatar">EQ</div>
        <h2 className="nuda-hero__name">Elias Quill</h2>
        <p className="nuda-hero__role">Principal Product Designer</p>
        <div className="nuda-hero__tags">
          <span>San Francisco</span>
          <span>Open to work</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-hero{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 24px 24px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:18px;overflow:hidden;text-align:center;color:#fafafa;font-family:system-ui,sans-serif;max-width:340px}
      .nuda-hero__bg{position:absolute;inset:0;background:radial-gradient(60% 80% at 30% 0%,rgba(228,255,84,.18),transparent 60%),radial-gradient(50% 70% at 80% 20%,rgba(157,109,255,.22),transparent 60%),#0c0c10;animation:_heroFloat 8s ease-in-out infinite alternate;z-index:0}
      .nuda-hero>*:not(.nuda-hero__bg){position:relative;z-index:1}
      .nuda-hero__avatar{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;font-size:1.05rem;font-weight:700;color:#09090b;background:linear-gradient(135deg,#e4ff54,#ff6dd4);border:3px solid #0c0c10;box-shadow:0 8px 24px -8px rgba(228,255,84,.4)}
      .nuda-hero__name{margin:6px 0 0;font-size:1.4rem;font-weight:700;letter-spacing:-.02em;background:linear-gradient(135deg,#fafafa,#a0a0a8);-webkit-background-clip:text;background-clip:text;color:transparent}
      .nuda-hero__role{margin:0;font-size:.85rem;color:#a0a0a8}
      .nuda-hero__tags{display:inline-flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-top:6px}
      .nuda-hero__tags span{font-size:.7rem;padding:3px 9px;border-radius:999px;background:rgba(255,255,255,.05);color:#a0a0a8;border:1px solid rgba(255,255,255,.08)}
      @keyframes _heroFloat{from{transform:translate3d(0,0,0)}to{transform:translate3d(-6px,4px,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-hero__bg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-hero">
  <div class="nuda-hero__bg" aria-hidden="true"></div>
  <div class="nuda-hero__avatar">EQ</div>
  <h2 class="nuda-hero__name">Elias Quill</h2>
  <p class="nuda-hero__role">Principal Product Designer</p>
  <div class="nuda-hero__tags">
    <span>San Francisco</span>
    <span>Open to work</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Hero Profile
   Large profile header with gradient backdrop and gradient text name.
   Customize: --hero-bg, avatar gradient */

.nuda-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 24px 24px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  color: #fafafa;
  font-family: system-ui, sans-serif;
  max-width: 340px;
}

.nuda-hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 80% at 30% 0%, rgba(228, 255, 84, 0.18), transparent 60%),
    radial-gradient(50% 70% at 80% 20%, rgba(157, 109, 255, 0.22), transparent 60%),
    #0c0c10;
  animation: nuda-hero-float 8s ease-in-out infinite alternate;
}

.nuda-hero > *:not(.nuda-hero__bg) { position: relative; z-index: 1; }

.nuda-hero__avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.05rem;
  font-weight: 700;
  color: #09090b;
  background: linear-gradient(135deg, #e4ff54, #ff6dd4);
  border: 3px solid #0c0c10;
  box-shadow: 0 8px 24px -8px rgba(228, 255, 84, 0.4);
}

.nuda-hero__name {
  margin: 6px 0 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #fafafa, #a0a0a8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nuda-hero__role { margin: 0; font-size: 0.85rem; color: #a0a0a8; }

.nuda-hero__tags span {
  font-size: 0.7rem;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: #a0a0a8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@keyframes nuda-hero-float {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-6px, 4px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hero__bg { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 15. MEMBER SINCE BADGE ─────────────── */
  {
    id: "member-since",
    name: "Member Since Badge",
    category: "Profile Headers",
    preview: (
      <div className="nuda-since">
        <span className="nuda-since__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>
        </span>
        <span className="nuda-since__label">Member since</span>
        <span className="nuda-since__date">Mar 2021</span>
      </div>
    ),
    cssInline: `
      .nuda-since{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:999px;font-family:system-ui,sans-serif;font-size:.78rem;color:#a0a0a8}
      .nuda-since__icon{display:inline-flex;color:#e4ff54}
      .nuda-since__label{color:#a0a0a8}
      .nuda-since__date{color:#fafafa;font-weight:600;font-variant-numeric:tabular-nums}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-since">
  <span class="nuda-since__icon" aria-hidden="true">
    <!-- calendar SVG -->
  </span>
  <span class="nuda-since__label">Member since</span>
  <span class="nuda-since__date">Mar 2021</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Member Since Badge
   Minimal pill with a calendar icon and date.
   Customize: --since-accent, --since-text */

.nuda-since {
  --since-accent: #e4ff54;
  --since-text: #a0a0a8;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  font-family: system-ui, sans-serif;
  font-size: 0.78rem;
  color: var(--since-text);
}

.nuda-since__icon  { display: inline-flex; color: var(--since-accent); }
.nuda-since__label { color: var(--since-text); }

.nuda-since__date {
  color: #fafafa;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}`,
      },
    ],
  },

  /* ─────────────── 16. ACHIEVEMENTS STRIP ─────────────── */
  {
    id: "achievements-strip",
    name: "Achievements Strip",
    category: "Profile Headers",
    preview: (
      <div className="nuda-achievements">
        <div className="nuda-achievements__avatar">TM</div>
        <div className="nuda-achievements__medals">
          <div className="nuda-achievements__medal" data-tone="gold" title="Top contributor">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l3 6 6 .9-4.5 4.4 1 6.4L12 16.8 6.5 19.7l1-6.4L3 8.9 9 8z"/></svg>
          </div>
          <div className="nuda-achievements__medal" data-tone="silver" title="100 days streak">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M13 3l-1 9h7l-9 9 1-9H4z"/></svg>
          </div>
          <div className="nuda-achievements__medal" data-tone="pink" title="Community love">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"/></svg>
          </div>
          <div className="nuda-achievements__medal" data-tone="blue" title="Mentor">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-9 2-9 6v1h18v-1c0-4-5-6-9-6z"/></svg>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-achievements{display:inline-flex;align-items:center;gap:10px;padding:8px 12px 8px 8px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:999px;font-family:system-ui,sans-serif}
      .nuda-achievements__avatar{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:.72rem;font-weight:600;color:#09090b;background:linear-gradient(135deg,#e4ff54,#62b6ff)}
      .nuda-achievements__medals{display:inline-flex;gap:4px}
      .nuda-achievements__medal{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.08);transition:transform .25s cubic-bezier(.2,.7,.3,1);cursor:default}
      .nuda-achievements__medal:hover{transform:translateY(-2px) scale(1.08)}
      .nuda-achievements__medal[data-tone="gold"]{color:#09090b;background:linear-gradient(135deg,#ffb45e,#e4ff54)}
      .nuda-achievements__medal[data-tone="silver"]{color:#09090b;background:linear-gradient(135deg,#d0d0d8,#a0a0a8)}
      .nuda-achievements__medal[data-tone="pink"]{color:#09090b;background:linear-gradient(135deg,#ff6dd4,#ff5e7a)}
      .nuda-achievements__medal[data-tone="blue"]{color:#09090b;background:linear-gradient(135deg,#62b6ff,#9d6dff)}
      @media(prefers-reduced-motion:reduce){.nuda-achievements__medal{transition:none}.nuda-achievements__medal:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-achievements">
  <div class="nuda-achievements__avatar">TM</div>
  <div class="nuda-achievements__medals">
    <div class="nuda-achievements__medal" data-tone="gold"   title="Top contributor"><!-- star --></div>
    <div class="nuda-achievements__medal" data-tone="silver" title="100 days streak"><!-- bolt --></div>
    <div class="nuda-achievements__medal" data-tone="pink"   title="Community love"><!-- heart --></div>
    <div class="nuda-achievements__medal" data-tone="blue"   title="Mentor"><!-- user --></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Achievements Strip
   Avatar + row of tonal medal chips.
   Customize: data-tone variants */

.nuda-achievements {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 8px 8px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  font-family: system-ui, sans-serif;
}

.nuda-achievements__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.72rem;
  font-weight: 600;
  color: #09090b;
  background: linear-gradient(135deg, #e4ff54, #62b6ff);
}

.nuda-achievements__medals { display: inline-flex; gap: 4px; }

.nuda-achievements__medal {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s cubic-bezier(0.2, 0.7, 0.3, 1);
}

.nuda-achievements__medal:hover { transform: translateY(-2px) scale(1.08); }

.nuda-achievements__medal[data-tone="gold"]   { color: #09090b; background: linear-gradient(135deg, #ffb45e, #e4ff54); }
.nuda-achievements__medal[data-tone="silver"] { color: #09090b; background: linear-gradient(135deg, #d0d0d8, #a0a0a8); }
.nuda-achievements__medal[data-tone="pink"]   { color: #09090b; background: linear-gradient(135deg, #ff6dd4, #ff5e7a); }
.nuda-achievements__medal[data-tone="blue"]   { color: #09090b; background: linear-gradient(135deg, #62b6ff, #9d6dff); }

@media (prefers-reduced-motion: reduce) {
  .nuda-achievements__medal { transition: none; }
  .nuda-achievements__medal:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 17. PROFILE HOVER CARD ─────────────── */
  {
    id: "profile-hover-card",
    name: "Profile Hover Card",
    category: "Profile Headers",
    preview: (
      <div className="nuda-hover">
        <button className="nuda-hover__trigger" type="button">@iv_solis</button>
        <div className="nuda-hover__card" role="tooltip">
          <div className="nuda-hover__cover" />
          <div className="nuda-hover__head">
            <div className="nuda-hover__avatar">IS</div>
            <button className="nuda-hover__follow" type="button">Follow</button>
          </div>
          <div className="nuda-hover__name">Iv Solis</div>
          <div className="nuda-hover__bio">Frontend engineer · Berlin · coffee enjoyer ☕</div>
          <div className="nuda-hover__stats">
            <span><strong>2,341</strong> Followers</span>
            <span><strong>184</strong> Following</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-hover{position:relative;display:inline-block;font-family:system-ui,sans-serif}
      .nuda-hover__trigger{padding:0;background:none;border:0;color:#62b6ff;font-size:.9rem;font-weight:500;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
      .nuda-hover__card{position:absolute;top:calc(100% + 8px);left:0;width:260px;padding:0 14px 14px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:14px;opacity:0;transform:translateY(-4px) scale(.97);transform-origin:top left;pointer-events:none;transition:opacity .22s ease,transform .22s cubic-bezier(.2,.7,.3,1);box-shadow:0 16px 40px -16px rgba(0,0,0,.6);z-index:2;color:#fafafa}
      .nuda-hover:hover .nuda-hover__card,.nuda-hover:focus-within .nuda-hover__card{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
      .nuda-hover__cover{height:46px;margin:0 -14px;border-radius:14px 14px 0 0;background:linear-gradient(135deg,#62b6ff,#9d6dff,#ff6dd4)}
      .nuda-hover__head{display:flex;justify-content:space-between;align-items:flex-end;margin-top:-22px;margin-bottom:6px}
      .nuda-hover__avatar{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;font-size:.85rem;font-weight:700;color:#09090b;background:linear-gradient(135deg,#e4ff54,#6ee7b7);border:3px solid #111114}
      .nuda-hover__follow{padding:5px 12px;background:#e4ff54;color:#09090b;border:0;border-radius:999px;font-size:.72rem;font-weight:700;cursor:pointer}
      .nuda-hover__name{font-size:.95rem;font-weight:600}
      .nuda-hover__bio{font-size:.78rem;color:#a0a0a8;line-height:1.4;margin-top:2px}
      .nuda-hover__stats{display:flex;gap:14px;margin-top:10px;font-size:.75rem;color:#a0a0a8}
      .nuda-hover__stats strong{color:#fafafa;font-weight:600;font-variant-numeric:tabular-nums;margin-right:2px}
      @media(prefers-reduced-motion:reduce){.nuda-hover__card{transition:opacity .2s}.nuda-hover:hover .nuda-hover__card{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-hover">
  <button class="nuda-hover__trigger" type="button">@iv_solis</button>
  <div class="nuda-hover__card" role="tooltip">
    <div class="nuda-hover__cover"></div>
    <div class="nuda-hover__head">
      <div class="nuda-hover__avatar">IS</div>
      <button class="nuda-hover__follow" type="button">Follow</button>
    </div>
    <div class="nuda-hover__name">Iv Solis</div>
    <div class="nuda-hover__bio">Frontend engineer · Berlin · coffee enjoyer</div>
    <div class="nuda-hover__stats">
      <span><strong>2,341</strong> Followers</span>
      <span><strong>184</strong> Following</span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Profile Hover Card
   Trigger reveals a card with cover, avatar, bio, and stats.
   Activates on :hover or :focus-within for keyboard users. */

.nuda-hover { position: relative; display: inline-block; font-family: system-ui, sans-serif; }

.nuda-hover__trigger {
  padding: 0;
  background: none;
  border: 0;
  color: #62b6ff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.nuda-hover__card {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 260px;
  padding: 0 14px 14px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
  transform-origin: top left;
  pointer-events: none;
  transition:
    opacity 0.22s ease,
    transform 0.22s cubic-bezier(0.2, 0.7, 0.3, 1);
  box-shadow: 0 16px 40px -16px rgba(0, 0, 0, 0.6);
  z-index: 2;
  color: #fafafa;
}

.nuda-hover:hover .nuda-hover__card,
.nuda-hover:focus-within .nuda-hover__card {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.nuda-hover__cover {
  height: 46px;
  margin: 0 -14px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(135deg, #62b6ff, #9d6dff, #ff6dd4);
}

.nuda-hover__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -22px;
  margin-bottom: 6px;
}

.nuda-hover__avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #09090b;
  background: linear-gradient(135deg, #e4ff54, #6ee7b7);
  border: 3px solid #111114;
}

.nuda-hover__follow {
  padding: 5px 12px;
  background: #e4ff54;
  color: #09090b;
  border: 0;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-hover__stats { display: flex; gap: 14px; margin-top: 10px; font-size: 0.75rem; color: #a0a0a8; }
.nuda-hover__stats strong { color: #fafafa; font-weight: 600; font-variant-numeric: tabular-nums; margin-right: 2px; }

@media (prefers-reduced-motion: reduce) {
  .nuda-hover__card { transition: opacity 0.2s; }
  .nuda-hover:hover .nuda-hover__card { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 18. BIO REVEAL ─────────────── */
  {
    id: "bio-reveal",
    name: "Bio Reveal",
    category: "Profile Headers",
    preview: (
      <details className="nuda-bio-reveal">
        <summary>
          <p className="nuda-bio-reveal__text">
            Independent product designer. I build calm, tactile interfaces for tools that feel like an extension of your hand. Currently exploring spatial UI and slow-software.
          </p>
          <span className="nuda-bio-reveal__toggle">
            <span className="nuda-bio-reveal__more">Show more</span>
            <span className="nuda-bio-reveal__less">Show less</span>
            <svg className="nuda-bio-reveal__chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </summary>
      </details>
    ),
    cssInline: `
      .nuda-bio-reveal{max-width:320px;font-family:system-ui,sans-serif;color:#fafafa}
      .nuda-bio-reveal>summary{list-style:none;cursor:pointer;display:flex;flex-direction:column;gap:6px}
      .nuda-bio-reveal>summary::-webkit-details-marker{display:none}
      .nuda-bio-reveal__text{margin:0;font-size:.82rem;color:#a0a0a8;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;transition:all .3s ease}
      .nuda-bio-reveal[open] .nuda-bio-reveal__text{-webkit-line-clamp:unset;line-clamp:unset;display:block}
      .nuda-bio-reveal__toggle{display:inline-flex;align-items:center;gap:4px;font-size:.75rem;font-weight:600;color:#e4ff54;align-self:flex-start}
      .nuda-bio-reveal__less{display:none}
      .nuda-bio-reveal[open] .nuda-bio-reveal__more{display:none}
      .nuda-bio-reveal[open] .nuda-bio-reveal__less{display:inline}
      .nuda-bio-reveal__chev{transition:transform .25s cubic-bezier(.2,.7,.3,1)}
      .nuda-bio-reveal[open] .nuda-bio-reveal__chev{transform:rotate(180deg)}
      .nuda-bio-reveal>summary:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:6px}
      @media(prefers-reduced-motion:reduce){.nuda-bio-reveal__text,.nuda-bio-reveal__chev{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<details class="nuda-bio-reveal">
  <summary>
    <p class="nuda-bio-reveal__text">
      Independent product designer. I build calm, tactile interfaces
      for tools that feel like an extension of your hand. Currently
      exploring spatial UI and slow-software.
    </p>
    <span class="nuda-bio-reveal__toggle">
      <span class="nuda-bio-reveal__more">Show more</span>
      <span class="nuda-bio-reveal__less">Show less</span>
      <svg class="nuda-bio-reveal__chev" viewBox="0 0 24 24"
        width="12" height="12" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </span>
  </summary>
</details>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bio Reveal
   Native <details> truncates the bio at 2 lines and toggles it.
   No JavaScript required. Customize: --reveal-accent, line clamp. */

.nuda-bio-reveal {
  --reveal-accent: #e4ff54;
  max-width: 320px;
  font-family: system-ui, sans-serif;
  color: #fafafa;
}

.nuda-bio-reveal > summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nuda-bio-reveal > summary::-webkit-details-marker { display: none; }

.nuda-bio-reveal__text {
  margin: 0;
  font-size: 0.82rem;
  color: #a0a0a8;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
}

.nuda-bio-reveal[open] .nuda-bio-reveal__text {
  -webkit-line-clamp: unset;
  line-clamp: unset;
  display: block;
}

.nuda-bio-reveal__toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--reveal-accent);
  align-self: flex-start;
}

.nuda-bio-reveal__less { display: none; }
.nuda-bio-reveal[open] .nuda-bio-reveal__more { display: none; }
.nuda-bio-reveal[open] .nuda-bio-reveal__less { display: inline; }

.nuda-bio-reveal__chev {
  transition: transform 0.25s cubic-bezier(0.2, 0.7, 0.3, 1);
}

.nuda-bio-reveal[open] .nuda-bio-reveal__chev {
  transform: rotate(180deg);
}

.nuda-bio-reveal > summary:focus-visible {
  outline: 2px solid var(--reveal-accent);
  outline-offset: 3px;
  border-radius: 6px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bio-reveal__text,
  .nuda-bio-reveal__chev { transition: none; }
}`,
      },
    ],
  },
];
