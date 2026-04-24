import type { NudaComponent } from "./types";

export const indicators: NudaComponent[] = [
  /* ─────────────── Typing Indicator ─────────────── */
  {
    id: "typing-indicator",
    name: "Typing Indicator",
    category: "Indicators",
    preview: (
      <div className="nuda-typing" role="status" aria-label="Someone is typing">
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-typing{--c:#a0a0a0;--s:8px;display:inline-flex;align-items:center;gap:4px;padding:8px 14px;background:rgba(255,255,255,.08);border-radius:20px}
      .nuda-typing span{width:var(--s);height:var(--s);background:var(--c);border-radius:50%;animation:_typ .9s ease-in-out infinite}
      .nuda-typing span:nth-child(2){animation-delay:.15s}
      .nuda-typing span:nth-child(3){animation-delay:.3s}
      @keyframes _typ{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-6px);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-typing" role="status" aria-label="Someone is typing">
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Typing Indicator
   Chat-style bouncing dots.
   Customize: --typing-color, --typing-size */

.nuda-typing {
  --typing-color: #a0a0a0;
  --typing-size: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
}

.nuda-typing span {
  width: var(--typing-size);
  height: var(--typing-size);
  background: var(--typing-color);
  border-radius: 50%;
  animation: nuda-typing-bounce 0.9s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-typing span:nth-child(2) { animation-delay: 0.15s; }
.nuda-typing span:nth-child(3) { animation-delay: 0.3s; }

@keyframes nuda-typing-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-6px);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-typing span {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── Status Dot ─────────────── */
  {
    id: "status-dot",
    name: "Status Dot",
    category: "Indicators",
    preview: (
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span className="nuda-status-dot" data-status="online" aria-label="Online" />
        <span className="nuda-status-dot" data-status="away" aria-label="Away" />
        <span className="nuda-status-dot" data-status="offline" aria-label="Offline" />
      </div>
    ),
    cssInline: `
      .nuda-status-dot{--s:12px;width:var(--s);height:var(--s);border-radius:50%;position:relative;display:inline-block}
      .nuda-status-dot[data-status="online"]{background:#22c55e;box-shadow:0 0 6px #22c55e80}
      .nuda-status-dot[data-status="online"]::after{content:'';position:absolute;inset:-3px;border-radius:50%;border:2px solid #22c55e;animation:_sdp 1.5s ease-out infinite;opacity:0}
      .nuda-status-dot[data-status="away"]{background:#f59e0b}
      .nuda-status-dot[data-status="offline"]{background:#6b7280}
      @keyframes _sdp{0%{transform:scale(.8);opacity:.6}100%{transform:scale(1.8);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Online (pulsing) -->
<span class="nuda-status-dot" data-status="online" aria-label="Online"></span>

<!-- Away -->
<span class="nuda-status-dot" data-status="away" aria-label="Away"></span>

<!-- Offline -->
<span class="nuda-status-dot" data-status="offline" aria-label="Offline"></span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Status Dot
   Pulsing online/offline/away indicator.
   Customize: --status-size */

.nuda-status-dot {
  --status-size: 12px;
  width: var(--status-size);
  height: var(--status-size);
  border-radius: 50%;
  position: relative;
  display: inline-block;
}

.nuda-status-dot[data-status="online"] {
  background: #22c55e;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.5);
}

.nuda-status-dot[data-status="online"]::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid #22c55e;
  animation: nuda-status-pulse 1.5s ease-out infinite;
  opacity: 0;
}

.nuda-status-dot[data-status="away"] {
  background: #f59e0b;
}

.nuda-status-dot[data-status="offline"] {
  background: #6b7280;
}

@keyframes nuda-status-pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-status-dot[data-status="online"]::after {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Notification Badge ─────────────── */
  {
    id: "notification-badge",
    name: "Notification Badge",
    category: "Indicators",
    preview: (
      <div style={{ position: "relative", display: "inline-flex" }}>
        <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <span className="nuda-notif-badge" aria-label="3 notifications">3</span>
      </div>
    ),
    cssInline: `
      .nuda-notif-badge{--bg:#ef4444;--fg:#fff;position:absolute;top:-5px;right:-5px;min-width:20px;height:20px;padding:0 6px;background:var(--bg);color:var(--fg);font-size:11px;font-weight:700;line-height:20px;text-align:center;border-radius:10px;animation:_nb .4s cubic-bezier(.36,1.4,.65,1) both}
      @keyframes _nb{0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div style="position: relative; display: inline-flex;">
  <!-- Your icon or element here -->
  <button class="nuda-icon-btn" aria-label="Notifications">
    🔔
  </button>
  <span class="nuda-notif-badge" aria-label="3 notifications">3</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Notification Badge
   Bouncing number badge for notifications.
   Customize: --badge-bg, --badge-fg */

.nuda-notif-badge {
  --badge-bg: #ef4444;
  --badge-fg: #fff;
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: var(--badge-bg);
  color: var(--badge-fg);
  font-size: 11px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  animation: nuda-notif-bounce 0.4s cubic-bezier(0.36, 1.4, 0.65, 1) both;
  will-change: transform;
}

@keyframes nuda-notif-bounce {
  0% { transform: scale(0); }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-notif-badge {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Live Pulse ─────────────── */
  {
    id: "live-pulse",
    name: "Live Pulse",
    category: "Indicators",
    preview: (
      <div className="nuda-live-pulse" aria-label="Live">
        <span className="nuda-live-pulse__dot" />
        <span className="nuda-live-pulse__text">LIVE</span>
      </div>
    ),
    cssInline: `
      .nuda-live-pulse{display:inline-flex;align-items:center;gap:6px;padding:4px 12px 4px 8px;background:rgba(239,68,68,.12);border-radius:20px;border:1px solid rgba(239,68,68,.25)}
      .nuda-live-pulse__dot{width:8px;height:8px;background:#ef4444;border-radius:50%;position:relative}
      .nuda-live-pulse__dot::after{content:'';position:absolute;inset:0;border-radius:50%;background:#ef4444;animation:_lp 1.2s ease-out infinite}
      .nuda-live-pulse__text{font-size:12px;font-weight:700;letter-spacing:.06em;color:#ef4444}
      @keyframes _lp{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.5);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-live-pulse" aria-label="Live">
  <span class="nuda-live-pulse__dot"></span>
  <span class="nuda-live-pulse__text">LIVE</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Live Pulse
   "LIVE" label with pulsing red dot.
   Customize: --live-color */

.nuda-live-pulse {
  --live-color: #ef4444;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px 4px 8px;
  background: rgba(239, 68, 68, 0.12);
  border-radius: 20px;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

.nuda-live-pulse__dot {
  width: 8px;
  height: 8px;
  background: var(--live-color);
  border-radius: 50%;
  position: relative;
}

.nuda-live-pulse__dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--live-color);
  animation: nuda-live-ping 1.2s ease-out infinite;
}

.nuda-live-pulse__text {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--live-color);
}

@keyframes nuda-live-ping {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-live-pulse__dot::after {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Signal Bars ─────────────── */
  {
    id: "signal-bars",
    name: "Signal Bars",
    category: "Indicators",
    preview: (
      <div className="nuda-signal-bars" role="img" aria-label="Signal strength 3 of 4">
        <span className="nuda-signal-bars__bar" data-active="true" />
        <span className="nuda-signal-bars__bar" data-active="true" />
        <span className="nuda-signal-bars__bar" data-active="true" />
        <span className="nuda-signal-bars__bar" data-active="false" />
      </div>
    ),
    cssInline: `
      .nuda-signal-bars{display:inline-flex;align-items:flex-end;gap:3px;height:24px}
      .nuda-signal-bars__bar{width:5px;background:rgba(255,255,255,.15);border-radius:2px;animation:_sb .5s ease-out both}
      .nuda-signal-bars__bar:nth-child(1){height:25%}
      .nuda-signal-bars__bar:nth-child(2){height:50%;animation-delay:.08s}
      .nuda-signal-bars__bar:nth-child(3){height:75%;animation-delay:.16s}
      .nuda-signal-bars__bar:nth-child(4){height:100%;animation-delay:.24s}
      .nuda-signal-bars__bar[data-active="true"]{background:#22c55e}
      @keyframes _sb{0%{transform:scaleY(0)}100%{transform:scaleY(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-signal-bars" role="img" aria-label="Signal strength 3 of 4">
  <span class="nuda-signal-bars__bar" data-active="true"></span>
  <span class="nuda-signal-bars__bar" data-active="true"></span>
  <span class="nuda-signal-bars__bar" data-active="true"></span>
  <span class="nuda-signal-bars__bar" data-active="false"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Signal Bars
   Animated signal strength indicator.
   Customize: --signal-active, --signal-inactive */

.nuda-signal-bars {
  --signal-active: #22c55e;
  --signal-inactive: rgba(255, 255, 255, 0.15);
  display: inline-flex;
  align-items: flex-end;
  gap: 3px;
  height: 24px;
}

.nuda-signal-bars__bar {
  width: 5px;
  background: var(--signal-inactive);
  border-radius: 2px;
  transform-origin: bottom;
  animation: nuda-signal-grow 0.5s ease-out both;
}

.nuda-signal-bars__bar:nth-child(1) { height: 25%; }
.nuda-signal-bars__bar:nth-child(2) { height: 50%; animation-delay: 0.08s; }
.nuda-signal-bars__bar:nth-child(3) { height: 75%; animation-delay: 0.16s; }
.nuda-signal-bars__bar:nth-child(4) { height: 100%; animation-delay: 0.24s; }

.nuda-signal-bars__bar[data-active="true"] {
  background: var(--signal-active);
}

@keyframes nuda-signal-grow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-signal-bars__bar {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Recording Dot ─────────────── */
  {
    id: "recording-dot",
    name: "Recording Dot",
    category: "Indicators",
    preview: (
      <div className="nuda-rec-dot" role="status" aria-label="Recording">
        <span className="nuda-rec-dot__circle" />
        <span className="nuda-rec-dot__label">REC</span>
      </div>
    ),
    cssInline: `
      .nuda-rec-dot{display:inline-flex;align-items:center;gap:6px}
      .nuda-rec-dot__circle{width:10px;height:10px;background:#ef4444;border-radius:50%;animation:_rec 1s ease-in-out infinite}
      .nuda-rec-dot__label{font-size:12px;font-weight:700;letter-spacing:.06em;color:#ef4444}
      @keyframes _rec{0%,100%{opacity:1}50%{opacity:.2}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-rec-dot" role="status" aria-label="Recording">
  <span class="nuda-rec-dot__circle"></span>
  <span class="nuda-rec-dot__label">REC</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Recording Dot
   Red blinking recording indicator.
   Customize: --rec-color */

.nuda-rec-dot {
  --rec-color: #ef4444;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.nuda-rec-dot__circle {
  width: 10px;
  height: 10px;
  background: var(--rec-color);
  border-radius: 50%;
  animation: nuda-rec-blink 1s ease-in-out infinite;
  will-change: opacity;
}

.nuda-rec-dot__label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--rec-color);
}

@keyframes nuda-rec-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-rec-dot__circle {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Sync Spinner ─────────────── */
  {
    id: "sync-spinner",
    name: "Sync Spinner",
    category: "Indicators",
    preview: (
      <div className="nuda-sync-spinner" role="status" aria-label="Syncing">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-sync-spinner{--s:20px;--c:#a0a0a0;width:var(--s);height:var(--s);color:var(--c);animation:_ss .8s linear infinite}
      .nuda-sync-spinner svg{width:100%;height:100%}
      @keyframes _ss{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sync-spinner" role="status" aria-label="Syncing">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sync Spinner
   Small rotating sync/refresh icon.
   Customize: --sync-size, --sync-color */

.nuda-sync-spinner {
  --sync-size: 20px;
  --sync-color: #a0a0a0;
  width: var(--sync-size);
  height: var(--sync-size);
  color: var(--sync-color);
  animation: nuda-sync-rotate 0.8s linear infinite;
  will-change: transform;
}

.nuda-sync-spinner svg {
  width: 100%;
  height: 100%;
}

@keyframes nuda-sync-rotate {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sync-spinner {
    animation: none;
  }
}`,
      },
    ],
  },
];
