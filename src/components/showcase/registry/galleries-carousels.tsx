import type { NudaComponent } from "./types";

export const galleriesCarousels: NudaComponent[] = [
  /* ─────────────── 1. Horizontal Carousel ─────────────── */
  {
    id: "horizontal-carousel",
    name: "Horizontal Carousel",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-carh">
        <div className="nuda-carh__viewport">
          <div className="nuda-carh__track" style={{ transform: "translateX(-33.333%)" }}>
            {["#ff5e7a", "#ffb45e", "#e4ff54", "#62b6ff"].map((c) => (
              <div key={c} className="nuda-carh__slide" style={{ background: `linear-gradient(135deg,${c},rgba(0,0,0,.3))` }} />
            ))}
          </div>
        </div>
        <div className="nuda-carh__dots">
          <span /><span className="is-on" /><span /><span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-carh{display:flex;flex-direction:column;gap:10px;width:100%;max-width:240px}
      .nuda-carh__viewport{overflow:hidden;border-radius:12px;border:1px solid rgba(255,255,255,.06)}
      .nuda-carh__track{display:flex;transition:transform .6s cubic-bezier(.16,1,.3,1)}
      .nuda-carh__slide{flex:0 0 100%;height:120px}
      .nuda-carh__dots{display:flex;justify-content:center;gap:5px}
      .nuda-carh__dots span{width:6px;height:6px;border-radius:99px;background:rgba(255,255,255,.16);transition:width .35s cubic-bezier(.16,1,.3,1),background .25s}
      .nuda-carh__dots span.is-on{width:18px;background:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-carh">
  <div class="nuda-carh__viewport">
    <div class="nuda-carh__track">
      <div class="nuda-carh__slide" style="background:#ff5e7a"></div>
      <div class="nuda-carh__slide" style="background:#ffb45e"></div>
      <div class="nuda-carh__slide" style="background:#e4ff54"></div>
      <div class="nuda-carh__slide" style="background:#62b6ff"></div>
    </div>
  </div>
  <div class="nuda-carh__dots">
    <span></span><span class="is-on"></span><span></span><span></span>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root  = document.querySelector('.nuda-carh');
const track = root.querySelector('.nuda-carh__track');
const dots  = root.querySelectorAll('.nuda-carh__dots span');
let index = 0;

const go = (i) => {
  index = (i + dots.length) % dots.length;
  track.style.transform = \`translateX(-\${index * 100}%)\`;
  dots.forEach((d, n) => d.classList.toggle('is-on', n === index));
};

dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
setInterval(() => go(index + 1), 3500);`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-carh__track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-carh__slide {
  flex: 0 0 100%;
  height: 120px;
}

.nuda-carh__dots span {
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.16);
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.25s;
}

.nuda-carh__dots span.is-on {
  width: 18px;
  background: #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 2. Swipe Dots ─────────────── */
  {
    id: "swipe-dots",
    name: "Swipe Indicator",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-swdots">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={i === 1 ? "is-on" : ""} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-swdots{display:inline-flex;align-items:center;gap:4px;padding:6px 10px;background:rgba(0,0,0,.4);border-radius:99px;backdrop-filter:blur(8px)}
      .nuda-swdots span{width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.4);transition:width .35s cubic-bezier(.16,1,.3,1),height .35s cubic-bezier(.16,1,.3,1),background .25s,border-radius .35s}
      .nuda-swdots span.is-on{width:18px;height:6px;border-radius:99px;background:#fafafa;animation:_swdotsAct .5s cubic-bezier(.34,1.56,.64,1)}
      @keyframes _swdotsAct{0%{transform:scaleX(.4)}100%{transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-swdots span.is-on{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-swdots">
  <span></span>
  <span class="is-on"></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-swdots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.25s,
    border-radius 0.35s;
}

.nuda-swdots span.is-on {
  width: 18px;
  height: 6px;
  border-radius: 99px;
  background: #fafafa;
}`,
      },
    ],
  },

  /* ─────────────── 3. Lightbox Open ─────────────── */
  {
    id: "lightbox-open",
    name: "Lightbox Open",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-lboxwrap is-open">
        <div className="nuda-lboxwrap__thumb" />
        <div className="nuda-lboxwrap__overlay">
          <div className="nuda-lboxwrap__big" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-lboxwrap{position:relative;width:100%;max-width:200px;height:160px;border-radius:12px;overflow:hidden;background:#09090b}
      .nuda-lboxwrap__thumb{position:absolute;left:10px;top:10px;width:60px;height:60px;border-radius:8px;background:linear-gradient(135deg,#9d6dff,#ff6dd4);transition:transform .35s,opacity .35s}
      .nuda-lboxwrap__overlay{position:absolute;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .35s ease;pointer-events:none}
      .nuda-lboxwrap__big{width:80px;height:80px;border-radius:12px;background:linear-gradient(135deg,#9d6dff,#ff6dd4);transform:scale(.5);transition:transform .55s cubic-bezier(.16,1,.3,1);box-shadow:0 24px 48px -12px rgba(0,0,0,.6)}
      .nuda-lboxwrap.is-open .nuda-lboxwrap__thumb{transform:scale(.85);opacity:.3}
      .nuda-lboxwrap.is-open .nuda-lboxwrap__overlay{opacity:1;pointer-events:auto}
      .nuda-lboxwrap.is-open .nuda-lboxwrap__big{transform:scale(1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-lboxwrap">
  <div class="nuda-lboxwrap__thumb"></div>
  <div class="nuda-lboxwrap__overlay">
    <div class="nuda-lboxwrap__big"></div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const wrap = document.querySelector('.nuda-lboxwrap');
const thumb = wrap.querySelector('.nuda-lboxwrap__thumb');
const overlay = wrap.querySelector('.nuda-lboxwrap__overlay');

thumb.addEventListener('click', () => wrap.classList.add('is-open'));
overlay.addEventListener('click', () => wrap.classList.remove('is-open'));`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-lboxwrap__big {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background: linear-gradient(135deg, #9d6dff, #ff6dd4);
  transform: scale(0.5);
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6);
}

.nuda-lboxwrap.is-open .nuda-lboxwrap__overlay {
  opacity: 1;
  pointer-events: auto;
}

.nuda-lboxwrap.is-open .nuda-lboxwrap__big {
  transform: scale(1);
}`,
      },
    ],
  },

  /* ─────────────── 4. Thumbnail Strip ─────────────── */
  {
    id: "thumbnail-strip",
    name: "Thumbnail Strip",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-thumbs">
        <div className="nuda-thumbs__main" style={{ background: "linear-gradient(135deg,#62b6ff,#9d6dff)" }} />
        <div className="nuda-thumbs__strip">
          {["#ff5e7a", "#ffb45e", "#62b6ff", "#6ee7b7", "#9d6dff"].map((c, i) => (
            <button key={c} className={`nuda-thumbs__thumb${i === 2 ? " is-active" : ""}`} style={{ background: c }} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-thumbs{display:flex;flex-direction:column;gap:8px;width:100%;max-width:240px}
      .nuda-thumbs__main{height:120px;border-radius:10px;border:1px solid rgba(255,255,255,.06);transition:background .35s}
      .nuda-thumbs__strip{display:flex;gap:6px}
      .nuda-thumbs__thumb{flex:1;height:34px;border-radius:7px;border:2px solid transparent;cursor:pointer;opacity:.6;transition:opacity .25s,border-color .25s,transform .25s}
      .nuda-thumbs__thumb:hover{opacity:1;transform:translateY(-2px)}
      .nuda-thumbs__thumb.is-active{opacity:1;border-color:#e4ff54;box-shadow:0 0 0 2px rgba(228,255,84,.2)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-thumbs">
  <div class="nuda-thumbs__main"
       style="background: linear-gradient(135deg,#62b6ff,#9d6dff)"></div>
  <div class="nuda-thumbs__strip">
    <button class="nuda-thumbs__thumb" style="background:#ff5e7a"></button>
    <button class="nuda-thumbs__thumb" style="background:#ffb45e"></button>
    <button class="nuda-thumbs__thumb is-active" style="background:#62b6ff"></button>
    <!-- More thumbs -->
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const main   = document.querySelector('.nuda-thumbs__main');
const thumbs = document.querySelectorAll('.nuda-thumbs__thumb');

thumbs.forEach((t) => {
  t.addEventListener('click', () => {
    thumbs.forEach((x) => x.classList.remove('is-active'));
    t.classList.add('is-active');
    main.style.background = t.style.background;
  });
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-thumbs__thumb {
  flex: 1;
  height: 34px;
  border-radius: 7px;
  border: 2px solid transparent;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.25s, border-color 0.25s, transform 0.25s;
}

.nuda-thumbs__thumb.is-active {
  opacity: 1;
  border-color: #e4ff54;
  box-shadow: 0 0 0 2px rgba(228, 255, 84, 0.2);
}`,
      },
    ],
  },

  /* ─────────────── 5. Masonry Hover Lift ─────────────── */
  {
    id: "masonry-lift",
    name: "Masonry Hover Lift",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-masonry">
        <div className="nuda-masonry__cell" style={{ background: "linear-gradient(135deg,#ff5e7a,#ffb45e)", height: 70 }} />
        <div className="nuda-masonry__cell" style={{ background: "linear-gradient(135deg,#62b6ff,#9d6dff)", height: 100 }} />
        <div className="nuda-masonry__cell" style={{ background: "linear-gradient(135deg,#6ee7b7,#e4ff54)", height: 90 }} />
        <div className="nuda-masonry__cell" style={{ background: "linear-gradient(135deg,#9d6dff,#ff6dd4)", height: 60 }} />
        <div className="nuda-masonry__cell" style={{ background: "linear-gradient(135deg,#62b6ff,#6ee7b7)", height: 80 }} />
        <div className="nuda-masonry__cell" style={{ background: "linear-gradient(135deg,#ff6dd4,#ffb45e)", height: 70 }} />
      </div>
    ),
    cssInline: `
      .nuda-masonry{columns:3;column-gap:6px;width:100%;max-width:220px}
      .nuda-masonry__cell{display:block;width:100%;border-radius:8px;margin-bottom:6px;break-inside:avoid;cursor:pointer;transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s,filter .35s}
      .nuda-masonry:hover .nuda-masonry__cell{filter:brightness(.7)}
      .nuda-masonry__cell:hover{transform:scale(1.08) rotate(-2deg);box-shadow:0 12px 32px -10px rgba(0,0,0,.6);filter:brightness(1.05) !important;z-index:1;position:relative}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-masonry">
  <div class="nuda-masonry__cell" style="height:70px;background:..."></div>
  <div class="nuda-masonry__cell" style="height:100px;background:..."></div>
  <div class="nuda-masonry__cell" style="height:90px;background:..."></div>
  <!-- More cells -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-masonry {
  columns: 3;
  column-gap: 6px;
}

.nuda-masonry__cell {
  display: block;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 6px;
  break-inside: avoid;
  cursor: pointer;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s,
    filter 0.35s;
}

.nuda-masonry:hover .nuda-masonry__cell { filter: brightness(0.7); }

.nuda-masonry__cell:hover {
  transform: scale(1.08) rotate(-2deg);
  box-shadow: 0 12px 32px -10px rgba(0, 0, 0, 0.6);
  filter: brightness(1.05) !important;
  position: relative;
  z-index: 1;
}`,
      },
    ],
  },

  /* ─────────────── 6. 3D Image Fan ─────────────── */
  {
    id: "image-fan-3d",
    name: "3D Image Fan",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-fan3d">
        <span className="nuda-fan3d__card" style={{ background: "linear-gradient(135deg,#ff5e7a,#ffb45e)", ["--r" as string]: "-12deg", ["--x" as string]: "-30px" }} />
        <span className="nuda-fan3d__card" style={{ background: "linear-gradient(135deg,#62b6ff,#9d6dff)", ["--r" as string]: "0deg", ["--x" as string]: "0px" }} />
        <span className="nuda-fan3d__card" style={{ background: "linear-gradient(135deg,#6ee7b7,#e4ff54)", ["--r" as string]: "12deg", ["--x" as string]: "30px" }} />
      </div>
    ),
    cssInline: `
      .nuda-fan3d{position:relative;width:160px;height:120px;display:inline-flex;align-items:center;justify-content:center;perspective:600px}
      .nuda-fan3d__card{position:absolute;width:70px;height:90px;border-radius:10px;box-shadow:0 8px 20px -8px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.1);transform:rotate(var(--r,0deg)) translateX(var(--x,0));transition:transform .55s cubic-bezier(.16,1,.3,1)}
      .nuda-fan3d:hover .nuda-fan3d__card:nth-child(1){transform:rotate(-20deg) translateX(-50px) translateY(-6px)}
      .nuda-fan3d:hover .nuda-fan3d__card:nth-child(2){transform:translateY(-10px) scale(1.05)}
      .nuda-fan3d:hover .nuda-fan3d__card:nth-child(3){transform:rotate(20deg) translateX(50px) translateY(-6px)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fan3d">
  <span class="nuda-fan3d__card" style="--r:-12deg;--x:-30px"></span>
  <span class="nuda-fan3d__card" style="--r:0deg;--x:0"></span>
  <span class="nuda-fan3d__card" style="--r:12deg;--x:30px"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-fan3d__card {
  position: absolute;
  width: 70px;
  height: 90px;
  border-radius: 10px;
  box-shadow:
    0 8px 20px -8px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: rotate(var(--r, 0deg)) translateX(var(--x, 0));
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-fan3d:hover .nuda-fan3d__card:nth-child(1) {
  transform: rotate(-20deg) translateX(-50px) translateY(-6px);
}
.nuda-fan3d:hover .nuda-fan3d__card:nth-child(2) {
  transform: translateY(-10px) scale(1.05);
}
.nuda-fan3d:hover .nuda-fan3d__card:nth-child(3) {
  transform: rotate(20deg) translateX(50px) translateY(-6px);
}`,
      },
    ],
  },

  /* ─────────────── 7. Before / After Slider ─────────────── */
  {
    id: "before-after",
    name: "Before / After",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-baslider">
        <div className="nuda-baslider__after" />
        <div className="nuda-baslider__before" style={{ width: "55%" }} />
        <div className="nuda-baslider__handle" style={{ left: "55%" }}>
          <span />
        </div>
        <span className="nuda-baslider__label nuda-baslider__label--b">Before</span>
        <span className="nuda-baslider__label nuda-baslider__label--a">After</span>
      </div>
    ),
    cssInline: `
      .nuda-baslider{position:relative;width:100%;max-width:240px;height:140px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.06);user-select:none}
      .nuda-baslider__after{position:absolute;inset:0;background:linear-gradient(135deg,#62b6ff,#9d6dff)}
      .nuda-baslider__before{position:absolute;left:0;top:0;height:100%;background:linear-gradient(135deg,#1a1a20,#0c0c10);overflow:hidden}
      .nuda-baslider__handle{position:absolute;top:0;bottom:0;width:2px;background:#fafafa;cursor:ew-resize;transform:translateX(-50%);box-shadow:0 0 12px rgba(255,255,255,.4)}
      .nuda-baslider__handle span{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:24px;height:24px;border-radius:50%;background:#fafafa;box-shadow:0 4px 12px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center}
      .nuda-baslider__handle span::before,.nuda-baslider__handle span::after{content:'';width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent}
      .nuda-baslider__handle span::before{border-right:5px solid #09090b;margin-right:2px}
      .nuda-baslider__handle span::after{border-left:5px solid #09090b;margin-left:2px}
      .nuda-baslider__label{position:absolute;top:8px;font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fafafa;padding:3px 7px;background:rgba(0,0,0,.5);border-radius:99px}
      .nuda-baslider__label--b{left:8px}
      .nuda-baslider__label--a{right:8px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-baslider">
  <div class="nuda-baslider__after"></div>
  <div class="nuda-baslider__before" style="width:55%"></div>
  <div class="nuda-baslider__handle" style="left:55%"><span></span></div>
  <span class="nuda-baslider__label nuda-baslider__label--b">Before</span>
  <span class="nuda-baslider__label nuda-baslider__label--a">After</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root  = document.querySelector('.nuda-baslider');
const before = root.querySelector('.nuda-baslider__before');
const handle = root.querySelector('.nuda-baslider__handle');
let dragging = false;

const setPercent = (clientX) => {
  const rect = root.getBoundingClientRect();
  const pct  = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
  before.style.width = pct + '%';
  handle.style.left  = pct + '%';
};

handle.addEventListener('pointerdown', () => (dragging = true));
window.addEventListener('pointerup', () => (dragging = false));
window.addEventListener('pointermove', (e) => dragging && setPercent(e.clientX));`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-baslider__handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #fafafa;
  cursor: ew-resize;
  transform: translateX(-50%);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
}

.nuda-baslider__handle span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fafafa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}`,
      },
    ],
  },

  /* ─────────────── 8. Polaroid Stack ─────────────── */
  {
    id: "polaroid-stack",
    name: "Polaroid Stack",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-polstack">
        <div className="nuda-polstack__card" style={{ ["--r" as string]: "-8deg" }}>
          <span style={{ background: "linear-gradient(135deg,#9d6dff,#ff6dd4)" }} />
        </div>
        <div className="nuda-polstack__card" style={{ ["--r" as string]: "4deg" }}>
          <span style={{ background: "linear-gradient(135deg,#62b6ff,#6ee7b7)" }} />
        </div>
        <div className="nuda-polstack__card" style={{ ["--r" as string]: "-3deg" }}>
          <span style={{ background: "linear-gradient(135deg,#ffb45e,#ff5e7a)" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-polstack{position:relative;width:100px;height:110px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-polstack__card{position:absolute;width:80px;height:90px;background:#fafafa;border-radius:3px;padding:6px 6px 14px;box-shadow:0 6px 18px -6px rgba(0,0,0,.6);transform:rotate(var(--r,0deg));transition:transform .55s cubic-bezier(.34,1.56,.64,1)}
      .nuda-polstack__card span{display:block;width:100%;height:100%;border-radius:1px}
      .nuda-polstack:hover .nuda-polstack__card:nth-child(1){transform:rotate(-22deg) translate(-32px,-6px)}
      .nuda-polstack:hover .nuda-polstack__card:nth-child(2){transform:rotate(12deg) translate(32px,-6px)}
      .nuda-polstack:hover .nuda-polstack__card:nth-child(3){transform:translateY(-6px) scale(1.05)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-polstack">
  <div class="nuda-polstack__card" style="--r:-8deg"><span></span></div>
  <div class="nuda-polstack__card" style="--r:4deg"><span></span></div>
  <div class="nuda-polstack__card" style="--r:-3deg"><span></span></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-polstack__card {
  position: absolute;
  width: 80px;
  height: 90px;
  background: #fafafa;
  border-radius: 3px;
  padding: 6px 6px 14px;
  box-shadow: 0 6px 18px -6px rgba(0, 0, 0, 0.6);
  transform: rotate(var(--r, 0deg));
  transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-polstack:hover .nuda-polstack__card:nth-child(1) {
  transform: rotate(-22deg) translate(-32px, -6px);
}
.nuda-polstack:hover .nuda-polstack__card:nth-child(2) {
  transform: rotate(12deg) translate(32px, -6px);
}
.nuda-polstack:hover .nuda-polstack__card:nth-child(3) {
  transform: translateY(-6px) scale(1.05);
}`,
      },
    ],
  },

  /* ─────────────── 9. Gallery Hover Zoom ─────────────── */
  {
    id: "gallery-zoom",
    name: "Gallery Hover Zoom",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-galzoom">
        <div className="nuda-galzoom__inner">
          <div className="nuda-galzoom__img" style={{ background: "linear-gradient(135deg,#9d6dff,#62b6ff,#6ee7b7)" }} />
        </div>
        <div className="nuda-galzoom__caption">
          <span>Northern Lights</span>
          <span>Tromsø, 2025</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-galzoom{position:relative;width:100%;max-width:200px;border-radius:12px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,.06)}
      .nuda-galzoom__inner{overflow:hidden;height:140px}
      .nuda-galzoom__img{width:100%;height:100%;transform:scale(1);transition:transform .8s cubic-bezier(.16,1,.3,1),filter .5s}
      .nuda-galzoom:hover .nuda-galzoom__img{transform:scale(1.12);filter:saturate(1.2)}
      .nuda-galzoom__caption{position:absolute;left:0;right:0;bottom:0;padding:14px 12px 8px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.7));color:#fafafa;display:flex;flex-direction:column;gap:1px;transform:translateY(8px);transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-galzoom__caption span:first-child{font-size:13px;font-weight:600}
      .nuda-galzoom__caption span:last-child{font-size:10px;color:#a0a0a8}
      .nuda-galzoom:hover .nuda-galzoom__caption{transform:translateY(0)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-galzoom">
  <div class="nuda-galzoom__inner">
    <div class="nuda-galzoom__img" style="background:..."></div>
  </div>
  <div class="nuda-galzoom__caption">
    <span>Northern Lights</span>
    <span>Tromsø, 2025</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-galzoom__img {
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition:
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.5s;
}

.nuda-galzoom:hover .nuda-galzoom__img {
  transform: scale(1.12);
  filter: saturate(1.2);
}

.nuda-galzoom__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 12px 8px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
  transform: translateY(8px);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-galzoom:hover .nuda-galzoom__caption {
  transform: translateY(0);
}`,
      },
    ],
  },

  /* ─────────────── 10. Filter Morph ─────────────── */
  {
    id: "gallery-filter-morph",
    name: "Gallery Filter Morph",
    category: "Galleries & Carousels",
    preview: (
      <div className="nuda-galfilt">
        <div className="nuda-galfilt__tabs">
          <span>All</span>
          <span className="is-on">Photos</span>
          <span>Videos</span>
        </div>
        <div className="nuda-galfilt__grid">
          {["#ff5e7a", "#ffb45e", "#62b6ff", "#9d6dff", "#6ee7b7", "#ff6dd4"].map((c, i) => (
            <div key={c} className="nuda-galfilt__cell" style={{ background: c, animationDelay: `${i * 60}ms` }} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-galfilt{width:100%;max-width:240px}
      .nuda-galfilt__tabs{display:inline-flex;gap:14px;padding-bottom:8px;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,.06);color:#63636e;font-size:11px;font-weight:500}
      .nuda-galfilt__tabs span{position:relative;cursor:pointer;padding-bottom:6px;transition:color .25s}
      .nuda-galfilt__tabs span:hover{color:#fafafa}
      .nuda-galfilt__tabs span.is-on{color:#e4ff54}
      .nuda-galfilt__tabs span.is-on::after{content:'';position:absolute;left:0;right:0;bottom:-9px;height:2px;background:#e4ff54;border-radius:99px;animation:_filtUnder .35s cubic-bezier(.16,1,.3,1)}
      .nuda-galfilt__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
      .nuda-galfilt__cell{height:50px;border-radius:6px;animation:_filtIn .55s cubic-bezier(.16,1,.3,1) both;transition:transform .25s}
      .nuda-galfilt__cell:hover{transform:scale(.94)}
      @keyframes _filtUnder{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      @keyframes _filtIn{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-galfilt__cell{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-galfilt">
  <div class="nuda-galfilt__tabs">
    <span>All</span>
    <span class="is-on">Photos</span>
    <span>Videos</span>
  </div>
  <div class="nuda-galfilt__grid">
    <div class="nuda-galfilt__cell" style="background:#ff5e7a"></div>
    <!-- More cells -->
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-galfilt__tabs span.is-on::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -9px;
  height: 2px;
  background: #e4ff54;
  border-radius: 99px;
  animation: nuda-filt-under 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-galfilt__cell {
  animation: nuda-filt-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes nuda-filt-in {
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1);   }
}`,
      },
    ],
  },
];
