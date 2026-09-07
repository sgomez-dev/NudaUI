import type { NudaComponent } from "./types";

const CAT = "AI / Chat UI";

export const aiChatExtra: NudaComponent[] = [
  /* ─────────────── 1. Tool Call Card ─────────────── */
  {
    id: "ac2-tool-call-card",
    name: "Tool Call Card",
    category: CAT,
    preview: (
      <div className="nuda-ac2-toolcall">
        <div className="nuda-ac2-toolcall__head">
          <span className="nuda-ac2-toolcall__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3 A 4 4 0 0 1 8.4 12.6 L3 18 L6 21 L11.4 15.6 A 4 4 0 0 1 17.7 9.3 Z" />
            </svg>
          </span>
          <span className="nuda-ac2-toolcall__name">search_docs</span>
          <span className="nuda-ac2-toolcall__status">
            <i className="nuda-ac2-toolcall__dot" aria-hidden="true" />
            Running
          </span>
        </div>
        <details className="nuda-ac2-toolcall__args" open>
          <summary className="nuda-ac2-toolcall__summary">Arguments</summary>
          <pre className="nuda-ac2-toolcall__code">{`{ "query": "refund policy", "limit": 5 }`}</pre>
        </details>
      </div>
    ),
    cssInline: `
      .nuda-ac2-toolcall{width:300px;padding:10px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;font:12px ui-sans-serif,system-ui,sans-serif;color:#cfcfcf;box-sizing:border-box}
      .nuda-ac2-toolcall__head{display:flex;align-items:center;gap:8px}
      .nuda-ac2-toolcall__icon{width:22px;height:22px;flex:none;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.12);border-radius:6px;color:#e4ff54}
      .nuda-ac2-toolcall__icon svg{width:12px;height:12px}
      .nuda-ac2-toolcall__name{font-weight:700;color:#fafafa;font-family:ui-monospace,Menlo,monospace;font-size:12px}
      .nuda-ac2-toolcall__status{margin-left:auto;display:inline-flex;align-items:center;gap:5px;color:#777;font-size:10px;text-transform:uppercase;letter-spacing:.04em}
      .nuda-ac2-toolcall__dot{width:6px;height:6px;border-radius:50%;background:#e4ff54;flex:none;animation:_nuda-ac2toolcall 1.4s ease-in-out infinite}
      .nuda-ac2-toolcall__args{margin-top:8px}
      .nuda-ac2-toolcall__summary{cursor:pointer;color:#a1a1aa;font-size:11px;list-style:none;display:flex;align-items:center;gap:6px;min-height:20px}
      .nuda-ac2-toolcall__summary::-webkit-details-marker{display:none}
      .nuda-ac2-toolcall__summary::before{content:"";width:6px;height:6px;border-right:1.5px solid #777;border-bottom:1.5px solid #777;transform:rotate(-45deg);transition:transform .2s}
      .nuda-ac2-toolcall__args[open] .nuda-ac2-toolcall__summary::before{transform:rotate(45deg)}
      .nuda-ac2-toolcall__code{margin:6px 0 0;padding:8px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#9fe08f;font-family:ui-monospace,Menlo,monospace;font-size:11px;white-space:pre-wrap;word-break:break-word}
      @keyframes _nuda-ac2toolcall{0%,100%{opacity:.4;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-toolcall__dot{animation: none !important;opacity:1;transform:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tool Call Card — function-call in progress with collapsible arguments -->
<div class="nuda-ac2-toolcall">
  <div class="nuda-ac2-toolcall__head">
    <span class="nuda-ac2-toolcall__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3 A 4 4 0 0 1 8.4 12.6 L3 18 L6 21 L11.4 15.6 A 4 4 0 0 1 17.7 9.3 Z" />
      </svg>
    </span>
    <span class="nuda-ac2-toolcall__name">search_docs</span>
    <span class="nuda-ac2-toolcall__status">
      <i class="nuda-ac2-toolcall__dot" aria-hidden="true"></i>
      Running
    </span>
  </div>
  <details class="nuda-ac2-toolcall__args" open>
    <summary class="nuda-ac2-toolcall__summary">Arguments</summary>
    <pre class="nuda-ac2-toolcall__code">{ "query": "refund policy", "limit": 5 }</pre>
  </details>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Agent Step Trace ─────────────── */
  {
    id: "ac2-agent-steps",
    name: "Agent Step Trace",
    category: CAT,
    preview: (
      <ol className="nuda-ac2-steps" aria-label="Agent progress">
        <li className="nuda-ac2-steps__item nuda-ac2-steps__item--done">
          <span className="nuda-ac2-steps__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12 L10 18 L20 6" />
            </svg>
          </span>
          <span className="nuda-ac2-steps__label">Reading file</span>
        </li>
        <li className="nuda-ac2-steps__item nuda-ac2-steps__item--active">
          <span className="nuda-ac2-steps__icon" aria-hidden="true">
            <i className="nuda-ac2-steps__spinner" />
          </span>
          <span className="nuda-ac2-steps__label">Searching codebase</span>
        </li>
        <li className="nuda-ac2-steps__item">
          <span className="nuda-ac2-steps__icon" aria-hidden="true" />
          <span className="nuda-ac2-steps__label">Writing patch</span>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-ac2-steps{list-style:none;margin:0;padding:0;width:220px;display:flex;flex-direction:column;font:12px ui-sans-serif,system-ui,sans-serif;color:#777;box-sizing:border-box}
      .nuda-ac2-steps__item{position:relative;display:flex;align-items:center;gap:10px;padding:7px 0 7px 4px}
      .nuda-ac2-steps__item:not(:last-child)::after{content:"";position:absolute;left:12px;top:27px;bottom:-7px;width:1px;background:rgba(255,255,255,.1)}
      .nuda-ac2-steps__icon{position:relative;z-index:1;width:18px;height:18px;flex:none;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#161616;border:1px solid rgba(255,255,255,.12);color:#555}
      .nuda-ac2-steps__icon svg{width:10px;height:10px}
      .nuda-ac2-steps__item--done .nuda-ac2-steps__icon{background:#e4ff54;border-color:#e4ff54;color:#0a0a0a}
      .nuda-ac2-steps__item--active .nuda-ac2-steps__label{color:#fafafa}
      .nuda-ac2-steps__item--done .nuda-ac2-steps__label{color:#a1a1aa;text-decoration:line-through;text-decoration-color:rgba(255,255,255,.25)}
      .nuda-ac2-steps__spinner{width:10px;height:10px;border:1.5px solid rgba(228,255,84,.25);border-top-color:#e4ff54;border-radius:50%;animation:_nuda-ac2steps 0.8s linear infinite}
      @keyframes _nuda-ac2steps{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-steps__spinner{animation: none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Agent Step Trace — reading → searching → writing -->
<ol class="nuda-ac2-steps" aria-label="Agent progress">
  <li class="nuda-ac2-steps__item nuda-ac2-steps__item--done">
    <span class="nuda-ac2-steps__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12 L10 18 L20 6" />
      </svg>
    </span>
    <span class="nuda-ac2-steps__label">Reading file</span>
  </li>
  <li class="nuda-ac2-steps__item nuda-ac2-steps__item--active">
    <span class="nuda-ac2-steps__icon" aria-hidden="true">
      <i class="nuda-ac2-steps__spinner"></i>
    </span>
    <span class="nuda-ac2-steps__label">Searching codebase</span>
  </li>
  <li class="nuda-ac2-steps__item">
    <span class="nuda-ac2-steps__icon" aria-hidden="true"></span>
    <span class="nuda-ac2-steps__label">Writing patch</span>
  </li>
</ol>`,
      },
    ],
  },

  /* ─────────────── 3. Reasoning Accordion ─────────────── */
  {
    id: "ac2-reasoning-accordion",
    name: "Reasoning Accordion",
    category: CAT,
    preview: (
      <details className="nuda-ac2-reason" open>
        <summary className="nuda-ac2-reason__summary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18 L15 18 M10 21 L14 21 M12 3 A 6 6 0 0 1 15.5 13.8 L14.5 15 L9.5 15 L8.5 13.8 A 6 6 0 0 1 12 3 Z" />
          </svg>
          <span className="nuda-ac2-reason__title">Thought for 4s</span>
          <svg className="nuda-ac2-reason__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9 L12 15 L18 9" />
          </svg>
        </summary>
        <div className="nuda-ac2-reason__body">
          <p className="nuda-ac2-reason__p">Checking the user&apos;s timezone before suggesting a meeting slot, then cross-referencing calendar availability.</p>
        </div>
      </details>
    ),
    cssInline: `
      .nuda-ac2-reason{width:300px;padding:2px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-sizing:border-box;font:12px ui-sans-serif,system-ui,sans-serif}
      .nuda-ac2-reason__summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:8px;padding:8px 10px;color:#a1a1aa;min-height:22px}
      .nuda-ac2-reason__summary::-webkit-details-marker{display:none}
      .nuda-ac2-reason__summary svg{width:14px;height:14px;flex:none}
      .nuda-ac2-reason__title{color:#cfcfcf;font-style:italic}
      .nuda-ac2-reason__chevron{margin-left:auto;transition:transform .2s ease}
      .nuda-ac2-reason[open] .nuda-ac2-reason__chevron{transform:rotate(180deg)}
      .nuda-ac2-reason__body{padding:0 10px 10px 32px;animation:_nuda-ac2reason .35s ease both}
      .nuda-ac2-reason__p{margin:0;color:#777;line-height:1.5;font-size:11px}
      @keyframes _nuda-ac2reason{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-reason__body{animation: none !important}
        .nuda-ac2-reason__chevron{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Reasoning Accordion — collapsible "thinking" trace -->
<details class="nuda-ac2-reason" open>
  <summary class="nuda-ac2-reason__summary">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18 L15 18 M10 21 L14 21 M12 3 A 6 6 0 0 1 15.5 13.8 L14.5 15 L9.5 15 L8.5 13.8 A 6 6 0 0 1 12 3 Z" />
    </svg>
    <span class="nuda-ac2-reason__title">Thought for 4s</span>
    <svg class="nuda-ac2-reason__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9 L12 15 L18 9" />
    </svg>
  </summary>
  <div class="nuda-ac2-reason__body">
    <p class="nuda-ac2-reason__p">Checking the user's timezone before suggesting a meeting slot, then cross-referencing calendar availability.</p>
  </div>
</details>`,
      },
    ],
  },

  /* ─────────────── 4. Code Block Message ─────────────── */
  {
    id: "ac2-code-block-msg",
    name: "Code Block Message",
    category: CAT,
    preview: (
      <div className="nuda-ac2-codemsg">
        <div className="nuda-ac2-codemsg__bar">
          <span className="nuda-ac2-codemsg__lang">TypeScript</span>
          <button className="nuda-ac2-codemsg__copy" aria-label="Copy code" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="8" width="13" height="13" rx="2" />
              <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
            </svg>
            <span>Copy</span>
          </button>
        </div>
        <pre className="nuda-ac2-codemsg__pre"><code className="nuda-ac2-codemsg__code">const sum = (a, b) =&gt; a + b;</code></pre>
      </div>
    ),
    cssInline: `
      .nuda-ac2-codemsg{width:300px;background:#0e0e0e;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;box-sizing:border-box;font:12px ui-sans-serif,system-ui,sans-serif}
      .nuda-ac2-codemsg__bar{display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#161616;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-ac2-codemsg__lang{color:#777;font-size:11px;letter-spacing:.02em}
      .nuda-ac2-codemsg__copy{display:inline-flex;align-items:center;gap:5px;min-height:24px;padding:2px 8px;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#a1a1aa;font-size:11px;cursor:pointer;transition:color .2s,border-color .2s,background .2s}
      .nuda-ac2-codemsg__copy svg{width:11px;height:11px}
      .nuda-ac2-codemsg__copy:hover{color:#e4ff54;border-color:rgba(228,255,84,.4);background:rgba(228,255,84,.08)}
      .nuda-ac2-codemsg__pre{margin:0;padding:10px;overflow-x:auto}
      .nuda-ac2-codemsg__code{color:#cfcfcf;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;white-space:pre}
      .nuda-ac2-codemsg__code::after{content:"";display:inline-block;width:6px;height:12px;margin-left:2px;background:#e4ff54;vertical-align:-2px;animation:_nuda-ac2codemsg 1s step-end infinite}
      @keyframes _nuda-ac2codemsg{50%{opacity:0}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-codemsg__code::after{animation: none !important;opacity:1}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Code Block Message — language chip + copy button + streaming caret -->
<div class="nuda-ac2-codemsg">
  <div class="nuda-ac2-codemsg__bar">
    <span class="nuda-ac2-codemsg__lang">TypeScript</span>
    <button class="nuda-ac2-codemsg__copy" aria-label="Copy code" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <rect x="8" y="8" width="13" height="13" rx="2" />
        <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
      </svg>
      <span>Copy</span>
    </button>
  </div>
  <pre class="nuda-ac2-codemsg__pre"><code class="nuda-ac2-codemsg__code">const sum = (a, b) => a + b;</code></pre>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Streaming Markdown Table ─────────────── */
  {
    id: "ac2-streaming-table",
    name: "Streaming Markdown Table",
    category: CAT,
    preview: (
      <table className="nuda-ac2-table" aria-label="Streaming benchmark results">
        <thead>
          <tr>
            <th>Model</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nuda-ac2-table__row">
            <td>GPT</td>
            <td>92</td>
          </tr>
          <tr className="nuda-ac2-table__row">
            <td>Claude</td>
            <td>95</td>
          </tr>
          <tr className="nuda-ac2-table__row">
            <td>Gemini</td>
            <td>90</td>
          </tr>
        </tbody>
      </table>
    ),
    cssInline: `
      .nuda-ac2-table{width:300px;border-collapse:collapse;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;font:12px ui-sans-serif,system-ui,sans-serif;color:#cfcfcf}
      .nuda-ac2-table th{text-align:left;padding:8px 12px;color:#777;font-size:10px;text-transform:uppercase;letter-spacing:.04em;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-ac2-table td{padding:7px 12px;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-ac2-table__row{animation:_nuda-ac2table 3.6s ease-in-out infinite}
      .nuda-ac2-table__row:nth-child(2){animation-delay:.4s}
      .nuda-ac2-table__row:nth-child(3){animation-delay:.8s}
      @keyframes _nuda-ac2table{0%{opacity:0;transform:translateY(6px)}12%,88%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(6px)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-table__row{animation: none !important;opacity:1;transform:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Streaming Markdown Table — rows build in sequentially -->
<table class="nuda-ac2-table" aria-label="Streaming benchmark results">
  <thead>
    <tr><th>Model</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr class="nuda-ac2-table__row"><td>GPT</td><td>92</td></tr>
    <tr class="nuda-ac2-table__row"><td>Claude</td><td>95</td></tr>
    <tr class="nuda-ac2-table__row"><td>Gemini</td><td>90</td></tr>
  </tbody>
</table>`,
      },
    ],
  },

  /* ─────────────── 6. Attachment Chip Composer ─────────────── */
  {
    id: "ac2-attachment-chips",
    name: "Attachment Chip Composer",
    category: CAT,
    preview: (
      <form className="nuda-ac2-attach" aria-label="Message composer">
        <div className="nuda-ac2-attach__chips">
          <span className="nuda-ac2-attach__chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 L14 2 L19 7 L19 22 L6 22 Z" />
              <path d="M14 2 L14 7 L19 7" />
            </svg>
            <span className="nuda-ac2-attach__name">spec.pdf</span>
            <button className="nuda-ac2-attach__remove" aria-label="Remove spec.pdf" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </span>
          <span className="nuda-ac2-attach__chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 16 L9 10 L14 15 L17 12 L21 16" />
            </svg>
            <span className="nuda-ac2-attach__name">invoice.png</span>
            <button className="nuda-ac2-attach__remove" aria-label="Remove invoice.png" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </span>
        </div>
        <label className="nuda-ac2-attach__label" htmlFor="ac2-attach-input">Message</label>
        <textarea id="ac2-attach-input" className="nuda-ac2-attach__input" rows={1} placeholder="Send a message… (Enter to send, Shift+Enter for newline)" />
      </form>
    ),
    cssInline: `
      .nuda-ac2-attach{width:300px;padding:10px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:12px;box-sizing:border-box;font:12px ui-sans-serif,system-ui,sans-serif}
      .nuda-ac2-attach__chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
      .nuda-ac2-attach__chip{display:inline-flex;align-items:center;gap:6px;padding:4px 6px 4px 8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:999px;color:#cfcfcf;font-size:11px;animation:_nuda-ac2attach .3s ease both}
      .nuda-ac2-attach__chip:nth-child(2){animation-delay:.08s}
      .nuda-ac2-attach__chip svg{width:12px;height:12px;flex:none;color:#e4ff54}
      .nuda-ac2-attach__remove{display:flex;align-items:center;justify-content:center;width:16px;height:16px;flex:none;background:rgba(255,255,255,.08);border:none;border-radius:50%;color:#a1a1aa;cursor:pointer;transition:background .2s,color .2s}
      .nuda-ac2-attach__remove svg{width:8px;height:8px}
      .nuda-ac2-attach__remove:hover{background:rgba(239,68,68,.2);color:#f87171}
      .nuda-ac2-attach__label{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-ac2-attach__input{width:100%;min-height:36px;padding:8px 10px;background:#0e0e0e;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#fafafa;font:12px ui-sans-serif,system-ui,sans-serif;resize:none;box-sizing:border-box;transition:border-color .2s,box-shadow .2s}
      .nuda-ac2-attach__input::placeholder{color:#666}
      .nuda-ac2-attach__input:focus-visible{outline:none;border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.2)}
      @keyframes _nuda-ac2attach{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-attach__chip{animation: none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Attachment Chip Composer — file chips above a labelled textarea -->
<form class="nuda-ac2-attach" aria-label="Message composer">
  <div class="nuda-ac2-attach__chips">
    <span class="nuda-ac2-attach__chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 2 L14 2 L19 7 L19 22 L6 22 Z" />
        <path d="M14 2 L14 7 L19 7" />
      </svg>
      <span class="nuda-ac2-attach__name">spec.pdf</span>
      <button class="nuda-ac2-attach__remove" aria-label="Remove spec.pdf" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 6 L18 18 M18 6 L6 18" />
        </svg>
      </button>
    </span>
    <span class="nuda-ac2-attach__chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 16 L9 10 L14 15 L17 12 L21 16" />
      </svg>
      <span class="nuda-ac2-attach__name">invoice.png</span>
      <button class="nuda-ac2-attach__remove" aria-label="Remove invoice.png" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 6 L18 18 M18 6 L6 18" />
        </svg>
      </button>
    </span>
  </div>
  <label class="nuda-ac2-attach__label" for="ac2-attach-input">Message</label>
  <textarea id="ac2-attach-input" class="nuda-ac2-attach__input" rows="1"
    placeholder="Send a message… (Enter to send, Shift+Enter for newline)"></textarea>
</form>`,
      },
    ],
  },

  /* ─────────────── 7. Voice Input Waveform ─────────────── */
  {
    id: "ac2-voice-waveform",
    name: "Voice Input Waveform",
    category: CAT,
    preview: (
      <div className="nuda-ac2-voice">
        <button className="nuda-ac2-voice__btn nuda-ac2-voice__btn--active" aria-label="Stop recording" aria-pressed="true" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 11 A 7 7 0 0 0 19 11 M12 18 L12 22 M8 22 L16 22" />
          </svg>
        </button>
        <span className="nuda-ac2-voice__wave" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </span>
        <span className="nuda-ac2-voice__time">0:07</span>
      </div>
    ),
    cssInline: `
      .nuda-ac2-voice{display:inline-flex;align-items:center;gap:10px;padding:8px 14px 8px 8px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:999px;font:12px ui-sans-serif,system-ui,sans-serif}
      .nuda-ac2-voice__btn{position:relative;width:44px;height:44px;flex:none;display:flex;align-items:center;justify-content:center;background:#e4ff54;color:#0a0a0a;border:none;border-radius:50%;cursor:pointer}
      .nuda-ac2-voice__btn svg{width:18px;height:18px;position:relative;z-index:1}
      .nuda-ac2-voice__btn--active::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1.5px solid #ef4444;animation:_nuda-ac2voicering 1.6s ease-out infinite}
      .nuda-ac2-voice__wave{display:inline-flex;align-items:center;gap:3px;height:18px}
      .nuda-ac2-voice__wave i{width:3px;height:14px;background:#e4ff54;border-radius:2px;display:inline-block;transform-origin:center;animation:_nuda-ac2voice 1s ease-in-out infinite}
      .nuda-ac2-voice__wave i:nth-child(1){animation-delay:0s}
      .nuda-ac2-voice__wave i:nth-child(2){animation-delay:.12s}
      .nuda-ac2-voice__wave i:nth-child(3){animation-delay:.24s}
      .nuda-ac2-voice__wave i:nth-child(4){animation-delay:.36s}
      .nuda-ac2-voice__wave i:nth-child(5){animation-delay:.48s}
      .nuda-ac2-voice__time{color:#a1a1aa;font-variant-numeric:tabular-nums;font-size:11px}
      @keyframes _nuda-ac2voicering{0%{transform:scale(.8);opacity:.8}100%{transform:scale(1.4);opacity:0}}
      @keyframes _nuda-ac2voice{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-voice__btn--active::after{animation: none !important;opacity:.5}
        .nuda-ac2-voice__wave i{animation: none !important;transform:scaleY(.7)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Voice Input Waveform — recording mic button with live waveform -->
<div class="nuda-ac2-voice">
  <button class="nuda-ac2-voice__btn nuda-ac2-voice__btn--active" aria-label="Stop recording" aria-pressed="true" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11 A 7 7 0 0 0 19 11 M12 18 L12 22 M8 22 L16 22" />
    </svg>
  </button>
  <span class="nuda-ac2-voice__wave" aria-hidden="true">
    <i></i><i></i><i></i><i></i><i></i>
  </span>
  <span class="nuda-ac2-voice__time">0:07</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Suggested Prompt Grid ─────────────── */
  {
    id: "ac2-prompt-grid",
    name: "Suggested Prompt Grid",
    category: CAT,
    preview: (
      <div className="nuda-ac2-suggest" role="group" aria-label="Suggested prompts">
        <button className="nuda-ac2-suggest__chip" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3 L18 3 L18 21 L6 21 Z M9 8 L15 8 M9 12 L15 12 M9 16 L13 16" />
          </svg>
          <span>Summarize this doc</span>
        </button>
        <button className="nuda-ac2-suggest__chip" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 20 L8 16 L18 6 A 1.5 1.5 0 0 1 20 8 L10 18 Z M14 8 L16 10" />
          </svg>
          <span>Write a haiku</span>
        </button>
        <button className="nuda-ac2-suggest__chip" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 3 L4 7 L8 11 M16 3 L20 7 L16 11 M14 5 L10 19" />
          </svg>
          <span>Debug my code</span>
        </button>
        <button className="nuda-ac2-suggest__chip" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2 L12 6 M4.9 4.9 L7.8 7.8 M2 12 L6 12 M4.9 19.1 L7.8 16.2 M12 22 L12 18 M19.1 19.1 L16.2 16.2 M22 12 L18 12 M19.1 4.9 L16.2 7.8" />
          </svg>
          <span>Plan a trip</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-ac2-suggest{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:300px;box-sizing:border-box}
      .nuda-ac2-suggest__chip{display:flex;align-items:center;gap:8px;min-height:44px;padding:10px 12px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#cfcfcf;font:11.5px ui-sans-serif,system-ui,sans-serif;text-align:left;cursor:pointer;animation:_nuda-ac2suggest .4s ease both;transition:border-color .2s,transform .2s,background .2s}
      .nuda-ac2-suggest__chip:nth-child(1){animation-delay:0s}
      .nuda-ac2-suggest__chip:nth-child(2){animation-delay:.06s}
      .nuda-ac2-suggest__chip:nth-child(3){animation-delay:.12s}
      .nuda-ac2-suggest__chip:nth-child(4){animation-delay:.18s}
      .nuda-ac2-suggest__chip svg{width:14px;height:14px;flex:none;color:#e4ff54}
      .nuda-ac2-suggest__chip:hover{border-color:rgba(228,255,84,.4);background:rgba(228,255,84,.06);transform:translateY(-2px)}
      .nuda-ac2-suggest__chip:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ac2suggest{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-suggest__chip{animation: none !important;transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Suggested Prompt Grid — empty-conversation starter chips -->
<div class="nuda-ac2-suggest" role="group" aria-label="Suggested prompts">
  <button class="nuda-ac2-suggest__chip" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 3 L18 3 L18 21 L6 21 Z M9 8 L15 8 M9 12 L15 12 M9 16 L13 16" />
    </svg>
    <span>Summarize this doc</span>
  </button>
  <button class="nuda-ac2-suggest__chip" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 20 L8 16 L18 6 A 1.5 1.5 0 0 1 20 8 L10 18 Z M14 8 L16 10" />
    </svg>
    <span>Write a haiku</span>
  </button>
  <button class="nuda-ac2-suggest__chip" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8 3 L4 7 L8 11 M16 3 L20 7 L16 11 M14 5 L10 19" />
    </svg>
    <span>Debug my code</span>
  </button>
  <button class="nuda-ac2-suggest__chip" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2 L12 6 M4.9 4.9 L7.8 7.8 M2 12 L6 12 M4.9 19.1 L7.8 16.2 M12 22 L12 18 M19.1 19.1 L16.2 16.2 M22 12 L18 12 M19.1 4.9 L16.2 7.8" />
    </svg>
    <span>Plan a trip</span>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Response Variant Switcher ─────────────── */
  {
    id: "ac2-variant-switcher",
    name: "Response Variant Switcher",
    category: CAT,
    preview: (
      <div className="nuda-ac2-variant">
        <button className="nuda-ac2-variant__nav" aria-label="Previous response" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6 L9 12 L15 18" />
          </svg>
        </button>
        <span className="nuda-ac2-variant__count" aria-live="polite">2 / 3</span>
        <button className="nuda-ac2-variant__nav" aria-label="Next response" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6 L15 12 L9 18" />
          </svg>
        </button>
        <span className="nuda-ac2-variant__divider" aria-hidden="true" />
        <button className="nuda-ac2-variant__retry" aria-label="Regenerate response" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12 A 9 9 0 1 1 16 4.5" />
            <path d="M21 4 L21 10 L15 10" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-ac2-variant{display:inline-flex;align-items:center;gap:2px;padding:4px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:999px;font:12px ui-sans-serif,system-ui,sans-serif}
      .nuda-ac2-variant__nav,.nuda-ac2-variant__retry{display:flex;align-items:center;justify-content:center;width:28px;height:28px;background:transparent;border:none;color:#a1a1aa;border-radius:50%;cursor:pointer;transition:background .2s,color .2s}
      .nuda-ac2-variant__nav svg,.nuda-ac2-variant__retry svg{width:13px;height:13px}
      .nuda-ac2-variant__nav:hover,.nuda-ac2-variant__retry:hover{background:rgba(228,255,84,.1);color:#e4ff54}
      .nuda-ac2-variant__count{padding:0 4px;color:#cfcfcf;font-variant-numeric:tabular-nums;font-size:11px;min-width:32px;text-align:center}
      .nuda-ac2-variant__divider{width:1px;height:16px;background:rgba(255,255,255,.1);margin:0 2px}
      .nuda-ac2-variant__retry:hover svg{animation:_nuda-ac2variant .6s linear}
      @keyframes _nuda-ac2variant{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-variant__retry:hover svg{animation: none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Response Variant Switcher — retry/regenerate with "2 / 3" cycling -->
<div class="nuda-ac2-variant">
  <button class="nuda-ac2-variant__nav" aria-label="Previous response" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 6 L9 12 L15 18" />
    </svg>
  </button>
  <span class="nuda-ac2-variant__count" aria-live="polite">2 / 3</span>
  <button class="nuda-ac2-variant__nav" aria-label="Next response" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 6 L15 12 L9 18" />
    </svg>
  </button>
  <span class="nuda-ac2-variant__divider" aria-hidden="true"></span>
  <button class="nuda-ac2-variant__retry" aria-label="Regenerate response" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12 A 9 9 0 1 1 16 4.5" />
      <path d="M21 4 L21 10 L15 10" />
    </svg>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Context Window Usage Bar ─────────────── */
  {
    id: "ac2-context-usage",
    name: "Context Window Usage Bar",
    category: CAT,
    preview: (
      <div className="nuda-ac2-ctx" role="group" aria-label="Context window usage">
        <div className="nuda-ac2-ctx__head">
          <span className="nuda-ac2-ctx__label">Context window</span>
          <span className="nuda-ac2-ctx__value">48.2K / 128K</span>
        </div>
        <div className="nuda-ac2-ctx__track" role="progressbar" aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} aria-label="Tokens used, 38 percent">
          <div className="nuda-ac2-ctx__fill" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ac2-ctx{width:300px;box-sizing:border-box;font:12px ui-sans-serif,system-ui,sans-serif}
      .nuda-ac2-ctx__head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px}
      .nuda-ac2-ctx__label{color:#cfcfcf;font-size:11.5px}
      .nuda-ac2-ctx__value{color:#777;font-size:10.5px;font-variant-numeric:tabular-nums}
      .nuda-ac2-ctx__track{position:relative;width:100%;height:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:999px;overflow:hidden}
      .nuda-ac2-ctx__fill{width:38%;height:100%;border-radius:999px;background-image:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent),linear-gradient(90deg,#e4ff54,#e4ff54);background-size:40% 100%,100% 100%;background-repeat:no-repeat;background-position:-40% 0,0 0;animation:_nuda-ac2ctx 2.2s linear infinite}
      @keyframes _nuda-ac2ctx{0%{background-position:-40% 0,0 0}100%{background-position:140% 0,0 0}}
      @media (prefers-reduced-motion: reduce){
        .nuda-ac2-ctx__fill{animation: none !important;background-position:0 0,0 0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Context Window Usage Bar — token budget indicator with a live shimmer -->
<div class="nuda-ac2-ctx" role="group" aria-label="Context window usage">
  <div class="nuda-ac2-ctx__head">
    <span class="nuda-ac2-ctx__label">Context window</span>
    <span class="nuda-ac2-ctx__value">48.2K / 128K</span>
  </div>
  <div class="nuda-ac2-ctx__track" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"
       aria-label="Tokens used, 38 percent">
    <div class="nuda-ac2-ctx__fill"></div>
  </div>
</div>`,
      },
    ],
  },
];
