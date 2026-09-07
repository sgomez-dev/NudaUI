import type { NudaComponent } from "./types";

const CAT = "Color Pickers";

export const colorPickersExtra: NudaComponent[] = [
  /* ─────────────── 1. Saturation/Value Pad ─────────────── */
  {
    id: "cpk2-sv-square",
    name: "Saturation Value Pad",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-sv-square">
        <div className="nuda-cpk2-sv-square__pad" aria-hidden="true">
          <span
            className="nuda-cpk2-sv-square__handle"
            role="slider"
            tabIndex={0}
            aria-label="Saturation and value"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={65}
            aria-valuetext="Saturation 65%, value 85%"
            style={{ transform: "translate(150px,35px)" }}
          />
        </div>
        <div className="nuda-cpk2-sv-square__rail">
          <label id="cpk2-sv-square-hue-label" htmlFor="cpk2-sv-square-hue">
            Hue
          </label>
          <input
            id="cpk2-sv-square-hue"
            className="nuda-cpk2-sv-square__hue"
            type="range"
            min={0}
            max={360}
            defaultValue={210}
            aria-labelledby="cpk2-sv-square-hue-label"
            aria-valuetext="Hue 210 degrees, blue"
          />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cpk2-sv-square{display:flex;flex-direction:column;gap:10px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:240px}
      .nuda-cpk2-sv-square__pad{position:relative;height:140px;border-radius:8px;background:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,#1c8bff);cursor:crosshair}
      .nuda-cpk2-sv-square__handle{position:absolute;top:0;left:0;width:16px;height:16px;margin:-8px;border-radius:50%;border:2px solid #fafafa;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 2px 6px rgba(0,0,0,.5);cursor:grab;transition:transform .18s cubic-bezier(.16,1,.3,1)}
      .nuda-cpk2-sv-square__handle:hover{transform:translate(150px,35px) scale(1.15)}
      .nuda-cpk2-sv-square__handle:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cpk2-sv-square__rail{display:flex;align-items:center;gap:8px}
      .nuda-cpk2-sv-square__rail label{font-size:10px;color:#777;width:24px}
      .nuda-cpk2-sv-square__hue{-webkit-appearance:none;appearance:none;flex:1;height:44px;background:transparent;cursor:pointer}
      .nuda-cpk2-sv-square__hue::-webkit-slider-runnable-track{height:10px;border-radius:99px;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a)}
      .nuda-cpk2-sv-square__hue::-moz-range-track{height:10px;border-radius:99px;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a)}
      .nuda-cpk2-sv-square__hue::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin-top:-4px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;box-shadow:0 0 0 1px rgba(255,255,255,.4);cursor:grab;transition:transform .2s}
      .nuda-cpk2-sv-square__hue::-webkit-slider-thumb:hover{transform:scale(1.15)}
      .nuda-cpk2-sv-square__hue::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;box-shadow:0 0 0 1px rgba(255,255,255,.4);cursor:grab}
      .nuda-cpk2-sv-square__hue:focus-visible{outline:none}
      .nuda-cpk2-sv-square__hue:focus-visible::-webkit-slider-thumb{outline:2px solid #e4ff54;outline-offset:2px}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-sv-square__handle,.nuda-cpk2-sv-square__hue::-webkit-slider-thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-sv-square">
  <div class="nuda-cpk2-sv-square__pad" aria-hidden="true">
    <span class="nuda-cpk2-sv-square__handle" role="slider" tabindex="0"
          aria-label="Saturation and value" aria-valuemin="0" aria-valuemax="100"
          aria-valuenow="65" aria-valuetext="Saturation 65%, value 85%"
          style="transform:translate(150px,35px)"></span>
  </div>
  <div class="nuda-cpk2-sv-square__rail">
    <label id="cpk2-sv-square-hue-label" for="cpk2-sv-square-hue">Hue</label>
    <input id="cpk2-sv-square-hue" class="nuda-cpk2-sv-square__hue" type="range"
           min="0" max="360" value="210" aria-labelledby="cpk2-sv-square-hue-label"
           aria-valuetext="Hue 210 degrees, blue">
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Alpha Channel Slider ─────────────── */
  {
    id: "cpk2-alpha-slider",
    name: "Alpha Channel Slider",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-alpha-slider">
        <label id="cpk2-alpha-slider-label" htmlFor="cpk2-alpha-slider-input">
          Alpha
        </label>
        <div className="nuda-cpk2-alpha-slider__track">
          <input
            id="cpk2-alpha-slider-input"
            className="nuda-cpk2-alpha-slider__input"
            type="range"
            min={0}
            max={100}
            defaultValue={72}
            aria-labelledby="cpk2-alpha-slider-label"
            aria-valuetext="72 percent opacity"
          />
        </div>
        <span className="nuda-cpk2-alpha-slider__val" aria-live="polite">
          72%
        </span>
      </div>
    ),
    cssInline: `
      .nuda-cpk2-alpha-slider{display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:240px}
      .nuda-cpk2-alpha-slider label{font-size:10px;color:#777;width:32px}
      .nuda-cpk2-alpha-slider__track{position:relative;flex:1;height:44px;display:flex;align-items:center}
      .nuda-cpk2-alpha-slider__track::before{content:"";position:absolute;left:0;right:0;top:50%;height:10px;border-radius:99px;transform:translateY(-50%);background:repeating-conic-gradient(#3a3a3a 0 25%,#1c1c1c 0 50%) 0 0/10px 10px}
      .nuda-cpk2-alpha-slider__track::after{content:"";position:absolute;left:0;right:0;top:50%;height:10px;border-radius:99px;transform:translateY(-50%);background:linear-gradient(90deg,rgba(98,182,255,0),#62b6ff)}
      .nuda-cpk2-alpha-slider__input{position:relative;z-index:1;-webkit-appearance:none;appearance:none;width:100%;height:44px;background:transparent;cursor:pointer}
      .nuda-cpk2-alpha-slider__input::-webkit-slider-runnable-track{height:10px;background:transparent}
      .nuda-cpk2-alpha-slider__input::-moz-range-track{height:10px;background:transparent}
      .nuda-cpk2-alpha-slider__input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin-top:-4px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;box-shadow:0 0 0 1px rgba(255,255,255,.4);cursor:grab;transition:transform .2s}
      .nuda-cpk2-alpha-slider__input::-webkit-slider-thumb:hover{transform:scale(1.15)}
      .nuda-cpk2-alpha-slider__input::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;cursor:grab}
      .nuda-cpk2-alpha-slider__input:focus-visible{outline:none}
      .nuda-cpk2-alpha-slider__input:focus-visible::-webkit-slider-thumb{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cpk2-alpha-slider__val{width:32px;text-align:right;font-variant-numeric:tabular-nums;color:#fafafa;font-weight:700;font-size:11px}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-alpha-slider__input::-webkit-slider-thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-alpha-slider">
  <label id="cpk2-alpha-slider-label" for="cpk2-alpha-slider-input">Alpha</label>
  <div class="nuda-cpk2-alpha-slider__track">
    <input id="cpk2-alpha-slider-input" class="nuda-cpk2-alpha-slider__input"
           type="range" min="0" max="100" value="72"
           aria-labelledby="cpk2-alpha-slider-label"
           aria-valuetext="72 percent opacity">
  </div>
  <span class="nuda-cpk2-alpha-slider__val" aria-live="polite">72%</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Format Switcher ─────────────── */
  {
    id: "cpk2-format-switcher",
    name: "Format Switcher",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-format-switcher">
        <div className="nuda-cpk2-format-switcher__tabs" role="radiogroup" aria-label="Color format">
          <button type="button" className="nuda-cpk2-format-switcher__tab is-active" role="radio" aria-checked="true">
            HEX
          </button>
          <button type="button" className="nuda-cpk2-format-switcher__tab" role="radio" aria-checked="false">
            RGB
          </button>
          <button type="button" className="nuda-cpk2-format-switcher__tab" role="radio" aria-checked="false">
            HSL
          </button>
        </div>
        <div className="nuda-cpk2-format-switcher__readout">
          <span className="nuda-cpk2-format-switcher__swatch" style={{ background: "#9d6dff" }} />
          <span className="nuda-cpk2-format-switcher__value" aria-live="polite">
            #9D6DFF
          </span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cpk2-format-switcher{display:flex;flex-direction:column;gap:8px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:220px}
      .nuda-cpk2-format-switcher__tabs{display:flex;gap:4px;padding:3px;background:rgba(255,255,255,.04);border-radius:8px}
      .nuda-cpk2-format-switcher__tab{flex:1;min-height:44px;border:0;border-radius:6px;background:transparent;color:#a0a0a8;font-size:10px;font-weight:700;letter-spacing:.04em;cursor:pointer;transition:background .2s,color .2s,transform .15s}
      .nuda-cpk2-format-switcher__tab:hover{color:#fafafa}
      .nuda-cpk2-format-switcher__tab.is-active{background:#e4ff54;color:#0a0a0a}
      .nuda-cpk2-format-switcher__tab:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cpk2-format-switcher__readout{display:flex;align-items:center;gap:8px;padding:8px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-cpk2-format-switcher__swatch{width:22px;height:22px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
      .nuda-cpk2-format-switcher__value{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;font-weight:600;color:#fafafa;letter-spacing:.02em}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-format-switcher__tab{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-format-switcher">
  <div class="nuda-cpk2-format-switcher__tabs" role="radiogroup" aria-label="Color format">
    <button type="button" class="nuda-cpk2-format-switcher__tab is-active"
            role="radio" aria-checked="true">HEX</button>
    <button type="button" class="nuda-cpk2-format-switcher__tab"
            role="radio" aria-checked="false">RGB</button>
    <button type="button" class="nuda-cpk2-format-switcher__tab"
            role="radio" aria-checked="false">HSL</button>
  </div>
  <div class="nuda-cpk2-format-switcher__readout">
    <span class="nuda-cpk2-format-switcher__swatch" style="background:#9d6dff"></span>
    <span class="nuda-cpk2-format-switcher__value" aria-live="polite">#9D6DFF</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Harmony Row ─────────────── */
  {
    id: "cpk2-harmony-row",
    name: "Harmony Row",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-harmony-row" role="radiogroup" aria-label="Palette harmony">
        {[
          { hex: "#9d6dff", label: "Base, hue 262 degrees", checked: true },
          { hex: "#c56dff", label: "Analogous, hue 292 degrees", checked: false },
          { hex: "#ff6dd4", label: "Analogous, hue 322 degrees", checked: false },
          { hex: "#e4ff54", label: "Complementary, hue 82 degrees", checked: false },
          { hex: "#6de4ff", label: "Triadic, hue 202 degrees", checked: false },
        ].map((s) => (
          <button
            key={s.hex}
            type="button"
            className={`nuda-cpk2-harmony-row__swatch${s.checked ? " is-checked" : ""}`}
            role="radio"
            aria-checked={s.checked}
            aria-label={s.label}
            style={{ background: s.hex }}
          >
            {s.checked && (
              <svg
                className="nuda-cpk2-harmony-row__check"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cpk2-harmony-row{display:flex;gap:6px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-cpk2-harmony-row__swatch{position:relative;flex:1;aspect-ratio:1;min-width:44px;min-height:44px;border:0;border-radius:8px;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1);transition:transform .2s cubic-bezier(.34,1.56,.64,1);animation:_nuda-cpk2harmonyrow .45s cubic-bezier(.16,1,.3,1) both}
      .nuda-cpk2-harmony-row__swatch:nth-child(2){animation-delay:.05s}
      .nuda-cpk2-harmony-row__swatch:nth-child(3){animation-delay:.1s}
      .nuda-cpk2-harmony-row__swatch:nth-child(4){animation-delay:.15s}
      .nuda-cpk2-harmony-row__swatch:nth-child(5){animation-delay:.2s}
      .nuda-cpk2-harmony-row__swatch:hover{transform:translateY(-3px)}
      .nuda-cpk2-harmony-row__swatch.is-checked{box-shadow:inset 0 0 0 2px #0a0a0a,0 0 0 2px #e4ff54}
      .nuda-cpk2-harmony-row__swatch:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cpk2-harmony-row__check{position:absolute;inset:0;margin:auto;width:16px;height:16px;color:#fafafa;filter:drop-shadow(0 1px 2px rgba(0,0,0,.6))}
      @keyframes _nuda-cpk2harmonyrow{from{opacity:0;transform:translateY(6px) scale(.8)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-harmony-row__swatch{animation:none;transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-harmony-row" role="radiogroup" aria-label="Palette harmony">
  <button type="button" class="nuda-cpk2-harmony-row__swatch is-checked" role="radio"
          aria-checked="true" aria-label="Base, hue 262 degrees" style="background:#9d6dff">
    <svg class="nuda-cpk2-harmony-row__check" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="3" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </button>
  <button type="button" class="nuda-cpk2-harmony-row__swatch" role="radio"
          aria-checked="false" aria-label="Analogous, hue 292 degrees"
          style="background:#c56dff"></button>
  <!-- 3 more harmony swatches -->
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Gradient Stop Editor ─────────────── */
  {
    id: "cpk2-gradient-stops",
    name: "Gradient Stop Editor",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-gradient-stops">
        <div
          className="nuda-cpk2-gradient-stops__bar"
          style={{ background: "linear-gradient(90deg,#62b6ff 0%,#9d6dff 45%,#ff6dd4 100%)" }}
        >
          <span
            className="nuda-cpk2-gradient-stops__stop"
            role="slider"
            tabIndex={0}
            aria-label="Stop 1"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
            aria-valuetext="Position 0%, blue"
            style={{ transform: "translate(0px,-50%) rotate(45deg)" }}
          />
          <span
            className="nuda-cpk2-gradient-stops__stop is-active"
            role="slider"
            tabIndex={0}
            aria-label="Stop 2"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={45}
            aria-valuetext="Position 45%, purple"
            style={{ transform: "translate(90px,-50%) rotate(45deg)" }}
          />
          <span
            className="nuda-cpk2-gradient-stops__stop"
            role="slider"
            tabIndex={0}
            aria-label="Stop 3"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={100}
            aria-valuetext="Position 100%, pink"
            style={{ transform: "translate(196px,-50%) rotate(45deg)" }}
          />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cpk2-gradient-stops{padding:16px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:240px}
      .nuda-cpk2-gradient-stops__bar{position:relative;height:16px;border-radius:99px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
      .nuda-cpk2-gradient-stops__stop{position:absolute;top:50%;left:0;width:18px;height:18px;background:#fafafa;border:2px solid #0c0c10;border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.5);cursor:grab;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}
      .nuda-cpk2-gradient-stops__stop:hover{transform:translate(0,-50%) rotate(45deg) scale(1.15) !important}
      .nuda-cpk2-gradient-stops__stop.is-active{background:#e4ff54}
      .nuda-cpk2-gradient-stops__stop:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-gradient-stops__stop{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-gradient-stops">
  <div class="nuda-cpk2-gradient-stops__bar"
       style="background:linear-gradient(90deg,#62b6ff 0%,#9d6dff 45%,#ff6dd4 100%)">
    <span class="nuda-cpk2-gradient-stops__stop" role="slider" tabindex="0"
          aria-label="Stop 1" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
          aria-valuetext="Position 0%, blue"
          style="transform:translate(0px,-50%) rotate(45deg)"></span>
    <span class="nuda-cpk2-gradient-stops__stop is-active" role="slider" tabindex="0"
          aria-label="Stop 2" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45"
          aria-valuetext="Position 45%, purple"
          style="transform:translate(90px,-50%) rotate(45deg)"></span>
    <span class="nuda-cpk2-gradient-stops__stop" role="slider" tabindex="0"
          aria-label="Stop 3" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"
          aria-valuetext="Position 100%, pink"
          style="transform:translate(196px,-50%) rotate(45deg)"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Shade Ramp ─────────────── */
  {
    id: "cpk2-shade-ramp",
    name: "Shade Ramp",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-shade-ramp" role="radiogroup" aria-label="Violet shade ramp">
        {[
          { v: "50", hex: "#f5f3ff", text: "#0a0a0a" },
          { v: "100", hex: "#ede9fe", text: "#0a0a0a" },
          { v: "200", hex: "#ddd6fe", text: "#0a0a0a" },
          { v: "300", hex: "#c4b5fd", text: "#0a0a0a" },
          { v: "400", hex: "#a78bfa", text: "#0a0a0a" },
          { v: "500", hex: "#8b5cf6", text: "#fafafa", checked: true },
          { v: "600", hex: "#7c3aed", text: "#fafafa" },
          { v: "700", hex: "#6d28d9", text: "#fafafa" },
          { v: "800", hex: "#5b21b6", text: "#fafafa" },
          { v: "900", hex: "#4c1d95", text: "#fafafa" },
          { v: "950", hex: "#2e1065", text: "#fafafa" },
        ].map((s) => (
          <button
            key={s.v}
            type="button"
            className={`nuda-cpk2-shade-ramp__step${s.checked ? " is-checked" : ""}`}
            role="radio"
            aria-checked={!!s.checked}
            aria-label={`Violet ${s.v}${s.checked ? ", selected" : ""}`}
            style={{ background: s.hex, color: s.text }}
          >
            {s.v}
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cpk2-shade-ramp{display:flex;overflow-x:auto;gap:4px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-cpk2-shade-ramp__step{position:relative;flex:0 0 44px;min-height:44px;border:0;border-radius:6px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:9px;font-weight:700;cursor:pointer;transition:transform .2s;animation:_nuda-cpk2shaderamp .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-cpk2-shade-ramp__step:hover{transform:translateY(-3px)}
      .nuda-cpk2-shade-ramp__step.is-checked{box-shadow:inset 0 0 0 2px rgba(255,255,255,.5),0 0 0 2px #e4ff54}
      .nuda-cpk2-shade-ramp__step:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-cpk2shaderamp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-shade-ramp__step{animation:none;transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-shade-ramp" role="radiogroup" aria-label="Violet shade ramp">
  <button type="button" class="nuda-cpk2-shade-ramp__step" role="radio"
          aria-checked="false" aria-label="Violet 50"
          style="background:#f5f3ff;color:#0a0a0a">50</button>
  <button type="button" class="nuda-cpk2-shade-ramp__step is-checked" role="radio"
          aria-checked="true" aria-label="Violet 500, selected"
          style="background:#8b5cf6;color:#fafafa">500</button>
  <button type="button" class="nuda-cpk2-shade-ramp__step" role="radio"
          aria-checked="false" aria-label="Violet 950"
          style="background:#2e1065;color:#fafafa">950</button>
  <!-- Full ramp: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 -->
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Colour Blindness Preview ─────────────── */
  {
    id: "cpk2-cvd-preview",
    name: "Colour Blindness Preview",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-cvd-preview">
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <filter id="cpk2-cvd-protan">
              <feColorMatrix
                type="matrix"
                values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0"
              />
            </filter>
            <filter id="cpk2-cvd-deutan">
              <feColorMatrix
                type="matrix"
                values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0"
              />
            </filter>
            <filter id="cpk2-cvd-tritan">
              <feColorMatrix
                type="matrix"
                values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
        <div className="nuda-cpk2-cvd-preview__row">
          <div className="nuda-cpk2-cvd-preview__cell">
            <span
              className="nuda-cpk2-cvd-preview__swatch"
              style={{ background: "linear-gradient(135deg,#ff5e7a,#62b6ff,#e4ff54)" }}
            />
            <span className="nuda-cpk2-cvd-preview__label">Normal</span>
          </div>
          <div className="nuda-cpk2-cvd-preview__cell">
            <span
              className="nuda-cpk2-cvd-preview__swatch"
              style={{
                background: "linear-gradient(135deg,#ff5e7a,#62b6ff,#e4ff54)",
                filter: "url(#cpk2-cvd-protan)",
              }}
            />
            <span className="nuda-cpk2-cvd-preview__label">Protan</span>
          </div>
          <div className="nuda-cpk2-cvd-preview__cell">
            <span
              className="nuda-cpk2-cvd-preview__swatch"
              style={{
                background: "linear-gradient(135deg,#ff5e7a,#62b6ff,#e4ff54)",
                filter: "url(#cpk2-cvd-deutan)",
              }}
            />
            <span className="nuda-cpk2-cvd-preview__label">Deutan</span>
          </div>
          <div className="nuda-cpk2-cvd-preview__cell">
            <span
              className="nuda-cpk2-cvd-preview__swatch"
              style={{
                background: "linear-gradient(135deg,#ff5e7a,#62b6ff,#e4ff54)",
                filter: "url(#cpk2-cvd-tritan)",
              }}
            />
            <span className="nuda-cpk2-cvd-preview__label">Tritan</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cpk2-cvd-preview{padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:260px}
      .nuda-cpk2-cvd-preview__row{display:flex;gap:8px}
      .nuda-cpk2-cvd-preview__cell{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px}
      .nuda-cpk2-cvd-preview__swatch{display:block;width:100%;aspect-ratio:1;border-radius:8px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1);transition:transform .2s}
      .nuda-cpk2-cvd-preview__cell:hover .nuda-cpk2-cvd-preview__swatch{transform:scale(1.06)}
      .nuda-cpk2-cvd-preview__label{font-size:9px;color:#a0a0a8;font-weight:600;letter-spacing:.02em}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-cvd-preview__swatch{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-cvd-preview">
  <svg width="0" height="0" aria-hidden="true" focusable="false">
    <defs>
      <filter id="cpk2-cvd-protan">
        <feColorMatrix type="matrix"
          values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0" />
      </filter>
      <filter id="cpk2-cvd-deutan">
        <feColorMatrix type="matrix"
          values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0" />
      </filter>
      <filter id="cpk2-cvd-tritan">
        <feColorMatrix type="matrix"
          values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0" />
      </filter>
    </defs>
  </svg>
  <div class="nuda-cpk2-cvd-preview__row">
    <div class="nuda-cpk2-cvd-preview__cell">
      <span class="nuda-cpk2-cvd-preview__swatch"
            style="background:linear-gradient(135deg,#ff5e7a,#62b6ff,#e4ff54)"></span>
      <span class="nuda-cpk2-cvd-preview__label">Normal</span>
    </div>
    <div class="nuda-cpk2-cvd-preview__cell">
      <span class="nuda-cpk2-cvd-preview__swatch"
            style="background:linear-gradient(135deg,#ff5e7a,#62b6ff,#e4ff54);filter:url(#cpk2-cvd-protan)"></span>
      <span class="nuda-cpk2-cvd-preview__label">Protan</span>
    </div>
    <!-- Deutan and Tritan cells follow the same pattern -->
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. OKLCH Pad ─────────────── */
  {
    id: "cpk2-oklch-pad",
    name: "OKLCH Pad",
    category: CAT,
    preview: (
      <div className="nuda-cpk2-oklch-pad">
        <div className="nuda-cpk2-oklch-pad__pad" aria-hidden="true">
          <span
            className="nuda-cpk2-oklch-pad__handle"
            role="slider"
            tabIndex={0}
            aria-label="Lightness and chroma"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={63}
            aria-valuetext="Lightness 63%, chroma 0.19"
            style={{ transform: "translate(120px,30px)" }}
          />
        </div>
        <div className="nuda-cpk2-oklch-pad__rail">
          <label id="cpk2-oklch-pad-hue-label" htmlFor="cpk2-oklch-pad-hue">
            Hue
          </label>
          <input
            id="cpk2-oklch-pad-hue"
            className="nuda-cpk2-oklch-pad__hue"
            type="range"
            min={0}
            max={360}
            defaultValue={292}
            aria-labelledby="cpk2-oklch-pad-hue-label"
            aria-valuetext="Hue 292 degrees, violet"
          />
        </div>
        <div className="nuda-cpk2-oklch-pad__readout" aria-live="polite">
          oklch(63% 0.19 292)
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cpk2-oklch-pad{display:flex;flex-direction:column;gap:10px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:240px}
      .nuda-cpk2-oklch-pad__pad{position:relative;height:120px;border-radius:8px;background:linear-gradient(to top,#000,transparent),linear-gradient(to right,#8f8f97,#9d6dff);cursor:crosshair}
      @supports (color:oklch(50% 0.1 180)){
        .nuda-cpk2-oklch-pad__pad{background:linear-gradient(to top,#000,transparent),linear-gradient(to right,#8f8f97,oklch(63% 0.19 292))}
      }
      .nuda-cpk2-oklch-pad__handle{position:absolute;top:0;left:0;width:16px;height:16px;margin:-8px;border-radius:50%;border:2px solid #fafafa;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 2px 6px rgba(0,0,0,.5);cursor:grab;transition:transform .18s cubic-bezier(.16,1,.3,1)}
      .nuda-cpk2-oklch-pad__handle:hover{transform:translate(120px,30px) scale(1.15)}
      .nuda-cpk2-oklch-pad__handle:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cpk2-oklch-pad__rail{display:flex;align-items:center;gap:8px}
      .nuda-cpk2-oklch-pad__rail label{font-size:10px;color:#777;width:24px}
      .nuda-cpk2-oklch-pad__hue{-webkit-appearance:none;appearance:none;flex:1;height:44px;background:transparent;cursor:pointer}
      .nuda-cpk2-oklch-pad__hue::-webkit-slider-runnable-track{height:10px;border-radius:99px;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a)}
      .nuda-cpk2-oklch-pad__hue::-moz-range-track{height:10px;border-radius:99px;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a)}
      .nuda-cpk2-oklch-pad__hue::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin-top:-4px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;box-shadow:0 0 0 1px rgba(255,255,255,.4);cursor:grab;transition:transform .2s}
      .nuda-cpk2-oklch-pad__hue::-webkit-slider-thumb:hover{transform:scale(1.15)}
      .nuda-cpk2-oklch-pad__hue::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;cursor:grab}
      .nuda-cpk2-oklch-pad__hue:focus-visible{outline:none}
      .nuda-cpk2-oklch-pad__hue:focus-visible::-webkit-slider-thumb{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cpk2-oklch-pad__readout{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:#fafafa;font-weight:600;text-align:center;padding:6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:6px}
      @media (prefers-reduced-motion:reduce){.nuda-cpk2-oklch-pad__handle,.nuda-cpk2-oklch-pad__hue::-webkit-slider-thumb{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cpk2-oklch-pad">
  <div class="nuda-cpk2-oklch-pad__pad" aria-hidden="true">
    <span class="nuda-cpk2-oklch-pad__handle" role="slider" tabindex="0"
          aria-label="Lightness and chroma" aria-valuemin="0" aria-valuemax="100"
          aria-valuenow="63" aria-valuetext="Lightness 63%, chroma 0.19"
          style="transform:translate(120px,30px)"></span>
  </div>
  <div class="nuda-cpk2-oklch-pad__rail">
    <label id="cpk2-oklch-pad-hue-label" for="cpk2-oklch-pad-hue">Hue</label>
    <input id="cpk2-oklch-pad-hue" class="nuda-cpk2-oklch-pad__hue" type="range"
           min="0" max="360" value="292" aria-labelledby="cpk2-oklch-pad-hue-label"
           aria-valuetext="Hue 292 degrees, violet">
  </div>
  <div class="nuda-cpk2-oklch-pad__readout" aria-live="polite">oklch(63% 0.19 292)</div>
</div>`,
      },
    ],
  },
];
