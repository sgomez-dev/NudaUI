import type { NudaComponent } from "./types";

const CAT = "Social Share";

export const socialShare: NudaComponent[] = [
  {
    id: "share-horizontal-row",
    name: "Horizontal Share Row",
    category: CAT,
    preview: (
      <div className="nuda-shr-hrow">
        <span className="nuda-shr-hrow__label">Share</span>
        <div className="nuda-shr-hrow__btns">
          <button className="nuda-shr-hrow__btn nuda-shr-hrow__btn--tw">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
          <button className="nuda-shr-hrow__btn nuda-shr-hrow__btn--fb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
          <button className="nuda-shr-hrow__btn nuda-shr-hrow__btn--li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </button>
          <button className="nuda-shr-hrow__btn nuda-shr-hrow__btn--em">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-shr-hrow{display:flex;align-items:center;gap:1rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.75rem 1rem;width:260px;box-sizing:border-box}
      .nuda-shr-hrow__label{color:#777;font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;flex-shrink:0}
      .nuda-shr-hrow__btns{display:flex;gap:.5rem}
      .nuda-shr-hrow__btn{width:32px;height:32px;border:none;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .15s,opacity .15s}
      .nuda-shr-hrow__btn:hover{transform:translateY(-2px);opacity:.85}
      .nuda-shr-hrow__btn--tw{background:#000;color:#fff}
      .nuda-shr-hrow__btn--fb{background:#1877f2;color:#fff}
      .nuda-shr-hrow__btn--li{background:#0a66c2;color:#fff}
      .nuda-shr-hrow__btn--em{background:#333;color:#cfcfcf}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-hrow">
  <span class="nuda-shr-hrow__label">Share</span>
  <div class="nuda-shr-hrow__btns">
    <button class="nuda-shr-hrow__btn nuda-shr-hrow__btn--tw">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </button>
    <button class="nuda-shr-hrow__btn nuda-shr-hrow__btn--fb">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </button>
    <button class="nuda-shr-hrow__btn nuda-shr-hrow__btn--li">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </button>
    <button class="nuda-shr-hrow__btn nuda-shr-hrow__btn--em">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
    </button>
  </div>
</div>` }],
  },

  {
    id: "share-floating-vertical",
    name: "Floating Vertical Bar",
    category: CAT,
    preview: (
      <div className="nuda-shr-vbar">
        <button className="nuda-shr-vbar__btn" title="X / Twitter">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </button>
        <div className="nuda-shr-vbar__divider" />
        <button className="nuda-shr-vbar__btn" title="Facebook">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </button>
        <div className="nuda-shr-vbar__divider" />
        <button className="nuda-shr-vbar__btn" title="LinkedIn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </button>
        <div className="nuda-shr-vbar__divider" />
        <button className="nuda-shr-vbar__btn" title="Copy link">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-shr-vbar{display:flex;flex-direction:column;align-items:center;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:.4rem;gap:0;width:44px;box-shadow:0 4px 24px rgba(0,0,0,.4)}
      .nuda-shr-vbar__btn{width:36px;height:36px;border:none;background:transparent;color:#777;cursor:pointer;border-radius:10px;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}
      .nuda-shr-vbar__btn:hover{background:rgba(228,255,84,.12);color:#e4ff54}
      .nuda-shr-vbar__divider{width:20px;height:1px;background:rgba(255,255,255,.08);margin:.1rem 0}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-vbar">
  <button class="nuda-shr-vbar__btn" title="X / Twitter">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  </button>
  <div class="nuda-shr-vbar__divider"></div>
  <button class="nuda-shr-vbar__btn" title="Facebook">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  </button>
  <div class="nuda-shr-vbar__divider"></div>
  <button class="nuda-shr-vbar__btn" title="LinkedIn">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  </button>
  <div class="nuda-shr-vbar__divider"></div>
  <button class="nuda-shr-vbar__btn" title="Copy link">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  </button>
</div>` }],
  },

  {
    id: "share-copy-link-pill",
    name: "Copy-Link Pill",
    category: CAT,
    preview: (
      <div className="nuda-shr-pill">
        <div className="nuda-shr-pill__url">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <span className="nuda-shr-pill__text">nudaui.com/components</span>
        </div>
        <button className="nuda-shr-pill__copy">Copy</button>
      </div>
    ),
    cssInline: `
      .nuda-shr-pill{display:flex;align-items:center;background:#141414;border:1px solid rgba(255,255,255,.12);border-radius:99px;padding:.25rem .25rem .25rem .75rem;gap:.5rem;width:260px;box-sizing:border-box}
      .nuda-shr-pill__url{display:flex;align-items:center;gap:.4rem;flex:1;min-width:0;color:#777}
      .nuda-shr-pill__text{color:#cfcfcf;font-size:.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-shr-pill__copy{background:#e4ff54;color:#0a0a0a;border:none;border-radius:99px;padding:.35rem .85rem;font-size:.75rem;font-weight:700;cursor:pointer;flex-shrink:0;transition:opacity .15s}
      .nuda-shr-pill__copy:hover{opacity:.85}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-pill">
  <div class="nuda-shr-pill__url">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    <span class="nuda-shr-pill__text">nudaui.com/components</span>
  </div>
  <button class="nuda-shr-pill__copy">Copy</button>
</div>` }],
  },

  {
    id: "share-count-buttons",
    name: "Share Count Buttons",
    category: CAT,
    preview: (
      <div className="nuda-shr-count">
        <button className="nuda-shr-count__btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          <span className="nuda-shr-count__num">2.4k</span>
        </button>
        <button className="nuda-shr-count__btn nuda-shr-count__btn--fb">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <span className="nuda-shr-count__num">1.1k</span>
        </button>
        <button className="nuda-shr-count__btn nuda-shr-count__btn--li">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <span className="nuda-shr-count__num">847</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-shr-count{display:flex;gap:.5rem;flex-wrap:wrap}
      .nuda-shr-count__btn{display:flex;align-items:center;gap:.4rem;padding:.4rem .7rem;border-radius:8px;border:1px solid rgba(255,255,255,.12);background:#1a1a1a;color:#cfcfcf;cursor:pointer;font-size:.78rem;font-weight:600;transition:border-color .15s,background .15s}
      .nuda-shr-count__btn:hover{background:#222;border-color:rgba(255,255,255,.25)}
      .nuda-shr-count__btn--fb{color:#4a90d9}
      .nuda-shr-count__btn--li{color:#5ba4cf}
      .nuda-shr-count__num{color:#777;font-weight:400}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-count">
  <button class="nuda-shr-count__btn">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    <span class="nuda-shr-count__num">2.4k</span>
  </button>
  <button class="nuda-shr-count__btn nuda-shr-count__btn--fb">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    <span class="nuda-shr-count__num">1.1k</span>
  </button>
  <button class="nuda-shr-count__btn nuda-shr-count__btn--li">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    <span class="nuda-shr-count__num">847</span>
  </button>
</div>` }],
  },

  {
    id: "share-circular-icons",
    name: "Circular Icon Buttons",
    category: CAT,
    preview: (
      <div className="nuda-shr-circle">
        {[
          { cls: "nuda-shr-circle__btn--tw", label: "X", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
          { cls: "nuda-shr-circle__btn--fb", label: "FB", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
          { cls: "nuda-shr-circle__btn--wa", label: "WA", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
          { cls: "nuda-shr-circle__btn--em", label: "Email", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg> },
          { cls: "nuda-shr-circle__btn--cp", label: "Copy", svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> },
        ].map(({ cls, svg }) => (
          <button key={cls} className={`nuda-shr-circle__btn ${cls}`}>{svg}</button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-shr-circle{display:flex;gap:.6rem;flex-wrap:wrap;padding:.5rem}
      .nuda-shr-circle__btn{width:40px;height:40px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s}
      .nuda-shr-circle__btn:hover{transform:scale(1.12);box-shadow:0 4px 16px rgba(0,0,0,.4)}
      .nuda-shr-circle__btn--tw{background:#000;color:#fff}
      .nuda-shr-circle__btn--fb{background:#1877f2;color:#fff}
      .nuda-shr-circle__btn--wa{background:#25d366;color:#fff}
      .nuda-shr-circle__btn--em{background:#444;color:#cfcfcf}
      .nuda-shr-circle__btn--cp{background:#e4ff54;color:#0a0a0a}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-circle">
  <button class="nuda-shr-circle__btn nuda-shr-circle__btn--tw">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  </button>
  <button class="nuda-shr-circle__btn nuda-shr-circle__btn--fb">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  </button>
  <button class="nuda-shr-circle__btn nuda-shr-circle__btn--wa">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  </button>
  <button class="nuda-shr-circle__btn nuda-shr-circle__btn--em">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
  </button>
  <button class="nuda-shr-circle__btn nuda-shr-circle__btn--cp">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  </button>
</div>` }],
  },

  {
    id: "share-popover-menu",
    name: "Popover Share Menu",
    category: CAT,
    preview: (
      <div className="nuda-shr-pop">
        <div className="nuda-shr-pop__trigger">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
          Share
        </div>
        <div className="nuda-shr-pop__menu">
          <button className="nuda-shr-pop__item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Post to X
          </button>
          <button className="nuda-shr-pop__item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Share on Facebook
          </button>
          <button className="nuda-shr-pop__item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Copy link
          </button>
          <div className="nuda-shr-pop__sep" />
          <button className="nuda-shr-pop__item nuda-shr-pop__item--danger">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            Delete
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-shr-pop{display:flex;flex-direction:column;align-items:flex-start;gap:.6rem}
      .nuda-shr-pop__trigger{display:inline-flex;align-items:center;gap:.4rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:.45rem .75rem;color:#cfcfcf;font-size:.8rem;font-weight:500;cursor:pointer}
      .nuda-shr-pop__menu{background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:.3rem;min-width:170px;box-shadow:0 8px 32px rgba(0,0,0,.5);animation:_nuda-shrpopIn .18s ease-out}
      @keyframes _nuda-shrpopIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-shr-pop__menu{animation:none}}
      .nuda-shr-pop__item{display:flex;align-items:center;gap:.5rem;width:100%;background:none;border:none;color:#cfcfcf;font-size:.8rem;padding:.45rem .6rem;border-radius:7px;cursor:pointer;text-align:left;transition:background .12s}
      .nuda-shr-pop__item:hover{background:rgba(255,255,255,.07)}
      .nuda-shr-pop__item--danger{color:#ff6b6b}
      .nuda-shr-pop__item--danger:hover{background:rgba(255,107,107,.1)}
      .nuda-shr-pop__sep{height:1px;background:rgba(255,255,255,.08);margin:.25rem 0}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-pop">
  <div class="nuda-shr-pop__trigger">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
    Share
  </div>
  <div class="nuda-shr-pop__menu">
    <button class="nuda-shr-pop__item">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      Post to X
    </button>
    <button class="nuda-shr-pop__item">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      Share on Facebook
    </button>
    <button class="nuda-shr-pop__item">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Copy link
    </button>
    <div class="nuda-shr-pop__sep"></div>
    <button class="nuda-shr-pop__item nuda-shr-pop__item--danger">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
      Delete
    </button>
  </div>
</div>` }],
  },

  {
    id: "share-gradient-buttons",
    name: "Gradient Share Buttons",
    category: CAT,
    preview: (
      <div className="nuda-shr-grad">
        <button className="nuda-shr-grad__btn nuda-shr-grad__btn--tw">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          <span>Tweet</span>
        </button>
        <button className="nuda-shr-grad__btn nuda-shr-grad__btn--ig">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          <span>Story</span>
        </button>
        <button className="nuda-shr-grad__btn nuda-shr-grad__btn--ac">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
          <span>Share</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-shr-grad{display:flex;gap:.5rem;flex-wrap:wrap}
      .nuda-shr-grad__btn{display:inline-flex;align-items:center;gap:.4rem;padding:.45rem .9rem;border:none;border-radius:9px;font-size:.8rem;font-weight:600;cursor:pointer;color:#fff;transition:opacity .15s,transform .15s}
      .nuda-shr-grad__btn:hover{opacity:.85;transform:translateY(-1px)}
      .nuda-shr-grad__btn--tw{background:linear-gradient(135deg,#1a1a1a 0%,#333 100%);box-shadow:0 2px 10px rgba(0,0,0,.4)}
      .nuda-shr-grad__btn--ig{background:linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);box-shadow:0 2px 10px rgba(220,39,67,.35)}
      .nuda-shr-grad__btn--ac{background:linear-gradient(135deg,#e4ff54 0%,#a8d800 100%);color:#0a0a0a;box-shadow:0 2px 10px rgba(228,255,84,.25)}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-grad">
  <button class="nuda-shr-grad__btn nuda-shr-grad__btn--tw">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    <span>Tweet</span>
  </button>
  <button class="nuda-shr-grad__btn nuda-shr-grad__btn--ig">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    <span>Story</span>
  </button>
  <button class="nuda-shr-grad__btn nuda-shr-grad__btn--ac">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
    <span>Share</span>
  </button>
</div>` }],
  },

  {
    id: "share-like-bookmark-bar",
    name: "Like + Share + Bookmark Bar",
    category: CAT,
    preview: (
      <div className="nuda-shr-lsb">
        <button className="nuda-shr-lsb__btn nuda-shr-lsb__btn--like">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span>482</span>
        </button>
        <div className="nuda-shr-lsb__sep" />
        <button className="nuda-shr-lsb__btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>64</span>
        </button>
        <div className="nuda-shr-lsb__sep" />
        <button className="nuda-shr-lsb__btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
          <span>Share</span>
        </button>
        <div className="nuda-shr-lsb__sep" />
        <button className="nuda-shr-lsb__btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-shr-lsb{display:inline-flex;align-items:center;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-shr-lsb__btn{display:flex;align-items:center;gap:.35rem;padding:.5rem .75rem;background:none;border:none;color:#777;font-size:.8rem;font-weight:500;cursor:pointer;transition:background .15s,color .15s}
      .nuda-shr-lsb__btn:hover{background:rgba(255,255,255,.05);color:#cfcfcf}
      .nuda-shr-lsb__btn--like{color:#ff6b6b}
      .nuda-shr-lsb__btn--like:hover{background:rgba(255,107,107,.1);color:#ff6b6b}
      .nuda-shr-lsb__sep{width:1px;height:24px;background:rgba(255,255,255,.08);flex-shrink:0}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-lsb">
  <button class="nuda-shr-lsb__btn nuda-shr-lsb__btn--like">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    <span>482</span>
  </button>
  <div class="nuda-shr-lsb__sep"></div>
  <button class="nuda-shr-lsb__btn">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    <span>64</span>
  </button>
  <div class="nuda-shr-lsb__sep"></div>
  <button class="nuda-shr-lsb__btn">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
    <span>Share</span>
  </button>
  <div class="nuda-shr-lsb__sep"></div>
  <button class="nuda-shr-lsb__btn">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
  </button>
</div>` }],
  },

  {
    id: "share-qr-card",
    name: "QR Share Card",
    category: CAT,
    preview: (
      <div className="nuda-shr-qr">
        <div className="nuda-shr-qr__head">
          <span className="nuda-shr-qr__title">Scan to share</span>
          <span className="nuda-shr-qr__badge">QR</span>
        </div>
        <div className="nuda-shr-qr__canvas">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect width="80" height="80" fill="#0a0a0a" rx="6"/>
            <rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="#e4ff54" strokeWidth="2"/>
            <rect x="12" y="12" width="16" height="16" rx="1" fill="#e4ff54"/>
            <rect x="48" y="8" width="24" height="24" rx="2" fill="none" stroke="#e4ff54" strokeWidth="2"/>
            <rect x="52" y="12" width="16" height="16" rx="1" fill="#e4ff54"/>
            <rect x="8" y="48" width="24" height="24" rx="2" fill="none" stroke="#e4ff54" strokeWidth="2"/>
            <rect x="12" y="52" width="16" height="16" rx="1" fill="#e4ff54"/>
            <rect x="40" y="40" width="4" height="4" fill="#e4ff54"/>
            <rect x="48" y="40" width="4" height="4" fill="#e4ff54"/>
            <rect x="56" y="40" width="4" height="4" fill="#e4ff54"/>
            <rect x="64" y="40" width="4" height="4" fill="#e4ff54"/>
            <rect x="40" y="48" width="4" height="4" fill="#e4ff54"/>
            <rect x="56" y="48" width="4" height="4" fill="#e4ff54"/>
            <rect x="40" y="56" width="4" height="4" fill="#e4ff54"/>
            <rect x="48" y="56" width="4" height="4" fill="#e4ff54"/>
            <rect x="64" y="56" width="4" height="4" fill="#e4ff54"/>
            <rect x="40" y="64" width="4" height="4" fill="#e4ff54"/>
            <rect x="56" y="64" width="4" height="4" fill="#e4ff54"/>
            <rect x="64" y="64" width="4" height="4" fill="#e4ff54"/>
          </svg>
        </div>
        <p className="nuda-shr-qr__url">nudaui.com/components</p>
      </div>
    ),
    cssInline: `
      .nuda-shr-qr{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:.9rem;width:160px;display:flex;flex-direction:column;align-items:center;gap:.6rem}
      .nuda-shr-qr__head{display:flex;align-items:center;justify-content:space-between;width:100%}
      .nuda-shr-qr__title{color:#777;font-size:.7rem;font-weight:500}
      .nuda-shr-qr__badge{background:#e4ff54;color:#0a0a0a;font-size:.6rem;font-weight:800;padding:.1rem .35rem;border-radius:4px;letter-spacing:.04em}
      .nuda-shr-qr__canvas{background:#0a0a0a;border-radius:8px;padding:.4rem;border:1px solid rgba(228,255,84,.15)}
      .nuda-shr-qr__url{color:#777;font-size:.65rem;margin:0;text-align:center;font-family:monospace}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-qr">
  <div class="nuda-shr-qr__head">
    <span class="nuda-shr-qr__title">Scan to share</span>
    <span class="nuda-shr-qr__badge">QR</span>
  </div>
  <div class="nuda-shr-qr__canvas">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect width="80" height="80" fill="#0a0a0a" rx="6"/>
      <rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="#e4ff54" stroke-width="2"/>
      <rect x="12" y="12" width="16" height="16" rx="1" fill="#e4ff54"/>
      <rect x="48" y="8" width="24" height="24" rx="2" fill="none" stroke="#e4ff54" stroke-width="2"/>
      <rect x="52" y="12" width="16" height="16" rx="1" fill="#e4ff54"/>
      <rect x="8" y="48" width="24" height="24" rx="2" fill="none" stroke="#e4ff54" stroke-width="2"/>
      <rect x="12" y="52" width="16" height="16" rx="1" fill="#e4ff54"/>
      <rect x="40" y="40" width="4" height="4" fill="#e4ff54"/>
      <rect x="48" y="40" width="4" height="4" fill="#e4ff54"/>
      <rect x="56" y="40" width="4" height="4" fill="#e4ff54"/>
      <rect x="64" y="40" width="4" height="4" fill="#e4ff54"/>
      <rect x="40" y="48" width="4" height="4" fill="#e4ff54"/>
      <rect x="56" y="48" width="4" height="4" fill="#e4ff54"/>
      <rect x="40" y="56" width="4" height="4" fill="#e4ff54"/>
      <rect x="48" y="56" width="4" height="4" fill="#e4ff54"/>
      <rect x="64" y="56" width="4" height="4" fill="#e4ff54"/>
      <rect x="40" y="64" width="4" height="4" fill="#e4ff54"/>
      <rect x="56" y="64" width="4" height="4" fill="#e4ff54"/>
      <rect x="64" y="64" width="4" height="4" fill="#e4ff54"/>
    </svg>
  </div>
  <p class="nuda-shr-qr__url">nudaui.com/components</p>
</div>` }],
  },

  {
    id: "share-segmented-toggle",
    name: "Segmented Share Toggle",
    category: CAT,
    preview: (
      <div className="nuda-shr-seg">
        <div className="nuda-shr-seg__track">
          <button className="nuda-shr-seg__opt nuda-shr-seg__opt--active">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
            Share
          </button>
          <button className="nuda-shr-seg__opt">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Link
          </button>
          <button className="nuda-shr-seg__opt">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            Email
          </button>
          <button className="nuda-shr-seg__opt">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            Export
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-shr-seg{padding:.4rem}
      .nuda-shr-seg__track{display:inline-flex;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:.25rem;gap:.15rem}
      .nuda-shr-seg__opt{display:flex;align-items:center;gap:.3rem;padding:.35rem .6rem;border:none;background:transparent;color:#777;font-size:.75rem;font-weight:500;border-radius:7px;cursor:pointer;transition:background .15s,color .15s;white-space:nowrap}
      .nuda-shr-seg__opt:hover{color:#cfcfcf}
      .nuda-shr-seg__opt--active{background:#e4ff54;color:#0a0a0a;font-weight:700}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-seg">
  <div class="nuda-shr-seg__track">
    <button class="nuda-shr-seg__opt nuda-shr-seg__opt--active">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
      Share
    </button>
    <button class="nuda-shr-seg__opt">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Link
    </button>
    <button class="nuda-shr-seg__opt">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
      Email
    </button>
    <button class="nuda-shr-seg__opt">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
      Export
    </button>
  </div>
</div>` }],
  },

  {
    id: "share-minimal-text-links",
    name: "Minimal Text Links",
    category: CAT,
    preview: (
      <div className="nuda-shr-txt">
        <span className="nuda-shr-txt__label">Share this article</span>
        <div className="nuda-shr-txt__links">
          <a href="#" className="nuda-shr-txt__link">Twitter</a>
          <span className="nuda-shr-txt__dot" />
          <a href="#" className="nuda-shr-txt__link">Facebook</a>
          <span className="nuda-shr-txt__dot" />
          <a href="#" className="nuda-shr-txt__link">LinkedIn</a>
          <span className="nuda-shr-txt__dot" />
          <a href="#" className="nuda-shr-txt__link nuda-shr-txt__link--accent">Copy link</a>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-shr-txt{display:flex;flex-direction:column;gap:.4rem;padding:.5rem}
      .nuda-shr-txt__label{color:#777;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em}
      .nuda-shr-txt__links{display:flex;align-items:center;gap:.4rem;flex-wrap:wrap}
      .nuda-shr-txt__link{color:#cfcfcf;font-size:.82rem;text-decoration:none;transition:color .15s}
      .nuda-shr-txt__link:hover{color:#fafafa;text-decoration:underline}
      .nuda-shr-txt__link--accent{color:#e4ff54}
      .nuda-shr-txt__link--accent:hover{color:#f0ff7a}
      .nuda-shr-txt__dot{width:3px;height:3px;border-radius:50%;background:#444;flex-shrink:0}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-txt">
  <span class="nuda-shr-txt__label">Share this article</span>
  <div class="nuda-shr-txt__links">
    <a href="#" class="nuda-shr-txt__link">Twitter</a>
    <span class="nuda-shr-txt__dot"></span>
    <a href="#" class="nuda-shr-txt__link">Facebook</a>
    <span class="nuda-shr-txt__dot"></span>
    <a href="#" class="nuda-shr-txt__link">LinkedIn</a>
    <span class="nuda-shr-txt__dot"></span>
    <a href="#" class="nuda-shr-txt__link nuda-shr-txt__link--accent">Copy link</a>
  </div>
</div>` }],
  },

  {
    id: "share-sticky-bottom-bar",
    name: "Sticky Bottom Share Bar",
    category: CAT,
    preview: (
      <div className="nuda-shr-sticky">
        <div className="nuda-shr-sticky__inner">
          <div className="nuda-shr-sticky__info">
            <span className="nuda-shr-sticky__ttl">Getting started with NudaUI</span>
            <span className="nuda-shr-sticky__sub">5 min read</span>
          </div>
          <div className="nuda-shr-sticky__actions">
            <button className="nuda-shr-sticky__btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            <button className="nuda-shr-sticky__btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button className="nuda-shr-sticky__cta">Share</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-shr-sticky{width:260px;background:#141414;border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:.6rem .75rem;box-shadow:0 -4px 24px rgba(0,0,0,.5)}
      .nuda-shr-sticky__inner{display:flex;align-items:center;justify-content:space-between;gap:.75rem}
      .nuda-shr-sticky__info{display:flex;flex-direction:column;gap:.15rem;flex:1;min-width:0}
      .nuda-shr-sticky__ttl{color:#cfcfcf;font-size:.75rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-shr-sticky__sub{color:#777;font-size:.65rem}
      .nuda-shr-sticky__actions{display:flex;align-items:center;gap:.35rem;flex-shrink:0}
      .nuda-shr-sticky__btn{width:30px;height:30px;border:1px solid rgba(255,255,255,.1);background:#1a1a1a;border-radius:8px;color:#777;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:border-color .15s,color .15s}
      .nuda-shr-sticky__btn:hover{border-color:rgba(255,255,255,.25);color:#cfcfcf}
      .nuda-shr-sticky__cta{background:#e4ff54;color:#0a0a0a;border:none;border-radius:8px;padding:.35rem .7rem;font-size:.75rem;font-weight:700;cursor:pointer;transition:opacity .15s}
      .nuda-shr-sticky__cta:hover{opacity:.85}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-sticky">
  <div class="nuda-shr-sticky__inner">
    <div class="nuda-shr-sticky__info">
      <span class="nuda-shr-sticky__ttl">Getting started with NudaUI</span>
      <span class="nuda-shr-sticky__sub">5 min read</span>
    </div>
    <div class="nuda-shr-sticky__actions">
      <button class="nuda-shr-sticky__btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </button>
      <button class="nuda-shr-sticky__btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </button>
      <button class="nuda-shr-sticky__cta">Share</button>
    </div>
  </div>
</div>` }],
  },

  {
    id: "share-native-sheet",
    name: "Native-Style Sheet",
    category: CAT,
    preview: (
      <div className="nuda-shr-sheet">
        <div className="nuda-shr-sheet__handle" />
        <p className="nuda-shr-sheet__title">Share via</p>
        <div className="nuda-shr-sheet__apps">
          {[
            { cls: "nuda-shr-sheet__app--tw", label: "X", bg: "#000" },
            { cls: "nuda-shr-sheet__app--wa", label: "WA", bg: "#25d366" },
            { cls: "nuda-shr-sheet__app--fb", label: "FB", bg: "#1877f2" },
            { cls: "nuda-shr-sheet__app--em", label: "✉", bg: "#555" },
          ].map(({ cls, label, bg }) => (
            <div key={cls} className="nuda-shr-sheet__app">
              <div className={`nuda-shr-sheet__icon ${cls}`} style={{ background: bg }}>{label}</div>
              <span className="nuda-shr-sheet__lbl">{label === "✉" ? "Email" : label === "WA" ? "WhatsApp" : label === "FB" ? "Facebook" : "X (Twitter)"}</span>
            </div>
          ))}
        </div>
        <button className="nuda-shr-sheet__cancel">Cancel</button>
      </div>
    ),
    cssInline: `
      .nuda-shr-sheet{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:18px 18px 12px 12px;padding:.6rem .75rem .75rem;width:240px;display:flex;flex-direction:column;align-items:center;gap:.6rem;animation:_nuda-shrsheetUp .25s ease-out}
      @keyframes _nuda-shrsheetUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-shr-sheet{animation:none}}
      .nuda-shr-sheet__handle{width:36px;height:4px;background:rgba(255,255,255,.2);border-radius:2px}
      .nuda-shr-sheet__title{color:#777;font-size:.72rem;font-weight:500;margin:0}
      .nuda-shr-sheet__apps{display:flex;gap:.9rem;justify-content:center;width:100%}
      .nuda-shr-sheet__app{display:flex;flex-direction:column;align-items:center;gap:.3rem;cursor:pointer}
      .nuda-shr-sheet__icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;color:#fff;letter-spacing:-.02em}
      .nuda-shr-sheet__lbl{color:#777;font-size:.6rem;text-align:center;white-space:nowrap}
      .nuda-shr-sheet__cancel{width:100%;background:rgba(255,255,255,.06);border:none;border-radius:10px;padding:.5rem;color:#cfcfcf;font-size:.8rem;font-weight:500;cursor:pointer;transition:background .15s}
      .nuda-shr-sheet__cancel:hover{background:rgba(255,255,255,.1)}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-sheet">
  <div class="nuda-shr-sheet__handle"></div>
  <p class="nuda-shr-sheet__title">Share via</p>
  <div class="nuda-shr-sheet__apps">
    <div class="nuda-shr-sheet__app">
      <div class="nuda-shr-sheet__icon nuda-shr-sheet__app--tw" style="background:#000">X</div>
      <span class="nuda-shr-sheet__lbl">X (Twitter)</span>
    </div>
    <div class="nuda-shr-sheet__app">
      <div class="nuda-shr-sheet__icon nuda-shr-sheet__app--wa" style="background:#25d366">WA</div>
      <span class="nuda-shr-sheet__lbl">WhatsApp</span>
    </div>
    <div class="nuda-shr-sheet__app">
      <div class="nuda-shr-sheet__icon nuda-shr-sheet__app--fb" style="background:#1877f2">FB</div>
      <span class="nuda-shr-sheet__lbl">Facebook</span>
    </div>
    <div class="nuda-shr-sheet__app">
      <div class="nuda-shr-sheet__icon nuda-shr-sheet__app--em" style="background:#555">✉</div>
      <span class="nuda-shr-sheet__lbl">Email</span>
    </div>
  </div>
  <button class="nuda-shr-sheet__cancel">Cancel</button>
</div>` }],
  },

  {
    id: "share-expand-fab",
    name: "Expand-on-Hover FAB",
    category: CAT,
    preview: (
      <div className="nuda-shr-fab">
        <div className="nuda-shr-fab__orbit">
          <button className="nuda-shr-fab__orb nuda-shr-fab__orb--tw">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
          <button className="nuda-shr-fab__orb nuda-shr-fab__orb--fb">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
          <button className="nuda-shr-fab__orb nuda-shr-fab__orb--wa">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </button>
        </div>
        <button className="nuda-shr-fab__main">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-shr-fab{position:relative;width:120px;height:90px;display:flex;align-items:flex-end;justify-content:flex-end}
      .nuda-shr-fab__orbit{position:absolute;bottom:0;right:0;display:flex;flex-direction:column;align-items:flex-end;gap:.3rem;pointer-events:none;opacity:1}
      .nuda-shr-fab__orb{width:32px;height:32px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;pointer-events:all;transition:transform .2s,box-shadow .2s;animation:_nuda-shrfabIn .25s ease-out both}
      .nuda-shr-fab__orb:nth-child(1){animation-delay:.05s;transform:translateX(-50px)}
      .nuda-shr-fab__orb:nth-child(2){animation-delay:.1s;transform:translateX(-50px)}
      .nuda-shr-fab__orb:nth-child(3){animation-delay:.15s;transform:translateX(-50px)}
      @keyframes _nuda-shrfabIn{from{opacity:0;transform:translateX(0) scale(.7)}to{opacity:1;transform:translateX(-50px) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-shr-fab__orb{animation:none}}
      .nuda-shr-fab__orb--tw{background:#000;color:#fff}
      .nuda-shr-fab__orb--fb{background:#1877f2;color:#fff}
      .nuda-shr-fab__orb--wa{background:#25d366;color:#fff}
      .nuda-shr-fab__main{width:44px;height:44px;border-radius:50%;background:#e4ff54;border:none;color:#0a0a0a;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 20px rgba(228,255,84,.35);position:relative;z-index:1}
    `,
    code: [{ label: "HTML", language: "html", code: `<div class="nuda-shr-fab">
  <div class="nuda-shr-fab__orbit">
    <button class="nuda-shr-fab__orb nuda-shr-fab__orb--tw">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </button>
    <button class="nuda-shr-fab__orb nuda-shr-fab__orb--fb">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </button>
    <button class="nuda-shr-fab__orb nuda-shr-fab__orb--wa">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
    </button>
  </div>
  <button class="nuda-shr-fab__main">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
  </button>
</div>` }],
  },

];
