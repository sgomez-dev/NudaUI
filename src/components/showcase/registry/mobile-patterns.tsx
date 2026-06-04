import type { CSSProperties } from "react";
import type { NudaComponent } from "./types";

export const mobilePatterns: NudaComponent[] = [
  /* ─────────────── BOTTOM SHEET ─────────────── */
  {
    id: "bottom-sheet",
    name: "Bottom Sheet",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-bsheet">
        <div className="nuda-bsheet__scrim" />
        <div className="nuda-bsheet__panel" role="dialog" aria-label="Bottom sheet">
          <div className="nuda-bsheet__handle" />
          <div className="nuda-bsheet__title">Share to</div>
          <div className="nuda-bsheet__row">
            <span className="nuda-bsheet__icon" /> Messages
          </div>
          <div className="nuda-bsheet__row">
            <span className="nuda-bsheet__icon" /> Mail
          </div>
          <div className="nuda-bsheet__row">
            <span className="nuda-bsheet__icon" /> Copy link
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bsheet{position:relative;width:280px;height:280px;background:#09090b;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.06)}
      .nuda-bsheet__scrim{position:absolute;inset:0;background:rgba(0,0,0,.55);animation:_bsheetFade .35s ease both}
      .nuda-bsheet__panel{position:absolute;left:0;right:0;bottom:0;background:#111114;border-radius:20px 20px 0 0;padding:12px 16px 18px;border-top:1px solid rgba(255,255,255,.08);animation:_bsheetUp .45s cubic-bezier(.22,1,.36,1) both}
      .nuda-bsheet__handle{width:36px;height:4px;border-radius:2px;background:rgba(255,255,255,.18);margin:2px auto 12px}
      .nuda-bsheet__title{color:#fafafa;font:600 13px/1 system-ui;margin-bottom:10px}
      .nuda-bsheet__row{display:flex;align-items:center;gap:10px;color:#a0a0a8;font:500 12px/1 system-ui;padding:10px 4px;border-top:1px solid rgba(255,255,255,.06)}
      .nuda-bsheet__icon{width:20px;height:20px;border-radius:6px;background:rgba(228,255,84,.15);border:1px solid rgba(228,255,84,.3)}
      @keyframes _bsheetFade{from{opacity:0}to{opacity:1}}
      @keyframes _bsheetUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-bsheet__scrim,.nuda-bsheet__panel{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bsheet">
  <div class="nuda-bsheet__scrim"></div>
  <div class="nuda-bsheet__panel" role="dialog" aria-label="Bottom sheet">
    <div class="nuda-bsheet__handle"></div>
    <div class="nuda-bsheet__title">Share to</div>
    <div class="nuda-bsheet__row"><span class="nuda-bsheet__icon"></span> Messages</div>
    <div class="nuda-bsheet__row"><span class="nuda-bsheet__icon"></span> Mail</div>
    <div class="nuda-bsheet__row"><span class="nuda-bsheet__icon"></span> Copy link</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bottom Sheet
   iOS-style sheet that slides up with a drag handle.
   Customize: --bsheet-bg, --bsheet-radius */

.nuda-bsheet {
  --bsheet-bg: #111114;
  --bsheet-radius: 20px;
  position: relative;
  width: 280px;
  height: 280px;
  background: #09090b;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-bsheet__scrim {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  animation: nuda-bsheet-fade 0.35s ease both;
}

.nuda-bsheet__panel {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bsheet-bg);
  border-radius: var(--bsheet-radius) var(--bsheet-radius) 0 0;
  padding: 12px 16px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  animation: nuda-bsheet-up 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.nuda-bsheet__handle {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.18);
  margin: 2px auto 12px;
}

.nuda-bsheet__title {
  color: #fafafa;
  font: 600 13px/1 system-ui;
  margin-bottom: 10px;
}

.nuda-bsheet__row {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #a0a0a8;
  font: 500 12px/1 system-ui;
  padding: 10px 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-bsheet__icon {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgba(228, 255, 84, 0.15);
  border: 1px solid rgba(228, 255, 84, 0.3);
}

@keyframes nuda-bsheet-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes nuda-bsheet-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bsheet__scrim,
  .nuda-bsheet__panel {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── PULL TO REFRESH ─────────────── */
  {
    id: "pull-to-refresh",
    name: "Pull to Refresh",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-ptr">
        <div className="nuda-ptr__indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="44" strokeDashoffset="11" strokeLinecap="round" />
          </svg>
        </div>
        <div className="nuda-ptr__list">
          <div className="nuda-ptr__row" />
          <div className="nuda-ptr__row" />
          <div className="nuda-ptr__row" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ptr{position:relative;width:280px;height:200px;background:#0c0c10;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.06);padding-top:48px}
      .nuda-ptr__indicator{position:absolute;top:14px;left:50%;transform:translateX(-50%);color:#e4ff54;display:flex;align-items:center;justify-content:center;animation:_ptrSpin 1.2s linear infinite}
      .nuda-ptr__list{padding:0 14px;display:flex;flex-direction:column;gap:10px}
      .nuda-ptr__row{height:36px;border-radius:10px;background:linear-gradient(90deg,rgba(255,255,255,.06),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.06)}
      @keyframes _ptrSpin{to{transform:translateX(-50%) rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-ptr__indicator{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ptr">
  <div class="nuda-ptr__indicator" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"
        stroke-dasharray="44" stroke-dashoffset="11" stroke-linecap="round" />
    </svg>
  </div>
  <div class="nuda-ptr__list">
    <div class="nuda-ptr__row"></div>
    <div class="nuda-ptr__row"></div>
    <div class="nuda-ptr__row"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pull to Refresh
   Spinning indicator above a list, simulates pull gesture.
   Customize: --ptr-color */

.nuda-ptr {
  --ptr-color: #e4ff54;
  position: relative;
  width: 280px;
  height: 200px;
  background: #0c0c10;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 48px;
}

.nuda-ptr__indicator {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--ptr-color);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: nuda-ptr-spin 1.2s linear infinite;
}

.nuda-ptr__list {
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nuda-ptr__row {
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
}

@keyframes nuda-ptr-spin {
  to { transform: translateX(-50%) rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ptr__indicator { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── SWIPE TO DELETE ─────────────── */
  {
    id: "swipe-to-delete",
    name: "Swipe to Delete",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-swd" role="list">
        <div className="nuda-swd__item" role="listitem">
          <div className="nuda-swd__bg">Delete</div>
          <div className="nuda-swd__row">
            <span className="nuda-swd__avatar" />
            <div className="nuda-swd__text">
              <strong>Anna Reyes</strong>
              <span>Sent the design files</span>
            </div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-swd{width:280px;background:#0c0c10;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.06)}
      .nuda-swd__item{position:relative;height:64px}
      .nuda-swd__bg{position:absolute;inset:0;background:#ef4444;color:#fff;display:flex;align-items:center;justify-content:flex-end;padding:0 18px;font:600 12px/1 system-ui}
      .nuda-swd__row{position:absolute;inset:0;background:#111114;display:flex;align-items:center;gap:10px;padding:0 14px;animation:_swdSlide 2.8s cubic-bezier(.22,1,.36,1) infinite;will-change:transform}
      .nuda-swd__avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#10b981);flex-shrink:0}
      .nuda-swd__text{display:flex;flex-direction:column;gap:3px;font:500 11px/1.2 system-ui}
      .nuda-swd__text strong{color:#fafafa;font-weight:600}
      .nuda-swd__text span{color:#63636e}
      @keyframes _swdSlide{0%,15%{transform:translateX(0)}45%,75%{transform:translateX(-80px)}95%,100%{transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-swd__row{animation:none;transform:translateX(-80px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-swd" role="list">
  <div class="nuda-swd__item" role="listitem">
    <div class="nuda-swd__bg">Delete</div>
    <div class="nuda-swd__row">
      <span class="nuda-swd__avatar"></span>
      <div class="nuda-swd__text">
        <strong>Anna Reyes</strong>
        <span>Sent the design files</span>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Swipe to Delete
   Row that slides left to reveal a delete button.
   Customize: --swd-danger, --swd-bg */

.nuda-swd {
  --swd-danger: #ef4444;
  --swd-bg: #111114;
  width: 280px;
  background: #0c0c10;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-swd__item {
  position: relative;
  height: 64px;
}

.nuda-swd__bg {
  position: absolute;
  inset: 0;
  background: var(--swd-danger);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 18px;
  font: 600 12px/1 system-ui;
}

.nuda-swd__row {
  position: absolute;
  inset: 0;
  background: var(--swd-bg);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  animation: nuda-swd-slide 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  will-change: transform;
}

.nuda-swd__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e4ff54, #10b981);
  flex-shrink: 0;
}

.nuda-swd__text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font: 500 11px/1.2 system-ui;
}

.nuda-swd__text strong { color: #fafafa; font-weight: 600; }
.nuda-swd__text span { color: #63636e; }

@keyframes nuda-swd-slide {
  0%, 15% { transform: translateX(0); }
  45%, 75% { transform: translateX(-80px); }
  95%, 100% { transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-swd__row { animation: none; transform: translateX(-80px); }
}`,
      },
    ],
  },

  /* ─────────────── ACTION SHEET ─────────────── */
  {
    id: "action-sheet",
    name: "Action Sheet",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-asheet" role="dialog" aria-label="Action sheet">
        <div className="nuda-asheet__group">
          <button type="button" className="nuda-asheet__opt">Save Image</button>
          <button type="button" className="nuda-asheet__opt">Copy Link</button>
          <button type="button" className="nuda-asheet__opt nuda-asheet__opt--danger">Delete</button>
        </div>
        <button type="button" className="nuda-asheet__cancel">Cancel</button>
      </div>
    ),
    cssInline: `
      .nuda-asheet{width:260px;display:flex;flex-direction:column;gap:8px;font-family:system-ui;animation:_asheetUp .4s cubic-bezier(.22,1,.36,1) both}
      .nuda-asheet__group{background:rgba(20,20,25,.85);backdrop-filter:blur(12px);border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
      .nuda-asheet__opt{appearance:none;width:100%;background:transparent;border:0;color:#fafafa;font:500 14px/1 system-ui;min-height:46px;padding:0 14px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s}
      .nuda-asheet__opt:last-child{border-bottom:0}
      .nuda-asheet__opt:hover{background:rgba(255,255,255,.04)}
      .nuda-asheet__opt--danger{color:#ef4444}
      .nuda-asheet__cancel{appearance:none;width:100%;background:rgba(28,28,32,.9);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);color:#fafafa;font:600 14px/1 system-ui;min-height:48px;border-radius:14px;cursor:pointer;transition:background .15s}
      .nuda-asheet__cancel:hover{background:rgba(40,40,46,.9)}
      @keyframes _asheetUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-asheet{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-asheet" role="dialog" aria-label="Action sheet">
  <div class="nuda-asheet__group">
    <button type="button" class="nuda-asheet__opt">Save Image</button>
    <button type="button" class="nuda-asheet__opt">Copy Link</button>
    <button type="button" class="nuda-asheet__opt nuda-asheet__opt--danger">Delete</button>
  </div>
  <button type="button" class="nuda-asheet__cancel">Cancel</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Action Sheet
   iOS-style stack of options with a separated cancel button.
   Customize: --asheet-bg, --asheet-danger */

.nuda-asheet {
  --asheet-bg: rgba(20, 20, 25, 0.85);
  --asheet-danger: #ef4444;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: system-ui;
  animation: nuda-asheet-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.nuda-asheet__group {
  background: var(--asheet-bg);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.nuda-asheet__opt {
  appearance: none;
  width: 100%;
  background: transparent;
  border: 0;
  color: #fafafa;
  font: 500 14px/1 system-ui;
  min-height: 46px;
  padding: 0 14px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.15s;
}

.nuda-asheet__opt:last-child { border-bottom: 0; }
.nuda-asheet__opt:hover { background: rgba(255, 255, 255, 0.04); }
.nuda-asheet__opt--danger { color: var(--asheet-danger); }

.nuda-asheet__cancel {
  appearance: none;
  width: 100%;
  background: rgba(28, 28, 32, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fafafa;
  font: 600 14px/1 system-ui;
  min-height: 48px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.15s;
}

.nuda-asheet__cancel:hover { background: rgba(40, 40, 46, 0.9); }

@keyframes nuda-asheet-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-asheet { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── SEGMENTED CONTROL ─────────────── */
  {
    id: "segmented-control-mobile",
    name: "Segmented Control",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-seg" role="tablist" aria-label="View">
        <div className="nuda-seg__indicator" aria-hidden="true" />
        <button type="button" className="nuda-seg__btn nuda-seg__btn--active" role="tab" aria-selected="true">Day</button>
        <button type="button" className="nuda-seg__btn" role="tab" aria-selected="false">Week</button>
        <button type="button" className="nuda-seg__btn" role="tab" aria-selected="false">Month</button>
      </div>
    ),
    cssInline: `
      .nuda-seg{position:relative;display:flex;width:260px;padding:3px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);border-radius:10px;font-family:system-ui}
      .nuda-seg__indicator{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px)/3);background:#111114;border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,.4);animation:_segSlide 4s cubic-bezier(.5,1.4,.5,1) infinite;will-change:transform}
      .nuda-seg__btn{position:relative;z-index:1;flex:1;appearance:none;background:transparent;border:0;color:#a0a0a8;font:600 12px/1 system-ui;min-height:32px;cursor:pointer;transition:color .25s}
      .nuda-seg__btn--active{color:#fafafa}
      @keyframes _segSlide{0%,25%{transform:translateX(0)}33%,58%{transform:translateX(100%)}66%,91%{transform:translateX(200%)}100%{transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-seg__indicator{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-seg" role="tablist" aria-label="View">
  <div class="nuda-seg__indicator" aria-hidden="true"></div>
  <button type="button" class="nuda-seg__btn nuda-seg__btn--active" role="tab" aria-selected="true">Day</button>
  <button type="button" class="nuda-seg__btn" role="tab" aria-selected="false">Week</button>
  <button type="button" class="nuda-seg__btn" role="tab" aria-selected="false">Month</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Segmented Control
   Pill-style switch with a sliding indicator.
   Customize: --seg-bg, --seg-pill */

.nuda-seg {
  --seg-bg: rgba(255, 255, 255, 0.06);
  --seg-pill: #111114;
  position: relative;
  display: flex;
  width: 260px;
  padding: 3px;
  background: var(--seg-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  font-family: system-ui;
}

.nuda-seg__indicator {
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 3px;
  width: calc((100% - 6px) / 3);
  background: var(--seg-pill);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  animation: nuda-seg-slide 4s cubic-bezier(0.5, 1.4, 0.5, 1) infinite;
  will-change: transform;
}

.nuda-seg__btn {
  position: relative;
  z-index: 1;
  flex: 1;
  appearance: none;
  background: transparent;
  border: 0;
  color: #a0a0a8;
  font: 600 12px/1 system-ui;
  min-height: 32px;
  cursor: pointer;
  transition: color 0.25s;
}

.nuda-seg__btn--active { color: #fafafa; }

@keyframes nuda-seg-slide {
  0%, 25% { transform: translateX(0); }
  33%, 58% { transform: translateX(100%); }
  66%, 91% { transform: translateX(200%); }
  100% { transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-seg__indicator { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── MOBILE TAB BAR ─────────────── */
  {
    id: "mobile-tab-bar",
    name: "Mobile Tab Bar",
    category: "Mobile Patterns",
    preview: (
      <nav className="nuda-tabbar" aria-label="Primary">
        <button type="button" className="nuda-tabbar__btn nuda-tabbar__btn--active" aria-current="page">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>
          <span>Home</span>
        </button>
        <button type="button" className="nuda-tabbar__btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <span>Search</span>
        </button>
        <button type="button" className="nuda-tabbar__btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <span>Saved</span>
        </button>
        <button type="button" className="nuda-tabbar__btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
          <span>Profile</span>
        </button>
      </nav>
    ),
    cssInline: `
      .nuda-tabbar{display:flex;align-items:stretch;justify-content:space-around;gap:4px;width:280px;padding:8px 6px;background:rgba(12,12,16,.85);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.06);border-radius:18px;font-family:system-ui}
      .nuda-tabbar__btn{position:relative;appearance:none;flex:1;background:transparent;border:0;display:flex;flex-direction:column;align-items:center;gap:3px;color:#63636e;font:600 9.5px/1 system-ui;min-height:44px;padding:6px 4px;cursor:pointer;transition:color .2s}
      .nuda-tabbar__btn:hover{color:#a0a0a8}
      .nuda-tabbar__btn--active{color:#e4ff54}
      .nuda-tabbar__btn--active::after{content:"";position:absolute;bottom:2px;left:50%;width:4px;height:4px;border-radius:50%;background:#e4ff54;transform:translateX(-50%);animation:_tabdot .35s cubic-bezier(.22,1,.36,1) both;box-shadow:0 0 8px #e4ff54}
      @keyframes _tabdot{from{transform:translateX(-50%) scale(0);opacity:0}to{transform:translateX(-50%) scale(1);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-tabbar__btn--active::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-tabbar" aria-label="Primary">
  <button type="button" class="nuda-tabbar__btn nuda-tabbar__btn--active" aria-current="page">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>
    <span>Home</span>
  </button>
  <button type="button" class="nuda-tabbar__btn">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    <span>Search</span>
  </button>
  <button type="button" class="nuda-tabbar__btn">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
    <span>Saved</span>
  </button>
  <button type="button" class="nuda-tabbar__btn">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
    <span>Profile</span>
  </button>
</nav>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Mobile Tab Bar
   Glass tab bar with active dot indicator.
   Customize: --tabbar-accent, --tabbar-bg */

.nuda-tabbar {
  --tabbar-accent: #e4ff54;
  --tabbar-bg: rgba(12, 12, 16, 0.85);
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  gap: 4px;
  width: 280px;
  padding: 8px 6px;
  background: var(--tabbar-bg);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  font-family: system-ui;
}

.nuda-tabbar__btn {
  position: relative;
  appearance: none;
  flex: 1;
  background: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  color: #63636e;
  font: 600 9.5px/1 system-ui;
  min-height: 44px;
  padding: 6px 4px;
  cursor: pointer;
  transition: color 0.2s;
}

.nuda-tabbar__btn:hover { color: #a0a0a8; }
.nuda-tabbar__btn--active { color: var(--tabbar-accent); }

.nuda-tabbar__btn--active::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--tabbar-accent);
  transform: translateX(-50%);
  animation: nuda-tabbar-dot 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
  box-shadow: 0 0 8px var(--tabbar-accent);
}

@keyframes nuda-tabbar-dot {
  from { transform: translateX(-50%) scale(0); opacity: 0; }
  to { transform: translateX(-50%) scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tabbar__btn--active::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── FAB FLOATING ACTION BUTTON ─────────────── */
  {
    id: "fab-action-button",
    name: "FAB Action Button",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-fab">
        <button type="button" className="nuda-fab__action" style={{ "--i": 1 } as CSSProperties} aria-label="Camera">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19V8a2 2 0 0 0-2-2h-3l-2-3H8L6 6H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2z"/><circle cx="12" cy="13" r="4"/></svg>
        </button>
        <button type="button" className="nuda-fab__action" style={{ "--i": 2 } as CSSProperties} aria-label="Note">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>
        </button>
        <button type="button" className="nuda-fab__action" style={{ "--i": 3 } as CSSProperties} aria-label="Mic">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>
        </button>
        <button type="button" className="nuda-fab__main" aria-label="Open menu" aria-expanded="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12"/><path d="M6 18L18 6"/></svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-fab{position:relative;width:60px;height:200px}
      .nuda-fab__main{position:absolute;bottom:0;left:0;width:56px;height:56px;border-radius:50%;border:0;background:#e4ff54;color:#0a0a0a;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 22px -4px rgba(228,255,84,.55);animation:_fabRot .6s cubic-bezier(.22,1,.36,1) both;transition:transform .25s}
      .nuda-fab__main:hover{transform:scale(.96)}
      .nuda-fab__action{position:absolute;bottom:0;left:8px;width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:#111114;color:#fafafa;display:flex;align-items:center;justify-content:center;cursor:pointer;transform:translateY(calc(-58px - (var(--i) - 1) * 46px));opacity:0;animation:_fabPop .45s cubic-bezier(.22,1,.36,1) forwards;animation-delay:calc(var(--i) * .07s)}
      .nuda-fab__action:hover{background:#1a1a20}
      @keyframes _fabRot{from{transform:rotate(0deg) scale(.7);opacity:0}to{transform:rotate(135deg) scale(1);opacity:1}}
      @keyframes _fabPop{from{opacity:0;transform:translateY(0) scale(.4)}to{opacity:1;transform:translateY(calc(-58px - (var(--i) - 1) * 46px)) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-fab__main,.nuda-fab__action{animation:none;opacity:1}.nuda-fab__main{transform:rotate(135deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fab">
  <button type="button" class="nuda-fab__action" style="--i:1" aria-label="Camera">…</button>
  <button type="button" class="nuda-fab__action" style="--i:2" aria-label="Note">…</button>
  <button type="button" class="nuda-fab__action" style="--i:3" aria-label="Mic">…</button>
  <button type="button" class="nuda-fab__main" aria-label="Open menu" aria-expanded="true">×</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* FAB Floating Action Button
   Main button rotates to an X and reveals a stack of actions.
   Customize: --fab-accent, --fab-size */

.nuda-fab {
  --fab-accent: #e4ff54;
  --fab-size: 56px;
  position: relative;
  width: 60px;
  height: 200px;
}

.nuda-fab__main {
  position: absolute;
  bottom: 0;
  left: 0;
  width: var(--fab-size);
  height: var(--fab-size);
  border-radius: 50%;
  border: 0;
  background: var(--fab-accent);
  color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 22px -4px rgba(228, 255, 84, 0.55);
  animation: nuda-fab-rot 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: transform 0.25s;
}

.nuda-fab__main:hover { transform: scale(0.96); }

.nuda-fab__action {
  position: absolute;
  bottom: 0;
  left: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #111114;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  animation: nuda-fab-pop 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i) * 0.07s);
}

.nuda-fab__action:hover { background: #1a1a20; }

@keyframes nuda-fab-rot {
  from { transform: rotate(0deg) scale(0.7); opacity: 0; }
  to { transform: rotate(135deg) scale(1); opacity: 1; }
}

@keyframes nuda-fab-pop {
  from { opacity: 0; transform: translateY(0) scale(0.4); }
  to {
    opacity: 1;
    transform: translateY(calc(-58px - (var(--i) - 1) * 46px)) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-fab__main, .nuda-fab__action { animation: none; opacity: 1; }
  .nuda-fab__main { transform: rotate(135deg); }
}`,
      },
    ],
  },

  /* ─────────────── RIPPLE TOUCH FEEDBACK ─────────────── */
  {
    id: "ripple-touch",
    name: "Ripple Touch Feedback",
    category: "Mobile Patterns",
    preview: (
      <button type="button" className="nuda-ripple">
        <span className="nuda-ripple__label">Tap me</span>
        <span className="nuda-ripple__wave" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-ripple{position:relative;appearance:none;overflow:hidden;min-width:180px;min-height:48px;padding:0 20px;border-radius:12px;border:1px solid rgba(255,255,255,.1);background:#111114;color:#fafafa;font:600 13px/1 system-ui;cursor:pointer;transition:background .2s}
      .nuda-ripple:hover{background:#1a1a20}
      .nuda-ripple__label{position:relative;z-index:1}
      .nuda-ripple__wave{position:absolute;top:50%;left:50%;width:10px;height:10px;border-radius:50%;background:rgba(228,255,84,.35);transform:translate(-50%,-50%) scale(0);animation:_ripple 1.8s ease-out infinite}
      @keyframes _ripple{0%{transform:translate(-50%,-50%) scale(0);opacity:.8}80%{opacity:.1}100%{transform:translate(-50%,-50%) scale(20);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ripple__wave{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-ripple">
  <span class="nuda-ripple__label">Tap me</span>
  <span class="nuda-ripple__wave" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Ripple Touch Feedback
   Material-style expanding ripple on tap.
   Customize: --ripple-color */

.nuda-ripple {
  --ripple-color: rgba(228, 255, 84, 0.35);
  position: relative;
  appearance: none;
  overflow: hidden;
  min-width: 180px;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #111114;
  color: #fafafa;
  font: 600 13px/1 system-ui;
  cursor: pointer;
  transition: background 0.2s;
}

.nuda-ripple:hover { background: #1a1a20; }

.nuda-ripple__label {
  position: relative;
  z-index: 1;
}

.nuda-ripple__wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--ripple-color);
  transform: translate(-50%, -50%) scale(0);
  animation: nuda-ripple-out 1.8s ease-out infinite;
}

@keyframes nuda-ripple-out {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
  80% { opacity: 0.1; }
  100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ripple__wave { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── MOMENTUM SCROLL INDICATOR ─────────────── */
  {
    id: "momentum-scroll-indicator",
    name: "Momentum Scroll Indicator",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-momscroll">
        <div className="nuda-momscroll__list">
          <div className="nuda-momscroll__row" />
          <div className="nuda-momscroll__row" />
          <div className="nuda-momscroll__row" />
          <div className="nuda-momscroll__row" />
          <div className="nuda-momscroll__row" />
        </div>
        <div className="nuda-momscroll__track" aria-hidden="true">
          <div className="nuda-momscroll__thumb" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-momscroll{position:relative;width:280px;height:200px;padding:14px;background:#0c0c10;border-radius:16px;border:1px solid rgba(255,255,255,.06);overflow:hidden}
      .nuda-momscroll__list{display:flex;flex-direction:column;gap:8px}
      .nuda-momscroll__row{height:28px;border-radius:8px;background:linear-gradient(90deg,rgba(255,255,255,.06),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.05)}
      .nuda-momscroll__track{position:absolute;top:14px;right:6px;width:3px;height:calc(100% - 28px);background:rgba(255,255,255,.04);border-radius:2px;overflow:hidden}
      .nuda-momscroll__thumb{position:absolute;top:0;left:0;width:100%;height:38%;background:linear-gradient(180deg,#e4ff54,#9ec700);border-radius:2px;animation:_momDecay 2.6s cubic-bezier(.22,1,.36,1) infinite}
      @keyframes _momDecay{0%{transform:translateY(0)}55%{transform:translateY(165%)}80%,100%{transform:translateY(160%)}}
      @media(prefers-reduced-motion:reduce){.nuda-momscroll__thumb{animation:none;transform:translateY(160%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-momscroll">
  <div class="nuda-momscroll__list">
    <div class="nuda-momscroll__row"></div>
    <div class="nuda-momscroll__row"></div>
    <div class="nuda-momscroll__row"></div>
    <div class="nuda-momscroll__row"></div>
    <div class="nuda-momscroll__row"></div>
  </div>
  <div class="nuda-momscroll__track" aria-hidden="true">
    <div class="nuda-momscroll__thumb"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Momentum Scroll Indicator
   Thin scrollbar that decays into place like iOS.
   Customize: --mom-accent */

.nuda-momscroll {
  --mom-accent: #e4ff54;
  position: relative;
  width: 280px;
  height: 200px;
  padding: 14px;
  background: #0c0c10;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.nuda-momscroll__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nuda-momscroll__row {
  height: 28px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.nuda-momscroll__track {
  position: absolute;
  top: 14px;
  right: 6px;
  width: 3px;
  height: calc(100% - 28px);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 2px;
  overflow: hidden;
}

.nuda-momscroll__thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 38%;
  background: linear-gradient(180deg, var(--mom-accent), #9ec700);
  border-radius: 2px;
  animation: nuda-mom-decay 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

@keyframes nuda-mom-decay {
  0% { transform: translateY(0); }
  55% { transform: translateY(165%); }
  80%, 100% { transform: translateY(160%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-momscroll__thumb {
    animation: none;
    transform: translateY(160%);
  }
}`,
      },
    ],
  },

  /* ─────────────── SWIPE CARD ─────────────── */
  {
    id: "swipe-card",
    name: "Swipe Card",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-swipecard">
        <div className="nuda-swipecard__stack">
          <div className="nuda-swipecard__bg" />
          <div className="nuda-swipecard__bg nuda-swipecard__bg--2" />
          <div className="nuda-swipecard__card">
            <div className="nuda-swipecard__photo" />
            <div className="nuda-swipecard__meta">
              <strong>Lucia, 27</strong>
              <span>2 km away</span>
            </div>
            <div className="nuda-swipecard__tag nuda-swipecard__tag--like">LIKE</div>
            <div className="nuda-swipecard__tag nuda-swipecard__tag--nope">NOPE</div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-swipecard{width:240px;height:280px;display:flex;align-items:center;justify-content:center;font-family:system-ui;perspective:800px}
      .nuda-swipecard__stack{position:relative;width:200px;height:260px}
      .nuda-swipecard__bg,.nuda-swipecard__card{position:absolute;inset:0;border-radius:18px;background:#111114;border:1px solid rgba(255,255,255,.08);overflow:hidden}
      .nuda-swipecard__bg{transform:translateY(8px) scale(.95);opacity:.4}
      .nuda-swipecard__bg--2{transform:translateY(4px) scale(.97);opacity:.7}
      .nuda-swipecard__card{animation:_swcSway 3.6s ease-in-out infinite;transform-origin:bottom center;will-change:transform}
      .nuda-swipecard__photo{width:100%;height:62%;background:linear-gradient(135deg,#e4ff54 0%,#10b981 55%,#3b82f6 100%)}
      .nuda-swipecard__meta{padding:12px 14px;display:flex;flex-direction:column;gap:3px;font:600 12px/1 system-ui}
      .nuda-swipecard__meta strong{color:#fafafa}
      .nuda-swipecard__meta span{color:#63636e;font-weight:500}
      .nuda-swipecard__tag{position:absolute;top:18px;padding:5px 10px;border:2px solid currentColor;border-radius:6px;font:800 11px/1 system-ui;letter-spacing:1px;opacity:0;transform:rotate(-12deg)}
      .nuda-swipecard__tag--like{right:14px;color:#10b981;animation:_swcLike 3.6s ease-in-out infinite}
      .nuda-swipecard__tag--nope{left:14px;color:#ef4444;transform:rotate(12deg);animation:_swcNope 3.6s ease-in-out infinite}
      @keyframes _swcSway{0%,30%{transform:translateX(0) rotate(0)}40%,55%{transform:translateX(40px) rotate(8deg)}65%,80%{transform:translateX(-40px) rotate(-8deg)}90%,100%{transform:translateX(0) rotate(0)}}
      @keyframes _swcLike{0%,35%{opacity:0}45%,55%{opacity:1}65%,100%{opacity:0}}
      @keyframes _swcNope{0%,60%{opacity:0}70%,80%{opacity:1}90%,100%{opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-swipecard__card,.nuda-swipecard__tag{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-swipecard">
  <div class="nuda-swipecard__stack">
    <div class="nuda-swipecard__bg"></div>
    <div class="nuda-swipecard__bg nuda-swipecard__bg--2"></div>
    <div class="nuda-swipecard__card">
      <div class="nuda-swipecard__photo"></div>
      <div class="nuda-swipecard__meta">
        <strong>Lucia, 27</strong>
        <span>2 km away</span>
      </div>
      <div class="nuda-swipecard__tag nuda-swipecard__tag--like">LIKE</div>
      <div class="nuda-swipecard__tag nuda-swipecard__tag--nope">NOPE</div>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Swipe Card
   Tinder-style card with like/nope direction hints.
   Customize: --swc-like, --swc-nope */

.nuda-swipecard {
  --swc-like: #10b981;
  --swc-nope: #ef4444;
  width: 240px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
}

.nuda-swipecard__stack {
  position: relative;
  width: 200px;
  height: 260px;
}

.nuda-swipecard__bg,
.nuda-swipecard__card {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.nuda-swipecard__bg { transform: translateY(8px) scale(0.95); opacity: 0.4; }
.nuda-swipecard__bg--2 { transform: translateY(4px) scale(0.97); opacity: 0.7; }

.nuda-swipecard__card {
  animation: nuda-swc-sway 3.6s ease-in-out infinite;
  transform-origin: bottom center;
  will-change: transform;
}

.nuda-swipecard__photo {
  width: 100%;
  height: 62%;
  background: linear-gradient(135deg, #e4ff54 0%, #10b981 55%, #3b82f6 100%);
}

.nuda-swipecard__meta {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font: 600 12px/1 system-ui;
}

.nuda-swipecard__meta strong { color: #fafafa; }
.nuda-swipecard__meta span { color: #63636e; font-weight: 500; }

.nuda-swipecard__tag {
  position: absolute;
  top: 18px;
  padding: 5px 10px;
  border: 2px solid currentColor;
  border-radius: 6px;
  font: 800 11px/1 system-ui;
  letter-spacing: 1px;
  opacity: 0;
  transform: rotate(-12deg);
}

.nuda-swipecard__tag--like {
  right: 14px;
  color: var(--swc-like);
  animation: nuda-swc-like 3.6s ease-in-out infinite;
}

.nuda-swipecard__tag--nope {
  left: 14px;
  color: var(--swc-nope);
  transform: rotate(12deg);
  animation: nuda-swc-nope 3.6s ease-in-out infinite;
}

@keyframes nuda-swc-sway {
  0%, 30% { transform: translateX(0) rotate(0); }
  40%, 55% { transform: translateX(40px) rotate(8deg); }
  65%, 80% { transform: translateX(-40px) rotate(-8deg); }
  90%, 100% { transform: translateX(0) rotate(0); }
}

@keyframes nuda-swc-like {
  0%, 35% { opacity: 0; }
  45%, 55% { opacity: 1; }
  65%, 100% { opacity: 0; }
}

@keyframes nuda-swc-nope {
  0%, 60% { opacity: 0; }
  70%, 80% { opacity: 1; }
  90%, 100% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-swipecard__card,
  .nuda-swipecard__tag { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── STATUS BAR MOCK ─────────────── */
  {
    id: "status-bar-mock",
    name: "Status Bar Mock",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-statusbar" role="img" aria-label="9:41, signal strong, battery 78 percent">
        <div className="nuda-statusbar__time">9:41</div>
        <div className="nuda-statusbar__notch" aria-hidden="true" />
        <div className="nuda-statusbar__right" aria-hidden="true">
          <div className="nuda-statusbar__signal">
            <span /><span /><span /><span />
          </div>
          <svg viewBox="0 0 20 14" width="14" height="10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 7a8 8 0 0 1 16 0M5 9a5 5 0 0 1 10 0M8 11a2 2 0 0 1 4 0"/>
          </svg>
          <div className="nuda-statusbar__bat">
            <div className="nuda-statusbar__bat-fill" />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-statusbar{position:relative;display:flex;align-items:center;justify-content:space-between;width:280px;height:40px;padding:0 18px;background:#09090b;border:1px solid rgba(255,255,255,.06);border-radius:18px;font-family:system-ui;color:#fafafa}
      .nuda-statusbar__time{font:700 14px/1 system-ui;letter-spacing:-.2px}
      .nuda-statusbar__notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:80px;height:18px;background:#000;border-radius:0 0 14px 14px}
      .nuda-statusbar__right{display:flex;align-items:center;gap:6px;color:#fafafa}
      .nuda-statusbar__signal{display:flex;align-items:flex-end;gap:1.5px;height:10px}
      .nuda-statusbar__signal span{width:2.5px;background:#fafafa;border-radius:1px}
      .nuda-statusbar__signal span:nth-child(1){height:30%}
      .nuda-statusbar__signal span:nth-child(2){height:55%}
      .nuda-statusbar__signal span:nth-child(3){height:80%}
      .nuda-statusbar__signal span:nth-child(4){height:100%}
      .nuda-statusbar__bat{position:relative;width:22px;height:10px;border:1px solid rgba(255,255,255,.6);border-radius:3px;padding:1px}
      .nuda-statusbar__bat::after{content:"";position:absolute;top:50%;right:-3px;transform:translateY(-50%);width:1.5px;height:4px;background:rgba(255,255,255,.6);border-radius:1px}
      .nuda-statusbar__bat-fill{height:100%;width:78%;background:#e4ff54;border-radius:1px;animation:_batBreathe 3s ease-in-out infinite}
      @keyframes _batBreathe{0%,100%{opacity:.85}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-statusbar__bat-fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-statusbar" role="img" aria-label="9:41, signal strong, battery 78 percent">
  <div class="nuda-statusbar__time">9:41</div>
  <div class="nuda-statusbar__notch" aria-hidden="true"></div>
  <div class="nuda-statusbar__right" aria-hidden="true">
    <div class="nuda-statusbar__signal"><span></span><span></span><span></span><span></span></div>
    <svg viewBox="0 0 20 14" width="14" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M2 7a8 8 0 0 1 16 0M5 9a5 5 0 0 1 10 0M8 11a2 2 0 0 1 4 0"/>
    </svg>
    <div class="nuda-statusbar__bat"><div class="nuda-statusbar__bat-fill"></div></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Status Bar Mock
   iOS-style status row with time, signal, wifi and battery.
   Customize: --sb-accent */

.nuda-statusbar {
  --sb-accent: #e4ff54;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 40px;
  padding: 0 18px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  font-family: system-ui;
  color: #fafafa;
}

.nuda-statusbar__time { font: 700 14px/1 system-ui; letter-spacing: -0.2px; }

.nuda-statusbar__notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 18px;
  background: #000;
  border-radius: 0 0 14px 14px;
}

.nuda-statusbar__right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nuda-statusbar__signal {
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
  height: 10px;
}

.nuda-statusbar__signal span {
  width: 2.5px;
  background: #fafafa;
  border-radius: 1px;
}

.nuda-statusbar__signal span:nth-child(1) { height: 30%; }
.nuda-statusbar__signal span:nth-child(2) { height: 55%; }
.nuda-statusbar__signal span:nth-child(3) { height: 80%; }
.nuda-statusbar__signal span:nth-child(4) { height: 100%; }

.nuda-statusbar__bat {
  position: relative;
  width: 22px;
  height: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 1px;
}

.nuda-statusbar__bat::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -3px;
  transform: translateY(-50%);
  width: 1.5px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1px;
}

.nuda-statusbar__bat-fill {
  height: 100%;
  width: 78%;
  background: var(--sb-accent);
  border-radius: 1px;
  animation: nuda-bat-breathe 3s ease-in-out infinite;
}

@keyframes nuda-bat-breathe {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-statusbar__bat-fill { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── TOAST AT TOP ─────────────── */
  {
    id: "top-toast",
    name: "Top Toast Banner",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-toptoast" role="status" aria-live="polite">
        <div className="nuda-toptoast__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12l4 4 10-10"/></svg>
        </div>
        <div className="nuda-toptoast__text">
          <strong>Saved</strong>
          <span>Added to your reading list</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-toptoast{display:flex;align-items:center;gap:10px;width:280px;padding:10px 14px;background:rgba(20,20,25,.85);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.08);border-radius:14px;box-shadow:0 12px 30px -8px rgba(0,0,0,.55);font-family:system-ui;animation:_toptoast 3.5s cubic-bezier(.22,1,.36,1) infinite}
      .nuda-toptoast__icon{width:28px;height:28px;border-radius:50%;background:rgba(16,185,129,.18);border:1px solid rgba(16,185,129,.35);color:#10b981;display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .nuda-toptoast__text{display:flex;flex-direction:column;gap:2px;font:500 11px/1.3 system-ui;min-width:0}
      .nuda-toptoast__text strong{color:#fafafa;font-weight:600;font-size:12px}
      .nuda-toptoast__text span{color:#a0a0a8}
      @keyframes _toptoast{0%{opacity:0;transform:translateY(-30px)}10%,80%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-30px)}}
      @media(prefers-reduced-motion:reduce){.nuda-toptoast{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-toptoast" role="status" aria-live="polite">
  <div class="nuda-toptoast__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l4 4 10-10"/></svg>
  </div>
  <div class="nuda-toptoast__text">
    <strong>Saved</strong>
    <span>Added to your reading list</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Top Toast Banner
   Glass banner that slides down from the top and dismisses.
   Customize: --toast-bg, --toast-success */

.nuda-toptoast {
  --toast-bg: rgba(20, 20, 25, 0.85);
  --toast-success: #10b981;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 280px;
  padding: 10px 14px;
  background: var(--toast-bg);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.55);
  font-family: system-ui;
  animation: nuda-toptoast 3.5s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.nuda-toptoast__icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.18);
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: var(--toast-success);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nuda-toptoast__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font: 500 11px/1.3 system-ui;
  min-width: 0;
}

.nuda-toptoast__text strong { color: #fafafa; font-weight: 600; font-size: 12px; }
.nuda-toptoast__text span { color: #a0a0a8; }

@keyframes nuda-toptoast {
  0% { opacity: 0; transform: translateY(-30px); }
  10%, 80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-30px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-toptoast { animation: none; opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── LONG PRESS RADIAL MENU ─────────────── */
  {
    id: "long-press-menu",
    name: "Long-press Radial Menu",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-radial" role="menu" aria-label="Quick actions">
        <button type="button" className="nuda-radial__item" style={{ "--angle": "270deg" } as CSSProperties} aria-label="Reply">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 14l-5-5 5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/></svg>
        </button>
        <button type="button" className="nuda-radial__item" style={{ "--angle": "342deg" } as CSSProperties} aria-label="Like">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
        </button>
        <button type="button" className="nuda-radial__item" style={{ "--angle": "54deg" } as CSSProperties} aria-label="Star">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7 7 .6-5.3 4.7L18 22l-6-3.7L6 22l1.3-7.7L2 9.6 9 9z"/></svg>
        </button>
        <button type="button" className="nuda-radial__item" style={{ "--angle": "126deg" } as CSSProperties} aria-label="Trash">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>
        </button>
        <button type="button" className="nuda-radial__item" style={{ "--angle": "198deg" } as CSSProperties} aria-label="Share">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
        </button>
        <div className="nuda-radial__center" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-radial{position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-family:system-ui}
      .nuda-radial__center{width:44px;height:44px;border-radius:50%;background:#e4ff54;box-shadow:0 0 0 10px rgba(228,255,84,.1),0 0 0 22px rgba(228,255,84,.05),0 0 24px rgba(228,255,84,.4);animation:_radialPulse 2s ease-in-out infinite}
      .nuda-radial__item{position:absolute;top:50%;left:50%;width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:#111114;color:#fafafa;display:flex;align-items:center;justify-content:center;cursor:pointer;transform:translate(-50%,-50%) rotate(var(--angle)) translateY(-72px) rotate(calc(-1 * var(--angle))) scale(.4);opacity:0;animation:_radialPop .55s cubic-bezier(.22,1,.36,1) forwards;animation-delay:.05s}
      .nuda-radial__item:hover{background:#1a1a20}
      @keyframes _radialPop{to{transform:translate(-50%,-50%) rotate(var(--angle)) translateY(-72px) rotate(calc(-1 * var(--angle))) scale(1);opacity:1}}
      @keyframes _radialPulse{0%,100%{transform:scale(1)}50%{transform:scale(.92)}}
      @media(prefers-reduced-motion:reduce){.nuda-radial__item{animation:none;opacity:1;transform:translate(-50%,-50%) rotate(var(--angle)) translateY(-72px) rotate(calc(-1 * var(--angle)))}.nuda-radial__center{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-radial" role="menu" aria-label="Quick actions">
  <button type="button" class="nuda-radial__item" style="--angle:270deg" aria-label="Reply">…</button>
  <button type="button" class="nuda-radial__item" style="--angle:342deg" aria-label="Like">…</button>
  <button type="button" class="nuda-radial__item" style="--angle:54deg" aria-label="Star">…</button>
  <button type="button" class="nuda-radial__item" style="--angle:126deg" aria-label="Trash">…</button>
  <button type="button" class="nuda-radial__item" style="--angle:198deg" aria-label="Share">…</button>
  <div class="nuda-radial__center" aria-hidden="true"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Long-press Radial Menu
   Ring of action buttons that emerge from a glowing center.
   Customize: --radial-accent, --radial-radius */

.nuda-radial {
  --radial-accent: #e4ff54;
  --radial-radius: 72px;
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui;
}

.nuda-radial__center {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--radial-accent);
  box-shadow:
    0 0 0 10px rgba(228, 255, 84, 0.1),
    0 0 0 22px rgba(228, 255, 84, 0.05),
    0 0 24px rgba(228, 255, 84, 0.4);
  animation: nuda-radial-pulse 2s ease-in-out infinite;
}

.nuda-radial__item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #111114;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translate(-50%, -50%)
    rotate(var(--angle))
    translateY(calc(-1 * var(--radial-radius)))
    rotate(calc(-1 * var(--angle)))
    scale(0.4);
  opacity: 0;
  animation: nuda-radial-pop 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.05s;
}

.nuda-radial__item:hover { background: #1a1a20; }

@keyframes nuda-radial-pop {
  to {
    transform: translate(-50%, -50%)
      rotate(var(--angle))
      translateY(calc(-1 * var(--radial-radius)))
      rotate(calc(-1 * var(--angle)))
      scale(1);
    opacity: 1;
  }
}

@keyframes nuda-radial-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.92); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-radial__item,
  .nuda-radial__center { animation: none; }
  .nuda-radial__item { opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── DRAWER HAMBURGER ─────────────── */
  {
    id: "drawer-hamburger",
    name: "Drawer Hamburger",
    category: "Mobile Patterns",
    preview: (
      <button type="button" className="nuda-hamb nuda-hamb--open" aria-label="Toggle menu" aria-expanded="true">
        <span className="nuda-hamb__bar" />
        <span className="nuda-hamb__bar" />
        <span className="nuda-hamb__bar" />
      </button>
    ),
    cssInline: `
      .nuda-hamb{appearance:none;width:48px;height:48px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;cursor:pointer;transition:background .2s}
      .nuda-hamb:hover{background:#1a1a20}
      .nuda-hamb__bar{display:block;width:22px;height:2px;background:#fafafa;border-radius:2px;transition:transform .35s cubic-bezier(.65,.05,.36,1),opacity .2s,width .35s}
      .nuda-hamb--open .nuda-hamb__bar{animation:_hambMorph 3.4s ease-in-out infinite;transform-origin:center}
      .nuda-hamb--open .nuda-hamb__bar:nth-child(1){animation-name:_hambTop}
      .nuda-hamb--open .nuda-hamb__bar:nth-child(2){animation-name:_hambMid}
      .nuda-hamb--open .nuda-hamb__bar:nth-child(3){animation-name:_hambBot}
      @keyframes _hambTop{0%,25%{transform:translateY(0) rotate(0)}45%,80%{transform:translateY(7px) rotate(45deg)}100%{transform:translateY(0) rotate(0)}}
      @keyframes _hambMid{0%,25%{opacity:1;transform:scaleX(1)}45%,80%{opacity:0;transform:scaleX(0)}100%{opacity:1;transform:scaleX(1)}}
      @keyframes _hambBot{0%,25%{transform:translateY(0) rotate(0)}45%,80%{transform:translateY(-7px) rotate(-45deg)}100%{transform:translateY(0) rotate(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-hamb--open .nuda-hamb__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-hamb nuda-hamb--open"
        aria-label="Toggle menu" aria-expanded="true">
  <span class="nuda-hamb__bar"></span>
  <span class="nuda-hamb__bar"></span>
  <span class="nuda-hamb__bar"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drawer Hamburger
   3-line button that morphs to an X when open.
   Customize: --hamb-bg, --hamb-color */

.nuda-hamb {
  --hamb-bg: #111114;
  --hamb-color: #fafafa;
  appearance: none;
  width: 48px;
  height: 48px;
  background: var(--hamb-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

.nuda-hamb:hover { background: #1a1a20; }

.nuda-hamb__bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--hamb-color);
  border-radius: 2px;
  transform-origin: center;
}

/* Toggle ".nuda-hamb--open" in JS to morph. The keyframes below
   loop the morph for demo purposes. */
.nuda-hamb--open .nuda-hamb__bar:nth-child(1) {
  animation: nuda-hamb-top 3.4s ease-in-out infinite;
}
.nuda-hamb--open .nuda-hamb__bar:nth-child(2) {
  animation: nuda-hamb-mid 3.4s ease-in-out infinite;
}
.nuda-hamb--open .nuda-hamb__bar:nth-child(3) {
  animation: nuda-hamb-bot 3.4s ease-in-out infinite;
}

@keyframes nuda-hamb-top {
  0%, 25% { transform: translateY(0) rotate(0); }
  45%, 80% { transform: translateY(7px) rotate(45deg); }
  100% { transform: translateY(0) rotate(0); }
}

@keyframes nuda-hamb-mid {
  0%, 25% { opacity: 1; transform: scaleX(1); }
  45%, 80% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: scaleX(1); }
}

@keyframes nuda-hamb-bot {
  0%, 25% { transform: translateY(0) rotate(0); }
  45%, 80% { transform: translateY(-7px) rotate(-45deg); }
  100% { transform: translateY(0) rotate(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hamb--open .nuda-hamb__bar { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── PULL DOWN SEARCH ─────────────── */
  {
    id: "pull-down-search",
    name: "Pull-down Search",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-pdsearch">
        <div className="nuda-pdsearch__bar">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <span>Search</span>
        </div>
        <div className="nuda-pdsearch__content">
          <div className="nuda-pdsearch__title">Inbox</div>
          <div className="nuda-pdsearch__row" />
          <div className="nuda-pdsearch__row" />
          <div className="nuda-pdsearch__row" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pdsearch{position:relative;width:280px;height:220px;background:#0c0c10;border-radius:18px;border:1px solid rgba(255,255,255,.06);overflow:hidden;font-family:system-ui}
      .nuda-pdsearch__bar{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;gap:8px;height:36px;padding:0 14px;background:rgba(255,255,255,.06);color:#63636e;font:500 12px/1 system-ui;border-bottom:1px solid rgba(255,255,255,.05);animation:_pdsBar 4s cubic-bezier(.22,1,.36,1) infinite}
      .nuda-pdsearch__content{padding:14px;display:flex;flex-direction:column;gap:8px;animation:_pdsContent 4s cubic-bezier(.22,1,.36,1) infinite}
      .nuda-pdsearch__title{color:#fafafa;font:700 14px/1 system-ui;margin-bottom:4px}
      .nuda-pdsearch__row{height:30px;border-radius:8px;background:linear-gradient(90deg,rgba(255,255,255,.06),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.05)}
      @keyframes _pdsBar{0%,15%{transform:translateY(-100%);opacity:0}35%,75%{transform:translateY(0);opacity:1}95%,100%{transform:translateY(-100%);opacity:0}}
      @keyframes _pdsContent{0%,15%{transform:translateY(0)}35%,75%{transform:translateY(36px)}95%,100%{transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-pdsearch__bar,.nuda-pdsearch__content{animation:none}.nuda-pdsearch__bar{transform:translateY(0);opacity:1}.nuda-pdsearch__content{transform:translateY(36px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pdsearch">
  <div class="nuda-pdsearch__bar">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
    </svg>
    <span>Search</span>
  </div>
  <div class="nuda-pdsearch__content">
    <div class="nuda-pdsearch__title">Inbox</div>
    <div class="nuda-pdsearch__row"></div>
    <div class="nuda-pdsearch__row"></div>
    <div class="nuda-pdsearch__row"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pull-down Search
   Hidden search bar that reveals as content pushes down.
   Customize: --pds-bar, --pds-bg */

.nuda-pdsearch {
  --pds-bar: rgba(255, 255, 255, 0.06);
  --pds-bg: #0c0c10;
  position: relative;
  width: 280px;
  height: 220px;
  background: var(--pds-bg);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  font-family: system-ui;
}

.nuda-pdsearch__bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  background: var(--pds-bar);
  color: #63636e;
  font: 500 12px/1 system-ui;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  animation: nuda-pds-bar 4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.nuda-pdsearch__content {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: nuda-pds-content 4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.nuda-pdsearch__title { color: #fafafa; font: 700 14px/1 system-ui; margin-bottom: 4px; }

.nuda-pdsearch__row {
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.05);
}

@keyframes nuda-pds-bar {
  0%, 15% { transform: translateY(-100%); opacity: 0; }
  35%, 75% { transform: translateY(0); opacity: 1; }
  95%, 100% { transform: translateY(-100%); opacity: 0; }
}

@keyframes nuda-pds-content {
  0%, 15% { transform: translateY(0); }
  35%, 75% { transform: translateY(36px); }
  95%, 100% { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pdsearch__bar,
  .nuda-pdsearch__content { animation: none; }
  .nuda-pdsearch__bar { transform: translateY(0); opacity: 1; }
  .nuda-pdsearch__content { transform: translateY(36px); }
}`,
      },
    ],
  },

  /* ─────────────── MOBILE MODAL SHEET ─────────────── */
  {
    id: "mobile-modal",
    name: "Mobile Modal Sheet",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-mmodal">
        <div className="nuda-mmodal__scrim" />
        <div className="nuda-mmodal__panel" role="dialog" aria-labelledby="mm-title">
          <div className="nuda-mmodal__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 9v4"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg>
          </div>
          <div id="mm-title" className="nuda-mmodal__title">Delete file?</div>
          <div className="nuda-mmodal__desc">This action cannot be undone.</div>
          <div className="nuda-mmodal__actions">
            <button type="button" className="nuda-mmodal__btn">Cancel</button>
            <button type="button" className="nuda-mmodal__btn nuda-mmodal__btn--primary">Delete</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mmodal{position:relative;width:280px;height:280px;background:#09090b;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;font-family:system-ui}
      .nuda-mmodal__scrim{position:absolute;inset:0;background:rgba(0,0,0,.6);animation:_mmFade .35s ease both}
      .nuda-mmodal__panel{position:relative;width:240px;padding:20px 18px 14px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:18px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;animation:_mmZoom .4s cubic-bezier(.22,1.4,.36,1) both}
      .nuda-mmodal__icon{width:42px;height:42px;border-radius:50%;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.35);color:#ef4444;display:flex;align-items:center;justify-content:center;margin-bottom:4px}
      .nuda-mmodal__title{color:#fafafa;font:700 15px/1.2 system-ui}
      .nuda-mmodal__desc{color:#a0a0a8;font:500 12px/1.4 system-ui;margin-bottom:8px}
      .nuda-mmodal__actions{display:flex;gap:8px;width:100%;margin-top:4px}
      .nuda-mmodal__btn{flex:1;appearance:none;min-height:36px;border-radius:9px;border:1px solid rgba(255,255,255,.1);background:transparent;color:#fafafa;font:600 12px/1 system-ui;cursor:pointer;transition:background .15s}
      .nuda-mmodal__btn:hover{background:rgba(255,255,255,.04)}
      .nuda-mmodal__btn--primary{background:#ef4444;border-color:#ef4444;color:#fff}
      .nuda-mmodal__btn--primary:hover{background:#dc2626}
      @keyframes _mmFade{from{opacity:0}to{opacity:1}}
      @keyframes _mmZoom{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-mmodal__scrim,.nuda-mmodal__panel{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mmodal">
  <div class="nuda-mmodal__scrim"></div>
  <div class="nuda-mmodal__panel" role="dialog" aria-labelledby="mm-title">
    <div class="nuda-mmodal__icon" aria-hidden="true">⚠</div>
    <div id="mm-title" class="nuda-mmodal__title">Delete file?</div>
    <div class="nuda-mmodal__desc">This action cannot be undone.</div>
    <div class="nuda-mmodal__actions">
      <button type="button" class="nuda-mmodal__btn">Cancel</button>
      <button type="button" class="nuda-mmodal__btn nuda-mmodal__btn--primary">Delete</button>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Mobile Modal Sheet
   Centered alert with dim backdrop and pop-in panel.
   Customize: --mm-bg, --mm-danger */

.nuda-mmodal {
  --mm-bg: #111114;
  --mm-danger: #ef4444;
  position: relative;
  width: 280px;
  height: 280px;
  background: #09090b;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui;
}

.nuda-mmodal__scrim {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: nuda-mm-fade 0.35s ease both;
}

.nuda-mmodal__panel {
  position: relative;
  width: 240px;
  padding: 20px 18px 14px;
  background: var(--mm-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: nuda-mm-zoom 0.4s cubic-bezier(0.22, 1.4, 0.36, 1) both;
}

.nuda-mmodal__icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: var(--mm-danger);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.nuda-mmodal__title { color: #fafafa; font: 700 15px/1.2 system-ui; }
.nuda-mmodal__desc { color: #a0a0a8; font: 500 12px/1.4 system-ui; margin-bottom: 8px; }

.nuda-mmodal__actions { display: flex; gap: 8px; width: 100%; margin-top: 4px; }

.nuda-mmodal__btn {
  flex: 1;
  appearance: none;
  min-height: 36px;
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: #fafafa;
  font: 600 12px/1 system-ui;
  cursor: pointer;
  transition: background 0.15s;
}

.nuda-mmodal__btn:hover { background: rgba(255, 255, 255, 0.04); }

.nuda-mmodal__btn--primary {
  background: var(--mm-danger);
  border-color: var(--mm-danger);
  color: #fff;
}

.nuda-mmodal__btn--primary:hover { background: #dc2626; }

@keyframes nuda-mm-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes nuda-mm-zoom {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-mmodal__scrim,
  .nuda-mmodal__panel { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── ONBOARDING DOTS ─────────────── */
  {
    id: "onboarding-dots",
    name: "Onboarding Dots",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-onb">
        <div className="nuda-onb__screen">
          <div className="nuda-onb__art" />
          <div className="nuda-onb__heading">Stay focused</div>
          <div className="nuda-onb__body">Block distractions and track your progress.</div>
        </div>
        <div className="nuda-onb__dots" role="tablist" aria-label="Page">
          <span className="nuda-onb__dot" role="tab" aria-selected="false" />
          <span className="nuda-onb__dot nuda-onb__dot--active" role="tab" aria-selected="true" />
          <span className="nuda-onb__dot" role="tab" aria-selected="false" />
          <span className="nuda-onb__dot" role="tab" aria-selected="false" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-onb{display:flex;flex-direction:column;align-items:center;gap:14px;width:260px;padding:18px 16px 16px;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:20px;font-family:system-ui}
      .nuda-onb__screen{text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;animation:_onbFade .55s ease both}
      .nuda-onb__art{width:72px;height:72px;border-radius:20px;background:conic-gradient(from 90deg,#e4ff54,#10b981,#3b82f6,#e4ff54);box-shadow:0 12px 32px -8px rgba(228,255,84,.35);margin-bottom:4px}
      .nuda-onb__heading{color:#fafafa;font:700 15px/1.2 system-ui}
      .nuda-onb__body{color:#a0a0a8;font:500 12px/1.4 system-ui;max-width:200px}
      .nuda-onb__dots{display:flex;align-items:center;gap:6px;margin-top:2px}
      .nuda-onb__dot{display:block;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.18);transition:width .35s,background .25s}
      .nuda-onb__dot--active{width:20px;border-radius:3px;background:#e4ff54;animation:_onbDot .55s cubic-bezier(.22,1,.36,1) both}
      @keyframes _onbFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _onbDot{from{width:6px}to{width:20px}}
      @media(prefers-reduced-motion:reduce){.nuda-onb__screen,.nuda-onb__dot--active{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-onb">
  <div class="nuda-onb__screen">
    <div class="nuda-onb__art"></div>
    <div class="nuda-onb__heading">Stay focused</div>
    <div class="nuda-onb__body">Block distractions and track your progress.</div>
  </div>
  <div class="nuda-onb__dots" role="tablist" aria-label="Page">
    <span class="nuda-onb__dot" role="tab" aria-selected="false"></span>
    <span class="nuda-onb__dot nuda-onb__dot--active" role="tab" aria-selected="true"></span>
    <span class="nuda-onb__dot" role="tab" aria-selected="false"></span>
    <span class="nuda-onb__dot" role="tab" aria-selected="false"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Onboarding Dots
   Page indicator where the active dot stretches into a pill.
   Customize: --onb-accent, --onb-dim */

.nuda-onb {
  --onb-accent: #e4ff54;
  --onb-dim: rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 260px;
  padding: 18px 16px 16px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  font-family: system-ui;
}

.nuda-onb__screen {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: nuda-onb-fade 0.55s ease both;
}

.nuda-onb__art {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: conic-gradient(from 90deg, #e4ff54, #10b981, #3b82f6, #e4ff54);
  box-shadow: 0 12px 32px -8px rgba(228, 255, 84, 0.35);
  margin-bottom: 4px;
}

.nuda-onb__heading { color: #fafafa; font: 700 15px/1.2 system-ui; }
.nuda-onb__body { color: #a0a0a8; font: 500 12px/1.4 system-ui; max-width: 200px; }

.nuda-onb__dots { display: flex; align-items: center; gap: 6px; margin-top: 2px; }

.nuda-onb__dot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--onb-dim);
  transition: width 0.35s, background 0.25s;
}

.nuda-onb__dot--active {
  width: 20px;
  border-radius: 3px;
  background: var(--onb-accent);
  animation: nuda-onb-dot 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes nuda-onb-fade {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-onb-dot {
  from { width: 6px; }
  to { width: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-onb__screen,
  .nuda-onb__dot--active { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── PINCH TO ZOOM HINT ─────────────── */
  {
    id: "pinch-zoom-hint",
    name: "Pinch-to-Zoom Hint",
    category: "Mobile Patterns",
    preview: (
      <div className="nuda-pinch" role="img" aria-label="Pinch to zoom indicator">
        <div className="nuda-pinch__photo" />
        <div className="nuda-pinch__frame" aria-hidden="true">
          <span className="nuda-pinch__corner nuda-pinch__corner--tl" />
          <span className="nuda-pinch__corner nuda-pinch__corner--tr" />
          <span className="nuda-pinch__corner nuda-pinch__corner--bl" />
          <span className="nuda-pinch__corner nuda-pinch__corner--br" />
        </div>
        <span className="nuda-pinch__finger nuda-pinch__finger--a" />
        <span className="nuda-pinch__finger nuda-pinch__finger--b" />
      </div>
    ),
    cssInline: `
      .nuda-pinch{position:relative;width:240px;height:240px;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.06);background:#0c0c10;display:flex;align-items:center;justify-content:center}
      .nuda-pinch__photo{position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,#e4ff54,#10b981 45%,#0c0c10 85%);animation:_pinchZoom 3.6s ease-in-out infinite;transform-origin:center;will-change:transform}
      .nuda-pinch__frame{position:absolute;width:120px;height:120px;animation:_pinchFrame 3.6s ease-in-out infinite}
      .nuda-pinch__corner{position:absolute;width:16px;height:16px;border:2px solid #fafafa;border-radius:2px}
      .nuda-pinch__corner--tl{top:0;left:0;border-right:0;border-bottom:0}
      .nuda-pinch__corner--tr{top:0;right:0;border-left:0;border-bottom:0}
      .nuda-pinch__corner--bl{bottom:0;left:0;border-right:0;border-top:0}
      .nuda-pinch__corner--br{bottom:0;right:0;border-left:0;border-top:0}
      .nuda-pinch__finger{position:absolute;width:22px;height:22px;border-radius:50%;background:rgba(228,255,84,.25);border:2px solid #e4ff54;box-shadow:0 0 14px rgba(228,255,84,.55)}
      .nuda-pinch__finger--a{top:50%;left:50%;animation:_pinchA 3.6s ease-in-out infinite}
      .nuda-pinch__finger--b{top:50%;left:50%;animation:_pinchB 3.6s ease-in-out infinite}
      @keyframes _pinchZoom{0%,15%{transform:scale(1)}50%,70%{transform:scale(1.35)}90%,100%{transform:scale(1)}}
      @keyframes _pinchFrame{0%,15%{transform:scale(.85);opacity:.7}50%,70%{transform:scale(1);opacity:1}90%,100%{transform:scale(.85);opacity:.7}}
      @keyframes _pinchA{0%,15%{transform:translate(-50%,-50%) translate(-12px,-12px)}50%,70%{transform:translate(-50%,-50%) translate(-44px,-44px)}90%,100%{transform:translate(-50%,-50%) translate(-12px,-12px)}}
      @keyframes _pinchB{0%,15%{transform:translate(-50%,-50%) translate(12px,12px)}50%,70%{transform:translate(-50%,-50%) translate(44px,44px)}90%,100%{transform:translate(-50%,-50%) translate(12px,12px)}}
      @media(prefers-reduced-motion:reduce){.nuda-pinch__photo,.nuda-pinch__frame,.nuda-pinch__finger--a,.nuda-pinch__finger--b{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pinch" role="img" aria-label="Pinch to zoom indicator">
  <div class="nuda-pinch__photo"></div>
  <div class="nuda-pinch__frame" aria-hidden="true">
    <span class="nuda-pinch__corner nuda-pinch__corner--tl"></span>
    <span class="nuda-pinch__corner nuda-pinch__corner--tr"></span>
    <span class="nuda-pinch__corner nuda-pinch__corner--bl"></span>
    <span class="nuda-pinch__corner nuda-pinch__corner--br"></span>
  </div>
  <span class="nuda-pinch__finger nuda-pinch__finger--a"></span>
  <span class="nuda-pinch__finger nuda-pinch__finger--b"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pinch-to-Zoom Hint
   Two finger dots spread diagonally as the image zooms in.
   Customize: --pinch-accent */

.nuda-pinch {
  --pinch-accent: #e4ff54;
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #0c0c10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-pinch__photo {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 30%,
    var(--pinch-accent),
    #10b981 45%,
    #0c0c10 85%
  );
  animation: nuda-pinch-zoom 3.6s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;
}

.nuda-pinch__frame {
  position: absolute;
  width: 120px;
  height: 120px;
  animation: nuda-pinch-frame 3.6s ease-in-out infinite;
}

.nuda-pinch__corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid #fafafa;
  border-radius: 2px;
}

.nuda-pinch__corner--tl { top: 0; left: 0; border-right: 0; border-bottom: 0; }
.nuda-pinch__corner--tr { top: 0; right: 0; border-left: 0; border-bottom: 0; }
.nuda-pinch__corner--bl { bottom: 0; left: 0; border-right: 0; border-top: 0; }
.nuda-pinch__corner--br { bottom: 0; right: 0; border-left: 0; border-top: 0; }

.nuda-pinch__finger {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(228, 255, 84, 0.25);
  border: 2px solid var(--pinch-accent);
  box-shadow: 0 0 14px rgba(228, 255, 84, 0.55);
  top: 50%;
  left: 50%;
}

.nuda-pinch__finger--a {
  animation: nuda-pinch-a 3.6s ease-in-out infinite;
}

.nuda-pinch__finger--b {
  animation: nuda-pinch-b 3.6s ease-in-out infinite;
}

@keyframes nuda-pinch-zoom {
  0%, 15% { transform: scale(1); }
  50%, 70% { transform: scale(1.35); }
  90%, 100% { transform: scale(1); }
}

@keyframes nuda-pinch-frame {
  0%, 15% { transform: scale(0.85); opacity: 0.7; }
  50%, 70% { transform: scale(1); opacity: 1; }
  90%, 100% { transform: scale(0.85); opacity: 0.7; }
}

@keyframes nuda-pinch-a {
  0%, 15% { transform: translate(-50%, -50%) translate(-12px, -12px); }
  50%, 70% { transform: translate(-50%, -50%) translate(-44px, -44px); }
  90%, 100% { transform: translate(-50%, -50%) translate(-12px, -12px); }
}

@keyframes nuda-pinch-b {
  0%, 15% { transform: translate(-50%, -50%) translate(12px, 12px); }
  50%, 70% { transform: translate(-50%, -50%) translate(44px, 44px); }
  90%, 100% { transform: translate(-50%, -50%) translate(12px, 12px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pinch__photo,
  .nuda-pinch__frame,
  .nuda-pinch__finger--a,
  .nuda-pinch__finger--b { animation: none; }
}`,
      },
    ],
  },
];
