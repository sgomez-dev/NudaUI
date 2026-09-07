import type { NudaComponent } from "./types";

/**
 * Noise & Grain — Extra Pack (prefix `ng2`).
 *
 * Twelve additional dependency-free texture/noise treatments that do not
 * duplicate anything already shipped in `noise-grain.tsx` (film grain, grainy
 * card, TV static, scanlines, dither fade, paper texture, grain reveal, grain
 * vignette). Same house idiom: dark #09090b surface + lime #e4ff54 accent,
 * GPU-only animation (transform / opacity / filter / background-position /
 * clip-path), every `cssInline` self-contained and ending in a
 * prefers-reduced-motion block.
 */

// Fine fractal noise — VHS band / static burst / risograph misregistration.
const NOISE_FINE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Softer, lower-frequency noise — sandstorm drift / canvas fibre.
const NOISE_SOFT =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Coarse, blocky noise — chromatic speckle / mesh grain.
const NOISE_COARSE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export const noiseGrainExtra: NudaComponent[] = [
  /* ─────────────── 1. VHS Tape Band ─────────────── */
  {
    id: "ng2-vhs-band",
    name: "VHS Tape Band",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-vhs-band">
        <div className="nuda-ng2-vhs-band__glitch" aria-hidden="true" />
        <span className="nuda-ng2-vhs-band__label">PLAY ▸ SP</span>
        <div className="nuda-ng2-vhs-band__tracking" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ng2-vhs-band{position:relative;width:100%;max-width:220px;height:130px;border-radius:10px;overflow:hidden;background:linear-gradient(160deg,#0e0e10,#09090b);display:flex;align-items:flex-end;padding:10px 12px;isolation:isolate}
      .nuda-ng2-vhs-band__glitch{position:absolute;inset:-40%;width:180%;height:180%;background-image:url("${NOISE_FINE}");background-size:150px 150px;opacity:.16;mix-blend-mode:screen;pointer-events:none;animation:_nuda-ng2vhsband-noise .5s steps(4) infinite}
      .nuda-ng2-vhs-band__tracking{position:absolute;top:0;left:0;right:0;height:14px;background:linear-gradient(180deg,transparent,rgba(228,255,84,.35) 45%,rgba(228,255,84,.5) 50%,rgba(228,255,84,.35) 55%,transparent);mix-blend-mode:screen;pointer-events:none;will-change:transform;animation:_nuda-ng2vhsband-track 5s linear infinite}
      .nuda-ng2-vhs-band__label{position:relative;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;font-weight:700;letter-spacing:.12em;color:#e4ff54;text-shadow:1px 0 rgba(255,80,120,.5),-1px 0 rgba(80,220,255,.4)}
      @keyframes _nuda-ng2vhsband-noise{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-3px,2px,0)}50%{transform:translate3d(2px,-3px,0)}75%{transform:translate3d(-2px,-1px,0)}100%{transform:translate3d(0,0,0)}}
      @keyframes _nuda-ng2vhsband-track{0%{transform:translateY(-20px)}100%{transform:translateY(144px)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-vhs-band__glitch{animation:none;opacity:.1}.nuda-ng2-vhs-band__tracking{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- VHS Tape Band — drifting tracking bar over noise -->
<div class="nuda-ng2-vhs-band">
  <div class="nuda-ng2-vhs-band__glitch" aria-hidden="true"></div>
  <span class="nuda-ng2-vhs-band__label">PLAY ▸ SP</span>
  <div class="nuda-ng2-vhs-band__tracking" aria-hidden="true"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. CRT Grain Combo ─────────────── */
  {
    id: "ng2-crt-combo",
    name: "CRT Grain Combo",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-crt-combo">
        <div className="nuda-ng2-crt-combo__scan" aria-hidden="true" />
        <div className="nuda-ng2-crt-combo__grain" aria-hidden="true" />
        <span className="nuda-ng2-crt-combo__label">REC ●</span>
      </div>
    ),
    cssInline: `
      .nuda-ng2-crt-combo{position:relative;width:100%;max-width:220px;height:130px;border-radius:16px;overflow:hidden;background:radial-gradient(ellipse at 50% 40%,#151518,#09090b 80%);display:flex;align-items:center;justify-content:center;isolation:isolate;box-shadow:inset 0 0 30px rgba(0,0,0,.6)}
      .nuda-ng2-crt-combo__scan{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,rgba(228,255,84,.07) 0,rgba(228,255,84,.07) 1px,transparent 1px,transparent 4px);pointer-events:none;animation:_nuda-ng2crtcombo-roll 6s linear infinite}
      .nuda-ng2-crt-combo__grain{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_FINE}");background-size:130px 130px;opacity:.14;mix-blend-mode:overlay;pointer-events:none;animation:_nuda-ng2crtcombo-grain .6s steps(5) infinite}
      .nuda-ng2-crt-combo__label{position:relative;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;font-weight:700;letter-spacing:.1em;color:#e4ff54;animation:_nuda-ng2crtcombo-blink 2.4s steps(2) infinite}
      @keyframes _nuda-ng2crtcombo-roll{from{background-position:0 0}to{background-position:0 40px}}
      @keyframes _nuda-ng2crtcombo-grain{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-8px,5px,0)}50%{transform:translate3d(6px,-7px,0)}75%{transform:translate3d(-5px,-3px,0)}100%{transform:translate3d(0,0,0)}}
      @keyframes _nuda-ng2crtcombo-blink{0%,60%{opacity:1}80%,100%{opacity:.35}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-crt-combo__scan,.nuda-ng2-crt-combo__grain,.nuda-ng2-crt-combo__label{animation:none}.nuda-ng2-crt-combo__label{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- CRT Grain Combo — scanlines + film grain layered -->
<div class="nuda-ng2-crt-combo">
  <div class="nuda-ng2-crt-combo__scan" aria-hidden="true"></div>
  <div class="nuda-ng2-crt-combo__grain" aria-hidden="true"></div>
  <span class="nuda-ng2-crt-combo__label">REC ●</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Halftone Dots ─────────────── */
  {
    id: "ng2-halftone",
    name: "Halftone Dots",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-halftone">
        <div className="nuda-ng2-halftone__dots" aria-hidden="true" />
        <span className="nuda-ng2-halftone__label">PRINT</span>
      </div>
    ),
    cssInline: `
      .nuda-ng2-halftone{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:#09090b;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-ng2-halftone__dots{position:absolute;inset:0;background-image:radial-gradient(circle,#e4ff54 32%,transparent 34%);background-size:10px 10px;opacity:.5;mix-blend-mode:screen;pointer-events:none;animation:_nuda-ng2halftone-grow 5s ease-in-out infinite}
      .nuda-ng2-halftone__label{position:relative;z-index:1;font-family:ui-sans-serif,system-ui,sans-serif;font-weight:800;font-size:18px;letter-spacing:.08em;color:#fafafa;mix-blend-mode:difference}
      @keyframes _nuda-ng2halftone-grow{0%,100%{background-size:10px 10px;opacity:.4}50%{background-size:13px 13px;opacity:.65}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-halftone__dots{animation:none;background-size:11px 11px;opacity:.45}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Halftone Dots — pulsing print-style dot screen -->
<div class="nuda-ng2-halftone">
  <div class="nuda-ng2-halftone__dots" aria-hidden="true"></div>
  <span class="nuda-ng2-halftone__label">PRINT</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Crosshatch Dither ─────────────── */
  {
    id: "ng2-crosshatch",
    name: "Crosshatch Dither",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-crosshatch">
        <div className="nuda-ng2-crosshatch__lines" aria-hidden="true" />
        <span className="nuda-ng2-crosshatch__label">Sketch</span>
      </div>
    ),
    cssInline: `
      .nuda-ng2-crosshatch{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#151517,#09090b);display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-ng2-crosshatch__lines{position:absolute;inset:0;background-image:repeating-linear-gradient(45deg,rgba(228,255,84,.16) 0,rgba(228,255,84,.16) 1px,transparent 1px,transparent 6px),repeating-linear-gradient(-45deg,rgba(255,255,255,.08) 0,rgba(255,255,255,.08) 1px,transparent 1px,transparent 6px);pointer-events:none;animation:_nuda-ng2crosshatch-shift 9s linear infinite}
      .nuda-ng2-crosshatch__label{position:relative;z-index:1;font-family:ui-serif,Georgia,serif;font-style:italic;font-size:19px;color:#fafafa}
      @keyframes _nuda-ng2crosshatch-shift{0%{background-position:0 0,0 0}100%{background-position:60px 60px,-60px 60px}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-crosshatch__lines{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Crosshatch Dither — drifting diagonal hatch overlay -->
<div class="nuda-ng2-crosshatch">
  <div class="nuda-ng2-crosshatch__lines" aria-hidden="true"></div>
  <span class="nuda-ng2-crosshatch__label">Sketch</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Bayer Dither Gradient ─────────────── */
  {
    id: "ng2-bayer-gradient",
    name: "Bayer Dither Gradient",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-bayer-gradient">
        <div className="nuda-ng2-bayer-gradient__cells" aria-hidden="true" />
        <span className="nuda-ng2-bayer-gradient__label">8-bit</span>
      </div>
    ),
    // Ordered-dither look via a small repeating checker of two dot sizes
    // layered over a lime→dark linear gradient; the pattern gently drifts.
    cssInline: `
      .nuda-ng2-bayer-gradient{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:linear-gradient(115deg,#e4ff54,#3a3f10 55%,#09090b);isolation:isolate}
      .nuda-ng2-bayer-gradient__cells{position:absolute;inset:0;background-image:radial-gradient(circle,#09090b 45%,transparent 46%),radial-gradient(circle,#09090b 45%,transparent 46%),radial-gradient(circle,#09090b 45%,transparent 46%),radial-gradient(circle,#09090b 45%,transparent 46%);background-size:8px 8px;background-position:0 0,4px 4px,2px 6px,6px 2px;opacity:.9;mix-blend-mode:multiply;pointer-events:none;animation:_nuda-ng2bayergrad-drift 10s linear infinite}
      .nuda-ng2-bayer-gradient__label{position:absolute;left:14px;bottom:12px;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;font-weight:700;letter-spacing:.14em;color:#0a0a0a;background:#e4ff54;padding:2px 7px;border-radius:4px}
      @keyframes _nuda-ng2bayergrad-drift{from{background-position:0 0,4px 4px,2px 6px,6px 2px}to{background-position:8px 0,12px 4px,10px 6px,14px 2px}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-bayer-gradient__cells{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bayer Dither Gradient — ordered-dither gradient dissolve -->
<div class="nuda-ng2-bayer-gradient">
  <div class="nuda-ng2-bayer-gradient__cells" aria-hidden="true"></div>
  <span class="nuda-ng2-bayer-gradient__label">8-bit</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Static Burst ─────────────── */
  {
    id: "ng2-static-burst",
    name: "Static Burst",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-static-burst">
        <div className="nuda-ng2-static-burst__noise" aria-hidden="true" />
        <span className="nuda-ng2-static-burst__label">LOST SIGNAL</span>
      </div>
    ),
    // Periodic burst (opacity spikes) capped well under 3 flashes/sec: one
    // 8s cycle contains a single ~0.6s bright burst, the rest stays dim.
    cssInline: `
      .nuda-ng2-static-burst{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:#09090b;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-ng2-static-burst__noise{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_FINE}");background-size:140px 140px;pointer-events:none;animation:_nuda-ng2staticburst-shift .7s steps(5) infinite,_nuda-ng2staticburst-burst 8s ease-in-out infinite}
      .nuda-ng2-static-burst__label{position:relative;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;font-weight:700;letter-spacing:.14em;color:#e4ff54}
      @keyframes _nuda-ng2staticburst-shift{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-9px,6px,0)}50%{transform:translate3d(7px,-8px,0)}75%{transform:translate3d(-6px,-4px,0)}100%{transform:translate3d(0,0,0)}}
      @keyframes _nuda-ng2staticburst-burst{0%,85%{opacity:.12}90%{opacity:.5}95%{opacity:.2}100%{opacity:.12}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-static-burst__noise{animation:none;opacity:.15}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Static Burst — dim static with a rare, brief brightness burst -->
<div class="nuda-ng2-static-burst">
  <div class="nuda-ng2-static-burst__noise" aria-hidden="true"></div>
  <span class="nuda-ng2-static-burst__label">LOST SIGNAL</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Duotone Grain Poster ─────────────── */
  {
    id: "ng2-duotone-poster",
    name: "Duotone Grain Poster",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-duotone-poster">
        <div className="nuda-ng2-duotone-poster__grain" aria-hidden="true" />
        <h4 className="nuda-ng2-duotone-poster__title">ISSUE 04</h4>
        <p className="nuda-ng2-duotone-poster__sub">Analog Series</p>
      </div>
    ),
    cssInline: `
      .nuda-ng2-duotone-poster{position:relative;width:100%;max-width:220px;height:150px;border-radius:10px;overflow:hidden;background:linear-gradient(200deg,#e4ff54 0%,#1a1c06 55%,#09090b 100%);padding:16px;display:flex;flex-direction:column;justify-content:flex-end;isolation:isolate;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-ng2-duotone-poster__grain{position:absolute;inset:-40%;width:180%;height:180%;background-image:url("${NOISE_FINE}");background-size:150px 150px;mix-blend-mode:multiply;opacity:.55;pointer-events:none;animation:_nuda-ng2duotoneposter-drift 14s ease-in-out infinite alternate}
      .nuda-ng2-duotone-poster__title{position:relative;z-index:1;margin:0;font-size:22px;font-weight:800;letter-spacing:.02em;color:#09090b}
      .nuda-ng2-duotone-poster__sub{position:relative;z-index:1;margin:4px 0 0;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(9,9,11,.75)}
      @keyframes _nuda-ng2duotoneposter-drift{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-16px,-10px,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-duotone-poster__grain{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Duotone Grain Poster — lime/black duotone with drifting grain -->
<div class="nuda-ng2-duotone-poster">
  <div class="nuda-ng2-duotone-poster__grain" aria-hidden="true"></div>
  <h4 class="nuda-ng2-duotone-poster__title">ISSUE 04</h4>
  <p class="nuda-ng2-duotone-poster__sub">Analog Series</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Grain Gradient Mesh ─────────────── */
  {
    id: "ng2-mesh-grain",
    name: "Grainy Gradient Mesh",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-mesh-grain">
        <div className="nuda-ng2-mesh-grain__blob nuda-ng2-mesh-grain__blob--a" aria-hidden="true" />
        <div className="nuda-ng2-mesh-grain__blob nuda-ng2-mesh-grain__blob--b" aria-hidden="true" />
        <div className="nuda-ng2-mesh-grain__grain" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ng2-mesh-grain{position:relative;width:100%;max-width:220px;height:130px;border-radius:14px;overflow:hidden;background:#09090b;isolation:isolate}
      .nuda-ng2-mesh-grain__blob{position:absolute;width:110px;height:110px;border-radius:50%;filter:blur(28px);pointer-events:none}
      .nuda-ng2-mesh-grain__blob--a{top:-20px;left:-10px;background:radial-gradient(circle,rgba(228,255,84,.7),transparent 70%);animation:_nuda-ng2meshgrain-a 9s ease-in-out infinite alternate}
      .nuda-ng2-mesh-grain__blob--b{bottom:-30px;right:-20px;background:radial-gradient(circle,rgba(120,80,255,.55),transparent 70%);animation:_nuda-ng2meshgrain-b 11s ease-in-out infinite alternate}
      .nuda-ng2-mesh-grain__grain{position:absolute;inset:0;background-image:url("${NOISE_COARSE}");background-size:120px 120px;opacity:.22;mix-blend-mode:overlay;pointer-events:none}
      @keyframes _nuda-ng2meshgrain-a{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(30px,20px,0) scale(1.2)}}
      @keyframes _nuda-ng2meshgrain-b{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-24px,-16px,0) scale(1.15)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-mesh-grain__blob--a,.nuda-ng2-mesh-grain__blob--b{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grainy Gradient Mesh — drifting blurred blobs with a grain layer -->
<div class="nuda-ng2-mesh-grain">
  <div class="nuda-ng2-mesh-grain__blob nuda-ng2-mesh-grain__blob--a" aria-hidden="true"></div>
  <div class="nuda-ng2-mesh-grain__blob nuda-ng2-mesh-grain__blob--b" aria-hidden="true"></div>
  <div class="nuda-ng2-mesh-grain__grain" aria-hidden="true"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Sandstorm Drift ─────────────── */
  {
    id: "ng2-sandstorm",
    name: "Sandstorm Drift",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-sandstorm">
        <div className="nuda-ng2-sandstorm__haze" aria-hidden="true" />
        <span className="nuda-ng2-sandstorm__label">DUNE-07</span>
      </div>
    ),
    cssInline: `
      .nuda-ng2-sandstorm{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#3a3319,#09090b 75%);display:flex;align-items:flex-end;padding:14px;isolation:isolate}
      .nuda-ng2-sandstorm__haze{position:absolute;inset:-30% -60%;background-image:url("${NOISE_SOFT}");background-size:220px 220px;opacity:.28;mix-blend-mode:overlay;pointer-events:none;animation:_nuda-ng2sandstorm-blow 18s linear infinite}
      .nuda-ng2-sandstorm__label{position:relative;z-index:1;font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;font-weight:600;letter-spacing:.16em;color:#e4ff54}
      @keyframes _nuda-ng2sandstorm-blow{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-140px,0,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-sandstorm__haze{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sandstorm Drift — horizontally blowing soft noise haze -->
<div class="nuda-ng2-sandstorm">
  <div class="nuda-ng2-sandstorm__haze" aria-hidden="true"></div>
  <span class="nuda-ng2-sandstorm__label">DUNE-07</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Grain-On-Hover Photo Card ─────────────── */
  {
    id: "ng2-hover-photo",
    name: "Grain-On-Hover Photo",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-hover-photo" tabIndex={0}>
        <div className="nuda-ng2-hover-photo__img" aria-hidden="true" />
        <div className="nuda-ng2-hover-photo__grain" aria-hidden="true" />
        <span className="nuda-ng2-hover-photo__caption">Hover / Focus</span>
      </div>
    ),
    // Grain only animates on hover/focus; at rest it is a static, legible photo
    // card, so reduced-motion users lose nothing by default.
    cssInline: `
      .nuda-ng2-hover-photo{position:relative;width:100%;max-width:220px;height:140px;border-radius:12px;overflow:hidden;cursor:pointer;isolation:isolate;outline:none}
      .nuda-ng2-hover-photo__img{position:absolute;inset:0;background:linear-gradient(135deg,#2a2e12,#09090b 70%);transition:filter .25s ease}
      .nuda-ng2-hover-photo__grain{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_FINE}");background-size:140px 140px;opacity:0;mix-blend-mode:overlay;pointer-events:none;transition:opacity .2s ease}
      .nuda-ng2-hover-photo__caption{position:absolute;left:12px;bottom:10px;z-index:1;font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;font-weight:600;color:#fafafa;text-shadow:0 1px 3px rgba(0,0,0,.6)}
      .nuda-ng2-hover-photo:hover .nuda-ng2-hover-photo__grain,.nuda-ng2-hover-photo:focus-visible .nuda-ng2-hover-photo__grain{opacity:.3;animation:_nuda-ng2hoverphoto-shift .5s steps(5) infinite}
      .nuda-ng2-hover-photo:hover .nuda-ng2-hover-photo__img,.nuda-ng2-hover-photo:focus-visible .nuda-ng2-hover-photo__img{filter:brightness(.85) saturate(1.2)}
      .nuda-ng2-hover-photo:focus-visible{box-shadow:0 0 0 2px #e4ff54,0 0 0 5px rgba(228,255,84,.25)}
      @keyframes _nuda-ng2hoverphoto-shift{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-8px,5px,0)}50%{transform:translate3d(6px,-7px,0)}75%{transform:translate3d(-5px,-3px,0)}100%{transform:translate3d(0,0,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-hover-photo:hover .nuda-ng2-hover-photo__grain,.nuda-ng2-hover-photo:focus-visible .nuda-ng2-hover-photo__grain{animation:none;opacity:.18}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grain-On-Hover Photo — static at rest, grain animates on hover/focus -->
<div class="nuda-ng2-hover-photo" tabindex="0">
  <div class="nuda-ng2-hover-photo__img" aria-hidden="true"></div>
  <div class="nuda-ng2-hover-photo__grain" aria-hidden="true"></div>
  <span class="nuda-ng2-hover-photo__caption">Hover / Focus</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 11. Chromatic Grain Speckle ─────────────── */
  {
    id: "ng2-chromatic-speckle",
    name: "Chromatic Grain Speckle",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-chromatic-speckle">
        <div className="nuda-ng2-chromatic-speckle__r" aria-hidden="true" />
        <div className="nuda-ng2-chromatic-speckle__b" aria-hidden="true" />
        <span className="nuda-ng2-chromatic-speckle__label">RGB</span>
      </div>
    ),
    cssInline: `
      .nuda-ng2-chromatic-speckle{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:#09090b;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-ng2-chromatic-speckle__r{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_COARSE}");background-size:130px 130px;opacity:.28;mix-blend-mode:screen;filter:sepia(1) saturate(6) hue-rotate(-40deg);pointer-events:none;animation:_nuda-ng2chromspeckle-r .6s steps(5) infinite}
      .nuda-ng2-chromatic-speckle__b{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_COARSE}");background-size:130px 130px;opacity:.24;mix-blend-mode:screen;filter:sepia(1) saturate(6) hue-rotate(150deg);pointer-events:none;animation:_nuda-ng2chromspeckle-b .6s steps(5) infinite reverse}
      .nuda-ng2-chromatic-speckle__label{position:relative;z-index:1;font-family:ui-sans-serif,system-ui,sans-serif;font-weight:800;font-size:20px;letter-spacing:.14em;color:#fafafa}
      @keyframes _nuda-ng2chromspeckle-r{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-6px,3px,0)}50%{transform:translate3d(5px,-5px,0)}75%{transform:translate3d(-4px,-2px,0)}100%{transform:translate3d(0,0,0)}}
      @keyframes _nuda-ng2chromspeckle-b{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(6px,-3px,0)}50%{transform:translate3d(-5px,5px,0)}75%{transform:translate3d(4px,2px,0)}100%{transform:translate3d(0,0,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-chromatic-speckle__r,.nuda-ng2-chromatic-speckle__b{animation:none;opacity:.16}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Chromatic Grain Speckle — RGB-offset noise layers drifting apart -->
<div class="nuda-ng2-chromatic-speckle">
  <div class="nuda-ng2-chromatic-speckle__r" aria-hidden="true"></div>
  <div class="nuda-ng2-chromatic-speckle__b" aria-hidden="true"></div>
  <span class="nuda-ng2-chromatic-speckle__label">RGB</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 12. Risograph Misregistration ─────────────── */
  {
    id: "ng2-riso-misreg",
    name: "Risograph Misregistration",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-ng2-riso-misreg">
        <span className="nuda-ng2-riso-misreg__layer nuda-ng2-riso-misreg__layer--lime">RISO</span>
        <span className="nuda-ng2-riso-misreg__layer nuda-ng2-riso-misreg__layer--pink">RISO</span>
        <div className="nuda-ng2-riso-misreg__grain" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ng2-riso-misreg{position:relative;width:100%;max-width:220px;height:130px;border-radius:10px;overflow:hidden;background:#f3f1e7;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-ng2-riso-misreg__layer{position:absolute;font-family:ui-sans-serif,system-ui,sans-serif;font-weight:800;font-size:30px;letter-spacing:.06em;mix-blend-mode:multiply}
      .nuda-ng2-riso-misreg__layer--lime{color:#c7d93e;animation:_nuda-ng2risomisreg-lime 4.5s ease-in-out infinite}
      .nuda-ng2-riso-misreg__layer--pink{color:#e8558a;animation:_nuda-ng2risomisreg-pink 4.5s ease-in-out infinite}
      .nuda-ng2-riso-misreg__grain{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_SOFT}");background-size:170px 170px;opacity:.22;mix-blend-mode:multiply;pointer-events:none}
      @keyframes _nuda-ng2risomisreg-lime{0%,100%{transform:translate3d(-3px,-2px,0)}50%{transform:translate3d(2px,3px,0)}}
      @keyframes _nuda-ng2risomisreg-pink{0%,100%{transform:translate3d(3px,2px,0)}50%{transform:translate3d(-2px,-3px,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-ng2-riso-misreg__layer--lime,.nuda-ng2-riso-misreg__layer--pink{animation:none;transform:translate3d(-1px,-1px,0)}.nuda-ng2-riso-misreg__layer--pink{transform:translate3d(1px,1px,0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Risograph Misregistration — two offset color layers drift like a riso print -->
<div class="nuda-ng2-riso-misreg">
  <span class="nuda-ng2-riso-misreg__layer nuda-ng2-riso-misreg__layer--lime">RISO</span>
  <span class="nuda-ng2-riso-misreg__layer nuda-ng2-riso-misreg__layer--pink">RISO</span>
  <div class="nuda-ng2-riso-misreg__grain" aria-hidden="true"></div>
</div>`,
      },
    ],
  },
];
