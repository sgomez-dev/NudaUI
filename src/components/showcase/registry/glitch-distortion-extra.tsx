import type { NudaComponent } from "./types";

/* ============================================================
   GLITCH & DISTORTION (EXTRA) — 8 copy-paste animation components
   Pure HTML + CSS (one inline SVG filter). No frameworks, no JS.

   BRAND ......... dark #09090b canvas, lime #e4ff54 accent.
                   Secondary hues (cyan / magenta / holo-teal) only
                   where the effect calls for them.
   SEIZURE SAFE .. every burst/flicker fires at most a couple of times
                   per multi-second cycle — nothing exceeds ~1/sec,
                   well under the 3×/sec ceiling. Displacement is kept
                   subtle (single-digit px / low turbulence scale).
                   Every component fully disables its glitch under
                   prefers-reduced-motion and settles to a clean,
                   legible static state.
   GPU-ONLY ...... transform / opacity / filter / clip-path /
                   background-position only. No layout properties are
                   animated inside @keyframes.
   PREFIX ........ mandated "gd2" stem — ids gd2-<slug>, classes
                   nuda-gd2-<slug>, keyframes _nuda-gd2<slug>.
   ============================================================ */

const CAT = "Glitch & Distortion";

export const glitchDistortionExtra: NudaComponent[] = [
  /* -------------------------------------------------------
     1. Wave Ripple Warp — SVG feDisplacementMap ripple
     ------------------------------------------------------- */
  {
    id: "gd2-wave-warp",
    name: "Wave Ripple Warp",
    category: CAT,
    cssInline: `
      .nuda-gd2-wave-warp{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#101014,#09090b)}
      .nuda-gd2-wave-warp__defs{position:absolute;width:0;height:0}
      .nuda-gd2-wave-warp__text{font:900 1.6rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.08em;color:#e4ff54;text-shadow:0 0 10px rgba(228,255,84,.3);filter:url(#gd2-wave-warp-filter);animation:_nuda-gd2wave-warp 6s ease-in-out infinite;will-change:transform}
      @keyframes _nuda-gd2wave-warp{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-wave-warp__text{filter:none;animation:none;transform:none}}
    `,
    preview: (
      <div className="nuda-gd2-wave-warp">
        <svg className="nuda-gd2-wave-warp__defs" aria-hidden="true" focusable="false">
          <defs>
            <filter id="gd2-wave-warp-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.05"
                numOctaves={2}
                seed={7}
                result="gd2-wave-noise"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.012 0.05;0.016 0.04;0.012 0.05"
                  dur="9s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="gd2-wave-noise"
                scale={7}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <span className="nuda-gd2-wave-warp__text">RIPPLE</span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Wave Ripple Warp — an inline SVG filter (feTurbulence +
     feDisplacementMap) ripples the text via a slowly evolving noise
     field; a gentle CSS breathing scale adds extra life. Under
     reduced motion the filter is removed entirely (the SMIL animation
     keeps running invisibly in <defs>, producing no visible output). -->
<div class="nuda-gd2-wave-warp">
  <svg class="nuda-gd2-wave-warp__defs" aria-hidden="true" focusable="false">
    <defs>
      <filter id="gd2-wave-warp-filter" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.05" numOctaves="2" seed="7" result="gd2-wave-noise">
          <animate attributeName="baseFrequency" values="0.012 0.05;0.016 0.04;0.012 0.05" dur="9s" repeatCount="indefinite"></animate>
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="gd2-wave-noise" scale="7" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter>
    </defs>
  </svg>
  <span class="nuda-gd2-wave-warp__text">RIPPLE</span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     2. Lens Distortion — sweeping barrel-bulge lens
     ------------------------------------------------------- */
  {
    id: "gd2-lens-distort",
    name: "Lens Distortion",
    category: CAT,
    cssInline: `
      .nuda-gd2-lens-distort{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-gd2-lens-distort__text{font:900 1.5rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.06em;color:#e4ff54}
      .nuda-gd2-lens-distort__lens{position:absolute;top:15%;bottom:15%;left:0;width:34%;border-radius:50%;background:rgba(228,255,84,.08);backdrop-filter:blur(2px) saturate(1.6) contrast(1.15);-webkit-backdrop-filter:blur(2px) saturate(1.6) contrast(1.15);box-shadow:inset 0 0 0 1px rgba(255,255,255,.15);animation:_nuda-gd2lens-distort 6s steps(10) infinite}
      @keyframes _nuda-gd2lens-distort{0%{transform:translateX(-160%) scale(.9)}45%{transform:translateX(160%) scale(1.12)}55%{transform:translateX(160%) scale(1.12)}100%{transform:translateX(-160%) scale(.9)}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-lens-distort__lens{animation:none;opacity:0}}
    `,
    preview: (
      <div className="nuda-gd2-lens-distort">
        <span className="nuda-gd2-lens-distort__text">DISTORT</span>
        <span className="nuda-gd2-lens-distort__lens" aria-hidden="true"></span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Lens Distortion — a circular "lens" (blur + saturate + contrast
     backdrop-filter, scaled up mid-sweep to fake a barrel bulge) sweeps
     across the text in discrete mechanical steps, then loops. -->
<div class="nuda-gd2-lens-distort">
  <span class="nuda-gd2-lens-distort__text">DISTORT</span>
  <span class="nuda-gd2-lens-distort__lens" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     3. Corrupted JPEG — macroblock compression artefacts
     ------------------------------------------------------- */
  {
    id: "gd2-jpeg-corrupt",
    name: "Corrupted JPEG",
    category: CAT,
    cssInline: `
      .nuda-gd2-jpeg-corrupt{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#121216,#09090b);color:#e4ff54;font:800 1rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em}
      .nuda-gd2-jpeg-corrupt__block{position:absolute;width:22%;height:18%;opacity:0;animation:_nuda-gd2jpeg-corrupt 5s steps(1) infinite}
      .nuda-gd2-jpeg-corrupt__block:nth-of-type(1){top:20%;left:10%;background:rgba(0,229,255,.32);animation-delay:.3s}
      .nuda-gd2-jpeg-corrupt__block:nth-of-type(2){top:55%;left:60%;background:rgba(255,0,212,.3);animation-delay:.6s}
      .nuda-gd2-jpeg-corrupt__block:nth-of-type(3){top:65%;left:15%;background:rgba(228,255,84,.28);animation-delay:.15s}
      .nuda-gd2-jpeg-corrupt__block:nth-of-type(4){top:10%;left:65%;background:rgba(0,229,255,.25);animation-delay:.45s}
      @keyframes _nuda-gd2jpeg-corrupt{0%,90%,100%{opacity:0;transform:translate(0,0)}92%{opacity:1;transform:translate(3px,0)}94%{opacity:1;transform:translate(-3px,2px)}96%{opacity:1;transform:translate(2px,-2px)}98%{opacity:0;transform:translate(0,0)}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-jpeg-corrupt__block{animation:none;opacity:0}}
    `,
    preview: (
      <div className="nuda-gd2-jpeg-corrupt">
        <span>IMG_042</span>
        <span className="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
        <span className="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
        <span className="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
        <span className="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Corrupted JPEG — a few macroblock-colored tiles briefly jitter into
     view once per 5s cycle (a single short burst, not a repeating strobe),
     then vanish, mimicking a compression-error frame. -->
<div class="nuda-gd2-jpeg-corrupt">
  <span>IMG_042</span>
  <span class="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
  <span class="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
  <span class="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
  <span class="nuda-gd2-jpeg-corrupt__block" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     4. Signal Loss — collapse to a single scan line
     ------------------------------------------------------- */
  {
    id: "gd2-signal-loss",
    name: "Signal Loss",
    category: CAT,
    cssInline: `
      .nuda-gd2-signal-loss{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-gd2-signal-loss__text{font:900 1.2rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.1em;color:#e4ff54;text-shadow:0 0 14px rgba(228,255,84,.5);transform-origin:center;animation:_nuda-gd2signal-loss 6s cubic-bezier(.6,0,.4,1) infinite}
      @keyframes _nuda-gd2signal-loss{0%,60%{transform:scaleY(1);opacity:1}68%{transform:scaleY(.04);opacity:1}76%{transform:scaleY(.04);opacity:.6}84%{transform:scaleY(1);opacity:1}100%{transform:scaleY(1);opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-signal-loss__text{animation:none;transform:none;opacity:1}}
    `,
    preview: (
      <div className="nuda-gd2-signal-loss">
        <span className="nuda-gd2-signal-loss__text">NO SIGNAL</span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Signal Loss — the caption collapses vertically to a thin bright
     line and recovers once per 6s cycle, like a CRT powering down.
     A single slow event per cycle — no repeated strobing. -->
<div class="nuda-gd2-signal-loss">
  <span class="nuda-gd2-signal-loss__text">NO SIGNAL</span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     5. Melting Text — dripping paint decay
     ------------------------------------------------------- */
  {
    id: "gd2-melt-drip",
    name: "Melting Text",
    category: CAT,
    cssInline: `
      .nuda-gd2-melt-drip{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:linear-gradient(180deg,#101014,#09090b)}
      .nuda-gd2-melt-drip__text{font:900 1.8rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.05em;color:#e4ff54;filter:blur(0px);animation:_nuda-gd2melt-drip-blur 4.5s ease-in-out infinite}
      .nuda-gd2-melt-drip__drop{position:absolute;top:58%;width:3px;height:14px;border-radius:0 0 3px 3px;background:#e4ff54;opacity:0;transform-origin:top center;animation:_nuda-gd2melt-drip 4.5s ease-in infinite}
      .nuda-gd2-melt-drip__drop:nth-of-type(1){left:38%;animation-delay:.3s}
      .nuda-gd2-melt-drip__drop:nth-of-type(2){left:50%;animation-delay:1.1s}
      .nuda-gd2-melt-drip__drop:nth-of-type(3){left:63%;animation-delay:.7s}
      @keyframes _nuda-gd2melt-drip{0%,20%{transform:translateY(0) scaleY(.2);opacity:0}30%{opacity:.9}70%{transform:translateY(18px) scaleY(1.6);opacity:.7}100%{transform:translateY(30px) scaleY(2);opacity:0}}
      @keyframes _nuda-gd2melt-drip-blur{0%,100%{filter:blur(0px)}50%{filter:blur(.6px)}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-melt-drip__drop{animation:none;opacity:0}.nuda-gd2-melt-drip__text{animation:none;filter:none}}
    `,
    preview: (
      <div className="nuda-gd2-melt-drip">
        <span className="nuda-gd2-melt-drip__text">MELT</span>
        <span className="nuda-gd2-melt-drip__drop" aria-hidden="true"></span>
        <span className="nuda-gd2-melt-drip__drop" aria-hidden="true"></span>
        <span className="nuda-gd2-melt-drip__drop" aria-hidden="true"></span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Melting Text — three thin drip streaks slowly stretch downward
     and fade on staggered loops, while the caption itself carries a
     soft breathing blur, like slowly dripping paint. -->
<div class="nuda-gd2-melt-drip">
  <span class="nuda-gd2-melt-drip__text">MELT</span>
  <span class="nuda-gd2-melt-drip__drop" aria-hidden="true"></span>
  <span class="nuda-gd2-melt-drip__drop" aria-hidden="true"></span>
  <span class="nuda-gd2-melt-drip__drop" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     6. Kaleidoscope — mirrored wedge fracture
     ------------------------------------------------------- */
  {
    id: "gd2-kaleidoscope",
    name: "Kaleidoscope",
    category: CAT,
    cssInline: `
      .nuda-gd2-kaleidoscope{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-gd2-kaleidoscope__core{position:relative;width:14px;height:14px;border-radius:50%;background:#e4ff54;box-shadow:0 0 16px rgba(228,255,84,.6);z-index:2}
      .nuda-gd2-kaleidoscope__ring{position:absolute;inset:8%;border-radius:50%;background:conic-gradient(from 0deg,rgba(228,255,84,.22) 0 30deg,transparent 30deg 60deg,rgba(0,229,255,.18) 60deg 90deg,transparent 90deg 120deg,rgba(255,0,212,.18) 120deg 150deg,transparent 150deg 180deg,rgba(228,255,84,.22) 180deg 210deg,transparent 210deg 240deg,rgba(0,229,255,.18) 240deg 270deg,transparent 270deg 300deg,rgba(255,0,212,.18) 300deg 330deg,transparent 330deg 360deg);mix-blend-mode:screen;animation:_nuda-gd2kaleidoscope-a 14s linear infinite}
      .nuda-gd2-kaleidoscope__ring--b{inset:20%;opacity:.7;animation-name:_nuda-gd2kaleidoscope-b;animation-duration:10s}
      @keyframes _nuda-gd2kaleidoscope-a{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
      @keyframes _nuda-gd2kaleidoscope-b{0%{transform:rotate(0deg) scaleX(-1)}100%{transform:rotate(-360deg) scaleX(-1)}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-kaleidoscope__ring{animation:none;transform:rotate(0deg)}.nuda-gd2-kaleidoscope__ring--b{transform:scaleX(-1)}}
    `,
    preview: (
      <div className="nuda-gd2-kaleidoscope">
        <span className="nuda-gd2-kaleidoscope__core" aria-hidden="true"></span>
        <span className="nuda-gd2-kaleidoscope__ring" aria-hidden="true"></span>
        <span className="nuda-gd2-kaleidoscope__ring nuda-gd2-kaleidoscope__ring--b" aria-hidden="true"></span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Kaleidoscope — two mirrored conic-gradient rings rotate slowly in
     opposite directions around a fixed lime core, fracturing it into a
     kaleidoscope pattern. Smooth, continuous, no strobing. -->
<div class="nuda-gd2-kaleidoscope">
  <span class="nuda-gd2-kaleidoscope__core" aria-hidden="true"></span>
  <span class="nuda-gd2-kaleidoscope__ring" aria-hidden="true"></span>
  <span class="nuda-gd2-kaleidoscope__ring nuda-gd2-kaleidoscope__ring--b" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     7. Hologram — flicker with interference bands
     ------------------------------------------------------- */
  {
    id: "gd2-hologram",
    name: "Hologram",
    category: CAT,
    cssInline: `
      .nuda-gd2-hologram{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:linear-gradient(180deg,#0a1416,#09090b)}
      .nuda-gd2-hologram__text{font:900 1.5rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.1em;color:#8affe0;text-shadow:0 0 12px rgba(138,255,224,.6);animation:_nuda-gd2hologram-flicker 4s steps(1) infinite}
      .nuda-gd2-hologram__bands{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(138,255,224,.12) 0 2px,transparent 2px 8px);background-size:100% 200%;mix-blend-mode:screen;pointer-events:none;animation:_nuda-gd2hologram-scan 3s linear infinite}
      @keyframes _nuda-gd2hologram-flicker{0%,7%,100%{opacity:1}7.5%{opacity:.55}8.5%{opacity:1}44%{opacity:1}44.5%{opacity:.6}46%{opacity:1}}
      @keyframes _nuda-gd2hologram-scan{0%{background-position:0 0}100%{background-position:0 100%}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-hologram__text{animation:none;opacity:1}.nuda-gd2-hologram__bands{animation:none}}
    `,
    preview: (
      <div className="nuda-gd2-hologram">
        <span className="nuda-gd2-hologram__text">HOLO</span>
        <span className="nuda-gd2-hologram__bands" aria-hidden="true"></span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Hologram — translucent cyan projection with slow scanning
     interference bands and two brief flicker dips per 4s cycle
     (~0.5/sec) — far under the 3-flash/sec seizure-safety ceiling. -->
<div class="nuda-gd2-hologram">
  <span class="nuda-gd2-hologram__text">HOLO</span>
  <span class="nuda-gd2-hologram__bands" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* -------------------------------------------------------
     8. No Signal — SMPTE color bars + static
     ------------------------------------------------------- */
  {
    id: "gd2-no-signal",
    name: "No Signal",
    category: CAT,
    cssInline: `
      .nuda-gd2-no-signal{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-gd2-no-signal__bars{position:absolute;inset:0;background:linear-gradient(90deg,#c0c0c0 0 12.5%,#e4ff54 12.5% 25%,#00e5ff 25% 37.5%,#4be07a 37.5% 50%,#ff00d4 50% 62.5%,#ff3b3b 62.5% 75%,#3b5bff 75% 87.5%,#161616 87.5% 100%);opacity:.5}
      .nuda-gd2-no-signal__noise{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.06) 0 1px,transparent 1px 2px),repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 1px,transparent 1px 3px);mix-blend-mode:overlay;animation:_nuda-gd2no-signal-noise 2s steps(4) infinite}
      .nuda-gd2-no-signal__caption{position:relative;font:900 .95rem/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;color:#fafafa;background:rgba(9,9,11,.75);padding:.25rem .5rem;border-radius:4px;animation:_nuda-gd2no-signal-caption 4s steps(1) infinite}
      @keyframes _nuda-gd2no-signal-noise{0%{transform:translate(0,0)}25%{transform:translate(-1%,1%)}50%{transform:translate(1%,-1%)}75%{transform:translate(-1%,-1%)}100%{transform:translate(0,0)}}
      @keyframes _nuda-gd2no-signal-caption{0%,80%,100%{opacity:1}84%{opacity:.4}88%{opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-gd2-no-signal__noise{animation:none}.nuda-gd2-no-signal__caption{animation:none;opacity:1}}
    `,
    preview: (
      <div className="nuda-gd2-no-signal">
        <span className="nuda-gd2-no-signal__bars" aria-hidden="true"></span>
        <span className="nuda-gd2-no-signal__noise" aria-hidden="true"></span>
        <span className="nuda-gd2-no-signal__caption">NO SIGNAL</span>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- No Signal — SMPTE-style color bars under a drifting static-noise
     overlay, with a captioned "NO SIGNAL" tag that dips briefly once
     per 4s cycle. Reduced motion: bars stay put, caption stays solid. -->
<div class="nuda-gd2-no-signal">
  <span class="nuda-gd2-no-signal__bars" aria-hidden="true"></span>
  <span class="nuda-gd2-no-signal__noise" aria-hidden="true"></span>
  <span class="nuda-gd2-no-signal__caption">NO SIGNAL</span>
</div>`,
      },
    ],
  },
];
