import type { NudaComponent } from "./types";

const CAT = "Form States";

export const formStatesExtra: NudaComponent[] = [
  /* ─────────────── 1. Username Availability Check ─────────────── */
  {
    id: "fs2-username-check",
    name: "Username Availability Check",
    category: CAT,
    preview: (
      <div className="nuda-fs2-username-check">
        <label htmlFor="fs2-uname-1" className="nuda-fs2-username-check__label">
          Username
        </label>
        <div className="nuda-fs2-username-check__field is-checking">
          <input
            id="fs2-uname-1"
            className="nuda-fs2-username-check__input"
            type="text"
            defaultValue="santi_dev"
            aria-describedby="fs2-uname-1-status"
          />
          <span className="nuda-fs2-username-check__spinner" aria-hidden="true"></span>
          <svg className="nuda-fs2-username-check__ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12 L10 17 L20 7" />
          </svg>
          <svg className="nuda-fs2-username-check__bad" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
        </div>
        <p id="fs2-uname-1-status" className="nuda-fs2-username-check__status" role="status" aria-live="polite">
          Checking availability…
        </p>
      </div>
    ),
    cssInline: `
      .nuda-fs2-username-check{width:100%;max-width:270px;display:flex;flex-direction:column;gap:6px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-username-check__label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-username-check__field{position:relative;display:flex;align-items:center}
      .nuda-fs2-username-check__input{width:100%;height:44px;padding:0 40px 0 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#fafafa;font-size:13px;box-sizing:border-box;transition:border-color .2s}
      .nuda-fs2-username-check__input:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-color:#e4ff54}
      .nuda-fs2-username-check__spinner,.nuda-fs2-username-check__ok,.nuda-fs2-username-check__bad{position:absolute;right:12px;top:50%;transform:translateY(-50%) scale(0);opacity:0;transition:transform .25s,opacity .2s}
      .nuda-fs2-username-check__spinner{width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,.15);border-top-color:#e4ff54}
      .nuda-fs2-username-check__ok{width:18px;height:18px;color:#7be08a}
      .nuda-fs2-username-check__bad{width:16px;height:16px;color:#ff8080}
      .nuda-fs2-username-check__field.is-checking .nuda-fs2-username-check__spinner{transform:translateY(-50%) scale(1);opacity:1;animation:_nuda-fs2usernamecheck-spin 1s linear infinite}
      .nuda-fs2-username-check__field.is-available .nuda-fs2-username-check__ok{transform:translateY(-50%) scale(1);opacity:1}
      .nuda-fs2-username-check__field.is-taken .nuda-fs2-username-check__bad{transform:translateY(-50%) scale(1);opacity:1}
      .nuda-fs2-username-check__field.is-available .nuda-fs2-username-check__input{border-color:#7be08a}
      .nuda-fs2-username-check__field.is-taken .nuda-fs2-username-check__input{border-color:#ff8080}
      .nuda-fs2-username-check__status{margin:0;font-size:11px;color:#777}
      @keyframes _nuda-fs2usernamecheck-spin{to{transform:translateY(-50%) rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-username-check__field.is-checking .nuda-fs2-username-check__spinner{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fs2-username-check">
  <label for="fs2-uname" class="nuda-fs2-username-check__label">Username</label>
  <div class="nuda-fs2-username-check__field is-checking">
    <input id="fs2-uname" class="nuda-fs2-username-check__input" type="text"
           value="santi_dev" aria-describedby="fs2-uname-status">
    <span class="nuda-fs2-username-check__spinner" aria-hidden="true"></span>
    <svg class="nuda-fs2-username-check__ok" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="3" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12 L10 17 L20 7" />
    </svg>
    <svg class="nuda-fs2-username-check__bad" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="3" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  </div>
  <p id="fs2-uname-status" class="nuda-fs2-username-check__status" role="status" aria-live="polite">
    Checking availability…
  </p>
</div>
<!-- JS: on input (debounced) toggle .is-checking, then swap to .is-available or
     .is-taken once the async lookup resolves, and update the status text. -->`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Username Availability Check — debounced async lookup simulation. */
(function () {
  var wrap = document.querySelector('.nuda-fs2-username-check');
  if (!wrap) return;
  var input = wrap.querySelector('.nuda-fs2-username-check__input');
  var field = wrap.querySelector('.nuda-fs2-username-check__field');
  var status = wrap.querySelector('.nuda-fs2-username-check__status');
  var timer;

  input.addEventListener('input', function () {
    clearTimeout(timer);
    field.classList.remove('is-available', 'is-taken');
    field.classList.add('is-checking');
    status.textContent = 'Checking availability…';

    timer = setTimeout(function () {
      var taken = input.value.trim().toLowerCase() === 'admin';
      field.classList.remove('is-checking');
      field.classList.add(taken ? 'is-taken' : 'is-available');
      status.textContent = taken ? 'That username is taken.' : 'Username is available.';
    }, 900);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Character Count Ring ─────────────── */
  {
    id: "fs2-char-ring",
    name: "Character Count Ring",
    category: CAT,
    preview: (
      <div className="nuda-fs2-char-ring">
        <label htmlFor="fs2-bio-1" className="nuda-fs2-char-ring__label">
          Bio
        </label>
        <div className="nuda-fs2-char-ring__field">
          <textarea
            id="fs2-bio-1"
            className="nuda-fs2-char-ring__input"
            maxLength={120}
            defaultValue="Design engineer who ships small, obsessive details."
            aria-describedby="fs2-bio-1-count"
          ></textarea>
          <svg className="nuda-fs2-char-ring__ring is-warn" viewBox="0 0 36 36" aria-hidden="true">
            <circle className="nuda-fs2-char-ring__track" cx="18" cy="18" r="15.5" />
            <circle className="nuda-fs2-char-ring__bar" cx="18" cy="18" r="15.5" />
          </svg>
        </div>
        <p id="fs2-bio-1-count" className="nuda-fs2-char-ring__count" aria-live="polite">
          92 / 120
        </p>
      </div>
    ),
    cssInline: `
      .nuda-fs2-char-ring{width:100%;max-width:270px;display:flex;flex-direction:column;gap:6px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-char-ring__label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-char-ring__field{position:relative}
      .nuda-fs2-char-ring__input{width:100%;min-height:64px;padding:10px 40px 10px 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#fafafa;font-size:12px;font-family:inherit;resize:vertical;box-sizing:border-box;transition:border-color .2s}
      .nuda-fs2-char-ring__input:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-color:#e4ff54}
      .nuda-fs2-char-ring__ring{position:absolute;right:9px;top:9px;width:22px;height:22px;transform:rotate(-90deg)}
      .nuda-fs2-char-ring__track{fill:none;stroke:rgba(255,255,255,.1);stroke-width:3}
      .nuda-fs2-char-ring__bar{fill:none;stroke:#e4ff54;stroke-width:3;stroke-linecap:round;stroke-dasharray:97.4;stroke-dashoffset:24;transition:stroke-dashoffset .3s ease,stroke .3s ease}
      .nuda-fs2-char-ring__ring.is-warn .nuda-fs2-char-ring__bar{stroke:#f5c451}
      .nuda-fs2-char-ring__ring.is-danger .nuda-fs2-char-ring__bar{stroke:#ff8080;animation:_nuda-fs2charring-pulse 1.2s ease-in-out infinite}
      .nuda-fs2-char-ring__count{margin:0;align-self:flex-end;font-size:11px;color:#777}
      @keyframes _nuda-fs2charring-pulse{0%,100%{opacity:1}50%{opacity:.55}}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-char-ring__ring.is-danger .nuda-fs2-char-ring__bar{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fs2-char-ring">
  <label for="fs2-bio" class="nuda-fs2-char-ring__label">Bio</label>
  <div class="nuda-fs2-char-ring__field">
    <textarea id="fs2-bio" class="nuda-fs2-char-ring__input" maxlength="120"
              aria-describedby="fs2-bio-count">Design engineer who ships small, obsessive details.</textarea>
    <svg class="nuda-fs2-char-ring__ring is-warn" viewBox="0 0 36 36" aria-hidden="true">
      <circle class="nuda-fs2-char-ring__track" cx="18" cy="18" r="15.5" />
      <circle class="nuda-fs2-char-ring__bar" cx="18" cy="18" r="15.5" />
    </svg>
  </div>
  <p id="fs2-bio-count" class="nuda-fs2-char-ring__count" aria-live="polite">92 / 120</p>
</div>
<!-- JS: on input, update stroke-dashoffset (circumference * (1 - remaining/max)),
     swap .is-warn past 75% and .is-danger past 92%, and update the count text. -->`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Character Count Ring — drives the ring fill + count from input length. */
(function () {
  var wrap = document.querySelector('.nuda-fs2-char-ring');
  if (!wrap) return;
  var textarea = wrap.querySelector('.nuda-fs2-char-ring__input');
  var ring = wrap.querySelector('.nuda-fs2-char-ring__ring');
  var bar = wrap.querySelector('.nuda-fs2-char-ring__bar');
  var count = wrap.querySelector('.nuda-fs2-char-ring__count');
  var max = parseInt(textarea.getAttribute('maxlength'), 10) || 120;
  var circumference = 2 * Math.PI * 15.5;

  function update() {
    var len = textarea.value.length;
    var ratio = Math.min(len / max, 1);
    bar.style.strokeDashoffset = String(circumference * (1 - ratio));
    ring.classList.remove('is-warn', 'is-danger');
    if (ratio >= 0.92) ring.classList.add('is-danger');
    else if (ratio >= 0.75) ring.classList.add('is-warn');
    count.textContent = len + ' / ' + max;
  }

  textarea.addEventListener('input', update);
  update();
})();`,
      },
    ],
  },

  /* ─────────────── 3. Auto-Growing Textarea ─────────────── */
  {
    id: "fs2-autogrow-textarea",
    name: "Auto-Growing Textarea",
    category: CAT,
    preview: (
      <div className="nuda-fs2-autogrow-textarea">
        <label htmlFor="fs2-note-1" className="nuda-fs2-autogrow-textarea__label">
          Note
        </label>
        <textarea
          id="fs2-note-1"
          className="nuda-fs2-autogrow-textarea__input"
          rows={1}
          defaultValue={"Type here — the box grows with your text.\nNo JS needed for the resize itself."}
        ></textarea>
      </div>
    ),
    cssInline: `
      .nuda-fs2-autogrow-textarea{width:100%;max-width:270px;display:flex;flex-direction:column;gap:6px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-autogrow-textarea__label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-autogrow-textarea__input{width:100%;min-height:44px;max-height:220px;padding:11px 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#fafafa;font-size:13px;font-family:inherit;line-height:1.4;box-sizing:border-box;resize:none;field-sizing:content;transition:border-color .2s,box-shadow .2s}
      .nuda-fs2-autogrow-textarea__input:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-color:#e4ff54}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-autogrow-textarea__input{transition:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- field-sizing: content (Chromium 123+) grows the box with input, no JS.
     Where unsupported it degrades to a normal fixed-size resizable textarea. -->
<div class="nuda-fs2-autogrow-textarea">
  <label for="fs2-note" class="nuda-fs2-autogrow-textarea__label">Note</label>
  <textarea id="fs2-note" class="nuda-fs2-autogrow-textarea__input" rows="1">Type here — the box grows with your text.
No JS needed for the resize itself.</textarea>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Validation Summary (:has) ─────────────── */
  {
    id: "fs2-has-summary",
    name: "Live Validation Summary",
    category: CAT,
    preview: (
      <form className="nuda-fs2-has-summary" noValidate>
        <div className="nuda-fs2-has-summary__row">
          <label htmlFor="fs2-hs-email">Email</label>
          <input id="fs2-hs-email" type="email" defaultValue="not-an-email" required aria-invalid="true" aria-describedby="fs2-hs-email-err" />
          <span id="fs2-hs-email-err" className="nuda-fs2-has-summary__err">Enter a valid email address.</span>
        </div>
        <div className="nuda-fs2-has-summary__row">
          <label htmlFor="fs2-hs-pass">Password</label>
          <input id="fs2-hs-pass" type="password" defaultValue="secret123" required minLength={8} />
        </div>
        <div className="nuda-fs2-has-summary__banner" role="status" aria-live="polite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16h.01" />
          </svg>
          <span>1 field needs your attention.</span>
        </div>
      </form>
    ),
    cssInline: `
      .nuda-fs2-has-summary{width:100%;max-width:280px;display:flex;flex-direction:column;gap:12px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-has-summary__row{display:flex;flex-direction:column;gap:5px}
      .nuda-fs2-has-summary__row label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-has-summary__row input{height:44px;padding:0 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#fafafa;font-size:13px;box-sizing:border-box;transition:border-color .2s}
      .nuda-fs2-has-summary__row input:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-fs2-has-summary__row input[aria-invalid="true"]{border-color:#ff8080}
      .nuda-fs2-has-summary__err{font-size:11px;color:#ff9d9d}
      .nuda-fs2-has-summary__banner{display:none;align-items:center;gap:8px;padding:10px 12px;border-radius:9px;background:rgba(255,128,128,.1);border:1px solid rgba(255,128,128,.3);color:#ff9d9d;font-size:12px}
      .nuda-fs2-has-summary__banner svg{width:16px;height:16px;flex-shrink:0}
      .nuda-fs2-has-summary:has(input[aria-invalid="true"]) .nuda-fs2-has-summary__banner{display:flex}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-has-summary__row input{transition:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- The banner needs zero JS: :has() reveals it whenever any input
     inside the form carries aria-invalid="true". -->
<form class="nuda-fs2-has-summary" novalidate>
  <div class="nuda-fs2-has-summary__row">
    <label for="fs2-hs-email">Email</label>
    <input id="fs2-hs-email" type="email" value="not-an-email" required
           aria-invalid="true" aria-describedby="fs2-hs-email-err">
    <span id="fs2-hs-email-err" class="nuda-fs2-has-summary__err">Enter a valid email address.</span>
  </div>
  <div class="nuda-fs2-has-summary__row">
    <label for="fs2-hs-pass">Password</label>
    <input id="fs2-hs-pass" type="password" value="secret123" required minlength="8">
  </div>
  <div class="nuda-fs2-has-summary__banner" role="status" aria-live="polite">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16h.01" />
    </svg>
    <span>1 field needs your attention.</span>
  </div>
</form>`,
      },
    ],
  },

  /* ─────────────── 5. Autosave Indicator ─────────────── */
  {
    id: "fs2-autosave",
    name: "Autosave Indicator",
    category: CAT,
    preview: (
      <div className="nuda-fs2-autosave">
        <label htmlFor="fs2-as-title" className="nuda-fs2-autosave__label">
          Document title
        </label>
        <input id="fs2-as-title" className="nuda-fs2-autosave__input" type="text" defaultValue="Q3 roadmap draft" />
        <p className="nuda-fs2-autosave__status is-saved" role="status" aria-live="polite">
          <span className="nuda-fs2-autosave__dot" aria-hidden="true"></span>
          Saved
        </p>
      </div>
    ),
    cssInline: `
      .nuda-fs2-autosave{width:100%;max-width:260px;display:flex;flex-direction:column;gap:6px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-autosave__label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-autosave__input{width:100%;height:44px;padding:0 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#fafafa;font-size:13px;box-sizing:border-box;transition:border-color .2s}
      .nuda-fs2-autosave__input:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-color:#e4ff54}
      .nuda-fs2-autosave__status{margin:0;display:inline-flex;align-items:center;gap:6px;align-self:flex-start;font-size:11px;color:#777;transition:color .2s}
      .nuda-fs2-autosave__dot{width:7px;height:7px;border-radius:50%;background:#777;flex-shrink:0;transition:background .2s,transform .2s}
      .nuda-fs2-autosave__status.is-saving{color:#f5c451}
      .nuda-fs2-autosave__status.is-saving .nuda-fs2-autosave__dot{background:#f5c451;animation:_nuda-fs2autosave-pulse 1s ease-in-out infinite}
      .nuda-fs2-autosave__status.is-saved{color:#7be08a}
      .nuda-fs2-autosave__status.is-saved .nuda-fs2-autosave__dot{background:#7be08a;transform:scale(1)}
      @keyframes _nuda-fs2autosave-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.5}}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-autosave__status.is-saving .nuda-fs2-autosave__dot{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fs2-autosave">
  <label for="fs2-as-title" class="nuda-fs2-autosave__label">Document title</label>
  <input id="fs2-as-title" class="nuda-fs2-autosave__input" type="text" value="Q3 roadmap draft">
  <p class="nuda-fs2-autosave__status is-saved" role="status" aria-live="polite">
    <span class="nuda-fs2-autosave__dot" aria-hidden="true"></span>
    Saved
  </p>
</div>
<!-- JS: on input, switch to .is-saving with text "Saving…", then after your
     debounced save resolves switch to .is-saved with text "Saved". -->`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Autosave Indicator — debounced save → status swap. */
(function () {
  var wrap = document.querySelector('.nuda-fs2-autosave');
  if (!wrap) return;
  var input = wrap.querySelector('.nuda-fs2-autosave__input');
  var status = wrap.querySelector('.nuda-fs2-autosave__status');
  var timer;

  input.addEventListener('input', function () {
    clearTimeout(timer);
    status.classList.remove('is-saved');
    status.classList.add('is-saving');
    status.lastChild.textContent = 'Saving…';

    timer = setTimeout(function () {
      status.classList.remove('is-saving');
      status.classList.add('is-saved');
      status.lastChild.textContent = 'Saved';
    }, 900);
  });
})();`,
      },
    ],
  },

  /* ─────────────── 6. Copy-to-Clipboard Field ─────────────── */
  {
    id: "fs2-copy-field",
    name: "Copy-to-Clipboard Field",
    category: CAT,
    preview: (
      <div className="nuda-fs2-copy-field">
        <label htmlFor="fs2-cf-link" className="nuda-fs2-copy-field__label">
          Share link
        </label>
        <div className="nuda-fs2-copy-field__row">
          <input id="fs2-cf-link" className="nuda-fs2-copy-field__input" type="text" readOnly defaultValue="https://nuda.dev/s/8f2ac1" />
          <button type="button" className="nuda-fs2-copy-field__btn" aria-label="Copy link">
            <svg className="nuda-fs2-copy-field__icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
            <svg className="nuda-fs2-copy-field__icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12 L10 17 L20 7" />
            </svg>
          </button>
        </div>
        <span className="nuda-fs2-copy-field__sr" role="status" aria-live="polite"></span>
      </div>
    ),
    cssInline: `
      .nuda-fs2-copy-field{width:100%;max-width:270px;display:flex;flex-direction:column;gap:6px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-copy-field__label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-copy-field__row{display:flex;gap:8px}
      .nuda-fs2-copy-field__input{flex:1;min-width:0;height:44px;padding:0 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#a0a0a8;font-size:12px;box-sizing:border-box}
      .nuda-fs2-copy-field__btn{position:relative;width:44px;height:44px;flex-shrink:0;background:#1e1e1e;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#cfcfcf;cursor:pointer;transition:background .2s,border-color .2s}
      .nuda-fs2-copy-field__btn:hover{background:#242424}
      .nuda-fs2-copy-field__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-fs2-copy-field__icon-copy,.nuda-fs2-copy-field__icon-check{position:absolute;left:50%;top:50%;width:18px;height:18px;transform:translate(-50%,-50%) scale(1);opacity:1;transition:transform .25s,opacity .2s}
      .nuda-fs2-copy-field__icon-check{transform:translate(-50%,-50%) scale(0);opacity:0;color:#7be08a}
      .nuda-fs2-copy-field__btn.is-copied{border-color:#7be08a}
      .nuda-fs2-copy-field__btn.is-copied .nuda-fs2-copy-field__icon-copy{transform:translate(-50%,-50%) scale(0);opacity:0}
      .nuda-fs2-copy-field__btn.is-copied .nuda-fs2-copy-field__icon-check{transform:translate(-50%,-50%) scale(1);opacity:1}
      .nuda-fs2-copy-field__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-copy-field__icon-copy,.nuda-fs2-copy-field__icon-check{transition:opacity .12s linear}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fs2-copy-field">
  <label for="fs2-cf-link" class="nuda-fs2-copy-field__label">Share link</label>
  <div class="nuda-fs2-copy-field__row">
    <input id="fs2-cf-link" class="nuda-fs2-copy-field__input" type="text" readonly
           value="https://nuda.dev/s/8f2ac1">
    <button type="button" class="nuda-fs2-copy-field__btn" aria-label="Copy link">
      <svg class="nuda-fs2-copy-field__icon-copy" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </svg>
      <svg class="nuda-fs2-copy-field__icon-check" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="3" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </button>
  </div>
  <span class="nuda-fs2-copy-field__sr" role="status" aria-live="polite"></span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Copy-to-Clipboard Field — copies the input value, flashes a confirm state. */
(function () {
  var wrap = document.querySelector('.nuda-fs2-copy-field');
  if (!wrap) return;
  var input = wrap.querySelector('.nuda-fs2-copy-field__input');
  var btn = wrap.querySelector('.nuda-fs2-copy-field__btn');
  var sr = wrap.querySelector('.nuda-fs2-copy-field__sr');
  var timer;

  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(input.value).then(function () {
      clearTimeout(timer);
      btn.classList.add('is-copied');
      sr.textContent = 'Link copied to clipboard.';
      timer = setTimeout(function () { btn.classList.remove('is-copied'); }, 1800);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 7. Confirm Password Match ─────────────── */
  {
    id: "fs2-confirm-match",
    name: "Confirm Password Match",
    category: CAT,
    preview: (
      <div className="nuda-fs2-confirm-match">
        <div className="nuda-fs2-confirm-match__row">
          <label htmlFor="fs2-cm-pass">Password</label>
          <input id="fs2-cm-pass" type="password" defaultValue="lime-forest-42" />
        </div>
        <div className="nuda-fs2-confirm-match__row is-match">
          <label htmlFor="fs2-cm-confirm">Confirm password</label>
          <div className="nuda-fs2-confirm-match__field">
            <input id="fs2-cm-confirm" type="password" defaultValue="lime-forest-42" aria-describedby="fs2-cm-hint" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12 L10 17 L20 7" />
            </svg>
          </div>
          <span id="fs2-cm-hint" className="nuda-fs2-confirm-match__hint" role="status" aria-live="polite">
            Passwords match.
          </span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-fs2-confirm-match{width:100%;max-width:270px;display:flex;flex-direction:column;gap:12px;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-fs2-confirm-match__row{display:flex;flex-direction:column;gap:5px}
      .nuda-fs2-confirm-match__row label{font-size:12px;font-weight:600;color:#cfcfcf}
      .nuda-fs2-confirm-match__row input{width:100%;height:44px;padding:0 12px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:9px;color:#fafafa;font-size:13px;box-sizing:border-box;transition:border-color .2s}
      .nuda-fs2-confirm-match__row input:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-fs2-confirm-match__field{position:relative}
      .nuda-fs2-confirm-match__field svg{position:absolute;right:12px;top:50%;width:16px;height:16px;transform:translateY(-50%) scale(0);opacity:0;color:#7be08a;transition:transform .2s,opacity .2s}
      .nuda-fs2-confirm-match__row.is-match .nuda-fs2-confirm-match__field input{border-color:#7be08a;padding-right:36px}
      .nuda-fs2-confirm-match__row.is-match .nuda-fs2-confirm-match__field svg{transform:translateY(-50%) scale(1);opacity:1}
      .nuda-fs2-confirm-match__row.is-mismatch .nuda-fs2-confirm-match__field input{border-color:#ff8080}
      .nuda-fs2-confirm-match__hint{font-size:11px;color:#7be08a}
      .nuda-fs2-confirm-match__row.is-mismatch .nuda-fs2-confirm-match__hint{color:#ff9d9d}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-confirm-match__field svg{transition:opacity .12s linear}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fs2-confirm-match">
  <div class="nuda-fs2-confirm-match__row">
    <label for="fs2-cm-pass">Password</label>
    <input id="fs2-cm-pass" type="password" value="lime-forest-42">
  </div>
  <div class="nuda-fs2-confirm-match__row is-match">
    <label for="fs2-cm-confirm">Confirm password</label>
    <div class="nuda-fs2-confirm-match__field">
      <input id="fs2-cm-confirm" type="password" value="lime-forest-42" aria-describedby="fs2-cm-hint">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </div>
    <span id="fs2-cm-hint" class="nuda-fs2-confirm-match__hint" role="status" aria-live="polite">
      Passwords match.
    </span>
  </div>
</div>
<!-- JS: compare the confirm field to the password field on input, toggling
     .is-match / .is-mismatch on the confirm row and updating the hint text. -->`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Confirm Password Match — live equality check between the two fields. */
(function () {
  var wrap = document.querySelector('.nuda-fs2-confirm-match');
  if (!wrap) return;
  var pass = wrap.querySelector('#fs2-cm-pass');
  var confirm = wrap.querySelector('#fs2-cm-confirm');
  var row = confirm.closest('.nuda-fs2-confirm-match__row');
  var hint = wrap.querySelector('.nuda-fs2-confirm-match__hint');

  function check() {
    if (!confirm.value) {
      row.classList.remove('is-match', 'is-mismatch');
      hint.textContent = '';
      return;
    }
    var match = confirm.value === pass.value;
    row.classList.toggle('is-match', match);
    row.classList.toggle('is-mismatch', !match);
    hint.textContent = match ? 'Passwords match.' : 'Passwords do not match.';
  }

  pass.addEventListener('input', check);
  confirm.addEventListener('input', check);
})();`,
      },
    ],
  },

  /* ─────────────── 8. Submit-to-Success Morph Button ─────────────── */
  {
    id: "fs2-submit-morph",
    name: "Submit-to-Success Morph",
    category: CAT,
    preview: (
      <form className="nuda-fs2-submit-morph">
        <button type="submit" className="nuda-fs2-submit-morph__btn is-success">
          <span className="nuda-fs2-submit-morph__label">Create account</span>
          <svg className="nuda-fs2-submit-morph__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12 L10 17 L20 7" />
          </svg>
          <span className="nuda-fs2-submit-morph__sr" role="status" aria-live="polite">Account created.</span>
        </button>
      </form>
    ),
    cssInline: `
      .nuda-fs2-submit-morph{display:inline-flex}
      .nuda-fs2-submit-morph__btn{position:relative;min-width:160px;height:46px;padding:0 24px;display:inline-flex;align-items:center;justify-content:center;background:#e4ff54;color:#09090b;border:none;border-radius:23px;font:700 13px ui-sans-serif,system-ui,sans-serif;cursor:pointer;overflow:hidden;transition:min-width .4s cubic-bezier(.65,0,.35,1),border-radius .4s,background .25s}
      .nuda-fs2-submit-morph__btn:focus-visible{outline:2px solid #fafafa;outline-offset:3px}
      .nuda-fs2-submit-morph__label{transition:opacity .2s,transform .3s}
      .nuda-fs2-submit-morph__check{position:absolute;left:50%;top:50%;width:20px;height:20px;transform:translate(-50%,-50%) scale(0) rotate(-45deg);opacity:0;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .25s}
      .nuda-fs2-submit-morph__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
      .nuda-fs2-submit-morph__btn.is-success{min-width:46px;padding:0;border-radius:50%}
      .nuda-fs2-submit-morph__btn.is-success .nuda-fs2-submit-morph__label{opacity:0;transform:scale(.7)}
      .nuda-fs2-submit-morph__btn.is-success .nuda-fs2-submit-morph__check{transform:translate(-50%,-50%) scale(1) rotate(0deg);opacity:1}
      @media (prefers-reduced-motion:reduce){.nuda-fs2-submit-morph__btn,.nuda-fs2-submit-morph__label,.nuda-fs2-submit-morph__check{transition:opacity .12s linear !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<form class="nuda-fs2-submit-morph">
  <button type="submit" class="nuda-fs2-submit-morph__btn">
    <span class="nuda-fs2-submit-morph__label">Create account</span>
    <svg class="nuda-fs2-submit-morph__check" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="3" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12 L10 17 L20 7" />
    </svg>
    <span class="nuda-fs2-submit-morph__sr" role="status" aria-live="polite"></span>
  </button>
</form>
<!-- JS: on submit, prevent default, then once your request resolves add
     .is-success to morph the pill into a round checkmark and announce it. -->`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Submit-to-Success Morph — pill button collapses into a check on success. */
(function () {
  var form = document.querySelector('.nuda-fs2-submit-morph');
  if (!form) return;
  var btn = form.querySelector('.nuda-fs2-submit-morph__btn');
  var sr = form.querySelector('.nuda-fs2-submit-morph__sr');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (btn.classList.contains('is-success')) return;

    // Simulate an async request — replace with your real submit/fetch.
    setTimeout(function () {
      btn.classList.add('is-success');
      sr.textContent = 'Account created.';
    }, 900);
  });
})();`,
      },
    ],
  },
];
