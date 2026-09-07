import type { NudaComponent } from "./types";

const CAT = "Steppers & Wizards";

export const steppersExtra: NudaComponent[] = [
  /* ─────────────── 1. Expanding Vertical Panels ─────────────── */
  {
    id: "st2-expand-panels",
    name: "Expanding Step Panels",
    category: CAT,
    preview: (
      <ol className="nuda-st2-expand-panels">
        <li className="is-done">
          <div className="nuda-st2-expand-panels__head">
            <span className="nuda-st2-expand-panels__num">✓<span className="nuda-st2-expand-panels__sr"> completed</span></span>
            <span className="nuda-st2-expand-panels__title">Shipping address</span>
          </div>
        </li>
        <li className="is-active" aria-current="step">
          <div className="nuda-st2-expand-panels__head">
            <span className="nuda-st2-expand-panels__num">2</span>
            <span className="nuda-st2-expand-panels__title">Delivery method</span>
          </div>
          <div className="nuda-st2-expand-panels__body">
            <p>Choose how fast you want it there.</p>
            <button type="button">Continue</button>
          </div>
        </li>
        <li>
          <div className="nuda-st2-expand-panels__head">
            <span className="nuda-st2-expand-panels__num">3</span>
            <span className="nuda-st2-expand-panels__title">Payment</span>
          </div>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-st2-expand-panels{list-style:none;margin:0;padding:0;width:100%;max-width:300px;display:flex;flex-direction:column;gap:6px}
      .nuda-st2-expand-panels li{background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:12px;overflow:hidden}
      .nuda-st2-expand-panels__head{display:flex;align-items:center;gap:10px;padding:12px 14px;min-height:44px}
      .nuda-st2-expand-panels__num{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;flex-shrink:0;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:#a0a0a8;font-size:11px;font-weight:700;transition:background .3s,border-color .3s,color .3s}
      .nuda-st2-expand-panels li.is-done .nuda-st2-expand-panels__num{background:#e4ff54;border-color:#e4ff54;color:#09090b}
      .nuda-st2-expand-panels li.is-active .nuda-st2-expand-panels__num{border-color:#e4ff54;color:#e4ff54}
      .nuda-st2-expand-panels__title{color:#a0a0a8;font-size:12px;font-weight:500;transition:color .3s}
      .nuda-st2-expand-panels li.is-active .nuda-st2-expand-panels__title{color:#fafafa}
      .nuda-st2-expand-panels__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
      .nuda-st2-expand-panels__body{display:grid;grid-template-rows:1fr;opacity:1;transition:grid-template-rows .4s cubic-bezier(.16,1,.3,1),opacity .3s ease}
      .nuda-st2-expand-panels__body>p{margin:0;padding:0 14px 12px;color:#a0a0a8;font-size:11px;min-height:0;overflow:hidden}
      .nuda-st2-expand-panels__body button{margin:0 14px 14px;padding:9px 14px;min-height:38px;background:#e4ff54;color:#09090b;border:0;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
      .nuda-st2-expand-panels__body button:hover{filter:brightness(1.08);transform:translateY(-1px)}
      .nuda-st2-expand-panels__body button:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-st2-expand-panels li:not(.is-active) .nuda-st2-expand-panels__body{grid-template-rows:0fr;opacity:0}
      .nuda-st2-expand-panels li:not(.is-active) .nuda-st2-expand-panels__body>p,.nuda-st2-expand-panels li:not(.is-active) .nuda-st2-expand-panels__body button{padding-top:0;padding-bottom:0;margin-bottom:0;visibility:hidden}
      @media(prefers-reduced-motion:reduce){.nuda-st2-expand-panels__body{transition:opacity .15s linear}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ol class="nuda-st2-expand-panels">
  <li class="is-done">
    <div class="nuda-st2-expand-panels__head">
      <span class="nuda-st2-expand-panels__num">✓<span class="nuda-st2-expand-panels__sr"> completed</span></span>
      <span class="nuda-st2-expand-panels__title">Shipping address</span>
    </div>
  </li>
  <li class="is-active" aria-current="step">
    <div class="nuda-st2-expand-panels__head">
      <span class="nuda-st2-expand-panels__num">2</span>
      <span class="nuda-st2-expand-panels__title">Delivery method</span>
    </div>
    <div class="nuda-st2-expand-panels__body">
      <p>Choose how fast you want it there.</p>
      <button type="button">Continue</button>
    </div>
  </li>
  <li>
    <div class="nuda-st2-expand-panels__head">
      <span class="nuda-st2-expand-panels__num">3</span>
      <span class="nuda-st2-expand-panels__title">Payment</span>
    </div>
  </li>
</ol>`,
      },
    ],
  },

  /* ─────────────── 2. Blocked Step State ─────────────── */
  {
    id: "st2-blocked-step",
    name: "Blocked Step State",
    category: CAT,
    preview: (
      <ol className="nuda-st2-blocked-step">
        <li className="is-done">
          <span className="nuda-st2-blocked-step__dot">✓</span>
          <span>Account</span>
        </li>
        <li className="is-error" aria-current="step">
          <span className="nuda-st2-blocked-step__dot">!</span>
          <span>Verify ID<em>Upload failed — retry to continue</em></span>
        </li>
        <li className="is-blocked" aria-disabled="true">
          <span className="nuda-st2-blocked-step__dot">3</span>
          <span>Fund account</span>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-st2-blocked-step{list-style:none;margin:0;padding:0;width:100%;max-width:280px;display:flex;flex-direction:column;gap:14px}
      .nuda-st2-blocked-step li{display:flex;align-items:flex-start;gap:12px;font-size:12px;color:#a0a0a8}
      .nuda-st2-blocked-step__dot{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:#a0a0a8;font-size:11px;font-weight:700}
      .nuda-st2-blocked-step li.is-done .nuda-st2-blocked-step__dot{background:#e4ff54;border-color:#e4ff54;color:#09090b}
      .nuda-st2-blocked-step li.is-error{color:#fafafa}
      .nuda-st2-blocked-step li.is-error .nuda-st2-blocked-step__dot{background:rgba(255,90,90,.12);border-color:#ff5a5a;color:#ff5a5a;animation:_nuda-st2blockedstep-shake .5s ease}
      .nuda-st2-blocked-step li.is-blocked{opacity:.45}
      .nuda-st2-blocked-step li.is-blocked .nuda-st2-blocked-step__dot{color:#63636e}
      .nuda-st2-blocked-step em{display:block;font-style:normal;color:#ff8a8a;font-size:10.5px;margin-top:3px}
      @keyframes _nuda-st2blockedstep-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-3px)}40%{transform:translateX(3px)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}
      @media(prefers-reduced-motion:reduce){.nuda-st2-blocked-step li.is-error .nuda-st2-blocked-step__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ol class="nuda-st2-blocked-step">
  <li class="is-done">
    <span class="nuda-st2-blocked-step__dot">✓</span>
    <span>Account</span>
  </li>
  <li class="is-error" aria-current="step">
    <span class="nuda-st2-blocked-step__dot">!</span>
    <span>Verify ID<em>Upload failed — retry to continue</em></span>
  </li>
  <li class="is-blocked" aria-disabled="true">
    <span class="nuda-st2-blocked-step__dot">3</span>
    <span>Fund account</span>
  </li>
</ol>`,
      },
    ],
  },

  /* ─────────────── 3. Circular Progress Stepper ─────────────── */
  {
    id: "st2-ring-count",
    name: "Circular Progress Stepper",
    category: CAT,
    preview: (
      <div className="nuda-st2-ring-count" role="status" aria-live="polite">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle className="nuda-st2-ring-count__track" cx="32" cy="32" r="27" />
          <circle className="nuda-st2-ring-count__fill" cx="32" cy="32" r="27" />
        </svg>
        <div className="nuda-st2-ring-count__label">
          <strong>3</strong>
          <span>of 5</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-st2-ring-count{position:relative;width:88px;height:88px}
      .nuda-st2-ring-count svg{width:100%;height:100%;transform:rotate(-90deg)}
      .nuda-st2-ring-count__track{fill:none;stroke:rgba(255,255,255,.08);stroke-width:5}
      .nuda-st2-ring-count__fill{fill:none;stroke:#e4ff54;stroke-width:5;stroke-linecap:round;stroke-dasharray:169.6;stroke-dashoffset:169.6;animation:_nuda-st2ringcount-fill 1s cubic-bezier(.16,1,.3,1) .1s forwards}
      .nuda-st2-ring-count__label{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1}
      .nuda-st2-ring-count__label strong{color:#fafafa;font-size:20px;font-weight:700}
      .nuda-st2-ring-count__label span{color:#777;font-size:10px}
      @keyframes _nuda-st2ringcount-fill{to{stroke-dashoffset:67.84}}
      @media(prefers-reduced-motion:reduce){.nuda-st2-ring-count__fill{animation:none;stroke-dashoffset:67.84}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-st2-ring-count" role="status" aria-live="polite">
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle class="nuda-st2-ring-count__track" cx="32" cy="32" r="27" />
    <circle class="nuda-st2-ring-count__fill" cx="32" cy="32" r="27" />
  </svg>
  <div class="nuda-st2-ring-count__label">
    <strong>3</strong>
    <span>of 5</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Branching Stepper ─────────────── */
  {
    id: "st2-branch-path",
    name: "Branching Stepper",
    category: CAT,
    preview: (
      <div className="nuda-st2-branch-path">
        <div className="nuda-st2-branch-path__node is-done">1</div>
        <div className="nuda-st2-branch-path__fork">
          <span className="nuda-st2-branch-path__arm nuda-st2-branch-path__arm--up is-active" />
          <span className="nuda-st2-branch-path__arm nuda-st2-branch-path__arm--down" />
        </div>
        <div className="nuda-st2-branch-path__branches">
          <div className="nuda-st2-branch-path__node is-active" aria-current="step">2a</div>
          <div className="nuda-st2-branch-path__node is-future">2b</div>
        </div>
        <p className="nuda-st2-branch-path__caption">Business account selected — routed to compliance check</p>
      </div>
    ),
    cssInline: `
      .nuda-st2-branch-path{display:flex;flex-direction:column;align-items:center;gap:2px;width:100%;max-width:280px;font-size:11px}
      .nuda-st2-branch-path__node{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:#a0a0a8;font-size:11px;font-weight:700}
      .nuda-st2-branch-path__node.is-done{background:#e4ff54;border-color:#e4ff54;color:#09090b}
      .nuda-st2-branch-path__node.is-active{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54}
      .nuda-st2-branch-path__node.is-future{color:#63636e;opacity:.5}
      .nuda-st2-branch-path__fork{position:relative;width:60px;height:26px}
      .nuda-st2-branch-path__arm{position:absolute;left:50%;top:0;width:2px;height:100%;background:rgba(255,255,255,.08);transform-origin:top;transform:scaleY(0)}
      .nuda-st2-branch-path__arm--up{transform:translateX(-16px) rotate(-28deg) scaleY(0)}
      .nuda-st2-branch-path__arm--down{transform:translateX(16px) rotate(28deg) scaleY(0)}
      .nuda-st2-branch-path__arm.is-active{background:#e4ff54;animation:_nuda-st2branchpath-draw .5s cubic-bezier(.16,1,.3,1) .1s forwards}
      .nuda-st2-branch-path__arm--up.is-active{animation-name:_nuda-st2branchpath-drawup}
      .nuda-st2-branch-path__branches{display:flex;gap:34px}
      .nuda-st2-branch-path__caption{margin:10px 0 0;color:#a0a0a8;text-align:center}
      @keyframes _nuda-st2branchpath-draw{to{transform:translateX(16px) rotate(28deg) scaleY(1)}}
      @keyframes _nuda-st2branchpath-drawup{to{transform:translateX(-16px) rotate(-28deg) scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-st2-branch-path__arm.is-active{animation:none;transform:translateX(-16px) rotate(-28deg) scaleY(1)}.nuda-st2-branch-path__arm--down.is-active{transform:translateX(16px) rotate(28deg) scaleY(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-st2-branch-path">
  <div class="nuda-st2-branch-path__node is-done">1</div>
  <div class="nuda-st2-branch-path__fork">
    <span class="nuda-st2-branch-path__arm nuda-st2-branch-path__arm--up is-active"></span>
    <span class="nuda-st2-branch-path__arm nuda-st2-branch-path__arm--down"></span>
  </div>
  <div class="nuda-st2-branch-path__branches">
    <div class="nuda-st2-branch-path__node is-active" aria-current="step">2a</div>
    <div class="nuda-st2-branch-path__node is-future">2b</div>
  </div>
  <p class="nuda-st2-branch-path__caption">Business account selected — routed to compliance check</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Checkout Stepper With Summary Rail ─────────────── */
  {
    id: "st2-checkout-rail",
    name: "Checkout Stepper Summary Rail",
    category: CAT,
    preview: (
      <div className="nuda-st2-checkout-rail">
        <ol className="nuda-st2-checkout-rail__steps">
          <li className="is-done">Cart</li>
          <li className="is-active" aria-current="step">Shipping</li>
          <li>Payment</li>
        </ol>
        <div className="nuda-st2-checkout-rail__bar"><span style={{ transform: "scaleX(0.5)" }} /></div>
        <div className="nuda-st2-checkout-rail__summary">
          <span>Order total</span>
          <strong>$84.00</strong>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-st2-checkout-rail{width:100%;max-width:300px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
      .nuda-st2-checkout-rail__steps{list-style:none;margin:0;padding:0;display:flex;justify-content:space-between;font-size:11px;color:#63636e}
      .nuda-st2-checkout-rail__steps li.is-done{color:#a0a0a8}
      .nuda-st2-checkout-rail__steps li.is-active{color:#e4ff54;font-weight:600}
      .nuda-st2-checkout-rail__bar{position:relative;height:4px;background:rgba(255,255,255,.07);border-radius:99px;overflow:hidden}
      .nuda-st2-checkout-rail__bar span{position:absolute;inset:0;background:#e4ff54;border-radius:99px;transform-origin:left;transition:transform .6s cubic-bezier(.16,1,.3,1)}
      .nuda-st2-checkout-rail__summary{display:flex;justify-content:space-between;align-items:baseline;padding-top:8px;border-top:1px solid rgba(255,255,255,.06);font-size:11px;color:#a0a0a8}
      .nuda-st2-checkout-rail__summary strong{color:#fafafa;font-size:14px}
      @media(prefers-reduced-motion:reduce){.nuda-st2-checkout-rail__bar span{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-st2-checkout-rail">
  <ol class="nuda-st2-checkout-rail__steps">
    <li class="is-done">Cart</li>
    <li class="is-active" aria-current="step">Shipping</li>
    <li>Payment</li>
  </ol>
  <div class="nuda-st2-checkout-rail__bar">
    <span style="transform: scaleX(0.5)"></span>
  </div>
  <div class="nuda-st2-checkout-rail__summary">
    <span>Order total</span>
    <strong>$84.00</strong>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Skippable Steps ─────────────── */
  {
    id: "st2-skip-optional",
    name: "Skippable Optional Steps",
    category: CAT,
    preview: (
      <ol className="nuda-st2-skip-optional">
        <li className="is-done">
          <span className="nuda-st2-skip-optional__dot">✓</span>
          <span>Profile photo</span>
        </li>
        <li className="is-active is-optional" aria-current="step">
          <span className="nuda-st2-skip-optional__dot">2</span>
          <span>Add teammates<em>optional</em></span>
          <button type="button">Skip</button>
        </li>
        <li>
          <span className="nuda-st2-skip-optional__dot">3</span>
          <span>Finish</span>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-st2-skip-optional{list-style:none;margin:0;padding:0;width:100%;max-width:300px;display:flex;flex-direction:column;gap:12px}
      .nuda-st2-skip-optional li{display:flex;align-items:center;gap:10px;font-size:12px;color:#a0a0a8}
      .nuda-st2-skip-optional__dot{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:#a0a0a8;font-size:11px;font-weight:700}
      .nuda-st2-skip-optional li.is-done .nuda-st2-skip-optional__dot{background:#e4ff54;border-color:#e4ff54;color:#09090b}
      .nuda-st2-skip-optional li.is-active .nuda-st2-skip-optional__dot{border-color:#e4ff54;color:#e4ff54}
      .nuda-st2-skip-optional li.is-active{color:#fafafa}
      .nuda-st2-skip-optional em{font-style:normal;color:#777;font-size:9.5px;text-transform:uppercase;letter-spacing:.05em;margin-left:6px;border:1px solid rgba(255,255,255,.14);border-radius:99px;padding:2px 6px}
      .nuda-st2-skip-optional button{margin-left:auto;min-height:32px;padding:0 12px;background:transparent;color:#a0a0a8;border:1px solid rgba(255,255,255,.14);border-radius:8px;font-size:11px;cursor:pointer;transition:color .2s,border-color .2s}
      .nuda-st2-skip-optional button:hover{color:#fafafa;border-color:rgba(255,255,255,.3)}
      .nuda-st2-skip-optional button:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-st2-skip-optional *{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ol class="nuda-st2-skip-optional">
  <li class="is-done">
    <span class="nuda-st2-skip-optional__dot">✓</span>
    <span>Profile photo</span>
  </li>
  <li class="is-active is-optional" aria-current="step">
    <span class="nuda-st2-skip-optional__dot">2</span>
    <span>Add teammates<em>optional</em></span>
    <button type="button">Skip</button>
  </li>
  <li>
    <span class="nuda-st2-skip-optional__dot">3</span>
    <span>Finish</span>
  </li>
</ol>`,
      },
    ],
  },

  /* ─────────────── 7. Self-Drawing Connector ─────────────── */
  {
    id: "st2-line-draw",
    name: "Self-Drawing Connector Stepper",
    category: CAT,
    preview: (
      <div className="nuda-st2-line-draw">
        <div className="nuda-st2-line-draw__track">
          <span className="nuda-st2-line-draw__fill" />
        </div>
        <div className="nuda-st2-line-draw__nodes">
          <span className="is-done">1</span>
          <span className="is-done">2</span>
          <span className="is-active" aria-current="step">3</span>
          <span>4</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-st2-line-draw{width:100%;max-width:280px;padding:14px 0 4px}
      .nuda-st2-line-draw__track{position:relative;height:2px;margin:0 15px;background:rgba(255,255,255,.08)}
      .nuda-st2-line-draw__fill{position:absolute;inset:0;background:#e4ff54;transform-origin:left;transform:scaleX(0);animation:_nuda-st2linedraw-grow 1.4s cubic-bezier(.16,1,.3,1) .1s forwards}
      .nuda-st2-line-draw__nodes{display:flex;justify-content:space-between;margin-top:-15px}
      .nuda-st2-line-draw__nodes span{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#0c0c10;border:2px solid rgba(255,255,255,.12);color:#a0a0a8;font-size:11px;font-weight:700;transition:border-color .3s,color .3s,background .3s}
      .nuda-st2-line-draw__nodes span.is-done{border-color:#e4ff54;background:#e4ff54;color:#09090b}
      .nuda-st2-line-draw__nodes span.is-active{border-color:#e4ff54;color:#e4ff54}
      @keyframes _nuda-st2linedraw-grow{to{transform:scaleX(.66)}}
      @media(prefers-reduced-motion:reduce){.nuda-st2-line-draw__fill{animation:none;transform:scaleX(.66)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-st2-line-draw">
  <div class="nuda-st2-line-draw__track">
    <span class="nuda-st2-line-draw__fill"></span>
  </div>
  <div class="nuda-st2-line-draw__nodes">
    <span class="is-done">1</span>
    <span class="is-done">2</span>
    <span class="is-active" aria-current="step">3</span>
    <span>4</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Wizard Footer With Gated Next ─────────────── */
  {
    id: "st2-footer-gate",
    name: "Wizard Footer Gated Next",
    category: CAT,
    preview: (
      <div className="nuda-st2-footer-gate">
        <div className="nuda-st2-footer-gate__body">
          <p>Step 3 of 4 — Review your plan</p>
        </div>
        <div className="nuda-st2-footer-gate__bar">
          <button type="button" className="nuda-st2-footer-gate__back">Back</button>
          <button type="button" className="nuda-st2-footer-gate__skip">Save &amp; exit</button>
          <button type="button" className="nuda-st2-footer-gate__next" disabled aria-disabled="true">
            Next
            <span className="nuda-st2-footer-gate__hint">Accept terms to continue</span>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-st2-footer-gate{width:100%;max-width:320px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;overflow:hidden}
      .nuda-st2-footer-gate__body{padding:16px}
      .nuda-st2-footer-gate__body p{margin:0;color:#a0a0a8;font-size:12px}
      .nuda-st2-footer-gate__bar{display:flex;align-items:center;gap:8px;padding:10px 12px;border-top:1px solid rgba(255,255,255,.06)}
      .nuda-st2-footer-gate__bar button{min-height:40px;padding:0 14px;border-radius:8px;font-size:11.5px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s,opacity .2s}
      .nuda-st2-footer-gate__back{background:transparent;border:1px solid rgba(255,255,255,.14);color:#a0a0a8}
      .nuda-st2-footer-gate__back:hover{color:#fafafa;border-color:rgba(255,255,255,.3)}
      .nuda-st2-footer-gate__skip{background:transparent;border:0;color:#777;margin-right:auto;text-decoration:underline;text-underline-offset:2px}
      .nuda-st2-footer-gate__skip:hover{color:#a0a0a8}
      .nuda-st2-footer-gate__next{position:relative;background:#e4ff54;border:0;color:#09090b}
      .nuda-st2-footer-gate__next:not([disabled]):hover{filter:brightness(1.08);transform:translateY(-1px)}
      .nuda-st2-footer-gate__next[disabled]{opacity:.35;cursor:not-allowed}
      .nuda-st2-footer-gate__hint{position:absolute;bottom:calc(100% + 6px);right:0;white-space:nowrap;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);color:#a0a0a8;font-size:10px;font-weight:500;padding:5px 8px;border-radius:6px;opacity:0;transform:translateY(3px);pointer-events:none;transition:opacity .2s,transform .2s}
      .nuda-st2-footer-gate__next[disabled]:hover .nuda-st2-footer-gate__hint{opacity:1;transform:translateY(0)}
      .nuda-st2-footer-gate__bar button:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-st2-footer-gate__bar button{transition:opacity .15s linear}.nuda-st2-footer-gate__hint{transition:opacity .15s linear}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-st2-footer-gate">
  <div class="nuda-st2-footer-gate__body">
    <p>Step 3 of 4 — Review your plan</p>
  </div>
  <div class="nuda-st2-footer-gate__bar">
    <button type="button" class="nuda-st2-footer-gate__back">Back</button>
    <button type="button" class="nuda-st2-footer-gate__skip">Save &amp; exit</button>
    <button type="button" class="nuda-st2-footer-gate__next" disabled aria-disabled="true">
      Next
      <span class="nuda-st2-footer-gate__hint">Accept terms to continue</span>
    </button>
  </div>
</div>`,
      },
    ],
  },
];
