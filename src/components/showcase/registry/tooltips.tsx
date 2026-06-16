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

  /* ─────────────── 9. Glow Tooltip (edge glow) ─────────────── */
  {
    id: "glow-edge-tooltip",
    name: "Glow Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-glowedge-wrap">
        <button className="nuda-glowedge__trigger" aria-describedby="glowedge-tip-1">Hover me</button>
        <div className="nuda-glowedge" role="tooltip" id="glowedge-tip-1">
          Lime glow edge
        </div>
      </div>
    ),
    cssInline: `
      .nuda-glowedge-wrap{position:relative;display:inline-block}
      .nuda-glowedge__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-glowedge{position:absolute;bottom:calc(100% + 9px);left:50%;transform:translateX(-50%);background:#101012;border:1px solid rgba(228,255,84,.5);color:#fafafa;font-size:.75rem;padding:.4rem .8rem;border-radius:7px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .22s ease,box-shadow .3s ease;box-shadow:0 0 0 rgba(228,255,84,0)}
      .nuda-glowedge::after{content:"";position:absolute;inset:-1px;border-radius:7px;padding:1px;background:linear-gradient(120deg,rgba(228,255,84,0),rgba(228,255,84,.9),rgba(228,255,84,0));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s ease,background-position .6s ease;background-size:200% 100%;background-position:0% 0%}
      .nuda-glowedge-wrap:hover .nuda-glowedge,.nuda-glowedge__trigger:focus-visible + .nuda-glowedge{opacity:1;box-shadow:0 0 16px rgba(228,255,84,.35),0 0 4px rgba(228,255,84,.2)}
      .nuda-glowedge-wrap:hover .nuda-glowedge::after,.nuda-glowedge__trigger:focus-visible + .nuda-glowedge::after{opacity:1;background-position:100% 0%}
      @media(prefers-reduced-motion:reduce){.nuda-glowedge,.nuda-glowedge::after{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glowedge-wrap">
  <button class="nuda-glowedge__trigger" aria-describedby="glowedge-tip-1">
    Hover me
  </button>
  <div class="nuda-glowedge" role="tooltip" id="glowedge-tip-1">
    Lime glow edge
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glow Tooltip (edge glow)
   Tooltip with an animated lime gradient edge + outer glow.
   Shows on hover and keyboard focus.
   Customize: --glowedge-accent, --glowedge-bg */

.nuda-glowedge-wrap {
  position: relative;
  display: inline-block;
}

.nuda-glowedge__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-glowedge {
  --glowedge-accent: #e4ff54;
  --glowedge-bg: #101012;
  position: absolute;
  bottom: calc(100% + 9px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--glowedge-bg);
  border: 1px solid rgba(228, 255, 84, 0.5);
  color: #fafafa;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 7px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 rgba(228, 255, 84, 0);
}

/* Animated gradient border via mask-composite */
.nuda-glowedge::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: 7px;
  padding: 1px;
  background: linear-gradient(120deg, rgba(228, 255, 84, 0), rgba(228, 255, 84, 0.9), rgba(228, 255, 84, 0));
  background-size: 200% 100%;
  background-position: 0% 0%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease, background-position 0.6s ease;
}

.nuda-glowedge-wrap:hover .nuda-glowedge,
.nuda-glowedge__trigger:focus-visible + .nuda-glowedge {
  opacity: 1;
  box-shadow:
    0 0 16px rgba(228, 255, 84, 0.35),
    0 0 4px rgba(228, 255, 84, 0.2);
}

.nuda-glowedge-wrap:hover .nuda-glowedge::after,
.nuda-glowedge__trigger:focus-visible + .nuda-glowedge::after {
  opacity: 1;
  background-position: 100% 0%;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glowedge, .nuda-glowedge::after { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Slide Arrow Tip ─────────────── */
  {
    id: "slide-arrow-tip",
    name: "Slide Arrow Tip",
    category: "Tooltips",
    preview: (
      <div className="nuda-slidearr-wrap">
        <button className="nuda-slidearr__trigger" aria-describedby="slidearr-tip-1">Hover me</button>
        <div className="nuda-slidearr" role="tooltip" id="slidearr-tip-1">
          Slides in from the right
          <span className="nuda-slidearr__arrow" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-slidearr-wrap{position:relative;display:inline-block}
      .nuda-slidearr__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-slidearr{position:absolute;left:calc(100% + 12px);top:50%;transform:translateY(-50%) translateX(8px);background:#1a1a1a;border:1px solid rgba(228,255,84,.2);color:#ccc;font-size:.75rem;padding:.4rem .75rem;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .25s ease,transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-slidearr__arrow{position:absolute;right:100%;top:50%;transform:translateY(-50%);border:5px solid transparent;border-right-color:#1a1a1a}
      .nuda-slidearr-wrap:hover .nuda-slidearr,.nuda-slidearr__trigger:focus-visible + .nuda-slidearr{opacity:1;transform:translateY(-50%) translateX(0)}
      @media(prefers-reduced-motion:reduce){.nuda-slidearr{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-slidearr-wrap">
  <button class="nuda-slidearr__trigger" aria-describedby="slidearr-tip-1">
    Hover me
  </button>
  <div class="nuda-slidearr" role="tooltip" id="slidearr-tip-1">
    Slides in from the right
    <span class="nuda-slidearr__arrow"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Slide Arrow Tip
   Tooltip that slides in horizontally with a pointing arrow.
   Shows on hover and keyboard focus.
   Customize: --tooltip-bg */

.nuda-slidearr-wrap {
  position: relative;
  display: inline-block;
}

.nuda-slidearr__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-slidearr {
  --tooltip-bg: #1a1a1a;
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%) translateX(8px);
  background: var(--tooltip-bg);
  border: 1px solid rgba(228, 255, 84, 0.2);
  color: #ccc;
  font-size: 0.75rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-slidearr__arrow {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: var(--tooltip-bg);
}

.nuda-slidearr-wrap:hover .nuda-slidearr,
.nuda-slidearr__trigger:focus-visible + .nuda-slidearr {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-slidearr { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 11. Follow Cursor Tip ─────────────── */
  {
    id: "follow-cursor-tip",
    name: "Follow Cursor Tip",
    category: "Tooltips",
    preview: (
      <div
        className="nuda-followtip-wrap"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--tx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--ty", `${e.clientY - r.top}px`);
        }}
      >
        <span className="nuda-followtip__area">Move over me</span>
        <span className="nuda-followtip" role="tooltip" aria-hidden="true">Right here</span>
      </div>
    ),
    cssInline: `
      .nuda-followtip-wrap{--tx:0px;--ty:0px;position:relative;display:inline-block;cursor:default}
      .nuda-followtip__area{display:inline-block;padding:.6rem 1.2rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#ccc;font-size:.82rem}
      .nuda-followtip{position:absolute;left:0;top:0;transform:translate3d(calc(var(--tx) + 14px),calc(var(--ty) + 14px),0);background:#e4ff54;color:#09090b;font-size:.7rem;font-weight:600;padding:.25rem .55rem;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .18s ease;z-index:10}
      .nuda-followtip-wrap:hover .nuda-followtip{opacity:1}
      @media(prefers-reduced-motion:reduce){.nuda-followtip{transition:none;transform:translate3d(0,calc(100% + 8px),0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Follow Cursor Tip — vanilla JS updates --tx / --ty on pointermove -->
<div class="nuda-followtip-wrap" id="followtip">
  <span class="nuda-followtip__area">Move over me</span>
  <span class="nuda-followtip" role="tooltip">Right here</span>
</div>

<script>
  const wrap = document.getElementById("followtip");
  wrap.addEventListener("pointermove", (e) => {
    const r = wrap.getBoundingClientRect();
    wrap.style.setProperty("--tx", (e.clientX - r.left) + "px");
    wrap.style.setProperty("--ty", (e.clientY - r.top) + "px");
  });
</script>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Follow Cursor Tip
   A tooltip that trails the cursor inside the trigger area.
   Position is driven by --tx / --ty custom properties set in JS.
   Customize: --followtip-bg, offset (14px) */

.nuda-followtip-wrap {
  --tx: 0px;
  --ty: 0px;
  position: relative;
  display: inline-block;
  cursor: default;
}

.nuda-followtip__area {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ccc;
  font-size: 0.85rem;
}

.nuda-followtip {
  --followtip-bg: #e4ff54;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate3d(calc(var(--tx) + 14px), calc(var(--ty) + 14px), 0);
  background: var(--followtip-bg);
  color: #09090b;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.55rem;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease;
  z-index: 10;
}

.nuda-followtip-wrap:hover .nuda-followtip {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-followtip {
    transition: none;
    transform: translate3d(0, calc(100% + 8px), 0);
  }
}`,
      },
    ],
  },

  /* ─────────────── 12. Typewriter Tip ─────────────── */
  {
    id: "typewriter-tip",
    name: "Typewriter Tip",
    category: "Tooltips",
    preview: (
      <div className="nuda-typetip-wrap">
        <button className="nuda-typetip__trigger" aria-describedby="typetip-tip-1">Hover me</button>
        <div className="nuda-typetip" role="tooltip" id="typetip-tip-1">
          <span className="nuda-typetip__text">Typed&nbsp;on&nbsp;hover</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-typetip-wrap{position:relative;display:inline-block}
      .nuda-typetip__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-typetip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#0c0c10;border:1px solid rgba(228,255,84,.2);color:#e4ff54;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.72rem;padding:.4rem .7rem;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease}
      .nuda-typetip__text{display:inline-block;overflow:hidden;white-space:nowrap;vertical-align:bottom;border-right:2px solid #e4ff54;max-width:0}
      .nuda-typetip-wrap:hover .nuda-typetip,.nuda-typetip__trigger:focus-visible + .nuda-typetip{opacity:1}
      .nuda-typetip-wrap:hover .nuda-typetip__text,.nuda-typetip__trigger:focus-visible + .nuda-typetip .nuda-typetip__text{animation:_typetip-type 1.1s steps(14) forwards,_typetip-caret .7s step-end infinite}
      @keyframes _typetip-type{from{max-width:0}to{max-width:14ch}}
      @keyframes _typetip-caret{0%,100%{border-color:#e4ff54}50%{border-color:transparent}}
      @media(prefers-reduced-motion:reduce){.nuda-typetip{transition:none}.nuda-typetip-wrap:hover .nuda-typetip__text,.nuda-typetip__trigger:focus-visible + .nuda-typetip .nuda-typetip__text{animation:none;max-width:14ch;border-right-color:transparent}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-typetip-wrap">
  <button class="nuda-typetip__trigger" aria-describedby="typetip-tip-1">
    Hover me
  </button>
  <div class="nuda-typetip" role="tooltip" id="typetip-tip-1">
    <span class="nuda-typetip__text">Typed on hover</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Typewriter Tip
   Tooltip text types itself in with a blinking caret via steps().
   Shows on hover and keyboard focus.
   Customize: --typetip-accent; set max-width to your text length in ch. */

.nuda-typetip-wrap {
  position: relative;
  display: inline-block;
}

.nuda-typetip__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-typetip {
  --typetip-accent: #e4ff54;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #0c0c10;
  border: 1px solid rgba(228, 255, 84, 0.2);
  color: var(--typetip-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.72rem;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.nuda-typetip__text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: bottom;
  border-right: 2px solid var(--typetip-accent);
  max-width: 0;
}

.nuda-typetip-wrap:hover .nuda-typetip,
.nuda-typetip__trigger:focus-visible + .nuda-typetip {
  opacity: 1;
}

.nuda-typetip-wrap:hover .nuda-typetip__text,
.nuda-typetip__trigger:focus-visible + .nuda-typetip .nuda-typetip__text {
  animation:
    nuda-typetip-type 1.1s steps(14) forwards,
    nuda-typetip-caret 0.7s step-end infinite;
}

@keyframes nuda-typetip-type {
  from { max-width: 0; }
  to   { max-width: 14ch; }
}

@keyframes nuda-typetip-caret {
  0%, 100% { border-color: var(--typetip-accent); }
  50%      { border-color: transparent; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-typetip { transition: none; }
  .nuda-typetip-wrap:hover .nuda-typetip__text,
  .nuda-typetip__trigger:focus-visible + .nuda-typetip .nuda-typetip__text {
    animation: none;
    max-width: 14ch;
    border-right-color: transparent;
  }
}`,
      },
    ],
  },

  /* ─────────────── 13. Glass Tooltip ─────────────── */
  {
    id: "glass-tip",
    name: "Glass Tooltip",
    category: "Tooltips",
    preview: (
      <div className="nuda-glasstip-wrap">
        <button className="nuda-glasstip__trigger" aria-describedby="glasstip-tip-1">Hover me</button>
        <div className="nuda-glasstip" role="tooltip" id="glasstip-tip-1">
          Frosted glass
        </div>
      </div>
    ),
    cssInline: `
      .nuda-glasstip-wrap{position:relative;display:inline-block}
      .nuda-glasstip__trigger{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#ccc;padding:.45rem 1rem;border-radius:8px;font-size:.82rem;cursor:pointer}
      .nuda-glasstip{position:absolute;bottom:calc(100% + 9px);left:50%;transform:translateX(-50%) translateY(6px) scale(.96);background:rgba(20,20,24,.55);border:1px solid rgba(255,255,255,.16);color:#fafafa;font-size:.75rem;padding:.4rem .8rem;border-radius:9px;white-space:nowrap;opacity:0;pointer-events:none;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 24px -8px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.12);transition:opacity .25s ease,transform .4s cubic-bezier(.16,1,.3,1)}
      .nuda-glasstip-wrap:hover .nuda-glasstip,.nuda-glasstip__trigger:focus-visible + .nuda-glasstip{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
      @media(prefers-reduced-motion:reduce){.nuda-glasstip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glasstip-wrap">
  <button class="nuda-glasstip__trigger" aria-describedby="glasstip-tip-1">
    Hover me
  </button>
  <div class="nuda-glasstip" role="tooltip" id="glasstip-tip-1">
    Frosted glass
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Tooltip
   Frosted glassmorphism tooltip that fades + scales up.
   Shows on hover and keyboard focus.
   Customize: --glasstip-bg, blur radius */

.nuda-glasstip-wrap {
  position: relative;
  display: inline-block;
}

.nuda-glasstip__trigger {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ccc;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-glasstip {
  --glasstip-bg: rgba(20, 20, 24, 0.55);
  position: absolute;
  bottom: calc(100% + 9px);
  left: 50%;
  transform: translateX(-50%) translateY(6px) scale(0.96);
  background: var(--glasstip-bg);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fafafa;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 9px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 8px 24px -8px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: opacity 0.25s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-glasstip-wrap:hover .nuda-glasstip,
.nuda-glasstip__trigger:focus-visible + .nuda-glasstip {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glasstip { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 14. Coachmark (step) ─────────────── */
  {
    id: "step-coachmark-tip",
    name: "Coachmark",
    category: "Tooltips",
    preview: (
      <div className="nuda-stepcoach">
        <span className="nuda-stepcoach__ping" />
        <button className="nuda-stepcoach__dot" aria-describedby="stepcoach-tip-1" />
        <div className="nuda-stepcoach__bubble" role="tooltip" id="stepcoach-tip-1">
          <span className="nuda-stepcoach__label">New</span>
          <span className="nuda-stepcoach__copy">Pin items here to find them fast.</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-stepcoach{position:relative;display:inline-block;padding:6px}
      .nuda-stepcoach__dot{position:relative;display:block;width:16px;height:16px;border-radius:50%;background:#e4ff54;border:none;cursor:pointer;z-index:1;box-shadow:0 0 0 3px rgba(228,255,84,.18)}
      .nuda-stepcoach__ping{position:absolute;left:6px;top:6px;width:16px;height:16px;border-radius:50%;background:#e4ff54;animation:_stepcoach-ping 1.8s ease-out infinite}
      @keyframes _stepcoach-ping{0%{transform:scale(1);opacity:.55}100%{transform:scale(2.6);opacity:0}}
      .nuda-stepcoach__bubble{position:absolute;left:calc(100% + 12px);top:50%;transform:translateY(-50%);width:170px;display:flex;flex-direction:column;gap:4px;padding:10px;background:#111114;border:1px solid #e4ff54;border-radius:10px;box-shadow:0 14px 36px -10px rgba(0,0,0,.6),0 0 0 4px rgba(228,255,84,.08);animation:_stepcoach-in .5s cubic-bezier(.16,1,.3,1)}
      .nuda-stepcoach__bubble::before{content:'';position:absolute;left:-6px;top:50%;transform:translateY(-50%) rotate(45deg);width:10px;height:10px;background:#111114;border-left:1px solid #e4ff54;border-bottom:1px solid #e4ff54}
      .nuda-stepcoach__label{color:#09090b;background:#e4ff54;align-self:flex-start;font-size:8px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:1px 6px;border-radius:4px}
      .nuda-stepcoach__copy{color:#fafafa;font-size:11px;line-height:1.4}
      @keyframes _stepcoach-in{from{opacity:0;transform:translateY(-50%) translateX(-8px)}to{opacity:1;transform:translateY(-50%) translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-stepcoach__ping,.nuda-stepcoach__bubble{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-stepcoach">
  <span class="nuda-stepcoach__ping"></span>
  <button class="nuda-stepcoach__dot" aria-describedby="stepcoach-tip-1"
          aria-label="New feature"></button>
  <div class="nuda-stepcoach__bubble" role="tooltip" id="stepcoach-tip-1">
    <span class="nuda-stepcoach__label">New</span>
    <span class="nuda-stepcoach__copy">Pin items here to find them fast.</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Coachmark
   Pulsing onboarding dot with an attached coachmark bubble + arrow.
   Customize: --coach-accent */

.nuda-stepcoach {
  --coach-accent: #e4ff54;
  position: relative;
  display: inline-block;
  padding: 6px;
}

.nuda-stepcoach__dot {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--coach-accent);
  border: none;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.18);
}

.nuda-stepcoach__ping {
  position: absolute;
  left: 6px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--coach-accent);
  animation: nuda-stepcoach-ping 1.8s ease-out infinite;
}

@keyframes nuda-stepcoach-ping {
  0%   { transform: scale(1);   opacity: 0.55; }
  100% { transform: scale(2.6); opacity: 0; }
}

.nuda-stepcoach__bubble {
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
  width: 170px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  background: #111114;
  border: 1px solid var(--coach-accent);
  border-radius: 10px;
  box-shadow:
    0 14px 36px -10px rgba(0, 0, 0, 0.6),
    0 0 0 4px rgba(228, 255, 84, 0.08);
  animation: nuda-stepcoach-in 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-stepcoach__bubble::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background: #111114;
  border-left: 1px solid var(--coach-accent);
  border-bottom: 1px solid var(--coach-accent);
}

.nuda-stepcoach__label {
  color: #09090b;
  background: var(--coach-accent);
  align-self: flex-start;
  font-size: 0.5rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 1px 6px;
  border-radius: 4px;
}

.nuda-stepcoach__copy {
  color: #fafafa;
  font-size: 0.7rem;
  line-height: 1.4;
}

@keyframes nuda-stepcoach-in {
  from { opacity: 0; transform: translateY(-50%) translateX(-8px); }
  to   { opacity: 1; transform: translateY(-50%) translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stepcoach__ping,
  .nuda-stepcoach__bubble { animation: none; }
}`,
      },
    ],
  },
];
