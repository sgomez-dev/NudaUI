import type { NudaComponent } from "./types";

export const videoPlayer: NudaComponent[] = [
  /* ─────────────── 1. Play/Pause Morph ─────────────── */
  {
    id: "play-pause-morph",
    name: "Play/Pause Morph",
    category: "Video Player UI",
    preview: (
      <button className="nuda-pp" type="button" aria-label="Play / pause">
        <span className="nuda-pp__bar nuda-pp__bar--l" />
        <span className="nuda-pp__bar nuda-pp__bar--r" />
      </button>
    ),
    cssInline: `
      .nuda-pp{position:relative;width:38px;height:38px;background:#e4ff54;border:none;border-radius:50%;cursor:pointer;transition:transform .25s,box-shadow .25s,background .25s;display:flex;align-items:center;justify-content:center}
      .nuda-pp:hover{transform:scale(1.08);box-shadow:0 0 16px rgba(228,255,84,.5)}
      .nuda-pp__bar{position:absolute;width:5px;height:14px;background:#09090b;border-radius:1.5px;transition:transform .35s cubic-bezier(.4,0,.2,1)}
      .nuda-pp__bar--l{transform:translateX(-3.5px)}
      .nuda-pp__bar--r{transform:translateX(3.5px)}
      .nuda-pp:hover .nuda-pp__bar--l{transform:translateX(-2.5px) scaleX(1.2) skewX(-12deg)}
      .nuda-pp:hover .nuda-pp__bar--r{transform:translateX(2.5px) scaleX(1.2) skewX(12deg)}
      .nuda-pp.is-paused .nuda-pp__bar{clip-path:polygon(0 0,100% 50%,0 100%);background:#09090b;transform:translateX(0)}
      .nuda-pp.is-paused .nuda-pp__bar--r{display:none}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Play/Pause Morph — toggle .is-paused for the play (triangle) state -->
<button class="nuda-pp" type="button" aria-label="Play / pause">
  <span class="nuda-pp__bar nuda-pp__bar--l"></span>
  <span class="nuda-pp__bar nuda-pp__bar--r"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Play/Pause Morph
   Two pause bars; .is-paused flattens to a play triangle via clip-path.
   Customize: --pp-bg, --pp-fg */

.nuda-pp {
  --pp-bg: #e4ff54;
  --pp-fg: #09090b;
  position: relative;
  width: 48px;
  height: 48px;
  background: var(--pp-bg);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-pp:hover {
  transform: scale(1.08);
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.5);
}

.nuda-pp__bar {
  position: absolute;
  width: 6px;
  height: 18px;
  background: var(--pp-fg);
  border-radius: 2px;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.nuda-pp__bar--l { transform: translateX(-4px); }
.nuda-pp__bar--r { transform: translateX(4px); }

.nuda-pp:hover .nuda-pp__bar--l { transform: translateX(-3px) scaleX(1.2) skewX(-12deg); }
.nuda-pp:hover .nuda-pp__bar--r { transform: translateX(3px)  scaleX(1.2) skewX(12deg); }

.nuda-pp.is-paused .nuda-pp__bar {
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  background: var(--pp-fg);
  transform: translateX(0);
}

.nuda-pp.is-paused .nuda-pp__bar--r { display: none; }`,
      },
    ],
  },

  /* ─────────────── 2. Scrubber ─────────────── */
  {
    id: "scrubber",
    name: "Scrubber",
    category: "Video Player UI",
    preview: (
      <div className="nuda-scrub">
        <span className="nuda-scrub__time">1:24</span>
        <div className="nuda-scrub__track">
          <span className="nuda-scrub__buffer" />
          <span className="nuda-scrub__progress" />
          <span className="nuda-scrub__thumb" />
        </div>
        <span className="nuda-scrub__time">3:42</span>
      </div>
    ),
    cssInline: `
      .nuda-scrub{display:flex;align-items:center;gap:6px;padding:6px;width:170px}
      .nuda-scrub__time{font:600 9px ui-monospace,monospace;color:#a1a1aa;font-variant-numeric:tabular-nums;flex-shrink:0}
      .nuda-scrub__track{position:relative;flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:2px;cursor:pointer;transition:height .2s}
      .nuda-scrub__track:hover{height:6px}
      .nuda-scrub__buffer{position:absolute;left:0;top:0;height:100%;width:55%;background:rgba(255,255,255,.15);border-radius:2px}
      .nuda-scrub__progress{position:absolute;left:0;top:0;height:100%;width:38%;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.7));border-radius:2px;box-shadow:0 0 4px rgba(228,255,84,.5)}
      .nuda-scrub__thumb{position:absolute;left:38%;top:50%;width:10px;height:10px;border-radius:50%;background:#fafafa;transform:translate(-50%,-50%) scale(0);transition:transform .2s;box-shadow:0 0 8px rgba(228,255,84,.5)}
      .nuda-scrub__track:hover .nuda-scrub__thumb{transform:translate(-50%,-50%) scale(1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scrubber — set widths via inline style or JS for live progress/buffer -->
<div class="nuda-scrub">
  <span class="nuda-scrub__time">1:24</span>
  <div class="nuda-scrub__track">
    <span class="nuda-scrub__buffer"   style="width: 55%"></span>
    <span class="nuda-scrub__progress" style="width: 38%"></span>
    <span class="nuda-scrub__thumb"    style="left: 38%"></span>
  </div>
  <span class="nuda-scrub__time">3:42</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scrubber
   Track grows on hover; thumb appears; buffered region shown behind progress.
   Customize: --scrub-accent, --scrub-track */

.nuda-scrub {
  --scrub-accent: #e4ff54;
  --scrub-track: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 480px;
}

.nuda-scrub__time {
  font: 600 0.7rem ui-monospace, monospace;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.nuda-scrub__track {
  position: relative;
  flex: 1;
  height: 4px;
  background: var(--scrub-track);
  border-radius: 2px;
  cursor: pointer;
  transition: height 0.2s;
}

.nuda-scrub__track:hover { height: 6px; }

.nuda-scrub__buffer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
}

.nuda-scrub__progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--scrub-accent), rgba(228, 255, 84, 0.7));
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
}

.nuda-scrub__thumb {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fafafa;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.5);
}

.nuda-scrub__track:hover .nuda-scrub__thumb {
  transform: translate(-50%, -50%) scale(1);
}`,
      },
    ],
  },

  /* ─────────────── 3. Volume Slider ─────────────── */
  {
    id: "volume-slider",
    name: "Volume Slider",
    category: "Video Player UI",
    preview: (
      <div className="nuda-vol">
        <button className="nuda-vol__icon" type="button" aria-label="Volume">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5 Z" fill="currentColor" />
            <path d="M15 9 A 4 4 0 0 1 15 15" />
            <path d="M18 6 A 8 8 0 0 1 18 18" />
          </svg>
        </button>
        <div className="nuda-vol__bar">
          <span className="nuda-vol__fill" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vol{display:inline-flex;align-items:center;gap:0;background:rgba(0,0,0,.4);padding:5px 6px;border-radius:6px;overflow:hidden}
      .nuda-vol__icon{display:flex;align-items:center;justify-content:center;width:22px;height:22px;background:transparent;border:none;color:#fafafa;cursor:pointer;transition:color .2s}
      .nuda-vol__icon:hover{color:#e4ff54}
      .nuda-vol__icon svg{width:14px;height:14px}
      .nuda-vol__bar{width:0;height:3px;background:rgba(255,255,255,.2);border-radius:2px;overflow:hidden;transition:width .3s cubic-bezier(.4,0,.2,1),margin-left .3s,opacity .25s;opacity:0}
      .nuda-vol:hover .nuda-vol__bar,.nuda-vol__icon:focus~.nuda-vol__bar{width:48px;margin-left:6px;opacity:1}
      .nuda-vol__fill{display:block;height:100%;width:65%;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.6));border-radius:2px;transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.4,0,.2,1) .1s}
      .nuda-vol:hover .nuda-vol__fill{transform:scaleX(1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Volume Slider — slider expands on hover; muted state by toggling --vol -->
<div class="nuda-vol">
  <button class="nuda-vol__icon" type="button" aria-label="Volume">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5 Z" fill="currentColor" />
      <path d="M15 9 A 4 4 0 0 1 15 15" />
      <path d="M18 6 A 8 8 0 0 1 18 18" />
    </svg>
  </button>
  <div class="nuda-vol__bar">
    <span class="nuda-vol__fill" style="width: 65%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Volume Slider
   Icon-only by default; bar slides out on hover and fills.
   Customize: --vol-accent, the expanded width. */

.nuda-vol {
  --vol-accent: #e4ff54;
  --vol-expanded: 80px;
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 6px 8px;
  border-radius: 8px;
  overflow: hidden;
}

.nuda-vol__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: transparent;
  border: none;
  color: #fafafa;
  cursor: pointer;
  transition: color 0.2s;
}

.nuda-vol__icon:hover { color: var(--vol-accent); }

.nuda-vol__icon svg { width: 16px; height: 16px; }

.nuda-vol__bar {
  width: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  opacity: 0;
  transition:
    width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    margin-left 0.3s,
    opacity 0.25s;
}

.nuda-vol:hover .nuda-vol__bar,
.nuda-vol__icon:focus ~ .nuda-vol__bar {
  width: var(--vol-expanded);
  margin-left: 8px;
  opacity: 1;
}

.nuda-vol__fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--vol-accent), rgba(228, 255, 84, 0.6));
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.nuda-vol:hover .nuda-vol__fill { transform: scaleX(1); }`,
      },
    ],
  },

  /* ─────────────── 4. Buffer Indicator ─────────────── */
  {
    id: "buffer-indicator",
    name: "Buffer Indicator",
    category: "Video Player UI",
    preview: (
      <div className="nuda-buf">
        <div className="nuda-buf__overlay">
          <div className="nuda-buf__spinner" />
          <span className="nuda-buf__label">Buffering…</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-buf{position:relative;width:130px;height:80px;border-radius:8px;overflow:hidden;background:linear-gradient(135deg,#1a1a1f,#0e0e10)}
      .nuda-buf__overlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;background:rgba(0,0,0,.5);backdrop-filter:blur(2px)}
      .nuda-buf__spinner{width:22px;height:22px;border:2px solid rgba(255,255,255,.15);border-top-color:#e4ff54;border-radius:50%;animation:_bf-spin .8s linear infinite;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-buf__label{font:600 9px ui-sans-serif,system-ui;color:#fafafa;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _bf-spin{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Buffer Indicator — overlay over your <video>; show when 'waiting' fires -->
<div class="nuda-buf">
  <video class="nuda-buf__video" src="/your.mp4"></video>
  <div class="nuda-buf__overlay">
    <div class="nuda-buf__spinner"></div>
    <span class="nuda-buf__label">Buffering…</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Buffer Indicator
   Translucent overlay with spinner for video stalls.
   Customize: --buf-accent */

.nuda-buf {
  --buf-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1f, #0e0e10);
}

.nuda-buf__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nuda-buf__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.nuda-buf__spinner {
  width: 32px;
  height: 32px;
  border: 2.5px solid rgba(255, 255, 255, 0.15);
  border-top-color: var(--buf-accent);
  border-radius: 50%;
  animation: nuda-buf-spin 0.8s linear infinite;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-buf__label {
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@keyframes nuda-buf-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-buf__spinner { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Big Play Button ─────────────── */
  {
    id: "big-play",
    name: "Big Play Button",
    category: "Video Player UI",
    preview: (
      <div className="nuda-bigp">
        <button className="nuda-bigp__btn" type="button" aria-label="Play">
          <span className="nuda-bigp__pulse" />
          <span className="nuda-bigp__pulse nuda-bigp__pulse--b" />
          <svg className="nuda-bigp__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5 L19 12 L8 19 Z" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-bigp{position:relative;width:130px;height:80px;background:linear-gradient(135deg,#1a1a1f,#0e0e10);border-radius:8px;overflow:hidden;display:flex;align-items:center;justify-content:center}
      .nuda-bigp__btn{position:relative;width:42px;height:42px;background:rgba(228,255,84,.15);border:2px solid #e4ff54;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#e4ff54;backdrop-filter:blur(8px);transition:transform .25s,background .25s}
      .nuda-bigp__btn:hover{transform:scale(1.1);background:rgba(228,255,84,.25)}
      .nuda-bigp__pulse{position:absolute;inset:0;border:2px solid #e4ff54;border-radius:50%;animation:_bg-pulse 2s ease-out infinite;opacity:0}
      .nuda-bigp__pulse--b{animation-delay:1s}
      .nuda-bigp__icon{width:14px;height:14px;margin-left:2px;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      @keyframes _bg-pulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.8);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Big Play Button — center overlay with pulsing rings -->
<div class="nuda-bigp">
  <video class="nuda-bigp__video" src="/your.mp4"></video>
  <button class="nuda-bigp__btn" type="button" aria-label="Play">
    <span class="nuda-bigp__pulse"></span>
    <span class="nuda-bigp__pulse nuda-bigp__pulse--b"></span>
    <svg class="nuda-bigp__icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Big Play Button
   Centered play CTA over a video; pulsing rings draw attention.
   Customize: --bigp-accent */

.nuda-bigp {
  --bigp-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #1a1a1f, #0e0e10);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-bigp__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nuda-bigp__btn {
  position: relative;
  width: 64px;
  height: 64px;
  background: rgba(228, 255, 84, 0.15);
  border: 2px solid var(--bigp-accent);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bigp-accent);
  backdrop-filter: blur(8px);
  transition: transform 0.25s, background 0.25s;
}

.nuda-bigp__btn:hover {
  transform: scale(1.1);
  background: rgba(228, 255, 84, 0.25);
}

.nuda-bigp__pulse {
  position: absolute;
  inset: 0;
  border: 2px solid var(--bigp-accent);
  border-radius: 50%;
  animation: nuda-bigp-pulse 2s ease-out infinite;
  opacity: 0;
}

.nuda-bigp__pulse--b { animation-delay: 1s; }

.nuda-bigp__icon {
  width: 22px;
  height: 22px;
  margin-left: 3px;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

@keyframes nuda-bigp-pulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bigp__pulse { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Controls Reveal ─────────────── */
  {
    id: "controls-reveal",
    name: "Controls Reveal",
    category: "Video Player UI",
    preview: (
      <div className="nuda-vctrl">
        <div className="nuda-vctrl__bar">
          <button className="nuda-vctrl__btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 L19 12 L8 19 Z" /></svg></button>
          <div className="nuda-vctrl__progress"><span /></div>
          <span className="nuda-vctrl__time">1:24</span>
          <button className="nuda-vctrl__btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 Z" fill="currentColor" /></svg></button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vctrl{position:relative;width:140px;height:80px;background:linear-gradient(135deg,#1a1a1f,#0e0e10);border-radius:8px;overflow:hidden}
      .nuda-vctrl__bar{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:5px;padding:5px 6px;background:linear-gradient(0deg,rgba(0,0,0,.7),transparent);transform:translateY(100%);opacity:0;transition:transform .3s,opacity .3s}
      .nuda-vctrl:hover .nuda-vctrl__bar{transform:translateY(0);opacity:1}
      .nuda-vctrl__btn{display:flex;align-items:center;justify-content:center;width:18px;height:18px;background:transparent;border:none;color:#fafafa;cursor:pointer;flex-shrink:0;transition:color .2s}
      .nuda-vctrl__btn:hover{color:#e4ff54}
      .nuda-vctrl__btn svg{width:11px;height:11px}
      .nuda-vctrl__progress{flex:1;height:2px;background:rgba(255,255,255,.2);border-radius:1px;overflow:hidden}
      .nuda-vctrl__progress span{display:block;height:100%;width:38%;background:#e4ff54;border-radius:1px;box-shadow:0 0 4px rgba(228,255,84,.5)}
      .nuda-vctrl__time{font:600 8px ui-monospace,monospace;color:#fafafa;font-variant-numeric:tabular-nums;flex-shrink:0}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Controls Reveal — bar slides up from the bottom on hover -->
<div class="nuda-vctrl">
  <video class="nuda-vctrl__video" src="/your.mp4"></video>
  <div class="nuda-vctrl__bar">
    <button class="nuda-vctrl__btn" aria-label="Play">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 L19 12 L8 19 Z" /></svg>
    </button>
    <div class="nuda-vctrl__progress"><span></span></div>
    <span class="nuda-vctrl__time">1:24</span>
    <button class="nuda-vctrl__btn" aria-label="Volume">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round">
        <path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 Z" fill="currentColor" />
      </svg>
    </button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Controls Reveal
   Player chrome that slides up from bottom on hover.
   Customize: --vctrl-accent */

.nuda-vctrl {
  --vctrl-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #1a1a1f, #0e0e10);
  border-radius: 12px;
  overflow: hidden;
}

.nuda-vctrl__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nuda-vctrl__bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent);
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

.nuda-vctrl:hover .nuda-vctrl__bar {
  transform: translateY(0);
  opacity: 1;
}

.nuda-vctrl__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  color: #fafafa;
  cursor: pointer;
  flex-shrink: 0;
  transition: color 0.2s;
}

.nuda-vctrl__btn:hover { color: var(--vctrl-accent); }

.nuda-vctrl__btn svg { width: 14px; height: 14px; }

.nuda-vctrl__progress {
  flex: 1;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.nuda-vctrl__progress span {
  display: block;
  height: 100%;
  width: 38%;
  background: var(--vctrl-accent);
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
}

.nuda-vctrl__time {
  font: 600 0.7rem ui-monospace, monospace;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}`,
      },
    ],
  },

  /* ─────────────── 7. Speed Selector ─────────────── */
  {
    id: "speed-selector",
    name: "Speed Selector",
    category: "Video Player UI",
    preview: (
      <div className="nuda-speed">
        <span className="nuda-speed__opt">0.5×</span>
        <span className="nuda-speed__opt is-active">1×</span>
        <span className="nuda-speed__opt">1.5×</span>
        <span className="nuda-speed__opt">2×</span>
      </div>
    ),
    cssInline: `
      .nuda-speed{display:inline-flex;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:2px;backdrop-filter:blur(8px)}
      .nuda-speed__opt{padding:3px 7px;font:700 9px ui-sans-serif,system-ui;color:#a1a1aa;cursor:pointer;border-radius:4px;font-variant-numeric:tabular-nums;transition:background .2s,color .2s}
      .nuda-speed__opt:hover{color:#fafafa;background:rgba(255,255,255,.06)}
      .nuda-speed__opt.is-active{background:#e4ff54;color:#09090b;box-shadow:0 0 6px rgba(228,255,84,.4)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Speed Selector — toggle .is-active on click; wire to video.playbackRate -->
<div class="nuda-speed">
  <span class="nuda-speed__opt"           data-speed="0.5">0.5×</span>
  <span class="nuda-speed__opt is-active" data-speed="1">1×</span>
  <span class="nuda-speed__opt"           data-speed="1.5">1.5×</span>
  <span class="nuda-speed__opt"           data-speed="2">2×</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Speed Selector
   Compact playback-speed pill row.
   Customize: --speed-accent */

.nuda-speed {
  --speed-accent: #e4ff54;
  display: inline-flex;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 3px;
  backdrop-filter: blur(8px);
}

.nuda-speed__opt {
  padding: 5px 10px;
  font: 700 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  cursor: pointer;
  border-radius: 5px;
  font-variant-numeric: tabular-nums;
  transition: background 0.2s, color 0.2s;
}

.nuda-speed__opt:hover {
  color: #fafafa;
  background: rgba(255, 255, 255, 0.06);
}

.nuda-speed__opt.is-active {
  background: var(--speed-accent);
  color: #09090b;
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.4);
}`,
      },
    ],
  },

  /* ─────────────── 8. Captions Toggle ─────────────── */
  {
    id: "captions-toggle",
    name: "Captions Toggle",
    category: "Video Player UI",
    preview: (
      <button className="nuda-cc is-active" type="button" aria-label="Captions">
        <span className="nuda-cc__box">CC</span>
        <span className="nuda-cc__line" />
      </button>
    ),
    cssInline: `
      .nuda-cc{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:5px 8px;background:transparent;border:none;color:#fafafa;cursor:pointer;transition:color .2s}
      .nuda-cc:hover{color:#e4ff54}
      .nuda-cc__box{font:800 9px ui-sans-serif,system-ui;letter-spacing:.04em;padding:2px 4px;border:1.2px solid currentColor;border-radius:3px;line-height:1}
      .nuda-cc.is-active{color:#e4ff54}
      .nuda-cc.is-active .nuda-cc__box{background:rgba(228,255,84,.15);box-shadow:0 0 4px rgba(228,255,84,.3)}
      .nuda-cc__line{position:absolute;left:50%;bottom:-2px;width:0;height:2px;background:#e4ff54;border-radius:1px;transform:translateX(-50%);transition:width .3s cubic-bezier(.4,0,.2,1)}
      .nuda-cc.is-active .nuda-cc__line{width:60%;box-shadow:0 0 4px rgba(228,255,84,.5)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Captions Toggle — toggle .is-active to show CC enabled -->
<button class="nuda-cc" type="button" aria-label="Captions">
  <span class="nuda-cc__box">CC</span>
  <span class="nuda-cc__line"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Captions Toggle
   "CC" badge with an underline that draws when active.
   Customize: --cc-accent */

.nuda-cc {
  --cc-accent: #e4ff54;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  background: transparent;
  border: none;
  color: #fafafa;
  cursor: pointer;
  transition: color 0.2s;
}

.nuda-cc:hover { color: var(--cc-accent); }

.nuda-cc__box {
  font: 800 0.75rem ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 0.04em;
  padding: 3px 6px;
  border: 1.5px solid currentColor;
  border-radius: 4px;
  line-height: 1;
}

.nuda-cc.is-active { color: var(--cc-accent); }

.nuda-cc.is-active .nuda-cc__box {
  background: rgba(228, 255, 84, 0.15);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.3);
}

.nuda-cc__line {
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--cc-accent);
  border-radius: 1px;
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nuda-cc.is-active .nuda-cc__line {
  width: 60%;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
}`,
      },
    ],
  },

  /* ─────────────── 9. Fullscreen Morph ─────────────── */
  {
    id: "fullscreen-morph",
    name: "Fullscreen Morph",
    category: "Video Player UI",
    preview: (
      <button className="nuda-fs" type="button" aria-label="Fullscreen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path className="nuda-fs__c1" d="M8 3 L3 3 L3 8" />
          <path className="nuda-fs__c2" d="M16 3 L21 3 L21 8" />
          <path className="nuda-fs__c3" d="M8 21 L3 21 L3 16" />
          <path className="nuda-fs__c4" d="M16 21 L21 21 L21 16" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-fs{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;background:transparent;border:none;color:#fafafa;cursor:pointer;border-radius:5px;transition:background .2s,color .2s}
      .nuda-fs:hover{background:rgba(228,255,84,.1);color:#e4ff54}
      .nuda-fs svg{width:16px;height:16px}
      .nuda-fs path{transition:transform .3s cubic-bezier(.4,0,.2,1);transform-origin:center}
      .nuda-fs:hover .nuda-fs__c1{transform:translate(-2px,-2px)}
      .nuda-fs:hover .nuda-fs__c2{transform:translate(2px,-2px)}
      .nuda-fs:hover .nuda-fs__c3{transform:translate(-2px,2px)}
      .nuda-fs:hover .nuda-fs__c4{transform:translate(2px,2px)}
      .nuda-fs.is-fs .nuda-fs__c1{transform:translate(2px,2px)}
      .nuda-fs.is-fs .nuda-fs__c2{transform:translate(-2px,2px)}
      .nuda-fs.is-fs .nuda-fs__c3{transform:translate(2px,-2px)}
      .nuda-fs.is-fs .nuda-fs__c4{transform:translate(-2px,-2px)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Fullscreen Morph — corners spread on hover; collapse with .is-fs -->
<button class="nuda-fs" type="button" aria-label="Fullscreen">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path class="nuda-fs__c1" d="M8 3 L3 3 L3 8" />
    <path class="nuda-fs__c2" d="M16 3 L21 3 L21 8" />
    <path class="nuda-fs__c3" d="M8 21 L3 21 L3 16" />
    <path class="nuda-fs__c4" d="M16 21 L21 21 L21 16" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fullscreen Morph
   Four corner brackets fly outward on hover (entering FS) or inward when active.
   Customize: --fs-accent */

.nuda-fs {
  --fs-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  color: #fafafa;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}

.nuda-fs:hover {
  background: rgba(228, 255, 84, 0.1);
  color: var(--fs-accent);
}

.nuda-fs svg { width: 18px; height: 18px; }

.nuda-fs path {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.nuda-fs:hover .nuda-fs__c1 { transform: translate(-2px, -2px); }
.nuda-fs:hover .nuda-fs__c2 { transform: translate(2px,  -2px); }
.nuda-fs:hover .nuda-fs__c3 { transform: translate(-2px,  2px); }
.nuda-fs:hover .nuda-fs__c4 { transform: translate(2px,   2px); }

.nuda-fs.is-fs .nuda-fs__c1 { transform: translate(2px,  2px); }
.nuda-fs.is-fs .nuda-fs__c2 { transform: translate(-2px, 2px); }
.nuda-fs.is-fs .nuda-fs__c3 { transform: translate(2px, -2px); }
.nuda-fs.is-fs .nuda-fs__c4 { transform: translate(-2px,-2px); }`,
      },
    ],
  },

  /* ─────────────── 10. Live Indicator ─────────────── */
  {
    id: "live-indicator",
    name: "Live Indicator",
    category: "Video Player UI",
    preview: (
      <div className="nuda-livev">
        <span className="nuda-livev__dot" />
        <span className="nuda-livev__label">LIVE</span>
        <span className="nuda-livev__viewers">2.4k</span>
      </div>
    ),
    cssInline: `
      .nuda-livev{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.1);border-radius:5px;backdrop-filter:blur(8px)}
      .nuda-livev__dot{position:relative;width:6px;height:6px;border-radius:50%;background:#ff4d4d;box-shadow:0 0 6px #ff4d4d}
      .nuda-livev__dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:#ff4d4d;animation:_lv-pulse 1.4s ease-out infinite}
      .nuda-livev__label{font:800 9px ui-sans-serif,system-ui;color:#fff;letter-spacing:.08em}
      .nuda-livev__viewers{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;font-variant-numeric:tabular-nums;border-left:1px solid rgba(255,255,255,.15);padding-left:6px}
      @keyframes _lv-pulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.5);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Live Indicator — pulsing red dot, LIVE label, viewer count -->
<div class="nuda-livev">
  <span class="nuda-livev__dot"></span>
  <span class="nuda-livev__label">LIVE</span>
  <span class="nuda-livev__viewers">2.4k</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Live Indicator
   Translucent pill: pulsing dot, LIVE text, viewer count separator.
   Customize: --livev-color */

.nuda-livev {
  --livev-color: #ff4d4d;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  backdrop-filter: blur(8px);
}

.nuda-livev__dot {
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--livev-color);
  box-shadow: 0 0 6px var(--livev-color);
}

.nuda-livev__dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--livev-color);
  animation: nuda-livev-pulse 1.4s ease-out infinite;
}

.nuda-livev__label {
  font: 800 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #fff;
  letter-spacing: 0.08em;
}

.nuda-livev__viewers {
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  padding-left: 8px;
}

@keyframes nuda-livev-pulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-livev__dot::after { animation: none; }
}`,
      },
    ],
  },
];
