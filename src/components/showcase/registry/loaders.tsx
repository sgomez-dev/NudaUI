import type { NudaComponent } from "./types";

export const loaders: NudaComponent[] = [
  /* ─────────────── 1. Pulse Dots ─────────────── */
  {
    id: "pulse-dots",
    name: "Pulse Dots",
    category: "Loaders",
    preview: (
      <div className="nuda-pulse-dots" role="status" aria-label="Loading">
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-pulse-dots{display:flex;align-items:center;gap:6px;padding:8px}
      .nuda-pulse-dots span{width:12px;height:12px;background:var(--c,#a78bfa);border-radius:50%;animation:_pd 1.4s ease-in-out infinite}
      .nuda-pulse-dots span:nth-child(2){animation-delay:.2s}
      .nuda-pulse-dots span:nth-child(3){animation-delay:.4s}
      @keyframes _pd{0%,80%,100%{transform:scale(.4);opacity:.3}40%{transform:scale(1);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pulse Dots Loader -->
<div class="nuda-pulse-dots" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pulse Dots Loader
   Three dots pulsing in sequence.
   Customize: --pulse-dots-color, --pulse-dots-size */

.nuda-pulse-dots {
  --pulse-dots-color: #a78bfa;
  --pulse-dots-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
}

.nuda-pulse-dots span {
  width: var(--pulse-dots-size);
  height: var(--pulse-dots-size);
  background: var(--pulse-dots-color);
  border-radius: 50%;
  animation: nuda-pulse-dots 1.4s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-pulse-dots span:nth-child(2) { animation-delay: 0.2s; }
.nuda-pulse-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes nuda-pulse-dots {
  0%, 80%, 100% {
    transform: scale(0.4);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pulse-dots span {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Wave Bars ─────────────── */
  {
    id: "wave-bars",
    name: "Wave Bars",
    category: "Loaders",
    preview: (
      <div className="nuda-wave-bars" role="status" aria-label="Loading">
        <span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-wave-bars{display:flex;align-items:center;gap:3px;height:32px;padding:8px}
      .nuda-wave-bars span{width:4px;background:var(--c,#60a5fa);border-radius:2px;animation:_wb 1.2s ease-in-out infinite}
      .nuda-wave-bars span:nth-child(1){animation-delay:0s}
      .nuda-wave-bars span:nth-child(2){animation-delay:.1s}
      .nuda-wave-bars span:nth-child(3){animation-delay:.2s}
      .nuda-wave-bars span:nth-child(4){animation-delay:.3s}
      .nuda-wave-bars span:nth-child(5){animation-delay:.4s}
      @keyframes _wb{0%,100%{height:8px;opacity:.4}50%{height:28px;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Wave Bars Loader -->
<div class="nuda-wave-bars" role="status" aria-label="Loading">
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
        code: `/* Wave Bars Loader
   Five bars waving up and down in sequence.
   Customize: --wave-bars-color, --wave-bars-width */

.nuda-wave-bars {
  --wave-bars-color: #60a5fa;
  --wave-bars-width: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  height: 32px;
  padding: 8px;
}

.nuda-wave-bars span {
  width: var(--wave-bars-width);
  background: var(--wave-bars-color);
  border-radius: 2px;
  animation: nuda-wave-bars 1.2s ease-in-out infinite;
  will-change: height, opacity;
}

.nuda-wave-bars span:nth-child(1) { animation-delay: 0s; }
.nuda-wave-bars span:nth-child(2) { animation-delay: 0.1s; }
.nuda-wave-bars span:nth-child(3) { animation-delay: 0.2s; }
.nuda-wave-bars span:nth-child(4) { animation-delay: 0.3s; }
.nuda-wave-bars span:nth-child(5) { animation-delay: 0.4s; }

@keyframes nuda-wave-bars {
  0%, 100% {
    height: 8px;
    opacity: 0.4;
  }
  50% {
    height: 28px;
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-wave-bars span {
    animation: none;
    height: 16px;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. Morph Blob ─────────────── */
  {
    id: "morph-blob",
    name: "Morph Blob",
    category: "Loaders",
    preview: (
      <div className="nuda-morph-blob" role="status" aria-label="Loading">
        <div className="nuda-morph-blob__shape" />
      </div>
    ),
    cssInline: `
      .nuda-morph-blob{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-morph-blob__shape{width:48px;height:48px;background:linear-gradient(135deg,#f472b6,#a78bfa);animation:_mb 3s ease-in-out infinite}
      @keyframes _mb{0%{border-radius:40% 60% 60% 40%/60% 30% 70% 40%;transform:rotate(0deg)}33%{border-radius:60% 40% 30% 70%/40% 60% 50% 50%;transform:rotate(120deg)}66%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;transform:rotate(240deg)}100%{border-radius:40% 60% 60% 40%/60% 30% 70% 40%;transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Morph Blob Loader -->
<div class="nuda-morph-blob" role="status" aria-label="Loading">
  <div class="nuda-morph-blob__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Morph Blob Loader
   Shape morphing between organic forms.
   Customize: --blob-size, --blob-gradient-start, --blob-gradient-end */

.nuda-morph-blob {
  --blob-size: 48px;
  --blob-gradient-start: #f472b6;
  --blob-gradient-end: #a78bfa;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-morph-blob__shape {
  width: var(--blob-size);
  height: var(--blob-size);
  background: linear-gradient(135deg, var(--blob-gradient-start), var(--blob-gradient-end));
  animation: nuda-morph-blob 3s ease-in-out infinite;
  will-change: border-radius, transform;
}

@keyframes nuda-morph-blob {
  0% {
    border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    transform: rotate(0deg);
  }
  33% {
    border-radius: 60% 40% 30% 70% / 40% 60% 50% 50%;
    transform: rotate(120deg);
  }
  66% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(240deg);
  }
  100% {
    border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-blob__shape {
    animation: none;
    border-radius: 50%;
    opacity: 0.7;
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Bouncing Balls ─────────────── */
  {
    id: "bouncing-balls",
    name: "Bouncing Balls",
    category: "Loaders",
    preview: (
      <div className="nuda-bouncing-balls" role="status" aria-label="Loading">
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-bouncing-balls{display:flex;align-items:flex-end;gap:6px;height:40px;padding:8px}
      .nuda-bouncing-balls span{width:10px;height:10px;background:var(--c,#34d399);border-radius:50%;animation:_bb 1.4s ease infinite}
      .nuda-bouncing-balls span:nth-child(2){animation-delay:.2s}
      .nuda-bouncing-balls span:nth-child(3){animation-delay:.4s}
      @keyframes _bb{0%,100%{transform:translateY(0)}30%{transform:translateY(-24px)}50%{transform:translateY(0)}65%{transform:translateY(-8px)}80%{transform:translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bouncing Balls Loader -->
<div class="nuda-bouncing-balls" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bouncing Balls Loader
   Three balls bouncing in sequence with eased physics.
   Customize: --bounce-color, --bounce-size */

.nuda-bouncing-balls {
  --bounce-color: #34d399;
  --bounce-size: 10px;
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 40px;
  padding: 8px;
}

.nuda-bouncing-balls span {
  width: var(--bounce-size);
  height: var(--bounce-size);
  background: var(--bounce-color);
  border-radius: 50%;
  animation: nuda-bouncing-balls 1.4s ease infinite;
  will-change: transform;
}

.nuda-bouncing-balls span:nth-child(2) { animation-delay: 0.2s; }
.nuda-bouncing-balls span:nth-child(3) { animation-delay: 0.4s; }

@keyframes nuda-bouncing-balls {
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-24px);
  }
  50% {
    transform: translateY(0);
  }
  65% {
    transform: translateY(-8px);
  }
  80% {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bouncing-balls span {
    animation: none;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Rotating Squares ─────────────── */
  {
    id: "rotating-squares",
    name: "Rotating Squares",
    category: "Loaders",
    preview: (
      <div className="nuda-rotating-squares" role="status" aria-label="Loading">
        <span /><span />
      </div>
    ),
    cssInline: `
      .nuda-rotating-squares{position:relative;width:40px;height:40px;margin:8px}
      .nuda-rotating-squares span{position:absolute;width:18px;height:18px;border-radius:3px}
      .nuda-rotating-squares span:nth-child(1){background:#818cf8;animation:_rs1 1.8s ease-in-out infinite}
      .nuda-rotating-squares span:nth-child(2){background:#f472b6;animation:_rs2 1.8s ease-in-out infinite}
      @keyframes _rs1{0%{top:0;left:0;transform:rotate(0)}50%{top:22px;left:22px;transform:rotate(180deg)}100%{top:0;left:0;transform:rotate(360deg)}}
      @keyframes _rs2{0%{top:22px;left:22px;transform:rotate(0)}50%{top:0;left:0;transform:rotate(180deg)}100%{top:22px;left:22px;transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Rotating Squares Loader -->
<div class="nuda-rotating-squares" role="status" aria-label="Loading">
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Rotating Squares Loader
   Two squares rotating around each other.
   Customize: --sq-color-a, --sq-color-b, --sq-size */

.nuda-rotating-squares {
  --sq-color-a: #818cf8;
  --sq-color-b: #f472b6;
  --sq-size: 18px;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 8px;
}

.nuda-rotating-squares span {
  position: absolute;
  width: var(--sq-size);
  height: var(--sq-size);
  border-radius: 3px;
  will-change: transform;
}

.nuda-rotating-squares span:nth-child(1) {
  background: var(--sq-color-a);
  animation: nuda-rot-sq-a 1.8s ease-in-out infinite;
}

.nuda-rotating-squares span:nth-child(2) {
  background: var(--sq-color-b);
  animation: nuda-rot-sq-b 1.8s ease-in-out infinite;
}

@keyframes nuda-rot-sq-a {
  0%   { top: 0; left: 0; transform: rotate(0deg); }
  50%  { top: 22px; left: 22px; transform: rotate(180deg); }
  100% { top: 0; left: 0; transform: rotate(360deg); }
}

@keyframes nuda-rot-sq-b {
  0%   { top: 22px; left: 22px; transform: rotate(0deg); }
  50%  { top: 0; left: 0; transform: rotate(180deg); }
  100% { top: 22px; left: 22px; transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-rotating-squares span {
    animation: none;
    opacity: 0.6;
  }
  .nuda-rotating-squares span:nth-child(1) { top: 0; left: 0; }
  .nuda-rotating-squares span:nth-child(2) { top: 22px; left: 22px; }
}`,
      },
    ],
  },

  /* ─────────────── 6. DNA Helix ─────────────── */
  {
    id: "dna-helix",
    name: "DNA Helix",
    category: "Loaders",
    preview: (
      <div className="nuda-dna-helix" role="status" aria-label="Loading">
        <span /><span /><span /><span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-dna-helix{display:flex;gap:4px;align-items:center;height:40px;padding:8px}
      .nuda-dna-helix span{width:6px;height:6px;border-radius:50%;animation:_dna 1.6s ease-in-out infinite}
      .nuda-dna-helix span:nth-child(odd){background:#818cf8}
      .nuda-dna-helix span:nth-child(even){background:#f472b6}
      .nuda-dna-helix span:nth-child(1){animation-delay:0s}
      .nuda-dna-helix span:nth-child(2){animation-delay:0s;animation-name:_dna2}
      .nuda-dna-helix span:nth-child(3){animation-delay:.2s}
      .nuda-dna-helix span:nth-child(4){animation-delay:.2s;animation-name:_dna2}
      .nuda-dna-helix span:nth-child(5){animation-delay:.4s}
      .nuda-dna-helix span:nth-child(6){animation-delay:.4s;animation-name:_dna2}
      .nuda-dna-helix span:nth-child(7){animation-delay:.6s}
      .nuda-dna-helix span:nth-child(8){animation-delay:.6s;animation-name:_dna2}
      @keyframes _dna{0%,100%{transform:translateY(-12px) scale(1);opacity:1}50%{transform:translateY(12px) scale(.6);opacity:.4}}
      @keyframes _dna2{0%,100%{transform:translateY(12px) scale(.6);opacity:.4}50%{transform:translateY(-12px) scale(1);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- DNA Helix Loader -->
<div class="nuda-dna-helix" role="status" aria-label="Loading">
  <span></span><span></span>
  <span></span><span></span>
  <span></span><span></span>
  <span></span><span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* DNA Helix Loader
   Dots moving in a double helix pattern (paired dots move inversely).
   Customize: --dna-color-a, --dna-color-b, --dna-dot-size */

.nuda-dna-helix {
  --dna-color-a: #818cf8;
  --dna-color-b: #f472b6;
  --dna-dot-size: 6px;
  display: flex;
  gap: 4px;
  align-items: center;
  height: 40px;
  padding: 8px;
}

.nuda-dna-helix span {
  width: var(--dna-dot-size);
  height: var(--dna-dot-size);
  border-radius: 50%;
  animation: nuda-dna-strand-a 1.6s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-dna-helix span:nth-child(odd) { background: var(--dna-color-a); }
.nuda-dna-helix span:nth-child(even) { background: var(--dna-color-b); }

/* Pair delays — each pair offset by 0.2s */
.nuda-dna-helix span:nth-child(1) { animation-delay: 0s; }
.nuda-dna-helix span:nth-child(2) { animation-delay: 0s; animation-name: nuda-dna-strand-b; }
.nuda-dna-helix span:nth-child(3) { animation-delay: 0.2s; }
.nuda-dna-helix span:nth-child(4) { animation-delay: 0.2s; animation-name: nuda-dna-strand-b; }
.nuda-dna-helix span:nth-child(5) { animation-delay: 0.4s; }
.nuda-dna-helix span:nth-child(6) { animation-delay: 0.4s; animation-name: nuda-dna-strand-b; }
.nuda-dna-helix span:nth-child(7) { animation-delay: 0.6s; }
.nuda-dna-helix span:nth-child(8) { animation-delay: 0.6s; animation-name: nuda-dna-strand-b; }

@keyframes nuda-dna-strand-a {
  0%, 100% { transform: translateY(-12px) scale(1); opacity: 1; }
  50%      { transform: translateY(12px) scale(0.6); opacity: 0.4; }
}

@keyframes nuda-dna-strand-b {
  0%, 100% { transform: translateY(12px) scale(0.6); opacity: 0.4; }
  50%      { transform: translateY(-12px) scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dna-helix span {
    animation: none;
    opacity: 0.6;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 7. Clock Sweep ─────────────── */
  {
    id: "clock-sweep",
    name: "Clock Sweep",
    category: "Loaders",
    preview: (
      <div className="nuda-clock-sweep" role="status" aria-label="Loading">
        <div className="nuda-clock-sweep__hand" />
      </div>
    ),
    cssInline: `
      .nuda-clock-sweep{width:40px;height:40px;border-radius:50%;border:2px solid rgba(255,255,255,.2);position:relative;margin:8px}
      .nuda-clock-sweep__hand{position:absolute;top:50%;left:50%;width:2px;height:16px;background:#60a5fa;border-radius:1px;transform-origin:50% 0%;animation:_cs 2s linear infinite}
      @keyframes _cs{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Clock Sweep Loader -->
<div class="nuda-clock-sweep" role="status" aria-label="Loading">
  <div class="nuda-clock-sweep__hand"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Clock Sweep Loader
   A hand sweeping around a clock face.
   Customize: --clock-size, --clock-color, --clock-border-color */

.nuda-clock-sweep {
  --clock-size: 40px;
  --clock-color: #60a5fa;
  --clock-border-color: rgba(255, 255, 255, 0.2);
  width: var(--clock-size);
  height: var(--clock-size);
  border-radius: 50%;
  border: 2px solid var(--clock-border-color);
  position: relative;
}

.nuda-clock-sweep__hand {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 40%;
  background: var(--clock-color);
  border-radius: 1px;
  transform-origin: 50% 0%;
  animation: nuda-clock-sweep 2s linear infinite;
  will-change: transform;
}

@keyframes nuda-clock-sweep {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-clock-sweep__hand {
    animation: none;
    transform: rotate(45deg);
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 8. Infinity Loop ─────────────── */
  {
    id: "infinity-loop",
    name: "Infinity Loop",
    category: "Loaders",
    preview: (
      <div className="nuda-infinity-loop" role="status" aria-label="Loading">
        <svg viewBox="0 0 100 50" width="64" height="32">
          <path
            className="nuda-infinity-loop__path"
            d="M25,25 C25,10 0,10 0,25 C0,40 25,40 25,25 C25,10 50,10 50,25 C50,40 25,40 25,25"
            fill="none"
            strokeWidth="3"
            transform="translate(25, 0)"
          />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-infinity-loop{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-infinity-loop__path{stroke:#a78bfa;stroke-dasharray:120;stroke-dashoffset:0;stroke-linecap:round;animation:_il 2s linear infinite}
      @keyframes _il{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-240}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Infinity Loop Loader -->
<div class="nuda-infinity-loop" role="status" aria-label="Loading">
  <svg viewBox="0 0 100 50" width="64" height="32">
    <path
      class="nuda-infinity-loop__path"
      d="M25,25 C25,10 0,10 0,25 C0,40 25,40 25,25 C25,10 50,10 50,25 C50,40 25,40 25,25"
      fill="none"
      stroke-width="3"
      transform="translate(25, 0)"
    />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Infinity Loop Loader
   A figure-8 / infinity path animation using SVG stroke-dashoffset.
   Customize: --infinity-color, --infinity-stroke */

.nuda-infinity-loop {
  --infinity-color: #a78bfa;
  --infinity-stroke: 3;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-infinity-loop__path {
  stroke: var(--infinity-color);
  stroke-dasharray: 120;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: var(--infinity-stroke);
  animation: nuda-infinity-loop 2s linear infinite;
}

@keyframes nuda-infinity-loop {
  0%   { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -240; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-infinity-loop__path {
    animation: none;
    stroke-dashoffset: 0;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 9. Cube Flip ─────────────── */
  {
    id: "cube-flip",
    name: "Cube Flip",
    category: "Loaders",
    preview: (
      <div className="nuda-cube-flip" role="status" aria-label="Loading">
        <div className="nuda-cube-flip__cube" />
      </div>
    ),
    cssInline: `
      .nuda-cube-flip{perspective:200px;padding:16px;display:flex;align-items:center;justify-content:center}
      .nuda-cube-flip__cube{width:32px;height:32px;background:#f472b6;border-radius:4px;animation:_cf 1.8s ease-in-out infinite}
      @keyframes _cf{0%{transform:rotateX(0) rotateY(0)}25%{transform:rotateX(180deg) rotateY(0)}50%{transform:rotateX(180deg) rotateY(180deg)}75%{transform:rotateX(0) rotateY(180deg)}100%{transform:rotateX(0) rotateY(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Cube Flip Loader -->
<div class="nuda-cube-flip" role="status" aria-label="Loading">
  <div class="nuda-cube-flip__cube"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cube Flip Loader
   A 3D cube flipping on its axes.
   Customize: --cube-size, --cube-color */

.nuda-cube-flip {
  --cube-size: 32px;
  --cube-color: #f472b6;
  perspective: 200px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-cube-flip__cube {
  width: var(--cube-size);
  height: var(--cube-size);
  background: var(--cube-color);
  border-radius: 4px;
  animation: nuda-cube-flip 1.8s ease-in-out infinite;
  will-change: transform;
}

@keyframes nuda-cube-flip {
  0%   { transform: rotateX(0deg)   rotateY(0deg); }
  25%  { transform: rotateX(180deg) rotateY(0deg); }
  50%  { transform: rotateX(180deg) rotateY(180deg); }
  75%  { transform: rotateX(0deg)   rotateY(180deg); }
  100% { transform: rotateX(0deg)   rotateY(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cube-flip__cube {
    animation: none;
    opacity: 0.7;
  }
}`,
      },
    ],
  },

  /* ─────────────── 10. Dots Grid ─────────────── */
  {
    id: "dots-grid",
    name: "Dots Grid",
    category: "Loaders",
    preview: (
      <div className="nuda-dots-grid" role="status" aria-label="Loading">
        <span /><span /><span />
        <span /><span /><span />
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-dots-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;width:fit-content;padding:8px}
      .nuda-dots-grid span{width:8px;height:8px;background:var(--c,#60a5fa);border-radius:50%;animation:_dg 1.5s ease-in-out infinite}
      .nuda-dots-grid span:nth-child(1){animation-delay:0s}
      .nuda-dots-grid span:nth-child(2){animation-delay:.1s}
      .nuda-dots-grid span:nth-child(3){animation-delay:.2s}
      .nuda-dots-grid span:nth-child(4){animation-delay:.1s}
      .nuda-dots-grid span:nth-child(5){animation-delay:.2s}
      .nuda-dots-grid span:nth-child(6){animation-delay:.3s}
      .nuda-dots-grid span:nth-child(7){animation-delay:.2s}
      .nuda-dots-grid span:nth-child(8){animation-delay:.3s}
      .nuda-dots-grid span:nth-child(9){animation-delay:.4s}
      @keyframes _dg{0%,100%{transform:scale(.3);opacity:.2}50%{transform:scale(1);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Dots Grid Loader -->
<div class="nuda-dots-grid" role="status" aria-label="Loading">
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
  <span></span><span></span><span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dots Grid Loader
   3x3 grid of dots pulsing in a diagonal wave pattern.
   Customize: --grid-dot-color, --grid-dot-size */

.nuda-dots-grid {
  --grid-dot-color: #60a5fa;
  --grid-dot-size: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: fit-content;
  padding: 8px;
}

.nuda-dots-grid span {
  width: var(--grid-dot-size);
  height: var(--grid-dot-size);
  background: var(--grid-dot-color);
  border-radius: 50%;
  animation: nuda-dots-grid 1.5s ease-in-out infinite;
  will-change: transform, opacity;
}

/* Diagonal wave: delay = (row + col) * 0.1s */
.nuda-dots-grid span:nth-child(1) { animation-delay: 0s; }
.nuda-dots-grid span:nth-child(2) { animation-delay: 0.1s; }
.nuda-dots-grid span:nth-child(3) { animation-delay: 0.2s; }
.nuda-dots-grid span:nth-child(4) { animation-delay: 0.1s; }
.nuda-dots-grid span:nth-child(5) { animation-delay: 0.2s; }
.nuda-dots-grid span:nth-child(6) { animation-delay: 0.3s; }
.nuda-dots-grid span:nth-child(7) { animation-delay: 0.2s; }
.nuda-dots-grid span:nth-child(8) { animation-delay: 0.3s; }
.nuda-dots-grid span:nth-child(9) { animation-delay: 0.4s; }

@keyframes nuda-dots-grid {
  0%, 100% {
    transform: scale(0.3);
    opacity: 0.2;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dots-grid span {
    animation: none;
    opacity: 0.5;
    transform: scale(0.8);
  }
}`,
      },
    ],
  },

  /* ─────────────── 11. Line Bounce ─────────────── */
  {
    id: "line-bounce",
    name: "Line Bounce",
    category: "Loaders",
    preview: (
      <div className="nuda-line-bounce" role="status" aria-label="Loading">
        <div className="nuda-line-bounce__line" />
      </div>
    ),
    cssInline: `
      .nuda-line-bounce{width:60px;height:4px;background:rgba(255,255,255,.1);border-radius:2px;position:relative;overflow:hidden;margin:8px}
      .nuda-line-bounce__line{position:absolute;top:0;left:0;width:20px;height:100%;background:#a78bfa;border-radius:2px;animation:_lb 1.4s ease-in-out infinite}
      @keyframes _lb{0%{left:0}50%{left:calc(100% - 20px)}100%{left:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Line Bounce Loader -->
<div class="nuda-line-bounce" role="status" aria-label="Loading">
  <div class="nuda-line-bounce__line"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Line Bounce Loader
   A horizontal line bouncing between two endpoints.
   Customize: --line-track-width, --line-color, --line-track-color */

.nuda-line-bounce {
  --line-track-width: 60px;
  --line-color: #a78bfa;
  --line-track-color: rgba(255, 255, 255, 0.1);
  width: var(--line-track-width);
  height: 4px;
  background: var(--line-track-color);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.nuda-line-bounce__line {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 100%;
  background: var(--line-color);
  border-radius: 2px;
  animation: nuda-line-bounce 1.4s ease-in-out infinite;
  will-change: left;
}

@keyframes nuda-line-bounce {
  0%   { left: 0; }
  50%  { left: calc(100% - 20px); }
  100% { left: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-line-bounce__line {
    animation: none;
    left: 0;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 12. Atom Orbit ─────────────── */
  {
    id: "atom-orbit",
    name: "Atom Orbit",
    category: "Loaders",
    preview: (
      <div className="nuda-atom-orbit" role="status" aria-label="Loading">
        <div className="nuda-atom-orbit__nucleus" />
        <div className="nuda-atom-orbit__ring nuda-atom-orbit__ring--a" />
        <div className="nuda-atom-orbit__ring nuda-atom-orbit__ring--b" />
        <div className="nuda-atom-orbit__ring nuda-atom-orbit__ring--c" />
      </div>
    ),
    cssInline: `
      .nuda-atom-orbit{position:relative;width:48px;height:48px;margin:8px}
      .nuda-atom-orbit__nucleus{position:absolute;top:50%;left:50%;width:8px;height:8px;background:#f472b6;border-radius:50%;transform:translate(-50%,-50%)}
      .nuda-atom-orbit__ring{position:absolute;inset:0;border:1.5px solid transparent;border-top-color:#818cf8;border-radius:50%;animation:_ao 1.5s linear infinite}
      .nuda-atom-orbit__ring--a{transform:rotate(0deg)}
      .nuda-atom-orbit__ring--b{transform:rotate(60deg);animation-delay:.2s}
      .nuda-atom-orbit__ring--c{transform:rotate(120deg);animation-delay:.4s}
      @keyframes _ao{0%{transform:rotate(var(--r,0deg))}100%{transform:rotate(calc(var(--r,0deg) + 360deg))}}
      .nuda-atom-orbit__ring--a{--r:0deg}.nuda-atom-orbit__ring--b{--r:60deg}.nuda-atom-orbit__ring--c{--r:120deg}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Atom Orbit Loader -->
<div class="nuda-atom-orbit" role="status" aria-label="Loading">
  <div class="nuda-atom-orbit__nucleus"></div>
  <div class="nuda-atom-orbit__ring nuda-atom-orbit__ring--a"></div>
  <div class="nuda-atom-orbit__ring nuda-atom-orbit__ring--b"></div>
  <div class="nuda-atom-orbit__ring nuda-atom-orbit__ring--c"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Atom Orbit Loader
   Electrons orbiting a nucleus on three tilted planes.
   Customize: --atom-size, --atom-nucleus-color, --atom-ring-color */

.nuda-atom-orbit {
  --atom-size: 48px;
  --atom-nucleus-color: #f472b6;
  --atom-ring-color: #818cf8;
  position: relative;
  width: var(--atom-size);
  height: var(--atom-size);
}

.nuda-atom-orbit__nucleus {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--atom-nucleus-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.nuda-atom-orbit__ring {
  position: absolute;
  inset: 0;
  border: 1.5px solid transparent;
  border-top-color: var(--atom-ring-color);
  border-radius: 50%;
  will-change: transform;
}

.nuda-atom-orbit__ring--a {
  animation: nuda-atom-orbit-a 1.5s linear infinite;
}

.nuda-atom-orbit__ring--b {
  animation: nuda-atom-orbit-b 1.5s linear infinite;
  animation-delay: 0.2s;
}

.nuda-atom-orbit__ring--c {
  animation: nuda-atom-orbit-c 1.5s linear infinite;
  animation-delay: 0.4s;
}

@keyframes nuda-atom-orbit-a {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes nuda-atom-orbit-b {
  0%   { transform: rotate(60deg); }
  100% { transform: rotate(420deg); }
}

@keyframes nuda-atom-orbit-c {
  0%   { transform: rotate(120deg); }
  100% { transform: rotate(480deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-atom-orbit__ring {
    animation: none;
    opacity: 0.5;
  }
  .nuda-atom-orbit__ring--a { transform: rotate(0deg); }
  .nuda-atom-orbit__ring--b { transform: rotate(60deg); }
  .nuda-atom-orbit__ring--c { transform: rotate(120deg); }
}`,
      },
    ],
  },

  /* ─────────────── 13. Heartbeat ─────────────── */
  {
    id: "heartbeat",
    name: "Heartbeat",
    category: "Loaders",
    preview: (
      <div className="nuda-heartbeat" role="status" aria-label="Loading">
        <svg viewBox="0 0 120 40" width="120" height="40">
          <polyline
            className="nuda-heartbeat__line"
            points="0,20 20,20 30,20 38,5 45,35 52,15 58,20 80,20 90,20 98,5 105,35 112,15 118,20 120,20"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-heartbeat{padding:8px;display:flex;align-items:center}
      .nuda-heartbeat__line{stroke:#ef4444;stroke-dasharray:200;stroke-dashoffset:200;animation:_hb 2s linear infinite}
      @keyframes _hb{0%{stroke-dashoffset:200}100%{stroke-dashoffset:-200}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Heartbeat Loader -->
<div class="nuda-heartbeat" role="status" aria-label="Loading">
  <svg viewBox="0 0 120 40" width="120" height="40">
    <polyline
      class="nuda-heartbeat__line"
      points="0,20 20,20 30,20 38,5 45,35 52,15 58,20 80,20 90,20 98,5 105,35 112,15 118,20 120,20"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Heartbeat Loader
   ECG heartbeat line animation using SVG stroke-dashoffset.
   Customize: --heartbeat-color, --heartbeat-stroke */

.nuda-heartbeat {
  --heartbeat-color: #ef4444;
  --heartbeat-stroke: 2;
  padding: 8px;
  display: flex;
  align-items: center;
}

.nuda-heartbeat__line {
  stroke: var(--heartbeat-color);
  stroke-width: var(--heartbeat-stroke);
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: nuda-heartbeat 2s linear infinite;
}

@keyframes nuda-heartbeat {
  0%   { stroke-dashoffset: 200; }
  100% { stroke-dashoffset: -200; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-heartbeat__line {
    animation: none;
    stroke-dashoffset: 0;
    opacity: 0.6;
  }
}`,
      },
    ],
  },

  /* ─────────────── 14. Hourglass ─────────────── */
  {
    id: "hourglass",
    name: "Hourglass",
    category: "Loaders",
    preview: (
      <div className="nuda-hourglass" role="status" aria-label="Loading">
        <div className="nuda-hourglass__shape" />
      </div>
    ),
    cssInline: `
      .nuda-hourglass{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-hourglass__shape{width:24px;height:36px;position:relative;animation:_hg 2s ease-in-out infinite}
      .nuda-hourglass__shape::before,.nuda-hourglass__shape::after{content:'';position:absolute;left:0;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent}
      .nuda-hourglass__shape::before{top:0;border-top:16px solid #fbbf24}
      .nuda-hourglass__shape::after{bottom:0;border-bottom:16px solid #fbbf24}
      @keyframes _hg{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Hourglass Loader -->
<div class="nuda-hourglass" role="status" aria-label="Loading">
  <div class="nuda-hourglass__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Hourglass Loader
   Rotating hourglass shape using CSS triangles.
   Customize: --hourglass-color, --hourglass-size */

.nuda-hourglass {
  --hourglass-color: #fbbf24;
  --hourglass-size: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-hourglass__shape {
  width: calc(var(--hourglass-size) * 2);
  height: calc(var(--hourglass-size) * 3);
  position: relative;
  animation: nuda-hourglass 2s ease-in-out infinite;
  will-change: transform;
}

.nuda-hourglass__shape::before,
.nuda-hourglass__shape::after {
  content: '';
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: var(--hourglass-size) solid transparent;
  border-right: var(--hourglass-size) solid transparent;
}

.nuda-hourglass__shape::before {
  top: 0;
  border-top: calc(var(--hourglass-size) * 1.33) solid var(--hourglass-color);
}

.nuda-hourglass__shape::after {
  bottom: 0;
  border-bottom: calc(var(--hourglass-size) * 1.33) solid var(--hourglass-color);
}

@keyframes nuda-hourglass {
  0%   { transform: rotate(0deg); }
  50%  { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hourglass__shape {
    animation: none;
    opacity: 0.7;
  }
}`,
      },
    ],
  },

  /* ─────────────── 15. Newton Cradle ─────────────── */
  {
    id: "newton-cradle",
    name: "Newton Cradle",
    category: "Loaders",
    preview: (
      <div className="nuda-newton-cradle" role="status" aria-label="Loading">
        <span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-newton-cradle{display:flex;align-items:flex-start;gap:0;height:48px;padding:8px 16px}
      .nuda-newton-cradle span{display:block;width:12px;height:40px;border-top:2px solid rgba(255,255,255,.3);position:relative;transform-origin:top center}
      .nuda-newton-cradle span::after{content:'';position:absolute;bottom:0;left:50%;width:10px;height:10px;background:#818cf8;border-radius:50%;transform:translateX(-50%)}
      .nuda-newton-cradle span:first-child{animation:_nc-r 1.2s ease-in-out infinite}
      .nuda-newton-cradle span:last-child{animation:_nc-l 1.2s ease-in-out infinite}
      @keyframes _nc-l{0%,50%{transform:rotate(0deg)}25%{transform:rotate(-30deg)}}
      @keyframes _nc-r{0%,50%{transform:rotate(0deg)}75%{transform:rotate(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Newton Cradle Loader -->
<div class="nuda-newton-cradle" role="status" aria-label="Loading">
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
        code: `/* Newton Cradle Loader
   Pendulum ball physics animation (Newton's cradle).
   Customize: --cradle-color, --cradle-ball-size, --cradle-string-color */

.nuda-newton-cradle {
  --cradle-color: #818cf8;
  --cradle-ball-size: 10px;
  --cradle-string-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: flex-start;
  gap: 0;
  height: 48px;
  padding: 8px 16px;
}

.nuda-newton-cradle span {
  display: block;
  width: calc(var(--cradle-ball-size) + 2px);
  height: 40px;
  border-top: 2px solid var(--cradle-string-color);
  position: relative;
  transform-origin: top center;
}

.nuda-newton-cradle span::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: var(--cradle-ball-size);
  height: var(--cradle-ball-size);
  background: var(--cradle-color);
  border-radius: 50%;
  transform: translateX(-50%);
}

.nuda-newton-cradle span:first-child {
  animation: nuda-newton-right 1.2s ease-in-out infinite;
  will-change: transform;
}

.nuda-newton-cradle span:last-child {
  animation: nuda-newton-left 1.2s ease-in-out infinite;
  will-change: transform;
}

@keyframes nuda-newton-left {
  0%, 50% { transform: rotate(0deg); }
  25%     { transform: rotate(-30deg); }
}

@keyframes nuda-newton-right {
  0%, 50% { transform: rotate(0deg); }
  75%     { transform: rotate(30deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-newton-cradle span:first-child,
  .nuda-newton-cradle span:last-child {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 16. Orbit Dots ─────────────── */
  {
    id: "orbit-dots",
    name: "Orbit Dots",
    category: "Loaders",
    preview: (
      <div className="nuda-orbit-dots" role="status" aria-label="Loading">
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-orbit-dots{position:relative;width:44px;height:44px;margin:8px}
      .nuda-orbit-dots span{position:absolute;top:50%;left:50%;width:9px;height:9px;margin:-4.5px;background:#e4ff54;border-radius:50%;animation:_orbd 1.4s linear infinite}
      .nuda-orbit-dots span:nth-child(2){animation-delay:-.466s;opacity:.7}
      .nuda-orbit-dots span:nth-child(3){animation-delay:-.933s;opacity:.45}
      @keyframes _orbd{from{transform:rotate(0deg) translateX(16px)}to{transform:rotate(360deg) translateX(16px)}}
      @media(prefers-reduced-motion:reduce){.nuda-orbit-dots span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Orbit Dots Loader -->
<div class="nuda-orbit-dots" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Orbit Dots Loader
   Three dots orbiting a shared center, staggered along the path.
   Customize: --orbit-dots-color, --orbit-dots-radius */

.nuda-orbit-dots {
  --orbit-dots-color: #e4ff54;
  position: relative;
  width: 44px;
  height: 44px;
}

.nuda-orbit-dots span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  background: var(--orbit-dots-color);
  border-radius: 50%;
  animation: nuda-orbit-dots 1.4s linear infinite;
  will-change: transform;
}

.nuda-orbit-dots span:nth-child(2) { animation-delay: -0.466s; opacity: 0.7; }
.nuda-orbit-dots span:nth-child(3) { animation-delay: -0.933s; opacity: 0.45; }

@keyframes nuda-orbit-dots {
  from { transform: rotate(0deg)   translateX(16px); }
  to   { transform: rotate(360deg) translateX(16px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-orbit-dots span { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 17. Bouncing Ball ─────────────── */
  {
    id: "bouncing-ball",
    name: "Bouncing Ball",
    category: "Loaders",
    preview: (
      <div className="nuda-bouncing-ball" role="status" aria-label="Loading">
        <div className="nuda-bouncing-ball__ball" />
        <div className="nuda-bouncing-ball__shadow" />
      </div>
    ),
    cssInline: `
      .nuda-bouncing-ball{position:relative;width:32px;height:48px;margin:8px}
      .nuda-bouncing-ball__ball{position:absolute;top:0;left:50%;width:18px;height:18px;margin-left:-9px;background:#e4ff54;border-radius:50%;animation:_bball .9s cubic-bezier(.5,.05,.5,.95) infinite}
      .nuda-bouncing-ball__shadow{position:absolute;bottom:2px;left:50%;width:18px;height:5px;margin-left:-9px;background:rgba(228,255,84,.25);border-radius:50%;filter:blur(1px);animation:_bshadow .9s cubic-bezier(.5,.05,.5,.95) infinite}
      @keyframes _bball{0%{transform:translateY(0) scaleY(1) scaleX(1)}45%{transform:translateY(30px) scaleY(1) scaleX(1)}55%{transform:translateY(30px) scaleY(.7) scaleX(1.3)}65%{transform:translateY(30px) scaleY(1) scaleX(1)}100%{transform:translateY(0) scaleY(1) scaleX(1)}}
      @keyframes _bshadow{0%,100%{transform:scale(.6);opacity:.3}55%{transform:scale(1.1);opacity:.6}}
      @media(prefers-reduced-motion:reduce){.nuda-bouncing-ball__ball,.nuda-bouncing-ball__shadow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bouncing Ball Loader -->
<div class="nuda-bouncing-ball" role="status" aria-label="Loading">
  <div class="nuda-bouncing-ball__ball"></div>
  <div class="nuda-bouncing-ball__shadow"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bouncing Ball Loader
   Ball bounces with squash/stretch on impact (transform only).
   Customize: --bball-color */

.nuda-bouncing-ball {
  --bball-color: #e4ff54;
  position: relative;
  width: 32px;
  height: 48px;
}

.nuda-bouncing-ball__ball {
  position: absolute;
  top: 0;
  left: 50%;
  width: 18px;
  height: 18px;
  margin-left: -9px;
  background: var(--bball-color);
  border-radius: 50%;
  animation: nuda-bball 0.9s cubic-bezier(0.5, 0.05, 0.5, 0.95) infinite;
  will-change: transform;
}

.nuda-bouncing-ball__shadow {
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 18px;
  height: 5px;
  margin-left: -9px;
  background: rgba(228, 255, 84, 0.25);
  border-radius: 50%;
  filter: blur(1px);
  animation: nuda-bball-shadow 0.9s cubic-bezier(0.5, 0.05, 0.5, 0.95) infinite;
}

@keyframes nuda-bball {
  0%   { transform: translateY(0)    scaleY(1)   scaleX(1);   }
  45%  { transform: translateY(30px) scaleY(1)   scaleX(1);   }
  55%  { transform: translateY(30px) scaleY(0.7) scaleX(1.3); }
  65%  { transform: translateY(30px) scaleY(1)   scaleX(1);   }
  100% { transform: translateY(0)    scaleY(1)   scaleX(1);   }
}

@keyframes nuda-bball-shadow {
  0%, 100% { transform: scale(0.6); opacity: 0.3; }
  55%      { transform: scale(1.1); opacity: 0.6; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bouncing-ball__ball,
  .nuda-bouncing-ball__shadow { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 18. Morphing Square ─────────────── */
  {
    id: "morphing-square",
    name: "Morphing Square",
    category: "Loaders",
    preview: (
      <div className="nuda-morphing-square" role="status" aria-label="Loading">
        <div className="nuda-morphing-square__shape" />
      </div>
    ),
    cssInline: `
      .nuda-morphing-square{padding:8px;display:flex;align-items:center;justify-content:center}
      .nuda-morphing-square__shape{width:32px;height:32px;background:#e4ff54;animation:_msq 2.4s ease-in-out infinite}
      @keyframes _msq{0%{border-radius:2px;transform:rotate(0deg)}25%{border-radius:50%;transform:rotate(90deg)}50%{border-radius:2px;transform:rotate(180deg)}75%{border-radius:50% 2px 50% 2px;transform:rotate(270deg)}100%{border-radius:2px;transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-morphing-square__shape{animation:none;border-radius:6px}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Morphing Square Loader -->
<div class="nuda-morphing-square" role="status" aria-label="Loading">
  <div class="nuda-morphing-square__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Morphing Square Loader
   Square morphs through round/diamond shapes while rotating.
   Customize: --msq-color, --msq-size */

.nuda-morphing-square {
  --msq-color: #e4ff54;
  --msq-size: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-morphing-square__shape {
  width: var(--msq-size);
  height: var(--msq-size);
  background: var(--msq-color);
  animation: nuda-morphing-square 2.4s ease-in-out infinite;
  will-change: transform, border-radius;
}

@keyframes nuda-morphing-square {
  0%   { border-radius: 2px;              transform: rotate(0deg); }
  25%  { border-radius: 50%;              transform: rotate(90deg); }
  50%  { border-radius: 2px;              transform: rotate(180deg); }
  75%  { border-radius: 50% 2px 50% 2px;  transform: rotate(270deg); }
  100% { border-radius: 2px;              transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morphing-square__shape { animation: none; border-radius: 6px; }
}`,
      },
    ],
  },

  /* ─────────────── 19. Ripple Rings ─────────────── */
  {
    id: "ripple-rings",
    name: "Ripple Rings",
    category: "Loaders",
    preview: (
      <div className="nuda-ripple-rings" role="status" aria-label="Loading">
        <span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-ripple-rings{position:relative;width:44px;height:44px;margin:8px}
      .nuda-ripple-rings span{position:absolute;inset:0;border:2px solid #e4ff54;border-radius:50%;opacity:0;animation:_rpr 1.8s cubic-bezier(0,.2,.8,1) infinite}
      .nuda-ripple-rings span:nth-child(2){animation-delay:.6s}
      .nuda-ripple-rings span:nth-child(3){animation-delay:1.2s}
      @keyframes _rpr{0%{transform:scale(.2);opacity:.9}100%{transform:scale(1);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ripple-rings span{animation:none;opacity:.4;transform:scale(.7)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ripple Rings Loader -->
<div class="nuda-ripple-rings" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Ripple Rings Loader
   Concentric rings expanding outward and fading (transform + opacity).
   Customize: --ripple-color, --ripple-size */

.nuda-ripple-rings {
  --ripple-color: #e4ff54;
  --ripple-size: 44px;
  position: relative;
  width: var(--ripple-size);
  height: var(--ripple-size);
}

.nuda-ripple-rings span {
  position: absolute;
  inset: 0;
  border: 2px solid var(--ripple-color);
  border-radius: 50%;
  opacity: 0;
  animation: nuda-ripple-rings 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  will-change: transform, opacity;
}

.nuda-ripple-rings span:nth-child(2) { animation-delay: 0.6s; }
.nuda-ripple-rings span:nth-child(3) { animation-delay: 1.2s; }

@keyframes nuda-ripple-rings {
  0%   { transform: scale(0.2); opacity: 0.9; }
  100% { transform: scale(1);   opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ripple-rings span { animation: none; opacity: 0.4; transform: scale(0.7); }
}`,
      },
    ],
  },

  /* ─────────────── 20. Gradient Spinner Bar ─────────────── */
  {
    id: "gradient-spinner-bar",
    name: "Gradient Spinner Bar",
    category: "Loaders",
    preview: (
      <div className="nuda-gradient-spinner-bar" role="status" aria-label="Loading" />
    ),
    cssInline: `
      .nuda-gradient-spinner-bar{width:42px;height:42px;border-radius:50%;margin:8px;background:conic-gradient(from 0deg,transparent 0deg,#e4ff54 90deg,transparent 180deg,transparent 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 5px),#000 calc(100% - 4px));mask:radial-gradient(farthest-side,transparent calc(100% - 5px),#000 calc(100% - 4px));animation:_gsbar 1s linear infinite}
      @keyframes _gsbar{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-gradient-spinner-bar{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Spinner Bar Loader -->
<div class="nuda-gradient-spinner-bar" role="status" aria-label="Loading"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Spinner Bar Loader
   Rotating conic-gradient arc, masked into a ring.
   Customize: --gsbar-color, --gsbar-size */

.nuda-gradient-spinner-bar {
  --gsbar-color: #e4ff54;
  --gsbar-size: 42px;
  width: var(--gsbar-size);
  height: var(--gsbar-size);
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--gsbar-color) 90deg,
    transparent 180deg,
    transparent 360deg
  );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px));
  animation: nuda-gradient-spinner-bar 1s linear infinite;
  will-change: transform;
}

@keyframes nuda-gradient-spinner-bar {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-spinner-bar { animation: none; opacity: 0.6; }
}`,
      },
    ],
  },

  /* ─────────────── 21. DNA Helix (strands) ─────────────── */
  {
    id: "dna-helix-loader",
    name: "DNA Helix",
    category: "Loaders",
    preview: (
      <div className="nuda-dna-helix-loader" role="status" aria-label="Loading">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="nuda-dna-helix-loader__col" style={{ animationDelay: `${i * 0.12}s` }}>
            <i /><i />
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-dna-helix-loader{display:flex;align-items:center;gap:5px;height:44px;padding:8px}
      .nuda-dna-helix-loader__col{position:relative;width:6px;height:32px;animation:_dnal 1.6s ease-in-out infinite}
      .nuda-dna-helix-loader__col i{position:absolute;left:0;width:6px;height:6px;border-radius:50%}
      .nuda-dna-helix-loader__col i:nth-child(1){top:0;background:#e4ff54}
      .nuda-dna-helix-loader__col i:nth-child(2){bottom:0;background:rgba(228,255,84,.4)}
      @keyframes _dnal{0%,100%{transform:rotateX(0deg) translateZ(0)}50%{transform:rotateX(180deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-dna-helix-loader__col{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- DNA Helix Loader -->
<div class="nuda-dna-helix-loader" role="status" aria-label="Loading">
  <span class="nuda-dna-helix-loader__col"><i></i><i></i></span>
  <span class="nuda-dna-helix-loader__col" style="animation-delay:.12s"><i></i><i></i></span>
  <span class="nuda-dna-helix-loader__col" style="animation-delay:.24s"><i></i><i></i></span>
  <span class="nuda-dna-helix-loader__col" style="animation-delay:.36s"><i></i><i></i></span>
  <span class="nuda-dna-helix-loader__col" style="animation-delay:.48s"><i></i><i></i></span>
  <span class="nuda-dna-helix-loader__col" style="animation-delay:.6s"><i></i><i></i></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* DNA Helix Loader
   Paired dots in columns rotating around a horizontal axis to suggest a helix.
   Customize: --dnal-color */

.nuda-dna-helix-loader {
  --dnal-color: #e4ff54;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 44px;
  padding: 8px;
}

.nuda-dna-helix-loader__col {
  position: relative;
  width: 6px;
  height: 32px;
  animation: nuda-dna-helix-loader 1.6s ease-in-out infinite;
  will-change: transform;
}

.nuda-dna-helix-loader__col i {
  position: absolute;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.nuda-dna-helix-loader__col i:nth-child(1) { top: 0; background: var(--dnal-color); }
.nuda-dna-helix-loader__col i:nth-child(2) { bottom: 0; background: rgba(228, 255, 84, 0.4); }

@keyframes nuda-dna-helix-loader {
  0%, 100% { transform: rotateX(0deg); }
  50%      { transform: rotateX(180deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dna-helix-loader__col { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 22. Pendulum ─────────────── */
  {
    id: "pendulum-loader",
    name: "Pendulum",
    category: "Loaders",
    preview: (
      <div className="nuda-pendulum-loader" role="status" aria-label="Loading">
        <span /><span /><span /><span /><span />
      </div>
    ),
    cssInline: `
      .nuda-pendulum-loader{display:flex;align-items:flex-start;height:46px;padding:8px}
      .nuda-pendulum-loader span{display:block;width:10px;height:38px;border-top:2px solid rgba(228,255,84,.3);position:relative;transform-origin:top center}
      .nuda-pendulum-loader span::after{content:'';position:absolute;bottom:0;left:50%;width:9px;height:9px;margin-left:-4.5px;background:#e4ff54;border-radius:50%}
      .nuda-pendulum-loader span:first-child{animation:_pendr 1.1s cubic-bezier(.36,0,.64,1) infinite}
      .nuda-pendulum-loader span:last-child{animation:_pendl 1.1s cubic-bezier(.36,0,.64,1) infinite}
      @keyframes _pendl{0%,50%,100%{transform:rotate(0)}25%{transform:rotate(-32deg)}}
      @keyframes _pendr{0%,50%,100%{transform:rotate(0)}75%{transform:rotate(32deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-pendulum-loader span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pendulum (Newton's cradle) Loader -->
<div class="nuda-pendulum-loader" role="status" aria-label="Loading">
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
        code: `/* Pendulum Loader
   Newton's-cradle style swing — end balls swing, middle balls stay still.
   Customize: --pend-color, --pend-string */

.nuda-pendulum-loader {
  --pend-color: #e4ff54;
  --pend-string: rgba(228, 255, 84, 0.3);
  display: flex;
  align-items: flex-start;
  height: 46px;
  padding: 8px;
}

.nuda-pendulum-loader span {
  display: block;
  width: 10px;
  height: 38px;
  border-top: 2px solid var(--pend-string);
  position: relative;
  transform-origin: top center;
}

.nuda-pendulum-loader span::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 9px;
  height: 9px;
  margin-left: -4.5px;
  background: var(--pend-color);
  border-radius: 50%;
}

.nuda-pendulum-loader span:first-child {
  animation: nuda-pendulum-right 1.1s cubic-bezier(0.36, 0, 0.64, 1) infinite;
  will-change: transform;
}

.nuda-pendulum-loader span:last-child {
  animation: nuda-pendulum-left 1.1s cubic-bezier(0.36, 0, 0.64, 1) infinite;
  will-change: transform;
}

@keyframes nuda-pendulum-left {
  0%, 50%, 100% { transform: rotate(0); }
  25%           { transform: rotate(-32deg); }
}

@keyframes nuda-pendulum-right {
  0%, 50%, 100% { transform: rotate(0); }
  75%           { transform: rotate(32deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pendulum-loader span { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 23. Comet Trail ─────────────── */
  {
    id: "comet-trail-loader",
    name: "Comet Trail",
    category: "Loaders",
    preview: (
      <div className="nuda-comet-trail-loader" role="status" aria-label="Loading">
        <div className="nuda-comet-trail-loader__orbit" />
      </div>
    ),
    cssInline: `
      .nuda-comet-trail-loader{position:relative;width:44px;height:44px;margin:8px}
      .nuda-comet-trail-loader__orbit{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,transparent 0deg,rgba(228,255,84,.05) 200deg,rgba(228,255,84,.5) 320deg,#e4ff54 360deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));mask:radial-gradient(farthest-side,transparent calc(100% - 6px),#000 calc(100% - 5px));animation:_comet 1.4s linear infinite}
      .nuda-comet-trail-loader__orbit::after{content:'';position:absolute;top:0;left:50%;width:7px;height:7px;margin-left:-3.5px;background:#e4ff54;border-radius:50%;box-shadow:0 0 8px 2px rgba(228,255,84,.6)}
      @keyframes _comet{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-comet-trail-loader__orbit{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Comet Trail Loader -->
<div class="nuda-comet-trail-loader" role="status" aria-label="Loading">
  <div class="nuda-comet-trail-loader__orbit"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Comet Trail Loader
   An orbiting comet head with a fading conic-gradient tail.
   Customize: --comet-color, --comet-size */

.nuda-comet-trail-loader {
  --comet-color: #e4ff54;
  --comet-size: 44px;
  position: relative;
  width: var(--comet-size);
  height: var(--comet-size);
}

.nuda-comet-trail-loader__orbit {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(228, 255, 84, 0.05) 200deg,
    rgba(228, 255, 84, 0.5) 320deg,
    var(--comet-color) 360deg
  );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 5px));
  animation: nuda-comet-trail 1.4s linear infinite;
  will-change: transform;
}

.nuda-comet-trail-loader__orbit::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 7px;
  height: 7px;
  margin-left: -3.5px;
  background: var(--comet-color);
  border-radius: 50%;
  box-shadow: 0 0 8px 2px rgba(228, 255, 84, 0.6);
}

@keyframes nuda-comet-trail {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-comet-trail-loader__orbit { animation: none; opacity: 0.6; }
}`,
      },
    ],
  },
];
