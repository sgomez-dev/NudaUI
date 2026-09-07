import type { NudaComponent } from "./types";

const CAT = "Particles & Effects";

export const particlesExtra: NudaComponent[] = [
  /* ─────────────── 1. Ember Rise ─────────────── */
  {
    id: "pt2-ember-rise",
    name: "Ember Rise",
    category: CAT,
    preview: (
      <div className="nuda-pt2-ember-rise" role="img" aria-label="Embers rising from a hot surface">
        <span className="nuda-pt2-ember-rise__bed" aria-hidden="true" />
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="nuda-pt2-ember-rise__spark"
            style={{
              left: `${8 + i * 9}%`,
              ["--s" as string]: `${(i % 3) + 2}px`,
              ["--d" as string]: `${(i * 0.35).toFixed(2)}s`,
              ["--dur" as string]: `${2.2 + (i % 3) * 0.4}s`,
              ["--x" as string]: `${((i % 4) - 1.5) * 10}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-ember-rise{position:relative;width:100%;max-width:220px;aspect-ratio:11/8;overflow:hidden;border-radius:8px;background:linear-gradient(180deg,#0a0a0a 0%,#161005 100%)}
      .nuda-pt2-ember-rise__bed{position:absolute;left:0;right:0;bottom:0;height:18%;background:linear-gradient(180deg,rgba(228,255,84,.5),rgba(228,140,20,.15) 60%,transparent);filter:blur(2px)}
      .nuda-pt2-ember-rise__spark{position:absolute;bottom:14%;width:var(--s);height:var(--s);border-radius:50%;background:#e4ff54;box-shadow:0 0 6px #e4ff54,0 0 12px rgba(228,150,20,.6);opacity:0;animation:_nuda-pt2emberrise var(--dur) ease-in var(--d) infinite;will-change:transform,opacity}
      @keyframes _nuda-pt2emberrise{0%{transform:translate(0,0) scale(1);opacity:0}10%{opacity:1}55%{background:#ffb545}100%{transform:translate(var(--x),-95px) scale(.3);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-ember-rise__spark{animation:none !important;opacity:.7;bottom:40%}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ember Rise -->
<div class="nuda-pt2-ember-rise" role="img" aria-label="Embers rising from a hot surface">
  <span class="nuda-pt2-ember-rise__bed" aria-hidden="true"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:8%;  --s:3px; --d:0s;    --dur:2.2s; --x:-15px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:17%; --s:4px; --d:.35s;  --dur:2.6s; --x:-5px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:26%; --s:2px; --d:.7s;   --dur:3s;   --x:5px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:35%; --s:3px; --d:1.05s; --dur:2.2s; --x:15px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:44%; --s:4px; --d:1.4s;  --dur:2.6s; --x:-15px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:53%; --s:2px; --d:1.75s; --dur:3s;   --x:-5px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:62%; --s:3px; --d:2.1s;  --dur:2.2s; --x:5px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:71%; --s:4px; --d:2.45s; --dur:2.6s; --x:15px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:80%; --s:2px; --d:2.8s;  --dur:3s;   --x:-15px"></span>
  <span class="nuda-pt2-ember-rise__spark" style="left:89%; --s:3px; --d:3.15s; --dur:2.2s; --x:-5px"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Dust Motes in Light Shaft ─────────────── */
  {
    id: "pt2-dust-shaft",
    name: "Dust Motes in Light Shaft",
    category: CAT,
    preview: (
      <div className="nuda-pt2-dust-shaft" role="img" aria-label="Dust motes drifting through a light shaft">
        <span className="nuda-pt2-dust-shaft__beam" aria-hidden="true" />
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="nuda-pt2-dust-shaft__mote"
            style={{
              left: `${10 + ((i * 37) % 80)}%`,
              top: `${5 + ((i * 53) % 85)}%`,
              ["--s" as string]: `${(i % 3) + 1}px`,
              ["--d" as string]: `${(i * 0.5).toFixed(2)}s`,
              ["--dur" as string]: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-dust-shaft{position:relative;width:100%;max-width:220px;aspect-ratio:11/8;overflow:hidden;border-radius:8px;background:#0a0a0a}
      .nuda-pt2-dust-shaft__beam{position:absolute;top:-20%;left:20%;width:60%;height:140%;background:linear-gradient(200deg,rgba(228,255,84,.16),rgba(228,255,84,.03) 55%,transparent 75%);transform:skewX(-14deg);filter:blur(1px)}
      .nuda-pt2-dust-shaft__mote{position:absolute;width:var(--s);height:var(--s);border-radius:50%;background:rgba(228,255,84,.85);box-shadow:0 0 3px rgba(228,255,84,.6);opacity:0;animation:_nuda-pt2dustshaft var(--dur) ease-in-out var(--d) infinite}
      @keyframes _nuda-pt2dustshaft{0%{transform:translate(0,0);opacity:0}10%{opacity:.9}50%{transform:translate(10px,-14px);opacity:.5}90%{opacity:.9}100%{transform:translate(-6px,10px);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-dust-shaft__mote{animation:none !important;opacity:.6}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Dust Motes in Light Shaft -->
<div class="nuda-pt2-dust-shaft" role="img" aria-label="Dust motes drifting through a light shaft">
  <span class="nuda-pt2-dust-shaft__beam" aria-hidden="true"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:12%; top:8%;  --s:2px; --d:0s;   --dur:6s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:30%; top:24%; --s:1px; --d:.5s;  --dur:7s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:48%; top:12%; --s:3px; --d:1s;   --dur:8s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:66%; top:40%; --s:2px; --d:1.5s; --dur:9s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:20%; top:55%; --s:1px; --d:2s;   --dur:6s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:74%; top:65%; --s:2px; --d:2.5s; --dur:7s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:38%; top:78%; --s:3px; --d:3s;   --dur:8s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:56%; top:88%; --s:1px; --d:3.5s; --dur:9s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:84%; top:20%; --s:2px; --d:4s;   --dur:6s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:14%; top:70%; --s:1px; --d:4.5s; --dur:7s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:60%; top:10%; --s:2px; --d:5s;   --dur:8s"></span>
  <span class="nuda-pt2-dust-shaft__mote" style="left:44%; top:48%; --s:1px; --d:5.5s; --dur:9s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Magnetic Orbit Field ─────────────── */
  {
    id: "pt2-magnetic-orbit",
    name: "Magnetic Orbit Field",
    category: CAT,
    preview: (
      <div className="nuda-pt2-magnetic-orbit" role="img" aria-label="Particles orbiting a magnetic center">
        <span className="nuda-pt2-magnetic-orbit__core" aria-hidden="true" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="nuda-pt2-magnetic-orbit__ring"
            style={{
              ["--r" as string]: `${28 + i * 9}px`,
              ["--dur" as string]: `${5 + i}s`,
              ["--a0" as string]: `${(i * 60) % 360}deg`,
              ["--dir" as string]: i % 2 === 0 ? "1" : "-1",
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-magnetic-orbit{position:relative;width:100%;max-width:220px;aspect-ratio:1;display:flex;align-items:center;justify-content:center}
      .nuda-pt2-magnetic-orbit__core{position:absolute;width:10px;height:10px;border-radius:50%;background:#e4ff54;box-shadow:0 0 10px #e4ff54,0 0 22px rgba(228,255,84,.5);animation:_nuda-pt2magneticorbitcore 2.4s ease-in-out infinite}
      .nuda-pt2-magnetic-orbit__ring{position:absolute;width:4px;height:4px;border-radius:50%;background:#fafafa;box-shadow:0 0 5px rgba(228,255,84,.6);left:50%;top:50%;margin:-2px 0 0 -2px;transform:rotate(var(--a0)) translateX(var(--r));animation:_nuda-pt2magneticorbitspin var(--dur) linear infinite}
      @keyframes _nuda-pt2magneticorbitspin{from{transform:rotate(var(--a0)) translateX(var(--r)) rotate(0deg) scale(calc(var(--dir) * 1));}to{transform:rotate(calc(var(--a0) + (360deg * var(--dir)))) translateX(var(--r)) rotate(calc(360deg * -1 * var(--dir))) scale(calc(var(--dir) * 1));}}
      @keyframes _nuda-pt2magneticorbitcore{0%,100%{transform:scale(.85)}50%{transform:scale(1.15)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-magnetic-orbit__ring,.nuda-pt2-magnetic-orbit__core{animation:none !important}
        .nuda-pt2-magnetic-orbit__ring{transform:rotate(var(--a0)) translateX(var(--r))}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Magnetic Orbit Field -->
<div class="nuda-pt2-magnetic-orbit" role="img" aria-label="Particles orbiting a magnetic center">
  <span class="nuda-pt2-magnetic-orbit__core" aria-hidden="true"></span>
  <span class="nuda-pt2-magnetic-orbit__ring" style="--r:28px; --dur:5s; --a0:0deg;   --dir:1"></span>
  <span class="nuda-pt2-magnetic-orbit__ring" style="--r:37px; --dur:6s; --a0:60deg;  --dir:-1"></span>
  <span class="nuda-pt2-magnetic-orbit__ring" style="--r:46px; --dur:7s; --a0:120deg; --dir:1"></span>
  <span class="nuda-pt2-magnetic-orbit__ring" style="--r:55px; --dur:8s; --a0:180deg; --dir:-1"></span>
  <span class="nuda-pt2-magnetic-orbit__ring" style="--r:64px; --dur:9s; --a0:240deg; --dir:1"></span>
  <span class="nuda-pt2-magnetic-orbit__ring" style="--r:73px; --dur:10s;--a0:300deg; --dir:-1"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Constellation Network ─────────────── */
  {
    id: "pt2-constellation",
    name: "Constellation Network",
    category: CAT,
    preview: (
      <div className="nuda-pt2-constellation" role="img" aria-label="Constellation of connected points">
        <svg className="nuda-pt2-constellation__lines" viewBox="0 0 200 140" aria-hidden="true">
          <line x1="20" y1="30" x2="70" y2="60" />
          <line x1="70" y1="60" x2="120" y2="20" />
          <line x1="70" y1="60" x2="90" y2="110" />
          <line x1="90" y1="110" x2="150" y2="95" />
          <line x1="120" y1="20" x2="170" y2="45" />
          <line x1="150" y1="95" x2="170" y2="45" />
        </svg>
        {[
          [20, 30],
          [70, 60],
          [120, 20],
          [90, 110],
          [150, 95],
          [170, 45],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="nuda-pt2-constellation__node"
            style={{ left: `${(x / 200) * 100}%`, top: `${(y / 140) * 100}%`, ["--d" as string]: `${i * 0.3}s` }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-constellation{position:relative;width:100%;max-width:240px;aspect-ratio:10/7;background:#0a0a0a;border-radius:8px;overflow:hidden}
      .nuda-pt2-constellation__lines{position:absolute;inset:0;width:100%;height:100%}
      .nuda-pt2-constellation__lines line{stroke:rgba(228,255,84,.35);stroke-width:1;stroke-dasharray:4 240;stroke-dashoffset:0;animation:_nuda-pt2constellationline 3.6s ease-in-out infinite}
      .nuda-pt2-constellation__node{position:absolute;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.8);animation:_nuda-pt2constellationnode 2.8s ease-in-out var(--d) infinite}
      @keyframes _nuda-pt2constellationline{0%,100%{opacity:.15}50%{opacity:.7}}
      @keyframes _nuda-pt2constellationnode{0%,100%{transform:scale(.8);opacity:.6}50%{transform:scale(1.3);opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-constellation__lines line,.nuda-pt2-constellation__node{animation:none !important}
        .nuda-pt2-constellation__lines line{opacity:.4}
        .nuda-pt2-constellation__node{opacity:.9;transform:scale(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Constellation Network -->
<div class="nuda-pt2-constellation" role="img" aria-label="Constellation of connected points">
  <svg class="nuda-pt2-constellation__lines" viewBox="0 0 200 140" aria-hidden="true">
    <line x1="20" y1="30" x2="70" y2="60" />
    <line x1="70" y1="60" x2="120" y2="20" />
    <line x1="70" y1="60" x2="90" y2="110" />
    <line x1="90" y1="110" x2="150" y2="95" />
    <line x1="120" y1="20" x2="170" y2="45" />
    <line x1="150" y1="95" x2="170" y2="45" />
  </svg>
  <span class="nuda-pt2-constellation__node" style="left:10%; top:21.4%; --d:0s"></span>
  <span class="nuda-pt2-constellation__node" style="left:35%; top:42.9%; --d:.3s"></span>
  <span class="nuda-pt2-constellation__node" style="left:60%; top:14.3%; --d:.6s"></span>
  <span class="nuda-pt2-constellation__node" style="left:45%; top:78.6%; --d:.9s"></span>
  <span class="nuda-pt2-constellation__node" style="left:75%; top:67.9%; --d:1.2s"></span>
  <span class="nuda-pt2-constellation__node" style="left:85%; top:32.1%; --d:1.5s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Falling Ash ─────────────── */
  {
    id: "pt2-falling-ash",
    name: "Falling Ash",
    category: CAT,
    preview: (
      <div className="nuda-pt2-falling-ash" role="img" aria-label="Ash falling through smoky air">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="nuda-pt2-falling-ash__flake"
            style={{
              left: `${(i * 7.1) % 100}%`,
              ["--s" as string]: `${(i % 3) + 2}px`,
              ["--d" as string]: `${(i % 7) * 0.4}s`,
              ["--dur" as string]: `${5 + (i % 4)}s`,
              ["--sway" as string]: `${((i % 2) * 2 - 1) * 12}px`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-falling-ash{position:relative;width:100%;max-width:220px;aspect-ratio:1;overflow:hidden;border-radius:8px;background:linear-gradient(180deg,#141312,#0a0a0a)}
      .nuda-pt2-falling-ash__flake{position:absolute;top:-8px;width:var(--s);height:var(--s);border-radius:1px;background:#b9b9ad;opacity:0;filter:blur(.2px);animation:_nuda-pt2fallingash var(--dur) linear var(--d) infinite}
      @keyframes _nuda-pt2fallingash{0%{transform:translate(0,0) rotate(0deg);opacity:0}8%{opacity:.7}50%{transform:translate(var(--sway),55px) rotate(140deg);opacity:.5}100%{transform:translate(0,120px) rotate(280deg);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-falling-ash__flake{animation:none !important;opacity:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Falling Ash -->
<div class="nuda-pt2-falling-ash" role="img" aria-label="Ash falling through smoky air">
  <span class="nuda-pt2-falling-ash__flake" style="left:2%;  --s:3px; --d:0s;   --dur:5s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:9%;  --s:2px; --d:.4s;  --dur:6s; --sway:12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:16%; --s:4px; --d:.8s;  --dur:7s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:23%; --s:2px; --d:1.2s; --dur:8s; --sway:12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:30%; --s:3px; --d:1.6s; --dur:5s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:37%; --s:4px; --d:2s;   --dur:6s; --sway:12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:44%; --s:2px; --d:2.4s; --dur:7s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:51%; --s:3px; --d:0s;   --dur:8s; --sway:12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:58%; --s:4px; --d:.4s;  --dur:5s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:65%; --s:2px; --d:.8s;  --dur:6s; --sway:12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:72%; --s:3px; --d:1.2s; --dur:7s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:79%; --s:4px; --d:1.6s; --dur:8s; --sway:12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:86%; --s:2px; --d:2s;   --dur:5s; --sway:-12px"></span>
  <span class="nuda-pt2-falling-ash__flake" style="left:93%; --s:3px; --d:2.4s; --dur:6s; --sway:12px"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Pollen Drift ─────────────── */
  {
    id: "pt2-pollen-drift",
    name: "Pollen Drift",
    category: CAT,
    preview: (
      <div className="nuda-pt2-pollen-drift" role="img" aria-label="Pollen drifting with depth blur">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`nuda-pt2-pollen-drift__spore${i % 3 === 0 ? " nuda-pt2-pollen-drift__spore--far" : i % 3 === 1 ? " nuda-pt2-pollen-drift__spore--near" : ""}`}
            style={{
              left: `${(i * 11) % 90 + 3}%`,
              top: `${(i * 29) % 80 + 8}%`,
              ["--d" as string]: `${(i * 0.45).toFixed(2)}s`,
              ["--dur" as string]: `${7 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-pollen-drift{position:relative;width:100%;max-width:220px;aspect-ratio:11/8;overflow:hidden;border-radius:8px;background:radial-gradient(ellipse at 50% 40%,rgba(228,255,84,.06),transparent 70%),#0e0e0e}
      .nuda-pt2-pollen-drift__spore{position:absolute;width:7px;height:7px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fafafa,#e4ff54 55%,transparent 75%);opacity:.55;animation:_nuda-pt2pollendrift var(--dur) ease-in-out var(--d) infinite}
      .nuda-pt2-pollen-drift__spore--far{width:4px;height:4px;filter:blur(1.2px);opacity:.3}
      .nuda-pt2-pollen-drift__spore--near{width:10px;height:10px;filter:blur(0px);opacity:.8}
      @keyframes _nuda-pt2pollendrift{0%,100%{transform:translate(0,0)}25%{transform:translate(10px,-8px)}50%{transform:translate(-6px,6px)}75%{transform:translate(8px,10px)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-pollen-drift__spore,.nuda-pt2-pollen-drift__spore--far,.nuda-pt2-pollen-drift__spore--near{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pollen Drift -->
<div class="nuda-pt2-pollen-drift" role="img" aria-label="Pollen drifting with depth blur">
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--far"  style="left:3%;  top:8%;  --d:0s;   --dur:7s"></span>
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--near" style="left:14%; top:37%; --d:.45s; --dur:8s"></span>
  <span class="nuda-pt2-pollen-drift__spore"                                    style="left:25%; top:66%; --d:.9s;  --dur:9s"></span>
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--far"  style="left:36%; top:15%; --d:1.35s;--dur:7s"></span>
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--near" style="left:47%; top:44%; --d:1.8s; --dur:8s"></span>
  <span class="nuda-pt2-pollen-drift__spore"                                    style="left:58%; top:73%; --d:2.25s;--dur:9s"></span>
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--far"  style="left:69%; top:22%; --d:2.7s; --dur:7s"></span>
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--near" style="left:80%; top:51%; --d:3.15s;--dur:8s"></span>
  <span class="nuda-pt2-pollen-drift__spore"                                    style="left:91%; top:80%; --d:3.6s; --dur:9s"></span>
  <span class="nuda-pt2-pollen-drift__spore nuda-pt2-pollen-drift__spore--far"  style="left:8%;  top:60%; --d:4.05s;--dur:7s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Plasma Orbs ─────────────── */
  {
    id: "pt2-plasma-orbs",
    name: "Plasma Orbs",
    category: CAT,
    preview: (
      <div className="nuda-pt2-plasma-orbs" role="img" aria-label="Pulsing plasma orbs">
        {[
          { x: 25, y: 35, s: 46, d: "0s" },
          { x: 68, y: 55, s: 60, d: ".6s" },
          { x: 45, y: 75, s: 34, d: "1.2s" },
        ].map((o, i) => (
          <span
            key={i}
            className="nuda-pt2-plasma-orbs__orb"
            style={{ left: `${o.x}%`, top: `${o.y}%`, ["--s" as string]: `${o.s}px`, ["--d" as string]: o.d }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-plasma-orbs{position:relative;width:100%;max-width:220px;aspect-ratio:1;overflow:hidden;border-radius:8px;background:#09090b}
      .nuda-pt2-plasma-orbs__orb{position:absolute;width:var(--s);height:var(--s);margin:calc(var(--s) / -2) 0 0 calc(var(--s) / -2);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fafafa 0%,#e4ff54 30%,rgba(228,255,84,.25) 60%,transparent 75%);filter:blur(2px) saturate(1.3);mix-blend-mode:screen;animation:_nuda-pt2plasmaorbs 4.8s ease-in-out var(--d) infinite}
      @keyframes _nuda-pt2plasmaorbs{0%,100%{transform:scale(.85);opacity:.6;filter:blur(2px) saturate(1.3) hue-rotate(0deg)}50%{transform:scale(1.2);opacity:1;filter:blur(3px) saturate(1.6) hue-rotate(20deg)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-plasma-orbs__orb{animation:none !important;opacity:.85;transform:scale(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Plasma Orbs -->
<div class="nuda-pt2-plasma-orbs" role="img" aria-label="Pulsing plasma orbs">
  <span class="nuda-pt2-plasma-orbs__orb" style="left:25%; top:35%; --s:46px; --d:0s"></span>
  <span class="nuda-pt2-plasma-orbs__orb" style="left:68%; top:55%; --s:60px; --d:.6s"></span>
  <span class="nuda-pt2-plasma-orbs__orb" style="left:45%; top:75%; --s:34px; --d:1.2s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Particle Vortex ─────────────── */
  {
    id: "pt2-particle-vortex",
    name: "Particle Vortex",
    category: CAT,
    preview: (
      <div className="nuda-pt2-particle-vortex" role="img" aria-label="Particles spiraling into a vortex">
        <span className="nuda-pt2-particle-vortex__eye" aria-hidden="true" />
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="nuda-pt2-particle-vortex__bit"
            style={{
              ["--a0" as string]: `${(i / 10) * 360}deg`,
              ["--d" as string]: `${(i * 0.3).toFixed(2)}s`,
            }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-pt2-particle-vortex{position:relative;width:100%;max-width:220px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:8px;background:radial-gradient(circle at center,rgba(228,255,84,.08),transparent 70%),#0a0a0a}
      .nuda-pt2-particle-vortex__eye{position:absolute;width:8px;height:8px;border-radius:50%;background:#e4ff54;box-shadow:0 0 10px rgba(228,255,84,.8);animation:_nuda-pt2particlevortexeye 2s ease-in-out infinite}
      .nuda-pt2-particle-vortex__bit{position:absolute;width:5px;height:5px;border-radius:50%;background:#fafafa;left:50%;top:50%;margin:-2.5px 0 0 -2.5px;box-shadow:0 0 4px rgba(228,255,84,.6);opacity:0;animation:_nuda-pt2particlevortexspiral 3s cubic-bezier(.5,0,.7,.4) var(--d) infinite}
      @keyframes _nuda-pt2particlevortexspiral{0%{transform:rotate(var(--a0)) translateX(70px) scale(1);opacity:0}12%{opacity:1}90%{opacity:.8}100%{transform:rotate(calc(var(--a0) + 620deg)) translateX(2px) scale(.2);opacity:0}}
      @keyframes _nuda-pt2particlevortexeye{0%,100%{transform:scale(.8)}50%{transform:scale(1.25)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pt2-particle-vortex__bit,.nuda-pt2-particle-vortex__eye{animation:none !important}
        .nuda-pt2-particle-vortex__bit{opacity:.5;transform:rotate(var(--a0)) translateX(40px) scale(.6)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Particle Vortex -->
<div class="nuda-pt2-particle-vortex" role="img" aria-label="Particles spiraling into a vortex">
  <span class="nuda-pt2-particle-vortex__eye" aria-hidden="true"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:0deg;   --d:0s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:36deg;  --d:.3s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:72deg;  --d:.6s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:108deg; --d:.9s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:144deg; --d:1.2s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:180deg; --d:1.5s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:216deg; --d:1.8s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:252deg; --d:2.1s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:288deg; --d:2.4s"></span>
  <span class="nuda-pt2-particle-vortex__bit" style="--a0:324deg; --d:2.7s"></span>
</div>`,
      },
    ],
  },
];
