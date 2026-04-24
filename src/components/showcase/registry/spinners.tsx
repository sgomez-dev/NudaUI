import type { NudaComponent } from "./types";

export const spinners: NudaComponent[] = [
  /* ─────────────── 1. Ring Spinner ─────────────── */
  {
    id: "ring-spinner",
    name: "Ring Spinner",
    category: "Spinners",
    preview: (
      <div className="nuda-ring-spinner" role="status" aria-label="Loading">
        <div className="nuda-ring-spinner__outer" />
        <div className="nuda-ring-spinner__inner" />
      </div>
    ),
    cssInline: `
      .nuda-ring-spinner{position:relative;width:40px;height:40px;margin:8px}
      .nuda-ring-spinner__outer{position:absolute;inset:0;border:3px solid transparent;border-top-color:#818cf8;border-bottom-color:#818cf8;border-radius:50%;animation:_rs-o 1.2s linear infinite}
      .nuda-ring-spinner__inner{position:absolute;inset:6px;border:3px solid transparent;border-left-color:#f472b6;border-right-color:#f472b6;border-radius:50%;animation:_rs-i 1.2s linear infinite reverse}
      @keyframes _rs-o{to{transform:rotate(360deg)}}
      @keyframes _rs-i{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ring Spinner -->
<div class="nuda-ring-spinner" role="status" aria-label="Loading">
  <div class="nuda-ring-spinner__outer"></div>
  <div class="nuda-ring-spinner__inner"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Ring Spinner
   Double ring counter-rotating spinner.
   Customize: --ring-outer-color, --ring-inner-color, --ring-size */

.nuda-ring-spinner {
  --ring-outer-color: #818cf8;
  --ring-inner-color: #f472b6;
  --ring-size: 40px;
  position: relative;
  width: var(--ring-size);
  height: var(--ring-size);
}

.nuda-ring-spinner__outer {
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top-color: var(--ring-outer-color);
  border-bottom-color: var(--ring-outer-color);
  border-radius: 50%;
  animation: nuda-ring-spin 1.2s linear infinite;
  will-change: transform;
}

.nuda-ring-spinner__inner {
  position: absolute;
  inset: 6px;
  border: 3px solid transparent;
  border-left-color: var(--ring-inner-color);
  border-right-color: var(--ring-inner-color);
  border-radius: 50%;
  animation: nuda-ring-spin 1.2s linear infinite reverse;
  will-change: transform;
}

@keyframes nuda-ring-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ring-spinner__outer,
  .nuda-ring-spinner__inner {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Gradient Spinner ─────────────── */
  {
    id: "gradient-spinner",
    name: "Gradient Spinner",
    category: "Spinners",
    preview: (
      <div className="nuda-gradient-spinner" role="status" aria-label="Loading" />
    ),
    cssInline: `
      .nuda-gradient-spinner{width:40px;height:40px;border-radius:50%;background:conic-gradient(from 0deg,transparent 0%,#a78bfa 70%,transparent 100%);animation:_gs 1s linear infinite;margin:8px;-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 4px),#000 calc(100% - 3px));mask:radial-gradient(farthest-side,transparent calc(100% - 4px),#000 calc(100% - 3px))}
      @keyframes _gs{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Spinner -->
<div class="nuda-gradient-spinner" role="status" aria-label="Loading"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Spinner
   Conic gradient arc spinning. Uses mask to create ring shape.
   Customize: --grad-spinner-color, --grad-spinner-size */

.nuda-gradient-spinner {
  --grad-spinner-color: #a78bfa;
  --grad-spinner-size: 40px;
  width: var(--grad-spinner-size);
  height: var(--grad-spinner-size);
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    var(--grad-spinner-color) 70%,
    transparent 100%
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 4px),
    #000 calc(100% - 3px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 4px),
    #000 calc(100% - 3px)
  );
  animation: nuda-gradient-spin 1s linear infinite;
  will-change: transform;
}

@keyframes nuda-gradient-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-spinner {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. Dotted Ring ─────────────── */
  {
    id: "dotted-ring",
    name: "Dotted Ring",
    category: "Spinners",
    preview: (
      <div className="nuda-dotted-ring" role="status" aria-label="Loading">
        <span /><span /><span /><span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-dotted-ring{position:relative;width:40px;height:40px;animation:_dr 1.6s linear infinite;margin:8px}
      .nuda-dotted-ring span{position:absolute;width:6px;height:6px;background:#60a5fa;border-radius:50%;top:50%;left:50%}
      .nuda-dotted-ring span:nth-child(1){transform:translate(-50%,-50%) rotate(0deg) translateY(-17px);opacity:1}
      .nuda-dotted-ring span:nth-child(2){transform:translate(-50%,-50%) rotate(45deg) translateY(-17px);opacity:.875}
      .nuda-dotted-ring span:nth-child(3){transform:translate(-50%,-50%) rotate(90deg) translateY(-17px);opacity:.75}
      .nuda-dotted-ring span:nth-child(4){transform:translate(-50%,-50%) rotate(135deg) translateY(-17px);opacity:.625}
      .nuda-dotted-ring span:nth-child(5){transform:translate(-50%,-50%) rotate(180deg) translateY(-17px);opacity:.5}
      .nuda-dotted-ring span:nth-child(6){transform:translate(-50%,-50%) rotate(225deg) translateY(-17px);opacity:.375}
      .nuda-dotted-ring span:nth-child(7){transform:translate(-50%,-50%) rotate(270deg) translateY(-17px);opacity:.25}
      .nuda-dotted-ring span:nth-child(8){transform:translate(-50%,-50%) rotate(315deg) translateY(-17px);opacity:.125}
      @keyframes _dr{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Dotted Ring Spinner -->
<div class="nuda-dotted-ring" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dotted Ring Spinner
   Eight dots arranged in a circle with fading opacity, spinning.
   Customize: --dotring-color, --dotring-size, --dotring-dot-size */

.nuda-dotted-ring {
  --dotring-color: #60a5fa;
  --dotring-size: 40px;
  --dotring-dot-size: 6px;
  position: relative;
  width: var(--dotring-size);
  height: var(--dotring-size);
  animation: nuda-dotted-ring 1.6s linear infinite;
  will-change: transform;
}

.nuda-dotted-ring span {
  position: absolute;
  width: var(--dotring-dot-size);
  height: var(--dotring-dot-size);
  background: var(--dotring-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
}

.nuda-dotted-ring span:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg)   translateY(-17px); opacity: 1; }
.nuda-dotted-ring span:nth-child(2) { transform: translate(-50%, -50%) rotate(45deg)  translateY(-17px); opacity: 0.875; }
.nuda-dotted-ring span:nth-child(3) { transform: translate(-50%, -50%) rotate(90deg)  translateY(-17px); opacity: 0.75; }
.nuda-dotted-ring span:nth-child(4) { transform: translate(-50%, -50%) rotate(135deg) translateY(-17px); opacity: 0.625; }
.nuda-dotted-ring span:nth-child(5) { transform: translate(-50%, -50%) rotate(180deg) translateY(-17px); opacity: 0.5; }
.nuda-dotted-ring span:nth-child(6) { transform: translate(-50%, -50%) rotate(225deg) translateY(-17px); opacity: 0.375; }
.nuda-dotted-ring span:nth-child(7) { transform: translate(-50%, -50%) rotate(270deg) translateY(-17px); opacity: 0.25; }
.nuda-dotted-ring span:nth-child(8) { transform: translate(-50%, -50%) rotate(315deg) translateY(-17px); opacity: 0.125; }

@keyframes nuda-dotted-ring {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dotted-ring {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Gear Spinner ─────────────── */
  {
    id: "gear-spinner",
    name: "Gear Spinner",
    category: "Spinners",
    preview: (
      <div className="nuda-gear-spinner" role="status" aria-label="Loading">
        <svg viewBox="0 0 50 50" width="40" height="40" className="nuda-gear-spinner__svg">
          <path
            d="M25,1 L28,8 L35,5 L34,13 L42,13 L37,19 L44,24 L37,28 L42,34 L34,34 L35,42 L28,39 L25,46 L22,39 L15,42 L16,34 L8,34 L13,28 L6,24 L13,19 L8,13 L16,13 L15,5 L22,8 Z"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <circle cx="25" cy="24" r="6" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-gear-spinner{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-gear-spinner__svg{animation:_gear 3s linear infinite}
      @keyframes _gear{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gear Spinner -->
<div class="nuda-gear-spinner" role="status" aria-label="Loading">
  <svg viewBox="0 0 50 50" width="40" height="40" class="nuda-gear-spinner__svg">
    <path
      d="M25,1 L28,8 L35,5 L34,13 L42,13 L37,19 L44,24 L37,28 L42,34 L34,34 L35,42 L28,39 L25,46 L22,39 L15,42 L16,34 L8,34 L13,28 L6,24 L13,19 L8,13 L16,13 L15,5 L22,8 Z"
      fill="none"
      stroke="#fbbf24"
      stroke-width="1.5"
    />
    <circle cx="25" cy="24" r="6" fill="none" stroke="#fbbf24" stroke-width="1.5" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gear Spinner
   SVG gear/cog shape rotating smoothly.
   Customize: --gear-color (set via SVG stroke attribute) */

.nuda-gear-spinner {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-gear-spinner__svg {
  animation: nuda-gear-spin 3s linear infinite;
  will-change: transform;
}

@keyframes nuda-gear-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gear-spinner__svg {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Square Spinner ─────────────── */
  {
    id: "square-spinner",
    name: "Square Spinner",
    category: "Spinners",
    preview: (
      <div className="nuda-square-spinner" role="status" aria-label="Loading">
        <div className="nuda-square-spinner__shape" />
      </div>
    ),
    cssInline: `
      .nuda-square-spinner{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-square-spinner__shape{width:28px;height:28px;background:#34d399;animation:_sqsp 1.8s ease-in-out infinite}
      @keyframes _sqsp{0%{transform:rotate(0deg);border-radius:0}25%{border-radius:50%;transform:rotate(90deg)}50%{border-radius:0;transform:rotate(180deg)}75%{border-radius:50%;transform:rotate(270deg)}100%{border-radius:0;transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Square Spinner -->
<div class="nuda-square-spinner" role="status" aria-label="Loading">
  <div class="nuda-square-spinner__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Square Spinner
   Square rotating while morphing between square and circle.
   Customize: --sq-spinner-color, --sq-spinner-size */

.nuda-square-spinner {
  --sq-spinner-color: #34d399;
  --sq-spinner-size: 28px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-square-spinner__shape {
  width: var(--sq-spinner-size);
  height: var(--sq-spinner-size);
  background: var(--sq-spinner-color);
  animation: nuda-square-spin 1.8s ease-in-out infinite;
  will-change: transform, border-radius;
}

@keyframes nuda-square-spin {
  0%   { transform: rotate(0deg);   border-radius: 0; }
  25%  { transform: rotate(90deg);  border-radius: 50%; }
  50%  { transform: rotate(180deg); border-radius: 0; }
  75%  { transform: rotate(270deg); border-radius: 50%; }
  100% { transform: rotate(360deg); border-radius: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-square-spinner__shape {
    animation: none;
    border-radius: 4px;
    opacity: 0.7;
  }
}`,
      },
    ],
  },

  /* ─────────────── 6. Triple Ring ─────────────── */
  {
    id: "triple-ring",
    name: "Triple Ring",
    category: "Spinners",
    preview: (
      <div className="nuda-triple-ring" role="status" aria-label="Loading">
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-triple-ring{position:relative;width:44px;height:44px;margin:8px}
      .nuda-triple-ring span{position:absolute;border-radius:50%;border:2px solid transparent}
      .nuda-triple-ring span:nth-child(1){inset:0;border-top-color:#818cf8;animation:_tr 1s linear infinite}
      .nuda-triple-ring span:nth-child(2){inset:5px;border-right-color:#f472b6;animation:_tr 1.5s linear infinite reverse}
      .nuda-triple-ring span:nth-child(3){inset:10px;border-bottom-color:#34d399;animation:_tr 2s linear infinite}
      @keyframes _tr{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Triple Ring Spinner -->
<div class="nuda-triple-ring" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Triple Ring Spinner
   Three concentric rings spinning at different speeds and directions.
   Customize: --tri-color-a, --tri-color-b, --tri-color-c, --tri-size */

.nuda-triple-ring {
  --tri-color-a: #818cf8;
  --tri-color-b: #f472b6;
  --tri-color-c: #34d399;
  --tri-size: 44px;
  position: relative;
  width: var(--tri-size);
  height: var(--tri-size);
}

.nuda-triple-ring span {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  will-change: transform;
}

.nuda-triple-ring span:nth-child(1) {
  inset: 0;
  border-top-color: var(--tri-color-a);
  animation: nuda-triple-ring 1s linear infinite;
}

.nuda-triple-ring span:nth-child(2) {
  inset: 5px;
  border-right-color: var(--tri-color-b);
  animation: nuda-triple-ring 1.5s linear infinite reverse;
}

.nuda-triple-ring span:nth-child(3) {
  inset: 10px;
  border-bottom-color: var(--tri-color-c);
  animation: nuda-triple-ring 2s linear infinite;
}

@keyframes nuda-triple-ring {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-triple-ring span {
    animation: none;
    opacity: 0.5;
  }
}`,
      },
    ],
  },

  /* ─────────────── 7. Arc Spinner ─────────────── */
  {
    id: "arc-spinner",
    name: "Arc Spinner",
    category: "Spinners",
    preview: (
      <div className="nuda-arc-spinner" role="status" aria-label="Loading">
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle className="nuda-arc-spinner__a" cx="25" cy="25" r="20" fill="none" strokeWidth="3" strokeLinecap="round" />
          <circle className="nuda-arc-spinner__b" cx="25" cy="25" r="13" fill="none" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-arc-spinner{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-arc-spinner svg{animation:_arcs 1.4s linear infinite}
      .nuda-arc-spinner__a{stroke:#818cf8;stroke-dasharray:60 66}
      .nuda-arc-spinner__b{stroke:#f472b6;stroke-dasharray:40 42;animation:_arci 1.4s linear infinite reverse}
      @keyframes _arcs{to{transform:rotate(360deg)}}
      @keyframes _arci{to{transform-origin:center;transform:rotate(-360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Arc Spinner -->
<div class="nuda-arc-spinner" role="status" aria-label="Loading">
  <svg viewBox="0 0 50 50" width="40" height="40">
    <circle class="nuda-arc-spinner__a" cx="25" cy="25" r="20"
      fill="none" stroke-width="3" stroke-linecap="round" />
    <circle class="nuda-arc-spinner__b" cx="25" cy="25" r="13"
      fill="none" stroke-width="3" stroke-linecap="round" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Arc Spinner
   Two SVG arcs chasing each other in opposite directions.
   Customize: --arc-color-a, --arc-color-b */

.nuda-arc-spinner {
  --arc-color-a: #818cf8;
  --arc-color-b: #f472b6;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-arc-spinner svg {
  animation: nuda-arc-outer 1.4s linear infinite;
  will-change: transform;
}

.nuda-arc-spinner__a {
  stroke: var(--arc-color-a);
  stroke-dasharray: 60 66;
}

.nuda-arc-spinner__b {
  stroke: var(--arc-color-b);
  stroke-dasharray: 40 42;
  transform-origin: center;
  animation: nuda-arc-inner 1.4s linear infinite reverse;
  will-change: transform;
}

@keyframes nuda-arc-outer {
  to { transform: rotate(360deg); }
}

@keyframes nuda-arc-inner {
  to { transform: rotate(-360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-arc-spinner svg,
  .nuda-arc-spinner__b {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 8. Flower Spinner ─────────────── */
  {
    id: "flower-spinner",
    name: "Flower Spinner",
    category: "Spinners",
    preview: (
      <div className="nuda-flower-spinner" role="status" aria-label="Loading">
        <span /><span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-flower-spinner{position:relative;width:40px;height:40px;margin:8px}
      .nuda-flower-spinner span{position:absolute;width:10px;height:10px;background:#f472b6;border-radius:50%;top:50%;left:50%;animation:_fl 1.8s ease-in-out infinite}
      .nuda-flower-spinner span:nth-child(1){transform:translate(-50%,-50%) rotate(0deg) translateY(-14px);animation-delay:0s}
      .nuda-flower-spinner span:nth-child(2){transform:translate(-50%,-50%) rotate(60deg) translateY(-14px);animation-delay:.15s}
      .nuda-flower-spinner span:nth-child(3){transform:translate(-50%,-50%) rotate(120deg) translateY(-14px);animation-delay:.3s}
      .nuda-flower-spinner span:nth-child(4){transform:translate(-50%,-50%) rotate(180deg) translateY(-14px);animation-delay:.45s}
      .nuda-flower-spinner span:nth-child(5){transform:translate(-50%,-50%) rotate(240deg) translateY(-14px);animation-delay:.6s}
      .nuda-flower-spinner span:nth-child(6){transform:translate(-50%,-50%) rotate(300deg) translateY(-14px);animation-delay:.75s}
      @keyframes _fl{0%,100%{transform:translate(-50%,-50%) rotate(var(--r,0deg)) translateY(-14px) scale(0);opacity:0}50%{transform:translate(-50%,-50%) rotate(var(--r,0deg)) translateY(-14px) scale(1);opacity:1}}
      .nuda-flower-spinner span:nth-child(1){--r:0deg}
      .nuda-flower-spinner span:nth-child(2){--r:60deg}
      .nuda-flower-spinner span:nth-child(3){--r:120deg}
      .nuda-flower-spinner span:nth-child(4){--r:180deg}
      .nuda-flower-spinner span:nth-child(5){--r:240deg}
      .nuda-flower-spinner span:nth-child(6){--r:300deg}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Flower Spinner -->
<div class="nuda-flower-spinner" role="status" aria-label="Loading">
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
        code: `/* Flower Spinner
   Six petals appearing and disappearing in a circular pattern.
   Customize: --flower-color, --flower-petal-size */

.nuda-flower-spinner {
  --flower-color: #f472b6;
  --flower-petal-size: 10px;
  position: relative;
  width: 40px;
  height: 40px;
}

.nuda-flower-spinner span {
  position: absolute;
  width: var(--flower-petal-size);
  height: var(--flower-petal-size);
  background: var(--flower-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  will-change: transform, opacity;
}

.nuda-flower-spinner span:nth-child(1) {
  animation: nuda-flower-petal-0 1.8s ease-in-out infinite 0s;
  transform: translate(-50%, -50%) rotate(0deg) translateY(-14px);
}
.nuda-flower-spinner span:nth-child(2) {
  animation: nuda-flower-petal-60 1.8s ease-in-out infinite 0.15s;
  transform: translate(-50%, -50%) rotate(60deg) translateY(-14px);
}
.nuda-flower-spinner span:nth-child(3) {
  animation: nuda-flower-petal-120 1.8s ease-in-out infinite 0.3s;
  transform: translate(-50%, -50%) rotate(120deg) translateY(-14px);
}
.nuda-flower-spinner span:nth-child(4) {
  animation: nuda-flower-petal-180 1.8s ease-in-out infinite 0.45s;
  transform: translate(-50%, -50%) rotate(180deg) translateY(-14px);
}
.nuda-flower-spinner span:nth-child(5) {
  animation: nuda-flower-petal-240 1.8s ease-in-out infinite 0.6s;
  transform: translate(-50%, -50%) rotate(240deg) translateY(-14px);
}
.nuda-flower-spinner span:nth-child(6) {
  animation: nuda-flower-petal-300 1.8s ease-in-out infinite 0.75s;
  transform: translate(-50%, -50%) rotate(300deg) translateY(-14px);
}

@keyframes nuda-flower-petal-0 {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(-14px) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) rotate(0deg) translateY(-14px) scale(1); opacity: 1; }
}
@keyframes nuda-flower-petal-60 {
  0%, 100% { transform: translate(-50%, -50%) rotate(60deg) translateY(-14px) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) rotate(60deg) translateY(-14px) scale(1); opacity: 1; }
}
@keyframes nuda-flower-petal-120 {
  0%, 100% { transform: translate(-50%, -50%) rotate(120deg) translateY(-14px) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) rotate(120deg) translateY(-14px) scale(1); opacity: 1; }
}
@keyframes nuda-flower-petal-180 {
  0%, 100% { transform: translate(-50%, -50%) rotate(180deg) translateY(-14px) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) rotate(180deg) translateY(-14px) scale(1); opacity: 1; }
}
@keyframes nuda-flower-petal-240 {
  0%, 100% { transform: translate(-50%, -50%) rotate(240deg) translateY(-14px) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) rotate(240deg) translateY(-14px) scale(1); opacity: 1; }
}
@keyframes nuda-flower-petal-300 {
  0%, 100% { transform: translate(-50%, -50%) rotate(300deg) translateY(-14px) scale(0); opacity: 0; }
  50%      { transform: translate(-50%, -50%) rotate(300deg) translateY(-14px) scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-flower-spinner span {
    animation: none;
    opacity: 0.5;
  }
}`,
      },
    ],
  },
];
