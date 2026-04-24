import type { NudaComponent } from "./types";

export const scrollEffects: NudaComponent[] = [
  /* ─────────────── SCROLL REVEAL ─────────────── */
  {
    id: "scroll-reveal",
    name: "Scroll Reveal",
    category: "Scroll Effects",
    preview: (
      <div className="nuda-scroll-reveal" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div className="nuda-scroll-reveal__item nuda-scroll-reveal__item--loop">Revealed element 1</div>
        <div className="nuda-scroll-reveal__item nuda-scroll-reveal__item--loop" style={{ animationDelay: "0.2s" }}>Revealed element 2</div>
        <div className="nuda-scroll-reveal__item nuda-scroll-reveal__item--loop" style={{ animationDelay: "0.4s" }}>Revealed element 3</div>
      </div>
    ),
    cssInline: `
      .nuda-scroll-reveal__item{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:.6rem 1rem;color:#ccc;font-size:.8rem}
      .nuda-scroll-reveal__item--loop{animation:_sreveal 2s ease-out infinite}
      @keyframes _sreveal{0%{opacity:0;transform:translateY(16px)}30%{opacity:1;transform:translateY(0)}80%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-8px)}}
      @media(prefers-reduced-motion:reduce){.nuda-scroll-reveal__item--loop{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Elements that reveal as they scroll into view (CSS only) -->
<div class="nuda-scroll-reveal__item">Revealed element 1</div>
<div class="nuda-scroll-reveal__item">Revealed element 2</div>
<div class="nuda-scroll-reveal__item">Revealed element 3</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scroll Reveal (CSS Only)
   Elements fade up as they enter the viewport using scroll-driven animations.
   Uses animation-timeline: view() for modern browsers.
   Customize: --reveal-distance, --reveal-duration */

.nuda-scroll-reveal__item {
  --reveal-distance: 20px;
  --reveal-duration: 0.6s;
  opacity: 0;
  transform: translateY(var(--reveal-distance));
  animation: nuda-scroll-reveal-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}

@keyframes nuda-scroll-reveal-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fallback for browsers without scroll-driven animations */
@supports not (animation-timeline: view()) {
  .nuda-scroll-reveal__item {
    animation: nuda-scroll-reveal-fallback var(--reveal-duration) ease-out both;
  }

  @keyframes nuda-scroll-reveal-fallback {
    from {
      opacity: 0;
      transform: translateY(var(--reveal-distance));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scroll-reveal__item {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── PARALLAX LAYER ─────────────── */
  {
    id: "parallax-layer",
    name: "Parallax Layer",
    category: "Scroll Effects",
    preview: (
      <div className="nuda-parallax-demo" style={{ position: "relative", height: 120, overflow: "hidden", borderRadius: 8 }}>
        <div className="nuda-parallax__layer nuda-parallax__layer--back" style={{ background: "rgba(228,255,84,0.05)", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#555", fontSize: "2rem", fontWeight: 700 }}>BG</span>
        </div>
        <div className="nuda-parallax__layer nuda-parallax__layer--front" style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)" }}>
          <span style={{ color: "#e4ff54", fontSize: "0.85rem", fontWeight: 600 }}>Foreground</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-parallax-demo{border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-parallax__layer--back{animation:_parlax 3s ease-in-out infinite alternate}
      .nuda-parallax__layer--front{animation:_parfwd 3s ease-in-out infinite alternate}
      @keyframes _parlax{from{transform:translateY(0)}to{transform:translateY(-8px)}}
      @keyframes _parfwd{from{transform:translateX(-50%) translateY(0)}to{transform:translateX(-50%) translateY(5px)}}
      @media(prefers-reduced-motion:reduce){.nuda-parallax__layer--back,.nuda-parallax__layer--front{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-parallax">
  <div class="nuda-parallax__layer nuda-parallax__layer--back">
    <!-- Background content -->
    <p>Background layer</p>
  </div>
  <div class="nuda-parallax__layer nuda-parallax__layer--mid">
    <!-- Middle content -->
    <p>Middle layer</p>
  </div>
  <div class="nuda-parallax__layer nuda-parallax__layer--front">
    <!-- Foreground content -->
    <p>Foreground layer</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Parallax Layer
   Layers that move at different speeds on scroll using CSS transforms.
   Customize: --parallax-height */

.nuda-parallax {
  --parallax-height: 400px;
  height: var(--parallax-height);
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
  transform-style: preserve-3d;
}

.nuda-parallax__layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-parallax__layer--back {
  transform: translateZ(-2px) scale(3);
  z-index: 1;
}

.nuda-parallax__layer--mid {
  transform: translateZ(-1px) scale(2);
  z-index: 2;
}

.nuda-parallax__layer--front {
  transform: translateZ(0);
  z-index: 3;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-parallax {
    perspective: none;
    transform-style: flat;
  }
  .nuda-parallax__layer--back,
  .nuda-parallax__layer--mid {
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── SCROLL PROGRESS ─────────────── */
  {
    id: "scroll-progress",
    name: "Scroll Progress",
    category: "Scroll Effects",
    preview: (
      <div style={{ position: "relative", width: "100%", borderRadius: 8, overflow: "hidden" }}>
        <div className="nuda-scroll-progress" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} aria-label="Reading progress">
          <div className="nuda-scroll-progress__bar nuda-scroll-progress__bar--anim" />
        </div>
        <div style={{ padding: "1rem", color: "#666", fontSize: "0.75rem", textAlign: "center" }}>Scroll Progress</div>
      </div>
    ),
    cssInline: `
      .nuda-scroll-progress{--c:#e4ff54;position:sticky;top:0;width:100%;height:3px;background:rgba(255,255,255,.06);z-index:100}
      .nuda-scroll-progress__bar{height:100%;background:var(--c);border-radius:0 2px 2px 0}
      .nuda-scroll-progress__bar--anim{animation:_spfill 3s ease-in-out infinite}
      @keyframes _spfill{0%{width:0}50%{width:100%}100%{width:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scroll-progress" role="progressbar"
     aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
     aria-label="Reading progress">
  <div class="nuda-scroll-progress__bar"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scroll Progress
   Reading progress bar fixed at the top of the page.
   Customize: --progress-color, --progress-height */

.nuda-scroll-progress {
  --progress-color: #e4ff54;
  --progress-height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-height);
  background: rgba(255, 255, 255, 0.06);
  z-index: 9999;
}

.nuda-scroll-progress__bar {
  height: 100%;
  background: var(--progress-color);
  width: 0%;
  border-radius: 0 2px 2px 0;
  transition: width 0.1s linear;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scroll-progress__bar {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Scroll Progress — Updates the bar width based on scroll position. */

(function () {
  var bar = document.querySelector('.nuda-scroll-progress__bar');
  var wrapper = document.querySelector('.nuda-scroll-progress');
  if (!bar || !wrapper) return;

  function update() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
    wrapper.setAttribute('aria-valuenow', String(Math.round(progress)));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();`,
      },
    ],
  },

  /* ─────────────── FADE SECTION ─────────────── */
  {
    id: "fade-section",
    name: "Fade Section",
    category: "Scroll Effects",
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div className="nuda-fade-section nuda-fade-section--anim1">
          <p style={{ color: "#ccc", fontSize: "0.8rem", margin: 0 }}>Section A</p>
        </div>
        <div className="nuda-fade-section nuda-fade-section--anim2">
          <p style={{ color: "#ccc", fontSize: "0.8rem", margin: 0 }}>Section B</p>
        </div>
        <div className="nuda-fade-section nuda-fade-section--anim3">
          <p style={{ color: "#ccc", fontSize: "0.8rem", margin: 0 }}>Section C</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-fade-section{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:.6rem 1rem}
      .nuda-fade-section--anim1{animation:_fadepulse 3s ease-in-out infinite}
      .nuda-fade-section--anim2{animation:_fadepulse 3s ease-in-out infinite .5s}
      .nuda-fade-section--anim3{animation:_fadepulse 3s ease-in-out infinite 1s}
      @keyframes _fadepulse{0%,100%{opacity:.15}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-fade-section--anim1,.nuda-fade-section--anim2,.nuda-fade-section--anim3{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<section class="nuda-fade-section">
  <h2>Section Title</h2>
  <p>This section fades as you scroll past it.</p>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fade Section
   Section that fades out as the user scrolls past it.
   Customize opacity range via JS or use scroll-driven animations. */

.nuda-fade-section {
  transition: opacity 0.3s ease;
}

/* Modern browsers: pure CSS approach with scroll-driven animations */
@supports (animation-timeline: view()) {
  .nuda-fade-section {
    animation: nuda-fade-out linear both;
    animation-timeline: view();
    animation-range: exit 0% exit 60%;
  }

  @keyframes nuda-fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-fade-section {
    animation: none;
    opacity: 1;
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Fade Section — Fades elements based on scroll position.
   Fallback for browsers without scroll-driven animations. */

(function () {
  if (CSS.supports && CSS.supports('animation-timeline', 'view()')) return;

  var sections = document.querySelectorAll('.nuda-fade-section');
  if (!sections.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  function update() {
    var vh = window.innerHeight;
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      var visible = Math.min(1, Math.max(0, (vh - rect.top) / vh));
      var fadeOut = rect.top < 0
        ? Math.max(0, 1 + rect.bottom / vh)
        : 1;
      section.style.opacity = String(Math.min(visible, fadeOut));
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();`,
      },
    ],
  },
];
