import type { NudaComponent } from "./types";

const CAT = "Accordions & Tabs";

export const accordionsTabsExtra: NudaComponent[] = [
  /* ─────────────── PLUS-MINUS ACCORDION ─────────────── */
  {
    id: "accx-plus-minus",
    name: "Plus-Minus Accordion",
    category: CAT,
    preview: (
      <div className="nuda-accx-pm" aria-hidden="true">
        <div className="nuda-accx-pm__item nuda-accx-pm__item--open">
          <button className="nuda-accx-pm__trigger">
            <span className="nuda-accx-pm__label">What is NudaUI?</span>
            <span className="nuda-accx-pm__icon nuda-accx-pm__icon--minus">&#8722;</span>
          </button>
          <div className="nuda-accx-pm__body">
            <p className="nuda-accx-pm__text">A copy-paste UI library built for dark interfaces with zero dependencies.</p>
          </div>
        </div>
        <div className="nuda-accx-pm__item">
          <button className="nuda-accx-pm__trigger">
            <span className="nuda-accx-pm__label">Is it free to use?</span>
            <span className="nuda-accx-pm__icon">&#43;</span>
          </button>
        </div>
        <div className="nuda-accx-pm__item">
          <button className="nuda-accx-pm__trigger">
            <span className="nuda-accx-pm__label">How do I install it?</span>
            <span className="nuda-accx-pm__icon">&#43;</span>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-pm{display:flex;flex-direction:column;width:100%;gap:2px}
      .nuda-accx-pm__item{background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden}
      .nuda-accx-pm__item--open{border-color:rgba(228,255,84,.25)}
      .nuda-accx-pm__trigger{display:flex;justify-content:space-between;align-items:center;width:100%;background:none;border:none;padding:.55rem .7rem;cursor:pointer;gap:.5rem}
      .nuda-accx-pm__label{color:#fafafa;font-size:.68rem;font-weight:600;text-align:left}
      .nuda-accx-pm__icon{color:#777;font-size:.9rem;flex-shrink:0;line-height:1;transition:color .2s}
      .nuda-accx-pm__icon--minus{color:#e4ff54}
      .nuda-accx-pm__body{padding:0 .7rem .55rem;animation:_nuda-accxpm-open .25s ease-out}
      .nuda-accx-pm__text{color:#888;font-size:.6rem;margin:0;line-height:1.55}
      @keyframes _nuda-accxpm-open{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-pm__body{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-pm">
  <div class="nuda-accx-pm__item nuda-accx-pm__item--open">
    <button class="nuda-accx-pm__trigger" aria-expanded="true">
      <span class="nuda-accx-pm__label">What is NudaUI?</span>
      <span class="nuda-accx-pm__icon nuda-accx-pm__icon--minus">&#8722;</span>
    </button>
    <div class="nuda-accx-pm__body">
      <p class="nuda-accx-pm__text">A copy-paste UI library built for dark interfaces with zero dependencies.</p>
    </div>
  </div>
  <div class="nuda-accx-pm__item">
    <button class="nuda-accx-pm__trigger" aria-expanded="false">
      <span class="nuda-accx-pm__label">Is it free to use?</span>
      <span class="nuda-accx-pm__icon">&#43;</span>
    </button>
  </div>
  <div class="nuda-accx-pm__item">
    <button class="nuda-accx-pm__trigger" aria-expanded="false">
      <span class="nuda-accx-pm__label">How do I install it?</span>
      <span class="nuda-accx-pm__icon">&#43;</span>
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── FAQ ACCORDION ─────────────── */
  {
    id: "accx-faq",
    name: "FAQ Accordion",
    category: CAT,
    preview: (
      <div className="nuda-accx-faq" aria-hidden="true">
        <div className="nuda-accx-faq__header">
          <span className="nuda-accx-faq__badge">FAQ</span>
          <span className="nuda-accx-faq__title">Common Questions</span>
        </div>
        <div className="nuda-accx-faq__item nuda-accx-faq__item--open">
          <div className="nuda-accx-faq__q">
            <span className="nuda-accx-faq__num">01</span>
            <span className="nuda-accx-faq__qtext">How does billing work?</span>
            <span className="nuda-accx-faq__arrow nuda-accx-faq__arrow--up">&#8963;</span>
          </div>
          <div className="nuda-accx-faq__a">
            <p className="nuda-accx-faq__atext">Billing is monthly. You can cancel at any time from your dashboard.</p>
          </div>
        </div>
        <div className="nuda-accx-faq__item">
          <div className="nuda-accx-faq__q">
            <span className="nuda-accx-faq__num">02</span>
            <span className="nuda-accx-faq__qtext">Can I change my plan?</span>
            <span className="nuda-accx-faq__arrow">&#8964;</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-faq{display:flex;flex-direction:column;width:100%;gap:0;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden}
      .nuda-accx-faq__header{display:flex;align-items:center;gap:.4rem;padding:.55rem .65rem;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-accx-faq__badge{background:#e4ff54;color:#000;font-size:.5rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.15rem .35rem;border-radius:4px}
      .nuda-accx-faq__title{color:#777;font-size:.6rem;font-weight:500}
      .nuda-accx-faq__item{border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-accx-faq__item:last-child{border-bottom:none}
      .nuda-accx-faq__item--open .nuda-accx-faq__q{background:rgba(228,255,84,.04)}
      .nuda-accx-faq__q{display:flex;align-items:center;gap:.45rem;padding:.45rem .65rem;cursor:pointer}
      .nuda-accx-faq__num{color:#e4ff54;font-size:.55rem;font-weight:700;font-variant-numeric:tabular-nums;opacity:.7;flex-shrink:0}
      .nuda-accx-faq__qtext{color:#cfcfcf;font-size:.63rem;font-weight:600;flex:1}
      .nuda-accx-faq__arrow{color:#555;font-size:.75rem;flex-shrink:0;line-height:1}
      .nuda-accx-faq__arrow--up{color:#e4ff54}
      .nuda-accx-faq__a{padding:0 .65rem .5rem 1.55rem;animation:_nuda-accxfaq-slide .2s ease-out}
      .nuda-accx-faq__atext{color:#777;font-size:.58rem;margin:0;line-height:1.6}
      @keyframes _nuda-accxfaq-slide{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-faq__a{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-faq">
  <div class="nuda-accx-faq__header">
    <span class="nuda-accx-faq__badge">FAQ</span>
    <span class="nuda-accx-faq__title">Common Questions</span>
  </div>
  <div class="nuda-accx-faq__item nuda-accx-faq__item--open">
    <div class="nuda-accx-faq__q" role="button" aria-expanded="true">
      <span class="nuda-accx-faq__num">01</span>
      <span class="nuda-accx-faq__qtext">How does billing work?</span>
      <span class="nuda-accx-faq__arrow nuda-accx-faq__arrow--up">&#8963;</span>
    </div>
    <div class="nuda-accx-faq__a">
      <p class="nuda-accx-faq__atext">Billing is monthly. You can cancel at any time from your dashboard.</p>
    </div>
  </div>
  <div class="nuda-accx-faq__item">
    <div class="nuda-accx-faq__q" role="button" aria-expanded="false">
      <span class="nuda-accx-faq__num">02</span>
      <span class="nuda-accx-faq__qtext">Can I change my plan?</span>
      <span class="nuda-accx-faq__arrow">&#8964;</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── PILL TABS ─────────────── */
  {
    id: "accx-pill-tabs",
    name: "Pill Tabs",
    category: CAT,
    preview: (
      <div className="nuda-accx-pill" aria-hidden="true">
        <div className="nuda-accx-pill__nav" role="tablist">
          <button className="nuda-accx-pill__tab nuda-accx-pill__tab--active" role="tab">Overview</button>
          <button className="nuda-accx-pill__tab" role="tab">Features</button>
          <button className="nuda-accx-pill__tab" role="tab">Pricing</button>
        </div>
        <div className="nuda-accx-pill__panel">
          <p className="nuda-accx-pill__heading">Product Overview</p>
          <p className="nuda-accx-pill__body">Everything you need to ship fast. No bloat, no vendor lock-in.</p>
          <div className="nuda-accx-pill__dots">
            <span className="nuda-accx-pill__dot nuda-accx-pill__dot--a"></span>
            <span className="nuda-accx-pill__dot nuda-accx-pill__dot--b"></span>
            <span className="nuda-accx-pill__dot nuda-accx-pill__dot--c"></span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-pill{display:flex;flex-direction:column;gap:.6rem;width:100%}
      .nuda-accx-pill__nav{display:flex;gap:.3rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.07);border-radius:50px;padding:.25rem}
      .nuda-accx-pill__tab{flex:1;background:none;border:none;border-radius:50px;padding:.3rem .5rem;font-size:.6rem;font-weight:600;color:#666;cursor:pointer;transition:background .2s,color .2s;white-space:nowrap}
      .nuda-accx-pill__tab--active{background:#e4ff54;color:#000}
      .nuda-accx-pill__panel{background:#141414;border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:.65rem .7rem;animation:_nuda-accxpill-in .2s ease-out}
      .nuda-accx-pill__heading{color:#fafafa;font-size:.68rem;font-weight:700;margin:0 0 .25rem}
      .nuda-accx-pill__body{color:#777;font-size:.58rem;margin:0 0 .5rem;line-height:1.55}
      .nuda-accx-pill__dots{display:flex;gap:.3rem}
      .nuda-accx-pill__dot{width:24px;height:4px;border-radius:2px}
      .nuda-accx-pill__dot--a{background:#e4ff54}
      .nuda-accx-pill__dot--b{background:rgba(228,255,84,.35)}
      .nuda-accx-pill__dot--c{background:rgba(228,255,84,.12)}
      @keyframes _nuda-accxpill-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-pill__panel{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-pill">
  <div class="nuda-accx-pill__nav" role="tablist">
    <button class="nuda-accx-pill__tab nuda-accx-pill__tab--active" role="tab" aria-selected="true">Overview</button>
    <button class="nuda-accx-pill__tab" role="tab" aria-selected="false">Features</button>
    <button class="nuda-accx-pill__tab" role="tab" aria-selected="false">Pricing</button>
  </div>
  <div class="nuda-accx-pill__panel" role="tabpanel">
    <p class="nuda-accx-pill__heading">Product Overview</p>
    <p class="nuda-accx-pill__body">Everything you need to ship fast. No bloat, no vendor lock-in.</p>
    <div class="nuda-accx-pill__dots">
      <span class="nuda-accx-pill__dot nuda-accx-pill__dot--a"></span>
      <span class="nuda-accx-pill__dot nuda-accx-pill__dot--b"></span>
      <span class="nuda-accx-pill__dot nuda-accx-pill__dot--c"></span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── VERTICAL TABS ─────────────── */
  {
    id: "accx-vertical-tabs",
    name: "Vertical Tabs",
    category: CAT,
    preview: (
      <div className="nuda-accx-vtabs" aria-hidden="true">
        <div className="nuda-accx-vtabs__sidebar">
          <button className="nuda-accx-vtabs__tab nuda-accx-vtabs__tab--active">
            <span className="nuda-accx-vtabs__icon">&#9654;</span>
            <span className="nuda-accx-vtabs__tlabel">General</span>
          </button>
          <button className="nuda-accx-vtabs__tab">
            <span className="nuda-accx-vtabs__icon">&#9632;</span>
            <span className="nuda-accx-vtabs__tlabel">Security</span>
          </button>
          <button className="nuda-accx-vtabs__tab">
            <span className="nuda-accx-vtabs__icon">&#9670;</span>
            <span className="nuda-accx-vtabs__tlabel">Advanced</span>
          </button>
        </div>
        <div className="nuda-accx-vtabs__content">
          <p className="nuda-accx-vtabs__ctitle">General Settings</p>
          <div className="nuda-accx-vtabs__row">
            <span className="nuda-accx-vtabs__key">Theme</span>
            <span className="nuda-accx-vtabs__val">Dark</span>
          </div>
          <div className="nuda-accx-vtabs__row">
            <span className="nuda-accx-vtabs__key">Language</span>
            <span className="nuda-accx-vtabs__val">English</span>
          </div>
          <div className="nuda-accx-vtabs__row">
            <span className="nuda-accx-vtabs__key">Region</span>
            <span className="nuda-accx-vtabs__val">US</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-vtabs{display:flex;gap:0;width:100%;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;min-height:120px}
      .nuda-accx-vtabs__sidebar{display:flex;flex-direction:column;gap:1px;padding:.35rem;background:#111;border-right:1px solid rgba(255,255,255,.07);min-width:72px}
      .nuda-accx-vtabs__tab{display:flex;flex-direction:column;align-items:center;gap:.2rem;background:none;border:none;border-radius:8px;padding:.4rem .3rem;cursor:pointer;color:#555;transition:background .15s,color .15s}
      .nuda-accx-vtabs__tab--active{background:rgba(228,255,84,.12);color:#e4ff54}
      .nuda-accx-vtabs__icon{font-size:.55rem;line-height:1}
      .nuda-accx-vtabs__tlabel{font-size:.52rem;font-weight:600;color:inherit}
      .nuda-accx-vtabs__content{flex:1;padding:.6rem .65rem;animation:_nuda-accxvtabs-fade .2s ease-out}
      .nuda-accx-vtabs__ctitle{color:#fafafa;font-size:.65rem;font-weight:700;margin:0 0 .45rem}
      .nuda-accx-vtabs__row{display:flex;justify-content:space-between;padding:.2rem 0;border-bottom:1px solid rgba(255,255,255,.04)}
      .nuda-accx-vtabs__row:last-child{border-bottom:none}
      .nuda-accx-vtabs__key{color:#666;font-size:.58rem}
      .nuda-accx-vtabs__val{color:#cfcfcf;font-size:.58rem;font-weight:600}
      @keyframes _nuda-accxvtabs-fade{from{opacity:0;transform:translateX(4px)}to{opacity:1;transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-vtabs__content{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-vtabs">
  <div class="nuda-accx-vtabs__sidebar" role="tablist" aria-orientation="vertical">
    <button class="nuda-accx-vtabs__tab nuda-accx-vtabs__tab--active" role="tab" aria-selected="true">
      <span class="nuda-accx-vtabs__icon">&#9654;</span>
      <span class="nuda-accx-vtabs__tlabel">General</span>
    </button>
    <button class="nuda-accx-vtabs__tab" role="tab" aria-selected="false">
      <span class="nuda-accx-vtabs__icon">&#9632;</span>
      <span class="nuda-accx-vtabs__tlabel">Security</span>
    </button>
    <button class="nuda-accx-vtabs__tab" role="tab" aria-selected="false">
      <span class="nuda-accx-vtabs__icon">&#9670;</span>
      <span class="nuda-accx-vtabs__tlabel">Advanced</span>
    </button>
  </div>
  <div class="nuda-accx-vtabs__content" role="tabpanel">
    <p class="nuda-accx-vtabs__ctitle">General Settings</p>
    <div class="nuda-accx-vtabs__row">
      <span class="nuda-accx-vtabs__key">Theme</span>
      <span class="nuda-accx-vtabs__val">Dark</span>
    </div>
    <div class="nuda-accx-vtabs__row">
      <span class="nuda-accx-vtabs__key">Language</span>
      <span class="nuda-accx-vtabs__val">English</span>
    </div>
    <div class="nuda-accx-vtabs__row">
      <span class="nuda-accx-vtabs__key">Region</span>
      <span class="nuda-accx-vtabs__val">US</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── UNDERLINE TABS ─────────────── */
  {
    id: "accx-underline-tabs",
    name: "Underline Tabs",
    category: CAT,
    preview: (
      <div className="nuda-accx-ul" aria-hidden="true">
        <div className="nuda-accx-ul__nav" role="tablist">
          <button className="nuda-accx-ul__tab" role="tab">Activity</button>
          <button className="nuda-accx-ul__tab nuda-accx-ul__tab--active" role="tab">Analytics</button>
          <button className="nuda-accx-ul__tab" role="tab">Reports</button>
          <button className="nuda-accx-ul__tab" role="tab">Settings</button>
        </div>
        <div className="nuda-accx-ul__panel">
          <div className="nuda-accx-ul__stat">
            <span className="nuda-accx-ul__num">24,891</span>
            <span className="nuda-accx-ul__label">Page views this week</span>
          </div>
          <div className="nuda-accx-ul__bar">
            <span className="nuda-accx-ul__fill"></span>
          </div>
          <div className="nuda-accx-ul__meta">
            <span className="nuda-accx-ul__up">&#9650; 12.4%</span>
            <span className="nuda-accx-ul__vs">vs last week</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-ul{display:flex;flex-direction:column;width:100%;gap:0}
      .nuda-accx-ul__nav{display:flex;border-bottom:1px solid rgba(255,255,255,.08);gap:0}
      .nuda-accx-ul__tab{background:none;border:none;padding:.45rem .55rem;font-size:.6rem;font-weight:600;color:#555;cursor:pointer;position:relative;border-bottom:2px solid transparent;margin-bottom:-1px;transition:color .15s;white-space:nowrap}
      .nuda-accx-ul__tab--active{color:#fafafa;border-bottom-color:#e4ff54}
      .nuda-accx-ul__panel{background:#141414;padding:.65rem .7rem;animation:_nuda-accxul-in .2s ease-out}
      .nuda-accx-ul__stat{display:flex;flex-direction:column;gap:.1rem;margin-bottom:.5rem}
      .nuda-accx-ul__num{color:#fafafa;font-size:1.3rem;font-weight:800;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
      .nuda-accx-ul__label{color:#555;font-size:.55rem}
      .nuda-accx-ul__bar{background:rgba(255,255,255,.06);border-radius:4px;height:5px;overflow:hidden;margin-bottom:.35rem}
      .nuda-accx-ul__fill{display:block;background:#e4ff54;height:100%;width:72%;border-radius:4px}
      .nuda-accx-ul__meta{display:flex;align-items:center;gap:.3rem}
      .nuda-accx-ul__up{color:#e4ff54;font-size:.58rem;font-weight:700}
      .nuda-accx-ul__vs{color:#555;font-size:.55rem}
      @keyframes _nuda-accxul-in{from{opacity:0}to{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-ul__panel{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-ul">
  <div class="nuda-accx-ul__nav" role="tablist">
    <button class="nuda-accx-ul__tab" role="tab" aria-selected="false">Activity</button>
    <button class="nuda-accx-ul__tab nuda-accx-ul__tab--active" role="tab" aria-selected="true">Analytics</button>
    <button class="nuda-accx-ul__tab" role="tab" aria-selected="false">Reports</button>
    <button class="nuda-accx-ul__tab" role="tab" aria-selected="false">Settings</button>
  </div>
  <div class="nuda-accx-ul__panel" role="tabpanel">
    <div class="nuda-accx-ul__stat">
      <span class="nuda-accx-ul__num">24,891</span>
      <span class="nuda-accx-ul__label">Page views this week</span>
    </div>
    <div class="nuda-accx-ul__bar">
      <span class="nuda-accx-ul__fill"></span>
    </div>
    <div class="nuda-accx-ul__meta">
      <span class="nuda-accx-ul__up">&#9650; 12.4%</span>
      <span class="nuda-accx-ul__vs">vs last week</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── BORDERED TAB CARD ─────────────── */
  {
    id: "accx-bordered-tab-card",
    name: "Bordered Tab Card",
    category: CAT,
    preview: (
      <div className="nuda-accx-btc" aria-hidden="true">
        <div className="nuda-accx-btc__tabs">
          <button className="nuda-accx-btc__tab nuda-accx-btc__tab--active">Code</button>
          <button className="nuda-accx-btc__tab">Preview</button>
          <button className="nuda-accx-btc__tab">Docs</button>
        </div>
        <div className="nuda-accx-btc__card">
          <div className="nuda-accx-btc__toolbar">
            <span className="nuda-accx-btc__dot nuda-accx-btc__dot--r"></span>
            <span className="nuda-accx-btc__dot nuda-accx-btc__dot--y"></span>
            <span className="nuda-accx-btc__dot nuda-accx-btc__dot--g"></span>
            <span className="nuda-accx-btc__fname">index.tsx</span>
          </div>
          <div className="nuda-accx-btc__code">
            <span className="nuda-accx-btc__kw">const</span>
            <span className="nuda-accx-btc__var"> App</span>
            <span className="nuda-accx-btc__op"> = </span>
            <span className="nuda-accx-btc__fn">() =&gt; </span>
            <span className="nuda-accx-btc__br">&#123;</span>
          </div>
          <div className="nuda-accx-btc__code nuda-accx-btc__code--indent">
            <span className="nuda-accx-btc__kw">return</span>
            <span className="nuda-accx-btc__str"> &lt;div /&gt;</span>
          </div>
          <div className="nuda-accx-btc__code"><span className="nuda-accx-btc__br">&#125;</span></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-btc{display:flex;flex-direction:column;width:100%}
      .nuda-accx-btc__tabs{display:flex;gap:0}
      .nuda-accx-btc__tab{background:#111;border:1px solid rgba(255,255,255,.08);border-bottom:none;padding:.35rem .6rem;font-size:.6rem;font-weight:600;color:#555;cursor:pointer;border-radius:8px 8px 0 0;margin-right:2px;position:relative;top:1px}
      .nuda-accx-btc__tab--active{background:#141414;color:#fafafa;border-color:rgba(255,255,255,.1);z-index:1}
      .nuda-accx-btc__card{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:0 10px 10px 10px;overflow:hidden;animation:_nuda-accxbtc-reveal .25s ease-out}
      .nuda-accx-btc__toolbar{display:flex;align-items:center;gap:.3rem;padding:.4rem .55rem;background:#111;border-bottom:1px solid rgba(255,255,255,.07)}
      .nuda-accx-btc__dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
      .nuda-accx-btc__dot--r{background:#ff6b6b}
      .nuda-accx-btc__dot--y{background:#ffd93d}
      .nuda-accx-btc__dot--g{background:#6bcb77}
      .nuda-accx-btc__fname{color:#555;font-size:.55rem;margin-left:.2rem;font-family:monospace}
      .nuda-accx-btc__code{padding:.15rem .55rem;font-size:.6rem;font-family:monospace;line-height:1.7}
      .nuda-accx-btc__code--indent{padding-left:1.2rem}
      .nuda-accx-btc__kw{color:#c678dd}
      .nuda-accx-btc__var{color:#e06c75}
      .nuda-accx-btc__op{color:#abb2bf}
      .nuda-accx-btc__fn{color:#61afef}
      .nuda-accx-btc__br{color:#abb2bf}
      .nuda-accx-btc__str{color:#98c379}
      @keyframes _nuda-accxbtc-reveal{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-btc__card{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-btc">
  <div class="nuda-accx-btc__tabs" role="tablist">
    <button class="nuda-accx-btc__tab nuda-accx-btc__tab--active" role="tab" aria-selected="true">Code</button>
    <button class="nuda-accx-btc__tab" role="tab" aria-selected="false">Preview</button>
    <button class="nuda-accx-btc__tab" role="tab" aria-selected="false">Docs</button>
  </div>
  <div class="nuda-accx-btc__card" role="tabpanel">
    <div class="nuda-accx-btc__toolbar">
      <span class="nuda-accx-btc__dot nuda-accx-btc__dot--r"></span>
      <span class="nuda-accx-btc__dot nuda-accx-btc__dot--y"></span>
      <span class="nuda-accx-btc__dot nuda-accx-btc__dot--g"></span>
      <span class="nuda-accx-btc__fname">index.tsx</span>
    </div>
    <div class="nuda-accx-btc__code">
      <span class="nuda-accx-btc__kw">const</span>
      <span class="nuda-accx-btc__var"> App</span>
      <span class="nuda-accx-btc__op"> = </span>
      <span class="nuda-accx-btc__fn">() =&gt; </span>
      <span class="nuda-accx-btc__br">{</span>
    </div>
    <div class="nuda-accx-btc__code nuda-accx-btc__code--indent">
      <span class="nuda-accx-btc__kw">return</span>
      <span class="nuda-accx-btc__str"> &lt;div /&gt;</span>
    </div>
    <div class="nuda-accx-btc__code">
      <span class="nuda-accx-btc__br">}</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── ICON TABS ─────────────── */
  {
    id: "accx-icon-tabs",
    name: "Icon Tabs",
    category: CAT,
    preview: (
      <div className="nuda-accx-ict" aria-hidden="true">
        <div className="nuda-accx-ict__nav" role="tablist">
          <button className="nuda-accx-ict__tab" role="tab">
            <svg className="nuda-accx-ict__svg" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
            </svg>
            <span>Dashboard</span>
          </button>
          <button className="nuda-accx-ict__tab nuda-accx-ict__tab--active" role="tab">
            <svg className="nuda-accx-ict__svg" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6Z" fill="currentColor"/>
            </svg>
            <span>Starred</span>
          </button>
          <button className="nuda-accx-ict__tab" role="tab">
            <svg className="nuda-accx-ict__svg" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="3" fill="currentColor" opacity=".6"/>
              <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6"/>
            </svg>
            <span>Profile</span>
          </button>
        </div>
        <div className="nuda-accx-ict__panel">
          <div className="nuda-accx-ict__items">
            <div className="nuda-accx-ict__item">
              <span className="nuda-accx-ict__star">&#9733;</span>
              <div className="nuda-accx-ict__info">
                <span className="nuda-accx-ict__ititle">NudaUI Components</span>
                <span className="nuda-accx-ict__isub">Pinned 2 days ago</span>
              </div>
              <span className="nuda-accx-ict__badge">New</span>
            </div>
            <div className="nuda-accx-ict__item">
              <span className="nuda-accx-ict__star">&#9733;</span>
              <div className="nuda-accx-ict__info">
                <span className="nuda-accx-ict__ititle">Design System Docs</span>
                <span className="nuda-accx-ict__isub">Pinned 1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-accx-ict{display:flex;flex-direction:column;width:100%;gap:0}
      .nuda-accx-ict__nav{display:flex;gap:2px;background:#111;border:1px solid rgba(255,255,255,.07);border-bottom:none;border-radius:10px 10px 0 0;padding:.3rem .3rem 0}
      .nuda-accx-ict__tab{display:flex;align-items:center;gap:.3rem;background:none;border:none;border-radius:6px 6px 0 0;padding:.35rem .55rem;font-size:.58rem;font-weight:600;color:#555;cursor:pointer;transition:background .15s,color .15s;border-bottom:2px solid transparent;margin-bottom:-1px}
      .nuda-accx-ict__tab--active{background:#141414;color:#fafafa;border-bottom-color:#e4ff54}
      .nuda-accx-ict__svg{width:12px;height:12px;color:currentColor;flex-shrink:0}
      .nuda-accx-ict__panel{background:#141414;border:1px solid rgba(255,255,255,.07);border-radius:0 0 10px 10px;padding:.55rem .6rem;animation:_nuda-accxict-fade .2s ease-out}
      .nuda-accx-ict__items{display:flex;flex-direction:column;gap:.35rem}
      .nuda-accx-ict__item{display:flex;align-items:center;gap:.4rem;padding:.35rem .45rem;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-accx-ict__star{color:#e4ff54;font-size:.7rem;flex-shrink:0}
      .nuda-accx-ict__info{display:flex;flex-direction:column;gap:.08rem;flex:1;min-width:0}
      .nuda-accx-ict__ititle{color:#cfcfcf;font-size:.6rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-accx-ict__isub{color:#555;font-size:.52rem}
      .nuda-accx-ict__badge{background:rgba(228,255,84,.15);color:#e4ff54;font-size:.5rem;font-weight:700;padding:.1rem .3rem;border-radius:4px;flex-shrink:0}
      @keyframes _nuda-accxict-fade{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-accx-ict__panel{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-accx-ict">
  <div class="nuda-accx-ict__nav" role="tablist">
    <button class="nuda-accx-ict__tab" role="tab" aria-selected="false">
      <svg class="nuda-accx-ict__svg" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
        <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
        <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
        <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/>
      </svg>
      <span>Dashboard</span>
    </button>
    <button class="nuda-accx-ict__tab nuda-accx-ict__tab--active" role="tab" aria-selected="true">
      <svg class="nuda-accx-ict__svg" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6Z" fill="currentColor"/>
      </svg>
      <span>Starred</span>
    </button>
    <button class="nuda-accx-ict__tab" role="tab" aria-selected="false">
      <svg class="nuda-accx-ict__svg" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="3" fill="currentColor" opacity=".6"/>
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>
      </svg>
      <span>Profile</span>
    </button>
  </div>
  <div class="nuda-accx-ict__panel" role="tabpanel">
    <div class="nuda-accx-ict__items">
      <div class="nuda-accx-ict__item">
        <span class="nuda-accx-ict__star">&#9733;</span>
        <div class="nuda-accx-ict__info">
          <span class="nuda-accx-ict__ititle">NudaUI Components</span>
          <span class="nuda-accx-ict__isub">Pinned 2 days ago</span>
        </div>
        <span class="nuda-accx-ict__badge">New</span>
      </div>
      <div class="nuda-accx-ict__item">
        <span class="nuda-accx-ict__star">&#9733;</span>
        <div class="nuda-accx-ict__info">
          <span class="nuda-accx-ict__ititle">Design System Docs</span>
          <span class="nuda-accx-ict__isub">Pinned 1 week ago</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    ],
  },
];
