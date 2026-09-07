import type { NudaComponent } from "./types";

const CAT = "Animated Icons";

/**
 * Animated Icons — Extra pack (self-drawing + looping icon micro-animations).
 *
 * Companion file to `animated-icons.tsx`: covers patterns that file doesn't —
 * one-shot action feedback (trash empty, cloud upload, refresh spin) and
 * always-on decorative loops (gear mesh, wifi connect, battery charge) —
 * rather than duplicating its click-to-toggle glyph morphs.
 *
 * Conventions:
 *  - id / class / keyframe stem: "ai2-" (mandated prefix for this file)
 *  - brand: dark #09090b surface, lime #e4ff54 accent
 *  - GPU-only motion: transform / opacity / stroke-dashoffset — never a
 *    layout property inside @keyframes
 *  - interactive tiles are <button> with aria-pressed/aria-label state;
 *    decorative loops are <div role="img" aria-label="…"> with an
 *    aria-hidden svg — no JS needed to animate them
 *  - every cssInline ends with a prefers-reduced-motion block that stops or
 *    heavily attenuates motion and settles into a static, legible end-state
 */
export const animatedIconsExtra: NudaComponent[] = [
  /* ─────────────── 1. Trash Lid Lift ─────────────── */
  {
    id: "ai2-trash-lift",
    name: "Trash Lid Lift",
    category: CAT,
    preview: (
      <button
        className="nuda-ai2-trash-lift"
        type="button"
        aria-label="Delete item"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          if (b.getAttribute("aria-pressed") === "true") return;
          b.setAttribute("aria-pressed", "true");
          b.setAttribute("aria-label", "Deleted");
          setTimeout(() => {
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-label", "Delete item");
          }, 1400);
        }}
      >
        <svg className="nuda-ai2-trash-lift__svg" viewBox="0 0 24 24" aria-hidden="true">
          <g className="nuda-ai2-trash-lift__lid">
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </g>
          <path className="nuda-ai2-trash-lift__body" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <line className="nuda-ai2-trash-lift__stripe" x1="10" y1="11" x2="10" y2="17" />
          <line className="nuda-ai2-trash-lift__stripe" x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-ai2-trash-lift{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-ai2-trash-lift:hover,.nuda-ai2-trash-lift:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-ai2-trash-lift:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-ai2-trash-lift[aria-pressed="true"]{color:#e4ff54}
      .nuda-ai2-trash-lift__svg{width:28px;height:28px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-ai2-trash-lift__lid{transform-origin:4px 6px;transition:transform .35s cubic-bezier(.4,.2,.2,1)}
      .nuda-ai2-trash-lift__body{transition:transform .3s cubic-bezier(.4,.2,.2,1);transform-origin:12px 21px}
      .nuda-ai2-trash-lift__stripe{transition:opacity .25s,transform .3s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-ai2-trash-lift[aria-pressed="true"] .nuda-ai2-trash-lift__lid{transform:translateY(-2px) rotate(-28deg)}
      .nuda-ai2-trash-lift[aria-pressed="true"] .nuda-ai2-trash-lift__body{transform:scaleY(.92)}
      .nuda-ai2-trash-lift[aria-pressed="true"] .nuda-ai2-trash-lift__stripe{opacity:0;transform:translateY(3px)}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-trash-lift__lid,.nuda-ai2-trash-lift__body,.nuda-ai2-trash-lift__stripe{transition:opacity .25s}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-ai2-trash-lift" type="button" aria-label="Delete item" aria-pressed="false">
  <svg class="nuda-ai2-trash-lift__svg" viewBox="0 0 24 24" aria-hidden="true">
    <g class="nuda-ai2-trash-lift__lid">
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </g>
    <path class="nuda-ai2-trash-lift__body" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <line class="nuda-ai2-trash-lift__stripe" x1="10" y1="11" x2="10" y2="17" />
    <line class="nuda-ai2-trash-lift__stripe" x1="14" y1="11" x2="14" y2="17" />
  </svg>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Trash Lid Lift — vanilla JS
   Marks deleted, shows the emptied can, reverts after 1.4s. */

(function () {
  document.querySelectorAll(".nuda-ai2-trash-lift").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-pressed") === "true") return;
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Deleted");
      setTimeout(function () {
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", "Delete item");
      }, 1400);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Cloud Upload Launch ─────────────── */
  {
    id: "ai2-cloud-launch",
    name: "Cloud Upload Launch",
    category: CAT,
    preview: (
      <button
        className="nuda-ai2-cloud-launch"
        type="button"
        aria-label="Upload"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          if (b.getAttribute("aria-pressed") === "true") return;
          b.setAttribute("aria-pressed", "true");
          b.setAttribute("aria-label", "Uploading");
          setTimeout(() => {
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-label", "Upload");
          }, 700);
        }}
      >
        <svg className="nuda-ai2-cloud-launch__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path
            className="nuda-ai2-cloud-launch__cloud"
            d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
          />
          <g className="nuda-ai2-cloud-launch__arrow">
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
          </g>
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-ai2-cloud-launch{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-ai2-cloud-launch:hover,.nuda-ai2-cloud-launch:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-ai2-cloud-launch:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-ai2-cloud-launch[aria-pressed="true"]{color:#e4ff54}
      .nuda-ai2-cloud-launch__svg{width:28px;height:28px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-ai2-cloud-launch__cloud{transform-origin:12px 13px}
      .nuda-ai2-cloud-launch__arrow{transform-origin:12px 16px}
      .nuda-ai2-cloud-launch[aria-pressed="true"] .nuda-ai2-cloud-launch__arrow{animation:_nuda-ai2cloud-launch .7s cubic-bezier(.4,.2,.2,1)}
      .nuda-ai2-cloud-launch[aria-pressed="true"] .nuda-ai2-cloud-launch__cloud{animation:nuda-ai2-cloud-launch-puff .7s ease-out}
      @keyframes _nuda-ai2cloud-launch{0%{opacity:1;transform:translateY(0)}12%{opacity:1;transform:translateY(1px)}55%{opacity:0;transform:translateY(-16px)}56%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
      @keyframes nuda-ai2-cloud-launch-puff{0%{transform:scale(1)}20%{transform:scale(1.05)}100%{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-cloud-launch[aria-pressed="true"] .nuda-ai2-cloud-launch__arrow,.nuda-ai2-cloud-launch[aria-pressed="true"] .nuda-ai2-cloud-launch__cloud{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-ai2-cloud-launch" type="button" aria-label="Upload" aria-pressed="false">
  <svg class="nuda-ai2-cloud-launch__svg" viewBox="0 0 24 24" aria-hidden="true">
    <path class="nuda-ai2-cloud-launch__cloud"
      d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <g class="nuda-ai2-cloud-launch__arrow">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
    </g>
  </svg>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cloud Upload Launch — vanilla JS
   Marks uploading, plays the launch animation once, reverts after 0.7s. */

(function () {
  document.querySelectorAll(".nuda-ai2-cloud-launch").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-pressed") === "true") return;
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Uploading");
      setTimeout(function () {
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", "Upload");
      }, 700);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Lock Shackle Lift ─────────────── */
  {
    id: "ai2-lock-shackle",
    name: "Lock Shackle Lift",
    category: CAT,
    preview: (
      <button
        className="nuda-ai2-lock-shackle"
        type="button"
        aria-label="Unlock"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Lock" : "Unlock");
        }}
      >
        <svg className="nuda-ai2-lock-shackle__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path className="nuda-ai2-lock-shackle__shackle" d="M7 11V7a5 5 0 0 1 10 0v4" />
          <rect className="nuda-ai2-lock-shackle__body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <line className="nuda-ai2-lock-shackle__key" x1="12" y1="15.5" x2="12" y2="18" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-ai2-lock-shackle{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-ai2-lock-shackle:hover,.nuda-ai2-lock-shackle:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-ai2-lock-shackle:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-ai2-lock-shackle[aria-pressed="true"]{color:#e4ff54}
      .nuda-ai2-lock-shackle__svg{width:28px;height:28px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-ai2-lock-shackle__shackle{transform-origin:7px 11px;transition:transform .35s cubic-bezier(.4,.2,.2,1.2)}
      .nuda-ai2-lock-shackle__key{transition:opacity .2s,transform .25s;transform-origin:12px 15.5px}
      .nuda-ai2-lock-shackle[aria-pressed="true"] .nuda-ai2-lock-shackle__shackle{transform:translate(2px,-3px) rotate(25deg)}
      .nuda-ai2-lock-shackle[aria-pressed="true"] .nuda-ai2-lock-shackle__key{opacity:0;transform:scaleY(.4)}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-lock-shackle__shackle,.nuda-ai2-lock-shackle__key{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-ai2-lock-shackle" type="button" aria-label="Unlock" aria-pressed="false">
  <svg class="nuda-ai2-lock-shackle__svg" viewBox="0 0 24 24" aria-hidden="true">
    <path class="nuda-ai2-lock-shackle__shackle" d="M7 11V7a5 5 0 0 1 10 0v4" />
    <rect class="nuda-ai2-lock-shackle__body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <line class="nuda-ai2-lock-shackle__key" x1="12" y1="15.5" x2="12" y2="18" />
  </svg>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Lock Shackle Lift — vanilla JS
   Flips aria-pressed/label; CSS lifts the shackle open. */

(function () {
  document.querySelectorAll(".nuda-ai2-lock-shackle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var unlocked = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(unlocked));
      btn.setAttribute("aria-label", unlocked ? "Lock" : "Unlock");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. Eye Blink Toggle ─────────────── */
  {
    id: "ai2-eye-blink",
    name: "Eye Blink Toggle",
    category: CAT,
    preview: (
      <button
        className="nuda-ai2-eye-blink"
        type="button"
        aria-label="Hide password"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const next = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", String(next));
          b.setAttribute("aria-label", next ? "Show password" : "Hide password");
        }}
      >
        <svg className="nuda-ai2-eye-blink__svg" viewBox="0 0 24 24" aria-hidden="true">
          <g className="nuda-ai2-eye-blink__eye">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </g>
          <line className="nuda-ai2-eye-blink__lid" x1="2" y1="12" x2="22" y2="12" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-ai2-eye-blink{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-ai2-eye-blink:hover,.nuda-ai2-eye-blink:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-ai2-eye-blink:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-ai2-eye-blink[aria-pressed="true"]{color:#e4ff54}
      .nuda-ai2-eye-blink__svg{width:28px;height:28px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-ai2-eye-blink__eye{transform-origin:12px 12px;transition:transform .3s cubic-bezier(.4,.2,.2,1)}
      .nuda-ai2-eye-blink__lid{opacity:0;transition:opacity .25s}
      .nuda-ai2-eye-blink[aria-pressed="true"] .nuda-ai2-eye-blink__eye{transform:scaleY(.08)}
      .nuda-ai2-eye-blink[aria-pressed="true"] .nuda-ai2-eye-blink__lid{opacity:1}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-eye-blink__eye{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-ai2-eye-blink" type="button" aria-label="Hide password" aria-pressed="false">
  <svg class="nuda-ai2-eye-blink__svg" viewBox="0 0 24 24" aria-hidden="true">
    <g class="nuda-ai2-eye-blink__eye">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </g>
    <line class="nuda-ai2-eye-blink__lid" x1="2" y1="12" x2="22" y2="12" />
  </svg>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Eye Blink Toggle — vanilla JS
   Flips aria-pressed/label; CSS blinks the eye shut. */

(function () {
  document.querySelectorAll(".nuda-ai2-eye-blink").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var hidden = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(hidden));
      btn.setAttribute("aria-label", hidden ? "Show password" : "Hide password");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 5. Gear Mesh Loop ─────────────── */
  {
    id: "ai2-gear-mesh",
    name: "Gear Mesh Loop",
    category: CAT,
    preview: (
      <div className="nuda-ai2-gear-mesh" role="img" aria-label="Gears turning">
        <svg className="nuda-ai2-gear-mesh__svg" viewBox="0 0 34 24" aria-hidden="true">
          <defs>
            <path
              id="ai2-gear-mesh-shape"
              fillRule="evenodd"
              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            />
          </defs>
          <g transform="translate(0,0) scale(0.92)">
            <g className="nuda-ai2-gear-mesh__gear-a">
              <use href="#ai2-gear-mesh-shape" />
            </g>
          </g>
          <g transform="translate(16,7) scale(0.5)">
            <g className="nuda-ai2-gear-mesh__gear-b">
              <use href="#ai2-gear-mesh-shape" />
            </g>
          </g>
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-ai2-gear-mesh{display:inline-flex;align-items:center;justify-content:center;width:72px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#e4ff54}
      .nuda-ai2-gear-mesh__svg{width:40px;height:32px;fill:currentColor;stroke:none}
      .nuda-ai2-gear-mesh__gear-a{transform-origin:12px 12px;animation:nuda-ai2-gear-mesh-cw 6s linear infinite}
      .nuda-ai2-gear-mesh__gear-b{transform-origin:12px 12px;animation:nuda-ai2-gear-mesh-ccw 3.6s linear infinite}
      @keyframes nuda-ai2-gear-mesh-cw{from{transform:rotate(0)}to{transform:rotate(360deg)}}
      @keyframes nuda-ai2-gear-mesh-ccw{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-gear-mesh__gear-a,.nuda-ai2-gear-mesh__gear-b{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ai2-gear-mesh" role="img" aria-label="Gears turning">
  <svg class="nuda-ai2-gear-mesh__svg" viewBox="0 0 34 24" aria-hidden="true">
    <defs>
      <path id="ai2-gear-mesh-shape" fill-rule="evenodd"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </defs>
    <g transform="translate(0,0) scale(0.92)">
      <g class="nuda-ai2-gear-mesh__gear-a">
        <use href="#ai2-gear-mesh-shape" />
      </g>
    </g>
    <g transform="translate(16,7) scale(0.5)">
      <g class="nuda-ai2-gear-mesh__gear-b">
        <use href="#ai2-gear-mesh-shape" />
      </g>
    </g>
  </svg>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Wifi Connect Loop ─────────────── */
  {
    id: "ai2-wifi-connect",
    name: "Wifi Connect Loop",
    category: CAT,
    preview: (
      <div className="nuda-ai2-wifi-connect" role="img" aria-label="Connecting to network">
        <svg className="nuda-ai2-wifi-connect__svg" viewBox="0 0 24 24" aria-hidden="true">
          <path className="nuda-ai2-wifi-connect__arc nuda-ai2-wifi-connect__arc-3" d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path className="nuda-ai2-wifi-connect__arc nuda-ai2-wifi-connect__arc-2" d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path className="nuda-ai2-wifi-connect__arc nuda-ai2-wifi-connect__arc-1" d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line className="nuda-ai2-wifi-connect__dot" x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-ai2-wifi-connect{display:inline-flex;align-items:center;justify-content:center;width:56px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#e4ff54}
      .nuda-ai2-wifi-connect__svg{width:30px;height:30px;stroke:currentColor;stroke-width:2;stroke-linecap:round;fill:none}
      .nuda-ai2-wifi-connect__dot{opacity:1}
      .nuda-ai2-wifi-connect__arc-1{animation:_nuda-ai2wifi-connect 1.8s ease-in-out infinite}
      .nuda-ai2-wifi-connect__arc-2{animation:_nuda-ai2wifi-connect 1.8s ease-in-out infinite .25s}
      .nuda-ai2-wifi-connect__arc-3{animation:_nuda-ai2wifi-connect 1.8s ease-in-out infinite .5s}
      @keyframes _nuda-ai2wifi-connect{0%,100%{opacity:.18}50%{opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-wifi-connect__arc{animation:none !important;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ai2-wifi-connect" role="img" aria-label="Connecting to network">
  <svg class="nuda-ai2-wifi-connect__svg" viewBox="0 0 24 24" aria-hidden="true">
    <path class="nuda-ai2-wifi-connect__arc nuda-ai2-wifi-connect__arc-3" d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path class="nuda-ai2-wifi-connect__arc nuda-ai2-wifi-connect__arc-2" d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path class="nuda-ai2-wifi-connect__arc nuda-ai2-wifi-connect__arc-1" d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line class="nuda-ai2-wifi-connect__dot" x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Battery Charging Loop ─────────────── */
  {
    id: "ai2-battery-charge",
    name: "Battery Charging Loop",
    category: CAT,
    preview: (
      <div className="nuda-ai2-battery-charge" role="img" aria-label="Battery charging">
        <svg className="nuda-ai2-battery-charge__svg" viewBox="0 0 24 24" aria-hidden="true">
          <rect className="nuda-ai2-battery-charge__shell" x="1" y="6" width="18" height="12" rx="2" ry="2" />
          <line className="nuda-ai2-battery-charge__nub" x1="22" y1="10" x2="22" y2="14" />
          <rect className="nuda-ai2-battery-charge__fill" x="3" y="8" width="14" height="8" rx="1" />
          <path className="nuda-ai2-battery-charge__bolt" d="M11 10l-2.5 4h2l-1 3.5L13 13h-2l1-3z" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-ai2-battery-charge{display:inline-flex;align-items:center;justify-content:center;width:56px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa}
      .nuda-ai2-battery-charge__svg{width:32px;height:32px;fill:none}
      .nuda-ai2-battery-charge__shell,.nuda-ai2-battery-charge__nub{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      .nuda-ai2-battery-charge__fill{fill:#e4ff54;stroke:none;transform-origin:3px 12px;animation:_nuda-ai2battery-charge 2.6s ease-in-out infinite}
      .nuda-ai2-battery-charge__bolt{fill:#e4ff54;stroke:none;animation:nuda-ai2-battery-charge-bolt 2.6s ease-in-out infinite}
      @keyframes _nuda-ai2battery-charge{0%{transform:scaleX(.06);opacity:.55}70%{transform:scaleX(1);opacity:1}85%{transform:scaleX(1);opacity:1}100%{transform:scaleX(.06);opacity:.55}}
      @keyframes nuda-ai2-battery-charge-bolt{0%,60%{opacity:0}75%,95%{opacity:1}100%{opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-battery-charge__fill,.nuda-ai2-battery-charge__bolt{animation:none !important}.nuda-ai2-battery-charge__fill{transform:scaleX(1);opacity:1}.nuda-ai2-battery-charge__bolt{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ai2-battery-charge" role="img" aria-label="Battery charging">
  <svg class="nuda-ai2-battery-charge__svg" viewBox="0 0 24 24" aria-hidden="true">
    <rect class="nuda-ai2-battery-charge__shell" x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line class="nuda-ai2-battery-charge__nub" x1="22" y1="10" x2="22" y2="14" />
    <rect class="nuda-ai2-battery-charge__fill" x="3" y="8" width="14" height="8" rx="1" />
    <path class="nuda-ai2-battery-charge__bolt" d="M11 10l-2.5 4h2l-1 3.5L13 13h-2l1-3z" />
  </svg>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Refresh Spin ─────────────── */
  {
    id: "ai2-refresh-spin",
    name: "Refresh Spin",
    category: CAT,
    preview: (
      <button
        className="nuda-ai2-refresh-spin"
        type="button"
        aria-label="Refresh"
        onClick={(e) => {
          const b = e.currentTarget;
          if (b.classList.contains("nuda-ai2-refresh-spin--active")) return;
          b.classList.add("nuda-ai2-refresh-spin--active");
          const status = b.querySelector(".nuda-ai2-refresh-spin__status");
          if (status) status.textContent = "Refreshed";
          setTimeout(() => {
            b.classList.remove("nuda-ai2-refresh-spin--active");
            if (status) status.textContent = "";
          }, 650);
        }}
      >
        <svg className="nuda-ai2-refresh-spin__svg" viewBox="0 0 24 24" aria-hidden="true">
          <g className="nuda-ai2-refresh-spin__glyph">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </g>
        </svg>
        <span className="nuda-ai2-refresh-spin__status" aria-live="polite"></span>
      </button>
    ),
    cssInline: `
      .nuda-ai2-refresh-spin{position:relative;display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;cursor:pointer;transition:border-color .25s,color .25s}
      .nuda-ai2-refresh-spin:hover,.nuda-ai2-refresh-spin:focus-visible{border-color:rgba(228,255,84,.4);outline:none}
      .nuda-ai2-refresh-spin:focus-visible{box-shadow:0 0 0 2px rgba(228,255,84,.5)}
      .nuda-ai2-refresh-spin--active{color:#e4ff54}
      .nuda-ai2-refresh-spin__svg{width:28px;height:28px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}
      .nuda-ai2-refresh-spin__glyph{transform-origin:12px 12px}
      .nuda-ai2-refresh-spin--active .nuda-ai2-refresh-spin__glyph{animation:_nuda-ai2refresh-spin .6s cubic-bezier(.4,.2,.2,1)}
      .nuda-ai2-refresh-spin__status{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      @keyframes _nuda-ai2refresh-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-ai2-refresh-spin--active .nuda-ai2-refresh-spin__glyph{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-ai2-refresh-spin" type="button" aria-label="Refresh">
  <svg class="nuda-ai2-refresh-spin__svg" viewBox="0 0 24 24" aria-hidden="true">
    <g class="nuda-ai2-refresh-spin__glyph">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </g>
  </svg>
  <span class="nuda-ai2-refresh-spin__status" aria-live="polite"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Refresh Spin — vanilla JS
   One-shot rotation on click; announces "Refreshed" via aria-live. */

(function () {
  document.querySelectorAll(".nuda-ai2-refresh-spin").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("nuda-ai2-refresh-spin--active")) return;
      btn.classList.add("nuda-ai2-refresh-spin--active");
      var status = btn.querySelector(".nuda-ai2-refresh-spin__status");
      if (status) status.textContent = "Refreshed";
      setTimeout(function () {
        btn.classList.remove("nuda-ai2-refresh-spin--active");
        if (status) status.textContent = "";
      }, 650);
    });
  });
})();`,
      },
    ],
  },
];
