import type { NudaComponent } from "./types";

const CAT = "Morphing Shapes";

export const morphingShapesExtra: NudaComponent[] = [
  /* ─────────────── Squash & Stretch Ball ─────────────── */
  {
    id: "ms2-squash-ball",
    name: "Squash & Stretch Ball",
    category: CAT,
    preview: (
      <div className="nuda-ms2-squash-ball" role="img" aria-label="Bouncing ball animation">
        <span className="nuda-ms2-squash-ball__shadow" aria-hidden="true" />
        <span className="nuda-ms2-squash-ball__ball" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ms2-squash-ball{position:relative;width:110px;height:130px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:14px}
      .nuda-ms2-squash-ball__ball{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#a3b830);animation:_nuda-ms2SquashBall 1.1s cubic-bezier(.5,0,.5,1) infinite;will-change:transform}
      .nuda-ms2-squash-ball__shadow{position:absolute;bottom:12px;width:40px;height:8px;border-radius:50%;background:rgba(0,0,0,.55);filter:blur(1px);animation:_nuda-ms2SquashShadow 1.1s cubic-bezier(.5,0,.5,1) infinite;will-change:transform,opacity}
      @keyframes _nuda-ms2SquashBall{0%{transform:translateY(-56px) scale(.85,1.2)}45%{transform:translateY(0) scale(1.35,.65)}55%{transform:translateY(0) scale(1.35,.65)}100%{transform:translateY(-56px) scale(.85,1.2)}}
      @keyframes _nuda-ms2SquashShadow{0%{transform:scale(.6);opacity:.2}45%{transform:scale(1.2);opacity:.5}55%{transform:scale(1.2);opacity:.5}100%{transform:scale(.6);opacity:.2}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-squash-ball__ball,.nuda-ms2-squash-ball__shadow{animation:none}.nuda-ms2-squash-ball__ball{transform:translateY(-56px) scale(1,1)}.nuda-ms2-squash-ball__shadow{transform:scale(.6);opacity:.2}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Squash & Stretch Ball -->
<div class="nuda-ms2-squash-ball" role="img" aria-label="Bouncing ball animation">
  <span class="nuda-ms2-squash-ball__shadow" aria-hidden="true"></span>
  <span class="nuda-ms2-squash-ball__ball" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Metaball Merge ─────────────── */
  {
    id: "ms2-metaball-merge",
    name: "Metaball Merge",
    category: CAT,
    preview: (
      <div className="nuda-ms2-metaball-merge" role="img" aria-label="Two blobs merging and separating">
        <div className="nuda-ms2-metaball-merge__group" aria-hidden="true">
          <span className="nuda-ms2-metaball-merge__dot nuda-ms2-metaball-merge__dot--a" />
          <span className="nuda-ms2-metaball-merge__dot nuda-ms2-metaball-merge__dot--b" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ms2-metaball-merge{display:flex;align-items:center;justify-content:center;width:140px;height:100px;background:#09090b;border-radius:12px;overflow:hidden}
      .nuda-ms2-metaball-merge__group{position:relative;width:100px;height:60px;filter:blur(8px) contrast(24);will-change:filter}
      .nuda-ms2-metaball-merge__dot{position:absolute;top:50%;width:44px;height:44px;border-radius:50%;background:#e4ff54;will-change:transform}
      .nuda-ms2-metaball-merge__dot--a{left:30%;transform:translate(-50%,-50%);animation:_nuda-ms2MetaballA 3s ease-in-out infinite}
      .nuda-ms2-metaball-merge__dot--b{left:70%;transform:translate(-50%,-50%);animation:_nuda-ms2MetaballB 3s ease-in-out infinite}
      @keyframes _nuda-ms2MetaballA{0%,100%{transform:translate(-50%,-50%) translateX(0)}50%{transform:translate(-50%,-50%) translateX(20px)}}
      @keyframes _nuda-ms2MetaballB{0%,100%{transform:translate(-50%,-50%) translateX(0)}50%{transform:translate(-50%,-50%) translateX(-20px)}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-metaball-merge__dot--a,.nuda-ms2-metaball-merge__dot--b{animation:none;transform:translate(-50%,-50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Metaball Merge — gooey blend via blur + contrast filter -->
<div class="nuda-ms2-metaball-merge" role="img" aria-label="Two blobs merging and separating">
  <div class="nuda-ms2-metaball-merge__group" aria-hidden="true">
    <span class="nuda-ms2-metaball-merge__dot nuda-ms2-metaball-merge__dot--a"></span>
    <span class="nuda-ms2-metaball-merge__dot nuda-ms2-metaball-merge__dot--b"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── Polygon Cycle ─────────────── */
  {
    id: "ms2-polygon-cycle",
    name: "Polygon Cycle",
    category: CAT,
    preview: (
      <div className="nuda-ms2-polygon-cycle" role="img" aria-label="Shape cycling through triangle, square, pentagon and hexagon">
        <span className="nuda-ms2-polygon-cycle__shape" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ms2-polygon-cycle{display:flex;align-items:center;justify-content:center;width:110px;height:110px}
      .nuda-ms2-polygon-cycle__shape{width:70px;height:70px;background:linear-gradient(135deg,#e4ff54,#a3b830);animation:_nuda-ms2PolygonCycle 6s ease-in-out infinite;will-change:clip-path,transform}
      @keyframes _nuda-ms2PolygonCycle{0%{clip-path:polygon(50% 0%,0% 100%,100% 100%);transform:rotate(0deg)}25%{clip-path:polygon(0 0,100% 0,100% 100%,0 100%);transform:rotate(90deg)}50%{clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);transform:rotate(180deg)}75%{clip-path:polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%);transform:rotate(270deg)}100%{clip-path:polygon(50% 0%,0% 100%,100% 100%);transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-polygon-cycle__shape{animation:none;clip-path:polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Polygon Cycle -->
<div class="nuda-ms2-polygon-cycle" role="img" aria-label="Shape cycling through triangle, square, pentagon and hexagon">
  <span class="nuda-ms2-polygon-cycle__shape" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Play/Pause/Stop Morph ─────────────── */
  {
    id: "ms2-play-pause",
    name: "Play/Pause/Stop Morph",
    category: CAT,
    preview: (
      <div className="nuda-ms2-play-pause" role="img" aria-label="Icon looping between play, pause and stop">
        <span className="nuda-ms2-play-pause__icon" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ms2-play-pause{display:flex;align-items:center;justify-content:center;width:96px;height:96px;background:#161616;border-radius:12px}
      .nuda-ms2-play-pause__icon{width:56px;height:56px;background:#e4ff54;animation:_nuda-ms2PlayPause 6s ease-in-out infinite;will-change:clip-path}
      @keyframes _nuda-ms2PlayPause{0%,16%{clip-path:path("M14 8 L14 48 L46 28 Z")}33%,49%{clip-path:path("M14 8 L24 8 L24 48 L14 48 Z M32 8 L42 8 L42 48 L32 48 Z")}66%,82%{clip-path:path("M14 14 L42 14 L42 42 L14 42 Z")}100%{clip-path:path("M14 8 L14 48 L46 28 Z")}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-play-pause__icon{animation:none;clip-path:path("M14 8 L14 48 L46 28 Z")}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Play/Pause/Stop Morph — clip-path: path() cycles the icon shape -->
<div class="nuda-ms2-play-pause" role="img" aria-label="Icon looping between play, pause and stop">
  <span class="nuda-ms2-play-pause__icon" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Plus / Check Morph ─────────────── */
  {
    id: "ms2-plus-check",
    name: "Plus / Check Morph",
    category: CAT,
    preview: (
      <div className="nuda-ms2-plus-check" role="img" aria-label="Plus icon morphing into a checkmark">
        <span className="nuda-ms2-plus-check__icon" aria-hidden="true">
          <i className="nuda-ms2-plus-check__bar nuda-ms2-plus-check__bar--v" />
          <i className="nuda-ms2-plus-check__bar nuda-ms2-plus-check__bar--h" />
        </span>
      </div>
    ),
    cssInline: `
      .nuda-ms2-plus-check{display:flex;align-items:center;justify-content:center;width:96px;height:96px}
      .nuda-ms2-plus-check__icon{position:relative;width:40px;height:40px}
      .nuda-ms2-plus-check__bar{position:absolute;top:50%;left:50%;width:26px;height:3px;margin:-1.5px 0 0 -13px;border-radius:2px;background:#e4ff54;will-change:transform}
      .nuda-ms2-plus-check__bar--v{animation:_nuda-ms2PlusCheckV 4s ease-in-out infinite}
      .nuda-ms2-plus-check__bar--h{animation:_nuda-ms2PlusCheckH 4s ease-in-out infinite}
      @keyframes _nuda-ms2PlusCheckV{0%,20%{transform:rotate(90deg) translate(0,0) scaleX(1)}50%,70%{transform:rotate(45deg) translate(-8px,5px) scaleX(.55)}100%{transform:rotate(90deg) translate(0,0) scaleX(1)}}
      @keyframes _nuda-ms2PlusCheckH{0%,20%{transform:rotate(0deg) translate(0,0) scaleX(1)}50%,70%{transform:rotate(-45deg) translate(5px,-8px) scaleX(1.25)}100%{transform:rotate(0deg) translate(0,0) scaleX(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-plus-check__bar--v,.nuda-ms2-plus-check__bar--h{animation:none}.nuda-ms2-plus-check__bar--v{transform:rotate(90deg)}.nuda-ms2-plus-check__bar--h{transform:rotate(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Plus / Check Morph -->
<div class="nuda-ms2-plus-check" role="img" aria-label="Plus icon morphing into a checkmark">
  <span class="nuda-ms2-plus-check__icon" aria-hidden="true">
    <i class="nuda-ms2-plus-check__bar nuda-ms2-plus-check__bar--v"></i>
    <i class="nuda-ms2-plus-check__bar nuda-ms2-plus-check__bar--h"></i>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── Arrow Bend ─────────────── */
  {
    id: "ms2-arrow-bend",
    name: "Arrow Bend",
    category: CAT,
    preview: (
      <div className="nuda-ms2-arrow-bend" role="img" aria-label="Arrow rotating through the four cardinal directions">
        <span className="nuda-ms2-arrow-bend__shape" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ms2-arrow-bend{display:flex;align-items:center;justify-content:center;width:100px;height:100px}
      .nuda-ms2-arrow-bend__shape{width:64px;height:64px;background:linear-gradient(135deg,#e4ff54,#a3b830);clip-path:polygon(50% 0%,100% 50%,68% 50%,68% 100%,32% 100%,32% 50%,0% 50%);animation:_nuda-ms2ArrowBend 4s ease-in-out infinite;will-change:transform}
      @keyframes _nuda-ms2ArrowBend{0%{transform:rotate(0deg) scale(1)}20%{transform:rotate(0deg) scale(1.08)}25%{transform:rotate(90deg) scale(1)}45%{transform:rotate(90deg) scale(1.08)}50%{transform:rotate(180deg) scale(1)}70%{transform:rotate(180deg) scale(1.08)}75%{transform:rotate(270deg) scale(1)}95%{transform:rotate(270deg) scale(1.08)}100%{transform:rotate(360deg) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-arrow-bend__shape{animation:none;transform:rotate(0deg) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Arrow Bend -->
<div class="nuda-ms2-arrow-bend" role="img" aria-label="Arrow rotating through the four cardinal directions">
  <span class="nuda-ms2-arrow-bend__shape" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Origami Fold ─────────────── */
  {
    id: "ms2-origami-fold",
    name: "Origami Fold",
    category: CAT,
    preview: (
      <div className="nuda-ms2-origami-fold" role="img" aria-label="Paper panels folding open and closed">
        <div className="nuda-ms2-origami-fold__paper" aria-hidden="true">
          <span className="nuda-ms2-origami-fold__panel nuda-ms2-origami-fold__panel--l" />
          <span className="nuda-ms2-origami-fold__panel nuda-ms2-origami-fold__panel--r" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ms2-origami-fold{display:flex;align-items:center;justify-content:center;width:110px;height:110px;perspective:600px}
      .nuda-ms2-origami-fold__paper{position:relative;width:70px;height:70px;transform-style:preserve-3d}
      .nuda-ms2-origami-fold__panel{position:absolute;inset:0;will-change:transform}
      .nuda-ms2-origami-fold__panel--l{clip-path:polygon(0 0,50% 0,50% 100%,0 100%);transform-origin:right center;background:linear-gradient(135deg,#e4ff54,#c9e83f);animation:_nuda-ms2OrigamiFoldL 4s ease-in-out infinite}
      .nuda-ms2-origami-fold__panel--r{clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%);transform-origin:left center;background:linear-gradient(135deg,#a3b830,#7d8f24);animation:_nuda-ms2OrigamiFoldR 4s ease-in-out infinite}
      @keyframes _nuda-ms2OrigamiFoldL{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(-130deg)}}
      @keyframes _nuda-ms2OrigamiFoldR{0%,100%{transform:rotateY(0deg)}50%{transform:rotateY(130deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-origami-fold__panel--l,.nuda-ms2-origami-fold__panel--r{animation:none;transform:rotateY(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Origami Fold -->
<div class="nuda-ms2-origami-fold" role="img" aria-label="Paper panels folding open and closed">
  <div class="nuda-ms2-origami-fold__paper" aria-hidden="true">
    <span class="nuda-ms2-origami-fold__panel nuda-ms2-origami-fold__panel--l"></span>
    <span class="nuda-ms2-origami-fold__panel nuda-ms2-origami-fold__panel--r"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── Squircle Breathe ─────────────── */
  {
    id: "ms2-squircle-breathe",
    name: "Squircle Breathe",
    category: CAT,
    preview: (
      <div className="nuda-ms2-squircle-breathe" role="img" aria-label="Rounded square breathing in and out">
        <span className="nuda-ms2-squircle-breathe__shape" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ms2-squircle-breathe{display:flex;align-items:center;justify-content:center;padding:20px}
      .nuda-ms2-squircle-breathe__shape{width:72px;height:72px;background:linear-gradient(135deg,#e4ff54,#a3b830);border-radius:28%;animation:_nuda-ms2SquircleBreathe 3.2s ease-in-out infinite;will-change:transform,border-radius}
      @keyframes _nuda-ms2SquircleBreathe{0%,100%{border-radius:28%;transform:scale(1)}50%{border-radius:38%;transform:scale(1.05)}}
      @media (prefers-reduced-motion:reduce){.nuda-ms2-squircle-breathe__shape{animation:none;border-radius:28%;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Squircle Breathe -->
<div class="nuda-ms2-squircle-breathe" role="img" aria-label="Rounded square breathing in and out">
  <span class="nuda-ms2-squircle-breathe__shape" aria-hidden="true"></span>
</div>`,
      },
    ],
  },
];
