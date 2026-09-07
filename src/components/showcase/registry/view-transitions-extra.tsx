import type { NudaComponent } from "./types";

/* View Transitions — Extra
   A second wave of View Transitions API demos, plus one CSS-only wipe. Every
   API-backed preview swaps state via document.startViewTransition(...) with an
   instant-swap fallback where the API is unsupported, so the gallery animates
   in supporting browsers and stays correct everywhere else. Copyable JS is
   framework-free vanilla JS. All ids/classes/keyframes use the "vt2-" stem so
   nothing collides with the original "vt-" file — the <style> tag is GLOBAL.

   Note on ::view-transition-old/new/group(name): these pseudo-elements live in
   a viewport-fixed overlay outside normal layout, so a `perspective` set on an
   ancestor in our DOM never reaches them. Components that fake 3D (Flip Board,
   Cube Rotate) fold `perspective(...)` into the `transform` value itself
   instead of relying on a document-wide `::view-transition{perspective:...}`
   rule — the latter would be a single global selector shared by every other
   component's transition on the page, exactly the kind of cross-component
   collision this file must avoid. */

const CAT = "View Transitions";

export const viewTransitionsExtra: NudaComponent[] = [
  /* ─────────────── Radial Wipe ─────────────── */
  {
    id: "vt2-radial-wipe",
    name: "Radial Wipe",
    category: CAT,
    preview: (
      <div className="nuda-vt2-radial-wipe-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-radial-wipe">
          <div
            className="nuda-vt2-radial-wipe__stage"
            data-state="a"
            role="button"
            tabIndex={0}
            aria-label="Swap panel with a radial wipe from the click point"
            onClick={(e) => {
              const stage = e.currentTarget;
              const rect = stage.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              document.documentElement.style.setProperty("--vt2-radial-x", `${x}%`);
              document.documentElement.style.setProperty("--vt2-radial-y", `${y}%`);
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-radial-wipe__panel")!.textContent = next === "a" ? "Click to wipe" : "Wiped!";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              const stage = e.currentTarget;
              document.documentElement.style.setProperty("--vt2-radial-x", "50%");
              document.documentElement.style.setProperty("--vt2-radial-y", "50%");
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-radial-wipe__panel")!.textContent = next === "a" ? "Click to wipe" : "Wiped!";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            <span className="nuda-vt2-radial-wipe__panel">Click to wipe</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-radial-wipe-demo{padding:.5rem}
      .nuda-vt2-radial-wipe__stage{display:flex;align-items:center;justify-content:center;width:150px;height:84px;border-radius:12px;border:1px solid rgba(255,255,255,.1);cursor:pointer}
      .nuda-vt2-radial-wipe__stage[data-state="a"]{background:#18181b;view-transition-name:vt2-radial-wipe-stage}
      .nuda-vt2-radial-wipe__stage[data-state="b"]{background:#1f2937;view-transition-name:vt2-radial-wipe-stage}
      .nuda-vt2-radial-wipe__stage:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vt2-radial-wipe__panel{font-size:.72rem;font-weight:700;color:#e4ff54;pointer-events:none}
      @keyframes _nuda-vt2radialwipein{from{clip-path:circle(0% at var(--vt2-radial-x,50%) var(--vt2-radial-y,50%))}to{clip-path:circle(150% at var(--vt2-radial-x,50%) var(--vt2-radial-y,50%))}}
      ::view-transition-old(vt2-radial-wipe-stage){animation:none}
      ::view-transition-new(vt2-radial-wipe-stage){animation:_nuda-vt2radialwipein .5s cubic-bezier(.4,0,.2,1) both}
      @supports not (view-transition-name:none){.nuda-vt2-radial-wipe__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-new(vt2-radial-wipe-stage){animation:none}.nuda-vt2-radial-wipe__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-radial-wipe">
  <div class="nuda-vt2-radial-wipe__stage" data-state="a" role="button" tabindex="0" aria-label="Swap panel with a radial wipe from the click point">
    <span class="nuda-vt2-radial-wipe__panel">Click to wipe</span>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Radial Wipe — vanilla JS
   Captures the click position as a % within the stage, exposes it as CSS
   custom properties, then swaps state inside a view transition so the new
   snapshot reveals from that exact point. Keyboard users (Enter/Space) get a
   center-origin wipe since there is no pointer position to read. */

(function () {
  document.querySelectorAll(".nuda-vt2-radial-wipe__stage").forEach(function (stage) {
    var panel = stage.querySelector(".nuda-vt2-radial-wipe__panel");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      panel.textContent = next === "a" ? "Click to wipe" : "Wiped!";
    }

    function trigger() {
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    }

    stage.addEventListener("click", function (e) {
      var rect = stage.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      document.documentElement.style.setProperty("--vt2-radial-x", x + "%");
      document.documentElement.style.setProperty("--vt2-radial-y", y + "%");
      trigger();
    });

    stage.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      document.documentElement.style.setProperty("--vt2-radial-x", "50%");
      document.documentElement.style.setProperty("--vt2-radial-y", "50%");
      trigger();
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Curtain Wipe ─────────────── */
  {
    id: "vt2-curtain-wipe",
    name: "Curtain Wipe",
    category: CAT,
    preview: (
      <div className="nuda-vt2-curtain-wipe-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-curtain-wipe">
          <div className="nuda-vt2-curtain-wipe__stage" data-state="a">
            <span className="nuda-vt2-curtain-wipe__label">Page A</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-curtain-wipe__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-curtain-wipe__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-curtain-wipe__label")!.textContent = next === "a" ? "Page A" : "Page B";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Raise curtain
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-curtain-wipe-demo{padding:.5rem}
      .nuda-vt2-curtain-wipe{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-curtain-wipe__stage{display:flex;align-items:center;justify-content:center;width:150px;height:80px;border-radius:12px;border:1px solid rgba(255,255,255,.1);overflow:hidden;view-transition-name:vt2-curtain-stage}
      .nuda-vt2-curtain-wipe__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-curtain-wipe__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-curtain-wipe__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-curtain-wipe__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-curtain-wipe__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2curtainlift{from{clip-path:inset(0 0 0% 0)}to{clip-path:inset(0 0 100% 0)}}
      ::view-transition-old(vt2-curtain-stage){animation:_nuda-vt2curtainlift .5s cubic-bezier(.4,0,.2,1) both}
      ::view-transition-new(vt2-curtain-stage){animation:none}
      @supports not (view-transition-name:none){.nuda-vt2-curtain-wipe__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-curtain-stage){animation:none}.nuda-vt2-curtain-wipe__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-curtain-wipe">
  <div class="nuda-vt2-curtain-wipe__stage" data-state="a">
    <span class="nuda-vt2-curtain-wipe__label">Page A</span>
  </div>
  <button type="button" class="nuda-vt2-curtain-wipe__btn">Raise curtain</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Curtain Wipe — vanilla JS
   The outgoing page is clipped away from the bottom up (like a curtain
   rising) inside a view transition, revealing the new page underneath. */

(function () {
  document.querySelectorAll(".nuda-vt2-curtain-wipe").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-curtain-wipe__stage");
    var label = root.querySelector(".nuda-vt2-curtain-wipe__label");
    var btn = root.querySelector(".nuda-vt2-curtain-wipe__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "Page A" : "Page B";
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

  /* ─────────────── Iris Transition ─────────────── */
  {
    id: "vt2-iris-transition",
    name: "Iris Transition",
    category: CAT,
    preview: (
      <div className="nuda-vt2-iris-transition-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-iris-transition">
          <div className="nuda-vt2-iris-transition__stage" data-state="a">
            <span className="nuda-vt2-iris-transition__label">Scene A</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-iris-transition__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-iris-transition__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-iris-transition__label")!.textContent = next === "a" ? "Scene A" : "Scene B";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Trigger iris
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-iris-transition-demo{padding:.5rem}
      .nuda-vt2-iris-transition{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-iris-transition__stage{display:flex;align-items:center;justify-content:center;width:150px;height:84px;border-radius:12px;border:1px solid rgba(255,255,255,.1);view-transition-name:vt2-iris-stage}
      .nuda-vt2-iris-transition__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-iris-transition__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-iris-transition__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-iris-transition__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-iris-transition__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2irisclose{0%{clip-path:circle(75% at 50% 50%)}50%,100%{clip-path:circle(0% at 50% 50%)}}
      @keyframes _nuda-vt2irisopen{0%,50%{clip-path:circle(0% at 50% 50%)}100%{clip-path:circle(75% at 50% 50%)}}
      ::view-transition-old(vt2-iris-stage){animation:_nuda-vt2irisclose .6s cubic-bezier(.4,0,.2,1) both}
      ::view-transition-new(vt2-iris-stage){animation:_nuda-vt2irisopen .6s cubic-bezier(.4,0,.2,1) both}
      @supports not (view-transition-name:none){.nuda-vt2-iris-transition__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-iris-stage),::view-transition-new(vt2-iris-stage){animation:none}.nuda-vt2-iris-transition__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-iris-transition">
  <div class="nuda-vt2-iris-transition__stage" data-state="a">
    <span class="nuda-vt2-iris-transition__label">Scene A</span>
  </div>
  <button type="button" class="nuda-vt2-iris-transition__btn">Trigger iris</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Iris Transition — vanilla JS
   A two-phase camera-iris cut: the old scene closes to a point, then the new
   scene opens from that same point, synced by a single view transition. */

(function () {
  document.querySelectorAll(".nuda-vt2-iris-transition").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-iris-transition__stage");
    var label = root.querySelector(".nuda-vt2-iris-transition__label");
    var btn = root.querySelector(".nuda-vt2-iris-transition__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "Scene A" : "Scene B";
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

  /* ─────────────── Flip Board ─────────────── */
  {
    id: "vt2-flip-board",
    name: "Flip Board",
    category: CAT,
    preview: (
      <div className="nuda-vt2-flip-board-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-flip-board">
          <div className="nuda-vt2-flip-board__stage" data-state="a">
            <span className="nuda-vt2-flip-board__label">A</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-flip-board__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-flip-board__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-flip-board__label")!.textContent = next === "a" ? "A" : "B";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Flip panel
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-flip-board-demo{padding:.5rem}
      .nuda-vt2-flip-board{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-flip-board__stage{display:flex;align-items:center;justify-content:center;width:96px;height:72px;border-radius:10px;border:1px solid rgba(255,255,255,.12);view-transition-name:vt2-flip-stage}
      .nuda-vt2-flip-board__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-flip-board__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-flip-board__label{font-size:1.4rem;font-weight:800;color:#e4ff54}
      .nuda-vt2-flip-board__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-flip-board__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2flipout{from{transform:perspective(600px) rotateX(0)}to{transform:perspective(600px) rotateX(-90deg)}}
      @keyframes _nuda-vt2flipin{from{transform:perspective(600px) rotateX(90deg)}to{transform:perspective(600px) rotateX(0)}}
      ::view-transition-old(vt2-flip-stage){animation:_nuda-vt2flipout .4s ease-in both;transform-origin:bottom}
      ::view-transition-new(vt2-flip-stage){animation:_nuda-vt2flipin .4s ease-out .4s both;transform-origin:top}
      ::view-transition-group(vt2-flip-stage){animation-duration:.8s}
      @supports not (view-transition-name:none){.nuda-vt2-flip-board__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-flip-stage),::view-transition-new(vt2-flip-stage){animation:none}.nuda-vt2-flip-board__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-flip-board">
  <div class="nuda-vt2-flip-board__stage" data-state="a">
    <span class="nuda-vt2-flip-board__label">A</span>
  </div>
  <button type="button" class="nuda-vt2-flip-board__btn">Flip panel</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Flip Board — vanilla JS
   Split-flap style panel swap: the old face rotates down and out, the new
   face rotates down and in right after, like an airport departure board. */

(function () {
  document.querySelectorAll(".nuda-vt2-flip-board").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-flip-board__stage");
    var label = root.querySelector(".nuda-vt2-flip-board__label");
    var btn = root.querySelector(".nuda-vt2-flip-board__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "A" : "B";
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

  /* ─────────────── Card Stack Push ─────────────── */
  {
    id: "vt2-card-stack",
    name: "Card Stack Push",
    category: CAT,
    preview: (
      <div className="nuda-vt2-card-stack-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-card-stack">
          <div className="nuda-vt2-card-stack__stage" data-state="a">
            <span className="nuda-vt2-card-stack__label">Card 1</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-card-stack__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-card-stack__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-card-stack__label")!.textContent = next === "a" ? "Card 1" : "Card 2";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Push card
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-card-stack-demo{padding:.5rem}
      .nuda-vt2-card-stack{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-card-stack__stage{display:flex;align-items:center;justify-content:center;width:150px;height:80px;border-radius:12px;border:1px solid rgba(255,255,255,.12);box-shadow:0 8px 20px rgba(0,0,0,.4);view-transition-name:vt2-card-stack-stage}
      .nuda-vt2-card-stack__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-card-stack__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-card-stack__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-card-stack__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-card-stack__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2cardpushout{from{transform:translateY(0) scale(1);opacity:1}to{transform:translateY(-10%) scale(.94);opacity:.5}}
      @keyframes _nuda-vt2cardpushin{from{transform:translateY(100%)}to{transform:translateY(0)}}
      ::view-transition-old(vt2-card-stack-stage){animation:_nuda-vt2cardpushout .4s cubic-bezier(.4,0,.2,1) both}
      ::view-transition-new(vt2-card-stack-stage){animation:_nuda-vt2cardpushin .4s cubic-bezier(.4,0,.2,1) both}
      @supports not (view-transition-name:none){.nuda-vt2-card-stack__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-card-stack-stage),::view-transition-new(vt2-card-stack-stage){animation:none}.nuda-vt2-card-stack__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-card-stack">
  <div class="nuda-vt2-card-stack__stage" data-state="a">
    <span class="nuda-vt2-card-stack__label">Card 1</span>
  </div>
  <button type="button" class="nuda-vt2-card-stack__btn">Push card</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Card Stack Push — vanilla JS
   The old card recedes (scales down, dims, nudges back) while the new card
   pushes up from below, like a notification stack advancing one item. */

(function () {
  document.querySelectorAll(".nuda-vt2-card-stack").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-card-stack__stage");
    var label = root.querySelector(".nuda-vt2-card-stack__label");
    var btn = root.querySelector(".nuda-vt2-card-stack__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "Card 1" : "Card 2";
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

  /* ─────────────── Blur Scale Swap ─────────────── */
  {
    id: "vt2-blur-scale",
    name: "Blur Scale Swap",
    category: CAT,
    preview: (
      <div className="nuda-vt2-blur-scale-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-blur-scale">
          <div className="nuda-vt2-blur-scale__stage" data-state="a">
            <span className="nuda-vt2-blur-scale__label">Frame 1</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-blur-scale__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-blur-scale__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-blur-scale__label")!.textContent = next === "a" ? "Frame 1" : "Frame 2";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Swap frame
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-blur-scale-demo{padding:.5rem}
      .nuda-vt2-blur-scale{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-blur-scale__stage{display:flex;align-items:center;justify-content:center;width:150px;height:80px;border-radius:12px;border:1px solid rgba(255,255,255,.1);view-transition-name:vt2-blur-stage}
      .nuda-vt2-blur-scale__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-blur-scale__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-blur-scale__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-blur-scale__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-blur-scale__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2blurout{from{opacity:1;filter:blur(0);transform:scale(1)}to{opacity:0;filter:blur(10px);transform:scale(1.08)}}
      @keyframes _nuda-vt2blurin{from{opacity:0;filter:blur(10px);transform:scale(.92)}to{opacity:1;filter:blur(0);transform:scale(1)}}
      ::view-transition-old(vt2-blur-stage){animation:_nuda-vt2blurout .4s ease-in both}
      ::view-transition-new(vt2-blur-stage){animation:_nuda-vt2blurin .4s ease-out both}
      @supports not (view-transition-name:none){.nuda-vt2-blur-scale__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-blur-stage),::view-transition-new(vt2-blur-stage){animation:none}.nuda-vt2-blur-scale__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-blur-scale">
  <div class="nuda-vt2-blur-scale__stage" data-state="a">
    <span class="nuda-vt2-blur-scale__label">Frame 1</span>
  </div>
  <button type="button" class="nuda-vt2-blur-scale__btn">Swap frame</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Blur Scale Swap — vanilla JS
   The old frame blurs and grows slightly as it fades; the new frame comes
   into focus while shrinking down to size, all inside one view transition. */

(function () {
  document.querySelectorAll(".nuda-vt2-blur-scale").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-blur-scale__stage");
    var label = root.querySelector(".nuda-vt2-blur-scale__label");
    var btn = root.querySelector(".nuda-vt2-blur-scale__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "Frame 1" : "Frame 2";
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

  /* ─────────────── Directional Nav ─────────────── */
  {
    id: "vt2-directional-nav",
    name: "Directional Nav",
    category: CAT,
    preview: (
      <div className="nuda-vt2-directional-nav-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <div className="nuda-vt2-directional-nav">
          <div className="nuda-vt2-directional-nav__stage" data-page="1">
            <span className="nuda-vt2-directional-nav__label">Page 1</span>
          </div>
          <div className="nuda-vt2-directional-nav__controls">
            <button
              type="button"
              className="nuda-vt2-directional-nav__btn"
              aria-label="Go back"
              onClick={(e) => {
                const root = e.currentTarget.closest(".nuda-vt2-directional-nav")!;
                const stage = root.querySelector<HTMLElement>(".nuda-vt2-directional-nav__stage")!;
                document.documentElement.style.setProperty("--vt2-dir-nav", "-1");
                const swap = () => {
                  const page = Math.max(1, Number(stage.dataset.page) - 1);
                  stage.dataset.page = String(page);
                  stage.querySelector(".nuda-vt2-directional-nav__label")!.textContent = "Page " + page;
                };
                const doc = document as any;
                if (!doc.startViewTransition) { swap(); return; }
                doc.startViewTransition(swap);
              }}
            >
              ←
            </button>
            <button
              type="button"
              className="nuda-vt2-directional-nav__btn"
              aria-label="Go forward"
              onClick={(e) => {
                const root = e.currentTarget.closest(".nuda-vt2-directional-nav")!;
                const stage = root.querySelector<HTMLElement>(".nuda-vt2-directional-nav__stage")!;
                document.documentElement.style.setProperty("--vt2-dir-nav", "1");
                const swap = () => {
                  const page = Math.min(3, Number(stage.dataset.page) + 1);
                  stage.dataset.page = String(page);
                  stage.querySelector(".nuda-vt2-directional-nav__label")!.textContent = "Page " + page;
                };
                const doc = document as any;
                if (!doc.startViewTransition) { swap(); return; }
                doc.startViewTransition(swap);
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-directional-nav-demo{padding:.5rem}
      .nuda-vt2-directional-nav{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-directional-nav__stage{display:flex;align-items:center;justify-content:center;width:150px;height:72px;border-radius:12px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#18181b;view-transition-name:vt2-directional-nav-stage}
      .nuda-vt2-directional-nav__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-directional-nav__controls{display:flex;gap:6px}
      .nuda-vt2-directional-nav__btn{min-width:44px;min-height:44px;background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.3rem .6rem;font-size:.85rem;font-weight:700;cursor:pointer}
      .nuda-vt2-directional-nav__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2navout{from{transform:translateX(0)}to{transform:translateX(calc(var(--vt2-dir-nav,1) * -100%))}}
      @keyframes _nuda-vt2navin{from{transform:translateX(calc(var(--vt2-dir-nav,1) * 100%))}to{transform:translateX(0)}}
      ::view-transition-old(vt2-directional-nav-stage){animation:_nuda-vt2navout .4s cubic-bezier(.4,0,.2,1) both}
      ::view-transition-new(vt2-directional-nav-stage){animation:_nuda-vt2navin .4s cubic-bezier(.4,0,.2,1) both}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-directional-nav-stage),::view-transition-new(vt2-directional-nav-stage){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-directional-nav">
  <div class="nuda-vt2-directional-nav__stage" data-page="1">
    <span class="nuda-vt2-directional-nav__label">Page 1</span>
  </div>
  <div class="nuda-vt2-directional-nav__controls">
    <button type="button" class="nuda-vt2-directional-nav__btn" aria-label="Go back">←</button>
    <button type="button" class="nuda-vt2-directional-nav__btn" aria-label="Go forward">→</button>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Directional Nav — vanilla JS
   Sets a --vt2-dir-nav custom property (1 or -1) before starting the
   transition; the keyframes read it via calc(), so a single pair of
   animations serves both forward and back navigation correctly. */

(function () {
  document.querySelectorAll(".nuda-vt2-directional-nav").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-directional-nav__stage");
    var label = root.querySelector(".nuda-vt2-directional-nav__label");
    var buttons = root.querySelectorAll(".nuda-vt2-directional-nav__btn");

    function go(delta) {
      document.documentElement.style.setProperty("--vt2-dir-nav", String(delta > 0 ? 1 : -1));
      function doSwap() {
        var page = Math.min(3, Math.max(1, Number(stage.dataset.page) + delta));
        stage.dataset.page = String(page);
        label.textContent = "Page " + page;
      }
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    }

    buttons[0].addEventListener("click", function () { go(-1); });
    buttons[1].addEventListener("click", function () { go(1); });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Lightbox Zoom ─────────────── */
  {
    id: "vt2-lightbox-zoom",
    name: "Lightbox Zoom",
    category: CAT,
    preview: (
      <div className="nuda-vt2-lightbox-zoom-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-lightbox-zoom" data-state="closed">
          <div className="nuda-vt2-lightbox-zoom__scrim" aria-hidden="true" />
          <button
            type="button"
            className="nuda-vt2-lightbox-zoom__thumb"
            aria-label="Open photo"
            onClick={(e) => {
              const root = e.currentTarget.closest<HTMLElement>(".nuda-vt2-lightbox-zoom")!;
              const swap = () => { root.dataset.state = "open"; };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          />
          <button
            type="button"
            className="nuda-vt2-lightbox-zoom__full"
            aria-label="Close photo"
            onClick={(e) => {
              const root = e.currentTarget.closest<HTMLElement>(".nuda-vt2-lightbox-zoom")!;
              const swap = () => { root.dataset.state = "closed"; };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-lightbox-zoom-demo{padding:.5rem}
      .nuda-vt2-lightbox-zoom{position:relative;width:150px;height:96px}
      .nuda-vt2-lightbox-zoom__scrim{position:absolute;inset:0;background:rgba(0,0,0,.6);display:none;border-radius:12px}
      .nuda-vt2-lightbox-zoom[data-state="open"] .nuda-vt2-lightbox-zoom__scrim{display:block;view-transition-name:vt2-lightbox-scrim}
      .nuda-vt2-lightbox-zoom__thumb{position:absolute;left:0;top:0;width:56px;height:56px;border:none;border-radius:8px;background:linear-gradient(135deg,#e4ff54,#a3e635);cursor:pointer;padding:0}
      .nuda-vt2-lightbox-zoom__thumb:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vt2-lightbox-zoom[data-state="closed"] .nuda-vt2-lightbox-zoom__thumb{display:block;view-transition-name:vt2-lightbox-photo}
      .nuda-vt2-lightbox-zoom[data-state="open"] .nuda-vt2-lightbox-zoom__thumb{display:none}
      .nuda-vt2-lightbox-zoom__full{position:absolute;inset:8px;width:auto;height:auto;border:none;border-radius:10px;background:linear-gradient(135deg,#e4ff54,#a3e635);cursor:pointer;padding:0;display:none}
      .nuda-vt2-lightbox-zoom[data-state="open"] .nuda-vt2-lightbox-zoom__full{display:block;view-transition-name:vt2-lightbox-photo}
      .nuda-vt2-lightbox-zoom__full:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2scrimin{from{opacity:0}to{opacity:1}}
      @keyframes _nuda-vt2scrimout{from{opacity:1}to{opacity:0}}
      ::view-transition-new(vt2-lightbox-scrim){animation:_nuda-vt2scrimin .3s ease both}
      ::view-transition-old(vt2-lightbox-scrim){animation:_nuda-vt2scrimout .3s ease both}
      ::view-transition-group(vt2-lightbox-photo){animation-duration:.4s;animation-timing-function:cubic-bezier(.4,0,.2,1)}
      @media(prefers-reduced-motion:reduce){::view-transition-new(vt2-lightbox-scrim),::view-transition-old(vt2-lightbox-scrim),::view-transition-group(vt2-lightbox-photo){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-lightbox-zoom" data-state="closed">
  <div class="nuda-vt2-lightbox-zoom__scrim" aria-hidden="true"></div>
  <button type="button" class="nuda-vt2-lightbox-zoom__thumb" aria-label="Open photo"></button>
  <button type="button" class="nuda-vt2-lightbox-zoom__full" aria-label="Close photo"></button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Lightbox Zoom — vanilla JS
   Two elements share one view-transition-name (only one is visible/in-flow
   at a time via display), so the API morphs the small thumbnail into the
   full frame. A separate scrim fades in/out as its own named transition. */

(function () {
  document.querySelectorAll(".nuda-vt2-lightbox-zoom").forEach(function (root) {
    var thumb = root.querySelector(".nuda-vt2-lightbox-zoom__thumb");
    var full = root.querySelector(".nuda-vt2-lightbox-zoom__full");

    function open() {
      function doSwap() { root.dataset.state = "open"; }
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    }
    function close() {
      function doSwap() { root.dataset.state = "closed"; }
      if (!document.startViewTransition) { doSwap(); return; }
      document.startViewTransition(doSwap);
    }

    thumb.addEventListener("click", open);
    full.addEventListener("click", close);
  });
})();`,
      },
    ],
  },

  /* ─────────────── Lime Edge Wipe ─────────────── */
  {
    id: "vt2-lime-edge-wipe",
    name: "Lime Edge Wipe",
    category: CAT,
    preview: (
      <div className="nuda-vt2-lime-edge-wipe-demo" style={{ padding: "0.5rem" }}>
        <div className="nuda-vt2-lime-edge-wipe" aria-hidden="true">
          <div className="nuda-vt2-lime-edge-wipe__back" />
          <div className="nuda-vt2-lime-edge-wipe__front" />
          <div className="nuda-vt2-lime-edge-wipe__edge" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-lime-edge-wipe-demo{padding:.5rem}
      .nuda-vt2-lime-edge-wipe{position:relative;width:160px;height:88px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.1)}
      .nuda-vt2-lime-edge-wipe__back{position:absolute;inset:0;background:#18181b}
      .nuda-vt2-lime-edge-wipe__front{position:absolute;inset:0;background:#1f2937;animation:_nuda-vt2limewipe 2.6s cubic-bezier(.65,0,.35,1) infinite alternate}
      .nuda-vt2-lime-edge-wipe__edge{position:absolute;top:-20%;bottom:-20%;left:-6%;width:10px;background:linear-gradient(180deg,transparent,#e4ff54,transparent);box-shadow:0 0 12px 2px rgba(228,255,84,.7);transform:skewX(-12deg) translateX(0%);animation:_nuda-vt2limeedge 2.6s cubic-bezier(.65,0,.35,1) infinite alternate}
      @keyframes _nuda-vt2limewipe{0%{clip-path:polygon(0% 0%,0% 0%,-15% 100%,-15% 100%)}100%{clip-path:polygon(0% 0%,115% 0%,100% 100%,-15% 100%)}}
      @keyframes _nuda-vt2limeedge{0%{transform:skewX(-12deg) translateX(-40px)}100%{transform:skewX(-12deg) translateX(190px)}}
      @media(prefers-reduced-motion:reduce){
        .nuda-vt2-lime-edge-wipe__front{animation:none;clip-path:polygon(0% 0%,115% 0%,100% 100%,-15% 100%)}
        .nuda-vt2-lime-edge-wipe__edge{animation:none;opacity:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-lime-edge-wipe" aria-hidden="true">
  <div class="nuda-vt2-lime-edge-wipe__back"></div>
  <div class="nuda-vt2-lime-edge-wipe__front"></div>
  <div class="nuda-vt2-lime-edge-wipe__edge"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── Skeleton Morph ─────────────── */
  {
    id: "vt2-skeleton-morph",
    name: "Skeleton Morph",
    category: CAT,
    preview: (
      <div className="nuda-vt2-skeleton-morph-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <div className="nuda-vt2-skeleton-morph">
          <div className="nuda-vt2-skeleton-morph__card" data-state="loading">
            <span className="nuda-vt2-skeleton-morph__bar nuda-vt2-skeleton-morph__bar--wide" />
            <span className="nuda-vt2-skeleton-morph__bar" />
            <p className="nuda-vt2-skeleton-morph__text">This is the loaded headline.</p>
          </div>
          <button
            type="button"
            className="nuda-vt2-skeleton-morph__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const card = root.querySelector<HTMLElement>(".nuda-vt2-skeleton-morph__card")!;
              const status = root.querySelector<HTMLElement>(".nuda-vt2-skeleton-morph__status")!;
              const swap = () => {
                const next = card.dataset.state === "loading" ? "loaded" : "loading";
                card.dataset.state = next;
                status.textContent = next === "loaded" ? "Content loaded" : "Loading";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Load content
          </button>
          <p className="nuda-vt2-skeleton-morph__status" aria-live="polite">Loading</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-skeleton-morph-demo{padding:.5rem}
      .nuda-vt2-skeleton-morph{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-skeleton-morph__card{display:flex;flex-direction:column;gap:6px;width:150px;min-height:56px;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#18181b;view-transition-name:vt2-skeleton-card}
      .nuda-vt2-skeleton-morph__bar{display:none;height:10px;border-radius:5px;width:60%;background:linear-gradient(90deg,#27272a 25%,#3f3f46 37%,#27272a 63%);background-size:400% 100%;animation:_nuda-vt2shimmer 1.4s ease-in-out infinite}
      .nuda-vt2-skeleton-morph__bar--wide{width:90%}
      .nuda-vt2-skeleton-morph__card[data-state="loading"] .nuda-vt2-skeleton-morph__bar{display:block}
      .nuda-vt2-skeleton-morph__text{display:none;margin:0;font-size:.74rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-skeleton-morph__card[data-state="loaded"] .nuda-vt2-skeleton-morph__text{display:block}
      .nuda-vt2-skeleton-morph__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-skeleton-morph__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-vt2-skeleton-morph__status{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
      @keyframes _nuda-vt2shimmer{0%{background-position:100% 0}100%{background-position:0 0}}
      ::view-transition-old(vt2-skeleton-card),::view-transition-new(vt2-skeleton-card){animation-duration:.25s;animation-timing-function:ease-out}
      @media(prefers-reduced-motion:reduce){
        .nuda-vt2-skeleton-morph__bar{animation:none;background-position:0 0}
        ::view-transition-old(vt2-skeleton-card),::view-transition-new(vt2-skeleton-card){animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-skeleton-morph">
  <div class="nuda-vt2-skeleton-morph__card" data-state="loading">
    <span class="nuda-vt2-skeleton-morph__bar nuda-vt2-skeleton-morph__bar--wide"></span>
    <span class="nuda-vt2-skeleton-morph__bar"></span>
    <p class="nuda-vt2-skeleton-morph__text">This is the loaded headline.</p>
  </div>
  <button type="button" class="nuda-vt2-skeleton-morph__btn">Load content</button>
  <p class="nuda-vt2-skeleton-morph__status" aria-live="polite">Loading</p>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Skeleton Morph — vanilla JS
   Crossfades a shimmering skeleton into its loaded content inside a short
   view transition, and announces the state change for screen readers. */

(function () {
  document.querySelectorAll(".nuda-vt2-skeleton-morph").forEach(function (root) {
    var card = root.querySelector(".nuda-vt2-skeleton-morph__card");
    var status = root.querySelector(".nuda-vt2-skeleton-morph__status");
    var btn = root.querySelector(".nuda-vt2-skeleton-morph__btn");

    function doSwap() {
      var next = card.dataset.state === "loading" ? "loaded" : "loading";
      card.dataset.state = next;
      status.textContent = next === "loaded" ? "Content loaded" : "Loading";
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

  /* ─────────────── Cube Rotate ─────────────── */
  {
    id: "vt2-cube-rotate",
    name: "Cube Rotate",
    category: CAT,
    preview: (
      <div className="nuda-vt2-cube-rotate-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-cube-rotate">
          <div className="nuda-vt2-cube-rotate__stage" data-state="a">
            <span className="nuda-vt2-cube-rotate__label">Face 1</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-cube-rotate__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-cube-rotate__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-cube-rotate__label")!.textContent = next === "a" ? "Face 1" : "Face 2";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Rotate cube
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-cube-rotate-demo{padding:.5rem}
      .nuda-vt2-cube-rotate{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-cube-rotate__stage{display:flex;align-items:center;justify-content:center;width:150px;height:84px;border-radius:12px;border:1px solid rgba(255,255,255,.12);view-transition-name:vt2-cube-stage}
      .nuda-vt2-cube-rotate__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-cube-rotate__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-cube-rotate__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-cube-rotate__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-cube-rotate__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2cubeout{from{transform:perspective(700px) rotateY(0)}to{transform:perspective(700px) rotateY(-90deg)}}
      @keyframes _nuda-vt2cubein{from{transform:perspective(700px) rotateY(90deg)}to{transform:perspective(700px) rotateY(0)}}
      ::view-transition-old(vt2-cube-stage){animation:_nuda-vt2cubeout .35s ease-in both;transform-origin:right}
      ::view-transition-new(vt2-cube-stage){animation:_nuda-vt2cubein .35s ease-out .35s both;transform-origin:left}
      ::view-transition-group(vt2-cube-stage){animation-duration:.7s}
      @supports not (view-transition-name:none){.nuda-vt2-cube-rotate__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-cube-stage),::view-transition-new(vt2-cube-stage){animation:none}.nuda-vt2-cube-rotate__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-cube-rotate">
  <div class="nuda-vt2-cube-rotate__stage" data-state="a">
    <span class="nuda-vt2-cube-rotate__label">Face 1</span>
  </div>
  <button type="button" class="nuda-vt2-cube-rotate__btn">Rotate cube</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cube Rotate — vanilla JS
   The outgoing face rotates away around its right edge, the incoming face
   rotates in from the left, mimicking one face of a rotating cube. */

(function () {
  document.querySelectorAll(".nuda-vt2-cube-rotate").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-cube-rotate__stage");
    var label = root.querySelector(".nuda-vt2-cube-rotate__label");
    var btn = root.querySelector(".nuda-vt2-cube-rotate__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "Face 1" : "Face 2";
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

  /* ─────────────── Accordion Fold ─────────────── */
  {
    id: "vt2-accordion-fold",
    name: "Accordion Fold",
    category: CAT,
    preview: (
      <div className="nuda-vt2-accordion-fold-demo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <div className="nuda-vt2-accordion-fold">
          <div className="nuda-vt2-accordion-fold__stage" data-state="a">
            <span className="nuda-vt2-accordion-fold__label">Panel A</span>
          </div>
          <button
            type="button"
            className="nuda-vt2-accordion-fold__btn"
            onClick={(e) => {
              const root = e.currentTarget.parentElement!;
              const stage = root.querySelector<HTMLElement>(".nuda-vt2-accordion-fold__stage")!;
              const swap = () => {
                const next = stage.dataset.state === "a" ? "b" : "a";
                stage.dataset.state = next;
                stage.querySelector(".nuda-vt2-accordion-fold__label")!.textContent = next === "a" ? "Panel A" : "Panel B";
              };
              const doc = document as any;
              if (!doc.startViewTransition) { swap(); return; }
              doc.startViewTransition(swap);
            }}
          >
            Fold panel
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vt2-accordion-fold-demo{padding:.5rem}
      .nuda-vt2-accordion-fold{display:flex;flex-direction:column;align-items:center;gap:8px}
      .nuda-vt2-accordion-fold__stage{display:flex;align-items:center;justify-content:center;width:150px;height:72px;border-radius:12px;border:1px solid rgba(255,255,255,.1);view-transition-name:vt2-accordion-stage}
      .nuda-vt2-accordion-fold__stage[data-state="a"]{background:#18181b}
      .nuda-vt2-accordion-fold__stage[data-state="b"]{background:#1f2937}
      .nuda-vt2-accordion-fold__label{font-size:.78rem;font-weight:700;color:#e4ff54}
      .nuda-vt2-accordion-fold__btn{background:#e4ff54;color:#09090b;border:none;border-radius:8px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;cursor:pointer}
      .nuda-vt2-accordion-fold__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-vt2accordionout{from{transform:scaleY(1);opacity:1}to{transform:scaleY(.03);opacity:.7}}
      @keyframes _nuda-vt2accordionin{from{transform:scaleY(.03)}to{transform:scaleY(1)}}
      ::view-transition-old(vt2-accordion-stage){animation:_nuda-vt2accordionout .3s ease-in both;transform-origin:top}
      ::view-transition-new(vt2-accordion-stage){animation:_nuda-vt2accordionin .35s cubic-bezier(.34,1.4,.64,1) .3s both;transform-origin:bottom}
      ::view-transition-group(vt2-accordion-stage){animation-duration:.65s}
      @supports not (view-transition-name:none){.nuda-vt2-accordion-fold__stage{transition:background-color .3s ease}}
      @media(prefers-reduced-motion:reduce){::view-transition-old(vt2-accordion-stage),::view-transition-new(vt2-accordion-stage){animation:none}.nuda-vt2-accordion-fold__stage{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vt2-accordion-fold">
  <div class="nuda-vt2-accordion-fold__stage" data-state="a">
    <span class="nuda-vt2-accordion-fold__label">Panel A</span>
  </div>
  <button type="button" class="nuda-vt2-accordion-fold__btn">Fold panel</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Accordion Fold — vanilla JS
   The old panel folds flat like paper (scaleY to near zero), then the new
   panel unfolds from the bottom with a slight overshoot. */

(function () {
  document.querySelectorAll(".nuda-vt2-accordion-fold").forEach(function (root) {
    var stage = root.querySelector(".nuda-vt2-accordion-fold__stage");
    var label = root.querySelector(".nuda-vt2-accordion-fold__label");
    var btn = root.querySelector(".nuda-vt2-accordion-fold__btn");

    function doSwap() {
      var next = stage.dataset.state === "a" ? "b" : "a";
      stage.dataset.state = next;
      label.textContent = next === "a" ? "Panel A" : "Panel B";
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
