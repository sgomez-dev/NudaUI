import type { NudaComponent } from "./types";

export const searchAutocomplete: NudaComponent[] = [
  /* ─────────────── 1. Expanding Search ─────────────── */
  {
    id: "expanding-search",
    name: "Expanding Search",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-expsearch is-open">
        <button className="nuda-expsearch__btn" aria-label="Open search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <input type="search" placeholder="Search components…" />
      </div>
    ),
    cssInline: `
      .nuda-expsearch{display:inline-flex;align-items:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:99px;overflow:hidden;width:42px;transition:width .5s cubic-bezier(.16,1,.3,1),background .25s,border-color .25s}
      .nuda-expsearch:hover,.nuda-expsearch.is-open,.nuda-expsearch:focus-within{width:240px;background:rgba(255,255,255,.06);border-color:#e4ff54}
      .nuda-expsearch__btn{background:transparent;border:0;color:#a0a0a8;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;flex-shrink:0;transition:color .25s}
      .nuda-expsearch__btn svg{width:16px;height:16px}
      .nuda-expsearch:hover .nuda-expsearch__btn,.nuda-expsearch.is-open .nuda-expsearch__btn,.nuda-expsearch:focus-within .nuda-expsearch__btn{color:#e4ff54}
      .nuda-expsearch input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:#fafafa;font-size:13px;padding:8px 16px 8px 0;opacity:0;transition:opacity .35s ease .15s}
      .nuda-expsearch input::placeholder{color:#63636e}
      .nuda-expsearch:hover input,.nuda-expsearch.is-open input,.nuda-expsearch:focus-within input{opacity:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-expsearch">
  <button class="nuda-expsearch__btn" aria-label="Open search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  </button>
  <input type="search" placeholder="Search components…" />
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-expsearch {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  overflow: hidden;
  width: 42px;
  transition:
    width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.25s,
    border-color 0.25s;
}

.nuda-expsearch:hover,
.nuda-expsearch:focus-within {
  width: 240px;
  background: rgba(255, 255, 255, 0.06);
  border-color: #e4ff54;
}

.nuda-expsearch input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: 0;
  outline: none;
  color: #fafafa;
  font-size: 13px;
  padding: 8px 16px 8px 0;
  opacity: 0;
  transition: opacity 0.35s ease 0.15s;
}

.nuda-expsearch:hover input,
.nuda-expsearch:focus-within input {
  opacity: 1;
}`,
      },
    ],
  },

  /* ─────────────── 2. Autocomplete Dropdown ─────────────── */
  {
    id: "autocomplete-dropdown",
    name: "Autocomplete Dropdown",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-autodrop is-open">
        <div className="nuda-autodrop__field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input value="pri" readOnly />
        </div>
        <div className="nuda-autodrop__list">
          {["pricing tables", "private route", "primary button"].map((t, i) => (
            <div key={i} className="nuda-autodrop__item" style={{ animationDelay: `${i * 60}ms` }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-autodrop{position:relative;width:100%;max-width:240px}
      .nuda-autodrop__field{display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(0,0,0,.3);border:1px solid #e4ff54;border-radius:10px;color:#fafafa;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-autodrop__field svg{width:14px;height:14px;color:#e4ff54;flex-shrink:0}
      .nuda-autodrop__field input{background:transparent;border:0;outline:none;color:#fafafa;font-size:13px;flex:1;min-width:0}
      .nuda-autodrop__list{position:absolute;top:calc(100% + 6px);left:0;right:0;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;opacity:0;transform:translateY(-6px) scale(.98);transform-origin:top center;pointer-events:none;transition:opacity .25s,transform .3s cubic-bezier(.16,1,.3,1);z-index:10;box-shadow:0 12px 32px -10px rgba(0,0,0,.6)}
      .nuda-autodrop.is-open .nuda-autodrop__list{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
      .nuda-autodrop__item{padding:8px 10px;border-radius:7px;color:#a0a0a8;font-size:12px;cursor:pointer;transition:background .15s,color .2s,padding-left .25s;animation:_autoIn .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-autodrop__item:hover{background:rgba(228,255,84,.08);color:#e4ff54;padding-left:14px}
      @keyframes _autoIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-autodrop">
  <div class="nuda-autodrop__field">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <input value="pri" />
  </div>
  <div class="nuda-autodrop__list">
    <div class="nuda-autodrop__item">pricing tables</div>
    <div class="nuda-autodrop__item">private route</div>
    <div class="nuda-autodrop__item">primary button</div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root = document.querySelector('.nuda-autodrop');
const input = root.querySelector('input');

input.addEventListener('focus', () => root.classList.add('is-open'));
input.addEventListener('blur', () => {
  // Tiny delay so click on a list item lands before close
  setTimeout(() => root.classList.remove('is-open'), 120);
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-autodrop__list {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 6px;
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
  transform-origin: top center;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-autodrop.is-open .nuda-autodrop__list {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.nuda-autodrop__item {
  padding: 8px 10px;
  border-radius: 7px;
  color: #a0a0a8;
  cursor: pointer;
  animation: nuda-auto-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: background 0.15s, color 0.2s, padding-left 0.25s;
}

.nuda-autodrop__item:hover {
  background: rgba(228, 255, 84, 0.08);
  color: #e4ff54;
  padding-left: 14px;
}

@keyframes nuda-auto-in {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Match Highlight ─────────────── */
  {
    id: "match-highlight-result",
    name: "Match Highlight",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-matchhl">
        <div className="nuda-matchhl__item">
          <span className="nuda-matchhl__m">pri</span>cing tables
        </div>
        <div className="nuda-matchhl__item">
          <span className="nuda-matchhl__m">pri</span>vate route
        </div>
        <div className="nuda-matchhl__item">
          <span className="nuda-matchhl__m">pri</span>mary button
        </div>
      </div>
    ),
    cssInline: `
      .nuda-matchhl{display:flex;flex-direction:column;gap:2px;padding:6px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:220px}
      .nuda-matchhl__item{padding:7px 10px;color:#a0a0a8;font-size:12px;border-radius:6px;cursor:pointer;transition:background .15s}
      .nuda-matchhl__item:hover{background:rgba(255,255,255,.04)}
      .nuda-matchhl__m{color:#e4ff54;font-weight:700;background:rgba(228,255,84,.12);padding:0 2px;border-radius:3px;box-decoration-break:clone;-webkit-box-decoration-break:clone;animation:_hlPulse 2s ease-in-out infinite}
      @keyframes _hlPulse{0%,100%{background:rgba(228,255,84,.12)}50%{background:rgba(228,255,84,.22)}}
      @media(prefers-reduced-motion:reduce){.nuda-matchhl__m{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-matchhl">
  <div class="nuda-matchhl__item">
    <span class="nuda-matchhl__m">pri</span>cing tables
  </div>
  <div class="nuda-matchhl__item">
    <span class="nuda-matchhl__m">pri</span>vate route
  </div>
  <div class="nuda-matchhl__item">
    <span class="nuda-matchhl__m">pri</span>mary button
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Wrap every occurrence of \`query\` in a match span
function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp('(' + query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&') + ')', 'gi');
  return text.replace(re, '<span class="nuda-matchhl__m">$1</span>');
}

// Example
document.querySelectorAll('.nuda-matchhl__item').forEach(el => {
  el.innerHTML = highlight(el.textContent, 'pri');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-matchhl__m {
  color: #e4ff54;
  font-weight: 700;
  background: rgba(228, 255, 84, 0.12);
  padding: 0 2px;
  border-radius: 3px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  animation: nuda-hl-pulse 2s ease-in-out infinite;
}

@keyframes nuda-hl-pulse {
  0%, 100% { background: rgba(228, 255, 84, 0.12); }
  50%      { background: rgba(228, 255, 84, 0.22); }
}`,
      },
    ],
  },

  /* ─────────────── 4. Recent Searches ─────────────── */
  {
    id: "recent-searches",
    name: "Recent Searches",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-recent">
        <div className="nuda-recent__head">Recent</div>
        {["loaders", "spinners", "magnetic button", "aurora bg"].map((q, i) => (
          <div key={i} className="nuda-recent__item" style={{ animationDelay: `${i * 70}ms` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>{q}</span>
            <button aria-label="Remove">×</button>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-recent{padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:240px}
      .nuda-recent__head{color:#63636e;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;padding:4px 8px 8px}
      .nuda-recent__item{display:flex;align-items:center;gap:10px;padding:7px 8px;color:#a0a0a8;font-size:12px;border-radius:7px;cursor:pointer;animation:_recIn .4s cubic-bezier(.16,1,.3,1) both;transition:background .2s,color .2s}
      .nuda-recent__item svg{width:13px;height:13px;color:#63636e;flex-shrink:0}
      .nuda-recent__item span{flex:1}
      .nuda-recent__item button{background:transparent;border:0;color:#63636e;cursor:pointer;font-size:16px;line-height:1;padding:0 2px;opacity:0;transition:opacity .25s,color .2s,transform .25s}
      .nuda-recent__item:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-recent__item:hover button{opacity:1}
      .nuda-recent__item button:hover{color:#ff5e7a;transform:scale(1.2)}
      @keyframes _recIn{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-recent__item{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-recent">
  <div class="nuda-recent__head">Recent</div>
  <div class="nuda-recent__item">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
    <span>loaders</span>
    <button aria-label="Remove">×</button>
  </div>
  <!-- More items -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-recent__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 8px;
  color: #a0a0a8;
  border-radius: 7px;
  cursor: pointer;
  animation: nuda-rec-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: background 0.2s, color 0.2s;
}

.nuda-recent__item button {
  background: transparent;
  border: 0;
  color: #63636e;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.25s, color 0.2s, transform 0.25s;
}

.nuda-recent__item:hover button { opacity: 1; }
.nuda-recent__item button:hover {
  color: #ff5e7a;
  transform: scale(1.2);
}`,
      },
    ],
  },

  /* ─────────────── 5. Voice Search ─────────────── */
  {
    id: "voice-search",
    name: "Voice Search Mic",
    category: "Search & Autocomplete",
    preview: (
      <button className="nuda-voice is-listening" aria-label="Voice search">
        <span className="nuda-voice__ring" />
        <span className="nuda-voice__ring" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="2" width="6" height="12" rx="3" />
          <path d="M19 10a7 7 0 01-14 0" />
          <path d="M12 19v3" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-voice{position:relative;display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:rgba(228,255,84,.1);border:1px solid rgba(228,255,84,.25);color:#e4ff54;cursor:pointer;transition:background .25s,transform .2s}
      .nuda-voice svg{width:20px;height:20px;position:relative;z-index:1}
      .nuda-voice:hover{background:rgba(228,255,84,.15);transform:scale(1.05)}
      .nuda-voice__ring{position:absolute;inset:0;border-radius:50%;border:2px solid #e4ff54;opacity:0;pointer-events:none}
      .nuda-voice.is-listening .nuda-voice__ring{animation:_voiceRing 2s ease-out infinite}
      .nuda-voice.is-listening .nuda-voice__ring:nth-child(2){animation-delay:1s}
      .nuda-voice.is-listening svg{animation:_voicePulse 1.4s ease-in-out infinite}
      @keyframes _voiceRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(2);opacity:0}}
      @keyframes _voicePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
      @media(prefers-reduced-motion:reduce){.nuda-voice.is-listening .nuda-voice__ring,.nuda-voice.is-listening svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-voice is-listening" aria-label="Voice search">
  <span class="nuda-voice__ring"></span>
  <span class="nuda-voice__ring"></span>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M19 10a7 7 0 01-14 0" />
    <path d="M12 19v3" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-voice__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #e4ff54;
  opacity: 0;
  pointer-events: none;
}

.nuda-voice.is-listening .nuda-voice__ring {
  animation: nuda-voice-ring 2s ease-out infinite;
}

.nuda-voice.is-listening .nuda-voice__ring:nth-child(2) {
  animation-delay: 1s;
}

@keyframes nuda-voice-ring {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(2);   opacity: 0;   }
}`,
      },
    ],
  },

  /* ─────────────── 6. Search Loading Dots ─────────────── */
  {
    id: "search-loading-dots",
    name: "Search Loading",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-srchload">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="nuda-srchload__text">Searching</span>
        <span className="nuda-srchload__dots">
          <span /><span /><span />
        </span>
      </div>
    ),
    cssInline: `
      .nuda-srchload{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;color:#a0a0a8;font-size:12px}
      .nuda-srchload svg{width:14px;height:14px;color:#e4ff54;animation:_srchSpin 1.2s ease-in-out infinite}
      .nuda-srchload__dots{display:inline-flex;gap:3px;margin-left:2px}
      .nuda-srchload__dots span{width:4px;height:4px;border-radius:50%;background:#e4ff54;animation:_srchDot 1.4s ease-in-out infinite}
      .nuda-srchload__dots span:nth-child(2){animation-delay:.18s}
      .nuda-srchload__dots span:nth-child(3){animation-delay:.36s}
      @keyframes _srchSpin{0%,100%{transform:rotate(0)}50%{transform:rotate(-20deg)}}
      @keyframes _srchDot{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}
      @media(prefers-reduced-motion:reduce){.nuda-srchload svg,.nuda-srchload__dots span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-srchload">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <span class="nuda-srchload__text">Searching</span>
  <span class="nuda-srchload__dots">
    <span></span><span></span><span></span>
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-srchload__dots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #e4ff54;
  animation: nuda-srch-dot 1.4s ease-in-out infinite;
}

.nuda-srchload__dots span:nth-child(2) { animation-delay: 0.18s; }
.nuda-srchload__dots span:nth-child(3) { animation-delay: 0.36s; }

@keyframes nuda-srch-dot {
  0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
  40%           { opacity: 1;   transform: translateY(-3px); }
}`,
      },
    ],
  },

  /* ─────────────── 7. No Results ─────────────── */
  {
    id: "search-no-results",
    name: "No Results State",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-nores">
        <div className="nuda-nores__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
            <path d="M8 11h6" className="nuda-nores__line" />
          </svg>
        </div>
        <div className="nuda-nores__title">No results for &quot;quantum&quot;</div>
        <div className="nuda-nores__sub">Try a broader query or check spelling</div>
      </div>
    ),
    cssInline: `
      .nuda-nores{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px;background:rgba(255,255,255,.02);border:1px dashed rgba(255,255,255,.1);border-radius:12px;text-align:center;width:100%;max-width:240px;animation:_norIn .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-nores__icon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.04);color:#63636e;margin-bottom:4px;animation:_norFloat 3s ease-in-out infinite}
      .nuda-nores__icon svg{width:22px;height:22px}
      .nuda-nores__line{stroke-dasharray:6;stroke-dashoffset:6;animation:_norDraw .8s ease forwards .4s}
      .nuda-nores__title{color:#fafafa;font-size:12px;font-weight:600}
      .nuda-nores__sub{color:#63636e;font-size:11px}
      @keyframes _norIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
      @keyframes _norFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
      @keyframes _norDraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-nores,.nuda-nores__icon{animation:none}.nuda-nores__line{stroke-dashoffset:0;animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nores">
  <div class="nuda-nores__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <path d="M8 11h6" class="nuda-nores__line" />
    </svg>
  </div>
  <div class="nuda-nores__title">No results for "quantum"</div>
  <div class="nuda-nores__sub">Try a broader query or check spelling</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nores__icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  color: #63636e;
  animation: nuda-nor-float 3s ease-in-out infinite;
}

.nuda-nores__line {
  stroke-dasharray: 6;
  stroke-dashoffset: 6;
  animation: nuda-nor-draw 0.8s ease forwards 0.4s;
}

@keyframes nuda-nor-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

@keyframes nuda-nor-draw {
  to { stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Cmd+K Compact Trigger ─────────────── */
  {
    id: "cmdk-mini",
    name: "Cmd+K Trigger",
    category: "Search & Autocomplete",
    preview: (
      <button className="nuda-cmdk-mini" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>
    ),
    cssInline: `
      .nuda-cmdk-mini{display:inline-flex;align-items:center;gap:10px;padding:6px 8px 6px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#a0a0a8;cursor:pointer;font-size:12px;min-width:200px;transition:background .25s,border-color .25s,transform .15s}
      .nuda-cmdk-mini:hover{background:rgba(255,255,255,.07);border-color:#e4ff54;color:#fafafa;transform:translateY(-1px)}
      .nuda-cmdk-mini svg{width:13px;height:13px;flex-shrink:0;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-cmdk-mini:hover svg{transform:scale(1.15) rotate(-6deg);color:#e4ff54}
      .nuda-cmdk-mini span{flex:1;text-align:left}
      .nuda-cmdk-mini kbd{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08);padding:2px 6px;border-radius:5px;color:#a0a0a8}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-cmdk-mini" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <span>Search</span>
  <kbd>⌘K</kbd>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-cmdk-mini {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px 6px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #a0a0a8;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, transform 0.15s;
}

.nuda-cmdk-mini:hover {
  border-color: #e4ff54;
  color: #fafafa;
  transform: translateY(-1px);
}

.nuda-cmdk-mini kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 5px;
  color: #a0a0a8;
}`,
      },
    ],
  },

  /* ─────────────── 9. Search With Clear ─────────────── */
  {
    id: "search-with-clear",
    name: "Search with Clear",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-srchclear has-value">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input type="search" defaultValue="loaders" readOnly />
        <button aria-label="Clear">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-srchclear{display:inline-flex;align-items:center;gap:8px;padding:0 8px 0 14px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.1);border-radius:99px;color:#fafafa;width:100%;max-width:240px;transition:border-color .25s,box-shadow .25s}
      .nuda-srchclear:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-srchclear > svg{width:14px;height:14px;color:#63636e;flex-shrink:0;transition:color .25s}
      .nuda-srchclear:focus-within > svg{color:#e4ff54}
      .nuda-srchclear input{flex:1;min-width:0;background:transparent;border:0;outline:none;padding:10px 0;color:#fafafa;font-size:13px}
      .nuda-srchclear input::-webkit-search-cancel-button{display:none}
      .nuda-srchclear button{background:rgba(255,255,255,.06);border:0;width:22px;height:22px;border-radius:50%;color:#a0a0a8;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;opacity:0;transform:scale(.5) rotate(-180deg);transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1),background .2s,color .2s}
      .nuda-srchclear button svg{width:10px;height:10px}
      .nuda-srchclear.has-value button{opacity:1;transform:scale(1) rotate(0)}
      .nuda-srchclear button:hover{background:#ff5e7a;color:#09090b}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-srchclear">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <input type="search" />
  <button aria-label="Clear">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root = document.querySelector('.nuda-srchclear');
const input = root.querySelector('input');
const clear = root.querySelector('button');

input.addEventListener('input', () => {
  root.classList.toggle('has-value', input.value.length > 0);
});

clear.addEventListener('click', () => {
  input.value = '';
  input.focus();
  root.classList.remove('has-value');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-srchclear button {
  background: rgba(255, 255, 255, 0.06);
  border: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.5) rotate(-180deg);
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.2s,
    color 0.2s;
}

.nuda-srchclear.has-value button {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.nuda-srchclear button:hover {
  background: #ff5e7a;
  color: #09090b;
}`,
      },
    ],
  },

  /* ─────────────── 10. Filter Chips ─────────────── */
  {
    id: "search-filter-chips",
    name: "Filter Chips",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-fchips">
        <span className="nuda-fchips__chip is-active">All</span>
        <span className="nuda-fchips__chip">Loaders</span>
        <span className="nuda-fchips__chip">Buttons</span>
        <span className="nuda-fchips__chip">Hero</span>
      </div>
    ),
    cssInline: `
      .nuda-fchips{display:inline-flex;gap:6px;padding:5px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:99px;flex-wrap:wrap}
      .nuda-fchips__chip{padding:5px 12px;background:transparent;border:0;color:#a0a0a8;font-size:11px;font-weight:500;border-radius:99px;cursor:pointer;transition:background .25s,color .25s,transform .15s}
      .nuda-fchips__chip:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-fchips__chip.is-active{background:#e4ff54;color:#09090b;font-weight:600;animation:_chipPick .35s cubic-bezier(.16,1,.3,1)}
      @keyframes _chipPick{0%{transform:scale(.85)}60%{transform:scale(1.06)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-fchips__chip.is-active{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fchips">
  <button class="nuda-fchips__chip is-active">All</button>
  <button class="nuda-fchips__chip">Loaders</button>
  <button class="nuda-fchips__chip">Buttons</button>
  <button class="nuda-fchips__chip">Hero</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `document.querySelectorAll('.nuda-fchips__chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document
      .querySelectorAll('.nuda-fchips__chip')
      .forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
  });
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-fchips__chip {
  padding: 5px 12px;
  background: transparent;
  border: 0;
  color: #a0a0a8;
  border-radius: 99px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, transform 0.15s;
}

.nuda-fchips__chip.is-active {
  background: #e4ff54;
  color: #09090b;
  font-weight: 600;
  animation: nuda-chip-pick 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes nuda-chip-pick {
  0%   { transform: scale(0.85); }
  60%  { transform: scale(1.06); }
  100% { transform: scale(1); }
}`,
      },
    ],
  },

  /* ─────────────── 11. Type-ahead Reveal ─────────────── */
  {
    id: "typeahead-reveal",
    name: "Type-ahead Reveal",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-typeahead">
        <span className="nuda-typeahead__typed">Animation</span>
        <span className="nuda-typeahead__ghost">s library</span>
      </div>
    ),
    cssInline: `
      .nuda-typeahead{display:inline-flex;align-items:center;padding:10px 14px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:10px;font-size:13px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;width:100%;max-width:260px}
      .nuda-typeahead__typed{color:#fafafa}
      .nuda-typeahead__typed::after{content:'';display:inline-block;width:2px;height:14px;background:#e4ff54;margin:0 1px;vertical-align:middle;animation:_taCaret 1s steps(2) infinite}
      .nuda-typeahead__ghost{color:#63636e;opacity:0;animation:_taGhost 1.5s ease-out .8s forwards}
      @keyframes _taCaret{50%{opacity:0}}
      @keyframes _taGhost{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-typeahead__typed::after,.nuda-typeahead__ghost{animation:none}.nuda-typeahead__ghost{opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-typeahead">
  <span class="nuda-typeahead__typed">Animation</span>
  <span class="nuda-typeahead__ghost">s library</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-typeahead__typed::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 14px;
  background: #e4ff54;
  margin: 0 1px;
  vertical-align: middle;
  animation: nuda-ta-caret 1s steps(2) infinite;
}

.nuda-typeahead__ghost {
  color: #63636e;
  opacity: 0;
  animation: nuda-ta-ghost 1.5s ease-out 0.8s forwards;
}

@keyframes nuda-ta-caret { 50% { opacity: 0; } }

@keyframes nuda-ta-ghost {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 12. Async Shimmer ─────────────── */
  {
    id: "search-shimmer-rows",
    name: "Async Shimmer Rows",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-shimrows">
        {[180, 140, 160].map((w, i) => (
          <div key={i} className="nuda-shimrows__row" style={{ width: w }} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-shimrows{display:flex;flex-direction:column;gap:8px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:220px}
      .nuda-shimrows__row{height:14px;border-radius:5px;background:linear-gradient(90deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.1) 50%,rgba(255,255,255,.04) 100%);background-size:200% 100%;animation:_shimMove 1.6s linear infinite}
      .nuda-shimrows__row:nth-child(2){animation-delay:.2s}
      .nuda-shimrows__row:nth-child(3){animation-delay:.4s}
      @keyframes _shimMove{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-shimrows__row{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-shimrows">
  <div class="nuda-shimrows__row" style="width:180px"></div>
  <div class="nuda-shimrows__row" style="width:140px"></div>
  <div class="nuda-shimrows__row" style="width:160px"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-shimrows__row {
  height: 14px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
  background-size: 200% 100%;
  animation: nuda-shim-move 1.6s linear infinite;
}

.nuda-shimrows__row:nth-child(2) { animation-delay: 0.2s; }
.nuda-shimrows__row:nth-child(3) { animation-delay: 0.4s; }

@keyframes nuda-shim-move { to { background-position: -200% 0; } }`,
      },
    ],
  },

  /* ─────────────── 13. Spotlight Modal ─────────────── */
  {
    id: "spotlight-modal",
    name: "Spotlight Modal",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-spot">
        <div className="nuda-spot__field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input placeholder="What are you looking for?" readOnly />
          <kbd>ESC</kbd>
        </div>
        <div className="nuda-spot__hint">↑↓ navigate · ↵ select · esc to close</div>
      </div>
    ),
    cssInline: `
      .nuda-spot{padding:14px;background:rgba(20,20,24,.85);border:1px solid rgba(255,255,255,.12);border-radius:14px;backdrop-filter:blur(16px);width:100%;max-width:300px;box-shadow:0 24px 60px -16px rgba(0,0,0,.7);animation:_spotIn .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-spot__field{display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08);border-radius:10px;margin-bottom:10px;transition:border-color .25s,box-shadow .25s}
      .nuda-spot__field:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-spot__field svg{width:14px;height:14px;color:#e4ff54;flex-shrink:0}
      .nuda-spot__field input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:#fafafa;font-size:13px}
      .nuda-spot__field input::placeholder{color:#63636e}
      .nuda-spot__field kbd{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:9px;background:rgba(255,255,255,.06);padding:2px 6px;border-radius:4px;color:#a0a0a8}
      .nuda-spot__hint{color:#63636e;font-size:10px;text-align:center}
      @keyframes _spotIn{from{opacity:0;transform:scale(.96) translateY(-8px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-spot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-spot">
  <div class="nuda-spot__field">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <input placeholder="What are you looking for?" />
    <kbd>ESC</kbd>
  </div>
  <div class="nuda-spot__hint">↑↓ navigate · ↵ select · esc to close</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-spot {
  padding: 14px;
  background: rgba(20, 20, 24, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.7);
  animation: nuda-spot-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes nuda-spot-in {
  from { opacity: 0; transform: scale(0.96) translateY(-8px); }
  to   { opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 14. Sticky Search Header ─────────────── */
  {
    id: "sticky-search-header",
    name: "Sticky Search Header",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-sticksrch is-stuck">
        <span>Components</span>
        <div className="nuda-sticksrch__field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input placeholder="Filter…" readOnly />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sticksrch{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:rgba(17,17,20,.5);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:280px;transition:background .3s,backdrop-filter .3s,box-shadow .3s,padding .3s}
      .nuda-sticksrch.is-stuck{background:rgba(17,17,20,.85);backdrop-filter:blur(14px);box-shadow:0 4px 16px -8px rgba(0,0,0,.5);padding:8px 14px}
      .nuda-sticksrch > span{color:#fafafa;font-size:12px;font-weight:600}
      .nuda-sticksrch__field{display:flex;align-items:center;gap:6px;padding:5px 10px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.06);border-radius:8px;width:120px;transition:width .35s cubic-bezier(.16,1,.3,1)}
      .nuda-sticksrch__field:focus-within{width:160px;border-color:#e4ff54}
      .nuda-sticksrch__field svg{width:11px;height:11px;color:#63636e;flex-shrink:0}
      .nuda-sticksrch__field input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:#fafafa;font-size:11px}
      .nuda-sticksrch__field input::placeholder{color:#63636e}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<header class="nuda-sticksrch">
  <span>Components</span>
  <div class="nuda-sticksrch__field">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <input placeholder="Filter…" />
  </div>
</header>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Add .is-stuck once the header crosses a threshold
const header = document.querySelector('.nuda-sticksrch');
const onScroll = () => {
  header.classList.toggle('is-stuck', window.scrollY > 60);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-sticksrch {
  padding: 10px 14px;
  background: rgba(17, 17, 20, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition:
    background 0.3s,
    backdrop-filter 0.3s,
    box-shadow 0.3s,
    padding 0.3s;
}

.nuda-sticksrch.is-stuck {
  background: rgba(17, 17, 20, 0.85);
  backdrop-filter: blur(14px);
  box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.5);
  padding: 8px 14px;
}`,
      },
    ],
  },

  /* ─────────────── 15. Results Stagger In ─────────────── */
  {
    id: "results-stagger",
    name: "Results Stagger In",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-stagres">
        {["Magnetic button", "Liquid morph", "Border beam", "Shine sweep"].map((t, i) => (
          <div key={i} className="nuda-stagres__card" style={{ animationDelay: `${i * 90}ms` }}>
            <span className="nuda-stagres__dot" />
            {t}
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-stagres{display:flex;flex-direction:column;gap:6px;width:100%;max-width:260px}
      .nuda-stagres__card{display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;color:#fafafa;font-size:12px;animation:_stagIn .55s cubic-bezier(.16,1,.3,1) both;transition:border-color .25s,transform .2s}
      .nuda-stagres__card:hover{border-color:rgba(228,255,84,.3);transform:translateX(3px)}
      .nuda-stagres__dot{width:6px;height:6px;border-radius:50%;background:#e4ff54;flex-shrink:0;box-shadow:0 0 8px #e4ff54}
      @keyframes _stagIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-stagres__card{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-stagres">
  <div class="nuda-stagres__card" style="animation-delay:0ms">
    <span class="nuda-stagres__dot"></span>
    Magnetic button
  </div>
  <div class="nuda-stagres__card" style="animation-delay:90ms">
    <span class="nuda-stagres__dot"></span>
    Liquid morph
  </div>
  <!-- More cards -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-stagres__card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  animation: nuda-stag-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: border-color 0.25s, transform 0.2s;
}

.nuda-stagres__card:hover {
  border-color: rgba(228, 255, 84, 0.3);
  transform: translateX(3px);
}

@keyframes nuda-stag-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 16. Search History Pills ─────────────── */
  {
    id: "search-history-pills",
    name: "History Pills",
    category: "Search & Autocomplete",
    preview: (
      <div className="nuda-histpills">
        {["css animation", "spinner", "magnetic", "hero", "modal"].map((q, i) => (
          <span key={i} className="nuda-histpills__pill" style={{ animationDelay: `${i * 50}ms` }}>
            ⌕ {q}
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-histpills{display:flex;flex-wrap:wrap;gap:6px;width:100%;max-width:260px}
      .nuda-histpills__pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:99px;color:#a0a0a8;font-size:11px;cursor:pointer;animation:_histPop .45s cubic-bezier(.16,1,.3,1) both;transition:background .25s,border-color .25s,color .2s,transform .2s}
      .nuda-histpills__pill:hover{background:rgba(228,255,84,.08);border-color:#e4ff54;color:#e4ff54;transform:translateY(-2px)}
      @keyframes _histPop{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-histpills__pill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-histpills">
  <button class="nuda-histpills__pill">⌕ css animation</button>
  <button class="nuda-histpills__pill">⌕ spinner</button>
  <button class="nuda-histpills__pill">⌕ magnetic</button>
  <button class="nuda-histpills__pill">⌕ hero</button>
  <button class="nuda-histpills__pill">⌕ modal</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-histpills__pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 11px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  color: #a0a0a8;
  cursor: pointer;
  animation: nuda-hist-pop 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition:
    background 0.25s,
    border-color 0.25s,
    color 0.2s,
    transform 0.2s;
}

.nuda-histpills__pill:hover {
  background: rgba(228, 255, 84, 0.08);
  border-color: #e4ff54;
  color: #e4ff54;
  transform: translateY(-2px);
}

@keyframes nuda-hist-pop {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}`,
      },
    ],
  },
];
