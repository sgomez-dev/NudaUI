import type { NudaComponent } from "./types";

export const notifications: NudaComponent[] = [
  /* ─────────────── TOAST SLIDE ─────────────── */
  {
    id: "toast-slide",
    name: "Toast Slide",
    category: "Toasts & Alerts",
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
    category: "Toasts & Alerts",
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
    category: "Toasts & Alerts",
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
    category: "Toasts & Alerts",
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
    category: "Toasts & Alerts",
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

  /* ─────────────── 6. Achievement Unlock ─────────────── */
  {
    id: "achievement-unlock",
    name: "Achievement Unlock",
    category: "Toasts & Alerts",
    preview: (
      <div className="nuda-achiev">
        <div className="nuda-achiev__shine" />
        <div className="nuda-achiev__medal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="7" />
            <path d="M8.5 11l3 2 4-4" />
            <path d="M9 6l-3-4M15 6l3-4" />
          </svg>
        </div>
        <div className="nuda-achiev__body">
          <div className="nuda-achiev__label">Achievement Unlocked</div>
          <div className="nuda-achiev__title">Speed Demon</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-achiev{position:relative;display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(135deg,#1a1a20,#0c0c10);border:1px solid #e4ff54;border-radius:12px;color:#fafafa;width:100%;max-width:260px;overflow:hidden;animation:_achievIn .65s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 12px 32px -12px rgba(228,255,84,.4)}
      .nuda-achiev__shine{position:absolute;top:0;bottom:0;width:80px;background:linear-gradient(90deg,transparent,rgba(228,255,84,.3),transparent);transform:translateX(-100%);animation:_achievShine 2.4s ease-in-out infinite 0.6s}
      .nuda-achiev__medal{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:#e4ff54;color:#09090b;flex-shrink:0;animation:_achievMedal 1s cubic-bezier(.34,1.56,.64,1);z-index:1}
      .nuda-achiev__medal svg{width:22px;height:22px}
      .nuda-achiev__label{font-size:9px;color:#e4ff54;font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-achiev__title{font-size:14px;font-weight:700;margin-top:2px}
      .nuda-achiev__body{position:relative;z-index:1}
      @keyframes _achievIn{from{opacity:0;transform:translateY(20px) scale(.92)}to{opacity:1;transform:none}}
      @keyframes _achievShine{0%{transform:translateX(-100%)}50%,100%{transform:translateX(300%)}}
      @keyframes _achievMedal{0%{transform:scale(0) rotate(-180deg)}60%{transform:scale(1.15) rotate(20deg)}100%{transform:scale(1) rotate(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-achiev,.nuda-achiev__shine,.nuda-achiev__medal{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-achiev">
  <div class="nuda-achiev__shine"></div>
  <div class="nuda-achiev__medal">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="13" r="7" />
      <path d="M8.5 11l3 2 4-4" />
      <path d="M9 6l-3-4M15 6l3-4" />
    </svg>
  </div>
  <div class="nuda-achiev__body">
    <div class="nuda-achiev__label">Achievement Unlocked</div>
    <div class="nuda-achiev__title">Speed Demon</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-achiev {
  position: relative;
  background: linear-gradient(135deg, #1a1a20, #0c0c10);
  border: 1px solid #e4ff54;
  border-radius: 12px;
  overflow: hidden;
  animation: nuda-achiev-in 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  box-shadow: 0 12px 32px -12px rgba(228, 255, 84, 0.4);
}

.nuda-achiev__shine {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(228, 255, 84, 0.3),
    transparent
  );
  transform: translateX(-100%);
  animation: nuda-achiev-shine 2.4s ease-in-out infinite 0.6s;
}

@keyframes nuda-achiev-medal {
  0%   { transform: scale(0)    rotate(-180deg); }
  60%  { transform: scale(1.15) rotate(20deg);   }
  100% { transform: scale(1)    rotate(0);       }
}

@keyframes nuda-achiev-shine {
  0%        { transform: translateX(-100%); }
  50%, 100% { transform: translateX(300%);  }
}`,
      },
    ],
  },

  /* ─────────────── 7. Undo Toast ─────────────── */
  {
    id: "undo-toast",
    name: "Undo Toast",
    category: "Toasts & Alerts",
    preview: (
      <div className="nuda-undotoast">
        <span className="nuda-undotoast__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
          </svg>
        </span>
        <span className="nuda-undotoast__text">
          &quot;Design draft&quot; was deleted
        </span>
        <button className="nuda-undotoast__btn">Undo</button>
        <span className="nuda-undotoast__bar" />
      </div>
    ),
    cssInline: `
      .nuda-undotoast{position:relative;display:inline-flex;align-items:center;gap:12px;padding:10px 12px 10px 14px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#fafafa;width:100%;max-width:280px;overflow:hidden;animation:_undotIn .5s cubic-bezier(.16,1,.3,1) both;box-shadow:0 14px 36px -10px rgba(0,0,0,.5)}
      .nuda-undotoast__icon{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;color:#ff5e7a;flex-shrink:0}
      .nuda-undotoast__icon svg{width:14px;height:14px}
      .nuda-undotoast__text{flex:1;font-size:12px;color:#a0a0a8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-undotoast__btn{padding:5px 10px;background:transparent;border:0;color:#e4ff54;font-size:11px;font-weight:600;cursor:pointer;border-radius:6px;flex-shrink:0;transition:background .2s,color .2s}
      .nuda-undotoast__btn:hover{background:rgba(228,255,84,.1);color:#fafafa}
      .nuda-undotoast__bar{position:absolute;left:0;bottom:0;height:2px;background:#ff5e7a;animation:_undotBar 5s linear forwards}
      @keyframes _undotIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
      @keyframes _undotBar{from{width:100%}to{width:0}}
      @media(prefers-reduced-motion:reduce){.nuda-undotoast,.nuda-undotoast__bar{animation:none}.nuda-undotoast__bar{width:100%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-undotoast">
  <span class="nuda-undotoast__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    </svg>
  </span>
  <span class="nuda-undotoast__text">"Design draft" was deleted</span>
  <button class="nuda-undotoast__btn">Undo</button>
  <span class="nuda-undotoast__bar"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-undotoast__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background: #ff5e7a;
  animation: nuda-undot-bar 5s linear forwards;
}

@keyframes nuda-undot-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none;             }
}

@keyframes nuda-undot-bar {
  from { width: 100%; }
  to   { width: 0;    }
}`,
      },
    ],
  },

  /* ─────────────── 8. Level Up ─────────────── */
  {
    id: "level-up",
    name: "Level Up",
    category: "Toasts & Alerts",
    preview: (
      <div className="nuda-levelup">
        <div className="nuda-levelup__rays" />
        <div className="nuda-levelup__num">12</div>
        <div className="nuda-levelup__copy">
          <div className="nuda-levelup__label">Level up</div>
          <div className="nuda-levelup__title">You reached level 12!</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-levelup{position:relative;display:flex;align-items:center;gap:14px;padding:14px 16px;background:linear-gradient(135deg,rgba(228,255,84,.1),rgba(110,231,183,.05));border:1px solid rgba(228,255,84,.3);border-radius:14px;color:#fafafa;width:100%;max-width:260px;overflow:hidden;animation:_lvlIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-levelup__rays{position:absolute;inset:-40px;background:repeating-conic-gradient(from 0deg,rgba(228,255,84,.06) 0deg,rgba(228,255,84,.06) 8deg,transparent 8deg,transparent 16deg);animation:_lvlSpin 12s linear infinite;pointer-events:none}
      .nuda-levelup__num{position:relative;display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;background:#09090b;border:2px solid #e4ff54;color:#e4ff54;font-size:18px;font-weight:900;font-variant-numeric:tabular-nums;flex-shrink:0;z-index:1;animation:_lvlNum .8s cubic-bezier(.34,1.56,.64,1)}
      .nuda-levelup__copy{position:relative;z-index:1}
      .nuda-levelup__label{color:#e4ff54;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-levelup__title{font-size:13px;font-weight:700;margin-top:2px}
      @keyframes _lvlIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
      @keyframes _lvlSpin{to{transform:rotate(360deg)}}
      @keyframes _lvlNum{0%{transform:scale(0) rotate(-90deg)}60%{transform:scale(1.15) rotate(10deg)}100%{transform:scale(1) rotate(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-levelup,.nuda-levelup__rays,.nuda-levelup__num{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-levelup">
  <div class="nuda-levelup__rays"></div>
  <div class="nuda-levelup__num">12</div>
  <div class="nuda-levelup__copy">
    <div class="nuda-levelup__label">Level up</div>
    <div class="nuda-levelup__title">You reached level 12!</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-levelup__rays {
  position: absolute;
  inset: -40px;
  background: repeating-conic-gradient(
    from 0deg,
    rgba(228, 255, 84, 0.06) 0deg,
    rgba(228, 255, 84, 0.06) 8deg,
    transparent 8deg,
    transparent 16deg
  );
  animation: nuda-lvl-spin 12s linear infinite;
}

@keyframes nuda-lvl-num {
  0%   { transform: scale(0)    rotate(-90deg); }
  60%  { transform: scale(1.15) rotate(10deg);  }
  100% { transform: scale(1)    rotate(0);      }
}`,
      },
    ],
  },

  /* ─────────────── 9. System Alert ─────────────── */
  {
    id: "system-alert",
    name: "System Alert",
    category: "Toasts & Alerts",
    preview: (
      <div className="nuda-sysalert">
        <div className="nuda-sysalert__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.3 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>
        <div className="nuda-sysalert__body">
          <div className="nuda-sysalert__title">Storage almost full</div>
          <div className="nuda-sysalert__msg">94% used · 540 MB left</div>
        </div>
        <button className="nuda-sysalert__close" aria-label="Dismiss">×</button>
      </div>
    ),
    cssInline: `
      .nuda-sysalert{display:flex;align-items:flex-start;gap:12px;padding:12px 14px;background:rgba(255,180,94,.06);border:1px solid rgba(255,180,94,.3);border-left:3px solid #ffb45e;border-radius:10px;color:#fafafa;width:100%;max-width:300px;animation:_sysAlertIn .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-sysalert__icon{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;color:#ffb45e;flex-shrink:0;margin-top:1px;animation:_sysWarnShake .6s ease-in-out}
      .nuda-sysalert__icon svg{width:18px;height:18px}
      .nuda-sysalert__body{flex:1;min-width:0}
      .nuda-sysalert__title{font-size:12px;font-weight:600;color:#fafafa}
      .nuda-sysalert__msg{font-size:11px;color:#a0a0a8;margin-top:2px}
      .nuda-sysalert__close{background:transparent;border:0;color:#63636e;cursor:pointer;font-size:18px;line-height:1;padding:0 2px;transition:color .2s,transform .2s}
      .nuda-sysalert__close:hover{color:#fafafa;transform:scale(1.2)}
      @keyframes _sysAlertIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
      @keyframes _sysWarnShake{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-8deg)}40%,80%{transform:rotate(8deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-sysalert,.nuda-sysalert__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sysalert">
  <div class="nuda-sysalert__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.3 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  </div>
  <div class="nuda-sysalert__body">
    <div class="nuda-sysalert__title">Storage almost full</div>
    <div class="nuda-sysalert__msg">94% used · 540 MB left</div>
  </div>
  <button class="nuda-sysalert__close" aria-label="Dismiss">×</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-sysalert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  background: rgba(255, 180, 94, 0.06);
  border: 1px solid rgba(255, 180, 94, 0.3);
  border-left: 3px solid #ffb45e;
  border-radius: 10px;
  animation: nuda-sys-alert-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-sysalert__icon {
  color: #ffb45e;
  animation: nuda-sys-warn-shake 0.6s ease-in-out;
}

@keyframes nuda-sys-warn-shake {
  0%, 100%   { transform: rotate(0);     }
  20%, 60%   { transform: rotate(-8deg); }
  40%, 80%   { transform: rotate(8deg);  }
}`,
      },
    ],
  },
];
