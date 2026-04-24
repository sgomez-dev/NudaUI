import type { NudaComponent } from "./types";

export const notifications: NudaComponent[] = [
  /* ─────────────── TOAST SLIDE ─────────────── */
  {
    id: "toast-slide",
    name: "Toast Slide",
    category: "Notifications",
    preview: (
      <div className="nuda-toast" role="alert" aria-live="polite">
        <div className="nuda-toast__icon">&#10003;</div>
        <div className="nuda-toast__content">
          <p className="nuda-toast__title">Saved successfully</p>
          <p className="nuda-toast__desc">Your changes have been saved.</p>
        </div>
        <button className="nuda-toast__close" aria-label="Dismiss">&times;</button>
      </div>
    ),
    cssInline: `
      .nuda-toast{--c:#e4ff54;display:flex;align-items:flex-start;gap:.75rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-left:3px solid var(--c);border-radius:10px;padding:.85rem 1rem;min-width:260px;animation:_tslide .4s ease-out}
      .nuda-toast__icon{color:var(--c);font-weight:700;font-size:.9rem;margin-top:1px}
      .nuda-toast__content{flex:1}
      .nuda-toast__title{color:#fff;font-size:.85rem;font-weight:600;margin:0}
      .nuda-toast__desc{color:#999;font-size:.75rem;margin:.2rem 0 0}
      .nuda-toast__close{background:none;border:none;color:#666;font-size:1.1rem;cursor:pointer;padding:0;line-height:1}
      .nuda-toast__close:hover{color:#fff}
      @keyframes _tslide{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-toast{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-toast" role="alert" aria-live="polite">
  <div class="nuda-toast__icon">&#10003;</div>
  <div class="nuda-toast__content">
    <p class="nuda-toast__title">Saved successfully</p>
    <p class="nuda-toast__desc">Your changes have been saved.</p>
  </div>
  <button class="nuda-toast__close" aria-label="Dismiss">&times;</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Toast Slide
   Toast notification sliding in from the right.
   Customize: --toast-accent, --toast-bg, --toast-radius */

.nuda-toast {
  --toast-accent: #e4ff54;
  --toast-bg: rgba(255, 255, 255, 0.06);
  --toast-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: var(--toast-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid var(--toast-accent);
  border-radius: var(--toast-radius);
  padding: 0.85rem 1rem;
  min-width: 280px;
  animation: nuda-toast-slide-in 0.4s ease-out;
}

.nuda-toast__icon {
  color: var(--toast-accent);
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 1px;
}

.nuda-toast__content {
  flex: 1;
}

.nuda-toast__title {
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0;
}

.nuda-toast__desc {
  color: #999;
  font-size: 0.75rem;
  margin: 0.2rem 0 0;
}

.nuda-toast__close {
  background: none;
  border: none;
  color: #666;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.nuda-toast__close:hover {
  color: #fff;
}

@keyframes nuda-toast-slide-in {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-toast {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── ALERT SHAKE ─────────────── */
  {
    id: "alert-shake",
    name: "Alert Shake",
    category: "Notifications",
    preview: (
      <div className="nuda-alert-shake" role="alert">
        <span className="nuda-alert-shake__icon">&#9888;</span>
        <span className="nuda-alert-shake__text">Something went wrong. Please try again.</span>
      </div>
    ),
    cssInline: `
      .nuda-alert-shake{--c:#ff5454;display:flex;align-items:center;gap:.75rem;background:rgba(255,84,84,.08);border:1px solid rgba(255,84,84,.2);border-radius:10px;padding:.75rem 1rem;animation:_ashake .5s ease-in-out}
      .nuda-alert-shake__icon{color:var(--c);font-size:1rem}
      .nuda-alert-shake__text{color:#eee;font-size:.82rem}
      @keyframes _ashake{0%,100%{transform:translateX(0)}10%,30%,50%,70%,90%{transform:translateX(-4px)}20%,40%,60%,80%{transform:translateX(4px)}}
      @media(prefers-reduced-motion:reduce){.nuda-alert-shake{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-alert-shake" role="alert">
  <span class="nuda-alert-shake__icon">&#9888;</span>
  <span class="nuda-alert-shake__text">Something went wrong. Please try again.</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Alert Shake
   Alert box with attention-grabbing shake animation.
   Customize: --alert-color, --alert-bg */

.nuda-alert-shake {
  --alert-color: #ff5454;
  --alert-bg: rgba(255, 84, 84, 0.08);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--alert-bg);
  border: 1px solid rgba(255, 84, 84, 0.2);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  animation: nuda-alert-shake-anim 0.5s ease-in-out;
}

.nuda-alert-shake__icon {
  color: var(--alert-color);
  font-size: 1rem;
}

.nuda-alert-shake__text {
  color: #eee;
  font-size: 0.85rem;
}

@keyframes nuda-alert-shake-anim {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-alert-shake {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SUCCESS CHECK ─────────────── */
  {
    id: "success-check",
    name: "Success Check",
    category: "Notifications",
    preview: (
      <div className="nuda-success-check" role="status" aria-label="Success">
        <svg className="nuda-success-check__svg" viewBox="0 0 52 52" width="48" height="48">
          <circle className="nuda-success-check__circle" cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
          <path className="nuda-success-check__path" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M15 27l7 7 15-15" />
        </svg>
        <p className="nuda-success-check__text">All done!</p>
      </div>
    ),
    cssInline: `
      .nuda-success-check{--c:#e4ff54;display:flex;flex-direction:column;align-items:center;gap:.75rem;color:var(--c)}
      .nuda-success-check__svg{color:var(--c)}
      .nuda-success-check__circle{stroke-dasharray:166;stroke-dashoffset:166;animation:_sccirc .6s ease forwards}
      .nuda-success-check__path{stroke-dasharray:48;stroke-dashoffset:48;animation:_sctick .3s ease forwards .6s}
      .nuda-success-check__text{color:#ccc;font-size:.85rem;margin:0}
      @keyframes _sccirc{to{stroke-dashoffset:0}}
      @keyframes _sctick{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-success-check__circle,.nuda-success-check__path{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-success-check" role="status" aria-label="Success">
  <svg class="nuda-success-check__svg" viewBox="0 0 52 52" width="48" height="48">
    <circle class="nuda-success-check__circle" cx="26" cy="26" r="24"
      fill="none" stroke="currentColor" stroke-width="2" />
    <path class="nuda-success-check__path" fill="none" stroke="currentColor"
      stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
      d="M15 27l7 7 15-15" />
  </svg>
  <p class="nuda-success-check__text">All done!</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Success Check
   Success notification with SVG checkmark draw animation.
   Customize: --success-color */

.nuda-success-check {
  --success-color: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--success-color);
}

.nuda-success-check__svg {
  color: var(--success-color);
}

.nuda-success-check__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: nuda-success-circle 0.6s ease forwards;
}

.nuda-success-check__path {
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: nuda-success-tick 0.3s ease forwards 0.6s;
}

.nuda-success-check__text {
  color: #ccc;
  font-size: 0.85rem;
  margin: 0;
}

@keyframes nuda-success-circle {
  to { stroke-dashoffset: 0; }
}

@keyframes nuda-success-tick {
  to { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-success-check__circle,
  .nuda-success-check__path {
    animation: none;
    stroke-dashoffset: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── BANNER SLIDE ─────────────── */
  {
    id: "banner-slide",
    name: "Banner Slide",
    category: "Notifications",
    preview: (
      <div className="nuda-banner" role="alert">
        <p className="nuda-banner__text">
          <strong>New:</strong> v2.0 is now available.{" "}
          <a className="nuda-banner__link" href="#">Learn more &rarr;</a>
        </p>
        <button className="nuda-banner__close" aria-label="Dismiss banner">&times;</button>
      </div>
    ),
    cssInline: `
      .nuda-banner{--c:#e4ff54;display:flex;align-items:center;justify-content:center;gap:1rem;background:var(--c);color:#0a0a0a;padding:.5rem 1rem;font-size:.8rem;animation:_bslidedown .4s ease-out;position:relative}
      .nuda-banner__text{margin:0}
      .nuda-banner__text strong{font-weight:700}
      .nuda-banner__link{color:#0a0a0a;font-weight:600;text-decoration:underline}
      .nuda-banner__close{background:none;border:none;color:#0a0a0a;font-size:1.1rem;cursor:pointer;padding:0 .25rem;opacity:.6}
      .nuda-banner__close:hover{opacity:1}
      @keyframes _bslidedown{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-banner{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-banner" role="alert">
  <p class="nuda-banner__text">
    <strong>New:</strong> v2.0 is now available.
    <a class="nuda-banner__link" href="#">Learn more &rarr;</a>
  </p>
  <button class="nuda-banner__close" aria-label="Dismiss banner">&times;</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Banner Slide
   Top banner that slides down into view.
   Customize: --banner-bg, --banner-text */

.nuda-banner {
  --banner-bg: #e4ff54;
  --banner-text: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--banner-bg);
  color: var(--banner-text);
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  animation: nuda-banner-slide-down 0.4s ease-out;
}

.nuda-banner__text {
  margin: 0;
}

.nuda-banner__text strong {
  font-weight: 700;
}

.nuda-banner__link {
  color: var(--banner-text);
  font-weight: 600;
  text-decoration: underline;
}

.nuda-banner__close {
  background: none;
  border: none;
  color: var(--banner-text);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0 0.25rem;
  opacity: 0.6;
}

.nuda-banner__close:hover {
  opacity: 1;
}

@keyframes nuda-banner-slide-down {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-banner {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SNACKBAR ─────────────── */
  {
    id: "snackbar",
    name: "Snackbar",
    category: "Notifications",
    preview: (
      <div className="nuda-snackbar" role="status" aria-live="polite">
        <span className="nuda-snackbar__text">Message archived</span>
        <button className="nuda-snackbar__action">Undo</button>
        <div className="nuda-snackbar__progress" />
      </div>
    ),
    cssInline: `
      .nuda-snackbar{--c:#e4ff54;display:flex;align-items:center;gap:1rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.65rem 1rem;min-width:240px;position:relative;overflow:hidden;animation:_snkup .3s ease-out}
      .nuda-snackbar__text{color:#ccc;font-size:.82rem;flex:1}
      .nuda-snackbar__action{background:none;border:none;color:var(--c);font-size:.82rem;font-weight:600;cursor:pointer;padding:0}
      .nuda-snackbar__action:hover{text-decoration:underline}
      .nuda-snackbar__progress{position:absolute;bottom:0;left:0;height:2px;background:var(--c);animation:_snkprog 4s linear forwards}
      @keyframes _snkup{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _snkprog{from{width:100%}to{width:0%}}
      @media(prefers-reduced-motion:reduce){.nuda-snackbar{animation:none}.nuda-snackbar__progress{animation:none;width:100%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-snackbar" role="status" aria-live="polite">
  <span class="nuda-snackbar__text">Message archived</span>
  <button class="nuda-snackbar__action">Undo</button>
  <div class="nuda-snackbar__progress"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Snackbar
   Bottom snackbar with progress timer and action button.
   Customize: --snackbar-accent, --snackbar-bg, --snackbar-duration */

.nuda-snackbar {
  --snackbar-accent: #e4ff54;
  --snackbar-bg: #1a1a1a;
  --snackbar-duration: 4s;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--snackbar-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.65rem 1rem;
  min-width: 260px;
  position: relative;
  overflow: hidden;
  animation: nuda-snackbar-up 0.3s ease-out;
}

.nuda-snackbar__text {
  color: #ccc;
  font-size: 0.85rem;
  flex: 1;
}

.nuda-snackbar__action {
  background: none;
  border: none;
  color: var(--snackbar-accent);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.nuda-snackbar__action:hover {
  text-decoration: underline;
}

.nuda-snackbar__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--snackbar-accent);
  animation: nuda-snackbar-progress var(--snackbar-duration) linear forwards;
}

@keyframes nuda-snackbar-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes nuda-snackbar-progress {
  from { width: 100%; }
  to   { width: 0%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-snackbar {
    animation: none;
  }
  .nuda-snackbar__progress {
    animation: none;
    width: 100%;
  }
}`,
      },
    ],
  },
];
