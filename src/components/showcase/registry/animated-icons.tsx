import type { NudaComponent } from "./types";

/**
 * Animated Icons — copy-paste icon state morphs.
 *
 * Each component is a single <button> that toggles between two icon states;
 * the morph is driven purely by CSS transforms on SVG sub-paths / pseudo
 * elements (GPU-only: transform / opacity / stroke-dashoffset / filter).
 *
 * Conventions:
 *  - id / class / keyframe stem: "icon-"
 *  - brand: dark #09090b surface, lime #e4ff54 active accent
 *  - preview uses an inline React onClick to flip aria-pressed/class state
 *  - copyable HTML + framework-free vanilla JS reproduce the same toggle
 *  - every cssInline ends with a prefers-reduced-motion snap (no tween)
 */
export const animatedIcons: NudaComponent[] = [
  /* ─────────────── 1. Menu to Close ─────────────── */
  {
    id: "icon-hamburger-x",
    name: "Menu to Close",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-burger"
        type="button"
        aria-label="Toggle menu"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true"));
        }}
      >
        <svg className="nuda-icon-burger__svg" viewBox="0 0 24 24" aria-hidden="true">
          <line className="nuda-icon-burger__top" x1="3" y1="6" x2="21" y2="6" />
          <line className="nuda-icon-burger__mid" x1="3" y1="12" x2="21" y2="12" />
          <line className="nuda-icon-burger__bot" x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-burger{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-burger:hover,.nuda-icon-burger:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-burger:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-burger[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-burger__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;fill:none}
      .nuda-icon-burger__svg line{transition:transform .3s cubic-bezier(.4,.2,.2,1),opacity .2s;transform-origin:center}
      .nuda-icon-burger[aria-pressed="true"] .nuda-icon-burger__top{transform:translateY(6px) rotate(45deg)}
      .nuda-icon-burger[aria-pressed="true"] .nuda-icon-burger__mid{opacity:0;transform:scaleX(0)}
      .nuda-icon-burger[aria-pressed="true"] .nuda-icon-burger__bot{transform:translateY(-6px) rotate(-45deg)}
      @media (prefers-reduced-motion:reduce){.nuda-icon-burger__svg line{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-burger" type="button" aria-label="Toggle menu" aria-pressed="false">
  <svg class="nuda-icon-burger__svg" viewBox="0 0 24 24" aria-hidden="true">
    <line class="nuda-icon-burger__top" x1="3" y1="6"  x2="21" y2="6" />
    <line class="nuda-icon-burger__mid" x1="3" y1="12" x2="21" y2="12" />
    <line class="nuda-icon-burger__bot" x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Menu to Close
   Three bars rotate/collapse into an X. Active state lights up lime.
   GPU-only: transform + opacity. Customize: --icon-accent */

.nuda-icon-burger {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-burger:hover,
.nuda-icon-burger:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-burger:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-burger[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-burger__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.nuda-icon-burger__svg line {
  transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.2s;
  transform-origin: center;
  will-change: transform, opacity;
}

.nuda-icon-burger[aria-pressed="true"] .nuda-icon-burger__top {
  transform: translateY(6px) rotate(45deg);
}

.nuda-icon-burger[aria-pressed="true"] .nuda-icon-burger__mid {
  opacity: 0;
  transform: scaleX(0);
}

.nuda-icon-burger[aria-pressed="true"] .nuda-icon-burger__bot {
  transform: translateY(-6px) rotate(-45deg);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-burger__svg line { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Menu to Close — vanilla JS
   Flips aria-pressed; CSS handles the morph. */

(function () {
  document.querySelectorAll(".nuda-icon-burger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Play to Pause ─────────────── */
  {
    id: "icon-play-pause",
    name: "Play to Pause",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-playpause"
        type="button"
        aria-label="Play"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Pause" : "Play");
        }}
      >
        <svg className="nuda-icon-playpause__svg" viewBox="0 0 24 24" aria-hidden="true">
          <rect className="nuda-icon-playpause__l" x="6" y="5" width="5" height="14" rx="1.2" />
          <rect className="nuda-icon-playpause__r" x="13" y="5" width="5" height="14" rx="1.2" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-playpause{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:50%;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-playpause:hover,.nuda-icon-playpause:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-playpause:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-playpause[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-playpause__svg{width:22px;height:22px;fill:currentColor}
      .nuda-icon-playpause__svg rect{transition:transform .35s cubic-bezier(.4,.2,.2,1),opacity .25s;transform-origin:center}
      .nuda-icon-playpause__l{transform:translateX(2px) scaleX(.55) skewX(0deg)}
      .nuda-icon-playpause__r{opacity:0;transform:translateX(-4px) scaleX(.2)}
      .nuda-icon-playpause[aria-pressed="true"] .nuda-icon-playpause__l{transform:translateX(0) scaleX(1)}
      .nuda-icon-playpause[aria-pressed="true"] .nuda-icon-playpause__r{opacity:1;transform:translateX(0) scaleX(1)}
      @media (prefers-reduced-motion:reduce){.nuda-icon-playpause__svg rect{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-playpause" type="button" aria-label="Play" aria-pressed="false">
  <svg class="nuda-icon-playpause__svg" viewBox="0 0 24 24" aria-hidden="true">
    <rect class="nuda-icon-playpause__l" x="6"  y="5" width="5" height="14" rx="1.2" />
    <rect class="nuda-icon-playpause__r" x="13" y="5" width="5" height="14" rx="1.2" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Play to Pause
   Two bars: collapsed (play wedge) → split apart (pause). Lime when playing.
   GPU-only: transform + opacity. Customize: --icon-accent */

.nuda-icon-playpause {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-playpause:hover,
.nuda-icon-playpause:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-playpause:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-playpause[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-playpause__svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.nuda-icon-playpause__svg rect {
  transition: transform 0.35s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.25s;
  transform-origin: center;
  will-change: transform, opacity;
}

/* Paused/idle = play look: one slim wedge, second bar hidden */
.nuda-icon-playpause__l { transform: translateX(2px) scaleX(0.55); }
.nuda-icon-playpause__r { opacity: 0; transform: translateX(-4px) scaleX(0.2); }

/* Playing = pause look: two full bars */
.nuda-icon-playpause[aria-pressed="true"] .nuda-icon-playpause__l {
  transform: translateX(0) scaleX(1);
}
.nuda-icon-playpause[aria-pressed="true"] .nuda-icon-playpause__r {
  opacity: 1;
  transform: translateX(0) scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-playpause__svg rect { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Play to Pause — vanilla JS
   Flips aria-pressed and keeps the label in sync. */

(function () {
  document.querySelectorAll(".nuda-icon-playpause").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var playing = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(playing));
      btn.setAttribute("aria-label", playing ? "Pause" : "Play");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Plus to Close ─────────────── */
  {
    id: "icon-plus-close",
    name: "Plus to Close",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-plus"
        type="button"
        aria-label="Add"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Close" : "Add");
        }}
      >
        <svg className="nuda-icon-plus__svg" viewBox="0 0 24 24" aria-hidden="true">
          <line className="nuda-icon-plus__h" x1="5" y1="12" x2="19" y2="12" />
          <line className="nuda-icon-plus__v" x1="12" y1="5" x2="12" y2="19" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-plus{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-plus:hover,.nuda-icon-plus:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-plus:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-plus[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-plus__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;fill:none;transition:transform .4s cubic-bezier(.4,.2,.2,1.2);transform-origin:center}
      .nuda-icon-plus[aria-pressed="true"] .nuda-icon-plus__svg{transform:rotate(135deg)}
      .nuda-icon-plus__svg line{transition:transform .4s cubic-bezier(.4,.2,.2,1.2);transform-origin:center}
      .nuda-icon-plus[aria-pressed="true"] .nuda-icon-plus__h{transform:scaleX(.72)}
      .nuda-icon-plus[aria-pressed="true"] .nuda-icon-plus__v{transform:scaleY(.72)}
      @media (prefers-reduced-motion:reduce){.nuda-icon-plus__svg,.nuda-icon-plus__svg line{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-plus" type="button" aria-label="Add" aria-pressed="false">
  <svg class="nuda-icon-plus__svg" viewBox="0 0 24 24" aria-hidden="true">
    <line class="nuda-icon-plus__h" x1="5"  y1="12" x2="19" y2="12" />
    <line class="nuda-icon-plus__v" x1="12" y1="5"  x2="12" y2="19" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Plus to Close
   The whole glyph rotates 135deg; the two strokes shrink slightly so the X
   reads balanced. GPU-only: transform. Customize: --icon-accent */

.nuda-icon-plus {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-plus:hover,
.nuda-icon-plus:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-plus:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-plus[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-plus__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1.2);
  transform-origin: center;
  will-change: transform;
}

.nuda-icon-plus[aria-pressed="true"] .nuda-icon-plus__svg {
  transform: rotate(135deg);
}

.nuda-icon-plus__svg line {
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1.2);
  transform-origin: center;
}

.nuda-icon-plus[aria-pressed="true"] .nuda-icon-plus__h { transform: scaleX(0.72); }
.nuda-icon-plus[aria-pressed="true"] .nuda-icon-plus__v { transform: scaleY(0.72); }

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-plus__svg,
  .nuda-icon-plus__svg line { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Plus to Close — vanilla JS
   Flips aria-pressed and label; CSS rotates the glyph. */

(function () {
  document.querySelectorAll(".nuda-icon-plus").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(open));
      btn.setAttribute("aria-label", open ? "Close" : "Add");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. Search to Back ─────────────── */
  {
    id: "icon-search-back",
    name: "Search to Back",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-search"
        type="button"
        aria-label="Search"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Back" : "Search");
        }}
      >
        <svg className="nuda-icon-search__svg" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="nuda-icon-search__lens" cx="11" cy="11" r="6" />
          <line className="nuda-icon-search__handle" x1="20" y1="20" x2="15.5" y2="15.5" />
          <polyline className="nuda-icon-search__head" points="11 7 7 12 11 17" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-search{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-search:hover,.nuda-icon-search:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-search:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-search[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-search__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-icon-search__svg>*{transition:transform .4s cubic-bezier(.4,.2,.2,1),opacity .3s,stroke-dashoffset .4s;transform-origin:center}
      .nuda-icon-search__lens{transition:transform .4s cubic-bezier(.4,.2,.2,1),opacity .3s}
      .nuda-icon-search__handle{transition:transform .4s cubic-bezier(.4,.2,.2,1),opacity .3s;transform-origin:11px 11px}
      .nuda-icon-search__head{stroke-dasharray:18;stroke-dashoffset:18;opacity:0}
      .nuda-icon-search[aria-pressed="true"] .nuda-icon-search__lens{opacity:0;transform:scale(.4)}
      .nuda-icon-search[aria-pressed="true"] .nuda-icon-search__handle{transform:rotate(-45deg) scaleX(1.35)}
      .nuda-icon-search[aria-pressed="true"] .nuda-icon-search__head{opacity:1;stroke-dashoffset:0;transition-delay:.12s}
      @media (prefers-reduced-motion:reduce){.nuda-icon-search__svg>*{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-search" type="button" aria-label="Search" aria-pressed="false">
  <svg class="nuda-icon-search__svg" viewBox="0 0 24 24" aria-hidden="true">
    <circle   class="nuda-icon-search__lens"   cx="11" cy="11" r="6" />
    <line     class="nuda-icon-search__handle" x1="20" y1="20" x2="15.5" y2="15.5" />
    <polyline class="nuda-icon-search__head"   points="11 7 7 12 11 17" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Search to Back
   The lens fades out, the handle rotates flat into a shaft, and an arrow head
   draws in via stroke-dashoffset. GPU-only: transform + opacity + dashoffset.
   Customize: --icon-accent */

.nuda-icon-search {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-search:hover,
.nuda-icon-search:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-search:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-search[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-search__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.nuda-icon-search__lens {
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.3s;
  transform-origin: center;
  will-change: transform, opacity;
}

.nuda-icon-search__handle {
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.3s;
  transform-origin: 11px 11px;
  will-change: transform;
}

.nuda-icon-search__head {
  stroke-dasharray: 18;
  stroke-dashoffset: 18;
  opacity: 0;
  transition: stroke-dashoffset 0.4s, opacity 0.3s;
}

.nuda-icon-search[aria-pressed="true"] .nuda-icon-search__lens {
  opacity: 0;
  transform: scale(0.4);
}

.nuda-icon-search[aria-pressed="true"] .nuda-icon-search__handle {
  transform: rotate(-45deg) scaleX(1.35);
}

.nuda-icon-search[aria-pressed="true"] .nuda-icon-search__head {
  opacity: 1;
  stroke-dashoffset: 0;
  transition-delay: 0.12s;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-search__lens,
  .nuda-icon-search__handle,
  .nuda-icon-search__head { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Search to Back — vanilla JS
   Flips aria-pressed and label; CSS morphs the glyph. */

(function () {
  document.querySelectorAll(".nuda-icon-search").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var back = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(back));
      btn.setAttribute("aria-label", back ? "Back" : "Search");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 5. Heart Fill ─────────────── */
  {
    id: "icon-heart-fill",
    name: "Heart Fill",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-heart"
        type="button"
        aria-label="Favourite"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          if (next) {
            b.classList.add("nuda-icon-heart--pop");
            setTimeout(() => b.classList.remove("nuda-icon-heart--pop"), 450);
          }
        }}
      >
        <svg className="nuda-icon-heart__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path
            className="nuda-icon-heart__path"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-heart{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#71717a;cursor:pointer;transition:border-color .25s}
      .nuda-icon-heart:hover,.nuda-icon-heart:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-heart:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-heart__svg{width:24px;height:24px}
      .nuda-icon-heart__path{fill:transparent;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:fill .25s,stroke .25s,transform .35s cubic-bezier(.34,1.56,.64,1);transform-origin:center}
      .nuda-icon-heart[aria-pressed="true"] .nuda-icon-heart__path{fill:#e4ff54;stroke:#e4ff54}
      .nuda-icon-heart--pop .nuda-icon-heart__path{animation:icon-heart-pop .42s cubic-bezier(.34,1.56,.64,1)}
      @keyframes icon-heart-pop{0%{transform:scale(.7)}45%{transform:scale(1.25)}100%{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-icon-heart__path{transition:fill .25s,stroke .25s}.nuda-icon-heart--pop .nuda-icon-heart__path{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-heart" type="button" aria-label="Favourite" aria-pressed="false">
  <svg class="nuda-icon-heart__svg" viewBox="0 0 24 24" aria-hidden="true">
    <path class="nuda-icon-heart__path"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Heart Fill
   Outline → solid lime with a spring pop on activate.
   GPU-only: transform + fill/stroke colour. Customize: --icon-accent */

.nuda-icon-heart {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #71717a;
  cursor: pointer;
  transition: border-color 0.25s;
}

.nuda-icon-heart:hover,
.nuda-icon-heart:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-heart:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-heart__svg { width: 24px; height: 24px; }

.nuda-icon-heart__path {
  fill: transparent;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: fill 0.25s, stroke 0.25s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
  will-change: transform;
}

.nuda-icon-heart[aria-pressed="true"] .nuda-icon-heart__path {
  fill: var(--icon-accent);
  stroke: var(--icon-accent);
}

.nuda-icon-heart--pop .nuda-icon-heart__path {
  animation: icon-heart-pop 0.42s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes icon-heart-pop {
  0%   { transform: scale(0.7); }
  45%  { transform: scale(1.25); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-heart__path { transition: fill 0.25s, stroke 0.25s; }
  .nuda-icon-heart--pop .nuda-icon-heart__path { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Heart Fill — vanilla JS
   Flips aria-pressed and triggers the pop class. */

(function () {
  document.querySelectorAll(".nuda-icon-heart").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var fav = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(fav));
      if (fav) {
        btn.classList.add("nuda-icon-heart--pop");
        setTimeout(function () {
          btn.classList.remove("nuda-icon-heart--pop");
        }, 450);
      }
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 6. Bell Ring ─────────────── */
  {
    id: "icon-bell-ring",
    name: "Bell Ring",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-bell"
        type="button"
        aria-label="Notifications"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          if (next) {
            b.classList.add("nuda-icon-bell--ring");
            setTimeout(() => b.classList.remove("nuda-icon-bell--ring"), 800);
          }
        }}
      >
        <svg className="nuda-icon-bell__svg" viewBox="0 0 24 24" aria-hidden="true">
          <g className="nuda-icon-bell__body">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          </g>
          <path className="nuda-icon-bell__clapper" d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-bell{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-bell:hover,.nuda-icon-bell:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-bell:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-bell[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-bell__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-icon-bell__body{transform-origin:12px 4px}
      .nuda-icon-bell__clapper{transform-origin:12px 19px}
      .nuda-icon-bell--ring .nuda-icon-bell__body{animation:icon-bell-shake .8s cubic-bezier(.36,.07,.19,.97)}
      .nuda-icon-bell--ring .nuda-icon-bell__clapper{animation:icon-bell-clap .8s cubic-bezier(.36,.07,.19,.97)}
      @keyframes icon-bell-shake{0%,100%{transform:rotate(0)}10%,30%,50%,70%{transform:rotate(10deg)}20%,40%,60%,80%{transform:rotate(-10deg)}}
      @keyframes icon-bell-clap{0%,100%{transform:translateX(0)}15%,55%{transform:translateX(1.5px)}35%,75%{transform:translateX(-1.5px)}}
      @media (prefers-reduced-motion:reduce){.nuda-icon-bell--ring .nuda-icon-bell__body,.nuda-icon-bell--ring .nuda-icon-bell__clapper{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-bell" type="button" aria-label="Notifications" aria-pressed="false">
  <svg class="nuda-icon-bell__svg" viewBox="0 0 24 24" aria-hidden="true">
    <g class="nuda-icon-bell__body">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    </g>
    <path class="nuda-icon-bell__clapper" d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bell Ring
   The bell body shakes from its top pivot while the clapper swings.
   GPU-only: transform (rotate/translate). Customize: --icon-accent */

.nuda-icon-bell {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-bell:hover,
.nuda-icon-bell:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-bell:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-bell[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-bell__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.nuda-icon-bell__body { transform-origin: 12px 4px; will-change: transform; }
.nuda-icon-bell__clapper { transform-origin: 12px 19px; will-change: transform; }

.nuda-icon-bell--ring .nuda-icon-bell__body {
  animation: icon-bell-shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

.nuda-icon-bell--ring .nuda-icon-bell__clapper {
  animation: icon-bell-clap 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

@keyframes icon-bell-shake {
  0%, 100%          { transform: rotate(0); }
  10%, 30%, 50%, 70% { transform: rotate(10deg); }
  20%, 40%, 60%, 80% { transform: rotate(-10deg); }
}

@keyframes icon-bell-clap {
  0%, 100%   { transform: translateX(0); }
  15%, 55%   { transform: translateX(1.5px); }
  35%, 75%   { transform: translateX(-1.5px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-bell--ring .nuda-icon-bell__body,
  .nuda-icon-bell--ring .nuda-icon-bell__clapper { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Bell Ring — vanilla JS
   Toggles aria-pressed and plays the ring animation. */

(function () {
  document.querySelectorAll(".nuda-icon-bell").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(on));
      if (on) {
        btn.classList.add("nuda-icon-bell--ring");
        setTimeout(function () {
          btn.classList.remove("nuda-icon-bell--ring");
        }, 800);
      }
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 7. Copy to Check ─────────────── */
  {
    id: "icon-copy-check",
    name: "Copy to Check",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-copy"
        type="button"
        aria-label="Copy"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          if (b.getAttribute("aria-pressed") === "true") return;
          b.setAttribute("aria-pressed", "true");
          b.setAttribute("aria-label", "Copied");
          setTimeout(() => {
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-label", "Copy");
          }, 1600);
        }}
      >
        <svg className="nuda-icon-copy__svg" viewBox="0 0 24 24" aria-hidden="true">
          <g className="nuda-icon-copy__clip">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </g>
          <polyline className="nuda-icon-copy__check" points="6 12.5 10 16.5 18 8.5" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-copy{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-copy:hover,.nuda-icon-copy:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-copy:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-copy[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-copy__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-icon-copy__clip{transition:opacity .25s,transform .3s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-icon-copy__check{stroke-dasharray:24;stroke-dashoffset:24;opacity:0;transition:stroke-dashoffset .4s ease .1s,opacity .2s .1s}
      .nuda-icon-copy[aria-pressed="true"] .nuda-icon-copy__clip{opacity:0;transform:scale(.5)}
      .nuda-icon-copy[aria-pressed="true"] .nuda-icon-copy__check{opacity:1;stroke-dashoffset:0}
      @media (prefers-reduced-motion:reduce){.nuda-icon-copy__clip,.nuda-icon-copy__check{transition:opacity .25s}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-copy" type="button" aria-label="Copy" aria-pressed="false" data-copy="">
  <svg class="nuda-icon-copy__svg" viewBox="0 0 24 24" aria-hidden="true">
    <g class="nuda-icon-copy__clip">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </g>
    <polyline class="nuda-icon-copy__check" points="6 12.5 10 16.5 18 8.5" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Copy to Check
   Clipboard scales out as a checkmark draws in via stroke-dashoffset.
   GPU-only: transform + opacity + dashoffset. Customize: --icon-accent */

.nuda-icon-copy {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-copy:hover,
.nuda-icon-copy:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-copy:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-copy[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-copy__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.nuda-icon-copy__clip {
  transition: opacity 0.25s, transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-origin: center;
  will-change: transform, opacity;
}

.nuda-icon-copy__check {
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  opacity: 0;
  transition: stroke-dashoffset 0.4s ease 0.1s, opacity 0.2s 0.1s;
}

.nuda-icon-copy[aria-pressed="true"] .nuda-icon-copy__clip {
  opacity: 0;
  transform: scale(0.5);
}

.nuda-icon-copy[aria-pressed="true"] .nuda-icon-copy__check {
  opacity: 1;
  stroke-dashoffset: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-copy__clip,
  .nuda-icon-copy__check { transition: opacity 0.25s; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Copy to Check — vanilla JS
   Copies data-copy text, shows the check, reverts after 1.6s. */

(function () {
  document.querySelectorAll(".nuda-icon-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-pressed") === "true") return;
      var text = btn.getAttribute("data-copy") || "";
      if (navigator.clipboard && text) navigator.clipboard.writeText(text);
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Copied");
      setTimeout(function () {
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", "Copy");
      }, 1600);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 8. Sun to Moon ─────────────── */
  {
    id: "icon-sun-moon",
    name: "Sun to Moon",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-sunmoon"
        type="button"
        aria-label="Switch to dark theme"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Switch to light theme" : "Switch to dark theme");
        }}
      >
        <svg className="nuda-icon-sunmoon__svg" viewBox="0 0 24 24" aria-hidden="true">
          <mask id="icon-sunmoon-mask">
            <rect x="0" y="0" width="24" height="24" fill="white" />
            <circle className="nuda-icon-sunmoon__cut" cx="24" cy="10" r="6" fill="black" />
          </mask>
          <circle className="nuda-icon-sunmoon__core" cx="12" cy="12" r="6" mask="url(#icon-sunmoon-mask)" />
          <g className="nuda-icon-sunmoon__rays">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
            <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
            <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
            <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
          </g>
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-sunmoon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s,transform .4s}
      .nuda-icon-sunmoon:hover,.nuda-icon-sunmoon:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-sunmoon:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-sunmoon[aria-pressed="true"]{color:#e4ff54;transform:rotate(40deg)}
      .nuda-icon-sunmoon__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;fill:none}
      .nuda-icon-sunmoon__core{fill:currentColor;stroke:none;transition:transform .4s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-icon-sunmoon__cut{transition:transform .5s cubic-bezier(.4,.2,.2,1)}
      .nuda-icon-sunmoon__rays{transition:transform .4s cubic-bezier(.4,.2,.2,1),opacity .3s;transform-origin:center}
      .nuda-icon-sunmoon[aria-pressed="true"] .nuda-icon-sunmoon__core{transform:scale(1.4)}
      .nuda-icon-sunmoon[aria-pressed="true"] .nuda-icon-sunmoon__cut{transform:translate(-10px,2px)}
      .nuda-icon-sunmoon[aria-pressed="true"] .nuda-icon-sunmoon__rays{opacity:0;transform:scale(.4) rotate(40deg)}
      @media (prefers-reduced-motion:reduce){.nuda-icon-sunmoon,.nuda-icon-sunmoon__core,.nuda-icon-sunmoon__cut,.nuda-icon-sunmoon__rays{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-sunmoon" type="button" aria-label="Switch to dark theme" aria-pressed="false">
  <svg class="nuda-icon-sunmoon__svg" viewBox="0 0 24 24" aria-hidden="true">
    <mask id="icon-sunmoon-mask">
      <rect x="0" y="0" width="24" height="24" fill="white" />
      <circle class="nuda-icon-sunmoon__cut" cx="24" cy="10" r="6" fill="black" />
    </mask>
    <circle class="nuda-icon-sunmoon__core" cx="12" cy="12" r="6" mask="url(#icon-sunmoon-mask)" />
    <g class="nuda-icon-sunmoon__rays">
      <line x1="12" y1="1"  x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.2"  y1="4.2"  x2="5.6"  y2="5.6" />
      <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
      <line x1="4.2"  y1="19.8" x2="5.6"  y2="18.4" />
      <line x1="18.4" y1="5.6"  x2="19.8" y2="4.2" />
    </g>
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sun to Moon
   Rays retract while a masked circle slides over the core to crescent it.
   GPU-only: transform + opacity. Customize: --icon-accent */

.nuda-icon-sunmoon {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s, transform 0.4s;
}

.nuda-icon-sunmoon:hover,
.nuda-icon-sunmoon:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-sunmoon:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-sunmoon[aria-pressed="true"] {
  color: var(--icon-accent);
  transform: rotate(40deg);
}

.nuda-icon-sunmoon__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.nuda-icon-sunmoon__core {
  fill: currentColor;
  stroke: none;
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-origin: center;
  will-change: transform;
}

.nuda-icon-sunmoon__cut {
  transition: transform 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.nuda-icon-sunmoon__rays {
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.3s;
  transform-origin: center;
  will-change: transform, opacity;
}

.nuda-icon-sunmoon[aria-pressed="true"] .nuda-icon-sunmoon__core {
  transform: scale(1.4);
}

.nuda-icon-sunmoon[aria-pressed="true"] .nuda-icon-sunmoon__cut {
  transform: translate(-10px, 2px);
}

.nuda-icon-sunmoon[aria-pressed="true"] .nuda-icon-sunmoon__rays {
  opacity: 0;
  transform: scale(0.4) rotate(40deg);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-sunmoon,
  .nuda-icon-sunmoon__core,
  .nuda-icon-sunmoon__cut,
  .nuda-icon-sunmoon__rays { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Sun to Moon — vanilla JS
   Flips aria-pressed/label and (optionally) the page theme. */

(function () {
  document.querySelectorAll(".nuda-icon-sunmoon").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dark = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(dark));
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      document.documentElement.classList.toggle("dark", dark);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 9. Arrow Morph ─────────────── */
  {
    id: "icon-arrow-morph",
    name: "Arrow Morph",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-arrow"
        type="button"
        aria-label="Expand"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Collapse" : "Expand");
        }}
      >
        <svg className="nuda-icon-arrow__svg" viewBox="0 0 24 24" aria-hidden="true">
          <line className="nuda-icon-arrow__shaft" x1="4" y1="12" x2="20" y2="12" />
          <polyline className="nuda-icon-arrow__head" points="14 6 20 12 14 18" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-arrow{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-arrow:hover,.nuda-icon-arrow:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-arrow:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-arrow[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-arrow__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;transition:transform .4s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-icon-arrow[aria-pressed="true"] .nuda-icon-arrow__svg{transform:rotate(180deg)}
      .nuda-icon-arrow__shaft{transition:transform .35s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-icon-arrow__head{transition:transform .35s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-icon-arrow[aria-pressed="true"] .nuda-icon-arrow__shaft{transform:scaleX(.7)}
      .nuda-icon-arrow[aria-pressed="true"] .nuda-icon-arrow__head{transform:translateX(-2px)}
      @media (prefers-reduced-motion:reduce){.nuda-icon-arrow__svg,.nuda-icon-arrow__shaft,.nuda-icon-arrow__head{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-arrow" type="button" aria-label="Expand" aria-pressed="false">
  <svg class="nuda-icon-arrow__svg" viewBox="0 0 24 24" aria-hidden="true">
    <line     class="nuda-icon-arrow__shaft" x1="4" y1="12" x2="20" y2="12" />
    <polyline class="nuda-icon-arrow__head"  points="14 6 20 12 14 18" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Arrow Morph
   The arrow flips 180deg between directions; shaft/head retune slightly for a
   spring feel. GPU-only: transform. Customize: --icon-accent */

.nuda-icon-arrow {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-arrow:hover,
.nuda-icon-arrow:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-arrow:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-arrow[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-arrow__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-origin: center;
  will-change: transform;
}

.nuda-icon-arrow[aria-pressed="true"] .nuda-icon-arrow__svg {
  transform: rotate(180deg);
}

.nuda-icon-arrow__shaft,
.nuda-icon-arrow__head {
  transition: transform 0.35s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-origin: center;
}

.nuda-icon-arrow[aria-pressed="true"] .nuda-icon-arrow__shaft { transform: scaleX(0.7); }
.nuda-icon-arrow[aria-pressed="true"] .nuda-icon-arrow__head  { transform: translateX(-2px); }

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-arrow__svg,
  .nuda-icon-arrow__shaft,
  .nuda-icon-arrow__head { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Arrow Morph — vanilla JS
   Flips aria-pressed and label; CSS rotates the arrow. */

(function () {
  document.querySelectorAll(".nuda-icon-arrow").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(open));
      btn.setAttribute("aria-label", open ? "Collapse" : "Expand");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 10. Download to Done ─────────────── */
  {
    id: "icon-download-done",
    name: "Download to Done",
    category: "Animated Icons",
    preview: (
      <button
        className="nuda-icon-download"
        type="button"
        aria-label="Download"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          if (b.getAttribute("aria-pressed") === "true") return;
          b.setAttribute("aria-pressed", "true");
          b.setAttribute("aria-label", "Downloaded");
          setTimeout(() => {
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-label", "Download");
          }, 1800);
        }}
      >
        <svg className="nuda-icon-download__svg" viewBox="0 0 24 24" aria-hidden="true">
          <line className="nuda-icon-download__base" x1="5" y1="20" x2="19" y2="20" />
          <g className="nuda-icon-download__arrow">
            <line x1="12" y1="4" x2="12" y2="15" />
            <polyline points="7 11 12 16 17 11" />
          </g>
          <polyline className="nuda-icon-download__check" points="6 12 10 16 18 7" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-icon-download{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-icon-download:hover,.nuda-icon-download:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-icon-download:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-icon-download[aria-pressed="true"]{color:#e4ff54}
      .nuda-icon-download__svg{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-icon-download__arrow{transition:transform .35s cubic-bezier(.4,.2,.2,1),opacity .25s;transform-origin:center}
      .nuda-icon-download__base{transition:transform .35s cubic-bezier(.4,.2,.2,1),opacity .25s;transform-origin:center}
      .nuda-icon-download__check{stroke-dasharray:24;stroke-dashoffset:24;opacity:0;transition:stroke-dashoffset .4s ease .15s,opacity .2s .15s}
      .nuda-icon-download[aria-pressed="true"] .nuda-icon-download__arrow{opacity:0;transform:translateY(8px) scale(.6)}
      .nuda-icon-download[aria-pressed="true"] .nuda-icon-download__base{opacity:0;transform:scaleX(.4)}
      .nuda-icon-download[aria-pressed="true"] .nuda-icon-download__check{opacity:1;stroke-dashoffset:0}
      @media (prefers-reduced-motion:reduce){.nuda-icon-download__arrow,.nuda-icon-download__base,.nuda-icon-download__check{transition:opacity .25s}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-icon-download" type="button" aria-label="Download" aria-pressed="false">
  <svg class="nuda-icon-download__svg" viewBox="0 0 24 24" aria-hidden="true">
    <line class="nuda-icon-download__base" x1="5" y1="20" x2="19" y2="20" />
    <g class="nuda-icon-download__arrow">
      <line x1="12" y1="4" x2="12" y2="15" />
      <polyline points="7 11 12 16 17 11" />
    </g>
    <polyline class="nuda-icon-download__check" points="6 12 10 16 18 7" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Download to Done
   Arrow drops away, baseline collapses, then a checkmark draws in.
   GPU-only: transform + opacity + dashoffset. Customize: --icon-accent */

.nuda-icon-download {
  --icon-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fafafa;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-icon-download:hover,
.nuda-icon-download:focus-visible {
  border-color: rgba(228, 255, 84, 0.4);
  outline: none;
}

.nuda-icon-download:focus-visible {
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.5);
}

.nuda-icon-download[aria-pressed="true"] { color: var(--icon-accent); }

.nuda-icon-download__svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.nuda-icon-download__arrow,
.nuda-icon-download__base {
  transition: transform 0.35s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.25s;
  transform-origin: center;
  will-change: transform, opacity;
}

.nuda-icon-download__check {
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  opacity: 0;
  transition: stroke-dashoffset 0.4s ease 0.15s, opacity 0.2s 0.15s;
}

.nuda-icon-download[aria-pressed="true"] .nuda-icon-download__arrow {
  opacity: 0;
  transform: translateY(8px) scale(0.6);
}

.nuda-icon-download[aria-pressed="true"] .nuda-icon-download__base {
  opacity: 0;
  transform: scaleX(0.4);
}

.nuda-icon-download[aria-pressed="true"] .nuda-icon-download__check {
  opacity: 1;
  stroke-dashoffset: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-icon-download__arrow,
  .nuda-icon-download__base,
  .nuda-icon-download__check { transition: opacity 0.25s; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Download to Done — vanilla JS
   Marks pressed, shows the check, reverts after 1.8s. */

(function () {
  document.querySelectorAll(".nuda-icon-download").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-pressed") === "true") return;
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Downloaded");
      setTimeout(function () {
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", "Download");
      }, 1800);
    });
  });
})();`,
      },
    ],
  },
];
