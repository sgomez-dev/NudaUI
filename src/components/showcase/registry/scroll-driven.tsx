import type { NudaComponent } from "./types";

/* Native CSS scroll-driven animations (animation-timeline: scroll() / view()).
   Each preview is a self-contained scrollable box so the effect plays INSIDE
   the gallery card without page scroll. Every component degrades to a legible
   static end-state when scroll timelines or motion are unavailable. */

export const scrollDriven: NudaComponent[] = [
  /* ─────────────── 1. Reading Progress ─────────────── */
  {
    id: "scroll-progress-bar",
    name: "Reading Progress",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollpb" role="region" aria-label="Reading progress demo">
        <div className="nuda-scrollpb__track" aria-hidden="true">
          <div className="nuda-scrollpb__bar" />
        </div>
        <div className="nuda-scrollpb__scroller">
          <p>Scroll this panel.</p>
          <p>The top bar tracks how far you have read.</p>
          <p>It scales horizontally with scroll progress.</p>
          <p>Pure CSS — no script involved.</p>
          <p>Keep going to fill the bar.</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrollpb{position:relative;height:150px;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;overflow:hidden}
      .nuda-scrollpb__track{position:absolute;inset:0 0 auto 0;height:4px;background:rgba(255,255,255,.06);z-index:2}
      .nuda-scrollpb__bar{height:100%;background:#e4ff54;transform-origin:0 50%;transform:scaleX(1);animation:nuda-scrollpb-fill linear;animation-timeline:scroll(self)}
      .nuda-scrollpb__scroller{height:100%;overflow:auto;padding:1.25rem 1rem 1rem;color:#a1a1aa;font-size:.8rem;line-height:1.7}
      .nuda-scrollpb__scroller p{margin:0 0 1.4rem}
      @keyframes nuda-scrollpb-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollpb__bar{animation:none;animation-timeline:none;transform:scaleX(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Reading progress bar driven by page scroll (CSS only) -->
<div class="nuda-scrollpb__track" role="progressbar"
     aria-label="Reading progress">
  <div class="nuda-scrollpb__bar"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reading Progress
   A top bar that fills as the document scrolls, using a native
   scroll-progress timeline. Animates transform: scaleX (GPU only),
   never width. Customize: --progress-color, --progress-height */

.nuda-scrollpb__track {
  --progress-color: #e4ff54;
  --progress-height: 4px;
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--progress-height);
  background: rgba(255, 255, 255, 0.06);
  z-index: 9999;
}

.nuda-scrollpb__bar {
  height: 100%;
  background: var(--progress-color);
  transform: scaleX(0);
  transform-origin: 0 50%;
  animation: nuda-scrollpb-fill linear;
  animation-timeline: scroll(root block);
}

@keyframes nuda-scrollpb-fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* Browsers without scroll timelines: leave a faint full bar. */
@supports not (animation-timeline: scroll()) {
  .nuda-scrollpb__bar { transform: scaleX(1); opacity: 0.5; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollpb__bar {
    animation: none;
    animation-timeline: none;
    transform: scaleX(1);
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Reveal on View ─────────────── */
  {
    id: "scroll-reveal-view",
    name: "Reveal on View",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollrv" role="region" aria-label="Reveal on view demo">
        <p className="nuda-scrollrv__hint">Scroll ↓</p>
        <div className="nuda-scrollrv__item">Item one</div>
        <div className="nuda-scrollrv__item">Item two</div>
        <div className="nuda-scrollrv__item">Item three</div>
        <div className="nuda-scrollrv__item">Item four</div>
      </div>
    ),
    cssInline: `
      .nuda-scrollrv{height:150px;overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.85rem;display:flex;flex-direction:column;gap:.75rem}
      .nuda-scrollrv__hint{margin:0;color:#52525b;font-size:.7rem;text-align:center;text-transform:uppercase;letter-spacing:.1em}
      .nuda-scrollrv__item{flex:0 0 auto;background:rgba(228,255,84,.05);border:1px solid rgba(228,255,84,.18);border-radius:8px;padding:.7rem 1rem;color:#e4ff54;font-size:.8rem;opacity:0;transform:translateY(18px);animation:nuda-scrollrv-in linear both;animation-timeline:view(block);animation-range:entry 0% entry 55%}
      @keyframes nuda-scrollrv-in{to{opacity:1;transform:translateY(0)}}
      @supports not (animation-timeline:view()){.nuda-scrollrv__item{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollrv__item{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Elements fade + rise as they scroll into view (CSS only) -->
<div class="nuda-scrollrv__item">Item one</div>
<div class="nuda-scrollrv__item">Item two</div>
<div class="nuda-scrollrv__item">Item three</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reveal on View
   Each element fades up as it enters the scrollport, using a native
   view() timeline keyed to its own position. Customize:
   --reveal-distance, --reveal-accent */

.nuda-scrollrv__item {
  --reveal-distance: 18px;
  --reveal-accent: #e4ff54;
  opacity: 0;
  transform: translateY(var(--reveal-distance));
  animation: nuda-scrollrv-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 55%;
}

@keyframes nuda-scrollrv-in {
  to { opacity: 1; transform: translateY(0); }
}

/* Browsers without scroll timelines: show content immediately. */
@supports not (animation-timeline: view()) {
  .nuda-scrollrv__item { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollrv__item {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. Parallax Layer ─────────────── */
  {
    id: "scroll-parallax-layer",
    name: "Parallax Layer",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollpx" role="region" aria-label="Parallax layers demo">
        <div className="nuda-scrollpx__viewport">
          <div className="nuda-scrollpx__layer nuda-scrollpx__layer--back" aria-hidden="true">BG</div>
          <div className="nuda-scrollpx__layer nuda-scrollpx__layer--mid" aria-hidden="true" />
          <div className="nuda-scrollpx__scroller">
            <div className="nuda-scrollpx__spacer" />
            <p className="nuda-scrollpx__fore">Foreground</p>
            <div className="nuda-scrollpx__spacer" />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrollpx{height:150px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-scrollpx__viewport{position:relative;height:100%}
      .nuda-scrollpx__layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
      .nuda-scrollpx__layer--back{color:#27272a;font-size:3rem;font-weight:800;animation:nuda-scrollpx-back linear;animation-timeline:scroll(nearest)}
      .nuda-scrollpx__layer--mid{background:radial-gradient(circle at 50% 40%,rgba(228,255,84,.10),transparent 60%);animation:nuda-scrollpx-mid linear;animation-timeline:scroll(nearest)}
      .nuda-scrollpx__scroller{position:relative;height:100%;overflow:auto;z-index:2}
      .nuda-scrollpx__spacer{height:120px}
      .nuda-scrollpx__fore{margin:0;text-align:center;color:#e4ff54;font-size:1rem;font-weight:700}
      @keyframes nuda-scrollpx-back{to{transform:translateY(-24px)}}
      @keyframes nuda-scrollpx-mid{to{transform:translateY(-48px)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollpx__layer--back,.nuda-scrollpx__layer--mid{animation:none;animation-timeline:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scrollpx__viewport">
  <div class="nuda-scrollpx__layer nuda-scrollpx__layer--back">BG</div>
  <div class="nuda-scrollpx__layer nuda-scrollpx__layer--mid"></div>
  <div class="nuda-scrollpx__scroller">
    <p class="nuda-scrollpx__fore">Foreground</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Parallax Layer
   Background layers translate at different rates from the foreground
   using a shared scroll() timeline. transform only (GPU). */

.nuda-scrollpx__viewport { position: relative; height: 100%; }

.nuda-scrollpx__scroller {
  position: relative;
  height: 100%;
  overflow: auto;
  z-index: 2;
}

.nuda-scrollpx__fore {
  text-align: center;
  color: #e4ff54;
  font-weight: 700;
}

.nuda-scrollpx__layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.nuda-scrollpx__layer--back {
  animation: nuda-scrollpx-back linear;
  animation-timeline: scroll(nearest block);
}

.nuda-scrollpx__layer--mid {
  background: radial-gradient(circle at 50% 40%,
              rgba(228, 255, 84, 0.1), transparent 60%);
  animation: nuda-scrollpx-mid linear;
  animation-timeline: scroll(nearest block);
}

@keyframes nuda-scrollpx-back { to { transform: translateY(-24px); } }
@keyframes nuda-scrollpx-mid  { to { transform: translateY(-48px); } }

@supports not (animation-timeline: scroll()) {
  .nuda-scrollpx__layer--back,
  .nuda-scrollpx__layer--mid { transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollpx__layer--back,
  .nuda-scrollpx__layer--mid {
    animation: none;
    animation-timeline: none;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Sticky Stack ─────────────── */
  {
    id: "scroll-sticky-stack",
    name: "Sticky Stack",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollss" role="region" aria-label="Sticky stacking cards demo">
        <div className="nuda-scrollss__card nuda-scrollss__card--1">Card 01</div>
        <div className="nuda-scrollss__card nuda-scrollss__card--2">Card 02</div>
        <div className="nuda-scrollss__card nuda-scrollss__card--3">Card 03</div>
        <div className="nuda-scrollss__spacer" />
      </div>
    ),
    cssInline: `
      .nuda-scrollss{height:150px;overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.5rem}
      .nuda-scrollss__card{position:sticky;top:.5rem;height:64px;display:flex;align-items:center;justify-content:center;border-radius:10px;font-size:.85rem;font-weight:700;color:#09090b;background:#e4ff54;margin-bottom:.6rem;animation:nuda-scrollss-shrink linear both;animation-timeline:view(block);animation-range:exit 0% exit 100%}
      .nuda-scrollss__card--2{background:#c7e34a}
      .nuda-scrollss__card--3{background:#a9c23e}
      .nuda-scrollss__spacer{height:80px}
      @keyframes nuda-scrollss-shrink{to{transform:scale(.9);filter:brightness(.6)}}
      @supports not (animation-timeline:view()){.nuda-scrollss__card{position:static}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollss__card{animation:none;animation-timeline:none;transform:none;filter:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Cards stick and stack as you scroll past them -->
<div class="nuda-scrollss__card nuda-scrollss__card--1">Card 01</div>
<div class="nuda-scrollss__card nuda-scrollss__card--2">Card 02</div>
<div class="nuda-scrollss__card nuda-scrollss__card--3">Card 03</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sticky Stack
   Sticky cards that shrink + dim as the next card scrolls over them,
   producing a stacked-deck effect. Uses position: sticky + a view()
   timeline. transform / filter only. */

.nuda-scrollss__card {
  position: sticky;
  top: 0.5rem;
  animation: nuda-scrollss-shrink linear both;
  animation-timeline: view(block);
  animation-range: exit 0% exit 100%;
}

.nuda-scrollss__card--2 { background: #c7e34a; }
.nuda-scrollss__card--3 { background: #a9c23e; }

@keyframes nuda-scrollss-shrink {
  to { transform: scale(0.9); filter: brightness(0.6); }
}

@supports not (animation-timeline: view()) {
  /* Without timelines, fall back to a plain (non-sticky) list. */
  .nuda-scrollss__card { position: static; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollss__card {
    animation: none;
    animation-timeline: none;
    transform: none;
    filter: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Image Wipe Reveal ─────────────── */
  {
    id: "scroll-image-wipe",
    name: "Image Wipe Reveal",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollwipe" role="region" aria-label="Image wipe reveal demo">
        <p className="nuda-scrollwipe__hint">Scroll ↓</p>
        <div className="nuda-scrollwipe__panel">
          <div className="nuda-scrollwipe__img">NUDA</div>
        </div>
        <div className="nuda-scrollwipe__panel">
          <div className="nuda-scrollwipe__img">WIPE</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrollwipe{height:150px;overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.85rem;display:flex;flex-direction:column;gap:.85rem}
      .nuda-scrollwipe__hint{margin:0;color:#52525b;font-size:.7rem;text-align:center;text-transform:uppercase;letter-spacing:.1em}
      .nuda-scrollwipe__panel{flex:0 0 auto;height:96px}
      .nuda-scrollwipe__img{height:100%;display:flex;align-items:center;justify-content:center;border-radius:10px;background:linear-gradient(120deg,#1f2937,#e4ff54);color:#09090b;font-weight:800;letter-spacing:.15em;clip-path:inset(0 100% 0 0);animation:nuda-scrollwipe-in linear both;animation-timeline:view(block);animation-range:entry 5% cover 45%}
      @keyframes nuda-scrollwipe-in{to{clip-path:inset(0 0 0 0)}}
      @supports not (animation-timeline:view()){.nuda-scrollwipe__img{clip-path:inset(0 0 0 0)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollwipe__img{animation:none;animation-timeline:none;clip-path:inset(0 0 0 0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Image revealed by a clip-path wipe as it enters view -->
<div class="nuda-scrollwipe__panel">
  <img class="nuda-scrollwipe__img" src="photo.jpg" alt="Reveal" />
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Image Wipe Reveal
   A clip-path inset() wipes the image open as it scrolls into view,
   driven by a view() timeline. clip-path only (GPU compositable). */

.nuda-scrollwipe__panel { height: 96px; }

.nuda-scrollwipe__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(0 100% 0 0);
  animation: nuda-scrollwipe-in linear both;
  animation-timeline: view(block);
  animation-range: entry 5% cover 45%;
}

@keyframes nuda-scrollwipe-in {
  to { clip-path: inset(0 0 0 0); }
}

@supports not (animation-timeline: view()) {
  .nuda-scrollwipe__img { clip-path: inset(0 0 0 0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollwipe__img {
    animation: none;
    animation-timeline: none;
    clip-path: inset(0 0 0 0);
  }
}`,
      },
    ],
  },

  /* ─────────────── 6. Scroll Counter Bar ─────────────── */
  {
    id: "scroll-counter-bar",
    name: "Scroll Counter Bar",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollcb" role="region" aria-label="Scroll counter indicator demo">
        <div className="nuda-scrollcb__rail" aria-hidden="true">
          <div className="nuda-scrollcb__fill" />
          <div className="nuda-scrollcb__knob" />
        </div>
        <div className="nuda-scrollcb__scroller">
          <p>Section 01</p>
          <p>Section 02</p>
          <p>Section 03</p>
          <p>Section 04</p>
          <p>Section 05</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrollcb{position:relative;height:150px;display:flex;gap:.75rem;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.75rem}
      .nuda-scrollcb__rail{position:relative;width:5px;flex:0 0 auto;border-radius:3px;background:rgba(255,255,255,.07);overflow:hidden}
      .nuda-scrollcb__fill{position:absolute;inset:0;background:#e4ff54;transform-origin:50% 0;transform:scaleY(0);animation:nuda-scrollcb-fill linear;animation-timeline:scroll(nearest)}
      .nuda-scrollcb__knob{position:absolute;left:50%;top:0;width:11px;height:11px;margin-left:-5.5px;margin-top:-5.5px;border-radius:50%;background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.6);animation:nuda-scrollcb-knob linear;animation-timeline:scroll(nearest)}
      .nuda-scrollcb__scroller{flex:1;overflow:auto;color:#a1a1aa;font-size:.8rem;line-height:1.6}
      .nuda-scrollcb__scroller p{margin:0 0 1.3rem}
      @keyframes nuda-scrollcb-fill{to{transform:scaleY(1)}}
      @keyframes nuda-scrollcb-knob{to{transform:translateY(120px)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollcb__fill{animation:none;animation-timeline:none;transform:scaleY(1)}.nuda-scrollcb__knob{animation:none;animation-timeline:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- A side rail whose fill + knob track scroll progress -->
<div class="nuda-scrollcb__rail" role="progressbar"
     aria-label="Scroll position">
  <div class="nuda-scrollcb__fill"></div>
  <div class="nuda-scrollcb__knob"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scroll Counter Bar
   A vertical rail with a fill (scaleY) and a knob (translateY) that
   both track scroll progress via scroll() timelines. transform only. */

.nuda-scrollcb__rail { position: relative; overflow: hidden; }

.nuda-scrollcb__fill {
  position: absolute;
  inset: 0;
  background: #e4ff54;
  transform-origin: 50% 0;
  transform: scaleY(0);
  animation: nuda-scrollcb-fill linear;
  animation-timeline: scroll(nearest block);
}

.nuda-scrollcb__knob {
  animation: nuda-scrollcb-knob linear;
  animation-timeline: scroll(nearest block);
}

@keyframes nuda-scrollcb-fill { to { transform: scaleY(1); } }
@keyframes nuda-scrollcb-knob { to { transform: translateY(100%); } }

@supports not (animation-timeline: scroll()) {
  .nuda-scrollcb__fill { transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollcb__fill,
  .nuda-scrollcb__knob {
    animation: none;
    animation-timeline: none;
  }
  .nuda-scrollcb__fill { transform: scaleY(1); }
}`,
      },
    ],
  },

  /* ─────────────── 7. Scroll Color Shift ─────────────── */
  {
    id: "scroll-color-shift",
    name: "Scroll Color Shift",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollcs" role="region" aria-label="Scroll color shift demo">
        <div className="nuda-scrollcs__scroller">
          <p>Scroll to shift hue</p>
          <p>The backdrop drifts</p>
          <p>across the spectrum</p>
          <p>as you move</p>
          <p>through the panel</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrollcs{height:150px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-scrollcs__scroller{height:100%;overflow:auto;padding:1rem;color:#fff;font-size:.85rem;font-weight:600;line-height:1.5;background:linear-gradient(135deg,#09090b,#1a2e05);background-attachment:local;animation:nuda-scrollcs-hue linear;animation-timeline:scroll(self)}
      .nuda-scrollcs__scroller p{margin:0 0 1.3rem;text-shadow:0 1px 4px rgba(0,0,0,.6)}
      @keyframes nuda-scrollcs-hue{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(300deg)}}
      @supports not (animation-timeline:scroll()){.nuda-scrollcs__scroller{filter:hue-rotate(0deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollcs__scroller{animation:none;animation-timeline:none;filter:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Backdrop hue shifts as the panel scrolls -->
<div class="nuda-scrollcs__scroller">
  <p>Scroll to shift hue</p>
  <p>...</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scroll Color Shift
   The container's hue rotates with scroll progress via a scroll(self)
   timeline. Animates filter only (no layout). */

.nuda-scrollcs__scroller {
  background: linear-gradient(135deg, #09090b, #1a2e05);
  animation: nuda-scrollcs-hue linear;
  animation-timeline: scroll(self block);
}

@keyframes nuda-scrollcs-hue {
  from { filter: hue-rotate(0deg); }
  to   { filter: hue-rotate(300deg); }
}

@supports not (animation-timeline: scroll()) {
  .nuda-scrollcs__scroller { filter: hue-rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollcs__scroller {
    animation: none;
    animation-timeline: none;
    filter: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 8. Scroll Rotate ─────────────── */
  {
    id: "scroll-rotate",
    name: "Scroll Rotate",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollrot" role="region" aria-label="Scroll rotate demo">
        <div className="nuda-scrollrot__stage" aria-hidden="true">
          <div className="nuda-scrollrot__mark" />
        </div>
        <div className="nuda-scrollrot__scroller">
          <p>Scroll the panel</p>
          <p>and the badge spins</p>
          <p>in lockstep with</p>
          <p>your scroll position</p>
          <p>— pure CSS.</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrollrot{position:relative;height:150px;display:flex;gap:.75rem;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.85rem}
      .nuda-scrollrot__stage{flex:0 0 auto;width:56px;display:flex;align-items:center;justify-content:center}
      .nuda-scrollrot__mark{width:38px;height:38px;border-radius:9px;background:conic-gradient(from 0deg,#e4ff54,#1a2e05,#e4ff54);box-shadow:0 0 12px rgba(228,255,84,.35);transform:rotate(0deg);animation:nuda-scrollrot-spin linear;animation-timeline:scroll(nearest)}
      .nuda-scrollrot__scroller{flex:1;overflow:auto;color:#a1a1aa;font-size:.8rem;line-height:1.6}
      .nuda-scrollrot__scroller p{margin:0 0 1.3rem}
      @keyframes nuda-scrollrot-spin{to{transform:rotate(360deg)}}
      @supports not (animation-timeline:scroll()){.nuda-scrollrot__mark{transform:rotate(45deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollrot__mark{animation:none;animation-timeline:none;transform:rotate(45deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Badge rotates with scroll progress (CSS only) -->
<div class="nuda-scrollrot__stage">
  <div class="nuda-scrollrot__mark"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scroll Rotate
   An element rotates a full turn across the scroll range using a
   scroll() timeline. transform: rotate only. */

.nuda-scrollrot__stage {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-scrollrot__mark {
  transform: rotate(0deg);
  animation: nuda-scrollrot-spin linear;
  animation-timeline: scroll(nearest block);
}

@keyframes nuda-scrollrot-spin {
  to { transform: rotate(360deg); }
}

@supports not (animation-timeline: scroll()) {
  .nuda-scrollrot__mark { transform: rotate(45deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollrot__mark {
    animation: none;
    animation-timeline: none;
    transform: rotate(45deg);
  }
}`,
      },
    ],
  },

  /* ─────────────── 9. Scale In on View ─────────────── */
  {
    id: "scroll-scale-in",
    name: "Scale In on View",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollsi" role="region" aria-label="Scale in on view demo">
        <p className="nuda-scrollsi__hint">Scroll ↓</p>
        <div className="nuda-scrollsi__tile">A</div>
        <div className="nuda-scrollsi__tile">B</div>
        <div className="nuda-scrollsi__tile">C</div>
        <div className="nuda-scrollsi__tile">D</div>
      </div>
    ),
    cssInline: `
      .nuda-scrollsi{height:150px;overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.85rem;display:flex;flex-direction:column;gap:.75rem}
      .nuda-scrollsi__hint{margin:0;color:#52525b;font-size:.7rem;text-align:center;text-transform:uppercase;letter-spacing:.1em}
      .nuda-scrollsi__tile{flex:0 0 auto;height:54px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.18);color:#e4ff54;font-weight:700;opacity:0;transform:scale(.7);animation:nuda-scrollsi-in linear both;animation-timeline:view(block);animation-range:entry 0% entry 50%}
      @keyframes nuda-scrollsi-in{to{opacity:1;transform:scale(1)}}
      @supports not (animation-timeline:view()){.nuda-scrollsi__tile{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollsi__tile{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tiles scale up as they enter view (CSS only) -->
<div class="nuda-scrollsi__tile">A</div>
<div class="nuda-scrollsi__tile">B</div>
<div class="nuda-scrollsi__tile">C</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scale In on View
   Elements scale from 0.7 to 1 as they enter the scrollport, via a
   view() timeline. transform + opacity only. Customize: --scale-from */

.nuda-scrollsi__tile {
  --scale-from: 0.7;
  opacity: 0;
  transform: scale(var(--scale-from));
  animation: nuda-scrollsi-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 50%;
}

@keyframes nuda-scrollsi-in {
  to { opacity: 1; transform: scale(1); }
}

@supports not (animation-timeline: view()) {
  .nuda-scrollsi__tile { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollsi__tile {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 10. Horizontal Snap ─────────────── */
  {
    id: "scroll-snap-row",
    name: "Horizontal Snap",
    category: "Scroll-Driven",
    preview: (
      <div className="nuda-scrollsnap" role="region" aria-label="Horizontal snap gallery demo">
        <div className="nuda-scrollsnap__row">
          <div className="nuda-scrollsnap__slide">01</div>
          <div className="nuda-scrollsnap__slide">02</div>
          <div className="nuda-scrollsnap__slide">03</div>
          <div className="nuda-scrollsnap__slide">04</div>
          <div className="nuda-scrollsnap__slide">05</div>
        </div>
        <p className="nuda-scrollsnap__hint">Scroll →</p>
      </div>
    ),
    cssInline: `
      .nuda-scrollsnap{height:150px;display:flex;flex-direction:column;justify-content:center;gap:.6rem;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.85rem}
      .nuda-scrollsnap__row{display:flex;gap:.7rem;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:.4rem;scrollbar-width:thin}
      .nuda-scrollsnap__slide{flex:0 0 78%;scroll-snap-align:center;height:80px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.18);color:#e4ff54;font-size:1.1rem;font-weight:700;transform:scale(.92);animation:nuda-scrollsnap-pop linear both;animation-timeline:view(inline);animation-range:cover 30% cover 70%}
      .nuda-scrollsnap__hint{margin:0;color:#52525b;font-size:.7rem;text-align:center;text-transform:uppercase;letter-spacing:.1em}
      @keyframes nuda-scrollsnap-pop{to{transform:scale(1)}}
      @supports not (animation-timeline:view()){.nuda-scrollsnap__slide{transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-scrollsnap__slide{animation:none;animation-timeline:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Horizontal scroll-snap gallery; active slide pops via view() -->
<div class="nuda-scrollsnap__row">
  <div class="nuda-scrollsnap__slide">01</div>
  <div class="nuda-scrollsnap__slide">02</div>
  <div class="nuda-scrollsnap__slide">03</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Horizontal Snap
   A scroll-snap row where the centered slide scales up via an inline
   view() timeline. scroll-snap + transform only (no layout writes). */

.nuda-scrollsnap__row {
  display: flex;
  gap: 0.7rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.nuda-scrollsnap__slide {
  flex: 0 0 78%;
  scroll-snap-align: center;
  transform: scale(0.92);
  animation: nuda-scrollsnap-pop linear both;
  animation-timeline: view(inline);
  animation-range: cover 30% cover 70%;
}

@keyframes nuda-scrollsnap-pop {
  to { transform: scale(1); }
}

@supports not (animation-timeline: view()) {
  .nuda-scrollsnap__slide { transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrollsnap__slide {
    animation: none;
    animation-timeline: none;
    transform: none;
  }
}`,
      },
    ],
  },
];
