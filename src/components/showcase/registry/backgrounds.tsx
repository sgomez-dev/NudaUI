import type { NudaComponent } from "./types";

export const backgrounds: NudaComponent[] = [
  /* ─────────────── Gradient Mesh ─────────────── */
  {
    id: "gradient-mesh",
    name: "Gradient Mesh",
    category: "Backgrounds",
    preview: (
      <div className="nuda-gradient-mesh" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-gradient-mesh{--c1:#6366f1;--c2:#ec4899;--c3:#06b6d4;--c4:#f59e0b;position:relative;overflow:hidden;background:#0a0a0a}
      .nuda-gradient-mesh::before,.nuda-gradient-mesh::after{content:'';position:absolute;width:60%;height:60%;border-radius:50%;filter:blur(60px);opacity:.6;will-change:transform}
      .nuda-gradient-mesh::before{background:radial-gradient(circle,var(--c1),var(--c2));top:-10%;left:-10%;animation:_gm1 8s ease-in-out infinite alternate}
      .nuda-gradient-mesh::after{background:radial-gradient(circle,var(--c3),var(--c4));bottom:-10%;right:-10%;animation:_gm2 10s ease-in-out infinite alternate}
      @keyframes _gm1{0%{transform:translate(0,0) scale(1)}100%{transform:translate(30%,20%) scale(1.2)}}
      @keyframes _gm2{0%{transform:translate(0,0) scale(1.1)}100%{transform:translate(-25%,-15%) scale(.9)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gradient-mesh" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Mesh
   Animated multi-blob gradient background.
   Customize: --mesh-c1 through --mesh-c4 */

.nuda-gradient-mesh {
  --mesh-c1: #6366f1;
  --mesh-c2: #ec4899;
  --mesh-c3: #06b6d4;
  --mesh-c4: #f59e0b;
  position: relative;
  overflow: hidden;
  background: #0a0a0a;
  width: 100%;
  min-height: 300px;
}

.nuda-gradient-mesh::before,
.nuda-gradient-mesh::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  will-change: transform;
}

.nuda-gradient-mesh::before {
  background: radial-gradient(circle, var(--mesh-c1), var(--mesh-c2));
  top: -10%;
  left: -10%;
  animation: nuda-mesh-blob1 8s ease-in-out infinite alternate;
}

.nuda-gradient-mesh::after {
  background: radial-gradient(circle, var(--mesh-c3), var(--mesh-c4));
  bottom: -10%;
  right: -10%;
  animation: nuda-mesh-blob2 10s ease-in-out infinite alternate;
}

@keyframes nuda-mesh-blob1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30%, 20%) scale(1.2); }
}

@keyframes nuda-mesh-blob2 {
  0% { transform: translate(0, 0) scale(1.1); }
  100% { transform: translate(-25%, -15%) scale(0.9); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-mesh::before,
  .nuda-gradient-mesh::after {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Dot Grid ─────────────── */
  {
    id: "dot-grid",
    name: "Dot Grid",
    category: "Backgrounds",
    preview: (
      <div className="nuda-dot-grid" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-dot-grid{--dot:#ffffff18;--gap:24px;background-image:radial-gradient(circle,var(--dot) 1px,transparent 1px);background-size:var(--gap) var(--gap);background-color:#0a0a0a;position:relative;overflow:hidden}
      .nuda-dot-grid::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,transparent 30%,#0a0a0a 70%);animation:_dg 6s ease-in-out infinite alternate}
      @keyframes _dg{0%{background-position:0% 0%}100%{background-position:100% 100%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dot-grid" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dot Grid
   Subtle animated dot grid pattern.
   Customize: --dot-color, --dot-gap */

.nuda-dot-grid {
  --dot-color: rgba(255, 255, 255, 0.09);
  --dot-gap: 24px;
  background-image: radial-gradient(circle, var(--dot-color) 1px, transparent 1px);
  background-size: var(--dot-gap) var(--dot-gap);
  background-color: #0a0a0a;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 300px;
}

.nuda-dot-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, transparent 30%, #0a0a0a 70%);
  animation: nuda-dot-glow 6s ease-in-out infinite alternate;
}

@keyframes nuda-dot-glow {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dot-grid::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Noise Grain ─────────────── */
  {
    id: "noise-grain",
    name: "Noise Grain",
    category: "Backgrounds",
    preview: (
      <div className="nuda-noise-grain" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12, background: "linear-gradient(135deg, #1a1a2e, #16213e)" }} />
    ),
    cssInline: `
      .nuda-noise-grain{position:relative;overflow:hidden}
      .nuda-noise-grain::after{content:'';position:absolute;inset:-50%;width:200%;height:200%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.15;pointer-events:none;animation:_ng .15s steps(3) infinite}
      @keyframes _ng{to{transform:translate3d(-8px,4px,0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Wrap around any element to add noise grain -->
<div class="nuda-noise-grain" aria-hidden="true">
  <!-- Your content here -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Noise Grain
   Film grain texture overlay.
   Customize: opacity for intensity */

.nuda-noise-grain {
  position: relative;
  overflow: hidden;
}

.nuda-noise-grain::after {
  content: '';
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  animation: nuda-grain-shift 0.15s steps(3) infinite;
  will-change: transform;
}

@keyframes nuda-grain-shift {
  to { transform: translate3d(-8px, 4px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-noise-grain::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Aurora ─────────────── */
  {
    id: "aurora",
    name: "Aurora",
    category: "Backgrounds",
    preview: (
      <div className="nuda-aurora" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }}>
        <div className="nuda-aurora__wave nuda-aurora__wave--1" />
        <div className="nuda-aurora__wave nuda-aurora__wave--2" />
        <div className="nuda-aurora__wave nuda-aurora__wave--3" />
      </div>
    ),
    cssInline: `
      .nuda-aurora{position:relative;overflow:hidden;background:#050510}
      .nuda-aurora__wave{position:absolute;width:200%;height:50%;left:-50%;filter:blur(40px);opacity:.35;border-radius:50%;will-change:transform}
      .nuda-aurora__wave--1{background:linear-gradient(90deg,#06b6d4,#6366f1,#06b6d4);top:20%;animation:_au 7s ease-in-out infinite alternate}
      .nuda-aurora__wave--2{background:linear-gradient(90deg,#8b5cf6,#ec4899,#8b5cf6);top:30%;animation:_au 9s ease-in-out infinite alternate-reverse}
      .nuda-aurora__wave--3{background:linear-gradient(90deg,#22c55e,#06b6d4,#22c55e);top:40%;animation:_au 11s ease-in-out infinite alternate}
      @keyframes _au{0%{transform:translateX(-20%) scaleY(.8) rotate(-3deg)}100%{transform:translateX(20%) scaleY(1.2) rotate(3deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-aurora" aria-hidden="true">
  <div class="nuda-aurora__wave nuda-aurora__wave--1"></div>
  <div class="nuda-aurora__wave nuda-aurora__wave--2"></div>
  <div class="nuda-aurora__wave nuda-aurora__wave--3"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Aurora
   Aurora borealis color waves.
   Customize: wave colors and blur */

.nuda-aurora {
  position: relative;
  overflow: hidden;
  background: #050510;
  width: 100%;
  min-height: 300px;
}

.nuda-aurora__wave {
  position: absolute;
  width: 200%;
  height: 50%;
  left: -50%;
  filter: blur(40px);
  opacity: 0.35;
  border-radius: 50%;
  will-change: transform;
}

.nuda-aurora__wave--1 {
  background: linear-gradient(90deg, #06b6d4, #6366f1, #06b6d4);
  top: 20%;
  animation: nuda-aurora-sway 7s ease-in-out infinite alternate;
}

.nuda-aurora__wave--2 {
  background: linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6);
  top: 30%;
  animation: nuda-aurora-sway 9s ease-in-out infinite alternate-reverse;
}

.nuda-aurora__wave--3 {
  background: linear-gradient(90deg, #22c55e, #06b6d4, #22c55e);
  top: 40%;
  animation: nuda-aurora-sway 11s ease-in-out infinite alternate;
}

@keyframes nuda-aurora-sway {
  0% {
    transform: translateX(-20%) scaleY(0.8) rotate(-3deg);
  }
  100% {
    transform: translateX(20%) scaleY(1.2) rotate(3deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-aurora__wave { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Grid Fade ─────────────── */
  {
    id: "grid-fade",
    name: "Grid Fade",
    category: "Backgrounds",
    preview: (
      <div className="nuda-grid-fade" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-grid-fade{--line:#ffffff0a;--gap:40px;position:relative;background-color:#0a0a0a;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:var(--gap) var(--gap);overflow:hidden}
      .nuda-grid-fade::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,transparent 0%,#0a0a0a 100%)}
      .nuda-grid-fade::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent,#6366f120,transparent);background-size:100% 200%;animation:_gf 4s ease-in-out infinite}
      @keyframes _gf{0%,100%{background-position:50% 0%}50%{background-position:50% 100%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-grid-fade" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Grid Fade
   Fading grid lines pattern with light sweep.
   Customize: --grid-line, --grid-gap, --grid-glow */

.nuda-grid-fade {
  --grid-line: rgba(255, 255, 255, 0.04);
  --grid-gap: 40px;
  --grid-glow: rgba(99, 102, 241, 0.13);
  position: relative;
  background-color: #0a0a0a;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: var(--grid-gap) var(--grid-gap);
  overflow: hidden;
  width: 100%;
  min-height: 300px;
}

.nuda-grid-fade::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, #0a0a0a 100%);
}

.nuda-grid-fade::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, var(--grid-glow), transparent);
  background-size: 100% 200%;
  animation: nuda-grid-sweep 4s ease-in-out infinite;
}

@keyframes nuda-grid-sweep {
  0%, 100% { background-position: 50% 0%; }
  50% { background-position: 50% 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-grid-fade::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Particle Float ─────────────── */
  {
    id: "particle-float",
    name: "Particle Float",
    category: "Backgrounds",
    preview: (
      <div className="nuda-particle-float" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-particle-float{position:relative;overflow:hidden;background:#0a0a0a}
      .nuda-particle-float::before,.nuda-particle-float::after{content:'';position:absolute;width:4px;height:4px;border-radius:50%}
      .nuda-particle-float::before{box-shadow:20px 30px 0 2px #6366f180,80px 60px 0 2px #ec489980,140px 20px 0 2px #06b6d480,200px 80px 0 2px #f59e0b80,50px 120px 0 2px #22c55e80,160px 140px 0 2px #8b5cf680,30px 80px 0 1px #6366f160,110px 100px 0 1px #ec489960,180px 50px 0 1px #06b6d460,240px 130px 0 1px #f59e0b60;animation:_pf1 12s linear infinite}
      .nuda-particle-float::after{box-shadow:40px 40px 0 2px #8b5cf680,100px 80px 0 2px #06b6d480,160px 30px 0 2px #22c55e80,220px 110px 0 2px #6366f180,60px 150px 0 2px #ec489980,130px 10px 0 2px #f59e0b80,90px 130px 0 1px #8b5cf660,200px 60px 0 1px #22c55e60,25px 100px 0 1px #6366f160,170px 90px 0 1px #ec489960;animation:_pf2 16s linear infinite}
      @keyframes _pf1{0%{transform:translateY(0)}100%{transform:translateY(-180px)}}
      @keyframes _pf2{0%{transform:translateY(0)}100%{transform:translateY(-180px) translateX(10px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-particle-float" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Particle Float
   Floating particles using CSS box-shadows (no JS).
   Customize: colors and shadow positions */

.nuda-particle-float {
  position: relative;
  overflow: hidden;
  background: #0a0a0a;
  width: 100%;
  min-height: 300px;
}

.nuda-particle-float::before,
.nuda-particle-float::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  will-change: transform;
}

.nuda-particle-float::before {
  box-shadow:
    20px 30px 0 rgba(99, 102, 241, 0.25),
    80px 60px 0 rgba(236, 72, 153, 0.25),
    140px 20px 0 rgba(6, 182, 212, 0.25),
    200px 80px 0 rgba(245, 158, 11, 0.25),
    50px 120px 0 rgba(34, 197, 94, 0.25),
    160px 140px 0 rgba(139, 92, 246, 0.25),
    30px 180px 0 rgba(99, 102, 241, 0.18),
    110px 200px 0 rgba(236, 72, 153, 0.18),
    180px 170px 0 rgba(6, 182, 212, 0.18),
    240px 220px 0 rgba(245, 158, 11, 0.18);
  animation: nuda-particle-rise1 12s linear infinite;
}

.nuda-particle-float::after {
  box-shadow:
    40px 40px 0 rgba(139, 92, 246, 0.25),
    100px 80px 0 rgba(6, 182, 212, 0.25),
    160px 30px 0 rgba(34, 197, 94, 0.25),
    220px 110px 0 rgba(99, 102, 241, 0.25),
    60px 150px 0 rgba(236, 72, 153, 0.25),
    130px 10px 0 rgba(245, 158, 11, 0.25),
    90px 190px 0 rgba(139, 92, 246, 0.18),
    200px 160px 0 rgba(34, 197, 94, 0.18),
    25px 210px 0 rgba(99, 102, 241, 0.18),
    170px 230px 0 rgba(236, 72, 153, 0.18);
  animation: nuda-particle-rise2 16s linear infinite;
}

@keyframes nuda-particle-rise1 {
  0% { transform: translateY(0); }
  100% { transform: translateY(-300px); }
}

@keyframes nuda-particle-rise2 {
  0% { transform: translateY(0); }
  100% { transform: translateY(-300px) translateX(10px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-particle-float::before,
  .nuda-particle-float::after {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 7. Plasma Blob ─────────────── */
  {
    id: "plasma-blob",
    name: "Plasma Blob",
    category: "Backgrounds",
    preview: (
      <div className="nuda-plasma">
        <span className="nuda-plasma__b1" />
        <span className="nuda-plasma__b2" />
        <span className="nuda-plasma__b3" />
      </div>
    ),
    cssInline: `
      .nuda-plasma{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:#09090b;isolation:isolate;filter:contrast(1.05)}
      .nuda-plasma span{position:absolute;width:120px;height:120px;border-radius:50%;filter:blur(28px);mix-blend-mode:screen;animation:_plasmaMove 14s ease-in-out infinite}
      .nuda-plasma__b1{background:#9d6dff;top:-30px;left:-30px}
      .nuda-plasma__b2{background:#ff6dd4;bottom:-30px;right:-20px;animation-delay:-5s;animation-duration:18s}
      .nuda-plasma__b3{background:#62b6ff;top:30%;left:35%;animation-delay:-9s;animation-duration:22s}
      @keyframes _plasmaMove{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-20px) scale(1.2)}66%{transform:translate(-30px,30px) scale(.8)}}
      @media(prefers-reduced-motion:reduce){.nuda-plasma span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-plasma">
  <span class="nuda-plasma__b1"></span>
  <span class="nuda-plasma__b2"></span>
  <span class="nuda-plasma__b3"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-plasma {
  position: relative;
  overflow: hidden;
  background: #09090b;
  isolation: isolate;
  filter: contrast(1.05);
}

.nuda-plasma span {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  filter: blur(40px);
  mix-blend-mode: screen;
  animation: nuda-plasma-move 14s ease-in-out infinite;
}

.nuda-plasma__b1 { background: #9d6dff; top: -30px;  left: -30px;  }
.nuda-plasma__b2 { background: #ff6dd4; bottom: -30px; right: -20px;
                   animation-delay: -5s; animation-duration: 18s; }
.nuda-plasma__b3 { background: #62b6ff; top: 30%; left: 35%;
                   animation-delay: -9s; animation-duration: 22s; }

@keyframes nuda-plasma-move {
  0%, 100% { transform: translate(0, 0) scale(1);     }
  33%      { transform: translate(40px, -20px) scale(1.2); }
  66%      { transform: translate(-30px, 30px) scale(0.8); }
}`,
      },
    ],
  },

  /* ─────────────── 8. Scanlines ─────────────── */
  {
    id: "scanlines-bg",
    name: "Scanlines",
    category: "Backgrounds",
    preview: (
      <div className="nuda-scanlines">
        <span className="nuda-scanlines__sweep" />
      </div>
    ),
    cssInline: `
      .nuda-scanlines{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#09090b,#1a1a20);background-image:repeating-linear-gradient(0deg,rgba(228,255,84,.04) 0,rgba(228,255,84,.04) 1px,transparent 1px,transparent 4px),linear-gradient(135deg,#09090b,#1a1a20)}
      .nuda-scanlines__sweep{position:absolute;left:0;right:0;height:80px;background:linear-gradient(180deg,transparent,rgba(228,255,84,.16),transparent);animation:_scanSweep 4s linear infinite}
      @keyframes _scanSweep{0%{transform:translateY(-100%)}100%{transform:translateY(120px)}}
      @media(prefers-reduced-motion:reduce){.nuda-scanlines__sweep{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scanlines">
  <span class="nuda-scanlines__sweep"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-scanlines {
  position: relative;
  background:
    repeating-linear-gradient(
      0deg,
      rgba(228, 255, 84, 0.04) 0,
      rgba(228, 255, 84, 0.04) 1px,
      transparent 1px,
      transparent 4px
    ),
    linear-gradient(135deg, #09090b, #1a1a20);
}

.nuda-scanlines__sweep {
  position: absolute;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(180deg, transparent, rgba(228, 255, 84, 0.16), transparent);
  animation: nuda-scan-sweep 4s linear infinite;
}

@keyframes nuda-scan-sweep {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(120px); }
}`,
      },
    ],
  },

  /* ─────────────── 9. Starfield ─────────────── */
  {
    id: "starfield-bg",
    name: "Starfield",
    category: "Backgrounds",
    preview: (
      <div className="nuda-stars">
        <span className="nuda-stars__layer nuda-stars__layer--1" />
        <span className="nuda-stars__layer nuda-stars__layer--2" />
        <span className="nuda-stars__layer nuda-stars__layer--3" />
      </div>
    ),
    cssInline: `
      .nuda-stars{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at center,#1a1a20 0%,#09090b 100%)}
      .nuda-stars__layer{position:absolute;inset:0;background-repeat:repeat;background-image:radial-gradient(1px 1px at 20% 30%,#fafafa,transparent),radial-gradient(1px 1px at 60% 70%,#fafafa,transparent),radial-gradient(2px 2px at 80% 20%,#fafafa,transparent),radial-gradient(1px 1px at 40% 80%,#fafafa,transparent),radial-gradient(1px 1px at 90% 50%,#fafafa,transparent);animation:_starsDrift 30s linear infinite}
      .nuda-stars__layer--2{opacity:.6;animation-duration:50s;animation-direction:reverse}
      .nuda-stars__layer--3{opacity:.3;animation-duration:80s}
      @keyframes _starsDrift{from{transform:translate(0,0)}to{transform:translate(-50px,30px)}}
      @media(prefers-reduced-motion:reduce){.nuda-stars__layer{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-stars">
  <span class="nuda-stars__layer nuda-stars__layer--1"></span>
  <span class="nuda-stars__layer nuda-stars__layer--2"></span>
  <span class="nuda-stars__layer nuda-stars__layer--3"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-stars__layer {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 30%, #fafafa, transparent),
    radial-gradient(1px 1px at 60% 70%, #fafafa, transparent),
    radial-gradient(2px 2px at 80% 20%, #fafafa, transparent),
    radial-gradient(1px 1px at 40% 80%, #fafafa, transparent),
    radial-gradient(1px 1px at 90% 50%, #fafafa, transparent);
  animation: nuda-stars-drift 30s linear infinite;
}

.nuda-stars__layer--2 {
  opacity: 0.6;
  animation-duration: 50s;
  animation-direction: reverse;
}

.nuda-stars__layer--3 {
  opacity: 0.3;
  animation-duration: 80s;
}

@keyframes nuda-stars-drift {
  from { transform: translate(0, 0);     }
  to   { transform: translate(-50px, 30px); }
}`,
      },
    ],
  },

  /* ─────────────── 10. Depth Grid ─────────────── */
  {
    id: "depth-grid",
    name: "Depth Grid",
    category: "Backgrounds",
    preview: (
      <div className="nuda-depthgrid">
        <span />
      </div>
    ),
    cssInline: `
      .nuda-depthgrid{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at center bottom,rgba(228,255,84,.15),transparent 70%),#09090b;perspective:200px}
      .nuda-depthgrid span{position:absolute;left:-50%;right:-50%;bottom:0;height:200%;background-image:linear-gradient(90deg,rgba(228,255,84,.3) 1px,transparent 1px),linear-gradient(0deg,rgba(228,255,84,.3) 1px,transparent 1px);background-size:24px 24px;transform:rotateX(60deg);transform-origin:bottom;animation:_depthScroll 1.4s linear infinite}
      @keyframes _depthScroll{from{background-position:0 0}to{background-position:0 24px}}
      @media(prefers-reduced-motion:reduce){.nuda-depthgrid span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-depthgrid">
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-depthgrid {
  position: relative;
  background:
    radial-gradient(ellipse at center bottom, rgba(228, 255, 84, 0.15), transparent 70%),
    #09090b;
  perspective: 200px;
  overflow: hidden;
}

.nuda-depthgrid span {
  position: absolute;
  left: -50%;
  right: -50%;
  bottom: 0;
  height: 200%;
  background-image:
    linear-gradient(90deg, rgba(228, 255, 84, 0.3) 1px, transparent 1px),
    linear-gradient(0deg,  rgba(228, 255, 84, 0.3) 1px, transparent 1px);
  background-size: 24px 24px;
  transform: rotateX(60deg);
  transform-origin: bottom;
  animation: nuda-depth-scroll 1.4s linear infinite;
}

@keyframes nuda-depth-scroll {
  from { background-position: 0 0;    }
  to   { background-position: 0 24px; }
}`,
      },
    ],
  },

  /* ─────────────── 11. Blueprint Grid ─────────────── */
  {
    id: "blueprint-bg",
    name: "Blueprint Grid",
    category: "Backgrounds",
    preview: (
      <div className="nuda-blueprint" />
    ),
    cssInline: `
      .nuda-blueprint{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;background:#0a1a2e;background-image:linear-gradient(rgba(99,202,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(99,202,255,.18) 1px,transparent 1px),linear-gradient(rgba(99,202,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(99,202,255,.08) 1px,transparent 1px);background-size:40px 40px,40px 40px,8px 8px,8px 8px;animation:_bpDrift 30s linear infinite}
      .nuda-blueprint::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at top right,rgba(99,202,255,.18),transparent 60%);border-radius:inherit}
      @keyframes _bpDrift{to{background-position:40px 40px,40px 40px,8px 8px,8px 8px}}
      @media(prefers-reduced-motion:reduce){.nuda-blueprint{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-blueprint"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-blueprint {
  position: relative;
  background: #0a1a2e;
  background-image:
    linear-gradient(rgba(99, 202, 255, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 202, 255, 0.18) 1px, transparent 1px),
    linear-gradient(rgba(99, 202, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 202, 255, 0.08) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 8px 8px, 8px 8px;
  animation: nuda-bp-drift 30s linear infinite;
}

.nuda-blueprint::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at top right,
    rgba(99, 202, 255, 0.18),
    transparent 60%
  );
  border-radius: inherit;
}

@keyframes nuda-bp-drift {
  to { background-position: 40px 40px, 40px 40px, 8px 8px, 8px 8px; }
}`,
      },
    ],
  },

  /* ─────────────── Animated Grid ─────────────── */
  {
    id: "animated-grid-bg",
    name: "Animated Grid",
    category: "Backgrounds",
    preview: (
      <div className="nuda-anim-grid" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }}>
        <span className="nuda-anim-grid__plane" />
      </div>
    ),
    cssInline: `
      .nuda-anim-grid{position:relative;overflow:hidden;background:radial-gradient(ellipse at 50% 0%,rgba(228,255,84,.12),transparent 60%),#09090b;perspective:240px}
      .nuda-anim-grid__plane{position:absolute;left:-50%;right:-50%;top:-20%;bottom:-60%;background-image:linear-gradient(90deg,rgba(228,255,84,.28) 1px,transparent 1px),linear-gradient(0deg,rgba(228,255,84,.28) 1px,transparent 1px);background-size:32px 32px;transform:rotateX(62deg);transform-origin:50% 100%;animation:_animGridScroll 2s linear infinite;will-change:background-position}
      @keyframes _animGridScroll{from{background-position:0 0}to{background-position:0 32px}}
      @media(prefers-reduced-motion:reduce){.nuda-anim-grid__plane{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-anim-grid" aria-hidden="true">
  <span class="nuda-anim-grid__plane"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Floating Orbs ─────────────── */
  {
    id: "floating-orbs-bg",
    name: "Floating Orbs",
    category: "Backgrounds",
    preview: (
      <div className="nuda-float-orbs" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }}>
        <span className="nuda-float-orbs__o nuda-float-orbs__o--1" />
        <span className="nuda-float-orbs__o nuda-float-orbs__o--2" />
        <span className="nuda-float-orbs__o nuda-float-orbs__o--3" />
      </div>
    ),
    cssInline: `
      .nuda-float-orbs{position:relative;overflow:hidden;background:#09090b;isolation:isolate}
      .nuda-float-orbs__o{position:absolute;width:120px;height:120px;border-radius:50%;filter:blur(34px);opacity:.5;mix-blend-mode:screen;will-change:transform}
      .nuda-float-orbs__o--1{background:#e4ff54;top:-20px;left:8%;animation:_floatOrb 9s ease-in-out infinite alternate}
      .nuda-float-orbs__o--2{background:#62b6ff;bottom:-30px;left:40%;animation:_floatOrb 12s ease-in-out infinite alternate-reverse;animation-delay:-3s}
      .nuda-float-orbs__o--3{background:#9d6dff;top:10%;right:-10px;animation:_floatOrb 14s ease-in-out infinite alternate;animation-delay:-6s}
      @keyframes _floatOrb{0%{transform:translate(0,0) scale(1)}100%{transform:translate(24px,-20px) scale(1.25)}}
      @media(prefers-reduced-motion:reduce){.nuda-float-orbs__o{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-float-orbs" aria-hidden="true">
  <span class="nuda-float-orbs__o nuda-float-orbs__o--1"></span>
  <span class="nuda-float-orbs__o nuda-float-orbs__o--2"></span>
  <span class="nuda-float-orbs__o nuda-float-orbs__o--3"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Dot Drift ─────────────── */
  {
    id: "dot-drift-bg",
    name: "Dot Drift",
    category: "Backgrounds",
    preview: (
      <div className="nuda-dot-drift" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-dot-drift{position:relative;overflow:hidden;background-color:#09090b;background-image:radial-gradient(circle,rgba(228,255,84,.22) 1.4px,transparent 1.4px),radial-gradient(circle,rgba(255,255,255,.06) 1px,transparent 1px);background-size:28px 28px,18px 18px;animation:_dotDrift 18s linear infinite;will-change:background-position}
      .nuda-dot-drift::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 50%,transparent 30%,#09090b 100%)}
      @keyframes _dotDrift{to{background-position:28px 56px,-18px 36px}}
      @media(prefers-reduced-motion:reduce){.nuda-dot-drift{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dot-drift" aria-hidden="true"></div>`,
      },
    ],
  },

  /* ─────────────── Gradient Wave ─────────────── */
  {
    id: "gradient-wave-bg",
    name: "Gradient Wave",
    category: "Backgrounds",
    preview: (
      <div className="nuda-grad-wave" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-grad-wave{position:relative;overflow:hidden;background:linear-gradient(120deg,#09090b 0%,#13160b 25%,#e4ff5433 45%,#13160b 65%,#09090b 100%);background-size:300% 300%;animation:_gradWave 12s ease-in-out infinite;will-change:background-position}
      .nuda-grad-wave::after{content:'';position:absolute;inset:0;background:linear-gradient(60deg,transparent 0%,rgba(98,182,255,.12) 50%,transparent 100%);background-size:300% 300%;animation:_gradWave 16s ease-in-out infinite reverse;mix-blend-mode:screen}
      @keyframes _gradWave{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
      @media(prefers-reduced-motion:reduce){.nuda-grad-wave,.nuda-grad-wave::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-grad-wave" aria-hidden="true"></div>`,
      },
    ],
  },

  /* ─────────────── Noise Field ─────────────── */
  {
    id: "noise-field-bg",
    name: "Noise Field",
    category: "Backgrounds",
    preview: (
      <div className="nuda-noise-field" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }} />
    ),
    cssInline: `
      .nuda-noise-field{position:relative;overflow:hidden;background:radial-gradient(ellipse at 50% 40%,#181808,#09090b 70%)}
      .nuda-noise-field::before{content:'';position:absolute;inset:-50%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='nf'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nf)'/%3E%3C/svg%3E");opacity:.14;mix-blend-mode:overlay;animation:_noiseField .4s steps(4) infinite;will-change:transform}
      .nuda-noise-field::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 45%,rgba(228,255,84,.14),transparent 55%)}
      @keyframes _noiseField{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-6px,4px,0)}50%{transform:translate3d(5px,-3px,0)}75%{transform:translate3d(-3px,-5px,0)}100%{transform:translate3d(4px,3px,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-noise-field::before{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-noise-field" aria-hidden="true"></div>`,
      },
    ],
  },

  /* ─────────────── Beam Sweep ─────────────── */
  {
    id: "beam-sweep-bg",
    name: "Beam Sweep",
    category: "Backgrounds",
    preview: (
      <div className="nuda-beam-sweep" aria-hidden="true" style={{ width: "100%", height: 180, borderRadius: 12 }}>
        <span className="nuda-beam-sweep__b nuda-beam-sweep__b--1" />
        <span className="nuda-beam-sweep__b nuda-beam-sweep__b--2" />
      </div>
    ),
    cssInline: `
      .nuda-beam-sweep{position:relative;overflow:hidden;background:#09090b}
      .nuda-beam-sweep__b{position:absolute;top:-40%;bottom:-40%;width:60px;transform:rotate(18deg);filter:blur(8px);will-change:transform,opacity}
      .nuda-beam-sweep__b--1{left:-20%;background:linear-gradient(90deg,transparent,rgba(228,255,84,.32),transparent);animation:_beamSweep 5s ease-in-out infinite}
      .nuda-beam-sweep__b--2{left:-20%;background:linear-gradient(90deg,transparent,rgba(98,182,255,.22),transparent);animation:_beamSweep 7s ease-in-out infinite;animation-delay:-2.5s}
      @keyframes _beamSweep{0%{transform:translateX(0) rotate(18deg);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateX(600px) rotate(18deg);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-beam-sweep__b{animation:none;opacity:.3;transform:rotate(18deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-beam-sweep" aria-hidden="true">
  <span class="nuda-beam-sweep__b nuda-beam-sweep__b--1"></span>
  <span class="nuda-beam-sweep__b nuda-beam-sweep__b--2"></span>
</div>`,
      },
    ],
  },
];
