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
];
