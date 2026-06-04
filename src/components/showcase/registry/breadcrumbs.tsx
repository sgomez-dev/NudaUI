import type { NudaComponent } from "./types";

/* Breadcrumbs — preview + cssInline + HTML; CSS copy tab derived by reconcile. */
const CAT = "Breadcrumbs";

export const breadcrumbs: NudaComponent[] = [
  {
    id: "breadcrumb-chevron",
    name: "Chevron Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcc">
        <a className="nuda-bcc__link">Home</a>
        <span className="nuda-bcc__sep">›</span>
        <a className="nuda-bcc__link">Products</a>
        <span className="nuda-bcc__sep">›</span>
        <span className="nuda-bcc__cur">Headphones</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcc{display:inline-flex;align-items:center;gap:.45rem;font-size:.8rem}
      .nuda-bcc__link{color:#999;cursor:pointer;transition:color .15s}
      .nuda-bcc__link:hover{color:#e4ff54}
      .nuda-bcc__sep{color:#555}
      .nuda-bcc__cur{color:#fafafa;font-weight:600}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcc">
  <a class="nuda-bcc__link" href="#">Home</a>
  <span class="nuda-bcc__sep">›</span>
  <a class="nuda-bcc__link" href="#">Products</a>
  <span class="nuda-bcc__sep">›</span>
  <span class="nuda-bcc__cur">Headphones</span>
</nav>` }],
  },

  {
    id: "breadcrumb-slash",
    name: "Slash Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcs">
        <a className="nuda-bcs__link">docs</a>
        <span className="nuda-bcs__sep">/</span>
        <a className="nuda-bcs__link">guides</a>
        <span className="nuda-bcs__sep">/</span>
        <span className="nuda-bcs__cur">install</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcs{display:inline-flex;align-items:center;gap:.4rem;font-family:ui-monospace,Menlo,monospace;font-size:.78rem}
      .nuda-bcs__link{color:#888;cursor:pointer}
      .nuda-bcs__link:hover{color:#e4ff54}
      .nuda-bcs__sep{color:#444}
      .nuda-bcs__cur{color:#e4ff54}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcs">
  <a class="nuda-bcs__link" href="#">docs</a>
  <span class="nuda-bcs__sep">/</span>
  <a class="nuda-bcs__link" href="#">guides</a>
  <span class="nuda-bcs__sep">/</span>
  <span class="nuda-bcs__cur">install</span>
</nav>` }],
  },

  {
    id: "breadcrumb-pill",
    name: "Pill Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcp">
        <a className="nuda-bcp__crumb">Home</a>
        <a className="nuda-bcp__crumb">Team</a>
        <span className="nuda-bcp__crumb nuda-bcp__crumb--on">Settings</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcp{display:inline-flex;align-items:center;gap:.35rem;font-size:.78rem}
      .nuda-bcp__crumb{padding:.3rem .7rem;border-radius:99px;background:#1a1a1a;color:#aaa;cursor:pointer;transition:all .15s}
      .nuda-bcp__crumb:hover{background:#262626;color:#fafafa}
      .nuda-bcp__crumb--on{background:#e4ff54;color:#0a0a0a;font-weight:600}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcp">
  <a class="nuda-bcp__crumb" href="#">Home</a>
  <a class="nuda-bcp__crumb" href="#">Team</a>
  <span class="nuda-bcp__crumb nuda-bcp__crumb--on">Settings</span>
</nav>` }],
  },

  {
    id: "breadcrumb-arrow",
    name: "Arrow Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bca">
        <span className="nuda-bca__step">Cart</span>
        <span className="nuda-bca__step nuda-bca__step--on">Shipping</span>
        <span className="nuda-bca__step">Payment</span>
      </nav>
    ),
    cssInline: `
      .nuda-bca{display:inline-flex;font-size:.76rem}
      .nuda-bca__step{position:relative;background:#1a1a1a;color:#999;padding:.4rem 1.1rem .4rem 1.3rem;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 50%,calc(100% - 12px) 100%,0 100%,12px 50%);margin-right:-8px}
      .nuda-bca__step:first-child{padding-left:.9rem;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 50%,calc(100% - 12px) 100%,0 100%)}
      .nuda-bca__step--on{background:#e4ff54;color:#0a0a0a;font-weight:600}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bca">
  <span class="nuda-bca__step">Cart</span>
  <span class="nuda-bca__step nuda-bca__step--on">Shipping</span>
  <span class="nuda-bca__step">Payment</span>
</nav>` }],
  },

  {
    id: "breadcrumb-collapse",
    name: "Collapsed Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bco">
        <a className="nuda-bco__link">Home</a>
        <span className="nuda-bco__sep">/</span>
        <button className="nuda-bco__more">…</button>
        <span className="nuda-bco__sep">/</span>
        <span className="nuda-bco__cur">Invoice #42</span>
      </nav>
    ),
    cssInline: `
      .nuda-bco{display:inline-flex;align-items:center;gap:.45rem;font-size:.8rem}
      .nuda-bco__link{color:#999;cursor:pointer}
      .nuda-bco__link:hover{color:#e4ff54}
      .nuda-bco__sep{color:#555}
      .nuda-bco__more{width:26px;height:22px;border:none;background:#1f1f1f;color:#aaa;border-radius:6px;cursor:pointer;font-size:.8rem;line-height:1}
      .nuda-bco__more:hover{background:#2a2a2a;color:#fafafa}
      .nuda-bco__cur{color:#fafafa;font-weight:600}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bco">
  <a class="nuda-bco__link" href="#">Home</a>
  <span class="nuda-bco__sep">/</span>
  <button class="nuda-bco__more">…</button>
  <span class="nuda-bco__sep">/</span>
  <span class="nuda-bco__cur">Invoice #42</span>
</nav>` }],
  },

  {
    id: "breadcrumb-icon",
    name: "Icon Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bci">
        <a className="nuda-bci__link"><span className="nuda-bci__home">⌂</span></a>
        <span className="nuda-bci__sep">›</span>
        <a className="nuda-bci__link">Library</a>
        <span className="nuda-bci__sep">›</span>
        <span className="nuda-bci__cur">Albums</span>
      </nav>
    ),
    cssInline: `
      .nuda-bci{display:inline-flex;align-items:center;gap:.45rem;font-size:.8rem}
      .nuda-bci__link{color:#999;cursor:pointer}
      .nuda-bci__link:hover{color:#e4ff54}
      .nuda-bci__home{font-size:1rem}
      .nuda-bci__sep{color:#555}
      .nuda-bci__cur{color:#fafafa;font-weight:600}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bci">
  <a class="nuda-bci__link" href="#"><span class="nuda-bci__home">⌂</span></a>
  <span class="nuda-bci__sep">›</span>
  <a class="nuda-bci__link" href="#">Library</a>
  <span class="nuda-bci__sep">›</span>
  <span class="nuda-bci__cur">Albums</span>
</nav>` }],
  },

  {
    id: "breadcrumb-gradient",
    name: "Gradient Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcg">
        <a className="nuda-bcg__link">Home</a>
        <span className="nuda-bcg__sep">›</span>
        <a className="nuda-bcg__link">Blog</a>
        <span className="nuda-bcg__sep">›</span>
        <span className="nuda-bcg__cur">Article</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcg{display:inline-flex;align-items:center;gap:.45rem;font-size:.8rem}
      .nuda-bcg__link{color:#999;cursor:pointer}
      .nuda-bcg__link:hover{color:#fafafa}
      .nuda-bcg__sep{color:#555}
      .nuda-bcg__cur{font-weight:700;background:linear-gradient(90deg,#e4ff54,#6ee7b7);-webkit-background-clip:text;background-clip:text;color:transparent}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcg">
  <a class="nuda-bcg__link" href="#">Home</a>
  <span class="nuda-bcg__sep">›</span>
  <a class="nuda-bcg__link" href="#">Blog</a>
  <span class="nuda-bcg__sep">›</span>
  <span class="nuda-bcg__cur">Article</span>
</nav>` }],
  },

  {
    id: "breadcrumb-step",
    name: "Numbered Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcn">
        <span className="nuda-bcn__step nuda-bcn__step--done"><span className="nuda-bcn__num">1</span> Account</span>
        <span className="nuda-bcn__step nuda-bcn__step--on"><span className="nuda-bcn__num">2</span> Profile</span>
        <span className="nuda-bcn__step"><span className="nuda-bcn__num">3</span> Done</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcn{display:inline-flex;align-items:center;gap:1rem;font-size:.78rem}
      .nuda-bcn__step{display:inline-flex;align-items:center;gap:.4rem;color:#777}
      .nuda-bcn__num{width:20px;height:20px;border-radius:50%;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;justify-content:center;font-size:.65rem}
      .nuda-bcn__step--done{color:#aaa}
      .nuda-bcn__step--done .nuda-bcn__num{background:#6ee7b7;border-color:#6ee7b7;color:#0a0a0a}
      .nuda-bcn__step--on{color:#fafafa}
      .nuda-bcn__step--on .nuda-bcn__num{background:#e4ff54;border-color:#e4ff54;color:#0a0a0a;font-weight:700}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcn">
  <span class="nuda-bcn__step nuda-bcn__step--done"><span class="nuda-bcn__num">1</span> Account</span>
  <span class="nuda-bcn__step nuda-bcn__step--on"><span class="nuda-bcn__num">2</span> Profile</span>
  <span class="nuda-bcn__step"><span class="nuda-bcn__num">3</span> Done</span>
</nav>` }],
  },

  {
    id: "breadcrumb-underline",
    name: "Underline Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcu">
        <a className="nuda-bcu__link">Home</a>
        <span className="nuda-bcu__sep">/</span>
        <a className="nuda-bcu__link">Docs</a>
        <span className="nuda-bcu__sep">/</span>
        <span className="nuda-bcu__cur">Hooks</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcu{display:inline-flex;align-items:center;gap:.45rem;font-size:.8rem}
      .nuda-bcu__link{color:#999;cursor:pointer;text-decoration:none;border-bottom:1px solid transparent;transition:all .15s}
      .nuda-bcu__link:hover{color:#fafafa;border-bottom-color:#e4ff54}
      .nuda-bcu__sep{color:#555}
      .nuda-bcu__cur{color:#fafafa;font-weight:600;border-bottom:1px solid #e4ff54}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcu">
  <a class="nuda-bcu__link" href="#">Home</a>
  <span class="nuda-bcu__sep">/</span>
  <a class="nuda-bcu__link" href="#">Docs</a>
  <span class="nuda-bcu__sep">/</span>
  <span class="nuda-bcu__cur">Hooks</span>
</nav>` }],
  },

  {
    id: "breadcrumb-glass",
    name: "Glass Breadcrumb",
    category: CAT,
    preview: (
      <nav className="nuda-bcgl">
        <a className="nuda-bcgl__link">Home</a>
        <span className="nuda-bcgl__sep">›</span>
        <a className="nuda-bcgl__link">Projects</a>
        <span className="nuda-bcgl__sep">›</span>
        <span className="nuda-bcgl__cur">NudaUI</span>
      </nav>
    ),
    cssInline: `
      .nuda-bcgl{display:inline-flex;align-items:center;gap:.5rem;font-size:.78rem;padding:.4rem .8rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:99px;backdrop-filter:blur(8px)}
      .nuda-bcgl__link{color:#aaa;cursor:pointer}
      .nuda-bcgl__link:hover{color:#fafafa}
      .nuda-bcgl__sep{color:#555}
      .nuda-bcgl__cur{color:#e4ff54;font-weight:600}
    `,
    code: [{ label: "HTML", language: "html", code: `<nav class="nuda-bcgl">
  <a class="nuda-bcgl__link" href="#">Home</a>
  <span class="nuda-bcgl__sep">›</span>
  <a class="nuda-bcgl__link" href="#">Projects</a>
  <span class="nuda-bcgl__sep">›</span>
  <span class="nuda-bcgl__cur">NudaUI</span>
</nav>` }],
  },
];
