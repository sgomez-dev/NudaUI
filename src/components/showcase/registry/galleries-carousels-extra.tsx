import type { NudaComponent } from "./types";

const CAT = "Galleries & Carousels";

export const galleriesCarouselsExtra: NudaComponent[] = [
  /* ─────────────── 1. Scroll-Snap Thumbnail Strip ─────────────── */
  {
    id: "gc2-snap-thumbs",
    name: "Scroll-Snap Thumbnail Strip",
    category: CAT,
    preview: (
      <div className="nuda-gc2-snap-thumbs" role="group" aria-roledescription="carousel" aria-label="Photo carousel with thumbnails">
        <div className="nuda-gc2-snap-thumbs__viewport">
          {["#ff5e7a,#ffb45e", "#62b6ff,#9d6dff", "#6ee7b7,#22d3ee", "#ff6dd4,#e4ff54"].map((g, i) => (
            <div
              key={g}
              className="nuda-gc2-snap-thumbs__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of 4`}
              style={{ background: `linear-gradient(135deg,${g})` }}
            />
          ))}
        </div>
        <div className="nuda-gc2-snap-thumbs__strip">
          {["#ff5e7a,#ffb45e", "#62b6ff,#9d6dff", "#6ee7b7,#22d3ee", "#ff6dd4,#e4ff54"].map((g, i) => (
            <button
              key={g}
              type="button"
              className={i === 0 ? "nuda-gc2-snap-thumbs__thumb is-on" : "nuda-gc2-snap-thumbs__thumb"}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === 0 ? "true" : undefined}
              style={{ background: `linear-gradient(135deg,${g})` }}
            />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-snap-thumbs{display:flex;flex-direction:column;gap:8px;width:100%;max-width:280px}
      .nuda-gc2-snap-thumbs__viewport{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;border-radius:12px;scrollbar-width:none}
      .nuda-gc2-snap-thumbs__viewport::-webkit-scrollbar{display:none}
      .nuda-gc2-snap-thumbs__slide{flex:0 0 100%;height:130px;border-radius:12px;scroll-snap-align:center;border:1px solid rgba(255,255,255,.08)}
      .nuda-gc2-snap-thumbs__strip{display:flex;gap:6px;justify-content:center}
      .nuda-gc2-snap-thumbs__thumb{width:36px;height:28px;padding:0;border-radius:6px;border:2px solid transparent;cursor:pointer;opacity:.55;transition:opacity .25s,border-color .25s,transform .25s;min-width:0}
      .nuda-gc2-snap-thumbs__thumb:hover{opacity:.85;transform:translateY(-1px)}
      .nuda-gc2-snap-thumbs__thumb.is-on{opacity:1;border-color:#e4ff54}
      .nuda-gc2-snap-thumbs__thumb:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-snap-thumbs__viewport{scroll-behavior:auto}.nuda-gc2-snap-thumbs__thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-snap-thumbs" role="group" aria-roledescription="carousel" aria-label="Photo carousel with thumbnails">
  <div class="nuda-gc2-snap-thumbs__viewport">
    <div class="nuda-gc2-snap-thumbs__slide" role="group" aria-roledescription="slide" aria-label="1 of 4" style="background:linear-gradient(135deg,#ff5e7a,#ffb45e)"></div>
    <div class="nuda-gc2-snap-thumbs__slide" role="group" aria-roledescription="slide" aria-label="2 of 4" style="background:linear-gradient(135deg,#62b6ff,#9d6dff)"></div>
    <!-- More slides -->
  </div>
  <div class="nuda-gc2-snap-thumbs__strip">
    <button type="button" class="nuda-gc2-snap-thumbs__thumb is-on" aria-label="Go to slide 1" aria-current="true" style="background:linear-gradient(135deg,#ff5e7a,#ffb45e)"></button>
    <button type="button" class="nuda-gc2-snap-thumbs__thumb" aria-label="Go to slide 2" style="background:linear-gradient(135deg,#62b6ff,#9d6dff)"></button>
    <!-- More thumbs -->
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Coverflow 3D Carousel ─────────────── */
  {
    id: "gc2-coverflow",
    name: "Coverflow 3D Carousel",
    category: CAT,
    preview: (
      <div className="nuda-gc2-coverflow" role="group" aria-roledescription="carousel" aria-label="Coverflow gallery">
        <div className="nuda-gc2-coverflow__stage">
          {["#9d6dff,#ff6dd4", "#62b6ff,#6ee7b7", "#ffb45e,#ff5e7a", "#e4ff54,#22d3ee"].map((g, i) => (
            <div
              key={g}
              className={i === 1 ? "nuda-gc2-coverflow__card is-active" : "nuda-gc2-coverflow__card"}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of 4`}
              style={{ background: `linear-gradient(135deg,${g})`, ["--nuda-gc2-cf-i" as string]: i - 1 }}
            />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-coverflow{width:100%;max-width:280px}
      .nuda-gc2-coverflow__stage{position:relative;height:140px;perspective:900px;display:flex;align-items:center;justify-content:center}
      .nuda-gc2-coverflow__card{position:absolute;width:100px;height:120px;border-radius:10px;border:1px solid rgba(255,255,255,.1);box-shadow:0 20px 40px -16px rgba(0,0,0,.7);transform:translateX(calc(var(--nuda-gc2-cf-i,0) * 62px)) rotateY(calc(var(--nuda-gc2-cf-i,0) * -38deg)) scale(.82);transition:transform .5s cubic-bezier(.16,1,.3,1),filter .5s;filter:brightness(.6);z-index:1}
      .nuda-gc2-coverflow__card.is-active{transform:translateX(0) rotateY(0) scale(1);filter:brightness(1);z-index:2;box-shadow:0 24px 48px -14px rgba(0,0,0,.8)}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-coverflow__card{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-coverflow" role="group" aria-roledescription="carousel" aria-label="Coverflow gallery">
  <div class="nuda-gc2-coverflow__stage">
    <div class="nuda-gc2-coverflow__card" role="group" aria-roledescription="slide" aria-label="1 of 4" style="background:linear-gradient(135deg,#9d6dff,#ff6dd4);--nuda-gc2-cf-i:-1"></div>
    <div class="nuda-gc2-coverflow__card is-active" role="group" aria-roledescription="slide" aria-label="2 of 4" style="background:linear-gradient(135deg,#62b6ff,#6ee7b7);--nuda-gc2-cf-i:0"></div>
    <div class="nuda-gc2-coverflow__card" role="group" aria-roledescription="slide" aria-label="3 of 4" style="background:linear-gradient(135deg,#ffb45e,#ff5e7a);--nuda-gc2-cf-i:1"></div>
    <div class="nuda-gc2-coverflow__card" role="group" aria-roledescription="slide" aria-label="4 of 4" style="background:linear-gradient(135deg,#e4ff54,#22d3ee);--nuda-gc2-cf-i:2"></div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const cards = document.querySelectorAll('.nuda-gc2-coverflow__card');
let active = 1;

const render = () => {
  cards.forEach((card, i) => {
    card.style.setProperty('--nuda-gc2-cf-i', i - active);
    card.classList.toggle('is-active', i === active);
  });
};

document.querySelector('.nuda-gc2-coverflow').addEventListener('click', (e) => {
  const i = [...cards].indexOf(e.target);
  if (i > -1) { active = i; render(); }
});`,
      },
    ],
  },

  /* ─────────────── 3. Stacked Swipe Deck ─────────────── */
  {
    id: "gc2-swipe-deck",
    name: "Stacked Swipe Deck",
    category: CAT,
    preview: (
      <div className="nuda-gc2-swipe-deck" role="group" aria-roledescription="carousel" aria-label="Swipeable card deck">
        <div className="nuda-gc2-swipe-deck__card nuda-gc2-swipe-deck__card--back2" style={{ background: "linear-gradient(135deg,#22d3ee,#6ee7b7)" }} />
        <div className="nuda-gc2-swipe-deck__card nuda-gc2-swipe-deck__card--back1" style={{ background: "linear-gradient(135deg,#ffb45e,#ff5e7a)" }} />
        <div
          className="nuda-gc2-swipe-deck__card nuda-gc2-swipe-deck__card--top"
          role="group"
          aria-roledescription="slide"
          aria-label="1 of 3"
          style={{ background: "linear-gradient(135deg,#9d6dff,#ff6dd4)" }}
        >
          <span>Swipe</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-swipe-deck{position:relative;width:100%;max-width:200px;height:150px}
      .nuda-gc2-swipe-deck__card{position:absolute;inset:0;border-radius:14px;border:1px solid rgba(255,255,255,.1);box-shadow:0 20px 40px -16px rgba(0,0,0,.7);transition:transform .45s cubic-bezier(.16,1,.3,1),opacity .45s;display:flex;align-items:flex-end;justify-content:center;padding-bottom:12px;color:#fafafa;font-size:12px;font-weight:600}
      .nuda-gc2-swipe-deck__card--back2{transform:translateY(12px) scale(.9);opacity:.55}
      .nuda-gc2-swipe-deck__card--back1{transform:translateY(6px) scale(.95);opacity:.8}
      .nuda-gc2-swipe-deck__card--top{transform:translateY(0) rotate(0deg) scale(1);cursor:grab}
      .nuda-gc2-swipe-deck:hover .nuda-gc2-swipe-deck__card--top{transform:translate(24px,-6px) rotate(8deg)}
      .nuda-gc2-swipe-deck:hover .nuda-gc2-swipe-deck__card--back1{transform:translateY(0) scale(1);opacity:1}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-swipe-deck__card{transition:none}.nuda-gc2-swipe-deck:hover .nuda-gc2-swipe-deck__card--top{transform:translateY(0) rotate(0deg) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-swipe-deck" role="group" aria-roledescription="carousel" aria-label="Swipeable card deck">
  <div class="nuda-gc2-swipe-deck__card nuda-gc2-swipe-deck__card--back2" style="background:linear-gradient(135deg,#22d3ee,#6ee7b7)"></div>
  <div class="nuda-gc2-swipe-deck__card nuda-gc2-swipe-deck__card--back1" style="background:linear-gradient(135deg,#ffb45e,#ff5e7a)"></div>
  <div class="nuda-gc2-swipe-deck__card nuda-gc2-swipe-deck__card--top" role="group" aria-roledescription="slide" aria-label="1 of 3" style="background:linear-gradient(135deg,#9d6dff,#ff6dd4)">
    <span>Swipe</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Filmstrip Lightbox Counter ─────────────── */
  {
    id: "gc2-filmstrip-counter",
    name: "Filmstrip Lightbox Counter",
    category: CAT,
    preview: (
      <div className="nuda-gc2-filmstrip-counter" role="group" aria-roledescription="carousel" aria-label="Photo filmstrip">
        <div className="nuda-gc2-filmstrip-counter__main" style={{ background: "linear-gradient(135deg,#62b6ff,#9d6dff)" }}>
          <button type="button" className="nuda-gc2-filmstrip-counter__zoom" aria-label="Open full-screen lightbox">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="nuda-gc2-filmstrip-counter__count" aria-live="polite">3 / 12</span>
        </div>
        <div className="nuda-gc2-filmstrip-counter__strip">
          {["#ff5e7a", "#ffb45e", "#62b6ff", "#9d6dff", "#6ee7b7"].map((c, i) => (
            <div key={c} className={i === 2 ? "nuda-gc2-filmstrip-counter__frame is-on" : "nuda-gc2-filmstrip-counter__frame"} style={{ background: c }} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-filmstrip-counter{display:flex;flex-direction:column;gap:6px;width:100%;max-width:260px}
      .nuda-gc2-filmstrip-counter__main{position:relative;height:130px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
      .nuda-gc2-filmstrip-counter__zoom{position:absolute;top:8px;right:8px;width:30px;height:30px;min-width:44px;min-height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#e4ff54;border:none;cursor:pointer;transition:transform .25s cubic-bezier(.16,1,.3,1)}
      .nuda-gc2-filmstrip-counter__zoom:hover{transform:scale(1.08)}
      .nuda-gc2-filmstrip-counter__zoom:focus-visible{outline:2px solid #fafafa;outline-offset:2px}
      .nuda-gc2-filmstrip-counter__count{position:absolute;left:8px;bottom:8px;padding:3px 8px;border-radius:99px;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:#fafafa;font-size:11px;font-weight:600}
      .nuda-gc2-filmstrip-counter__strip{display:flex;gap:5px}
      .nuda-gc2-filmstrip-counter__frame{flex:1;height:34px;border-radius:6px;opacity:.5;border:2px solid transparent;transition:opacity .25s,border-color .25s,transform .25s}
      .nuda-gc2-filmstrip-counter__frame:hover{opacity:.85;transform:translateY(-1px)}
      .nuda-gc2-filmstrip-counter__frame.is-on{opacity:1;border-color:#e4ff54}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-filmstrip-counter__zoom,.nuda-gc2-filmstrip-counter__frame{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-filmstrip-counter" role="group" aria-roledescription="carousel" aria-label="Photo filmstrip">
  <div class="nuda-gc2-filmstrip-counter__main" style="background:linear-gradient(135deg,#62b6ff,#9d6dff)">
    <button type="button" class="nuda-gc2-filmstrip-counter__zoom" aria-label="Open full-screen lightbox">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <span class="nuda-gc2-filmstrip-counter__count" aria-live="polite">3 / 12</span>
  </div>
  <div class="nuda-gc2-filmstrip-counter__strip">
    <div class="nuda-gc2-filmstrip-counter__frame" style="background:#ff5e7a"></div>
    <div class="nuda-gc2-filmstrip-counter__frame" style="background:#ffb45e"></div>
    <div class="nuda-gc2-filmstrip-counter__frame is-on" style="background:#62b6ff"></div>
    <!-- More frames -->
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Infinite Autoplay Loop ─────────────── */
  {
    id: "gc2-autoplay-loop",
    name: "Infinite Autoplay Loop",
    category: CAT,
    preview: (
      <div className="nuda-gc2-autoplay-loop" role="group" aria-roledescription="carousel" aria-label="Autoplaying gallery" tabIndex={0}>
        <div className="nuda-gc2-autoplay-loop__viewport">
          <div className="nuda-gc2-autoplay-loop__track">
            {["#ff5e7a,#ffb45e", "#62b6ff,#9d6dff", "#6ee7b7,#22d3ee", "#ff5e7a,#ffb45e", "#62b6ff,#9d6dff", "#6ee7b7,#22d3ee"].map((g, i) => (
              <div key={i} className="nuda-gc2-autoplay-loop__slide" style={{ background: `linear-gradient(135deg,${g})` }} aria-hidden={i >= 3 ? "true" : undefined} />
            ))}
          </div>
        </div>
        <div className="nuda-gc2-autoplay-loop__dots" aria-hidden="true">
          <span className="is-on" /><span /><span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-autoplay-loop{display:flex;flex-direction:column;gap:8px;width:100%;max-width:240px}
      .nuda-gc2-autoplay-loop__viewport{overflow:hidden;border-radius:12px;border:1px solid rgba(255,255,255,.08)}
      .nuda-gc2-autoplay-loop__track{display:flex;width:600%;animation:_nuda-gc2autoplay-loop 12s linear infinite}
      .nuda-gc2-autoplay-loop__slide{flex:0 0 16.6667%;height:120px}
      .nuda-gc2-autoplay-loop:hover .nuda-gc2-autoplay-loop__track,.nuda-gc2-autoplay-loop:focus-within .nuda-gc2-autoplay-loop__track{animation-play-state:paused}
      .nuda-gc2-autoplay-loop__dots{display:flex;justify-content:center;gap:5px}
      .nuda-gc2-autoplay-loop__dots span{width:6px;height:6px;border-radius:99px;background:rgba(255,255,255,.16)}
      .nuda-gc2-autoplay-loop__dots span.is-on{width:18px;background:#e4ff54}
      .nuda-gc2-autoplay-loop:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:12px}
      @keyframes _nuda-gc2autoplay-loop{0%{transform:translateX(0)}50%{transform:translateX(-50%)}50.01%{transform:translateX(-50%)}100%{transform:translateX(-100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-autoplay-loop__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-autoplay-loop" role="group" aria-roledescription="carousel" aria-label="Autoplaying gallery" tabindex="0">
  <div class="nuda-gc2-autoplay-loop__viewport">
    <div class="nuda-gc2-autoplay-loop__track">
      <div class="nuda-gc2-autoplay-loop__slide" style="background:linear-gradient(135deg,#ff5e7a,#ffb45e)"></div>
      <div class="nuda-gc2-autoplay-loop__slide" style="background:linear-gradient(135deg,#62b6ff,#9d6dff)"></div>
      <div class="nuda-gc2-autoplay-loop__slide" style="background:linear-gradient(135deg,#6ee7b7,#22d3ee)"></div>
      <!-- Slides repeated for seamless loop -->
      <div class="nuda-gc2-autoplay-loop__slide" aria-hidden="true" style="background:linear-gradient(135deg,#ff5e7a,#ffb45e)"></div>
      <div class="nuda-gc2-autoplay-loop__slide" aria-hidden="true" style="background:linear-gradient(135deg,#62b6ff,#9d6dff)"></div>
      <div class="nuda-gc2-autoplay-loop__slide" aria-hidden="true" style="background:linear-gradient(135deg,#6ee7b7,#22d3ee)"></div>
    </div>
  </div>
  <div class="nuda-gc2-autoplay-loop__dots" aria-hidden="true">
    <span class="is-on"></span><span></span><span></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Peek-Next Carousel ─────────────── */
  {
    id: "gc2-peek-next",
    name: "Peek-Next Carousel",
    category: CAT,
    preview: (
      <div className="nuda-gc2-peek-next" role="group" aria-roledescription="carousel" aria-label="Peek carousel">
        <div className="nuda-gc2-peek-next__viewport">
          {["#9d6dff,#ff6dd4", "#62b6ff,#6ee7b7", "#ffb45e,#ff5e7a", "#e4ff54,#22d3ee"].map((g, i) => (
            <div
              key={g}
              className="nuda-gc2-peek-next__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of 4`}
              style={{ background: `linear-gradient(135deg,${g})` }}
            />
          ))}
        </div>
        <div className="nuda-gc2-peek-next__nav">
          <button type="button" className="nuda-gc2-peek-next__btn" aria-label="Previous slide">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="#fafafa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="nuda-gc2-peek-next__btn" aria-label="Next slide">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l6-6-6-6" stroke="#fafafa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-peek-next{display:flex;flex-direction:column;gap:8px;width:100%;max-width:260px}
      .nuda-gc2-peek-next__viewport{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:8px;padding:2px 40px 2px 8px;scrollbar-width:none}
      .nuda-gc2-peek-next__viewport::-webkit-scrollbar{display:none}
      .nuda-gc2-peek-next__slide{flex:0 0 82%;height:120px;border-radius:12px;scroll-snap-align:start;border:1px solid rgba(255,255,255,.08)}
      .nuda-gc2-peek-next__nav{display:flex;justify-content:flex-end;gap:6px}
      .nuda-gc2-peek-next__btn{width:44px;height:44px;border-radius:50%;background:#161616;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .25s,transform .2s}
      .nuda-gc2-peek-next__btn:hover{background:#1e1e1e;transform:translateY(-1px)}
      .nuda-gc2-peek-next__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-peek-next__viewport{scroll-behavior:auto}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-peek-next" role="group" aria-roledescription="carousel" aria-label="Peek carousel">
  <div class="nuda-gc2-peek-next__viewport">
    <div class="nuda-gc2-peek-next__slide" role="group" aria-roledescription="slide" aria-label="1 of 4" style="background:linear-gradient(135deg,#9d6dff,#ff6dd4)"></div>
    <!-- More slides -->
  </div>
  <div class="nuda-gc2-peek-next__nav">
    <button type="button" class="nuda-gc2-peek-next__btn" aria-label="Previous slide">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="#fafafa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <button type="button" class="nuda-gc2-peek-next__btn" aria-label="Next slide">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l6-6-6-6" stroke="#fafafa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root = document.querySelector('.nuda-gc2-peek-next');
const viewport = root.querySelector('.nuda-gc2-peek-next__viewport');
const [prevBtn, nextBtn] = root.querySelectorAll('.nuda-gc2-peek-next__btn');
const step = () => viewport.querySelector('.nuda-gc2-peek-next__slide').offsetWidth + 10;

prevBtn.addEventListener('click', () => viewport.scrollBy({ left: -step(), behavior: 'smooth' }));
nextBtn.addEventListener('click', () => viewport.scrollBy({ left: step(), behavior: 'smooth' }));`,
      },
    ],
  },

  /* ─────────────── 7. Vertical Reel Scroller ─────────────── */
  {
    id: "gc2-reel-vertical",
    name: "Vertical Reel Scroller",
    category: CAT,
    preview: (
      <div className="nuda-gc2-reel-vertical" role="group" aria-roledescription="carousel" aria-label="Vertical reel gallery">
        <div className="nuda-gc2-reel-vertical__viewport">
          {["#ff6dd4,#9d6dff", "#22d3ee,#6ee7b7", "#ffb45e,#ff5e7a"].map((g, i) => (
            <div
              key={g}
              className="nuda-gc2-reel-vertical__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of 3`}
              style={{ background: `linear-gradient(160deg,${g})` }}
            >
              <span className="nuda-gc2-reel-vertical__side" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.4-9.6-9C.6 8.4 2.6 5 6 5c2 0 3.4 1 4 2 .6-1 2-2 4-2 3.4 0 5.4 3.4 3.6 7-2.6 4.6-9.6 9-9.6 9z" fill="#fafafa" /></svg>
              </span>
            </div>
          ))}
        </div>
        <div className="nuda-gc2-reel-vertical__rail" aria-hidden="true">
          <span className="is-on" /><span /><span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-reel-vertical{position:relative;width:100%;max-width:150px}
      .nuda-gc2-reel-vertical__viewport{height:220px;overflow-y:auto;scroll-snap-type:y mandatory;border-radius:14px;scrollbar-width:none}
      .nuda-gc2-reel-vertical__viewport::-webkit-scrollbar{display:none}
      .nuda-gc2-reel-vertical__slide{position:relative;height:220px;scroll-snap-align:start;display:flex;align-items:flex-end;justify-content:flex-end;padding:10px}
      .nuda-gc2-reel-vertical__side{width:32px;height:32px;min-width:44px;min-height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(0,0,0,.35);transition:transform .25s cubic-bezier(.16,1,.3,1)}
      .nuda-gc2-reel-vertical__slide:hover .nuda-gc2-reel-vertical__side{transform:scale(1.12)}
      .nuda-gc2-reel-vertical__rail{position:absolute;right:-14px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:5px}
      .nuda-gc2-reel-vertical__rail span{width:4px;height:4px;border-radius:99px;background:rgba(255,255,255,.2);transition:height .3s cubic-bezier(.16,1,.3,1),background .25s}
      .nuda-gc2-reel-vertical__rail span.is-on{height:16px;background:#e4ff54}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-reel-vertical__viewport{scroll-behavior:auto}.nuda-gc2-reel-vertical__side{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-reel-vertical" role="group" aria-roledescription="carousel" aria-label="Vertical reel gallery">
  <div class="nuda-gc2-reel-vertical__viewport">
    <div class="nuda-gc2-reel-vertical__slide" role="group" aria-roledescription="slide" aria-label="1 of 3" style="background:linear-gradient(160deg,#ff6dd4,#9d6dff)">
      <span class="nuda-gc2-reel-vertical__side" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.4-9.6-9C.6 8.4 2.6 5 6 5c2 0 3.4 1 4 2 .6-1 2-2 4-2 3.4 0 5.4 3.4 3.6 7-2.6 4.6-9.6 9-9.6 9z" fill="#fafafa"></path></svg>
      </span>
    </div>
    <!-- More slides -->
  </div>
  <div class="nuda-gc2-reel-vertical__rail" aria-hidden="true">
    <span class="is-on"></span><span></span><span></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Story Tap-Through Progress ─────────────── */
  {
    id: "gc2-story-progress",
    name: "Story Tap-Through Progress",
    category: CAT,
    preview: (
      <div className="nuda-gc2-story-progress" role="group" aria-roledescription="carousel" aria-label="Story slideshow">
        <div className="nuda-gc2-story-progress__bars" aria-hidden="true">
          <span className="is-done" />
          <span className="is-active"><i /></span>
          <span />
        </div>
        <div className="nuda-gc2-story-progress__stage" style={{ background: "linear-gradient(150deg,#9d6dff,#ff6dd4)" }}>
          <button type="button" className="nuda-gc2-story-progress__zone nuda-gc2-story-progress__zone--prev" aria-label="Previous story" />
          <button type="button" className="nuda-gc2-story-progress__zone nuda-gc2-story-progress__zone--next" aria-label="Next story" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gc2-story-progress{display:flex;flex-direction:column;gap:8px;width:100%;max-width:180px}
      .nuda-gc2-story-progress__bars{display:flex;gap:4px}
      .nuda-gc2-story-progress__bars span{position:relative;flex:1;height:3px;border-radius:99px;background:rgba(255,255,255,.2);overflow:hidden}
      .nuda-gc2-story-progress__bars span.is-done{background:#fafafa}
      .nuda-gc2-story-progress__bars span.is-active i{position:absolute;inset:0;transform:scaleX(.4);transform-origin:left;background:#e4ff54;border-radius:99px;animation:_nuda-gc2story-progress 5s linear infinite}
      .nuda-gc2-story-progress__stage{position:relative;height:180px;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
      .nuda-gc2-story-progress__zone{position:absolute;top:0;bottom:0;width:50%;background:transparent;border:none;cursor:pointer;padding:0}
      .nuda-gc2-story-progress__zone--prev{left:0}
      .nuda-gc2-story-progress__zone--next{right:0}
      .nuda-gc2-story-progress__zone:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      @keyframes _nuda-gc2story-progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-gc2-story-progress__bars span.is-active i{animation:none;transform:scaleX(.4)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gc2-story-progress" role="group" aria-roledescription="carousel" aria-label="Story slideshow">
  <div class="nuda-gc2-story-progress__bars" aria-hidden="true">
    <span class="is-done"></span>
    <span class="is-active"><i></i></span>
    <span></span>
  </div>
  <div class="nuda-gc2-story-progress__stage" style="background:linear-gradient(150deg,#9d6dff,#ff6dd4)">
    <button type="button" class="nuda-gc2-story-progress__zone nuda-gc2-story-progress__zone--prev" aria-label="Previous story"></button>
    <button type="button" class="nuda-gc2-story-progress__zone nuda-gc2-story-progress__zone--next" aria-label="Next story"></button>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root = document.querySelector('.nuda-gc2-story-progress');
const bars = [...root.querySelectorAll('.nuda-gc2-story-progress__bars span')];
let i = bars.findIndex((b) => b.classList.contains('is-active'));

const render = (next) => {
  bars.forEach((b, n) => {
    b.className = n < next ? 'is-done' : n === next ? 'is-active' : '';
    if (n === next) b.innerHTML = '<i></i>';
  });
  i = next;
};

root.querySelector('.nuda-gc2-story-progress__zone--prev').addEventListener('click', () => render(Math.max(0, i - 1)));
root.querySelector('.nuda-gc2-story-progress__zone--next').addEventListener('click', () => render(Math.min(bars.length - 1, i + 1)));`,
      },
    ],
  },
];
