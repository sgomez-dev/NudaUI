import type { NudaComponent } from "./types";

/* ============================================================
   CARDS & HOVER — 8 copy-paste animation components
   Pure HTML + CSS (+ optional vanilla JS). No frameworks.
   ============================================================ */

export const cardsHover: NudaComponent[] = [
  /* -------------------------------------------------------
     1. Tilt Card
     ------------------------------------------------------- */
  {
    id: "tilt-card",
    name: "Tilt Card",
    category: "Cards & Hover",
    preview: (
      <div
        style={{
          width: "220px",
          padding: "32px 24px",
          background: "linear-gradient(135deg, #1e1b4b, #312e81)",
          borderRadius: "16px",
          color: "#e0e7ff",
          textAlign: "center",
          transition: "transform 0.15s ease",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "8px" }}>&#9830;</div>
        <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Tilt Card</div>
        <div style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "6px" }}>
          Hover to tilt
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tilt Card — card that tilts toward cursor on hover -->
<div class="nuda-tilt-card">
  <div class="nuda-tilt-card__content">
    <div class="nuda-tilt-card__icon">&#9830;</div>
    <h3 class="nuda-tilt-card__title">Tilt Card</h3>
    <p class="nuda-tilt-card__desc">Hover to see the 3D tilt effect</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Tilt Card ───────────────────────────────────────────────
   The tilt is JS-driven via CSS custom properties.
   Customize:
     --nuda-tc-bg      : card background
     --nuda-tc-clr     : text color
     --nuda-tc-radius  : corner radius
     --nuda-tc-shadow  : box shadow
   ──────────────────────────────────────────────────────────── */
.nuda-tilt-card {
  --nuda-tc-bg: linear-gradient(135deg, #1e1b4b, #312e81);
  --nuda-tc-clr: #e0e7ff;
  --nuda-tc-radius: 16px;
  --nuda-tc-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --nuda-tc-rx: 0deg;
  --nuda-tc-ry: 0deg;

  width: 280px;
  perspective: 800px;
}

.nuda-tilt-card__content {
  padding: 32px 24px;
  background: var(--nuda-tc-bg);
  border-radius: var(--nuda-tc-radius);
  color: var(--nuda-tc-clr);
  text-align: center;
  box-shadow: var(--nuda-tc-shadow);
  transform: rotateX(var(--nuda-tc-rx)) rotateY(var(--nuda-tc-ry));
  transition: transform 0.15s ease;
  will-change: transform;
}

.nuda-tilt-card__icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.nuda-tilt-card__title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.nuda-tilt-card__desc {
  font-size: 0.85rem;
  opacity: 0.7;
  margin: 6px 0 0;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-tilt-card__content {
    transition: none;
    transform: none !important;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Tilt Card — vanilla JS ──────────────────────────────────
   Applies 3D tilt via CSS custom properties based on cursor
   position. Respects prefers-reduced-motion.
   ──────────────────────────────────────────────────────────── */
;(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var maxTilt = 15; /* degrees */

  document.querySelectorAll(".nuda-tilt-card").forEach(function (card) {
    var content = card.querySelector(".nuda-tilt-card__content");
    if (!content) return;

    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;   /* 0 → 1 */
      var y = (e.clientY - rect.top) / rect.height;    /* 0 → 1 */

      var rotateX = (0.5 - y) * maxTilt;  /* tilt up/down */
      var rotateY = (x - 0.5) * maxTilt;  /* tilt left/right */

      content.style.setProperty("--nuda-tc-rx", rotateX + "deg");
      content.style.setProperty("--nuda-tc-ry", rotateY + "deg");
    });

    card.addEventListener("mouseleave", function () {
      content.style.setProperty("--nuda-tc-rx", "0deg");
      content.style.setProperty("--nuda-tc-ry", "0deg");
    });
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     2. Border Glow
     ------------------------------------------------------- */
  {
    id: "border-glow",
    name: "Border Glow",
    category: "Cards & Hover",
    cssInline: `
      @keyframes _borderGlow {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `,
    preview: (
      <div
        style={{
          position: "relative",
          width: "220px",
          padding: "2px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #6366f1, #ec4899, #f59e0b, #6366f1)",
          backgroundSize: "300% 300%",
          animation: "_borderGlow 4s ease infinite",
        }}
      >
        <div
          style={{
            padding: "28px 20px",
            background: "#0f0f23",
            borderRadius: "14px",
            color: "#e0e7ff",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Border Glow</div>
          <div style={{ fontSize: "0.85rem", opacity: 0.6, marginTop: "6px" }}>
            Animated gradient border
          </div>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Border Glow — card with animated border glow on hover -->
<div class="nuda-border-glow">
  <div class="nuda-border-glow__inner">
    <h3 class="nuda-border-glow__title">Border Glow</h3>
    <p class="nuda-border-glow__desc">Animated gradient border</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Border Glow ─────────────────────────────────────────────
   Outer wrapper = animated gradient, inner = card body.
   Customize:
     --nuda-bg-gradient  : border gradient
     --nuda-bg-card-bg   : inner card background
     --nuda-bg-clr       : text color
     --nuda-bg-border    : border width (padding on outer)
     --nuda-bg-radius    : corner radius
     --nuda-bg-speed     : animation cycle
   ──────────────────────────────────────────────────────────── */
.nuda-border-glow {
  --nuda-bg-gradient: linear-gradient(135deg, #6366f1, #ec4899, #f59e0b, #6366f1);
  --nuda-bg-card-bg: #0f0f23;
  --nuda-bg-clr: #e0e7ff;
  --nuda-bg-border: 2px;
  --nuda-bg-radius: 16px;
  --nuda-bg-speed: 4s;

  width: 280px;
  padding: var(--nuda-bg-border);
  border-radius: var(--nuda-bg-radius);
  background: var(--nuda-bg-gradient);
  background-size: 300% 300%;
  animation: nuda-border-glow-shift var(--nuda-bg-speed) ease infinite;
}

.nuda-border-glow__inner {
  padding: 28px 20px;
  background: var(--nuda-bg-card-bg);
  border-radius: calc(var(--nuda-bg-radius) - var(--nuda-bg-border));
  color: var(--nuda-bg-clr);
  text-align: center;
}

.nuda-border-glow__title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.nuda-border-glow__desc {
  font-size: 0.85rem;
  opacity: 0.6;
  margin: 6px 0 0;
}

@keyframes nuda-border-glow-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-border-glow {
    animation: none;
    background-size: 100% 100%;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     3. Reveal Card
     ------------------------------------------------------- */
  {
    id: "reveal-card",
    name: "Reveal Card",
    category: "Cards & Hover",
    preview: (
      <div
        style={{
          position: "relative",
          width: "220px",
          height: "160px",
          borderRadius: "16px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #312e81, #1e1b4b)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#e0e7ff",
          }}
        >
          Reveal Card
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(99,102,241,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "0.9rem",
            padding: "20px",
            textAlign: "center",
            transform: "translateY(100%)",
            transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          Hidden content slides up on hover
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Reveal Card — content reveals on hover with slide -->
<div class="nuda-reveal-card">
  <div class="nuda-reveal-card__front">
    <h3 class="nuda-reveal-card__title">Reveal Card</h3>
  </div>
  <div class="nuda-reveal-card__overlay">
    <p>Hidden content slides up on hover.</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Reveal Card ─────────────────────────────────────────────
   Customize:
     --nuda-rc-bg        : card background
     --nuda-rc-overlay   : overlay background
     --nuda-rc-clr       : front text color
     --nuda-rc-clr-over  : overlay text color
     --nuda-rc-radius    : corner radius
     --nuda-rc-speed     : slide duration
   ──────────────────────────────────────────────────────────── */
.nuda-reveal-card {
  --nuda-rc-bg: linear-gradient(135deg, #312e81, #1e1b4b);
  --nuda-rc-overlay: rgba(99, 102, 241, 0.95);
  --nuda-rc-clr: #e0e7ff;
  --nuda-rc-clr-over: #fff;
  --nuda-rc-radius: 16px;
  --nuda-rc-speed: 0.4s;

  position: relative;
  width: 280px;
  height: 200px;
  border-radius: var(--nuda-rc-radius);
  overflow: hidden;
  background: var(--nuda-rc-bg);
  cursor: pointer;
}

.nuda-reveal-card__front {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--nuda-rc-clr);
}

.nuda-reveal-card__title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.nuda-reveal-card__overlay {
  position: absolute;
  inset: 0;
  background: var(--nuda-rc-overlay);
  color: var(--nuda-rc-clr-over);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
  transform: translateY(100%);
  transition: transform var(--nuda-rc-speed) cubic-bezier(0.22, 1, 0.36, 1);
}

.nuda-reveal-card:hover .nuda-reveal-card__overlay {
  transform: translateY(0);
}

/* Keyboard focus support */
.nuda-reveal-card:focus-within .nuda-reveal-card__overlay {
  transform: translateY(0);
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-reveal-card__overlay {
    transition: none;
    transform: none;
    opacity: 0;
  }
  .nuda-reveal-card:hover .nuda-reveal-card__overlay,
  .nuda-reveal-card:focus-within .nuda-reveal-card__overlay {
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     4. Glass Card
     ------------------------------------------------------- */
  {
    id: "glass-card",
    name: "Glass Card",
    category: "Cards & Hover",
    preview: (
      <div
        style={{
          position: "relative",
          width: "220px",
          padding: "28px 20px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "16px",
          color: "#e0e7ff",
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Glass Card</div>
        <div style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "6px" }}>
          Frosted glass effect
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glass Card — frosted glass card with blur background -->
<div class="nuda-glass-card">
  <h3 class="nuda-glass-card__title">Glass Card</h3>
  <p class="nuda-glass-card__desc">Frosted glass effect with backdrop blur</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glass Card ──────────────────────────────────────────────
   Requires a colorful / image background behind the card
   for the blur to be visible.
   Customize:
     --nuda-gc-bg        : glass background (semi-transparent)
     --nuda-gc-blur      : blur amount
     --nuda-gc-border    : border color
     --nuda-gc-clr       : text color
     --nuda-gc-radius    : corner radius
     --nuda-gc-shadow    : optional shadow
   ──────────────────────────────────────────────────────────── */
.nuda-glass-card {
  --nuda-gc-bg: rgba(255, 255, 255, 0.08);
  --nuda-gc-blur: 16px;
  --nuda-gc-border: rgba(255, 255, 255, 0.12);
  --nuda-gc-clr: #e0e7ff;
  --nuda-gc-radius: 16px;
  --nuda-gc-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  width: 280px;
  padding: 28px 20px;
  background: var(--nuda-gc-bg);
  backdrop-filter: blur(var(--nuda-gc-blur));
  -webkit-backdrop-filter: blur(var(--nuda-gc-blur));
  border: 1px solid var(--nuda-gc-border);
  border-radius: var(--nuda-gc-radius);
  box-shadow: var(--nuda-gc-shadow);
  color: var(--nuda-gc-clr);
  text-align: center;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.nuda-glass-card:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.2);
}

.nuda-glass-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.nuda-glass-card__desc {
  font-size: 0.85rem;
  opacity: 0.7;
  margin: 6px 0 0;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glass-card {
    transition: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     5. Spotlight Card
     ------------------------------------------------------- */
  {
    id: "spotlight-card",
    name: "Spotlight Card",
    category: "Cards & Hover",
    preview: (
      <div
        style={{
          position: "relative",
          width: "220px",
          padding: "28px 20px",
          background: "#0f0f23",
          borderRadius: "16px",
          overflow: "hidden",
          color: "#e0e7ff",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Spotlight Card</div>
        <div style={{ fontSize: "0.85rem", opacity: 0.6, marginTop: "6px" }}>
          Cursor spotlight follows you
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Spotlight Card — spotlight follows cursor on card -->
<div class="nuda-spotlight-card">
  <div class="nuda-spotlight-card__light"></div>
  <div class="nuda-spotlight-card__content">
    <h3 class="nuda-spotlight-card__title">Spotlight Card</h3>
    <p class="nuda-spotlight-card__desc">Cursor spotlight follows you</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Spotlight Card ──────────────────────────────────────────
   Spotlight is a radial-gradient positioned via JS.
   Customize:
     --nuda-sp-bg        : card background
     --nuda-sp-clr       : text color
     --nuda-sp-radius    : corner radius
     --nuda-sp-light     : spotlight color
     --nuda-sp-size      : spotlight diameter
   ──────────────────────────────────────────────────────────── */
.nuda-spotlight-card {
  --nuda-sp-bg: #0f0f23;
  --nuda-sp-clr: #e0e7ff;
  --nuda-sp-radius: 16px;
  --nuda-sp-light: rgba(99, 102, 241, 0.15);
  --nuda-sp-size: 300px;
  --nuda-sp-x: 50%;
  --nuda-sp-y: 50%;

  position: relative;
  width: 280px;
  padding: 28px 20px;
  background: var(--nuda-sp-bg);
  border-radius: var(--nuda-sp-radius);
  overflow: hidden;
  color: var(--nuda-sp-clr);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* The light layer */
.nuda-spotlight-card__light {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle var(--nuda-sp-size) at var(--nuda-sp-x) var(--nuda-sp-y),
    var(--nuda-sp-light),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.nuda-spotlight-card:hover .nuda-spotlight-card__light {
  opacity: 1;
}

.nuda-spotlight-card__content {
  position: relative;
  z-index: 1;
}

.nuda-spotlight-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.nuda-spotlight-card__desc {
  font-size: 0.85rem;
  opacity: 0.6;
  margin: 6px 0 0;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-spotlight-card__light {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Spotlight Card — vanilla JS ─────────────────────────────
   Positions the radial-gradient spotlight at cursor coordinates.
   Respects prefers-reduced-motion.
   ──────────────────────────────────────────────────────────── */
;(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".nuda-spotlight-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      card.style.setProperty("--nuda-sp-x", x + "px");
      card.style.setProperty("--nuda-sp-y", y + "px");
    });
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     6. Flip Card
     ------------------------------------------------------- */
  {
    id: "flip-card",
    name: "Flip Card",
    category: "Cards & Hover",
    preview: (
      <div style={{ width: "220px", height: "160px", perspective: "800px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #312e81, #1e1b4b)",
              borderRadius: "16px",
              color: "#e0e7ff",
              fontWeight: 700,
              backfaceVisibility: "hidden",
            }}
          >
            Flip Card — Front
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "16px",
              color: "#fff",
              fontWeight: 700,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            Back Side
          </div>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Flip Card — card that flips to show back content -->
<div class="nuda-flip-card" tabindex="0" role="button" aria-label="Flip card">
  <div class="nuda-flip-card__inner">
    <div class="nuda-flip-card__front">
      <h3>Front Side</h3>
      <p>Hover or focus to flip</p>
    </div>
    <div class="nuda-flip-card__back">
      <h3>Back Side</h3>
      <p>Here is the hidden content</p>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Flip Card ───────────────────────────────────────────────
   Customize:
     --nuda-fc-w         : card width
     --nuda-fc-h         : card height
     --nuda-fc-radius    : corner radius
     --nuda-fc-front-bg  : front face background
     --nuda-fc-back-bg   : back face background
     --nuda-fc-speed     : flip duration
   ──────────────────────────────────────────────────────────── */
.nuda-flip-card {
  --nuda-fc-w: 280px;
  --nuda-fc-h: 200px;
  --nuda-fc-radius: 16px;
  --nuda-fc-front-bg: linear-gradient(135deg, #312e81, #1e1b4b);
  --nuda-fc-back-bg: linear-gradient(135deg, #6366f1, #8b5cf6);
  --nuda-fc-speed: 0.6s;

  width: var(--nuda-fc-w);
  height: var(--nuda-fc-h);
  perspective: 800px;
  cursor: pointer;
}

.nuda-flip-card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform var(--nuda-fc-speed) cubic-bezier(0.22, 1, 0.36, 1);
}

/* Flip on hover and focus */
.nuda-flip-card:hover .nuda-flip-card__inner,
.nuda-flip-card:focus .nuda-flip-card__inner {
  transform: rotateY(180deg);
}

/* Shared face styles */
.nuda-flip-card__front,
.nuda-flip-card__back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--nuda-fc-radius);
  padding: 20px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.nuda-flip-card__front {
  background: var(--nuda-fc-front-bg);
  color: #e0e7ff;
}

.nuda-flip-card__back {
  background: var(--nuda-fc-back-bg);
  color: #fff;
  transform: rotateY(180deg);
}

.nuda-flip-card__front h3,
.nuda-flip-card__back h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
}

.nuda-flip-card__front p,
.nuda-flip-card__back p {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-flip-card__inner {
    transition: none;
  }
  /* Show both sides stacked instead of flipping */
  .nuda-flip-card__back {
    transform: none;
    position: relative;
    display: none;
  }
  .nuda-flip-card:hover .nuda-flip-card__front,
  .nuda-flip-card:focus .nuda-flip-card__front {
    display: none;
  }
  .nuda-flip-card:hover .nuda-flip-card__back,
  .nuda-flip-card:focus .nuda-flip-card__back {
    display: flex;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     7. Lift Card
     ------------------------------------------------------- */
  {
    id: "lift-card",
    name: "Lift Card",
    category: "Cards & Hover",
    preview: (
      <div
        style={{
          width: "220px",
          padding: "28px 20px",
          background: "linear-gradient(135deg, #1e1b4b, #312e81)",
          borderRadius: "16px",
          color: "#e0e7ff",
          textAlign: "center",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Lift Card</div>
        <div style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "6px" }}>
          Lifts with shadow on hover
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Lift Card — card that lifts with shadow on hover -->
<div class="nuda-lift-card">
  <h3 class="nuda-lift-card__title">Lift Card</h3>
  <p class="nuda-lift-card__desc">Lifts with shadow on hover</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Lift Card ───────────────────────────────────────────────
   Customize:
     --nuda-lc-bg        : card background
     --nuda-lc-clr       : text color
     --nuda-lc-radius    : corner radius
     --nuda-lc-lift      : hover lift distance
     --nuda-lc-shadow    : resting shadow
     --nuda-lc-shadow-h  : hover shadow
     --nuda-lc-speed     : transition speed
   ──────────────────────────────────────────────────────────── */
.nuda-lift-card {
  --nuda-lc-bg: linear-gradient(135deg, #1e1b4b, #312e81);
  --nuda-lc-clr: #e0e7ff;
  --nuda-lc-radius: 16px;
  --nuda-lc-lift: -8px;
  --nuda-lc-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  --nuda-lc-shadow-h: 0 20px 40px rgba(0, 0, 0, 0.35);
  --nuda-lc-speed: 0.35s;

  width: 280px;
  padding: 28px 20px;
  background: var(--nuda-lc-bg);
  border-radius: var(--nuda-lc-radius);
  color: var(--nuda-lc-clr);
  text-align: center;
  box-shadow: var(--nuda-lc-shadow);
  cursor: pointer;
  transition:
    transform var(--nuda-lc-speed) cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow var(--nuda-lc-speed) ease;
  will-change: transform, box-shadow;
}

.nuda-lift-card:hover {
  transform: translateY(var(--nuda-lc-lift));
  box-shadow: var(--nuda-lc-shadow-h);
}

.nuda-lift-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.nuda-lift-card__desc {
  font-size: 0.85rem;
  opacity: 0.7;
  margin: 6px 0 0;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-lift-card {
    transition: none;
  }
  .nuda-lift-card:hover {
    transform: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     8. Gradient Border Card
     ------------------------------------------------------- */
  {
    id: "gradient-border-card",
    name: "Gradient Border Card",
    category: "Cards & Hover",
    cssInline: `
      @keyframes _gradBorderSpin {
        to { --nuda-gbc-angle: 360deg; }
      }
      @property --nuda-gbc-angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
      }
    `,
    preview: (
      <div
        style={{
          position: "relative",
          width: "220px",
          padding: "2px",
          borderRadius: "16px",
          background: "conic-gradient(from 0deg, #6366f1, #ec4899, #f59e0b, #10b981, #6366f1)",
        }}
      >
        <div
          style={{
            padding: "28px 20px",
            background: "#0f0f23",
            borderRadius: "14px",
            color: "#e0e7ff",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Gradient Border</div>
          <div style={{ fontSize: "0.85rem", opacity: 0.6, marginTop: "6px" }}>
            Animated conic gradient
          </div>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Border Card — animated gradient border -->
<div class="nuda-gradient-border-card">
  <div class="nuda-gradient-border-card__inner">
    <h3 class="nuda-gradient-border-card__title">Gradient Border</h3>
    <p class="nuda-gradient-border-card__desc">Animated conic gradient border</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Gradient Border Card ────────────────────────────────────
   Uses @property for animatable conic-gradient rotation.
   Falls back to a static gradient in unsupported browsers.
   Customize:
     --nuda-gbc-card-bg  : inner card background
     --nuda-gbc-clr      : text color
     --nuda-gbc-border   : border width
     --nuda-gbc-radius   : corner radius
     --nuda-gbc-speed    : rotation speed
   ──────────────────────────────────────────────────────────── */

/* Registered custom property — enables animation */
@property --nuda-gbc-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.nuda-gradient-border-card {
  --nuda-gbc-card-bg: #0f0f23;
  --nuda-gbc-clr: #e0e7ff;
  --nuda-gbc-border: 2px;
  --nuda-gbc-radius: 16px;
  --nuda-gbc-speed: 3s;
  --nuda-gbc-angle: 0deg;

  width: 280px;
  padding: var(--nuda-gbc-border);
  border-radius: var(--nuda-gbc-radius);
  background: conic-gradient(
    from var(--nuda-gbc-angle),
    #6366f1,
    #ec4899,
    #f59e0b,
    #10b981,
    #6366f1
  );
  animation: nuda-gradient-border-spin var(--nuda-gbc-speed) linear infinite;
}

.nuda-gradient-border-card__inner {
  padding: 28px 20px;
  background: var(--nuda-gbc-card-bg);
  border-radius: calc(var(--nuda-gbc-radius) - var(--nuda-gbc-border));
  color: var(--nuda-gbc-clr);
  text-align: center;
}

.nuda-gradient-border-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
}

.nuda-gradient-border-card__desc {
  font-size: 0.85rem;
  opacity: 0.6;
  margin: 6px 0 0;
}

@keyframes nuda-gradient-border-spin {
  to { --nuda-gbc-angle: 360deg; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-border-card {
    animation: none;
  }
}`,
      },
    ],
  },
];
