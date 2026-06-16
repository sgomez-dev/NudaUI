import type { NudaComponent } from "./types";

export const gradientAnimations: NudaComponent[] = [
  /* ─────────────── 1. Aurora ─────────────── */
  {
    id: "gradient-aurora",
    name: "Aurora",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-aurora" role="img" aria-label="Drifting aurora gradient" />
    ),
    cssInline: `
      .nuda-gradient-aurora{width:240px;height:140px;border-radius:14px;background:#09090b;position:relative;overflow:hidden}
      .nuda-gradient-aurora::before{content:"";position:absolute;inset:-40%;background:conic-gradient(from 0deg at 30% 40%,#e4ff54,transparent 25%,#4ade80 45%,transparent 65%,#22d3ee 85%,#e4ff54);filter:blur(28px);opacity:.85;animation:nuda-gradient-aurora-drift 9s ease-in-out infinite alternate}
      @keyframes nuda-gradient-aurora-drift{0%{transform:translate3d(-10%,-6%,0) rotate(0deg) scale(1.2)}100%{transform:translate3d(12%,8%,0) rotate(40deg) scale(1.4)}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-aurora::before{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Aurora Gradient -->
<div class="nuda-gradient-aurora" role="img" aria-label="Aurora gradient"></div>`,
      },
    ],
  },

  /* ─────────────── 2. Mesh Gradient ─────────────── */
  {
    id: "gradient-mesh-blobs",
    name: "Mesh Gradient",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-mesh" role="img" aria-label="Blurred mesh gradient" />
    ),
    cssInline: `
      .nuda-gradient-mesh{width:240px;height:140px;border-radius:14px;background:#09090b;background-image:radial-gradient(40% 50% at 20% 30%,#e4ff54 0%,transparent 60%),radial-gradient(45% 55% at 80% 25%,#a855f7 0%,transparent 60%),radial-gradient(50% 60% at 30% 80%,#22d3ee 0%,transparent 60%),radial-gradient(45% 50% at 75% 75%,#fb7185 0%,transparent 60%);filter:blur(10px);animation:nuda-gradient-mesh-shift 12s ease-in-out infinite alternate}
      @keyframes nuda-gradient-mesh-shift{0%{background-position:0% 0%,100% 0%,0% 100%,100% 100%}50%{background-position:30% 20%,70% 30%,20% 70%,80% 60%}100%{background-position:10% 30%,90% 10%,30% 90%,60% 80%}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-mesh{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Mesh Gradient -->
<div class="nuda-gradient-mesh" role="img" aria-label="Mesh gradient"></div>`,
      },
    ],
  },

  /* ─────────────── 3. Conic Spin ─────────────── */
  {
    id: "gradient-conic",
    name: "Conic Spin",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-conic" role="img" aria-label="Rotating conic gradient ring" />
    ),
    cssInline: `
      .nuda-gradient-conic{width:130px;height:130px;border-radius:50%;background:conic-gradient(from 0deg,#e4ff54,#22d3ee,#a855f7,#fb7185,#e4ff54);-webkit-mask:radial-gradient(circle,transparent 40%,#000 41%);mask:radial-gradient(circle,transparent 40%,#000 41%);animation:nuda-gradient-conic-spin 4s linear infinite}
      @keyframes nuda-gradient-conic-spin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-conic{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Conic Spin -->
<div class="nuda-gradient-conic" role="img" aria-label="Rotating conic gradient ring"></div>`,
      },
    ],
  },

  /* ─────────────── 4. Flowing Border ─────────────── */
  {
    id: "gradient-border-flow",
    name: "Flowing Border",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-border-flow">
        <div className="nuda-gradient-border-flow__inner">Flowing</div>
      </div>
    ),
    cssInline: `
      .nuda-gradient-border-flow{padding:2px;border-radius:14px;background:linear-gradient(90deg,#e4ff54,#22d3ee,#a855f7,#e4ff54);background-size:300% 100%;animation:nuda-gradient-border-flow-run 4s linear infinite}
      .nuda-gradient-border-flow__inner{display:flex;align-items:center;justify-content:center;width:200px;height:110px;border-radius:12px;background:#09090b;color:#fafafa;font:600 16px/1 system-ui,sans-serif}
      @keyframes nuda-gradient-border-flow-run{to{background-position:300% 0}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-border-flow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Flowing Border Card -->
<div class="nuda-gradient-border-flow">
  <div class="nuda-gradient-border-flow__inner">Flowing</div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Text Shimmer ─────────────── */
  {
    id: "gradient-text-shimmer",
    name: "Text Shimmer",
    category: "Animated Gradients",
    preview: (
      <h2 className="nuda-gradient-text-shimmer">NudaUI</h2>
    ),
    cssInline: `
      .nuda-gradient-text-shimmer{margin:0;font:800 40px/1.1 system-ui,sans-serif;background:linear-gradient(90deg,#3f3f46 0%,#3f3f46 30%,#e4ff54 50%,#3f3f46 70%,#3f3f46 100%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:nuda-gradient-text-shimmer-sweep 2.6s linear infinite}
      @keyframes nuda-gradient-text-shimmer-sweep{to{background-position:-200% 0}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-text-shimmer{animation:none;background-position:50% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Text Shimmer -->
<h2 class="nuda-gradient-text-shimmer">NudaUI</h2>`,
      },
    ],
  },

  /* ─────────────── 6. Gradient Blob ─────────────── */
  {
    id: "gradient-blob",
    name: "Gradient Blob",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-blob" role="img" aria-label="Morphing gradient blob" />
    ),
    cssInline: `
      .nuda-gradient-blob{width:130px;height:130px;background:linear-gradient(135deg,#e4ff54,#22d3ee);border-radius:42% 58% 63% 37%/41% 44% 56% 59%;animation:nuda-gradient-blob-morph 8s ease-in-out infinite,nuda-gradient-blob-hue 12s linear infinite}
      @keyframes nuda-gradient-blob-morph{0%,100%{border-radius:42% 58% 63% 37%/41% 44% 56% 59%;transform:rotate(0deg)}50%{border-radius:62% 38% 34% 66%/57% 63% 37% 43%;transform:rotate(20deg)}}
      @keyframes nuda-gradient-blob-hue{to{filter:hue-rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-blob{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Blob -->
<div class="nuda-gradient-blob" role="img" aria-label="Morphing gradient blob"></div>`,
      },
    ],
  },

  /* ─────────────── 7. Hue Cycle ─────────────── */
  {
    id: "gradient-hue",
    name: "Hue Cycle",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-hue" role="img" aria-label="Full spectrum hue cycle" />
    ),
    cssInline: `
      .nuda-gradient-hue{width:240px;height:140px;border-radius:14px;background:linear-gradient(120deg,#e4ff54,#22d3ee,#a855f7);animation:nuda-gradient-hue-cycle 6s linear infinite}
      @keyframes nuda-gradient-hue-cycle{to{filter:hue-rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-hue{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Hue Cycle Panel -->
<div class="nuda-gradient-hue" role="img" aria-label="Full spectrum hue cycle"></div>`,
      },
    ],
  },

  /* ─────────────── 8. Gradient Button ─────────────── */
  {
    id: "gradient-button",
    name: "Gradient Button",
    category: "Animated Gradients",
    preview: (
      <button className="nuda-gradient-button" type="button">Get Started</button>
    ),
    cssInline: `
      .nuda-gradient-button{border:none;cursor:pointer;padding:14px 28px;border-radius:10px;color:#09090b;font:700 15px/1 system-ui,sans-serif;background:linear-gradient(90deg,#e4ff54,#4ade80,#22d3ee,#e4ff54);background-size:300% 100%;animation:nuda-gradient-button-flow 5s linear infinite;transition:transform .2s ease,box-shadow .2s ease}
      .nuda-gradient-button:hover{transform:translateY(-2px);box-shadow:0 8px 24px -6px rgba(228,255,84,.5)}
      .nuda-gradient-button:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @keyframes nuda-gradient-button-flow{to{background-position:300% 0}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-button{animation:none}.nuda-gradient-button:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Button -->
<button class="nuda-gradient-button" type="button">Get Started</button>`,
      },
    ],
  },

  /* ─────────────── 9. Duotone Shift ─────────────── */
  {
    id: "gradient-duotone",
    name: "Duotone Shift",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-duotone" role="img" aria-label="Shifting duotone gradient tile" />
    ),
    cssInline: `
      .nuda-gradient-duotone{width:140px;height:140px;border-radius:14px;background:linear-gradient(135deg,#09090b 0%,#e4ff54 100%);background-size:100% 100%;animation:nuda-gradient-duotone-shift 5s ease-in-out infinite alternate}
      @keyframes nuda-gradient-duotone-shift{0%{filter:hue-rotate(0deg) contrast(1)}100%{filter:hue-rotate(160deg) contrast(1.3)}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-duotone{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Duotone Shift -->
<div class="nuda-gradient-duotone" role="img" aria-label="Shifting duotone tile"></div>`,
      },
    ],
  },

  /* ─────────────── 10. Gradient Progress ─────────────── */
  {
    id: "gradient-progress-fill",
    name: "Gradient Progress",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-progress" role="progressbar" aria-label="Loading" aria-valuemin={0} aria-valuemax={100} aria-valuenow={65}>
        <div className="nuda-gradient-progress__fill" />
      </div>
    ),
    cssInline: `
      .nuda-gradient-progress{width:220px;height:14px;border-radius:99px;background:#1c1c1f;overflow:hidden}
      .nuda-gradient-progress__fill{width:65%;height:100%;border-radius:99px;background:linear-gradient(90deg,#e4ff54,#22d3ee,#e4ff54);background-size:200% 100%;animation:nuda-gradient-progress-flow 2s linear infinite}
      @keyframes nuda-gradient-progress-flow{to{background-position:200% 0}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-progress__fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Progress Bar -->
<div class="nuda-gradient-progress" role="progressbar"
     aria-label="Loading" aria-valuemin="0" aria-valuemax="100" aria-valuenow="65">
  <div class="nuda-gradient-progress__fill"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 11. Mesh + Grain ─────────────── */
  {
    id: "gradient-noise-mesh",
    name: "Mesh + Grain",
    category: "Animated Gradients",
    preview: (
      <div className="nuda-gradient-noise-mesh" role="img" aria-label="Mesh gradient with grain overlay" />
    ),
    cssInline: `
      .nuda-gradient-noise-mesh{position:relative;width:240px;height:140px;border-radius:14px;overflow:hidden;background:#09090b;background-image:radial-gradient(45% 55% at 25% 30%,#e4ff54 0%,transparent 60%),radial-gradient(50% 55% at 80% 35%,#a855f7 0%,transparent 60%),radial-gradient(50% 60% at 45% 85%,#22d3ee 0%,transparent 60%);animation:nuda-gradient-noise-mesh-shift 12s ease-in-out infinite alternate}
      .nuda-gradient-noise-mesh::after{content:"";position:absolute;inset:0;opacity:.18;background-image:radial-gradient(#fff 1px,transparent 1px);background-size:3px 3px;mix-blend-mode:overlay;animation:nuda-gradient-noise-mesh-grain .6s steps(4) infinite}
      @keyframes nuda-gradient-noise-mesh-shift{0%{background-position:0% 0%,100% 0%,50% 100%}100%{background-position:25% 20%,75% 25%,40% 80%}}
      @keyframes nuda-gradient-noise-mesh-grain{0%{transform:translate(0,0)}25%{transform:translate(-1px,1px)}50%{transform:translate(1px,-1px)}75%{transform:translate(-1px,-1px)}100%{transform:translate(1px,1px)}}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-noise-mesh,.nuda-gradient-noise-mesh::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Mesh + Grain -->
<div class="nuda-gradient-noise-mesh" role="img" aria-label="Mesh gradient with grain overlay"></div>`,
      },
    ],
  },

  /* ─────────────── 12. Spotlight Gradient ─────────────── */
  {
    id: "gradient-spotlight",
    name: "Spotlight Gradient",
    category: "Animated Gradients",
    preview: (
      <div
        className="nuda-gradient-spotlight"
        role="img"
        aria-label="Cursor-following spotlight gradient"
        onPointerMove={(e) => {
          const el = e.currentTarget;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--gradient-spotlight-x", `${((e.clientX - r.left) / r.width) * 100}%`);
          el.style.setProperty("--gradient-spotlight-y", `${((e.clientY - r.top) / r.height) * 100}%`);
        }}
      >
        <span className="nuda-gradient-spotlight__label">Move your cursor</span>
      </div>
    ),
    cssInline: `
      .nuda-gradient-spotlight{--gradient-spotlight-x:50%;--gradient-spotlight-y:50%;position:relative;display:flex;align-items:center;justify-content:center;width:240px;height:140px;border-radius:14px;background:#09090b;border:1px solid #27272a;overflow:hidden;cursor:crosshair}
      .nuda-gradient-spotlight::before{content:"";position:absolute;inset:0;background:radial-gradient(160px circle at var(--gradient-spotlight-x) var(--gradient-spotlight-y),rgba(228,255,84,.45),transparent 60%);transition:background .08s linear}
      .nuda-gradient-spotlight__label{position:relative;color:#a1a1aa;font:600 14px/1 system-ui,sans-serif;pointer-events:none}
      @media (prefers-reduced-motion:reduce){.nuda-gradient-spotlight::before{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Spotlight Gradient -->
<div class="nuda-gradient-spotlight" role="img" aria-label="Cursor-following spotlight gradient">
  <span class="nuda-gradient-spotlight__label">Move your cursor</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Spotlight Gradient — vanilla JS
   Updates CSS custom properties from the pointer position. */

(function () {
  document.querySelectorAll(".nuda-gradient-spotlight").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty("--gradient-spotlight-x", ((e.clientX - r.left) / r.width) * 100 + "%");
      el.style.setProperty("--gradient-spotlight-y", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  });
})();`,
      },
    ],
  },
];
