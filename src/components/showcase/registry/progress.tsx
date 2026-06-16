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

  /* ─────────────── 7. Striped Flow ─────────────── */
  {
    id: "striped-flow",
    name: "Striped Flow",
    category: "Progress",
    preview: (
      <div className="nuda-striped-flow" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} aria-label="68% complete">
        <div className="nuda-striped-flow__bar" style={{ width: "68%" }} />
      </div>
    ),
    cssInline: `
      .nuda-striped-flow{width:200px;height:12px;background:rgba(255,255,255,.08);border-radius:6px;overflow:hidden;margin:8px}
      .nuda-striped-flow__bar{height:100%;border-radius:6px;background-color:#e4ff54;background-image:linear-gradient(45deg,rgba(9,9,11,.25) 25%,transparent 25%,transparent 50%,rgba(9,9,11,.25) 50%,rgba(9,9,11,.25) 75%,transparent 75%);background-size:18px 18px;animation:_stripedflow .7s linear infinite}
      @keyframes _stripedflow{to{background-position:18px 0}}
      @media(prefers-reduced-motion:reduce){.nuda-striped-flow__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Striped Flow Progress Bar -->
<div class="nuda-striped-flow" role="progressbar"
     aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"
     aria-label="68% complete">
  <div class="nuda-striped-flow__bar" style="width: 68%"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Striped Flow Progress Bar
   Animated diagonal stripes scrolling along the fill (background-position only).
   Customize: --stripedflow-color, --stripedflow-track */

.nuda-striped-flow {
  --stripedflow-color: #e4ff54;
  --stripedflow-track: rgba(255, 255, 255, 0.08);
  width: 100%;
  height: 12px;
  background: var(--stripedflow-track);
  border-radius: 6px;
  overflow: hidden;
}

.nuda-striped-flow__bar {
  height: 100%;
  border-radius: 6px;
  background-color: var(--stripedflow-color);
  background-image: linear-gradient(
    45deg,
    rgba(9, 9, 11, 0.25) 25%,
    transparent 25%,
    transparent 50%,
    rgba(9, 9, 11, 0.25) 50%,
    rgba(9, 9, 11, 0.25) 75%,
    transparent 75%
  );
  background-size: 18px 18px;
  animation: nuda-striped-flow 0.7s linear infinite;
  transition: width 0.3s ease;
}

@keyframes nuda-striped-flow {
  to { background-position: 18px 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-striped-flow__bar { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Segmented Steps ─────────────── */
  {
    id: "segmented-steps",
    name: "Segmented Steps",
    category: "Progress",
    preview: (
      <div className="nuda-segmented-steps" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={6} aria-label="Step 3 of 6">
        <span className="nuda-segmented-steps__seg is-on" />
        <span className="nuda-segmented-steps__seg is-on" />
        <span className="nuda-segmented-steps__seg is-on" />
        <span className="nuda-segmented-steps__seg" />
        <span className="nuda-segmented-steps__seg" />
        <span className="nuda-segmented-steps__seg" />
      </div>
    ),
    cssInline: `
      .nuda-segmented-steps{display:flex;gap:5px;width:200px;margin:8px}
      .nuda-segmented-steps__seg{flex:1;height:8px;border-radius:4px;background:rgba(255,255,255,.1);overflow:hidden;position:relative}
      .nuda-segmented-steps__seg.is-on::after{content:'';position:absolute;inset:0;background:#e4ff54;border-radius:4px;transform-origin:left center;animation:_segsteps .4s ease-out both}
      .nuda-segmented-steps__seg.is-on:nth-child(2)::after{animation-delay:.12s}
      .nuda-segmented-steps__seg.is-on:nth-child(3)::after{animation-delay:.24s}
      @keyframes _segsteps{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-segmented-steps__seg.is-on::after{animation:none;transform:scaleX(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Segmented Steps Progress (3 of 6 complete) -->
<div class="nuda-segmented-steps" role="progressbar"
     aria-valuenow="3" aria-valuemin="0" aria-valuemax="6"
     aria-label="Step 3 of 6">
  <span class="nuda-segmented-steps__seg is-on"></span>
  <span class="nuda-segmented-steps__seg is-on"></span>
  <span class="nuda-segmented-steps__seg is-on"></span>
  <span class="nuda-segmented-steps__seg"></span>
  <span class="nuda-segmented-steps__seg"></span>
  <span class="nuda-segmented-steps__seg"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Segmented Steps Progress
   Multi-segment step bar; completed segments fill via scaleX in sequence.
   Add the .is-on class to a segment to mark it complete.
   Customize: --segsteps-color, --segsteps-track */

.nuda-segmented-steps {
  --segsteps-color: #e4ff54;
  --segsteps-track: rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 5px;
  width: 100%;
}

.nuda-segmented-steps__seg {
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: var(--segsteps-track);
  overflow: hidden;
  position: relative;
}

.nuda-segmented-steps__seg.is-on::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--segsteps-color);
  border-radius: 4px;
  transform-origin: left center;
  animation: nuda-segmented-steps 0.4s ease-out both;
}

.nuda-segmented-steps__seg.is-on:nth-child(2)::after { animation-delay: 0.12s; }
.nuda-segmented-steps__seg.is-on:nth-child(3)::after { animation-delay: 0.24s; }

@keyframes nuda-segmented-steps {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-segmented-steps__seg.is-on::after { animation: none; transform: scaleX(1); }
}`,
      },
    ],
  },

  /* ─────────────── 9. Indeterminate Sweep ─────────────── */
  {
    id: "indeterminate-sweep",
    name: "Indeterminate Sweep",
    category: "Progress",
    preview: (
      <div className="nuda-indet-sweep" role="progressbar" aria-label="Loading">
        <div className="nuda-indet-sweep__bar" />
      </div>
    ),
    cssInline: `
      .nuda-indet-sweep{position:relative;width:200px;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin:8px}
      .nuda-indet-sweep__bar{position:absolute;top:0;left:0;width:100%;height:100%;background:#e4ff54;border-radius:3px;transform-origin:left center;animation:_indetsweep 1.5s cubic-bezier(.65,.05,.36,1) infinite}
      @keyframes _indetsweep{0%{transform:translateX(-100%) scaleX(.4)}50%{transform:translateX(20%) scaleX(.6)}100%{transform:translateX(120%) scaleX(.4)}}
      @media(prefers-reduced-motion:reduce){.nuda-indet-sweep__bar{animation:none;transform:translateX(0) scaleX(.4)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Indeterminate Sweep Progress Bar -->
<div class="nuda-indet-sweep" role="progressbar" aria-label="Loading">
  <div class="nuda-indet-sweep__bar"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Indeterminate Sweep Progress Bar
   A sweeping bar for unknown-duration tasks (translateX + scaleX, no width).
   Customize: --indetsweep-color, --indetsweep-track */

.nuda-indet-sweep {
  --indetsweep-color: #e4ff54;
  --indetsweep-track: rgba(255, 255, 255, 0.1);
  position: relative;
  width: 100%;
  height: 6px;
  background: var(--indetsweep-track);
  border-radius: 3px;
  overflow: hidden;
}

.nuda-indet-sweep__bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--indetsweep-color);
  border-radius: 3px;
  transform-origin: left center;
  animation: nuda-indet-sweep 1.5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
  will-change: transform;
}

@keyframes nuda-indet-sweep {
  0%   { transform: translateX(-100%) scaleX(0.4); }
  50%  { transform: translateX(20%)   scaleX(0.6); }
  100% { transform: translateX(120%)  scaleX(0.4); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-indet-sweep__bar { animation: none; transform: translateX(0) scaleX(0.4); }
}`,
      },
    ],
  },

  /* ─────────────── 10. Circular Percent ─────────────── */
  {
    id: "circular-percent",
    name: "Circular Percent",
    category: "Progress",
    preview: (
      <div className="nuda-circular-percent" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="75% complete">
        <svg viewBox="0 0 60 60" width="56" height="56">
          <circle className="nuda-circular-percent__track" cx="30" cy="30" r="24" fill="none" strokeWidth="5" />
          <circle className="nuda-circular-percent__fill" cx="30" cy="30" r="24" fill="none" strokeWidth="5" strokeLinecap="round" strokeDasharray="150.8" strokeDashoffset="37.7" />
        </svg>
        <span className="nuda-circular-percent__label">75%</span>
      </div>
    ),
    cssInline: `
      .nuda-circular-percent{position:relative;display:inline-flex;align-items:center;justify-content:center;margin:8px}
      .nuda-circular-percent__track{stroke:rgba(255,255,255,.1)}
      .nuda-circular-percent__fill{stroke:#e4ff54;transform:rotate(-90deg);transform-origin:center;stroke-dasharray:150.8;animation:_circpct 1.6s ease-out forwards}
      .nuda-circular-percent__label{position:absolute;font-size:13px;font-weight:600;color:#fafafa;font-family:system-ui,sans-serif}
      @keyframes _circpct{from{stroke-dashoffset:150.8}to{stroke-dashoffset:37.7}}
      @media(prefers-reduced-motion:reduce){.nuda-circular-percent__fill{animation:none;stroke-dashoffset:37.7}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Circular Percent Progress
     stroke-dashoffset target = circumference - (circumference * percent/100)
     r=24 → circumference ≈ 150.8; 75% → 150.8 - 113.1 ≈ 37.7 -->
<div class="nuda-circular-percent" role="progressbar"
     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
     aria-label="75% complete">
  <svg viewBox="0 0 60 60" width="56" height="56">
    <circle class="nuda-circular-percent__track"
      cx="30" cy="30" r="24" fill="none" stroke-width="5" />
    <circle class="nuda-circular-percent__fill"
      cx="30" cy="30" r="24" fill="none" stroke-width="5"
      stroke-linecap="round"
      stroke-dasharray="150.8"
      stroke-dashoffset="37.7" />
  </svg>
  <span class="nuda-circular-percent__label">75%</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Circular Percent Progress
   SVG ring that animates its fill via stroke-dashoffset on load.
   Customize: --circpct-color, --circpct-track */

.nuda-circular-percent {
  --circpct-color: #e4ff54;
  --circpct-track: rgba(255, 255, 255, 0.1);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nuda-circular-percent__track {
  stroke: var(--circpct-track);
}

.nuda-circular-percent__fill {
  stroke: var(--circpct-color);
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: 150.8;
  animation: nuda-circular-percent 1.6s ease-out forwards;
}

.nuda-circular-percent__label {
  position: absolute;
  font-size: 13px;
  font-weight: 600;
  color: #fafafa;
  font-family: system-ui, sans-serif;
}

@keyframes nuda-circular-percent {
  from { stroke-dashoffset: 150.8; }
  to   { stroke-dashoffset: 37.7; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-circular-percent__fill { animation: none; stroke-dashoffset: 37.7; }
}`,
      },
    ],
  },

  /* ─────────────── 11. Gradient Shimmer Bar ─────────────── */
  {
    id: "gradient-shimmer-bar",
    name: "Gradient Shimmer Bar",
    category: "Progress",
    preview: (
      <div className="nuda-grad-shimmer" role="progressbar" aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} aria-label="62% complete">
        <div className="nuda-grad-shimmer__bar" style={{ width: "62%" }} />
      </div>
    ),
    cssInline: `
      .nuda-grad-shimmer{width:200px;height:10px;background:rgba(255,255,255,.08);border-radius:5px;overflow:hidden;margin:8px}
      .nuda-grad-shimmer__bar{height:100%;border-radius:5px;background:linear-gradient(90deg,#9bb024 0%,#e4ff54 40%,#ffffff 50%,#e4ff54 60%,#9bb024 100%);background-size:250% 100%;animation:_gradshimmer 1.6s linear infinite}
      @keyframes _gradshimmer{0%{background-position:150% 0}100%{background-position:-150% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-grad-shimmer__bar{animation:none;background-position:50% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Shimmer Progress Bar -->
<div class="nuda-grad-shimmer" role="progressbar"
     aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"
     aria-label="62% complete">
  <div class="nuda-grad-shimmer__bar" style="width: 62%"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Shimmer Progress Bar
   A bright highlight sweeps across the lime fill (background-position only).
   Customize: --gradshimmer-color, --gradshimmer-track */

.nuda-grad-shimmer {
  --gradshimmer-color: #e4ff54;
  --gradshimmer-track: rgba(255, 255, 255, 0.08);
  width: 100%;
  height: 10px;
  background: var(--gradshimmer-track);
  border-radius: 5px;
  overflow: hidden;
}

.nuda-grad-shimmer__bar {
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    #9bb024 0%,
    var(--gradshimmer-color) 40%,
    #ffffff 50%,
    var(--gradshimmer-color) 60%,
    #9bb024 100%
  );
  background-size: 250% 100%;
  animation: nuda-grad-shimmer 1.6s linear infinite;
  transition: width 0.3s ease;
}

@keyframes nuda-grad-shimmer {
  0%   { background-position: 150% 0; }
  100% { background-position: -150% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-grad-shimmer__bar { animation: none; background-position: 50% 0; }
}`,
      },
    ],
  },

  /* ─────────────── 12. Liquid Fill ─────────────── */
  {
    id: "liquid-fill-progress",
    name: "Liquid Fill",
    category: "Progress",
    preview: (
      <div className="nuda-liquid-fill-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-label="60% complete">
        <div className="nuda-liquid-fill-progress__liquid" style={{ height: "60%" }}>
          <div className="nuda-liquid-fill-progress__wave" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-liquid-fill-progress{position:relative;width:52px;height:52px;border-radius:50%;border:2px solid rgba(228,255,84,.3);overflow:hidden;margin:8px}
      .nuda-liquid-fill-progress__liquid{position:absolute;bottom:0;left:0;right:0;background:rgba(228,255,84,.85)}
      .nuda-liquid-fill-progress__wave{position:absolute;top:-9px;left:-50%;width:200%;height:18px;background:rgba(228,255,84,.85);border-radius:45%;animation:_liquidfillp 2.2s linear infinite}
      @keyframes _liquidfillp{0%{transform:translateX(0) rotate(0deg)}100%{transform:translateX(25%) rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-liquid-fill-progress__wave{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Liquid Fill Progress (set fill via inline height on __liquid) -->
<div class="nuda-liquid-fill-progress" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
     aria-label="60% complete">
  <div class="nuda-liquid-fill-progress__liquid" style="height: 60%">
    <div class="nuda-liquid-fill-progress__wave"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Liquid Fill Progress
   A wavy liquid surface; the wave bob is driven by transform (translate + rotate).
   Set the fill level with the inline height on __liquid.
   Customize: --liquidfillp-color, --liquidfillp-size */

.nuda-liquid-fill-progress {
  --liquidfillp-color: rgba(228, 255, 84, 0.85);
  --liquidfillp-size: 52px;
  position: relative;
  width: var(--liquidfillp-size);
  height: var(--liquidfillp-size);
  border-radius: 50%;
  border: 2px solid rgba(228, 255, 84, 0.3);
  overflow: hidden;
}

.nuda-liquid-fill-progress__liquid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--liquidfillp-color);
}

.nuda-liquid-fill-progress__wave {
  position: absolute;
  top: -9px;
  left: -50%;
  width: 200%;
  height: 18px;
  background: var(--liquidfillp-color);
  border-radius: 45%;
  animation: nuda-liquid-fill-progress 2.2s linear infinite;
  will-change: transform;
}

@keyframes nuda-liquid-fill-progress {
  0%   { transform: translateX(0)   rotate(0deg); }
  100% { transform: translateX(25%) rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-liquid-fill-progress__wave { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 13. Dotted Progress ─────────────── */
  {
    id: "dotted-progress",
    name: "Dotted Progress",
    category: "Progress",
    preview: (
      <div className="nuda-dotted-progress" role="progressbar" aria-valuenow={4} aria-valuemin={0} aria-valuemax={8} aria-label="4 of 8 complete">
        <span className="is-filled" /><span className="is-filled" /><span className="is-filled" /><span className="is-filled" />
        <span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-dotted-progress{display:flex;align-items:center;gap:7px;margin:8px}
      .nuda-dotted-progress span{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.12)}
      .nuda-dotted-progress span.is-filled{background:#e4ff54;animation:_dottedprog .4s ease-out both}
      .nuda-dotted-progress span.is-filled:nth-child(2){animation-delay:.1s}
      .nuda-dotted-progress span.is-filled:nth-child(3){animation-delay:.2s}
      .nuda-dotted-progress span.is-filled:nth-child(4){animation-delay:.3s}
      @keyframes _dottedprog{0%{transform:scale(0)}60%{transform:scale(1.3)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-dotted-progress span.is-filled{animation:none;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Dotted Progress (4 of 8 filled) -->
<div class="nuda-dotted-progress" role="progressbar"
     aria-valuenow="4" aria-valuemin="0" aria-valuemax="8"
     aria-label="4 of 8 complete">
  <span class="is-filled"></span>
  <span class="is-filled"></span>
  <span class="is-filled"></span>
  <span class="is-filled"></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dotted Progress
   Dots fill in sequence with a small pop (transform: scale).
   Add the .is-filled class to completed dots.
   Customize: --dottedprog-color, --dottedprog-track */

.nuda-dotted-progress {
  --dottedprog-color: #e4ff54;
  --dottedprog-track: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  gap: 7px;
}

.nuda-dotted-progress span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--dottedprog-track);
}

.nuda-dotted-progress span.is-filled {
  background: var(--dottedprog-color);
  animation: nuda-dotted-progress 0.4s ease-out both;
  will-change: transform;
}

.nuda-dotted-progress span.is-filled:nth-child(2) { animation-delay: 0.1s; }
.nuda-dotted-progress span.is-filled:nth-child(3) { animation-delay: 0.2s; }
.nuda-dotted-progress span.is-filled:nth-child(4) { animation-delay: 0.3s; }

@keyframes nuda-dotted-progress {
  0%   { transform: scale(0); }
  60%  { transform: scale(1.3); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dotted-progress span.is-filled { animation: none; transform: scale(1); }
}`,
      },
    ],
  },
];
