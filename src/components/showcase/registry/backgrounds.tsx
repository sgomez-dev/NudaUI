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
];
