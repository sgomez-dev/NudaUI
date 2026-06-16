import type { NudaComponent } from "./types";

export const weatherAmbient: NudaComponent[] = [
  /* ─────────────── 1. Rain ─────────────── */
  {
    id: "weather-rain",
    name: "Rain",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-rain" role="img" aria-label="Falling rain">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="nuda-weather-rain__drop"
            style={{
              left: `${(i * 4.5) % 100}%`,
              ["--wr-d" as string]: `${(i % 7) * 0.12}s`,
              ["--wr-dur" as string]: `${0.7 + (i % 4) * 0.18}s`,
              ["--wr-h" as string]: `${14 + (i % 3) * 6}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-weather-rain{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#13131a,#09090b)}
      .nuda-weather-rain__drop{position:absolute;top:-20px;width:1px;height:var(--wr-h,16px);background:linear-gradient(180deg,transparent,rgba(228,255,84,.7));opacity:.7;will-change:transform;animation:_weatherRainFall var(--wr-dur,1s) linear var(--wr-d,0s) infinite}
      @keyframes _weatherRainFall{0%{transform:translate3d(0,-20px,0);opacity:0}10%{opacity:.7}100%{transform:translate3d(-10px,140px,0);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-rain__drop{animation:none;opacity:.25;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Rain (add more drops for density) -->
<div class="nuda-weather-rain" role="img" aria-label="Falling rain">
  <span class="nuda-weather-rain__drop" style="left:5%;  --wr-d:0s;   --wr-dur:.8s; --wr-h:14px"></span>
  <span class="nuda-weather-rain__drop" style="left:14%; --wr-d:.12s; --wr-dur:1s;  --wr-h:20px"></span>
  <span class="nuda-weather-rain__drop" style="left:23%; --wr-d:.24s; --wr-dur:.9s; --wr-h:16px"></span>
  <span class="nuda-weather-rain__drop" style="left:32%; --wr-d:.36s; --wr-dur:1.1s;--wr-h:14px"></span>
  <span class="nuda-weather-rain__drop" style="left:41%; --wr-d:.48s; --wr-dur:.8s; --wr-h:20px"></span>
  <span class="nuda-weather-rain__drop" style="left:50%; --wr-d:.6s;  --wr-dur:1s;  --wr-h:16px"></span>
  <span class="nuda-weather-rain__drop" style="left:59%; --wr-d:.12s; --wr-dur:.9s; --wr-h:14px"></span>
  <span class="nuda-weather-rain__drop" style="left:68%; --wr-d:.24s; --wr-dur:1.1s;--wr-h:20px"></span>
  <span class="nuda-weather-rain__drop" style="left:77%; --wr-d:.36s; --wr-dur:.8s; --wr-h:16px"></span>
  <span class="nuda-weather-rain__drop" style="left:86%; --wr-d:.48s; --wr-dur:1s;  --wr-h:14px"></span>
  <span class="nuda-weather-rain__drop" style="left:95%; --wr-d:.6s;  --wr-dur:.9s; --wr-h:20px"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Rain
   Slanted streaks falling at varying speeds.
   Customize: --rain-color, container size, individual --wr-d/--wr-dur/--wr-h. */

.nuda-weather-rain {
  --rain-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #13131a, #09090b);
}

.nuda-weather-rain__drop {
  position: absolute;
  top: -20px;
  width: 1px;
  height: var(--wr-h, 16px);
  background: linear-gradient(180deg, transparent, var(--rain-color));
  opacity: 0.7;
  will-change: transform;
  animation: nuda-weather-rain-fall var(--wr-dur, 1s) linear var(--wr-d, 0s) infinite;
}

@keyframes nuda-weather-rain-fall {
  0%   { transform: translate3d(0, -20px, 0); opacity: 0; }
  10%  { opacity: 0.7; }
  100% { transform: translate3d(-10px, 140px, 0); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-rain__drop { animation: none; opacity: 0.25; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Snow ─────────────── */
  {
    id: "weather-snow",
    name: "Snow",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-snow" role="img" aria-label="Drifting snowflakes">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="nuda-weather-snow__flake"
            style={{
              left: `${(i * 6.3) % 100}%`,
              ["--ws-d" as string]: `${(i % 6) * 0.6}s`,
              ["--ws-dur" as string]: `${4 + (i % 4)}s`,
              ["--ws-s" as string]: `${(i % 3) + 2}px`,
              ["--ws-x" as string]: `${(i % 2 ? 1 : -1) * (8 + (i % 3) * 4)}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-weather-snow{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at 50% -10%,#1c1c26,#09090b 70%)}
      .nuda-weather-snow__flake{position:absolute;top:-12px;width:var(--ws-s,3px);height:var(--ws-s,3px);border-radius:50%;background:#fafafa;opacity:.8;will-change:transform;animation:_weatherSnowFall var(--ws-dur,5s) linear var(--ws-d,0s) infinite,_weatherSnowSway var(--ws-dur,5s) ease-in-out var(--ws-d,0s) infinite alternate}
      @keyframes _weatherSnowFall{0%{transform:translateY(-12px)}100%{transform:translateY(132px)}}
      @keyframes _weatherSnowSway{0%{transform:translateX(0)}100%{transform:translateX(var(--ws-x,10px))}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-snow__flake{animation:none;opacity:.35}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Snow (each flake combines a fall + a sway track) -->
<div class="nuda-weather-snow" role="img" aria-label="Drifting snowflakes">
  <span class="nuda-weather-snow__flake" style="left:6%;  --ws-d:0s;   --ws-dur:5s; --ws-s:3px; --ws-x:-10px"></span>
  <span class="nuda-weather-snow__flake" style="left:18%; --ws-d:.6s;  --ws-dur:6s; --ws-s:4px; --ws-x:12px"></span>
  <span class="nuda-weather-snow__flake" style="left:30%; --ws-d:1.2s; --ws-dur:4s; --ws-s:2px; --ws-x:-8px"></span>
  <span class="nuda-weather-snow__flake" style="left:42%; --ws-d:1.8s; --ws-dur:7s; --ws-s:3px; --ws-x:14px"></span>
  <span class="nuda-weather-snow__flake" style="left:54%; --ws-d:2.4s; --ws-dur:5s; --ws-s:4px; --ws-x:-12px"></span>
  <span class="nuda-weather-snow__flake" style="left:66%; --ws-d:3s;   --ws-dur:6s; --ws-s:2px; --ws-x:10px"></span>
  <span class="nuda-weather-snow__flake" style="left:78%; --ws-d:.3s;  --ws-dur:4s; --ws-s:3px; --ws-x:-8px"></span>
  <span class="nuda-weather-snow__flake" style="left:90%; --ws-d:.9s;  --ws-dur:7s; --ws-s:4px; --ws-x:12px"></span>
  <!-- ...add 8–16 more for density -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Snow
   Flakes fall vertically while gently swaying sideways.
   Customize: --snow-color, container size, individual --ws-d/--ws-dur/--ws-s/--ws-x. */

.nuda-weather-snow {
  --snow-color: #fafafa;
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% -10%, #1c1c26, #09090b 70%);
}

.nuda-weather-snow__flake {
  position: absolute;
  top: -12px;
  width: var(--ws-s, 3px);
  height: var(--ws-s, 3px);
  border-radius: 50%;
  background: var(--snow-color);
  opacity: 0.8;
  will-change: transform;
  animation:
    nuda-weather-snow-fall var(--ws-dur, 5s) linear var(--ws-d, 0s) infinite,
    nuda-weather-snow-sway var(--ws-dur, 5s) ease-in-out var(--ws-d, 0s) infinite alternate;
}

@keyframes nuda-weather-snow-fall {
  0%   { transform: translateY(-12px); }
  100% { transform: translateY(132px); }
}

@keyframes nuda-weather-snow-sway {
  0%   { transform: translateX(0); }
  100% { transform: translateX(var(--ws-x, 10px)); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-snow__flake { animation: none; opacity: 0.35; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Sun Rays ─────────────── */
  {
    id: "weather-sun-rays",
    name: "Sun Rays",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-sun" role="img" aria-label="Rotating sun rays">
        <span className="nuda-weather-sun__rays" />
        <span className="nuda-weather-sun__core" />
      </div>
    ),
    cssInline: `
      .nuda-weather-sun{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:radial-gradient(circle at 50% 50%,#241f08,#09090b 70%)}
      .nuda-weather-sun__rays{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%);background:repeating-conic-gradient(from 0deg at 50% 50%,rgba(228,255,84,.22) 0deg,rgba(228,255,84,.22) 4deg,transparent 4deg,transparent 18deg);will-change:transform;animation:_weatherSunSpin 24s linear infinite}
      .nuda-weather-sun__core{position:absolute;top:50%;left:50%;width:46px;height:46px;border-radius:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,#fafafa 0 20%,#e4ff54 45%,rgba(228,255,84,.2) 70%,transparent 75%);will-change:transform,opacity;animation:_weatherSunPulse 5s ease-in-out infinite}
      @keyframes _weatherSunSpin{to{transform:translate(-50%,-50%) rotate(360deg)}}
      @keyframes _weatherSunPulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.9}50%{transform:translate(-50%,-50%) scale(1.12);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-sun__rays,.nuda-weather-sun__core{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sun Rays -->
<div class="nuda-weather-sun" role="img" aria-label="Rotating sun rays">
  <span class="nuda-weather-sun__rays"></span>
  <span class="nuda-weather-sun__core"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sun Rays
   Slowly rotating conic god-rays around a pulsing core.
   Customize: --sun-color, ray count via conic stops. */

.nuda-weather-sun {
  --sun-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #241f08, #09090b 70%);
}

.nuda-weather-sun__rays {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  background: repeating-conic-gradient(
    from 0deg at 50% 50%,
    rgba(228, 255, 84, 0.22) 0deg,
    rgba(228, 255, 84, 0.22) 4deg,
    transparent 4deg,
    transparent 18deg
  );
  will-change: transform;
  animation: nuda-weather-sun-spin 24s linear infinite;
}

.nuda-weather-sun__core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    #fafafa 0 20%,
    var(--sun-color) 45%,
    rgba(228, 255, 84, 0.2) 70%,
    transparent 75%
  );
  will-change: transform, opacity;
  animation: nuda-weather-sun-pulse 5s ease-in-out infinite;
}

@keyframes nuda-weather-sun-spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes nuda-weather-sun-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 0.9; }
  50%      { transform: translate(-50%, -50%) scale(1.12); opacity: 1;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-sun__rays,
  .nuda-weather-sun__core { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Drifting Clouds ─────────────── */
  {
    id: "weather-clouds",
    name: "Drifting Clouds",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-clouds" role="img" aria-label="Drifting clouds">
        <span className="nuda-weather-clouds__layer nuda-weather-clouds__layer--1" />
        <span className="nuda-weather-clouds__layer nuda-weather-clouds__layer--2" />
        <span className="nuda-weather-clouds__layer nuda-weather-clouds__layer--3" />
      </div>
    ),
    cssInline: `
      .nuda-weather-clouds{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#1a1d27,#09090b)}
      .nuda-weather-clouds__layer{position:absolute;left:-50%;width:200%;height:60px;background-repeat:repeat-x;will-change:transform}
      .nuda-weather-clouds__layer--1{top:18%;background-image:radial-gradient(40px 22px at 20% 60%,rgba(228,255,84,.10),transparent),radial-gradient(60px 28px at 55% 50%,rgba(250,250,250,.10),transparent),radial-gradient(50px 24px at 85% 60%,rgba(250,250,250,.08),transparent);background-size:50% 100%;opacity:.9;animation:_weatherCloudDrift 26s linear infinite}
      .nuda-weather-clouds__layer--2{top:42%;background-image:radial-gradient(70px 30px at 30% 50%,rgba(250,250,250,.12),transparent),radial-gradient(50px 24px at 70% 55%,rgba(250,250,250,.08),transparent);background-size:55% 100%;opacity:.7;animation:_weatherCloudDrift 40s linear infinite reverse}
      .nuda-weather-clouds__layer--3{top:64%;background-image:radial-gradient(90px 34px at 40% 50%,rgba(250,250,250,.07),transparent),radial-gradient(60px 26px at 80% 55%,rgba(250,250,250,.05),transparent);background-size:60% 100%;opacity:.5;animation:_weatherCloudDrift 58s linear infinite}
      @keyframes _weatherCloudDrift{0%{transform:translateX(0)}100%{transform:translateX(25%)}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-clouds__layer{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drifting Clouds (3 parallax layers) -->
<div class="nuda-weather-clouds" role="img" aria-label="Drifting clouds">
  <span class="nuda-weather-clouds__layer nuda-weather-clouds__layer--1"></span>
  <span class="nuda-weather-clouds__layer nuda-weather-clouds__layer--2"></span>
  <span class="nuda-weather-clouds__layer nuda-weather-clouds__layer--3"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drifting Clouds
   Three radial-gradient cloud bands drifting at different speeds (parallax).
   Customize: layer speeds, opacities, gradient sizes. */

.nuda-weather-clouds {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #1a1d27, #09090b);
}

.nuda-weather-clouds__layer {
  position: absolute;
  left: -50%;
  width: 200%;
  height: 60px;
  background-repeat: repeat-x;
  will-change: transform;
}

.nuda-weather-clouds__layer--1 {
  top: 18%;
  background-image:
    radial-gradient(40px 22px at 20% 60%, rgba(228, 255, 84, 0.10), transparent),
    radial-gradient(60px 28px at 55% 50%, rgba(250, 250, 250, 0.10), transparent),
    radial-gradient(50px 24px at 85% 60%, rgba(250, 250, 250, 0.08), transparent);
  background-size: 50% 100%;
  opacity: 0.9;
  animation: nuda-weather-cloud-drift 26s linear infinite;
}

.nuda-weather-clouds__layer--2 {
  top: 42%;
  background-image:
    radial-gradient(70px 30px at 30% 50%, rgba(250, 250, 250, 0.12), transparent),
    radial-gradient(50px 24px at 70% 55%, rgba(250, 250, 250, 0.08), transparent);
  background-size: 55% 100%;
  opacity: 0.7;
  animation: nuda-weather-cloud-drift 40s linear infinite reverse;
}

.nuda-weather-clouds__layer--3 {
  top: 64%;
  background-image:
    radial-gradient(90px 34px at 40% 50%, rgba(250, 250, 250, 0.07), transparent),
    radial-gradient(60px 26px at 80% 55%, rgba(250, 250, 250, 0.05), transparent);
  background-size: 60% 100%;
  opacity: 0.5;
  animation: nuda-weather-cloud-drift 58s linear infinite;
}

@keyframes nuda-weather-cloud-drift {
  0%   { transform: translateX(0); }
  100% { transform: translateX(25%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-clouds__layer { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Lightning ─────────────── */
  {
    id: "weather-lightning",
    name: "Lightning",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-lightning" role="img" aria-label="Occasional lightning flash over clouds">
        <span className="nuda-weather-lightning__sky" />
        <span className="nuda-weather-lightning__flash" />
        <span className="nuda-weather-lightning__bolt" />
      </div>
    ),
    cssInline: `
      .nuda-weather-lightning{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#101019,#09090b)}
      .nuda-weather-lightning__sky{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 20%,rgba(228,255,84,.06),transparent 70%)}
      .nuda-weather-lightning__flash{position:absolute;inset:0;background:radial-gradient(ellipse 70% 55% at 50% 25%,rgba(228,255,84,.55),rgba(250,250,250,.18) 40%,transparent 70%);opacity:0;will-change:opacity;animation:_weatherFlash 9s steps(1,end) infinite}
      .nuda-weather-lightning__bolt{position:absolute;top:14%;left:50%;width:3px;height:54px;transform:translateX(-50%);background:linear-gradient(180deg,#fafafa,#e4ff54);clip-path:polygon(45% 0,100% 38%,58% 42%,90% 100%,0 52%,42% 48%);opacity:0;filter:drop-shadow(0 0 6px rgba(228,255,84,.8));will-change:opacity;animation:_weatherBolt 9s steps(1,end) infinite}
      @keyframes _weatherFlash{0%,7%{opacity:0}1%{opacity:.9}2%{opacity:.2}3%{opacity:.7}4%{opacity:0}100%{opacity:0}}
      @keyframes _weatherBolt{0%,7%{opacity:0}1%{opacity:1}2.4%{opacity:.3}3.4%{opacity:.85}4.2%{opacity:0}100%{opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-lightning__flash,.nuda-weather-lightning__bolt{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Lightning (gentle, occasional flash — calmed under reduced motion) -->
<div class="nuda-weather-lightning" role="img" aria-label="Occasional lightning flash over clouds">
  <span class="nuda-weather-lightning__sky"></span>
  <span class="nuda-weather-lightning__flash"></span>
  <span class="nuda-weather-lightning__bolt"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Lightning
   A slow, gentle, occasional flash — the active flicker is only the first ~4%
   of a long 9s cycle, so it fires roughly once every 9s (well under 3/sec) and
   stays dark the rest of the time. Disabled entirely under reduced motion.
   Customize: --lightning-color, cycle duration (9s on both keyframes). */

.nuda-weather-lightning {
  --lightning-color: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #101019, #09090b);
}

.nuda-weather-lightning__sky {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 20%, rgba(228, 255, 84, 0.06), transparent 70%);
}

.nuda-weather-lightning__flash {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 70% 55% at 50% 25%,
    rgba(228, 255, 84, 0.55),
    rgba(250, 250, 250, 0.18) 40%,
    transparent 70%
  );
  opacity: 0;
  will-change: opacity;
  animation: nuda-weather-flash 9s steps(1, end) infinite;
}

.nuda-weather-lightning__bolt {
  position: absolute;
  top: 14%;
  left: 50%;
  width: 3px;
  height: 54px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #fafafa, var(--lightning-color));
  clip-path: polygon(45% 0, 100% 38%, 58% 42%, 90% 100%, 0 52%, 42% 48%);
  opacity: 0;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.8));
  will-change: opacity;
  animation: nuda-weather-bolt 9s steps(1, end) infinite;
}

/* Only the first ~4% of the cycle lights up; the remaining ~96% is dark. */
@keyframes nuda-weather-flash {
  0%, 7%, 100% { opacity: 0; }
  1%  { opacity: 0.9; }
  2%  { opacity: 0.2; }
  3%  { opacity: 0.7; }
  4%  { opacity: 0; }
}

@keyframes nuda-weather-bolt {
  0%, 7%, 100% { opacity: 0; }
  1%   { opacity: 1; }
  2.4% { opacity: 0.3; }
  3.4% { opacity: 0.85; }
  4.2% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-lightning__flash,
  .nuda-weather-lightning__bolt { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Fog ─────────────── */
  {
    id: "weather-fog",
    name: "Fog",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-fog" role="img" aria-label="Rolling fog">
        <span className="nuda-weather-fog__layer nuda-weather-fog__layer--1" />
        <span className="nuda-weather-fog__layer nuda-weather-fog__layer--2" />
        <span className="nuda-weather-fog__layer nuda-weather-fog__layer--3" />
      </div>
    ),
    cssInline: `
      .nuda-weather-fog{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#0e0e14,#09090b)}
      .nuda-weather-fog__layer{position:absolute;left:-50%;width:200%;height:100%;background-repeat:repeat-x;filter:blur(8px);will-change:transform}
      .nuda-weather-fog__layer--1{background-image:radial-gradient(120px 50px at 30% 60%,rgba(250,250,250,.10),transparent),radial-gradient(140px 60px at 75% 70%,rgba(250,250,250,.08),transparent);background-size:60% 100%;opacity:.8;animation:_weatherFogRoll 28s ease-in-out infinite alternate}
      .nuda-weather-fog__layer--2{background-image:radial-gradient(160px 70px at 50% 55%,rgba(228,255,84,.06),transparent),radial-gradient(130px 55px at 85% 65%,rgba(250,250,250,.07),transparent);background-size:65% 100%;opacity:.6;animation:_weatherFogRoll 40s ease-in-out infinite alternate-reverse}
      .nuda-weather-fog__layer--3{background-image:radial-gradient(180px 80px at 40% 80%,rgba(250,250,250,.06),transparent);background-size:70% 100%;opacity:.45;animation:_weatherFogRoll 56s ease-in-out infinite alternate}
      @keyframes _weatherFogRoll{0%{transform:translateX(-12%)}100%{transform:translateX(12%)}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-fog__layer{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Fog (3 blurred layers rolling at different speeds) -->
<div class="nuda-weather-fog" role="img" aria-label="Rolling fog">
  <span class="nuda-weather-fog__layer nuda-weather-fog__layer--1"></span>
  <span class="nuda-weather-fog__layer nuda-weather-fog__layer--2"></span>
  <span class="nuda-weather-fog__layer nuda-weather-fog__layer--3"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fog
   Soft, blurred gradient banks rolling slowly back and forth.
   Customize: blur amount, layer opacities/speeds. */

.nuda-weather-fog {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #0e0e14, #09090b);
}

.nuda-weather-fog__layer {
  position: absolute;
  left: -50%;
  width: 200%;
  height: 100%;
  background-repeat: repeat-x;
  filter: blur(8px);
  will-change: transform;
}

.nuda-weather-fog__layer--1 {
  background-image:
    radial-gradient(120px 50px at 30% 60%, rgba(250, 250, 250, 0.10), transparent),
    radial-gradient(140px 60px at 75% 70%, rgba(250, 250, 250, 0.08), transparent);
  background-size: 60% 100%;
  opacity: 0.8;
  animation: nuda-weather-fog-roll 28s ease-in-out infinite alternate;
}

.nuda-weather-fog__layer--2 {
  background-image:
    radial-gradient(160px 70px at 50% 55%, rgba(228, 255, 84, 0.06), transparent),
    radial-gradient(130px 55px at 85% 65%, rgba(250, 250, 250, 0.07), transparent);
  background-size: 65% 100%;
  opacity: 0.6;
  animation: nuda-weather-fog-roll 40s ease-in-out infinite alternate-reverse;
}

.nuda-weather-fog__layer--3 {
  background-image:
    radial-gradient(180px 80px at 40% 80%, rgba(250, 250, 250, 0.06), transparent);
  background-size: 70% 100%;
  opacity: 0.45;
  animation: nuda-weather-fog-roll 56s ease-in-out infinite alternate;
}

@keyframes nuda-weather-fog-roll {
  0%   { transform: translateX(-12%); }
  100% { transform: translateX(12%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-fog__layer { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Starfield ─────────────── */
  {
    id: "weather-stars",
    name: "Starfield",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-stars" role="img" aria-label="Twinkling starfield">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="nuda-weather-stars__pt"
            style={{
              left: `${(i * 53) % 96 + 2}%`,
              top: `${(i * 71) % 92 + 4}%`,
              ["--wst-d" as string]: `${(i % 7) * 0.45}s`,
              ["--wst-dur" as string]: `${2.4 + (i % 4) * 0.6}s`,
              ["--wst-s" as string]: `${(i % 3) + 1}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-weather-stars{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at 50% 30%,#15151f,#09090b 75%)}
      .nuda-weather-stars__pt{position:absolute;width:var(--wst-s,2px);height:var(--wst-s,2px);border-radius:50%;background:#fafafa;will-change:transform,opacity;animation:_weatherStarTwinkle var(--wst-dur,3s) ease-in-out var(--wst-d,0s) infinite}
      .nuda-weather-stars__pt:nth-child(4n){background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.7)}
      @keyframes _weatherStarTwinkle{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.3)}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-stars__pt{animation:none;opacity:.7}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Starfield (every 4th star tinted accent) -->
<div class="nuda-weather-stars" role="img" aria-label="Twinkling starfield">
  <span class="nuda-weather-stars__pt" style="left:5%;  top:8%;  --wst-d:0s;   --wst-dur:2.6s; --wst-s:2px"></span>
  <span class="nuda-weather-stars__pt" style="left:18%; top:24%; --wst-d:.45s; --wst-dur:3s;   --wst-s:1px"></span>
  <span class="nuda-weather-stars__pt" style="left:32%; top:62%; --wst-d:.9s;  --wst-dur:3.6s; --wst-s:3px"></span>
  <span class="nuda-weather-stars__pt" style="left:46%; top:18%; --wst-d:1.35s;--wst-dur:2.4s; --wst-s:2px"></span>
  <span class="nuda-weather-stars__pt" style="left:60%; top:80%; --wst-d:1.8s; --wst-dur:3s;   --wst-s:1px"></span>
  <span class="nuda-weather-stars__pt" style="left:74%; top:36%; --wst-d:2.25s;--wst-dur:3.6s; --wst-s:2px"></span>
  <span class="nuda-weather-stars__pt" style="left:88%; top:72%; --wst-d:2.7s; --wst-dur:2.4s; --wst-s:3px"></span>
  <span class="nuda-weather-stars__pt" style="left:12%; top:48%; --wst-d:.6s;  --wst-dur:3s;   --wst-s:1px"></span>
  <span class="nuda-weather-stars__pt" style="left:54%; top:54%; --wst-d:1.1s; --wst-dur:3.6s; --wst-s:2px"></span>
  <span class="nuda-weather-stars__pt" style="left:82%; top:14%; --wst-d:1.5s; --wst-dur:2.4s; --wst-s:1px"></span>
  <!-- ...add 10–20 more for density -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Starfield
   Twinkling dotted star field. Every 4th star is tinted accent + glows.
   Customize: --star-accent, container size, individual --wst-d/--wst-dur/--wst-s. */

.nuda-weather-stars {
  --star-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 30%, #15151f, #09090b 75%);
}

.nuda-weather-stars__pt {
  position: absolute;
  width: var(--wst-s, 2px);
  height: var(--wst-s, 2px);
  border-radius: 50%;
  background: #fafafa;
  will-change: transform, opacity;
  animation: nuda-weather-star-twinkle var(--wst-dur, 3s) ease-in-out var(--wst-d, 0s) infinite;
}

.nuda-weather-stars__pt:nth-child(4n) {
  background: var(--star-accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.7);
}

@keyframes nuda-weather-star-twinkle {
  0%, 100% { opacity: 0.2; transform: scale(0.6); }
  50%      { opacity: 1;   transform: scale(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-stars__pt { animation: none; opacity: 0.7; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Aurora Sky ─────────────── */
  {
    id: "weather-aurora-sky",
    name: "Aurora Sky",
    category: "Weather & Ambient",
    preview: (
      <div className="nuda-weather-aurora" role="img" aria-label="Ambient aurora curtain">
        <span className="nuda-weather-aurora__band nuda-weather-aurora__band--1" />
        <span className="nuda-weather-aurora__band nuda-weather-aurora__band--2" />
        <span className="nuda-weather-aurora__band nuda-weather-aurora__band--3" />
        <span className="nuda-weather-aurora__stars" />
      </div>
    ),
    cssInline: `
      .nuda-weather-aurora{position:relative;width:100%;max-width:200px;height:120px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#0a0a14,#09090b)}
      .nuda-weather-aurora__stars{position:absolute;inset:0;background-image:radial-gradient(1px 1px at 18% 22%,#fafafa,transparent),radial-gradient(1px 1px at 64% 14%,#fafafa,transparent),radial-gradient(1px 1px at 82% 32%,#fafafa,transparent),radial-gradient(1px 1px at 40% 18%,#fafafa,transparent);opacity:.5}
      .nuda-weather-aurora__band{position:absolute;left:-30%;width:160%;height:70%;top:0;border-radius:50%;filter:blur(22px);mix-blend-mode:screen;opacity:.55;will-change:transform}
      .nuda-weather-aurora__band--1{background:linear-gradient(90deg,transparent,#e4ff54,#22c55e,transparent);animation:_weatherAuroraSway 14s ease-in-out infinite alternate}
      .nuda-weather-aurora__band--2{background:linear-gradient(90deg,transparent,#22d3ee,#e4ff54,transparent);top:10%;animation:_weatherAuroraSway 18s ease-in-out infinite alternate-reverse}
      .nuda-weather-aurora__band--3{background:linear-gradient(90deg,transparent,#a855f7,#22d3ee,transparent);top:22%;animation:_weatherAuroraSway 22s ease-in-out infinite alternate}
      @keyframes _weatherAuroraSway{0%{transform:translateX(-12%) scaleY(.8) skewX(-6deg)}100%{transform:translateX(12%) scaleY(1.15) skewX(6deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-weather-aurora__band{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Aurora Sky (3 swaying curtain bands over a faint starfield) -->
<div class="nuda-weather-aurora" role="img" aria-label="Ambient aurora curtain">
  <span class="nuda-weather-aurora__band nuda-weather-aurora__band--1"></span>
  <span class="nuda-weather-aurora__band nuda-weather-aurora__band--2"></span>
  <span class="nuda-weather-aurora__band nuda-weather-aurora__band--3"></span>
  <span class="nuda-weather-aurora__stars"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Aurora Sky
   Three blurred, screen-blended curtain bands sway over a faint starfield.
   The lime accent leads band 1. Customize: band colors, sway speeds. */

.nuda-weather-aurora {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 5 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #0a0a14, #09090b);
}

.nuda-weather-aurora__stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 18% 22%, #fafafa, transparent),
    radial-gradient(1px 1px at 64% 14%, #fafafa, transparent),
    radial-gradient(1px 1px at 82% 32%, #fafafa, transparent),
    radial-gradient(1px 1px at 40% 18%, #fafafa, transparent);
  opacity: 0.5;
}

.nuda-weather-aurora__band {
  position: absolute;
  left: -30%;
  top: 0;
  width: 160%;
  height: 70%;
  border-radius: 50%;
  filter: blur(22px);
  mix-blend-mode: screen;
  opacity: 0.55;
  will-change: transform;
}

.nuda-weather-aurora__band--1 {
  background: linear-gradient(90deg, transparent, #e4ff54, #22c55e, transparent);
  animation: nuda-weather-aurora-sway 14s ease-in-out infinite alternate;
}

.nuda-weather-aurora__band--2 {
  top: 10%;
  background: linear-gradient(90deg, transparent, #22d3ee, #e4ff54, transparent);
  animation: nuda-weather-aurora-sway 18s ease-in-out infinite alternate-reverse;
}

.nuda-weather-aurora__band--3 {
  top: 22%;
  background: linear-gradient(90deg, transparent, #a855f7, #22d3ee, transparent);
  animation: nuda-weather-aurora-sway 22s ease-in-out infinite alternate;
}

@keyframes nuda-weather-aurora-sway {
  0%   { transform: translateX(-12%) scaleY(0.8)  skewX(-6deg); }
  100% { transform: translateX(12%)  scaleY(1.15) skewX(6deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-weather-aurora__band { animation: none; }
}`,
      },
    ],
  },
];
