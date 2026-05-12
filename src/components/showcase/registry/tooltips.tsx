import type { NudaComponent } from "./types";

export const tooltips: NudaComponent[] = [
  /* ─────────────── FADE TOOLTIP ─────────────── */
  {
    id: "fade-tooltip",
    name: "Fade Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-fade-tooltip-wrap">
        <button className="nuda-fade-tooltip__trigger" aria-describedby="fade-tip-1">Hover me</button>
        <div className="nuda-fade-tooltip" role="tooltip" id="fade-tip-1">
          This is a tooltip
        </div>
      </div>
    ),
    cssInline: `
      .nuda-fade-tooltip-wrap{position:relative;display:inline-block}
      .nuda-fade-tooltip__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-fade-tooltip{--c:#e4ff54;position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#1a1a1a;border:1px solid rgba(255,255,255,.1);color:#ccc;font-size:.75rem;padding:.4rem .75rem;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s ease}
      .nuda-fade-tooltip-wrap:hover .nuda-fade-tooltip{opacity:1}
      @media(prefers-reduced-motion:reduce){.nuda-fade-tooltip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fade-tooltip-wrap">
  <button class="nuda-fade-tooltip__trigger" aria-describedby="fade-tip-1">
    Hover me
  </button>
  <div class="nuda-fade-tooltip" role="tooltip" id="fade-tip-1">
    This is a tooltip
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fade Tooltip
   Tooltip that fades in on hover above the trigger.
   Customize: --tooltip-bg, --tooltip-text, --tooltip-radius */

.nuda-fade-tooltip-wrap {
  position: relative;
  display: inline-block;
}

.nuda-fade-tooltip__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-fade-tooltip {
  --tooltip-bg: #1a1a1a;
  --tooltip-text: #ccc;
  --tooltip-radius: 6px;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--tooltip-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--tooltip-text);
  font-size: 0.75rem;
  padding: 0.4rem 0.75rem;
  border-radius: var(--tooltip-radius);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.nuda-fade-tooltip-wrap:hover .nuda-fade-tooltip {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-fade-tooltip {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SCALE TOOLTIP ─────────────── */
  {
    id: "scale-tooltip",
    name: "Scale Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-scale-tooltip-wrap">
        <button className="nuda-scale-tooltip__trigger" aria-describedby="scale-tip-1">Hover me</button>
        <div className="nuda-scale-tooltip" role="tooltip" id="scale-tip-1">
          Scales from origin
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scale-tooltip-wrap{position:relative;display:inline-block}
      .nuda-scale-tooltip__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-scale-tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);color:#ccc;font-size:.75rem;padding:.4rem .75rem;border-radius:6px;white-space:nowrap;opacity:0;transform:translateX(-50%) scale(.85);transform-origin:center bottom;pointer-events:none;transition:opacity .2s ease,transform .2s ease}
      .nuda-scale-tooltip-wrap:hover .nuda-scale-tooltip{opacity:1;transform:translateX(-50%) scale(1)}
      @media(prefers-reduced-motion:reduce){.nuda-scale-tooltip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scale-tooltip-wrap">
  <button class="nuda-scale-tooltip__trigger" aria-describedby="scale-tip-1">
    Hover me
  </button>
  <div class="nuda-scale-tooltip" role="tooltip" id="scale-tip-1">
    Scales from origin
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scale Tooltip
   Tooltip that scales up from origin point on hover.
   Customize: --tooltip-bg, --tooltip-text */

.nuda-scale-tooltip-wrap {
  position: relative;
  display: inline-block;
}

.nuda-scale-tooltip__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-scale-tooltip {
  --tooltip-bg: #1a1a1a;
  --tooltip-text: #ccc;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  background: var(--tooltip-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--tooltip-text);
  font-size: 0.75rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) scale(0.85);
  transform-origin: center bottom;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.nuda-scale-tooltip-wrap:hover .nuda-scale-tooltip {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scale-tooltip {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── ARROW TOOLTIP ─────────────── */
  {
    id: "arrow-tooltip",
    name: "Arrow Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-arrow-tooltip-wrap">
        <button className="nuda-arrow-tooltip__trigger" aria-describedby="arrow-tip-1">Hover me</button>
        <div className="nuda-arrow-tooltip" role="tooltip" id="arrow-tip-1">
          With animated arrow
          <span className="nuda-arrow-tooltip__arrow" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-arrow-tooltip-wrap{position:relative;display:inline-block}
      .nuda-arrow-tooltip__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-arrow-tooltip{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(4px);background:#1a1a1a;border:1px solid rgba(255,255,255,.1);color:#ccc;font-size:.75rem;padding:.4rem .75rem;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s ease}
      .nuda-arrow-tooltip__arrow{position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#1a1a1a}
      .nuda-arrow-tooltip-wrap:hover .nuda-arrow-tooltip{opacity:1;transform:translateX(-50%) translateY(0)}
      @media(prefers-reduced-motion:reduce){.nuda-arrow-tooltip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-arrow-tooltip-wrap">
  <button class="nuda-arrow-tooltip__trigger" aria-describedby="arrow-tip-1">
    Hover me
  </button>
  <div class="nuda-arrow-tooltip" role="tooltip" id="arrow-tip-1">
    With animated arrow
    <span class="nuda-arrow-tooltip__arrow"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Arrow Tooltip
   Tooltip with an animated arrow and slide-in effect.
   Customize: --tooltip-bg, --tooltip-text */

.nuda-arrow-tooltip-wrap {
  position: relative;
  display: inline-block;
}

.nuda-arrow-tooltip__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-arrow-tooltip {
  --tooltip-bg: #1a1a1a;
  --tooltip-text: #ccc;
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--tooltip-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--tooltip-text);
  font-size: 0.75rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.nuda-arrow-tooltip__arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--tooltip-bg);
}

.nuda-arrow-tooltip-wrap:hover .nuda-arrow-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-arrow-tooltip {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── GLOW TOOLTIP ─────────────── */
  {
    id: "glow-tooltip",
    name: "Glow Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-glow-tooltip-wrap">
        <button className="nuda-glow-tooltip__trigger" aria-describedby="glow-tip-1">Hover me</button>
        <div className="nuda-glow-tooltip" role="tooltip" id="glow-tip-1">
          Glowing tooltip
        </div>
      </div>
    ),
    cssInline: `
      .nuda-glow-tooltip-wrap{position:relative;display:inline-block}
      .nuda-glow-tooltip__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-glow-tooltip{--c:#e4ff54;position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#1a1a1a;border:1px solid rgba(228,255,84,.2);color:#ccc;font-size:.75rem;padding:.4rem .75rem;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s ease;box-shadow:0 0 0 rgba(228,255,84,0)}
      .nuda-glow-tooltip-wrap:hover .nuda-glow-tooltip{opacity:1;box-shadow:0 0 12px rgba(228,255,84,.25),0 0 4px rgba(228,255,84,.1)}
      @media(prefers-reduced-motion:reduce){.nuda-glow-tooltip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glow-tooltip-wrap">
  <button class="nuda-glow-tooltip__trigger" aria-describedby="glow-tip-1">
    Hover me
  </button>
  <div class="nuda-glow-tooltip" role="tooltip" id="glow-tip-1">
    Glowing tooltip
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glow Tooltip
   Tooltip with a subtle accent-colored glow on hover.
   Customize: --tooltip-glow-color, --tooltip-bg */

.nuda-glow-tooltip-wrap {
  position: relative;
  display: inline-block;
}

.nuda-glow-tooltip__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-glow-tooltip {
  --tooltip-glow-color: #e4ff54;
  --tooltip-bg: #1a1a1a;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--tooltip-bg);
  border: 1px solid rgba(228, 255, 84, 0.2);
  color: #ccc;
  font-size: 0.75rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 rgba(228, 255, 84, 0);
}

.nuda-glow-tooltip-wrap:hover .nuda-glow-tooltip {
  opacity: 1;
  box-shadow:
    0 0 12px rgba(228, 255, 84, 0.25),
    0 0 4px rgba(228, 255, 84, 0.1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glow-tooltip {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Rich Tooltip ─────────────── */
  {
    id: "rich-tooltip",
    name: "Rich Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-richtt-wrap">
        <button className="nuda-richtt-trigger">Sara Linde</button>
        <div className="nuda-richtt" role="tooltip">
          <div className="nuda-richtt__head">
            <span className="nuda-richtt__avatar" />
            <div>
              <div className="nuda-richtt__name">Sara Linde</div>
              <div className="nuda-richtt__role">Lead Designer · Stockholm</div>
            </div>
          </div>
          <div className="nuda-richtt__bio">
            12y in product design. Lives for tiny micro-interactions.
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-richtt-wrap{position:relative;display:inline-block}
      .nuda-richtt-trigger{padding:6px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;border-radius:8px;font-size:12px;cursor:pointer;transition:background .25s}
      .nuda-richtt-wrap:hover .nuda-richtt-trigger,.nuda-richtt-trigger:focus{background:rgba(255,255,255,.07)}
      .nuda-richtt{position:absolute;left:50%;bottom:calc(100% + 10px);transform:translateX(-50%) translateY(8px);width:220px;padding:12px;background:#111114;border:1px solid rgba(255,255,255,.1);border-radius:12px;box-shadow:0 14px 36px -10px rgba(0,0,0,.6);opacity:0;pointer-events:none;transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1);z-index:10}
      .nuda-richtt-wrap:hover .nuda-richtt,.nuda-richtt-wrap:focus-within .nuda-richtt{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}
      .nuda-richtt__head{display:flex;align-items:center;gap:10px;margin-bottom:8px}
      .nuda-richtt__avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#ff6dd4,#9d6dff);flex-shrink:0}
      .nuda-richtt__name{color:#fafafa;font-size:12px;font-weight:600}
      .nuda-richtt__role{color:#a0a0a8;font-size:10px}
      .nuda-richtt__bio{color:#a0a0a8;font-size:11px;line-height:1.5}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-richtt-wrap">
  <button class="nuda-richtt-trigger">Sara Linde</button>
  <div class="nuda-richtt" role="tooltip">
    <div class="nuda-richtt__head">
      <span class="nuda-richtt__avatar"></span>
      <div>
        <div class="nuda-richtt__name">Sara Linde</div>
        <div class="nuda-richtt__role">Lead Designer · Stockholm</div>
      </div>
    </div>
    <div class="nuda-richtt__bio">
      12y in product design. Lives for tiny micro-interactions.
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-richtt {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translateX(-50%) translateY(8px);
  width: 220px;
  padding: 12px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 14px 36px -10px rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-richtt-wrap:hover .nuda-richtt,
.nuda-richtt-wrap:focus-within .nuda-richtt {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}`,
      },
    ],
  },

  /* ─────────────── 6. Coachmark Tooltip ─────────────── */
  {
    id: "coachmark-tooltip",
    name: "Coachmark Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-coachtt">
        <div className="nuda-coachtt__pulse" />
        <button className="nuda-coachtt__target">⚙</button>
        <div className="nuda-coachtt__body">
          <div className="nuda-coachtt__step">2 / 4</div>
          <div className="nuda-coachtt__copy">Tweak preferences here.</div>
          <div className="nuda-coachtt__row">
            <button>Skip</button>
            <button className="is-primary">Next →</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-coachtt{position:relative;display:inline-block}
      .nuda-coachtt__target{position:relative;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:rgba(228,255,84,.1);border:2px solid #e4ff54;color:#e4ff54;font-size:14px;cursor:pointer;z-index:1}
      .nuda-coachtt__pulse{position:absolute;left:0;top:0;width:34px;height:34px;border-radius:50%;background:#e4ff54;animation:_coachPing 2s ease-out infinite}
      @keyframes _coachPing{0%{transform:scale(1);opacity:.6}100%{transform:scale(2);opacity:0}}
      .nuda-coachtt__body{position:absolute;left:calc(100% + 14px);top:50%;transform:translateY(-50%);width:200px;padding:12px;background:#111114;border:1px solid #e4ff54;border-radius:12px;box-shadow:0 14px 36px -10px rgba(0,0,0,.6),0 0 0 4px rgba(228,255,84,.08);animation:_coachIn .55s cubic-bezier(.16,1,.3,1)}
      .nuda-coachtt__body::before{content:'';position:absolute;left:-6px;top:50%;transform:translateY(-50%) rotate(45deg);width:10px;height:10px;background:#111114;border-left:1px solid #e4ff54;border-bottom:1px solid #e4ff54}
      .nuda-coachtt__step{color:#e4ff54;font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;margin-bottom:4px}
      .nuda-coachtt__copy{color:#fafafa;font-size:12px;margin-bottom:10px;line-height:1.4}
      .nuda-coachtt__row{display:flex;justify-content:flex-end;gap:6px}
      .nuda-coachtt__row button{padding:5px 10px;background:transparent;border:0;color:#a0a0a8;font-size:11px;cursor:pointer;border-radius:5px;transition:background .2s,color .2s}
      .nuda-coachtt__row button:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-coachtt__row button.is-primary{background:#e4ff54;color:#09090b;font-weight:600}
      .nuda-coachtt__row button.is-primary:hover{background:#fafafa}
      @keyframes _coachIn{from{opacity:0;transform:translateY(-50%) translateX(-8px)}to{opacity:1;transform:translateY(-50%) translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-coachtt__pulse{animation:none}.nuda-coachtt__body{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-coachtt">
  <div class="nuda-coachtt__pulse"></div>
  <button class="nuda-coachtt__target">⚙</button>
  <div class="nuda-coachtt__body">
    <div class="nuda-coachtt__step">2 / 4</div>
    <div class="nuda-coachtt__copy">Tweak preferences here.</div>
    <div class="nuda-coachtt__row">
      <button>Skip</button>
      <button class="is-primary">Next →</button>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-coachtt__pulse {
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e4ff54;
  animation: nuda-coach-ping 2s ease-out infinite;
}

@keyframes nuda-coach-ping {
  0%   { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2); opacity: 0;   }
}

.nuda-coachtt__body::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background: #111114;
  border-left: 1px solid #e4ff54;
  border-bottom: 1px solid #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 7. Keyboard Shortcut Tooltip ─────────────── */
  {
    id: "kbd-tooltip",
    name: "Keyboard Shortcut Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-kbdtt-wrap">
        <button className="nuda-kbdtt-trigger">Save</button>
        <div className="nuda-kbdtt">
          Save document
          <span className="nuda-kbdtt__keys">
            <kbd>⌘</kbd>
            <kbd>S</kbd>
          </span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kbdtt-wrap{position:relative;display:inline-block}
      .nuda-kbdtt-trigger{padding:6px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;border-radius:8px;font-size:12px;cursor:pointer;transition:background .25s}
      .nuda-kbdtt-wrap:hover .nuda-kbdtt-trigger{background:rgba(255,255,255,.07)}
      .nuda-kbdtt{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%) translateY(4px);display:inline-flex;align-items:center;gap:10px;padding:6px 10px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fafafa;font-size:11px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1);z-index:10}
      .nuda-kbdtt-wrap:hover .nuda-kbdtt{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}
      .nuda-kbdtt__keys{display:inline-flex;gap:3px}
      .nuda-kbdtt__keys kbd{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:16px;padding:0 4px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;color:#a0a0a8;box-shadow:inset 0 -1px 0 rgba(0,0,0,.3)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kbdtt-wrap">
  <button class="nuda-kbdtt-trigger">Save</button>
  <div class="nuda-kbdtt">
    Save document
    <span class="nuda-kbdtt__keys">
      <kbd>⌘</kbd>
      <kbd>S</kbd>
    </span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-kbdtt__keys kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 16px;
  padding: 0 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  color: #a0a0a8;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
}`,
      },
    ],
  },

  /* ─────────────── 8. Photo Preview Tooltip ─────────────── */
  {
    id: "photo-tooltip",
    name: "Photo Preview Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-phototip-wrap">
        <a className="nuda-phototip-link" href="#">View Aurora.jpg</a>
        <div className="nuda-phototip" role="tooltip">
          <div className="nuda-phototip__img" />
          <div className="nuda-phototip__meta">
            <span>Aurora.jpg</span>
            <span>1920 × 1080</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-phototip-wrap{position:relative;display:inline-block}
      .nuda-phototip-link{color:#e4ff54;font-size:13px;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;cursor:pointer}
      .nuda-phototip{position:absolute;left:0;bottom:calc(100% + 10px);width:160px;padding:6px;background:#0c0c10;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 14px 36px -10px rgba(0,0,0,.6);opacity:0;transform:translateY(6px) scale(.96);transform-origin:bottom left;pointer-events:none;transition:opacity .25s,transform .35s cubic-bezier(.34,1.56,.64,1);z-index:10}
      .nuda-phototip-wrap:hover .nuda-phototip{opacity:1;transform:translateY(0) scale(1)}
      .nuda-phototip__img{width:100%;height:90px;border-radius:6px;background:linear-gradient(135deg,#9d6dff,#62b6ff,#6ee7b7)}
      .nuda-phototip__meta{display:flex;justify-content:space-between;padding:6px 4px 2px;color:#a0a0a8;font-size:10px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-phototip__meta span:first-child{color:#fafafa;font-weight:600}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-phototip-wrap">
  <a class="nuda-phototip-link" href="#">View Aurora.jpg</a>
  <div class="nuda-phototip" role="tooltip">
    <div class="nuda-phototip__img"
         style="background-image: url(/photo.jpg)"></div>
    <div class="nuda-phototip__meta">
      <span>Aurora.jpg</span>
      <span>1920 × 1080</span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-phototip {
  position: absolute;
  left: 0;
  bottom: calc(100% + 10px);
  width: 160px;
  padding: 6px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 14px 36px -10px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: translateY(6px) scale(0.96);
  transform-origin: bottom left;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-phototip-wrap:hover .nuda-phototip {
  opacity: 1;
  transform: translateY(0) scale(1);
}`,
      },
    ],
  },
];
