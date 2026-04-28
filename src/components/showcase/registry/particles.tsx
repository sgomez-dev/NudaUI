import type { NudaComponent } from "./types";

export const particles: NudaComponent[] = [
  /* ─────────────── 1. Confetti Burst ─────────────── */
  {
    id: "confetti-burst",
    name: "Confetti Burst",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-confetti" role="img" aria-label="Confetti burst">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="nuda-confetti__piece"
            style={{
              ["--a" as string]: `${(i / 14) * 360}deg`,
              ["--c" as string]: i % 3 === 0 ? "#e4ff54" : i % 3 === 1 ? "#fafafa" : "rgba(228,255,84,.5)",
              ["--d" as string]: `${(i % 5) * 0.05}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-confetti{position:relative;width:100px;height:100px;display:flex;align-items:center;justify-content:center}
      .nuda-confetti::before{content:"";position:absolute;width:8px;height:8px;border-radius:50%;background:#e4ff54;box-shadow:0 0 12px rgba(228,255,84,.6);animation:_cf-core 2s ease-in-out infinite}
      .nuda-confetti__piece{position:absolute;width:6px;height:6px;background:var(--c);transform:rotate(var(--a)) translateY(0);transform-origin:center;animation:_cf-burst 2s cubic-bezier(.2,.6,.4,1) var(--d) infinite;border-radius:1px}
      .nuda-confetti__piece:nth-child(2n){width:4px;height:8px}
      .nuda-confetti__piece:nth-child(3n){border-radius:50%}
      @keyframes _cf-burst{0%{transform:rotate(var(--a)) translateY(0) scale(.4);opacity:0}15%{opacity:1}80%,100%{transform:rotate(var(--a)) translateY(-44px) scale(1);opacity:0}}
      @keyframes _cf-core{0%,100%{transform:scale(.6);opacity:.4}50%{transform:scale(1.2);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Confetti Burst (radial spread of pieces from center) -->
<div class="nuda-confetti" role="img" aria-label="Confetti burst">
  <span class="nuda-confetti__piece" style="--a:0deg;   --c:#e4ff54;        --d:0s"></span>
  <span class="nuda-confetti__piece" style="--a:25deg;  --c:#fafafa;        --d:.05s"></span>
  <span class="nuda-confetti__piece" style="--a:51deg;  --c:rgba(228,255,84,.5); --d:.1s"></span>
  <span class="nuda-confetti__piece" style="--a:77deg;  --c:#e4ff54;        --d:.15s"></span>
  <span class="nuda-confetti__piece" style="--a:102deg; --c:#fafafa;        --d:.2s"></span>
  <span class="nuda-confetti__piece" style="--a:128deg; --c:rgba(228,255,84,.5); --d:0s"></span>
  <span class="nuda-confetti__piece" style="--a:154deg; --c:#e4ff54;        --d:.05s"></span>
  <span class="nuda-confetti__piece" style="--a:180deg; --c:#fafafa;        --d:.1s"></span>
  <span class="nuda-confetti__piece" style="--a:205deg; --c:rgba(228,255,84,.5); --d:.15s"></span>
  <span class="nuda-confetti__piece" style="--a:231deg; --c:#e4ff54;        --d:.2s"></span>
  <span class="nuda-confetti__piece" style="--a:257deg; --c:#fafafa;        --d:0s"></span>
  <span class="nuda-confetti__piece" style="--a:282deg; --c:rgba(228,255,84,.5); --d:.05s"></span>
  <span class="nuda-confetti__piece" style="--a:308deg; --c:#e4ff54;        --d:.1s"></span>
  <span class="nuda-confetti__piece" style="--a:334deg; --c:#fafafa;        --d:.15s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Confetti Burst
   Radial confetti from a central pulsing core.
   Customize: --conf-distance, piece colors via inline --c. */

.nuda-confetti {
  --conf-distance: 50px;
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-confetti::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e4ff54;
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.6);
  animation: nuda-conf-core 2s ease-in-out infinite;
}

.nuda-confetti__piece {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--c, #e4ff54);
  transform: rotate(var(--a, 0deg)) translateY(0);
  transform-origin: center;
  border-radius: 1px;
  animation: nuda-conf-burst 2s cubic-bezier(0.2, 0.6, 0.4, 1) var(--d, 0s) infinite;
}

.nuda-confetti__piece:nth-child(2n) { width: 4px; height: 8px; }
.nuda-confetti__piece:nth-child(3n) { border-radius: 50%; }

@keyframes nuda-conf-burst {
  0%        { transform: rotate(var(--a)) translateY(0) scale(0.4); opacity: 0; }
  15%       { opacity: 1; }
  80%, 100% { transform: rotate(var(--a)) translateY(calc(var(--conf-distance) * -1)) scale(1); opacity: 0; }
}

@keyframes nuda-conf-core {
  0%, 100% { transform: scale(0.6); opacity: 0.4; }
  50%      { transform: scale(1.2); opacity: 1;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-confetti__piece,
  .nuda-confetti::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Sparkles ─────────────── */
  {
    id: "sparkles",
    name: "Sparkles",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-sparkles" role="img" aria-label="Sparkles">
        {[
          { x: 12, y: 18, s: 8, d: "0s" },
          { x: 70, y: 12, s: 6, d: ".4s" },
          { x: 36, y: 54, s: 10, d: ".8s" },
          { x: 82, y: 60, s: 7, d: "1.2s" },
          { x: 56, y: 28, s: 5, d: "1.6s" },
          { x: 22, y: 72, s: 6, d: ".2s" },
        ].map((p, i) => (
          <span
            key={i}
            className="nuda-sparkles__star"
            style={{ left: `${p.x}%`, top: `${p.y}%`, ["--s" as string]: `${p.s}px`, ["--d" as string]: p.d }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-sparkles{position:relative;width:100px;height:100px}
      .nuda-sparkles__star{position:absolute;width:var(--s);height:var(--s);transform:translate(-50%,-50%) scale(0);background:radial-gradient(circle,#fff 0 20%,#e4ff54 25% 50%,transparent 55%);clip-path:polygon(50% 0,55% 45%,100% 50%,55% 55%,50% 100%,45% 55%,0 50%,45% 45%);animation:_sp-twinkle 2.4s ease-in-out var(--d) infinite;filter:drop-shadow(0 0 4px rgba(228,255,84,.5))}
      @keyframes _sp-twinkle{0%,80%,100%{transform:translate(-50%,-50%) scale(0) rotate(0deg);opacity:0}15%{transform:translate(-50%,-50%) scale(1) rotate(45deg);opacity:1}30%{transform:translate(-50%,-50%) scale(.8) rotate(90deg);opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sparkles -->
<div class="nuda-sparkles" role="img" aria-label="Sparkles">
  <span class="nuda-sparkles__star" style="left:12%; top:18%; --s:10px; --d:0s"></span>
  <span class="nuda-sparkles__star" style="left:70%; top:12%; --s:8px;  --d:.4s"></span>
  <span class="nuda-sparkles__star" style="left:36%; top:54%; --s:12px; --d:.8s"></span>
  <span class="nuda-sparkles__star" style="left:82%; top:60%; --s:9px;  --d:1.2s"></span>
  <span class="nuda-sparkles__star" style="left:56%; top:28%; --s:7px;  --d:1.6s"></span>
  <span class="nuda-sparkles__star" style="left:22%; top:72%; --s:8px;  --d:.2s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sparkles
   Twinkling 4-point stars with staggered delays.
   Customize: --sparkles-color, sizes & positions via inline --s/--d. */

.nuda-sparkles {
  --sparkles-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 220px;
  aspect-ratio: 1;
}

.nuda-sparkles__star {
  position: absolute;
  width: var(--s, 10px);
  height: var(--s, 10px);
  transform: translate(-50%, -50%) scale(0);
  background: radial-gradient(
    circle,
    #fff 0 20%,
    var(--sparkles-color) 25% 50%,
    transparent 55%
  );
  clip-path: polygon(
    50% 0%, 55% 45%, 100% 50%, 55% 55%,
    50% 100%, 45% 55%, 0% 50%, 45% 45%
  );
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.5));
  animation: nuda-sparkles-twinkle 2.4s ease-in-out var(--d, 0s) infinite;
}

@keyframes nuda-sparkles-twinkle {
  0%, 80%, 100% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }
  15%           { transform: translate(-50%, -50%) scale(1) rotate(45deg); opacity: 1; }
  30%           { transform: translate(-50%, -50%) scale(0.8) rotate(90deg); opacity: 0.6; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sparkles__star { animation: none; transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Fireflies ─────────────── */
  {
    id: "fireflies",
    name: "Fireflies",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-fireflies" role="img" aria-label="Fireflies">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="nuda-fireflies__bug"
            style={{
              left: `${(i * 137) % 90 + 5}%`,
              top: `${(i * 97) % 80 + 10}%`,
              ["--d" as string]: `${(i * 0.4).toFixed(2)}s`,
              ["--dur" as string]: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-fireflies{position:relative;width:120px;height:80px;background:radial-gradient(ellipse at center,rgba(228,255,84,.04),transparent 70%);overflow:hidden;border-radius:8px}
      .nuda-fireflies__bug{position:absolute;width:4px;height:4px;border-radius:50%;background:#e4ff54;box-shadow:0 0 6px #e4ff54,0 0 14px rgba(228,255,84,.4);animation:_ff-glow var(--dur) ease-in-out var(--d) infinite,_ff-drift calc(var(--dur) * 1.5) ease-in-out var(--d) infinite alternate}
      @keyframes _ff-glow{0%,100%{opacity:.1;transform:scale(.5)}50%{opacity:1;transform:scale(1.2)}}
      @keyframes _ff-drift{0%{transform:translate(0,0)}33%{transform:translate(8px,-6px)}66%{transform:translate(-4px,6px)}100%{transform:translate(6px,4px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Fireflies -->
<div class="nuda-fireflies" role="img" aria-label="Fireflies">
  <span class="nuda-fireflies__bug" style="left:8%;  top:14%; --d:0s;   --dur:4s"></span>
  <span class="nuda-fireflies__bug" style="left:42%; top:30%; --d:.4s;  --dur:5s"></span>
  <span class="nuda-fireflies__bug" style="left:76%; top:18%; --d:.8s;  --dur:6s"></span>
  <span class="nuda-fireflies__bug" style="left:22%; top:60%; --d:1.2s; --dur:4s"></span>
  <span class="nuda-fireflies__bug" style="left:58%; top:72%; --d:1.6s; --dur:5s"></span>
  <span class="nuda-fireflies__bug" style="left:88%; top:48%; --d:2s;   --dur:6s"></span>
  <span class="nuda-fireflies__bug" style="left:14%; top:36%; --d:2.4s; --dur:4s"></span>
  <span class="nuda-fireflies__bug" style="left:64%; top:10%; --d:2.8s; --dur:5s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fireflies
   Glowing dots that pulse and drift slowly inside a soft halo.
   Customize: --ff-color, --ff-size, container size. */

.nuda-fireflies {
  --ff-color: #e4ff54;
  --ff-size: 4px;
  position: relative;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 3 / 2;
  background: radial-gradient(ellipse at center, rgba(228, 255, 84, 0.04), transparent 70%);
  overflow: hidden;
  border-radius: 8px;
}

.nuda-fireflies__bug {
  position: absolute;
  width: var(--ff-size);
  height: var(--ff-size);
  border-radius: 50%;
  background: var(--ff-color);
  box-shadow:
    0 0 6px var(--ff-color),
    0 0 14px rgba(228, 255, 84, 0.4);
  animation:
    nuda-ff-glow var(--dur, 5s) ease-in-out var(--d, 0s) infinite,
    nuda-ff-drift calc(var(--dur, 5s) * 1.5) ease-in-out var(--d, 0s) infinite alternate;
}

@keyframes nuda-ff-glow {
  0%, 100% { opacity: 0.1; transform: scale(0.5); }
  50%      { opacity: 1;   transform: scale(1.2); }
}

@keyframes nuda-ff-drift {
  0%   { transform: translate(0, 0); }
  33%  { transform: translate(8px, -6px); }
  66%  { transform: translate(-4px, 6px); }
  100% { transform: translate(6px, 4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-fireflies__bug { animation: none; opacity: 0.7; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Snowfall ─────────────── */
  {
    id: "snowfall",
    name: "Snowfall",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-snow" role="img" aria-label="Snow falling">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="nuda-snow__flake"
            style={{
              left: `${(i * 7) % 100}%`,
              ["--d" as string]: `${(i % 6) * 0.4}s`,
              ["--dur" as string]: `${3 + (i % 4)}s`,
              ["--s" as string]: `${(i % 3) + 2}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-snow{position:relative;width:100px;height:100px;background:linear-gradient(180deg,rgba(228,255,84,.04),transparent);overflow:hidden;border-radius:8px}
      .nuda-snow__flake{position:absolute;top:-10px;width:var(--s);height:var(--s);border-radius:50%;background:#fff;opacity:.6;animation:_sn-fall var(--dur) linear var(--d) infinite,_sn-sway var(--dur) ease-in-out var(--d) infinite}
      @keyframes _sn-fall{0%{transform:translateY(-10px)}100%{transform:translateY(110px)}}
      @keyframes _sn-sway{0%,100%{margin-left:0}50%{margin-left:6px}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Snowfall (generate flakes from JS or template loop) -->
<div class="nuda-snow" role="img" aria-label="Snow falling">
  <span class="nuda-snow__flake" style="left:5%;  --d:0s;   --dur:4s; --s:3px"></span>
  <span class="nuda-snow__flake" style="left:18%; --d:.4s;  --dur:5s; --s:4px"></span>
  <span class="nuda-snow__flake" style="left:32%; --d:.8s;  --dur:3s; --s:2px"></span>
  <span class="nuda-snow__flake" style="left:46%; --d:1.2s; --dur:6s; --s:3px"></span>
  <span class="nuda-snow__flake" style="left:60%; --d:1.6s; --dur:4s; --s:4px"></span>
  <span class="nuda-snow__flake" style="left:74%; --d:2s;   --dur:5s; --s:2px"></span>
  <span class="nuda-snow__flake" style="left:88%; --d:2.4s; --dur:3s; --s:3px"></span>
  <!-- ...add 5–15 more for density -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Snowfall
   Flakes falling vertically with horizontal sway.
   Customize: --snow-color, container height, individual --d/--dur/--s. */

.nuda-snow {
  --snow-color: #fff;
  position: relative;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.04), transparent);
  overflow: hidden;
  border-radius: 8px;
}

.nuda-snow__flake {
  position: absolute;
  top: -10px;
  width: var(--s, 3px);
  height: var(--s, 3px);
  border-radius: 50%;
  background: var(--snow-color);
  opacity: 0.6;
  animation:
    nuda-snow-fall var(--dur, 4s) linear var(--d, 0s) infinite,
    nuda-snow-sway var(--dur, 4s) ease-in-out var(--d, 0s) infinite;
}

@keyframes nuda-snow-fall {
  0%   { transform: translateY(-10px); }
  100% { transform: translateY(calc(100% + 10px)); }
}

@keyframes nuda-snow-sway {
  0%, 100% { margin-left: 0; }
  50%      { margin-left: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-snow__flake { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Rain ─────────────── */
  {
    id: "rain",
    name: "Rain",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-rain" role="img" aria-label="Rain">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="nuda-rain__drop"
            style={{
              left: `${(i * 6) % 100}%`,
              ["--d" as string]: `${(i % 5) * 0.15}s`,
              ["--dur" as string]: `${0.8 + (i % 3) * 0.2}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-rain{position:relative;width:100px;height:100px;background:linear-gradient(180deg,rgba(228,255,84,.05),transparent);overflow:hidden;border-radius:8px}
      .nuda-rain__drop{position:absolute;top:-12px;width:1px;height:14px;background:linear-gradient(180deg,transparent,#e4ff54);opacity:.7;animation:_rn-fall var(--dur) linear var(--d) infinite}
      @keyframes _rn-fall{0%{transform:translateY(-14px);opacity:0}10%{opacity:.7}100%{transform:translateY(110px);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Rain -->
<div class="nuda-rain" role="img" aria-label="Rain">
  <span class="nuda-rain__drop" style="left:5%;  --d:0s;   --dur:.9s"></span>
  <span class="nuda-rain__drop" style="left:14%; --d:.15s; --dur:1s"></span>
  <span class="nuda-rain__drop" style="left:24%; --d:.3s;  --dur:.8s"></span>
  <span class="nuda-rain__drop" style="left:34%; --d:.45s; --dur:1.1s"></span>
  <span class="nuda-rain__drop" style="left:44%; --d:.6s;  --dur:.9s"></span>
  <span class="nuda-rain__drop" style="left:54%; --d:0s;   --dur:1s"></span>
  <span class="nuda-rain__drop" style="left:64%; --d:.15s; --dur:.8s"></span>
  <span class="nuda-rain__drop" style="left:74%; --d:.3s;  --dur:1.1s"></span>
  <span class="nuda-rain__drop" style="left:84%; --d:.45s; --dur:.9s"></span>
  <span class="nuda-rain__drop" style="left:94%; --d:.6s;  --dur:1s"></span>
  <!-- ...more drops for density -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Rain
   Vertical streaks falling at varying speeds.
   Customize: --rain-color, container size, individual --d/--dur. */

.nuda-rain {
  --rain-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.05), transparent);
  overflow: hidden;
  border-radius: 8px;
}

.nuda-rain__drop {
  position: absolute;
  top: -12px;
  width: 1px;
  height: 14px;
  background: linear-gradient(180deg, transparent, var(--rain-color));
  opacity: 0.7;
  animation: nuda-rain-fall var(--dur, 1s) linear var(--d, 0s) infinite;
}

@keyframes nuda-rain-fall {
  0%   { transform: translateY(-14px); opacity: 0; }
  10%  { opacity: 0.7; }
  100% { transform: translateY(calc(100% + 14px)); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-rain__drop { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Fireworks ─────────────── */
  {
    id: "fireworks",
    name: "Fireworks",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-firework" role="img" aria-label="Fireworks">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="nuda-firework__spark"
            style={{
              ["--a" as string]: `${(i / 12) * 360}deg`,
              ["--d" as string]: `${(i % 4) * 0.05}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-firework{position:relative;width:90px;height:90px;display:flex;align-items:center;justify-content:center}
      .nuda-firework__spark{position:absolute;width:2px;height:14px;background:linear-gradient(180deg,transparent,#e4ff54);transform-origin:center 50px;transform:rotate(var(--a)) translateY(-30px);opacity:0;animation:_fw-shoot 2.4s cubic-bezier(.3,.6,.2,1) var(--d) infinite;border-radius:50%;filter:drop-shadow(0 0 3px #e4ff54)}
      @keyframes _fw-shoot{0%,30%{transform:rotate(var(--a)) translateY(0) scaleY(.3);opacity:0}40%{opacity:1}60%,80%{transform:rotate(var(--a)) translateY(-32px) scaleY(1);opacity:1}100%{transform:rotate(var(--a)) translateY(-46px) scaleY(.4);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Fireworks -->
<div class="nuda-firework" role="img" aria-label="Fireworks">
  <span class="nuda-firework__spark" style="--a:0deg;   --d:0s"></span>
  <span class="nuda-firework__spark" style="--a:30deg;  --d:.05s"></span>
  <span class="nuda-firework__spark" style="--a:60deg;  --d:.1s"></span>
  <span class="nuda-firework__spark" style="--a:90deg;  --d:.15s"></span>
  <span class="nuda-firework__spark" style="--a:120deg; --d:0s"></span>
  <span class="nuda-firework__spark" style="--a:150deg; --d:.05s"></span>
  <span class="nuda-firework__spark" style="--a:180deg; --d:.1s"></span>
  <span class="nuda-firework__spark" style="--a:210deg; --d:.15s"></span>
  <span class="nuda-firework__spark" style="--a:240deg; --d:0s"></span>
  <span class="nuda-firework__spark" style="--a:270deg; --d:.05s"></span>
  <span class="nuda-firework__spark" style="--a:300deg; --d:.1s"></span>
  <span class="nuda-firework__spark" style="--a:330deg; --d:.15s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fireworks
   Sparks shooting outward and fading.
   Customize: --fw-color, container size. */

.nuda-firework {
  --fw-color: #e4ff54;
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-firework__spark {
  position: absolute;
  width: 2px;
  height: 14px;
  background: linear-gradient(180deg, transparent, var(--fw-color));
  border-radius: 50%;
  filter: drop-shadow(0 0 3px var(--fw-color));
  transform-origin: center 50px;
  transform: rotate(var(--a)) translateY(-30px);
  opacity: 0;
  animation: nuda-fw-shoot 2.4s cubic-bezier(0.3, 0.6, 0.2, 1) var(--d, 0s) infinite;
}

@keyframes nuda-fw-shoot {
  0%, 30%   { transform: rotate(var(--a)) translateY(0) scaleY(0.3); opacity: 0; }
  40%       { opacity: 1; }
  60%, 80%  { transform: rotate(var(--a)) translateY(-32px) scaleY(1); opacity: 1; }
  100%      { transform: rotate(var(--a)) translateY(-46px) scaleY(0.4); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-firework__spark { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Bubbles ─────────────── */
  {
    id: "bubbles",
    name: "Bubbles",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-bubbles" role="img" aria-label="Bubbles rising">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="nuda-bubbles__bubble"
            style={{
              left: `${(i * 12) + 5}%`,
              ["--s" as string]: `${(i % 3) * 4 + 6}px`,
              ["--d" as string]: `${(i * 0.4)}s`,
              ["--dur" as string]: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-bubbles{position:relative;width:100px;height:100px;background:radial-gradient(circle at center 100%,rgba(228,255,84,.12),transparent 60%);overflow:hidden;border-radius:8px}
      .nuda-bubbles__bubble{position:absolute;bottom:-12px;width:var(--s);height:var(--s);border:1.5px solid rgba(228,255,84,.6);border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(228,255,84,.3),transparent 60%);animation:_bb-rise var(--dur) ease-in var(--d) infinite}
      @keyframes _bb-rise{0%{transform:translateY(0) scale(.6);opacity:0}15%{opacity:1}80%{opacity:.8}100%{transform:translateY(-110px) scale(1);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bubbles -->
<div class="nuda-bubbles" role="img" aria-label="Bubbles rising">
  <span class="nuda-bubbles__bubble" style="left:8%;  --s:8px;  --d:0s;   --dur:4s"></span>
  <span class="nuda-bubbles__bubble" style="left:22%; --s:12px; --d:.4s;  --dur:5s"></span>
  <span class="nuda-bubbles__bubble" style="left:36%; --s:6px;  --d:.8s;  --dur:3s"></span>
  <span class="nuda-bubbles__bubble" style="left:50%; --s:10px; --d:1.2s; --dur:5s"></span>
  <span class="nuda-bubbles__bubble" style="left:64%; --s:8px;  --d:1.6s; --dur:4s"></span>
  <span class="nuda-bubbles__bubble" style="left:78%; --s:14px; --d:2s;   --dur:6s"></span>
  <span class="nuda-bubbles__bubble" style="left:92%; --s:6px;  --d:2.4s; --dur:3s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bubbles
   Translucent bubbles rising from the bottom.
   Customize: --bubble-color, container size. */

.nuda-bubbles {
  --bubble-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  background: radial-gradient(
    circle at center 100%,
    rgba(228, 255, 84, 0.12),
    transparent 60%
  );
  overflow: hidden;
  border-radius: 8px;
}

.nuda-bubbles__bubble {
  position: absolute;
  bottom: -12px;
  width: var(--s, 10px);
  height: var(--s, 10px);
  border: 1.5px solid rgba(228, 255, 84, 0.6);
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(228, 255, 84, 0.3),
    transparent 60%
  );
  animation: nuda-bubble-rise var(--dur, 4s) ease-in var(--d, 0s) infinite;
}

@keyframes nuda-bubble-rise {
  0%   { transform: translateY(0) scale(0.6); opacity: 0; }
  15%  { opacity: 1; }
  80%  { opacity: 0.8; }
  100% { transform: translateY(calc(-100% - 24px)) scale(1); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bubbles__bubble { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Stars Field ─────────────── */
  {
    id: "stars-field",
    name: "Stars Field",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-stars" role="img" aria-label="Stars field">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="nuda-stars__pt"
            style={{
              left: `${(i * 53) % 95 + 2}%`,
              top: `${(i * 89) % 90 + 5}%`,
              ["--d" as string]: `${(i % 6) * 0.3}s`,
              ["--s" as string]: `${(i % 3) + 1}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-stars{position:relative;width:100px;height:100px;background:radial-gradient(ellipse at center,rgba(228,255,84,.08),transparent 70%);overflow:hidden;border-radius:8px}
      .nuda-stars__pt{position:absolute;width:var(--s);height:var(--s);border-radius:50%;background:#fff;animation:_st-twinkle 3s ease-in-out var(--d) infinite}
      .nuda-stars__pt:nth-child(3n){background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.6)}
      @keyframes _st-twinkle{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.3)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stars Field -->
<div class="nuda-stars" role="img" aria-label="Stars field">
  <span class="nuda-stars__pt" style="left:5%;  top:8%;  --d:0s;   --s:2px"></span>
  <span class="nuda-stars__pt" style="left:18%; top:24%; --d:.3s;  --s:1px"></span>
  <span class="nuda-stars__pt" style="left:32%; top:62%; --d:.6s;  --s:3px"></span>
  <span class="nuda-stars__pt" style="left:46%; top:18%; --d:.9s;  --s:2px"></span>
  <span class="nuda-stars__pt" style="left:60%; top:80%; --d:1.2s; --s:1px"></span>
  <span class="nuda-stars__pt" style="left:74%; top:36%; --d:1.5s; --s:2px"></span>
  <span class="nuda-stars__pt" style="left:88%; top:72%; --d:1.8s; --s:3px"></span>
  <span class="nuda-stars__pt" style="left:12%; top:48%; --d:.4s;  --s:1px"></span>
  <span class="nuda-stars__pt" style="left:54%; top:54%; --d:.7s;  --s:2px"></span>
  <span class="nuda-stars__pt" style="left:82%; top:14%; --d:1s;   --s:1px"></span>
  <!-- ...add 8–20 more for density -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stars Field
   Dotted star field with gentle twinkle. Every 3rd star tinted accent.
   Customize: --star-accent, container size. */

.nuda-stars {
  --star-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  background: radial-gradient(
    ellipse at center,
    rgba(228, 255, 84, 0.08),
    transparent 70%
  );
  overflow: hidden;
  border-radius: 8px;
}

.nuda-stars__pt {
  position: absolute;
  width: var(--s, 2px);
  height: var(--s, 2px);
  border-radius: 50%;
  background: #fff;
  animation: nuda-stars-twinkle 3s ease-in-out var(--d, 0s) infinite;
}

.nuda-stars__pt:nth-child(3n) {
  background: var(--star-accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.6);
}

@keyframes nuda-stars-twinkle {
  0%, 100% { opacity: 0.2; transform: scale(0.6); }
  50%      { opacity: 1;   transform: scale(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stars__pt { animation: none; opacity: 0.7; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Falling Petals ─────────────── */
  {
    id: "falling-petals",
    name: "Falling Petals",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-petals" role="img" aria-label="Falling petals">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="nuda-petals__leaf"
            style={{
              left: `${(i * 12) + 4}%`,
              ["--d" as string]: `${(i * 0.5)}s`,
              ["--dur" as string]: `${4 + (i % 3)}s`,
              ["--r" as string]: `${(i * 47) % 360}deg`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-petals{position:relative;width:100px;height:100px;overflow:hidden;border-radius:8px;background:linear-gradient(180deg,rgba(228,255,84,.04),transparent)}
      .nuda-petals__leaf{position:absolute;top:-14px;width:10px;height:14px;background:linear-gradient(135deg,#e4ff54,rgba(228,255,84,.4));border-radius:50% 0 50% 0;animation:_pt-fall var(--dur) linear var(--d) infinite,_pt-spin var(--dur) ease-in-out var(--d) infinite}
      @keyframes _pt-fall{0%{transform:translateY(-14px) rotate(var(--r))}100%{transform:translateY(110px) rotate(calc(var(--r) + 540deg))}}
      @keyframes _pt-spin{0%,100%{margin-left:0}50%{margin-left:14px}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Falling Petals -->
<div class="nuda-petals" role="img" aria-label="Falling petals">
  <span class="nuda-petals__leaf" style="left:6%;  --d:0s;   --dur:5s; --r:0deg"></span>
  <span class="nuda-petals__leaf" style="left:20%; --d:.5s;  --dur:6s; --r:47deg"></span>
  <span class="nuda-petals__leaf" style="left:34%; --d:1s;   --dur:4s; --r:94deg"></span>
  <span class="nuda-petals__leaf" style="left:48%; --d:1.5s; --dur:5s; --r:141deg"></span>
  <span class="nuda-petals__leaf" style="left:62%; --d:2s;   --dur:6s; --r:188deg"></span>
  <span class="nuda-petals__leaf" style="left:76%; --d:2.5s; --dur:4s; --r:235deg"></span>
  <span class="nuda-petals__leaf" style="left:90%; --d:3s;   --dur:5s; --r:282deg"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Falling Petals
   Petal-shaped pieces drifting and rotating as they fall.
   Customize: --petal-color, container size. */

.nuda-petals {
  --petal-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 240px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.04), transparent);
}

.nuda-petals__leaf {
  position: absolute;
  top: -14px;
  width: 10px;
  height: 14px;
  background: linear-gradient(135deg, var(--petal-color), rgba(228, 255, 84, 0.4));
  border-radius: 50% 0 50% 0;
  animation:
    nuda-petals-fall var(--dur, 5s) linear var(--d, 0s) infinite,
    nuda-petals-spin var(--dur, 5s) ease-in-out var(--d, 0s) infinite;
}

@keyframes nuda-petals-fall {
  0%   { transform: translateY(-14px) rotate(var(--r, 0deg)); }
  100% { transform: translateY(calc(100% + 14px)) rotate(calc(var(--r, 0deg) + 540deg)); }
}

@keyframes nuda-petals-spin {
  0%, 100% { margin-left: 0; }
  50%      { margin-left: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-petals__leaf { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Comet Trail ─────────────── */
  {
    id: "comet-trail",
    name: "Comet Trail",
    category: "Particles & Effects",
    preview: (
      <div className="nuda-comet" role="img" aria-label="Comet trail">
        <span className="nuda-comet__head" />
        <span className="nuda-comet__head nuda-comet__head--b" />
      </div>
    ),
    cssInline: `
      .nuda-comet{position:relative;width:120px;height:80px;overflow:hidden;border-radius:8px;background:radial-gradient(ellipse at 30% 80%,rgba(228,255,84,.06),transparent 60%)}
      .nuda-comet__head{position:absolute;top:50%;left:0;width:6px;height:6px;border-radius:50%;background:#fff;box-shadow:0 0 8px #e4ff54,0 0 16px rgba(228,255,84,.6);animation:_cm-fly 3s linear infinite}
      .nuda-comet__head::after{content:"";position:absolute;right:6px;top:50%;width:48px;height:1.5px;background:linear-gradient(90deg,#e4ff54,transparent);transform:translateY(-50%);border-radius:50% 0 0 50%;filter:blur(.4px)}
      .nuda-comet__head--b{animation-delay:1.5s;top:30%}
      @keyframes _cm-fly{0%{transform:translate(-60px,0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(140px,-20px);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Comet Trail -->
<div class="nuda-comet" role="img" aria-label="Comet trail">
  <span class="nuda-comet__head"></span>
  <span class="nuda-comet__head nuda-comet__head--b"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Comet Trail
   Glowing dot with a streaked tail flying across.
   Customize: --comet-color, container size. */

.nuda-comet {
  --comet-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 240px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;
  background: radial-gradient(ellipse at 30% 80%, rgba(228, 255, 84, 0.06), transparent 60%);
}

.nuda-comet__head {
  position: absolute;
  top: 50%;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  box-shadow:
    0 0 8px var(--comet-color),
    0 0 16px rgba(228, 255, 84, 0.6);
  animation: nuda-comet-fly 3s linear infinite;
}

.nuda-comet__head::after {
  content: "";
  position: absolute;
  right: 6px;
  top: 50%;
  width: 48px;
  height: 1.5px;
  background: linear-gradient(90deg, var(--comet-color), transparent);
  transform: translateY(-50%);
  border-radius: 50% 0 0 50%;
  filter: blur(0.4px);
}

.nuda-comet__head--b {
  animation-delay: 1.5s;
  top: 30%;
}

@keyframes nuda-comet-fly {
  0%   { transform: translate(-60px, 0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translate(calc(100% + 60px), -20px); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-comet__head { animation: none; opacity: 0; }
}`,
      },
    ],
  },
];
