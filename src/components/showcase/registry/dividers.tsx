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

  /* ─────────────── TEXT DIVIDER ─────────────── */
  {
    id: "text-divider",
    name: "Text Divider",
    category: "Dividers",
    preview: (
      <div className="nuda-textdiv" role="separator">
        <span className="nuda-textdiv__line" />
        <span className="nuda-textdiv__label">OR</span>
        <span className="nuda-textdiv__line" />
      </div>
    ),
    cssInline: `
      .nuda-textdiv{display:flex;align-items:center;gap:10px;width:100%;max-width:200px;color:#63636e;font-size:10px;font-weight:600;letter-spacing:.12em}
      .nuda-textdiv__line{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)}
      .nuda-textdiv__label{padding:0 4px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-textdiv" role="separator">
  <span class="nuda-textdiv__line"></span>
  <span class="nuda-textdiv__label">OR</span>
  <span class="nuda-textdiv__line"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-textdiv__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.16),
    transparent
  );
}`,
      },
    ],
  },

  /* ─────────────── ANIMATED RULE ─────────────── */
  {
    id: "animated-rule",
    name: "Animated Rule",
    category: "Dividers",
    preview: (
      <div className="nuda-animrule" role="separator">
        <span />
      </div>
    ),
    cssInline: `
      .nuda-animrule{position:relative;width:100%;max-width:200px;height:1px;background:rgba(255,255,255,.06);overflow:hidden}
      .nuda-animrule span{position:absolute;left:0;top:0;width:60px;height:100%;background:linear-gradient(90deg,transparent,#e4ff54,transparent);animation:_ruleSlide 2.4s ease-in-out infinite}
      @keyframes _ruleSlide{0%{transform:translateX(-100%)}100%{transform:translateX(340%)}}
      @media(prefers-reduced-motion:reduce){.nuda-animrule span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-animrule" role="separator">
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-animrule span {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(90deg, transparent, #e4ff54, transparent);
  animation: nuda-rule-slide 2.4s ease-in-out infinite;
}

@keyframes nuda-rule-slide {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(340%);  }
}`,
      },
    ],
  },

  /* ─────────────── BLOB DIVIDER ─────────────── */
  {
    id: "blob-divider",
    name: "Blob Divider",
    category: "Dividers",
    preview: (
      <svg className="nuda-blobdiv" viewBox="0 0 400 40" preserveAspectRatio="none" role="separator">
        <path d="M0 20 Q60 5 120 20 T240 20 T360 20 T480 20 L400 20 L400 40 L0 40 Z" fill="rgba(228,255,84,.08)" />
        <path d="M0 20 Q60 5 120 20 T240 20 T360 20 T480 20" fill="none" stroke="#e4ff54" strokeWidth="1.2" />
      </svg>
    ),
    cssInline: `
      .nuda-blobdiv{width:100%;height:30px;animation:_blobShift 8s ease-in-out infinite}
      @keyframes _blobShift{0%,100%{transform:translateX(0)}50%{transform:translateX(-8px)}}
      @media(prefers-reduced-motion:reduce){.nuda-blobdiv{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<svg class="nuda-blobdiv" viewBox="0 0 400 40"
     preserveAspectRatio="none" role="separator">
  <path d="M0 20 Q60 5 120 20 T240 20 T360 20 T480 20 L400 20 L400 40 L0 40 Z"
        fill="rgba(228,255,84,.08)" />
  <path d="M0 20 Q60 5 120 20 T240 20 T360 20 T480 20"
        fill="none" stroke="#e4ff54" stroke-width="1.2" />
</svg>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-blobdiv {
  width: 100%;
  height: 30px;
  animation: nuda-blob-shift 8s ease-in-out infinite;
}

@keyframes nuda-blob-shift {
  0%, 100% { transform: translateX(0);    }
  50%      { transform: translateX(-8px); }
}`,
      },
    ],
  },

  /* ─────────────── DOUBLE STRIPE ─────────────── */
  {
    id: "double-stripe",
    name: "Double Stripe",
    category: "Dividers",
    preview: (
      <div className="nuda-2stripe" role="separator">
        <span /><span />
      </div>
    ),
    cssInline: `
      .nuda-2stripe{display:flex;flex-direction:column;gap:3px;width:100%;max-width:200px}
      .nuda-2stripe span{height:1px;background:linear-gradient(90deg,transparent,#e4ff54,transparent);opacity:.6;animation:_2stripePulse 3s ease-in-out infinite}
      .nuda-2stripe span:nth-child(2){opacity:.3;animation-delay:.5s}
      @keyframes _2stripePulse{0%,100%{opacity:.3}50%{opacity:.8}}
      @media(prefers-reduced-motion:reduce){.nuda-2stripe span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-2stripe" role="separator">
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-2stripe span {
  height: 1px;
  background: linear-gradient(90deg, transparent, #e4ff54, transparent);
  opacity: 0.6;
  animation: nuda-2stripe-pulse 3s ease-in-out infinite;
}

.nuda-2stripe span:nth-child(2) {
  opacity: 0.3;
  animation-delay: 0.5s;
}

@keyframes nuda-2stripe-pulse {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 0.8; }
}`,
      },
    ],
  },

  /* ─────────────── ANIMATED DASH ─────────────── */
  {
    id: "animated-dash-divider",
    name: "Animated Dash",
    category: "Dividers",
    preview: (
      <div className="nuda-dash-flow" role="separator" aria-hidden="true" />
    ),
    cssInline: `
      .nuda-dash-flow{--c:#e4ff54;width:100%;max-width:200px;height:2px;background-image:repeating-linear-gradient(90deg,var(--c) 0,var(--c) 8px,transparent 8px,transparent 16px);background-size:16px 100%;opacity:.7;animation:_dashFlow 1s linear infinite}
      @keyframes _dashFlow{to{background-position:16px 0}}
      @media(prefers-reduced-motion:reduce){.nuda-dash-flow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dash-flow" role="separator" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Animated Dash
   Dashes flow along the divider.
   Customize: --dash-color */

.nuda-dash-flow {
  --dash-color: #e4ff54;
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(
    90deg,
    var(--dash-color) 0,
    var(--dash-color) 8px,
    transparent 8px,
    transparent 16px
  );
  background-size: 16px 100%;
  opacity: 0.7;
  animation: nuda-dash-flow 1s linear infinite;
}

@keyframes nuda-dash-flow {
  to { background-position: 16px 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dash-flow { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── GRADIENT FLOW LINE ─────────────── */
  {
    id: "gradient-flow-divider",
    name: "Gradient Flow Line",
    category: "Dividers",
    preview: (
      <div className="nuda-grad-flow" role="separator" aria-hidden="true" />
    ),
    cssInline: `
      .nuda-grad-flow{width:100%;max-width:200px;height:2px;background:linear-gradient(90deg,transparent,#e4ff54,#62b6ff,#e4ff54,transparent);background-size:200% 100%;border-radius:2px;animation:_gradFlow 3s linear infinite;will-change:background-position}
      @keyframes _gradFlow{to{background-position:200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-grad-flow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-grad-flow" role="separator" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Flow Line
   A gradient that flows along the line.
   Customize: gradient stop colors */

.nuda-grad-flow {
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #e4ff54,
    #62b6ff,
    #e4ff54,
    transparent
  );
  background-size: 200% 100%;
  border-radius: 2px;
  animation: nuda-grad-flow 3s linear infinite;
}

@keyframes nuda-grad-flow {
  to { background-position: 200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-grad-flow { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── WAVE LINE DIVIDER ─────────────── */
  {
    id: "animated-wave-divider",
    name: "Wave Divider",
    category: "Dividers",
    preview: (
      <div className="nuda-wave-line" role="separator" aria-hidden="true">
        <svg className="nuda-wave-line__svg" viewBox="0 0 200 24" preserveAspectRatio="none">
          <path d="M0 12 Q12.5 0 25 12 T50 12 T75 12 T100 12 T125 12 T150 12 T175 12 T200 12 T225 12 T250 12" fill="none" stroke="#e4ff54" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-wave-line{width:100%;max-width:200px;height:24px;overflow:hidden;opacity:.5}
      .nuda-wave-line__svg{display:block;width:125%;height:100%;animation:_waveLineSlide 2s linear infinite;will-change:transform}
      @keyframes _waveLineSlide{from{transform:translateX(0)}to{transform:translateX(-20%)}}
      @media(prefers-reduced-motion:reduce){.nuda-wave-line__svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-wave-line" role="separator" aria-hidden="true">
  <svg class="nuda-wave-line__svg" viewBox="0 0 200 24" preserveAspectRatio="none">
    <path d="M0 12 Q12.5 0 25 12 T50 12 T75 12 T100 12 T125 12 T150 12
             T175 12 T200 12 T225 12 T250 12"
          fill="none" stroke="#e4ff54" stroke-width="1.5" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Wave Divider
   An SVG wave that scrolls horizontally.
   Customize: stroke color, opacity */

.nuda-wave-line {
  width: 100%;
  height: 24px;
  overflow: hidden;
  opacity: 0.5;
}

.nuda-wave-line__svg {
  display: block;
  width: 125%;
  height: 100%;
  animation: nuda-wave-line-slide 2s linear infinite;
}

@keyframes nuda-wave-line-slide {
  from { transform: translateX(0); }
  to   { transform: translateX(-20%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-wave-line__svg { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── SPARKLE LINE ─────────────── */
  {
    id: "sparkle-line-divider",
    name: "Sparkle Line",
    category: "Dividers",
    preview: (
      <div className="nuda-sparkle-line" role="separator" aria-hidden="true">
        <span className="nuda-sparkle-line__base" />
        <span className="nuda-sparkle-line__s nuda-sparkle-line__s--1" />
        <span className="nuda-sparkle-line__s nuda-sparkle-line__s--2" />
        <span className="nuda-sparkle-line__s nuda-sparkle-line__s--3" />
        <span className="nuda-sparkle-line__s nuda-sparkle-line__s--4" />
        <span className="nuda-sparkle-line__s nuda-sparkle-line__s--5" />
      </div>
    ),
    cssInline: `
      .nuda-sparkle-line{--c:#e4ff54;position:relative;width:100%;max-width:200px;height:8px}
      .nuda-sparkle-line__base{position:absolute;top:50%;left:0;right:0;height:1px;transform:translateY(-50%);background:linear-gradient(90deg,transparent,rgba(228,255,84,.3),transparent)}
      .nuda-sparkle-line__s{position:absolute;top:50%;width:4px;height:4px;border-radius:50%;background:var(--c);box-shadow:0 0 6px var(--c);transform:translate(-50%,-50%) scale(0);opacity:0;animation:_sparkleLine 2.4s ease-in-out infinite}
      .nuda-sparkle-line__s--1{left:12%;animation-delay:0s}
      .nuda-sparkle-line__s--2{left:32%;animation-delay:.5s}
      .nuda-sparkle-line__s--3{left:52%;animation-delay:1s}
      .nuda-sparkle-line__s--4{left:72%;animation-delay:1.5s}
      .nuda-sparkle-line__s--5{left:90%;animation-delay:.9s}
      @keyframes _sparkleLine{0%,100%{transform:translate(-50%,-50%) scale(0);opacity:0}50%{transform:translate(-50%,-50%) scale(1);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-sparkle-line__s{animation:none;opacity:.6;transform:translate(-50%,-50%) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sparkle-line" role="separator" aria-hidden="true">
  <span class="nuda-sparkle-line__base"></span>
  <span class="nuda-sparkle-line__s nuda-sparkle-line__s--1"></span>
  <span class="nuda-sparkle-line__s nuda-sparkle-line__s--2"></span>
  <span class="nuda-sparkle-line__s nuda-sparkle-line__s--3"></span>
  <span class="nuda-sparkle-line__s nuda-sparkle-line__s--4"></span>
  <span class="nuda-sparkle-line__s nuda-sparkle-line__s--5"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sparkle Line
   Sparkles twinkle in sequence along the divider.
   Customize: --sparkle-line-color */

.nuda-sparkle-line {
  --sparkle-line-color: #e4ff54;
  position: relative;
  width: 100%;
  height: 8px;
}

.nuda-sparkle-line__base {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  transform: translateY(-50%);
  background: linear-gradient(90deg, transparent, rgba(228, 255, 84, 0.3), transparent);
}

.nuda-sparkle-line__s {
  position: absolute;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--sparkle-line-color);
  box-shadow: 0 0 6px var(--sparkle-line-color);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  animation: nuda-sparkle-line 2.4s ease-in-out infinite;
}

.nuda-sparkle-line__s--1 { left: 12%; animation-delay: 0s; }
.nuda-sparkle-line__s--2 { left: 32%; animation-delay: 0.5s; }
.nuda-sparkle-line__s--3 { left: 52%; animation-delay: 1s; }
.nuda-sparkle-line__s--4 { left: 72%; animation-delay: 1.5s; }
.nuda-sparkle-line__s--5 { left: 90%; animation-delay: 0.9s; }

@keyframes nuda-sparkle-line {
  0%, 100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sparkle-line__s {
    animation: none;
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
}`,
      },
    ],
  },
];
