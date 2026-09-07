import type { NudaComponent } from "./types";

const CAT = "Animated Gradients";

export const gradientAnimationsExtra: NudaComponent[] = [
  /* ─────────────── 1. Conic Glow Card ─────────────── */
  {
    id: "ga2-conic-glow",
    name: "Conic Glow Card",
    category: CAT,
    preview: (
      <div className="nuda-ga2-conic-glow">
        <div className="nuda-ga2-conic-glow__card">Glow Card</div>
      </div>
    ),
    cssInline: `
      .nuda-ga2-conic-glow{position:relative;width:220px;height:140px;display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box}
      .nuda-ga2-conic-glow::before{content:"";position:absolute;inset:6px;border-radius:18px;background:conic-gradient(from 0deg,#e4ff54,#22d3ee,#a855f7,#e4ff54);filter:blur(20px);opacity:.8;animation:_nuda-ga2conic-glow-spin 6s linear infinite;will-change:transform}
      .nuda-ga2-conic-glow__card{position:relative;z-index:1;width:100%;height:100%;border-radius:12px;background:#111113;border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:#fafafa;font:600 15px/1 system-ui,sans-serif}
      @keyframes _nuda-ga2conic-glow-spin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-ga2-conic-glow::before{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Conic Glow Card -->
<div class="nuda-ga2-conic-glow">
  <div class="nuda-ga2-conic-glow__card">Glow Card</div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Gradient Stroke Path ─────────────── */
  {
    id: "ga2-svg-stroke",
    name: "Gradient Stroke Path",
    category: CAT,
    preview: (
      <svg
        className="nuda-ga2-svg-stroke"
        viewBox="0 0 200 120"
        width="200"
        height="120"
        role="img"
        aria-label="Animated gradient stroke tracing a path"
      >
        <defs>
          <linearGradient id="ga2SvgStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e4ff54" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path
          className="nuda-ga2-svg-stroke__path"
          d="M10,60 C50,10 150,110 190,60"
          fill="none"
          stroke="url(#ga2SvgStrokeGradient)"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
    ),
    cssInline: `
      .nuda-ga2-svg-stroke{width:200px;height:120px;background:#09090b;border-radius:14px}
      .nuda-ga2-svg-stroke__path{stroke-dasharray:260;stroke-dashoffset:260;animation:_nuda-ga2svg-stroke-draw 3s ease-in-out infinite}
      @keyframes _nuda-ga2svg-stroke-draw{0%{stroke-dashoffset:260}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-260}}
      @media (prefers-reduced-motion:reduce){.nuda-ga2-svg-stroke__path{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Stroke Path -->
<svg class="nuda-ga2-svg-stroke" viewBox="0 0 200 120" width="200" height="120"
     role="img" aria-label="Animated gradient stroke tracing a path">
  <defs>
    <linearGradient id="ga2SvgStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e4ff54" />
      <stop offset="50%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
  </defs>
  <path class="nuda-ga2-svg-stroke__path" d="M10,60 C50,10 150,110 190,60"
        fill="none" stroke="url(#ga2SvgStrokeGradient)" stroke-width="4" stroke-linecap="round" />
</svg>`,
      },
    ],
  },

  /* ─────────────── 3. Interpolated Colour Stops ─────────────── */
  {
    id: "ga2-property-stops",
    name: "Interpolated Colour Stops",
    category: CAT,
    preview: (
      <div
        className="nuda-ga2-property-stops"
        role="img"
        aria-label="Gradient colour stops smoothly interpolating via registered custom properties"
      />
    ),
    cssInline: `
      @property --ga2-stop-a{syntax:"<color>";inherits:false;initial-value:#e4ff54}
      @property --ga2-stop-b{syntax:"<color>";inherits:false;initial-value:#a855f7}
      .nuda-ga2-property-stops{width:220px;height:140px;border-radius:14px;background:linear-gradient(135deg,var(--ga2-stop-a,#e4ff54),var(--ga2-stop-b,#a855f7));animation:_nuda-ga2property-stops-cycle 6s ease-in-out infinite}
      @keyframes _nuda-ga2property-stops-cycle{0%,100%{--ga2-stop-a:#e4ff54;--ga2-stop-b:#a855f7}33%{--ga2-stop-a:#22d3ee;--ga2-stop-b:#e4ff54}66%{--ga2-stop-a:#fb7185;--ga2-stop-b:#22d3ee}}
      @media (prefers-reduced-motion:reduce){.nuda-ga2-property-stops{animation:none;background:linear-gradient(135deg,#e4ff54,#a855f7)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Interpolated Colour Stops -->
<div class="nuda-ga2-property-stops" role="img"
     aria-label="Gradient colour stops smoothly interpolating via registered custom properties"></div>`,
      },
    ],
  },

  /* ─────────────── 4. Breathing Spotlight ─────────────── */
  {
    id: "ga2-breathing-spotlight",
    name: "Breathing Spotlight",
    category: CAT,
    preview: (
      <div className="nuda-ga2-breathing-spotlight" role="img" aria-label="Slowly breathing radial spotlight gradient" />
    ),
    cssInline: `
      .nuda-ga2-breathing-spotlight{position:relative;width:220px;height:140px;border-radius:14px;background:#09090b;overflow:hidden}
      .nuda-ga2-breathing-spotlight::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(228,255,84,.55),transparent 55%);animation:_nuda-ga2breathing-spotlight-pulse 4s ease-in-out infinite;will-change:transform,opacity}
      @keyframes _nuda-ga2breathing-spotlight-pulse{0%,100%{transform:scale(.7);opacity:.5}50%{transform:scale(1.15);opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-ga2-breathing-spotlight::before{animation:none;transform:scale(1);opacity:.8}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Breathing Spotlight -->
<div class="nuda-ga2-breathing-spotlight" role="img" aria-label="Slowly breathing radial spotlight gradient"></div>`,
      },
    ],
  },

  /* ─────────────── 5. Holographic Foil ─────────────── */
  {
    id: "ga2-holo-foil",
    name: "Holographic Foil",
    category: CAT,
    preview: (
      <div className="nuda-ga2-holo-foil" role="img" aria-label="Holographic iridescent gradient sheen" />
    ),
    cssInline: `
      .nuda-ga2-holo-foil{position:relative;width:220px;height:140px;border-radius:16px;overflow:hidden;background:linear-gradient(120deg,#e4ff54,#22d3ee,#a855f7,#fb7185,#e4ff54);background-size:250% 250%;animation:_nuda-ga2holo-foil-shift 8s ease-in-out infinite,_nuda-ga2holo-foil-hue 10s linear infinite}
      .nuda-ga2-holo-foil::after{content:"";position:absolute;inset:-50%;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.55) 50%,transparent 60%);background-size:250% 250%;mix-blend-mode:overlay;animation:_nuda-ga2holo-foil-sheen 3.5s linear infinite}
      @keyframes _nuda-ga2holo-foil-shift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
      @keyframes _nuda-ga2holo-foil-hue{to{filter:hue-rotate(360deg)}}
      @keyframes _nuda-ga2holo-foil-sheen{0%{background-position:0% 0%}100%{background-position:200% 200%}}
      @media (prefers-reduced-motion:reduce){.nuda-ga2-holo-foil,.nuda-ga2-holo-foil::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Holographic Foil -->
<div class="nuda-ga2-holo-foil" role="img" aria-label="Holographic iridescent gradient sheen"></div>`,
      },
    ],
  },

  /* ─────────────── 6. Gradient Wipe ─────────────── */
  {
    id: "ga2-wipe",
    name: "Gradient Wipe",
    category: CAT,
    preview: (
      <div className="nuda-ga2-wipe" role="img" aria-label="Diagonal gradient wipe reveal">
        <div className="nuda-ga2-wipe__layer" />
      </div>
    ),
    cssInline: `
      .nuda-ga2-wipe{position:relative;width:220px;height:140px;border-radius:14px;overflow:hidden;background:#161616}
      .nuda-ga2-wipe__layer{position:absolute;inset:0;background:linear-gradient(135deg,#e4ff54,#22d3ee,#a855f7)}
      .nuda-ga2-wipe__layer{animation:_nuda-ga2wipe-reveal 4s ease-in-out infinite}
      @keyframes _nuda-ga2wipe-reveal{0%,100%{clip-path:polygon(0 0,0 0,0 100%,0 100%)}50%{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}}
      @media (prefers-reduced-motion:reduce){.nuda-ga2-wipe__layer{animation:none;clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Wipe -->
<div class="nuda-ga2-wipe" role="img" aria-label="Diagonal gradient wipe reveal">
  <div class="nuda-ga2-wipe__layer"></div>
</div>`,
      },
    ],
  },
];
