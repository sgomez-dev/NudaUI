import type { NudaComponent } from "./types";

export const slidersRanges: NudaComponent[] = [
  /* ─────────────── 1. Basic Slider ─────────────── */
  {
    id: "basic-slider",
    name: "Basic Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-slider-basic">
        <div className="nuda-slider-basic__track">
          <div className="nuda-slider-basic__fill" style={{ width: "60%" }} />
          <div className="nuda-slider-basic__thumb" style={{ left: "60%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-slider-basic{width:100%;max-width:220px;padding:8px 12px}
      .nuda-slider-basic__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-slider-basic__fill{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:99px;transition:width .35s cubic-bezier(.16,1,.3,1)}
      .nuda-slider-basic__thumb{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);cursor:grab;box-shadow:0 0 0 4px rgba(228,255,84,.15),0 0 12px rgba(228,255,84,.4);transition:left .35s cubic-bezier(.16,1,.3,1),transform .25s,box-shadow .25s}
      .nuda-slider-basic__thumb:hover{transform:translate(-50%,-50%) scale(1.15);box-shadow:0 0 0 6px rgba(228,255,84,.18),0 0 18px rgba(228,255,84,.6)}
      .nuda-slider-basic__thumb:active{cursor:grabbing}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-slider-basic">
  <div class="nuda-slider-basic__track">
    <div class="nuda-slider-basic__fill" style="width:60%"></div>
    <div class="nuda-slider-basic__thumb" style="left:60%"></div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const track = document.querySelector('.nuda-slider-basic__track');
const fill  = track.querySelector('.nuda-slider-basic__fill');
const thumb = track.querySelector('.nuda-slider-basic__thumb');

let dragging = false;

const setPercent = (clientX) => {
  const rect = track.getBoundingClientRect();
  const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
  fill.style.width = pct + '%';
  thumb.style.left = pct + '%';
};

thumb.addEventListener('pointerdown', () => (dragging = true));
window.addEventListener('pointerup', () => (dragging = false));
window.addEventListener('pointermove', (e) => dragging && setPercent(e.clientX));
track.addEventListener('click', (e) => setPercent(e.clientX));`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-slider-basic__thumb {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e4ff54;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow:
    0 0 0 4px rgba(228, 255, 84, 0.15),
    0 0 12px rgba(228, 255, 84, 0.4);
  transition:
    transform 0.25s,
    box-shadow 0.25s;
}

.nuda-slider-basic__thumb:hover {
  transform: translate(-50%, -50%) scale(1.15);
  box-shadow:
    0 0 0 6px rgba(228, 255, 84, 0.18),
    0 0 18px rgba(228, 255, 84, 0.6);
}`,
      },
    ],
  },

  /* ─────────────── 2. Range Slider (dual handles) ─────────────── */
  {
    id: "range-slider",
    name: "Dual Range Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-rangedual">
        <div className="nuda-rangedual__track">
          <div className="nuda-rangedual__fill" style={{ left: "25%", width: "45%" }} />
          <div className="nuda-rangedual__thumb" style={{ left: "25%" }} />
          <div className="nuda-rangedual__thumb" style={{ left: "70%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-rangedual{width:100%;max-width:220px;padding:8px 12px}
      .nuda-rangedual__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-rangedual__fill{position:absolute;top:0;height:100%;background:linear-gradient(90deg,#e4ff54,#6ee7b7);border-radius:99px;transition:left .35s cubic-bezier(.16,1,.3,1),width .35s cubic-bezier(.16,1,.3,1)}
      .nuda-rangedual__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;transform:translate(-50%,-50%);cursor:grab;transition:transform .25s,box-shadow .25s}
      .nuda-rangedual__thumb:hover{transform:translate(-50%,-50%) scale(1.2);box-shadow:0 0 0 5px rgba(228,255,84,.15)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-rangedual">
  <div class="nuda-rangedual__track">
    <div class="nuda-rangedual__fill" style="left:25%;width:45%"></div>
    <div class="nuda-rangedual__thumb" style="left:25%"></div>
    <div class="nuda-rangedual__thumb" style="left:70%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-rangedual__fill {
  position: absolute;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #e4ff54, #6ee7b7);
  border-radius: 99px;
  transition:
    left 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-rangedual__thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid #e4ff54;
  cursor: grab;
}`,
      },
    ],
  },

  /* ─────────────── 3. Value Bubble ─────────────── */
  {
    id: "slider-bubble",
    name: "Slider Value Bubble",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-slbubble">
        <div className="nuda-slbubble__track">
          <div className="nuda-slbubble__fill" style={{ width: "50%" }} />
          <div className="nuda-slbubble__thumb" style={{ left: "50%" }}>
            <span className="nuda-slbubble__bubble">42</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-slbubble{width:100%;max-width:220px;padding:24px 12px 12px}
      .nuda-slbubble__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-slbubble__fill{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:99px}
      .nuda-slbubble__thumb{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);cursor:grab}
      .nuda-slbubble__bubble{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translateX(-50%);padding:4px 8px;background:#09090b;border:1px solid #e4ff54;border-radius:6px;color:#e4ff54;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap;animation:_bubFloat 2.4s ease-in-out infinite}
      .nuda-slbubble__bubble::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:#e4ff54}
      @keyframes _bubFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-3px)}}
      @media(prefers-reduced-motion:reduce){.nuda-slbubble__bubble{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-slbubble">
  <div class="nuda-slbubble__track">
    <div class="nuda-slbubble__fill" style="width:50%"></div>
    <div class="nuda-slbubble__thumb" style="left:50%">
      <span class="nuda-slbubble__bubble">42</span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-slbubble__bubble {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: #09090b;
  border: 1px solid #e4ff54;
  border-radius: 6px;
  color: #e4ff54;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: nuda-bub-float 2.4s ease-in-out infinite;
}

.nuda-slbubble__bubble::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: #e4ff54;
}

@keyframes nuda-bub-float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(-3px); }
}`,
      },
    ],
  },

  /* ─────────────── 4. Vertical Slider ─────────────── */
  {
    id: "vertical-slider",
    name: "Vertical Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-vslider">
        <div className="nuda-vslider__track">
          <div className="nuda-vslider__fill" style={{ height: "65%" }} />
          <div className="nuda-vslider__thumb" style={{ bottom: "65%" }} />
        </div>
        <span className="nuda-vslider__value">65</span>
      </div>
    ),
    cssInline: `
      .nuda-vslider{display:inline-flex;flex-direction:column;align-items:center;gap:8px;height:160px}
      .nuda-vslider__track{position:relative;width:4px;flex:1;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-vslider__fill{position:absolute;left:0;bottom:0;width:100%;background:linear-gradient(180deg,#e4ff54,#b8cc43);border-radius:99px;transition:height .4s cubic-bezier(.16,1,.3,1)}
      .nuda-vslider__thumb{position:absolute;left:50%;width:14px;height:14px;border-radius:50%;background:#e4ff54;transform:translate(-50%,50%);cursor:grab;box-shadow:0 0 12px rgba(228,255,84,.5);transition:bottom .4s cubic-bezier(.16,1,.3,1),transform .25s}
      .nuda-vslider__thumb:hover{transform:translate(-50%,50%) scale(1.2)}
      .nuda-vslider__value{color:#e4ff54;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vslider">
  <div class="nuda-vslider__track">
    <div class="nuda-vslider__fill" style="height:65%"></div>
    <div class="nuda-vslider__thumb" style="bottom:65%"></div>
  </div>
  <span class="nuda-vslider__value">65</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-vslider__track {
  position: relative;
  width: 4px;
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
}

.nuda-vslider__fill {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, #e4ff54, #b8cc43);
  border-radius: 99px;
  transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}`,
      },
    ],
  },

  /* ─────────────── 5. Stepped Slider with Ticks ─────────────── */
  {
    id: "stepped-slider",
    name: "Stepped Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-stepslider">
        <div className="nuda-stepslider__track">
          <div className="nuda-stepslider__fill" style={{ width: "50%" }} />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`nuda-stepslider__tick${i <= 2 ? " is-on" : ""}`} style={{ left: `${i * 25}%` }} />
          ))}
          <div className="nuda-stepslider__thumb" style={{ left: "50%" }} />
        </div>
        <div className="nuda-stepslider__labels">
          <span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-stepslider{width:100%;max-width:240px;padding:10px 12px}
      .nuda-stepslider__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px;margin-bottom:8px}
      .nuda-stepslider__fill{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:99px;transition:width .4s cubic-bezier(.16,1,.3,1)}
      .nuda-stepslider__tick{position:absolute;top:50%;width:6px;height:6px;border-radius:50%;background:#0c0c10;border:1px solid rgba(255,255,255,.16);transform:translate(-50%,-50%);transition:background .3s,border-color .3s,transform .3s}
      .nuda-stepslider__tick.is-on{background:#e4ff54;border-color:#e4ff54;transform:translate(-50%,-50%) scale(1.1)}
      .nuda-stepslider__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;transform:translate(-50%,-50%);cursor:grab;z-index:1}
      .nuda-stepslider__labels{display:flex;justify-content:space-between;color:#63636e;font-size:10px;font-weight:600;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-stepslider">
  <div class="nuda-stepslider__track">
    <div class="nuda-stepslider__fill" style="width:50%"></div>
    <span class="nuda-stepslider__tick is-on" style="left:0%"></span>
    <span class="nuda-stepslider__tick is-on" style="left:25%"></span>
    <span class="nuda-stepslider__tick is-on" style="left:50%"></span>
    <span class="nuda-stepslider__tick" style="left:75%"></span>
    <span class="nuda-stepslider__tick" style="left:100%"></span>
    <div class="nuda-stepslider__thumb" style="left:50%"></div>
  </div>
  <div class="nuda-stepslider__labels">
    <span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-stepslider__tick {
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.16);
  transform: translate(-50%, -50%);
  transition: background 0.3s, border-color 0.3s, transform 0.3s;
}

.nuda-stepslider__tick.is-on {
  background: #e4ff54;
  border-color: #e4ff54;
  transform: translate(-50%, -50%) scale(1.1);
}`,
      },
    ],
  },

  /* ─────────────── 6. Gradient Fill Slider ─────────────── */
  {
    id: "gradient-slider",
    name: "Gradient Fill Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-gslider">
        <div className="nuda-gslider__track">
          <div className="nuda-gslider__fill" style={{ width: "72%" }} />
          <div className="nuda-gslider__thumb" style={{ left: "72%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gslider{width:100%;max-width:220px;padding:10px 12px}
      .nuda-gslider__track{position:relative;height:6px;background:rgba(255,255,255,.06);border-radius:99px}
      .nuda-gslider__fill{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#62b6ff,#9d6dff,#ff6dd4,#e4ff54);background-size:200% 100%;border-radius:99px;animation:_gradShift 4s linear infinite;transition:width .45s cubic-bezier(.16,1,.3,1)}
      .nuda-gslider__thumb{position:absolute;top:50%;width:18px;height:18px;border-radius:50%;background:#fafafa;transform:translate(-50%,-50%);cursor:grab;box-shadow:0 0 0 4px rgba(255,255,255,.1),0 4px 12px rgba(0,0,0,.5)}
      @keyframes _gradShift{to{background-position:200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-gslider__fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gslider">
  <div class="nuda-gslider__track">
    <div class="nuda-gslider__fill" style="width:72%"></div>
    <div class="nuda-gslider__thumb" style="left:72%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-gslider__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #62b6ff, #9d6dff, #ff6dd4, #e4ff54);
  background-size: 200% 100%;
  border-radius: 99px;
  animation: nuda-grad-shift 4s linear infinite;
}

@keyframes nuda-grad-shift { to { background-position: 200% 0; } }`,
      },
    ],
  },

  /* ─────────────── 7. Range with Histogram ─────────────── */
  {
    id: "range-histogram",
    name: "Range with Histogram",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-histrange">
        <div className="nuda-histrange__bars">
          {[12, 22, 36, 48, 60, 70, 62, 44, 30, 24, 16, 10].map((h, i) => (
            <span
              key={i}
              className={`nuda-histrange__bar${i >= 3 && i <= 8 ? " in-range" : ""}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="nuda-histrange__track">
          <div className="nuda-histrange__fill" style={{ left: "25%", width: "45%" }} />
          <div className="nuda-histrange__thumb" style={{ left: "25%" }} />
          <div className="nuda-histrange__thumb" style={{ left: "70%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-histrange{width:100%;max-width:240px;padding:6px 12px}
      .nuda-histrange__bars{display:flex;align-items:flex-end;gap:3px;height:36px;margin-bottom:6px}
      .nuda-histrange__bar{flex:1;background:rgba(255,255,255,.08);border-radius:2px 2px 0 0;transition:background .35s,transform .25s;animation:_histBarIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-histrange__bar.in-range{background:#e4ff54}
      .nuda-histrange__bars:hover .nuda-histrange__bar{transform:translateY(-1px)}
      .nuda-histrange__track{position:relative;height:3px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-histrange__fill{position:absolute;top:0;height:100%;background:#e4ff54;border-radius:99px;transition:left .35s cubic-bezier(.16,1,.3,1),width .35s cubic-bezier(.16,1,.3,1)}
      .nuda-histrange__thumb{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;background:#0c0c10;border:2px solid #e4ff54;transform:translate(-50%,-50%);cursor:grab}
      @keyframes _histBarIn{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-histrange__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-histrange">
  <div class="nuda-histrange__bars">
    <span class="nuda-histrange__bar" style="height:12%"></span>
    <!-- Repeat per bar, mark in-range bars with .in-range -->
  </div>
  <div class="nuda-histrange__track">
    <div class="nuda-histrange__fill" style="left:25%;width:45%"></div>
    <div class="nuda-histrange__thumb" style="left:25%"></div>
    <div class="nuda-histrange__thumb" style="left:70%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-histrange__bar {
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px 2px 0 0;
  transition: background 0.35s;
  animation: nuda-hist-bar-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-histrange__bar.in-range {
  background: #e4ff54;
}

@keyframes nuda-hist-bar-in {
  from { transform: scaleY(0); transform-origin: bottom; }
  to   { transform: scaleY(1); }
}`,
      },
    ],
  },

  /* ─────────────── 8. Snap Slider ─────────────── */
  {
    id: "snap-slider",
    name: "Snap-to-tick Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-snap">
        <div className="nuda-snap__track">
          {[0, 25, 50, 75, 100].map((p) => (
            <span key={p} className="nuda-snap__mark" style={{ left: `${p}%` }} />
          ))}
          <div className="nuda-snap__fill" style={{ width: "75%" }} />
          <div className="nuda-snap__thumb" style={{ left: "75%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-snap{width:100%;max-width:220px;padding:10px 12px}
      .nuda-snap__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-snap__mark{position:absolute;top:50%;width:2px;height:8px;background:rgba(255,255,255,.16);transform:translate(-50%,-50%);border-radius:1px}
      .nuda-snap__fill{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:99px;transition:width .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-snap__thumb{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);cursor:grab;transition:left .4s cubic-bezier(.34,1.56,.64,1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-snap">
  <div class="nuda-snap__track">
    <span class="nuda-snap__mark" style="left:0%"></span>
    <span class="nuda-snap__mark" style="left:25%"></span>
    <span class="nuda-snap__mark" style="left:50%"></span>
    <span class="nuda-snap__mark" style="left:75%"></span>
    <span class="nuda-snap__mark" style="left:100%"></span>
    <div class="nuda-snap__fill" style="width:75%"></div>
    <div class="nuda-snap__thumb" style="left:75%"></div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Snap to the nearest 25% step using a back-out easing curve
const STEPS = [0, 25, 50, 75, 100];
const track = document.querySelector('.nuda-snap__track');
const fill  = track.querySelector('.nuda-snap__fill');
const thumb = track.querySelector('.nuda-snap__thumb');

const snap = (raw) => STEPS.reduce(
  (best, s) => Math.abs(s - raw) < Math.abs(best - raw) ? s : best,
  STEPS[0]
);

track.addEventListener('click', (e) => {
  const rect = track.getBoundingClientRect();
  const raw  = ((e.clientX - rect.left) / rect.width) * 100;
  const v = snap(raw);
  fill.style.width = v + '%';
  thumb.style.left = v + '%';
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-snap__fill {
  transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-snap__thumb {
  transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-snap__mark {
  position: absolute;
  top: 50%;
  width: 2px;
  height: 8px;
  background: rgba(255, 255, 255, 0.16);
  transform: translate(-50%, -50%);
}`,
      },
    ],
  },

  /* ─────────────── 9. Hue Slider ─────────────── */
  {
    id: "hue-slider",
    name: "Hue Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-hue">
        <div className="nuda-hue__track">
          <div className="nuda-hue__thumb" style={{ left: "40%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-hue{width:100%;max-width:220px;padding:10px 12px}
      .nuda-hue__track{position:relative;height:10px;border-radius:99px;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a)}
      .nuda-hue__thumb{position:absolute;top:50%;width:18px;height:18px;border-radius:50%;background:#fafafa;border:3px solid #0c0c10;transform:translate(-50%,-50%);cursor:grab;box-shadow:0 0 0 1px rgba(255,255,255,.4),0 4px 12px rgba(0,0,0,.5);transition:transform .25s}
      .nuda-hue__thumb:hover{transform:translate(-50%,-50%) scale(1.15)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-hue">
  <div class="nuda-hue__track">
    <div class="nuda-hue__thumb" style="left:40%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-hue__track {
  position: relative;
  height: 10px;
  border-radius: 99px;
  background: linear-gradient(
    90deg,
    #ff5e7a, #ffb45e, #e4ff54, #6ee7b7,
    #62b6ff, #9d6dff, #ff6dd4, #ff5e7a
  );
}`,
      },
    ],
  },

  /* ─────────────── 10. Rotary Knob ─────────────── */
  {
    id: "rotary-knob",
    name: "Rotary Knob",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-knob">
        <div className="nuda-knob__ring">
          <svg viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="3" />
            <circle
              cx="40" cy="40" r="34" fill="none" stroke="#e4ff54" strokeWidth="3"
              strokeDasharray="213"
              strokeDashoffset="64"
              strokeLinecap="round"
              transform="rotate(135 40 40)"
            />
          </svg>
          <div className="nuda-knob__face" style={{ transform: "rotate(135deg)" }}>
            <span className="nuda-knob__pointer" />
          </div>
        </div>
        <span className="nuda-knob__val">75%</span>
      </div>
    ),
    cssInline: `
      .nuda-knob{display:flex;flex-direction:column;align-items:center;gap:6px}
      .nuda-knob__ring{position:relative;width:80px;height:80px}
      .nuda-knob__ring svg{width:100%;height:100%}
      .nuda-knob__face{position:absolute;inset:14px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#1a1a20,#0c0c10);box-shadow:0 4px 12px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .35s cubic-bezier(.16,1,.3,1);cursor:grab}
      .nuda-knob__pointer{position:absolute;left:50%;top:6px;width:3px;height:18px;background:#e4ff54;border-radius:99px;transform:translateX(-50%);box-shadow:0 0 8px #e4ff54}
      .nuda-knob__val{color:#e4ff54;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-knob">
  <div class="nuda-knob__ring">
    <svg viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="34" fill="none"
              stroke="rgba(255,255,255,.08)" stroke-width="3" />
      <circle cx="40" cy="40" r="34" fill="none" stroke="#e4ff54"
              stroke-width="3" stroke-dasharray="213" stroke-dashoffset="64"
              stroke-linecap="round" transform="rotate(135 40 40)" />
    </svg>
    <div class="nuda-knob__face" style="transform: rotate(135deg)">
      <span class="nuda-knob__pointer"></span>
    </div>
  </div>
  <span class="nuda-knob__val">75%</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Map vertical drag distance to rotation degrees
const knob = document.querySelector('.nuda-knob__face');
const val  = document.querySelector('.nuda-knob__val');
let dragging = false, startY = 0, startDeg = 135;

knob.addEventListener('pointerdown', (e) => {
  dragging = true;
  startY = e.clientY;
  startDeg = parseFloat(knob.style.transform.match(/-?\\d+/)?.[0] ?? '135');
});
window.addEventListener('pointerup', () => (dragging = false));
window.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const dy = startY - e.clientY;
  const deg = Math.max(-135, Math.min(135, startDeg + dy));
  knob.style.transform = \`rotate(\${deg}deg)\`;
  val.textContent = Math.round(((deg + 135) / 270) * 100) + '%';
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-knob__face {
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #1a1a20, #0c0c10);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: grab;
}

.nuda-knob__pointer {
  position: absolute;
  left: 50%;
  top: 6px;
  width: 3px;
  height: 18px;
  background: #e4ff54;
  border-radius: 99px;
  transform: translateX(-50%);
  box-shadow: 0 0 8px #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 11. Brightness Slider ─────────────── */
  {
    id: "brightness-slider",
    name: "Brightness Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-bslider">
        <svg className="nuda-bslider__icon nuda-bslider__icon--min" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M5 12H2M22 12h-3" />
        </svg>
        <div className="nuda-bslider__track">
          <div className="nuda-bslider__fill" style={{ width: "60%" }} />
          <div className="nuda-bslider__thumb" style={{ left: "60%" }} />
        </div>
        <svg className="nuda-bslider__icon nuda-bslider__icon--max" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-bslider{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:280px}
      .nuda-bslider__icon{width:14px;height:14px;color:#a0a0a8;flex-shrink:0;transition:color .25s,transform .25s}
      .nuda-bslider:hover .nuda-bslider__icon--min{color:#63636e}
      .nuda-bslider:hover .nuda-bslider__icon--max{color:#e4ff54;transform:rotate(20deg)}
      .nuda-bslider__track{flex:1;position:relative;height:4px;background:linear-gradient(90deg,#0c0c10,#e4ff54);border-radius:99px;opacity:.4}
      .nuda-bslider__fill{position:absolute;left:0;top:0;height:100%;border-radius:99px;background:transparent}
      .nuda-bslider__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;transform:translate(-50%,-50%);cursor:grab}
      @media(prefers-reduced-motion:reduce){.nuda-bslider:hover .nuda-bslider__icon--max{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bslider">
  <svg class="nuda-bslider__icon nuda-bslider__icon--min" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M5 12H2M22 12h-3" />
  </svg>
  <div class="nuda-bslider__track">
    <div class="nuda-bslider__thumb" style="left:60%"></div>
  </div>
  <svg class="nuda-bslider__icon nuda-bslider__icon--max" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5" />
    <!-- Sun rays -->
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-bslider__track {
  flex: 1;
  position: relative;
  height: 4px;
  background: linear-gradient(90deg, #0c0c10, #e4ff54);
  border-radius: 99px;
  opacity: 0.4;
}

.nuda-bslider:hover .nuda-bslider__icon--max {
  color: #e4ff54;
  transform: rotate(20deg);
}`,
      },
    ],
  },

  /* ─────────────── 12. Price Range Slider ─────────────── */
  {
    id: "price-range",
    name: "Price Range",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-pricerange">
        <div className="nuda-pricerange__head">
          <span>$24</span>
          <span>—</span>
          <span>$148</span>
        </div>
        <div className="nuda-pricerange__track">
          <div className="nuda-pricerange__fill" style={{ left: "16%", width: "59%" }} />
          <div className="nuda-pricerange__thumb" style={{ left: "16%" }} />
          <div className="nuda-pricerange__thumb" style={{ left: "75%" }} />
        </div>
        <div className="nuda-pricerange__minmax">
          <span>$0</span>
          <span>$200</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pricerange{padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-pricerange__head{display:flex;justify-content:center;align-items:center;gap:8px;margin-bottom:14px;color:#e4ff54;font-size:14px;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-pricerange__head span:nth-child(2){color:#63636e}
      .nuda-pricerange__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px;margin-bottom:6px}
      .nuda-pricerange__fill{position:absolute;top:0;height:100%;background:#e4ff54;border-radius:99px;transition:left .35s cubic-bezier(.16,1,.3,1),width .35s cubic-bezier(.16,1,.3,1)}
      .nuda-pricerange__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;transform:translate(-50%,-50%);cursor:grab}
      .nuda-pricerange__minmax{display:flex;justify-content:space-between;color:#63636e;font-size:10px;font-variant-numeric:tabular-nums}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pricerange">
  <div class="nuda-pricerange__head">
    <span>$24</span>
    <span>—</span>
    <span>$148</span>
  </div>
  <div class="nuda-pricerange__track">
    <div class="nuda-pricerange__fill" style="left:16%;width:59%"></div>
    <div class="nuda-pricerange__thumb" style="left:16%"></div>
    <div class="nuda-pricerange__thumb" style="left:75%"></div>
  </div>
  <div class="nuda-pricerange__minmax">
    <span>$0</span>
    <span>$200</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-pricerange__fill {
  position: absolute;
  top: 0;
  height: 100%;
  background: #e4ff54;
  border-radius: 99px;
  transition:
    left 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}`,
      },
    ],
  },

  /* ─────────────── 13. Slider + Input pair ─────────────── */
  {
    id: "slider-input",
    name: "Slider + Number Input",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-sinput">
        <div className="nuda-sinput__track">
          <div className="nuda-sinput__fill" style={{ width: "30%" }} />
          <div className="nuda-sinput__thumb" style={{ left: "30%" }} />
        </div>
        <input type="number" defaultValue={30} readOnly />
        <span className="nuda-sinput__unit">%</span>
      </div>
    ),
    cssInline: `
      .nuda-sinput{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-sinput__track{flex:1;position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-sinput__fill{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:99px;transition:width .35s cubic-bezier(.16,1,.3,1)}
      .nuda-sinput__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);cursor:grab;transition:left .35s cubic-bezier(.16,1,.3,1)}
      .nuda-sinput input{width:46px;padding:4px 6px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fafafa;font-size:12px;text-align:center;outline:none;font-variant-numeric:tabular-nums;transition:border-color .2s,box-shadow .25s;-moz-appearance:textfield;appearance:textfield}
      .nuda-sinput input::-webkit-outer-spin-button,.nuda-sinput input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
      .nuda-sinput input:focus{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-sinput__unit{color:#63636e;font-size:11px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sinput">
  <div class="nuda-sinput__track">
    <div class="nuda-sinput__fill" style="width:30%"></div>
    <div class="nuda-sinput__thumb" style="left:30%"></div>
  </div>
  <input type="number" value="30" min="0" max="100" />
  <span class="nuda-sinput__unit">%</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root = document.querySelector('.nuda-sinput');
const fill = root.querySelector('.nuda-sinput__fill');
const thumb = root.querySelector('.nuda-sinput__thumb');
const input = root.querySelector('input');

const sync = (v) => {
  const c = Math.max(0, Math.min(100, +v));
  fill.style.width = c + '%';
  thumb.style.left = c + '%';
  input.value = c;
};

input.addEventListener('input', () => sync(input.value));`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-sinput input {
  width: 46px;
  padding: 4px 6px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  color: #fafafa;
  text-align: center;
  outline: none;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
  appearance: textfield;
}

.nuda-sinput input::-webkit-outer-spin-button,
.nuda-sinput input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}`,
      },
    ],
  },

  /* ─────────────── 14. Drag-Active Thumb ─────────────── */
  {
    id: "active-thumb",
    name: "Drag-Active Thumb",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-actthumb is-dragging">
        <div className="nuda-actthumb__track">
          <div className="nuda-actthumb__fill" style={{ width: "45%" }} />
          <div className="nuda-actthumb__thumb" style={{ left: "45%" }}>
            <span className="nuda-actthumb__halo" />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-actthumb{width:100%;max-width:220px;padding:14px 12px}
      .nuda-actthumb__track{position:relative;height:4px;background:rgba(255,255,255,.08);border-radius:99px}
      .nuda-actthumb__fill{position:absolute;left:0;top:0;height:100%;background:#e4ff54;border-radius:99px}
      .nuda-actthumb__thumb{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);cursor:grab;transition:transform .25s}
      .nuda-actthumb__halo{position:absolute;inset:-12px;border-radius:50%;background:rgba(228,255,84,.18);opacity:0;transform:scale(.6);transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-actthumb.is-dragging .nuda-actthumb__thumb{transform:translate(-50%,-50%) scale(1.25);cursor:grabbing}
      .nuda-actthumb.is-dragging .nuda-actthumb__halo{opacity:1;transform:scale(1);animation:_haloPulse 1.6s ease-in-out infinite}
      @keyframes _haloPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.6}}
      @media(prefers-reduced-motion:reduce){.nuda-actthumb.is-dragging .nuda-actthumb__halo{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-actthumb">
  <div class="nuda-actthumb__track">
    <div class="nuda-actthumb__fill" style="width:45%"></div>
    <div class="nuda-actthumb__thumb" style="left:45%">
      <span class="nuda-actthumb__halo"></span>
    </div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const slider = document.querySelector('.nuda-actthumb');
const thumb = slider.querySelector('.nuda-actthumb__thumb');

thumb.addEventListener('pointerdown', () => slider.classList.add('is-dragging'));
window.addEventListener('pointerup', () => slider.classList.remove('is-dragging'));`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-actthumb__halo {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: rgba(228, 255, 84, 0.18);
  opacity: 0;
  transform: scale(0.6);
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-actthumb.is-dragging .nuda-actthumb__halo {
  opacity: 1;
  transform: scale(1);
  animation: nuda-halo-pulse 1.6s ease-in-out infinite;
}

@keyframes nuda-halo-pulse {
  0%, 100% { transform: scale(1);    opacity: 1;   }
  50%      { transform: scale(1.15); opacity: 0.6; }
}`,
      },
    ],
  },

  /* ─────────────── 15. Speed / Curve Slider ─────────────── */
  {
    id: "curve-slider",
    name: "Curve Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-curve">
        <svg viewBox="0 0 200 60" preserveAspectRatio="none">
          <path d="M0 50 Q50 50 100 30 T200 5" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
          <path className="nuda-curve__draw" d="M0 50 Q50 50 100 30 T200 5" fill="none" stroke="#e4ff54" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="nuda-curve__track">
          <div className="nuda-curve__thumb" style={{ left: "55%" }} />
        </div>
        <div className="nuda-curve__labels">
          <span>Slow</span>
          <span>Fast</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-curve{position:relative;width:100%;max-width:220px;padding:8px 12px}
      .nuda-curve svg{display:block;width:100%;height:50px}
      .nuda-curve__draw{stroke-dasharray:240;stroke-dashoffset:240;animation:_curveDraw 1.6s cubic-bezier(.16,1,.3,1) forwards}
      .nuda-curve__track{position:relative;height:3px;background:rgba(255,255,255,.08);border-radius:99px;margin-top:6px}
      .nuda-curve__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);cursor:grab;box-shadow:0 0 12px rgba(228,255,84,.5)}
      .nuda-curve__labels{display:flex;justify-content:space-between;color:#63636e;font-size:10px;margin-top:4px}
      @keyframes _curveDraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-curve__draw{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-curve">
  <svg viewBox="0 0 200 60" preserveAspectRatio="none">
    <path d="M0 50 Q50 50 100 30 T200 5"
          fill="none" stroke="rgba(255,255,255,.08)" stroke-width="2" />
    <path class="nuda-curve__draw" d="M0 50 Q50 50 100 30 T200 5"
          fill="none" stroke="#e4ff54" stroke-width="2"
          stroke-linecap="round" />
  </svg>
  <div class="nuda-curve__track">
    <div class="nuda-curve__thumb" style="left:55%"></div>
  </div>
  <div class="nuda-curve__labels">
    <span>Slow</span>
    <span>Fast</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-curve__draw {
  stroke-dasharray: 240;
  stroke-dashoffset: 240;
  animation: nuda-curve-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes nuda-curve-draw { to { stroke-dashoffset: 0; } }`,
      },
    ],
  },

  /* ─────────────── 16. Frequency Slider ─────────────── */
  {
    id: "frequency-slider",
    name: "Frequency Slider",
    category: "Sliders & Ranges",
    preview: (
      <div className="nuda-freq">
        <div className="nuda-freq__lines">
          {Array.from({ length: 18 }, (_, i) => {
            const active = i <= 10;
            return <span key={i} className={`nuda-freq__line${active ? " is-on" : ""}`} style={{ height: `${30 + Math.sin(i * 0.5) * 20 + (active ? 20 : 0)}%`, animationDelay: `${i * 30}ms` }} />;
          })}
        </div>
        <div className="nuda-freq__caption">
          <span>20Hz</span>
          <span className="nuda-freq__hz">2.4 kHz</span>
          <span>20kHz</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-freq{width:100%;max-width:260px;padding:12px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px}
      .nuda-freq__lines{display:flex;align-items:flex-end;gap:3px;height:40px;margin-bottom:8px}
      .nuda-freq__line{flex:1;background:rgba(255,255,255,.1);border-radius:1px;transition:background .35s;animation:_freqIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-freq__line.is-on{background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.4)}
      .nuda-freq__caption{display:flex;justify-content:space-between;align-items:center;color:#63636e;font-size:10px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-freq__hz{color:#e4ff54;font-weight:700;font-size:12px}
      @keyframes _freqIn{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-freq__line{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-freq">
  <div class="nuda-freq__lines">
    <!-- Generate N lines, add .is-on for active bars -->
    <span class="nuda-freq__line is-on" style="height:50%"></span>
    <!-- ... -->
  </div>
  <div class="nuda-freq__caption">
    <span>20Hz</span>
    <span class="nuda-freq__hz">2.4 kHz</span>
    <span>20kHz</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-freq__line {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  transition: background 0.35s;
  animation: nuda-freq-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-freq__line.is-on {
  background: #e4ff54;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.4);
}

@keyframes nuda-freq-in {
  from { transform: scaleY(0); transform-origin: bottom; }
  to   { transform: scaleY(1); }
}`,
      },
    ],
  },
];
