import type { NudaComponent } from "./types";

export const audioWaveforms: NudaComponent[] = [
  /* ─────────────── 1. Equalizer Bars ─────────────── */
  {
    id: "equalizer-bars",
    name: "Equalizer Bars",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-eq" role="img" aria-label="Audio playing">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-eq{display:inline-flex;align-items:flex-end;gap:3px;height:30px}
      .nuda-eq span{width:4px;height:100%;background:#e4ff54;border-radius:2px;animation:_eqBar 1s ease-in-out infinite}
      @keyframes _eqBar{0%,100%{transform:scaleY(.2)}50%{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-eq span{animation:none;transform:scaleY(.6)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-eq" role="img" aria-label="Audio playing">
  <span style="animation-delay: 0s"></span>
  <span style="animation-delay: 0.12s"></span>
  <span style="animation-delay: 0.24s"></span>
  <span style="animation-delay: 0.36s"></span>
  <span style="animation-delay: 0.48s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-eq {
  display: inline-flex;
  align-items: flex-end;
  gap: 3px;
  height: 30px;
}

.nuda-eq span {
  width: 4px;
  height: 100%;
  background: #e4ff54;
  border-radius: 2px;
  animation: nuda-eq-bar 1s ease-in-out infinite;
}

@keyframes nuda-eq-bar {
  0%, 100% { transform: scaleY(0.2); }
  50%      { transform: scaleY(1);   }
}`,
      },
    ],
  },

  /* ─────────────── 2. Voice Activity Meter ─────────────── */
  {
    id: "voice-meter",
    name: "Voice Activity Meter",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-vmeter">
        {Array.from({ length: 16 }, (_, i) => {
          const active = i < 9;
          const hot = i >= 6;
          return <span key={i} className={`nuda-vmeter__cell${active ? " is-on" : ""}${hot ? " is-hot" : ""}`} style={{ animationDelay: `${i * 40}ms` }} />;
        })}
      </div>
    ),
    cssInline: `
      .nuda-vmeter{display:inline-flex;align-items:center;gap:2px;padding:8px 12px;background:rgba(0,0,0,.4);border-radius:8px}
      .nuda-vmeter__cell{width:3px;height:16px;background:rgba(255,255,255,.08);border-radius:1px;transition:background .15s;animation:_vmeterPulse 1.2s ease-in-out infinite}
      .nuda-vmeter__cell.is-on{background:#6ee7b7}
      .nuda-vmeter__cell.is-hot.is-on{background:#ffb45e}
      .nuda-vmeter__cell:not(.is-on){animation:none}
      @keyframes _vmeterPulse{0%,100%{opacity:.6;transform:scaleY(.6)}50%{opacity:1;transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-vmeter__cell{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vmeter">
  <!-- Repeat 16 cells. Add .is-on up to current level, .is-hot for >=6 -->
  <span class="nuda-vmeter__cell is-on"></span>
  <span class="nuda-vmeter__cell is-on"></span>
  <!-- ... -->
  <span class="nuda-vmeter__cell is-on is-hot"></span>
  <span class="nuda-vmeter__cell"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-vmeter__cell {
  width: 3px;
  height: 16px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1px;
  transition: background 0.15s;
  animation: nuda-vmeter-pulse 1.2s ease-in-out infinite;
}

.nuda-vmeter__cell.is-on        { background: #6ee7b7; }
.nuda-vmeter__cell.is-hot.is-on { background: #ffb45e; }

.nuda-vmeter__cell:not(.is-on) { animation: none; }

@keyframes nuda-vmeter-pulse {
  0%, 100% { opacity: 0.6; transform: scaleY(0.6); }
  50%      { opacity: 1;   transform: scaleY(1);   }
}`,
      },
    ],
  },

  /* ─────────────── 3. Soundwave Pulse ─────────────── */
  {
    id: "soundwave-pulse",
    name: "Soundwave Pulse",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-spulse">
        <span className="nuda-spulse__ring" />
        <span className="nuda-spulse__ring" />
        <span className="nuda-spulse__ring" />
        <div className="nuda-spulse__core">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h2M21 12h-2M7 7v10M11 4v16M15 7v10M19 10v4" />
          </svg>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-spulse{position:relative;width:54px;height:54px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-spulse__core{position:relative;width:34px;height:34px;border-radius:50%;background:#e4ff54;color:#09090b;display:flex;align-items:center;justify-content:center;z-index:1;box-shadow:0 0 16px rgba(228,255,84,.5)}
      .nuda-spulse__core svg{width:16px;height:16px}
      .nuda-spulse__ring{position:absolute;width:34px;height:34px;border-radius:50%;border:2px solid #e4ff54;opacity:0;animation:_spulseRing 2.4s ease-out infinite}
      .nuda-spulse__ring:nth-child(2){animation-delay:.8s}
      .nuda-spulse__ring:nth-child(3){animation-delay:1.6s}
      @keyframes _spulseRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(2);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-spulse__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-spulse">
  <span class="nuda-spulse__ring"></span>
  <span class="nuda-spulse__ring"></span>
  <span class="nuda-spulse__ring"></span>
  <div class="nuda-spulse__core">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12h2M21 12h-2M7 7v10M11 4v16M15 7v10M19 10v4" />
    </svg>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-spulse__ring {
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid #e4ff54;
  opacity: 0;
  animation: nuda-spulse-ring 2.4s ease-out infinite;
}

.nuda-spulse__ring:nth-child(2) { animation-delay: 0.8s; }
.nuda-spulse__ring:nth-child(3) { animation-delay: 1.6s; }

@keyframes nuda-spulse-ring {
  0%   { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2); opacity: 0;   }
}`,
      },
    ],
  },

  /* ─────────────── 4. Waveform Scrubber ─────────────── */
  {
    id: "waveform-scrubber",
    name: "Waveform Scrubber",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-scrub">
        <div className="nuda-scrub__bars">
          {Array.from({ length: 32 }, (_, i) => {
            const h = 30 + Math.abs(Math.sin(i * 0.6)) * 60;
            return <span key={i} className={`nuda-scrub__bar${i < 12 ? " is-played" : ""}`} style={{ height: `${h}%` }} />;
          })}
        </div>
        <div className="nuda-scrub__time">
          <span>0:42</span>
          <span>3:18</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scrub{padding:12px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:280px}
      .nuda-scrub__bars{display:flex;align-items:center;gap:2px;height:36px;cursor:pointer;margin-bottom:6px}
      .nuda-scrub__bar{flex:1;background:rgba(255,255,255,.16);border-radius:1px;transition:background .25s,transform .2s;animation:_scrubIn .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-scrub__bar.is-played{background:#e4ff54}
      .nuda-scrub__bars:hover .nuda-scrub__bar{transform:scaleY(.85)}
      .nuda-scrub__bar:hover{transform:scaleY(1.15) !important;background:#fafafa}
      .nuda-scrub__time{display:flex;justify-content:space-between;color:#63636e;font-size:10px;font-variant-numeric:tabular-nums;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      @keyframes _scrubIn{from{transform:scaleY(0);transform-origin:center}to{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-scrub__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scrub">
  <div class="nuda-scrub__bars">
    <!-- Repeat per sample. Add .is-played for played portion. -->
    <span class="nuda-scrub__bar is-played" style="height:50%"></span>
    <span class="nuda-scrub__bar is-played" style="height:80%"></span>
    <span class="nuda-scrub__bar" style="height:60%"></span>
    <!-- ... -->
  </div>
  <div class="nuda-scrub__time">
    <span>0:42</span>
    <span>3:18</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-scrub__bar {
  flex: 1;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 1px;
  transition: background 0.25s, transform 0.2s;
  animation: nuda-scrub-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-scrub__bar.is-played { background: #e4ff54; }

.nuda-scrub__bars:hover .nuda-scrub__bar { transform: scaleY(0.85); }

.nuda-scrub__bar:hover {
  transform: scaleY(1.15) !important;
  background: #fafafa;
}`,
      },
    ],
  },

  /* ─────────────── 5. Vinyl Spin ─────────────── */
  {
    id: "vinyl-spin",
    name: "Vinyl Spin",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-vinyl is-playing">
        <div className="nuda-vinyl__disc">
          <div className="nuda-vinyl__grooves" />
          <div className="nuda-vinyl__label" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vinyl{display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px}
      .nuda-vinyl__disc{position:relative;width:80px;height:80px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#1a1a20,#000);box-shadow:0 6px 16px -4px rgba(0,0,0,.6);transition:transform .3s}
      .nuda-vinyl.is-playing .nuda-vinyl__disc{animation:_vinylSpin 4s linear infinite}
      .nuda-vinyl__grooves{position:absolute;inset:6px;border-radius:50%;background:repeating-radial-gradient(circle at center,transparent 0,transparent 2px,rgba(255,255,255,.03) 3px,rgba(255,255,255,.03) 4px)}
      .nuda-vinyl__label{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:22px;height:22px;border-radius:50%;background:#e4ff54;border:1px solid rgba(0,0,0,.4)}
      .nuda-vinyl__label::after{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:4px;height:4px;border-radius:50%;background:#09090b}
      @keyframes _vinylSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-vinyl.is-playing .nuda-vinyl__disc{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vinyl is-playing">
  <div class="nuda-vinyl__disc">
    <div class="nuda-vinyl__grooves"></div>
    <div class="nuda-vinyl__label"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-vinyl__disc {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #1a1a20, #000);
  box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.6);
}

.nuda-vinyl.is-playing .nuda-vinyl__disc {
  animation: nuda-vinyl-spin 4s linear infinite;
}

.nuda-vinyl__grooves {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: repeating-radial-gradient(
    circle at center,
    transparent 0,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 3px,
    rgba(255, 255, 255, 0.03) 4px
  );
}

@keyframes nuda-vinyl-spin { to { transform: rotate(360deg); } }`,
      },
    ],
  },

  /* ─────────────── 6. Mic Recording ─────────────── */
  {
    id: "mic-recording",
    name: "Mic Recording",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-mic">
        <button className="nuda-mic__btn is-recording" aria-label="Recording">
          <span className="nuda-mic__inner" />
          <span className="nuda-mic__ring" />
        </button>
        <div className="nuda-mic__time">
          <span className="nuda-mic__dot" />
          <span>0:12</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mic{display:inline-flex;align-items:center;gap:12px}
      .nuda-mic__btn{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:rgba(255,94,122,.1);border:2px solid #ff5e7a;cursor:pointer;transition:background .25s,transform .2s}
      .nuda-mic__btn:hover{background:rgba(255,94,122,.18);transform:scale(1.05)}
      .nuda-mic__inner{width:14px;height:14px;background:#ff5e7a;border-radius:4px;transition:border-radius .3s,transform .3s}
      .nuda-mic__btn.is-recording .nuda-mic__inner{border-radius:50%;animation:_micPulse 1.4s ease-in-out infinite}
      .nuda-mic__ring{position:absolute;inset:-2px;border-radius:50%;border:2px solid #ff5e7a;opacity:0;animation:_micRing 1.6s ease-out infinite}
      .nuda-mic__time{display:inline-flex;align-items:center;gap:6px;color:#fafafa;font-size:12px;font-variant-numeric:tabular-nums;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-mic__dot{width:6px;height:6px;border-radius:50%;background:#ff5e7a;animation:_micDot 1s ease-in-out infinite}
      @keyframes _micPulse{0%,100%{transform:scale(1)}50%{transform:scale(.7)}}
      @keyframes _micRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.8);opacity:0}}
      @keyframes _micDot{50%{opacity:.3}}
      @media(prefers-reduced-motion:reduce){.nuda-mic__btn.is-recording .nuda-mic__inner,.nuda-mic__ring,.nuda-mic__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mic">
  <button class="nuda-mic__btn is-recording" aria-label="Recording">
    <span class="nuda-mic__inner"></span>
    <span class="nuda-mic__ring"></span>
  </button>
  <div class="nuda-mic__time">
    <span class="nuda-mic__dot"></span>
    <span>0:12</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-mic__inner {
  width: 14px;
  height: 14px;
  background: #ff5e7a;
  border-radius: 4px;
  transition: border-radius 0.3s, transform 0.3s;
}

.nuda-mic__btn.is-recording .nuda-mic__inner {
  border-radius: 50%;
  animation: nuda-mic-pulse 1.4s ease-in-out infinite;
}

@keyframes nuda-mic-pulse {
  0%, 100% { transform: scale(1);   }
  50%      { transform: scale(0.7); }
}`,
      },
    ],
  },

  /* ─────────────── 7. Circular Visualizer ─────────────── */
  {
    id: "circular-visualizer",
    name: "Circular Visualizer",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-cviz">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} style={{ transform: `rotate(${i * 15}deg) translateY(-22px)`, animationDelay: `${i * 0.06}s` }} />
        ))}
        <div className="nuda-cviz__center" />
      </div>
    ),
    cssInline: `
      .nuda-cviz{position:relative;width:80px;height:80px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-cviz span{position:absolute;left:50%;top:50%;width:3px;height:14px;background:#e4ff54;border-radius:2px;transform-origin:50% 22px;animation:_cvizBar 1.2s ease-in-out infinite}
      .nuda-cviz__center{position:absolute;width:14px;height:14px;border-radius:50%;background:#e4ff54;box-shadow:0 0 12px rgba(228,255,84,.6);animation:_cvizCore 1.6s ease-in-out infinite}
      @keyframes _cvizBar{0%,100%{height:6px}50%{height:18px}}
      @keyframes _cvizCore{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
      @media(prefers-reduced-motion:reduce){.nuda-cviz span,.nuda-cviz__center{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cviz">
  <!-- 24 bars, rotated by 15deg each. Generate with JS or by hand. -->
  <span style="transform: rotate(0deg) translateY(-22px)"></span>
  <span style="transform: rotate(15deg) translateY(-22px)"></span>
  <!-- ... -->
  <div class="nuda-cviz__center"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-cviz span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 14px;
  background: #e4ff54;
  border-radius: 2px;
  transform-origin: 50% 22px;
  animation: nuda-cviz-bar 1.2s ease-in-out infinite;
}

@keyframes nuda-cviz-bar {
  0%, 100% { height: 6px;  }
  50%      { height: 18px; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Now Playing Card ─────────────── */
  {
    id: "now-playing",
    name: "Now Playing Card",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-nowplay">
        <div className="nuda-nowplay__cover">
          <span />
        </div>
        <div className="nuda-nowplay__body">
          <div className="nuda-nowplay__title">Midnight Drive</div>
          <div className="nuda-nowplay__artist">— Nuda</div>
          <div className="nuda-nowplay__eq">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-nowplay{display:flex;align-items:center;gap:12px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-nowplay__cover{position:relative;width:44px;height:44px;border-radius:8px;background:linear-gradient(135deg,#9d6dff,#ff6dd4);overflow:hidden;flex-shrink:0}
      .nuda-nowplay__cover span{position:absolute;inset:0;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.4),transparent 60%);transform:translateX(-100%);animation:_npShine 3s ease-in-out infinite}
      .nuda-nowplay__body{flex:1;min-width:0}
      .nuda-nowplay__title{color:#fafafa;font-size:12px;font-weight:600;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
      .nuda-nowplay__artist{color:#a0a0a8;font-size:11px;margin-top:1px}
      .nuda-nowplay__eq{display:inline-flex;align-items:flex-end;gap:2px;height:9px;margin-top:4px}
      .nuda-nowplay__eq span{width:2px;height:100%;background:#e4ff54;border-radius:1px;animation:_npEq .9s ease-in-out infinite}
      .nuda-nowplay__eq span:nth-child(2){animation-delay:.1s}
      .nuda-nowplay__eq span:nth-child(3){animation-delay:.2s}
      .nuda-nowplay__eq span:nth-child(4){animation-delay:.3s}
      @keyframes _npShine{50%{transform:translateX(100%)}100%{transform:translateX(100%)}}
      @keyframes _npEq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-nowplay__cover span,.nuda-nowplay__eq span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nowplay">
  <div class="nuda-nowplay__cover"><span></span></div>
  <div class="nuda-nowplay__body">
    <div class="nuda-nowplay__title">Midnight Drive</div>
    <div class="nuda-nowplay__artist">— Nuda</div>
    <div class="nuda-nowplay__eq">
      <span></span><span></span><span></span><span></span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nowplay__eq span {
  width: 2px;
  background: #e4ff54;
  border-radius: 1px;
  animation: nuda-np-eq 0.9s ease-in-out infinite;
}

.nuda-nowplay__eq span:nth-child(2) { animation-delay: 0.1s; }
.nuda-nowplay__eq span:nth-child(3) { animation-delay: 0.2s; }
.nuda-nowplay__eq span:nth-child(4) { animation-delay: 0.3s; }

@keyframes nuda-np-eq {
  0%, 100% { transform: scaleY(0.3); }
  50%      { transform: scaleY(1);   }
}`,
      },
    ],
  },

  /* ─────────────── 9. Amplitude Rings ─────────────── */
  {
    id: "amplitude-rings",
    name: "Amplitude Rings",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-arings">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path className="nuda-arings__l1" d="M15.54 8.46a5 5 0 010 7.07" />
          <path className="nuda-arings__l2" d="M19.07 4.93a10 10 0 010 14.14" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-arings{display:inline-flex;color:#e4ff54;padding:8px;background:rgba(228,255,84,.06);border-radius:10px}
      .nuda-arings svg{width:28px;height:28px}
      .nuda-arings__l1,.nuda-arings__l2{transform-origin:11px 12px;animation:_arPulse 1.4s ease-in-out infinite}
      .nuda-arings__l2{animation-delay:.2s}
      @keyframes _arPulse{0%,100%{opacity:.3;transform:scale(.92)}50%{opacity:1;transform:scale(1.08)}}
      @media(prefers-reduced-motion:reduce){.nuda-arings__l1,.nuda-arings__l2{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-arings">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round">
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path class="nuda-arings__l1" d="M15.54 8.46a5 5 0 010 7.07" />
    <path class="nuda-arings__l2" d="M19.07 4.93a10 10 0 010 14.14" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-arings__l1,
.nuda-arings__l2 {
  transform-origin: 11px 12px;
  animation: nuda-ar-pulse 1.4s ease-in-out infinite;
}

.nuda-arings__l2 { animation-delay: 0.2s; }

@keyframes nuda-ar-pulse {
  0%, 100% { opacity: 0.3; transform: scale(0.92); }
  50%      { opacity: 1;   transform: scale(1.08); }
}`,
      },
    ],
  },

  /* ─────────────── 10. Play/Pause Morph ─────────────── */
  {
    id: "play-pause-morph",
    name: "Play/Pause Morph",
    category: "Audio & Waveforms",
    preview: (
      <button className="nuda-ppmorph is-playing" aria-label="Pause">
        <span className="nuda-ppmorph__l" />
        <span className="nuda-ppmorph__r" />
      </button>
    ),
    cssInline: `
      .nuda-ppmorph{position:relative;display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:50%;background:#e4ff54;border:0;color:#09090b;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-ppmorph:hover{transform:scale(1.05);box-shadow:0 0 24px rgba(228,255,84,.5)}
      .nuda-ppmorph__l,.nuda-ppmorph__r{position:absolute;width:4px;height:14px;background:#09090b;border-radius:1px;transition:width .35s cubic-bezier(.16,1,.3,1),height .35s cubic-bezier(.16,1,.3,1),transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-ppmorph__l{transform:translateX(-5px)}
      .nuda-ppmorph__r{transform:translateX(5px)}
      .nuda-ppmorph:not(.is-playing) .nuda-ppmorph__l{width:0;height:0;border-left:11px solid #09090b;border-top:8px solid transparent;border-bottom:8px solid transparent;background:transparent;transform:translateX(0)}
      .nuda-ppmorph:not(.is-playing) .nuda-ppmorph__r{opacity:0;transform:translateX(0)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-ppmorph is-playing" aria-label="Pause">
  <span class="nuda-ppmorph__l"></span>
  <span class="nuda-ppmorph__r"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const btn = document.querySelector('.nuda-ppmorph');

btn.addEventListener('click', () => {
  const playing = btn.classList.toggle('is-playing');
  btn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-ppmorph__l,
.nuda-ppmorph__r {
  position: absolute;
  width: 4px;
  height: 14px;
  background: #09090b;
  border-radius: 1px;
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-ppmorph__l { transform: translateX(-5px); }
.nuda-ppmorph__r { transform: translateX(5px); }

/* Paused state: collapse to a play triangle */
.nuda-ppmorph:not(.is-playing) .nuda-ppmorph__l {
  width: 0;
  height: 0;
  border-left: 11px solid #09090b;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  background: transparent;
  transform: translateX(0);
}

.nuda-ppmorph:not(.is-playing) .nuda-ppmorph__r {
  opacity: 0;
  transform: translateX(0);
}`,
      },
    ],
  },

  /* ─────────────── 11. Mute Toggle ─────────────── */
  {
    id: "mute-toggle",
    name: "Mute Toggle",
    category: "Audio & Waveforms",
    preview: (
      <button className="nuda-mute" aria-label="Mute">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path className="nuda-mute__wave1" d="M15.54 8.46a5 5 0 010 7.07" />
          <path className="nuda-mute__wave2" d="M19.07 4.93a10 10 0 010 14.14" />
          <path className="nuda-mute__slash" d="M3 3l18 18" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-mute{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;cursor:pointer;transition:background .25s,color .25s,transform .2s}
      .nuda-mute:hover{background:rgba(255,255,255,.07);transform:scale(1.05)}
      .nuda-mute svg{width:18px;height:18px;overflow:visible}
      .nuda-mute__wave1,.nuda-mute__wave2{transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1);transform-origin:11px 12px}
      .nuda-mute.is-muted .nuda-mute__wave1,.nuda-mute.is-muted .nuda-mute__wave2{opacity:0;transform:scale(.4)}
      .nuda-mute__slash{stroke-dasharray:32;stroke-dashoffset:32;color:#ff5e7a;transition:stroke-dashoffset .35s ease}
      .nuda-mute.is-muted .nuda-mute__slash{stroke-dashoffset:0}
      .nuda-mute.is-muted{color:#ff5e7a}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-mute" aria-label="Mute">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path class="nuda-mute__wave1" d="M15.54 8.46a5 5 0 010 7.07" />
    <path class="nuda-mute__wave2" d="M19.07 4.93a10 10 0 010 14.14" />
    <path class="nuda-mute__slash" d="M3 3l18 18" />
  </svg>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const btn = document.querySelector('.nuda-mute');

btn.addEventListener('click', () => {
  const muted = btn.classList.toggle('is-muted');
  btn.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-mute__slash {
  stroke-dasharray: 32;
  stroke-dashoffset: 32;
  color: #ff5e7a;
  transition: stroke-dashoffset 0.35s ease;
}

.nuda-mute.is-muted .nuda-mute__slash {
  stroke-dashoffset: 0;
}

.nuda-mute__wave1,
.nuda-mute__wave2 {
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: 11px 12px;
}

.nuda-mute.is-muted .nuda-mute__wave1,
.nuda-mute.is-muted .nuda-mute__wave2 {
  opacity: 0;
  transform: scale(0.4);
}`,
      },
    ],
  },

  /* ─────────────── 12. Loop Indicator ─────────────── */
  {
    id: "loop-indicator",
    name: "Loop Indicator",
    category: "Audio & Waveforms",
    preview: (
      <button className="nuda-loop is-on" aria-label="Loop on">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 014-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 01-4 4H3" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-loop{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#a0a0a8;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
      .nuda-loop svg{width:16px;height:16px;transition:transform .4s cubic-bezier(.16,1,.3,1)}
      .nuda-loop:hover{color:#fafafa}
      .nuda-loop.is-on{background:rgba(228,255,84,.08);border-color:#e4ff54;color:#e4ff54}
      .nuda-loop.is-on svg{animation:_loopSpin 4s linear infinite}
      @keyframes _loopSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-loop.is-on svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-loop" aria-label="Loop">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 014-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 01-4 4H3" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-loop.is-on {
  background: rgba(228, 255, 84, 0.08);
  border-color: #e4ff54;
  color: #e4ff54;
}

.nuda-loop.is-on svg {
  animation: nuda-loop-spin 4s linear infinite;
}

@keyframes nuda-loop-spin { to { transform: rotate(360deg); } }`,
      },
    ],
  },

  /* ─────────────── 13. Spectrum Analyzer ─────────────── */
  {
    id: "spectrum-analyzer",
    name: "Spectrum Analyzer",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-spec">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-spec{display:inline-flex;align-items:flex-end;gap:2px;height:42px;padding:8px 12px;background:rgba(0,0,0,.4);border-radius:10px}
      .nuda-spec span{width:3px;background:linear-gradient(180deg,#ff6dd4,#9d6dff,#62b6ff);border-radius:1px;animation:_specBar 1.4s ease-in-out infinite}
      .nuda-spec span:nth-child(odd){animation-duration:1.1s}
      .nuda-spec span:nth-child(3n){animation-duration:1.7s}
      @keyframes _specBar{0%,100%{height:5px}50%{height:32px}}
      @media(prefers-reduced-motion:reduce){.nuda-spec span{animation:none;height:18px}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-spec">
  <!-- Repeat 20 spans with staggered animation-delay values -->
  <span style="animation-delay: 0s"></span>
  <span style="animation-delay: 0.08s"></span>
  <!-- ... -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-spec span {
  width: 3px;
  background: linear-gradient(180deg, #ff6dd4, #9d6dff, #62b6ff);
  border-radius: 1px;
  animation: nuda-spec-bar 1.4s ease-in-out infinite;
}

.nuda-spec span:nth-child(odd) { animation-duration: 1.1s; }
.nuda-spec span:nth-child(3n)  { animation-duration: 1.7s; }

@keyframes nuda-spec-bar {
  0%, 100% { height: 5px;  }
  50%      { height: 32px; }
}`,
      },
    ],
  },

  /* ─────────────── 14. Track Progress with Waveform ─────────────── */
  {
    id: "track-progress-wave",
    name: "Track Progress",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-trprog">
        <div className="nuda-trprog__bar">
          <div className="nuda-trprog__played" style={{ width: "40%" }} />
          <span className="nuda-trprog__pin" style={{ left: "40%" }} />
        </div>
        <div className="nuda-trprog__time">
          <span>1:24</span>
          <span>3:32</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-trprog{padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-trprog__bar{position:relative;height:6px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.1) 0,rgba(255,255,255,.1) 1px,transparent 1px,transparent 3px),rgba(255,255,255,.05);border-radius:3px;margin-bottom:6px;cursor:pointer}
      .nuda-trprog__played{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:3px;transition:width .45s cubic-bezier(.16,1,.3,1)}
      .nuda-trprog__played::after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(9,9,11,.25) 0,rgba(9,9,11,.25) 1px,transparent 1px,transparent 3px);border-radius:3px}
      .nuda-trprog__pin{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:#e4ff54;border:2px solid #09090b;transform:translate(-50%,-50%);box-shadow:0 0 10px rgba(228,255,84,.6)}
      .nuda-trprog__time{display:flex;justify-content:space-between;color:#a0a0a8;font-size:10px;font-variant-numeric:tabular-nums;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-trprog">
  <div class="nuda-trprog__bar">
    <div class="nuda-trprog__played" style="width:40%"></div>
    <span class="nuda-trprog__pin" style="left:40%"></span>
  </div>
  <div class="nuda-trprog__time">
    <span>1:24</span>
    <span>3:32</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-trprog__bar {
  position: relative;
  height: 6px;
  background:
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 3px
    ),
    rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  cursor: pointer;
}

.nuda-trprog__played {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #e4ff54;
  border-radius: 3px;
  transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-trprog__pin {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e4ff54;
  border: 2px solid #09090b;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(228, 255, 84, 0.6);
}`,
      },
    ],
  },

  /* ─────────────── 15. Audio Loading ─────────────── */
  {
    id: "audio-loading",
    name: "Audio Loading",
    category: "Audio & Waveforms",
    preview: (
      <div className="nuda-aload">
        <span /><span /><span /><span /><span />
        <span className="nuda-aload__text">Buffering</span>
      </div>
    ),
    cssInline: `
      .nuda-aload{display:inline-flex;align-items:center;gap:3px;padding:8px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:99px;color:#a0a0a8;font-size:11px}
      .nuda-aload span:not(.nuda-aload__text){width:3px;height:14px;background:#e4ff54;border-radius:1px;animation:_aloadBar 1.4s ease-in-out infinite}
      .nuda-aload span:nth-child(2){animation-delay:.1s}
      .nuda-aload span:nth-child(3){animation-delay:.2s}
      .nuda-aload span:nth-child(4){animation-delay:.3s}
      .nuda-aload span:nth-child(5){animation-delay:.4s}
      .nuda-aload__text{margin-left:6px;animation:none !important}
      @keyframes _aloadBar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-aload span:not(.nuda-aload__text){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-aload">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span class="nuda-aload__text">Buffering</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-aload span:not(.nuda-aload__text) {
  width: 3px;
  height: 14px;
  background: #e4ff54;
  border-radius: 1px;
  animation: nuda-aload-bar 1.4s ease-in-out infinite;
}

.nuda-aload span:nth-child(2) { animation-delay: 0.1s; }
.nuda-aload span:nth-child(3) { animation-delay: 0.2s; }
.nuda-aload span:nth-child(4) { animation-delay: 0.3s; }
.nuda-aload span:nth-child(5) { animation-delay: 0.4s; }

@keyframes nuda-aload-bar {
  0%, 100% { transform: scaleY(0.3); }
  50%      { transform: scaleY(1);   }
}`,
      },
    ],
  },
];
