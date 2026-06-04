import type { NudaComponent } from "./types";

/* Dropdowns & Menus — open-state previews; entrance animation plays on mount.
   Authored as preview + cssInline + HTML; the copyable CSS tab is derived
   from cssInline by the registry reconcile step. */

const CAT = "Dropdowns & Menus";

export const dropdownsMenus: NudaComponent[] = [
  {
    id: "dropdown-fade",
    name: "Fade Dropdown",
    category: CAT,
    preview: (
      <div className="nuda-ddf">
        <button className="nuda-ddf__trigger">Menu ▾</button>
        <ul className="nuda-ddf__menu">
          <li className="nuda-ddf__item">Profile</li>
          <li className="nuda-ddf__item">Settings</li>
          <li className="nuda-ddf__item">Sign out</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ddf{position:relative;display:inline-block;font-family:inherit}
      .nuda-ddf__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:.5rem .9rem;font-size:.8rem;cursor:pointer}
      .nuda-ddf__menu{list-style:none;margin:.4rem 0 0;padding:.35rem;min-width:160px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 12px 30px -12px rgba(0,0,0,.6);animation:_ddfIn .2s ease-out}
      .nuda-ddf__item{padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer;transition:background .15s,color .15s}
      .nuda-ddf__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      @keyframes _ddfIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ddf__menu{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ddf">
  <button class="nuda-ddf__trigger">Menu ▾</button>
  <ul class="nuda-ddf__menu">
    <li class="nuda-ddf__item">Profile</li>
    <li class="nuda-ddf__item">Settings</li>
    <li class="nuda-ddf__item">Sign out</li>
  </ul>
</div>`,
      },
    ],
  },

  {
    id: "dropdown-scale",
    name: "Scale Dropdown",
    category: CAT,
    preview: (
      <div className="nuda-dds">
        <button className="nuda-dds__trigger">Options ▾</button>
        <ul className="nuda-dds__menu">
          <li className="nuda-dds__item">Duplicate</li>
          <li className="nuda-dds__item">Archive</li>
          <li className="nuda-dds__item">Delete</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-dds{position:relative;display:inline-block}
      .nuda-dds__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:.5rem .9rem;font-size:.8rem;cursor:pointer}
      .nuda-dds__menu{list-style:none;margin:.4rem 0 0;padding:.35rem;min-width:150px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;transform-origin:top center;animation:_ddsIn .22s cubic-bezier(.34,1.56,.64,1)}
      .nuda-dds__item{padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-dds__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      @keyframes _ddsIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-dds__menu{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dds">
  <button class="nuda-dds__trigger">Options ▾</button>
  <ul class="nuda-dds__menu">
    <li class="nuda-dds__item">Duplicate</li>
    <li class="nuda-dds__item">Archive</li>
    <li class="nuda-dds__item">Delete</li>
  </ul>
</div>`,
      },
    ],
  },

  {
    id: "context-menu",
    name: "Context Menu",
    category: CAT,
    preview: (
      <ul className="nuda-ctx">
        <li className="nuda-ctx__item">Cut <span className="nuda-ctx__hint">⌘X</span></li>
        <li className="nuda-ctx__item">Copy <span className="nuda-ctx__hint">⌘C</span></li>
        <li className="nuda-ctx__item">Paste <span className="nuda-ctx__hint">⌘V</span></li>
        <li className="nuda-ctx__sep" />
        <li className="nuda-ctx__item nuda-ctx__item--danger">Delete</li>
      </ul>
    ),
    cssInline: `
      .nuda-ctx{list-style:none;margin:0;padding:.35rem;min-width:180px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 16px 40px -16px rgba(0,0,0,.7);animation:_ctxIn .16s ease-out}
      .nuda-ctx__item{display:flex;justify-content:space-between;align-items:center;padding:.45rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-ctx__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      .nuda-ctx__hint{font-size:.7rem;color:#666;font-family:ui-monospace,monospace}
      .nuda-ctx__sep{height:1px;margin:.3rem .2rem;background:rgba(255,255,255,.08)}
      .nuda-ctx__item--danger{color:#ff6b6b}
      .nuda-ctx__item--danger:hover{background:rgba(255,107,107,.12);color:#ff8787}
      @keyframes _ctxIn{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ctx{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ul class="nuda-ctx">
  <li class="nuda-ctx__item">Cut <span class="nuda-ctx__hint">⌘X</span></li>
  <li class="nuda-ctx__item">Copy <span class="nuda-ctx__hint">⌘C</span></li>
  <li class="nuda-ctx__item">Paste <span class="nuda-ctx__hint">⌘V</span></li>
  <li class="nuda-ctx__sep"></li>
  <li class="nuda-ctx__item nuda-ctx__item--danger">Delete</li>
</ul>`,
      },
    ],
  },

  {
    id: "profile-menu",
    name: "Profile Menu",
    category: CAT,
    preview: (
      <div className="nuda-pm">
        <div className="nuda-pm__head">
          <div className="nuda-pm__avatar">SG</div>
          <div>
            <div className="nuda-pm__name">Santiago</div>
            <div className="nuda-pm__email">hi@nudaui.dev</div>
          </div>
        </div>
        <ul className="nuda-pm__list">
          <li className="nuda-pm__item">Dashboard</li>
          <li className="nuda-pm__item">Billing</li>
          <li className="nuda-pm__item">Sign out</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-pm{min-width:200px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden;animation:_pmIn .2s ease-out}
      .nuda-pm__head{display:flex;align-items:center;gap:.6rem;padding:.7rem;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-pm__avatar{width:36px;height:36px;border-radius:50%;background:#e4ff54;color:#0a0a0a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem}
      .nuda-pm__name{font-size:.82rem;color:#fafafa;font-weight:600}
      .nuda-pm__email{font-size:.7rem;color:#777}
      .nuda-pm__list{list-style:none;margin:0;padding:.35rem}
      .nuda-pm__item{padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-pm__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      @keyframes _pmIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-pm{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pm">
  <div class="nuda-pm__head">
    <div class="nuda-pm__avatar">SG</div>
    <div>
      <div class="nuda-pm__name">Santiago</div>
      <div class="nuda-pm__email">hi@nudaui.dev</div>
    </div>
  </div>
  <ul class="nuda-pm__list">
    <li class="nuda-pm__item">Dashboard</li>
    <li class="nuda-pm__item">Billing</li>
    <li class="nuda-pm__item">Sign out</li>
  </ul>
</div>`,
      },
    ],
  },

  {
    id: "split-button",
    name: "Split Button",
    category: CAT,
    preview: (
      <div className="nuda-split">
        <button className="nuda-split__main">Save</button>
        <button className="nuda-split__toggle">▾</button>
        <ul className="nuda-split__menu">
          <li className="nuda-split__item">Save as draft</li>
          <li className="nuda-split__item">Save &amp; publish</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-split{position:relative;display:inline-flex}
      .nuda-split__main{background:#e4ff54;color:#0a0a0a;border:none;border-radius:8px 0 0 8px;padding:.5rem .9rem;font-size:.8rem;font-weight:600;cursor:pointer}
      .nuda-split__toggle{background:#c8e23c;color:#0a0a0a;border:none;border-left:1px solid rgba(0,0,0,.15);border-radius:0 8px 8px 0;padding:.5rem .6rem;font-size:.7rem;cursor:pointer}
      .nuda-split__menu{position:absolute;top:100%;right:0;margin-top:.4rem;list-style:none;padding:.35rem;min-width:160px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;animation:_splitIn .2s ease-out}
      .nuda-split__item{padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer;white-space:nowrap}
      .nuda-split__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      @keyframes _splitIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-split__menu{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-split">
  <button class="nuda-split__main">Save</button>
  <button class="nuda-split__toggle">▾</button>
  <ul class="nuda-split__menu">
    <li class="nuda-split__item">Save as draft</li>
    <li class="nuda-split__item">Save &amp; publish</li>
  </ul>
</div>`,
      },
    ],
  },

  {
    id: "checkbox-menu",
    name: "Checkbox Menu",
    category: CAT,
    preview: (
      <ul className="nuda-ckm">
        <li className="nuda-ckm__item"><span className="nuda-ckm__box nuda-ckm__box--on">✓</span> Active</li>
        <li className="nuda-ckm__item"><span className="nuda-ckm__box nuda-ckm__box--on">✓</span> Archived</li>
        <li className="nuda-ckm__item"><span className="nuda-ckm__box" /> Draft</li>
      </ul>
    ),
    cssInline: `
      .nuda-ckm{list-style:none;margin:0;padding:.35rem;min-width:180px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;animation:_ckmIn .18s ease-out}
      .nuda-ckm__item{display:flex;align-items:center;gap:.55rem;padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-ckm__item:hover{background:rgba(255,255,255,.05)}
      .nuda-ckm__box{width:16px;height:16px;border-radius:4px;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;justify-content:center;font-size:.65rem;color:#0a0a0a}
      .nuda-ckm__box--on{background:#e4ff54;border-color:#e4ff54}
      @keyframes _ckmIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ckm{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ul class="nuda-ckm">
  <li class="nuda-ckm__item"><span class="nuda-ckm__box nuda-ckm__box--on">✓</span> Active</li>
  <li class="nuda-ckm__item"><span class="nuda-ckm__box nuda-ckm__box--on">✓</span> Archived</li>
  <li class="nuda-ckm__item"><span class="nuda-ckm__box"></span> Draft</li>
</ul>`,
      },
    ],
  },

  {
    id: "dropdown-search",
    name: "Search Dropdown",
    category: CAT,
    preview: (
      <div className="nuda-dsr">
        <input className="nuda-dsr__input" placeholder="Search…" readOnly />
        <ul className="nuda-dsr__list">
          <li className="nuda-dsr__item">React</li>
          <li className="nuda-dsr__item">Svelte</li>
          <li className="nuda-dsr__item">Vue</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-dsr{min-width:200px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;animation:_dsrIn .2s ease-out}
      .nuda-dsr__input{width:100%;box-sizing:border-box;background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,.08);padding:.6rem .7rem;font-size:.8rem;color:#fafafa;outline:none}
      .nuda-dsr__input::placeholder{color:#666}
      .nuda-dsr__list{list-style:none;margin:0;padding:.35rem}
      .nuda-dsr__item{padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-dsr__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      @keyframes _dsrIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dsr{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dsr">
  <input class="nuda-dsr__input" placeholder="Search…" />
  <ul class="nuda-dsr__list">
    <li class="nuda-dsr__item">React</li>
    <li class="nuda-dsr__item">Svelte</li>
    <li class="nuda-dsr__item">Vue</li>
  </ul>
</div>`,
      },
    ],
  },

  {
    id: "nested-submenu",
    name: "Nested Submenu",
    category: CAT,
    preview: (
      <ul className="nuda-sub">
        <li className="nuda-sub__item">New file</li>
        <li className="nuda-sub__item nuda-sub__item--parent">Share ›
          <ul className="nuda-sub__fly">
            <li className="nuda-sub__item">Copy link</li>
            <li className="nuda-sub__item">Email</li>
          </ul>
        </li>
        <li className="nuda-sub__item">Rename</li>
      </ul>
    ),
    cssInline: `
      .nuda-sub{position:relative;list-style:none;margin:0;padding:.35rem;min-width:170px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px}
      .nuda-sub__item{position:relative;padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-sub__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      .nuda-sub__item--parent{font-weight:500}
      .nuda-sub__fly{position:absolute;top:-.35rem;left:100%;margin-left:.3rem;list-style:none;padding:.35rem;min-width:150px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;animation:_subIn .18s ease-out}
      @keyframes _subIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-sub__fly{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ul class="nuda-sub">
  <li class="nuda-sub__item">New file</li>
  <li class="nuda-sub__item nuda-sub__item--parent">Share ›
    <ul class="nuda-sub__fly">
      <li class="nuda-sub__item">Copy link</li>
      <li class="nuda-sub__item">Email</li>
    </ul>
  </li>
  <li class="nuda-sub__item">Rename</li>
</ul>`,
      },
    ],
  },

  {
    id: "mega-menu",
    name: "Mega Menu",
    category: CAT,
    preview: (
      <div className="nuda-mega">
        <div className="nuda-mega__col">
          <div className="nuda-mega__h">Product</div>
          <div className="nuda-mega__l">Overview</div>
          <div className="nuda-mega__l">Pricing</div>
        </div>
        <div className="nuda-mega__col">
          <div className="nuda-mega__h">Developers</div>
          <div className="nuda-mega__l">Docs</div>
          <div className="nuda-mega__l">API</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mega{display:flex;gap:1.5rem;padding:1rem 1.2rem;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:12px;animation:_megaIn .22s ease-out}
      .nuda-mega__h{font-size:.65rem;text-transform:uppercase;letter-spacing:.08em;color:#777;margin-bottom:.5rem}
      .nuda-mega__l{font-size:.8rem;color:#cfcfcf;padding:.25rem 0;cursor:pointer}
      .nuda-mega__l:hover{color:#e4ff54}
      @keyframes _megaIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-mega{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mega">
  <div class="nuda-mega__col">
    <div class="nuda-mega__h">Product</div>
    <div class="nuda-mega__l">Overview</div>
    <div class="nuda-mega__l">Pricing</div>
  </div>
  <div class="nuda-mega__col">
    <div class="nuda-mega__h">Developers</div>
    <div class="nuda-mega__l">Docs</div>
    <div class="nuda-mega__l">API</div>
  </div>
</div>`,
      },
    ],
  },

  {
    id: "select-dropdown",
    name: "Styled Select",
    category: CAT,
    preview: (
      <div className="nuda-sel">
        <div className="nuda-sel__field">Medium <span className="nuda-sel__caret">▾</span></div>
        <ul className="nuda-sel__menu">
          <li className="nuda-sel__item">Small</li>
          <li className="nuda-sel__item nuda-sel__item--sel">Medium</li>
          <li className="nuda-sel__item">Large</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-sel{position:relative;display:inline-block;min-width:140px}
      .nuda-sel__field{display:flex;justify-content:space-between;align-items:center;background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.5rem .7rem;font-size:.8rem;color:#fafafa;cursor:pointer}
      .nuda-sel__caret{color:#777;font-size:.7rem}
      .nuda-sel__menu{list-style:none;margin:.4rem 0 0;padding:.3rem;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:8px;animation:_selIn .18s ease-out}
      .nuda-sel__item{padding:.45rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-sel__item:hover{background:rgba(255,255,255,.05)}
      .nuda-sel__item--sel{color:#e4ff54}
      @keyframes _selIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-sel__menu{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sel">
  <div class="nuda-sel__field">Medium <span class="nuda-sel__caret">▾</span></div>
  <ul class="nuda-sel__menu">
    <li class="nuda-sel__item">Small</li>
    <li class="nuda-sel__item nuda-sel__item--sel">Medium</li>
    <li class="nuda-sel__item">Large</li>
  </ul>
</div>`,
      },
    ],
  },

  {
    id: "action-menu",
    name: "Action Menu",
    category: CAT,
    preview: (
      <ul className="nuda-am">
        <li className="nuda-am__item"><span className="nuda-am__ic">✏️</span> Edit</li>
        <li className="nuda-am__item"><span className="nuda-am__ic">📋</span> Duplicate</li>
        <li className="nuda-am__item"><span className="nuda-am__ic">🔗</span> Copy link</li>
      </ul>
    ),
    cssInline: `
      .nuda-am{list-style:none;margin:0;padding:.35rem;min-width:170px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;animation:_amIn .18s ease-out}
      .nuda-am__item{display:flex;align-items:center;gap:.6rem;padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-am__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      .nuda-am__ic{font-size:.85rem}
      @keyframes _amIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-am{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ul class="nuda-am">
  <li class="nuda-am__item"><span class="nuda-am__ic">✏️</span> Edit</li>
  <li class="nuda-am__item"><span class="nuda-am__ic">📋</span> Duplicate</li>
  <li class="nuda-am__item"><span class="nuda-am__ic">🔗</span> Copy link</li>
</ul>`,
      },
    ],
  },

  {
    id: "dropdown-slide",
    name: "Slide Dropdown",
    category: CAT,
    preview: (
      <div className="nuda-ddsl">
        <button className="nuda-ddsl__trigger">Filter ▾</button>
        <ul className="nuda-ddsl__menu">
          <li className="nuda-ddsl__item">Newest</li>
          <li className="nuda-ddsl__item">Oldest</li>
          <li className="nuda-ddsl__item">Popular</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ddsl{position:relative;display:inline-block;overflow:visible}
      .nuda-ddsl__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:.5rem .9rem;font-size:.8rem;cursor:pointer}
      .nuda-ddsl__menu{list-style:none;margin:.4rem 0 0;padding:.35rem;min-width:150px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;animation:_ddslIn .25s cubic-bezier(.16,1,.3,1)}
      .nuda-ddsl__item{padding:.5rem .6rem;border-radius:6px;font-size:.8rem;color:#cfcfcf;cursor:pointer}
      .nuda-ddsl__item:hover{background:rgba(228,255,84,.1);color:#fafafa}
      @keyframes _ddslIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-ddsl__menu{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ddsl">
  <button class="nuda-ddsl__trigger">Filter ▾</button>
  <ul class="nuda-ddsl__menu">
    <li class="nuda-ddsl__item">Newest</li>
    <li class="nuda-ddsl__item">Oldest</li>
    <li class="nuda-ddsl__item">Popular</li>
  </ul>
</div>`,
      },
    ],
  },
];
