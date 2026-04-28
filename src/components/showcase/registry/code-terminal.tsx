import type { NudaComponent } from "./types";

export const codeTerminal: NudaComponent[] = [
  /* ─────────────── 1. Terminal Cursor ─────────────── */
  {
    id: "terminal-cursor",
    name: "Terminal Cursor",
    category: "Code & Terminal",
    preview: (
      <div className="nuda-term">
        <span className="nuda-term__prompt">$</span>
        <span className="nuda-term__cmd">npm run dev</span>
        <span className="nuda-term__cursor" />
      </div>
    ),
    cssInline: `
      .nuda-term{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;font:500 11px ui-monospace,monospace}
      .nuda-term__prompt{color:#e4ff54;font-weight:700}
      .nuda-term__cmd{color:#fafafa}
      .nuda-term__cursor{display:inline-block;width:7px;height:13px;background:#e4ff54;animation:_tc-blink 1s steps(2) infinite;box-shadow:0 0 4px rgba(228,255,84,.5)}
      @keyframes _tc-blink{50%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Terminal Cursor — single line with prompt + blinking block cursor -->
<div class="nuda-term">
  <span class="nuda-term__prompt">$</span>
  <span class="nuda-term__cmd">npm run dev</span>
  <span class="nuda-term__cursor" aria-hidden="true"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Terminal Cursor
   Classic block cursor blinking after a command line.
   Customize: --term-accent, --term-bg */

.nuda-term {
  --term-accent: #e4ff54;
  --term-bg: #0a0a0a;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--term-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font: 500 0.875rem ui-monospace, monospace;
}

.nuda-term__prompt {
  color: var(--term-accent);
  font-weight: 700;
}

.nuda-term__cmd { color: #fafafa; }

.nuda-term__cursor {
  display: inline-block;
  width: 9px;
  height: 1.1em;
  background: var(--term-accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
  animation: nuda-term-blink 1s steps(2) infinite;
}

@keyframes nuda-term-blink { 50% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-term__cursor { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Typing Code ─────────────── */
  {
    id: "typing-code",
    name: "Typing Code",
    category: "Code & Terminal",
    preview: (
      <pre className="nuda-typer"><code><span className="nuda-typer__a">const</span> <span className="nuda-typer__b">app</span> = <span className="nuda-typer__c">create</span>()</code><span className="nuda-typer__caret" /></pre>
    ),
    cssInline: `
      .nuda-typer{margin:0;padding:8px 10px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;font:500 11px ui-monospace,monospace;color:#fafafa;width:170px;overflow:hidden;white-space:nowrap;display:flex;align-items:center}
      .nuda-typer code{display:inline-block;overflow:hidden;animation:_ty-type 3s steps(28) infinite}
      .nuda-typer__a{color:#a78bfa}
      .nuda-typer__b{color:#fbbf24}
      .nuda-typer__c{color:#e4ff54}
      .nuda-typer__caret{display:inline-block;width:1.5px;height:13px;background:#e4ff54;margin-left:1px;animation:_ty-blink 1s steps(2) infinite}
      @keyframes _ty-type{0%{width:0}80%,100%{width:100%}}
      @keyframes _ty-blink{50%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Typing Code — token-colored line with typing reveal -->
<pre class="nuda-typer"><code><span class="nuda-typer__a">const</span> <span class="nuda-typer__b">app</span> = <span class="nuda-typer__c">create</span>()</code><span class="nuda-typer__caret"></span></pre>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Typing Code
   Single line that "types" via steps() and a blinking caret.
   Customize: --ty-bg, token colors. */

.nuda-typer {
  --ty-bg: #0a0a0a;
  margin: 0;
  padding: 12px 14px;
  background: var(--ty-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font: 500 0.95rem ui-monospace, monospace;
  color: #fafafa;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.nuda-typer code {
  display: inline-block;
  overflow: hidden;
  /* Adjust steps(N) to match the number of characters in your code line. */
  animation: nuda-ty-type 3s steps(28) infinite;
}

.nuda-typer__a { color: #a78bfa; }
.nuda-typer__b { color: #fbbf24; }
.nuda-typer__c { color: #e4ff54; }

.nuda-typer__caret {
  display: inline-block;
  width: 1.5px;
  height: 1em;
  background: #e4ff54;
  margin-left: 2px;
  animation: nuda-ty-blink 1s steps(2) infinite;
}

@keyframes nuda-ty-type {
  0%        { width: 0; }
  80%, 100% { width: 100%; }
}

@keyframes nuda-ty-blink { 50% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-typer code,
  .nuda-typer__caret { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Copy Button ─────────────── */
  {
    id: "copy-button",
    name: "Copy Button",
    category: "Code & Terminal",
    preview: (
      <button className="nuda-copy" type="button" aria-label="Copy">
        <svg className="nuda-copy__copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="13" height="13" rx="2" />
          <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
        </svg>
        <svg className="nuda-copy__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12 L10 17 L20 7" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-copy{position:relative;display:flex;align-items:center;justify-content:center;width:26px;height:26px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#a1a1aa;border-radius:5px;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
      .nuda-copy:hover{background:rgba(228,255,84,.08);color:#e4ff54;border-color:rgba(228,255,84,.3)}
      .nuda-copy svg{position:absolute;width:13px;height:13px;transition:transform .3s,opacity .25s}
      .nuda-copy__check{transform:scale(0);opacity:0;color:#e4ff54;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-copy.is-copied .nuda-copy__copy{transform:scale(0);opacity:0}
      .nuda-copy.is-copied .nuda-copy__check{transform:scale(1);opacity:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Copy Button — toggle .is-copied for ~1.5s after copy succeeds -->
<button class="nuda-copy" type="button" aria-label="Copy">
  <svg class="nuda-copy__copy" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <rect x="8" y="8" width="13" height="13" rx="2" />
    <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
  </svg>
  <svg class="nuda-copy__check" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="3"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12 L10 17 L20 7" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Copy Button
   Two icons (copy / check) cross-fade on .is-copied.
   Customize: --copy-accent */

.nuda-copy {
  --copy-accent: #e4ff54;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #a1a1aa;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.nuda-copy:hover {
  background: rgba(228, 255, 84, 0.08);
  color: var(--copy-accent);
  border-color: rgba(228, 255, 84, 0.3);
}

.nuda-copy svg {
  position: absolute;
  width: 16px;
  height: 16px;
  transition: transform 0.3s, opacity 0.25s;
}

.nuda-copy__check {
  transform: scale(0);
  opacity: 0;
  color: var(--copy-accent);
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-copy.is-copied .nuda-copy__copy  { transform: scale(0); opacity: 0; }
.nuda-copy.is-copied .nuda-copy__check { transform: scale(1); opacity: 1; }`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Copy Button — copies a target's text, then flashes the check. */

(function () {
  document.querySelectorAll('.nuda-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Replace this with the text you want to copy.
      var text = btn.dataset.copy ||
                 btn.previousElementSibling?.textContent ||
                 '';

      navigator.clipboard.writeText(text).then(function () {
        btn.classList.add('is-copied');
        setTimeout(function () { btn.classList.remove('is-copied'); }, 1500);
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. File Tree ─────────────── */
  {
    id: "file-tree",
    name: "File Tree",
    category: "Code & Terminal",
    preview: (
      <ul className="nuda-tree">
        <li className="is-folder is-open">
          <span className="nuda-tree__row">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5 L6 7.5 L9 4.5" /></svg>
            <span className="nuda-tree__icon">📁</span>src
          </span>
          <ul>
            <li><span className="nuda-tree__row"><span className="nuda-tree__icon">●</span>app.tsx</span></li>
            <li><span className="nuda-tree__row"><span className="nuda-tree__icon">●</span>main.tsx</span></li>
          </ul>
        </li>
        <li><span className="nuda-tree__row"><span className="nuda-tree__icon">●</span>package.json</span></li>
      </ul>
    ),
    cssInline: `
      .nuda-tree{list-style:none;padding:6px 8px;margin:0;font:500 10px ui-monospace,monospace;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;width:140px}
      .nuda-tree ul{list-style:none;padding:0 0 0 12px;margin:0;border-left:1px dashed rgba(255,255,255,.08);overflow:hidden;max-height:120px;transition:max-height .3s ease}
      .nuda-tree li:not(.is-open):not(:has(>ul)) ul,.nuda-tree li:not(.is-open) ul{max-height:0}
      .nuda-tree__row{display:flex;align-items:center;gap:4px;padding:2px 4px;color:#a1a1aa;border-radius:3px;cursor:pointer;transition:background .2s,color .2s}
      .nuda-tree__row:hover{background:rgba(228,255,84,.06);color:#fafafa}
      .nuda-tree__row svg{width:8px;height:8px;color:#63636e;transition:transform .25s}
      .nuda-tree__icon{display:inline-flex;align-items:center;justify-content:center;width:11px;color:#e4ff54;font-size:8px}
      .is-folder.is-open>.nuda-tree__row svg{transform:rotate(0deg)}
      .is-folder:not(.is-open)>.nuda-tree__row svg{transform:rotate(-90deg)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- File Tree — toggle .is-open on folders to expand/collapse -->
<ul class="nuda-tree">
  <li class="is-folder is-open">
    <span class="nuda-tree__row">
      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 4.5 L6 7.5 L9 4.5" />
      </svg>
      <span class="nuda-tree__icon">📁</span>src
    </span>
    <ul>
      <li><span class="nuda-tree__row"><span class="nuda-tree__icon">●</span>app.tsx</span></li>
      <li><span class="nuda-tree__row"><span class="nuda-tree__icon">●</span>main.tsx</span></li>
    </ul>
  </li>
  <li>
    <span class="nuda-tree__row"><span class="nuda-tree__icon">●</span>package.json</span>
  </li>
</ul>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File Tree
   Collapsible tree with rotating chevron + dashed connectors.
   Customize: --tree-accent, --tree-bg */

.nuda-tree {
  --tree-accent: #e4ff54;
  --tree-bg: #0a0a0a;
  list-style: none;
  padding: 10px 12px;
  margin: 0;
  font: 500 0.85rem ui-monospace, monospace;
  background: var(--tree-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  width: 100%;
  max-width: 280px;
}

.nuda-tree ul {
  list-style: none;
  padding: 0 0 0 16px;
  margin: 0;
  border-left: 1px dashed rgba(255, 255, 255, 0.08);
  overflow: hidden;
  max-height: 200px;
  transition: max-height 0.3s ease;
}

.nuda-tree li:not(.is-open) > ul { max-height: 0; }

.nuda-tree__row {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 6px;
  color: #a1a1aa;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.nuda-tree__row:hover {
  background: rgba(228, 255, 84, 0.06);
  color: #fafafa;
}

.nuda-tree__row svg {
  width: 10px;
  height: 10px;
  color: #63636e;
  transition: transform 0.25s;
}

.nuda-tree__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  color: var(--tree-accent);
  font-size: 0.6rem;
}

.is-folder.is-open  > .nuda-tree__row svg { transform: rotate(0deg); }
.is-folder:not(.is-open) > .nuda-tree__row svg { transform: rotate(-90deg); }

@media (prefers-reduced-motion: reduce) {
  .nuda-tree ul,
  .nuda-tree__row svg { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Tab Bar ─────────────── */
  {
    id: "tab-bar",
    name: "Tab Bar",
    category: "Code & Terminal",
    preview: (
      <div className="nuda-tabs">
        <span className="nuda-tabs__tab is-active">app.tsx<i>×</i></span>
        <span className="nuda-tabs__tab">utils.ts<i>×</i></span>
        <span className="nuda-tabs__tab">readme.md<i>×</i></span>
      </div>
    ),
    cssInline: `
      .nuda-tabs{display:inline-flex;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px 6px 0 0;padding:3px 3px 0;gap:2px}
      .nuda-tabs__tab{display:inline-flex;align-items:center;gap:5px;padding:4px 8px;background:transparent;color:#a1a1aa;font:500 10px ui-monospace,monospace;border-radius:4px 4px 0 0;cursor:pointer;transition:background .2s,color .2s;position:relative}
      .nuda-tabs__tab:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-tabs__tab.is-active{background:rgba(228,255,84,.08);color:#fafafa}
      .nuda-tabs__tab.is-active::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:1.5px;background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.5)}
      .nuda-tabs__tab i{display:inline-flex;align-items:center;justify-content:center;width:11px;height:11px;color:#63636e;font-style:normal;font-size:11px;line-height:1;border-radius:2px;transition:background .2s,color .2s}
      .nuda-tabs__tab i:hover{background:rgba(255,99,99,.15);color:#ff6363}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tab Bar — file tabs with close buttons; toggle .is-active -->
<div class="nuda-tabs">
  <span class="nuda-tabs__tab is-active">app.tsx<i>×</i></span>
  <span class="nuda-tabs__tab">utils.ts<i>×</i></span>
  <span class="nuda-tabs__tab">readme.md<i>×</i></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tab Bar
   Editor-style file tabs with active underline + per-tab close button.
   Customize: --tabs-accent, --tabs-bg */

.nuda-tabs {
  --tabs-accent: #e4ff54;
  --tabs-bg: #0a0a0a;
  display: inline-flex;
  background: var(--tabs-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px 8px 0 0;
  padding: 4px 4px 0;
  gap: 2px;
}

.nuda-tabs__tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: transparent;
  color: #a1a1aa;
  font: 500 0.85rem ui-monospace, monospace;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  position: relative;
}

.nuda-tabs__tab:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
}

.nuda-tabs__tab.is-active {
  background: rgba(228, 255, 84, 0.08);
  color: #fafafa;
}

.nuda-tabs__tab.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background: var(--tabs-accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
}

.nuda-tabs__tab i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  color: #63636e;
  font-style: normal;
  font-size: 0.95rem;
  line-height: 1;
  border-radius: 3px;
  transition: background 0.2s, color 0.2s;
}

.nuda-tabs__tab i:hover {
  background: rgba(255, 99, 99, 0.15);
  color: #ff6363;
}`,
      },
    ],
  },

  /* ─────────────── 6. Syntax Reveal ─────────────── */
  {
    id: "syntax-reveal",
    name: "Syntax Reveal",
    category: "Code & Terminal",
    preview: (
      <pre className="nuda-syn">
        <code>
          <span className="nuda-syn__line" style={{ ["--d" as string]: "0s" }}><i>1</i><span className="nuda-syn__a">import</span> <span className="nuda-syn__b">React</span></span>
          <span className="nuda-syn__line" style={{ ["--d" as string]: ".15s" }}><i>2</i><span className="nuda-syn__a">function</span> <span className="nuda-syn__c">App</span>() {"{"}</span>
          <span className="nuda-syn__line" style={{ ["--d" as string]: ".3s" }}><i>3</i>{"  "}return &lt;<span className="nuda-syn__d">div</span>/&gt;</span>
          <span className="nuda-syn__line" style={{ ["--d" as string]: ".45s" }}><i>4</i>{"}"}</span>
        </code>
      </pre>
    ),
    cssInline: `
      .nuda-syn{margin:0;padding:6px 6px 6px 0;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;font:500 10px ui-monospace,monospace;color:#fafafa;width:170px;overflow:hidden;line-height:1.5}
      .nuda-syn code{display:flex;flex-direction:column}
      .nuda-syn__line{display:flex;align-items:center;gap:6px;padding:0 4px;opacity:0;transform:translateX(-6px);animation:_sy-in .4s cubic-bezier(.4,0,.2,1) var(--d) forwards}
      .nuda-syn__line i{display:inline-flex;justify-content:flex-end;width:14px;color:#63636e;font-style:normal;font-size:9px;flex-shrink:0;border-right:1px solid rgba(255,255,255,.06);padding-right:3px}
      .nuda-syn__a{color:#a78bfa}
      .nuda-syn__b{color:#fbbf24}
      .nuda-syn__c{color:#e4ff54}
      .nuda-syn__d{color:#38bdf8}
      @keyframes _sy-in{to{opacity:1;transform:translateX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Syntax Reveal — code lines fade-slide in one by one -->
<pre class="nuda-syn">
  <code>
    <span class="nuda-syn__line" style="--d: 0s"><i>1</i><span class="nuda-syn__a">import</span> <span class="nuda-syn__b">React</span></span>
    <span class="nuda-syn__line" style="--d: .15s"><i>2</i><span class="nuda-syn__a">function</span> <span class="nuda-syn__c">App</span>() {</span>
    <span class="nuda-syn__line" style="--d: .3s"><i>3</i>  return &lt;<span class="nuda-syn__d">div</span>/&gt;</span>
    <span class="nuda-syn__line" style="--d: .45s"><i>4</i>}</span>
  </code>
</pre>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Syntax Reveal
   Lines fade-slide in with a stagger driven by the inline --d.
   Customize: --syn-bg, token colors. */

.nuda-syn {
  --syn-bg: #0a0a0a;
  margin: 0;
  padding: 12px 12px 12px 0;
  background: var(--syn-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font: 500 0.85rem ui-monospace, monospace;
  color: #fafafa;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  line-height: 1.6;
}

.nuda-syn code {
  display: flex;
  flex-direction: column;
}

.nuda-syn__line {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
  opacity: 0;
  transform: translateX(-8px);
  animation: nuda-syn-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) forwards;
}

.nuda-syn__line i {
  display: inline-flex;
  justify-content: flex-end;
  width: 22px;
  color: #63636e;
  font-style: normal;
  font-size: 0.75rem;
  flex-shrink: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  padding-right: 6px;
}

.nuda-syn__a { color: #a78bfa; }
.nuda-syn__b { color: #fbbf24; }
.nuda-syn__c { color: #e4ff54; }
.nuda-syn__d { color: #38bdf8; }

@keyframes nuda-syn-in {
  to { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-syn__line { animation: none; opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Error Squiggle ─────────────── */
  {
    id: "error-squiggle",
    name: "Error Squiggle",
    category: "Code & Terminal",
    preview: (
      <pre className="nuda-sq">
        <code>const x = <span className="nuda-sq__err">undefned</span></code>
      </pre>
    ),
    cssInline: `
      .nuda-sq{margin:0;padding:8px 10px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;font:500 11px ui-monospace,monospace;color:#fafafa;width:150px}
      .nuda-sq__err{position:relative;color:#fafafa;text-decoration:underline wavy #ff6363;text-decoration-skip-ink:none;text-underline-offset:3px;cursor:pointer;animation:_sq-pulse 2s ease-in-out infinite}
      .nuda-sq__err::after{content:"unknown identifier";position:absolute;left:0;top:-22px;padding:2px 5px;background:#ff6363;color:#fafafa;font:600 9px ui-sans-serif,system-ui;border-radius:3px;white-space:nowrap;opacity:0;transform:translateY(2px);transition:opacity .2s,transform .2s;pointer-events:none}
      .nuda-sq__err:hover::after{opacity:1;transform:translateY(0)}
      @keyframes _sq-pulse{0%,100%{text-decoration-color:#ff6363}50%{text-decoration-color:rgba(255,99,99,.5)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Error Squiggle — IDE-style red wavy underline + tooltip on hover -->
<pre class="nuda-sq">
  <code>const x = <span class="nuda-sq__err" data-msg="unknown identifier">undefned</span></code>
</pre>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Error Squiggle
   Wavy underline (CSS text-decoration:wavy) on a token + hover tooltip.
   Customize: --sq-danger, the tooltip text via the ::after content. */

.nuda-sq {
  --sq-danger: #ff6363;
  margin: 0;
  padding: 12px 14px;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font: 500 0.95rem ui-monospace, monospace;
  color: #fafafa;
}

.nuda-sq__err {
  position: relative;
  color: #fafafa;
  text-decoration: underline wavy var(--sq-danger);
  text-decoration-skip-ink: none;
  text-underline-offset: 4px;
  cursor: pointer;
  animation: nuda-sq-pulse 2s ease-in-out infinite;
}

.nuda-sq__err::after {
  content: attr(data-msg);
  position: absolute;
  left: 0;
  top: -28px;
  padding: 4px 8px;
  background: var(--sq-danger);
  color: #fafafa;
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(2px);
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
}

.nuda-sq__err:hover::after {
  opacity: 1;
  transform: translateY(0);
}

@keyframes nuda-sq-pulse {
  0%, 100% { text-decoration-color: var(--sq-danger); }
  50%      { text-decoration-color: rgba(255, 99, 99, 0.5); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sq__err { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Run Button ─────────────── */
  {
    id: "run-button",
    name: "Run Button",
    category: "Code & Terminal",
    preview: (
      <button className="nuda-run is-running" type="button">
        <span className="nuda-run__icon">
          <svg className="nuda-run__play" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5 L19 12 L8 19 Z" />
          </svg>
          <span className="nuda-run__spinner" />
        </span>
        <span className="nuda-run__label">Run</span>
      </button>
    ),
    cssInline: `
      .nuda-run{display:inline-flex;align-items:center;gap:6px;padding:5px 10px 5px 7px;background:#e4ff54;border:none;border-radius:6px;color:#09090b;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-run:hover{transform:translateY(-1px);box-shadow:0 0 16px rgba(228,255,84,.4)}
      .nuda-run__icon{position:relative;width:18px;height:18px;display:flex;align-items:center;justify-content:center;background:rgba(9,9,11,.15);border-radius:4px;flex-shrink:0}
      .nuda-run__play{width:9px;height:9px;margin-left:1px;transition:opacity .2s,transform .2s}
      .nuda-run__spinner{position:absolute;width:11px;height:11px;border:1.5px solid rgba(9,9,11,.2);border-top-color:#09090b;border-radius:50%;opacity:0;animation:_rn-spin 1s linear infinite}
      .nuda-run.is-running .nuda-run__play{opacity:0;transform:scale(.4)}
      .nuda-run.is-running .nuda-run__spinner{opacity:1}
      @keyframes _rn-spin{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Run Button — toggle .is-running while the task is in progress -->
<button class="nuda-run" type="button">
  <span class="nuda-run__icon">
    <svg class="nuda-run__play" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5 L19 12 L8 19 Z" />
    </svg>
    <span class="nuda-run__spinner"></span>
  </span>
  <span class="nuda-run__label">Run</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Run Button
   Play icon swaps for a spinner while .is-running.
   Customize: --run-bg, --run-fg */

.nuda-run {
  --run-bg: #e4ff54;
  --run-fg: #09090b;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px 7px 9px;
  background: var(--run-bg);
  border: none;
  border-radius: 7px;
  color: var(--run-fg);
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.25s;
}

.nuda-run:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.4);
}

.nuda-run__icon {
  position: relative;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(9, 9, 11, 0.15);
  border-radius: 5px;
  flex-shrink: 0;
}

.nuda-run__play {
  width: 11px;
  height: 11px;
  margin-left: 1px;
  transition: opacity 0.2s, transform 0.2s;
}

.nuda-run__spinner {
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1.5px solid rgba(9, 9, 11, 0.2);
  border-top-color: var(--run-fg);
  border-radius: 50%;
  opacity: 0;
  animation: nuda-run-spin 1s linear infinite;
}

.nuda-run.is-running .nuda-run__play    { opacity: 0; transform: scale(0.4); }
.nuda-run.is-running .nuda-run__spinner { opacity: 1; }

@keyframes nuda-run-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-run__spinner { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Command Output ─────────────── */
  {
    id: "command-output",
    name: "Command Output",
    category: "Code & Terminal",
    preview: (
      <div className="nuda-cout">
        <div className="nuda-cout__line nuda-cout__line--cmd" style={{ ["--d" as string]: "0s" }}><b>$</b> npm test</div>
        <div className="nuda-cout__line" style={{ ["--d" as string]: ".4s" }}><i>✓</i> 28 tests passed</div>
        <div className="nuda-cout__line" style={{ ["--d" as string]: ".8s" }}><i className="is-warn">!</i> 3 warnings</div>
        <div className="nuda-cout__line" style={{ ["--d" as string]: "1.2s" }}><b>$</b> <span className="nuda-cout__caret" /></div>
      </div>
    ),
    cssInline: `
      .nuda-cout{padding:8px 10px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;font:500 10px ui-monospace,monospace;color:#fafafa;display:flex;flex-direction:column;gap:2px;width:170px}
      .nuda-cout__line{display:flex;align-items:center;gap:5px;opacity:0;animation:_co-up .4s cubic-bezier(.4,0,.2,1) var(--d) forwards}
      .nuda-cout__line b{color:#e4ff54;font-weight:700}
      .nuda-cout__line i{font-style:normal;color:#e4ff54}
      .nuda-cout__line i.is-warn{color:#fbbf24}
      .nuda-cout__caret{display:inline-block;width:6px;height:11px;background:#e4ff54;animation:_co-blink 1s steps(2) infinite;animation-delay:1.4s}
      @keyframes _co-up{from{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _co-blink{50%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Command Output — lines stagger up; final prompt has a blinking caret -->
<div class="nuda-cout">
  <div class="nuda-cout__line nuda-cout__line--cmd" style="--d: 0s"><b>$</b> npm test</div>
  <div class="nuda-cout__line" style="--d: .4s"><i>✓</i> 28 tests passed</div>
  <div class="nuda-cout__line" style="--d: .8s"><i class="is-warn">!</i> 3 warnings</div>
  <div class="nuda-cout__line" style="--d: 1.2s">
    <b>$</b> <span class="nuda-cout__caret"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Command Output
   Terminal-style output where each line fades up after a delay.
   Customize: --co-bg, --co-accent */

.nuda-cout {
  --co-accent: #e4ff54;
  --co-bg: #0a0a0a;
  padding: 12px 14px;
  background: var(--co-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font: 500 0.85rem ui-monospace, monospace;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 480px;
}

.nuda-cout__line {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: nuda-co-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) forwards;
}

.nuda-cout__line b {
  color: var(--co-accent);
  font-weight: 700;
}

.nuda-cout__line i {
  font-style: normal;
  color: var(--co-accent);
}

.nuda-cout__line i.is-warn { color: #fbbf24; }

.nuda-cout__caret {
  display: inline-block;
  width: 8px;
  height: 1.1em;
  background: var(--co-accent);
  animation: nuda-co-blink 1s steps(2) infinite;
  animation-delay: 1.4s;
}

@keyframes nuda-co-up {
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-co-blink { 50% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-cout__line,
  .nuda-cout__caret { animation: none; opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Diff Highlight ─────────────── */
  {
    id: "diff-highlight",
    name: "Diff Highlight",
    category: "Code & Terminal",
    preview: (
      <pre className="nuda-diff">
        <code>
          <span className="nuda-diff__line is-rem"><i>-</i>const x = 1</span>
          <span className="nuda-diff__line is-add"><i>+</i>const x = 2</span>
          <span className="nuda-diff__line"><i> </i>const y = 3</span>
          <span className="nuda-diff__line is-add"><i>+</i>console.log(x)</span>
        </code>
      </pre>
    ),
    cssInline: `
      .nuda-diff{margin:0;padding:6px 0;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;font:500 10px ui-monospace,monospace;color:#fafafa;width:170px;overflow:hidden}
      .nuda-diff code{display:flex;flex-direction:column}
      .nuda-diff__line{display:flex;align-items:center;gap:6px;padding:1px 8px;color:#a1a1aa;border-left:2px solid transparent;animation:_df-in .4s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-diff__line:nth-child(1){animation-delay:0s}
      .nuda-diff__line:nth-child(2){animation-delay:.1s}
      .nuda-diff__line:nth-child(3){animation-delay:.2s}
      .nuda-diff__line:nth-child(4){animation-delay:.3s}
      .nuda-diff__line i{display:inline-flex;width:8px;color:#63636e;font-style:normal;font-weight:700;flex-shrink:0;font-size:11px}
      .nuda-diff__line.is-add{background:rgba(228,255,84,.08);border-left-color:#e4ff54;color:#fafafa}
      .nuda-diff__line.is-add i{color:#e4ff54}
      .nuda-diff__line.is-rem{background:rgba(255,99,99,.08);border-left-color:#ff6363;color:#fafafa;text-decoration:line-through;text-decoration-color:rgba(255,99,99,.4)}
      .nuda-diff__line.is-rem i{color:#ff6363}
      @keyframes _df-in{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:translateX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Diff Highlight — added/removed lines with prefix gutter -->
<pre class="nuda-diff">
  <code>
    <span class="nuda-diff__line is-rem"><i>-</i>const x = 1</span>
    <span class="nuda-diff__line is-add"><i>+</i>const x = 2</span>
    <span class="nuda-diff__line"><i> </i>const y = 3</span>
    <span class="nuda-diff__line is-add"><i>+</i>console.log(x)</span>
  </code>
</pre>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Diff Highlight
   Git-style added (+) / removed (-) lines with colored gutter accents.
   Lines fade in with a small stagger.
   Customize: --diff-add, --diff-rem, --diff-bg */

.nuda-diff {
  --diff-add: #e4ff54;
  --diff-rem: #ff6363;
  --diff-bg: #0a0a0a;
  margin: 0;
  padding: 10px 0;
  background: var(--diff-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font: 500 0.85rem ui-monospace, monospace;
  color: #fafafa;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
}

.nuda-diff code {
  display: flex;
  flex-direction: column;
}

.nuda-diff__line {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px 14px;
  color: #a1a1aa;
  border-left: 2px solid transparent;
  animation: nuda-diff-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-diff__line:nth-child(1) { animation-delay: 0s; }
.nuda-diff__line:nth-child(2) { animation-delay: 0.1s; }
.nuda-diff__line:nth-child(3) { animation-delay: 0.2s; }
.nuda-diff__line:nth-child(4) { animation-delay: 0.3s; }

.nuda-diff__line i {
  display: inline-flex;
  width: 12px;
  color: #63636e;
  font-style: normal;
  font-weight: 700;
  flex-shrink: 0;
  font-size: 0.95rem;
}

.nuda-diff__line.is-add {
  background: rgba(228, 255, 84, 0.08);
  border-left-color: var(--diff-add);
  color: #fafafa;
}
.nuda-diff__line.is-add i { color: var(--diff-add); }

.nuda-diff__line.is-rem {
  background: rgba(255, 99, 99, 0.08);
  border-left-color: var(--diff-rem);
  color: #fafafa;
  text-decoration: line-through;
  text-decoration-color: rgba(255, 99, 99, 0.4);
}
.nuda-diff__line.is-rem i { color: var(--diff-rem); }

@keyframes nuda-diff-in {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-diff__line { animation: none; }
}`,
      },
    ],
  },
];
