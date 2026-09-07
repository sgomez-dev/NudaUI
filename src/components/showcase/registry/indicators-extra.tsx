import type { NudaComponent } from "./types";

const CAT = "Indicators";

export const indicatorsExtra: NudaComponent[] = [
  /* ─────────────── 1. Sync State Cycle ─────────────── */
  {
    id: "in2-sync-cycle",
    name: "Sync State Cycle",
    category: CAT,
    preview: (
      <div className="nuda-in2-synccycle" data-state="syncing" role="status" aria-live="polite">
        <span className="nuda-in2-synccycle__icon" aria-hidden="true">
          <svg className="nuda-in2-synccycle__i-sync" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
          <svg className="nuda-in2-synccycle__i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <svg className="nuda-in2-synccycle__i-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2l20 20" /><path d="M8.5 8.5a7 7 0 0 0 7 7" /><path d="M5 5a11 11 0 0 1 14 14" />
          </svg>
        </span>
        <span className="nuda-in2-synccycle__text">Syncing…</span>
      </div>
    ),
    cssInline: `
      .nuda-in2-synccycle{display:inline-flex;align-items:center;gap:7px;padding:6px 12px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:99px;font-size:11px;font-weight:600;color:#cfcfcf}
      .nuda-in2-synccycle__icon{position:relative;width:14px;height:14px;flex:0 0 auto}
      .nuda-in2-synccycle__icon svg{position:absolute;inset:0;width:100%;height:100%;display:none}
      .nuda-in2-synccycle[data-state="syncing"] .nuda-in2-synccycle__i-sync{display:block;color:#e4ff54;animation:_nuda-in2synccycle-spin 1s linear infinite}
      .nuda-in2-synccycle[data-state="synced"] .nuda-in2-synccycle__i-ok{display:block;color:#6ee7b7}
      .nuda-in2-synccycle[data-state="offline"] .nuda-in2-synccycle__i-off{display:block;color:#f87171}
      .nuda-in2-synccycle[data-state="syncing"] .nuda-in2-synccycle__text{color:#e4ff54}
      .nuda-in2-synccycle[data-state="synced"] .nuda-in2-synccycle__text{color:#6ee7b7}
      .nuda-in2-synccycle[data-state="offline"] .nuda-in2-synccycle__text{color:#f87171}
      @keyframes _nuda-in2synccycle-spin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-synccycle__i-sync{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-synccycle" data-state="syncing" role="status" aria-live="polite">
  <span class="nuda-in2-synccycle__icon" aria-hidden="true">
    <svg class="nuda-in2-synccycle__i-sync" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
    <svg class="nuda-in2-synccycle__i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <svg class="nuda-in2-synccycle__i-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M2 2l20 20" />
      <path d="M8.5 8.5a7 7 0 0 0 7 7" />
      <path d="M5 5a11 11 0 0 1 14 14" />
    </svg>
  </span>
  <span class="nuda-in2-synccycle__text">Syncing…</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Sync State Cycle — vanilla JS
   Rotates through syncing -> synced -> offline. Updates the
   accessible text so screen readers announce the real status. */

(function () {
  var STATES = [
    { key: "syncing", text: "Syncing…", hold: 2200 },
    { key: "synced", text: "Synced", hold: 3000 },
    { key: "offline", text: "Offline", hold: 2600 },
  ];

  document.querySelectorAll(".nuda-in2-synccycle").forEach(function (el) {
    var i = 0;
    var label = el.querySelector(".nuda-in2-synccycle__text");
    function step() {
      var s = STATES[i % STATES.length];
      el.setAttribute("data-state", s.key);
      label.textContent = s.text;
      i++;
      setTimeout(step, s.hold);
    }
    setTimeout(step, STATES[0].hold);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Recording Timer ─────────────── */
  {
    id: "in2-rec-timer",
    name: "Recording Timer",
    category: CAT,
    preview: (
      <div className="nuda-in2-rectimer" role="status" aria-live="polite">
        <span className="nuda-in2-rectimer__dot" aria-hidden="true" />
        <span className="nuda-in2-rectimer__label">REC</span>
        <span className="nuda-in2-rectimer__time">00:07</span>
      </div>
    ),
    cssInline: `
      .nuda-in2-rectimer{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#161616;border:1px solid rgba(239,68,68,.35);border-radius:99px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:#cfcfcf;font-variant-numeric:tabular-nums}
      .nuda-in2-rectimer__dot{width:8px;height:8px;border-radius:50%;background:#ef4444;animation:_nuda-in2rectimer-blink 1.6s ease-in-out infinite}
      .nuda-in2-rectimer__label{font-weight:700;letter-spacing:.06em;color:#ef4444}
      .nuda-in2-rectimer__time{color:#fafafa}
      @keyframes _nuda-in2rectimer-blink{0%,100%{opacity:1}50%{opacity:.35}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-rectimer__dot{animation:none !important;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-rectimer" role="status" aria-live="polite">
  <span class="nuda-in2-rectimer__dot" aria-hidden="true"></span>
  <span class="nuda-in2-rectimer__label">REC</span>
  <span class="nuda-in2-rectimer__time">00:00</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Recording Timer — vanilla JS
   Counts elapsed mm:ss. The accessible name is refreshed
   every 10s so screen readers get progress without being spammed. */

(function () {
  document.querySelectorAll(".nuda-in2-rectimer").forEach(function (el) {
    var time = el.querySelector(".nuda-in2-rectimer__time");
    var seconds = 0;
    function fmt(s) {
      var m = Math.floor(s / 60);
      var r = s % 60;
      return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
    }
    el.setAttribute("aria-label", "Recording, " + fmt(seconds) + " elapsed");
    setInterval(function () {
      seconds++;
      time.textContent = fmt(seconds);
      if (seconds % 10 === 0) {
        el.setAttribute("aria-label", "Recording, " + fmt(seconds) + " elapsed");
      }
    }, 1000);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Health Status Trio ─────────────── */
  {
    id: "in2-health-trio",
    name: "Health Status Trio",
    category: CAT,
    preview: (
      <div className="nuda-in2-healthtrio" role="group" aria-label="System status">
        <div className="nuda-in2-healthtrio__row" data-level="ok">
          <span className="nuda-in2-healthtrio__dot" aria-hidden="true" />
          <svg className="nuda-in2-healthtrio__glyph" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="nuda-in2-healthtrio__name">API</span>
          <span className="nuda-in2-healthtrio__state">Operational</span>
        </div>
        <div className="nuda-in2-healthtrio__row" data-level="warn">
          <span className="nuda-in2-healthtrio__dot" aria-hidden="true" />
          <svg className="nuda-in2-healthtrio__glyph" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.3 3.6 2.6 17a1.6 1.6 0 0 0 1.4 2.4h16a1.6 1.6 0 0 0 1.4-2.4L13.7 3.6a1.6 1.6 0 0 0-2.7 0Z" />
          </svg>
          <span className="nuda-in2-healthtrio__name">Database</span>
          <span className="nuda-in2-healthtrio__state">Degraded</span>
        </div>
        <div className="nuda-in2-healthtrio__row" data-level="down">
          <span className="nuda-in2-healthtrio__dot" aria-hidden="true" />
          <svg className="nuda-in2-healthtrio__glyph" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18" /><path d="M6 6l12 12" />
          </svg>
          <span className="nuda-in2-healthtrio__name">CDN</span>
          <span className="nuda-in2-healthtrio__state">Down</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-in2-healthtrio{display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:10px;min-width:150px}
      .nuda-in2-healthtrio__row{display:flex;align-items:center;gap:6px;font-size:11px}
      .nuda-in2-healthtrio__dot{width:7px;height:7px;border-radius:50%;flex:0 0 auto}
      .nuda-in2-healthtrio__glyph{width:12px;height:12px;flex:0 0 auto}
      .nuda-in2-healthtrio__name{color:#cfcfcf;font-weight:600;margin-right:auto}
      .nuda-in2-healthtrio__state{font-weight:600}
      .nuda-in2-healthtrio__row[data-level="ok"] .nuda-in2-healthtrio__dot{background:#6ee7b7;animation:_nuda-in2healthtrio-beat 2.4s ease-in-out infinite}
      .nuda-in2-healthtrio__row[data-level="ok"] .nuda-in2-healthtrio__glyph,
      .nuda-in2-healthtrio__row[data-level="ok"] .nuda-in2-healthtrio__state{color:#6ee7b7}
      .nuda-in2-healthtrio__row[data-level="warn"] .nuda-in2-healthtrio__dot{background:#facc15}
      .nuda-in2-healthtrio__row[data-level="warn"] .nuda-in2-healthtrio__glyph,
      .nuda-in2-healthtrio__row[data-level="warn"] .nuda-in2-healthtrio__state{color:#facc15}
      .nuda-in2-healthtrio__row[data-level="down"] .nuda-in2-healthtrio__dot{background:#f87171}
      .nuda-in2-healthtrio__row[data-level="down"] .nuda-in2-healthtrio__glyph,
      .nuda-in2-healthtrio__row[data-level="down"] .nuda-in2-healthtrio__state{color:#f87171}
      @keyframes _nuda-in2healthtrio-beat{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.35);opacity:.7}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-healthtrio__row[data-level="ok"] .nuda-in2-healthtrio__dot{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-healthtrio" role="group" aria-label="System status">
  <div class="nuda-in2-healthtrio__row" data-level="ok">
    <span class="nuda-in2-healthtrio__dot" aria-hidden="true"></span>
    <svg class="nuda-in2-healthtrio__glyph" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <span class="nuda-in2-healthtrio__name">API</span>
    <span class="nuda-in2-healthtrio__state">Operational</span>
  </div>
  <div class="nuda-in2-healthtrio__row" data-level="warn">
    <span class="nuda-in2-healthtrio__dot" aria-hidden="true"></span>
    <svg class="nuda-in2-healthtrio__glyph" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.6 2.6 17a1.6 1.6 0 0 0 1.4 2.4h16a1.6 1.6 0 0 0 1.4-2.4L13.7 3.6a1.6 1.6 0 0 0-2.7 0Z" />
    </svg>
    <span class="nuda-in2-healthtrio__name">Database</span>
    <span class="nuda-in2-healthtrio__state">Degraded</span>
  </div>
  <div class="nuda-in2-healthtrio__row" data-level="down">
    <span class="nuda-in2-healthtrio__dot" aria-hidden="true"></span>
    <svg class="nuda-in2-healthtrio__glyph" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
    <span class="nuda-in2-healthtrio__name">CDN</span>
    <span class="nuda-in2-healthtrio__state">Down</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Queue Depth Meter ─────────────── */
  {
    id: "in2-queue-depth",
    name: "Queue Depth Meter",
    category: CAT,
    preview: (
      <div className="nuda-in2-queuedepth" role="status" aria-label="Queue depth: 5 of 8 slots, 5 jobs queued">
        <div className="nuda-in2-queuedepth__bars" aria-hidden="true">
          <span className="is-filled" /><span className="is-filled" /><span className="is-filled" /><span className="is-filled" /><span className="is-filled is-active" /><span /><span /><span />
        </div>
        <span className="nuda-in2-queuedepth__count">5</span>
        <span className="nuda-in2-queuedepth__label">queued</span>
      </div>
    ),
    cssInline: `
      .nuda-in2-queuedepth{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:10px;font-size:11px;color:#cfcfcf}
      .nuda-in2-queuedepth__bars{display:flex;align-items:center;gap:2px}
      .nuda-in2-queuedepth__bars span{width:4px;height:14px;border-radius:1px;background:rgba(255,255,255,.12)}
      .nuda-in2-queuedepth__bars span.is-filled{background:#e4ff54}
      .nuda-in2-queuedepth__bars span.is-active{animation:_nuda-in2queuedepth-pulse 1.3s ease-in-out infinite}
      .nuda-in2-queuedepth__count{font-weight:700;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-in2-queuedepth__label{color:#777}
      @keyframes _nuda-in2queuedepth-pulse{0%,100%{opacity:1;transform:scaleY(1)}50%{opacity:.55;transform:scaleY(.7)}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-queuedepth__bars span.is-active{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-queuedepth" role="status" aria-label="Queue depth: 5 of 8 slots, 5 jobs queued">
  <div class="nuda-in2-queuedepth__bars" aria-hidden="true">
    <span class="is-filled"></span>
    <span class="is-filled"></span>
    <span class="is-filled"></span>
    <span class="is-filled"></span>
    <span class="is-filled is-active"></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <span class="nuda-in2-queuedepth__count">5</span>
  <span class="nuda-in2-queuedepth__label">queued</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Connection Quality ─────────────── */
  {
    id: "in2-conn-quality",
    name: "Connection Quality",
    category: CAT,
    preview: (
      <div className="nuda-in2-connquality" data-quality="good" role="status" aria-label="Connection quality: Good, 42 milliseconds latency">
        <span className="nuda-in2-connquality__bars" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        <span className="nuda-in2-connquality__word">Good</span>
        <span className="nuda-in2-connquality__ms">42ms</span>
      </div>
    ),
    cssInline: `
      .nuda-in2-connquality{display:inline-flex;align-items:center;gap:7px;padding:6px 12px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:99px;font-size:11px}
      .nuda-in2-connquality__bars{display:inline-flex;align-items:flex-end;gap:2px;height:14px}
      .nuda-in2-connquality__bars i{display:block;width:3px;background:rgba(255,255,255,.16);border-radius:1px;font-style:normal}
      .nuda-in2-connquality__bars i:nth-child(1){height:35%}
      .nuda-in2-connquality__bars i:nth-child(2){height:58%}
      .nuda-in2-connquality__bars i:nth-child(3){height:80%}
      .nuda-in2-connquality__bars i:nth-child(4){height:100%}
      .nuda-in2-connquality__word{font-weight:700}
      .nuda-in2-connquality__ms{color:#777;font-variant-numeric:tabular-nums}
      .nuda-in2-connquality[data-quality="good"] .nuda-in2-connquality__bars i{background:#6ee7b7;animation:_nuda-in2connquality-pulse 2.2s ease-in-out infinite}
      .nuda-in2-connquality[data-quality="good"] .nuda-in2-connquality__word{color:#6ee7b7}
      .nuda-in2-connquality[data-quality="poor"] .nuda-in2-connquality__bars i:nth-child(1){background:#f87171}
      .nuda-in2-connquality[data-quality="poor"] .nuda-in2-connquality__word{color:#f87171}
      @keyframes _nuda-in2connquality-pulse{0%,100%{opacity:1}50%{opacity:.6}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-connquality__bars i{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-connquality" data-quality="good" role="status" aria-label="Connection quality: Good, 42 milliseconds latency">
  <span class="nuda-in2-connquality__bars" aria-hidden="true">
    <i></i><i></i><i></i><i></i>
  </span>
  <span class="nuda-in2-connquality__word">Good</span>
  <span class="nuda-in2-connquality__ms">42ms</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Unsaved Changes Dot ─────────────── */
  {
    id: "in2-unsaved-dot",
    name: "Unsaved Changes Dot",
    category: CAT,
    preview: (
      <div className="nuda-in2-unsaved" role="status" aria-live="polite">
        <span className="nuda-in2-unsaved__badge" aria-hidden="true">
          <span className="nuda-in2-unsaved__ring" />
          <span className="nuda-in2-unsaved__dot" />
        </span>
        <span className="nuda-in2-unsaved__text">Unsaved changes</span>
      </div>
    ),
    cssInline: `
      .nuda-in2-unsaved{display:inline-flex;align-items:center;gap:7px;font-size:12px;color:#cfcfcf}
      .nuda-in2-unsaved__badge{position:relative;width:9px;height:9px;flex:0 0 auto}
      .nuda-in2-unsaved__ring{position:absolute;inset:0;border-radius:50%;background:#facc15;animation:_nuda-in2unsaved-ring 1.8s ease-out infinite}
      .nuda-in2-unsaved__dot{position:absolute;inset:0;border-radius:50%;background:#facc15}
      @keyframes _nuda-in2unsaved-ring{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.4);opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-unsaved__ring{animation:none !important;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-unsaved" role="status" aria-live="polite">
  <span class="nuda-in2-unsaved__badge" aria-hidden="true">
    <span class="nuda-in2-unsaved__ring"></span>
    <span class="nuda-in2-unsaved__dot"></span>
  </span>
  <span class="nuda-in2-unsaved__text">Unsaved changes</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. CI Build Status Chip ─────────────── */
  {
    id: "in2-ci-status",
    name: "CI Build Status Chip",
    category: CAT,
    preview: (
      <div className="nuda-in2-cistatus" data-state="queued" role="status" aria-live="polite">
        <span className="nuda-in2-cistatus__icon" aria-hidden="true">
          <svg className="nuda-in2-cistatus__i-queued" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
          <svg className="nuda-in2-cistatus__i-running" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 12a9 9 0 1 1-3-6.7" />
          </svg>
          <svg className="nuda-in2-cistatus__i-passed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <span className="nuda-in2-cistatus__text">Queued</span>
      </div>
    ),
    cssInline: `
      .nuda-in2-cistatus{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:8px;font-size:11px;font-weight:600;color:#cfcfcf}
      .nuda-in2-cistatus__icon{position:relative;width:13px;height:13px;flex:0 0 auto}
      .nuda-in2-cistatus__icon svg{position:absolute;inset:0;width:100%;height:100%;display:none}
      .nuda-in2-cistatus[data-state="queued"] .nuda-in2-cistatus__i-queued{display:block;color:#a0a0a0}
      .nuda-in2-cistatus[data-state="running"] .nuda-in2-cistatus__i-running{display:block;color:#e4ff54;animation:_nuda-in2cistatus-spin .9s linear infinite}
      .nuda-in2-cistatus[data-state="passed"] .nuda-in2-cistatus__i-passed{display:block;color:#6ee7b7}
      .nuda-in2-cistatus[data-state="running"] .nuda-in2-cistatus__text{color:#e4ff54}
      .nuda-in2-cistatus[data-state="passed"] .nuda-in2-cistatus__text{color:#6ee7b7}
      @keyframes _nuda-in2cistatus-spin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-in2-cistatus__i-running{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-in2-cistatus" data-state="queued" role="status" aria-live="polite">
  <span class="nuda-in2-cistatus__icon" aria-hidden="true">
    <svg class="nuda-in2-cistatus__i-queued" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
    <svg class="nuda-in2-cistatus__i-running" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
    </svg>
    <svg class="nuda-in2-cistatus__i-passed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
  <span class="nuda-in2-cistatus__text">Queued</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* CI Build Status Chip — vanilla JS
   Advances queued -> running -> passed once, updating the
   visible label so the status is always stated in words. */

(function () {
  var STEPS = [
    { key: "queued", text: "Queued", hold: 1400 },
    { key: "running", text: "Running", hold: 2200 },
    { key: "passed", text: "Passed", hold: 4000 },
  ];

  document.querySelectorAll(".nuda-in2-cistatus").forEach(function (el) {
    var label = el.querySelector(".nuda-in2-cistatus__text");
    var i = 0;
    function advance() {
      var s = STEPS[i];
      el.setAttribute("data-state", s.key);
      label.textContent = s.text;
      if (i < STEPS.length - 1) {
        i++;
        setTimeout(advance, s.hold);
      }
    }
    setTimeout(advance, STEPS[0].hold);
  });
})();`,
      },
    ],
  },
];
