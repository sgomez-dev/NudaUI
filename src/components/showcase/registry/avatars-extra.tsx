import type { NudaComponent } from "./types";

const CAT = "Avatars";

export const avatarsExtra: NudaComponent[] = [
  /* ─────────────── Voice Activity Ring ─────────────── */
  {
    id: "av2-voice",
    name: "Voice Activity Ring",
    category: CAT,
    preview: (
      <div className="nuda-av2-voice" aria-label="Dana is speaking">
        <span className="nuda-av2-voice__ring" aria-hidden="true" />
        <span className="nuda-av2-voice__avatar" style={{ background: "linear-gradient(135deg,#34d399,#0ea5e9)" }}>
          D
        </span>
        <span className="nuda-av2-voice__mic" aria-hidden="true">
          <i className="nuda-av2-voice__bar" />
          <i className="nuda-av2-voice__bar" />
          <i className="nuda-av2-voice__bar" />
        </span>
      </div>
    ),
    cssInline: `
      .nuda-av2-voice{position:relative;display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px}
      .nuda-av2-voice__ring{position:absolute;inset:0;border-radius:50%;border:2px solid #e4ff54;animation:_nuda-av2voicering 1.6s ease-out infinite;will-change:transform,opacity}
      .nuda-av2-voice__avatar{position:relative;z-index:1;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#052014;font-weight:700;font-size:15px}
      .nuda-av2-voice__mic{position:absolute;z-index:2;right:-2px;bottom:-2px;display:flex;align-items:flex-end;gap:2px;height:14px;padding:2px 4px;border-radius:7px;background:#0a0a0a;border:1px solid rgba(255,255,255,.12)}
      .nuda-av2-voice__bar{display:block;width:2.5px;height:4px;border-radius:1px;background:#e4ff54;transform-origin:bottom;animation:_nuda-av2voicebars 1s ease-in-out infinite}
      .nuda-av2-voice__bar:nth-child(2){animation-delay:.18s}
      .nuda-av2-voice__bar:nth-child(3){animation-delay:.36s}
      @keyframes _nuda-av2voicering{0%{transform:scale(.9);opacity:.9}100%{transform:scale(1.35);opacity:0}}
      @keyframes _nuda-av2voicebars{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1.6)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-av2-voice__ring{animation:none;opacity:.5;transform:scale(1)}
        .nuda-av2-voice__bar{animation:none;transform:scaleY(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-voice" aria-label="Dana is speaking">
  <span class="nuda-av2-voice__ring" aria-hidden="true"></span>
  <span class="nuda-av2-voice__avatar" style="background:linear-gradient(135deg,#34d399,#0ea5e9)">D</span>
  <span class="nuda-av2-voice__mic" aria-hidden="true">
    <i class="nuda-av2-voice__bar"></i>
    <i class="nuda-av2-voice__bar"></i>
    <i class="nuda-av2-voice__bar"></i>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── Story Ring Avatar ─────────────── */
  {
    id: "av2-story",
    name: "Story Ring Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-story" data-seen="false" aria-label="New story from Nia">
        <span className="nuda-av2-story__ring" aria-hidden="true" />
        <span className="nuda-av2-story__avatar" style={{ background: "linear-gradient(135deg,#ffb45e,#ff6dd4)" }}>
          N
        </span>
      </div>
    ),
    cssInline: `
      .nuda-av2-story{position:relative;display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px}
      .nuda-av2-story__ring{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,#e4ff54,#62b6ff,#ec4899,#e4ff54);animation:_nuda-av2storyspin 3s linear infinite;will-change:transform}
      .nuda-av2-story[data-seen="true"] .nuda-av2-story__ring{background:#3a3a3a;animation:none}
      .nuda-av2-story__avatar{position:relative;z-index:1;width:calc(100% - 8px);height:calc(100% - 8px);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#0a0a0a;font-weight:700;font-size:16px;border:3px solid #09090b}
      @keyframes _nuda-av2storyspin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-story__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- set data-seen="true" once the story has been viewed -->
<div class="nuda-av2-story" data-seen="false" aria-label="New story from Nia">
  <span class="nuda-av2-story__ring" aria-hidden="true"></span>
  <span class="nuda-av2-story__avatar" style="background:linear-gradient(135deg,#ffb45e,#ff6dd4)">N</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Squircle Avatar ─────────────── */
  {
    id: "av2-squircle",
    name: "Squircle Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-squircle" style={{ background: "linear-gradient(135deg,#7c9eff,#62e0ff)" }} aria-label="Kai">
        K
      </div>
    ),
    cssInline: `
      .nuda-av2-squircle{width:56px;height:56px;border-radius:30%;display:flex;align-items:center;justify-content:center;color:#0a0a0a;font-weight:800;font-size:18px;box-shadow:0 0 0 0 rgba(228,255,84,.35);animation:_nuda-av2squirclepulse 2.4s ease-in-out infinite;transition:transform .3s cubic-bezier(.34,1.56,.64,1);will-change:transform,box-shadow}
      .nuda-av2-squircle:hover{transform:scale(1.06) rotate(-4deg)}
      @keyframes _nuda-av2squirclepulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.35)}50%{box-shadow:0 0 0 8px rgba(228,255,84,0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-av2-squircle{animation:none;transition:none;box-shadow:0 0 0 3px rgba(228,255,84,.25)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-squircle" style="background:linear-gradient(135deg,#7c9eff,#62e0ff)" aria-label="Kai">K</div>`,
      },
    ],
  },

  /* ─────────────── Hexagon Avatar ─────────────── */
  {
    id: "av2-hex",
    name: "Hexagon Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-hex" style={{ background: "linear-gradient(160deg,#ffd166,#ef476f)" }} aria-label="Rank 12 player Tomo">
        T
      </div>
    ),
    cssInline: `
      .nuda-av2-hex{width:60px;height:60px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);display:flex;align-items:center;justify-content:center;color:#0a0a0a;font-weight:800;font-size:17px;animation:_nuda-av2hexin .5s cubic-bezier(.34,1.56,.64,1) both;transition:transform .3s ease;will-change:transform}
      .nuda-av2-hex:hover{transform:scale(1.08) rotate(6deg)}
      @keyframes _nuda-av2hexin{from{opacity:0;transform:scale(.5) rotate(-30deg)}to{opacity:1;transform:scale(1) rotate(0deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-hex{animation:none;transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-hex" style="background:linear-gradient(160deg,#ffd166,#ef476f)" aria-label="Rank 12 player Tomo">T</div>`,
      },
    ],
  },

  /* ─────────────── Crown Badge Avatar ─────────────── */
  {
    id: "av2-crown",
    name: "Crown Badge Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-crown" aria-label="Elena, VIP member">
        <span className="nuda-av2-crown__avatar" style={{ background: "linear-gradient(135deg,#a78bfa,#f472b6)" }}>
          E
        </span>
        <span className="nuda-av2-crown__badge" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z" />
          </svg>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-av2-crown{position:relative;display:inline-flex;width:52px;height:52px}
      .nuda-av2-crown__avatar{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:15px;border:2px solid #09090b}
      .nuda-av2-crown__badge{position:absolute;top:-10px;left:50%;transform:translateX(-50%);width:22px;height:22px;display:flex;align-items:center;justify-content:center;animation:_nuda-av2crownbounce 2.6s ease-in-out infinite;will-change:transform}
      .nuda-av2-crown__badge svg{width:20px;height:20px;fill:#e4ff54;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))}
      @keyframes _nuda-av2crownbounce{0%,100%{transform:translateX(-50%) translateY(0) rotate(0deg)}50%{transform:translateX(-50%) translateY(-3px) rotate(-4deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-crown__badge{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-crown" aria-label="Elena, VIP member">
  <span class="nuda-av2-crown__avatar" style="background:linear-gradient(135deg,#a78bfa,#f472b6)">E</span>
  <span class="nuda-av2-crown__badge" aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z" /></svg>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── Upload Progress Ring ─────────────── */
  {
    id: "av2-upload",
    name: "Upload Progress Ring",
    category: CAT,
    preview: (
      <div className="nuda-av2-upload" role="img" aria-label="Uploading photo, 68 percent complete">
        <svg className="nuda-av2-upload__ring" viewBox="0 0 60 60" aria-hidden="true">
          <circle className="nuda-av2-upload__track" cx="30" cy="30" r="26" />
          <circle className="nuda-av2-upload__bar" cx="30" cy="30" r="26" />
        </svg>
        <span className="nuda-av2-upload__avatar" style={{ background: "linear-gradient(135deg,#62b6ff,#34d399)" }}>
          JS
        </span>
        <span className="nuda-av2-upload__pct" aria-hidden="true">68%</span>
      </div>
    ),
    cssInline: `
      .nuda-av2-upload{position:relative;width:60px;height:60px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-av2-upload__ring{position:absolute;inset:0;transform:rotate(-90deg)}
      .nuda-av2-upload__track{fill:none;stroke:rgba(255,255,255,.1);stroke-width:3}
      .nuda-av2-upload__bar{fill:none;stroke:#e4ff54;stroke-width:3;stroke-linecap:round;stroke-dasharray:163;stroke-dashoffset:163;animation:_nuda-av2uploadsweep 2.4s ease-out infinite}
      .nuda-av2-upload__avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#0a0a0a;font-weight:700;font-size:13px}
      .nuda-av2-upload__pct{position:absolute;bottom:-16px;left:50%;transform:translateX(-50%);font-size:10px;color:#9ca3af;font-weight:600}
      @keyframes _nuda-av2uploadsweep{0%{stroke-dashoffset:163}60%{stroke-dashoffset:52}100%{stroke-dashoffset:52}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-upload__bar{animation:none;stroke-dashoffset:52}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-upload" role="img" aria-label="Uploading photo, 68 percent complete">
  <svg class="nuda-av2-upload__ring" viewBox="0 0 60 60" aria-hidden="true">
    <circle class="nuda-av2-upload__track" cx="30" cy="30" r="26" />
    <circle class="nuda-av2-upload__bar" cx="30" cy="30" r="26" />
  </svg>
  <span class="nuda-av2-upload__avatar" style="background:linear-gradient(135deg,#62b6ff,#34d399)">JS</span>
  <span class="nuda-av2-upload__pct" aria-hidden="true">68%</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Live Streaming Avatar ─────────────── */
  {
    id: "av2-live",
    name: "Live Streaming Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-live" aria-label="Mia is live now">
        <span className="nuda-av2-live__avatar" style={{ background: "linear-gradient(135deg,#f97316,#ec4899)" }}>
          M
        </span>
        <span className="nuda-av2-live__ribbon" aria-hidden="true">
          <span className="nuda-av2-live__dot" />
          LIVE
        </span>
      </div>
    ),
    cssInline: `
      .nuda-av2-live{position:relative;display:inline-flex;width:60px;height:60px}
      .nuda-av2-live__avatar{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px;border:2px solid #ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.25)}
      .nuda-av2-live__ribbon{position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);display:flex;align-items:center;gap:3px;background:#ef4444;color:#fff;font-size:9px;font-weight:800;letter-spacing:.04em;padding:2px 6px;border-radius:4px;box-shadow:0 2px 6px rgba(239,68,68,.4)}
      .nuda-av2-live__dot{width:5px;height:5px;border-radius:50%;background:#fff;animation:_nuda-av2livedot 1.6s ease-in-out infinite}
      @keyframes _nuda-av2livedot{0%,100%{opacity:1}50%{opacity:.25}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-live__dot{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-live" aria-label="Mia is live now">
  <span class="nuda-av2-live__avatar" style="background:linear-gradient(135deg,#f97316,#ec4899)">M</span>
  <span class="nuda-av2-live__ribbon" aria-hidden="true">
    <span class="nuda-av2-live__dot"></span>
    LIVE
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── Focus Status Avatar ─────────────── */
  {
    id: "av2-focus",
    name: "Focus Status Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-focus" data-state="dnd">
        <span className="nuda-av2-focus__avatar" style={{ background: "linear-gradient(135deg,#9d6dff,#62b6ff)" }}>
          R
        </span>
        <span className="nuda-av2-focus__badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </span>
        <span className="nuda-av2-focus__label">Do Not Disturb</span>
      </div>
    ),
    cssInline: `
      .nuda-av2-focus{position:relative;display:inline-flex;align-items:center;width:44px;height:44px}
      .nuda-av2-focus__avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:15px;flex:none}
      .nuda-av2-focus__badge{position:absolute;right:-2px;bottom:-2px;width:16px;height:16px;border-radius:50%;background:#8b5cf6;border:2px solid #09090b;display:flex;align-items:center;justify-content:center;color:#fff;animation:_nuda-av2focuspop .4s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-av2-focus__badge svg{width:9px;height:9px}
      .nuda-av2-focus[data-state="away"] .nuda-av2-focus__badge{background:#f59e0b}
      .nuda-av2-focus[data-state="busy"] .nuda-av2-focus__badge{background:#ef4444}
      .nuda-av2-focus__label{margin-left:8px;padding:3px 8px;border-radius:6px;background:#161616;border:1px solid rgba(255,255,255,.1);color:#cfcfcf;font-size:11px;white-space:nowrap;opacity:0;transform:translateX(-6px);transition:opacity .25s,transform .25s cubic-bezier(.16,1,.3,1)}
      .nuda-av2-focus:hover .nuda-av2-focus__label,.nuda-av2-focus:focus-within .nuda-av2-focus__label{opacity:1;transform:translateX(0)}
      @keyframes _nuda-av2focuspop{from{transform:scale(0)}to{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-av2-focus__badge{animation:none}
        .nuda-av2-focus__label{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- data-state: "dnd" | "away" | "busy" -->
<div class="nuda-av2-focus" data-state="dnd">
  <span class="nuda-av2-focus__avatar" style="background:linear-gradient(135deg,#9d6dff,#62b6ff)">R</span>
  <span class="nuda-av2-focus__badge" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  </span>
  <span class="nuda-av2-focus__label">Do Not Disturb</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Fan Stack Avatars ─────────────── */
  {
    id: "av2-fan",
    name: "Fan Stack Avatars",
    category: CAT,
    preview: (
      <div className="nuda-av2-fan" tabIndex={0} aria-label="Group with 3 members: Lee, Ada, Sam">
        {[
          ["#6366f1", "L"],
          ["#ec4899", "A"],
          ["#06b6d4", "S"],
        ].map(([c, l], i) => (
          <span key={i} className="nuda-av2-fan__item" style={{ background: c }} aria-hidden="true">
            {l}
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-av2-fan{position:relative;display:inline-block;width:96px;height:56px;outline-offset:4px}
      .nuda-av2-fan__item{position:absolute;left:0;top:8px;width:40px;height:40px;border-radius:50%;border:2px solid #111;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;transition:transform .35s cubic-bezier(.34,1.56,.64,1);transform-origin:bottom center;will-change:transform}
      .nuda-av2-fan__item:nth-child(1){left:0;z-index:3}
      .nuda-av2-fan__item:nth-child(2){left:14px;z-index:2}
      .nuda-av2-fan__item:nth-child(3){left:28px;z-index:1}
      .nuda-av2-fan:hover .nuda-av2-fan__item:nth-child(1),.nuda-av2-fan:focus-visible .nuda-av2-fan__item:nth-child(1){transform:translate(-8px,4px) rotate(-14deg)}
      .nuda-av2-fan:hover .nuda-av2-fan__item:nth-child(2),.nuda-av2-fan:focus-visible .nuda-av2-fan__item:nth-child(2){transform:translate(0,-6px) rotate(0deg)}
      .nuda-av2-fan:hover .nuda-av2-fan__item:nth-child(3),.nuda-av2-fan:focus-visible .nuda-av2-fan__item:nth-child(3){transform:translate(8px,4px) rotate(14deg)}
      .nuda-av2-fan:focus-visible{outline:2px solid #e4ff54}
      @media (prefers-reduced-motion:reduce){.nuda-av2-fan__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-fan" tabindex="0" aria-label="Group with 3 members: Lee, Ada, Sam">
  <span class="nuda-av2-fan__item" style="background:#6366f1" aria-hidden="true">L</span>
  <span class="nuda-av2-fan__item" style="background:#ec4899" aria-hidden="true">A</span>
  <span class="nuda-av2-fan__item" style="background:#06b6d4" aria-hidden="true">S</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Typing Avatar ─────────────── */
  {
    id: "av2-typing",
    name: "Typing Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-typing" aria-label="Jordan is typing">
        <span className="nuda-av2-typing__avatar" style={{ background: "linear-gradient(135deg,#22d3ee,#6366f1)" }}>
          J
        </span>
        <span className="nuda-av2-typing__bubble" aria-hidden="true">
          <span className="nuda-av2-typing__dot" />
          <span className="nuda-av2-typing__dot" />
          <span className="nuda-av2-typing__dot" />
        </span>
      </div>
    ),
    cssInline: `
      .nuda-av2-typing{position:relative;display:inline-flex;width:52px;height:52px}
      .nuda-av2-typing__avatar{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:15px}
      .nuda-av2-typing__bubble{position:absolute;right:-6px;bottom:-4px;display:flex;align-items:center;gap:2px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:4px 6px}
      .nuda-av2-typing__dot{width:4px;height:4px;border-radius:50%;background:#e4ff54;animation:_nuda-av2typingbounce 1.2s ease-in-out infinite;will-change:transform,opacity}
      .nuda-av2-typing__dot:nth-child(2){animation-delay:.15s}
      .nuda-av2-typing__dot:nth-child(3){animation-delay:.3s}
      @keyframes _nuda-av2typingbounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-3px);opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-typing__dot{animation:none;transform:translateY(0);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-typing" aria-label="Jordan is typing">
  <span class="nuda-av2-typing__avatar" style="background:linear-gradient(135deg,#22d3ee,#6366f1)">J</span>
  <span class="nuda-av2-typing__bubble" aria-hidden="true">
    <span class="nuda-av2-typing__dot"></span>
    <span class="nuda-av2-typing__dot"></span>
    <span class="nuda-av2-typing__dot"></span>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── Notification Bubble Avatar ─────────────── */
  {
    id: "av2-notify",
    name: "Notification Bubble Avatar",
    category: CAT,
    preview: (
      <div className="nuda-av2-notify" aria-label="Priya, 4 unread notifications">
        <span className="nuda-av2-notify__avatar" style={{ background: "linear-gradient(135deg,#34d399,#06b6d4)" }}>
          P
        </span>
        <span className="nuda-av2-notify__badge" aria-hidden="true">4</span>
      </div>
    ),
    cssInline: `
      .nuda-av2-notify{position:relative;display:inline-flex;width:52px;height:52px}
      .nuda-av2-notify__avatar{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#062b22;font-weight:700;font-size:15px}
      .nuda-av2-notify__badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background:#ef4444;color:#fff;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #09090b;animation:_nuda-av2notifypop .5s cubic-bezier(.34,1.56,.64,1) both;will-change:transform}
      @keyframes _nuda-av2notifypop{0%{transform:scale(0)}70%{transform:scale(1.2)}100%{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-av2-notify__badge{animation:none;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-av2-notify" aria-label="Priya, 4 unread notifications">
  <span class="nuda-av2-notify__avatar" style="background:linear-gradient(135deg,#34d399,#06b6d4)">P</span>
  <span class="nuda-av2-notify__badge" aria-hidden="true">4</span>
</div>`,
      },
    ],
  },
];
