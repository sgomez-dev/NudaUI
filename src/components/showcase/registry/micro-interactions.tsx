import type { NudaComponent } from "./types";

export const microInteractions: NudaComponent[] = [
  /* ─────────────── Like Heart ─────────────── */
  {
    id: "like-heart",
    name: "Like Heart",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-like-heart"
        aria-label="Like"
        aria-pressed="false"
        onClick={(e) => {
          const btn = e.currentTarget;
          const pressed = btn.getAttribute("aria-pressed") === "true";
          btn.setAttribute("aria-pressed", String(!pressed));
          if (!pressed) {
            btn.classList.add("nuda-like-heart--burst");
            setTimeout(() => btn.classList.remove("nuda-like-heart--burst"), 600);
          }
        }}
      >
        <svg className="nuda-like-heart__icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span className="nuda-like-heart__particles" />
      </button>
    ),
    cssInline: `
      .nuda-like-heart{--c:#ef4444;position:relative;background:none;border:none;cursor:pointer;padding:8px;outline:none}
      .nuda-like-heart__icon{width:28px;height:28px;fill:none;stroke:#888;transition:all .25s cubic-bezier(.4,.2,.2,1.2)}
      .nuda-like-heart[aria-pressed="true"] .nuda-like-heart__icon{fill:var(--c);stroke:var(--c);transform:scale(1.15)}
      .nuda-like-heart--burst .nuda-like-heart__icon{animation:_lhb .35s cubic-bezier(.17,.89,.32,1.49)}
      .nuda-like-heart__particles{position:absolute;inset:0;pointer-events:none}
      .nuda-like-heart--burst .nuda-like-heart__particles{background:radial-gradient(circle,var(--c) 1px,transparent 1px) 50% 20%/4px 4px no-repeat,radial-gradient(circle,#f59e0b 1px,transparent 1px) 25% 35%/4px 4px no-repeat,radial-gradient(circle,#ec4899 1px,transparent 1px) 75% 30%/4px 4px no-repeat,radial-gradient(circle,var(--c) 1px,transparent 1px) 40% 80%/4px 4px no-repeat,radial-gradient(circle,#f59e0b 1px,transparent 1px) 65% 75%/4px 4px no-repeat;animation:_lhp .5s ease-out forwards}
      @keyframes _lhb{0%{transform:scale(.5)}50%{transform:scale(1.3)}100%{transform:scale(1.15)}}
      @keyframes _lhp{0%{transform:scale(.5);opacity:1}100%{transform:scale(2.5);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-like-heart" aria-label="Like" aria-pressed="false">
  <svg class="nuda-like-heart__icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
  <span class="nuda-like-heart__particles"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Like Heart
   Heart fills and bursts particles on click.
   Customize: --heart-color */

.nuda-like-heart {
  --heart-color: #ef4444;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  outline: none;
}

.nuda-like-heart__icon {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: #888;
  transition: all 0.25s cubic-bezier(0.4, 0.2, 0.2, 1.2);
  will-change: transform;
}

.nuda-like-heart[aria-pressed="true"] .nuda-like-heart__icon {
  fill: var(--heart-color);
  stroke: var(--heart-color);
  transform: scale(1.15);
}

.nuda-like-heart--burst .nuda-like-heart__icon {
  animation: nuda-heart-bounce 0.35s cubic-bezier(0.17, 0.89, 0.32, 1.49);
}

.nuda-like-heart__particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.nuda-like-heart--burst .nuda-like-heart__particles {
  background:
    radial-gradient(circle, var(--heart-color) 1px, transparent 1px) 50% 20% / 4px 4px no-repeat,
    radial-gradient(circle, #f59e0b 1px, transparent 1px) 25% 35% / 4px 4px no-repeat,
    radial-gradient(circle, #ec4899 1px, transparent 1px) 75% 30% / 4px 4px no-repeat,
    radial-gradient(circle, var(--heart-color) 1px, transparent 1px) 40% 80% / 4px 4px no-repeat,
    radial-gradient(circle, #f59e0b 1px, transparent 1px) 65% 75% / 4px 4px no-repeat;
  animation: nuda-heart-particles 0.5s ease-out forwards;
}

@keyframes nuda-heart-bounce {
  0% { transform: scale(0.5); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1.15); }
}

@keyframes nuda-heart-particles {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-like-heart__icon { transition: none; }
  .nuda-like-heart--burst .nuda-like-heart__icon { animation: none; }
  .nuda-like-heart--burst .nuda-like-heart__particles { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Like Heart — vanilla JS
   Toggles aria-pressed and burst animation. */

(function () {
  document.querySelectorAll(".nuda-like-heart").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
      if (!pressed) {
        btn.classList.add("nuda-like-heart--burst");
        setTimeout(function () {
          btn.classList.remove("nuda-like-heart--burst");
        }, 600);
      }
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Copy Button ─────────────── */
  {
    id: "copy-button-tap",
    name: "Copy Button",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-copy-btn"
        aria-label="Copy to clipboard"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("nuda-copy-btn--copied");
          setTimeout(() => btn.classList.remove("nuda-copy-btn--copied"), 1500);
        }}
      >
        <svg className="nuda-copy-btn__clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg className="nuda-copy-btn__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-copy-btn{position:relative;background:none;border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:8px;cursor:pointer;color:#ccc;transition:border-color .2s}
      .nuda-copy-btn:hover{border-color:rgba(255,255,255,.3)}
      .nuda-copy-btn svg{width:18px;height:18px;transition:all .3s ease}
      .nuda-copy-btn__check{position:absolute;inset:0;margin:auto;width:18px;height:18px;opacity:0;transform:scale(.5);color:#22c55e}
      .nuda-copy-btn--copied .nuda-copy-btn__clip{opacity:0;transform:scale(.5)}
      .nuda-copy-btn--copied .nuda-copy-btn__check{opacity:1;transform:scale(1)}
      .nuda-copy-btn--copied{border-color:#22c55e50}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-copy-btn" aria-label="Copy to clipboard">
  <svg class="nuda-copy-btn__clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
  <svg class="nuda-copy-btn__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Copy Button
   Clipboard icon transitions to checkmark.
   Customize: --copy-success */

.nuda-copy-btn {
  --copy-success: #22c55e;
  position: relative;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  color: #ccc;
  transition: border-color 0.2s;
}

.nuda-copy-btn:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.nuda-copy-btn svg {
  width: 18px;
  height: 18px;
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

.nuda-copy-btn__check {
  position: absolute;
  inset: 0;
  margin: auto;
  opacity: 0;
  transform: scale(0.5);
  color: var(--copy-success);
}

.nuda-copy-btn--copied .nuda-copy-btn__clip {
  opacity: 0;
  transform: scale(0.5);
}

.nuda-copy-btn--copied .nuda-copy-btn__check {
  opacity: 1;
  transform: scale(1);
}

.nuda-copy-btn--copied {
  border-color: rgba(34, 197, 94, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-copy-btn svg { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Copy Button — vanilla JS
   Copies text and shows checkmark. */

(function () {
  document.querySelectorAll(".nuda-copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
      btn.classList.add("nuda-copy-btn--copied");
      setTimeout(function () {
        btn.classList.remove("nuda-copy-btn--copied");
      }, 1500);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Bookmark Toggle ─────────────── */
  {
    id: "bookmark-toggle",
    name: "Bookmark Toggle",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-bookmark"
        aria-label="Bookmark"
        aria-pressed="false"
        onClick={(e) => {
          const btn = e.currentTarget;
          const pressed = btn.getAttribute("aria-pressed") === "true";
          btn.setAttribute("aria-pressed", String(!pressed));
        }}
      >
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-bookmark{--c:#f59e0b;background:none;border:none;cursor:pointer;padding:8px;outline:none}
      .nuda-bookmark svg{width:24px;height:24px;fill:none;stroke:#888;transition:all .3s cubic-bezier(.4,.2,.2,1.3);will-change:transform}
      .nuda-bookmark[aria-pressed="true"] svg{fill:var(--c);stroke:var(--c);transform:scale(1.15)}
      .nuda-bookmark:active svg{transform:scale(.85)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-bookmark" aria-label="Bookmark" aria-pressed="false">
  <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bookmark Toggle
   Bookmark icon with fill animation.
   Customize: --bookmark-color */

.nuda-bookmark {
  --bookmark-color: #f59e0b;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  outline: none;
}

.nuda-bookmark svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #888;
  transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1.3);
  will-change: transform;
}

.nuda-bookmark[aria-pressed="true"] svg {
  fill: var(--bookmark-color);
  stroke: var(--bookmark-color);
  transform: scale(1.15);
}

.nuda-bookmark:active svg {
  transform: scale(0.85);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bookmark svg { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Bookmark Toggle — vanilla JS
   Toggles aria-pressed state. */

(function () {
  document.querySelectorAll(".nuda-bookmark").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Star Rating ─────────────── */
  {
    id: "star-rating",
    name: "Star Rating",
    category: "Micro-interactions",
    preview: (
      <div className="nuda-star-rating" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className="nuda-star-rating__star"
            data-value={i}
            aria-label={`${i} star${i > 1 ? "s" : ""}`}
            onClick={(e) => {
              const parent = e.currentTarget.parentElement!;
              parent.setAttribute("data-rating", String(i));
              parent.querySelectorAll(".nuda-star-rating__star").forEach((s, idx) => {
                (s as HTMLElement).setAttribute("data-filled", String(idx < i));
              });
            }}
          >
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-star-rating{display:inline-flex;gap:2px}
      .nuda-star-rating__star{background:none;border:none;cursor:pointer;padding:2px;outline:none}
      .nuda-star-rating__star svg{width:22px;height:22px;fill:none;stroke:#555;transition:all .2s ease;will-change:transform}
      .nuda-star-rating__star:hover svg{stroke:#f59e0b;transform:scale(1.15)}
      .nuda-star-rating__star[data-filled="true"] svg{fill:#f59e0b;stroke:#f59e0b}
      .nuda-star-rating:hover .nuda-star-rating__star svg{fill:none;stroke:#555}
      .nuda-star-rating .nuda-star-rating__star:hover svg,.nuda-star-rating .nuda-star-rating__star:hover~.nuda-star-rating__star svg{fill:none}
      .nuda-star-rating__star:hover svg,.nuda-star-rating__star:hover ~ .nuda-star-rating__star ~ *{fill:none}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-star-rating" role="radiogroup" aria-label="Rating">
  <button class="nuda-star-rating__star" data-value="1" aria-label="1 star">
    <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  </button>
  <button class="nuda-star-rating__star" data-value="2" aria-label="2 stars">
    <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  </button>
  <button class="nuda-star-rating__star" data-value="3" aria-label="3 stars">
    <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  </button>
  <button class="nuda-star-rating__star" data-value="4" aria-label="4 stars">
    <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  </button>
  <button class="nuda-star-rating__star" data-value="5" aria-label="5 stars">
    <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Star Rating
   Stars fill with golden color on hover/click.
   Customize: --star-color */

.nuda-star-rating {
  --star-color: #f59e0b;
  display: inline-flex;
  gap: 2px;
}

.nuda-star-rating__star {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  outline: none;
}

.nuda-star-rating__star svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: #555;
  transition: all 0.2s ease;
  will-change: transform;
}

.nuda-star-rating__star:hover svg {
  stroke: var(--star-color);
  transform: scale(1.15);
}

.nuda-star-rating__star[data-filled="true"] svg {
  fill: var(--star-color);
  stroke: var(--star-color);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-star-rating__star svg { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Star Rating — vanilla JS
   Fills stars up to the clicked value. */

(function () {
  document.querySelectorAll(".nuda-star-rating").forEach(function (group) {
    var stars = group.querySelectorAll(".nuda-star-rating__star");
    stars.forEach(function (star) {
      star.addEventListener("click", function () {
        var val = parseInt(star.getAttribute("data-value") || "0", 10);
        group.setAttribute("data-rating", String(val));
        stars.forEach(function (s, idx) {
          s.setAttribute("data-filled", String(idx < val));
        });
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Share Pop ─────────────── */
  {
    id: "share-pop",
    name: "Share Pop",
    category: "Micro-interactions",
    preview: (
      <div className="nuda-share-pop">
        <button
          className="nuda-share-pop__trigger"
          aria-label="Share"
          aria-expanded="false"
          onClick={(e) => {
            const btn = e.currentTarget;
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!expanded));
            btn.parentElement!.classList.toggle("nuda-share-pop--open");
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
        <div className="nuda-share-pop__icons">
          <span className="nuda-share-pop__icon" style={{ background: "#1da1f2" }}>T</span>
          <span className="nuda-share-pop__icon" style={{ background: "#4267b2" }}>F</span>
          <span className="nuda-share-pop__icon" style={{ background: "#25d366" }}>W</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-share-pop{position:relative;display:inline-flex;align-items:center}
      .nuda-share-pop__trigger{background:none;border:1px solid rgba(255,255,255,.15);border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#ccc;transition:border-color .2s}
      .nuda-share-pop__trigger:hover{border-color:rgba(255,255,255,.3)}
      .nuda-share-pop__trigger svg{width:18px;height:18px}
      .nuda-share-pop__icons{display:flex;gap:6px;margin-left:4px;overflow:hidden}
      .nuda-share-pop__icon{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;opacity:0;transform:scale(.3) translateX(-10px);transition:all .3s cubic-bezier(.34,1.56,.64,1)}
      .nuda-share-pop--open .nuda-share-pop__icon{opacity:1;transform:scale(1) translateX(0)}
      .nuda-share-pop--open .nuda-share-pop__icon:nth-child(2){transition-delay:.05s}
      .nuda-share-pop--open .nuda-share-pop__icon:nth-child(3){transition-delay:.1s}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-share-pop">
  <button class="nuda-share-pop__trigger" aria-label="Share" aria-expanded="false">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  </button>
  <div class="nuda-share-pop__icons">
    <a class="nuda-share-pop__icon" href="#" style="background:#1da1f2;" aria-label="Twitter">T</a>
    <a class="nuda-share-pop__icon" href="#" style="background:#4267b2;" aria-label="Facebook">F</a>
    <a class="nuda-share-pop__icon" href="#" style="background:#25d366;" aria-label="WhatsApp">W</a>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Share Pop
   Share button pops out social icons.
   Customize: icon colors inline or via variables */

.nuda-share-pop {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.nuda-share-pop__trigger {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ccc;
  transition: border-color 0.2s;
}

.nuda-share-pop__trigger:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.nuda-share-pop__trigger svg {
  width: 18px;
  height: 18px;
}

.nuda-share-pop__icons {
  display: flex;
  gap: 6px;
  margin-left: 4px;
}

.nuda-share-pop__icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  opacity: 0;
  transform: scale(0.3) translateX(-10px);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, opacity;
}

.nuda-share-pop--open .nuda-share-pop__icon {
  opacity: 1;
  transform: scale(1) translateX(0);
}

.nuda-share-pop--open .nuda-share-pop__icon:nth-child(2) { transition-delay: 0.05s; }
.nuda-share-pop--open .nuda-share-pop__icon:nth-child(3) { transition-delay: 0.1s; }

@media (prefers-reduced-motion: reduce) {
  .nuda-share-pop__icon { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Share Pop — vanilla JS
   Toggles the pop-out social icons. */

(function () {
  document.querySelectorAll(".nuda-share-pop__trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.parentElement.classList.toggle("nuda-share-pop--open");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Download Arrow ─────────────── */
  {
    id: "download-arrow",
    name: "Download Arrow",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-dl-btn"
        aria-label="Download"
        onClick={(e) => {
          const btn = e.currentTarget;
          if (btn.classList.contains("nuda-dl-btn--done")) return;
          btn.classList.add("nuda-dl-btn--loading");
          setTimeout(() => {
            btn.classList.remove("nuda-dl-btn--loading");
            btn.classList.add("nuda-dl-btn--done");
            setTimeout(() => btn.classList.remove("nuda-dl-btn--done"), 2000);
          }, 1200);
        }}
      >
        <svg className="nuda-dl-btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" /><path d="M19 12l-7 7-7-7" />
        </svg>
        <svg className="nuda-dl-btn__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="nuda-dl-btn__spinner" />
      </button>
    ),
    cssInline: `
      .nuda-dl-btn{position:relative;width:44px;height:44px;border-radius:50%;border:2px solid rgba(255,255,255,.2);background:none;cursor:pointer;overflow:hidden;color:#ccc}
      .nuda-dl-btn svg{position:absolute;inset:0;margin:auto;width:20px;height:20px;transition:all .3s ease}
      .nuda-dl-btn__check{opacity:0;transform:scale(.5);color:#22c55e}
      .nuda-dl-btn__spinner{position:absolute;inset:2px;border:2px solid transparent;border-top-color:#e4ff54;border-radius:50%;opacity:0}
      .nuda-dl-btn--loading .nuda-dl-btn__arrow{opacity:0;transform:translateY(20px)}
      .nuda-dl-btn--loading .nuda-dl-btn__spinner{opacity:1;animation:_dls .6s linear infinite}
      .nuda-dl-btn--done .nuda-dl-btn__arrow{opacity:0;transform:scale(.5)}
      .nuda-dl-btn--done .nuda-dl-btn__check{opacity:1;transform:scale(1)}
      .nuda-dl-btn--done{border-color:#22c55e50}
      @keyframes _dls{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-dl-btn" aria-label="Download">
  <svg class="nuda-dl-btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/>
  </svg>
  <svg class="nuda-dl-btn__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
  <span class="nuda-dl-btn__spinner"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Download Arrow
   Arrow animates to spinner then checkmark.
   Customize: --dl-accent */

.nuda-dl-btn {
  --dl-accent: #e4ff54;
  --dl-success: #22c55e;
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: none;
  cursor: pointer;
  overflow: hidden;
  color: #ccc;
}

.nuda-dl-btn svg {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

.nuda-dl-btn__check {
  opacity: 0;
  transform: scale(0.5);
  color: var(--dl-success);
}

.nuda-dl-btn__spinner {
  position: absolute;
  inset: 2px;
  border: 2px solid transparent;
  border-top-color: var(--dl-accent);
  border-radius: 50%;
  opacity: 0;
}

.nuda-dl-btn--loading .nuda-dl-btn__arrow {
  opacity: 0;
  transform: translateY(20px);
}

.nuda-dl-btn--loading .nuda-dl-btn__spinner {
  opacity: 1;
  animation: nuda-dl-spin 0.6s linear infinite;
}

.nuda-dl-btn--done .nuda-dl-btn__arrow {
  opacity: 0;
  transform: scale(0.5);
}

.nuda-dl-btn--done .nuda-dl-btn__check {
  opacity: 1;
  transform: scale(1);
}

.nuda-dl-btn--done {
  border-color: rgba(34, 197, 94, 0.3);
}

@keyframes nuda-dl-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dl-btn svg { transition: none; }
  .nuda-dl-btn--loading .nuda-dl-btn__spinner { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Download Arrow — vanilla JS
   Simulates download with loading and success states. */

(function () {
  document.querySelectorAll(".nuda-dl-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("nuda-dl-btn--done")) return;
      btn.classList.add("nuda-dl-btn--loading");
      setTimeout(function () {
        btn.classList.remove("nuda-dl-btn--loading");
        btn.classList.add("nuda-dl-btn--done");
        setTimeout(function () {
          btn.classList.remove("nuda-dl-btn--done");
        }, 2000);
      }, 1200);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Send Button ─────────────── */
  {
    id: "send-button",
    name: "Send Button",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-send-btn"
        aria-label="Send"
        onClick={(e) => {
          const btn = e.currentTarget;
          btn.classList.add("nuda-send-btn--sent");
          setTimeout(() => btn.classList.remove("nuda-send-btn--sent"), 1200);
        }}
      >
        <svg className="nuda-send-btn__plane" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
        <svg className="nuda-send-btn__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-send-btn{position:relative;width:44px;height:44px;border-radius:50%;border:none;background:linear-gradient(135deg,#6366f1,#8b5cf6);cursor:pointer;color:#fff;overflow:hidden}
      .nuda-send-btn svg{position:absolute;inset:0;margin:auto;width:20px;height:20px;transition:all .4s cubic-bezier(.4,.2,.2,1)}
      .nuda-send-btn__plane{transform:translateX(-1px)}
      .nuda-send-btn__check{opacity:0;transform:scale(.3)}
      .nuda-send-btn--sent .nuda-send-btn__plane{opacity:0;transform:translate(30px,-30px) scale(.3)}
      .nuda-send-btn--sent .nuda-send-btn__check{opacity:1;transform:scale(1)}
      .nuda-send-btn--sent{background:linear-gradient(135deg,#22c55e,#16a34a)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-send-btn" aria-label="Send">
  <svg class="nuda-send-btn__plane" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
  <svg class="nuda-send-btn__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Send Button
   Paper plane flies away on click, checkmark appears.
   Customize: --send-bg, --send-success */

.nuda-send-btn {
  --send-bg: linear-gradient(135deg, #6366f1, #8b5cf6);
  --send-success: linear-gradient(135deg, #22c55e, #16a34a);
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--send-bg);
  cursor: pointer;
  color: #fff;
  overflow: hidden;
}

.nuda-send-btn svg {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
  will-change: transform, opacity;
}

.nuda-send-btn__plane {
  transform: translateX(-1px);
}

.nuda-send-btn__check {
  opacity: 0;
  transform: scale(0.3);
}

.nuda-send-btn--sent .nuda-send-btn__plane {
  opacity: 0;
  transform: translate(30px, -30px) scale(0.3);
}

.nuda-send-btn--sent .nuda-send-btn__check {
  opacity: 1;
  transform: scale(1);
}

.nuda-send-btn--sent {
  background: var(--send-success);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-send-btn svg { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Send Button — vanilla JS
   Paper plane flies away, checkmark appears. */

(function () {
  document.querySelectorAll(".nuda-send-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.add("nuda-send-btn--sent");
      setTimeout(function () {
        btn.classList.remove("nuda-send-btn--sent");
      }, 1200);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Menu Morph ─────────────── */
  {
    id: "menu-morph",
    name: "Menu Morph",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-menu-morph"
        aria-label="Menu"
        aria-expanded="false"
        onClick={(e) => {
          const btn = e.currentTarget;
          const expanded = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", String(!expanded));
        }}
      >
        <span className="nuda-menu-morph__line" />
        <span className="nuda-menu-morph__line" />
        <span className="nuda-menu-morph__line" />
      </button>
    ),
    cssInline: `
      .nuda-menu-morph{--c:#fff;width:36px;height:36px;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0}
      .nuda-menu-morph__line{display:block;width:22px;height:2px;background:var(--c);border-radius:2px;transition:all .3s cubic-bezier(.4,.2,.2,1);transform-origin:center}
      .nuda-menu-morph[aria-expanded="true"] .nuda-menu-morph__line:nth-child(1){transform:translateY(7px) rotate(45deg)}
      .nuda-menu-morph[aria-expanded="true"] .nuda-menu-morph__line:nth-child(2){opacity:0;transform:scaleX(0)}
      .nuda-menu-morph[aria-expanded="true"] .nuda-menu-morph__line:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-menu-morph" aria-label="Menu" aria-expanded="false">
  <span class="nuda-menu-morph__line"></span>
  <span class="nuda-menu-morph__line"></span>
  <span class="nuda-menu-morph__line"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Menu Morph
   Hamburger morphs to X on toggle.
   Customize: --menu-color */

.nuda-menu-morph {
  --menu-color: #fff;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0;
}

.nuda-menu-morph__line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--menu-color);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-origin: center;
  will-change: transform, opacity;
}

.nuda-menu-morph[aria-expanded="true"] .nuda-menu-morph__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nuda-menu-morph[aria-expanded="true"] .nuda-menu-morph__line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.nuda-menu-morph[aria-expanded="true"] .nuda-menu-morph__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-menu-morph__line { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Menu Morph — vanilla JS
   Toggles hamburger to X. */

(function () {
  document.querySelectorAll(".nuda-menu-morph").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Spotlight Card ─────────────── */
  {
    id: "spotlight-card-mi",
    name: "Spotlight Card",
    category: "Micro-interactions",
    preview: (
      <div
        className="nuda-spotlight-card"
        onMouseMove={(e) => {
          const c = e.currentTarget;
          const r = c.getBoundingClientRect();
          c.style.setProperty("--sx", `${e.clientX - r.left}px`);
          c.style.setProperty("--sy", `${e.clientY - r.top}px`);
        }}
      >
        <div className="nuda-spotlight-card__inner">
          <strong>Spotlight</strong>
          <span>Move your cursor over me</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-spotlight-card{--sx:50%;--sy:50%;position:relative;width:240px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:#0c0c10;overflow:hidden;isolation:isolate}
      .nuda-spotlight-card::before{content:'';position:absolute;inset:0;background:radial-gradient(220px circle at var(--sx) var(--sy),rgba(228,255,84,.18),transparent 60%);opacity:0;transition:opacity .3s ease;z-index:0}
      .nuda-spotlight-card:hover::before{opacity:1}
      .nuda-spotlight-card__inner{position:relative;z-index:1;display:flex;flex-direction:column;gap:6px;padding:22px}
      .nuda-spotlight-card__inner strong{color:#fafafa;font-size:15px}
      .nuda-spotlight-card__inner span{color:#a0a0a8;font-size:12px}
      @media(prefers-reduced-motion:reduce){.nuda-spotlight-card::before{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-spotlight-card">
  <div class="nuda-spotlight-card__inner">
    <strong>Spotlight</strong>
    <span>Move your cursor over me</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Spotlight Card — a radial glow follows the cursor via CSS vars. */
.nuda-spotlight-card {
  --sx: 50%;
  --sy: 50%;
  position: relative;
  width: 240px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background: #0c0c10;
  overflow: hidden;
  isolation: isolate;
}

.nuda-spotlight-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(220px circle at var(--sx) var(--sy), rgba(228, 255, 84, 0.18), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.nuda-spotlight-card:hover::before { opacity: 1; }

.nuda-spotlight-card__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-spotlight-card::before { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Spotlight Card — vanilla JS
   Tracks the cursor and updates the --sx / --sy spotlight position. */
(function () {
  document.querySelectorAll(".nuda-spotlight-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--sx", (e.clientX - r.left) + "px");
      card.style.setProperty("--sy", (e.clientY - r.top) + "px");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Tilt Card ─────────────── */
  {
    id: "tilt-card-mi",
    name: "Tilt Card",
    category: "Micro-interactions",
    preview: (
      <div
        className="nuda-tilt-card"
        onMouseMove={(e) => {
          const c = e.currentTarget;
          const r = c.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          c.style.setProperty("--rx", `${(-py * 14).toFixed(2)}deg`);
          c.style.setProperty("--ry", `${(px * 14).toFixed(2)}deg`);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--rx", "0deg");
          e.currentTarget.style.setProperty("--ry", "0deg");
        }}
      >
        <div className="nuda-tilt-card__inner">Tilt me</div>
      </div>
    ),
    cssInline: `
      .nuda-tilt-card{--rx:0deg;--ry:0deg;perspective:600px;width:200px;height:120px}
      .nuda-tilt-card__inner{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border:1px solid rgba(228,255,84,.3);border-radius:14px;background:linear-gradient(135deg,#16161c,#0c0c10);color:#e4ff54;font-size:14px;font-weight:700;transform:rotateX(var(--rx)) rotateY(var(--ry));transition:transform .2s cubic-bezier(.23,1,.32,1);box-shadow:0 14px 30px -16px rgba(0,0,0,.7);will-change:transform}
      @media(prefers-reduced-motion:reduce){.nuda-tilt-card__inner{transform:none!important;transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tilt-card">
  <div class="nuda-tilt-card__inner">Tilt me</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tilt Card — a 3D parallax tilt that leans toward the cursor. */
.nuda-tilt-card {
  --rx: 0deg;
  --ry: 0deg;
  perspective: 600px;
  width: 200px;
  height: 120px;
}

.nuda-tilt-card__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(228, 255, 84, 0.3);
  border-radius: 14px;
  background: linear-gradient(135deg, #16161c, #0c0c10);
  color: #e4ff54;
  font-weight: 700;
  transform: rotateX(var(--rx)) rotateY(var(--ry));
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 14px 30px -16px rgba(0, 0, 0, 0.7);
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tilt-card__inner { transform: none !important; transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Tilt Card — vanilla JS
   Maps cursor position to rotateX/rotateY via CSS vars. */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var max = 14; /* max tilt in degrees */
  document.querySelectorAll(".nuda-tilt-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--rx", (-py * max).toFixed(2) + "deg");
      card.style.setProperty("--ry", (px * max).toFixed(2) + "deg");
    });
    card.addEventListener("mouseleave", function () {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Click Spark ─────────────── */
  {
    id: "click-spark",
    name: "Click Spark",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-click-spark"
        aria-label="Click for sparks"
        onClick={(e) => {
          const b = e.currentTarget;
          const r = b.getBoundingClientRect();
          const cx = e.clientX - r.left;
          const cy = e.clientY - r.top;
          for (let i = 0; i < 8; i++) {
            const s = document.createElement("span");
            s.className = "nuda-click-spark__spark";
            const a = (Math.PI * 2 * i) / 8;
            s.style.left = `${cx}px`;
            s.style.top = `${cy}px`;
            s.style.setProperty("--dx", `${Math.cos(a) * 26}px`);
            s.style.setProperty("--dy", `${Math.sin(a) * 26}px`);
            b.appendChild(s);
            s.addEventListener("animationend", () => s.remove());
          }
        }}
      >
        Spark
      </button>
    ),
    cssInline: `
      .nuda-click-spark{position:relative;padding:12px 30px;background:#0c0c10;color:#e4ff54;border:1px solid rgba(228,255,84,.4);border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;overflow:visible}
      .nuda-click-spark__spark{position:absolute;width:5px;height:5px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);animation:_clickSpark .5s ease-out forwards;pointer-events:none}
      .nuda-click-spark:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @keyframes _clickSpark{0%{transform:translate(-50%,-50%) translate(0,0) scale(1);opacity:1}100%{transform:translate(-50%,-50%) translate(var(--dx),var(--dy)) scale(0);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-click-spark__spark{animation:none;display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-click-spark" aria-label="Click for sparks">Spark</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Click Spark — sparks fly outward from the click point. */
.nuda-click-spark {
  position: relative;
  padding: 12px 30px;
  background: #0c0c10;
  color: #e4ff54;
  border: 1px solid rgba(228, 255, 84, 0.4);
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  overflow: visible;
}

.nuda-click-spark__spark {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e4ff54;
  transform: translate(-50%, -50%);
  animation: nuda-click-spark 0.5s ease-out forwards;
  pointer-events: none;
}

@keyframes nuda-click-spark {
  0%   { transform: translate(-50%, -50%) translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
}

.nuda-click-spark:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-click-spark__spark { animation: none; display: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Click Spark — vanilla JS
   Spawns 8 radial sparks at the click point. */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var COUNT = 8;
  document.querySelectorAll(".nuda-click-spark").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var r = btn.getBoundingClientRect();
      var cx = e.clientX - r.left;
      var cy = e.clientY - r.top;
      for (var i = 0; i < COUNT; i++) {
        var s = document.createElement("span");
        s.className = "nuda-click-spark__spark";
        var a = (Math.PI * 2 * i) / COUNT;
        s.style.left = cx + "px";
        s.style.top = cy + "px";
        s.style.setProperty("--dx", Math.cos(a) * 26 + "px");
        s.style.setProperty("--dy", Math.sin(a) * 26 + "px");
        btn.appendChild(s);
        s.addEventListener("animationend", function () { this.remove(); });
      }
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Checkbox Pop ─────────────── */
  {
    id: "checkbox-pop",
    name: "Checkbox Pop",
    category: "Micro-interactions",
    preview: (
      <label className="nuda-checkbox-pop">
        <input type="checkbox" defaultChecked />
        <span className="nuda-checkbox-pop__box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="nuda-checkbox-pop__label">Pops with spring</span>
      </label>
    ),
    cssInline: `
      .nuda-checkbox-pop{display:inline-flex;align-items:center;gap:10px;cursor:pointer;user-select:none}
      .nuda-checkbox-pop input{position:absolute;width:1px;height:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden}
      .nuda-checkbox-pop__box{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border:2px solid #555;border-radius:7px;color:#09090b;transition:background .2s,border-color .2s,transform .3s cubic-bezier(.34,1.56,.64,1)}
      .nuda-checkbox-pop__box svg{width:15px;height:15px;stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset .3s ease .05s}
      .nuda-checkbox-pop input:checked+.nuda-checkbox-pop__box{background:#e4ff54;border-color:#e4ff54;transform:scale(1.12)}
      .nuda-checkbox-pop input:checked+.nuda-checkbox-pop__box svg{stroke-dashoffset:0}
      .nuda-checkbox-pop input:focus-visible+.nuda-checkbox-pop__box{outline:2px solid #e4ff54;outline-offset:3px}
      .nuda-checkbox-pop__label{color:#fafafa;font-size:13px}
      @media(prefers-reduced-motion:reduce){.nuda-checkbox-pop__box,.nuda-checkbox-pop__box svg{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<label class="nuda-checkbox-pop">
  <input type="checkbox" />
  <span class="nuda-checkbox-pop__box">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </span>
  <span class="nuda-checkbox-pop__label">Pops with spring</span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Checkbox Pop — box springs in scale while the tick draws via dashoffset. */
.nuda-checkbox-pop {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.nuda-checkbox-pop input {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
}

.nuda-checkbox-pop__box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 2px solid #555;
  border-radius: 7px;
  color: #09090b;
  transition: background 0.2s, border-color 0.2s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-checkbox-pop__box svg {
  width: 15px;
  height: 15px;
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  transition: stroke-dashoffset 0.3s ease 0.05s;
}

.nuda-checkbox-pop input:checked + .nuda-checkbox-pop__box {
  background: #e4ff54;
  border-color: #e4ff54;
  transform: scale(1.12);
}

.nuda-checkbox-pop input:checked + .nuda-checkbox-pop__box svg {
  stroke-dashoffset: 0;
}

.nuda-checkbox-pop input:focus-visible + .nuda-checkbox-pop__box {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-checkbox-pop__box,
  .nuda-checkbox-pop__box svg { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── Switch Bounce ─────────────── */
  {
    id: "switch-bounce",
    name: "Switch Bounce",
    category: "Micro-interactions",
    preview: (
      <label className="nuda-switch-bounce" aria-label="Toggle">
        <input type="checkbox" defaultChecked />
        <span className="nuda-switch-bounce__track">
          <span className="nuda-switch-bounce__thumb" />
        </span>
      </label>
    ),
    cssInline: `
      .nuda-switch-bounce{display:inline-flex;cursor:pointer}
      .nuda-switch-bounce input{position:absolute;width:1px;height:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden}
      .nuda-switch-bounce__track{position:relative;display:inline-block;width:52px;height:28px;border-radius:99px;background:#2a2a32;transition:background .3s ease}
      .nuda-switch-bounce__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fafafa;transform:translateX(0);transition:transform .35s cubic-bezier(.34,1.56,.64,1)}
      .nuda-switch-bounce input:checked+.nuda-switch-bounce__track{background:#e4ff54}
      .nuda-switch-bounce input:checked+.nuda-switch-bounce__track .nuda-switch-bounce__thumb{transform:translateX(24px);background:#09090b}
      .nuda-switch-bounce input:focus-visible+.nuda-switch-bounce__track{outline:2px solid #e4ff54;outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-switch-bounce__track,.nuda-switch-bounce__thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<label class="nuda-switch-bounce" aria-label="Toggle">
  <input type="checkbox" />
  <span class="nuda-switch-bounce__track">
    <span class="nuda-switch-bounce__thumb"></span>
  </span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Switch Bounce — toggle whose thumb overshoots with a springy easing. */
.nuda-switch-bounce { display: inline-flex; cursor: pointer; }

.nuda-switch-bounce input {
  position: absolute;
  width: 1px; height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
}

.nuda-switch-bounce__track {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
  border-radius: 99px;
  background: #2a2a32;
  transition: background 0.3s ease;
}

.nuda-switch-bounce__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fafafa;
  transform: translateX(0);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-switch-bounce input:checked + .nuda-switch-bounce__track { background: #e4ff54; }
.nuda-switch-bounce input:checked + .nuda-switch-bounce__track .nuda-switch-bounce__thumb {
  transform: translateX(24px);
  background: #09090b;
}

.nuda-switch-bounce input:focus-visible + .nuda-switch-bounce__track {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-switch-bounce__track,
  .nuda-switch-bounce__thumb { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── Copy Feedback ─────────────── */
  {
    id: "copy-feedback",
    name: "Copy Feedback",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-copy-feedback"
        data-copy="hello@nudaui.dev"
        onClick={(e) => {
          const b = e.currentTarget;
          b.classList.add("is-copied");
          setTimeout(() => b.classList.remove("is-copied"), 1500);
        }}
      >
        <span className="nuda-copy-feedback__idle">Copy</span>
        <span className="nuda-copy-feedback__done">Copied!</span>
      </button>
    ),
    cssInline: `
      .nuda-copy-feedback{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:96px;padding:10px 18px;background:#0c0c10;color:#fafafa;border:1px solid rgba(255,255,255,.15);border-radius:9px;font-size:13px;font-weight:600;cursor:pointer;overflow:hidden;transition:border-color .25s,color .25s}
      .nuda-copy-feedback__idle,.nuda-copy-feedback__done{display:inline-block;transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .25s}
      .nuda-copy-feedback__done{position:absolute;opacity:0;transform:translateY(120%);color:#e4ff54}
      .nuda-copy-feedback.is-copied{border-color:#e4ff54}
      .nuda-copy-feedback.is-copied .nuda-copy-feedback__idle{opacity:0;transform:translateY(-120%)}
      .nuda-copy-feedback.is-copied .nuda-copy-feedback__done{opacity:1;transform:translateY(0)}
      .nuda-copy-feedback:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-copy-feedback__idle,.nuda-copy-feedback__done{transition:opacity .2s}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-copy-feedback" data-copy="hello@nudaui.dev">
  <span class="nuda-copy-feedback__idle">Copy</span>
  <span class="nuda-copy-feedback__done">Copied!</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Copy Feedback — "Copy" slides out as "Copied!" slides in on click. */
.nuda-copy-feedback {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  padding: 10px 18px;
  background: #0c0c10;
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.25s, color 0.25s;
}

.nuda-copy-feedback__idle,
.nuda-copy-feedback__done {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s;
}

.nuda-copy-feedback__done {
  position: absolute;
  opacity: 0;
  transform: translateY(120%);
  color: #e4ff54;
}

.nuda-copy-feedback.is-copied { border-color: #e4ff54; }
.nuda-copy-feedback.is-copied .nuda-copy-feedback__idle {
  opacity: 0;
  transform: translateY(-120%);
}
.nuda-copy-feedback.is-copied .nuda-copy-feedback__done {
  opacity: 1;
  transform: translateY(0);
}

.nuda-copy-feedback:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-copy-feedback__idle,
  .nuda-copy-feedback__done { transition: opacity 0.2s; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Copy Feedback — vanilla JS
   Copies data-copy text and morphs the label to "Copied!". */
(function () {
  document.querySelectorAll(".nuda-copy-feedback").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      if (navigator.clipboard) navigator.clipboard.writeText(text);
      btn.classList.add("is-copied");
      setTimeout(function () { btn.classList.remove("is-copied"); }, 1500);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Save Heartbeat ─────────────── */
  {
    id: "save-heartbeat",
    name: "Save Heartbeat",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-save-heartbeat"
        aria-label="Save"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const pressed = b.getAttribute("aria-pressed") === "true";
          b.setAttribute("aria-pressed", String(!pressed));
          if (!pressed) {
            b.classList.add("is-beat");
            setTimeout(() => b.classList.remove("is-beat"), 700);
          }
        }}
      >
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-save-heartbeat{background:none;border:none;cursor:pointer;padding:8px;outline:none}
      .nuda-save-heartbeat svg{width:28px;height:28px;fill:none;stroke:#777;transition:fill .25s,stroke .25s}
      .nuda-save-heartbeat[aria-pressed="true"] svg{fill:#e4ff54;stroke:#e4ff54}
      .nuda-save-heartbeat.is-beat svg{animation:_saveBeat .7s ease-in-out}
      .nuda-save-heartbeat:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:8px}
      @keyframes _saveBeat{0%{transform:scale(1)}15%{transform:scale(1.3)}30%{transform:scale(1)}45%{transform:scale(1.22)}60%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-save-heartbeat svg{transition:none}.nuda-save-heartbeat.is-beat svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-save-heartbeat" aria-label="Save" aria-pressed="false">
  <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Save Heartbeat — heart fills and double-beats on save. */
.nuda-save-heartbeat {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  outline: none;
}

.nuda-save-heartbeat svg {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: #777;
  transition: fill 0.25s, stroke 0.25s;
}

.nuda-save-heartbeat[aria-pressed="true"] svg {
  fill: #e4ff54;
  stroke: #e4ff54;
}

.nuda-save-heartbeat.is-beat svg {
  animation: nuda-save-beat 0.7s ease-in-out;
}

@keyframes nuda-save-beat {
  0%   { transform: scale(1); }
  15%  { transform: scale(1.3); }
  30%  { transform: scale(1); }
  45%  { transform: scale(1.22); }
  60%  { transform: scale(1); }
}

.nuda-save-heartbeat:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-save-heartbeat svg { transition: none; }
  .nuda-save-heartbeat.is-beat svg { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Save Heartbeat — vanilla JS
   Toggles saved state and triggers the heartbeat on save. */
(function () {
  document.querySelectorAll(".nuda-save-heartbeat").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
      if (!pressed) {
        btn.classList.add("is-beat");
        setTimeout(function () { btn.classList.remove("is-beat"); }, 700);
      }
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Thumbs React ─────────────── */
  {
    id: "thumbs-react",
    name: "Thumbs React",
    category: "Micro-interactions",
    preview: (
      <button
        className="nuda-thumbs-react"
        aria-label="Thumbs up"
        aria-pressed="false"
        onClick={(e) => {
          const b = e.currentTarget;
          const pressed = b.getAttribute("aria-pressed") === "true";
          b.setAttribute("aria-pressed", String(!pressed));
          if (!pressed) {
            b.classList.add("is-up");
            setTimeout(() => b.classList.remove("is-up"), 600);
          }
        }}
      >
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v12" />
          <path d="M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z" />
        </svg>
        <span className="nuda-thumbs-react__burst" aria-hidden="true" />
      </button>
    ),
    cssInline: `
      .nuda-thumbs-react{position:relative;background:none;border:none;cursor:pointer;padding:8px;outline:none}
      .nuda-thumbs-react svg{width:26px;height:26px;fill:none;stroke:#777;transition:fill .25s,stroke .25s,transform .3s cubic-bezier(.34,1.56,.64,1)}
      .nuda-thumbs-react[aria-pressed="true"] svg{fill:#e4ff54;stroke:#e4ff54}
      .nuda-thumbs-react.is-up svg{animation:_thumbsPop .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-thumbs-react__burst{position:absolute;inset:0;border-radius:50%;border:2px solid #e4ff54;opacity:0;transform:scale(.4);pointer-events:none}
      .nuda-thumbs-react.is-up .nuda-thumbs-react__burst{animation:_thumbsBurst .6s ease-out}
      .nuda-thumbs-react:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:8px}
      @keyframes _thumbsPop{0%{transform:scale(1) rotate(0)}40%{transform:scale(1.3) rotate(-12deg)}100%{transform:scale(1) rotate(0)}}
      @keyframes _thumbsBurst{0%{opacity:.8;transform:scale(.4)}100%{opacity:0;transform:scale(1.6)}}
      @media(prefers-reduced-motion:reduce){.nuda-thumbs-react svg{transition:none}.nuda-thumbs-react.is-up svg,.nuda-thumbs-react.is-up .nuda-thumbs-react__burst{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-thumbs-react" aria-label="Thumbs up" aria-pressed="false">
  <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 10v12"/>
    <path d="M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z"/>
  </svg>
  <span class="nuda-thumbs-react__burst" aria-hidden="true"></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Thumbs React — thumbs-up pops and a ring bursts outward on click. */
.nuda-thumbs-react {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  outline: none;
}

.nuda-thumbs-react svg {
  width: 26px;
  height: 26px;
  fill: none;
  stroke: #777;
  transition: fill 0.25s, stroke 0.25s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-thumbs-react[aria-pressed="true"] svg {
  fill: #e4ff54;
  stroke: #e4ff54;
}

.nuda-thumbs-react.is-up svg {
  animation: nuda-thumbs-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-thumbs-react__burst {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #e4ff54;
  opacity: 0;
  transform: scale(0.4);
  pointer-events: none;
}

.nuda-thumbs-react.is-up .nuda-thumbs-react__burst {
  animation: nuda-thumbs-burst 0.6s ease-out;
}

@keyframes nuda-thumbs-pop {
  0%   { transform: scale(1) rotate(0); }
  40%  { transform: scale(1.3) rotate(-12deg); }
  100% { transform: scale(1) rotate(0); }
}

@keyframes nuda-thumbs-burst {
  0%   { opacity: 0.8; transform: scale(0.4); }
  100% { opacity: 0; transform: scale(1.6); }
}

.nuda-thumbs-react:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 3px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-thumbs-react svg { transition: none; }
  .nuda-thumbs-react.is-up svg,
  .nuda-thumbs-react.is-up .nuda-thumbs-react__burst { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Thumbs React — vanilla JS
   Toggles liked state and fires the pop + burst. */
(function () {
  document.querySelectorAll(".nuda-thumbs-react").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
      if (!pressed) {
        btn.classList.add("is-up");
        setTimeout(function () { btn.classList.remove("is-up"); }, 600);
      }
    });
  });
})();`,
      },
    ],
  },
];
