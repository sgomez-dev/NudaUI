import type { NudaComponent } from "./types";

export const mapsLocations: NudaComponent[] = [
  /* ─────────────── 1. Pin Drop ─────────────── */
  {
    id: "pin-drop",
    name: "Pin Drop",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-pindrop">
        <svg viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path className="nuda-pindrop__pin" d="M12 1c-5.5 0-10 4.5-10 10 0 7 10 20 10 20s10-13 10-20c0-5.5-4.5-10-10-10z" fill="#e4ff54" stroke="#09090b" />
          <circle className="nuda-pindrop__dot" cx="12" cy="11" r="3.5" fill="#09090b" stroke="none" />
        </svg>
        <span className="nuda-pindrop__shadow" />
      </div>
    ),
    cssInline: `
      .nuda-pindrop{position:relative;display:inline-flex;flex-direction:column;align-items:center;width:30px;height:50px}
      .nuda-pindrop svg{width:30px;height:40px;animation:_pinFall .7s cubic-bezier(.34,1.56,.64,1)}
      .nuda-pindrop__pin{transform-origin:12px 32px;animation:_pinSettle 1.2s cubic-bezier(.34,1.56,.64,1) .55s}
      .nuda-pindrop__shadow{width:18px;height:5px;border-radius:50%;background:rgba(0,0,0,.5);filter:blur(2px);margin-top:-4px;animation:_pinShadow .7s ease-out}
      @keyframes _pinFall{0%{transform:translateY(-26px) scale(.6);opacity:0}60%{transform:translateY(2px) scale(1.08)}100%{transform:translateY(0) scale(1);opacity:1}}
      @keyframes _pinSettle{0%,50%,100%{transform:scale(1)}25%{transform:scale(.94,1.06)}75%{transform:scale(1.04,.96)}}
      @keyframes _pinShadow{0%{transform:scale(.2);opacity:0}60%{transform:scale(.6)}100%{transform:scale(1);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-pindrop svg,.nuda-pindrop__pin,.nuda-pindrop__shadow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pindrop">
  <svg viewBox="0 0 24 32" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linejoin="round">
    <path class="nuda-pindrop__pin"
          d="M12 1c-5.5 0-10 4.5-10 10 0 7 10 20 10 20s10-13 10-20c0-5.5-4.5-10-10-10z"
          fill="#e4ff54" stroke="#09090b" />
    <circle class="nuda-pindrop__dot" cx="12" cy="11" r="3.5" fill="#09090b" />
  </svg>
  <span class="nuda-pindrop__shadow"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-pindrop svg {
  width: 30px;
  height: 40px;
  animation: nuda-pin-fall 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-pindrop__pin {
  transform-origin: 12px 32px;
  animation: nuda-pin-settle 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s;
}

@keyframes nuda-pin-fall {
  0%   { transform: translateY(-26px) scale(0.6); opacity: 0; }
  60%  { transform: translateY(2px)   scale(1.08);            }
  100% { transform: translateY(0)     scale(1);   opacity: 1; }
}

@keyframes nuda-pin-settle {
  0%, 50%, 100% { transform: scale(1);          }
  25%           { transform: scale(0.94, 1.06); }
  75%           { transform: scale(1.04, 0.96); }
}`,
      },
    ],
  },

  /* ─────────────── 2. Marker Pulse ─────────────── */
  {
    id: "marker-pulse",
    name: "Marker Pulse",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-mpulse">
        <span className="nuda-mpulse__ring" />
        <span className="nuda-mpulse__ring" />
        <span className="nuda-mpulse__dot" />
      </div>
    ),
    cssInline: `
      .nuda-mpulse{position:relative;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-mpulse__dot{position:relative;width:12px;height:12px;border-radius:50%;background:#e4ff54;border:2px solid #fafafa;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 0 12px rgba(228,255,84,.6);z-index:1}
      .nuda-mpulse__ring{position:absolute;width:14px;height:14px;border-radius:50%;background:#e4ff54;animation:_mpulse 2s ease-out infinite}
      .nuda-mpulse__ring:nth-child(2){animation-delay:1s}
      @keyframes _mpulse{0%{transform:scale(.6);opacity:.7}100%{transform:scale(2.4);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-mpulse__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mpulse">
  <span class="nuda-mpulse__ring"></span>
  <span class="nuda-mpulse__ring"></span>
  <span class="nuda-mpulse__dot"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-mpulse__dot {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e4ff54;
  border: 2px solid #fafafa;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.5),
    0 0 12px rgba(228, 255, 84, 0.6);
  z-index: 1;
}

.nuda-mpulse__ring {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #e4ff54;
  animation: nuda-mpulse 2s ease-out infinite;
}

.nuda-mpulse__ring:nth-child(2) { animation-delay: 1s; }

@keyframes nuda-mpulse {
  0%   { transform: scale(0.6); opacity: 0.7; }
  100% { transform: scale(2.4); opacity: 0;   }
}`,
      },
    ],
  },

  /* ─────────────── 3. Route Trace ─────────────── */
  {
    id: "route-trace",
    name: "Route Trace",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-route">
        <svg viewBox="0 0 200 100" preserveAspectRatio="none">
          <path className="nuda-route__bg" d="M10 80 Q40 80 60 60 T120 35 Q150 20 190 18" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 6" />
          <path className="nuda-route__draw" d="M10 80 Q40 80 60 60 T120 35 Q150 20 190 18" fill="none" stroke="#e4ff54" strokeWidth="3" strokeLinecap="round" />
          <circle cx="10" cy="80" r="5" fill="#62b6ff" stroke="#fafafa" strokeWidth="2" />
          <circle className="nuda-route__end" cx="190" cy="18" r="5" fill="#e4ff54" stroke="#fafafa" strokeWidth="2" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-route{width:100%;max-width:240px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px}
      .nuda-route svg{width:100%;height:80px;overflow:visible}
      .nuda-route__draw{stroke-dasharray:280;stroke-dashoffset:280;filter:drop-shadow(0 0 4px #e4ff54);animation:_routeDraw 2.4s cubic-bezier(.16,1,.3,1) forwards}
      .nuda-route__end{transform-origin:190px 18px;animation:_routeEnd .5s cubic-bezier(.34,1.56,.64,1) 2.4s both}
      @keyframes _routeDraw{to{stroke-dashoffset:0}}
      @keyframes _routeEnd{from{transform:scale(0)}to{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-route__draw{animation:none;stroke-dashoffset:0}.nuda-route__end{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-route">
  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
    <path class="nuda-route__bg"
          d="M10 80 Q40 80 60 60 T120 35 Q150 20 190 18"
          fill="none" stroke="rgba(255,255,255,.08)" stroke-width="3"
          stroke-linecap="round" stroke-dasharray="2 6" />
    <path class="nuda-route__draw"
          d="M10 80 Q40 80 60 60 T120 35 Q150 20 190 18"
          fill="none" stroke="#e4ff54" stroke-width="3"
          stroke-linecap="round" />
    <circle cx="10"  cy="80" r="5" fill="#62b6ff" stroke="#fafafa" stroke-width="2" />
    <circle class="nuda-route__end" cx="190" cy="18" r="5"
            fill="#e4ff54" stroke="#fafafa" stroke-width="2" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-route__draw {
  stroke-dasharray: 280;
  stroke-dashoffset: 280;
  filter: drop-shadow(0 0 4px #e4ff54);
  animation: nuda-route-draw 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.nuda-route__end {
  transform-origin: 190px 18px;
  animation: nuda-route-end 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 2.4s both;
}

@keyframes nuda-route-draw { to { stroke-dashoffset: 0; } }

@keyframes nuda-route-end {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}`,
      },
    ],
  },

  /* ─────────────── 4. Distance Line ─────────────── */
  {
    id: "distance-line",
    name: "Distance Line",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-dline">
        <span className="nuda-dline__a" />
        <span className="nuda-dline__line" />
        <span className="nuda-dline__b" />
        <span className="nuda-dline__chip">2.4 km</span>
      </div>
    ),
    cssInline: `
      .nuda-dline{position:relative;display:inline-flex;align-items:center;justify-content:space-between;width:200px;height:40px;padding:0 4px}
      .nuda-dline__a,.nuda-dline__b{width:12px;height:12px;border-radius:50%;flex-shrink:0;z-index:1}
      .nuda-dline__a{background:#62b6ff;box-shadow:0 0 0 3px rgba(98,182,255,.2)}
      .nuda-dline__b{background:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.2)}
      .nuda-dline__line{position:absolute;left:8px;right:8px;top:50%;transform:translateY(-50%);height:1px;background:repeating-linear-gradient(90deg,#fafafa 0,#fafafa 4px,transparent 4px,transparent 8px);opacity:.4;animation:_dlineFlow 1.4s linear infinite}
      .nuda-dline__chip{position:absolute;left:50%;top:-2px;transform:translateX(-50%);padding:2px 8px;background:#0c0c10;border:1px solid #e4ff54;border-radius:99px;font-size:10px;font-weight:700;color:#e4ff54;font-variant-numeric:tabular-nums;animation:_dchipBob 2.4s ease-in-out infinite}
      @keyframes _dlineFlow{from{background-position:0 0}to{background-position:8px 0}}
      @keyframes _dchipBob{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-2px)}}
      @media(prefers-reduced-motion:reduce){.nuda-dline__line,.nuda-dline__chip{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dline">
  <span class="nuda-dline__a"></span>
  <span class="nuda-dline__line"></span>
  <span class="nuda-dline__b"></span>
  <span class="nuda-dline__chip">2.4 km</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-dline__line {
  position: absolute;
  left: 8px;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    #fafafa 0,
    #fafafa 4px,
    transparent 4px,
    transparent 8px
  );
  opacity: 0.4;
  animation: nuda-dline-flow 1.4s linear infinite;
}

@keyframes nuda-dline-flow {
  from { background-position: 0 0;   }
  to   { background-position: 8px 0; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Geo Locating ─────────────── */
  {
    id: "geo-locating",
    name: "Geo Locating",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-geoloc">
        <div className="nuda-geoloc__ring" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M16 8l-4 8-4-8 8 0z" fill="currentColor" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-geoloc{position:relative;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:rgba(228,255,84,.08);color:#e4ff54}
      .nuda-geoloc svg{width:20px;height:20px;animation:_geoSpin 4s linear infinite}
      .nuda-geoloc__ring{position:absolute;inset:-2px;border-radius:50%;border:2px solid #e4ff54;border-right-color:transparent;border-bottom-color:transparent;animation:_geoSpin 1.4s linear infinite reverse}
      @keyframes _geoSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-geoloc svg,.nuda-geoloc__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-geoloc">
  <div class="nuda-geoloc__ring"></div>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M16 8l-4 8-4-8 8 0z" fill="currentColor" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-geoloc__ring {
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  border: 2px solid #e4ff54;
  border-right-color: transparent;
  border-bottom-color: transparent;
  animation: nuda-geo-spin 1.4s linear infinite reverse;
}

@keyframes nuda-geo-spin { to { transform: rotate(360deg); } }`,
      },
    ],
  },

  /* ─────────────── 6. Cluster Expand ─────────────── */
  {
    id: "cluster-expand",
    name: "Cluster Expand",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-cluster is-open">
        <div className="nuda-cluster__center">8</div>
        <span className="nuda-cluster__pin" style={{ ["--x" as string]: "32px", ["--y" as string]: "-8px" }}>1</span>
        <span className="nuda-cluster__pin" style={{ ["--x" as string]: "-32px", ["--y" as string]: "-8px" }}>2</span>
        <span className="nuda-cluster__pin" style={{ ["--x" as string]: "0", ["--y" as string]: "-36px" }}>3</span>
        <span className="nuda-cluster__pin" style={{ ["--x" as string]: "22px", ["--y" as string]: "26px" }}>4</span>
        <span className="nuda-cluster__pin" style={{ ["--x" as string]: "-22px", ["--y" as string]: "26px" }}>5</span>
      </div>
    ),
    cssInline: `
      .nuda-cluster{position:relative;display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px}
      .nuda-cluster__center{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#e4ff54;color:#09090b;font-weight:700;font-size:14px;box-shadow:0 0 0 4px rgba(228,255,84,.18),0 0 16px rgba(228,255,84,.4);cursor:pointer;z-index:1;transition:transform .25s}
      .nuda-cluster:hover .nuda-cluster__center{transform:scale(.9)}
      .nuda-cluster__pin{position:absolute;display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#62b6ff;color:#fafafa;font-size:10px;font-weight:700;opacity:0;transform:translate(0,0) scale(0);transition:opacity .35s,transform .55s cubic-bezier(.34,1.56,.64,1)}
      .nuda-cluster.is-open .nuda-cluster__pin{opacity:1;transform:translate(var(--x),var(--y)) scale(1)}
      .nuda-cluster.is-open .nuda-cluster__pin:nth-child(2){transition-delay:0ms}
      .nuda-cluster.is-open .nuda-cluster__pin:nth-child(3){transition-delay:60ms}
      .nuda-cluster.is-open .nuda-cluster__pin:nth-child(4){transition-delay:120ms}
      .nuda-cluster.is-open .nuda-cluster__pin:nth-child(5){transition-delay:180ms}
      .nuda-cluster.is-open .nuda-cluster__pin:nth-child(6){transition-delay:240ms}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cluster">
  <div class="nuda-cluster__center">8</div>
  <span class="nuda-cluster__pin" style="--x:32px;--y:-8px">1</span>
  <span class="nuda-cluster__pin" style="--x:-32px;--y:-8px">2</span>
  <span class="nuda-cluster__pin" style="--x:0;--y:-36px">3</span>
  <span class="nuda-cluster__pin" style="--x:22px;--y:26px">4</span>
  <span class="nuda-cluster__pin" style="--x:-22px;--y:26px">5</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const cluster = document.querySelector('.nuda-cluster');
const center  = cluster.querySelector('.nuda-cluster__center');
center.addEventListener('click', () => cluster.classList.toggle('is-open'));`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-cluster__pin {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #62b6ff;
  color: #fafafa;
  opacity: 0;
  transform: translate(0, 0) scale(0);
  transition:
    opacity 0.35s,
    transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-cluster.is-open .nuda-cluster__pin {
  opacity: 1;
  transform: translate(var(--x), var(--y)) scale(1);
}`,
      },
    ],
  },

  /* ─────────────── 7. Map Popup Card ─────────────── */
  {
    id: "map-popup",
    name: "Map Popup",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-mappop">
        <div className="nuda-mappop__card">
          <div className="nuda-mappop__title">Plaza Mayor</div>
          <div className="nuda-mappop__meta">★ 4.8 · 1.2 km away</div>
        </div>
        <div className="nuda-mappop__tail" />
        <div className="nuda-mappop__pin">
          <span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mappop{position:relative;display:inline-flex;flex-direction:column;align-items:center;animation:_popIn .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-mappop__card{padding:8px 12px;background:#fafafa;color:#09090b;border-radius:8px;box-shadow:0 10px 24px -8px rgba(0,0,0,.5)}
      .nuda-mappop__title{font-size:12px;font-weight:700}
      .nuda-mappop__meta{font-size:10px;color:#63636e;margin-top:1px}
      .nuda-mappop__tail{width:0;height:0;border:6px solid transparent;border-top-color:#fafafa;margin-top:-1px}
      .nuda-mappop__pin{margin-top:-2px;width:14px;height:14px;border-radius:50%;background:#e4ff54;border:2px solid #fafafa;box-shadow:0 0 0 1px rgba(0,0,0,.3)}
      .nuda-mappop__pin span{display:block;width:100%;height:100%;border-radius:50%;animation:_popPing 2s ease-out infinite;background:#e4ff54;opacity:.5}
      @keyframes _popIn{0%{transform:translateY(8px) scale(.92);opacity:0}60%{transform:translateY(-2px) scale(1.04)}100%{transform:none;opacity:1}}
      @keyframes _popPing{from{transform:scale(1);opacity:.5}to{transform:scale(2.2);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-mappop,.nuda-mappop__pin span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mappop">
  <div class="nuda-mappop__card">
    <div class="nuda-mappop__title">Plaza Mayor</div>
    <div class="nuda-mappop__meta">★ 4.8 · 1.2 km away</div>
  </div>
  <div class="nuda-mappop__tail"></div>
  <div class="nuda-mappop__pin"><span></span></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-mappop {
  animation: nuda-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-mappop__tail {
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top-color: #fafafa;
}

@keyframes nuda-pop-in {
  0%   { transform: translateY(8px) scale(0.92); opacity: 0; }
  60%  { transform: translateY(-2px) scale(1.04);            }
  100% { transform: none;                          opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Location Search ─────────────── */
  {
    id: "location-search",
    name: "Location Search",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-locsearch">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <input placeholder="Search address or place…" readOnly />
        <button className="nuda-locsearch__use" aria-label="Use my location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M16 8l-4 8-4-8 8 0z" fill="currentColor" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-locsearch{display:inline-flex;align-items:center;gap:8px;padding:6px 6px 6px 12px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:99px;color:#fafafa;width:100%;max-width:260px;transition:border-color .25s,box-shadow .25s}
      .nuda-locsearch:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-locsearch > svg{width:14px;height:14px;color:#a0a0a8;flex-shrink:0;transition:color .25s,transform .25s}
      .nuda-locsearch:focus-within > svg{color:#e4ff54;transform:scale(1.1)}
      .nuda-locsearch input{flex:1;min-width:0;background:transparent;border:0;outline:none;padding:6px 0;color:#fafafa;font-size:12px}
      .nuda-locsearch input::placeholder{color:#63636e}
      .nuda-locsearch__use{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:rgba(228,255,84,.1);border:0;color:#e4ff54;cursor:pointer;flex-shrink:0;transition:background .2s,transform .3s}
      .nuda-locsearch__use:hover{background:#e4ff54;color:#09090b;transform:rotate(45deg)}
      .nuda-locsearch__use svg{width:14px;height:14px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-locsearch">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
  <input placeholder="Search address or place…" />
  <button class="nuda-locsearch__use" aria-label="Use my location">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-4 8-4-8 8 0z" fill="currentColor" />
    </svg>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-locsearch__use {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(228, 255, 84, 0.1);
  border: 0;
  color: #e4ff54;
  cursor: pointer;
  transition: background 0.2s, transform 0.3s;
}

.nuda-locsearch__use:hover {
  background: #e4ff54;
  color: #09090b;
  transform: rotate(45deg);
}`,
      },
    ],
  },

  /* ─────────────── 9. Compass ─────────────── */
  {
    id: "compass",
    name: "Compass",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-compass">
        <div className="nuda-compass__face">
          <span className="nuda-compass__n">N</span>
          <span className="nuda-compass__needle" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-compass{position:relative;width:80px;height:80px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-compass__face{position:relative;width:80px;height:80px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#1a1a20,#0c0c10);border:2px solid rgba(255,255,255,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 6px 16px -6px rgba(0,0,0,.6);animation:_compRot 6s ease-in-out infinite}
      .nuda-compass__n{position:absolute;top:6px;left:50%;transform:translateX(-50%);color:#ff5e7a;font-size:10px;font-weight:700;letter-spacing:.08em;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-compass__needle{position:absolute;left:50%;top:50%;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:30px solid #e4ff54;transform:translate(-50%,-100%);transform-origin:50% 100%;filter:drop-shadow(0 0 4px #e4ff54)}
      .nuda-compass__needle::after{content:'';position:absolute;left:-5px;top:0;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:30px solid #63636e;transform:translateY(30px)}
      @keyframes _compRot{0%,100%{transform:rotate(0)}50%{transform:rotate(-18deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-compass__face{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-compass">
  <div class="nuda-compass__face">
    <span class="nuda-compass__n">N</span>
    <span class="nuda-compass__needle"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-compass__face {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #1a1a20, #0c0c10);
  border: 2px solid rgba(255, 255, 255, 0.08);
  animation: nuda-comp-rot 6s ease-in-out infinite;
}

.nuda-compass__needle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 30px solid #e4ff54;
  transform: translate(-50%, -100%);
  filter: drop-shadow(0 0 4px #e4ff54);
}

@keyframes nuda-comp-rot {
  0%, 100% { transform: rotate(0);     }
  50%      { transform: rotate(-18deg); }
}`,
      },
    ],
  },

  /* ─────────────── 10. Mini Map ─────────────── */
  {
    id: "mini-map",
    name: "Mini Map",
    category: "Maps & Locations",
    preview: (
      <div className="nuda-minimap">
        <div className="nuda-minimap__grid" />
        <div className="nuda-minimap__viewport" />
        <span className="nuda-minimap__pin" style={{ left: "40%", top: "55%" }} />
        <span className="nuda-minimap__pin nuda-minimap__pin--alt" style={{ left: "70%", top: "30%" }} />
        <span className="nuda-minimap__pin nuda-minimap__pin--alt" style={{ left: "25%", top: "30%" }} />
        <span className="nuda-minimap__label">Madrid</span>
      </div>
    ),
    cssInline: `
      .nuda-minimap{position:relative;width:100%;max-width:200px;height:120px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#0c0c10,#1a1a20);border:1px solid rgba(255,255,255,.06)}
      .nuda-minimap__grid{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(0deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:14px 14px}
      .nuda-minimap__viewport{position:absolute;left:30%;top:35%;width:50%;height:40%;border:1.5px dashed #e4ff54;border-radius:6px;background:rgba(228,255,84,.05);animation:_mmZoom 3s ease-in-out infinite}
      .nuda-minimap__pin{position:absolute;width:8px;height:8px;border-radius:50%;background:#e4ff54;box-shadow:0 0 8px #e4ff54;transform:translate(-50%,-50%);z-index:1}
      .nuda-minimap__pin--alt{background:#62b6ff;box-shadow:0 0 6px #62b6ff;width:6px;height:6px}
      .nuda-minimap__label{position:absolute;left:8px;top:8px;color:#a0a0a8;font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      @keyframes _mmZoom{0%,100%{transform:scale(1)}50%{transform:scale(1.03);border-color:#fafafa}}
      @media(prefers-reduced-motion:reduce){.nuda-minimap__viewport{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-minimap">
  <div class="nuda-minimap__grid"></div>
  <div class="nuda-minimap__viewport"></div>
  <span class="nuda-minimap__pin" style="left:40%;top:55%"></span>
  <span class="nuda-minimap__pin nuda-minimap__pin--alt" style="left:70%;top:30%"></span>
  <span class="nuda-minimap__pin nuda-minimap__pin--alt" style="left:25%;top:30%"></span>
  <span class="nuda-minimap__label">Madrid</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-minimap__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(0deg,  rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 14px 14px;
}

.nuda-minimap__viewport {
  position: absolute;
  border: 1.5px dashed #e4ff54;
  border-radius: 6px;
  background: rgba(228, 255, 84, 0.05);
  animation: nuda-mm-zoom 3s ease-in-out infinite;
}

@keyframes nuda-mm-zoom {
  0%, 100% { transform: scale(1);   }
  50%      { transform: scale(1.03); border-color: #fafafa; }
}`,
      },
    ],
  },
];
