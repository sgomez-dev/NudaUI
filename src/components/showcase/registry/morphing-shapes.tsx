import type { NudaComponent } from "./types";

export const morphingShapes: NudaComponent[] = [
  /* ─────────────── 1. Blob Morph ─────────────── */
  {
    id: "morph-blob-shape",
    name: "Blob Morph",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-blob-demo" aria-hidden="true">
        <div className="nuda-morph-blob-demo__shape" />
      </div>
    ),
    cssInline: `
      .nuda-morph-blob-demo{display:flex;align-items:center;justify-content:center;padding:16px}
      .nuda-morph-blob-demo__shape{width:72px;height:72px;background:linear-gradient(135deg,#e4ff54,#a3b830);animation:nuda-morph-blob-spin 6s ease-in-out infinite;will-change:border-radius,transform}
      @keyframes nuda-morph-blob-spin{0%{border-radius:42% 58% 63% 37%/41% 44% 56% 59%;transform:rotate(0deg)}33%{border-radius:67% 33% 38% 62%/55% 62% 38% 45%;transform:rotate(120deg)}66%{border-radius:38% 62% 56% 44%/63% 37% 63% 37%;transform:rotate(240deg)}100%{border-radius:42% 58% 63% 37%/41% 44% 56% 59%;transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-morph-blob-demo__shape{animation:none;border-radius:50%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Blob Morph -->
<div class="nuda-morph-blob" aria-hidden="true">
  <div class="nuda-morph-blob__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Blob Morph
   Organic border-radius blob that morphs and rotates.
   Customize: --morph-blob-size, --morph-blob-start, --morph-blob-end */

.nuda-morph-blob {
  --morph-blob-size: 72px;
  --morph-blob-start: #e4ff54;
  --morph-blob-end: #a3b830;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.nuda-morph-blob__shape {
  width: var(--morph-blob-size);
  height: var(--morph-blob-size);
  background: linear-gradient(135deg, var(--morph-blob-start), var(--morph-blob-end));
  animation: nuda-morph-blob-spin 6s ease-in-out infinite;
  will-change: border-radius, transform;
}

@keyframes nuda-morph-blob-spin {
  0%   { border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; transform: rotate(0deg); }
  33%  { border-radius: 67% 33% 38% 62% / 55% 62% 38% 45%; transform: rotate(120deg); }
  66%  { border-radius: 38% 62% 56% 44% / 63% 37% 63% 37%; transform: rotate(240deg); }
  100% { border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-blob__shape {
    animation: none;
    border-radius: 50%;
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Clip-Path Morph ─────────────── */
  {
    id: "morph-clip",
    name: "Clip-Path Morph",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-clip-demo" aria-hidden="true">
        <div className="nuda-morph-clip-demo__shape" />
      </div>
    ),
    cssInline: `
      .nuda-morph-clip-demo{display:flex;align-items:center;justify-content:center;padding:16px}
      .nuda-morph-clip-demo__shape{width:72px;height:72px;background:linear-gradient(135deg,#e4ff54,#a3b830);animation:nuda-morph-clip-cycle 5s ease-in-out infinite;will-change:clip-path,transform}
      @keyframes nuda-morph-clip-cycle{0%{clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);transform:rotate(0deg)}25%{clip-path:polygon(50% 0%,90% 20%,100% 60%,75% 100%,25% 100%,0% 60%,10% 20%);transform:rotate(0deg)}50%{clip-path:circle(50% at 50% 50%);transform:rotate(0deg)}75%{clip-path:polygon(20% 0%,80% 0%,100% 100%,0% 100%);transform:rotate(0deg)}100%{clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);transform:rotate(0deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-morph-clip-demo__shape{animation:none;clip-path:circle(50% at 50% 50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Clip-Path Morph -->
<div class="nuda-morph-clip" aria-hidden="true">
  <div class="nuda-morph-clip__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Clip-Path Morph
   Cycles through polygon shapes and a circle via animated clip-path.
   Customize: --morph-clip-size, --morph-clip-start, --morph-clip-end */

.nuda-morph-clip {
  --morph-clip-size: 72px;
  --morph-clip-start: #e4ff54;
  --morph-clip-end: #a3b830;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.nuda-morph-clip__shape {
  width: var(--morph-clip-size);
  height: var(--morph-clip-size);
  background: linear-gradient(135deg, var(--morph-clip-start), var(--morph-clip-end));
  animation: nuda-morph-clip-cycle 5s ease-in-out infinite;
  will-change: clip-path;
}

@keyframes nuda-morph-clip-cycle {
  0%   { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
  25%  { clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%); }
  50%  { clip-path: circle(50% at 50% 50%); }
  75%  { clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); }
  100% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-clip__shape {
    animation: none;
    clip-path: circle(50% at 50% 50%);
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. SVG Path Morph ─────────────── */
  {
    id: "morph-svg-path",
    name: "SVG Path Morph",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-svg-demo" aria-hidden="true">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <path fill="#e4ff54" d="M50,8 L92,50 L50,92 L8,50 Z">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="M50,8 L92,50 L50,92 L8,50 Z;
                      M50,5 C75,5 95,25 95,50 C95,75 75,95 50,95 C25,95 5,75 5,50 C5,25 25,5 50,5 Z;
                      M20,15 L80,15 L80,85 L20,85 Z;
                      M50,8 L92,50 L50,92 L8,50 Z"
            />
          </path>
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-morph-svg-demo{display:flex;align-items:center;justify-content:center;padding:16px}
      @media (prefers-reduced-motion:reduce){.nuda-morph-svg-demo svg animate{display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- SVG Path Morph (SMIL <animate> — no JS, no CSS dependency) -->
<div class="nuda-morph-svg" aria-hidden="true">
  <svg viewBox="0 0 100 100" width="80" height="80">
    <path fill="#e4ff54" d="M50,8 L92,50 L50,92 L8,50 Z">
      <animate
        attributeName="d"
        dur="4s"
        repeatCount="indefinite"
        values="M50,8 L92,50 L50,92 L8,50 Z;
                M50,5 C75,5 95,25 95,50 C95,75 75,95 50,95 C25,95 5,75 5,50 C5,25 25,5 50,5 Z;
                M20,15 L80,15 L80,85 L20,85 Z;
                M50,8 L92,50 L50,92 L8,50 Z"
      />
    </path>
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* SVG Path Morph
   The morph itself lives in the inline SVG <animate> element (SMIL),
   so it is fully dependency-free. CSS only handles layout + a11y.
   Customize: change the path "values" or the <path fill>. */

.nuda-morph-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

@media (prefers-reduced-motion: reduce) {
  /* Freeze the SMIL morph for users who prefer reduced motion. */
  .nuda-morph-svg svg animate {
    display: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Liquid Button ─────────────── */
  {
    id: "morph-liquid-button",
    name: "Liquid Button",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-liquid-demo">
        <svg
          className="nuda-morph-liquid-demo__defs"
          width="0"
          height="0"
          aria-hidden="true"
        >
          <defs>
            <filter id="nuda-morph-goo-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <button type="button" className="nuda-morph-liquid-demo__btn">
          <span className="nuda-morph-liquid-demo__goo" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="nuda-morph-liquid-demo__label">Hover me</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-morph-liquid-demo{display:flex;align-items:center;justify-content:center;padding:16px}
      .nuda-morph-liquid-demo__btn{position:relative;border:none;background:none;cursor:pointer;padding:0;outline:none}
      .nuda-morph-liquid-demo__goo{position:absolute;inset:0;filter:url(#nuda-morph-goo-filter);z-index:0}
      .nuda-morph-liquid-demo__goo i{position:absolute;top:50%;left:50%;width:60px;height:60px;background:#e4ff54;border-radius:50%;transform:translate(-50%,-50%) scale(1);transition:transform .5s cubic-bezier(.4,.2,.2,1.2);will-change:transform}
      .nuda-morph-liquid-demo__btn:hover .nuda-morph-liquid-demo__goo i:nth-child(1){transform:translate(-150%,-50%) scale(.7)}
      .nuda-morph-liquid-demo__btn:hover .nuda-morph-liquid-demo__goo i:nth-child(3){transform:translate(50%,-50%) scale(.7)}
      .nuda-morph-liquid-demo__btn:focus-visible .nuda-morph-liquid-demo__goo i:nth-child(1){transform:translate(-150%,-50%) scale(.7)}
      .nuda-morph-liquid-demo__btn:focus-visible .nuda-morph-liquid-demo__goo i:nth-child(3){transform:translate(50%,-50%) scale(.7)}
      .nuda-morph-liquid-demo__label{position:relative;z-index:1;display:block;padding:12px 28px;color:#09090b;font-weight:700;font-size:.9rem}
      .nuda-morph-liquid-demo__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:4px;border-radius:8px}
      @media (prefers-reduced-motion:reduce){.nuda-morph-liquid-demo__goo i{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Liquid Button — gooey blobs merge/split on hover via SVG filter -->
<!-- Define the goo filter once per page (it is referenced by id). -->
<svg width="0" height="0" aria-hidden="true">
  <defs>
    <filter id="nuda-morph-goo-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>

<button type="button" class="nuda-morph-liquid">
  <span class="nuda-morph-liquid__goo" aria-hidden="true">
    <i></i><i></i><i></i>
  </span>
  <span class="nuda-morph-liquid__label">Hover me</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Liquid Button
   Three blurred circles fused by an SVG goo filter; on hover the
   outer two slide out, giving a liquid split/merge effect.
   Customize: --morph-liquid-color, --morph-liquid-ink */

.nuda-morph-liquid {
  --morph-liquid-color: #e4ff54;
  --morph-liquid-ink: #09090b;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.nuda-morph-liquid__goo {
  position: absolute;
  inset: 0;
  filter: url(#nuda-morph-goo-filter);
  z-index: 0;
}

.nuda-morph-liquid__goo i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: var(--morph-liquid-color);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.5s cubic-bezier(0.4, 0.2, 0.2, 1.2);
  will-change: transform;
}

.nuda-morph-liquid:hover .nuda-morph-liquid__goo i:nth-child(1),
.nuda-morph-liquid:focus-visible .nuda-morph-liquid__goo i:nth-child(1) {
  transform: translate(-150%, -50%) scale(0.7);
}

.nuda-morph-liquid:hover .nuda-morph-liquid__goo i:nth-child(3),
.nuda-morph-liquid:focus-visible .nuda-morph-liquid__goo i:nth-child(3) {
  transform: translate(50%, -50%) scale(0.7);
}

.nuda-morph-liquid__label {
  position: relative;
  z-index: 1;
  display: block;
  padding: 12px 28px;
  color: var(--morph-liquid-ink);
  font-weight: 700;
  font-size: 0.9rem;
}

.nuda-morph-liquid:focus-visible {
  outline: 2px solid var(--morph-liquid-color);
  outline-offset: 4px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-liquid__goo i {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Shape Shifter (loader) ─────────────── */
  {
    id: "morph-loader",
    name: "Shape Shifter",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-loader-demo" role="status" aria-label="Loading">
        <div className="nuda-morph-loader-demo__shape" />
      </div>
    ),
    cssInline: `
      .nuda-morph-loader-demo{display:flex;align-items:center;justify-content:center;padding:16px}
      .nuda-morph-loader-demo__shape{width:48px;height:48px;background:#e4ff54;animation:nuda-morph-loader-cycle 3s ease-in-out infinite;will-change:border-radius,clip-path,transform}
      @keyframes nuda-morph-loader-cycle{0%{border-radius:0;clip-path:none;transform:rotate(0deg)}25%{border-radius:50%;clip-path:none;transform:rotate(90deg)}50%{border-radius:0;clip-path:polygon(50% 0%,100% 100%,0% 100%);transform:rotate(180deg)}75%{border-radius:12px;clip-path:none;transform:rotate(270deg)}100%{border-radius:0;clip-path:none;transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-morph-loader-demo__shape{animation:none;border-radius:12px}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Shape Shifter Loader -->
<div class="nuda-morph-loader" role="status" aria-label="Loading">
  <div class="nuda-morph-loader__shape"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Shape Shifter Loader
   A single element cycling square -> circle -> triangle -> rounded square.
   Customize: --morph-loader-size, --morph-loader-color */

.nuda-morph-loader {
  --morph-loader-size: 48px;
  --morph-loader-color: #e4ff54;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.nuda-morph-loader__shape {
  width: var(--morph-loader-size);
  height: var(--morph-loader-size);
  background: var(--morph-loader-color);
  animation: nuda-morph-loader-cycle 3s ease-in-out infinite;
  will-change: border-radius, clip-path, transform;
}

@keyframes nuda-morph-loader-cycle {
  0%   { border-radius: 0;    clip-path: none; transform: rotate(0deg); }
  25%  { border-radius: 50%;  clip-path: none; transform: rotate(90deg); }
  50%  { border-radius: 0;    clip-path: polygon(50% 0%, 100% 100%, 0% 100%); transform: rotate(180deg); }
  75%  { border-radius: 12px; clip-path: none; transform: rotate(270deg); }
  100% { border-radius: 0;    clip-path: none; transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-loader__shape {
    animation: none;
    border-radius: 12px;
  }
}`,
      },
    ],
  },

  /* ─────────────── 6. Morph Menu Icon ─────────────── */
  {
    id: "morph-menu-icon",
    name: "Morph Menu Icon",
    category: "Morphing Shapes",
    preview: (
      <button
        type="button"
        className="nuda-morph-menu-demo"
        aria-label="Toggle menu"
        aria-pressed="false"
        onClick={(e) => {
          const btn = e.currentTarget;
          const open = btn.getAttribute("aria-pressed") === "true";
          btn.setAttribute("aria-pressed", String(!open));
          btn.classList.toggle("is-open", !open);
        }}
      >
        <span className="nuda-morph-menu-demo__box" aria-hidden="true">
          <i /><i /><i />
        </span>
      </button>
    ),
    cssInline: `
      .nuda-morph-menu-demo{background:none;border:none;cursor:pointer;padding:12px;outline:none}
      .nuda-morph-menu-demo__box{display:block;position:relative;width:32px;height:24px}
      .nuda-morph-menu-demo__box i{position:absolute;left:0;width:100%;height:3px;background:#e4ff54;border-radius:2px;transition:transform .4s cubic-bezier(.4,.2,.2,1),opacity .2s ease;will-change:transform,opacity}
      .nuda-morph-menu-demo__box i:nth-child(1){top:0}
      .nuda-morph-menu-demo__box i:nth-child(2){top:50%;transform:translateY(-50%)}
      .nuda-morph-menu-demo__box i:nth-child(3){bottom:0}
      .nuda-morph-menu-demo.is-open .nuda-morph-menu-demo__box i:nth-child(1){top:50%;transform:translateY(-50%) rotate(45deg)}
      .nuda-morph-menu-demo.is-open .nuda-morph-menu-demo__box i:nth-child(2){opacity:0;transform:translateY(-50%) scaleX(0)}
      .nuda-morph-menu-demo.is-open .nuda-morph-menu-demo__box i:nth-child(3){bottom:auto;top:50%;transform:translateY(-50%) rotate(-45deg)}
      .nuda-morph-menu-demo:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-radius:8px}
      @media (prefers-reduced-motion:reduce){.nuda-morph-menu-demo__box i{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Morph Menu Icon — hamburger morphs to X. Vanilla JS toggles .is-open -->
<button type="button" class="nuda-morph-menu" aria-label="Toggle menu" aria-pressed="false">
  <span class="nuda-morph-menu__box" aria-hidden="true">
    <i></i><i></i><i></i>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Morph Menu Icon
   Three bars morph between a hamburger and an X.
   Toggle the .is-open class (see JS tab).
   Customize: --morph-menu-color, --morph-menu-w, --morph-menu-h */

.nuda-morph-menu {
  --morph-menu-color: #e4ff54;
  --morph-menu-w: 32px;
  --morph-menu-h: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  outline: none;
}

.nuda-morph-menu__box {
  display: block;
  position: relative;
  width: var(--morph-menu-w);
  height: var(--morph-menu-h);
}

.nuda-morph-menu__box i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--morph-menu-color);
  border-radius: 2px;
  transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.2s ease;
  will-change: transform, opacity;
}

.nuda-morph-menu__box i:nth-child(1) { top: 0; }
.nuda-morph-menu__box i:nth-child(2) { top: 50%; transform: translateY(-50%); }
.nuda-morph-menu__box i:nth-child(3) { bottom: 0; }

.nuda-morph-menu.is-open .nuda-morph-menu__box i:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}
.nuda-morph-menu.is-open .nuda-morph-menu__box i:nth-child(2) {
  opacity: 0;
  transform: translateY(-50%) scaleX(0);
}
.nuda-morph-menu.is-open .nuda-morph-menu__box i:nth-child(3) {
  bottom: auto;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.nuda-morph-menu:focus-visible {
  outline: 2px solid var(--morph-menu-color);
  outline-offset: 2px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-menu__box i {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Toggle the morph between hamburger and X
const btn = document.querySelector(".nuda-morph-menu");
btn.addEventListener("click", () => {
  const open = btn.getAttribute("aria-pressed") === "true";
  btn.setAttribute("aria-pressed", String(!open));
  btn.classList.toggle("is-open", !open);
});`,
      },
    ],
  },

  /* ─────────────── 7. Blob Background ─────────────── */
  {
    id: "morph-blob-bg",
    name: "Blob Background",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-bg-demo" aria-hidden="true">
        <div className="nuda-morph-bg-demo__blob nuda-morph-bg-demo__blob--a" />
        <div className="nuda-morph-bg-demo__blob nuda-morph-bg-demo__blob--b" />
        <span className="nuda-morph-bg-demo__label">Backdrop</span>
      </div>
    ),
    cssInline: `
      .nuda-morph-bg-demo{position:relative;width:200px;height:120px;border-radius:12px;overflow:hidden;background:#09090b;display:flex;align-items:center;justify-content:center}
      .nuda-morph-bg-demo__blob{position:absolute;width:120px;height:120px;filter:blur(18px);opacity:.55;will-change:border-radius,transform}
      .nuda-morph-bg-demo__blob--a{top:-30px;left:-20px;background:#e4ff54;animation:nuda-morph-bg-a 12s ease-in-out infinite}
      .nuda-morph-bg-demo__blob--b{bottom:-30px;right:-20px;background:#a3b830;animation:nuda-morph-bg-b 14s ease-in-out infinite}
      .nuda-morph-bg-demo__label{position:relative;z-index:1;color:#e4ff54;font-weight:700;font-size:.85rem;letter-spacing:.05em}
      @keyframes nuda-morph-bg-a{0%{border-radius:42% 58% 63% 37%/41% 44% 56% 59%;transform:translate(0,0) rotate(0deg)}50%{border-radius:67% 33% 38% 62%/55% 62% 38% 45%;transform:translate(20px,12px) rotate(180deg)}100%{border-radius:42% 58% 63% 37%/41% 44% 56% 59%;transform:translate(0,0) rotate(360deg)}}
      @keyframes nuda-morph-bg-b{0%{border-radius:38% 62% 56% 44%/63% 37% 63% 37%;transform:translate(0,0) rotate(0deg)}50%{border-radius:58% 42% 33% 67%/44% 56% 44% 56%;transform:translate(-18px,-10px) rotate(-180deg)}100%{border-radius:38% 62% 56% 44%/63% 37% 63% 37%;transform:translate(0,0) rotate(-360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-morph-bg-demo__blob{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Blob Background — slow morphing backdrop -->
<div class="nuda-morph-bg" aria-hidden="true">
  <div class="nuda-morph-bg__blob nuda-morph-bg__blob--a"></div>
  <div class="nuda-morph-bg__blob nuda-morph-bg__blob--b"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Blob Background
   Two slow, blurred blobs morph and drift behind content.
   Customize: --morph-bg-color-a, --morph-bg-color-b, --morph-bg-bg */

.nuda-morph-bg {
  --morph-bg-color-a: #e4ff54;
  --morph-bg-color-b: #a3b830;
  --morph-bg-bg: #09090b;
  position: relative;
  width: 100%;
  min-height: 120px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--morph-bg-bg);
}

.nuda-morph-bg__blob {
  position: absolute;
  width: 120px;
  height: 120px;
  filter: blur(18px);
  opacity: 0.55;
  will-change: border-radius, transform;
}

.nuda-morph-bg__blob--a {
  top: -30px;
  left: -20px;
  background: var(--morph-bg-color-a);
  animation: nuda-morph-bg-a 12s ease-in-out infinite;
}

.nuda-morph-bg__blob--b {
  bottom: -30px;
  right: -20px;
  background: var(--morph-bg-color-b);
  animation: nuda-morph-bg-b 14s ease-in-out infinite;
}

@keyframes nuda-morph-bg-a {
  0%   { border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; transform: translate(0, 0) rotate(0deg); }
  50%  { border-radius: 67% 33% 38% 62% / 55% 62% 38% 45%; transform: translate(20px, 12px) rotate(180deg); }
  100% { border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; transform: translate(0, 0) rotate(360deg); }
}

@keyframes nuda-morph-bg-b {
  0%   { border-radius: 38% 62% 56% 44% / 63% 37% 63% 37%; transform: translate(0, 0) rotate(0deg); }
  50%  { border-radius: 58% 42% 33% 67% / 44% 56% 44% 56%; transform: translate(-18px, -10px) rotate(-180deg); }
  100% { border-radius: 38% 62% 56% 44% / 63% 37% 63% 37%; transform: translate(0, 0) rotate(-360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-bg__blob {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 8. Card Morph ─────────────── */
  {
    id: "morph-card-expand",
    name: "Card Morph",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-card-demo" tabIndex={0} role="button" aria-label="Morphing card">
        <span className="nuda-morph-card-demo__label">Hover</span>
      </div>
    ),
    cssInline: `
      .nuda-morph-card-demo{display:flex;align-items:center;justify-content:center;width:90px;height:90px;background:linear-gradient(135deg,#e4ff54,#a3b830);border-radius:6px;cursor:pointer;outline:none;transition:border-radius .5s cubic-bezier(.4,.2,.2,1),transform .5s cubic-bezier(.4,.2,.2,1);will-change:border-radius,transform}
      .nuda-morph-card-demo__label{color:#09090b;font-weight:700;font-size:.8rem}
      .nuda-morph-card-demo:hover,.nuda-morph-card-demo:focus-visible{border-radius:50%;transform:scale(1.1)}
      .nuda-morph-card-demo:focus-visible{outline:2px solid #e4ff54;outline-offset:4px}
      @media (prefers-reduced-motion:reduce){.nuda-morph-card-demo{transition:none}.nuda-morph-card-demo:hover,.nuda-morph-card-demo:focus-visible{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Card Morph — square morphs to a circle on hover/focus -->
<div class="nuda-morph-card" tabindex="0" role="button" aria-label="Morphing card">
  <span class="nuda-morph-card__label">Hover</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Card Morph
   A square smoothly rounds into a circle and scales up on hover/focus.
   Customize: --morph-card-size, --morph-card-start, --morph-card-end */

.nuda-morph-card {
  --morph-card-size: 90px;
  --morph-card-start: #e4ff54;
  --morph-card-end: #a3b830;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--morph-card-size);
  height: var(--morph-card-size);
  background: linear-gradient(135deg, var(--morph-card-start), var(--morph-card-end));
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  transition: border-radius 0.5s cubic-bezier(0.4, 0.2, 0.2, 1),
              transform 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
  will-change: border-radius, transform;
}

.nuda-morph-card__label {
  color: #09090b;
  font-weight: 700;
  font-size: 0.8rem;
}

.nuda-morph-card:hover,
.nuda-morph-card:focus-visible {
  border-radius: 50%;
  transform: scale(1.1);
}

.nuda-morph-card:focus-visible {
  outline: 2px solid var(--morph-card-start);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-card {
    transition: none;
  }
  .nuda-morph-card:hover,
  .nuda-morph-card:focus-visible {
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 9. Wave Morph ─────────────── */
  {
    id: "morph-wave",
    name: "Wave Morph",
    category: "Morphing Shapes",
    preview: (
      <div className="nuda-morph-wave-demo" aria-hidden="true">
        <svg viewBox="0 0 200 60" width="200" height="60" preserveAspectRatio="none">
          <path fill="#e4ff54" d="M0,30 Q50,10 100,30 T200,30 V60 H0 Z">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="M0,30 Q50,10 100,30 T200,30 V60 H0 Z;
                      M0,30 Q50,50 100,30 T200,30 V60 H0 Z;
                      M0,30 Q50,10 100,30 T200,30 V60 H0 Z"
            />
          </path>
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-morph-wave-demo{width:200px;height:60px;border-radius:8px;overflow:hidden;background:#09090b;display:flex;align-items:flex-end}
      .nuda-morph-wave-demo svg{display:block}
      @media (prefers-reduced-motion:reduce){.nuda-morph-wave-demo svg animate{display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Wave Morph — animated SVG wave divider (SMIL, dependency-free) -->
<div class="nuda-morph-wave" aria-hidden="true">
  <svg viewBox="0 0 200 60" width="100%" height="60" preserveAspectRatio="none">
    <path fill="#e4ff54" d="M0,30 Q50,10 100,30 T200,30 V60 H0 Z">
      <animate
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="M0,30 Q50,10 100,30 T200,30 V60 H0 Z;
                M0,30 Q50,50 100,30 T200,30 V60 H0 Z;
                M0,30 Q50,10 100,30 T200,30 V60 H0 Z"
      />
    </path>
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Wave Morph
   An SVG wave divider whose crest/trough morph via SMIL <animate>.
   Layout + a11y handled in CSS; the morph is in the markup.
   Customize: change the <path fill> or the path "values". */

.nuda-morph-wave {
  border-radius: 8px;
  overflow: hidden;
  background: #09090b;
  display: flex;
  align-items: flex-end;
}

.nuda-morph-wave svg {
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-wave svg animate {
    display: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 10. Shape Toggle ─────────────── */
  {
    id: "morph-toggle-shape",
    name: "Shape Toggle",
    category: "Morphing Shapes",
    preview: (
      <button
        type="button"
        className="nuda-morph-toggle-demo"
        aria-label="Toggle shape"
        aria-pressed="false"
        onClick={(e) => {
          const btn = e.currentTarget;
          const on = btn.getAttribute("aria-pressed") === "true";
          btn.setAttribute("aria-pressed", String(!on));
          btn.classList.toggle("is-square", !on);
        }}
      >
        <span className="nuda-morph-toggle-demo__shape" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-morph-toggle-demo{background:none;border:none;cursor:pointer;padding:16px;outline:none}
      .nuda-morph-toggle-demo__shape{display:block;width:56px;height:56px;background:#e4ff54;border-radius:50%;transition:border-radius .45s cubic-bezier(.4,.2,.2,1.2),transform .45s cubic-bezier(.4,.2,.2,1.2);will-change:border-radius,transform}
      .nuda-morph-toggle-demo.is-square .nuda-morph-toggle-demo__shape{border-radius:8px;transform:rotate(45deg)}
      .nuda-morph-toggle-demo:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-radius:8px}
      @media (prefers-reduced-motion:reduce){.nuda-morph-toggle-demo__shape{transition:none}.nuda-morph-toggle-demo.is-square .nuda-morph-toggle-demo__shape{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Shape Toggle — circle morphs to square on click. JS toggles .is-square -->
<button type="button" class="nuda-morph-toggle" aria-label="Toggle shape" aria-pressed="false">
  <span class="nuda-morph-toggle__shape" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Shape Toggle
   A circle morphs into a rotated square when .is-square is toggled.
   Customize: --morph-toggle-size, --morph-toggle-color */

.nuda-morph-toggle {
  --morph-toggle-size: 56px;
  --morph-toggle-color: #e4ff54;
  background: none;
  border: none;
  cursor: pointer;
  padding: 16px;
  outline: none;
}

.nuda-morph-toggle__shape {
  display: block;
  width: var(--morph-toggle-size);
  height: var(--morph-toggle-size);
  background: var(--morph-toggle-color);
  border-radius: 50%;
  transition: border-radius 0.45s cubic-bezier(0.4, 0.2, 0.2, 1.2),
              transform 0.45s cubic-bezier(0.4, 0.2, 0.2, 1.2);
  will-change: border-radius, transform;
}

.nuda-morph-toggle.is-square .nuda-morph-toggle__shape {
  border-radius: 8px;
  transform: rotate(45deg);
}

.nuda-morph-toggle:focus-visible {
  outline: 2px solid var(--morph-toggle-color);
  outline-offset: 2px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-morph-toggle__shape {
    transition: none;
  }
  .nuda-morph-toggle.is-square .nuda-morph-toggle__shape {
    transform: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Toggle the circle <-> square morph
const toggle = document.querySelector(".nuda-morph-toggle");
toggle.addEventListener("click", () => {
  const on = toggle.getAttribute("aria-pressed") === "true";
  toggle.setAttribute("aria-pressed", String(!on));
  toggle.classList.toggle("is-square", !on);
});`,
      },
    ],
  },
];
