import type { NudaComponent } from "./types";

const CAT = "3D Effects";

export const threeDExtra: NudaComponent[] = [
  /* ─────────────── BOOK PAGE FOLD ─────────────── */
  {
    id: "td2-book-fold",
    name: "Book Page Fold",
    category: CAT,
    preview: (
      <div className="nuda-td2-book-fold-scene" aria-hidden="true">
        <div className="nuda-td2-book-fold">
          <div className="nuda-td2-book-fold__base" />
          <div className="nuda-td2-book-fold__page" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-book-fold-scene{display:flex;align-items:center;justify-content:center;padding:1rem;perspective:400px}
      .nuda-td2-book-fold{--c:#e4ff54;width:110px;height:74px;position:relative}
      .nuda-td2-book-fold__base{position:absolute;inset:0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:4px}
      .nuda-td2-book-fold__base::after{content:'';position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,.12)}
      .nuda-td2-book-fold__page{position:absolute;top:0;left:50%;width:50%;height:100%;background:var(--c);border-radius:0 4px 4px 0;transform-origin:left center;transform-style:preserve-3d;backface-visibility:hidden;animation:_nuda-td2bookfold 4s ease-in-out infinite}
      @keyframes _nuda-td2bookfold{0%,12%{transform:rotateY(0deg)}50%{transform:rotateY(-165deg)}88%,100%{transform:rotateY(0deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-book-fold__page{animation:none;transform:rotateY(-70deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-book-fold-scene" aria-hidden="true">
  <div class="nuda-td2-book-fold">
    <div class="nuda-td2-book-fold__base"></div>
    <div class="nuda-td2-book-fold__page"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── CARD RING CAROUSEL ─────────────── */
  {
    id: "td2-card-ring",
    name: "Card Ring Carousel",
    category: CAT,
    preview: (
      <div className="nuda-td2-card-ring-scene" aria-hidden="true">
        <div className="nuda-td2-card-ring">
          <div className="nuda-td2-card-ring__card nuda-td2-card-ring__card--1" />
          <div className="nuda-td2-card-ring__card nuda-td2-card-ring__card--2" />
          <div className="nuda-td2-card-ring__card nuda-td2-card-ring__card--3" />
          <div className="nuda-td2-card-ring__card nuda-td2-card-ring__card--4" />
          <div className="nuda-td2-card-ring__card nuda-td2-card-ring__card--5" />
          <div className="nuda-td2-card-ring__card nuda-td2-card-ring__card--6" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-card-ring-scene{display:flex;align-items:center;justify-content:center;perspective:500px;padding:1rem}
      .nuda-td2-card-ring{--c:#e4ff54;width:56px;height:76px;position:relative;transform-style:preserve-3d;animation:_nuda-td2cardring 10s linear infinite}
      .nuda-td2-card-ring__card{position:absolute;inset:0;border-radius:6px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.3)}
      .nuda-td2-card-ring__card--1{transform:rotateY(0deg) translateZ(90px)}
      .nuda-td2-card-ring__card--2{transform:rotateY(60deg) translateZ(90px)}
      .nuda-td2-card-ring__card--3{transform:rotateY(120deg) translateZ(90px)}
      .nuda-td2-card-ring__card--4{transform:rotateY(180deg) translateZ(90px)}
      .nuda-td2-card-ring__card--5{transform:rotateY(240deg) translateZ(90px)}
      .nuda-td2-card-ring__card--6{transform:rotateY(300deg) translateZ(90px)}
      @keyframes _nuda-td2cardring{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-card-ring{animation:none;transform:rotateY(20deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-card-ring-scene" aria-hidden="true">
  <div class="nuda-td2-card-ring">
    <div class="nuda-td2-card-ring__card nuda-td2-card-ring__card--1"></div>
    <div class="nuda-td2-card-ring__card nuda-td2-card-ring__card--2"></div>
    <div class="nuda-td2-card-ring__card nuda-td2-card-ring__card--3"></div>
    <div class="nuda-td2-card-ring__card nuda-td2-card-ring__card--4"></div>
    <div class="nuda-td2-card-ring__card nuda-td2-card-ring__card--5"></div>
    <div class="nuda-td2-card-ring__card nuda-td2-card-ring__card--6"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── LAYERED DEPTH STACK ─────────────── */
  {
    id: "td2-depth-stack",
    name: "Layered Depth Stack",
    category: CAT,
    preview: (
      <div className="nuda-td2-depth-stack-scene" aria-hidden="true">
        <div className="nuda-td2-depth-stack">
          <div className="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--1" />
          <div className="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--2" />
          <div className="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--3" />
          <div className="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--4" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-depth-stack-scene{display:flex;align-items:center;justify-content:center;perspective:600px;padding:1rem;cursor:pointer}
      .nuda-td2-depth-stack{--c:#e4ff54;width:100px;height:70px;position:relative;transform-style:preserve-3d;transition:transform .4s ease}
      .nuda-td2-depth-stack-scene:hover .nuda-td2-depth-stack,.nuda-td2-depth-stack-scene:focus-within .nuda-td2-depth-stack{transform:rotateX(18deg) rotateY(-22deg)}
      .nuda-td2-depth-stack__layer{position:absolute;inset:0;border-radius:8px;border:1px solid rgba(228,255,84,.25);background:rgba(228,255,84,.05);transition:transform .4s ease}
      .nuda-td2-depth-stack__layer--1{transform:translateZ(0px)}
      .nuda-td2-depth-stack__layer--2{transform:translateZ(14px)}
      .nuda-td2-depth-stack__layer--3{transform:translateZ(28px)}
      .nuda-td2-depth-stack__layer--4{transform:translateZ(42px);background:var(--c);opacity:.9}
      @media(prefers-reduced-motion:reduce){.nuda-td2-depth-stack,.nuda-td2-depth-stack__layer{transition:none}.nuda-td2-depth-stack-scene:hover .nuda-td2-depth-stack,.nuda-td2-depth-stack-scene:focus-within .nuda-td2-depth-stack{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-depth-stack-scene" aria-hidden="true">
  <div class="nuda-td2-depth-stack">
    <div class="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--1"></div>
    <div class="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--2"></div>
    <div class="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--3"></div>
    <div class="nuda-td2-depth-stack__layer nuda-td2-depth-stack__layer--4"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── ISOMETRIC TILE GRID ─────────────── */
  {
    id: "td2-iso-grid",
    name: "Isometric Tile Grid",
    category: CAT,
    preview: (
      <div className="nuda-td2-iso-grid-scene" aria-hidden="true">
        <div className="nuda-td2-iso-grid">
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
          <div className="nuda-td2-iso-grid__tile" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-iso-grid-scene{display:flex;align-items:center;justify-content:center;perspective:700px;padding:1rem}
      .nuda-td2-iso-grid{--c:#e4ff54;display:grid;grid-template-columns:repeat(3,32px);grid-template-rows:repeat(3,32px);gap:4px;transform-style:preserve-3d;transform:rotateX(55deg) rotateZ(45deg)}
      .nuda-td2-iso-grid__tile{background:rgba(228,255,84,.1);border:1px solid rgba(228,255,84,.35);animation:_nuda-td2isogrid 2.4s ease-in-out infinite}
      .nuda-td2-iso-grid__tile:nth-child(2){animation-delay:.1s}
      .nuda-td2-iso-grid__tile:nth-child(3){animation-delay:.2s}
      .nuda-td2-iso-grid__tile:nth-child(4){animation-delay:.15s}
      .nuda-td2-iso-grid__tile:nth-child(5){animation-delay:.3s}
      .nuda-td2-iso-grid__tile:nth-child(6){animation-delay:.25s}
      .nuda-td2-iso-grid__tile:nth-child(7){animation-delay:.35s}
      .nuda-td2-iso-grid__tile:nth-child(8){animation-delay:.4s}
      .nuda-td2-iso-grid__tile:nth-child(9){animation-delay:.45s}
      @keyframes _nuda-td2isogrid{0%,100%{transform:translateZ(0)}50%{transform:translateZ(10px)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-iso-grid__tile{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-iso-grid-scene" aria-hidden="true">
  <div class="nuda-td2-iso-grid">
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
    <div class="nuda-td2-iso-grid__tile"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3D FLIP TILE BOARD ─────────────── */
  {
    id: "td2-flip-board",
    name: "3D Flip Tile Board",
    category: CAT,
    preview: (
      <div className="nuda-td2-flip-board-scene" aria-hidden="true">
        <div className="nuda-td2-flip-board">
          <div className="nuda-td2-flip-board__tile">
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--front" />
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--back" />
          </div>
          <div className="nuda-td2-flip-board__tile">
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--front" />
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--back" />
          </div>
          <div className="nuda-td2-flip-board__tile">
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--front" />
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--back" />
          </div>
          <div className="nuda-td2-flip-board__tile">
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--front" />
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--back" />
          </div>
          <div className="nuda-td2-flip-board__tile">
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--front" />
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--back" />
          </div>
          <div className="nuda-td2-flip-board__tile">
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--front" />
            <div className="nuda-td2-flip-board__face nuda-td2-flip-board__face--back" />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-flip-board-scene{display:flex;align-items:center;justify-content:center;perspective:500px;padding:1rem}
      .nuda-td2-flip-board{--c:#e4ff54;display:grid;grid-template-columns:repeat(3,34px);grid-template-rows:repeat(2,34px);gap:6px}
      .nuda-td2-flip-board__tile{position:relative;width:34px;height:34px;transform-style:preserve-3d;animation:_nuda-td2flipboard 3s ease-in-out infinite}
      .nuda-td2-flip-board__tile:nth-child(2){animation-delay:.2s}
      .nuda-td2-flip-board__tile:nth-child(3){animation-delay:.4s}
      .nuda-td2-flip-board__tile:nth-child(4){animation-delay:.6s}
      .nuda-td2-flip-board__tile:nth-child(5){animation-delay:.8s}
      .nuda-td2-flip-board__tile:nth-child(6){animation-delay:1s}
      .nuda-td2-flip-board__face{position:absolute;inset:0;border-radius:4px;backface-visibility:hidden}
      .nuda-td2-flip-board__face--front{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}
      .nuda-td2-flip-board__face--back{background:var(--c);transform:rotateY(180deg)}
      @keyframes _nuda-td2flipboard{0%,40%{transform:rotateY(0deg)}60%,100%{transform:rotateY(180deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-flip-board__tile{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-flip-board-scene" aria-hidden="true">
  <div class="nuda-td2-flip-board">
    <div class="nuda-td2-flip-board__tile">
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--front"></div>
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--back"></div>
    </div>
    <div class="nuda-td2-flip-board__tile">
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--front"></div>
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--back"></div>
    </div>
    <div class="nuda-td2-flip-board__tile">
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--front"></div>
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--back"></div>
    </div>
    <div class="nuda-td2-flip-board__tile">
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--front"></div>
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--back"></div>
    </div>
    <div class="nuda-td2-flip-board__tile">
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--front"></div>
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--back"></div>
    </div>
    <div class="nuda-td2-flip-board__tile">
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--front"></div>
      <div class="nuda-td2-flip-board__face nuda-td2-flip-board__face--back"></div>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── TESSERACT WIREFRAME ─────────────── */
  {
    id: "td2-tesseract",
    name: "Tesseract Wireframe",
    category: CAT,
    preview: (
      <div className="nuda-td2-tesseract-scene" aria-hidden="true">
        <div className="nuda-td2-tesseract">
          <div className="nuda-td2-tesseract__outer">
            <div className="nuda-td2-tesseract__face nuda-td2-tesseract__face--front" />
            <div className="nuda-td2-tesseract__face nuda-td2-tesseract__face--back" />
            <div className="nuda-td2-tesseract__face nuda-td2-tesseract__face--right" />
            <div className="nuda-td2-tesseract__face nuda-td2-tesseract__face--left" />
            <div className="nuda-td2-tesseract__face nuda-td2-tesseract__face--top" />
            <div className="nuda-td2-tesseract__face nuda-td2-tesseract__face--bottom" />
          </div>
          <div className="nuda-td2-tesseract__inner">
            <div className="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--front" />
            <div className="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--back" />
            <div className="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--right" />
            <div className="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--left" />
            <div className="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--top" />
            <div className="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--bottom" />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-tesseract-scene{display:flex;align-items:center;justify-content:center;perspective:300px;padding:1rem}
      .nuda-td2-tesseract{--c:#e4ff54;width:70px;height:70px;position:relative;transform-style:preserve-3d}
      .nuda-td2-tesseract__outer{position:absolute;inset:0;transform-style:preserve-3d;animation:_nuda-td2tessout 7s linear infinite}
      .nuda-td2-tesseract__inner{position:absolute;top:18px;left:18px;width:34px;height:34px;transform-style:preserve-3d;animation:_nuda-td2tessin 5s linear infinite reverse}
      .nuda-td2-tesseract__face,.nuda-td2-tesseract__iface{position:absolute;border:1px solid rgba(228,255,84,.3);background:rgba(228,255,84,.03)}
      .nuda-td2-tesseract__face{width:70px;height:70px}
      .nuda-td2-tesseract__iface{width:34px;height:34px;border-color:rgba(228,255,84,.55)}
      .nuda-td2-tesseract__face--front{transform:translateZ(35px)}
      .nuda-td2-tesseract__face--back{transform:rotateY(180deg) translateZ(35px)}
      .nuda-td2-tesseract__face--right{transform:rotateY(90deg) translateZ(35px)}
      .nuda-td2-tesseract__face--left{transform:rotateY(-90deg) translateZ(35px)}
      .nuda-td2-tesseract__face--top{transform:rotateX(90deg) translateZ(35px)}
      .nuda-td2-tesseract__face--bottom{transform:rotateX(-90deg) translateZ(35px)}
      .nuda-td2-tesseract__iface--front{transform:translateZ(17px)}
      .nuda-td2-tesseract__iface--back{transform:rotateY(180deg) translateZ(17px)}
      .nuda-td2-tesseract__iface--right{transform:rotateY(90deg) translateZ(17px)}
      .nuda-td2-tesseract__iface--left{transform:rotateY(-90deg) translateZ(17px)}
      .nuda-td2-tesseract__iface--top{transform:rotateX(90deg) translateZ(17px)}
      .nuda-td2-tesseract__iface--bottom{transform:rotateX(-90deg) translateZ(17px)}
      @keyframes _nuda-td2tessout{from{transform:rotateX(0deg) rotateY(0deg)}to{transform:rotateX(360deg) rotateY(360deg)}}
      @keyframes _nuda-td2tessin{from{transform:rotateX(0deg) rotateY(0deg)}to{transform:rotateX(360deg) rotateY(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-tesseract__outer,.nuda-td2-tesseract__inner{animation:none}.nuda-td2-tesseract__outer{transform:rotateX(-20deg) rotateY(30deg)}.nuda-td2-tesseract__inner{transform:rotateX(20deg) rotateY(-30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-tesseract-scene" aria-hidden="true">
  <div class="nuda-td2-tesseract">
    <div class="nuda-td2-tesseract__outer">
      <div class="nuda-td2-tesseract__face nuda-td2-tesseract__face--front"></div>
      <div class="nuda-td2-tesseract__face nuda-td2-tesseract__face--back"></div>
      <div class="nuda-td2-tesseract__face nuda-td2-tesseract__face--right"></div>
      <div class="nuda-td2-tesseract__face nuda-td2-tesseract__face--left"></div>
      <div class="nuda-td2-tesseract__face nuda-td2-tesseract__face--top"></div>
      <div class="nuda-td2-tesseract__face nuda-td2-tesseract__face--bottom"></div>
    </div>
    <div class="nuda-td2-tesseract__inner">
      <div class="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--front"></div>
      <div class="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--back"></div>
      <div class="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--right"></div>
      <div class="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--left"></div>
      <div class="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--top"></div>
      <div class="nuda-td2-tesseract__iface nuda-td2-tesseract__iface--bottom"></div>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── EXTRUDED 3D TEXT ─────────────── */
  {
    id: "td2-extrude-text",
    name: "Extruded 3D Text",
    category: CAT,
    preview: (
      <div className="nuda-td2-extrude-text-scene" aria-hidden="true">
        <span className="nuda-td2-extrude-text">3D</span>
      </div>
    ),
    cssInline: `
      .nuda-td2-extrude-text-scene{display:flex;align-items:center;justify-content:center;padding:1rem;perspective:500px}
      .nuda-td2-extrude-text{--c:#e4ff54;font-size:2.4rem;font-weight:800;color:var(--c);display:inline-block;transform-style:preserve-3d;animation:_nuda-td2extrudetext 6s linear infinite;text-shadow:1px 1px 0 #b9d13f,2px 2px 0 #a3ba38,3px 3px 0 #8da331,4px 4px 0 #778c2a,5px 5px 0 #617523,6px 6px 0 #4b5e1c,7px 7px 10px rgba(0,0,0,.5)}
      @keyframes _nuda-td2extrudetext{0%{transform:rotateY(-25deg)}50%{transform:rotateY(25deg)}100%{transform:rotateY(-25deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-extrude-text{animation:none;transform:rotateY(-15deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-extrude-text-scene" aria-hidden="true">
  <span class="nuda-td2-extrude-text">3D</span>
</div>`,
      },
    ],
  },

  /* ─────────────── FLOATING SHADOW CARD ─────────────── */
  {
    id: "td2-shadow-card",
    name: "Floating Shadow Card",
    category: CAT,
    preview: (
      <div className="nuda-td2-shadow-card-scene" aria-hidden="true">
        <div className="nuda-td2-shadow-card">
          <span style={{ color: "#ccc", fontSize: "0.75rem" }}>Hover</span>
        </div>
        <div className="nuda-td2-shadow-card__shadow" />
      </div>
    ),
    cssInline: `
      .nuda-td2-shadow-card-scene{position:relative;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;perspective:500px}
      .nuda-td2-shadow-card{position:relative;width:110px;height:70px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;display:flex;align-items:center;justify-content:center;transition:transform .3s ease;transform-style:preserve-3d;will-change:transform}
      .nuda-td2-shadow-card-scene:hover .nuda-td2-shadow-card{transform:translateZ(30px) rotateX(6deg)}
      .nuda-td2-shadow-card__shadow{position:absolute;bottom:14%;width:90px;height:14px;border-radius:50%;background:radial-gradient(closest-side,rgba(228,255,84,.35),transparent 70%);filter:blur(2px);transition:transform .3s ease,opacity .3s ease}
      .nuda-td2-shadow-card-scene:hover .nuda-td2-shadow-card__shadow{transform:scale(1.4);opacity:.5}
      @media(prefers-reduced-motion:reduce){.nuda-td2-shadow-card,.nuda-td2-shadow-card__shadow{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-shadow-card-scene" aria-hidden="true">
  <div class="nuda-td2-shadow-card">
    <span>Hover</span>
  </div>
  <div class="nuda-td2-shadow-card__shadow"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── CYLINDER MARQUEE ─────────────── */
  {
    id: "td2-cylinder-marquee",
    name: "Cylinder Marquee",
    category: CAT,
    preview: (
      <div className="nuda-td2-cylinder-marquee-scene" aria-hidden="true">
        <div className="nuda-td2-cylinder-marquee">
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--1">A</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--2">B</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--3">C</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--4">D</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--5">E</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--6">F</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--7">G</div>
          <div className="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--8">H</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-cylinder-marquee-scene{display:flex;align-items:center;justify-content:center;perspective:400px;padding:1rem}
      .nuda-td2-cylinder-marquee{--c:#e4ff54;width:60px;height:70px;position:relative;transform-style:preserve-3d;animation:_nuda-td2cylmarquee 9s linear infinite}
      .nuda-td2-cylinder-marquee__strip{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:var(--c);background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.25)}
      .nuda-td2-cylinder-marquee__strip--1{transform:rotateY(0deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--2{transform:rotateY(45deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--3{transform:rotateY(90deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--4{transform:rotateY(135deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--5{transform:rotateY(180deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--6{transform:rotateY(225deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--7{transform:rotateY(270deg) translateZ(45px)}
      .nuda-td2-cylinder-marquee__strip--8{transform:rotateY(315deg) translateZ(45px)}
      @keyframes _nuda-td2cylmarquee{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-cylinder-marquee{animation:none;transform:rotateY(20deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-cylinder-marquee-scene" aria-hidden="true">
  <div class="nuda-td2-cylinder-marquee">
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--1">A</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--2">B</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--3">C</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--4">D</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--5">E</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--6">F</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--7">G</div>
    <div class="nuda-td2-cylinder-marquee__strip nuda-td2-cylinder-marquee__strip--8">H</div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3D DICE ROLL ─────────────── */
  {
    id: "td2-dice-roll",
    name: "3D Dice Roll",
    category: CAT,
    preview: (
      <div className="nuda-td2-dice-roll-scene" aria-hidden="true">
        <div className="nuda-td2-dice-roll">
          <div className="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--1" />
          <div className="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--2" />
          <div className="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--3" />
          <div className="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--4" />
          <div className="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--5" />
          <div className="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--6" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-dice-roll-scene{display:flex;align-items:center;justify-content:center;perspective:300px;padding:1rem}
      .nuda-td2-dice-roll{--c:#e4ff54;width:56px;height:56px;position:relative;transform-style:preserve-3d;animation:_nuda-td2diceroll 5s ease-in-out infinite}
      .nuda-td2-dice-roll__face{position:absolute;width:56px;height:56px;background-color:var(--c);border:1px solid rgba(10,10,10,.4);border-radius:6px}
      .nuda-td2-dice-roll__face--1{transform:translateZ(28px);background-image:radial-gradient(circle at 50% 50%,#0a0a0a 16%,transparent 17%)}
      .nuda-td2-dice-roll__face--2{transform:rotateY(90deg) translateZ(28px);background-image:radial-gradient(circle at 28% 28%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 72%,#0a0a0a 16%,transparent 17%)}
      .nuda-td2-dice-roll__face--3{transform:rotateY(180deg) translateZ(28px);background-image:radial-gradient(circle at 28% 28%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 50% 50%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 72%,#0a0a0a 16%,transparent 17%)}
      .nuda-td2-dice-roll__face--4{transform:rotateY(-90deg) translateZ(28px);background-image:radial-gradient(circle at 28% 28%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 28%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 28% 72%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 72%,#0a0a0a 16%,transparent 17%)}
      .nuda-td2-dice-roll__face--5{transform:rotateX(90deg) translateZ(28px);background-image:radial-gradient(circle at 28% 28%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 28%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 50% 50%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 28% 72%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 72%,#0a0a0a 16%,transparent 17%)}
      .nuda-td2-dice-roll__face--6{transform:rotateX(-90deg) translateZ(28px);background-image:radial-gradient(circle at 28% 22%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 22%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 28% 50%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 50%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 28% 78%,#0a0a0a 16%,transparent 17%),radial-gradient(circle at 72% 78%,#0a0a0a 16%,transparent 17%)}
      @keyframes _nuda-td2diceroll{0%{transform:rotateX(0deg) rotateY(0deg) translateY(0)}20%{transform:rotateX(90deg) rotateY(20deg) translateY(-6px)}40%{transform:rotateX(180deg) rotateY(90deg) translateY(0)}60%{transform:rotateX(270deg) rotateY(180deg) translateY(-6px)}80%{transform:rotateX(360deg) rotateY(270deg) translateY(0)}100%{transform:rotateX(360deg) rotateY(360deg) translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-dice-roll{animation:none;transform:rotateX(-20deg) rotateY(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-dice-roll-scene" aria-hidden="true">
  <div class="nuda-td2-dice-roll">
    <div class="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--1"></div>
    <div class="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--2"></div>
    <div class="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--3"></div>
    <div class="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--4"></div>
    <div class="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--5"></div>
    <div class="nuda-td2-dice-roll__face nuda-td2-dice-roll__face--6"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── RIBBON TWIST ─────────────── */
  {
    id: "td2-ribbon-twist",
    name: "Ribbon Twist",
    category: CAT,
    preview: (
      <div className="nuda-td2-ribbon-twist-scene" aria-hidden="true">
        <div className="nuda-td2-ribbon-twist">
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--1" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--2" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--3" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--4" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--5" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--6" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--7" />
          <div className="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--8" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-ribbon-twist-scene{display:flex;align-items:center;justify-content:center;perspective:500px;padding:1rem}
      .nuda-td2-ribbon-twist{--c:#e4ff54;width:160px;height:40px;position:relative;transform-style:preserve-3d;animation:_nuda-td2ribbontwistgroup 6s ease-in-out infinite}
      .nuda-td2-ribbon-twist__seg{position:absolute;top:0;left:0;width:22px;height:40px;background:linear-gradient(180deg,var(--c),#8fa324);border-radius:2px;transform-style:preserve-3d}
      .nuda-td2-ribbon-twist__seg--1{transform:translateX(0px) rotateY(0deg)}
      .nuda-td2-ribbon-twist__seg--2{transform:translateX(20px) rotateY(30deg)}
      .nuda-td2-ribbon-twist__seg--3{transform:translateX(40px) rotateY(60deg)}
      .nuda-td2-ribbon-twist__seg--4{transform:translateX(60px) rotateY(90deg)}
      .nuda-td2-ribbon-twist__seg--5{transform:translateX(80px) rotateY(120deg)}
      .nuda-td2-ribbon-twist__seg--6{transform:translateX(100px) rotateY(150deg)}
      .nuda-td2-ribbon-twist__seg--7{transform:translateX(120px) rotateY(180deg)}
      .nuda-td2-ribbon-twist__seg--8{transform:translateX(138px) rotateY(210deg)}
      @keyframes _nuda-td2ribbontwistgroup{0%,100%{transform:rotateX(0deg)}50%{transform:rotateX(180deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-ribbon-twist{animation:none;transform:rotateX(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-ribbon-twist-scene" aria-hidden="true">
  <div class="nuda-td2-ribbon-twist">
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--1"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--2"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--3"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--4"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--5"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--6"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--7"></div>
    <div class="nuda-td2-ribbon-twist__seg nuda-td2-ribbon-twist__seg--8"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── STAIRCASE DEPTH REVEAL ─────────────── */
  {
    id: "td2-staircase",
    name: "Staircase Depth Reveal",
    category: CAT,
    preview: (
      <div className="nuda-td2-staircase-scene" aria-hidden="true">
        <div className="nuda-td2-staircase">
          <div className="nuda-td2-staircase__step nuda-td2-staircase__step--1" />
          <div className="nuda-td2-staircase__step nuda-td2-staircase__step--2" />
          <div className="nuda-td2-staircase__step nuda-td2-staircase__step--3" />
          <div className="nuda-td2-staircase__step nuda-td2-staircase__step--4" />
          <div className="nuda-td2-staircase__step nuda-td2-staircase__step--5" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-td2-staircase-scene{display:flex;align-items:center;justify-content:center;perspective:500px;padding:1rem}
      .nuda-td2-staircase{--c:#e4ff54;width:140px;height:100px;position:relative;transform-style:preserve-3d;transform:rotateX(45deg) rotateZ(-45deg)}
      .nuda-td2-staircase__step{position:absolute;width:28px;height:28px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.3);animation:_nuda-td2staircase 3s ease-in-out infinite}
      .nuda-td2-staircase__step--1{transform:translate3d(0px,60px,0px)}
      .nuda-td2-staircase__step--2{transform:translate3d(20px,45px,10px);animation-delay:.2s}
      .nuda-td2-staircase__step--3{transform:translate3d(40px,30px,20px);animation-delay:.4s}
      .nuda-td2-staircase__step--4{transform:translate3d(60px,15px,30px);animation-delay:.6s}
      .nuda-td2-staircase__step--5{transform:translate3d(80px,0px,40px);animation-delay:.8s}
      @keyframes _nuda-td2staircase{0%,100%{filter:brightness(1);box-shadow:none}50%{filter:brightness(1.8);box-shadow:0 0 12px rgba(228,255,84,.6)}}
      @media(prefers-reduced-motion:reduce){.nuda-td2-staircase__step{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-td2-staircase-scene" aria-hidden="true">
  <div class="nuda-td2-staircase">
    <div class="nuda-td2-staircase__step nuda-td2-staircase__step--1"></div>
    <div class="nuda-td2-staircase__step nuda-td2-staircase__step--2"></div>
    <div class="nuda-td2-staircase__step nuda-td2-staircase__step--3"></div>
    <div class="nuda-td2-staircase__step nuda-td2-staircase__step--4"></div>
    <div class="nuda-td2-staircase__step nuda-td2-staircase__step--5"></div>
  </div>
</div>`,
      },
    ],
  },
];
