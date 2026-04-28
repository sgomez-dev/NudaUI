import type { NudaComponent } from "./types";

export const aiChat: NudaComponent[] = [
  /* ─────────────── 1. Streaming Dots ─────────────── */
  {
    id: "streaming-dots",
    name: "Streaming Dots",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-stream-dots" role="status" aria-label="AI is thinking">
        <span className="nuda-stream-dots__avatar">AI</span>
        <span className="nuda-stream-dots__dots"><i /><i /><i /></span>
      </div>
    ),
    cssInline: `
      .nuda-stream-dots{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:999px}
      .nuda-stream-dots__avatar{width:18px;height:18px;display:flex;align-items:center;justify-content:center;background:#e4ff54;color:#09090b;font:800 8px ui-sans-serif,system-ui;border-radius:50%;letter-spacing:-.02em}
      .nuda-stream-dots__dots{display:inline-flex;gap:3px;align-items:center}
      .nuda-stream-dots__dots i{width:5px;height:5px;background:#e4ff54;border-radius:50%;opacity:.3;animation:_sd 1.4s ease-in-out infinite}
      .nuda-stream-dots__dots i:nth-child(2){animation-delay:.2s}
      .nuda-stream-dots__dots i:nth-child(3){animation-delay:.4s}
      @keyframes _sd{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Streaming Dots — "AI is thinking" indicator -->
<div class="nuda-stream-dots" role="status" aria-label="AI is thinking">
  <span class="nuda-stream-dots__avatar">AI</span>
  <span class="nuda-stream-dots__dots"><i></i><i></i><i></i></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Streaming Dots
   Compact "AI is thinking" indicator with avatar + 3 bouncing dots.
   Customize: --sd-accent, --sd-bg */

.nuda-stream-dots {
  --sd-accent: #e4ff54;
  --sd-bg: rgba(255, 255, 255, 0.04);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--sd-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 999px;
}

.nuda-stream-dots__avatar {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sd-accent);
  color: #09090b;
  font: 800 0.625rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 50%;
  letter-spacing: -0.02em;
}

.nuda-stream-dots__dots {
  display: inline-flex;
  gap: 4px;
  align-items: center;
}

.nuda-stream-dots__dots i {
  width: 6px;
  height: 6px;
  background: var(--sd-accent);
  border-radius: 50%;
  opacity: 0.3;
  animation: nuda-sd-bounce 1.4s ease-in-out infinite;
}

.nuda-stream-dots__dots i:nth-child(2) { animation-delay: 0.2s; }
.nuda-stream-dots__dots i:nth-child(3) { animation-delay: 0.4s; }

@keyframes nuda-sd-bounce {
  0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
  40%           { opacity: 1;   transform: translateY(-4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stream-dots__dots i { animation: none; opacity: 0.7; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Streaming Text ─────────────── */
  {
    id: "streaming-text",
    name: "Streaming Text",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-stream-text">
        <p>Generating a response<span className="nuda-stream-text__cursor" /></p>
      </div>
    ),
    cssInline: `
      .nuda-stream-text{padding:8px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;max-width:180px}
      .nuda-stream-text p{margin:0;font:500 11px ui-sans-serif,system-ui;color:#fafafa;line-height:1.4;overflow:hidden;white-space:nowrap;animation:_st-type 4s steps(28) infinite}
      .nuda-stream-text__cursor{display:inline-block;width:1.5px;height:11px;background:#e4ff54;margin-left:2px;vertical-align:middle;animation:_st-blink 1s steps(2) infinite}
      @keyframes _st-type{0%{width:0}80%,100%{width:100%}}
      @keyframes _st-blink{50%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Streaming Text — append tokens to the <p> as your stream arrives -->
<div class="nuda-stream-text">
  <p>Generating a response<span class="nuda-stream-text__cursor"></span></p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Streaming Text
   Token-stream feel: text "types" left-to-right with a blinking caret.
   Customize: --st-cursor, --st-bg, the steps(N) value. */

.nuda-stream-text {
  --st-cursor: #e4ff54;
  --st-bg: rgba(255, 255, 255, 0.03);
  padding: 10px 14px;
  background: var(--st-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  max-width: 100%;
}

.nuda-stream-text p {
  margin: 0;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  /* If you stream from JS, drop this animation and just append text. */
  animation: nuda-st-type 4s steps(28) infinite;
}

.nuda-stream-text__cursor {
  display: inline-block;
  width: 1.5px;
  height: 1em;
  background: var(--st-cursor);
  margin-left: 2px;
  vertical-align: middle;
  animation: nuda-st-blink 1s steps(2) infinite;
}

@keyframes nuda-st-type {
  0%        { width: 0; }
  80%, 100% { width: 100%; }
}

@keyframes nuda-st-blink { 50% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-stream-text p,
  .nuda-stream-text__cursor { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Streaming Text — append tokens from a real stream.
   Drop the CSS typing animation when using this. */

(function () {
  var p = document.querySelector('.nuda-stream-text p');
  var cursor = document.querySelector('.nuda-stream-text__cursor');
  if (!p) return;

  // Example: typing simulation. Replace with your fetch/SSE/WebSocket reader.
  var text = 'Streaming a response token by token…';
  p.textContent = '';
  if (cursor) p.appendChild(cursor);

  var i = 0;
  var iv = setInterval(function () {
    if (i >= text.length) return clearInterval(iv);
    p.insertBefore(document.createTextNode(text[i++]), cursor || null);
  }, 28);
})();`,
      },
    ],
  },

  /* ─────────────── 3. Chat Bubble ─────────────── */
  {
    id: "chat-bubble",
    name: "Chat Bubble",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-chat">
        <div className="nuda-chat__msg nuda-chat__msg--user">Make this faster</div>
        <div className="nuda-chat__msg nuda-chat__msg--ai">
          <span className="nuda-chat__avatar">AI</span>
          <div className="nuda-chat__bubble">Memoize the hot path.</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-chat{display:flex;flex-direction:column;gap:6px;width:160px}
      .nuda-chat__msg{display:flex;animation:_ch-in .5s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-chat__msg--user{justify-content:flex-end;animation-delay:0s}
      .nuda-chat__msg--user::before{content:"";display:block}
      .nuda-chat__msg--user{padding:6px 10px;background:#e4ff54;color:#09090b;border-radius:12px 12px 2px 12px;font:600 11px ui-sans-serif,system-ui;align-self:flex-end;max-width:80%}
      .nuda-chat__msg--ai{align-items:flex-end;gap:6px;animation-delay:.4s}
      .nuda-chat__avatar{flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.15);border:1px solid rgba(228,255,84,.3);color:#e4ff54;font:800 7px ui-sans-serif,system-ui;border-radius:50%}
      .nuda-chat__bubble{padding:6px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);color:#fafafa;border-radius:12px 12px 12px 2px;font:500 11px ui-sans-serif,system-ui;max-width:80%}
      @keyframes _ch-in{from{opacity:0;transform:translateY(6px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Chat Bubble — user (right, accent) + AI (left, with avatar) -->
<div class="nuda-chat">
  <div class="nuda-chat__msg nuda-chat__msg--user">Make this faster</div>
  <div class="nuda-chat__msg nuda-chat__msg--ai">
    <span class="nuda-chat__avatar">AI</span>
    <div class="nuda-chat__bubble">Memoize the hot path.</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chat Bubble
   User vs AI message bubbles with staggered fade-in entry.
   Customize: --chat-user-bg, --chat-ai-bg, --chat-radius */

.nuda-chat {
  --chat-user-bg: #e4ff54;
  --chat-ai-bg: rgba(255, 255, 255, 0.04);
  --chat-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 320px;
}

.nuda-chat__msg {
  display: flex;
  animation: nuda-chat-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-chat__msg--user {
  align-self: flex-end;
  padding: 8px 14px;
  background: var(--chat-user-bg);
  color: #09090b;
  border-radius: var(--chat-radius) var(--chat-radius) 4px var(--chat-radius);
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  max-width: 80%;
}

.nuda-chat__msg--ai {
  align-items: flex-end;
  gap: 8px;
  animation-delay: 0.4s;
}

.nuda-chat__avatar {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(228, 255, 84, 0.15);
  border: 1px solid rgba(228, 255, 84, 0.3);
  color: var(--chat-user-bg);
  font: 800 0.55rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 50%;
}

.nuda-chat__bubble {
  padding: 8px 14px;
  background: var(--chat-ai-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #fafafa;
  border-radius: var(--chat-radius) var(--chat-radius) var(--chat-radius) 4px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  max-width: 80%;
}

@keyframes nuda-chat-in {
  from { opacity: 0; transform: translateY(8px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chat__msg { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Thinking Shimmer ─────────────── */
  {
    id: "thinking-shimmer",
    name: "Thinking Shimmer",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-thinking">
        <span className="nuda-thinking__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
        </span>
        <span className="nuda-thinking__text">Analyzing your request</span>
      </div>
    ),
    cssInline: `
      .nuda-thinking{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;position:relative;overflow:hidden}
      .nuda-thinking::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(228,255,84,.12) 50%,transparent 70%);transform:translateX(-100%);animation:_th-sweep 2.4s ease-in-out infinite;pointer-events:none}
      .nuda-thinking__icon{width:14px;height:14px;color:#e4ff54;animation:_th-spin 3s linear infinite;flex-shrink:0;filter:drop-shadow(0 0 4px rgba(228,255,84,.5))}
      .nuda-thinking__icon svg{width:100%;height:100%}
      .nuda-thinking__text{font:600 11px ui-sans-serif,system-ui;background:linear-gradient(90deg,#a1a1aa 0%,#fafafa 50%,#a1a1aa 100%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:_th-text 2.4s linear infinite;position:relative;z-index:1}
      @keyframes _th-sweep{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
      @keyframes _th-spin{to{transform:rotate(360deg)}}
      @keyframes _th-text{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Thinking Shimmer — sparkle + shimmering "Analyzing…" text -->
<div class="nuda-thinking">
  <span class="nuda-thinking__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
    </svg>
  </span>
  <span class="nuda-thinking__text">Analyzing your request</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Thinking Shimmer
   Spinning sparkle + a shimmer sweep across the pill, while the text itself
   shimmers. Use while waiting for an AI response.
   Customize: --think-accent, --think-bg */

.nuda-thinking {
  --think-accent: #e4ff54;
  --think-bg: rgba(255, 255, 255, 0.03);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: var(--think-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.nuda-thinking::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 30%,
    rgba(228, 255, 84, 0.12) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: nuda-think-sweep 2.4s ease-in-out infinite;
  pointer-events: none;
}

.nuda-thinking__icon {
  width: 16px;
  height: 16px;
  color: var(--think-accent);
  flex-shrink: 0;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.5));
  animation: nuda-think-spin 3s linear infinite;
}

.nuda-thinking__icon svg { width: 100%; height: 100%; }

.nuda-thinking__text {
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  background: linear-gradient(90deg, #a1a1aa 0%, #fafafa 50%, #a1a1aa 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: nuda-think-text 2.4s linear infinite;
  position: relative;
  z-index: 1;
}

@keyframes nuda-think-sweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes nuda-think-spin { to { transform: rotate(360deg); } }

@keyframes nuda-think-text {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-thinking::after,
  .nuda-thinking__icon,
  .nuda-thinking__text { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Prompt Composer ─────────────── */
  {
    id: "prompt-composer",
    name: "Prompt Composer",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-composer">
        <textarea className="nuda-composer__input" defaultValue="Refactor this hook…" rows={2} />
        <div className="nuda-composer__bar">
          <span className="nuda-composer__chip">@file</span>
          <span className="nuda-composer__send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12 L19 12" />
              <path d="M13 6 L19 12 L13 18" />
            </svg>
          </span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-composer{position:relative;width:180px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:8px;display:flex;flex-direction:column;gap:6px;transition:border-color .25s,box-shadow .25s}
      .nuda-composer:focus-within{border-color:rgba(228,255,84,.4);box-shadow:0 0 0 3px rgba(228,255,84,.1)}
      .nuda-composer__input{width:100%;background:transparent;border:none;resize:none;color:#fafafa;font:500 11px ui-sans-serif,system-ui;outline:none;padding:0;line-height:1.4}
      .nuda-composer__input::placeholder{color:#63636e}
      .nuda-composer__bar{display:flex;align-items:center;justify-content:space-between;gap:6px}
      .nuda-composer__chip{font:600 9px ui-sans-serif,system-ui;color:#e4ff54;background:rgba(228,255,84,.1);padding:2px 6px;border-radius:4px}
      .nuda-composer__send{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#e4ff54;color:#09090b;border-radius:6px;cursor:pointer;transition:transform .2s,box-shadow .2s}
      .nuda-composer__send:hover{transform:translateX(2px);box-shadow:0 0 8px rgba(228,255,84,.4)}
      .nuda-composer__send svg{width:12px;height:12px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Prompt Composer — focus state, mention chip, send button -->
<div class="nuda-composer">
  <textarea class="nuda-composer__input"
            placeholder="Ask anything…"
            rows="3"></textarea>
  <div class="nuda-composer__bar">
    <span class="nuda-composer__chip">@file</span>
    <button class="nuda-composer__send" type="submit" aria-label="Send">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L19 12" />
        <path d="M13 6 L19 12 L13 18" />
      </svg>
    </button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Prompt Composer
   AI prompt input with focus glow, mention chips, send button.
   Customize: --comp-accent, --comp-bg */

.nuda-composer {
  --comp-accent: #e4ff54;
  --comp-bg: rgba(255, 255, 255, 0.03);
  position: relative;
  width: 100%;
  max-width: 480px;
  background: var(--comp-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.nuda-composer:focus-within {
  border-color: rgba(228, 255, 84, 0.4);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.1);
}

.nuda-composer__input {
  width: 100%;
  background: transparent;
  border: none;
  resize: none;
  color: #fafafa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  padding: 0;
  line-height: 1.5;
}

.nuda-composer__input::placeholder { color: #63636e; }

.nuda-composer__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.nuda-composer__chip {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--comp-accent);
  background: rgba(228, 255, 84, 0.1);
  padding: 3px 7px;
  border-radius: 5px;
}

.nuda-composer__send {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--comp-accent);
  color: #09090b;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.nuda-composer__send:hover {
  transform: translateX(2px);
  box-shadow: 0 0 10px rgba(228, 255, 84, 0.4);
}

.nuda-composer__send svg { width: 14px; height: 14px; }`,
      },
    ],
  },

  /* ─────────────── 6. Citation Chip ─────────────── */
  {
    id: "citation-chip",
    name: "Citation Chip",
    category: "AI / Chat UI",
    preview: (
      <p className="nuda-cite">
        Memoization can reduce re-renders
        <a className="nuda-cite__chip" href="#" aria-label="Source 1">1</a>
        in expensive trees
        <a className="nuda-cite__chip" href="#" aria-label="Source 2">2</a>.
      </p>
    ),
    cssInline: `
      .nuda-cite{font:500 11px ui-sans-serif,system-ui;color:#fafafa;line-height:1.6;margin:0;padding:8px;max-width:180px}
      .nuda-cite__chip{display:inline-flex;align-items:center;justify-content:center;min-width:14px;height:14px;padding:0 4px;margin:0 2px;background:rgba(228,255,84,.12);color:#e4ff54;font:700 9px ui-sans-serif,system-ui;border-radius:4px;text-decoration:none;vertical-align:1px;transition:background .2s,transform .2s,box-shadow .2s}
      .nuda-cite__chip:hover{background:#e4ff54;color:#09090b;transform:translateY(-1px);box-shadow:0 0 6px rgba(228,255,84,.4)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Citation Chip — inline source links, e.g. AI answers -->
<p class="nuda-cite">
  Memoization can reduce re-renders<a class="nuda-cite__chip" href="#" aria-label="Source 1">1</a>
  in expensive trees<a class="nuda-cite__chip" href="#" aria-label="Source 2">2</a>.
</p>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Citation Chip
   Inline numeric source links with hover lift + glow.
   Customize: --cite-accent, --cite-bg */

.nuda-cite {
  --cite-accent: #e4ff54;
  --cite-bg: rgba(228, 255, 84, 0.12);
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  line-height: 1.7;
  margin: 0;
}

.nuda-cite__chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  padding: 0 5px;
  margin: 0 2px;
  background: var(--cite-bg);
  color: var(--cite-accent);
  font: 700 0.625rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 4px;
  text-decoration: none;
  vertical-align: 1px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s, color 0.2s;
}

.nuda-cite__chip:hover {
  background: var(--cite-accent);
  color: #09090b;
  transform: translateY(-1px);
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.4);
}`,
      },
    ],
  },

  /* ─────────────── 7. Token Counter ─────────────── */
  {
    id: "token-counter",
    name: "Token Counter",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-tokens">
        <div className="nuda-tokens__head">
          <span className="nuda-tokens__label">Context</span>
          <span className="nuda-tokens__num">8,420 <i>/ 16k</i></span>
        </div>
        <div className="nuda-tokens__bar">
          <span className="nuda-tokens__fill" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tokens{width:160px;padding:8px;display:flex;flex-direction:column;gap:5px}
      .nuda-tokens__head{display:flex;justify-content:space-between;align-items:baseline}
      .nuda-tokens__label{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-tokens__num{font:700 11px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-tokens__num i{font-size:9px;font-style:normal;color:#63636e;font-weight:500;margin-left:1px}
      .nuda-tokens__bar{height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden;position:relative}
      .nuda-tokens__fill{position:absolute;left:0;top:0;height:100%;width:0;background:linear-gradient(90deg,#e4ff54 0%,rgba(228,255,84,.7) 70%,#ffae54 100%);border-radius:2px;animation:_tk-fill 1.6s cubic-bezier(.4,0,.2,1) forwards;box-shadow:0 0 4px rgba(228,255,84,.3)}
      @keyframes _tk-fill{to{width:52%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Token Counter -->
<div class="nuda-tokens">
  <div class="nuda-tokens__head">
    <span class="nuda-tokens__label">Context</span>
    <span class="nuda-tokens__num">8,420 <i>/ 16k</i></span>
  </div>
  <div class="nuda-tokens__bar"><span class="nuda-tokens__fill"></span></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Token Counter
   Context window meter; gradient warns as it nears the limit.
   Customize: --tk-target (current %) */

.nuda-tokens {
  --tk-target: 52%;
  width: 100%;
  max-width: 240px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nuda-tokens__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.nuda-tokens__label {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-tokens__num {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

.nuda-tokens__num i {
  font-size: 0.7rem;
  font-style: normal;
  color: #63636e;
  font-weight: 500;
  margin-left: 2px;
}

.nuda-tokens__bar {
  height: 5px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.nuda-tokens__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(
    90deg,
    #e4ff54 0%,
    rgba(228, 255, 84, 0.7) 70%,
    #ffae54 100%
  );
  border-radius: 3px;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.3);
  animation: nuda-tk-fill 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes nuda-tk-fill { to { width: var(--tk-target); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-tokens__fill { width: var(--tk-target); animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Model Selector ─────────────── */
  {
    id: "model-selector",
    name: "Model Selector",
    category: "AI / Chat UI",
    preview: (
      <button className="nuda-model" type="button">
        <span className="nuda-model__dot" />
        <span className="nuda-model__name">Claude Opus 4.7</span>
        <span className="nuda-model__badge">Pro</span>
        <svg className="nuda-model__chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4.5 L6 7.5 L9 4.5" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-model{display:inline-flex;align-items:center;gap:6px;padding:5px 8px 5px 9px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:7px;color:#fafafa;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:border-color .25s,background .25s}
      .nuda-model:hover{border-color:rgba(228,255,84,.3);background:rgba(255,255,255,.06)}
      .nuda-model__dot{width:6px;height:6px;border-radius:50%;background:#e4ff54;box-shadow:0 0 6px #e4ff54;animation:_md-pulse 2s ease-in-out infinite}
      .nuda-model__badge{font:700 8px ui-sans-serif,system-ui;color:#09090b;background:#e4ff54;padding:1px 5px;border-radius:3px;letter-spacing:.04em;text-transform:uppercase}
      .nuda-model__chev{width:10px;height:10px;color:#a1a1aa;transition:transform .25s}
      .nuda-model:hover .nuda-model__chev{transform:rotate(180deg)}
      @keyframes _md-pulse{0%,100%{opacity:.7}50%{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Model Selector — pulsing online dot, name, plan badge -->
<button class="nuda-model" type="button">
  <span class="nuda-model__dot"></span>
  <span class="nuda-model__name">Claude Opus 4.7</span>
  <span class="nuda-model__badge">Pro</span>
  <svg class="nuda-model__chev" viewBox="0 0 12 12" fill="none"
       stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 4.5 L6 7.5 L9 4.5" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Model Selector
   Pill button with status dot, model name, plan badge, chevron flip on hover.
   Customize: --model-accent */

.nuda-model {
  --model-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px 6px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}

.nuda-model:hover {
  border-color: rgba(228, 255, 84, 0.3);
  background: rgba(255, 255, 255, 0.06);
}

.nuda-model__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--model-accent);
  box-shadow: 0 0 6px var(--model-accent);
  animation: nuda-model-pulse 2s ease-in-out infinite;
}

.nuda-model__badge {
  font: 700 0.55rem ui-sans-serif, system-ui, sans-serif;
  color: #09090b;
  background: var(--model-accent);
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nuda-model__chev {
  width: 12px;
  height: 12px;
  color: #a1a1aa;
  transition: transform 0.25s;
}

.nuda-model:hover .nuda-model__chev { transform: rotate(180deg); }

@keyframes nuda-model-pulse {
  0%, 100% { opacity: 0.7; }
  50%      { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-model__dot { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Stop Generating ─────────────── */
  {
    id: "stop-generating",
    name: "Stop Generating",
    category: "AI / Chat UI",
    preview: (
      <button className="nuda-stop" type="button">
        <span className="nuda-stop__icon">
          <span className="nuda-stop__square" />
        </span>
        <span className="nuda-stop__label">Stop generating</span>
      </button>
    ),
    cssInline: `
      .nuda-stop{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:999px;color:#fafafa;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:border-color .25s,background .25s}
      .nuda-stop:hover{border-color:#ff6363;background:rgba(255,99,99,.08);color:#fff}
      .nuda-stop__icon{position:relative;width:14px;height:14px;display:flex;align-items:center;justify-content:center}
      .nuda-stop__icon::before{content:"";position:absolute;inset:0;border:1.5px solid #e4ff54;border-radius:50%;border-top-color:transparent;animation:_sg-spin 1s linear infinite;box-sizing:border-box}
      .nuda-stop:hover .nuda-stop__icon::before{border-color:#ff6363;border-top-color:transparent}
      .nuda-stop__square{width:6px;height:6px;background:#e4ff54;border-radius:1px;transition:background .25s}
      .nuda-stop:hover .nuda-stop__square{background:#ff6363}
      @keyframes _sg-spin{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stop Generating — spinner ring + center square -->
<button class="nuda-stop" type="button">
  <span class="nuda-stop__icon">
    <span class="nuda-stop__square"></span>
  </span>
  <span class="nuda-stop__label">Stop generating</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stop Generating
   Pill button with spinner ring + center square; turns red on hover.
   Customize: --stop-color, --stop-danger */

.nuda-stop {
  --stop-color: #e4ff54;
  --stop-danger: #ff6363;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  color: #fafafa;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s, color 0.25s;
}

.nuda-stop:hover {
  border-color: var(--stop-danger);
  background: rgba(255, 99, 99, 0.08);
  color: #fff;
}

.nuda-stop__icon {
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-stop__icon::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1.5px solid var(--stop-color);
  border-radius: 50%;
  border-top-color: transparent;
  animation: nuda-stop-spin 1s linear infinite;
  box-sizing: border-box;
  transition: border-color 0.25s;
}

.nuda-stop:hover .nuda-stop__icon::before {
  border-color: var(--stop-danger);
  border-top-color: transparent;
}

.nuda-stop__square {
  width: 7px;
  height: 7px;
  background: var(--stop-color);
  border-radius: 1px;
  transition: background 0.25s;
}

.nuda-stop:hover .nuda-stop__square { background: var(--stop-danger); }

@keyframes nuda-stop-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-stop__icon::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Message Actions ─────────────── */
  {
    id: "message-actions",
    name: "Message Actions",
    category: "AI / Chat UI",
    preview: (
      <div className="nuda-msgact">
        <button className="nuda-msgact__btn" aria-label="Copy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="8" width="13" height="13" rx="2" />
            <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
          </svg>
        </button>
        <button className="nuda-msgact__btn" aria-label="Regenerate">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12 A 9 9 0 1 1 16 4.5" />
            <path d="M21 4 L21 10 L15 10" />
          </svg>
        </button>
        <button className="nuda-msgact__btn" aria-label="Like">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 11 L7 21 L4 21 L4 11 Z" />
            <path d="M7 11 L11 4 A 2 2 0 0 1 13 6 L13 9 L19 9 A 2 2 0 0 1 21 11 L20 19 A 2 2 0 0 1 18 21 L7 21" />
          </svg>
        </button>
        <button className="nuda-msgact__btn" aria-label="Dislike">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13 L7 3 L4 3 L4 13 Z" />
            <path d="M7 13 L11 20 A 2 2 0 0 0 13 18 L13 15 L19 15 A 2 2 0 0 0 21 13 L20 5 A 2 2 0 0 0 18 3 L7 3" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-msgact{display:inline-flex;align-items:center;gap:1px;padding:2px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-msgact__btn{display:flex;align-items:center;justify-content:center;width:24px;height:24px;background:transparent;border:none;color:#a1a1aa;cursor:pointer;border-radius:5px;transition:background .2s,color .2s,transform .2s}
      .nuda-msgact__btn:hover{background:rgba(228,255,84,.1);color:#e4ff54;transform:translateY(-1px)}
      .nuda-msgact__btn:active{transform:translateY(0) scale(.92)}
      .nuda-msgact__btn svg{width:13px;height:13px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Message Actions — copy / regenerate / thumbs up/down -->
<div class="nuda-msgact">
  <button class="nuda-msgact__btn" aria-label="Copy">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="8" width="13" height="13" rx="2" />
      <path d="M16 8 L16 5 A 2 2 0 0 0 14 3 L5 3 A 2 2 0 0 0 3 5 L3 14 A 2 2 0 0 0 5 16 L8 16" />
    </svg>
  </button>
  <button class="nuda-msgact__btn" aria-label="Regenerate">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12 A 9 9 0 1 1 16 4.5" />
      <path d="M21 4 L21 10 L15 10" />
    </svg>
  </button>
  <button class="nuda-msgact__btn" aria-label="Like">…</button>
  <button class="nuda-msgact__btn" aria-label="Dislike">…</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Message Actions
   Inline action toolbar typically shown on hover under an AI message.
   Customize: --act-accent */

.nuda-msgact {
  --act-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
}

.nuda-msgact__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  color: #a1a1aa;
  cursor: pointer;
  border-radius: 7px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}

.nuda-msgact__btn:hover {
  background: rgba(228, 255, 84, 0.1);
  color: var(--act-accent);
  transform: translateY(-1px);
}

.nuda-msgact__btn:active { transform: translateY(0) scale(0.92); }

.nuda-msgact__btn svg { width: 15px; height: 15px; }`,
      },
    ],
  },
];
