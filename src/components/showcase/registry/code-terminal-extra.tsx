import type { NudaComponent } from "./types";

const CAT = "Code & Terminal";

export const codeTerminalExtra: NudaComponent[] = [
  /* ─────────────── 1. Git Diff Panel ─────────────── */
  {
    id: "ct2-git-diff",
    name: "Git Diff Panel",
    category: CAT,
    preview: (
      <div className="nuda-ct2-git-diff">
        <div className="nuda-ct2-git-diff__head">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3 L14 8 L19 8" />
            <path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" />
          </svg>
          <span>utils.ts</span>
          <i className="nuda-ct2-git-diff__badge">+2 -1</i>
        </div>
        <div className="nuda-ct2-git-diff__hunk">@@ -12,4 +12,5 @@</div>
        <pre className="nuda-ct2-git-diff__body">
          <code>
            <span className="nuda-ct2-git-diff__row"><i className="nuda-ct2-git-diff__ln">12</i><i className="nuda-ct2-git-diff__ln">12</i><span className="nuda-ct2-git-diff__txt"> function sum(a, b) {"{"}</span></span>
            <span className="nuda-ct2-git-diff__row is-rem"><i className="nuda-ct2-git-diff__ln">13</i><i className="nuda-ct2-git-diff__ln"> </i><span className="nuda-ct2-git-diff__txt">-  return a + b</span></span>
            <span className="nuda-ct2-git-diff__row is-add"><i className="nuda-ct2-git-diff__ln"> </i><i className="nuda-ct2-git-diff__ln">13</i><span className="nuda-ct2-git-diff__txt">+  return Number(a)</span></span>
            <span className="nuda-ct2-git-diff__row is-add"><i className="nuda-ct2-git-diff__ln"> </i><i className="nuda-ct2-git-diff__ln">14</i><span className="nuda-ct2-git-diff__txt">+    + Number(b)</span></span>
            <span className="nuda-ct2-git-diff__row"><i className="nuda-ct2-git-diff__ln">14</i><i className="nuda-ct2-git-diff__ln">15</i><span className="nuda-ct2-git-diff__txt">{"}"}</span></span>
          </code>
        </pre>
      </div>
    ),
    cssInline: `
      .nuda-ct2-git-diff{width:300px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;overflow:hidden;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-ct2-git-diff__head{display:flex;align-items:center;gap:6px;padding:7px 10px;background:#161616;border-bottom:1px solid rgba(255,255,255,.08);color:#cfcfcf}
      .nuda-ct2-git-diff__head svg{width:12px;height:12px;color:#777;flex-shrink:0}
      .nuda-ct2-git-diff__badge{margin-left:auto;font-style:normal;color:#e4ff54;font-size:9px;letter-spacing:.02em}
      .nuda-ct2-git-diff__hunk{padding:4px 10px;color:#38bdf8;background:rgba(56,189,248,.06);font-size:10px}
      .nuda-ct2-git-diff__body{margin:0;padding:4px 0;overflow:hidden}
      .nuda-ct2-git-diff__body code{display:flex;flex-direction:column}
      .nuda-ct2-git-diff__row{display:flex;align-items:center;gap:0;padding:1px 10px;color:#9a9aa2;opacity:0;transform:translateX(-4px);animation:_nuda-ct2gitdiffin .35s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-ct2-git-diff__row:nth-child(1){animation-delay:0s}
      .nuda-ct2-git-diff__row:nth-child(2){animation-delay:.08s}
      .nuda-ct2-git-diff__row:nth-child(3){animation-delay:.16s}
      .nuda-ct2-git-diff__row:nth-child(4){animation-delay:.24s}
      .nuda-ct2-git-diff__row:nth-child(5){animation-delay:.32s}
      .nuda-ct2-git-diff__ln{display:inline-flex;justify-content:flex-end;width:16px;color:#4b4b52;font-style:normal;font-size:9px;flex-shrink:0;padding-right:6px}
      .nuda-ct2-git-diff__txt{white-space:pre}
      .nuda-ct2-git-diff__row.is-add{background:rgba(228,255,84,.08);color:#fafafa}
      .nuda-ct2-git-diff__row.is-add .nuda-ct2-git-diff__txt{color:#e4ff54}
      .nuda-ct2-git-diff__row.is-rem{background:rgba(255,99,99,.08);color:#fafafa}
      .nuda-ct2-git-diff__row.is-rem .nuda-ct2-git-diff__txt{color:#ff8383;text-decoration:line-through;text-decoration-color:rgba(255,99,99,.4)}
      @keyframes _nuda-ct2gitdiffin{to{opacity:1;transform:translateX(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-git-diff__row{animation:none;opacity:1;transform:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Git Diff Panel — file header, hunk marker, dual line-number gutter, +/- rows stagger in -->
<div class="nuda-ct2-git-diff">
  <div class="nuda-ct2-git-diff__head">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 3 L14 8 L19 8" />
      <path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" />
    </svg>
    <span>utils.ts</span>
    <i class="nuda-ct2-git-diff__badge">+2 -1</i>
  </div>
  <div class="nuda-ct2-git-diff__hunk">@@ -12,4 +12,5 @@</div>
  <pre class="nuda-ct2-git-diff__body">
    <code>
      <span class="nuda-ct2-git-diff__row"><i class="nuda-ct2-git-diff__ln">12</i><i class="nuda-ct2-git-diff__ln">12</i><span class="nuda-ct2-git-diff__txt"> function sum(a, b) {</span></span>
      <span class="nuda-ct2-git-diff__row is-rem"><i class="nuda-ct2-git-diff__ln">13</i><i class="nuda-ct2-git-diff__ln"> </i><span class="nuda-ct2-git-diff__txt">-  return a + b</span></span>
      <span class="nuda-ct2-git-diff__row is-add"><i class="nuda-ct2-git-diff__ln"> </i><i class="nuda-ct2-git-diff__ln">13</i><span class="nuda-ct2-git-diff__txt">+  return Number(a)</span></span>
      <span class="nuda-ct2-git-diff__row is-add"><i class="nuda-ct2-git-diff__ln"> </i><i class="nuda-ct2-git-diff__ln">14</i><span class="nuda-ct2-git-diff__txt">+    + Number(b)</span></span>
      <span class="nuda-ct2-git-diff__row"><i class="nuda-ct2-git-diff__ln">14</i><i class="nuda-ct2-git-diff__ln">15</i><span class="nuda-ct2-git-diff__txt">}</span></span>
    </code>
  </pre>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. File Tab Copy Block ─────────────── */
  {
    id: "ct2-file-copy",
    name: "File Tab Copy Block",
    category: CAT,
    preview: (
      <div className="nuda-ct2-file-copy">
        <div className="nuda-ct2-file-copy__bar">
          <span className="nuda-ct2-file-copy__file">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3 L14 8 L19 8" />
              <path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" />
            </svg>
            index.ts
          </span>
          <button className="nuda-ct2-file-copy__btn is-copied" type="button" aria-label="Copy code">
            <svg className="nuda-ct2-file-copy__icon nuda-ct2-file-copy__icon--copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="8" width="13" height="13" rx="2" />
              <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
            </svg>
            <svg className="nuda-ct2-file-copy__icon nuda-ct2-file-copy__icon--check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12 L10 17 L20 7" />
            </svg>
            <span className="nuda-ct2-file-copy__msg">Copied</span>
          </button>
        </div>
        <pre className="nuda-ct2-file-copy__code"><code><span className="nuda-ct2-file-copy__kw">export const</span> sum = (a, b) =&gt; a + b;</code></pre>
      </div>
    ),
    cssInline: `
      .nuda-ct2-file-copy{width:290px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;overflow:hidden;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-ct2-file-copy__bar{display:flex;align-items:center;gap:8px;padding:6px 8px 6px 10px;background:#161616;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-ct2-file-copy__file{display:flex;align-items:center;gap:6px;color:#cfcfcf}
      .nuda-ct2-file-copy__file svg{width:12px;height:12px;color:#e4ff54;flex-shrink:0}
      .nuda-ct2-file-copy__btn{position:relative;margin-left:auto;display:flex;align-items:center;gap:5px;min-width:44px;min-height:26px;padding:4px 8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#a1a1aa;border-radius:5px;cursor:pointer;font:600 9px ui-sans-serif,system-ui;transition:background .2s,color .2s,border-color .2s}
      .nuda-ct2-file-copy__btn:hover{background:rgba(228,255,84,.08);color:#e4ff54;border-color:rgba(228,255,84,.3)}
      .nuda-ct2-file-copy__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ct2-file-copy__icon{width:12px;height:12px;transition:transform .25s,opacity .2s}
      .nuda-ct2-file-copy__icon--check{position:absolute;left:8px;color:#e4ff54;transform:scale(0);opacity:0}
      .nuda-ct2-file-copy__msg{opacity:0;max-width:0;overflow:hidden;white-space:nowrap;transition:opacity .2s}
      .nuda-ct2-file-copy__btn.is-copied .nuda-ct2-file-copy__icon--copy{opacity:0;transform:scale(.4)}
      .nuda-ct2-file-copy__btn.is-copied .nuda-ct2-file-copy__icon--check{transform:scale(1);opacity:1;animation:_nuda-ct2filecopypop .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-ct2-file-copy__btn.is-copied .nuda-ct2-file-copy__msg{opacity:1;max-width:50px;margin-left:12px;color:#e4ff54}
      .nuda-ct2-file-copy__code{margin:0;padding:10px;color:#fafafa}
      .nuda-ct2-file-copy__kw{color:#a78bfa}
      @keyframes _nuda-ct2filecopypop{0%{transform:scale(0)}60%{transform:scale(1.25)}100%{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-file-copy__btn.is-copied .nuda-ct2-file-copy__icon--check{animation:none}
        .nuda-ct2-file-copy__icon,.nuda-ct2-file-copy__msg{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- File Tab Copy Block — filename tab bar with a copy button that swaps to a confirmed check + label -->
<div class="nuda-ct2-file-copy">
  <div class="nuda-ct2-file-copy__bar">
    <span class="nuda-ct2-file-copy__file">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 3 L14 8 L19 8" />
        <path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" />
      </svg>
      index.ts
    </span>
    <button class="nuda-ct2-file-copy__btn" type="button" aria-label="Copy code">
      <svg class="nuda-ct2-file-copy__icon nuda-ct2-file-copy__icon--copy" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="8" y="8" width="13" height="13" rx="2" />
        <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
      </svg>
      <svg class="nuda-ct2-file-copy__icon nuda-ct2-file-copy__icon--check" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
      <span class="nuda-ct2-file-copy__msg">Copied</span>
    </button>
  </div>
  <pre class="nuda-ct2-file-copy__code"><code><span class="nuda-ct2-file-copy__kw">export const</span> sum = (a, b) =&gt; a + b;</code></pre>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* File Tab Copy Block — copies the code block's text, then toggles .is-copied for ~1.6s */

(function () {
  document.querySelectorAll('.nuda-ct2-file-copy__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var block = btn.closest('.nuda-ct2-file-copy');
      var code = block ? block.querySelector('.nuda-ct2-file-copy__code') : null;
      var text = code ? code.textContent : '';

      navigator.clipboard.writeText(text).then(function () {
        btn.classList.add('is-copied');
        setTimeout(function () { btn.classList.remove('is-copied'); }, 1600);
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Package Manager Tabs ─────────────── */
  {
    id: "ct2-pkg-tabs",
    name: "Package Manager Tabs",
    category: CAT,
    preview: (
      <div className="nuda-ct2-pkg-tabs">
        <div className="nuda-ct2-pkg-tabs__tabs" role="tablist" aria-label="Package manager">
          <button className="nuda-ct2-pkg-tabs__tab is-active" type="button" role="tab" aria-selected="true">npm</button>
          <button className="nuda-ct2-pkg-tabs__tab" type="button" role="tab" aria-selected="false">pnpm</button>
          <button className="nuda-ct2-pkg-tabs__tab" type="button" role="tab" aria-selected="false">yarn</button>
          <button className="nuda-ct2-pkg-tabs__tab" type="button" role="tab" aria-selected="false">bun</button>
        </div>
        <pre className="nuda-ct2-pkg-tabs__cmd"><code><span className="nuda-ct2-pkg-tabs__prompt">$</span> npm install nuda-ui<span className="nuda-ct2-pkg-tabs__caret" /></code></pre>
      </div>
    ),
    cssInline: `
      .nuda-ct2-pkg-tabs{width:280px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;overflow:hidden;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-ct2-pkg-tabs__tabs{display:flex;background:#161616;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-ct2-pkg-tabs__tab{position:relative;flex:1;min-height:32px;padding:8px 6px;background:transparent;border:none;color:#a1a1aa;font:600 10px ui-sans-serif,system-ui;cursor:pointer;transition:background .2s,color .2s}
      .nuda-ct2-pkg-tabs__tab:hover{color:#fafafa;background:rgba(255,255,255,.04)}
      .nuda-ct2-pkg-tabs__tab:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-ct2-pkg-tabs__tab.is-active{color:#e4ff54}
      .nuda-ct2-pkg-tabs__tab.is-active::after{content:"";position:absolute;left:8px;right:8px;bottom:0;height:2px;background:#e4ff54;border-radius:2px 2px 0 0;animation:_nuda-ct2pkgtabsglow 2.4s ease-in-out infinite}
      .nuda-ct2-pkg-tabs__cmd{margin:0;padding:11px 12px;color:#fafafa}
      .nuda-ct2-pkg-tabs__prompt{color:#e4ff54;font-weight:700}
      .nuda-ct2-pkg-tabs__caret{display:inline-block;width:6px;height:11px;margin-left:2px;background:#e4ff54;vertical-align:-2px;animation:_nuda-ct2pkgtabsblink 1s steps(2) infinite}
      @keyframes _nuda-ct2pkgtabsglow{0%,100%{box-shadow:0 0 2px rgba(228,255,84,.3)}50%{box-shadow:0 0 8px rgba(228,255,84,.7)}}
      @keyframes _nuda-ct2pkgtabsblink{50%{opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-pkg-tabs__tab.is-active::after{animation:none}
        .nuda-ct2-pkg-tabs__caret{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Package Manager Tabs — switch .is-active between tabs to swap the install command -->
<div class="nuda-ct2-pkg-tabs">
  <div class="nuda-ct2-pkg-tabs__tabs" role="tablist" aria-label="Package manager">
    <button class="nuda-ct2-pkg-tabs__tab is-active" type="button" role="tab" aria-selected="true">npm</button>
    <button class="nuda-ct2-pkg-tabs__tab" type="button" role="tab" aria-selected="false">pnpm</button>
    <button class="nuda-ct2-pkg-tabs__tab" type="button" role="tab" aria-selected="false">yarn</button>
    <button class="nuda-ct2-pkg-tabs__tab" type="button" role="tab" aria-selected="false">bun</button>
  </div>
  <pre class="nuda-ct2-pkg-tabs__cmd"><code><span class="nuda-ct2-pkg-tabs__prompt">$</span> npm install nuda-ui<span class="nuda-ct2-pkg-tabs__caret"></span></code></pre>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Test Result Tally ─────────────── */
  {
    id: "ct2-test-tally",
    name: "Test Result Tally",
    category: CAT,
    preview: (
      <div className="nuda-ct2-test-tally">
        <div className="nuda-ct2-test-tally__row is-pass">
          <svg className="nuda-ct2-test-tally__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 L10 17 L20 7" />
          </svg>
          <span className="nuda-ct2-test-tally__count">
            <i>2</i>
            <span className="nuda-ct2-test-tally__reel">
              <span className="nuda-ct2-test-tally__track"><b>0</b><b>1</b><b>2</b><b>3</b><b>4</b></span>
            </span>
          </span>
          <span className="nuda-ct2-test-tally__label">passed</span>
        </div>
        <div className="nuda-ct2-test-tally__row is-fail">
          <svg className="nuda-ct2-test-tally__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
          <span className="nuda-ct2-test-tally__count">
            <i>0</i>
            <span className="nuda-ct2-test-tally__reel">
              <span className="nuda-ct2-test-tally__track nuda-ct2-test-tally__track--fail"><b>0</b><b>1</b><b>2</b></span>
            </span>
          </span>
          <span className="nuda-ct2-test-tally__label">failed</span>
        </div>
        <div className="nuda-ct2-test-tally__bar"><span className="nuda-ct2-test-tally__fill" /></div>
      </div>
    ),
    cssInline: `
      .nuda-ct2-test-tally{width:290px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:12px 14px;font:500 12px ui-monospace,SFMono-Regular,Menlo,monospace;color:#cfcfcf;display:flex;flex-direction:column;gap:8px}
      .nuda-ct2-test-tally__row{display:flex;align-items:center;gap:8px}
      .nuda-ct2-test-tally__icon{width:13px;height:13px;flex-shrink:0}
      .nuda-ct2-test-tally__row.is-pass .nuda-ct2-test-tally__icon{color:#e4ff54}
      .nuda-ct2-test-tally__row.is-fail .nuda-ct2-test-tally__icon{color:#ff6363}
      .nuda-ct2-test-tally__count{display:inline-flex;align-items:baseline;font-weight:700;color:#fafafa;min-width:28px}
      .nuda-ct2-test-tally__count i{font-style:normal}
      .nuda-ct2-test-tally__reel{display:inline-block;overflow:hidden;height:1em;width:.62em;vertical-align:baseline}
      .nuda-ct2-test-tally__track{display:flex;flex-direction:column;will-change:transform;animation:_nuda-ct2testtallypass 3s steps(5) infinite}
      .nuda-ct2-test-tally__track b{display:block;line-height:1;height:1em}
      .nuda-ct2-test-tally__track--fail{animation:_nuda-ct2testtallyfail 3s steps(3) infinite}
      .nuda-ct2-test-tally__label{color:#777}
      .nuda-ct2-test-tally__bar{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden;margin-top:2px}
      .nuda-ct2-test-tally__fill{position:absolute;inset:0;transform-origin:left;transform:scaleX(0);background:linear-gradient(90deg,#e4ff54,#38bdf8);animation:_nuda-ct2testtallyfill 1.2s cubic-bezier(.4,0,.2,1) .2s forwards}
      @keyframes _nuda-ct2testtallypass{0%{transform:translateY(0)}100%{transform:translateY(-4em)}}
      @keyframes _nuda-ct2testtallyfail{0%{transform:translateY(0)}100%{transform:translateY(-2em)}}
      @keyframes _nuda-ct2testtallyfill{to{transform:scaleX(.92)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-test-tally__track{animation:none;transform:translateY(-4em)}
        .nuda-ct2-test-tally__track--fail{transform:translateY(0)}
        .nuda-ct2-test-tally__fill{animation:none;transform:scaleX(.92)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Test Result Tally — odometer-style digit reels loop through counts, progress bar fills once -->
<div class="nuda-ct2-test-tally">
  <div class="nuda-ct2-test-tally__row is-pass">
    <svg class="nuda-ct2-test-tally__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12 L10 17 L20 7" />
    </svg>
    <span class="nuda-ct2-test-tally__count">
      <i>2</i>
      <span class="nuda-ct2-test-tally__reel">
        <span class="nuda-ct2-test-tally__track"><b>0</b><b>1</b><b>2</b><b>3</b><b>4</b></span>
      </span>
    </span>
    <span class="nuda-ct2-test-tally__label">passed</span>
  </div>
  <div class="nuda-ct2-test-tally__row is-fail">
    <svg class="nuda-ct2-test-tally__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
    <span class="nuda-ct2-test-tally__count">
      <i>0</i>
      <span class="nuda-ct2-test-tally__reel">
        <span class="nuda-ct2-test-tally__track nuda-ct2-test-tally__track--fail"><b>0</b><b>1</b><b>2</b></span>
      </span>
    </span>
    <span class="nuda-ct2-test-tally__label">failed</span>
  </div>
  <div class="nuda-ct2-test-tally__bar"><span class="nuda-ct2-test-tally__fill"></span></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Build Step List ─────────────── */
  {
    id: "ct2-build-steps",
    name: "Build Step List",
    category: CAT,
    preview: (
      <div className="nuda-ct2-build-steps">
        <div className="nuda-ct2-build-steps__row is-done" style={{ ["--d" as string]: "0s" }}>
          <span className="nuda-ct2-build-steps__dot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg>
          </span>
          <span>Install dependencies</span>
        </div>
        <div className="nuda-ct2-build-steps__row is-done" style={{ ["--d" as string]: ".12s" }}>
          <span className="nuda-ct2-build-steps__dot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg>
          </span>
          <span>Compile sources</span>
        </div>
        <div className="nuda-ct2-build-steps__row is-active" style={{ ["--d" as string]: ".24s" }}>
          <span className="nuda-ct2-build-steps__dot"><span className="nuda-ct2-build-steps__spinner" /></span>
          <span>Bundle assets</span>
        </div>
        <div className="nuda-ct2-build-steps__row" style={{ ["--d" as string]: ".36s" }}>
          <span className="nuda-ct2-build-steps__dot" />
          <span>Deploy</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ct2-build-steps{width:280px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:12px 14px;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace;color:#a1a1aa;display:flex;flex-direction:column;gap:9px}
      .nuda-ct2-build-steps__row{display:flex;align-items:center;gap:9px;opacity:0;transform:translateY(3px);animation:_nuda-ct2buildstepsin .4s cubic-bezier(.4,0,.2,1) var(--d,0s) forwards}
      .nuda-ct2-build-steps__dot{position:relative;width:14px;height:14px;flex-shrink:0;border-radius:50%;border:1.5px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
      .nuda-ct2-build-steps__dot svg{width:9px;height:9px;color:#09090b}
      .nuda-ct2-build-steps__row.is-done .nuda-ct2-build-steps__dot{background:#e4ff54;border-color:#e4ff54}
      .nuda-ct2-build-steps__row.is-done{color:#cfcfcf}
      .nuda-ct2-build-steps__row.is-active{color:#fafafa}
      .nuda-ct2-build-steps__row.is-active .nuda-ct2-build-steps__dot{border-color:#38bdf8}
      .nuda-ct2-build-steps__spinner{width:8px;height:8px;border:1.5px solid rgba(56,189,248,.25);border-top-color:#38bdf8;border-radius:50%;animation:_nuda-ct2buildstepsspin .8s linear infinite}
      @keyframes _nuda-ct2buildstepsin{to{opacity:1;transform:translateY(0)}}
      @keyframes _nuda-ct2buildstepsspin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-build-steps__row{animation:none;opacity:1;transform:none}
        .nuda-ct2-build-steps__spinner{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Build Step List — rows fade up on load; .is-done shows a lime check, .is-active shows a spinner -->
<div class="nuda-ct2-build-steps">
  <div class="nuda-ct2-build-steps__row is-done" style="--d: 0s">
    <span class="nuda-ct2-build-steps__dot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </span>
    <span>Install dependencies</span>
  </div>
  <div class="nuda-ct2-build-steps__row is-done" style="--d: .12s">
    <span class="nuda-ct2-build-steps__dot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </span>
    <span>Compile sources</span>
  </div>
  <div class="nuda-ct2-build-steps__row is-active" style="--d: .24s">
    <span class="nuda-ct2-build-steps__dot"><span class="nuda-ct2-build-steps__spinner"></span></span>
    <span>Bundle assets</span>
  </div>
  <div class="nuda-ct2-build-steps__row" style="--d: .36s">
    <span class="nuda-ct2-build-steps__dot"></span>
    <span>Deploy</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. SSH Login Sequence ─────────────── */
  {
    id: "ct2-ssh-login",
    name: "SSH Login Sequence",
    category: CAT,
    preview: (
      <div className="nuda-ct2-ssh-login">
        <div className="nuda-ct2-ssh-login__line" style={{ ["--d" as string]: "0s" }}><b>$</b> ssh deploy@nuda.dev</div>
        <div className="nuda-ct2-ssh-login__line" style={{ ["--d" as string]: ".35s" }}>Password: <span className="nuda-ct2-ssh-login__dots">••••••••</span></div>
        <div className="nuda-ct2-ssh-login__line nuda-ct2-ssh-login__line--ok" style={{ ["--d" as string]: ".7s" }}>Welcome to Ubuntu 22.04 LTS</div>
        <div className="nuda-ct2-ssh-login__line" style={{ ["--d" as string]: "1.05s" }}><b>deploy@nuda</b>:~$ <span className="nuda-ct2-ssh-login__caret" /></div>
      </div>
    ),
    cssInline: `
      .nuda-ct2-ssh-login{width:290px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:11px 13px;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace;color:#a1a1aa;display:flex;flex-direction:column;gap:4px}
      .nuda-ct2-ssh-login__line{opacity:0;transform:translateY(2px);animation:_nuda-ct2sshloginin .35s cubic-bezier(.4,0,.2,1) var(--d,0s) forwards}
      .nuda-ct2-ssh-login__line b{color:#e4ff54;font-weight:700}
      .nuda-ct2-ssh-login__line--ok{color:#fafafa}
      .nuda-ct2-ssh-login__dots{display:inline-block;letter-spacing:2px;color:#fbbf24;clip-path:inset(0 100% 0 0);animation:_nuda-ct2sshloginreveal .5s steps(8) .35s forwards}
      .nuda-ct2-ssh-login__caret{display:inline-block;width:6px;height:11px;background:#e4ff54;vertical-align:-2px;animation:_nuda-ct2sshloginblink 1s steps(2) infinite;animation-delay:1.4s}
      @keyframes _nuda-ct2sshloginin{to{opacity:1;transform:translateY(0)}}
      @keyframes _nuda-ct2sshloginreveal{to{clip-path:inset(0 0 0 0)}}
      @keyframes _nuda-ct2sshloginblink{50%{opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-ssh-login__line{animation:none;opacity:1;transform:none}
        .nuda-ct2-ssh-login__dots{animation:none;clip-path:inset(0 0 0 0)}
        .nuda-ct2-ssh-login__caret{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- SSH Login Sequence — lines fade up in order, password dots reveal via clip-path, caret blinks at the end -->
<div class="nuda-ct2-ssh-login">
  <div class="nuda-ct2-ssh-login__line" style="--d: 0s"><b>$</b> ssh deploy@nuda.dev</div>
  <div class="nuda-ct2-ssh-login__line" style="--d: .35s">Password: <span class="nuda-ct2-ssh-login__dots">••••••••</span></div>
  <div class="nuda-ct2-ssh-login__line nuda-ct2-ssh-login__line--ok" style="--d: .7s">Welcome to Ubuntu 22.04 LTS</div>
  <div class="nuda-ct2-ssh-login__line" style="--d: 1.05s">
    <b>deploy@nuda</b>:~$ <span class="nuda-ct2-ssh-login__caret"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. REPL Session ─────────────── */
  {
    id: "ct2-repl",
    name: "REPL Session",
    category: CAT,
    preview: (
      <div className="nuda-ct2-repl">
        <div className="nuda-ct2-repl__pair">
          <div className="nuda-ct2-repl__in"><span className="nuda-ct2-repl__prompt">&gt;&gt;&gt;</span> 6 * 7</div>
          <div className="nuda-ct2-repl__out" style={{ ["--d" as string]: ".3s" }}>42</div>
        </div>
        <div className="nuda-ct2-repl__pair">
          <div className="nuda-ct2-repl__in"><span className="nuda-ct2-repl__prompt">&gt;&gt;&gt;</span> [x for x in range(3)]</div>
          <div className="nuda-ct2-repl__out" style={{ ["--d" as string]: ".6s" }}>[0, 1, 2]</div>
        </div>
        <div className="nuda-ct2-repl__in nuda-ct2-repl__in--live"><span className="nuda-ct2-repl__prompt">&gt;&gt;&gt;</span> <span className="nuda-ct2-repl__caret" /></div>
      </div>
    ),
    cssInline: `
      .nuda-ct2-repl{width:280px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:11px 13px;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace;color:#fafafa;display:flex;flex-direction:column;gap:5px}
      .nuda-ct2-repl__pair{display:flex;flex-direction:column;gap:2px}
      .nuda-ct2-repl__in{color:#cfcfcf}
      .nuda-ct2-repl__prompt{color:#a78bfa;font-weight:700;margin-right:4px}
      .nuda-ct2-repl__out{color:#e4ff54;padding-left:16px;overflow:hidden;clip-path:inset(0 100% 0 0);animation:_nuda-ct2replreveal .4s steps(12) var(--d,0s) forwards}
      .nuda-ct2-repl__caret{display:inline-block;width:6px;height:11px;background:#e4ff54;vertical-align:-2px;animation:_nuda-ct2replblink 1s steps(2) infinite;animation-delay:1s}
      @keyframes _nuda-ct2replreveal{to{clip-path:inset(0 0 0 0)}}
      @keyframes _nuda-ct2replblink{50%{opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-repl__out{animation:none;clip-path:inset(0 0 0 0)}
        .nuda-ct2-repl__caret{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- REPL Session — evaluated results reveal via clip-path after each input line, live prompt blinks -->
<div class="nuda-ct2-repl">
  <div class="nuda-ct2-repl__pair">
    <div class="nuda-ct2-repl__in"><span class="nuda-ct2-repl__prompt">&gt;&gt;&gt;</span> 6 * 7</div>
    <div class="nuda-ct2-repl__out" style="--d: .3s">42</div>
  </div>
  <div class="nuda-ct2-repl__pair">
    <div class="nuda-ct2-repl__in"><span class="nuda-ct2-repl__prompt">&gt;&gt;&gt;</span> [x for x in range(3)]</div>
    <div class="nuda-ct2-repl__out" style="--d: .6s">[0, 1, 2]</div>
  </div>
  <div class="nuda-ct2-repl__in nuda-ct2-repl__in--live">
    <span class="nuda-ct2-repl__prompt">&gt;&gt;&gt;</span> <span class="nuda-ct2-repl__caret"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Stack Trace Panel ─────────────── */
  {
    id: "ct2-stack-trace",
    name: "Stack Trace Panel",
    category: CAT,
    preview: (
      <div className="nuda-ct2-stack-trace">
        <div className="nuda-ct2-stack-trace__err">TypeError: Cannot read properties of undefined</div>
        <div className="nuda-ct2-stack-trace__frame is-hl">
          <span className="nuda-ct2-stack-trace__fn">renderUser</span>
          <span className="nuda-ct2-stack-trace__loc">src/components/User.tsx:24:9</span>
        </div>
        <div className="nuda-ct2-stack-trace__frame">
          <span className="nuda-ct2-stack-trace__fn">renderList</span>
          <span className="nuda-ct2-stack-trace__loc">src/components/List.tsx:12:3</span>
        </div>
        <div className="nuda-ct2-stack-trace__frame">
          <span className="nuda-ct2-stack-trace__fn">App</span>
          <span className="nuda-ct2-stack-trace__loc">node_modules/react-dom/index.js:1</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ct2-stack-trace{width:300px;background:#09090b;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:11px 13px;font:500 11px ui-monospace,SFMono-Regular,Menlo,monospace;display:flex;flex-direction:column;gap:6px}
      .nuda-ct2-stack-trace__err{color:#ff8383;font-weight:600;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-ct2-stack-trace__frame{display:flex;justify-content:space-between;gap:8px;padding:4px 6px;border-left:2px solid transparent;border-radius:0 4px 4px 0;color:#777}
      .nuda-ct2-stack-trace__fn{color:#9a9aa2}
      .nuda-ct2-stack-trace__loc{color:#4b4b52;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-ct2-stack-trace__frame.is-hl{border-left-color:#e4ff54;background:rgba(228,255,84,.07);animation:_nuda-ct2stacktraceglow 2.2s ease-in-out infinite}
      .nuda-ct2-stack-trace__frame.is-hl .nuda-ct2-stack-trace__fn{color:#e4ff54;font-weight:700}
      .nuda-ct2-stack-trace__frame.is-hl .nuda-ct2-stack-trace__loc{color:#cfcfcf}
      @keyframes _nuda-ct2stacktraceglow{0%,100%{box-shadow:inset 0 0 0 rgba(228,255,84,0)}50%{box-shadow:inset 2px 0 8px -4px rgba(228,255,84,.7)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ct2-stack-trace__frame.is-hl{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stack Trace Panel — the app-code frame (.is-hl) is highlighted lime with a soft pulsing inset glow -->
<div class="nuda-ct2-stack-trace">
  <div class="nuda-ct2-stack-trace__err">TypeError: Cannot read properties of undefined</div>
  <div class="nuda-ct2-stack-trace__frame is-hl">
    <span class="nuda-ct2-stack-trace__fn">renderUser</span>
    <span class="nuda-ct2-stack-trace__loc">src/components/User.tsx:24:9</span>
  </div>
  <div class="nuda-ct2-stack-trace__frame">
    <span class="nuda-ct2-stack-trace__fn">renderList</span>
    <span class="nuda-ct2-stack-trace__loc">src/components/List.tsx:12:3</span>
  </div>
  <div class="nuda-ct2-stack-trace__frame">
    <span class="nuda-ct2-stack-trace__fn">App</span>
    <span class="nuda-ct2-stack-trace__loc">node_modules/react-dom/index.js:1</span>
  </div>
</div>`,
      },
    ],
  },
];
