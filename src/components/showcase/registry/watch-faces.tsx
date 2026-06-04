import type { NudaComponent } from "./types";

export const watchFaces: NudaComponent[] = [
  /* ─────────────── 1. ANALOG CLOCK ─────────────── */
  {
    id: "analog-clock",
    name: "Analog Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-analog" role="img" aria-label="Analog clock">
        <div className="nuda-analog__face">
          <span className="nuda-analog__tick" style={{ transform: "rotate(0deg) translateY(-70px)" }} />
          <span className="nuda-analog__tick" style={{ transform: "rotate(90deg) translateY(-70px)" }} />
          <span className="nuda-analog__tick" style={{ transform: "rotate(180deg) translateY(-70px)" }} />
          <span className="nuda-analog__tick" style={{ transform: "rotate(270deg) translateY(-70px)" }} />
          <div className="nuda-analog__hand nuda-analog__hand--hour" />
          <div className="nuda-analog__hand nuda-analog__hand--minute" />
          <div className="nuda-analog__hand nuda-analog__hand--second" />
          <div className="nuda-analog__center" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-analog{--bg:#0c0c10;--ink:#fafafa;--accent:#e4ff54;--border:rgba(255,255,255,.1);display:inline-block;padding:16px;background:var(--bg);border:1px solid var(--border);border-radius:50%}
      .nuda-analog__face{position:relative;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle at 50% 30%,#1a1a20,#09090b)}
      .nuda-analog__tick{position:absolute;left:50%;top:50%;width:2px;height:8px;margin-left:-1px;background:var(--ink);transform-origin:center 70px;opacity:.7}
      .nuda-analog__hand{position:absolute;left:50%;bottom:50%;transform-origin:bottom center;background:var(--ink);border-radius:2px}
      .nuda-analog__hand--hour{width:4px;height:42px;margin-left:-2px;animation:_anh 43200s linear infinite;transform:rotate(120deg)}
      .nuda-analog__hand--minute{width:3px;height:58px;margin-left:-1.5px;animation:_anm 3600s linear infinite;transform:rotate(60deg)}
      .nuda-analog__hand--second{width:1.5px;height:66px;margin-left:-.75px;background:var(--accent);animation:_ans 60s linear infinite;transform:rotate(30deg)}
      .nuda-analog__center{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent)}
      @keyframes _anh{to{transform:rotate(480deg)}}
      @keyframes _anm{to{transform:rotate(420deg)}}
      @keyframes _ans{to{transform:rotate(390deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-analog__hand{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-analog" role="img" aria-label="Analog clock">
  <div class="nuda-analog__face">
    <span class="nuda-analog__tick" style="transform: rotate(0deg) translateY(-70px)"></span>
    <span class="nuda-analog__tick" style="transform: rotate(90deg) translateY(-70px)"></span>
    <span class="nuda-analog__tick" style="transform: rotate(180deg) translateY(-70px)"></span>
    <span class="nuda-analog__tick" style="transform: rotate(270deg) translateY(-70px)"></span>
    <div class="nuda-analog__hand nuda-analog__hand--hour"></div>
    <div class="nuda-analog__hand nuda-analog__hand--minute"></div>
    <div class="nuda-analog__hand nuda-analog__hand--second"></div>
    <div class="nuda-analog__center"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Analog Clock
   Three rotating hands at realistic speeds (12h / 1h / 60s).
   Customize: --bg, --ink, --accent */

.nuda-analog {
  --bg: #0c0c10;
  --ink: #fafafa;
  --accent: #e4ff54;
  --border: rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 50%;
}

.nuda-analog__face {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 30%, #1a1a20, #09090b);
}

.nuda-analog__tick {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 8px;
  margin-left: -1px;
  background: var(--ink);
  transform-origin: center 70px;
  opacity: 0.7;
}

.nuda-analog__hand {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom center;
  background: var(--ink);
  border-radius: 2px;
}

.nuda-analog__hand--hour {
  width: 4px;
  height: 42px;
  margin-left: -2px;
  animation: nuda-analog-hour 43200s linear infinite;
}

.nuda-analog__hand--minute {
  width: 3px;
  height: 58px;
  margin-left: -1.5px;
  animation: nuda-analog-minute 3600s linear infinite;
}

.nuda-analog__hand--second {
  width: 1.5px;
  height: 66px;
  margin-left: -0.75px;
  background: var(--accent);
  animation: nuda-analog-second 60s linear infinite;
}

.nuda-analog__center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

@keyframes nuda-analog-hour    { to { transform: rotate(360deg); } }
@keyframes nuda-analog-minute  { to { transform: rotate(360deg); } }
@keyframes nuda-analog-second  { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-analog__hand { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. DIGITAL CLOCK ─────────────── */
  {
    id: "digital-clock",
    name: "Digital Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-digital" role="img" aria-label="Digital clock 10:42">
        <span className="nuda-digital__d">1</span>
        <span className="nuda-digital__d">0</span>
        <span className="nuda-digital__sep">:</span>
        <span className="nuda-digital__d">4</span>
        <span className="nuda-digital__d">2</span>
        <span className="nuda-digital__ampm">PM</span>
      </div>
    ),
    cssInline: `
      .nuda-digital{--bg:#09090b;--accent:#e4ff54;--dim:rgba(228,255,84,.15);display:inline-flex;align-items:baseline;gap:2px;padding:18px 22px;background:var(--bg);border:1px solid rgba(255,255,255,.06);border-radius:12px;font-family:ui-monospace,"SF Mono",Menlo,monospace;font-size:48px;font-weight:600;color:var(--accent);text-shadow:0 0 12px var(--dim),0 0 24px var(--dim);letter-spacing:-2px}
      .nuda-digital__d{display:inline-block;min-width:.6em;text-align:center}
      .nuda-digital__sep{animation:_dgblink 1s steps(2) infinite}
      .nuda-digital__ampm{margin-left:10px;font-size:14px;letter-spacing:1px;opacity:.7;align-self:center}
      @keyframes _dgblink{50%{opacity:.2}}
      @media(prefers-reduced-motion:reduce){.nuda-digital__sep{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-digital" role="img" aria-label="Digital clock 10:42">
  <span class="nuda-digital__d">1</span>
  <span class="nuda-digital__d">0</span>
  <span class="nuda-digital__sep">:</span>
  <span class="nuda-digital__d">4</span>
  <span class="nuda-digital__d">2</span>
  <span class="nuda-digital__ampm">PM</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Digital Clock
   Glowing monospace digits with a blinking colon.
   Customize: --bg, --accent, --dim */

.nuda-digital {
  --bg: #09090b;
  --accent: #e4ff54;
  --dim: rgba(228, 255, 84, 0.15);
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  padding: 18px 22px;
  background: var(--bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 48px;
  font-weight: 600;
  color: var(--accent);
  text-shadow: 0 0 12px var(--dim), 0 0 24px var(--dim);
  letter-spacing: -2px;
}

.nuda-digital__d {
  display: inline-block;
  min-width: 0.6em;
  text-align: center;
}

.nuda-digital__sep {
  animation: nuda-digital-blink 1s steps(2) infinite;
}

.nuda-digital__ampm {
  margin-left: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.7;
  align-self: center;
}

@keyframes nuda-digital-blink {
  50% { opacity: 0.2; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-digital__sep { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. FLIP CLOCK ─────────────── */
  {
    id: "flip-clock-face",
    name: "Flip Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-flip" role="img" aria-label="Flip clock 09:25">
        <div className="nuda-flip__card"><span className="nuda-flip__top">0</span><span className="nuda-flip__bot nuda-flip__bot--anim">9</span><span className="nuda-flip__hinge" /></div>
        <div className="nuda-flip__card"><span className="nuda-flip__top">9</span><span className="nuda-flip__bot">9</span><span className="nuda-flip__hinge" /></div>
        <div className="nuda-flip__colon">:</div>
        <div className="nuda-flip__card"><span className="nuda-flip__top">2</span><span className="nuda-flip__bot">2</span><span className="nuda-flip__hinge" /></div>
        <div className="nuda-flip__card"><span className="nuda-flip__top">5</span><span className="nuda-flip__bot nuda-flip__bot--anim">5</span><span className="nuda-flip__hinge" /></div>
      </div>
    ),
    cssInline: `
      .nuda-flip{--bg:#111114;--ink:#fafafa;--shade:#1a1a20;display:inline-flex;align-items:center;gap:6px;padding:14px;background:#09090b;border:1px solid rgba(255,255,255,.06);border-radius:12px}
      .nuda-flip__card{position:relative;width:46px;height:64px;border-radius:8px;background:var(--bg);overflow:hidden;box-shadow:inset 0 -1px 0 rgba(255,255,255,.04)}
      .nuda-flip__top,.nuda-flip__bot{position:absolute;left:0;right:0;display:flex;align-items:center;justify-content:center;font-family:ui-monospace,Menlo,monospace;font-size:36px;font-weight:700;color:var(--ink);height:50%;overflow:hidden}
      .nuda-flip__top{top:0;background:linear-gradient(180deg,#1c1c22,#15151a);align-items:flex-end;padding-bottom:2px}
      .nuda-flip__bot{bottom:0;background:linear-gradient(180deg,#0e0e12,#16161c);align-items:flex-start;padding-top:2px}
      .nuda-flip__bot--anim{transform-origin:top;animation:_flipdrop 4s ease-in-out infinite}
      .nuda-flip__hinge{position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(0,0,0,.5);box-shadow:0 1px 0 rgba(255,255,255,.04)}
      .nuda-flip__colon{font:600 28px ui-monospace,Menlo,monospace;color:var(--ink);opacity:.6;animation:_flipblink 1s steps(2) infinite}
      @keyframes _flipdrop{0%,40%{transform:rotateX(90deg)}50%,100%{transform:rotateX(0)}}
      @keyframes _flipblink{50%{opacity:.15}}
      @media(prefers-reduced-motion:reduce){.nuda-flip__bot--anim,.nuda-flip__colon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-flip" role="img" aria-label="Flip clock 09:25">
  <div class="nuda-flip__card">
    <span class="nuda-flip__top">0</span>
    <span class="nuda-flip__bot nuda-flip__bot--anim">9</span>
    <span class="nuda-flip__hinge"></span>
  </div>
  <div class="nuda-flip__card">
    <span class="nuda-flip__top">9</span>
    <span class="nuda-flip__bot">9</span>
    <span class="nuda-flip__hinge"></span>
  </div>
  <div class="nuda-flip__colon">:</div>
  <div class="nuda-flip__card">
    <span class="nuda-flip__top">2</span>
    <span class="nuda-flip__bot">2</span>
    <span class="nuda-flip__hinge"></span>
  </div>
  <div class="nuda-flip__card">
    <span class="nuda-flip__top">5</span>
    <span class="nuda-flip__bot nuda-flip__bot--anim">5</span>
    <span class="nuda-flip__hinge"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Flip Clock
   Split-flap aesthetic. The bottom half folds down to reveal a new digit.
   In a real implementation, JS would swap the values on each tick. */

.nuda-flip {
  --bg: #111114;
  --ink: #fafafa;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 14px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}

.nuda-flip__card {
  position: relative;
  width: 46px;
  height: 64px;
  border-radius: 8px;
  background: var(--bg);
  overflow: hidden;
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.04);
}

.nuda-flip__top,
.nuda-flip__bot {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  font-family: ui-monospace, Menlo, monospace;
  font-size: 36px;
  font-weight: 700;
  color: var(--ink);
  overflow: hidden;
}

.nuda-flip__top {
  top: 0;
  background: linear-gradient(180deg, #1c1c22, #15151a);
  align-items: flex-end;
  padding-bottom: 2px;
}

.nuda-flip__bot {
  bottom: 0;
  background: linear-gradient(180deg, #0e0e12, #16161c);
  align-items: flex-start;
  padding-top: 2px;
}

.nuda-flip__bot--anim {
  transform-origin: top;
  animation: nuda-flip-drop 4s ease-in-out infinite;
}

.nuda-flip__hinge {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);
}

.nuda-flip__colon {
  font: 600 28px ui-monospace, Menlo, monospace;
  color: var(--ink);
  opacity: 0.6;
  animation: nuda-flip-blink 1s steps(2) infinite;
}

@keyframes nuda-flip-drop {
  0%, 40%   { transform: rotateX(90deg); }
  50%, 100% { transform: rotateX(0); }
}

@keyframes nuda-flip-blink {
  50% { opacity: 0.15; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-flip__bot--anim,
  .nuda-flip__colon { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. POMODORO TIMER RING ─────────────── */
  {
    id: "pomodoro-timer",
    name: "Pomodoro Timer Ring",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-pomo" role="img" aria-label="Pomodoro 12:34">
        <svg className="nuda-pomo__svg" viewBox="0 0 120 120">
          <circle className="nuda-pomo__track" cx="60" cy="60" r="52" />
          <circle className="nuda-pomo__bar" cx="60" cy="60" r="52" />
        </svg>
        <div className="nuda-pomo__inner">
          <span className="nuda-pomo__time">12:34</span>
          <span className="nuda-pomo__label">FOCUS</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pomo{--accent:#ff5e7a;--bg:#0c0c10;position:relative;width:140px;height:140px;display:inline-grid;place-items:center;background:var(--bg);border-radius:50%;border:1px solid rgba(255,255,255,.06)}
      .nuda-pomo__svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
      .nuda-pomo__track{fill:none;stroke:rgba(255,255,255,.08);stroke-width:6}
      .nuda-pomo__bar{fill:none;stroke:var(--accent);stroke-width:6;stroke-linecap:round;stroke-dasharray:326.7;stroke-dashoffset:90;filter:drop-shadow(0 0 6px var(--accent));animation:_pomotick 1500s linear forwards}
      .nuda-pomo__inner{display:flex;flex-direction:column;align-items:center;gap:4px;z-index:1}
      .nuda-pomo__time{font:600 26px ui-monospace,Menlo,monospace;color:#fafafa;letter-spacing:-1px}
      .nuda-pomo__label{font:500 10px system-ui,sans-serif;letter-spacing:2px;color:var(--accent)}
      @keyframes _pomotick{to{stroke-dashoffset:326.7}}
      @media(prefers-reduced-motion:reduce){.nuda-pomo__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pomo" role="img" aria-label="Pomodoro 12:34">
  <svg class="nuda-pomo__svg" viewBox="0 0 120 120">
    <circle class="nuda-pomo__track" cx="60" cy="60" r="52" />
    <circle class="nuda-pomo__bar" cx="60" cy="60" r="52" />
  </svg>
  <div class="nuda-pomo__inner">
    <span class="nuda-pomo__time">12:34</span>
    <span class="nuda-pomo__label">FOCUS</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pomodoro Timer Ring
   SVG arc countdown over 25 minutes (1500s) for the classic Pomodoro session.
   Customize: --accent for break/work mode coloring */

.nuda-pomo {
  --accent: #ff5e7a;
  --bg: #0c0c10;
  position: relative;
  width: 140px;
  height: 140px;
  display: inline-grid;
  place-items: center;
  background: var(--bg);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-pomo__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.nuda-pomo__track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 6;
}

.nuda-pomo__bar {
  fill: none;
  stroke: var(--accent);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 326.7; /* 2 * PI * 52 */
  stroke-dashoffset: 90;
  filter: drop-shadow(0 0 6px var(--accent));
  animation: nuda-pomo-tick 1500s linear forwards;
}

.nuda-pomo__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1;
}

.nuda-pomo__time {
  font: 600 26px ui-monospace, Menlo, monospace;
  color: #fafafa;
  letter-spacing: -1px;
}

.nuda-pomo__label {
  font: 500 10px system-ui, sans-serif;
  letter-spacing: 2px;
  color: var(--accent);
}

@keyframes nuda-pomo-tick {
  to { stroke-dashoffset: 326.7; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pomo__bar { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. STOPWATCH ─────────────── */
  {
    id: "stopwatch",
    name: "Stopwatch",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-sw" role="img" aria-label="Stopwatch 00:42.31">
        <div className="nuda-sw__crown" />
        <div className="nuda-sw__face">
          <svg className="nuda-sw__svg" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" className="nuda-sw__bezel" />
            <line x1="60" y1="60" x2="60" y2="14" className="nuda-sw__hand" />
          </svg>
          <div className="nuda-sw__time">00:42.<span>31</span></div>
          <div className="nuda-sw__laps">LAP 03 · 00:14.06</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sw{--accent:#e4ff54;--bg:#0c0c10;position:relative;display:inline-block;padding:14px;background:var(--bg);border-radius:14px;border:1px solid rgba(255,255,255,.06)}
      .nuda-sw__crown{position:absolute;top:-6px;left:50%;width:14px;height:8px;margin-left:-7px;background:#1a1a20;border:1px solid rgba(255,255,255,.1);border-radius:3px}
      .nuda-sw__face{position:relative;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle at 50% 40%,#15151a,#09090b);display:grid;place-items:center}
      .nuda-sw__svg{position:absolute;inset:0;width:100%;height:100%}
      .nuda-sw__bezel{fill:none;stroke:rgba(255,255,255,.06);stroke-width:1}
      .nuda-sw__hand{stroke:var(--accent);stroke-width:2;stroke-linecap:round;transform-origin:60px 60px;animation:_swsweep 60s linear infinite;filter:drop-shadow(0 0 4px var(--accent))}
      .nuda-sw__time{font:600 22px ui-monospace,Menlo,monospace;color:#fafafa;z-index:1}
      .nuda-sw__time span{color:var(--accent);font-size:18px}
      .nuda-sw__laps{position:absolute;bottom:24px;font:500 9px system-ui;letter-spacing:1.5px;color:#63636e;z-index:1}
      @keyframes _swsweep{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-sw__hand{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sw" role="img" aria-label="Stopwatch 00:42.31">
  <div class="nuda-sw__crown"></div>
  <div class="nuda-sw__face">
    <svg class="nuda-sw__svg" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="54" class="nuda-sw__bezel" />
      <line x1="60" y1="60" x2="60" y2="14" class="nuda-sw__hand" />
    </svg>
    <div class="nuda-sw__time">00:42.<span>31</span></div>
    <div class="nuda-sw__laps">LAP 03 · 00:14.06</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stopwatch
   Sweeping seconds hand with a digital readout and last-lap marker.
   Customize: --accent, --bg */

.nuda-sw {
  --accent: #e4ff54;
  --bg: #0c0c10;
  position: relative;
  display: inline-block;
  padding: 14px;
  background: var(--bg);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-sw__crown {
  position: absolute;
  top: -6px;
  left: 50%;
  width: 14px;
  height: 8px;
  margin-left: -7px;
  background: #1a1a20;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.nuda-sw__face {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 40%, #15151a, #09090b);
  display: grid;
  place-items: center;
}

.nuda-sw__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.nuda-sw__bezel {
  fill: none;
  stroke: rgba(255, 255, 255, 0.06);
  stroke-width: 1;
}

.nuda-sw__hand {
  stroke: var(--accent);
  stroke-width: 2;
  stroke-linecap: round;
  transform-origin: 60px 60px;
  animation: nuda-sw-sweep 60s linear infinite;
  filter: drop-shadow(0 0 4px var(--accent));
}

.nuda-sw__time {
  font: 600 22px ui-monospace, Menlo, monospace;
  color: #fafafa;
  z-index: 1;
}

.nuda-sw__time span {
  color: var(--accent);
  font-size: 18px;
}

.nuda-sw__laps {
  position: absolute;
  bottom: 24px;
  font: 500 9px system-ui;
  letter-spacing: 1.5px;
  color: #63636e;
  z-index: 1;
}

@keyframes nuda-sw-sweep {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sw__hand { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. WORLD CLOCK CARD ─────────────── */
  {
    id: "world-clock",
    name: "World Clock Card",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-world" role="img" aria-label="Tokyo 04:18 AM">
        <div className="nuda-world__row">
          <span className="nuda-world__flag" aria-hidden="true">🇯🇵</span>
          <div className="nuda-world__meta">
            <span className="nuda-world__city">Tokyo</span>
            <span className="nuda-world__zone">JST · UTC+9</span>
          </div>
          <div className="nuda-world__time">
            <span>04:18</span>
            <em>AM</em>
          </div>
        </div>
        <div className="nuda-world__bar"><div className="nuda-world__sun" /></div>
        <div className="nuda-world__foot"><span>·</span><span>Night</span><span>·</span><span>Sunrise 5:42</span></div>
      </div>
    ),
    cssInline: `
      .nuda-world{--bg:#0c0c10;--accent:#62b6ff;width:260px;padding:16px;background:var(--bg);border:1px solid rgba(255,255,255,.06);border-radius:14px;color:#fafafa;font-family:system-ui,sans-serif}
      .nuda-world__row{display:flex;align-items:center;gap:12px}
      .nuda-world__flag{font-size:24px;line-height:1}
      .nuda-world__meta{flex:1;display:flex;flex-direction:column}
      .nuda-world__city{font-weight:600;font-size:15px}
      .nuda-world__zone{font-size:11px;color:#63636e;letter-spacing:.5px}
      .nuda-world__time{display:flex;align-items:baseline;gap:4px;font:600 22px ui-monospace,Menlo,monospace}
      .nuda-world__time em{font-style:normal;font-size:10px;color:var(--accent);letter-spacing:1px}
      .nuda-world__bar{position:relative;margin-top:14px;height:3px;border-radius:2px;background:linear-gradient(90deg,#1a1a20 0%,#1a1a20 25%,#332b1a 50%,#1a1a20 75%,#1a1a20 100%)}
      .nuda-world__sun{position:absolute;top:-3px;left:18%;width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent);animation:_worldglow 3s ease-in-out infinite}
      .nuda-world__foot{display:flex;gap:6px;margin-top:8px;font-size:10px;color:#63636e;letter-spacing:.5px}
      @keyframes _worldglow{50%{opacity:.6;transform:scale(.85)}}
      @media(prefers-reduced-motion:reduce){.nuda-world__sun{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-world" role="img" aria-label="Tokyo 04:18 AM">
  <div class="nuda-world__row">
    <span class="nuda-world__flag" aria-hidden="true">🇯🇵</span>
    <div class="nuda-world__meta">
      <span class="nuda-world__city">Tokyo</span>
      <span class="nuda-world__zone">JST · UTC+9</span>
    </div>
    <div class="nuda-world__time">
      <span>04:18</span><em>AM</em>
    </div>
  </div>
  <div class="nuda-world__bar"><div class="nuda-world__sun"></div></div>
  <div class="nuda-world__foot">
    <span>·</span><span>Night</span>
    <span>·</span><span>Sunrise 5:42</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* World Clock Card
   City + flag + local time, with a day/night bar and sun marker. */

.nuda-world {
  --bg: #0c0c10;
  --accent: #62b6ff;
  width: 260px;
  padding: 16px;
  background: var(--bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  color: #fafafa;
  font-family: system-ui, sans-serif;
}

.nuda-world__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nuda-world__flag { font-size: 24px; line-height: 1; }

.nuda-world__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nuda-world__city { font-weight: 600; font-size: 15px; }
.nuda-world__zone {
  font-size: 11px;
  color: #63636e;
  letter-spacing: 0.5px;
}

.nuda-world__time {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font: 600 22px ui-monospace, Menlo, monospace;
}

.nuda-world__time em {
  font-style: normal;
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 1px;
}

.nuda-world__bar {
  position: relative;
  margin-top: 14px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    #1a1a20 0%,
    #1a1a20 25%,
    #332b1a 50%,
    #1a1a20 75%,
    #1a1a20 100%
  );
}

.nuda-world__sun {
  position: absolute;
  top: -3px;
  left: 18%;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: nuda-world-glow 3s ease-in-out infinite;
}

.nuda-world__foot {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  font-size: 10px;
  color: #63636e;
  letter-spacing: 0.5px;
}

@keyframes nuda-world-glow {
  50% { opacity: 0.6; transform: scale(0.85); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-world__sun { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. ALARM CLOCK ─────────────── */
  {
    id: "alarm-clock",
    name: "Alarm Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-alarm" role="img" aria-label="Alarm 06:30 AM ringing">
        <div className="nuda-alarm__bell nuda-alarm__bell--l" />
        <div className="nuda-alarm__bell nuda-alarm__bell--r" />
        <div className="nuda-alarm__body">
          <span className="nuda-alarm__time">06:30</span>
          <span className="nuda-alarm__label">WAKE UP</span>
        </div>
        <div className="nuda-alarm__foot nuda-alarm__foot--l" />
        <div className="nuda-alarm__foot nuda-alarm__foot--r" />
      </div>
    ),
    cssInline: `
      .nuda-alarm{--bg:#0c0c10;--accent:#ffb45e;position:relative;display:inline-block;padding:28px 24px 18px;animation:_alarmshake 1.2s ease-in-out infinite}
      .nuda-alarm__body{position:relative;width:130px;height:120px;border-radius:50%;background:radial-gradient(circle at 50% 30%,#1a1a20,#09090b);border:2px solid #1a1a20;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;box-shadow:inset 0 0 0 4px #0c0c10}
      .nuda-alarm__time{font:700 28px ui-monospace,Menlo,monospace;color:var(--accent);text-shadow:0 0 10px rgba(255,180,94,.35)}
      .nuda-alarm__label{font:500 9px system-ui;letter-spacing:2px;color:#a0a0a8}
      .nuda-alarm__bell{position:absolute;top:8px;width:24px;height:18px;background:#1a1a20;border:2px solid #2a2a30;border-radius:50% 50% 6px 6px}
      .nuda-alarm__bell--l{left:22px;transform:rotate(-25deg)}
      .nuda-alarm__bell--r{right:22px;transform:rotate(25deg)}
      .nuda-alarm__foot{position:absolute;bottom:6px;width:14px;height:10px;background:#1a1a20;border:1px solid #2a2a30;border-radius:3px 3px 0 0}
      .nuda-alarm__foot--l{left:34px;transform:skewX(-15deg)}
      .nuda-alarm__foot--r{right:34px;transform:skewX(15deg)}
      @keyframes _alarmshake{0%,100%{transform:translateX(0) rotate(0)}10%,30%,50%,70%,90%{transform:translateX(-2px) rotate(-2deg)}20%,40%,60%,80%{transform:translateX(2px) rotate(2deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-alarm{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-alarm" role="img" aria-label="Alarm 06:30 AM ringing">
  <div class="nuda-alarm__bell nuda-alarm__bell--l"></div>
  <div class="nuda-alarm__bell nuda-alarm__bell--r"></div>
  <div class="nuda-alarm__body">
    <span class="nuda-alarm__time">06:30</span>
    <span class="nuda-alarm__label">WAKE UP</span>
  </div>
  <div class="nuda-alarm__foot nuda-alarm__foot--l"></div>
  <div class="nuda-alarm__foot nuda-alarm__foot--r"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Alarm Clock
   Bells on top, feet on the bottom. The whole clock shakes when ringing.
   Toggle the .ringing class in production to start/stop the shake. */

.nuda-alarm {
  --bg: #0c0c10;
  --accent: #ffb45e;
  position: relative;
  display: inline-block;
  padding: 28px 24px 18px;
  animation: nuda-alarm-shake 1.2s ease-in-out infinite;
}

.nuda-alarm__body {
  position: relative;
  width: 130px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 30%, #1a1a20, #09090b);
  border: 2px solid #1a1a20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: inset 0 0 0 4px #0c0c10;
}

.nuda-alarm__time {
  font: 700 28px ui-monospace, Menlo, monospace;
  color: var(--accent);
  text-shadow: 0 0 10px rgba(255, 180, 94, 0.35);
}

.nuda-alarm__label {
  font: 500 9px system-ui;
  letter-spacing: 2px;
  color: #a0a0a8;
}

.nuda-alarm__bell {
  position: absolute;
  top: 8px;
  width: 24px;
  height: 18px;
  background: #1a1a20;
  border: 2px solid #2a2a30;
  border-radius: 50% 50% 6px 6px;
}
.nuda-alarm__bell--l { left: 22px; transform: rotate(-25deg); }
.nuda-alarm__bell--r { right: 22px; transform: rotate(25deg); }

.nuda-alarm__foot {
  position: absolute;
  bottom: 6px;
  width: 14px;
  height: 10px;
  background: #1a1a20;
  border: 1px solid #2a2a30;
  border-radius: 3px 3px 0 0;
}
.nuda-alarm__foot--l { left: 34px; transform: skewX(-15deg); }
.nuda-alarm__foot--r { right: 34px; transform: skewX(15deg); }

@keyframes nuda-alarm-shake {
  0%, 100% { transform: translateX(0) rotate(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px) rotate(-2deg); }
  20%, 40%, 60%, 80%      { transform: translateX(2px) rotate(2deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-alarm { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. COUNTDOWN RING ─────────────── */
  {
    id: "countdown-ring",
    name: "Countdown Ring",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-cd" role="img" aria-label="Countdown 5 days">
        <svg className="nuda-cd__svg" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="nuda-cd-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e4ff54" />
              <stop offset="100%" stopColor="#9d6dff" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="50" className="nuda-cd__track" />
          <circle cx="60" cy="60" r="50" className="nuda-cd__bar" />
        </svg>
        <div className="nuda-cd__inner">
          <span className="nuda-cd__num">05</span>
          <span className="nuda-cd__unit">DAYS LEFT</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cd{position:relative;width:150px;height:150px;display:inline-grid;place-items:center}
      .nuda-cd__svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
      .nuda-cd__track{fill:none;stroke:rgba(255,255,255,.06);stroke-width:8}
      .nuda-cd__bar{fill:none;stroke:url(#nuda-cd-grad);stroke-width:8;stroke-linecap:round;stroke-dasharray:314.15;stroke-dashoffset:314.15;animation:_cddraw 2.4s cubic-bezier(.16,1,.3,1) forwards}
      .nuda-cd__inner{display:flex;flex-direction:column;align-items:center;z-index:1}
      .nuda-cd__num{font:700 44px system-ui;color:#fafafa;line-height:1;letter-spacing:-2px}
      .nuda-cd__unit{font:500 10px system-ui;color:#a0a0a8;letter-spacing:2px;margin-top:4px}
      @keyframes _cddraw{to{stroke-dashoffset:78}}
      @media(prefers-reduced-motion:reduce){.nuda-cd__bar{animation:none;stroke-dashoffset:78}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd" role="img" aria-label="Countdown 5 days">
  <svg class="nuda-cd__svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="nuda-cd-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stop-color="#e4ff54" />
        <stop offset="100%" stop-color="#9d6dff" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="50" class="nuda-cd__track" />
    <circle cx="60" cy="60" r="50" class="nuda-cd__bar" />
  </svg>
  <div class="nuda-cd__inner">
    <span class="nuda-cd__num">05</span>
    <span class="nuda-cd__unit">DAYS LEFT</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Countdown Ring
   SVG circle with gradient stroke that draws on mount.
   Set stroke-dashoffset via JS each tick for live updates. */

.nuda-cd {
  position: relative;
  width: 150px;
  height: 150px;
  display: inline-grid;
  place-items: center;
}

.nuda-cd__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.nuda-cd__track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.06);
  stroke-width: 8;
}

.nuda-cd__bar {
  fill: none;
  stroke: url(#nuda-cd-grad);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 314.15; /* 2 * PI * 50 */
  stroke-dashoffset: 314.15;
  animation: nuda-cd-draw 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.nuda-cd__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.nuda-cd__num {
  font: 700 44px system-ui;
  color: #fafafa;
  line-height: 1;
  letter-spacing: -2px;
}

.nuda-cd__unit {
  font: 500 10px system-ui;
  color: #a0a0a8;
  letter-spacing: 2px;
  margin-top: 4px;
}

@keyframes nuda-cd-draw {
  to { stroke-dashoffset: 78; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cd__bar { animation: none; stroke-dashoffset: 78; }
}`,
      },
    ],
  },

  /* ─────────────── 9. TICK MARKS FACE ─────────────── */
  {
    id: "tick-marks-face",
    name: "Tick Marks Face",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-ticks" role="img" aria-label="Watch face with 60 tick marks">
        <div className="nuda-ticks__face">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className={`nuda-ticks__t${i % 5 === 0 ? " nuda-ticks__t--major" : ""}`}
              style={{ transform: `rotate(${i * 6}deg) translateY(-72px)` }}
            />
          ))}
          <div className="nuda-ticks__dot" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ticks{--bg:#0c0c10;--accent:#e4ff54;display:inline-block;padding:14px;background:var(--bg);border-radius:50%;border:1px solid rgba(255,255,255,.06)}
      .nuda-ticks__face{position:relative;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,#111114,#09090b)}
      .nuda-ticks__t{position:absolute;left:50%;top:50%;width:1px;height:6px;margin-left:-.5px;background:rgba(255,255,255,.25);transform-origin:center 72px}
      .nuda-ticks__t--major{width:2px;height:10px;margin-left:-1px;background:var(--accent);box-shadow:0 0 4px rgba(228,255,84,.4)}
      .nuda-ticks__dot{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;background:var(--accent);animation:_tickpulse 2s ease-in-out infinite}
      @keyframes _tickpulse{50%{transform:scale(1.4);opacity:.6}}
      @media(prefers-reduced-motion:reduce){.nuda-ticks__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ticks" role="img" aria-label="Watch face with 60 tick marks">
  <div class="nuda-ticks__face">
    <!-- Repeat 60 times, every 5th gets nuda-ticks__t--major -->
    <span class="nuda-ticks__t nuda-ticks__t--major"
      style="transform: rotate(0deg) translateY(-72px)"></span>
    <span class="nuda-ticks__t"
      style="transform: rotate(6deg) translateY(-72px)"></span>
    <!-- ...up to rotate(354deg)... -->
    <div class="nuda-ticks__dot"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tick Marks Face
   60 minute marks; every 5th is a major hour tick.
   Generate via a CSS preprocessor or template loop. */

.nuda-ticks {
  --bg: #0c0c10;
  --accent: #e4ff54;
  display: inline-block;
  padding: 14px;
  background: var(--bg);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-ticks__face {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, #111114, #09090b);
}

.nuda-ticks__t {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 6px;
  margin-left: -0.5px;
  background: rgba(255, 255, 255, 0.25);
  transform-origin: center 72px;
}

.nuda-ticks__t--major {
  width: 2px;
  height: 10px;
  margin-left: -1px;
  background: var(--accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.4);
}

.nuda-ticks__dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: var(--accent);
  animation: nuda-ticks-pulse 2s ease-in-out infinite;
}

@keyframes nuda-ticks-pulse {
  50% { transform: scale(1.4); opacity: 0.6; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ticks__dot { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. SWISS RAILWAY CLOCK ─────────────── */
  {
    id: "swiss-railway-clock",
    name: "Swiss Railway Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-swiss" role="img" aria-label="Swiss railway clock">
        <div className="nuda-swiss__face">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="nuda-swiss__h" style={{ transform: `rotate(${i * 30}deg) translateY(-66px)` }} />
          ))}
          <div className="nuda-swiss__hour" />
          <div className="nuda-swiss__min" />
          <div className="nuda-swiss__sec">
            <span className="nuda-swiss__secBar" />
            <span className="nuda-swiss__secDot" />
          </div>
          <div className="nuda-swiss__pivot" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-swiss{--bg:#fafafa;--ink:#09090b;--red:#ff5e7a;display:inline-block;padding:10px;background:#0c0c10;border-radius:50%;border:1px solid rgba(255,255,255,.06)}
      .nuda-swiss__face{position:relative;width:160px;height:160px;border-radius:50%;background:var(--bg);box-shadow:inset 0 0 0 4px var(--ink)}
      .nuda-swiss__h{position:absolute;left:50%;top:50%;width:4px;height:12px;margin-left:-2px;background:var(--ink);transform-origin:center 66px}
      .nuda-swiss__hour,.nuda-swiss__min{position:absolute;left:50%;bottom:50%;background:var(--ink);transform-origin:bottom center;border-radius:2px}
      .nuda-swiss__hour{width:6px;height:42px;margin-left:-3px;transform:rotate(135deg)}
      .nuda-swiss__min{width:4px;height:62px;margin-left:-2px;transform:rotate(72deg)}
      .nuda-swiss__sec{position:absolute;left:50%;bottom:50%;width:0;transform-origin:bottom center;animation:_swisssec 60s steps(60) infinite}
      .nuda-swiss__secBar{position:absolute;left:-1px;bottom:0;width:2px;height:68px;background:var(--red)}
      .nuda-swiss__secDot{position:absolute;left:-7px;top:-72px;width:16px;height:16px;border-radius:50%;background:var(--red)}
      .nuda-swiss__pivot{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:var(--red);z-index:1}
      @keyframes _swisssec{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-swiss__sec{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-swiss" role="img" aria-label="Swiss railway clock">
  <div class="nuda-swiss__face">
    <!-- 12 hour ticks via loop -->
    <span class="nuda-swiss__h"
      style="transform: rotate(0deg) translateY(-66px)"></span>
    <!-- ...up to rotate(330deg)... -->
    <div class="nuda-swiss__hour"></div>
    <div class="nuda-swiss__min"></div>
    <div class="nuda-swiss__sec">
      <span class="nuda-swiss__secBar"></span>
      <span class="nuda-swiss__secDot"></span>
    </div>
    <div class="nuda-swiss__pivot"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Swiss Railway Clock
   Iconic Hans Hilfiker design. The seconds hand sweeps in 60 discrete
   steps with the red disc tip. */

.nuda-swiss {
  --bg: #fafafa;
  --ink: #09090b;
  --red: #ff5e7a;
  display: inline-block;
  padding: 10px;
  background: #0c0c10;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-swiss__face {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--bg);
  box-shadow: inset 0 0 0 4px var(--ink);
}

.nuda-swiss__h {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 12px;
  margin-left: -2px;
  background: var(--ink);
  transform-origin: center 66px;
}

.nuda-swiss__hour,
.nuda-swiss__min {
  position: absolute;
  left: 50%;
  bottom: 50%;
  background: var(--ink);
  transform-origin: bottom center;
  border-radius: 2px;
}

.nuda-swiss__hour {
  width: 6px;
  height: 42px;
  margin-left: -3px;
}

.nuda-swiss__min {
  width: 4px;
  height: 62px;
  margin-left: -2px;
}

.nuda-swiss__sec {
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 0;
  transform-origin: bottom center;
  animation: nuda-swiss-sec 60s steps(60) infinite;
}

.nuda-swiss__secBar {
  position: absolute;
  left: -1px;
  bottom: 0;
  width: 2px;
  height: 68px;
  background: var(--red);
}

.nuda-swiss__secDot {
  position: absolute;
  left: -7px;
  top: -72px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--red);
}

.nuda-swiss__pivot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: var(--red);
  z-index: 1;
}

@keyframes nuda-swiss-sec {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-swiss__sec { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 11. MILITARY 24H CLOCK ─────────────── */
  {
    id: "military-24h-clock",
    name: "24-Hour Military Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-mil" role="img" aria-label="2030 hours zulu">
        <div className="nuda-mil__head">
          <span className="nuda-mil__led" />
          <span>2030 ZULU</span>
        </div>
        <div className="nuda-mil__time">20:30:14</div>
        <div className="nuda-mil__row">
          <span>SEC <em>14</em></span>
          <span>DAY <em>132</em></span>
          <span>UTC+0</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mil{--bg:#0c0c10;--accent:#6ee7b7;--ink:#fafafa;display:inline-block;width:240px;padding:16px;background:var(--bg);border:1px solid rgba(255,255,255,.06);border-left:3px solid var(--accent);border-radius:6px;color:var(--ink);font-family:ui-monospace,Menlo,monospace}
      .nuda-mil__head{display:flex;align-items:center;gap:8px;font-size:10px;letter-spacing:2px;color:#a0a0a8}
      .nuda-mil__led{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 6px var(--accent);animation:_milblink 1.4s ease-in-out infinite}
      .nuda-mil__time{margin-top:6px;font-size:32px;font-weight:600;letter-spacing:-1px;color:var(--accent);text-shadow:0 0 10px rgba(110,231,183,.25)}
      .nuda-mil__row{display:flex;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px dashed rgba(255,255,255,.08);font-size:10px;letter-spacing:1px;color:#63636e}
      .nuda-mil__row em{font-style:normal;color:var(--ink);margin-left:4px}
      @keyframes _milblink{50%{opacity:.3}}
      @media(prefers-reduced-motion:reduce){.nuda-mil__led{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mil" role="img" aria-label="2030 hours zulu">
  <div class="nuda-mil__head">
    <span class="nuda-mil__led"></span>
    <span>2030 ZULU</span>
  </div>
  <div class="nuda-mil__time">20:30:14</div>
  <div class="nuda-mil__row">
    <span>SEC <em>14</em></span>
    <span>DAY <em>132</em></span>
    <span>UTC+0</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* 24-Hour Military Clock
   Monochrome amber-green readout with a status LED.
   Customize: --accent for branch/theme. */

.nuda-mil {
  --bg: #0c0c10;
  --accent: #6ee7b7;
  --ink: #fafafa;
  display: inline-block;
  width: 240px;
  padding: 16px;
  background: var(--bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid var(--accent);
  border-radius: 6px;
  color: var(--ink);
  font-family: ui-monospace, Menlo, monospace;
}

.nuda-mil__head {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  letter-spacing: 2px;
  color: #a0a0a8;
}

.nuda-mil__led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 6px var(--accent);
  animation: nuda-mil-blink 1.4s ease-in-out infinite;
}

.nuda-mil__time {
  margin-top: 6px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1px;
  color: var(--accent);
  text-shadow: 0 0 10px rgba(110, 231, 183, 0.25);
}

.nuda-mil__row {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed rgba(255, 255, 255, 0.08);
  font-size: 10px;
  letter-spacing: 1px;
  color: #63636e;
}

.nuda-mil__row em {
  font-style: normal;
  color: var(--ink);
  margin-left: 4px;
}

@keyframes nuda-mil-blink {
  50% { opacity: 0.3; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-mil__led { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 12. WEATHER CLOCK ─────────────── */
  {
    id: "weather-clock",
    name: "Weather Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-wx" role="img" aria-label="Weather clock 14:25 sunny">
        <svg className="nuda-wx__arc" viewBox="0 0 220 110">
          <path d="M10 100 A100 100 0 0 1 210 100" className="nuda-wx__path" />
          <circle cx="135" cy="36" r="6" className="nuda-wx__sun" />
        </svg>
        <div className="nuda-wx__time">14:25</div>
        <div className="nuda-wx__meta">
          <span className="nuda-wx__temp">21°</span>
          <span className="nuda-wx__cond">Sunny · Madrid</span>
        </div>
        <div className="nuda-wx__edges"><span>06:14</span><span>20:48</span></div>
      </div>
    ),
    cssInline: `
      .nuda-wx{--bg:#0c0c10;--sun:#ffb45e;width:240px;padding:16px;background:var(--bg);border:1px solid rgba(255,255,255,.06);border-radius:14px;color:#fafafa;font-family:system-ui}
      .nuda-wx__arc{width:100%;height:auto;display:block}
      .nuda-wx__path{fill:none;stroke:rgba(255,255,255,.1);stroke-width:1;stroke-dasharray:3 4}
      .nuda-wx__sun{fill:var(--sun);filter:drop-shadow(0 0 6px var(--sun));animation:_wxsun 6s ease-in-out infinite}
      .nuda-wx__time{font:600 28px ui-monospace,Menlo,monospace;letter-spacing:-1px;margin-top:-4px}
      .nuda-wx__meta{display:flex;align-items:baseline;gap:8px;margin-top:2px}
      .nuda-wx__temp{font-size:18px;font-weight:600;color:var(--sun)}
      .nuda-wx__cond{font-size:12px;color:#a0a0a8}
      .nuda-wx__edges{display:flex;justify-content:space-between;margin-top:8px;font-size:10px;letter-spacing:1px;color:#63636e}
      @keyframes _wxsun{0%,100%{transform:translateX(0) scale(1)}50%{transform:translateX(-2px) scale(1.1)}}
      @media(prefers-reduced-motion:reduce){.nuda-wx__sun{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-wx" role="img" aria-label="Weather clock 14:25 sunny">
  <svg class="nuda-wx__arc" viewBox="0 0 220 110">
    <path d="M10 100 A100 100 0 0 1 210 100" class="nuda-wx__path" />
    <circle cx="135" cy="36" r="6" class="nuda-wx__sun" />
  </svg>
  <div class="nuda-wx__time">14:25</div>
  <div class="nuda-wx__meta">
    <span class="nuda-wx__temp">21°</span>
    <span class="nuda-wx__cond">Sunny · Madrid</span>
  </div>
  <div class="nuda-wx__edges">
    <span>06:14</span>
    <span>20:48</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Weather Clock
   Sun arc shows daylight progress; the sun marker indicates current time
   between sunrise (left) and sunset (right). */

.nuda-wx {
  --bg: #0c0c10;
  --sun: #ffb45e;
  width: 240px;
  padding: 16px;
  background: var(--bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  color: #fafafa;
  font-family: system-ui;
}

.nuda-wx__arc {
  width: 100%;
  height: auto;
  display: block;
}

.nuda-wx__path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 1;
  stroke-dasharray: 3 4;
}

.nuda-wx__sun {
  fill: var(--sun);
  filter: drop-shadow(0 0 6px var(--sun));
  animation: nuda-wx-sun 6s ease-in-out infinite;
}

.nuda-wx__time {
  font: 600 28px ui-monospace, Menlo, monospace;
  letter-spacing: -1px;
  margin-top: -4px;
}

.nuda-wx__meta {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 2px;
}

.nuda-wx__temp {
  font-size: 18px;
  font-weight: 600;
  color: var(--sun);
}

.nuda-wx__cond {
  font-size: 12px;
  color: #a0a0a8;
}

.nuda-wx__edges {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 10px;
  letter-spacing: 1px;
  color: #63636e;
}

@keyframes nuda-wx-sun {
  0%, 100% { transform: translateX(0) scale(1); }
  50%      { transform: translateX(-2px) scale(1.1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-wx__sun { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 13. DAY/NIGHT INDICATOR ─────────────── */
  {
    id: "day-night-indicator",
    name: "Day/Night Indicator",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-dn" role="img" aria-label="Day-night indicator">
        <div className="nuda-dn__sky">
          <div className="nuda-dn__star" style={{ left: "15%", top: "20%" }} />
          <div className="nuda-dn__star" style={{ left: "45%", top: "35%" }} />
          <div className="nuda-dn__star" style={{ left: "75%", top: "15%" }} />
          <div className="nuda-dn__star" style={{ left: "85%", top: "40%" }} />
          <div className="nuda-dn__orb" />
          <div className="nuda-dn__horizon" />
          <div className="nuda-dn__land" />
        </div>
        <div className="nuda-dn__time"><span>21:42</span><em>Night</em></div>
      </div>
    ),
    cssInline: `
      .nuda-dn{--ink:#fafafa;display:inline-block;width:220px;border-radius:14px;overflow:hidden;background:#0c0c10;border:1px solid rgba(255,255,255,.06);font-family:system-ui;color:var(--ink)}
      .nuda-dn__sky{position:relative;height:110px;background:linear-gradient(180deg,#0a0a1a 0%,#16162a 50%,#1a1a30 100%)}
      .nuda-dn__star{position:absolute;width:2px;height:2px;background:#fafafa;border-radius:50%;box-shadow:0 0 4px #fafafa;animation:_dntwinkle 3s ease-in-out infinite}
      .nuda-dn__star:nth-child(2){animation-delay:.4s}
      .nuda-dn__star:nth-child(3){animation-delay:.8s}
      .nuda-dn__star:nth-child(4){animation-delay:1.2s}
      .nuda-dn__orb{position:absolute;right:30px;top:18px;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle at 60% 35%,#fafafa 0,#a0a0a8 70%,#63636e 100%);box-shadow:0 0 18px rgba(255,255,255,.2);animation:_dnfloat 6s ease-in-out infinite}
      .nuda-dn__horizon{position:absolute;left:0;right:0;bottom:24px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)}
      .nuda-dn__land{position:absolute;left:0;right:0;bottom:0;height:24px;background:linear-gradient(180deg,#1a1a20,#09090b)}
      .nuda-dn__time{display:flex;justify-content:space-between;align-items:baseline;padding:10px 14px}
      .nuda-dn__time span{font:600 18px ui-monospace,Menlo,monospace}
      .nuda-dn__time em{font-style:normal;font-size:10px;letter-spacing:2px;color:#a0a0a8}
      @keyframes _dntwinkle{0%,100%{opacity:.3}50%{opacity:1}}
      @keyframes _dnfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
      @media(prefers-reduced-motion:reduce){.nuda-dn__star,.nuda-dn__orb{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dn" role="img" aria-label="Day-night indicator">
  <div class="nuda-dn__sky">
    <div class="nuda-dn__star" style="left:15%; top:20%"></div>
    <div class="nuda-dn__star" style="left:45%; top:35%"></div>
    <div class="nuda-dn__star" style="left:75%; top:15%"></div>
    <div class="nuda-dn__star" style="left:85%; top:40%"></div>
    <div class="nuda-dn__orb"></div>
    <div class="nuda-dn__horizon"></div>
    <div class="nuda-dn__land"></div>
  </div>
  <div class="nuda-dn__time">
    <span>21:42</span>
    <em>Night</em>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Day/Night Indicator
   Animated night scene with floating moon and twinkling stars.
   Swap orb gradient + sky gradient for a daytime variant. */

.nuda-dn {
  --ink: #fafafa;
  display: inline-block;
  width: 220px;
  border-radius: 14px;
  overflow: hidden;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-family: system-ui;
  color: var(--ink);
}

.nuda-dn__sky {
  position: relative;
  height: 110px;
  background: linear-gradient(180deg, #0a0a1a 0%, #16162a 50%, #1a1a30 100%);
}

.nuda-dn__star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fafafa;
  border-radius: 50%;
  box-shadow: 0 0 4px #fafafa;
  animation: nuda-dn-twinkle 3s ease-in-out infinite;
}
.nuda-dn__star:nth-child(2) { animation-delay: 0.4s; }
.nuda-dn__star:nth-child(3) { animation-delay: 0.8s; }
.nuda-dn__star:nth-child(4) { animation-delay: 1.2s; }

.nuda-dn__orb {
  position: absolute;
  right: 30px;
  top: 18px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 60% 35%,
    #fafafa 0,
    #a0a0a8 70%,
    #63636e 100%
  );
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.2);
  animation: nuda-dn-float 6s ease-in-out infinite;
}

.nuda-dn__horizon {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.nuda-dn__land {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 24px;
  background: linear-gradient(180deg, #1a1a20, #09090b);
}

.nuda-dn__time {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 14px;
}

.nuda-dn__time span {
  font: 600 18px ui-monospace, Menlo, monospace;
}

.nuda-dn__time em {
  font-style: normal;
  font-size: 10px;
  letter-spacing: 2px;
  color: #a0a0a8;
}

@keyframes nuda-dn-twinkle {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 1; }
}

@keyframes nuda-dn-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dn__star,
  .nuda-dn__orb { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 14. HOURGLASS ─────────────── */
  {
    id: "sand-hourglass",
    name: "Sand Hourglass",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-hg" role="img" aria-label="Hourglass timer">
        <div className="nuda-hg__top">
          <div className="nuda-hg__sandTop" />
        </div>
        <div className="nuda-hg__neck"><span className="nuda-hg__stream" /></div>
        <div className="nuda-hg__bot">
          <div className="nuda-hg__sandBot" />
          <span className="nuda-hg__grain" style={{ animationDelay: "0s" }} />
          <span className="nuda-hg__grain" style={{ animationDelay: ".4s", left: "55%" }} />
          <span className="nuda-hg__grain" style={{ animationDelay: ".8s", left: "45%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-hg{--sand:#ffb45e;--glass:rgba(255,255,255,.06);position:relative;display:inline-block;width:80px;padding:6px}
      .nuda-hg__top,.nuda-hg__bot{position:relative;width:80px;height:48px;background:var(--glass);border:1px solid rgba(255,255,255,.08);overflow:hidden}
      .nuda-hg__top{border-radius:4px 4px 50% 50% / 4px 4px 30% 30%;clip-path:polygon(0 0,100% 0,55% 100%,45% 100%)}
      .nuda-hg__bot{border-radius:50% 50% 4px 4px / 30% 30% 4px 4px;clip-path:polygon(45% 0,55% 0,100% 100%,0 100%);margin-top:-1px}
      .nuda-hg__sandTop{position:absolute;left:0;right:0;top:0;height:100%;background:var(--sand);animation:_hgdrain 6s linear infinite}
      .nuda-hg__sandBot{position:absolute;left:0;right:0;bottom:0;height:0;background:var(--sand);animation:_hgfill 6s linear infinite}
      .nuda-hg__neck{position:relative;width:8px;height:6px;margin:-1px auto;background:#0c0c10;border-left:1px solid rgba(255,255,255,.08);border-right:1px solid rgba(255,255,255,.08)}
      .nuda-hg__stream{position:absolute;left:50%;top:0;width:1.5px;height:6px;margin-left:-.75px;background:var(--sand)}
      .nuda-hg__grain{position:absolute;left:50%;top:0;width:2px;height:2px;background:var(--sand);border-radius:50%;animation:_hggrain 1.4s linear infinite}
      @keyframes _hgdrain{to{height:0}}
      @keyframes _hgfill{to{height:100%}}
      @keyframes _hggrain{0%{top:0;opacity:1}80%{opacity:1}100%{top:40px;opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-hg__sandTop,.nuda-hg__sandBot,.nuda-hg__grain{animation:none}.nuda-hg__sandTop{height:50%}.nuda-hg__sandBot{height:50%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-hg" role="img" aria-label="Hourglass timer">
  <div class="nuda-hg__top">
    <div class="nuda-hg__sandTop"></div>
  </div>
  <div class="nuda-hg__neck">
    <span class="nuda-hg__stream"></span>
  </div>
  <div class="nuda-hg__bot">
    <div class="nuda-hg__sandBot"></div>
    <span class="nuda-hg__grain" style="animation-delay:0s"></span>
    <span class="nuda-hg__grain" style="animation-delay:.4s; left:55%"></span>
    <span class="nuda-hg__grain" style="animation-delay:.8s; left:45%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sand Hourglass
   Top chamber drains while the bottom fills, with falling grains.
   Two clip-paths form the triangular hourglass profile. */

.nuda-hg {
  --sand: #ffb45e;
  --glass: rgba(255, 255, 255, 0.06);
  position: relative;
  display: inline-block;
  width: 80px;
  padding: 6px;
}

.nuda-hg__top,
.nuda-hg__bot {
  position: relative;
  width: 80px;
  height: 48px;
  background: var(--glass);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.nuda-hg__top {
  border-radius: 4px 4px 50% 50% / 4px 4px 30% 30%;
  clip-path: polygon(0 0, 100% 0, 55% 100%, 45% 100%);
}

.nuda-hg__bot {
  border-radius: 50% 50% 4px 4px / 30% 30% 4px 4px;
  clip-path: polygon(45% 0, 55% 0, 100% 100%, 0 100%);
  margin-top: -1px;
}

.nuda-hg__sandTop {
  position: absolute;
  inset: 0;
  background: var(--sand);
  animation: nuda-hg-drain 6s linear infinite;
}

.nuda-hg__sandBot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  background: var(--sand);
  animation: nuda-hg-fill 6s linear infinite;
}

.nuda-hg__neck {
  position: relative;
  width: 8px;
  height: 6px;
  margin: -1px auto;
  background: #0c0c10;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.nuda-hg__stream {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1.5px;
  height: 6px;
  margin-left: -0.75px;
  background: var(--sand);
}

.nuda-hg__grain {
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 2px;
  background: var(--sand);
  border-radius: 50%;
  animation: nuda-hg-grain 1.4s linear infinite;
}

@keyframes nuda-hg-drain { to { height: 0; } }
@keyframes nuda-hg-fill  { to { height: 100%; } }
@keyframes nuda-hg-grain {
  0%   { top: 0;     opacity: 1; }
  80%  {             opacity: 1; }
  100% { top: 40px;  opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hg__sandTop,
  .nuda-hg__sandBot,
  .nuda-hg__grain { animation: none; }
  .nuda-hg__sandTop { height: 50%; }
  .nuda-hg__sandBot { height: 50%; }
}`,
      },
    ],
  },

  /* ─────────────── 15. WORD CLOCK ─────────────── */
  {
    id: "word-clock",
    name: "Word Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-word" role="img" aria-label="It is half past three">
        <div className="nuda-word__grid">
          <span className="nuda-word__on">IT</span>
          <span>A</span>
          <span className="nuda-word__on">IS</span>
          <span>L</span>
          <span>F</span>
          <span>TEN</span>
          <span className="nuda-word__on">HALF</span>
          <span>QUARTER</span>
          <span>TWENTY</span>
          <span>FIVE</span>
          <span>MINUTES</span>
          <span>TO</span>
          <span className="nuda-word__on">PAST</span>
          <span>ONE</span>
          <span>TWO</span>
          <span className="nuda-word__on">THREE</span>
          <span>FOUR</span>
          <span>FIVE</span>
          <span>SIX</span>
          <span>SEVEN</span>
          <span>EIGHT</span>
          <span>NINE</span>
          <span className="nuda-word__on">O&apos;CLOCK</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-word{--accent:#e4ff54;--dim:#33333a;display:inline-block;padding:18px;background:#09090b;border:1px solid rgba(255,255,255,.06);border-radius:12px;max-width:240px;font-family:ui-monospace,Menlo,monospace}
      .nuda-word__grid{display:flex;flex-wrap:wrap;gap:6px 8px;font-size:13px;font-weight:600;letter-spacing:1px}
      .nuda-word__grid>span{color:var(--dim);transition:color .4s ease}
      .nuda-word__on{color:var(--accent);text-shadow:0 0 8px rgba(228,255,84,.4);animation:_wordglow 4s ease-in-out infinite}
      .nuda-word__on:nth-child(3n){animation-delay:.6s}
      .nuda-word__on:nth-child(5n){animation-delay:1.2s}
      @keyframes _wordglow{0%,100%{opacity:1}50%{opacity:.7}}
      @media(prefers-reduced-motion:reduce){.nuda-word__on{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-word" role="img" aria-label="It is half past three">
  <div class="nuda-word__grid">
    <span class="nuda-word__on">IT</span>
    <span>A</span>
    <span class="nuda-word__on">IS</span>
    <span>L</span>
    <span>F</span>
    <span>TEN</span>
    <span class="nuda-word__on">HALF</span>
    <span>QUARTER</span>
    <span>TWENTY</span>
    <span>FIVE</span>
    <span>MINUTES</span>
    <span>TO</span>
    <span class="nuda-word__on">PAST</span>
    <span>ONE</span>
    <span>TWO</span>
    <span class="nuda-word__on">THREE</span>
    <span>FOUR</span>
    <span>FIVE</span>
    <span>SIX</span>
    <span>SEVEN</span>
    <span>EIGHT</span>
    <span>NINE</span>
    <span class="nuda-word__on">O'CLOCK</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Word Clock
   Famous QlockTwo-style typographic clock. Active words highlight in
   the accent color; the rest fade into the background. */

.nuda-word {
  --accent: #e4ff54;
  --dim: #33333a;
  display: inline-block;
  padding: 18px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  max-width: 240px;
  font-family: ui-monospace, Menlo, monospace;
}

.nuda-word__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
}

.nuda-word__grid > span {
  color: var(--dim);
  transition: color 0.4s ease;
}

.nuda-word__on {
  color: var(--accent);
  text-shadow: 0 0 8px rgba(228, 255, 84, 0.4);
  animation: nuda-word-glow 4s ease-in-out infinite;
}

.nuda-word__on:nth-child(3n) { animation-delay: 0.6s; }
.nuda-word__on:nth-child(5n) { animation-delay: 1.2s; }

@keyframes nuda-word-glow {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.7; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-word__on { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 16. PULSE HEART CLOCK ─────────────── */
  {
    id: "pulse-heart-clock",
    name: "Pulse Heart Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-pulse" role="img" aria-label="Pulse 72 bpm">
        <div className="nuda-pulse__heart" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="32" height="32">
            <path d="M16 28 C2 18 2 8 10 8 c3 0 5 2 6 4 c1-2 3-4 6-4 c8 0 8 10-6 20z" fill="#ff5e7a" />
          </svg>
        </div>
        <div className="nuda-pulse__bpm"><span>72</span><em>BPM</em></div>
        <svg className="nuda-pulse__ecg" viewBox="0 0 200 40">
          <polyline points="0,20 30,20 38,20 44,8 50,32 56,12 62,20 90,20 100,20 110,12 116,28 122,20 200,20" fill="none" stroke="#ff5e7a" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="nuda-pulse__line" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-pulse{--accent:#ff5e7a;display:inline-flex;align-items:center;gap:14px;padding:14px 18px;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:14px;font-family:system-ui;color:#fafafa}
      .nuda-pulse__heart{animation:_pulsebeat .83s ease-in-out infinite;filter:drop-shadow(0 0 6px rgba(255,94,122,.5))}
      .nuda-pulse__bpm{display:flex;flex-direction:column;line-height:1}
      .nuda-pulse__bpm span{font:700 32px ui-monospace,Menlo,monospace;letter-spacing:-2px}
      .nuda-pulse__bpm em{font-style:normal;font-size:9px;letter-spacing:2px;color:#a0a0a8;margin-top:2px}
      .nuda-pulse__ecg{width:110px;height:40px;flex-shrink:0}
      .nuda-pulse__line{stroke-dasharray:300;stroke-dashoffset:300;animation:_pulseecg 1.66s linear infinite;filter:drop-shadow(0 0 4px var(--accent))}
      @keyframes _pulsebeat{0%,28%,100%{transform:scale(1)}14%{transform:scale(1.18)}42%{transform:scale(1.08)}}
      @keyframes _pulseecg{0%{stroke-dashoffset:300}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-300}}
      @media(prefers-reduced-motion:reduce){.nuda-pulse__heart,.nuda-pulse__line{animation:none}.nuda-pulse__line{stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pulse" role="img" aria-label="Pulse 72 bpm">
  <div class="nuda-pulse__heart" aria-hidden="true">
    <svg viewBox="0 0 32 32" width="32" height="32">
      <path d="M16 28 C2 18 2 8 10 8 c3 0 5 2 6 4 c1-2 3-4 6-4 c8 0 8 10-6 20z"
        fill="#ff5e7a" />
    </svg>
  </div>
  <div class="nuda-pulse__bpm">
    <span>72</span>
    <em>BPM</em>
  </div>
  <svg class="nuda-pulse__ecg" viewBox="0 0 200 40">
    <polyline points="0,20 30,20 38,20 44,8 50,32 56,12 62,20 90,20 100,20
                      110,12 116,28 122,20 200,20"
      fill="none" stroke="#ff5e7a" stroke-width="1.5"
      stroke-linejoin="round" stroke-linecap="round"
      class="nuda-pulse__line" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pulse Heart Clock
   Heart beats in a double-thump pattern at 72 bpm (interval = 60/72 ≈ 0.83s).
   ECG line scrolls behind. */

.nuda-pulse {
  --accent: #ff5e7a;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  font-family: system-ui;
  color: #fafafa;
}

.nuda-pulse__heart {
  animation: nuda-pulse-beat 0.83s ease-in-out infinite;
  filter: drop-shadow(0 0 6px rgba(255, 94, 122, 0.5));
}

.nuda-pulse__bpm {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.nuda-pulse__bpm span {
  font: 700 32px ui-monospace, Menlo, monospace;
  letter-spacing: -2px;
}

.nuda-pulse__bpm em {
  font-style: normal;
  font-size: 9px;
  letter-spacing: 2px;
  color: #a0a0a8;
  margin-top: 2px;
}

.nuda-pulse__ecg {
  width: 110px;
  height: 40px;
  flex-shrink: 0;
}

.nuda-pulse__line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: nuda-pulse-ecg 1.66s linear infinite;
  filter: drop-shadow(0 0 4px var(--accent));
}

@keyframes nuda-pulse-beat {
  0%, 28%, 100% { transform: scale(1); }
  14%           { transform: scale(1.18); }
  42%           { transform: scale(1.08); }
}

@keyframes nuda-pulse-ecg {
  0%   { stroke-dashoffset: 300; }
  50%  { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -300; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pulse__heart,
  .nuda-pulse__line { animation: none; }
  .nuda-pulse__line { stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 17. BINARY CLOCK ─────────────── */
  {
    id: "binary-clock",
    name: "Binary Clock",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-bin" role="img" aria-label="Binary clock 14:25:08">
        <div className="nuda-bin__label">H · M · S</div>
        <div className="nuda-bin__grid">
          {/* H tens=1, H ones=4, M tens=2, M ones=5, S tens=0, S ones=8 */}
          {[
            [0, 0, 0, 1], // 1
            [0, 1, 0, 0], // 4
            [0, 0, 1, 0], // 2
            [0, 1, 0, 1], // 5
            [0, 0, 0, 0], // 0
            [1, 0, 0, 0], // 8
          ].map((col, ci) => (
            <div className="nuda-bin__col" key={ci}>
              {col.map((b, ri) => (
                <span key={ri} className={`nuda-bin__dot${b ? " nuda-bin__dot--on" : ""}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="nuda-bin__foot">14:25:08</div>
      </div>
    ),
    cssInline: `
      .nuda-bin{--accent:#6ee7b7;--off:#1a1a20;display:inline-block;padding:14px;background:#09090b;border:1px solid rgba(255,255,255,.06);border-radius:10px;font-family:ui-monospace,Menlo,monospace;color:#fafafa}
      .nuda-bin__label{font-size:9px;letter-spacing:3px;color:#63636e;margin-bottom:8px;text-align:center}
      .nuda-bin__grid{display:grid;grid-template-columns:repeat(6,1fr);gap:6px}
      .nuda-bin__col{display:flex;flex-direction:column;gap:6px}
      .nuda-bin__dot{width:14px;height:14px;border-radius:50%;background:var(--off);border:1px solid rgba(255,255,255,.06)}
      .nuda-bin__dot--on{background:var(--accent);box-shadow:0 0 8px var(--accent);animation:_bingl 3s ease-in-out infinite}
      .nuda-bin__dot--on:nth-child(2){animation-delay:.4s}
      .nuda-bin__dot--on:nth-child(3){animation-delay:.8s}
      .nuda-bin__foot{margin-top:10px;text-align:center;font-size:11px;letter-spacing:2px;color:#a0a0a8}
      @keyframes _bingl{0%,100%{box-shadow:0 0 8px var(--accent)}50%{box-shadow:0 0 14px var(--accent)}}
      @media(prefers-reduced-motion:reduce){.nuda-bin__dot--on{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bin" role="img" aria-label="Binary clock 14:25:08">
  <div class="nuda-bin__label">H · M · S</div>
  <div class="nuda-bin__grid">
    <!-- 6 columns: H-tens, H-ones, M-tens, M-ones, S-tens, S-ones -->
    <!-- Each column has 4 rows (8, 4, 2, 1) -->
    <div class="nuda-bin__col">
      <span class="nuda-bin__dot"></span>
      <span class="nuda-bin__dot"></span>
      <span class="nuda-bin__dot"></span>
      <span class="nuda-bin__dot nuda-bin__dot--on"></span>
    </div>
    <!-- ...repeat for each column with appropriate bits... -->
  </div>
  <div class="nuda-bin__foot">14:25:08</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Binary Clock
   Six columns of 4 dots representing BCD-encoded hours, minutes, seconds.
   Lit dots use the accent color with a subtle glow pulse. */

.nuda-bin {
  --accent: #6ee7b7;
  --off: #1a1a20;
  display: inline-block;
  padding: 14px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  font-family: ui-monospace, Menlo, monospace;
  color: #fafafa;
}

.nuda-bin__label {
  font-size: 9px;
  letter-spacing: 3px;
  color: #63636e;
  margin-bottom: 8px;
  text-align: center;
}

.nuda-bin__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
}

.nuda-bin__col {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nuda-bin__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--off);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-bin__dot--on {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: nuda-bin-glow 3s ease-in-out infinite;
}

.nuda-bin__dot--on:nth-child(2) { animation-delay: 0.4s; }
.nuda-bin__dot--on:nth-child(3) { animation-delay: 0.8s; }

.nuda-bin__foot {
  margin-top: 10px;
  text-align: center;
  font-size: 11px;
  letter-spacing: 2px;
  color: #a0a0a8;
}

@keyframes nuda-bin-glow {
  0%, 100% { box-shadow: 0 0 8px var(--accent); }
  50%      { box-shadow: 0 0 14px var(--accent); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bin__dot--on { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 18. SUNDIAL ─────────────── */
  {
    id: "sundial",
    name: "Sundial",
    category: "Watch Faces & Clocks",
    preview: (
      <div className="nuda-sun" role="img" aria-label="Sundial midday">
        <div className="nuda-sun__face">
          <span className="nuda-sun__sun" />
          <span className="nuda-sun__mark" style={{ transform: "rotate(-60deg) translateY(-58px)" }}>VI</span>
          <span className="nuda-sun__mark" style={{ transform: "rotate(-30deg) translateY(-58px)" }}>IX</span>
          <span className="nuda-sun__mark" style={{ transform: "rotate(0deg) translateY(-58px)" }}>XII</span>
          <span className="nuda-sun__mark" style={{ transform: "rotate(30deg) translateY(-58px)" }}>III</span>
          <span className="nuda-sun__mark" style={{ transform: "rotate(60deg) translateY(-58px)" }}>VI</span>
          <div className="nuda-sun__gnomon" />
          <div className="nuda-sun__shadow" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sun{--bg:#1a1410;--stone:#a89878;--gold:#ffb45e;display:inline-block;padding:14px;background:var(--bg);border-radius:50%;border:1px solid rgba(168,152,120,.15)}
      .nuda-sun__face{position:relative;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle at 50% 30%,#2a2218,#0f0c08);overflow:hidden}
      .nuda-sun__sun{position:absolute;top:8px;left:50%;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:var(--gold);box-shadow:0 0 16px var(--gold),0 0 32px rgba(255,180,94,.4);animation:_sunglow 4s ease-in-out infinite}
      .nuda-sun__mark{position:absolute;left:50%;top:50%;width:20px;margin-left:-10px;font:600 11px Georgia,serif;color:var(--stone);text-align:center;transform-origin:center 58px}
      .nuda-sun__gnomon{position:absolute;left:50%;bottom:50%;width:2px;height:60px;margin-left:-1px;background:linear-gradient(180deg,var(--gold),var(--stone));border-radius:1px;transform-origin:bottom center;animation:none}
      .nuda-sun__shadow{position:absolute;left:50%;bottom:50%;width:2px;height:60px;margin-left:-1px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));transform-origin:bottom center;animation:_sunshadow 28s linear infinite;filter:blur(1px)}
      @keyframes _sunglow{50%{transform:scale(1.1);box-shadow:0 0 22px var(--gold),0 0 40px rgba(255,180,94,.5)}}
      @keyframes _sunshadow{0%{transform:rotate(-60deg)}100%{transform:rotate(60deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-sun__sun,.nuda-sun__shadow{animation:none}.nuda-sun__shadow{transform:rotate(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sun" role="img" aria-label="Sundial midday">
  <div class="nuda-sun__face">
    <span class="nuda-sun__sun"></span>
    <span class="nuda-sun__mark"
      style="transform: rotate(-60deg) translateY(-58px)">VI</span>
    <span class="nuda-sun__mark"
      style="transform: rotate(-30deg) translateY(-58px)">IX</span>
    <span class="nuda-sun__mark"
      style="transform: rotate(0deg) translateY(-58px)">XII</span>
    <span class="nuda-sun__mark"
      style="transform: rotate(30deg) translateY(-58px)">III</span>
    <span class="nuda-sun__mark"
      style="transform: rotate(60deg) translateY(-58px)">VI</span>
    <div class="nuda-sun__gnomon"></div>
    <div class="nuda-sun__shadow"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sundial
   The gnomon stays still; the shadow rotates 120° across the day
   (-60° dawn → +60° dusk). Roman numerals mark the hours. */

.nuda-sun {
  --bg: #1a1410;
  --stone: #a89878;
  --gold: #ffb45e;
  display: inline-block;
  padding: 14px;
  background: var(--bg);
  border-radius: 50%;
  border: 1px solid rgba(168, 152, 120, 0.15);
}

.nuda-sun__face {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 30%, #2a2218, #0f0c08);
  overflow: hidden;
}

.nuda-sun__sun {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow:
    0 0 16px var(--gold),
    0 0 32px rgba(255, 180, 94, 0.4);
  animation: nuda-sun-glow 4s ease-in-out infinite;
}

.nuda-sun__mark {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  margin-left: -10px;
  font: 600 11px Georgia, serif;
  color: var(--stone);
  text-align: center;
  transform-origin: center 58px;
}

.nuda-sun__gnomon {
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 2px;
  height: 60px;
  margin-left: -1px;
  background: linear-gradient(180deg, var(--gold), var(--stone));
  border-radius: 1px;
}

.nuda-sun__shadow {
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 2px;
  height: 60px;
  margin-left: -1px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
  transform-origin: bottom center;
  animation: nuda-sun-shadow 28s linear infinite;
  filter: blur(1px);
}

@keyframes nuda-sun-glow {
  50% {
    transform: scale(1.1);
    box-shadow:
      0 0 22px var(--gold),
      0 0 40px rgba(255, 180, 94, 0.5);
  }
}

@keyframes nuda-sun-shadow {
  0%   { transform: rotate(-60deg); }
  100% { transform: rotate(60deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sun__sun,
  .nuda-sun__shadow { animation: none; }
  .nuda-sun__shadow { transform: rotate(0); }
}`,
      },
    ],
  },
];
