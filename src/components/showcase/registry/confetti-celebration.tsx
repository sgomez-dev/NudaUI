import type { NudaComponent } from "./types";

export const confettiCelebration: NudaComponent[] = [
  /* ─────────────── 1. Confetti Burst ─────────────── */
  {
    id: "confetti-pop-burst",
    name: "Confetti Burst",
    category: "Confetti & Celebration",
    preview: (
      <button
        className="nuda-confetti-burst"
        aria-label="Celebrate"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.remove("nuda-confetti-burst--pop");
          void btn.offsetWidth;
          btn.classList.add("nuda-confetti-burst--pop");
          setTimeout(() => btn.classList.remove("nuda-confetti-burst--pop"), 900);
        }}
      >
        <span className="nuda-confetti-burst__label">Celebrate</span>
        <span className="nuda-confetti-burst__pieces" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="nuda-confetti-burst__piece"
              style={{
                ["--a" as string]: `${(i / 12) * 360}deg`,
                ["--c" as string]:
                  i % 4 === 0 ? "#e4ff54" : i % 4 === 1 ? "#ff5db1" : i % 4 === 2 ? "#5dd0ff" : "#fafafa",
              }}
            />
          ))}
        </span>
      </button>
    ),
    cssInline: `
      .nuda-confetti-burst{position:relative;background:#e4ff54;color:#09090b;border:none;border-radius:10px;padding:12px 22px;min-height:44px;font:600 14px/1 system-ui,sans-serif;cursor:pointer;outline:none}
      .nuda-confetti-burst:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.5)}
      .nuda-confetti-burst__pieces{position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center}
      .nuda-confetti-burst__piece{position:absolute;width:7px;height:7px;background:var(--c);border-radius:1px;opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}
      .nuda-confetti-burst__piece:nth-child(2n){width:5px;height:9px}
      .nuda-confetti-burst__piece:nth-child(3n){border-radius:50%}
      .nuda-confetti-burst--pop .nuda-confetti-burst__piece{animation:nuda-confetti-burst-fly .8s cubic-bezier(.2,.6,.4,1) forwards}
      @keyframes nuda-confetti-burst-fly{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}15%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-46px) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-burst--pop .nuda-confetti-burst__piece{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-confetti-burst" aria-label="Celebrate">
  <span class="nuda-confetti-burst__label">Celebrate</span>
  <span class="nuda-confetti-burst__pieces" aria-hidden="true">
    <span class="nuda-confetti-burst__piece" style="--a:0deg;   --c:#e4ff54"></span>
    <span class="nuda-confetti-burst__piece" style="--a:30deg;  --c:#ff5db1"></span>
    <span class="nuda-confetti-burst__piece" style="--a:60deg;  --c:#5dd0ff"></span>
    <span class="nuda-confetti-burst__piece" style="--a:90deg;  --c:#fafafa"></span>
    <span class="nuda-confetti-burst__piece" style="--a:120deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-burst__piece" style="--a:150deg; --c:#ff5db1"></span>
    <span class="nuda-confetti-burst__piece" style="--a:180deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-burst__piece" style="--a:210deg; --c:#fafafa"></span>
    <span class="nuda-confetti-burst__piece" style="--a:240deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-burst__piece" style="--a:270deg; --c:#ff5db1"></span>
    <span class="nuda-confetti-burst__piece" style="--a:300deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-burst__piece" style="--a:330deg; --c:#fafafa"></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Confetti Burst
   Radial confetti pop re-triggered on every click.
   Customize: --confetti-burst-bg, piece colors via inline --c. */

.nuda-confetti-burst {
  --confetti-burst-bg: #e4ff54;
  position: relative;
  background: var(--confetti-burst-bg);
  color: #09090b;
  border: none;
  border-radius: 10px;
  padding: 12px 22px;
  min-height: 44px;
  font: 600 14px/1 system-ui, sans-serif;
  cursor: pointer;
  outline: none;
}

.nuda-confetti-burst:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.5);
}

.nuda-confetti-burst__pieces {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-confetti-burst__piece {
  position: absolute;
  width: 7px;
  height: 7px;
  background: var(--c, #e4ff54);
  border-radius: 1px;
  opacity: 0;
  transform: rotate(var(--a, 0deg)) translateY(0) scale(0.4);
  will-change: transform, opacity;
}

.nuda-confetti-burst__piece:nth-child(2n) { width: 5px; height: 9px; }
.nuda-confetti-burst__piece:nth-child(3n) { border-radius: 50%; }

.nuda-confetti-burst--pop .nuda-confetti-burst__piece {
  animation: nuda-confetti-burst-fly 0.8s cubic-bezier(0.2, 0.6, 0.4, 1) forwards;
}

@keyframes nuda-confetti-burst-fly {
  0%   { opacity: 0; transform: rotate(var(--a)) translateY(0) scale(0.4); }
  15%  { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--a)) translateY(-46px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-burst--pop .nuda-confetti-burst__piece { animation: none; opacity: 0; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Confetti Burst — vanilla JS
   Re-triggers the pop animation on each click. */

(function () {
  document.querySelectorAll(".nuda-confetti-burst").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.remove("nuda-confetti-burst--pop");
      void btn.offsetWidth; // reflow so the animation restarts
      btn.classList.add("nuda-confetti-burst--pop");
      setTimeout(function () {
        btn.classList.remove("nuda-confetti-burst--pop");
      }, 900);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Success Check ─────────────── */
  {
    id: "confetti-checkmark",
    name: "Success Check",
    category: "Confetti & Celebration",
    preview: (
      <button
        className="nuda-confetti-check"
        aria-label="Confirm success"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.remove("nuda-confetti-check--go");
          void btn.offsetWidth;
          btn.classList.add("nuda-confetti-check--go");
          setTimeout(() => btn.classList.remove("nuda-confetti-check--go"), 1200);
        }}
      >
        <svg className="nuda-confetti-check__ring" viewBox="0 0 52 52" aria-hidden="true">
          <circle className="nuda-confetti-check__circle" cx="26" cy="26" r="24" fill="none" />
          <path className="nuda-confetti-check__path" fill="none" d="M14 27l8 8 16-18" />
        </svg>
        <span className="nuda-confetti-check__pieces" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="nuda-confetti-check__piece"
              style={{
                ["--a" as string]: `${(i / 10) * 360}deg`,
                ["--c" as string]: i % 3 === 0 ? "#e4ff54" : i % 3 === 1 ? "#ff5db1" : "#5dd0ff",
              }}
            />
          ))}
        </span>
      </button>
    ),
    cssInline: `
      .nuda-confetti-check{position:relative;width:60px;height:60px;background:none;border:none;padding:4px;cursor:pointer;outline:none;color:#22c55e}
      .nuda-confetti-check:focus-visible{box-shadow:0 0 0 3px rgba(34,197,94,.4);border-radius:50%}
      .nuda-confetti-check__ring{width:52px;height:52px}
      .nuda-confetti-check__circle{stroke:#22c55e;stroke-width:3;stroke-dasharray:151;stroke-dashoffset:0}
      .nuda-confetti-check__path{stroke:#22c55e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:48;stroke-dashoffset:0}
      .nuda-confetti-check--go .nuda-confetti-check__circle{animation:nuda-confetti-check-ring .5s ease-out forwards}
      .nuda-confetti-check--go .nuda-confetti-check__path{animation:nuda-confetti-check-draw .4s .35s ease-out backwards}
      .nuda-confetti-check__pieces{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
      .nuda-confetti-check__piece{position:absolute;width:6px;height:6px;border-radius:1px;background:var(--c);opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}
      .nuda-confetti-check--go .nuda-confetti-check__piece{animation:nuda-confetti-check-fly .7s .4s cubic-bezier(.2,.6,.4,1) forwards}
      @keyframes nuda-confetti-check-ring{0%{stroke-dashoffset:151}100%{stroke-dashoffset:0}}
      @keyframes nuda-confetti-check-draw{0%{stroke-dashoffset:48}100%{stroke-dashoffset:0}}
      @keyframes nuda-confetti-check-fly{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}20%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-40px) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-check--go .nuda-confetti-check__circle,.nuda-confetti-check--go .nuda-confetti-check__path,.nuda-confetti-check--go .nuda-confetti-check__piece{animation:none}.nuda-confetti-check__piece{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-confetti-check" aria-label="Confirm success">
  <svg class="nuda-confetti-check__ring" viewBox="0 0 52 52" aria-hidden="true">
    <circle class="nuda-confetti-check__circle" cx="26" cy="26" r="24" fill="none"/>
    <path class="nuda-confetti-check__path" fill="none" d="M14 27l8 8 16-18"/>
  </svg>
  <span class="nuda-confetti-check__pieces" aria-hidden="true">
    <span class="nuda-confetti-check__piece" style="--a:0deg;   --c:#e4ff54"></span>
    <span class="nuda-confetti-check__piece" style="--a:36deg;  --c:#ff5db1"></span>
    <span class="nuda-confetti-check__piece" style="--a:72deg;  --c:#5dd0ff"></span>
    <span class="nuda-confetti-check__piece" style="--a:108deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-check__piece" style="--a:144deg; --c:#ff5db1"></span>
    <span class="nuda-confetti-check__piece" style="--a:180deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-check__piece" style="--a:216deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-check__piece" style="--a:252deg; --c:#ff5db1"></span>
    <span class="nuda-confetti-check__piece" style="--a:288deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-check__piece" style="--a:324deg; --c:#e4ff54"></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Success Check
   Checkmark draws inside a ring, then a confetti burst fires.
   Customize: --confetti-check-color. */

.nuda-confetti-check {
  --confetti-check-color: #22c55e;
  position: relative;
  width: 60px;
  height: 60px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  outline: none;
  color: var(--confetti-check-color);
}

.nuda-confetti-check:focus-visible {
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.4);
  border-radius: 50%;
}

.nuda-confetti-check__ring { width: 52px; height: 52px; }

.nuda-confetti-check__circle {
  stroke: var(--confetti-check-color);
  stroke-width: 3;
  stroke-dasharray: 151;
  stroke-dashoffset: 0;
}

.nuda-confetti-check__path {
  stroke: var(--confetti-check-color);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 48;
  stroke-dashoffset: 0;
}

.nuda-confetti-check--go .nuda-confetti-check__circle {
  animation: nuda-confetti-check-ring 0.5s ease-out forwards;
}

.nuda-confetti-check--go .nuda-confetti-check__path {
  animation: nuda-confetti-check-draw 0.4s 0.35s ease-out backwards;
}

.nuda-confetti-check__pieces {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.nuda-confetti-check__piece {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: var(--c, #e4ff54);
  opacity: 0;
  transform: rotate(var(--a, 0deg)) translateY(0) scale(0.4);
  will-change: transform, opacity;
}

.nuda-confetti-check--go .nuda-confetti-check__piece {
  animation: nuda-confetti-check-fly 0.7s 0.4s cubic-bezier(0.2, 0.6, 0.4, 1) forwards;
}

@keyframes nuda-confetti-check-ring {
  0%   { stroke-dashoffset: 151; }
  100% { stroke-dashoffset: 0; }
}

@keyframes nuda-confetti-check-draw {
  0%   { stroke-dashoffset: 48; }
  100% { stroke-dashoffset: 0; }
}

@keyframes nuda-confetti-check-fly {
  0%   { opacity: 0; transform: rotate(var(--a)) translateY(0) scale(0.4); }
  20%  { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--a)) translateY(-40px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-check--go .nuda-confetti-check__circle,
  .nuda-confetti-check--go .nuda-confetti-check__path,
  .nuda-confetti-check--go .nuda-confetti-check__piece { animation: none; }
  .nuda-confetti-check__piece { opacity: 0; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Success Check — vanilla JS
   Re-runs the checkmark draw + confetti burst on each click. */

(function () {
  document.querySelectorAll(".nuda-confetti-check").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.remove("nuda-confetti-check--go");
      void btn.offsetWidth;
      btn.classList.add("nuda-confetti-check--go");
      setTimeout(function () {
        btn.classList.remove("nuda-confetti-check--go");
      }, 1200);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Fireworks ─────────────── */
  {
    id: "confetti-fireworks",
    name: "Fireworks",
    category: "Confetti & Celebration",
    preview: (
      <button
        className="nuda-confetti-fw"
        aria-label="Launch fireworks"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.remove("nuda-confetti-fw--go");
          void btn.offsetWidth;
          btn.classList.add("nuda-confetti-fw--go");
          setTimeout(() => btn.classList.remove("nuda-confetti-fw--go"), 1800);
        }}
      >
        <span className="nuda-confetti-fw__label">Fireworks</span>
        <span className="nuda-confetti-fw__sky" aria-hidden="true">
          {[
            { x: 24, y: 30, d: "0s", c: "#e4ff54" },
            { x: 70, y: 22, d: ".4s", c: "#ff5db1" },
            { x: 50, y: 60, d: ".8s", c: "#5dd0ff" },
          ].map((b, bi) => (
            <span
              key={bi}
              className="nuda-confetti-fw__burst"
              style={{ left: `${b.x}%`, top: `${b.y}%`, ["--d" as string]: b.d, ["--c" as string]: b.c }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="nuda-confetti-fw__spark"
                  style={{ ["--a" as string]: `${(i / 8) * 360}deg` }}
                />
              ))}
            </span>
          ))}
        </span>
      </button>
    ),
    cssInline: `
      .nuda-confetti-fw{position:relative;width:200px;height:120px;background:#09090b;border:1px solid rgba(255,255,255,.12);border-radius:12px;cursor:pointer;outline:none;overflow:hidden}
      .nuda-confetti-fw:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.4)}
      .nuda-confetti-fw__label{position:absolute;bottom:8px;left:0;right:0;text-align:center;font:600 12px/1 system-ui,sans-serif;color:#e4ff54;pointer-events:none}
      .nuda-confetti-fw__sky{position:absolute;inset:0;pointer-events:none}
      .nuda-confetti-fw__burst{position:absolute;width:0;height:0}
      .nuda-confetti-fw__spark{position:absolute;width:3px;height:3px;border-radius:50%;background:var(--c);box-shadow:0 0 6px var(--c);opacity:0;transform:rotate(var(--a)) translateY(0)}
      .nuda-confetti-fw--go .nuda-confetti-fw__spark{animation:nuda-confetti-fw-shoot 1s var(--d) ease-out forwards}
      @keyframes nuda-confetti-fw-shoot{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scale(.3)}20%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-32px) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-fw--go .nuda-confetti-fw__spark{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-confetti-fw" aria-label="Launch fireworks">
  <span class="nuda-confetti-fw__label">Fireworks</span>
  <span class="nuda-confetti-fw__sky" aria-hidden="true">
    <!-- Each burst sits at a position and contains 8 sparks. -->
    <span class="nuda-confetti-fw__burst" style="left:24%; top:30%; --d:0s;  --c:#e4ff54">
      <span class="nuda-confetti-fw__spark" style="--a:0deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:45deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:90deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:135deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:180deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:225deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:270deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:315deg"></span>
    </span>
    <span class="nuda-confetti-fw__burst" style="left:70%; top:22%; --d:.4s; --c:#ff5db1">
      <span class="nuda-confetti-fw__spark" style="--a:0deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:45deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:90deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:135deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:180deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:225deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:270deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:315deg"></span>
    </span>
    <span class="nuda-confetti-fw__burst" style="left:50%; top:60%; --d:.8s; --c:#5dd0ff">
      <span class="nuda-confetti-fw__spark" style="--a:0deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:45deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:90deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:135deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:180deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:225deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:270deg"></span>
      <span class="nuda-confetti-fw__spark" style="--a:315deg"></span>
    </span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fireworks
   Three staggered radial bursts inside a dark sky panel.
   Customize: per-burst position & --c, stagger via --d. */

.nuda-confetti-fw {
  position: relative;
  width: 200px;
  height: 120px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
}

.nuda-confetti-fw:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.4);
}

.nuda-confetti-fw__label {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  font: 600 12px/1 system-ui, sans-serif;
  color: #e4ff54;
  pointer-events: none;
}

.nuda-confetti-fw__sky { position: absolute; inset: 0; pointer-events: none; }

.nuda-confetti-fw__burst { position: absolute; width: 0; height: 0; }

.nuda-confetti-fw__spark {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--c, #e4ff54);
  box-shadow: 0 0 6px var(--c, #e4ff54);
  opacity: 0;
  transform: rotate(var(--a, 0deg)) translateY(0);
  will-change: transform, opacity;
}

.nuda-confetti-fw--go .nuda-confetti-fw__spark {
  animation: nuda-confetti-fw-shoot 1s var(--d, 0s) ease-out forwards;
}

@keyframes nuda-confetti-fw-shoot {
  0%   { opacity: 0; transform: rotate(var(--a)) translateY(0) scale(0.3); }
  20%  { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--a)) translateY(-32px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-fw--go .nuda-confetti-fw__spark { animation: none; opacity: 0; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Fireworks — vanilla JS
   Re-triggers the staggered bursts on each click. */

(function () {
  document.querySelectorAll(".nuda-confetti-fw").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.remove("nuda-confetti-fw--go");
      void btn.offsetWidth;
      btn.classList.add("nuda-confetti-fw--go");
      setTimeout(function () {
        btn.classList.remove("nuda-confetti-fw--go");
      }, 1800);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. Sparkle Trail ─────────────── */
  {
    id: "confetti-sparkle-trail",
    name: "Sparkle Trail",
    category: "Confetti & Celebration",
    preview: (
      <div className="nuda-confetti-trail" role="img" aria-label="Sparkle trail">
        <span className="nuda-confetti-trail__star" aria-hidden="true" />
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className="nuda-confetti-trail__spark"
            style={{ ["--d" as string]: `${i * 0.18}s` }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-confetti-trail{position:relative;width:160px;height:90px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-confetti-trail__star{position:absolute;top:50%;left:0;width:14px;height:14px;margin:-7px 0 0 -7px;background:radial-gradient(circle,#fff 0 25%,#e4ff54 30% 55%,transparent 60%);clip-path:polygon(50% 0,58% 42%,100% 50%,58% 58%,50% 100%,42% 58%,0 50%,42% 42%);filter:drop-shadow(0 0 5px rgba(228,255,84,.7));animation:nuda-confetti-trail-glide 2.6s ease-in-out infinite}
      .nuda-confetti-trail__spark{position:absolute;top:50%;left:0;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;background:#e4ff54;animation:nuda-confetti-trail-glide 2.6s ease-in-out var(--d) infinite,nuda-confetti-trail-fade 2.6s ease-in-out var(--d) infinite}
      .nuda-confetti-trail__spark:nth-child(3n){background:#ff5db1}
      .nuda-confetti-trail__spark:nth-child(3n+1){background:#5dd0ff}
      @keyframes nuda-confetti-trail-glide{0%{transform:translate(10px,0) scale(1)}25%{transform:translate(120px,-18px) scale(1)}50%{transform:translate(130px,14px) scale(1)}75%{transform:translate(30px,20px) scale(1)}100%{transform:translate(10px,0) scale(1)}}
      @keyframes nuda-confetti-trail-fade{0%,100%{opacity:0;transform:translate(10px,0) scale(.3)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-trail__star,.nuda-confetti-trail__spark{animation:none}.nuda-confetti-trail__spark{opacity:0}.nuda-confetti-trail__star{left:50%;transform:translateX(-50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-confetti-trail" role="img" aria-label="Sparkle trail">
  <span class="nuda-confetti-trail__star" aria-hidden="true"></span>
  <span class="nuda-confetti-trail__spark" style="--d:0s"></span>
  <span class="nuda-confetti-trail__spark" style="--d:.18s"></span>
  <span class="nuda-confetti-trail__spark" style="--d:.36s"></span>
  <span class="nuda-confetti-trail__spark" style="--d:.54s"></span>
  <span class="nuda-confetti-trail__spark" style="--d:.72s"></span>
  <span class="nuda-confetti-trail__spark" style="--d:.9s"></span>
  <span class="nuda-confetti-trail__spark" style="--d:1.08s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sparkle Trail
   A star glides on a looping path leaving fading sparkles behind.
   Customize: container size, --d stagger per spark. */

.nuda-confetti-trail {
  position: relative;
  width: 160px;
  height: 90px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.nuda-confetti-trail__star {
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  background: radial-gradient(circle, #fff 0 25%, #e4ff54 30% 55%, transparent 60%);
  clip-path: polygon(50% 0%, 58% 42%, 100% 50%, 58% 58%, 50% 100%, 42% 58%, 0% 50%, 42% 42%);
  filter: drop-shadow(0 0 5px rgba(228, 255, 84, 0.7));
  animation: nuda-confetti-trail-glide 2.6s ease-in-out infinite;
}

.nuda-confetti-trail__spark {
  position: absolute;
  top: 50%;
  left: 0;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: #e4ff54;
  animation:
    nuda-confetti-trail-glide 2.6s ease-in-out var(--d, 0s) infinite,
    nuda-confetti-trail-fade 2.6s ease-in-out var(--d, 0s) infinite;
}

.nuda-confetti-trail__spark:nth-child(3n)   { background: #ff5db1; }
.nuda-confetti-trail__spark:nth-child(3n+1) { background: #5dd0ff; }

@keyframes nuda-confetti-trail-glide {
  0%   { transform: translate(10px, 0); }
  25%  { transform: translate(120px, -18px); }
  50%  { transform: translate(130px, 14px); }
  75%  { transform: translate(30px, 20px); }
  100% { transform: translate(10px, 0); }
}

@keyframes nuda-confetti-trail-fade {
  0%, 100% { opacity: 0; transform: translate(10px, 0) scale(0.3); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-trail__star,
  .nuda-confetti-trail__spark { animation: none; }
  .nuda-confetti-trail__spark { opacity: 0; }
  .nuda-confetti-trail__star { left: 50%; transform: translateX(-50%); }
}`,
      },
    ],
  },

  /* ─────────────── 5. Party Popper ─────────────── */
  {
    id: "confetti-party-popper",
    name: "Party Popper",
    category: "Confetti & Celebration",
    preview: (
      <button
        className="nuda-confetti-popper"
        aria-label="Pop the party popper"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.remove("nuda-confetti-popper--go");
          void btn.offsetWidth;
          btn.classList.add("nuda-confetti-popper--go");
          setTimeout(() => btn.classList.remove("nuda-confetti-popper--go"), 1100);
        }}
      >
        <span className="nuda-confetti-popper__label">Pop</span>
        <span className="nuda-confetti-popper__streamers" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="nuda-confetti-popper__streamer"
              style={{
                ["--a" as string]: `${-15 - i * 8}deg`,
                ["--c" as string]:
                  i % 4 === 0 ? "#e4ff54" : i % 4 === 1 ? "#ff5db1" : i % 4 === 2 ? "#5dd0ff" : "#fafafa",
                ["--dist" as string]: `${70 + (i % 4) * 14}px`,
              }}
            />
          ))}
        </span>
      </button>
    ),
    cssInline: `
      .nuda-confetti-popper{position:relative;width:150px;height:100px;background:#09090b;border:1px solid rgba(255,255,255,.12);border-radius:12px;cursor:pointer;outline:none;overflow:hidden}
      .nuda-confetti-popper:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.4)}
      .nuda-confetti-popper__label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:600 14px/1 system-ui,sans-serif;color:#e4ff54;pointer-events:none}
      .nuda-confetti-popper__streamers{position:absolute;left:0;bottom:0;width:0;height:0}
      .nuda-confetti-popper__streamer{position:absolute;left:0;bottom:0;width:4px;height:12px;border-radius:2px;background:var(--c);transform-origin:bottom left;opacity:0;transform:rotate(var(--a)) translateX(0)}
      .nuda-confetti-popper--go .nuda-confetti-popper__streamer{animation:nuda-confetti-popper-shoot .9s cubic-bezier(.15,.7,.3,1) forwards}
      @keyframes nuda-confetti-popper-shoot{0%{opacity:0;transform:rotate(var(--a)) translateX(0) scaleY(.4)}15%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateX(var(--dist)) scaleY(1.4)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-popper--go .nuda-confetti-popper__streamer{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-confetti-popper" aria-label="Pop the party popper">
  <span class="nuda-confetti-popper__label">Pop</span>
  <span class="nuda-confetti-popper__streamers" aria-hidden="true">
    <span class="nuda-confetti-popper__streamer" style="--a:-15deg; --c:#e4ff54; --dist:70px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-23deg; --c:#ff5db1; --dist:84px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-31deg; --c:#5dd0ff; --dist:98px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-39deg; --c:#fafafa; --dist:112px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-47deg; --c:#e4ff54; --dist:70px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-55deg; --c:#ff5db1; --dist:84px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-63deg; --c:#5dd0ff; --dist:98px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-71deg; --c:#fafafa; --dist:112px"></span>
    <span class="nuda-confetti-popper__streamer" style="--a:-79deg; --c:#e4ff54; --dist:70px"></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Party Popper
   Streamers shoot from the bottom-left corner on pop.
   Customize: per-streamer --a angle, --c color, --dist distance. */

.nuda-confetti-popper {
  position: relative;
  width: 150px;
  height: 100px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
}

.nuda-confetti-popper:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.4);
}

.nuda-confetti-popper__label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 600 14px/1 system-ui, sans-serif;
  color: #e4ff54;
  pointer-events: none;
}

.nuda-confetti-popper__streamers {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
}

.nuda-confetti-popper__streamer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 4px;
  height: 12px;
  border-radius: 2px;
  background: var(--c, #e4ff54);
  transform-origin: bottom left;
  opacity: 0;
  transform: rotate(var(--a, -45deg)) translateX(0);
  will-change: transform, opacity;
}

.nuda-confetti-popper--go .nuda-confetti-popper__streamer {
  animation: nuda-confetti-popper-shoot 0.9s cubic-bezier(0.15, 0.7, 0.3, 1) forwards;
}

@keyframes nuda-confetti-popper-shoot {
  0%   { opacity: 0; transform: rotate(var(--a)) translateX(0) scaleY(0.4); }
  15%  { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--a)) translateX(var(--dist, 90px)) scaleY(1.4); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-popper--go .nuda-confetti-popper__streamer { animation: none; opacity: 0; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Party Popper — vanilla JS
   Re-fires the streamers on each click. */

(function () {
  document.querySelectorAll(".nuda-confetti-popper").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.remove("nuda-confetti-popper--go");
      void btn.offsetWidth;
      btn.classList.add("nuda-confetti-popper--go");
      setTimeout(function () {
        btn.classList.remove("nuda-confetti-popper--go");
      }, 1100);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 6. Emoji Rain ─────────────── */
  {
    id: "confetti-emoji-rain",
    name: "Emoji Rain",
    category: "Confetti & Celebration",
    preview: (
      <div className="nuda-confetti-emoji" role="img" aria-label="Emoji rain celebration">
        {["🎉", "🎊", "✨", "🥳", "🎈", "⭐", "🎉", "✨", "🎊", "🥳"].map((em, i) => (
          <span
            key={i}
            className="nuda-confetti-emoji__drop"
            aria-hidden="true"
            style={{
              left: `${(i * 9) + 4}%`,
              ["--d" as string]: `${(i % 5) * 0.4}s`,
              ["--dur" as string]: `${3 + (i % 3)}s`,
              ["--r" as string]: `${(i * 53) % 60 - 30}deg`,
            }}
          >
            {em}
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-confetti-emoji{position:relative;width:160px;height:110px;background:#09090b;border:1px solid rgba(228,255,84,.18);border-radius:12px;overflow:hidden}
      .nuda-confetti-emoji__drop{position:absolute;top:-24px;font-size:18px;line-height:1;opacity:0;animation:nuda-confetti-emoji-fall var(--dur) linear var(--d) infinite}
      @keyframes nuda-confetti-emoji-fall{0%{opacity:0;transform:translateY(-24px) rotate(var(--r))}10%{opacity:1}90%{opacity:1}100%{opacity:0;transform:translateY(130px) rotate(calc(var(--r) + 80deg))}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-emoji__drop{animation:none;opacity:1;top:auto;bottom:8px;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-confetti-emoji" role="img" aria-label="Emoji rain celebration">
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:4%;  --d:0s;   --dur:3s; --r:-10deg">🎉</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:13%; --d:.4s;  --dur:4s; --r:13deg">🎊</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:22%; --d:.8s;  --dur:5s; --r:-6deg">✨</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:31%; --d:1.2s; --dur:3s; --r:9deg">🥳</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:40%; --d:1.6s; --dur:4s; --r:-12deg">🎈</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:49%; --d:0s;   --dur:5s; --r:5deg">⭐</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:58%; --d:.4s;  --dur:3s; --r:-8deg">🎉</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:67%; --d:.8s;  --dur:4s; --r:11deg">✨</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:76%; --d:1.2s; --dur:5s; --r:-4deg">🎊</span>
  <span class="nuda-confetti-emoji__drop" aria-hidden="true" style="left:85%; --d:1.6s; --dur:3s; --r:7deg">🥳</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Emoji Rain
   Celebration emoji fall and tumble down a panel.
   Customize: emoji glyphs, container size, per-drop --d/--dur/--r. */

.nuda-confetti-emoji {
  position: relative;
  width: 160px;
  height: 110px;
  background: #09090b;
  border: 1px solid rgba(228, 255, 84, 0.18);
  border-radius: 12px;
  overflow: hidden;
}

.nuda-confetti-emoji__drop {
  position: absolute;
  top: -24px;
  font-size: 18px;
  line-height: 1;
  opacity: 0;
  animation: nuda-confetti-emoji-fall var(--dur, 4s) linear var(--d, 0s) infinite;
}

@keyframes nuda-confetti-emoji-fall {
  0%   { opacity: 0; transform: translateY(-24px) rotate(var(--r, 0deg)); }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(130px) rotate(calc(var(--r, 0deg) + 80deg)); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-emoji__drop {
    animation: none;
    opacity: 1;
    top: auto;
    bottom: 8px;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 7. Coin Shower ─────────────── */
  {
    id: "confetti-coin-shower",
    name: "Coin Shower",
    category: "Confetti & Celebration",
    preview: (
      <div className="nuda-confetti-coins" role="img" aria-label="Coin shower reward">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="nuda-confetti-coins__coin"
            aria-hidden="true"
            style={{
              left: `${(i * 9) + 5}%`,
              ["--d" as string]: `${(i % 5) * 0.35}s`,
              ["--dur" as string]: `${2.4 + (i % 3) * 0.5}s`,
              ["--flip" as string]: `${1 + (i % 3) * 0.3}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-confetti-coins{position:relative;width:160px;height:110px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-confetti-coins__coin{position:absolute;top:-20px;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff6c4,#e4ff54 45%,#b9c93f 80%);box-shadow:0 0 6px rgba(228,255,84,.5);opacity:0;animation:nuda-confetti-coins-fall var(--dur) linear var(--d) infinite,nuda-confetti-coins-flip var(--flip) linear var(--d) infinite}
      @keyframes nuda-confetti-coins-fall{0%{opacity:0;transform:translateY(-20px)}10%{opacity:1}90%{opacity:1}100%{opacity:0;transform:translateY(128px)}}
      @keyframes nuda-confetti-coins-flip{0%{transform:scaleX(1)}50%{transform:scaleX(.15)}100%{transform:scaleX(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-coins__coin{animation:none;opacity:1;top:auto;bottom:8px;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-confetti-coins" role="img" aria-label="Coin shower reward">
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:5%;  --d:0s;    --dur:2.4s; --flip:1s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:14%; --d:.35s;  --dur:2.9s; --flip:1.3s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:23%; --d:.7s;   --dur:3.4s; --flip:1.6s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:32%; --d:1.05s; --dur:2.4s; --flip:1s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:41%; --d:1.4s;  --dur:2.9s; --flip:1.3s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:50%; --d:0s;    --dur:3.4s; --flip:1.6s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:59%; --d:.35s;  --dur:2.4s; --flip:1s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:68%; --d:.7s;   --dur:2.9s; --flip:1.3s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:77%; --d:1.05s; --dur:3.4s; --flip:1.6s"></span>
  <span class="nuda-confetti-coins__coin" aria-hidden="true" style="left:86%; --d:1.4s;  --dur:2.4s; --flip:1s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Coin Shower
   Lime-gold coins rain down while flipping on their axis.
   Customize: container size, per-coin --d/--dur/--flip. */

.nuda-confetti-coins {
  position: relative;
  width: 160px;
  height: 110px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.nuda-confetti-coins__coin {
  position: absolute;
  top: -20px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff6c4, #e4ff54 45%, #b9c93f 80%);
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.5);
  opacity: 0;
  animation:
    nuda-confetti-coins-fall var(--dur, 3s) linear var(--d, 0s) infinite,
    nuda-confetti-coins-flip var(--flip, 1.2s) linear var(--d, 0s) infinite;
}

@keyframes nuda-confetti-coins-fall {
  0%   { opacity: 0; transform: translateY(-20px); }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(128px); }
}

@keyframes nuda-confetti-coins-flip {
  0%   { transform: scaleX(1); }
  50%  { transform: scaleX(0.15); }
  100% { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-coins__coin {
    animation: none;
    opacity: 1;
    top: auto;
    bottom: 8px;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 8. Ribbon Drop ─────────────── */
  {
    id: "confetti-ribbon",
    name: "Ribbon Drop",
    category: "Confetti & Celebration",
    preview: (
      <div className="nuda-confetti-ribbon" role="img" aria-label="Falling ribbon strips">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="nuda-confetti-ribbon__strip"
            aria-hidden="true"
            style={{
              left: `${(i * 11) + 3}%`,
              ["--c" as string]:
                i % 4 === 0 ? "#e4ff54" : i % 4 === 1 ? "#ff5db1" : i % 4 === 2 ? "#5dd0ff" : "#fafafa",
              ["--d" as string]: `${(i % 5) * 0.4}s`,
              ["--dur" as string]: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-confetti-ribbon{position:relative;width:160px;height:110px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-confetti-ribbon__strip{position:absolute;top:-30px;width:6px;height:22px;background:var(--c);border-radius:2px;opacity:0;transform-origin:center;animation:nuda-confetti-ribbon-fall var(--dur) ease-in-out var(--d) infinite,nuda-confetti-ribbon-wave var(--dur) ease-in-out var(--d) infinite}
      @keyframes nuda-confetti-ribbon-fall{0%{opacity:0;transform:translateY(-30px)}10%{opacity:1}90%{opacity:1}100%{opacity:0;transform:translateY(132px)}}
      @keyframes nuda-confetti-ribbon-wave{0%{transform:rotate(0deg) scaleY(1)}25%{transform:rotate(20deg) scaleY(.8)}50%{transform:rotate(-15deg) scaleY(1.1)}75%{transform:rotate(18deg) scaleY(.85)}100%{transform:rotate(0deg) scaleY(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-ribbon__strip{animation:none;opacity:1;top:auto;bottom:8px;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-confetti-ribbon" role="img" aria-label="Falling ribbon strips">
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:3%;  --c:#e4ff54; --d:0s;   --dur:3s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:14%; --c:#ff5db1; --d:.4s;  --dur:4s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:25%; --c:#5dd0ff; --d:.8s;  --dur:5s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:36%; --c:#fafafa; --d:1.2s; --dur:3s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:47%; --c:#e4ff54; --d:1.6s; --dur:4s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:58%; --c:#ff5db1; --d:0s;   --dur:5s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:69%; --c:#5dd0ff; --d:.4s;  --dur:3s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:80%; --c:#fafafa; --d:.8s;  --dur:4s"></span>
  <span class="nuda-confetti-ribbon__strip" aria-hidden="true" style="left:91%; --c:#e4ff54; --d:1.2s; --dur:5s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Ribbon Drop
   Multi-color ribbon strips flutter and wave as they fall.
   Customize: per-strip --c color, --d/--dur timing. */

.nuda-confetti-ribbon {
  position: relative;
  width: 160px;
  height: 110px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.nuda-confetti-ribbon__strip {
  position: absolute;
  top: -30px;
  width: 6px;
  height: 22px;
  background: var(--c, #e4ff54);
  border-radius: 2px;
  opacity: 0;
  transform-origin: center;
  animation:
    nuda-confetti-ribbon-fall var(--dur, 4s) ease-in-out var(--d, 0s) infinite,
    nuda-confetti-ribbon-wave var(--dur, 4s) ease-in-out var(--d, 0s) infinite;
}

@keyframes nuda-confetti-ribbon-fall {
  0%   { opacity: 0; transform: translateY(-30px); }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(132px); }
}

@keyframes nuda-confetti-ribbon-wave {
  0%   { transform: rotate(0deg) scaleY(1); }
  25%  { transform: rotate(20deg) scaleY(0.8); }
  50%  { transform: rotate(-15deg) scaleY(1.1); }
  75%  { transform: rotate(18deg) scaleY(0.85); }
  100% { transform: rotate(0deg) scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-ribbon__strip {
    animation: none;
    opacity: 1;
    top: auto;
    bottom: 8px;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 9. Badge Unlock ─────────────── */
  {
    id: "confetti-badge-unlock",
    name: "Badge Unlock",
    category: "Confetti & Celebration",
    preview: (
      <button
        className="nuda-confetti-badge"
        aria-label="Unlock badge"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.remove("nuda-confetti-badge--go");
          void btn.offsetWidth;
          btn.classList.add("nuda-confetti-badge--go");
          setTimeout(() => btn.classList.remove("nuda-confetti-badge--go"), 1300);
        }}
      >
        <span className="nuda-confetti-badge__medal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="9" r="6" />
            <path d="M9 14l-2 7 5-3 5 3-2-7" />
          </svg>
          <span className="nuda-confetti-badge__shine" />
        </span>
        <span className="nuda-confetti-badge__pieces" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="nuda-confetti-badge__piece"
              style={{
                ["--a" as string]: `${(i / 10) * 360}deg`,
                ["--c" as string]: i % 3 === 0 ? "#e4ff54" : i % 3 === 1 ? "#ff5db1" : "#5dd0ff",
              }}
            />
          ))}
        </span>
      </button>
    ),
    cssInline: `
      .nuda-confetti-badge{position:relative;width:72px;height:72px;background:none;border:none;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}
      .nuda-confetti-badge:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.4);border-radius:50%}
      .nuda-confetti-badge__medal{position:relative;width:48px;height:48px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#f4ffb0,#e4ff54 55%,#b9c93f);display:flex;align-items:center;justify-content:center;overflow:hidden;transform:scale(.6);opacity:.4}
      .nuda-confetti-badge__medal svg{width:30px;height:30px}
      .nuda-confetti-badge__shine{position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.85),transparent);transform:skewX(-18deg)}
      .nuda-confetti-badge--go .nuda-confetti-badge__medal{animation:nuda-confetti-badge-pop .6s cubic-bezier(.18,.9,.32,1.4) forwards}
      .nuda-confetti-badge--go .nuda-confetti-badge__shine{animation:nuda-confetti-badge-shine .7s .35s ease-in forwards}
      .nuda-confetti-badge__pieces{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
      .nuda-confetti-badge__piece{position:absolute;width:6px;height:6px;border-radius:1px;background:var(--c);opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}
      .nuda-confetti-badge--go .nuda-confetti-badge__piece{animation:nuda-confetti-badge-fly .8s .25s cubic-bezier(.2,.6,.4,1) forwards}
      @keyframes nuda-confetti-badge-pop{0%{transform:scale(.6);opacity:.4}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1);opacity:1}}
      @keyframes nuda-confetti-badge-shine{0%{left:-60%}100%{left:120%}}
      @keyframes nuda-confetti-badge-fly{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}20%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-44px) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-badge__medal{transform:scale(1);opacity:1}.nuda-confetti-badge--go .nuda-confetti-badge__medal,.nuda-confetti-badge--go .nuda-confetti-badge__shine,.nuda-confetti-badge--go .nuda-confetti-badge__piece{animation:none}.nuda-confetti-badge__shine{opacity:0}.nuda-confetti-badge__piece{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-confetti-badge" aria-label="Unlock badge">
  <span class="nuda-confetti-badge__medal" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="#09090b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="9" r="6"/>
      <path d="M9 14l-2 7 5-3 5 3-2-7"/>
    </svg>
    <span class="nuda-confetti-badge__shine"></span>
  </span>
  <span class="nuda-confetti-badge__pieces" aria-hidden="true">
    <span class="nuda-confetti-badge__piece" style="--a:0deg;   --c:#e4ff54"></span>
    <span class="nuda-confetti-badge__piece" style="--a:36deg;  --c:#ff5db1"></span>
    <span class="nuda-confetti-badge__piece" style="--a:72deg;  --c:#5dd0ff"></span>
    <span class="nuda-confetti-badge__piece" style="--a:108deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-badge__piece" style="--a:144deg; --c:#ff5db1"></span>
    <span class="nuda-confetti-badge__piece" style="--a:180deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-badge__piece" style="--a:216deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-badge__piece" style="--a:252deg; --c:#ff5db1"></span>
    <span class="nuda-confetti-badge__piece" style="--a:288deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-badge__piece" style="--a:324deg; --c:#e4ff54"></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Badge Unlock
   Medal pops in with a sweeping shine and a confetti burst.
   Customize: medal gradient, piece colors via inline --c. */

.nuda-confetti-badge {
  position: relative;
  width: 72px;
  height: 72px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-confetti-badge:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.4);
  border-radius: 50%;
}

.nuda-confetti-badge__medal {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #f4ffb0, #e4ff54 55%, #b9c93f);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: scale(0.6);
  opacity: 0.4;
}

.nuda-confetti-badge__medal svg { width: 30px; height: 30px; }

.nuda-confetti-badge__shine {
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.85), transparent);
  transform: skewX(-18deg);
}

.nuda-confetti-badge--go .nuda-confetti-badge__medal {
  animation: nuda-confetti-badge-pop 0.6s cubic-bezier(0.18, 0.9, 0.32, 1.4) forwards;
}

.nuda-confetti-badge--go .nuda-confetti-badge__shine {
  animation: nuda-confetti-badge-shine 0.7s 0.35s ease-in forwards;
}

.nuda-confetti-badge__pieces {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.nuda-confetti-badge__piece {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: var(--c, #e4ff54);
  opacity: 0;
  transform: rotate(var(--a, 0deg)) translateY(0) scale(0.4);
  will-change: transform, opacity;
}

.nuda-confetti-badge--go .nuda-confetti-badge__piece {
  animation: nuda-confetti-badge-fly 0.8s 0.25s cubic-bezier(0.2, 0.6, 0.4, 1) forwards;
}

@keyframes nuda-confetti-badge-pop {
  0%   { transform: scale(0.6); opacity: 0.4; }
  60%  { transform: scale(1.12); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes nuda-confetti-badge-shine {
  0%   { left: -60%; }
  100% { left: 120%; }
}

@keyframes nuda-confetti-badge-fly {
  0%   { opacity: 0; transform: rotate(var(--a)) translateY(0) scale(0.4); }
  20%  { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--a)) translateY(-44px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-badge__medal { transform: scale(1); opacity: 1; }
  .nuda-confetti-badge--go .nuda-confetti-badge__medal,
  .nuda-confetti-badge--go .nuda-confetti-badge__shine,
  .nuda-confetti-badge--go .nuda-confetti-badge__piece { animation: none; }
  .nuda-confetti-badge__shine { opacity: 0; }
  .nuda-confetti-badge__piece { opacity: 0; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Badge Unlock — vanilla JS
   Re-runs the medal pop + shine + burst on each click. */

(function () {
  document.querySelectorAll(".nuda-confetti-badge").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.remove("nuda-confetti-badge--go");
      void btn.offsetWidth;
      btn.classList.add("nuda-confetti-badge--go");
      setTimeout(function () {
        btn.classList.remove("nuda-confetti-badge--go");
      }, 1300);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 10. Applause Burst ─────────────── */
  {
    id: "confetti-clap",
    name: "Applause Burst",
    category: "Confetti & Celebration",
    preview: (
      <button
        className="nuda-confetti-clap"
        aria-label="Applaud"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.remove("nuda-confetti-clap--go");
          void btn.offsetWidth;
          btn.classList.add("nuda-confetti-clap--go");
          setTimeout(() => btn.classList.remove("nuda-confetti-clap--go"), 800);
        }}
      >
        <svg className="nuda-confetti-clap__hands" viewBox="0 0 24 24" fill="#09090b" aria-hidden="true">
          <path d="M11 4l1 5 2-4 1 5 2-3 1 6c.5 3-1.5 6-5 6s-6-2-6.5-5L6 12c-.3-1.2.9-2 1.7-1.1L9 12 7.5 5c-.2-1 1.2-1.5 1.7-.5L10 8 9.5 3c-.2-1 1.3-1.3 1.5 0z" />
        </svg>
        <span className="nuda-confetti-clap__pieces" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="nuda-confetti-clap__piece"
              style={{
                ["--a" as string]: `${-30 - (i / 7) * 120}deg`,
                ["--c" as string]: i % 3 === 0 ? "#e4ff54" : i % 3 === 1 ? "#ff5db1" : "#5dd0ff",
              }}
            />
          ))}
        </span>
      </button>
    ),
    cssInline: `
      .nuda-confetti-clap{position:relative;width:56px;height:56px;border-radius:50%;background:#e4ff54;border:none;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}
      .nuda-confetti-clap:focus-visible{box-shadow:0 0 0 3px rgba(228,255,84,.5)}
      .nuda-confetti-clap__hands{width:26px;height:26px}
      .nuda-confetti-clap--go .nuda-confetti-clap__hands{animation:nuda-confetti-clap-tap .45s cubic-bezier(.3,.7,.4,1.5)}
      .nuda-confetti-clap__pieces{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
      .nuda-confetti-clap__piece{position:absolute;width:5px;height:5px;border-radius:50%;background:var(--c);opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}
      .nuda-confetti-clap--go .nuda-confetti-clap__piece{animation:nuda-confetti-clap-fly .7s cubic-bezier(.2,.6,.4,1) forwards}
      @keyframes nuda-confetti-clap-tap{0%{transform:scale(1) rotate(0)}40%{transform:scale(.78) rotate(-8deg)}100%{transform:scale(1) rotate(0)}}
      @keyframes nuda-confetti-clap-fly{0%{opacity:0;transform:rotate(var(--a)) translateY(0) scale(.4)}25%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-38px) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-confetti-clap--go .nuda-confetti-clap__hands,.nuda-confetti-clap--go .nuda-confetti-clap__piece{animation:none}.nuda-confetti-clap__piece{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-confetti-clap" aria-label="Applaud">
  <svg class="nuda-confetti-clap__hands" viewBox="0 0 24 24" fill="#09090b" aria-hidden="true">
    <path d="M11 4l1 5 2-4 1 5 2-3 1 6c.5 3-1.5 6-5 6s-6-2-6.5-5L6 12c-.3-1.2.9-2 1.7-1.1L9 12 7.5 5c-.2-1 1.2-1.5 1.7-.5L10 8 9.5 3c-.2-1 1.3-1.3 1.5 0z"/>
  </svg>
  <span class="nuda-confetti-clap__pieces" aria-hidden="true">
    <span class="nuda-confetti-clap__piece" style="--a:-30deg;  --c:#e4ff54"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-47deg;  --c:#ff5db1"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-64deg;  --c:#5dd0ff"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-81deg;  --c:#e4ff54"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-99deg;  --c:#ff5db1"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-116deg; --c:#5dd0ff"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-133deg; --c:#e4ff54"></span>
    <span class="nuda-confetti-clap__piece" style="--a:-150deg; --c:#ff5db1"></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Applause Burst
   Clap icon taps and throws a fan of confetti upward.
   Customize: --confetti-clap-bg via background, piece colors via --c. */

.nuda-confetti-clap {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #e4ff54;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-confetti-clap:focus-visible {
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.5);
}

.nuda-confetti-clap__hands { width: 26px; height: 26px; }

.nuda-confetti-clap--go .nuda-confetti-clap__hands {
  animation: nuda-confetti-clap-tap 0.45s cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.nuda-confetti-clap__pieces {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.nuda-confetti-clap__piece {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--c, #e4ff54);
  opacity: 0;
  transform: rotate(var(--a, 0deg)) translateY(0) scale(0.4);
  will-change: transform, opacity;
}

.nuda-confetti-clap--go .nuda-confetti-clap__piece {
  animation: nuda-confetti-clap-fly 0.7s cubic-bezier(0.2, 0.6, 0.4, 1) forwards;
}

@keyframes nuda-confetti-clap-tap {
  0%   { transform: scale(1) rotate(0); }
  40%  { transform: scale(0.78) rotate(-8deg); }
  100% { transform: scale(1) rotate(0); }
}

@keyframes nuda-confetti-clap-fly {
  0%   { opacity: 0; transform: rotate(var(--a)) translateY(0) scale(0.4); }
  25%  { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--a)) translateY(-38px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti-clap--go .nuda-confetti-clap__hands,
  .nuda-confetti-clap--go .nuda-confetti-clap__piece { animation: none; }
  .nuda-confetti-clap__piece { opacity: 0; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Applause Burst — vanilla JS
   Re-fires the clap tap + confetti fan on each click. */

(function () {
  document.querySelectorAll(".nuda-confetti-clap").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.remove("nuda-confetti-clap--go");
      void btn.offsetWidth;
      btn.classList.add("nuda-confetti-clap--go");
      setTimeout(function () {
        btn.classList.remove("nuda-confetti-clap--go");
      }, 800);
    });
  });
})();`,
      },
    ],
  },
];
