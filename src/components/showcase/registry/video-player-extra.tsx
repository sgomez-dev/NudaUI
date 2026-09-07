import type { NudaComponent } from "./types";

const CAT = "Video Player UI";

export const videoPlayerExtra: NudaComponent[] = [
  /* ─────────────── 1. Chapter Scrub Bar ─────────────── */
  {
    id: "vp2-chapter-scrub",
    name: "Chapter Scrub Bar",
    category: CAT,
    preview: (
      <div className="nuda-vp2-chapter-scrub">
        <div className="nuda-vp2-chapter-scrub__track-wrap">
          <div className="nuda-vp2-chapter-scrub__ticks" aria-hidden="true">
            <span className="nuda-vp2-chapter-scrub__tick" style={{ left: "22%" }} />
            <span className="nuda-vp2-chapter-scrub__tick" style={{ left: "55%" }} />
            <span className="nuda-vp2-chapter-scrub__tick" style={{ left: "81%" }} />
          </div>
          <input
            className="nuda-vp2-chapter-scrub__range"
            type="range"
            min={0}
            max={100}
            defaultValue={42}
            aria-label="Seek"
            aria-valuetext="1:04 of 3:00 — Chapter 2: The Reveal"
          />
        </div>
        <div className="nuda-vp2-chapter-scrub__label">Chapter 2 · The Reveal</div>
      </div>
    ),
    cssInline: `
      .nuda-vp2-chapter-scrub{width:280px;display:flex;flex-direction:column;gap:8px;padding:12px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:10px}
      .nuda-vp2-chapter-scrub__track-wrap{position:relative;height:16px;display:flex;align-items:center}
      .nuda-vp2-chapter-scrub__ticks{position:absolute;left:0;right:0;top:50%;height:10px;transform:translateY(-50%);pointer-events:none;z-index:1}
      .nuda-vp2-chapter-scrub__tick{position:absolute;top:0;width:2px;height:10px;background:#09090b;border-radius:1px}
      .nuda-vp2-chapter-scrub__range{appearance:none;-webkit-appearance:none;width:100%;height:4px;border-radius:999px;background:linear-gradient(90deg,#e4ff54 0 42%,rgba(255,255,255,.14) 42% 100%);cursor:pointer;outline:0;margin:0}
      .nuda-vp2-chapter-scrub__range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:12px;height:12px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}
      .nuda-vp2-chapter-scrub__range::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}
      .nuda-vp2-chapter-scrub__range:focus-visible::-webkit-slider-thumb{transform:scale(1.2);box-shadow:0 0 0 4px rgba(228,255,84,.25)}
      .nuda-vp2-chapter-scrub__range:focus-visible::-moz-range-thumb{transform:scale(1.2);box-shadow:0 0 0 4px rgba(228,255,84,.25)}
      .nuda-vp2-chapter-scrub__label{display:flex;align-items:center;gap:6px;font:600 10px ui-sans-serif,system-ui,sans-serif;color:#cfcfcf}
      .nuda-vp2-chapter-scrub__label::before{content:"";width:6px;height:6px;border-radius:50%;background:#e4ff54;flex-shrink:0;box-shadow:0 0 4px rgba(228,255,84,.6)}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-chapter-scrub__range::-webkit-slider-thumb{transition:none}
        .nuda-vp2-chapter-scrub__range::-moz-range-thumb{transition:none}
        .nuda-vp2-chapter-scrub__range:focus-visible::-webkit-slider-thumb{transform:none}
        .nuda-vp2-chapter-scrub__range:focus-visible::-moz-range-thumb{transform:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Chapter Scrub Bar — ticks mark chapter boundaries; label reflects current chapter -->
<div class="nuda-vp2-chapter-scrub">
  <div class="nuda-vp2-chapter-scrub__track-wrap">
    <div class="nuda-vp2-chapter-scrub__ticks" aria-hidden="true">
      <span class="nuda-vp2-chapter-scrub__tick" style="left: 22%"></span>
      <span class="nuda-vp2-chapter-scrub__tick" style="left: 55%"></span>
      <span class="nuda-vp2-chapter-scrub__tick" style="left: 81%"></span>
    </div>
    <input
      class="nuda-vp2-chapter-scrub__range"
      type="range" min="0" max="100" value="42"
      aria-label="Seek"
      aria-valuetext="1:04 of 3:00 — Chapter 2: The Reveal"
    />
  </div>
  <div class="nuda-vp2-chapter-scrub__label">Chapter 2 · The Reveal</div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Scrub Thumbnail Preview ─────────────── */
  {
    id: "vp2-thumb-preview",
    name: "Scrub Thumbnail Preview",
    category: CAT,
    preview: (
      <div className="nuda-vp2-thumb-preview">
        <div className="nuda-vp2-thumb-preview__frame" aria-hidden="true" />
        <div className="nuda-vp2-thumb-preview__scrubwrap">
          <input
            className="nuda-vp2-thumb-preview__range"
            type="range"
            min={0}
            max={100}
            defaultValue={38}
            aria-label="Seek"
            aria-valuetext="1:12 of 3:10"
          />
          <div className="nuda-vp2-thumb-preview__card" style={{ left: "38%" }} aria-hidden="true">
            <span className="nuda-vp2-thumb-preview__thumb" />
            <span className="nuda-vp2-thumb-preview__time">1:12</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vp2-thumb-preview{position:relative;width:300px;height:170px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#1a1a1f,#0e0e10)}
      .nuda-vp2-thumb-preview__frame{position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,rgba(228,255,84,.15),transparent 60%),linear-gradient(160deg,#1c1c22,#0a0a0c)}
      .nuda-vp2-thumb-preview__scrubwrap{position:absolute;left:10px;right:10px;bottom:10px}
      .nuda-vp2-thumb-preview__range{appearance:none;-webkit-appearance:none;width:100%;height:4px;border-radius:999px;background:linear-gradient(90deg,#e4ff54 0 38%,rgba(255,255,255,.22) 38% 100%);cursor:pointer;outline:0;margin:0;position:relative;z-index:1}
      .nuda-vp2-thumb-preview__range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:12px;height:12px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer}
      .nuda-vp2-thumb-preview__range::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;cursor:pointer}
      .nuda-vp2-thumb-preview__card{position:absolute;bottom:22px;left:38%;transform:translateX(-50%) translateY(6px) scale(.9);display:flex;flex-direction:column;align-items:center;gap:4px;opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s ease}
      .nuda-vp2-thumb-preview__scrubwrap:hover .nuda-vp2-thumb-preview__card,
      .nuda-vp2-thumb-preview__range:focus-visible ~ .nuda-vp2-thumb-preview__card{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
      .nuda-vp2-thumb-preview__thumb{width:64px;height:36px;border-radius:6px;background:linear-gradient(135deg,#2a2a32,#151519);border:1px solid rgba(255,255,255,.15);box-shadow:0 6px 16px rgba(0,0,0,.5)}
      .nuda-vp2-thumb-preview__time{font:700 9px ui-monospace,monospace;color:#fafafa;background:rgba(0,0,0,.7);padding:2px 5px;border-radius:4px}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-thumb-preview__card{transition:opacity .15s ease;transform:translateX(-50%) translateY(0) scale(1)}
        .nuda-vp2-thumb-preview__scrubwrap:hover .nuda-vp2-thumb-preview__card,
        .nuda-vp2-thumb-preview__range:focus-visible ~ .nuda-vp2-thumb-preview__card{transform:translateX(-50%) translateY(0) scale(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scrub Thumbnail Preview — card floats above the thumb while hovering/scrubbing -->
<div class="nuda-vp2-thumb-preview">
  <div class="nuda-vp2-thumb-preview__frame" aria-hidden="true"></div>
  <div class="nuda-vp2-thumb-preview__scrubwrap">
    <input
      class="nuda-vp2-thumb-preview__range"
      type="range" min="0" max="100" value="38"
      aria-label="Seek" aria-valuetext="1:12 of 3:10"
    />
    <div class="nuda-vp2-thumb-preview__card" style="left: 38%" aria-hidden="true">
      <span class="nuda-vp2-thumb-preview__thumb"></span>
      <span class="nuda-vp2-thumb-preview__time">1:12</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Live Edge Bar ─────────────── */
  {
    id: "vp2-live-edge",
    name: "Live Edge Bar",
    category: CAT,
    preview: (
      <div className="nuda-vp2-live-edge">
        <span className="nuda-vp2-live-edge__pill">
          <span className="nuda-vp2-live-edge__dot" aria-hidden="true" />
          LIVE
        </span>
        <div className="nuda-vp2-live-edge__track" aria-hidden="true">
          <span className="nuda-vp2-live-edge__fill" />
        </div>
        <button className="nuda-vp2-live-edge__btn" type="button" aria-label="Jump to live edge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 5 L20 12 L13 19 M20 12 L4 12" />
          </svg>
          Go live
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vp2-live-edge{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:8px;width:290px}
      .nuda-vp2-live-edge__pill{display:flex;align-items:center;gap:5px;font:800 9px ui-sans-serif,system-ui,sans-serif;color:#fff;letter-spacing:.08em;flex-shrink:0}
      .nuda-vp2-live-edge__dot{position:relative;width:6px;height:6px;border-radius:50%;background:#ff4d4d;box-shadow:0 0 6px #ff4d4d}
      .nuda-vp2-live-edge__dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:#ff4d4d;animation:_nuda-vp2liveedgepulse 1.4s ease-out infinite}
      .nuda-vp2-live-edge__track{position:relative;flex:1;height:4px;background:rgba(255,255,255,.12);border-radius:2px}
      .nuda-vp2-live-edge__fill{position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#e4ff54,#ff4d4d);border-radius:2px;transform:scaleX(1);transform-origin:left}
      .nuda-vp2-live-edge__fill::after{content:"";position:absolute;right:-2px;top:50%;width:8px;height:8px;border-radius:50%;background:#ff4d4d;transform:translateY(-50%);box-shadow:0 0 8px rgba(255,77,77,.7)}
      .nuda-vp2-live-edge__btn{display:inline-flex;align-items:center;gap:4px;font:700 9px ui-sans-serif,system-ui,sans-serif;color:#0a0a0a;background:#e4ff54;border:none;border-radius:6px;padding:6px 9px;cursor:pointer;flex-shrink:0;min-height:28px;transition:transform .2s ease,box-shadow .2s ease}
      .nuda-vp2-live-edge__btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(228,255,84,.35)}
      .nuda-vp2-live-edge__btn:focus-visible{outline:2px solid #fafafa;outline-offset:2px}
      .nuda-vp2-live-edge__btn svg{width:10px;height:10px}
      @keyframes _nuda-vp2liveedgepulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.4);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-live-edge__dot::after{animation:none}
        .nuda-vp2-live-edge__btn{transition:none}
        .nuda-vp2-live-edge__btn:hover{transform:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Live Edge Bar — pulsing LIVE pill, full track with a bright live-edge marker -->
<div class="nuda-vp2-live-edge">
  <span class="nuda-vp2-live-edge__pill">
    <span class="nuda-vp2-live-edge__dot" aria-hidden="true"></span>
    LIVE
  </span>
  <div class="nuda-vp2-live-edge__track" aria-hidden="true">
    <span class="nuda-vp2-live-edge__fill"></span>
  </div>
  <button class="nuda-vp2-live-edge__btn" type="button" aria-label="Jump to live edge">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 5 L20 12 L13 19 M20 12 L4 12" />
    </svg>
    Go live
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Picture-in-Picture Mini Player ─────────────── */
  {
    id: "vp2-pip",
    name: "Picture-in-Picture Mini Player",
    category: CAT,
    preview: (
      <div className="nuda-vp2-pip">
        <div className="nuda-vp2-pip__main" aria-hidden="true" />
        <div className="nuda-vp2-pip__mini">
          <div className="nuda-vp2-pip__mini-surface" aria-hidden="true" />
          <button className="nuda-vp2-pip__mini-play" type="button" aria-label="Play">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 L19 12 L8 19 Z" /></svg>
          </button>
          <button className="nuda-vp2-pip__mini-close" type="button" aria-label="Close picture-in-picture">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M5 5 L19 19 M19 5 L5 19" />
            </svg>
          </button>
        </div>
        <button className="nuda-vp2-pip__toggle" type="button" aria-pressed="true" aria-label="Toggle picture-in-picture">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <rect x="12" y="11" width="7" height="5" rx="1" fill="currentColor" stroke="none" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vp2-pip{position:relative;width:300px;height:170px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#1c1c22,#0a0a0c)}
      .nuda-vp2-pip__main{position:absolute;inset:0;background:radial-gradient(circle at 70% 20%,rgba(228,255,84,.12),transparent 55%)}
      .nuda-vp2-pip__mini{position:absolute;right:12px;bottom:12px;width:104px;height:60px;border-radius:8px;overflow:hidden;background:linear-gradient(135deg,#2a2a32,#131316);border:1px solid rgba(255,255,255,.15);box-shadow:0 10px 24px rgba(0,0,0,.55);transition:transform .25s cubic-bezier(.4,0,.2,1),box-shadow .25s ease}
      .nuda-vp2-pip:hover .nuda-vp2-pip__mini{transform:translateY(-4px) scale(1.03);box-shadow:0 16px 32px rgba(0,0,0,.6)}
      .nuda-vp2-pip__mini-surface{position:absolute;inset:0;background:radial-gradient(circle at 30% 70%,rgba(228,255,84,.18),transparent 60%)}
      .nuda-vp2-pip__mini-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(.7);width:22px;height:22px;border-radius:50%;background:rgba(228,255,84,.92);border:none;color:#09090b;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s ease,transform .2s ease}
      .nuda-vp2-pip__mini:hover .nuda-vp2-pip__mini-play,.nuda-vp2-pip__mini-play:focus-visible{opacity:1;transform:translate(-50%,-50%) scale(1)}
      .nuda-vp2-pip__mini-play svg{width:10px;height:10px;margin-left:1px}
      .nuda-vp2-pip__mini-close{position:absolute;top:3px;right:3px;width:16px;height:16px;border-radius:50%;background:rgba(0,0,0,.6);border:none;color:#fafafa;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s ease}
      .nuda-vp2-pip__mini:hover .nuda-vp2-pip__mini-close,.nuda-vp2-pip__mini-close:focus-visible{opacity:1}
      .nuda-vp2-pip__mini-close svg{width:8px;height:8px}
      .nuda-vp2-pip__toggle{position:absolute;left:10px;bottom:10px;width:30px;height:30px;border-radius:6px;background:rgba(0,0,0,.55);border:none;color:#e4ff54;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s ease}
      .nuda-vp2-pip__toggle:hover{background:rgba(228,255,84,.2)}
      .nuda-vp2-pip__toggle:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vp2-pip__toggle svg{width:16px;height:16px}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-pip__mini,.nuda-vp2-pip__mini-play,.nuda-vp2-pip__mini-close,.nuda-vp2-pip__toggle{transition:none}
        .nuda-vp2-pip:hover .nuda-vp2-pip__mini{transform:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Picture-in-Picture Mini Player — hover/focus the mini window to reveal its controls -->
<div class="nuda-vp2-pip">
  <div class="nuda-vp2-pip__main" aria-hidden="true"></div>
  <div class="nuda-vp2-pip__mini">
    <div class="nuda-vp2-pip__mini-surface" aria-hidden="true"></div>
    <button class="nuda-vp2-pip__mini-play" type="button" aria-label="Play">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 L19 12 L8 19 Z" /></svg>
    </button>
    <button class="nuda-vp2-pip__mini-close" type="button" aria-label="Close picture-in-picture">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.4" stroke-linecap="round">
        <path d="M5 5 L19 19 M19 5 L5 19" />
      </svg>
    </button>
  </div>
  <button class="nuda-vp2-pip__toggle" type="button" aria-pressed="true" aria-label="Toggle picture-in-picture">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <rect x="12" y="11" width="7" height="5" rx="1" fill="currentColor" stroke="none" />
    </svg>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Quality Selector ─────────────── */
  {
    id: "vp2-quality",
    name: "Quality Selector",
    category: CAT,
    preview: (
      <details className="nuda-vp2-quality">
        <summary className="nuda-vp2-quality__btn" aria-label="Video quality, Auto, currently 1080p">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2.5" y="5" width="19" height="13" rx="2" />
            <path d="M8 18 L16 18" />
          </svg>
          Auto
          <span className="nuda-vp2-quality__res">1080p</span>
        </summary>
        <ul className="nuda-vp2-quality__menu">
          <li><button className="nuda-vp2-quality__opt is-active" type="button" aria-current="true">Auto <span>1080p</span></button></li>
          <li><button className="nuda-vp2-quality__opt" type="button">2160p <span>4K</span></button></li>
          <li><button className="nuda-vp2-quality__opt" type="button">1080p</button></li>
          <li><button className="nuda-vp2-quality__opt" type="button">720p</button></li>
          <li><button className="nuda-vp2-quality__opt" type="button">480p</button></li>
        </ul>
      </details>
    ),
    cssInline: `
      .nuda-vp2-quality{position:relative;width:150px;font:600 10px ui-sans-serif,system-ui,sans-serif}
      .nuda-vp2-quality__btn{display:flex;align-items:center;gap:5px;padding:6px 10px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#fafafa;cursor:pointer;user-select:none;list-style:none}
      .nuda-vp2-quality__btn::marker{content:""}
      .nuda-vp2-quality__btn::-webkit-details-marker{display:none}
      .nuda-vp2-quality__btn svg{width:13px;height:13px;flex-shrink:0}
      .nuda-vp2-quality__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vp2-quality__res{color:#e4ff54;margin-left:auto;font-variant-numeric:tabular-nums}
      .nuda-vp2-quality__menu{position:absolute;left:0;right:0;bottom:calc(100% + 6px);list-style:none;margin:0;padding:4px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:8px;box-shadow:0 12px 28px rgba(0,0,0,.5);animation:_nuda-vp2qualitypop .18s ease both}
      .nuda-vp2-quality__opt{display:flex;align-items:center;justify-content:space-between;width:100%;padding:6px 8px;background:transparent;border:none;border-radius:5px;color:#cfcfcf;font:inherit;cursor:pointer;text-align:left;transition:background .15s ease,color .15s ease}
      .nuda-vp2-quality__opt:hover{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-vp2-quality__opt:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-vp2-quality__opt.is-active{color:#e4ff54}
      .nuda-vp2-quality__opt.is-active::after{content:"✓";margin-left:6px}
      @keyframes _nuda-vp2qualitypop{from{opacity:0;transform:translateY(4px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-quality__menu{animation:none}
        .nuda-vp2-quality__opt{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Quality Selector — native <details>/<summary>, no JS required to open/close -->
<details class="nuda-vp2-quality">
  <summary class="nuda-vp2-quality__btn" aria-label="Video quality, Auto, currently 1080p">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2.5" y="5" width="19" height="13" rx="2" />
      <path d="M8 18 L16 18" />
    </svg>
    Auto
    <span class="nuda-vp2-quality__res">1080p</span>
  </summary>
  <ul class="nuda-vp2-quality__menu">
    <li><button class="nuda-vp2-quality__opt is-active" type="button" aria-current="true">Auto <span>1080p</span></button></li>
    <li><button class="nuda-vp2-quality__opt" type="button">2160p <span>4K</span></button></li>
    <li><button class="nuda-vp2-quality__opt" type="button">1080p</button></li>
    <li><button class="nuda-vp2-quality__opt" type="button">720p</button></li>
    <li><button class="nuda-vp2-quality__opt" type="button">480p</button></li>
  </ul>
</details>`,
      },
    ],
  },

  /* ─────────────── 6. Subtitle Track Menu ─────────────── */
  {
    id: "vp2-subtitles",
    name: "Subtitle Track Menu",
    category: CAT,
    preview: (
      <details className="nuda-vp2-subtitles">
        <summary className="nuda-vp2-subtitles__btn" aria-label="Subtitles, currently English">
          <span className="nuda-vp2-subtitles__badge">CC</span>
        </summary>
        <ul className="nuda-vp2-subtitles__menu">
          <li><button className="nuda-vp2-subtitles__opt" type="button">Off</button></li>
          <li><button className="nuda-vp2-subtitles__opt is-active" type="button" aria-current="true">English</button></li>
          <li><button className="nuda-vp2-subtitles__opt" type="button">Español</button></li>
          <li><button className="nuda-vp2-subtitles__opt" type="button">Français</button></li>
          <li><button className="nuda-vp2-subtitles__opt" type="button">日本語</button></li>
        </ul>
      </details>
    ),
    cssInline: `
      .nuda-vp2-subtitles{position:relative;width:70px;font:600 10px ui-sans-serif,system-ui,sans-serif}
      .nuda-vp2-subtitles__btn{display:flex;align-items:center;justify-content:center;width:34px;height:26px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#fafafa;cursor:pointer;user-select:none;list-style:none}
      .nuda-vp2-subtitles__btn::marker{content:""}
      .nuda-vp2-subtitles__btn::-webkit-details-marker{display:none}
      .nuda-vp2-subtitles__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vp2-subtitles__badge{font:800 9px ui-sans-serif,system-ui,sans-serif;letter-spacing:.04em}
      .nuda-vp2-subtitles[open] .nuda-vp2-subtitles__btn{color:#e4ff54;border-color:rgba(228,255,84,.4)}
      .nuda-vp2-subtitles__menu{position:absolute;left:0;top:calc(100% + 6px);width:110px;list-style:none;margin:0;padding:4px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:8px;box-shadow:0 12px 28px rgba(0,0,0,.5);transform-origin:top;animation:_nuda-vp2subtitlespop .18s ease both}
      .nuda-vp2-subtitles__opt{display:block;width:100%;padding:6px 8px;background:transparent;border:none;border-radius:5px;color:#cfcfcf;font:inherit;cursor:pointer;text-align:left;transition:background .15s ease,color .15s ease}
      .nuda-vp2-subtitles__opt:hover{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-vp2-subtitles__opt:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-vp2-subtitles__opt.is-active{color:#e4ff54}
      .nuda-vp2-subtitles__opt.is-active::after{content:" ✓"}
      @keyframes _nuda-vp2subtitlespop{from{opacity:0;transform:scaleY(.85)}to{opacity:1;transform:scaleY(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-subtitles__menu{animation:none}
        .nuda-vp2-subtitles__opt{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Subtitle Track Menu — native <details>/<summary> track list -->
<details class="nuda-vp2-subtitles">
  <summary class="nuda-vp2-subtitles__btn" aria-label="Subtitles, currently English">
    <span class="nuda-vp2-subtitles__badge">CC</span>
  </summary>
  <ul class="nuda-vp2-subtitles__menu">
    <li><button class="nuda-vp2-subtitles__opt" type="button">Off</button></li>
    <li><button class="nuda-vp2-subtitles__opt is-active" type="button" aria-current="true">English</button></li>
    <li><button class="nuda-vp2-subtitles__opt" type="button">Español</button></li>
    <li><button class="nuda-vp2-subtitles__opt" type="button">Français</button></li>
    <li><button class="nuda-vp2-subtitles__opt" type="button">日本語</button></li>
  </ul>
</details>`,
      },
    ],
  },

  /* ─────────────── 7. Double-Tap Seek Ripple ─────────────── */
  {
    id: "vp2-seek-ripple",
    name: "Double-Tap Seek Ripple",
    category: CAT,
    preview: (
      <div className="nuda-vp2-seek-ripple">
        <div className="nuda-vp2-seek-ripple__frame" aria-hidden="true" />
        <button className="nuda-vp2-seek-ripple__zone nuda-vp2-seek-ripple__zone--back" type="button" aria-label="Rewind 10 seconds">
          <span className="nuda-vp2-seek-ripple__ring" aria-hidden="true" />
          <svg className="nuda-vp2-seek-ripple__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12a8 8 0 1 0 3-6.2M4 12V6M4 12h6" />
          </svg>
          <span className="nuda-vp2-seek-ripple__amt">10</span>
        </button>
        <button className="nuda-vp2-seek-ripple__zone nuda-vp2-seek-ripple__zone--fwd" type="button" aria-label="Forward 10 seconds">
          <span className="nuda-vp2-seek-ripple__ring" aria-hidden="true" />
          <svg className="nuda-vp2-seek-ripple__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12a8 8 0 1 1-3-6.2M20 12V6M20 12h-6" />
          </svg>
          <span className="nuda-vp2-seek-ripple__amt">10</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vp2-seek-ripple{position:relative;width:300px;height:170px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#1a1a1f,#0e0e10);display:flex}
      .nuda-vp2-seek-ripple__frame{position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(228,255,84,.1),transparent 60%)}
      .nuda-vp2-seek-ripple__zone{position:relative;flex:1;background:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#fafafa;cursor:pointer;overflow:hidden}
      .nuda-vp2-seek-ripple__zone:focus-visible{outline:2px solid #e4ff54;outline-offset:-3px}
      .nuda-vp2-seek-ripple__ring{position:absolute;width:40px;height:40px;border-radius:50%;background:rgba(228,255,84,.25);transform:scale(.3);opacity:0;animation:_nuda-vp2seekripplepulse 2.6s ease-out infinite}
      .nuda-vp2-seek-ripple__zone--fwd .nuda-vp2-seek-ripple__ring{animation-delay:1.3s}
      .nuda-vp2-seek-ripple__icon{width:20px;height:20px;position:relative;z-index:1}
      .nuda-vp2-seek-ripple__amt{position:relative;z-index:1;font:700 9px ui-sans-serif,system-ui,sans-serif;letter-spacing:.02em}
      .nuda-vp2-seek-ripple__zone:hover .nuda-vp2-seek-ripple__ring,
      .nuda-vp2-seek-ripple__zone:focus-visible .nuda-vp2-seek-ripple__ring{background:rgba(228,255,84,.35)}
      @keyframes _nuda-vp2seekripplepulse{0%{transform:scale(.3);opacity:.7}70%{opacity:.15}100%{transform:scale(1.6);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-seek-ripple__ring{animation:none;opacity:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Double-Tap Seek Ripple — left/right zones ripple ±10s on tap -->
<div class="nuda-vp2-seek-ripple">
  <div class="nuda-vp2-seek-ripple__frame" aria-hidden="true"></div>
  <button class="nuda-vp2-seek-ripple__zone nuda-vp2-seek-ripple__zone--back" type="button" aria-label="Rewind 10 seconds">
    <span class="nuda-vp2-seek-ripple__ring" aria-hidden="true"></span>
    <svg class="nuda-vp2-seek-ripple__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 12a8 8 0 1 0 3-6.2M4 12V6M4 12h6" />
    </svg>
    <span class="nuda-vp2-seek-ripple__amt">10</span>
  </button>
  <button class="nuda-vp2-seek-ripple__zone nuda-vp2-seek-ripple__zone--fwd" type="button" aria-label="Forward 10 seconds">
    <span class="nuda-vp2-seek-ripple__ring" aria-hidden="true"></span>
    <svg class="nuda-vp2-seek-ripple__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 12a8 8 0 1 1-3-6.2M20 12V6M20 12h-6" />
    </svg>
    <span class="nuda-vp2-seek-ripple__amt">10</span>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Next Episode Countdown ─────────────── */
  {
    id: "vp2-next-ep",
    name: "Next Episode Countdown",
    category: CAT,
    preview: (
      <div className="nuda-vp2-next-ep">
        <div className="nuda-vp2-next-ep__thumb" aria-hidden="true" />
        <div className="nuda-vp2-next-ep__body">
          <span className="nuda-vp2-next-ep__eyebrow">Up next</span>
          <p className="nuda-vp2-next-ep__title">S2 E4 — Signal Loss</p>
          <div className="nuda-vp2-next-ep__actions">
            <button className="nuda-vp2-next-ep__cancel" type="button">Cancel</button>
            <button className="nuda-vp2-next-ep__play" type="button" aria-label="Play next episode now">
              <svg className="nuda-vp2-next-ep__ring" viewBox="0 0 36 36" aria-hidden="true">
                <circle className="nuda-vp2-next-ep__ring-track" cx="18" cy="18" r="15.5" fill="none" strokeWidth="3" />
                <circle className="nuda-vp2-next-ep__ring-progress" cx="18" cy="18" r="15.5" fill="none" strokeWidth="3" />
              </svg>
              <svg className="nuda-vp2-next-ep__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 L19 12 L8 19 Z" /></svg>
            </button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vp2-next-ep{display:flex;gap:10px;width:300px;padding:10px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px}
      .nuda-vp2-next-ep__thumb{width:96px;align-self:stretch;min-height:74px;flex-shrink:0;border-radius:8px;background:radial-gradient(circle at 30% 30%,rgba(228,255,84,.2),transparent 60%),linear-gradient(135deg,#2a2a32,#101013)}
      .nuda-vp2-next-ep__body{display:flex;flex-direction:column;gap:6px;min-width:0;flex:1}
      .nuda-vp2-next-ep__eyebrow{font:800 8px ui-sans-serif,system-ui,sans-serif;color:#e4ff54;letter-spacing:.1em;text-transform:uppercase}
      .nuda-vp2-next-ep__title{margin:0;font:600 11px ui-sans-serif,system-ui,sans-serif;color:#fafafa;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-vp2-next-ep__actions{display:flex;align-items:center;gap:8px;margin-top:auto}
      .nuda-vp2-next-ep__cancel{font:600 9px ui-sans-serif,system-ui,sans-serif;color:#a1a1aa;background:transparent;border:1px solid rgba(255,255,255,.15);border-radius:6px;padding:5px 9px;cursor:pointer;transition:color .2s ease,border-color .2s ease}
      .nuda-vp2-next-ep__cancel:hover{color:#fafafa;border-color:rgba(255,255,255,.3)}
      .nuda-vp2-next-ep__cancel:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vp2-next-ep__play{position:relative;width:34px;height:34px;border-radius:50%;background:transparent;border:none;cursor:pointer;color:#e4ff54;display:flex;align-items:center;justify-content:center;margin-left:auto}
      .nuda-vp2-next-ep__play:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vp2-next-ep__ring{position:absolute;inset:0;transform:rotate(-90deg)}
      .nuda-vp2-next-ep__ring-track{stroke:rgba(255,255,255,.12)}
      .nuda-vp2-next-ep__ring-progress{stroke:#e4ff54;stroke-dasharray:97.39;stroke-dashoffset:0;animation:_nuda-vp2nextepring 8s linear forwards}
      .nuda-vp2-next-ep__icon{width:14px;height:14px;margin-left:1px;position:relative;z-index:1}
      @keyframes _nuda-vp2nextepring{from{stroke-dashoffset:0}to{stroke-dashoffset:97.39}}
      @media (prefers-reduced-motion:reduce){
        .nuda-vp2-next-ep__ring-progress{animation:none;stroke-dashoffset:24}
        .nuda-vp2-next-ep__cancel{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Next Episode Countdown — ring drains as autoplay approaches; Cancel stops it -->
<div class="nuda-vp2-next-ep">
  <div class="nuda-vp2-next-ep__thumb" aria-hidden="true"></div>
  <div class="nuda-vp2-next-ep__body">
    <span class="nuda-vp2-next-ep__eyebrow">Up next</span>
    <p class="nuda-vp2-next-ep__title">S2 E4 — Signal Loss</p>
    <div class="nuda-vp2-next-ep__actions">
      <button class="nuda-vp2-next-ep__cancel" type="button">Cancel</button>
      <button class="nuda-vp2-next-ep__play" type="button" aria-label="Play next episode now">
        <svg class="nuda-vp2-next-ep__ring" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="nuda-vp2-next-ep__ring-track" cx="18" cy="18" r="15.5" fill="none" stroke-width="3" />
          <circle class="nuda-vp2-next-ep__ring-progress" cx="18" cy="18" r="15.5" fill="none" stroke-width="3" />
        </svg>
        <svg class="nuda-vp2-next-ep__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 L19 12 L8 19 Z" /></svg>
      </button>
    </div>
  </div>
</div>`,
      },
    ],
  },
];
