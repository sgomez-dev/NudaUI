import type { NudaComponent } from "./types";

/* View Transitions
   Self-contained demos of the CSS/JS View Transitions API. Every preview swaps
   state via document.startViewTransition(...) where supported, falling back to
   an instant swap where not. Copyable JS is framework-free vanilla JS. All
   prefixes use the "vt-" stem; the <style> is GLOBAL so ids/keyframes are unique.

   Preview note: React inline handlers call startViewTransition with a feature
   check so the gallery animates in supporting browsers and stays correct
   everywhere else. The `as any` casts cover the API in TS lib targets that
   predate the View Transitions typings. */

export const viewTransitions: NudaComponent[] = [
  /* ─────────────── Cross Fade ─────────────── */
  {
    id: "vt-crossfade",
    name: "Cross Fade",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-crossfade-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt-crossfade__stage" data-state="a">
          <span className="nuda-vt-crossfade__panel">State A</span>
        </div>
        <button
          type="button"
          className="nuda-vt-crossfade__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const stage = root.querySelector<HTMLElement>(".nuda-vt-crossfade__stage")!;
            const swap = () => {
              const next = stage.dataset.state === "a" ? "b" : "a";
              stage.dataset.state = next;
              stage.querySelector(".nuda-vt-crossfade__panel")!.textContent = next === "a" ? "State A" : "State B";
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Swap state
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-crossfade-demo{padding:.5rem}
      .nuda-vt-crossfade__stage{display:flex;align-items:center;justify-content:center;width:140px;height:64px;border-radius:12px;border:1px solid rgba(255,255,255,.1);view-transition-name:vt-crossfade-stage}
      .nuda-vt-crossfade__stage[data-state="a"]{background:#18181b}
      .nuda-vt-crossfade__stage[data-state="b"]{background:#1f2937}
      .nuda-vt-crossfade__panel{font-size:.8rem;font-weight:700;color:#e4ff54}
      .nuda-vt-crossfade__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-crossfade__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      ::view-transition-old(vt-crossfade-stage),::view-transition-new(vt-crossfade-stage){animation-duration:.4s;animation-timing-function:cubic-bezier(.4,0,.2,1)}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt-crossfade-stage),::view-transition-new(vt-crossfade-stage){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-crossfade">
  <div class="nuda-vt-crossfade__stage" data-state="a">
    <span class="nuda-vt-crossfade__panel">State A</span>
  </div>
  <button type="button" class="nuda-vt-crossfade__btn">Swap state</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cross Fade
   Default cross-fade between two states using the View Transitions API.
   The named element fades old -> new automatically.
   Customize: --vt-accent, animation-duration */

.nuda-vt-crossfade__stage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 96px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* Opt this element into its own snapshot for the transition. */
  view-transition-name: vt-crossfade-stage;
}

.nuda-vt-crossfade__stage[data-state="a"] { background: #18181b; }
.nuda-vt-crossfade__stage[data-state="b"] { background: #1f2937; }

.nuda-vt-crossfade__panel {
  --vt-accent: #e4ff54;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vt-accent);
}

.nuda-vt-crossfade__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-crossfade__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

/* Tune the cross-fade. The UA default is already a fade; this controls timing. */
::view-transition-old(vt-crossfade-stage),
::view-transition-new(vt-crossfade-stage) {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(vt-crossfade-stage),
  ::view-transition-new(vt-crossfade-stage) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cross Fade — vanilla JS
   Swaps state inside a view transition with an instant fallback. */

(function () {
  document.querySelectorAll(".nuda-vt-crossfade").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt-crossfade__stage");
    var panel = root.querySelector(".nuda-vt-crossfade__panel");
    var btn = root.querySelector(".nuda-vt-crossfade__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      panel.textContent = next === "a" ? "State A" : "State B";
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Shared Element ─────────────── */
  {
    id: "vt-shared-element",
    name: "Shared Element",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-shared-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt-shared__track" data-pos="left">
          <span className="nuda-vt-shared__dot" />
        </div>
        <button
          type="button"
          className="nuda-vt-shared__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const track = root.querySelector<HTMLElement>(".nuda-vt-shared__track")!;
            const swap = () => {
              track.dataset.pos = track.dataset.pos === "left" ? "right" : "left";
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Move element
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-shared-demo{padding:.5rem}
      .nuda-vt-shared__track{display:flex;align-items:center;width:160px;height:48px;padding:0 8px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#18181b}
      .nuda-vt-shared__track[data-pos="left"]{justify-content:flex-start}
      .nuda-vt-shared__track[data-pos="right"]{justify-content:flex-end}
      .nuda-vt-shared__dot{width:28px;height:28px;border-radius:50%;background:#e4ff54;view-transition-name:vt-shared-dot}
      .nuda-vt-shared__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-shared__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      ::view-transition-group(vt-shared-dot){animation-duration:.5s;animation-timing-function:cubic-bezier(.34,1.56,.64,1)}
      @media(prefers-reduced-motion:reduce){::view-transition-group(vt-shared-dot){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-shared">
  <div class="nuda-vt-shared__track" data-pos="left">
    <span class="nuda-vt-shared__dot"></span>
  </div>
  <button type="button" class="nuda-vt-shared__btn">Move element</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Shared Element
   The dot has a stable view-transition-name, so the API morphs it from its old
   position/size to the new one — even across DOM changes.
   Customize: --vt-accent, the easing on the group */

.nuda-vt-shared__track {
  display: flex;
  align-items: center;
  width: 220px;
  height: 64px;
  padding: 0 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #18181b;
}

.nuda-vt-shared__track[data-pos="left"]  { justify-content: flex-start; }
.nuda-vt-shared__track[data-pos="right"] { justify-content: flex-end; }

.nuda-vt-shared__dot {
  --vt-accent: #e4ff54;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--vt-accent);
  /* Stable name => the group animates position + size between snapshots. */
  view-transition-name: vt-shared-dot;
}

.nuda-vt-shared__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-shared__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

/* The group pseudo controls the morph (transform/size interpolation). */
::view-transition-group(vt-shared-dot) {
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(vt-shared-dot) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Shared Element — vanilla JS
   Toggles the dot's container alignment inside a view transition. */

(function () {
  document.querySelectorAll(".nuda-vt-shared").forEach(function (root) {
    var track = root.querySelector(".nuda-vt-shared__track");
    var btn = root.querySelector(".nuda-vt-shared__btn");

    function doSwap() {
      track.dataset.pos = track.dataset.pos === "left" ? "right" : "left";
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Slide Page ─────────────── */
  {
    id: "vt-slide-page",
    name: "Slide Page",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-slide-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt-slide__viewport">
          <div className="nuda-vt-slide__page" data-page="1">Page 1</div>
        </div>
        <button
          type="button"
          className="nuda-vt-slide__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const page = root.querySelector<HTMLElement>(".nuda-vt-slide__page")!;
            const swap = () => {
              const next = page.dataset.page === "1" ? "2" : "1";
              page.dataset.page = next;
              page.textContent = "Page " + next;
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Next page
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-slide-demo{padding:.5rem}
      .nuda-vt-slide__viewport{width:160px;height:72px;border-radius:12px;border:1px solid rgba(255,255,255,.1);overflow:hidden}
      .nuda-vt-slide__page{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:.85rem;font-weight:700;color:#e4ff54;view-transition-name:vt-slide-page}
      .nuda-vt-slide__page[data-page="1"]{background:#18181b}
      .nuda-vt-slide__page[data-page="2"]{background:#1f2937}
      .nuda-vt-slide__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-slide__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes vt-slide-out-left{to{transform:translateX(-100%)}}
      @keyframes vt-slide-in-right{from{transform:translateX(100%)}}
      ::view-transition-old(vt-slide-page){animation:vt-slide-out-left .4s cubic-bezier(.4,0,.2,1) both}
      ::view-transition-new(vt-slide-page){animation:vt-slide-in-right .4s cubic-bezier(.4,0,.2,1) both}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt-slide-page),::view-transition-new(vt-slide-page){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-slide">
  <div class="nuda-vt-slide__viewport">
    <div class="nuda-vt-slide__page" data-page="1">Page 1</div>
  </div>
  <button type="button" class="nuda-vt-slide__btn">Next page</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Slide Page
   Directional page slide: the old page exits left, the new one enters from the
   right via custom keyframes on the view-transition pseudo-elements.
   Customize: keyframe directions, animation-duration */

.nuda-vt-slide__viewport {
  width: 240px;
  height: 120px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.nuda-vt-slide__page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: #e4ff54;
  view-transition-name: vt-slide-page;
}

.nuda-vt-slide__page[data-page="1"] { background: #18181b; }
.nuda-vt-slide__page[data-page="2"] { background: #1f2937; }

.nuda-vt-slide__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-slide__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@keyframes vt-slide-out-left { to { transform: translateX(-100%); } }
@keyframes vt-slide-in-right { from { transform: translateX(100%); } }

::view-transition-old(vt-slide-page) {
  animation: vt-slide-out-left 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
}
::view-transition-new(vt-slide-page) {
  animation: vt-slide-in-right 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(vt-slide-page),
  ::view-transition-new(vt-slide-page) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Slide Page — vanilla JS
   Advances the page inside a view transition, instant fallback otherwise. */

(function () {
  document.querySelectorAll(".nuda-vt-slide").forEach(function (root) {
    var page = root.querySelector(".nuda-vt-slide__page");
    var btn = root.querySelector(".nuda-vt-slide__btn");

    function doSwap() {
      var next = page.dataset.page === "1" ? "2" : "1";
      page.dataset.page = next;
      page.textContent = "Page " + next;
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Expand Card ─────────────── */
  {
    id: "vt-expand-card",
    name: "Expand Card",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-expand-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt-expand__card" data-open="false">
          <span className="nuda-vt-expand__title">Card</span>
          <span className="nuda-vt-expand__body">Expanded detail panel content.</span>
        </div>
        <button
          type="button"
          className="nuda-vt-expand__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const card = root.querySelector<HTMLElement>(".nuda-vt-expand__card")!;
            const swap = () => {
              card.dataset.open = card.dataset.open === "true" ? "false" : "true";
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Toggle detail
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-expand-demo{padding:.5rem}
      .nuda-vt-expand__card{display:flex;flex-direction:column;gap:4px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:#18181b;overflow:hidden;view-transition-name:vt-expand-card}
      .nuda-vt-expand__card[data-open="false"]{width:88px;height:44px;padding:8px 12px}
      .nuda-vt-expand__card[data-open="true"]{width:180px;height:96px;padding:12px}
      .nuda-vt-expand__title{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt-expand__body{font-size:.62rem;color:#888;opacity:0}
      .nuda-vt-expand__card[data-open="true"] .nuda-vt-expand__body{opacity:1}
      .nuda-vt-expand__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-expand__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      ::view-transition-group(vt-expand-card){animation-duration:.4s;animation-timing-function:cubic-bezier(.4,0,.2,1)}
      @media(prefers-reduced-motion:reduce){::view-transition-group(vt-expand-card){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-expand">
  <div class="nuda-vt-expand__card" data-open="false">
    <span class="nuda-vt-expand__title">Card</span>
    <span class="nuda-vt-expand__body">Expanded detail panel content.</span>
  </div>
  <button type="button" class="nuda-vt-expand__btn">Toggle detail</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Expand Card
   A compact card grows into a detail panel. The shared view-transition-name lets
   the API interpolate the size change as a smooth morph (no layout animation).
   Customize: open/closed dimensions, --vt-accent */

.nuda-vt-expand__card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #18181b;
  overflow: hidden;
  view-transition-name: vt-expand-card;
}

.nuda-vt-expand__card[data-open="false"] { width: 120px; height: 60px; padding: 12px 16px; }
.nuda-vt-expand__card[data-open="true"]  { width: 280px; height: 150px; padding: 16px; }

.nuda-vt-expand__title {
  --vt-accent: #e4ff54;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vt-accent);
}

.nuda-vt-expand__body {
  font-size: 0.8rem;
  color: #888;
  opacity: 0;
}

.nuda-vt-expand__card[data-open="true"] .nuda-vt-expand__body { opacity: 1; }

.nuda-vt-expand__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-expand__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

::view-transition-group(vt-expand-card) {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(vt-expand-card) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Expand Card — vanilla JS
   Toggles the card open/closed inside a view transition. */

(function () {
  document.querySelectorAll(".nuda-vt-expand").forEach(function (root) {
    var card = root.querySelector(".nuda-vt-expand__card");
    var btn = root.querySelector(".nuda-vt-expand__btn");

    function doSwap() {
      card.dataset.open = card.dataset.open === "true" ? "false" : "true";
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Tab Morph ─────────────── */
  {
    id: "vt-tab-morph",
    name: "Tab Morph",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-tab-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <div className="nuda-vt-tab__bar" role="tablist" aria-label="Sections">
          {["One", "Two"].map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              className="nuda-vt-tab__tab"
              aria-selected={t === "One" ? "true" : "false"}
              onClick={(e) => {
                const bar = e.currentTarget.parentElement!;
                const root = bar.parentElement!;
                const panel = root.querySelector<HTMLElement>(".nuda-vt-tab__panel")!;
                const label = t;
                const swap = () => {
                  bar.querySelectorAll<HTMLElement>(".nuda-vt-tab__tab").forEach((b) =>
                    b.setAttribute("aria-selected", String(b.textContent === label)),
                  );
                  panel.textContent = "Content " + label;
                };
                const doc = document as any;
                if (!doc.startViewTransition) { swap(); return; }
                doc.startViewTransition(swap);
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="nuda-vt-tab__panel" role="tabpanel">Content One</div>
      </div>
    ),
    cssInline: `
      .nuda-vt-tab-demo{padding:.5rem}
      .nuda-vt-tab__bar{display:flex;gap:4px;background:#18181b;border-radius:10px;padding:3px;position:relative}
      .nuda-vt-tab__tab{position:relative;background:none;border:none;border-radius:7px;padding:.3rem .7rem;font-size:.72rem;font-weight:700;color:#888;cursor:pointer}
      .nuda-vt-tab__tab[aria-selected="true"]{color:#09090b}
      .nuda-vt-tab__tab[aria-selected="true"]::before{content:"";position:absolute;inset:0;background:#e4ff54;border-radius:7px;z-index:-1;view-transition-name:vt-tab-indicator}
      .nuda-vt-tab__tab:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vt-tab__panel{font-size:.78rem;font-weight:700;color:#e4ff54;view-transition-name:vt-tab-panel}
      ::view-transition-group(vt-tab-indicator){animation-duration:.35s;animation-timing-function:cubic-bezier(.4,0,.2,1)}
      ::view-transition-old(vt-tab-panel),::view-transition-new(vt-tab-panel){animation-duration:.3s}
      @media(prefers-reduced-motion:reduce){::view-transition-group(vt-tab-indicator),::view-transition-old(vt-tab-panel),::view-transition-new(vt-tab-panel){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-tab">
  <div class="nuda-vt-tab__bar" role="tablist" aria-label="Sections">
    <button type="button" role="tab" class="nuda-vt-tab__tab" aria-selected="true">One</button>
    <button type="button" role="tab" class="nuda-vt-tab__tab" aria-selected="false">Two</button>
  </div>
  <div class="nuda-vt-tab__panel" role="tabpanel">Content One</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tab Morph
   The active-tab pill carries a shared view-transition-name so it slides between
   tabs; the panel content cross-fades. Both are driven by one transition.
   Customize: --vt-accent, animation-duration */

.nuda-vt-tab__bar {
  display: flex;
  gap: 4px;
  background: #18181b;
  border-radius: 10px;
  padding: 4px;
}

.nuda-vt-tab__tab {
  --vt-accent: #e4ff54;
  position: relative;
  background: none;
  border: none;
  border-radius: 7px;
  padding: 0.4rem 0.9rem;
  font-weight: 700;
  color: #888;
  cursor: pointer;
}

.nuda-vt-tab__tab[aria-selected="true"] { color: #09090b; }

/* Only the selected pill exists at a time, so its name moves between tabs. */
.nuda-vt-tab__tab[aria-selected="true"]::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--vt-accent);
  border-radius: 7px;
  z-index: -1;
  view-transition-name: vt-tab-indicator;
}

.nuda-vt-tab__tab:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

.nuda-vt-tab__panel {
  margin-top: 0.6rem;
  font-weight: 700;
  color: #e4ff54;
  view-transition-name: vt-tab-panel;
}

::view-transition-group(vt-tab-indicator) {
  animation-duration: 0.35s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

::view-transition-old(vt-tab-panel),
::view-transition-new(vt-tab-panel) { animation-duration: 0.3s; }

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(vt-tab-indicator),
  ::view-transition-old(vt-tab-panel),
  ::view-transition-new(vt-tab-panel) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Tab Morph — vanilla JS
   Switches the active tab + panel inside a view transition. */

(function () {
  document.querySelectorAll(".nuda-vt-tab").forEach(function (root) {
    var tabs = root.querySelectorAll(".nuda-vt-tab__tab");
    var panel = root.querySelector(".nuda-vt-tab__panel");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var label = tab.textContent;

        function doSwap() {
          tabs.forEach(function (t) {
            t.setAttribute("aria-selected", String(t === tab));
          });
          panel.textContent = "Content " + label;
        }

        if (!document.startViewTransition) { doSwap(); return; }
        document.startViewTransition(doSwap);
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── List Reorder ─────────────── */
  {
    id: "vt-list-reorder",
    name: "List Reorder",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-reorder-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <ul className="nuda-vt-reorder__list">
          {["Alpha", "Bravo", "Charlie"].map((t) => (
            <li key={t} className="nuda-vt-reorder__item" style={{ viewTransitionName: `vt-reorder-${t.toLowerCase()}` } as React.CSSProperties}>
              {t}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nuda-vt-reorder__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const list = root.querySelector<HTMLElement>(".nuda-vt-reorder__list")!;
            const swap = () => {
              if (list.firstElementChild) list.appendChild(list.firstElementChild);
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Shuffle
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-reorder-demo{padding:.5rem}
      .nuda-vt-reorder__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px;width:130px}
      .nuda-vt-reorder__item{background:#18181b;border:1px solid rgba(255,255,255,.1);border-left:3px solid #e4ff54;border-radius:8px;padding:.35rem .6rem;font-size:.74rem;font-weight:700;color:#fff}
      .nuda-vt-reorder__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-reorder__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      ::view-transition-group(*){animation-duration:.45s;animation-timing-function:cubic-bezier(.4,0,.2,1)}
      @media(prefers-reduced-motion:reduce){::view-transition-group(*){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-reorder">
  <ul class="nuda-vt-reorder__list">
    <li class="nuda-vt-reorder__item" style="view-transition-name:vt-reorder-alpha">Alpha</li>
    <li class="nuda-vt-reorder__item" style="view-transition-name:vt-reorder-bravo">Bravo</li>
    <li class="nuda-vt-reorder__item" style="view-transition-name:vt-reorder-charlie">Charlie</li>
  </ul>
  <button type="button" class="nuda-vt-reorder__btn">Shuffle</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* List Reorder
   Each item gets a unique view-transition-name, so when the DOM order changes
   the API animates every item from its old slot to its new one (FLIP for free).
   Customize: per-item names, group animation timing */

.nuda-vt-reorder__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 200px;
}

.nuda-vt-reorder__item {
  --vt-accent: #e4ff54;
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 3px solid var(--vt-accent);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-weight: 700;
  color: #fff;
}

/* Give each item its own stable name (set inline or generate per id). */
.nuda-vt-reorder__item:nth-child(1) { view-transition-name: vt-reorder-alpha; }
.nuda-vt-reorder__item:nth-child(2) { view-transition-name: vt-reorder-bravo; }
.nuda-vt-reorder__item:nth-child(3) { view-transition-name: vt-reorder-charlie; }

.nuda-vt-reorder__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-reorder__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

/* Animate every named group as it shifts position. */
::view-transition-group(*) {
  animation-duration: 0.45s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* List Reorder — vanilla JS
   Rotates the list (moves the first item to the end) in a view transition. */

(function () {
  document.querySelectorAll(".nuda-vt-reorder").forEach(function (root) {
    var list = root.querySelector(".nuda-vt-reorder__list");
    var btn = root.querySelector(".nuda-vt-reorder__btn");

    function doSwap() {
      if (list.firstElementChild) list.appendChild(list.firstElementChild);
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Theme Swipe ─────────────── */
  {
    id: "vt-theme-swipe",
    name: "Theme Swipe",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-theme-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt-theme__panel" data-theme="dark">
          <span className="nuda-vt-theme__label">Theme</span>
        </div>
        <button
          type="button"
          className="nuda-vt-theme__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const panel = root.querySelector<HTMLElement>(".nuda-vt-theme__panel")!;
            const swap = () => {
              panel.dataset.theme = panel.dataset.theme === "dark" ? "light" : "dark";
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Switch theme
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-theme-demo{padding:.5rem}
      .nuda-vt-theme__panel{display:flex;align-items:center;justify-content:center;width:150px;height:72px;border-radius:12px;border:1px solid rgba(255,255,255,.12);view-transition-name:vt-theme-panel}
      .nuda-vt-theme__panel[data-theme="dark"]{background:#09090b}
      .nuda-vt-theme__panel[data-theme="dark"] .nuda-vt-theme__label{color:#e4ff54}
      .nuda-vt-theme__panel[data-theme="light"]{background:#e4ff54}
      .nuda-vt-theme__panel[data-theme="light"] .nuda-vt-theme__label{color:#09090b}
      .nuda-vt-theme__label{font-size:.85rem;font-weight:700}
      .nuda-vt-theme__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-theme__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes vt-theme-reveal{from{clip-path:circle(0% at 50% 50%)}to{clip-path:circle(75% at 50% 50%)}}
      ::view-transition-old(vt-theme-panel){animation:none}
      ::view-transition-new(vt-theme-panel){animation:vt-theme-reveal .5s cubic-bezier(.4,0,.2,1) both}
      @media(prefers-reduced-motion:reduce){::view-transition-new(vt-theme-panel){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-theme">
  <div class="nuda-vt-theme__panel" data-theme="dark">
    <span class="nuda-vt-theme__label">Theme</span>
  </div>
  <button type="button" class="nuda-vt-theme__btn">Switch theme</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Theme Swipe
   Circular reveal theme switch. The new snapshot is clipped from a 0%-radius
   circle outward, so the incoming theme "wipes" over the old one.
   Customize: clip origin (50% 50%), final radius, animation-duration */

.nuda-vt-theme__panel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 110px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  view-transition-name: vt-theme-panel;
}

.nuda-vt-theme__panel[data-theme="dark"]  { background: #09090b; }
.nuda-vt-theme__panel[data-theme="dark"] .nuda-vt-theme__label  { color: #e4ff54; }
.nuda-vt-theme__panel[data-theme="light"] { background: #e4ff54; }
.nuda-vt-theme__panel[data-theme="light"] .nuda-vt-theme__label { color: #09090b; }

.nuda-vt-theme__label { font-weight: 700; }

.nuda-vt-theme__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-theme__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

@keyframes vt-theme-reveal {
  from { clip-path: circle(0% at 50% 50%); }
  to   { clip-path: circle(75% at 50% 50%); }
}

/* Hold the old snapshot still; reveal the new one with a growing circle. */
::view-transition-old(vt-theme-panel) { animation: none; }
::view-transition-new(vt-theme-panel) {
  animation: vt-theme-reveal 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-new(vt-theme-panel) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Theme Swipe — vanilla JS
   Toggles the theme inside a view transition for the circular reveal.
   Tip: read the click coordinates to center the circle on the cursor. */

(function () {
  document.querySelectorAll(".nuda-vt-theme").forEach(function (root) {
    var panel = root.querySelector(".nuda-vt-theme__panel");
    var btn = root.querySelector(".nuda-vt-theme__btn");

    function doSwap() {
      panel.dataset.theme = panel.dataset.theme === "dark" ? "light" : "dark";
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Grid to Detail ─────────────── */
  {
    id: "vt-image-grid",
    name: "Grid to Detail",
    category: "View Transitions",
    preview: (
      <div className="nuda-vt-grid-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <div className="nuda-vt-grid__stage" data-view="grid">
          <div className="nuda-vt-grid__grid">
            <span className="nuda-vt-grid__thumb" />
            <span className="nuda-vt-grid__thumb nuda-vt-grid__thumb--hero" />
            <span className="nuda-vt-grid__thumb" />
            <span className="nuda-vt-grid__thumb" />
          </div>
          <div className="nuda-vt-grid__hero" />
        </div>
        <button
          type="button"
          className="nuda-vt-grid__btn"
          onClick={(e) => {
            const root = e.currentTarget.parentElement!;
            const stage = root.querySelector<HTMLElement>(".nuda-vt-grid__stage")!;
            const swap = () => {
              stage.dataset.view = stage.dataset.view === "grid" ? "detail" : "grid";
            };
            const doc = document as any;
            if (!doc.startViewTransition) { swap(); return; }
            doc.startViewTransition(swap);
          }}
        >
          Open / close
        </button>
      </div>
    ),
    cssInline: `
      .nuda-vt-grid-demo{padding:.5rem}
      .nuda-vt-grid__stage{width:150px;height:96px}
      .nuda-vt-grid__grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;height:100%}
      .nuda-vt-grid__thumb{border-radius:8px;background:#27272a}
      .nuda-vt-grid__thumb--hero{background:linear-gradient(135deg,#e4ff54,#a3e635);view-transition-name:vt-grid-hero}
      .nuda-vt-grid__hero{display:none;width:100%;height:100%;border-radius:10px;background:linear-gradient(135deg,#e4ff54,#a3e635);view-transition-name:vt-grid-hero}
      .nuda-vt-grid__stage[data-view="detail"] .nuda-vt-grid__grid{display:none}
      .nuda-vt-grid__stage[data-view="detail"] .nuda-vt-grid__hero{display:block}
      .nuda-vt-grid__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt-grid__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      ::view-transition-group(vt-grid-hero){animation-duration:.45s;animation-timing-function:cubic-bezier(.34,1.2,.64,1)}
      @media(prefers-reduced-motion:reduce){::view-transition-group(vt-grid-hero){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt-grid">
  <div class="nuda-vt-grid__stage" data-view="grid">
    <div class="nuda-vt-grid__grid">
      <span class="nuda-vt-grid__thumb"></span>
      <span class="nuda-vt-grid__thumb nuda-vt-grid__thumb--hero"></span>
      <span class="nuda-vt-grid__thumb"></span>
      <span class="nuda-vt-grid__thumb"></span>
    </div>
    <div class="nuda-vt-grid__hero"></div>
  </div>
  <button type="button" class="nuda-vt-grid__btn">Open / close</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Grid to Detail
   A gallery thumbnail expands into a hero. The thumbnail and the hero share one
   view-transition-name, so the API morphs the small tile into the large view
   (and back) — the classic "open the photo" transition.
   Customize: --vt-accent gradient, the group easing */

.nuda-vt-grid__stage { width: 240px; height: 150px; }

.nuda-vt-grid__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
  height: 100%;
}

.nuda-vt-grid__thumb { border-radius: 8px; background: #27272a; }

.nuda-vt-grid__thumb--hero {
  background: linear-gradient(135deg, #e4ff54, #a3e635);
  view-transition-name: vt-grid-hero;
}

.nuda-vt-grid__hero {
  display: none;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(135deg, #e4ff54, #a3e635);
  /* Same name as the thumb: only one is in the DOM at a time, so it morphs. */
  view-transition-name: vt-grid-hero;
}

.nuda-vt-grid__stage[data-view="detail"] .nuda-vt-grid__grid { display: none; }
.nuda-vt-grid__stage[data-view="detail"] .nuda-vt-grid__hero { display: block; }

.nuda-vt-grid__btn {
  background: #e4ff54;
  color: #09090b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;
}

.nuda-vt-grid__btn:focus-visible {
  outline: 2px solid #e4ff54;
  outline-offset: 2px;
}

::view-transition-group(vt-grid-hero) {
  animation-duration: 0.45s;
  animation-timing-function: cubic-bezier(0.34, 1.2, 0.64, 1);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(vt-grid-hero) { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Grid to Detail — vanilla JS
   Toggles between the grid and the hero detail inside a view transition. */

(function () {
  document.querySelectorAll(".nuda-vt-grid").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt-grid__stage");
    var btn = root.querySelector(".nuda-vt-grid__btn");

    function doSwap() {
      stage.dataset.view = stage.dataset.view === "grid" ? "detail" : "grid";
    }

    btn.addEventListener("click", function () {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    });
  });
})();`,
      },
    ],
  },
];
