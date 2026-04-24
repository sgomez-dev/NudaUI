import type { NudaComponent } from "./types";

/* ============================================================
   BUTTONS — 10 copy-paste animation components
   Pure HTML + CSS (+ optional vanilla JS). No frameworks.
   ============================================================ */

export const buttons: NudaComponent[] = [
  /* -------------------------------------------------------
     1. Shine Sweep
     ------------------------------------------------------- */
  {
    id: "shine-sweep",
    name: "Shine Sweep",
    category: "Buttons",
    cssInline: `
      @keyframes _shineSweep {
        to { transform: translateX(300%); }
      }
    `,
    preview: (
      <button
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        className="nuda-preview-shine"
      >
        <span style={{ position: "relative", zIndex: 1 }}>Shine Sweep</span>
        <span
          style={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "50%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            animation: "_shineSweep 2s ease-in-out infinite",
          }}
        />
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Shine Sweep — light sweep across button on hover -->
<button class="nuda-shine-sweep">
  <span class="nuda-shine-sweep__label">Shine Sweep</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Shine Sweep ─────────────────────────────────────────────
   Customize:
     --nuda-ss-bg      : button background color
     --nuda-ss-clr     : text color
     --nuda-ss-radius  : border radius
     --nuda-ss-speed   : sweep duration
   ──────────────────────────────────────────────────────────── */
.nuda-shine-sweep {
  --nuda-ss-bg: #6366f1;
  --nuda-ss-clr: #fff;
  --nuda-ss-radius: 8px;
  --nuda-ss-speed: 0.6s;

  position: relative;
  overflow: hidden;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-ss-clr);
  background: var(--nuda-ss-bg);
  border: none;
  border-radius: var(--nuda-ss-radius);
  cursor: pointer;
}

.nuda-shine-sweep__label {
  position: relative;
  z-index: 1;
}

/* Shine pseudo-element */
.nuda-shine-sweep::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.35),
    transparent
  );
  transition: none;
  transform: translateX(0);
}

.nuda-shine-sweep:hover::after {
  animation: nuda-shine-sweep-anim var(--nuda-ss-speed) ease-in-out;
}

@keyframes nuda-shine-sweep-anim {
  to { transform: translateX(400%); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-shine-sweep::after {
    animation: none !important;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     2. Border Draw
     ------------------------------------------------------- */
  {
    id: "border-draw",
    name: "Border Draw",
    category: "Buttons",
    preview: (
      <button
        style={{
          position: "relative",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#6366f1",
          background: "transparent",
          border: "2px solid transparent",
          borderRadius: "0",
          cursor: "pointer",
          backgroundImage:
            "linear-gradient(transparent, transparent), linear-gradient(90deg, #6366f1, #ec4899)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        Border Draw
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Border Draw — border draws itself on hover -->
<button class="nuda-border-draw">
  <span>Border Draw</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Border Draw ─────────────────────────────────────────────
   Four pseudo-segments animate to draw a border on hover.
   Customize:
     --nuda-bd-clr     : border & text color
     --nuda-bd-width   : border thickness
     --nuda-bd-speed   : draw duration (per side)
   ──────────────────────────────────────────────────────────── */
.nuda-border-draw {
  --nuda-bd-clr: #6366f1;
  --nuda-bd-width: 2px;
  --nuda-bd-speed: 0.25s;

  position: relative;
  display: inline-block;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-bd-clr);
  background: transparent;
  border: none;
  cursor: pointer;
}

/* Four line segments */
.nuda-border-draw::before,
.nuda-border-draw::after {
  content: "";
  position: absolute;
  background: var(--nuda-bd-clr);
  transition: all var(--nuda-bd-speed) ease;
}

/* Top & bottom lines */
.nuda-border-draw::before {
  top: 0; left: 0;
  width: 0; height: var(--nuda-bd-width);
}
.nuda-border-draw::after {
  bottom: 0; right: 0;
  width: 0; height: var(--nuda-bd-width);
}

/* Left & right via child span */
.nuda-border-draw span {
  position: relative;
  display: inline-block;
}
.nuda-border-draw span::before,
.nuda-border-draw span::after {
  content: "";
  position: absolute;
  background: var(--nuda-bd-clr);
  transition: all var(--nuda-bd-speed) ease;
  transition-delay: var(--nuda-bd-speed);
}
.nuda-border-draw span::before {
  top: -12px; right: -32px;
  width: var(--nuda-bd-width); height: 0;
}
.nuda-border-draw span::after {
  bottom: -12px; left: -32px;
  width: var(--nuda-bd-width); height: 0;
}

/* Hover — draw all four sides */
.nuda-border-draw:hover::before { width: 100%; }
.nuda-border-draw:hover::after  { width: 100%; }
.nuda-border-draw:hover span::before { height: calc(100% + 24px); }
.nuda-border-draw:hover span::after  { height: calc(100% + 24px); }

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-border-draw::before,
  .nuda-border-draw::after,
  .nuda-border-draw span::before,
  .nuda-border-draw span::after {
    transition: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     3. Ripple Click
     ------------------------------------------------------- */
  {
    id: "ripple-click",
    name: "Ripple Click",
    category: "Buttons",
    cssInline: `
      @keyframes _ripple {
        to { transform: scale(4); opacity: 0; }
      }
    `,
    preview: (
      <button
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Ripple Click
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ripple Click — material-style ripple on click -->
<button class="nuda-ripple">Ripple Click</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Ripple Click ────────────────────────────────────────────
   Customize:
     --nuda-rp-bg      : button background
     --nuda-rp-clr     : text color
     --nuda-rp-ripple  : ripple color (use semi-transparent)
     --nuda-rp-speed   : ripple expand duration
   ──────────────────────────────────────────────────────────── */
.nuda-ripple {
  --nuda-rp-bg: #6366f1;
  --nuda-rp-clr: #fff;
  --nuda-rp-ripple: rgba(255, 255, 255, 0.4);
  --nuda-rp-speed: 0.6s;

  position: relative;
  overflow: hidden;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-rp-clr);
  background: var(--nuda-rp-bg);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.nuda-ripple__circle {
  position: absolute;
  border-radius: 50%;
  background: var(--nuda-rp-ripple);
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  transform: scale(0);
  animation: nuda-ripple-expand var(--nuda-rp-speed) ease-out forwards;
  pointer-events: none;
}

@keyframes nuda-ripple-expand {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-ripple__circle {
    animation: none;
    display: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Ripple Click — vanilla JS ───────────────────────────────
   Creates a ripple span at the click position.
   Respects prefers-reduced-motion.
   ──────────────────────────────────────────────────────────── */
;(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".nuda-ripple").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var rect = btn.getBoundingClientRect();
      var circle = document.createElement("span");
      circle.classList.add("nuda-ripple__circle");
      circle.style.left = (e.clientX - rect.left) + "px";
      circle.style.top  = (e.clientY - rect.top) + "px";
      btn.appendChild(circle);

      circle.addEventListener("animationend", function () {
        circle.remove();
      });
    });
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     4. Magnetic Hover
     ------------------------------------------------------- */
  {
    id: "magnetic-hover",
    name: "Magnetic Hover",
    category: "Buttons",
    preview: (
      <button
        style={{
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
      >
        Magnetic Hover
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Magnetic Hover — button content follows cursor slightly -->
<button class="nuda-magnetic">Magnetic Hover</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Magnetic Hover ──────────────────────────────────────────
   Customize:
     --nuda-mg-bg      : button background
     --nuda-mg-clr     : text color
     --nuda-mg-radius  : border radius
     --nuda-mg-ease    : return-to-center easing
   ──────────────────────────────────────────────────────────── */
.nuda-magnetic {
  --nuda-mg-bg: #6366f1;
  --nuda-mg-clr: #fff;
  --nuda-mg-radius: 8px;
  --nuda-mg-ease: cubic-bezier(0.23, 1, 0.32, 1);

  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-mg-clr);
  background: var(--nuda-mg-bg);
  border: none;
  border-radius: var(--nuda-mg-radius);
  cursor: pointer;
  transition: transform 0.3s var(--nuda-mg-ease);
  will-change: transform;
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Magnetic Hover — vanilla JS ─────────────────────────────
   Shifts button content toward cursor position.
   Respects prefers-reduced-motion.
   ──────────────────────────────────────────────────────────── */
;(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var strength = 0.35; /* 0–1, how strongly the button follows */

  document.querySelectorAll(".nuda-magnetic").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform =
        "translate(" + (x * strength) + "px, " + (y * strength) + "px)";
    });

    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "translate(0, 0)";
    });
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     5. Fill Slide
     ------------------------------------------------------- */
  {
    id: "fill-slide",
    name: "Fill Slide",
    category: "Buttons",
    preview: (
      <button
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#6366f1",
          background: "transparent",
          border: "2px solid #6366f1",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "color 0.4s ease",
        }}
      >
        Fill Slide
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Fill Slide — background fills from left to right on hover -->
<button class="nuda-fill-slide">
  <span class="nuda-fill-slide__label">Fill Slide</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Fill Slide ──────────────────────────────────────────────
   Customize:
     --nuda-fs-bg         : fill color
     --nuda-fs-clr        : default text color
     --nuda-fs-clr-hover  : text color when filled
     --nuda-fs-border     : border color
     --nuda-fs-speed      : fill transition speed
   ──────────────────────────────────────────────────────────── */
.nuda-fill-slide {
  --nuda-fs-bg: #6366f1;
  --nuda-fs-clr: #6366f1;
  --nuda-fs-clr-hover: #fff;
  --nuda-fs-border: #6366f1;
  --nuda-fs-speed: 0.4s;

  position: relative;
  overflow: hidden;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-fs-clr);
  background: transparent;
  border: 2px solid var(--nuda-fs-border);
  border-radius: 8px;
  cursor: pointer;
  transition: color var(--nuda-fs-speed) ease;
}

.nuda-fill-slide__label {
  position: relative;
  z-index: 1;
}

.nuda-fill-slide::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--nuda-fs-bg);
  transform: translateX(-101%);
  transition: transform var(--nuda-fs-speed) ease;
}

.nuda-fill-slide:hover {
  color: var(--nuda-fs-clr-hover);
}
.nuda-fill-slide:hover::before {
  transform: translateX(0);
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-fill-slide::before {
    transition: none;
  }
  .nuda-fill-slide:hover::before {
    transform: translateX(0);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     6. Glow Pulse
     ------------------------------------------------------- */
  {
    id: "glow-pulse",
    name: "Glow Pulse",
    category: "Buttons",
    cssInline: `
      @keyframes _glowPulse {
        0%, 100% { box-shadow: 0 0 8px rgba(99,102,241,0.4), 0 0 24px rgba(99,102,241,0.2); }
        50%      { box-shadow: 0 0 16px rgba(99,102,241,0.7), 0 0 48px rgba(99,102,241,0.35); }
      }
    `,
    preview: (
      <button
        style={{
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          animation: "_glowPulse 2s ease-in-out infinite",
        }}
      >
        Glow Pulse
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glow Pulse — button with pulsing glow shadow -->
<button class="nuda-glow-pulse">Glow Pulse</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glow Pulse ──────────────────────────────────────────────
   Customize:
     --nuda-gp-bg     : button background
     --nuda-gp-clr    : text color
     --nuda-gp-glow   : glow color (use the same hue as bg)
     --nuda-gp-speed  : pulse cycle
   ──────────────────────────────────────────────────────────── */
.nuda-glow-pulse {
  --nuda-gp-bg: #6366f1;
  --nuda-gp-clr: #fff;
  --nuda-gp-glow: rgba(99, 102, 241, 0.5);
  --nuda-gp-speed: 2s;

  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-gp-clr);
  background: var(--nuda-gp-bg);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  animation: nuda-glow-pulse var(--nuda-gp-speed) ease-in-out infinite;
}

@keyframes nuda-glow-pulse {
  0%, 100% {
    box-shadow: 0 0 8px var(--nuda-gp-glow), 0 0 24px var(--nuda-gp-glow);
  }
  50% {
    box-shadow: 0 0 20px var(--nuda-gp-glow), 0 0 56px var(--nuda-gp-glow);
  }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glow-pulse {
    animation: none;
    box-shadow: 0 0 8px var(--nuda-gp-glow);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     7. Scale Bounce
     ------------------------------------------------------- */
  {
    id: "scale-bounce",
    name: "Scale Bounce",
    category: "Buttons",
    preview: (
      <button
        style={{
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.08)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
      >
        Scale Bounce
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scale Bounce — bouncy scale on hover / click -->
<button class="nuda-scale-bounce">Scale Bounce</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Scale Bounce ────────────────────────────────────────────
   Uses a spring-like cubic-bezier for the overshoot bounce.
   Customize:
     --nuda-sb-bg     : button background
     --nuda-sb-clr    : text color
     --nuda-sb-scale  : hover scale factor
     --nuda-sb-press  : active (click) scale
   ──────────────────────────────────────────────────────────── */
.nuda-scale-bounce {
  --nuda-sb-bg: #6366f1;
  --nuda-sb-clr: #fff;
  --nuda-sb-scale: 1.08;
  --nuda-sb-press: 0.95;

  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-sb-clr);
  background: var(--nuda-sb-bg);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.nuda-scale-bounce:hover {
  transform: scale(var(--nuda-sb-scale));
}

.nuda-scale-bounce:active {
  transform: scale(var(--nuda-sb-press));
  transition-duration: 0.1s;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-scale-bounce {
    transition: none;
  }
  .nuda-scale-bounce:hover,
  .nuda-scale-bounce:active {
    transform: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     8. Underline Slide
     ------------------------------------------------------- */
  {
    id: "underline-slide",
    name: "Underline Slide",
    category: "Buttons",
    preview: (
      <button
        style={{
          position: "relative",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#6366f1",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        Underline Slide
        <span
          style={{
            position: "absolute",
            bottom: "6px",
            left: "32px",
            right: "32px",
            height: "2px",
            background: "#6366f1",
            transformOrigin: "left",
            transform: "scaleX(0.4)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Underline Slide — text underline slides in on hover -->
<button class="nuda-underline-slide">Underline Slide</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Underline Slide ─────────────────────────────────────────
   Customize:
     --nuda-us-clr     : text & underline color
     --nuda-us-weight  : underline thickness
     --nuda-us-speed   : slide-in speed
     --nuda-us-gap     : distance below text
   ──────────────────────────────────────────────────────────── */
.nuda-underline-slide {
  --nuda-us-clr: #6366f1;
  --nuda-us-weight: 2px;
  --nuda-us-speed: 0.3s;
  --nuda-us-gap: 2px;

  position: relative;
  display: inline-block;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-us-clr);
  background: transparent;
  border: none;
  cursor: pointer;
}

.nuda-underline-slide::after {
  content: "";
  position: absolute;
  bottom: calc(6px + var(--nuda-us-gap));
  left: 32px;
  right: 32px;
  height: var(--nuda-us-weight);
  background: var(--nuda-us-clr);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--nuda-us-speed) ease;
}

.nuda-underline-slide:hover::after {
  transform: scaleX(1);
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-underline-slide::after {
    transition: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     9. Arrow Slide
     ------------------------------------------------------- */
  {
    id: "arrow-slide",
    name: "Arrow Slide",
    category: "Buttons",
    preview: (
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        Arrow Slide
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          &rarr;
        </span>
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Arrow Slide — arrow icon slides in on hover -->
<button class="nuda-arrow-slide">
  <span class="nuda-arrow-slide__label">Arrow Slide</span>
  <span class="nuda-arrow-slide__arrow" aria-hidden="true">&rarr;</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Arrow Slide ─────────────────────────────────────────────
   Customize:
     --nuda-as-bg      : button background
     --nuda-as-clr     : text color
     --nuda-as-speed   : slide speed
     --nuda-as-offset  : arrow slide distance
   ──────────────────────────────────────────────────────────── */
.nuda-arrow-slide {
  --nuda-as-bg: #6366f1;
  --nuda-as-clr: #fff;
  --nuda-as-speed: 0.3s;
  --nuda-as-offset: 6px;

  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-as-clr);
  background: var(--nuda-as-bg);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.nuda-arrow-slide__arrow {
  display: inline-block;
  opacity: 0;
  transform: translateX(calc(-1 * var(--nuda-as-offset)));
  transition:
    transform var(--nuda-as-speed) ease,
    opacity var(--nuda-as-speed) ease;
}

.nuda-arrow-slide:hover .nuda-arrow-slide__arrow {
  opacity: 1;
  transform: translateX(0);
}

.nuda-arrow-slide:hover .nuda-arrow-slide__label {
  transform: translateX(calc(-1 * var(--nuda-as-offset) / 2));
}

.nuda-arrow-slide__label {
  transition: transform var(--nuda-as-speed) ease;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-arrow-slide__arrow,
  .nuda-arrow-slide__label {
    transition: none;
  }
  .nuda-arrow-slide__arrow {
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     10. Ghost Outline
     ------------------------------------------------------- */
  {
    id: "ghost-outline",
    name: "Ghost Outline",
    category: "Buttons",
    cssInline: `
      @keyframes _ghostBorder {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `,
    preview: (
      <button
        style={{
          position: "relative",
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#c4b5fd",
          background: "transparent",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "8px",
            padding: "2px",
            background: "linear-gradient(135deg, #6366f1, #ec4899, #f59e0b, #6366f1)",
            backgroundSize: "300% 300%",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: "_ghostBorder 4s ease infinite",
          }}
        />
        Ghost Outline
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ghost Outline — ghost button with animated border gradient -->
<button class="nuda-ghost-outline">Ghost Outline</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Ghost Outline ───────────────────────────────────────────
   Animated gradient border using mask-composite trick.
   Customize:
     --nuda-go-gradient : border gradient colors
     --nuda-go-clr      : text color
     --nuda-go-radius   : corner radius
     --nuda-go-border   : border thickness
     --nuda-go-speed    : animation cycle
   ──────────────────────────────────────────────────────────── */
.nuda-ghost-outline {
  --nuda-go-gradient: linear-gradient(135deg, #6366f1, #ec4899, #f59e0b, #6366f1);
  --nuda-go-clr: #c4b5fd;
  --nuda-go-radius: 8px;
  --nuda-go-border: 2px;
  --nuda-go-speed: 4s;

  position: relative;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--nuda-go-clr);
  background: transparent;
  border: none;
  border-radius: var(--nuda-go-radius);
  cursor: pointer;
}

/* Animated gradient border via pseudo-element */
.nuda-ghost-outline::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--nuda-go-radius);
  padding: var(--nuda-go-border);
  background: var(--nuda-go-gradient);
  background-size: 300% 300%;
  /* Mask trick: show only the border area */
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: nuda-ghost-border var(--nuda-go-speed) ease infinite;
  pointer-events: none;
}

@keyframes nuda-ghost-border {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-ghost-outline::before {
    animation: none;
    background-size: 100% 100%;
  }
}`,
      },
    ],
  },
];
