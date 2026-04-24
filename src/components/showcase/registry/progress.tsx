import type { NudaComponent } from "./types";

export const progress: NudaComponent[] = [
  /* ─────────────── 1. Stripe Progress ─────────────── */
  {
    id: "stripe-progress",
    name: "Stripe Progress",
    category: "Progress",
    preview: (
      <div className="nuda-stripe-progress" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} aria-label="65% complete">
        <div className="nuda-stripe-progress__bar" style={{ width: "65%" }} />
      </div>
    ),
    cssInline: `
      .nuda-stripe-progress{width:200px;height:12px;background:rgba(255,255,255,.1);border-radius:6px;overflow:hidden;margin:8px}
      .nuda-stripe-progress__bar{height:100%;background:linear-gradient(135deg,#818cf8 25%,transparent 25%,transparent 50%,#818cf8 50%,#818cf8 75%,transparent 75%);background-size:16px 16px;border-radius:6px;animation:_sp .6s linear infinite;background-color:#6366f1}
      @keyframes _sp{to{background-position:16px 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stripe Progress Bar -->
<div class="nuda-stripe-progress" role="progressbar"
     aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
     aria-label="65% complete">
  <div class="nuda-stripe-progress__bar" style="width: 65%"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stripe Progress Bar
   Animated diagonal stripes moving through the progress fill.
   Customize: --stripe-color, --stripe-track, --stripe-height */

.nuda-stripe-progress {
  --stripe-color: #6366f1;
  --stripe-track: rgba(255, 255, 255, 0.1);
  --stripe-height: 12px;
  width: 100%;
  height: var(--stripe-height);
  background: var(--stripe-track);
  border-radius: calc(var(--stripe-height) / 2);
  overflow: hidden;
}

.nuda-stripe-progress__bar {
  height: 100%;
  background-color: var(--stripe-color);
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%
  );
  background-size: 16px 16px;
  border-radius: inherit;
  animation: nuda-stripe-move 0.6s linear infinite;
  transition: width 0.3s ease;
}

@keyframes nuda-stripe-move {
  to { background-position: 16px 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stripe-progress__bar {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Gradient Progress ─────────────── */
  {
    id: "gradient-progress",
    name: "Gradient Progress",
    category: "Progress",
    preview: (
      <div className="nuda-gradient-progress" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} aria-label="70% complete">
        <div className="nuda-gradient-progress__bar" style={{ width: "70%" }} />
      </div>
    ),
    cssInline: `
      .nuda-gradient-progress{width:200px;height:10px;background:rgba(255,255,255,.1);border-radius:5px;overflow:hidden;margin:8px}
      .nuda-gradient-progress__bar{height:100%;border-radius:5px;background:linear-gradient(90deg,#818cf8,#f472b6,#fbbf24,#818cf8);background-size:300% 100%;animation:_gp 2s linear infinite}
      @keyframes _gp{0%{background-position:0% 50%}100%{background-position:300% 50%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Progress Bar -->
<div class="nuda-gradient-progress" role="progressbar"
     aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
     aria-label="70% complete">
  <div class="nuda-gradient-progress__bar" style="width: 70%"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Progress Bar
   Gradient color shifting along the progress fill.
   Customize: --gp-color-a, --gp-color-b, --gp-color-c, --gp-track */

.nuda-gradient-progress {
  --gp-color-a: #818cf8;
  --gp-color-b: #f472b6;
  --gp-color-c: #fbbf24;
  --gp-track: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 10px;
  background: var(--gp-track);
  border-radius: 5px;
  overflow: hidden;
}

.nuda-gradient-progress__bar {
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    var(--gp-color-a),
    var(--gp-color-b),
    var(--gp-color-c),
    var(--gp-color-a)
  );
  background-size: 300% 100%;
  animation: nuda-gradient-shift 2s linear infinite;
  transition: width 0.3s ease;
}

@keyframes nuda-gradient-shift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-progress__bar {
    animation: none;
    background-size: 100% 100%;
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. Segmented Progress ─────────────── */
  {
    id: "segmented-progress",
    name: "Segmented Progress",
    category: "Progress",
    preview: (
      <div className="nuda-segmented-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-label="60% complete">
        <span className="nuda-segmented-progress__seg nuda-segmented-progress__seg--filled" />
        <span className="nuda-segmented-progress__seg nuda-segmented-progress__seg--filled" />
        <span className="nuda-segmented-progress__seg nuda-segmented-progress__seg--filled" />
        <span className="nuda-segmented-progress__seg" />
        <span className="nuda-segmented-progress__seg" />
      </div>
    ),
    cssInline: `
      .nuda-segmented-progress{display:flex;gap:4px;width:200px;margin:8px}
      .nuda-segmented-progress__seg{flex:1;height:10px;background:rgba(255,255,255,.1);border-radius:3px;transition:background .3s ease}
      .nuda-segmented-progress__seg--filled{background:#818cf8;animation:_seg 1.5s ease-in-out infinite alternate}
      .nuda-segmented-progress__seg--filled:nth-child(2){animation-delay:.15s}
      .nuda-segmented-progress__seg--filled:nth-child(3){animation-delay:.3s}
      @keyframes _seg{0%{opacity:.6}100%{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Segmented Progress Bar -->
<div class="nuda-segmented-progress" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
     aria-label="60% complete">
  <span class="nuda-segmented-progress__seg nuda-segmented-progress__seg--filled"></span>
  <span class="nuda-segmented-progress__seg nuda-segmented-progress__seg--filled"></span>
  <span class="nuda-segmented-progress__seg nuda-segmented-progress__seg--filled"></span>
  <span class="nuda-segmented-progress__seg"></span>
  <span class="nuda-segmented-progress__seg"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Segmented Progress Bar
   Segmented blocks filling in sequence with a gentle pulse on filled ones.
   Customize: --seg-color, --seg-track, --seg-count (via HTML spans) */

.nuda-segmented-progress {
  --seg-color: #818cf8;
  --seg-track: rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 4px;
  width: 100%;
}

.nuda-segmented-progress__seg {
  flex: 1;
  height: 10px;
  background: var(--seg-track);
  border-radius: 3px;
  transition: background 0.3s ease;
}

.nuda-segmented-progress__seg--filled {
  background: var(--seg-color);
  animation: nuda-seg-pulse 1.5s ease-in-out infinite alternate;
  will-change: opacity;
}

.nuda-segmented-progress__seg--filled:nth-child(2) { animation-delay: 0.15s; }
.nuda-segmented-progress__seg--filled:nth-child(3) { animation-delay: 0.3s; }
.nuda-segmented-progress__seg--filled:nth-child(4) { animation-delay: 0.45s; }
.nuda-segmented-progress__seg--filled:nth-child(5) { animation-delay: 0.6s; }

@keyframes nuda-seg-pulse {
  0%   { opacity: 0.6; }
  100% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-segmented-progress__seg--filled {
    animation: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Circular Progress ─────────────── */
  {
    id: "circular-progress",
    name: "Circular Progress",
    category: "Progress",
    preview: (
      <div className="nuda-circular-progress" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} aria-label="72% complete">
        <svg viewBox="0 0 60 60" width="56" height="56">
          <circle className="nuda-circular-progress__track" cx="30" cy="30" r="24" fill="none" strokeWidth="5" />
          <circle className="nuda-circular-progress__fill" cx="30" cy="30" r="24" fill="none" strokeWidth="5" strokeLinecap="round" strokeDasharray="150.8" strokeDashoffset="42.2" />
        </svg>
        <span className="nuda-circular-progress__label">72%</span>
      </div>
    ),
    cssInline: `
      .nuda-circular-progress{position:relative;display:inline-flex;align-items:center;justify-content:center;margin:8px}
      .nuda-circular-progress__track{stroke:rgba(255,255,255,.1)}
      .nuda-circular-progress__fill{stroke:#818cf8;transform:rotate(-90deg);transform-origin:center;transition:stroke-dashoffset .5s ease}
      .nuda-circular-progress__label{position:absolute;font-size:13px;font-weight:600;color:#e2e8f0;font-family:system-ui,sans-serif}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Circular Progress
     To set percentage: stroke-dashoffset = circumference - (circumference * percent / 100)
     Circumference for r=24: 2 * π * 24 ≈ 150.8
     72% → 150.8 - (150.8 * 0.72) ≈ 42.2 -->
<div class="nuda-circular-progress" role="progressbar"
     aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"
     aria-label="72% complete">
  <svg viewBox="0 0 60 60" width="56" height="56">
    <circle class="nuda-circular-progress__track"
      cx="30" cy="30" r="24" fill="none" stroke-width="5" />
    <circle class="nuda-circular-progress__fill"
      cx="30" cy="30" r="24" fill="none" stroke-width="5"
      stroke-linecap="round"
      stroke-dasharray="150.8"
      stroke-dashoffset="42.2" />
  </svg>
  <span class="nuda-circular-progress__label">72%</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Circular Progress
   SVG circle filling as a percentage.
   Customize: --circ-color, --circ-track, --circ-stroke-width */

.nuda-circular-progress {
  --circ-color: #818cf8;
  --circ-track: rgba(255, 255, 255, 0.1);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nuda-circular-progress__track {
  stroke: var(--circ-track);
}

.nuda-circular-progress__fill {
  stroke: var(--circ-color);
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 0.5s ease;
}

.nuda-circular-progress__label {
  position: absolute;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  font-family: system-ui, sans-serif;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-circular-progress__fill {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Liquid Fill ─────────────── */
  {
    id: "liquid-fill",
    name: "Liquid Fill",
    category: "Progress",
    preview: (
      <div className="nuda-liquid-fill" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} aria-label="55% complete">
        <div className="nuda-liquid-fill__liquid" style={{ height: "55%" }}>
          <div className="nuda-liquid-fill__wave" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-liquid-fill{width:48px;height:48px;border-radius:50%;border:2px solid rgba(255,255,255,.2);overflow:hidden;position:relative;margin:8px}
      .nuda-liquid-fill__liquid{position:absolute;bottom:0;left:0;right:0;background:#818cf8;transition:height .4s ease}
      .nuda-liquid-fill__wave{position:absolute;top:-6px;left:-50%;width:200%;height:12px;background:radial-gradient(ellipse at center,rgba(255,255,255,.3) 0%,transparent 70%);animation:_lf 2s linear infinite}
      @keyframes _lf{0%{transform:translateX(0)}100%{transform:translateX(50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Liquid Fill Progress
     Set the fill level via the inline height on __liquid -->
<div class="nuda-liquid-fill" role="progressbar"
     aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"
     aria-label="55% complete">
  <div class="nuda-liquid-fill__liquid" style="height: 55%">
    <div class="nuda-liquid-fill__wave"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Liquid Fill Progress
   Liquid filling animation from bottom with a wave effect.
   Customize: --liquid-color, --liquid-size, --liquid-border */

.nuda-liquid-fill {
  --liquid-color: #818cf8;
  --liquid-size: 48px;
  --liquid-border: rgba(255, 255, 255, 0.2);
  width: var(--liquid-size);
  height: var(--liquid-size);
  border-radius: 50%;
  border: 2px solid var(--liquid-border);
  overflow: hidden;
  position: relative;
}

.nuda-liquid-fill__liquid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--liquid-color);
  transition: height 0.4s ease;
}

.nuda-liquid-fill__wave {
  position: absolute;
  top: -6px;
  left: -50%;
  width: 200%;
  height: 12px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  animation: nuda-liquid-wave 2s linear infinite;
}

@keyframes nuda-liquid-wave {
  0%   { transform: translateX(0); }
  100% { transform: translateX(50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-liquid-fill__wave {
    animation: none;
    opacity: 0.5;
  }
}`,
      },
    ],
  },

  /* ─────────────── 6. Step Progress ─────────────── */
  {
    id: "step-progress",
    name: "Step Progress",
    category: "Progress",
    preview: (
      <div className="nuda-step-progress" role="progressbar" aria-valuenow={2} aria-valuemin={1} aria-valuemax={4} aria-label="Step 2 of 4">
        <span className="nuda-step-progress__dot nuda-step-progress__dot--done" />
        <span className="nuda-step-progress__line nuda-step-progress__line--done" />
        <span className="nuda-step-progress__dot nuda-step-progress__dot--active" />
        <span className="nuda-step-progress__line" />
        <span className="nuda-step-progress__dot" />
        <span className="nuda-step-progress__line" />
        <span className="nuda-step-progress__dot" />
      </div>
    ),
    cssInline: `
      .nuda-step-progress{display:flex;align-items:center;gap:0;margin:8px}
      .nuda-step-progress__dot{width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.2);flex-shrink:0;transition:all .3s ease}
      .nuda-step-progress__dot--done{background:#818cf8;border-color:#818cf8}
      .nuda-step-progress__dot--active{background:#818cf8;border-color:#818cf8;animation:_stp 1.5s ease-in-out infinite;box-shadow:0 0 0 4px rgba(129,140,248,.3)}
      .nuda-step-progress__line{width:32px;height:2px;background:rgba(255,255,255,.15);flex-shrink:0;transition:background .3s ease}
      .nuda-step-progress__line--done{background:#818cf8}
      @keyframes _stp{0%,100%{box-shadow:0 0 0 4px rgba(129,140,248,.3)}50%{box-shadow:0 0 0 8px rgba(129,140,248,0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Step Progress (4 steps, currently on step 2) -->
<div class="nuda-step-progress" role="progressbar"
     aria-valuenow="2" aria-valuemin="1" aria-valuemax="4"
     aria-label="Step 2 of 4">
  <span class="nuda-step-progress__dot nuda-step-progress__dot--done"></span>
  <span class="nuda-step-progress__line nuda-step-progress__line--done"></span>
  <span class="nuda-step-progress__dot nuda-step-progress__dot--active"></span>
  <span class="nuda-step-progress__line"></span>
  <span class="nuda-step-progress__dot"></span>
  <span class="nuda-step-progress__line"></span>
  <span class="nuda-step-progress__dot"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Step Progress
   Step-by-step progress indicator with dots and connecting lines.
   Add --done and --active modifiers to control state.
   Customize: --step-color, --step-track */

.nuda-step-progress {
  --step-color: #818cf8;
  --step-track: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 0;
}

.nuda-step-progress__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--step-track);
  border: 2px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.nuda-step-progress__dot--done {
  background: var(--step-color);
  border-color: var(--step-color);
}

.nuda-step-progress__dot--active {
  background: var(--step-color);
  border-color: var(--step-color);
  box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.3);
  animation: nuda-step-pulse 1.5s ease-in-out infinite;
}

.nuda-step-progress__line {
  width: 32px;
  height: 2px;
  background: var(--step-track);
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.nuda-step-progress__line--done {
  background: var(--step-color);
}

@keyframes nuda-step-pulse {
  0%, 100% {
    box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.3);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(129, 140, 248, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-step-progress__dot--active {
    animation: none;
    box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.3);
  }
}`,
      },
    ],
  },
];
