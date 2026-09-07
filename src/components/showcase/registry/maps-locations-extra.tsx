import type { NudaComponent } from "./types";

const CAT = "Maps & Locations";

export const mapsLocationsExtra: NudaComponent[] = [
  /* ─────────────── 1. Delivery Tracker ─────────────── */
  {
    id: "ml2-delivery",
    name: "Delivery Tracker",
    category: CAT,
    preview: (
      <div className="nuda-ml2-delivery">
        <div className="nuda-ml2-delivery__map" aria-hidden="true">
          <svg viewBox="0 0 240 100" fill="none">
            <path
              className="nuda-ml2-delivery__route"
              d="M14,74 C50,20 120,88 226,26"
              stroke="rgba(255,255,255,.15)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              className="nuda-ml2-delivery__route-fill"
              d="M14,74 C50,20 120,88 226,26"
              stroke="#e4ff54"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="14" cy="74" r="5" fill="#62b6ff" />
            <circle cx="226" cy="26" r="5" fill="#fafafa" />
          </svg>
          <span className="nuda-ml2-delivery__van" />
        </div>
        <p className="nuda-ml2-delivery__text">
          Delivery en route — arriving in <strong>8 min</strong>
        </p>
      </div>
    ),
    cssInline: `
      .nuda-ml2-delivery{display:flex;flex-direction:column;gap:8px;width:240px;max-width:100%}
      .nuda-ml2-delivery__map{position:relative;width:240px;height:100px}
      .nuda-ml2-delivery__map svg{position:absolute;inset:0;width:100%;height:100%}
      .nuda-ml2-delivery__route-fill{stroke-dasharray:320;stroke-dashoffset:320;animation:_nuda-ml2delivery-draw 3.2s ease-in-out infinite}
      .nuda-ml2-delivery__van{position:absolute;top:0;left:0;width:14px;height:10px;border-radius:3px;background:#e4ff54;box-shadow:0 0 6px rgba(228,255,84,.6);transform:translate(-50%,-50%);offset-path:path("M14,74 C50,20 120,88 226,26");offset-rotate:0deg;offset-distance:0%;animation:_nuda-ml2delivery-drive 3.2s ease-in-out infinite}
      .nuda-ml2-delivery__text{margin:0;font-size:12px;color:#cfcfcf}
      .nuda-ml2-delivery__text strong{color:#fafafa;font-weight:700}
      @keyframes _nuda-ml2delivery-draw{0%{stroke-dashoffset:320}70%,100%{stroke-dashoffset:0}}
      @keyframes _nuda-ml2delivery-drive{0%{offset-distance:0%}70%,100%{offset-distance:100%}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-delivery__route-fill{animation:none !important;stroke-dashoffset:0}.nuda-ml2-delivery__van{animation:none !important;offset-distance:100%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-delivery">
  <div class="nuda-ml2-delivery__map" aria-hidden="true">
    <svg viewBox="0 0 240 100" fill="none">
      <path class="nuda-ml2-delivery__route" d="M14,74 C50,20 120,88 226,26"
            stroke="rgba(255,255,255,.15)" stroke-width="3" stroke-linecap="round" />
      <path class="nuda-ml2-delivery__route-fill" d="M14,74 C50,20 120,88 226,26"
            stroke="#e4ff54" stroke-width="3" stroke-linecap="round" />
      <circle cx="14" cy="74" r="5" fill="#62b6ff" />
      <circle cx="226" cy="26" r="5" fill="#fafafa" />
    </svg>
    <span class="nuda-ml2-delivery__van"></span>
  </div>
  <p class="nuda-ml2-delivery__text">Delivery en route — arriving in <strong>8 min</strong></p>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Geofence Ring ─────────────── */
  {
    id: "ml2-geofence",
    name: "Geofence Ring",
    category: CAT,
    preview: (
      <div className="nuda-ml2-geofence">
        <div className="nuda-ml2-geofence__field" aria-hidden="true">
          <span className="nuda-ml2-geofence__boundary" />
          <span className="nuda-ml2-geofence__ring" />
          <span className="nuda-ml2-geofence__ring nuda-ml2-geofence__ring--delay" />
          <span className="nuda-ml2-geofence__pin" />
        </div>
        <p className="nuda-ml2-geofence__text">
          Geofence active — <strong>500 m</strong> around Home
        </p>
      </div>
    ),
    cssInline: `
      .nuda-ml2-geofence{display:flex;flex-direction:column;align-items:center;gap:8px;width:220px;max-width:100%}
      .nuda-ml2-geofence__field{position:relative;width:160px;height:160px;display:flex;align-items:center;justify-content:center}
      .nuda-ml2-geofence__boundary{position:absolute;inset:8px;border:1.5px dashed rgba(228,255,84,.35);border-radius:50%}
      .nuda-ml2-geofence__ring{position:absolute;width:40px;height:40px;border-radius:50%;border:2px solid #e4ff54;opacity:0;animation:_nuda-ml2geofence-pulse 2.8s ease-out infinite}
      .nuda-ml2-geofence__ring--delay{animation-delay:1.4s}
      .nuda-ml2-geofence__pin{position:relative;width:14px;height:14px;border-radius:50%;background:#e4ff54;box-shadow:0 0 0 4px rgba(228,255,84,.2),0 0 10px rgba(228,255,84,.6);z-index:1}
      .nuda-ml2-geofence__text{margin:0;font-size:12px;color:#cfcfcf;text-align:center}
      .nuda-ml2-geofence__text strong{color:#fafafa;font-weight:700}
      @keyframes _nuda-ml2geofence-pulse{0%{transform:scale(.3);opacity:.8}100%{transform:scale(3.6);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-geofence__ring{animation:none !important;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-geofence">
  <div class="nuda-ml2-geofence__field" aria-hidden="true">
    <span class="nuda-ml2-geofence__boundary"></span>
    <span class="nuda-ml2-geofence__ring"></span>
    <span class="nuda-ml2-geofence__ring nuda-ml2-geofence__ring--delay"></span>
    <span class="nuda-ml2-geofence__pin"></span>
  </div>
  <p class="nuda-ml2-geofence__text">Geofence active — <strong>500 m</strong> around Home</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Store Locator List ─────────────── */
  {
    id: "ml2-storelist",
    name: "Store Locator List",
    category: CAT,
    preview: (
      <div className="nuda-ml2-storelist">
        <div className="nuda-ml2-storelist__map" aria-hidden="true">
          <span className="nuda-ml2-storelist__dot" style={{ left: "22%", top: "65%" }} />
          <span
            className="nuda-ml2-storelist__dot nuda-ml2-storelist__dot--active"
            style={{ left: "55%", top: "30%" }}
          />
          <span className="nuda-ml2-storelist__dot" style={{ left: "80%", top: "60%" }} />
        </div>
        <ul className="nuda-ml2-storelist__list">
          {[
            { label: "Downtown", dist: "1.2 mi", active: false },
            { label: "Midtown", dist: "0.4 mi", active: true },
            { label: "Riverside", dist: "2.8 mi", active: false },
          ].map((store, i) => (
            <li key={store.label}>
              <button
                type="button"
                className={
                  "nuda-ml2-storelist__item" +
                  (store.active ? " nuda-ml2-storelist__item--active" : "")
                }
                aria-pressed={store.active}
                onClick={(e) => {
                  const list = e.currentTarget.closest(".nuda-ml2-storelist");
                  if (!list) return;
                  list.querySelectorAll(".nuda-ml2-storelist__item").forEach((el) => {
                    el.classList.remove("nuda-ml2-storelist__item--active");
                    el.setAttribute("aria-pressed", "false");
                  });
                  e.currentTarget.classList.add("nuda-ml2-storelist__item--active");
                  e.currentTarget.setAttribute("aria-pressed", "true");
                  const dots = list.querySelectorAll(".nuda-ml2-storelist__dot");
                  dots.forEach((d) => d.classList.remove("nuda-ml2-storelist__dot--active"));
                  dots[i]?.classList.add("nuda-ml2-storelist__dot--active");
                }}
              >
                {store.label} <span>{store.dist}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ml2-storelist{display:flex;flex-direction:column;gap:10px;width:260px;max-width:100%}
      .nuda-ml2-storelist__map{position:relative;width:100%;height:90px;border-radius:10px;background:linear-gradient(135deg,#111114,#1a1a20);border:1px solid rgba(255,255,255,.08);overflow:hidden}
      .nuda-ml2-storelist__dot{position:absolute;width:9px;height:9px;border-radius:50%;background:#63636e;transform:translate(-50%,-50%);transition:background .25s,box-shadow .25s,transform .25s}
      .nuda-ml2-storelist__dot--active{background:#e4ff54;box-shadow:0 0 10px rgba(228,255,84,.7);transform:translate(-50%,-50%) scale(1.3)}
      .nuda-ml2-storelist__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
      .nuda-ml2-storelist__item{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;min-height:44px;padding:0 12px;border-radius:8px;border:1px solid rgba(255,255,255,.08);background:#161616;color:#cfcfcf;font-size:12px;cursor:pointer;transition:background .2s,border-color .2s,color .2s}
      .nuda-ml2-storelist__item span{color:#777;font-size:11px}
      .nuda-ml2-storelist__item--active{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#fafafa}
      .nuda-ml2-storelist__item--active span{color:#e4ff54}
      .nuda-ml2-storelist__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-storelist__dot{transition:none}.nuda-ml2-storelist__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-storelist">
  <div class="nuda-ml2-storelist__map" aria-hidden="true">
    <span class="nuda-ml2-storelist__dot" style="left:22%;top:65%"></span>
    <span class="nuda-ml2-storelist__dot nuda-ml2-storelist__dot--active" style="left:55%;top:30%"></span>
    <span class="nuda-ml2-storelist__dot" style="left:80%;top:60%"></span>
  </div>
  <ul class="nuda-ml2-storelist__list">
    <li><button type="button" class="nuda-ml2-storelist__item" data-dot="0">Downtown <span>1.2 mi</span></button></li>
    <li><button type="button" class="nuda-ml2-storelist__item nuda-ml2-storelist__item--active" data-dot="1" aria-pressed="true">Midtown <span>0.4 mi</span></button></li>
    <li><button type="button" class="nuda-ml2-storelist__item" data-dot="2">Riverside <span>2.8 mi</span></button></li>
  </ul>
</div>`,
      },
      {
        label: "JavaScript",
        language: "javascript",
        code: `document.querySelectorAll(".nuda-ml2-storelist__item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const list = btn.closest(".nuda-ml2-storelist");
    list.querySelectorAll(".nuda-ml2-storelist__item").forEach((el) => {
      el.classList.remove("nuda-ml2-storelist__item--active");
      el.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("nuda-ml2-storelist__item--active");
    btn.setAttribute("aria-pressed", "true");

    const dots = list.querySelectorAll(".nuda-ml2-storelist__dot");
    dots.forEach((d) => d.classList.remove("nuda-ml2-storelist__dot--active"));
    dots[Number(btn.dataset.dot)]?.classList.add("nuda-ml2-storelist__dot--active");
  });
});`,
      },
    ],
  },

  /* ─────────────── 4. ETA Progress Path ─────────────── */
  {
    id: "ml2-eta",
    name: "ETA Progress Path",
    category: CAT,
    preview: (
      <div className="nuda-ml2-eta">
        <div className="nuda-ml2-eta__map" aria-hidden="true">
          <svg viewBox="0 0 240 70" fill="none">
            <path
              className="nuda-ml2-eta__track"
              d="M10,55 Q80,10 130,40 T230,15"
              stroke="rgba(255,255,255,.12)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              className="nuda-ml2-eta__fill"
              d="M10,55 Q80,10 130,40 T230,15"
              stroke="#e4ff54"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="nuda-ml2-eta__dot" />
        </div>
        <p className="nuda-ml2-eta__text">
          ETA <strong>12 min</strong> — 3.1 mi remaining
        </p>
      </div>
    ),
    cssInline: `
      .nuda-ml2-eta{display:flex;flex-direction:column;gap:6px;width:240px;max-width:100%}
      .nuda-ml2-eta__map{position:relative;width:240px;height:70px}
      .nuda-ml2-eta__map svg{position:absolute;inset:0;width:100%;height:100%}
      .nuda-ml2-eta__fill{stroke-dasharray:280;stroke-dashoffset:280;animation:_nuda-ml2eta-draw 3.6s ease-in-out infinite}
      .nuda-ml2-eta__dot{position:absolute;top:0;left:0;width:10px;height:10px;border-radius:50%;background:#0a0a0a;border:2px solid #e4ff54;box-shadow:0 0 6px rgba(228,255,84,.7);transform:translate(-50%,-50%);offset-path:path("M10,55 Q80,10 130,40 T230,15");offset-distance:0%;animation:_nuda-ml2eta-move 3.6s ease-in-out infinite}
      .nuda-ml2-eta__text{margin:0;font-size:12px;color:#cfcfcf}
      .nuda-ml2-eta__text strong{color:#fafafa;font-weight:700}
      @keyframes _nuda-ml2eta-draw{0%{stroke-dashoffset:280}90%,100%{stroke-dashoffset:0}}
      @keyframes _nuda-ml2eta-move{0%{offset-distance:0%}90%,100%{offset-distance:100%}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-eta__fill{animation:none !important;stroke-dashoffset:0}.nuda-ml2-eta__dot{animation:none !important;offset-distance:100%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-eta">
  <div class="nuda-ml2-eta__map" aria-hidden="true">
    <svg viewBox="0 0 240 70" fill="none">
      <path class="nuda-ml2-eta__track" d="M10,55 Q80,10 130,40 T230,15"
            stroke="rgba(255,255,255,.12)" stroke-width="4" stroke-linecap="round" />
      <path class="nuda-ml2-eta__fill" d="M10,55 Q80,10 130,40 T230,15"
            stroke="#e4ff54" stroke-width="4" stroke-linecap="round" />
    </svg>
    <span class="nuda-ml2-eta__dot"></span>
  </div>
  <p class="nuda-ml2-eta__text">ETA <strong>12 min</strong> — 3.1 mi remaining</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Transit Line ─────────────── */
  {
    id: "ml2-transit",
    name: "Transit Line",
    category: CAT,
    preview: (
      <div className="nuda-ml2-transit">
        <div className="nuda-ml2-transit__line" aria-hidden="true">
          <span className="nuda-ml2-transit__station" style={{ left: "0%" }} />
          <span className="nuda-ml2-transit__station" style={{ left: "33%" }} />
          <span className="nuda-ml2-transit__station" style={{ left: "66%" }} />
          <span className="nuda-ml2-transit__station" style={{ left: "100%" }} />
          <span className="nuda-ml2-transit__train" />
        </div>
        <ul className="nuda-ml2-transit__labels">
          <li>Central</li>
          <li>Park</li>
          <li>Market</li>
          <li>Harbor</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ml2-transit{display:flex;flex-direction:column;gap:8px;width:240px;max-width:100%}
      .nuda-ml2-transit__line{position:relative;width:240px;height:16px}
      .nuda-ml2-transit__line::before{content:'';position:absolute;left:6px;right:6px;top:50%;height:2px;background:rgba(255,255,255,.15);transform:translateY(-50%)}
      .nuda-ml2-transit__station{position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:#161616;border:2px solid #63636e;transform:translate(-50%,-50%);z-index:1}
      .nuda-ml2-transit__train{position:absolute;top:50%;left:6px;width:20px;height:10px;border-radius:3px;background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.6);transform:translate(0,-50%);animation:_nuda-ml2transit-move 6s ease-in-out infinite;z-index:2}
      .nuda-ml2-transit__labels{display:flex;justify-content:space-between;margin:0;padding:0;list-style:none;font-size:10px;color:#777}
      @keyframes _nuda-ml2transit-move{0%,8%{transform:translate(0,-50%)}25%,33%{transform:translate(76px,-50%)}50%,58%{transform:translate(152px,-50%)}75%,83%{transform:translate(224px,-50%)}100%{transform:translate(0,-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-transit__train{animation:none !important;transform:translate(0,-50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-transit">
  <div class="nuda-ml2-transit__line" aria-hidden="true">
    <span class="nuda-ml2-transit__station" style="left:0%"></span>
    <span class="nuda-ml2-transit__station" style="left:33%"></span>
    <span class="nuda-ml2-transit__station" style="left:66%"></span>
    <span class="nuda-ml2-transit__station" style="left:100%"></span>
    <span class="nuda-ml2-transit__train"></span>
  </div>
  <ul class="nuda-ml2-transit__labels">
    <li>Central</li>
    <li>Park</li>
    <li>Market</li>
    <li>Harbor</li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Heat Map Density ─────────────── */
  {
    id: "ml2-heatmap",
    name: "Heat Map Density",
    category: CAT,
    preview: (
      <div className="nuda-ml2-heatmap">
        <div className="nuda-ml2-heatmap__field" aria-hidden="true">
          <span className="nuda-ml2-heatmap__grid" />
          <span
            className="nuda-ml2-heatmap__blob nuda-ml2-heatmap__blob--hot"
            style={{ left: "32%", top: "45%" }}
          />
          <span
            className="nuda-ml2-heatmap__blob nuda-ml2-heatmap__blob--warm"
            style={{ left: "62%", top: "60%" }}
          />
          <span
            className="nuda-ml2-heatmap__blob nuda-ml2-heatmap__blob--warm"
            style={{ left: "72%", top: "25%" }}
          />
        </div>
        <p className="nuda-ml2-heatmap__text">
          Traffic density — highest near <strong>Downtown</strong>
        </p>
      </div>
    ),
    cssInline: `
      .nuda-ml2-heatmap{display:flex;flex-direction:column;gap:8px;width:240px;max-width:100%}
      .nuda-ml2-heatmap__field{position:relative;width:240px;height:120px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#0c0c10,#1a1a20);border:1px solid rgba(255,255,255,.06)}
      .nuda-ml2-heatmap__grid{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(0deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:16px 16px}
      .nuda-ml2-heatmap__blob{position:absolute;width:70px;height:70px;border-radius:50%;transform:translate(-50%,-50%);filter:blur(14px);mix-blend-mode:screen;animation:_nuda-ml2heatmap-pulse 4s ease-in-out infinite}
      .nuda-ml2-heatmap__blob--hot{background:radial-gradient(circle,rgba(255,94,70,.9),transparent 70%)}
      .nuda-ml2-heatmap__blob--warm{background:radial-gradient(circle,rgba(228,255,84,.6),transparent 70%);animation-delay:1.2s}
      .nuda-ml2-heatmap__text{margin:0;font-size:12px;color:#cfcfcf}
      .nuda-ml2-heatmap__text strong{color:#fafafa;font-weight:700}
      @keyframes _nuda-ml2heatmap-pulse{0%,100%{opacity:.6;transform:translate(-50%,-50%) scale(.9)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.15)}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-heatmap__blob{animation:none !important;opacity:.85;transform:translate(-50%,-50%) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-heatmap">
  <div class="nuda-ml2-heatmap__field" aria-hidden="true">
    <span class="nuda-ml2-heatmap__grid"></span>
    <span class="nuda-ml2-heatmap__blob nuda-ml2-heatmap__blob--hot" style="left:32%;top:45%"></span>
    <span class="nuda-ml2-heatmap__blob nuda-ml2-heatmap__blob--warm" style="left:62%;top:60%"></span>
    <span class="nuda-ml2-heatmap__blob nuda-ml2-heatmap__blob--warm" style="left:72%;top:25%"></span>
  </div>
  <p class="nuda-ml2-heatmap__text">Traffic density — highest near <strong>Downtown</strong></p>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. World Office Pulse ─────────────── */
  {
    id: "ml2-worldmap",
    name: "World Office Pulse",
    category: CAT,
    preview: (
      <div className="nuda-ml2-worldmap">
        <div className="nuda-ml2-worldmap__globe" aria-hidden="true">
          <span className="nuda-ml2-worldmap__office" style={{ left: "20%", top: "35%" }}>
            <span className="nuda-ml2-worldmap__ping" />
          </span>
          <span className="nuda-ml2-worldmap__office" style={{ left: "48%", top: "60%" }}>
            <span className="nuda-ml2-worldmap__ping" />
          </span>
          <span className="nuda-ml2-worldmap__office" style={{ left: "78%", top: "32%" }}>
            <span className="nuda-ml2-worldmap__ping" />
          </span>
        </div>
        <ul className="nuda-ml2-worldmap__legend">
          <li>New York</li>
          <li>London</li>
          <li>Tokyo</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ml2-worldmap{display:flex;flex-direction:column;gap:8px;width:260px;max-width:100%}
      .nuda-ml2-worldmap__globe{position:relative;width:260px;height:110px;border-radius:10px;overflow:hidden;background:linear-gradient(180deg,#111116,#0a0a0c);border:1px solid rgba(255,255,255,.08)}
      .nuda-ml2-worldmap__globe::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0,rgba(255,255,255,.05) 1px,transparent 1px,transparent 32px),repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0,rgba(255,255,255,.05) 1px,transparent 1px,transparent 20px)}
      .nuda-ml2-worldmap__office{position:absolute;width:8px;height:8px;border-radius:50%;background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.7);transform:translate(-50%,-50%)}
      .nuda-ml2-worldmap__ping{position:absolute;inset:-6px;border-radius:50%;border:1.5px solid #e4ff54;animation:_nuda-ml2worldmap-ping 2.6s ease-out infinite}
      .nuda-ml2-worldmap__office:nth-of-type(2) .nuda-ml2-worldmap__ping{animation-delay:.9s}
      .nuda-ml2-worldmap__office:nth-of-type(3) .nuda-ml2-worldmap__ping{animation-delay:1.7s}
      .nuda-ml2-worldmap__legend{display:flex;justify-content:space-around;margin:0;padding:0;list-style:none;font-size:10px;color:#777}
      @keyframes _nuda-ml2worldmap-ping{0%{transform:scale(.4);opacity:.9}100%{transform:scale(2.2);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-worldmap__ping{animation:none !important;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-worldmap">
  <div class="nuda-ml2-worldmap__globe" aria-hidden="true">
    <span class="nuda-ml2-worldmap__office" style="left:20%;top:35%">
      <span class="nuda-ml2-worldmap__ping"></span>
    </span>
    <span class="nuda-ml2-worldmap__office" style="left:48%;top:60%">
      <span class="nuda-ml2-worldmap__ping"></span>
    </span>
    <span class="nuda-ml2-worldmap__office" style="left:78%;top:32%">
      <span class="nuda-ml2-worldmap__ping"></span>
    </span>
  </div>
  <ul class="nuda-ml2-worldmap__legend">
    <li>New York</li>
    <li>London</li>
    <li>Tokyo</li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Distance Scale Bar ─────────────── */
  {
    id: "ml2-scalebar",
    name: "Distance Scale Bar",
    category: CAT,
    preview: (
      <div className="nuda-ml2-scalebar">
        <div className="nuda-ml2-scalebar__map" aria-hidden="true">
          <span className="nuda-ml2-scalebar__grid" />
        </div>
        <div className="nuda-ml2-scalebar__ruler" aria-hidden="true">
          <span className="nuda-ml2-scalebar__seg" />
          <span className="nuda-ml2-scalebar__seg nuda-ml2-scalebar__seg--alt" />
          <span className="nuda-ml2-scalebar__seg" />
          <span className="nuda-ml2-scalebar__seg nuda-ml2-scalebar__seg--alt" />
          <span className="nuda-ml2-scalebar__sweep" />
        </div>
        <ul className="nuda-ml2-scalebar__labels">
          <li>0</li>
          <li>100 m</li>
          <li>200 m</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ml2-scalebar{display:flex;flex-direction:column;align-items:center;gap:8px;width:240px;max-width:100%}
      .nuda-ml2-scalebar__map{position:relative;width:240px;height:90px;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#101014,#1a1a20);border:1px solid rgba(255,255,255,.06)}
      .nuda-ml2-scalebar__grid{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(0deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:20px 20px}
      .nuda-ml2-scalebar__ruler{position:relative;display:flex;width:200px;height:8px;border-radius:2px;overflow:hidden;background:#161616;border:1px solid rgba(255,255,255,.12)}
      .nuda-ml2-scalebar__seg{flex:1;background:#2a2a30}
      .nuda-ml2-scalebar__seg--alt{background:#3a3a42}
      .nuda-ml2-scalebar__sweep{position:absolute;top:0;left:0;width:40px;height:100%;background:linear-gradient(90deg,transparent,rgba(228,255,84,.8),transparent);transform:translateX(-40px);animation:_nuda-ml2scalebar-sweep 3s ease-in-out infinite}
      .nuda-ml2-scalebar__labels{display:flex;justify-content:space-between;width:200px;margin:0;padding:0;list-style:none;font-size:10px;color:#777}
      @keyframes _nuda-ml2scalebar-sweep{0%{transform:translateX(-40px)}100%{transform:translateX(200px)}}
      @media(prefers-reduced-motion:reduce){.nuda-ml2-scalebar__sweep{animation:none !important;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ml2-scalebar">
  <div class="nuda-ml2-scalebar__map" aria-hidden="true">
    <span class="nuda-ml2-scalebar__grid"></span>
  </div>
  <div class="nuda-ml2-scalebar__ruler" aria-hidden="true">
    <span class="nuda-ml2-scalebar__seg"></span>
    <span class="nuda-ml2-scalebar__seg nuda-ml2-scalebar__seg--alt"></span>
    <span class="nuda-ml2-scalebar__seg"></span>
    <span class="nuda-ml2-scalebar__seg nuda-ml2-scalebar__seg--alt"></span>
    <span class="nuda-ml2-scalebar__sweep"></span>
  </div>
  <ul class="nuda-ml2-scalebar__labels">
    <li>0</li>
    <li>100 m</li>
    <li>200 m</li>
  </ul>
</div>`,
      },
    ],
  },
];
