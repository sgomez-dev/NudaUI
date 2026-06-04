import type { NudaComponent } from "./types";

/* ============================================================
   TOGGLES & INPUTS — 6 copy-paste animation components
   Pure HTML + CSS (+ optional vanilla JS). No frameworks.
   ============================================================ */

export const togglesInputs: NudaComponent[] = [
  /* -------------------------------------------------------
     1. Smooth Toggle
     ------------------------------------------------------- */
  {
    id: "smooth-toggle",
    name: "Smooth Toggle",
    category: "Toggles & Inputs",
    preview: (
      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: "52px",
          height: "28px",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          defaultChecked
          style={{
            opacity: 0,
            width: 0,
            height: 0,
            position: "absolute",
          }}
        />
        <span
          style={{
            position: "absolute",
            inset: 0,
            background: "#6366f1",
            borderRadius: "9999px",
            transition: "background 0.3s ease",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "3px",
              left: "26px",
              width: "22px",
              height: "22px",
              background: "#fff",
              borderRadius: "50%",
              transition: "left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            }}
          />
        </span>
      </label>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Smooth Toggle — iOS-style toggle switch
     Uses a hidden checkbox for native accessibility. -->
<label class="nuda-toggle" role="switch">
  <input class="nuda-toggle__input" type="checkbox" />
  <span class="nuda-toggle__track">
    <span class="nuda-toggle__thumb"></span>
  </span>
  <span class="nuda-toggle__label">Toggle</span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Smooth Toggle ───────────────────────────────────────────
   Customize:
     --nuda-tg-w         : track width
     --nuda-tg-h         : track height
     --nuda-tg-bg-off    : track background (off)
     --nuda-tg-bg-on     : track background (on)
     --nuda-tg-thumb-clr : thumb color
     --nuda-tg-gap       : thumb padding from track edges
   ──────────────────────────────────────────────────────────── */
.nuda-toggle {
  --nuda-tg-w: 52px;
  --nuda-tg-h: 28px;
  --nuda-tg-bg-off: #d1d5db;
  --nuda-tg-bg-on: #6366f1;
  --nuda-tg-thumb-clr: #fff;
  --nuda-tg-gap: 3px;

  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}

/* Visually-hidden native checkbox */
.nuda-toggle__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Track */
.nuda-toggle__track {
  position: relative;
  display: inline-block;
  width: var(--nuda-tg-w);
  height: var(--nuda-tg-h);
  background: var(--nuda-tg-bg-off);
  border-radius: 9999px;
  transition: background 0.3s ease;
}

/* Thumb */
.nuda-toggle__thumb {
  position: absolute;
  top: var(--nuda-tg-gap);
  left: var(--nuda-tg-gap);
  width: calc(var(--nuda-tg-h) - var(--nuda-tg-gap) * 2);
  height: calc(var(--nuda-tg-h) - var(--nuda-tg-gap) * 2);
  background: var(--nuda-tg-thumb-clr);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Checked state */
.nuda-toggle__input:checked + .nuda-toggle__track {
  background: var(--nuda-tg-bg-on);
}

.nuda-toggle__input:checked + .nuda-toggle__track .nuda-toggle__thumb {
  left: calc(var(--nuda-tg-w) - var(--nuda-tg-h) + var(--nuda-tg-gap));
}

/* Focus ring for keyboard users */
.nuda-toggle__input:focus-visible + .nuda-toggle__track {
  outline: 2px solid var(--nuda-tg-bg-on);
  outline-offset: 2px;
}

.nuda-toggle__label {
  font-size: 0.9rem;
  font-weight: 500;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-toggle__track,
  .nuda-toggle__thumb {
    transition: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     2. Checkbox Bounce
     ------------------------------------------------------- */
  {
    id: "checkbox-bounce",
    name: "Checkbox Bounce",
    category: "Toggles & Inputs",
    cssInline: `
      @keyframes _checkBounce {
        0%   { transform: scale(0); }
        50%  { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `,
    preview: (
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          fontSize: "0.95rem",
        }}
      >
        <span
          style={{
            width: "22px",
            height: "22px",
            border: "2px solid #6366f1",
            borderRadius: "6px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#6366f1",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          &#10003;
        </span>
        Checkbox Bounce
      </label>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Checkbox Bounce — checkbox with bouncy checkmark animation -->
<label class="nuda-checkbox">
  <input class="nuda-checkbox__input" type="checkbox" />
  <span class="nuda-checkbox__box">
    <svg class="nuda-checkbox__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  <span class="nuda-checkbox__label">Accept terms</span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Checkbox Bounce ─────────────────────────────────────────
   Customize:
     --nuda-cb-size    : box size
     --nuda-cb-clr     : accent color
     --nuda-cb-radius  : corner radius
   ──────────────────────────────────────────────────────────── */
.nuda-checkbox {
  --nuda-cb-size: 22px;
  --nuda-cb-clr: #6366f1;
  --nuda-cb-radius: 6px;

  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}

.nuda-checkbox__input {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.nuda-checkbox__box {
  width: var(--nuda-cb-size);
  height: var(--nuda-cb-size);
  border: 2px solid #d1d5db;
  border-radius: var(--nuda-cb-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}

.nuda-checkbox__icon {
  width: 14px;
  height: 14px;
  color: #fff;
  transform: scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Checked state */
.nuda-checkbox__input:checked + .nuda-checkbox__box {
  background: var(--nuda-cb-clr);
  border-color: var(--nuda-cb-clr);
}

.nuda-checkbox__input:checked + .nuda-checkbox__box .nuda-checkbox__icon {
  transform: scale(1);
}

/* Focus ring */
.nuda-checkbox__input:focus-visible + .nuda-checkbox__box {
  outline: 2px solid var(--nuda-cb-clr);
  outline-offset: 2px;
}

.nuda-checkbox__label {
  font-size: 0.95rem;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-checkbox__icon,
  .nuda-checkbox__box {
    transition: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     3. Focus Ring
     ------------------------------------------------------- */
  {
    id: "focus-ring",
    name: "Focus Ring",
    category: "Toggles & Inputs",
    cssInline: `
      @keyframes _focusRingPulse {
        0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
        70%  { box-shadow: 0 0 0 6px rgba(99,102,241,0); }
        100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
      }
    `,
    preview: (
      <input
        type="text"
        placeholder="Focus me..."
        style={{
          padding: "10px 16px",
          fontSize: "1rem",
          border: "2px solid #d1d5db",
          borderRadius: "8px",
          outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
          width: "220px",
        }}
      />
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Focus Ring — input with animated focus ring -->
<input class="nuda-focus-ring" type="text" placeholder="Focus me..." />`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Focus Ring ──────────────────────────────────────────────
   Customize:
     --nuda-fr-clr      : focus accent color
     --nuda-fr-border   : default border color
     --nuda-fr-radius   : border radius
     --nuda-fr-ring-w   : ring width at peak
   ──────────────────────────────────────────────────────────── */
.nuda-focus-ring {
  --nuda-fr-clr: #6366f1;
  --nuda-fr-border: #d1d5db;
  --nuda-fr-radius: 8px;
  --nuda-fr-ring-w: 6px;

  padding: 10px 16px;
  font-size: 1rem;
  border: 2px solid var(--nuda-fr-border);
  border-radius: var(--nuda-fr-radius);
  outline: none;
  background: transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 320px;
}

.nuda-focus-ring:focus {
  border-color: var(--nuda-fr-clr);
  animation: nuda-focus-ring-pulse 0.5s ease;
}

@keyframes nuda-focus-ring-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5); }
  70%  { box-shadow: 0 0 0 var(--nuda-fr-ring-w) rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-focus-ring {
    animation: none !important;
  }
  .nuda-focus-ring:focus {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     4. Float Label
     ------------------------------------------------------- */
  {
    id: "float-label-field",
    name: "Float Label",
    category: "Toggles & Inputs",
    preview: (
      <div style={{ position: "relative", width: "240px" }}>
        <input
          type="text"
          placeholder=" "
          style={{
            width: "100%",
            padding: "18px 16px 6px",
            fontSize: "1rem",
            border: "2px solid #d1d5db",
            borderRadius: "8px",
            outline: "none",
            background: "transparent",
          }}
        />
        <label
          style={{
            position: "absolute",
            left: "14px",
            top: "12px",
            fontSize: "1rem",
            color: "#9ca3af",
            pointerEvents: "none",
            transition: "all 0.2s ease",
          }}
        >
          Your email
        </label>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Float Label — input label that floats up on focus
     The placeholder=" " (space) trick drives the CSS state. -->
<div class="nuda-float-label">
  <input class="nuda-float-label__input" type="text" id="nuda-email" placeholder=" " />
  <label class="nuda-float-label__label" for="nuda-email">Your email</label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Float Label ─────────────────────────────────────────────
   Uses :placeholder-shown + :focus to float the label.
   Customize:
     --nuda-fl-clr        : accent color (focus)
     --nuda-fl-border     : default border color
     --nuda-fl-radius     : border radius
     --nuda-fl-label-clr  : label text color
   ──────────────────────────────────────────────────────────── */
.nuda-float-label {
  --nuda-fl-clr: #6366f1;
  --nuda-fl-border: #d1d5db;
  --nuda-fl-radius: 8px;
  --nuda-fl-label-clr: #9ca3af;

  position: relative;
  width: 100%;
  max-width: 320px;
}

.nuda-float-label__input {
  width: 100%;
  padding: 18px 16px 6px;
  font-size: 1rem;
  border: 2px solid var(--nuda-fl-border);
  border-radius: var(--nuda-fl-radius);
  outline: none;
  background: transparent;
  transition: border-color 0.2s ease;
}

.nuda-float-label__label {
  position: absolute;
  left: 14px;
  top: 14px;
  font-size: 1rem;
  color: var(--nuda-fl-label-clr);
  pointer-events: none;
  transform-origin: left top;
  transition: transform 0.2s ease, color 0.2s ease, font-size 0.2s ease;
}

/* Float up when focused or has value */
.nuda-float-label__input:focus + .nuda-float-label__label,
.nuda-float-label__input:not(:placeholder-shown) + .nuda-float-label__label {
  transform: translateY(-10px) scale(0.75);
  color: var(--nuda-fl-clr);
}

.nuda-float-label__input:focus {
  border-color: var(--nuda-fl-clr);
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-float-label__label,
  .nuda-float-label__input {
    transition: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     5. Search Expand
     ------------------------------------------------------- */
  {
    id: "search-expand-field",
    name: "Search Expand",
    category: "Toggles & Inputs",
    preview: (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #6366f1",
            background: "transparent",
            color: "#6366f1",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          &#128269;
        </button>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Search Expand — search icon that expands into input on click -->
<div class="nuda-search-expand" role="search">
  <input class="nuda-search-expand__input" type="search"
         placeholder="Search..." aria-label="Search" />
  <button class="nuda-search-expand__btn" type="button" aria-label="Toggle search">
    <!-- Magnifying glass SVG -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Search Expand ───────────────────────────────────────────
   Customize:
     --nuda-se-clr       : accent color
     --nuda-se-bg        : input background when expanded
     --nuda-se-width     : expanded input width
     --nuda-se-speed     : expand/collapse speed
   ──────────────────────────────────────────────────────────── */
.nuda-search-expand {
  --nuda-se-clr: #6366f1;
  --nuda-se-bg: transparent;
  --nuda-se-width: 240px;
  --nuda-se-speed: 0.35s;

  position: relative;
  display: inline-flex;
  align-items: center;
}

.nuda-search-expand__input {
  width: 0;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 20px;
  font-size: 0.95rem;
  background: var(--nuda-se-bg);
  outline: none;
  opacity: 0;
  transition:
    width var(--nuda-se-speed) ease,
    padding var(--nuda-se-speed) ease,
    opacity var(--nuda-se-speed) ease,
    border-color var(--nuda-se-speed) ease;
}

.nuda-search-expand.is-open .nuda-search-expand__input {
  width: var(--nuda-se-width);
  padding: 8px 40px 8px 16px;
  opacity: 1;
  border-color: var(--nuda-se-clr);
}

.nuda-search-expand__btn {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid var(--nuda-se-clr);
  border-radius: 50%;
  background: transparent;
  color: var(--nuda-se-clr);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  z-index: 1;
}

.nuda-search-expand.is-open .nuda-search-expand__btn {
  border-color: transparent;
}

.nuda-search-expand__btn:hover {
  background: var(--nuda-se-clr);
  color: #fff;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-search-expand__input {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Search Expand — vanilla JS ──────────────────────────────
   Toggles the .is-open class and manages focus.
   Respects prefers-reduced-motion (animation is CSS-only).
   ──────────────────────────────────────────────────────────── */
;(function () {
  document.querySelectorAll(".nuda-search-expand").forEach(function (wrapper) {
    var btn   = wrapper.querySelector(".nuda-search-expand__btn");
    var input = wrapper.querySelector(".nuda-search-expand__input");
    if (!btn || !input) return;

    btn.addEventListener("click", function () {
      var isOpen = wrapper.classList.toggle("is-open");
      if (isOpen) {
        input.focus();
      } else {
        input.value = "";
        input.blur();
      }
    });

    /* Close when clicking outside */
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("is-open");
      }
    });

    /* Close on Escape */
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        wrapper.classList.remove("is-open");
        btn.focus();
      }
    });
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     6. Radio Pulse
     ------------------------------------------------------- */
  {
    id: "radio-pulse",
    name: "Radio Pulse",
    category: "Toggles & Inputs",
    cssInline: `
      @keyframes _radioPulse {
        0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
        100% { box-shadow: 0 0 0 10px rgba(99,102,241,0); }
      }
    `,
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {["Option A", "Option B"].map((label, i) => (
          <label
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: `2px solid ${i === 0 ? "#6366f1" : "#d1d5db"}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i === 0 && (
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#6366f1",
                  }}
                />
              )}
            </span>
            {label}
          </label>
        ))}
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Radio Pulse — radio buttons with pulse animation on select -->
<fieldset class="nuda-radio-group">
  <legend class="nuda-radio-group__legend">Choose an option</legend>

  <label class="nuda-radio">
    <input class="nuda-radio__input" type="radio" name="nuda-demo" value="a" checked />
    <span class="nuda-radio__circle"></span>
    <span class="nuda-radio__label">Option A</span>
  </label>

  <label class="nuda-radio">
    <input class="nuda-radio__input" type="radio" name="nuda-demo" value="b" />
    <span class="nuda-radio__circle"></span>
    <span class="nuda-radio__label">Option B</span>
  </label>

  <label class="nuda-radio">
    <input class="nuda-radio__input" type="radio" name="nuda-demo" value="c" />
    <span class="nuda-radio__circle"></span>
    <span class="nuda-radio__label">Option C</span>
  </label>
</fieldset>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Radio Pulse ─────────────────────────────────────────────
   Customize:
     --nuda-rp-clr     : accent color
     --nuda-rp-size    : circle size
     --nuda-rp-dot     : inner dot size
   ──────────────────────────────────────────────────────────── */
.nuda-radio-group {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nuda-radio-group__legend {
  font-weight: 600;
  margin-bottom: 8px;
}

.nuda-radio {
  --nuda-rp-clr: #6366f1;
  --nuda-rp-size: 20px;
  --nuda-rp-dot: 10px;

  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}

.nuda-radio__input {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.nuda-radio__circle {
  position: relative;
  width: var(--nuda-rp-size);
  height: var(--nuda-rp-size);
  border: 2px solid #d1d5db;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;
}

/* Inner dot */
.nuda-radio__circle::after {
  content: "";
  width: var(--nuda-rp-dot);
  height: var(--nuda-rp-dot);
  border-radius: 50%;
  background: var(--nuda-rp-clr);
  transform: scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Checked state */
.nuda-radio__input:checked + .nuda-radio__circle {
  border-color: var(--nuda-rp-clr);
  animation: nuda-radio-pulse 0.4s ease;
}

.nuda-radio__input:checked + .nuda-radio__circle::after {
  transform: scale(1);
}

/* Focus ring */
.nuda-radio__input:focus-visible + .nuda-radio__circle {
  outline: 2px solid var(--nuda-rp-clr);
  outline-offset: 2px;
}

@keyframes nuda-radio-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
  100% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
}

.nuda-radio__label {
  font-size: 0.95rem;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-radio__circle,
  .nuda-radio__circle::after {
    transition: none;
  }
  .nuda-radio__input:checked + .nuda-radio__circle {
    animation: none;
  }
}`,
      },
    ],
  },
];
