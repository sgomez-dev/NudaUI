import type { NudaComponent } from "./types";

const CAT = "Weather & Ambient";

export const weatherAmbientExtra: NudaComponent[] = [
  /* ─────────────── 1. Thunderstorm Card ─────────────── */
  {
    id: "wa2-thunderstorm",
    name: "Thunderstorm Card",
    category: CAT,
    preview: (
      <div className="nuda-wa2-thunderstorm" role="img" aria-label="Thunderstorm with occasional lightning">
        <span className="nuda-wa2-thunderstorm__cloud" />
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="nuda-wa2-thunderstorm__drop"
            style={{
              left: `${(i * 11) % 96 + 2}%`,
              ["--t2-d" as string]: `${(i % 5) * 0.14}s`,
              ["--t2-dur" as string]: `${0.7 + (i % 3) * 0.15}s`,
            }}
          />
        ))}
        <span className="nuda-wa2-thunderstorm__flash" />
        <span className="nuda-wa2-thunderstorm__bolt" />
      </div>
    ),
    cssInline: `
      .nuda-wa2-thunderstorm{position:relative;width:100%;max-width:220px;height:130px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#0c0c12,#09090b)}
      .nuda-wa2-thunderstorm__cloud{position:absolute;top:-18px;left:10%;width:80%;height:46px;border-radius:50%;background:#1c1c24;box-shadow:40px 6px 0 -6px #1c1c24,80px -4px 0 -10px #17171d,-20px 10px 0 -8px #17171d;opacity:.9}
      .nuda-wa2-thunderstorm__drop{position:absolute;top:26px;width:1px;height:16px;background:linear-gradient(180deg,transparent,rgba(228,255,84,.6));opacity:.6;will-change:transform;animation:_nuda-wa2thunderstormRain var(--t2-dur,.9s) linear var(--t2-d,0s) infinite}
      .nuda-wa2-thunderstorm__flash{position:absolute;inset:0;background:radial-gradient(ellipse 75% 60% at 50% 30%,rgba(250,250,250,.7),rgba(228,255,84,.25) 45%,transparent 70%);opacity:0;will-change:opacity;animation:_nuda-wa2thunderstormFlash 7s steps(1,end) infinite}
      .nuda-wa2-thunderstorm__bolt{position:absolute;top:20%;left:48%;width:4px;height:60px;background:linear-gradient(180deg,#fafafa,#e4ff54);clip-path:polygon(50% 0,100% 40%,55% 45%,95% 100%,0 55%,45% 50%);opacity:0;filter:drop-shadow(0 0 8px rgba(228,255,84,.9));will-change:opacity;animation:_nuda-wa2thunderstormBolt 7s steps(1,end) infinite}
      @keyframes _nuda-wa2thunderstormRain{0%{transform:translate3d(0,-10px,0);opacity:0}10%{opacity:.6}100%{transform:translate3d(-8px,120px,0);opacity:0}}
      @keyframes _nuda-wa2thunderstormFlash{0%,6%,100%{opacity:0}1%{opacity:.85}2%{opacity:.15}3%{opacity:.6}4%{opacity:0}}
      @keyframes _nuda-wa2thunderstormBolt{0%,6%,100%{opacity:0}1%{opacity:1}2%{opacity:.2}3%{opacity:.8}4%{opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-thunderstorm__drop{animation:none;opacity:.25;transform:none}.nuda-wa2-thunderstorm__flash,.nuda-wa2-thunderstorm__bolt{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Thunderstorm Card (rain + a single gentle flash per ~7s cycle) -->
<div class="nuda-wa2-thunderstorm" role="img" aria-label="Thunderstorm with occasional lightning">
  <span class="nuda-wa2-thunderstorm__cloud"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:4%;  --t2-d:0s;   --t2-dur:.8s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:15%; --t2-d:.14s; --t2-dur:.95s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:26%; --t2-d:.28s; --t2-dur:1.1s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:37%; --t2-d:.42s; --t2-dur:.8s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:48%; --t2-d:.56s; --t2-dur:.95s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:59%; --t2-d:0s;   --t2-dur:1.1s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:70%; --t2-d:.14s; --t2-dur:.8s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:81%; --t2-d:.28s; --t2-dur:.95s"></span>
  <span class="nuda-wa2-thunderstorm__drop" style="left:92%; --t2-d:.42s; --t2-dur:1.1s"></span>
  <span class="nuda-wa2-thunderstorm__flash"></span>
  <span class="nuda-wa2-thunderstorm__bolt"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Heat Haze Shimmer ─────────────── */
  {
    id: "wa2-heat-haze",
    name: "Heat Haze Shimmer",
    category: CAT,
    preview: (
      <div className="nuda-wa2-heat-haze" role="img" aria-label="Heat haze rising from hot ground">
        <span className="nuda-wa2-heat-haze__sun" />
        <span className="nuda-wa2-heat-haze__ground" />
        <span className="nuda-wa2-heat-haze__wave nuda-wa2-heat-haze__wave--1" />
        <span className="nuda-wa2-heat-haze__wave nuda-wa2-heat-haze__wave--2" />
        <span className="nuda-wa2-heat-haze__wave nuda-wa2-heat-haze__wave--3" />
      </div>
    ),
    cssInline: `
      .nuda-wa2-heat-haze{position:relative;width:100%;max-width:220px;height:130px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#1a1206 0%,#241a08 55%,#0f0b04 100%)}
      .nuda-wa2-heat-haze__sun{position:absolute;top:16px;left:50%;width:34px;height:34px;border-radius:50%;transform:translateX(-50%);background:radial-gradient(circle,#fafafa 0 25%,#e4ff54 55%,rgba(228,255,84,.15) 75%,transparent 80%);will-change:opacity;animation:_nuda-wa2heatHazeSun 4s ease-in-out infinite}
      .nuda-wa2-heat-haze__ground{position:absolute;left:0;right:0;bottom:0;height:40%;background:linear-gradient(180deg,rgba(228,255,84,.06),rgba(9,9,11,.9))}
      .nuda-wa2-heat-haze__wave{position:absolute;left:-10%;width:120%;height:22px;background:linear-gradient(180deg,rgba(255,255,255,.10),transparent);filter:blur(6px);opacity:.5;will-change:transform,opacity;transform-origin:50% 100%}
      .nuda-wa2-heat-haze__wave--1{bottom:8%;animation:_nuda-wa2heatHazeRise 2.4s ease-in-out infinite}
      .nuda-wa2-heat-haze__wave--2{bottom:20%;animation:_nuda-wa2heatHazeRise 3s ease-in-out infinite .4s}
      .nuda-wa2-heat-haze__wave--3{bottom:34%;animation:_nuda-wa2heatHazeRise 3.6s ease-in-out infinite .8s}
      @keyframes _nuda-wa2heatHazeRise{0%,100%{transform:scaleY(1) translateY(0);opacity:.35}50%{transform:scaleY(1.6) translateY(-6px);opacity:.6}}
      @keyframes _nuda-wa2heatHazeSun{0%,100%{opacity:.85}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-heat-haze__wave,.nuda-wa2-heat-haze__sun{animation:none;opacity:.4}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Heat Haze Shimmer (blurred bands rising off hot ground) -->
<div class="nuda-wa2-heat-haze" role="img" aria-label="Heat haze rising from hot ground">
  <span class="nuda-wa2-heat-haze__sun"></span>
  <span class="nuda-wa2-heat-haze__ground"></span>
  <span class="nuda-wa2-heat-haze__wave nuda-wa2-heat-haze__wave--1"></span>
  <span class="nuda-wa2-heat-haze__wave nuda-wa2-heat-haze__wave--2"></span>
  <span class="nuda-wa2-heat-haze__wave nuda-wa2-heat-haze__wave--3"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Hail Shower ─────────────── */
  {
    id: "wa2-hail",
    name: "Hail Shower",
    category: CAT,
    preview: (
      <div className="nuda-wa2-hail" role="img" aria-label="Falling hail">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="nuda-wa2-hail__pellet"
            style={{
              left: `${(i * 6.1) % 100}%`,
              ["--h2-d" as string]: `${(i % 6) * 0.1}s`,
              ["--h2-dur" as string]: `${0.5 + (i % 3) * 0.1}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-wa2-hail{position:relative;width:100%;max-width:210px;height:124px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#12141a,#09090b)}
      .nuda-wa2-hail__pellet{position:absolute;top:-10px;width:5px;height:5px;background:linear-gradient(135deg,#fafafa,#cfd8dc);opacity:.9;will-change:transform,opacity;animation:_nuda-wa2hailFall var(--h2-dur,.6s) cubic-bezier(.55,0,1,.45) var(--h2-d,0s) infinite}
      @keyframes _nuda-wa2hailFall{0%{transform:translate3d(0,-10px,0) rotate(45deg) scale(1);opacity:.9}82%{transform:translate3d(-4px,118px,0) rotate(45deg) scale(1);opacity:.9}90%{transform:translate3d(-4px,122px,0) rotate(45deg) scale(1.5,.5);opacity:.7}100%{transform:translate3d(-4px,122px,0) rotate(45deg) scale(1);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-hail__pellet{animation:none;opacity:.3;transform:rotate(45deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Hail Shower (fast, bouncy pellets — add more for density) -->
<div class="nuda-wa2-hail" role="img" aria-label="Falling hail">
  <span class="nuda-wa2-hail__pellet" style="left:4%;  --h2-d:0s;  --h2-dur:.5s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:14%; --h2-d:.1s; --h2-dur:.6s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:24%; --h2-d:.2s; --h2-dur:.7s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:34%; --h2-d:.3s; --h2-dur:.5s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:44%; --h2-d:.4s; --h2-dur:.6s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:54%; --h2-d:.5s; --h2-dur:.7s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:64%; --h2-d:0s;  --h2-dur:.5s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:74%; --h2-d:.1s; --h2-dur:.6s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:84%; --h2-d:.2s; --h2-dur:.7s"></span>
  <span class="nuda-wa2-hail__pellet" style="left:94%; --h2-d:.3s; --h2-dur:.5s"></span>
  <!-- ...add 6-10 more for density -->
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Tornado Funnel ─────────────── */
  {
    id: "wa2-tornado",
    name: "Tornado Funnel",
    category: CAT,
    preview: (
      <div className="nuda-wa2-tornado" role="img" aria-label="Spinning tornado funnel with flying debris">
        <span className="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--1" />
        <span className="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--2" />
        <span className="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--3" />
        <span className="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--4" />
        <span className="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--5" />
        <span className="nuda-wa2-tornado__debris" style={{ ["--td-d" as string]: "0s" }} />
        <span className="nuda-wa2-tornado__debris" style={{ ["--td-d" as string]: ".5s", left: "58%" }} />
        <span className="nuda-wa2-tornado__debris" style={{ ["--td-d" as string]: "1s", left: "42%" }} />
      </div>
    ),
    cssInline: `
      .nuda-wa2-tornado{position:relative;width:100%;max-width:200px;height:140px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#141419,#09090b 70%)}
      .nuda-wa2-tornado__ring{position:absolute;left:50%;border-radius:50%;background:repeating-conic-gradient(rgba(228,255,84,.35) 0 10deg,rgba(250,250,250,.12) 10deg 20deg);will-change:transform;opacity:.85}
      .nuda-wa2-tornado__ring--1{top:10px;width:26px;height:10px;transform:translateX(-50%);animation:_nuda-wa2tornadoSpin 1.1s linear infinite}
      .nuda-wa2-tornado__ring--2{top:34px;width:44px;height:14px;transform:translateX(-50%);animation:_nuda-wa2tornadoSpin 1.4s linear infinite reverse}
      .nuda-wa2-tornado__ring--3{top:60px;width:64px;height:18px;transform:translateX(-50%);animation:_nuda-wa2tornadoSpin 1.7s linear infinite}
      .nuda-wa2-tornado__ring--4{top:88px;width:88px;height:22px;transform:translateX(-50%);animation:_nuda-wa2tornadoSpin 2s linear infinite reverse}
      .nuda-wa2-tornado__ring--5{top:116px;width:112px;height:24px;transform:translateX(-50%);opacity:.6;animation:_nuda-wa2tornadoSpin 2.3s linear infinite}
      .nuda-wa2-tornado__debris{position:absolute;bottom:10px;left:50%;width:3px;height:3px;border-radius:50%;background:#e4ff54;will-change:transform,opacity;animation:_nuda-wa2tornadoDebris 1.6s ease-in-out var(--td-d,0s) infinite}
      @keyframes _nuda-wa2tornadoSpin{to{transform:translateX(-50%) rotate(360deg)}}
      @keyframes _nuda-wa2tornadoDebris{0%{transform:translate(-50%,0) scale(.6);opacity:0}30%{opacity:.9}100%{transform:translate(calc(-50% + 40px),-70px) scale(.2);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-tornado__ring,.nuda-wa2-tornado__debris{animation:none;opacity:.5}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tornado Funnel (5 counter-spinning rings + orbiting debris) -->
<div class="nuda-wa2-tornado" role="img" aria-label="Spinning tornado funnel with flying debris">
  <span class="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--1"></span>
  <span class="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--2"></span>
  <span class="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--3"></span>
  <span class="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--4"></span>
  <span class="nuda-wa2-tornado__ring nuda-wa2-tornado__ring--5"></span>
  <span class="nuda-wa2-tornado__debris" style="left:50%; --td-d:0s"></span>
  <span class="nuda-wa2-tornado__debris" style="left:58%; --td-d:.5s"></span>
  <span class="nuda-wa2-tornado__debris" style="left:42%; --td-d:1s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Rainbow After Rain ─────────────── */
  {
    id: "wa2-rainbow",
    name: "Rainbow After Rain",
    category: CAT,
    preview: (
      <div className="nuda-wa2-rainbow" role="img" aria-label="Rainbow arcing over fading rain">
        <span className="nuda-wa2-rainbow__sun" />
        <span className="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--1" />
        <span className="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--2" />
        <span className="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--3" />
        <span className="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--4" />
        <span className="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--5" />
        <span className="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--6" />
        <span className="nuda-wa2-rainbow__shine" />
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="nuda-wa2-rainbow__drop"
            style={{ left: `${8 + i * 8}%`, ["--rb-d" as string]: `${i * 0.3}s` }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-wa2-rainbow{position:relative;width:100%;max-width:220px;height:130px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#101418,#09090b)}
      .nuda-wa2-rainbow__sun{position:absolute;top:10px;right:16px;width:22px;height:22px;border-radius:50%;background:radial-gradient(circle,#fafafa,#e4ff54 70%,transparent 80%);opacity:.9}
      .nuda-wa2-rainbow__arc{position:absolute;left:50%;bottom:-60px;border-radius:50%;border-style:solid;border-color:transparent;transform:translateX(-50%)}
      .nuda-wa2-rainbow__arc--1{width:260px;height:260px;bottom:-150px;border-top-width:10px;border-top-color:rgba(168,85,247,.55)}
      .nuda-wa2-rainbow__arc--2{width:236px;height:236px;bottom:-136px;border-top-width:10px;border-top-color:rgba(59,130,246,.55)}
      .nuda-wa2-rainbow__arc--3{width:212px;height:212px;bottom:-122px;border-top-width:10px;border-top-color:rgba(34,211,238,.55)}
      .nuda-wa2-rainbow__arc--4{width:188px;height:188px;bottom:-108px;border-top-width:10px;border-top-color:rgba(34,197,94,.55)}
      .nuda-wa2-rainbow__arc--5{width:164px;height:164px;bottom:-94px;border-top-width:10px;border-top-color:rgba(228,255,84,.65)}
      .nuda-wa2-rainbow__arc--6{width:140px;height:140px;bottom:-80px;border-top-width:10px;border-top-color:rgba(239,68,68,.55)}
      .nuda-wa2-rainbow__shine{position:absolute;top:0;left:-40%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);will-change:transform;animation:_nuda-wa2rainbowShine 6s ease-in-out infinite}
      .nuda-wa2-rainbow__drop{position:absolute;top:0;width:1px;height:14px;background:linear-gradient(180deg,transparent,rgba(255,255,255,.35));opacity:.5;will-change:transform,opacity;animation:_nuda-wa2rainbowDrop 1.6s linear var(--rb-d,0s) infinite}
      @keyframes _nuda-wa2rainbowShine{0%{transform:translateX(0)}100%{transform:translateX(340%)}}
      @keyframes _nuda-wa2rainbowDrop{0%{transform:translateY(-14px);opacity:0}20%{opacity:.5}100%{transform:translateY(90px);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-rainbow__shine,.nuda-wa2-rainbow__drop{animation:none;opacity:.15}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Rainbow After Rain (concentric arcs, a moving sheen, and fading drops) -->
<div class="nuda-wa2-rainbow" role="img" aria-label="Rainbow arcing over fading rain">
  <span class="nuda-wa2-rainbow__sun"></span>
  <span class="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--1"></span>
  <span class="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--2"></span>
  <span class="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--3"></span>
  <span class="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--4"></span>
  <span class="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--5"></span>
  <span class="nuda-wa2-rainbow__arc nuda-wa2-rainbow__arc--6"></span>
  <span class="nuda-wa2-rainbow__shine"></span>
  <span class="nuda-wa2-rainbow__drop" style="left:8%;  --rb-d:0s"></span>
  <span class="nuda-wa2-rainbow__drop" style="left:16%; --rb-d:.3s"></span>
  <span class="nuda-wa2-rainbow__drop" style="left:24%; --rb-d:.6s"></span>
  <span class="nuda-wa2-rainbow__drop" style="left:32%; --rb-d:.9s"></span>
  <span class="nuda-wa2-rainbow__drop" style="left:40%; --rb-d:1.2s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Moon Phase Night Card ─────────────── */
  {
    id: "wa2-moon-phase",
    name: "Moon Phase Night Card",
    category: CAT,
    preview: (
      <div className="nuda-wa2-moon-phase" role="img" aria-label="Moon cycling through its phases over a starfield">
        <span className="nuda-wa2-moon-phase__stars" />
        <span className="nuda-wa2-moon-phase__moon">
          <span className="nuda-wa2-moon-phase__shadow" />
        </span>
      </div>
    ),
    cssInline: `
      .nuda-wa2-moon-phase{position:relative;width:100%;max-width:200px;height:130px;border-radius:14px;overflow:hidden;background:radial-gradient(ellipse at 50% 20%,#12121c,#09090b 75%)}
      .nuda-wa2-moon-phase__stars{position:absolute;inset:0;background-image:radial-gradient(1px 1px at 15% 70%,#fafafa,transparent),radial-gradient(1px 1px at 75% 60%,#fafafa,transparent),radial-gradient(1px 1px at 30% 85%,#fafafa,transparent),radial-gradient(1px 1px at 88% 80%,#fafafa,transparent),radial-gradient(1px 1px at 55% 90%,#fafafa,transparent);opacity:.6}
      .nuda-wa2-moon-phase__moon{position:absolute;top:30px;left:50%;width:56px;height:56px;border-radius:50%;transform:translateX(-50%);background:radial-gradient(circle at 35% 35%,#fafafa,#d8d8d0 55%,#b8b8ac 100%);box-shadow:0 0 18px rgba(250,250,250,.25);overflow:hidden}
      .nuda-wa2-moon-phase__moon::before,.nuda-wa2-moon-phase__moon::after{content:"";position:absolute;border-radius:50%;background:rgba(0,0,0,.12)}
      .nuda-wa2-moon-phase__moon::before{width:14px;height:14px;top:14px;left:10px}
      .nuda-wa2-moon-phase__moon::after{width:9px;height:9px;top:32px;left:30px}
      .nuda-wa2-moon-phase__shadow{position:absolute;top:0;left:0;width:100%;height:100%;background:#09090b;will-change:transform;animation:_nuda-wa2moonPhaseCycle 18s ease-in-out infinite}
      @keyframes _nuda-wa2moonPhaseCycle{0%{transform:translateX(-100%)}50%{transform:translateX(0)}100%{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-moon-phase__shadow{animation:none;transform:translateX(-30%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Moon Phase Night Card (a dark disc slides across the moon, slowly) -->
<div class="nuda-wa2-moon-phase" role="img" aria-label="Moon cycling through its phases over a starfield">
  <span class="nuda-wa2-moon-phase__stars"></span>
  <span class="nuda-wa2-moon-phase__moon">
    <span class="nuda-wa2-moon-phase__shadow"></span>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Sunrise Sunset Sweep ─────────────── */
  {
    id: "wa2-sunset-sweep",
    name: "Sunrise Sunset Sweep",
    category: CAT,
    preview: (
      <div className="nuda-wa2-sunset-sweep" role="img" aria-label="Sky sweeping through sunrise and sunset colors">
        <span className="nuda-wa2-sunset-sweep__sun" />
        <span className="nuda-wa2-sunset-sweep__horizon" />
      </div>
    ),
    cssInline: `
      .nuda-wa2-sunset-sweep{position:relative;width:100%;max-width:220px;height:130px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#1a1030,#3a1d4a 25%,#a83e3e 50%,#e4823f 70%,#f4c95d 85%,#1a1030 100%);background-size:100% 300%;will-change:background-position;animation:_nuda-wa2sunsetSweepSky 16s ease-in-out infinite alternate}
      .nuda-wa2-sunset-sweep__horizon{position:absolute;left:0;right:0;bottom:0;height:22%;background:#09090b}
      .nuda-wa2-sunset-sweep__sun{position:absolute;left:50%;bottom:18%;width:36px;height:36px;border-radius:50%;background:radial-gradient(circle,#fff8dc,#e4ff54 60%,rgba(228,255,84,.2) 78%,transparent 82%);will-change:transform;animation:_nuda-wa2sunsetSweepSun 16s ease-in-out infinite alternate}
      @keyframes _nuda-wa2sunsetSweepSky{0%{background-position:0 0}100%{background-position:0 100%}}
      @keyframes _nuda-wa2sunsetSweepSun{0%{transform:translate(-50%,40px)}100%{transform:translate(-50%,-30px)}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-sunset-sweep{animation:none;background-position:0 40%}.nuda-wa2-sunset-sweep__sun{animation:none;transform:translate(-50%,0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sunrise Sunset Sweep (background-position drives the sky's color shift) -->
<div class="nuda-wa2-sunset-sweep" role="img" aria-label="Sky sweeping through sunrise and sunset colors">
  <span class="nuda-wa2-sunset-sweep__sun"></span>
  <span class="nuda-wa2-sunset-sweep__horizon"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Wind Gust With Swaying Tree ─────────────── */
  {
    id: "wa2-wind-gust",
    name: "Wind Gust With Swaying Tree",
    category: CAT,
    preview: (
      <div className="nuda-wa2-wind-gust" role="img" aria-label="Wind gusts blowing past a swaying tree">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="nuda-wa2-wind-gust__streak"
            style={{
              top: `${18 + i * 18}%`,
              ["--wg-d" as string]: `${i * 0.3}s`,
              ["--wg-dur" as string]: `${1.3 + (i % 3) * 0.2}s`,
            }}
          />
        ))}
        <span className="nuda-wa2-wind-gust__tree">
          <span className="nuda-wa2-wind-gust__trunk" />
          <span className="nuda-wa2-wind-gust__foliage nuda-wa2-wind-gust__foliage--1" />
          <span className="nuda-wa2-wind-gust__foliage nuda-wa2-wind-gust__foliage--2" />
          <span className="nuda-wa2-wind-gust__foliage nuda-wa2-wind-gust__foliage--3" />
        </span>
      </div>
    ),
    cssInline: `
      .nuda-wa2-wind-gust{position:relative;width:100%;max-width:220px;height:130px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#12161a,#09090b)}
      .nuda-wa2-wind-gust__streak{position:absolute;left:-40%;width:60%;height:2px;background:linear-gradient(90deg,transparent,rgba(228,255,84,.55),transparent);opacity:0;will-change:transform,opacity;animation:_nuda-wa2windGustStreak var(--wg-dur,1.6s) linear var(--wg-d,0s) infinite}
      .nuda-wa2-wind-gust__tree{position:absolute;bottom:0;left:72%;width:1px;height:1px;transform-origin:50% 100%;will-change:transform;animation:_nuda-wa2windGustSway 2.6s ease-in-out infinite}
      .nuda-wa2-wind-gust__trunk{position:absolute;bottom:0;left:-2px;width:4px;height:40px;background:linear-gradient(180deg,#4a3524,#2c1f15);border-radius:2px}
      .nuda-wa2-wind-gust__foliage{position:absolute;border-radius:50%;background:radial-gradient(circle at 35% 30%,#3a5f2a,#22381a)}
      .nuda-wa2-wind-gust__foliage--1{width:30px;height:26px;bottom:36px;left:-15px}
      .nuda-wa2-wind-gust__foliage--2{width:22px;height:20px;bottom:48px;left:-24px}
      .nuda-wa2-wind-gust__foliage--3{width:22px;height:20px;bottom:48px;left:2px}
      @keyframes _nuda-wa2windGustSway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(9deg)}}
      @keyframes _nuda-wa2windGustStreak{0%{transform:translateX(0);opacity:0}8%{opacity:.8}50%{opacity:.4}100%{transform:translateX(420px);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-wind-gust__tree{animation:none;transform:rotate(2deg)}.nuda-wa2-wind-gust__streak{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Wind Gust With Swaying Tree (streaks fly past; the tree bends with each gust) -->
<div class="nuda-wa2-wind-gust" role="img" aria-label="Wind gusts blowing past a swaying tree">
  <span class="nuda-wa2-wind-gust__streak" style="top:18%; --wg-d:0s;  --wg-dur:1.3s"></span>
  <span class="nuda-wa2-wind-gust__streak" style="top:36%; --wg-d:.3s; --wg-dur:1.5s"></span>
  <span class="nuda-wa2-wind-gust__streak" style="top:54%; --wg-d:.6s; --wg-dur:1.7s"></span>
  <span class="nuda-wa2-wind-gust__streak" style="top:72%; --wg-d:.9s; --wg-dur:1.3s"></span>
  <span class="nuda-wa2-wind-gust__streak" style="top:90%; --wg-d:1.2s;--wg-dur:1.5s"></span>
  <span class="nuda-wa2-wind-gust__tree">
    <span class="nuda-wa2-wind-gust__trunk"></span>
    <span class="nuda-wa2-wind-gust__foliage nuda-wa2-wind-gust__foliage--1"></span>
    <span class="nuda-wa2-wind-gust__foliage nuda-wa2-wind-gust__foliage--2"></span>
    <span class="nuda-wa2-wind-gust__foliage nuda-wa2-wind-gust__foliage--3"></span>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Condensation On Glass ─────────────── */
  {
    id: "wa2-condensation",
    name: "Condensation On Glass",
    category: CAT,
    preview: (
      <div className="nuda-wa2-condensation" role="img" aria-label="Condensation forming and sliding down a glass pane">
        <span className="nuda-wa2-condensation__ambient" />
        <span className="nuda-wa2-condensation__glass" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="nuda-wa2-condensation__drop"
            style={{
              left: `${10 + i * 14}%`,
              ["--cd-d" as string]: `${i * 0.6}s`,
              ["--cd-dur" as string]: `${3.4 + (i % 3) * 0.5}s`,
            }}
          >
            <span className="nuda-wa2-condensation__trail" />
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-wa2-condensation{position:relative;width:100%;max-width:200px;height:130px;border-radius:14px;overflow:hidden;background:linear-gradient(160deg,#0d1a12,#09090b 70%)}
      .nuda-wa2-condensation__ambient{position:absolute;inset:-20%;background:radial-gradient(circle at 30% 30%,rgba(228,255,84,.12),transparent 55%),radial-gradient(circle at 75% 60%,rgba(34,197,94,.10),transparent 55%);filter:blur(10px)}
      .nuda-wa2-condensation__glass{position:absolute;inset:0;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px}
      .nuda-wa2-condensation__drop{position:absolute;top:-6px;width:5px;height:6px;border-radius:50% 50% 50% 0;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.95),rgba(228,255,84,.35));opacity:0;will-change:transform,opacity;animation:_nuda-wa2condensationDrip var(--cd-dur,4s) ease-in var(--cd-d,0s) infinite}
      .nuda-wa2-condensation__trail{position:absolute;top:-14px;left:2px;width:1px;height:14px;background:linear-gradient(180deg,transparent,rgba(228,255,84,.35));transform-origin:top;opacity:0;will-change:transform,opacity;animation:_nuda-wa2condensationTrail var(--cd-dur,4s) ease-in var(--cd-d,0s) infinite}
      @keyframes _nuda-wa2condensationDrip{0%{transform:rotate(45deg) scale(0);opacity:0}8%{transform:rotate(45deg) scale(1);opacity:.9}70%{transform:translateY(70px) rotate(45deg) scale(1);opacity:.9}100%{transform:translateY(90px) rotate(45deg) scale(.8);opacity:0}}
      @keyframes _nuda-wa2condensationTrail{0%,8%{opacity:0;transform:scaleY(0) translateY(0)}20%{opacity:.5}70%{transform:scaleY(1) translateY(56px);opacity:.35}100%{opacity:0;transform:scaleY(1) translateY(76px)}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-condensation__drop{animation:none;opacity:.5;transform:rotate(45deg) scale(1)}.nuda-wa2-condensation__trail{animation:none;opacity:.2;transform:scaleY(1) translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Condensation On Glass (droplets bead up, then drip and leave a trail) -->
<div class="nuda-wa2-condensation" role="img" aria-label="Condensation forming and sliding down a glass pane">
  <span class="nuda-wa2-condensation__ambient"></span>
  <span class="nuda-wa2-condensation__glass"></span>
  <span class="nuda-wa2-condensation__drop" style="left:10%; --cd-d:0s;   --cd-dur:3.4s">
    <span class="nuda-wa2-condensation__trail"></span>
  </span>
  <span class="nuda-wa2-condensation__drop" style="left:24%; --cd-d:.6s;  --cd-dur:3.9s">
    <span class="nuda-wa2-condensation__trail"></span>
  </span>
  <span class="nuda-wa2-condensation__drop" style="left:38%; --cd-d:1.2s; --cd-dur:4.4s">
    <span class="nuda-wa2-condensation__trail"></span>
  </span>
  <span class="nuda-wa2-condensation__drop" style="left:52%; --cd-d:1.8s; --cd-dur:3.4s">
    <span class="nuda-wa2-condensation__trail"></span>
  </span>
  <span class="nuda-wa2-condensation__drop" style="left:66%; --cd-d:2.4s; --cd-dur:3.9s">
    <span class="nuda-wa2-condensation__trail"></span>
  </span>
  <span class="nuda-wa2-condensation__drop" style="left:80%; --cd-d:3s;   --cd-dur:4.4s">
    <span class="nuda-wa2-condensation__trail"></span>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. UV Index Dial ─────────────── */
  {
    id: "wa2-uv-dial",
    name: "UV Index Dial",
    category: CAT,
    preview: (
      <div className="nuda-wa2-uv-dial">
        <div className="nuda-wa2-uv-dial__gauge" aria-hidden="true">
          <span className="nuda-wa2-uv-dial__arc" />
          <span className="nuda-wa2-uv-dial__needle" />
          <span className="nuda-wa2-uv-dial__hub" />
        </div>
        <div className="nuda-wa2-uv-dial__value">
          <strong>7</strong>
          <span>UV Index · High</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-wa2-uv-dial{position:relative;width:100%;max-width:180px;height:140px;border-radius:14px;background:#111114;border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:14px;box-sizing:border-box}
      .nuda-wa2-uv-dial__gauge{position:relative;width:96px;height:52px;overflow:hidden}
      .nuda-wa2-uv-dial__arc{position:absolute;top:0;left:0;width:96px;height:96px;border-radius:50%;background:conic-gradient(from 180deg,#22c55e 0deg,#e4ff54 90deg,#f59e0b 140deg,#ef4444 180deg,transparent 180deg);mask:radial-gradient(circle,transparent 60%,#000 61%);-webkit-mask:radial-gradient(circle,transparent 60%,#000 61%)}
      .nuda-wa2-uv-dial__needle{position:absolute;bottom:0;left:50%;width:2px;height:40px;margin-left:-1px;background:#fafafa;transform-origin:50% 100%;transform:rotate(52deg);will-change:transform;animation:_nuda-wa2uvDialNeedle 6s ease-in-out infinite}
      .nuda-wa2-uv-dial__hub{position:absolute;bottom:-3px;left:50%;width:8px;height:8px;border-radius:50%;background:#fafafa;transform:translateX(-50%)}
      .nuda-wa2-uv-dial__value{text-align:center;color:#fafafa;font:600 12px/1.3 system-ui,sans-serif}
      .nuda-wa2-uv-dial__value strong{display:block;font-size:22px;color:#e4ff54}
      .nuda-wa2-uv-dial__value span{display:block;font-size:10px;color:#777;text-transform:uppercase;letter-spacing:.06em}
      @keyframes _nuda-wa2uvDialNeedle{0%,100%{transform:rotate(48deg)}50%{transform:rotate(56deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-uv-dial__needle{animation:none;transform:rotate(52deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- UV Index Dial (decorative half-circle gauge + a live numeric readout) -->
<div class="nuda-wa2-uv-dial">
  <div class="nuda-wa2-uv-dial__gauge" aria-hidden="true">
    <span class="nuda-wa2-uv-dial__arc"></span>
    <span class="nuda-wa2-uv-dial__needle"></span>
    <span class="nuda-wa2-uv-dial__hub"></span>
  </div>
  <div class="nuda-wa2-uv-dial__value">
    <strong>7</strong>
    <span>UV Index · High</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 11. Barometer Gauge ─────────────── */
  {
    id: "wa2-barometer",
    name: "Barometer Gauge",
    category: CAT,
    preview: (
      <div className="nuda-wa2-barometer">
        <div className="nuda-wa2-barometer__gauge" aria-hidden="true">
          <span className="nuda-wa2-barometer__needle" />
          <span className="nuda-wa2-barometer__hub" />
        </div>
        <div className="nuda-wa2-barometer__value">
          <strong>1013</strong>
          <span>hPa · Rising</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-wa2-barometer{position:relative;width:100%;max-width:180px;height:150px;border-radius:14px;background:#111114;border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:14px;box-sizing:border-box}
      .nuda-wa2-barometer__gauge{position:relative;width:78px;height:78px;border-radius:50%;background:repeating-conic-gradient(rgba(255,255,255,.14) 0 2deg,transparent 2deg 30deg),radial-gradient(circle,#161616,#0d0d0f 70%);border:1px solid rgba(255,255,255,.08)}
      .nuda-wa2-barometer__needle{position:absolute;top:50%;left:50%;width:2px;height:30px;margin-left:-1px;background:linear-gradient(180deg,#e4ff54,#fafafa);transform-origin:50% 0%;transform:rotate(-150deg);will-change:transform;animation:_nuda-wa2barometerNeedle 8s ease-in-out infinite}
      .nuda-wa2-barometer__hub{position:absolute;top:50%;left:50%;width:8px;height:8px;border-radius:50%;background:#fafafa;transform:translate(-50%,-50%)}
      .nuda-wa2-barometer__value{text-align:center;color:#fafafa;font:600 12px/1.3 system-ui,sans-serif}
      .nuda-wa2-barometer__value strong{display:block;font-size:20px;color:#e4ff54}
      .nuda-wa2-barometer__value span{display:block;font-size:10px;color:#777;text-transform:uppercase;letter-spacing:.05em}
      @keyframes _nuda-wa2barometerNeedle{0%,100%{transform:rotate(-158deg)}50%{transform:rotate(-142deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-barometer__needle{animation:none;transform:rotate(-150deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Barometer Gauge (ticked dial with a gently drifting needle + reading) -->
<div class="nuda-wa2-barometer">
  <div class="nuda-wa2-barometer__gauge" aria-hidden="true">
    <span class="nuda-wa2-barometer__needle"></span>
    <span class="nuda-wa2-barometer__hub"></span>
  </div>
  <div class="nuda-wa2-barometer__value">
    <strong>1013</strong>
    <span>hPa · Rising</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 12. 5-Day Forecast Strip ─────────────── */
  {
    id: "wa2-forecast-strip",
    name: "5-Day Forecast Strip",
    category: CAT,
    preview: (
      <div className="nuda-wa2-forecast-strip" role="group" aria-label="5-day weather forecast">
        <div className="nuda-wa2-forecast-strip__day" style={{ ["--fs-d" as string]: "0s" }}>
          <span className="nuda-wa2-forecast-strip__label">Mon</span>
          <span className="nuda-wa2-forecast-strip__icon" aria-hidden="true">
            <span className="nuda-wa2-forecast-strip__sun" />
          </span>
          <span className="nuda-wa2-forecast-strip__temp">24°</span>
        </div>
        <div className="nuda-wa2-forecast-strip__day" style={{ ["--fs-d" as string]: ".1s" }}>
          <span className="nuda-wa2-forecast-strip__label">Tue</span>
          <span className="nuda-wa2-forecast-strip__icon" aria-hidden="true">
            <span className="nuda-wa2-forecast-strip__sun nuda-wa2-forecast-strip__sun--sm" />
            <span className="nuda-wa2-forecast-strip__cloud" />
          </span>
          <span className="nuda-wa2-forecast-strip__temp">21°</span>
        </div>
        <div className="nuda-wa2-forecast-strip__day" style={{ ["--fs-d" as string]: ".2s" }}>
          <span className="nuda-wa2-forecast-strip__label">Wed</span>
          <span className="nuda-wa2-forecast-strip__icon" aria-hidden="true">
            <span className="nuda-wa2-forecast-strip__cloud nuda-wa2-forecast-strip__cloud--lg" />
          </span>
          <span className="nuda-wa2-forecast-strip__temp">18°</span>
        </div>
        <div className="nuda-wa2-forecast-strip__day" style={{ ["--fs-d" as string]: ".3s" }}>
          <span className="nuda-wa2-forecast-strip__label">Thu</span>
          <span className="nuda-wa2-forecast-strip__icon" aria-hidden="true">
            <span className="nuda-wa2-forecast-strip__cloud" />
            <span className="nuda-wa2-forecast-strip__drop" />
            <span className="nuda-wa2-forecast-strip__drop nuda-wa2-forecast-strip__drop--2" />
          </span>
          <span className="nuda-wa2-forecast-strip__temp">16°</span>
        </div>
        <div className="nuda-wa2-forecast-strip__day" style={{ ["--fs-d" as string]: ".4s" }}>
          <span className="nuda-wa2-forecast-strip__label">Fri</span>
          <span className="nuda-wa2-forecast-strip__icon" aria-hidden="true">
            <span className="nuda-wa2-forecast-strip__cloud nuda-wa2-forecast-strip__cloud--dark" />
            <span className="nuda-wa2-forecast-strip__bolt" />
          </span>
          <span className="nuda-wa2-forecast-strip__temp">15°</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-wa2-forecast-strip{position:relative;width:100%;max-width:300px;height:120px;border-radius:14px;background:#111114;border:1px solid rgba(255,255,255,.08);display:flex;align-items:stretch;justify-content:space-between;padding:12px 8px;box-sizing:border-box;gap:4px}
      .nuda-wa2-forecast-strip__day{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:6px;opacity:0;transform:translateY(6px);will-change:transform,opacity;animation:_nuda-wa2forecastStripIn .6s ease-out var(--fs-d,0s) forwards}
      .nuda-wa2-forecast-strip__label{font:600 10px/1 system-ui,sans-serif;color:#777;text-transform:uppercase;letter-spacing:.04em}
      .nuda-wa2-forecast-strip__icon{position:relative;width:28px;height:26px}
      .nuda-wa2-forecast-strip__temp{font:600 12px/1 system-ui,sans-serif;color:#fafafa}
      .nuda-wa2-forecast-strip__sun{position:absolute;top:2px;left:6px;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle,#fafafa,#e4ff54 70%);will-change:transform,opacity;animation:_nuda-wa2forecastStripSun 4s ease-in-out infinite}
      .nuda-wa2-forecast-strip__sun--sm{top:0;left:2px;width:12px;height:12px}
      .nuda-wa2-forecast-strip__cloud{position:absolute;bottom:2px;left:1px;width:24px;height:11px;border-radius:8px;background:#9aa0aa;box-shadow:6px -4px 0 -2px #b0b6bf,-4px -3px 0 -3px #b0b6bf}
      .nuda-wa2-forecast-strip__cloud--lg{width:26px;height:13px}
      .nuda-wa2-forecast-strip__cloud--dark{background:#5c6270;box-shadow:6px -4px 0 -2px #6d7482,-4px -3px 0 -3px #6d7482}
      .nuda-wa2-forecast-strip__drop{position:absolute;bottom:0;left:9px;width:2px;height:6px;border-radius:1px;background:#e4ff54;opacity:.8;will-change:transform,opacity;animation:_nuda-wa2forecastStripDrop 1.2s ease-in infinite}
      .nuda-wa2-forecast-strip__drop--2{left:17px;animation-delay:.4s}
      .nuda-wa2-forecast-strip__bolt{position:absolute;bottom:0;left:11px;width:6px;height:10px;background:#e4ff54;clip-path:polygon(60% 0,100% 45%,55% 50%,90% 100%,0 55%,45% 50%);opacity:.9;will-change:opacity;animation:_nuda-wa2forecastStripBolt 5s ease-in-out infinite}
      @keyframes _nuda-wa2forecastStripIn{to{opacity:1;transform:translateY(0)}}
      @keyframes _nuda-wa2forecastStripSun{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.12);opacity:1}}
      @keyframes _nuda-wa2forecastStripDrop{0%{transform:translateY(0);opacity:0}20%{opacity:.9}100%{transform:translateY(10px);opacity:0}}
      @keyframes _nuda-wa2forecastStripBolt{0%,100%{opacity:.55}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-wa2-forecast-strip__day{animation:none;opacity:1;transform:translateY(0)}.nuda-wa2-forecast-strip__sun{animation:none;opacity:1}.nuda-wa2-forecast-strip__drop{animation:none;opacity:.5;transform:translateY(4px)}.nuda-wa2-forecast-strip__bolt{animation:none;opacity:.8}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- 5-Day Forecast Strip (staggered fade-in cards with tiny animated glyphs) -->
<div class="nuda-wa2-forecast-strip" role="group" aria-label="5-day weather forecast">
  <div class="nuda-wa2-forecast-strip__day" style="--fs-d:0s">
    <span class="nuda-wa2-forecast-strip__label">Mon</span>
    <span class="nuda-wa2-forecast-strip__icon" aria-hidden="true">
      <span class="nuda-wa2-forecast-strip__sun"></span>
    </span>
    <span class="nuda-wa2-forecast-strip__temp">24°</span>
  </div>
  <div class="nuda-wa2-forecast-strip__day" style="--fs-d:.1s">
    <span class="nuda-wa2-forecast-strip__label">Tue</span>
    <span class="nuda-wa2-forecast-strip__icon" aria-hidden="true">
      <span class="nuda-wa2-forecast-strip__sun nuda-wa2-forecast-strip__sun--sm"></span>
      <span class="nuda-wa2-forecast-strip__cloud"></span>
    </span>
    <span class="nuda-wa2-forecast-strip__temp">21°</span>
  </div>
  <div class="nuda-wa2-forecast-strip__day" style="--fs-d:.2s">
    <span class="nuda-wa2-forecast-strip__label">Wed</span>
    <span class="nuda-wa2-forecast-strip__icon" aria-hidden="true">
      <span class="nuda-wa2-forecast-strip__cloud nuda-wa2-forecast-strip__cloud--lg"></span>
    </span>
    <span class="nuda-wa2-forecast-strip__temp">18°</span>
  </div>
  <div class="nuda-wa2-forecast-strip__day" style="--fs-d:.3s">
    <span class="nuda-wa2-forecast-strip__label">Thu</span>
    <span class="nuda-wa2-forecast-strip__icon" aria-hidden="true">
      <span class="nuda-wa2-forecast-strip__cloud"></span>
      <span class="nuda-wa2-forecast-strip__drop"></span>
      <span class="nuda-wa2-forecast-strip__drop nuda-wa2-forecast-strip__drop--2"></span>
    </span>
    <span class="nuda-wa2-forecast-strip__temp">16°</span>
  </div>
  <div class="nuda-wa2-forecast-strip__day" style="--fs-d:.4s">
    <span class="nuda-wa2-forecast-strip__label">Fri</span>
    <span class="nuda-wa2-forecast-strip__icon" aria-hidden="true">
      <span class="nuda-wa2-forecast-strip__cloud nuda-wa2-forecast-strip__cloud--dark"></span>
      <span class="nuda-wa2-forecast-strip__bolt"></span>
    </span>
    <span class="nuda-wa2-forecast-strip__temp">15°</span>
  </div>
</div>`,
      },
    ],
  },
];
