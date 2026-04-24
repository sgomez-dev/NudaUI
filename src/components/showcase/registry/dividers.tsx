import type { NudaComponent } from "./types";

export const dividers: NudaComponent[] = [
  /* ─────────────── GRADIENT DIVIDER ─────────────── */
  {
    id: "gradient-divider",
    name: "Gradient Divider",
    category: "Dividers",
    preview: (
      <div className="nuda-gradient-divider" role="separator" aria-hidden="true" />
    ),
    cssInline: `
      .nuda-gradient-divider{--c:#e4ff54;width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--c),transparent);opacity:.5}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gradient-divider" role="separator" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Divider
   A line that fades to transparent at both edges.
   Customize: --divider-color, --divider-opacity */

.nuda-gradient-divider {
  --divider-color: #e4ff54;
  --divider-opacity: 0.5;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--divider-color),
    transparent
  );
  opacity: var(--divider-opacity);
}`,
      },
    ],
  },

  /* ─────────────── ANIMATED DOTS ─────────────── */
  {
    id: "animated-dots",
    name: "Animated Dots",
    category: "Dividers",
    preview: (
      <div className="nuda-dot-divider" role="separator" aria-hidden="true">
        <span /><span /><span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-dot-divider{--c:#e4ff54;display:flex;align-items:center;justify-content:center;gap:8px;padding:.5rem 0}
      .nuda-dot-divider span{width:4px;height:4px;border-radius:50%;background:var(--c);opacity:.3;animation:_dotpulse 2s ease-in-out infinite}
      .nuda-dot-divider span:nth-child(1){animation-delay:0s}
      .nuda-dot-divider span:nth-child(2){animation-delay:.15s}
      .nuda-dot-divider span:nth-child(3){animation-delay:.3s}
      .nuda-dot-divider span:nth-child(4){animation-delay:.45s}
      .nuda-dot-divider span:nth-child(5){animation-delay:.6s}
      .nuda-dot-divider span:nth-child(6){animation-delay:.75s}
      .nuda-dot-divider span:nth-child(7){animation-delay:.9s}
      @keyframes _dotpulse{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:1;transform:scale(1.5)}}
      @media(prefers-reduced-motion:reduce){.nuda-dot-divider span{animation:none;opacity:.5}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dot-divider" role="separator" aria-hidden="true">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Animated Dots Divider
   A row of dots that pulse in sequence.
   Customize: --dot-color, --dot-size, --dot-gap */

.nuda-dot-divider {
  --dot-color: #e4ff54;
  --dot-size: 4px;
  --dot-gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--dot-gap);
  padding: 0.5rem 0;
}

.nuda-dot-divider span {
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  background: var(--dot-color);
  opacity: 0.3;
  animation: nuda-dot-pulse 2s ease-in-out infinite;
}

.nuda-dot-divider span:nth-child(1) { animation-delay: 0s; }
.nuda-dot-divider span:nth-child(2) { animation-delay: 0.15s; }
.nuda-dot-divider span:nth-child(3) { animation-delay: 0.3s; }
.nuda-dot-divider span:nth-child(4) { animation-delay: 0.45s; }
.nuda-dot-divider span:nth-child(5) { animation-delay: 0.6s; }
.nuda-dot-divider span:nth-child(6) { animation-delay: 0.75s; }
.nuda-dot-divider span:nth-child(7) { animation-delay: 0.9s; }

@keyframes nuda-dot-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dot-divider span {
    animation: none;
    opacity: 0.5;
  }
}`,
      },
    ],
  },

  /* ─────────────── WAVE DIVIDER ─────────────── */
  {
    id: "wave-divider",
    name: "Wave Divider",
    category: "Dividers",
    preview: (
      <svg className="nuda-wave-divider" viewBox="0 0 400 24" preserveAspectRatio="none" role="separator" aria-hidden="true">
        <path className="nuda-wave-divider__path" d="M0 12 Q25 0 50 12 Q75 24 100 12 Q125 0 150 12 Q175 24 200 12 Q225 0 250 12 Q275 24 300 12 Q325 0 350 12 Q375 24 400 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    cssInline: `
      .nuda-wave-divider{--c:#e4ff54;width:100%;height:24px;color:var(--c);opacity:.4}
      .nuda-wave-divider__path{stroke-dasharray:600;stroke-dashoffset:600;animation:_wavedraw 2s ease forwards}
      @keyframes _wavedraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-wave-divider__path{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<svg class="nuda-wave-divider" viewBox="0 0 400 24" preserveAspectRatio="none"
     role="separator" aria-hidden="true">
  <path class="nuda-wave-divider__path"
    d="M0 12 Q25 0 50 12 Q75 24 100 12 Q125 0 150 12 Q175 24 200 12
       Q225 0 250 12 Q275 24 300 12 Q325 0 350 12 Q375 24 400 12"
    fill="none" stroke="currentColor" stroke-width="1.5" />
</svg>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Wave Divider
   SVG wave line that draws itself in.
   Customize: --wave-color, --wave-opacity */

.nuda-wave-divider {
  --wave-color: #e4ff54;
  --wave-opacity: 0.4;
  width: 100%;
  height: 24px;
  color: var(--wave-color);
  opacity: var(--wave-opacity);
}

.nuda-wave-divider__path {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: nuda-wave-draw 2s ease forwards;
}

@keyframes nuda-wave-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-wave-divider__path {
    animation: none;
    stroke-dashoffset: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── ZIGZAG DIVIDER ─────────────── */
  {
    id: "zigzag-divider",
    name: "Zigzag Divider",
    category: "Dividers",
    preview: (
      <svg className="nuda-zigzag-divider" viewBox="0 0 400 16" preserveAspectRatio="none" role="separator" aria-hidden="true">
        <polyline className="nuda-zigzag-divider__line" points="0,8 20,2 40,14 60,2 80,14 100,2 120,14 140,2 160,14 180,2 200,14 220,2 240,14 260,2 280,14 300,2 320,14 340,2 360,14 380,2 400,8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    cssInline: `
      .nuda-zigzag-divider{--c:#e4ff54;width:100%;height:16px;color:var(--c);opacity:.4}
      .nuda-zigzag-divider__line{stroke-dasharray:800;stroke-dashoffset:800;animation:_zzdraw 1.5s ease forwards}
      @keyframes _zzdraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-zigzag-divider__line{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<svg class="nuda-zigzag-divider" viewBox="0 0 400 16" preserveAspectRatio="none"
     role="separator" aria-hidden="true">
  <polyline class="nuda-zigzag-divider__line"
    points="0,8 20,2 40,14 60,2 80,14 100,2 120,14 140,2 160,14 180,2
            200,14 220,2 240,14 260,2 280,14 300,2 320,14 340,2 360,14
            380,2 400,8"
    fill="none" stroke="currentColor" stroke-width="1.5"
    stroke-linejoin="round" />
</svg>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Zigzag Divider
   Zigzag pattern that draws itself in.
   Customize: --zigzag-color, --zigzag-opacity */

.nuda-zigzag-divider {
  --zigzag-color: #e4ff54;
  --zigzag-opacity: 0.4;
  width: 100%;
  height: 16px;
  color: var(--zigzag-color);
  opacity: var(--zigzag-opacity);
}

.nuda-zigzag-divider__line {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: nuda-zigzag-draw 1.5s ease forwards;
}

@keyframes nuda-zigzag-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-zigzag-divider__line {
    animation: none;
    stroke-dashoffset: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── SPARKLE DIVIDER ─────────────── */
  {
    id: "sparkle-divider",
    name: "Sparkle Divider",
    category: "Dividers",
    preview: (
      <div className="nuda-sparkle-divider" role="separator" aria-hidden="true">
        <div className="nuda-sparkle-divider__line" />
        <div className="nuda-sparkle-divider__sparkle" />
        <div className="nuda-sparkle-divider__line" />
      </div>
    ),
    cssInline: `
      .nuda-sparkle-divider{--c:#e4ff54;display:flex;align-items:center;gap:0;width:100%}
      .nuda-sparkle-divider__line{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(228,255,84,.3))}
      .nuda-sparkle-divider__line:last-child{background:linear-gradient(90deg,rgba(228,255,84,.3),transparent)}
      .nuda-sparkle-divider__sparkle{width:6px;height:6px;background:var(--c);border-radius:50%;box-shadow:0 0 8px var(--c),0 0 16px var(--c);animation:_sparkle 2s ease-in-out infinite;flex-shrink:0}
      @keyframes _sparkle{0%,100%{opacity:.4;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}
      @media(prefers-reduced-motion:reduce){.nuda-sparkle-divider__sparkle{animation:none;opacity:.7}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sparkle-divider" role="separator" aria-hidden="true">
  <div class="nuda-sparkle-divider__line"></div>
  <div class="nuda-sparkle-divider__sparkle"></div>
  <div class="nuda-sparkle-divider__line"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sparkle Divider
   Divider with a glowing moving sparkle in the center.
   Customize: --sparkle-color, --sparkle-size */

.nuda-sparkle-divider {
  --sparkle-color: #e4ff54;
  --sparkle-size: 6px;
  display: flex;
  align-items: center;
  width: 100%;
}

.nuda-sparkle-divider__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(228, 255, 84, 0.3));
}

.nuda-sparkle-divider__line:last-child {
  background: linear-gradient(90deg, rgba(228, 255, 84, 0.3), transparent);
}

.nuda-sparkle-divider__sparkle {
  width: var(--sparkle-size);
  height: var(--sparkle-size);
  background: var(--sparkle-color);
  border-radius: 50%;
  box-shadow:
    0 0 8px var(--sparkle-color),
    0 0 16px var(--sparkle-color);
  animation: nuda-sparkle-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes nuda-sparkle-pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sparkle-divider__sparkle {
    animation: none;
    opacity: 0.7;
  }
}`,
      },
    ],
  },
];
