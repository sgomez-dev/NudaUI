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
];
