import type { NudaComponent } from "./types";

export const commentsReactions: NudaComponent[] = [
  /* ─────────────── COMMENT THREAD ─────────────── */
  {
    id: "comment-thread",
    name: "Comment Thread",
    category: "Comments & Reactions",
    preview: (
      <article className="nuda-comment-thread">
        <div className="nuda-comment-thread__avatar" aria-hidden="true">JL</div>
        <div className="nuda-comment-thread__body">
          <header className="nuda-comment-thread__header">
            <span className="nuda-comment-thread__name">Jordan Lee</span>
            <span className="nuda-comment-thread__time">2h ago</span>
          </header>
          <p className="nuda-comment-thread__text">
            This animation library feels so polished. The motion curves are buttery smooth.
          </p>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-comment-thread{display:flex;gap:12px;padding:14px;background:#0c0c10;border:1px solid #1c1c22;border-radius:12px;max-width:420px;animation:_ctfade .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-comment-thread__avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#9d6dff,#62b6ff);color:#fafafa;font-size:13px;font-weight:600;display:grid;place-items:center;flex-shrink:0}
      .nuda-comment-thread__body{flex:1;min-width:0}
      .nuda-comment-thread__header{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}
      .nuda-comment-thread__name{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-comment-thread__time{color:#63636e;font-size:11px}
      .nuda-comment-thread__text{color:#a0a0a8;font-size:13px;line-height:1.5;margin:0}
      @keyframes _ctfade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-comment-thread{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-comment-thread">
  <div class="nuda-comment-thread__avatar" aria-hidden="true">JL</div>
  <div class="nuda-comment-thread__body">
    <header class="nuda-comment-thread__header">
      <span class="nuda-comment-thread__name">Jordan Lee</span>
      <span class="nuda-comment-thread__time">2h ago</span>
    </header>
    <p class="nuda-comment-thread__text">
      This animation library feels so polished. The motion curves are buttery smooth.
    </p>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Comment Thread
   Avatar + body + meta time with subtle entrance.
   Customize: --c-bg, --c-border, --c-accent */

.nuda-comment-thread {
  --c-bg: #0c0c10;
  --c-border: #1c1c22;
  display: flex;
  gap: 12px;
  padding: 14px;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  max-width: 420px;
  animation: nuda-ct-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-comment-thread__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9d6dff, #62b6ff);
  color: #fafafa;
  font-size: 13px;
  font-weight: 600;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.nuda-comment-thread__body { flex: 1; min-width: 0; }

.nuda-comment-thread__header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}

.nuda-comment-thread__name {
  color: #fafafa;
  font-size: 13px;
  font-weight: 600;
}

.nuda-comment-thread__time {
  color: #63636e;
  font-size: 11px;
}

.nuda-comment-thread__text {
  color: #a0a0a8;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

@keyframes nuda-ct-fade {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-comment-thread { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── REPLY NESTED ─────────────── */
  {
    id: "reply-nested",
    name: "Reply Nested",
    category: "Comments & Reactions",
    preview: (
      <div className="nuda-reply-nested">
        <article className="nuda-reply-nested__parent">
          <div className="nuda-reply-nested__avatar" style={{ background: "linear-gradient(135deg,#ff5e7a,#ffb45e)" }}>MC</div>
          <div className="nuda-reply-nested__body">
            <span className="nuda-reply-nested__name">Mira Chen</span>
            <p className="nuda-reply-nested__text">Has anyone tried this with Svelte?</p>
          </div>
        </article>
        <div className="nuda-reply-nested__children">
          <article className="nuda-reply-nested__child">
            <div className="nuda-reply-nested__avatar" style={{ background: "linear-gradient(135deg,#6ee7b7,#62b6ff)" }}>AK</div>
            <div className="nuda-reply-nested__body">
              <span className="nuda-reply-nested__name">Alex K.</span>
              <p className="nuda-reply-nested__text">Works perfectly — it&apos;s plain CSS.</p>
            </div>
          </article>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-reply-nested{display:flex;flex-direction:column;gap:10px;max-width:440px}
      .nuda-reply-nested__parent,.nuda-reply-nested__child{display:flex;gap:10px;padding:12px;background:#0c0c10;border:1px solid #1c1c22;border-radius:10px}
      .nuda-reply-nested__children{position:relative;padding-left:28px;display:flex;flex-direction:column;gap:8px}
      .nuda-reply-nested__children::before{content:"";position:absolute;left:14px;top:0;bottom:8px;width:2px;background:linear-gradient(180deg,#e4ff54,transparent);transform-origin:top;animation:_rngrow .6s cubic-bezier(.16,1,.3,1) both}
      .nuda-reply-nested__avatar{width:28px;height:28px;border-radius:50%;color:#fafafa;font-size:11px;font-weight:600;display:grid;place-items:center;flex-shrink:0}
      .nuda-reply-nested__body{flex:1;min-width:0}
      .nuda-reply-nested__name{color:#fafafa;font-size:12px;font-weight:600;display:block;margin-bottom:2px}
      .nuda-reply-nested__text{color:#a0a0a8;font-size:12px;line-height:1.5;margin:0}
      .nuda-reply-nested__child{animation:_rnslide .5s cubic-bezier(.16,1,.3,1) both}
      @keyframes _rngrow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
      @keyframes _rnslide{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-reply-nested__children::before,.nuda-reply-nested__child{animation:none;transform:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-reply-nested">
  <article class="nuda-reply-nested__parent">
    <div class="nuda-reply-nested__avatar">MC</div>
    <div class="nuda-reply-nested__body">
      <span class="nuda-reply-nested__name">Mira Chen</span>
      <p class="nuda-reply-nested__text">Has anyone tried this with Svelte?</p>
    </div>
  </article>
  <div class="nuda-reply-nested__children">
    <article class="nuda-reply-nested__child">
      <div class="nuda-reply-nested__avatar">AK</div>
      <div class="nuda-reply-nested__body">
        <span class="nuda-reply-nested__name">Alex K.</span>
        <p class="nuda-reply-nested__text">Works perfectly — it's plain CSS.</p>
      </div>
    </article>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reply Nested
   Indented thread with an animated vertical accent line.
   Customize: --rn-accent, --rn-bg */

.nuda-reply-nested {
  --rn-accent: #e4ff54;
  --rn-bg: #0c0c10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 440px;
}

.nuda-reply-nested__parent,
.nuda-reply-nested__child {
  display: flex;
  gap: 10px;
  padding: 12px;
  background: var(--rn-bg);
  border: 1px solid #1c1c22;
  border-radius: 10px;
}

.nuda-reply-nested__children {
  position: relative;
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nuda-reply-nested__children::before {
  content: "";
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--rn-accent), transparent);
  transform-origin: top;
  animation: nuda-rn-grow 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-reply-nested__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: #fafafa;
  font-size: 11px;
  font-weight: 600;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.nuda-reply-nested__name {
  color: #fafafa;
  font-size: 12px;
  font-weight: 600;
  display: block;
  margin-bottom: 2px;
}

.nuda-reply-nested__text {
  color: #a0a0a8;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
}

.nuda-reply-nested__child {
  animation: nuda-rn-slide 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes nuda-rn-grow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

@keyframes nuda-rn-slide {
  from { opacity: 0; transform: translateX(-8px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-reply-nested__children::before,
  .nuda-reply-nested__child {
    animation: none;
    transform: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* ─────────────── EMOJI REACTION PICKER ─────────────── */
  {
    id: "emoji-reaction-picker",
    name: "Emoji Reaction Picker",
    category: "Comments & Reactions",
    preview: (
      <div className="nuda-emoji-picker" role="group" aria-label="React with emoji">
        {["👍", "❤️", "😂", "😮", "😢", "🔥"].map((e, i) => (
          <button key={i} type="button" className="nuda-emoji-picker__btn" style={{ animationDelay: `${i * 50}ms` }}>
            <span aria-hidden="true">{e}</span>
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-emoji-picker{display:inline-flex;gap:4px;padding:6px;background:#111114;border:1px solid #1c1c22;border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,.4)}
      .nuda-emoji-picker__btn{width:32px;height:32px;display:grid;place-items:center;background:transparent;border:0;border-radius:50%;font-size:18px;cursor:pointer;transition:transform .25s cubic-bezier(.16,1,.3,1),background .2s;animation:_epin .4s cubic-bezier(.16,1,.3,1) both;padding:0}
      .nuda-emoji-picker__btn:hover{background:#1c1c22;transform:scale(1.3) translateY(-3px)}
      .nuda-emoji-picker__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _epin{from{opacity:0;transform:scale(.3) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-emoji-picker__btn{animation:none;transition:none}.nuda-emoji-picker__btn:hover{transform:none;background:#1c1c22}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-emoji-picker" role="group" aria-label="React with emoji">
  <button type="button" class="nuda-emoji-picker__btn" style="animation-delay:0ms">👍</button>
  <button type="button" class="nuda-emoji-picker__btn" style="animation-delay:50ms">❤️</button>
  <button type="button" class="nuda-emoji-picker__btn" style="animation-delay:100ms">😂</button>
  <button type="button" class="nuda-emoji-picker__btn" style="animation-delay:150ms">😮</button>
  <button type="button" class="nuda-emoji-picker__btn" style="animation-delay:200ms">😢</button>
  <button type="button" class="nuda-emoji-picker__btn" style="animation-delay:250ms">🔥</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Emoji Reaction Picker
   Popover with 6 reactions; each pops in then scales on hover.
   Customize: --ep-bg, --ep-border */

.nuda-emoji-picker {
  --ep-bg: #111114;
  --ep-border: #1c1c22;
  display: inline-flex;
  gap: 4px;
  padding: 6px;
  background: var(--ep-bg);
  border: 1px solid var(--ep-border);
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.nuda-emoji-picker__btn {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: transparent;
  border: 0;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.2s;
  animation: nuda-ep-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  padding: 0;
}

.nuda-emoji-picker__btn:hover {
  background: #1c1c22;
  transform: scale(1.3) translateY(-3px);
}

.nuda-emoji-picker__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@keyframes nuda-ep-in {
  from { opacity: 0; transform: scale(0.3) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-emoji-picker__btn {
    animation: none;
    transition: none;
  }
  .nuda-emoji-picker__btn:hover {
    transform: none;
    background: #1c1c22;
  }
}`,
      },
    ],
  },

  /* ─────────────── EMOJI BURST ─────────────── */
  {
    id: "emoji-burst",
    name: "Emoji Burst",
    category: "Comments & Reactions",
    preview: (
      <button type="button" className="nuda-emoji-burst" aria-label="Send love">
        <span className="nuda-emoji-burst__core" aria-hidden="true">❤️</span>
        {[..."❤️✨💖⭐💫🌟"].map((c, i) => (
          <span
            key={i}
            className="nuda-emoji-burst__p"
            style={{
              ["--tx" as string]: `${Math.cos((i * Math.PI) / 3) * 40}px`,
              ["--ty" as string]: `${Math.sin((i * Math.PI) / 3) * 40}px`,
              animationDelay: `${i * 30}ms`,
            }}
            aria-hidden="true"
          >
            {c}
          </span>
        ))}
      </button>
    ),
    cssInline: `
      .nuda-emoji-burst{position:relative;width:60px;height:60px;background:#0c0c10;border:1px solid #1c1c22;border-radius:50%;cursor:pointer;display:grid;place-items:center;padding:0}
      .nuda-emoji-burst__core{font-size:24px;animation:_ebpulse 2s cubic-bezier(.16,1,.3,1) infinite}
      .nuda-emoji-burst__p{position:absolute;top:50%;left:50%;font-size:14px;pointer-events:none;animation:_ebfly 1.6s cubic-bezier(.16,1,.3,1) infinite;opacity:0}
      @keyframes _ebpulse{0%,60%,100%{transform:scale(1)}30%{transform:scale(1.25)}}
      @keyframes _ebfly{0%{transform:translate(-50%,-50%) scale(.3);opacity:0}20%{opacity:1}80%{opacity:1}100%{transform:translate(calc(-50% + var(--tx)),calc(-50% + var(--ty))) scale(1);opacity:0}}
      .nuda-emoji-burst:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-emoji-burst__core,.nuda-emoji-burst__p{animation:none}.nuda-emoji-burst__p{display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-emoji-burst" aria-label="Send love">
  <span class="nuda-emoji-burst__core" aria-hidden="true">❤️</span>
  <span class="nuda-emoji-burst__p" style="--tx:40px;--ty:0px;animation-delay:0ms">❤️</span>
  <span class="nuda-emoji-burst__p" style="--tx:20px;--ty:34px;animation-delay:30ms">✨</span>
  <span class="nuda-emoji-burst__p" style="--tx:-20px;--ty:34px;animation-delay:60ms">💖</span>
  <span class="nuda-emoji-burst__p" style="--tx:-40px;--ty:0px;animation-delay:90ms">⭐</span>
  <span class="nuda-emoji-burst__p" style="--tx:-20px;--ty:-34px;animation-delay:120ms">💫</span>
  <span class="nuda-emoji-burst__p" style="--tx:20px;--ty:-34px;animation-delay:150ms">🌟</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Emoji Burst
   Particle explosion of small emoji radiating outward.
   Customize: --eb-bg, --tx/--ty per particle for direction */

.nuda-emoji-burst {
  position: relative;
  width: 60px;
  height: 60px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0;
}

.nuda-emoji-burst__core {
  font-size: 24px;
  animation: nuda-eb-pulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.nuda-emoji-burst__p {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 14px;
  pointer-events: none;
  animation: nuda-eb-fly 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  opacity: 0;
}

@keyframes nuda-eb-pulse {
  0%, 60%, 100% { transform: scale(1); }
  30% { transform: scale(1.25); }
}

@keyframes nuda-eb-fly {
  0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% {
    transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1);
    opacity: 0;
  }
}

.nuda-emoji-burst:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-emoji-burst__core,
  .nuda-emoji-burst__p { animation: none; }
  .nuda-emoji-burst__p { display: none; }
}`,
      },
    ],
  },

  /* ─────────────── LIKE BUTTON ─────────────── */
  {
    id: "like-button",
    name: "Like Button",
    category: "Comments & Reactions",
    preview: (
      <button type="button" className="nuda-like-btn" aria-pressed="false" aria-label="Like">
        <span className="nuda-like-btn__ripple" aria-hidden="true" />
        <svg className="nuda-like-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.5 4 4 7-2.5 4.5-9.5 9-9.5 9z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="nuda-like-btn__label">Like</span>
      </button>
    ),
    cssInline: `
      .nuda-like-btn{position:relative;display:inline-flex;align-items:center;gap:6px;padding:7px 14px 7px 12px;background:#0c0c10;border:1px solid #1c1c22;border-radius:999px;color:#a0a0a8;font-size:12px;font-weight:500;cursor:pointer;overflow:hidden;transition:color .25s,border-color .25s}
      .nuda-like-btn__icon{width:16px;height:16px;color:#a0a0a8;transition:color .25s,transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-like-btn__ripple{position:absolute;inset:0;background:radial-gradient(circle at center,rgba(255,94,122,.25),transparent 65%);opacity:0;transition:opacity .4s}
      .nuda-like-btn:hover{color:#fafafa;border-color:#ff5e7a}
      .nuda-like-btn:hover .nuda-like-btn__icon{color:#ff5e7a;transform:scale(1.18)}
      .nuda-like-btn:hover .nuda-like-btn__ripple{opacity:1}
      .nuda-like-btn[aria-pressed="true"] .nuda-like-btn__icon{color:#ff5e7a;fill:#ff5e7a;animation:_lbpop .5s cubic-bezier(.16,1,.3,1)}
      .nuda-like-btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _lbpop{0%{transform:scale(.7)}50%{transform:scale(1.35)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-like-btn,.nuda-like-btn__icon,.nuda-like-btn__ripple{transition:none}.nuda-like-btn[aria-pressed="true"] .nuda-like-btn__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-like-btn" aria-pressed="false" aria-label="Like">
  <span class="nuda-like-btn__ripple" aria-hidden="true"></span>
  <svg class="nuda-like-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.5 4 4 7-2.5 4.5-9.5 9-9.5 9z"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
  </svg>
  <span class="nuda-like-btn__label">Like</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Like Button
   Heart fills + ripple glow when toggled on.
   Toggle aria-pressed="true" in JS to lock the liked state. */

.nuda-like-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px 7px 12px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 999px;
  color: #a0a0a8;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.25s, border-color 0.25s;
}

.nuda-like-btn__icon {
  width: 16px;
  height: 16px;
  color: #a0a0a8;
  transition: color 0.25s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-like-btn__ripple {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 94, 122, 0.25), transparent 65%);
  opacity: 0;
  transition: opacity 0.4s;
}

.nuda-like-btn:hover { color: #fafafa; border-color: #ff5e7a; }
.nuda-like-btn:hover .nuda-like-btn__icon { color: #ff5e7a; transform: scale(1.18); }
.nuda-like-btn:hover .nuda-like-btn__ripple { opacity: 1; }

.nuda-like-btn[aria-pressed="true"] .nuda-like-btn__icon {
  color: #ff5e7a;
  fill: #ff5e7a;
  animation: nuda-lb-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-like-btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@keyframes nuda-lb-pop {
  0% { transform: scale(0.7); }
  50% { transform: scale(1.35); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-like-btn,
  .nuda-like-btn__icon,
  .nuda-like-btn__ripple { transition: none; }
  .nuda-like-btn[aria-pressed="true"] .nuda-like-btn__icon { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── DISLIKE BUTTON ─────────────── */
  {
    id: "dislike-button",
    name: "Dislike Button",
    category: "Comments & Reactions",
    preview: (
      <button type="button" className="nuda-dislike-btn" aria-pressed="false" aria-label="Dislike">
        <svg className="nuda-dislike-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 14V4h10l3 8v2h-7l1 4-2 2-5-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span>Dislike</span>
      </button>
    ),
    cssInline: `
      .nuda-dislike-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px 7px 12px;background:#0c0c10;border:1px solid #1c1c22;border-radius:999px;color:#a0a0a8;font-size:12px;font-weight:500;cursor:pointer;transition:color .25s,border-color .25s}
      .nuda-dislike-btn__icon{width:16px;height:16px;color:#a0a0a8;transform-origin:50% 60%;transition:color .25s,transform .45s cubic-bezier(.16,1,.3,1)}
      .nuda-dislike-btn:hover{color:#fafafa;border-color:#62b6ff}
      .nuda-dislike-btn:hover .nuda-dislike-btn__icon{color:#62b6ff;transform:rotate(-20deg) translateY(2px)}
      .nuda-dislike-btn[aria-pressed="true"] .nuda-dislike-btn__icon{color:#62b6ff;fill:#62b6ff;animation:_dbmorph .55s cubic-bezier(.16,1,.3,1)}
      .nuda-dislike-btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _dbmorph{0%{transform:rotate(0) scale(1)}40%{transform:rotate(-25deg) scale(.85)}70%{transform:rotate(10deg) scale(1.15)}100%{transform:rotate(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-dislike-btn,.nuda-dislike-btn__icon{transition:none}.nuda-dislike-btn[aria-pressed="true"] .nuda-dislike-btn__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-dislike-btn" aria-pressed="false" aria-label="Dislike">
  <svg class="nuda-dislike-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 14V4h10l3 8v2h-7l1 4-2 2-5-6z"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
  </svg>
  <span>Dislike</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dislike Button
   Thumbs-down icon morphs and rotates on toggle.
   Toggle aria-pressed="true" to fix the pressed state. */

.nuda-dislike-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px 7px 12px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 999px;
  color: #a0a0a8;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.25s, border-color 0.25s;
}

.nuda-dislike-btn__icon {
  width: 16px;
  height: 16px;
  color: #a0a0a8;
  transform-origin: 50% 60%;
  transition: color 0.25s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-dislike-btn:hover { color: #fafafa; border-color: #62b6ff; }
.nuda-dislike-btn:hover .nuda-dislike-btn__icon {
  color: #62b6ff;
  transform: rotate(-20deg) translateY(2px);
}

.nuda-dislike-btn[aria-pressed="true"] .nuda-dislike-btn__icon {
  color: #62b6ff;
  fill: #62b6ff;
  animation: nuda-db-morph 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-dislike-btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@keyframes nuda-db-morph {
  0% { transform: rotate(0) scale(1); }
  40% { transform: rotate(-25deg) scale(0.85); }
  70% { transform: rotate(10deg) scale(1.15); }
  100% { transform: rotate(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dislike-btn,
  .nuda-dislike-btn__icon { transition: none; }
  .nuda-dislike-btn[aria-pressed="true"] .nuda-dislike-btn__icon { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── SHARE BUTTON ─────────────── */
  {
    id: "share-button",
    name: "Share Button",
    category: "Comments & Reactions",
    preview: (
      <button type="button" className="nuda-share-btn" aria-label="Share">
        <span className="nuda-share-btn__tooltip" aria-hidden="true">Copy link</span>
        <svg className="nuda-share-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="18" cy="5" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="19" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8.6 10.5l6.8-3.9M8.6 13.5l6.8 3.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Share</span>
      </button>
    ),
    cssInline: `
      .nuda-share-btn{position:relative;display:inline-flex;align-items:center;gap:6px;padding:7px 14px 7px 12px;background:#0c0c10;border:1px solid #1c1c22;border-radius:999px;color:#a0a0a8;font-size:12px;font-weight:500;cursor:pointer;transition:color .25s,border-color .25s}
      .nuda-share-btn__icon{width:16px;height:16px;color:#a0a0a8;transition:color .25s,transform .4s cubic-bezier(.16,1,.3,1)}
      .nuda-share-btn__icon circle,.nuda-share-btn__icon path{transition:all .4s cubic-bezier(.16,1,.3,1)}
      .nuda-share-btn:hover{color:#fafafa;border-color:#9d6dff}
      .nuda-share-btn:hover .nuda-share-btn__icon{color:#9d6dff;transform:rotate(-12deg) scale(1.1)}
      .nuda-share-btn__tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(4px);background:#111114;border:1px solid #1c1c22;color:#fafafa;font-size:11px;padding:4px 8px;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s cubic-bezier(.16,1,.3,1)}
      .nuda-share-btn__tooltip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:#1c1c22}
      .nuda-share-btn:hover .nuda-share-btn__tooltip{opacity:1;transform:translateX(-50%) translateY(0)}
      .nuda-share-btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-share-btn,.nuda-share-btn__icon,.nuda-share-btn__tooltip{transition:none}.nuda-share-btn:hover .nuda-share-btn__icon{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-share-btn" aria-label="Share">
  <span class="nuda-share-btn__tooltip" aria-hidden="true">Copy link</span>
  <svg class="nuda-share-btn__icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="18" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="6" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="18" cy="19" r="3" fill="none" stroke="currentColor" stroke-width="2" />
    <path d="M8.6 10.5l6.8-3.9M8.6 13.5l6.8 3.9"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
  <span>Share</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Share Button
   Icon rotates + a tooltip slides in on hover. */

.nuda-share-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px 7px 12px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 999px;
  color: #a0a0a8;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.25s, border-color 0.25s;
}

.nuda-share-btn__icon {
  width: 16px;
  height: 16px;
  color: #a0a0a8;
  transition: color 0.25s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-share-btn:hover { color: #fafafa; border-color: #9d6dff; }
.nuda-share-btn:hover .nuda-share-btn__icon {
  color: #9d6dff;
  transform: rotate(-12deg) scale(1.1);
}

.nuda-share-btn__tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #111114;
  border: 1px solid #1c1c22;
  color: #fafafa;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-share-btn__tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: #1c1c22;
}

.nuda-share-btn:hover .nuda-share-btn__tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.nuda-share-btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-share-btn,
  .nuda-share-btn__icon,
  .nuda-share-btn__tooltip { transition: none; }
  .nuda-share-btn:hover .nuda-share-btn__icon { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── REPLY INPUT EXPAND ─────────────── */
  {
    id: "reply-input-expand",
    name: "Reply Input Expand",
    category: "Comments & Reactions",
    preview: (
      <form className="nuda-reply-expand" onSubmit={(e) => e.preventDefault()}>
        <textarea
          className="nuda-reply-expand__field"
          placeholder="Write a reply…"
          aria-label="Reply"
          rows={1}
          defaultValue=""
        />
        <div className="nuda-reply-expand__actions" aria-hidden="true">
          <button type="button" className="nuda-reply-expand__cancel">Cancel</button>
          <button type="submit" className="nuda-reply-expand__send">Reply</button>
        </div>
      </form>
    ),
    cssInline: `
      .nuda-reply-expand{display:flex;flex-direction:column;gap:8px;padding:12px;background:#0c0c10;border:1px solid #1c1c22;border-radius:12px;max-width:420px;transition:border-color .3s,box-shadow .3s}
      .nuda-reply-expand:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-reply-expand__field{width:100%;background:transparent;border:0;color:#fafafa;font-size:13px;line-height:1.5;resize:none;outline:none;min-height:22px;max-height:200px;transition:min-height .35s cubic-bezier(.16,1,.3,1);font-family:inherit}
      .nuda-reply-expand__field::placeholder{color:#63636e}
      .nuda-reply-expand:focus-within .nuda-reply-expand__field{min-height:64px}
      .nuda-reply-expand__actions{display:flex;justify-content:flex-end;gap:6px;max-height:0;opacity:0;overflow:hidden;transition:max-height .35s cubic-bezier(.16,1,.3,1),opacity .25s}
      .nuda-reply-expand:focus-within .nuda-reply-expand__actions{max-height:40px;opacity:1}
      .nuda-reply-expand__cancel,.nuda-reply-expand__send{padding:5px 12px;border-radius:6px;font-size:12px;font-weight:500;border:0;cursor:pointer}
      .nuda-reply-expand__cancel{background:transparent;color:#a0a0a8}
      .nuda-reply-expand__cancel:hover{color:#fafafa}
      .nuda-reply-expand__send{background:#e4ff54;color:#09090b}
      .nuda-reply-expand__send:hover{background:#f0ff7a}
      @media(prefers-reduced-motion:reduce){.nuda-reply-expand,.nuda-reply-expand__field,.nuda-reply-expand__actions{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<form class="nuda-reply-expand">
  <textarea class="nuda-reply-expand__field"
            placeholder="Write a reply…" aria-label="Reply" rows="1"></textarea>
  <div class="nuda-reply-expand__actions">
    <button type="button" class="nuda-reply-expand__cancel">Cancel</button>
    <button type="submit" class="nuda-reply-expand__send">Reply</button>
  </div>
</form>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reply Input Expand
   Textarea + action bar grow into view on focus.
   Customize: --re-bg, --re-border, --re-focus */

.nuda-reply-expand {
  --re-bg: #0c0c10;
  --re-border: #1c1c22;
  --re-focus: #e4ff54;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: var(--re-bg);
  border: 1px solid var(--re-border);
  border-radius: 12px;
  max-width: 420px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.nuda-reply-expand:focus-within {
  border-color: var(--re-focus);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.15);
}

.nuda-reply-expand__field {
  width: 100%;
  background: transparent;
  border: 0;
  color: #fafafa;
  font-size: 13px;
  line-height: 1.5;
  resize: none;
  outline: none;
  min-height: 22px;
  max-height: 200px;
  transition: min-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
}

.nuda-reply-expand__field::placeholder { color: #63636e; }

.nuda-reply-expand:focus-within .nuda-reply-expand__field { min-height: 64px; }

.nuda-reply-expand__actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s;
}

.nuda-reply-expand:focus-within .nuda-reply-expand__actions {
  max-height: 40px;
  opacity: 1;
}

.nuda-reply-expand__cancel,
.nuda-reply-expand__send {
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: 0;
  cursor: pointer;
}

.nuda-reply-expand__cancel { background: transparent; color: #a0a0a8; }
.nuda-reply-expand__cancel:hover { color: #fafafa; }

.nuda-reply-expand__send { background: var(--re-focus); color: #09090b; }
.nuda-reply-expand__send:hover { background: #f0ff7a; }

@media (prefers-reduced-motion: reduce) {
  .nuda-reply-expand,
  .nuda-reply-expand__field,
  .nuda-reply-expand__actions { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── MENTIONS CHIP ─────────────── */
  {
    id: "mentions-chip",
    name: "Mentions Chip",
    category: "Comments & Reactions",
    preview: (
      <p className="nuda-mentions">
        Thanks{" "}
        <a href="#" className="nuda-mentions__chip" data-handle="aria">
          <span className="nuda-mentions__at" aria-hidden="true">@</span>aria
        </a>
        {" "}for the catch — I&apos;ll ping{" "}
        <a href="#" className="nuda-mentions__chip" data-handle="kai">
          <span className="nuda-mentions__at" aria-hidden="true">@</span>kai
        </a>
        {" "}now.
      </p>
    ),
    cssInline: `
      .nuda-mentions{color:#a0a0a8;font-size:13px;line-height:1.6;max-width:420px;margin:0}
      .nuda-mentions__chip{display:inline-flex;align-items:center;color:#62b6ff;background:rgba(98,182,255,.1);padding:1px 8px 1px 6px;border-radius:999px;font-weight:500;text-decoration:none;font-size:12px;transition:background .25s,color .25s,transform .25s cubic-bezier(.16,1,.3,1);position:relative}
      .nuda-mentions__chip::before{content:"";position:absolute;inset:0;border-radius:inherit;background:rgba(98,182,255,.15);transform:scale(.6);opacity:0;transition:transform .35s cubic-bezier(.16,1,.3,1),opacity .25s}
      .nuda-mentions__at{opacity:.7;margin-right:1px;font-weight:600}
      .nuda-mentions__chip:hover{color:#fafafa;background:rgba(98,182,255,.2);transform:translateY(-1px)}
      .nuda-mentions__chip:hover::before{transform:scale(1);opacity:1}
      .nuda-mentions__chip:focus-visible{outline:2px solid #62b6ff;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-mentions__chip,.nuda-mentions__chip::before{transition:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<p class="nuda-mentions">
  Thanks
  <a href="#" class="nuda-mentions__chip">
    <span class="nuda-mentions__at" aria-hidden="true">@</span>aria
  </a>
  for the catch — I'll ping
  <a href="#" class="nuda-mentions__chip">
    <span class="nuda-mentions__at" aria-hidden="true">@</span>kai
  </a>
  now.
</p>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Mentions Chip
   @username highlight that lifts on hover.
   Customize: --mc-color, --mc-tint */

.nuda-mentions {
  color: #a0a0a8;
  font-size: 13px;
  line-height: 1.6;
  max-width: 420px;
  margin: 0;
}

.nuda-mentions__chip {
  --mc-color: #62b6ff;
  --mc-tint: rgba(98, 182, 255, 0.1);
  display: inline-flex;
  align-items: center;
  color: var(--mc-color);
  background: var(--mc-tint);
  padding: 1px 8px 1px 6px;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;
  font-size: 12px;
  transition:
    background 0.25s,
    color 0.25s,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.nuda-mentions__chip::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: rgba(98, 182, 255, 0.15);
  transform: scale(0.6);
  opacity: 0;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s;
}

.nuda-mentions__at {
  opacity: 0.7;
  margin-right: 1px;
  font-weight: 600;
}

.nuda-mentions__chip:hover {
  color: #fafafa;
  background: rgba(98, 182, 255, 0.2);
  transform: translateY(-1px);
}

.nuda-mentions__chip:hover::before {
  transform: scale(1);
  opacity: 1;
}

.nuda-mentions__chip:focus-visible {
  outline: 2px solid var(--mc-color);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-mentions__chip,
  .nuda-mentions__chip::before {
    transition: none;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── REACTION COUNT BADGE ─────────────── */
  {
    id: "reaction-count-badge",
    name: "Reaction Count Badge",
    category: "Comments & Reactions",
    preview: (
      <button type="button" className="nuda-reaction-badge" aria-label="42 reactions">
        <span className="nuda-reaction-badge__emoji" aria-hidden="true">🔥</span>
        <span className="nuda-reaction-badge__count">
          <span className="nuda-reaction-badge__digit nuda-reaction-badge__digit--out" aria-hidden="true">41</span>
          <span className="nuda-reaction-badge__digit nuda-reaction-badge__digit--in">42</span>
        </span>
      </button>
    ),
    cssInline: `
      .nuda-reaction-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 10px 4px 8px;background:rgba(255,180,94,.12);border:1px solid rgba(255,180,94,.35);border-radius:999px;color:#ffb45e;font-size:12px;font-weight:600;cursor:pointer;transition:background .25s,transform .25s cubic-bezier(.16,1,.3,1)}
      .nuda-reaction-badge:hover{background:rgba(255,180,94,.2);transform:translateY(-1px)}
      .nuda-reaction-badge__emoji{font-size:13px;line-height:1;animation:_rbwiggle 3.5s cubic-bezier(.16,1,.3,1) infinite}
      .nuda-reaction-badge__count{position:relative;display:inline-block;min-width:1.6em;height:1.1em;overflow:hidden;line-height:1.1em}
      .nuda-reaction-badge__digit{display:block;position:absolute;left:0;right:0;text-align:left}
      .nuda-reaction-badge__digit--out{animation:_rbout .6s cubic-bezier(.16,1,.3,1) forwards}
      .nuda-reaction-badge__digit--in{animation:_rbin .6s cubic-bezier(.16,1,.3,1) forwards}
      @keyframes _rbwiggle{0%,90%,100%{transform:rotate(0)}93%{transform:rotate(-12deg)}96%{transform:rotate(10deg)}}
      @keyframes _rbout{from{transform:translateY(0);opacity:1}to{transform:translateY(-100%);opacity:0}}
      @keyframes _rbin{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
      .nuda-reaction-badge:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-reaction-badge,.nuda-reaction-badge__emoji,.nuda-reaction-badge__digit{animation:none;transition:none;transform:none}.nuda-reaction-badge__digit--out{display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-reaction-badge" aria-label="42 reactions">
  <span class="nuda-reaction-badge__emoji" aria-hidden="true">🔥</span>
  <span class="nuda-reaction-badge__count">
    <span class="nuda-reaction-badge__digit nuda-reaction-badge__digit--out" aria-hidden="true">41</span>
    <span class="nuda-reaction-badge__digit nuda-reaction-badge__digit--in">42</span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reaction Count Badge
   Old number slides out, new number slides in.
   Swap the two .nuda-reaction-badge__digit text values in JS to count up. */

.nuda-reaction-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 4px 8px;
  background: rgba(255, 180, 94, 0.12);
  border: 1px solid rgba(255, 180, 94, 0.35);
  border-radius: 999px;
  color: #ffb45e;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-reaction-badge:hover {
  background: rgba(255, 180, 94, 0.2);
  transform: translateY(-1px);
}

.nuda-reaction-badge__emoji {
  font-size: 13px;
  line-height: 1;
  animation: nuda-rb-wiggle 3.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.nuda-reaction-badge__count {
  position: relative;
  display: inline-block;
  min-width: 1.6em;
  height: 1.1em;
  overflow: hidden;
  line-height: 1.1em;
}

.nuda-reaction-badge__digit {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
}

.nuda-reaction-badge__digit--out {
  animation: nuda-rb-out 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.nuda-reaction-badge__digit--in {
  animation: nuda-rb-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes nuda-rb-wiggle {
  0%, 90%, 100% { transform: rotate(0); }
  93% { transform: rotate(-12deg); }
  96% { transform: rotate(10deg); }
}
@keyframes nuda-rb-out {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100%); opacity: 0; }
}
@keyframes nuda-rb-in {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-reaction-badge,
  .nuda-reaction-badge__emoji,
  .nuda-reaction-badge__digit {
    animation: none;
    transition: none;
    transform: none;
  }
  .nuda-reaction-badge__digit--out { display: none; }
}`,
      },
    ],
  },

  /* ─────────────── REACTION BAR ─────────────── */
  {
    id: "reaction-bar",
    name: "Reaction Bar",
    category: "Comments & Reactions",
    preview: (
      <div className="nuda-reaction-bar" role="group" aria-label="Reactions">
        {[
          { e: "👍", n: 24, on: true },
          { e: "❤️", n: 18, on: false },
          { e: "🔥", n: 12, on: false },
          { e: "😂", n: 9, on: false },
          { e: "😮", n: 4, on: false },
          { e: "🎉", n: 2, on: false },
        ].map((r, i) => (
          <button
            key={i}
            type="button"
            className={"nuda-reaction-bar__item" + (r.on ? " is-active" : "")}
            aria-pressed={r.on}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <span aria-hidden="true">{r.e}</span>
            <span className="nuda-reaction-bar__n">{r.n}</span>
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-reaction-bar{display:inline-flex;flex-wrap:wrap;gap:4px;padding:4px;background:#0c0c10;border:1px solid #1c1c22;border-radius:12px}
      .nuda-reaction-bar__item{display:inline-flex;align-items:center;gap:5px;padding:4px 10px 4px 8px;background:#111114;border:1px solid #1c1c22;border-radius:999px;color:#a0a0a8;font-size:11px;font-weight:600;cursor:pointer;transition:background .25s,border-color .25s,color .25s,transform .25s cubic-bezier(.16,1,.3,1);animation:_rbarin .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-reaction-bar__item:hover{background:#1c1c22;color:#fafafa;transform:translateY(-1px)}
      .nuda-reaction-bar__item.is-active{background:rgba(228,255,84,.12);border-color:#e4ff54;color:#e4ff54}
      .nuda-reaction-bar__n{font-variant-numeric:tabular-nums}
      .nuda-reaction-bar__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _rbarin{from{opacity:0;transform:translateY(6px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-reaction-bar__item{animation:none;transition:none}.nuda-reaction-bar__item:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-reaction-bar" role="group" aria-label="Reactions">
  <button type="button" class="nuda-reaction-bar__item is-active" aria-pressed="true">
    <span aria-hidden="true">👍</span><span class="nuda-reaction-bar__n">24</span>
  </button>
  <button type="button" class="nuda-reaction-bar__item" aria-pressed="false">
    <span aria-hidden="true">❤️</span><span class="nuda-reaction-bar__n">18</span>
  </button>
  <button type="button" class="nuda-reaction-bar__item" aria-pressed="false">
    <span aria-hidden="true">🔥</span><span class="nuda-reaction-bar__n">12</span>
  </button>
  <button type="button" class="nuda-reaction-bar__item" aria-pressed="false">
    <span aria-hidden="true">😂</span><span class="nuda-reaction-bar__n">9</span>
  </button>
  <button type="button" class="nuda-reaction-bar__item" aria-pressed="false">
    <span aria-hidden="true">😮</span><span class="nuda-reaction-bar__n">4</span>
  </button>
  <button type="button" class="nuda-reaction-bar__item" aria-pressed="false">
    <span aria-hidden="true">🎉</span><span class="nuda-reaction-bar__n">2</span>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reaction Bar
   Inline emoji + counts; active state uses accent color.
   Toggle .is-active and aria-pressed in JS. */

.nuda-reaction-bar {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 12px;
}

.nuda-reaction-bar__item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px 4px 8px;
  background: #111114;
  border: 1px solid #1c1c22;
  border-radius: 999px;
  color: #a0a0a8;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.25s,
    border-color 0.25s,
    color 0.25s,
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  animation: nuda-rbar-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-reaction-bar__item:hover {
  background: #1c1c22;
  color: #fafafa;
  transform: translateY(-1px);
}

.nuda-reaction-bar__item.is-active {
  background: rgba(228, 255, 84, 0.12);
  border-color: #e4ff54;
  color: #e4ff54;
}

.nuda-reaction-bar__n { font-variant-numeric: tabular-nums; }

.nuda-reaction-bar__item:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@keyframes nuda-rbar-in {
  from { opacity: 0; transform: translateY(6px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-reaction-bar__item { animation: none; transition: none; }
  .nuda-reaction-bar__item:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── COMMENT LOADING SKELETON ─────────────── */
  {
    id: "comment-loading-skeleton",
    name: "Comment Loading Skeleton",
    category: "Comments & Reactions",
    preview: (
      <div className="nuda-comment-skel" role="status" aria-label="Loading comment">
        <div className="nuda-comment-skel__avatar" />
        <div className="nuda-comment-skel__body">
          <div className="nuda-comment-skel__line nuda-comment-skel__line--head" />
          <div className="nuda-comment-skel__line nuda-comment-skel__line--w90" />
          <div className="nuda-comment-skel__line nuda-comment-skel__line--w70" />
          <div className="nuda-comment-skel__line nuda-comment-skel__line--w50" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-comment-skel{display:flex;gap:12px;padding:14px;background:#0c0c10;border:1px solid #1c1c22;border-radius:12px;max-width:420px}
      .nuda-comment-skel__avatar{width:36px;height:36px;border-radius:50%;flex-shrink:0;background:#1c1c22;position:relative;overflow:hidden}
      .nuda-comment-skel__body{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}
      .nuda-comment-skel__line{height:10px;border-radius:5px;background:#1c1c22;position:relative;overflow:hidden}
      .nuda-comment-skel__line--head{width:35%;height:8px}
      .nuda-comment-skel__line--w90{width:90%}
      .nuda-comment-skel__line--w70{width:70%}
      .nuda-comment-skel__line--w50{width:50%}
      .nuda-comment-skel__avatar::after,.nuda-comment-skel__line::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(228,255,84,.08) 50%,transparent);transform:translateX(-100%);animation:_cskel 1.6s ease-in-out infinite}
      @keyframes _cskel{to{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-comment-skel__avatar::after,.nuda-comment-skel__line::after{animation:none;opacity:.4;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-comment-skel" role="status" aria-label="Loading comment">
  <div class="nuda-comment-skel__avatar"></div>
  <div class="nuda-comment-skel__body">
    <div class="nuda-comment-skel__line nuda-comment-skel__line--head"></div>
    <div class="nuda-comment-skel__line nuda-comment-skel__line--w90"></div>
    <div class="nuda-comment-skel__line nuda-comment-skel__line--w70"></div>
    <div class="nuda-comment-skel__line nuda-comment-skel__line--w50"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Comment Loading Skeleton
   Avatar + four lines with a shimmer sweep.
   Customize: shimmer tint by editing the gradient color. */

.nuda-comment-skel {
  display: flex;
  gap: 12px;
  padding: 14px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 12px;
  max-width: 420px;
}

.nuda-comment-skel__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #1c1c22;
  position: relative;
  overflow: hidden;
}

.nuda-comment-skel__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 4px;
}

.nuda-comment-skel__line {
  height: 10px;
  border-radius: 5px;
  background: #1c1c22;
  position: relative;
  overflow: hidden;
}

.nuda-comment-skel__line--head { width: 35%; height: 8px; }
.nuda-comment-skel__line--w90  { width: 90%; }
.nuda-comment-skel__line--w70  { width: 70%; }
.nuda-comment-skel__line--w50  { width: 50%; }

.nuda-comment-skel__avatar::after,
.nuda-comment-skel__line::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(228, 255, 84, 0.08) 50%,
    transparent
  );
  transform: translateX(-100%);
  animation: nuda-cskel 1.6s ease-in-out infinite;
}

@keyframes nuda-cskel {
  to { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-comment-skel__avatar::after,
  .nuda-comment-skel__line::after {
    animation: none;
    opacity: 0.4;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── PINNED COMMENT ─────────────── */
  {
    id: "pinned-comment",
    name: "Pinned Comment",
    category: "Comments & Reactions",
    preview: (
      <article className="nuda-pinned">
        <div className="nuda-pinned__tag">
          <svg className="nuda-pinned__pin" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3l7 7-4 1-3 6-3-3-5 5 1-7-3-3 6-3 1-4z" fill="currentColor" />
          </svg>
          <span>Pinned by author</span>
        </div>
        <div className="nuda-pinned__row">
          <div className="nuda-pinned__avatar" aria-hidden="true">SM</div>
          <div>
            <div className="nuda-pinned__name">Sam Miyake</div>
            <p className="nuda-pinned__text">Quick note: v2 ships next Friday. Stay tuned.</p>
          </div>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-pinned{position:relative;padding:14px;background:linear-gradient(135deg,rgba(228,255,84,.08),rgba(228,255,84,.02));border:1px solid rgba(228,255,84,.35);border-radius:12px;max-width:420px;overflow:hidden}
      .nuda-pinned::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:#e4ff54}
      .nuda-pinned__tag{display:inline-flex;align-items:center;gap:5px;color:#e4ff54;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px}
      .nuda-pinned__pin{width:12px;height:12px;animation:_pinwobble 4s cubic-bezier(.16,1,.3,1) infinite;transform-origin:50% 30%}
      .nuda-pinned__row{display:flex;gap:10px;align-items:flex-start}
      .nuda-pinned__avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#6ee7b7);color:#09090b;font-size:11px;font-weight:700;display:grid;place-items:center;flex-shrink:0}
      .nuda-pinned__name{color:#fafafa;font-size:13px;font-weight:600;margin-bottom:2px}
      .nuda-pinned__text{color:#a0a0a8;font-size:13px;line-height:1.5;margin:0}
      @keyframes _pinwobble{0%,90%,100%{transform:rotate(0)}93%{transform:rotate(-15deg)}96%{transform:rotate(12deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-pinned__pin{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-pinned">
  <div class="nuda-pinned__tag">
    <svg class="nuda-pinned__pin" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3l7 7-4 1-3 6-3-3-5 5 1-7-3-3 6-3 1-4z" fill="currentColor" />
    </svg>
    <span>Pinned by author</span>
  </div>
  <div class="nuda-pinned__row">
    <div class="nuda-pinned__avatar" aria-hidden="true">SM</div>
    <div>
      <div class="nuda-pinned__name">Sam Miyake</div>
      <p class="nuda-pinned__text">Quick note: v2 ships next Friday. Stay tuned.</p>
    </div>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pinned Comment
   Highlighted card with a wobbling pin icon and accent stripe.
   Customize: --pin-accent */

.nuda-pinned {
  --pin-accent: #e4ff54;
  position: relative;
  padding: 14px;
  background: linear-gradient(
    135deg,
    rgba(228, 255, 84, 0.08),
    rgba(228, 255, 84, 0.02)
  );
  border: 1px solid rgba(228, 255, 84, 0.35);
  border-radius: 12px;
  max-width: 420px;
  overflow: hidden;
}

.nuda-pinned::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--pin-accent);
}

.nuda-pinned__tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--pin-accent);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}

.nuda-pinned__pin {
  width: 12px;
  height: 12px;
  animation: nuda-pin-wobble 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  transform-origin: 50% 30%;
}

.nuda-pinned__row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.nuda-pinned__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e4ff54, #6ee7b7);
  color: #09090b;
  font-size: 11px;
  font-weight: 700;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.nuda-pinned__name {
  color: #fafafa;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 2px;
}

.nuda-pinned__text {
  color: #a0a0a8;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

@keyframes nuda-pin-wobble {
  0%, 90%, 100% { transform: rotate(0); }
  93% { transform: rotate(-15deg); }
  96% { transform: rotate(12deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pinned__pin { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── HIGHLIGHTED REPLY ─────────────── */
  {
    id: "highlighted-reply",
    name: "Highlighted Reply",
    category: "Comments & Reactions",
    preview: (
      <article className="nuda-hl-reply">
        <div className="nuda-hl-reply__inner">
          <div className="nuda-hl-reply__avatar" aria-hidden="true">RT</div>
          <div className="nuda-hl-reply__body">
            <div className="nuda-hl-reply__name">Reza Tahir <span className="nuda-hl-reply__chip">Author reply</span></div>
            <p className="nuda-hl-reply__text">Great question — yes, the bundle stays under 4 KB gzipped.</p>
          </div>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-hl-reply{position:relative;padding:1.5px;border-radius:13px;max-width:420px;background:conic-gradient(from 0deg,#9d6dff,#62b6ff,#6ee7b7,#e4ff54,#9d6dff);background-size:200% 200%;animation:_hlrotate 5s linear infinite}
      .nuda-hl-reply::after{content:"";position:absolute;inset:0;border-radius:inherit;background:radial-gradient(circle at 50% 50%,rgba(157,109,255,.25),transparent 70%);opacity:.6;animation:_hlpulse 3s ease-in-out infinite;pointer-events:none}
      .nuda-hl-reply__inner{position:relative;display:flex;gap:10px;padding:12px;background:#0c0c10;border-radius:12px;z-index:1}
      .nuda-hl-reply__avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#9d6dff,#ff6dd4);color:#fafafa;font-size:11px;font-weight:600;display:grid;place-items:center;flex-shrink:0}
      .nuda-hl-reply__body{flex:1}
      .nuda-hl-reply__name{color:#fafafa;font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
      .nuda-hl-reply__chip{font-size:10px;font-weight:600;color:#9d6dff;background:rgba(157,109,255,.12);padding:1px 6px;border-radius:999px;text-transform:uppercase;letter-spacing:.04em}
      .nuda-hl-reply__text{color:#a0a0a8;font-size:13px;line-height:1.5;margin:0}
      @keyframes _hlrotate{to{background-position:200% 0}}
      @keyframes _hlpulse{0%,100%{opacity:.4}50%{opacity:.75}}
      @media(prefers-reduced-motion:reduce){.nuda-hl-reply,.nuda-hl-reply::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-hl-reply">
  <div class="nuda-hl-reply__inner">
    <div class="nuda-hl-reply__avatar" aria-hidden="true">RT</div>
    <div class="nuda-hl-reply__body">
      <div class="nuda-hl-reply__name">
        Reza Tahir <span class="nuda-hl-reply__chip">Author reply</span>
      </div>
      <p class="nuda-hl-reply__text">
        Great question — yes, the bundle stays under 4 KB gzipped.
      </p>
    </div>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Highlighted Reply
   Gradient border rotates while a soft glow pulses behind.
   Use the .nuda-hl-reply__chip slot to flag author/staff replies. */

.nuda-hl-reply {
  position: relative;
  padding: 1.5px;
  border-radius: 13px;
  max-width: 420px;
  background: conic-gradient(
    from 0deg,
    #9d6dff, #62b6ff, #6ee7b7, #e4ff54, #9d6dff
  );
  background-size: 200% 200%;
  animation: nuda-hl-rotate 5s linear infinite;
}

.nuda-hl-reply::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(157, 109, 255, 0.25),
    transparent 70%
  );
  opacity: 0.6;
  animation: nuda-hl-pulse 3s ease-in-out infinite;
  pointer-events: none;
}

.nuda-hl-reply__inner {
  position: relative;
  display: flex;
  gap: 10px;
  padding: 12px;
  background: #0c0c10;
  border-radius: 12px;
  z-index: 1;
}

.nuda-hl-reply__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9d6dff, #ff6dd4);
  color: #fafafa;
  font-size: 11px;
  font-weight: 600;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.nuda-hl-reply__name {
  color: #fafafa;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.nuda-hl-reply__chip {
  font-size: 10px;
  font-weight: 600;
  color: #9d6dff;
  background: rgba(157, 109, 255, 0.12);
  padding: 1px 6px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.nuda-hl-reply__text {
  color: #a0a0a8;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

@keyframes nuda-hl-rotate {
  to { background-position: 200% 0; }
}
@keyframes nuda-hl-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.75; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hl-reply,
  .nuda-hl-reply::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── REACTION STACK ─────────────── */
  {
    id: "reaction-stack",
    name: "Reaction Stack",
    category: "Comments & Reactions",
    preview: (
      <div className="nuda-reaction-stack" aria-label="6 reactions">
        <span className="nuda-reaction-stack__chip" style={{ animationDelay: "0ms" }} aria-hidden="true">❤️</span>
        <span className="nuda-reaction-stack__chip" style={{ animationDelay: "50ms" }} aria-hidden="true">🔥</span>
        <span className="nuda-reaction-stack__chip" style={{ animationDelay: "100ms" }} aria-hidden="true">😂</span>
        <span className="nuda-reaction-stack__chip" style={{ animationDelay: "150ms" }} aria-hidden="true">👍</span>
        <span className="nuda-reaction-stack__count">+12</span>
      </div>
    ),
    cssInline: `
      .nuda-reaction-stack{display:inline-flex;align-items:center;padding:3px 10px 3px 3px;background:#0c0c10;border:1px solid #1c1c22;border-radius:999px}
      .nuda-reaction-stack__chip{width:22px;height:22px;display:inline-grid;place-items:center;background:#111114;border:1.5px solid #0c0c10;border-radius:50%;font-size:11px;line-height:1;margin-left:-7px;transition:transform .25s cubic-bezier(.16,1,.3,1);animation:_rsin .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-reaction-stack__chip:first-of-type{margin-left:0}
      .nuda-reaction-stack:hover .nuda-reaction-stack__chip{transform:translateY(-2px)}
      .nuda-reaction-stack:hover .nuda-reaction-stack__chip:nth-child(2){transform:translateY(-2px) translateX(2px)}
      .nuda-reaction-stack:hover .nuda-reaction-stack__chip:nth-child(3){transform:translateY(-2px) translateX(4px)}
      .nuda-reaction-stack:hover .nuda-reaction-stack__chip:nth-child(4){transform:translateY(-2px) translateX(6px)}
      .nuda-reaction-stack__count{color:#a0a0a8;font-size:11px;font-weight:600;margin-left:6px;font-variant-numeric:tabular-nums}
      @keyframes _rsin{from{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-reaction-stack__chip{animation:none;transition:none}.nuda-reaction-stack:hover .nuda-reaction-stack__chip{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-reaction-stack" aria-label="6 reactions">
  <span class="nuda-reaction-stack__chip" aria-hidden="true">❤️</span>
  <span class="nuda-reaction-stack__chip" aria-hidden="true">🔥</span>
  <span class="nuda-reaction-stack__chip" aria-hidden="true">😂</span>
  <span class="nuda-reaction-stack__chip" aria-hidden="true">👍</span>
  <span class="nuda-reaction-stack__count">+12</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reaction Stack
   Overlapping emoji "avatars" that fan out on hover. */

.nuda-reaction-stack {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px 3px 3px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 999px;
}

.nuda-reaction-stack__chip {
  width: 22px;
  height: 22px;
  display: inline-grid;
  place-items: center;
  background: #111114;
  border: 1.5px solid #0c0c10;
  border-radius: 50%;
  font-size: 11px;
  line-height: 1;
  margin-left: -7px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  animation: nuda-rs-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-reaction-stack__chip:first-of-type { margin-left: 0; }

.nuda-reaction-stack:hover .nuda-reaction-stack__chip { transform: translateY(-2px); }
.nuda-reaction-stack:hover .nuda-reaction-stack__chip:nth-child(2) {
  transform: translateY(-2px) translateX(2px);
}
.nuda-reaction-stack:hover .nuda-reaction-stack__chip:nth-child(3) {
  transform: translateY(-2px) translateX(4px);
}
.nuda-reaction-stack:hover .nuda-reaction-stack__chip:nth-child(4) {
  transform: translateY(-2px) translateX(6px);
}

.nuda-reaction-stack__count {
  color: #a0a0a8;
  font-size: 11px;
  font-weight: 600;
  margin-left: 6px;
  font-variant-numeric: tabular-nums;
}

@keyframes nuda-rs-in {
  from { opacity: 0; transform: scale(0.3); }
  to { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-reaction-stack__chip { animation: none; transition: none; }
  .nuda-reaction-stack:hover .nuda-reaction-stack__chip { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── THUMBS UP COUNTER ─────────────── */
  {
    id: "thumbs-up-counter",
    name: "Thumbs Up Counter",
    category: "Comments & Reactions",
    preview: (
      <button type="button" className="nuda-thumbs-counter" aria-label="1248 thumbs up">
        <svg className="nuda-thumbs-counter__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10v10H4V10h3zm3 0l4-7c1.5 0 2.5 1 2.5 2.5L15.5 9H21l-2 11h-9V10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="nuda-thumbs-counter__num" aria-hidden="true">
          <span className="nuda-thumbs-counter__col"><span>1</span></span>
          <span className="nuda-thumbs-counter__col nuda-thumbs-counter__col--d1"><span>2</span></span>
          <span className="nuda-thumbs-counter__col nuda-thumbs-counter__col--d2"><span>4</span></span>
          <span className="nuda-thumbs-counter__col nuda-thumbs-counter__col--d3"><span>8</span></span>
        </span>
      </button>
    ),
    cssInline: `
      .nuda-thumbs-counter{display:inline-flex;align-items:center;gap:8px;padding:7px 14px 7px 12px;background:#0c0c10;border:1px solid #1c1c22;border-radius:999px;color:#fafafa;font-size:14px;font-weight:600;cursor:pointer;transition:border-color .25s,background .25s}
      .nuda-thumbs-counter:hover{border-color:#6ee7b7;background:#111114}
      .nuda-thumbs-counter__icon{width:18px;height:18px;color:#6ee7b7;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-thumbs-counter:hover .nuda-thumbs-counter__icon{transform:rotate(-12deg) scale(1.1)}
      .nuda-thumbs-counter__num{display:inline-flex;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:.02em}
      .nuda-thumbs-counter__col{display:inline-block;width:.6em;height:1.1em;overflow:hidden;position:relative}
      .nuda-thumbs-counter__col span{display:block;animation:_tcrollup 1.6s cubic-bezier(.16,1,.3,1) both}
      .nuda-thumbs-counter__col--d1 span{animation-delay:80ms}
      .nuda-thumbs-counter__col--d2 span{animation-delay:160ms}
      .nuda-thumbs-counter__col--d3 span{animation-delay:240ms}
      @keyframes _tcrollup{0%{transform:translateY(110%);opacity:0}50%{opacity:1}100%{transform:translateY(0);opacity:1}}
      .nuda-thumbs-counter:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-thumbs-counter,.nuda-thumbs-counter__icon,.nuda-thumbs-counter__col span{transition:none;animation:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-thumbs-counter" aria-label="1248 thumbs up">
  <svg class="nuda-thumbs-counter__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 10v10H4V10h3zm3 0l4-7c1.5 0 2.5 1 2.5 2.5L15.5 9H21l-2 11h-9V10z"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
  </svg>
  <span class="nuda-thumbs-counter__num" aria-hidden="true">
    <span class="nuda-thumbs-counter__col"><span>1</span></span>
    <span class="nuda-thumbs-counter__col nuda-thumbs-counter__col--d1"><span>2</span></span>
    <span class="nuda-thumbs-counter__col nuda-thumbs-counter__col--d2"><span>4</span></span>
    <span class="nuda-thumbs-counter__col nuda-thumbs-counter__col--d3"><span>8</span></span>
  </span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Thumbs Up Counter
   Each digit "rolls up" from below in sequence.
   Update digit text in JS to count further. */

.nuda-thumbs-counter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px 7px 12px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 999px;
  color: #fafafa;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}

.nuda-thumbs-counter:hover {
  border-color: #6ee7b7;
  background: #111114;
}

.nuda-thumbs-counter__icon {
  width: 18px;
  height: 18px;
  color: #6ee7b7;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-thumbs-counter:hover .nuda-thumbs-counter__icon {
  transform: rotate(-12deg) scale(1.1);
}

.nuda-thumbs-counter__num {
  display: inline-flex;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.nuda-thumbs-counter__col {
  display: inline-block;
  width: 0.6em;
  height: 1.1em;
  overflow: hidden;
  position: relative;
}

.nuda-thumbs-counter__col span {
  display: block;
  animation: nuda-tc-roll 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-thumbs-counter__col--d1 span { animation-delay: 80ms; }
.nuda-thumbs-counter__col--d2 span { animation-delay: 160ms; }
.nuda-thumbs-counter__col--d3 span { animation-delay: 240ms; }

@keyframes nuda-tc-roll {
  0% { transform: translateY(110%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}

.nuda-thumbs-counter:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-thumbs-counter,
  .nuda-thumbs-counter__icon,
  .nuda-thumbs-counter__col span {
    transition: none;
    animation: none;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── QUOTE REPLY ─────────────── */
  {
    id: "quote-reply",
    name: "Quote Reply",
    category: "Comments & Reactions",
    preview: (
      <article className="nuda-quote-reply">
        <blockquote className="nuda-quote-reply__quote">
          <svg className="nuda-quote-reply__mark" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-3 0-5-2-5-5V7zm8 0h4v4h-3c0 2 1 3 3 3v3c-3 0-5-2-5-5V7z" fill="currentColor" />
          </svg>
          <span className="nuda-quote-reply__name">Priya Iyer</span>
          <p className="nuda-quote-reply__text">Hot take: animations don&apos;t need JS frameworks.</p>
        </blockquote>
        <p className="nuda-quote-reply__reply">Fully agree — CSS keyframes carry 90% of what people actually ship.</p>
      </article>
    ),
    cssInline: `
      .nuda-quote-reply{display:flex;flex-direction:column;gap:10px;padding:14px;background:#0c0c10;border:1px solid #1c1c22;border-radius:12px;max-width:440px}
      .nuda-quote-reply__quote{position:relative;margin:0;padding:10px 12px 10px 32px;background:#111114;border-left:2px solid #62b6ff;border-radius:0 8px 8px 0;transition:border-color .3s,background .3s}
      .nuda-quote-reply:hover .nuda-quote-reply__quote{border-color:#e4ff54;background:#13131a}
      .nuda-quote-reply__mark{position:absolute;left:8px;top:10px;width:16px;height:16px;color:#62b6ff;opacity:.7;transition:color .3s,transform .4s cubic-bezier(.16,1,.3,1)}
      .nuda-quote-reply:hover .nuda-quote-reply__mark{color:#e4ff54;transform:scale(1.1) rotate(-6deg)}
      .nuda-quote-reply__name{display:block;color:#a0a0a8;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}
      .nuda-quote-reply__text{color:#a0a0a8;font-size:12px;line-height:1.5;margin:0;font-style:italic}
      .nuda-quote-reply__reply{color:#fafafa;font-size:13px;line-height:1.55;margin:0}
      @media(prefers-reduced-motion:reduce){.nuda-quote-reply__quote,.nuda-quote-reply__mark{transition:none}.nuda-quote-reply:hover .nuda-quote-reply__mark{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-quote-reply">
  <blockquote class="nuda-quote-reply__quote">
    <svg class="nuda-quote-reply__mark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-3 0-5-2-5-5V7zm8 0h4v4h-3c0 2 1 3 3 3v3c-3 0-5-2-5-5V7z"
        fill="currentColor" />
    </svg>
    <span class="nuda-quote-reply__name">Priya Iyer</span>
    <p class="nuda-quote-reply__text">Hot take: animations don't need JS frameworks.</p>
  </blockquote>
  <p class="nuda-quote-reply__reply">
    Fully agree — CSS keyframes carry 90% of what people actually ship.
  </p>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Quote Reply
   Reply that excerpts an original comment in a quoted block.
   Hover swaps the accent to lime. */

.nuda-quote-reply {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 12px;
  max-width: 440px;
}

.nuda-quote-reply__quote {
  position: relative;
  margin: 0;
  padding: 10px 12px 10px 32px;
  background: #111114;
  border-left: 2px solid #62b6ff;
  border-radius: 0 8px 8px 0;
  transition: border-color 0.3s, background 0.3s;
}

.nuda-quote-reply:hover .nuda-quote-reply__quote {
  border-color: #e4ff54;
  background: #13131a;
}

.nuda-quote-reply__mark {
  position: absolute;
  left: 8px;
  top: 10px;
  width: 16px;
  height: 16px;
  color: #62b6ff;
  opacity: 0.7;
  transition: color 0.3s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-quote-reply:hover .nuda-quote-reply__mark {
  color: #e4ff54;
  transform: scale(1.1) rotate(-6deg);
}

.nuda-quote-reply__name {
  display: block;
  color: #a0a0a8;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

.nuda-quote-reply__text {
  color: #a0a0a8;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
}

.nuda-quote-reply__reply {
  color: #fafafa;
  font-size: 13px;
  line-height: 1.55;
  margin: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-quote-reply__quote,
  .nuda-quote-reply__mark { transition: none; }
  .nuda-quote-reply:hover .nuda-quote-reply__mark { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── EMOJI HOVER PREVIEW TOOLTIP ─────────────── */
  {
    id: "emoji-hover-preview-tooltip",
    name: "Emoji Hover Preview Tooltip",
    category: "Comments & Reactions",
    preview: (
      <div className="nuda-emoji-tip-row">
        {[
          { e: "🎉", n: "party-popper" },
          { e: "🚀", n: "rocket" },
          { e: "✨", n: "sparkles" },
        ].map((r, i) => (
          <span key={i} className="nuda-emoji-tip">
            <button type="button" className="nuda-emoji-tip__btn" aria-describedby={`tip-${i}`}>
              <span aria-hidden="true">{r.e}</span>
            </button>
            <span className="nuda-emoji-tip__pop" id={`tip-${i}`} role="tooltip">
              <span className="nuda-emoji-tip__big" aria-hidden="true">{r.e}</span>
              <span className="nuda-emoji-tip__name">:{r.n}:</span>
            </span>
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-emoji-tip-row{display:inline-flex;gap:8px;padding:8px;background:#0c0c10;border:1px solid #1c1c22;border-radius:999px}
      .nuda-emoji-tip{position:relative;display:inline-block}
      .nuda-emoji-tip__btn{width:32px;height:32px;display:grid;place-items:center;background:transparent;border:0;border-radius:50%;font-size:18px;cursor:pointer;transition:background .2s,transform .25s cubic-bezier(.16,1,.3,1);padding:0}
      .nuda-emoji-tip__btn:hover{background:#1c1c22;transform:translateY(-2px)}
      .nuda-emoji-tip__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-emoji-tip__pop{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(8px) scale(.85);transform-origin:bottom center;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 12px;background:#111114;border:1px solid #1c1c22;border-radius:10px;box-shadow:0 12px 28px rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .25s,transform .3s cubic-bezier(.16,1,.3,1);white-space:nowrap}
      .nuda-emoji-tip__pop::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#1c1c22}
      .nuda-emoji-tip__big{font-size:36px;line-height:1}
      .nuda-emoji-tip__name{color:#a0a0a8;font-family:ui-monospace,SFMono-Regular,monospace;font-size:11px}
      .nuda-emoji-tip:hover .nuda-emoji-tip__pop,.nuda-emoji-tip:focus-within .nuda-emoji-tip__pop{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}
      @media(prefers-reduced-motion:reduce){.nuda-emoji-tip__btn,.nuda-emoji-tip__pop{transition:none}.nuda-emoji-tip__btn:hover{transform:none}.nuda-emoji-tip:hover .nuda-emoji-tip__pop,.nuda-emoji-tip:focus-within .nuda-emoji-tip__pop{transform:translateX(-50%) translateY(0) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-emoji-tip-row">
  <span class="nuda-emoji-tip">
    <button type="button" class="nuda-emoji-tip__btn" aria-describedby="tip-1">
      <span aria-hidden="true">🎉</span>
    </button>
    <span class="nuda-emoji-tip__pop" id="tip-1" role="tooltip">
      <span class="nuda-emoji-tip__big" aria-hidden="true">🎉</span>
      <span class="nuda-emoji-tip__name">:party-popper:</span>
    </span>
  </span>
  <span class="nuda-emoji-tip">
    <button type="button" class="nuda-emoji-tip__btn" aria-describedby="tip-2">
      <span aria-hidden="true">🚀</span>
    </button>
    <span class="nuda-emoji-tip__pop" id="tip-2" role="tooltip">
      <span class="nuda-emoji-tip__big" aria-hidden="true">🚀</span>
      <span class="nuda-emoji-tip__name">:rocket:</span>
    </span>
  </span>
  <span class="nuda-emoji-tip">
    <button type="button" class="nuda-emoji-tip__btn" aria-describedby="tip-3">
      <span aria-hidden="true">✨</span>
    </button>
    <span class="nuda-emoji-tip__pop" id="tip-3" role="tooltip">
      <span class="nuda-emoji-tip__big" aria-hidden="true">✨</span>
      <span class="nuda-emoji-tip__name">:sparkles:</span>
    </span>
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Emoji Hover Preview Tooltip
   Hover or focus an emoji button to reveal a large preview + shortcode. */

.nuda-emoji-tip-row {
  display: inline-flex;
  gap: 8px;
  padding: 8px;
  background: #0c0c10;
  border: 1px solid #1c1c22;
  border-radius: 999px;
}

.nuda-emoji-tip {
  position: relative;
  display: inline-block;
}

.nuda-emoji-tip__btn {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: transparent;
  border: 0;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0;
}

.nuda-emoji-tip__btn:hover {
  background: #1c1c22;
  transform: translateY(-2px);
}

.nuda-emoji-tip__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

.nuda-emoji-tip__pop {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(8px) scale(0.85);
  transform-origin: bottom center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 12px;
  background: #111114;
  border: 1px solid #1c1c22;
  border-radius: 10px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.nuda-emoji-tip__pop::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #1c1c22;
}

.nuda-emoji-tip__big { font-size: 36px; line-height: 1; }
.nuda-emoji-tip__name {
  color: #a0a0a8;
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 11px;
}

.nuda-emoji-tip:hover .nuda-emoji-tip__pop,
.nuda-emoji-tip:focus-within .nuda-emoji-tip__pop {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-emoji-tip__btn,
  .nuda-emoji-tip__pop { transition: none; }
  .nuda-emoji-tip__btn:hover { transform: none; }
  .nuda-emoji-tip:hover .nuda-emoji-tip__pop,
  .nuda-emoji-tip:focus-within .nuda-emoji-tip__pop {
    transform: translateX(-50%) translateY(0) scale(1);
  }
}`,
      },
    ],
  },
];
