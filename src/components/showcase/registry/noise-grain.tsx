import type { NudaComponent } from "./types";

/**
 * Noise & Grain — self-contained film-grain / texture overlays.
 *
 * House idiom: dark #09090b surface + lime #e4ff54 accent. Every component is
 * GPU-only (transform / opacity / filter / background-position) and ships a
 * minified `cssInline` (drives the live preview) plus a plain HTML tab. The
 * build auto-generates the pretty CSS tab from `cssInline`, so each `cssInline`
 * defines every nuda- class used in the HTML AND an @keyframes for every
 * animation it references, and ends with a prefers-reduced-motion block.
 *
 * Shared SVG fractal-noise data-URIs are embedded inline (dependency-free).
 */

// Fine fractal noise — used for film grain / TV static.
const NOISE_FINE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Softer, lower-frequency noise — used for paper fibre / grainy card.
const NOISE_SOFT =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export const noiseGrain: NudaComponent[] = [
  /* ─────────────── 1. Film Grain ─────────────── */
  {
    id: "grain-overlay",
    name: "Film Grain",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-overlay">
        <div className="nuda-grain-overlay__content">Film Grain</div>
        <div className="nuda-grain-overlay__noise" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-grain-overlay{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#09090b,#1c1c22);display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-grain-overlay__content{font-family:ui-sans-serif,system-ui,sans-serif;font-weight:600;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:#e4ff54}
      .nuda-grain-overlay__noise{position:absolute;inset:-100%;width:300%;height:300%;background-image:url("${NOISE_FINE}");background-size:160px 160px;opacity:.5;mix-blend-mode:overlay;pointer-events:none;animation:_grainOverlayShift .6s steps(6) infinite}
      @keyframes _grainOverlayShift{0%{transform:translate3d(0,0,0)}20%{transform:translate3d(-12px,8px,0)}40%{transform:translate3d(8px,-10px,0)}60%{transform:translate3d(-8px,-6px,0)}80%{transform:translate3d(10px,10px,0)}100%{transform:translate3d(0,0,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-overlay__noise{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Film Grain — animated SVG-noise overlay -->
<div class="nuda-grain-overlay">
  <div class="nuda-grain-overlay__content">Film Grain</div>
  <div class="nuda-grain-overlay__noise" aria-hidden="true"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Grainy Card ─────────────── */
  {
    id: "grain-card",
    name: "Grainy Card",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-card">
        <span className="nuda-grain-card__tag">Texture</span>
        <h4 className="nuda-grain-card__title">Grainy Card</h4>
        <p className="nuda-grain-card__body">Static noise meets a soft lime glow.</p>
      </div>
    ),
    cssInline: `
      .nuda-grain-card{position:relative;width:100%;max-width:220px;border-radius:14px;overflow:hidden;padding:18px;background:radial-gradient(120% 120% at 0% 0%,#1d1d24,#09090b);border:1px solid rgba(228,255,84,.14);isolation:isolate;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-grain-card::after{content:'';position:absolute;inset:0;background-image:url("${NOISE_SOFT}");background-size:200px 200px;opacity:.12;mix-blend-mode:soft-light;pointer-events:none}
      .nuda-grain-card::before{content:'';position:absolute;top:-40%;left:-20%;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.35),transparent 70%);filter:blur(24px);pointer-events:none;animation:_grainCardGlow 7s ease-in-out infinite alternate}
      .nuda-grain-card__tag{position:relative;z-index:1;display:inline-block;font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#09090b;background:#e4ff54;padding:3px 8px;border-radius:6px}
      .nuda-grain-card__title{position:relative;z-index:1;margin:12px 0 6px;font-size:17px;font-weight:600;color:#fafafa}
      .nuda-grain-card__body{position:relative;z-index:1;margin:0;font-size:13px;line-height:1.5;color:#c7c7cf}
      @keyframes _grainCardGlow{0%{transform:translate(0,0) scale(1);opacity:.7}100%{transform:translate(20px,12px) scale(1.15);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-card::before{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grainy Card — static noise texture + lime accent -->
<div class="nuda-grain-card">
  <span class="nuda-grain-card__tag">Texture</span>
  <h4 class="nuda-grain-card__title">Grainy Card</h4>
  <p class="nuda-grain-card__body">Static noise meets a soft lime glow.</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. TV Static ─────────────── */
  {
    id: "grain-tv-static",
    name: "TV Static",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-tv-static">
        <div className="nuda-grain-tv-static__noise" aria-hidden="true" />
        <span className="nuda-grain-tv-static__label">NO SIGNAL</span>
      </div>
    ),
    // Static is kept subtle and slow: steps(4) over 0.8s = ~5 frames/sec on the
    // texture shift, with a separate 3s opacity flicker. Never flashes >3×/sec.
    cssInline: `
      .nuda-grain-tv-static{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:#09090b;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-grain-tv-static__noise{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_FINE}");background-size:140px 140px;opacity:.22;pointer-events:none;animation:_tvStaticShift .8s steps(4) infinite,_tvStaticFlicker 3s ease-in-out infinite}
      .nuda-grain-tv-static__label{position:relative;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;font-weight:700;letter-spacing:.18em;color:#e4ff54;text-shadow:0 0 8px rgba(228,255,84,.5)}
      @keyframes _tvStaticShift{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-10px,6px,0)}50%{transform:translate3d(8px,-8px,0)}75%{transform:translate3d(-6px,-4px,0)}100%{transform:translate3d(0,0,0)}}
      @keyframes _tvStaticFlicker{0%,100%{opacity:.18}50%{opacity:.28}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-tv-static__noise{animation:none;opacity:.2}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- TV Static — subtle flickering static panel (a11y-safe, <=3/s) -->
<div class="nuda-grain-tv-static">
  <div class="nuda-grain-tv-static__noise" aria-hidden="true"></div>
  <span class="nuda-grain-tv-static__label">NO SIGNAL</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Scanlines ─────────────── */
  {
    id: "grain-scanlines",
    name: "Scanlines",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-scanlines">
        <div className="nuda-grain-scanlines__lines" aria-hidden="true" />
        <span className="nuda-grain-scanlines__label">CRT</span>
      </div>
    ),
    cssInline: `
      .nuda-grain-scanlines{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at center,#16161c,#09090b);display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-grain-scanlines__lines{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,rgba(228,255,84,.08) 0,rgba(228,255,84,.08) 1px,transparent 1px,transparent 3px);background-size:100% 3px;pointer-events:none;animation:_scanlinesDrift 8s linear infinite}
      .nuda-grain-scanlines__lines::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(228,255,84,.05));mix-blend-mode:screen}
      .nuda-grain-scanlines__label{position:relative;z-index:1;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:22px;font-weight:700;letter-spacing:.2em;color:#e4ff54;text-shadow:0 0 10px rgba(228,255,84,.45)}
      @keyframes _scanlinesDrift{from{background-position:0 0}to{background-position:0 60px}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-scanlines__lines{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scanlines — slow-drifting scanline overlay -->
<div class="nuda-grain-scanlines">
  <div class="nuda-grain-scanlines__lines" aria-hidden="true"></div>
  <span class="nuda-grain-scanlines__label">CRT</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Dither Fade ─────────────── */
  {
    id: "grain-dither",
    name: "Dither Fade",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-dither" aria-hidden="true">
        <div className="nuda-grain-dither__mask" />
      </div>
    ),
    // Dithered transition: a Bayer-like ordered-dither pattern (layered radial
    // dots at two scales) sweeps via background-position to fake a dissolve.
    cssInline: `
      .nuda-grain-dither{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#e4ff54,#09090b);isolation:isolate}
      .nuda-grain-dither__mask{position:absolute;inset:0;background-color:#09090b;background-image:radial-gradient(circle,#09090b 38%,transparent 42%),radial-gradient(circle,#09090b 38%,transparent 42%);background-size:6px 6px,6px 6px;background-position:0 0,3px 3px;-webkit-mask-image:linear-gradient(90deg,#000,transparent);mask-image:linear-gradient(90deg,#000,transparent);-webkit-mask-size:200% 100%;mask-size:200% 100%;animation:_ditherSweep 6s ease-in-out infinite alternate}
      @keyframes _ditherSweep{0%{-webkit-mask-position:0% 0;mask-position:0% 0}100%{-webkit-mask-position:100% 0;mask-position:100% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-dither__mask{animation:none;-webkit-mask-position:50% 0;mask-position:50% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Dither Fade — dithered gradient transition -->
<div class="nuda-grain-dither" aria-hidden="true">
  <div class="nuda-grain-dither__mask"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Paper Texture ─────────────── */
  {
    id: "grain-paper",
    name: "Paper Texture",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-paper">
        <div className="nuda-grain-paper__fibre" aria-hidden="true" />
        <span className="nuda-grain-paper__label">Paper</span>
      </div>
    ),
    cssInline: `
      .nuda-grain-paper{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#13130f,#09090b);display:flex;align-items:flex-end;padding:16px;isolation:isolate}
      .nuda-grain-paper__fibre{position:absolute;inset:-30%;width:160%;height:160%;background-image:url("${NOISE_SOFT}");background-size:200px 200px;opacity:.16;mix-blend-mode:overlay;pointer-events:none;animation:_paperDrift 24s ease-in-out infinite alternate}
      .nuda-grain-paper__label{position:relative;z-index:1;font-family:ui-serif,Georgia,serif;font-size:20px;font-style:italic;color:#e4ff54}
      @keyframes _paperDrift{0%{transform:translate3d(0,0,0) rotate(0deg)}100%{transform:translate3d(-18px,-12px,0) rotate(.5deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-paper__fibre{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Paper Texture — animated paper-fibre noise surface -->
<div class="nuda-grain-paper">
  <div class="nuda-grain-paper__fibre" aria-hidden="true"></div>
  <span class="nuda-grain-paper__label">Paper</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Grain Reveal ─────────────── */
  {
    id: "grain-reveal",
    name: "Grain Reveal",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-reveal">
        <span className="nuda-grain-reveal__text">NUDA</span>
        <div className="nuda-grain-reveal__grain" aria-hidden="true" />
      </div>
    ),
    // Content emerges as the grain layer dissolves: the noise overlay fades its
    // opacity down and the underlying text fades up, on a loop.
    cssInline: `
      .nuda-grain-reveal{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:#09090b;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-grain-reveal__text{font-family:ui-sans-serif,system-ui,sans-serif;font-size:34px;font-weight:800;letter-spacing:.12em;color:#e4ff54;animation:_grainRevealText 6s ease-in-out infinite}
      .nuda-grain-reveal__grain{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_FINE}");background-size:140px 140px;mix-blend-mode:screen;pointer-events:none;animation:_grainRevealNoise 6s ease-in-out infinite,_grainRevealShift .5s steps(5) infinite}
      @keyframes _grainRevealText{0%,20%{opacity:0;transform:scale(.96)}55%,80%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.96)}}
      @keyframes _grainRevealNoise{0%,20%{opacity:.6}55%,100%{opacity:0}}
      @keyframes _grainRevealShift{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-8px,6px,0)}50%{transform:translate3d(6px,-8px,0)}75%{transform:translate3d(-6px,-4px,0)}100%{transform:translate3d(0,0,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-reveal__text{animation:none;opacity:1;transform:none}.nuda-grain-reveal__grain{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grain Reveal — content emerges as grain dissolves -->
<div class="nuda-grain-reveal">
  <span class="nuda-grain-reveal__text">NUDA</span>
  <div class="nuda-grain-reveal__grain" aria-hidden="true"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Grain Vignette ─────────────── */
  {
    id: "grain-vignette",
    name: "Grain Vignette",
    category: "Noise & Grain",
    preview: (
      <div className="nuda-grain-vignette">
        <span className="nuda-grain-vignette__label">Vignette</span>
        <div className="nuda-grain-vignette__grain" aria-hidden="true" />
        <div className="nuda-grain-vignette__ring" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-grain-vignette{position:relative;width:100%;max-width:220px;height:130px;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at center,#1c1c22,#09090b);display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-grain-vignette__label{position:relative;z-index:1;font-family:ui-sans-serif,system-ui,sans-serif;font-size:16px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#e4ff54}
      .nuda-grain-vignette__grain{position:absolute;inset:-50%;width:200%;height:200%;background-image:url("${NOISE_FINE}");background-size:150px 150px;opacity:.18;mix-blend-mode:overlay;pointer-events:none;animation:_vignetteGrain .5s steps(5) infinite}
      .nuda-grain-vignette__ring{position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,transparent 40%,rgba(9,9,11,.85) 100%);pointer-events:none;animation:_vignetteBreathe 6s ease-in-out infinite}
      @keyframes _vignetteGrain{0%{transform:translate3d(0,0,0)}25%{transform:translate3d(-10px,6px,0)}50%{transform:translate3d(8px,-8px,0)}75%{transform:translate3d(-6px,-4px,0)}100%{transform:translate3d(0,0,0)}}
      @keyframes _vignetteBreathe{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
      @media(prefers-reduced-motion:reduce){.nuda-grain-vignette__grain,.nuda-grain-vignette__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grain Vignette — grain plus a slow breathing vignette -->
<div class="nuda-grain-vignette">
  <span class="nuda-grain-vignette__label">Vignette</span>
  <div class="nuda-grain-vignette__grain" aria-hidden="true"></div>
  <div class="nuda-grain-vignette__ring" aria-hidden="true"></div>
</div>`,
      },
    ],
  },
];
