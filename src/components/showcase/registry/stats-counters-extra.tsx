import type { NudaComponent } from "./types";

const CAT = "Stats & Counters";

export const statsCountersExtra: NudaComponent[] = [
  /* ─────────────── 1. Odometer Digits ─────────────── */
  {
    id: "sc2-odometer",
    name: "Odometer Digits",
    category: CAT,
    preview: (
      <div className="nuda-sc2-odometer" role="img" aria-label="1,248 new signups">
        <div className="nuda-sc2-odometer__row" aria-hidden="true">
          <div className="nuda-sc2-odometer__digit" style={{ ["--d" as string]: "1" }}>
            <div className="nuda-sc2-odometer__strip">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
              <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </div>
          </div>
          <span className="nuda-sc2-odometer__comma">,</span>
          <div className="nuda-sc2-odometer__digit" style={{ ["--d" as string]: "2" }}>
            <div className="nuda-sc2-odometer__strip">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
              <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </div>
          </div>
          <div className="nuda-sc2-odometer__digit" style={{ ["--d" as string]: "4" }}>
            <div className="nuda-sc2-odometer__strip">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
              <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </div>
          </div>
          <div className="nuda-sc2-odometer__digit" style={{ ["--d" as string]: "8" }}>
            <div className="nuda-sc2-odometer__strip">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
              <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </div>
          </div>
        </div>
        <span className="nuda-sc2-odometer__label">new signups</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-odometer{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:10px}
      .nuda-sc2-odometer__row{display:flex;align-items:flex-end;gap:1px}
      .nuda-sc2-odometer__digit{width:16px;height:26px;overflow:hidden;position:relative;background:#161616;border-radius:3px}
      .nuda-sc2-odometer__strip{display:flex;flex-direction:column;transform:translateY(0);animation:_nuda-sc2odometer-roll 1.3s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-sc2-odometer__strip span{height:26px;display:flex;align-items:center;justify-content:center;font:700 15px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-sc2-odometer__comma{font:700 15px ui-sans-serif,system-ui;color:#fafafa;align-self:flex-end;margin-bottom:2px}
      .nuda-sc2-odometer__label{font:500 9px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _nuda-sc2odometer-roll{to{transform:translateY(calc(var(--d) * -10%))}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-odometer__strip{animation:none !important;transform:translateY(calc(var(--d) * -10%))}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Odometer Digits — each column is a strip of 0-9, --d picks the resting digit -->
<div class="nuda-sc2-odometer" role="img" aria-label="1,248 new signups">
  <div class="nuda-sc2-odometer__row" aria-hidden="true">
    <div class="nuda-sc2-odometer__digit" style="--d:1">
      <div class="nuda-sc2-odometer__strip">
        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
        <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
      </div>
    </div>
    <span class="nuda-sc2-odometer__comma">,</span>
    <div class="nuda-sc2-odometer__digit" style="--d:2">
      <div class="nuda-sc2-odometer__strip">
        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
        <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
      </div>
    </div>
    <div class="nuda-sc2-odometer__digit" style="--d:4">
      <div class="nuda-sc2-odometer__strip">
        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
        <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
      </div>
    </div>
    <div class="nuda-sc2-odometer__digit" style="--d:8">
      <div class="nuda-sc2-odometer__strip">
        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
        <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
      </div>
    </div>
  </div>
  <span class="nuda-sc2-odometer__label">new signups</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Percentage Ring Count ─────────────── */
  {
    id: "sc2-ringcount",
    name: "Percentage Ring Count",
    category: CAT,
    preview: (
      <div className="nuda-sc2-ringcount" role="img" aria-label="Battery health 86 percent">
        <svg viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="6" />
          <circle className="nuda-sc2-ringcount__arc" cx="40" cy="40" r="34" fill="none" stroke="#e4ff54" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <span className="nuda-sc2-ringcount__num">86%</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-ringcount{position:relative;width:88px;height:88px;display:flex;align-items:center;justify-content:center}
      .nuda-sc2-ringcount svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);filter:drop-shadow(0 0 8px rgba(228,255,84,.25))}
      .nuda-sc2-ringcount__arc{stroke-dasharray:213;stroke-dashoffset:213;animation:_nuda-sc2ringcount-arc 1.6s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-sc2-ringcount__num{position:relative;font:800 20px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      @keyframes _nuda-sc2ringcount-arc{to{stroke-dashoffset:30}}
      @supports (background:paint(1)){
        @property --nuda-sc2-ringcount-n{syntax:'<integer>';inherits:true;initial-value:0}
        .nuda-sc2-ringcount__num{color:transparent;font-size:0}
        .nuda-sc2-ringcount__num::before{content:counter(nuda-sc2-ringcount-c) "%";counter-reset:nuda-sc2-ringcount-c var(--nuda-sc2-ringcount-n);display:block;font:800 20px ui-sans-serif,system-ui;color:#fafafa;animation:_nuda-sc2ringcount-count 1.6s steps(86,end) forwards}
        @keyframes _nuda-sc2ringcount-count{to{--nuda-sc2-ringcount-n:86}}
      }
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-ringcount__arc{animation:none !important;stroke-dashoffset:30}
        .nuda-sc2-ringcount__num::before{animation:none !important;--nuda-sc2-ringcount-n:86}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Percentage Ring Count
     Modern engines animate the number via @property + counter();
     other browsers keep the static "86%" text as a graceful fallback. -->
<div class="nuda-sc2-ringcount" role="img" aria-label="Battery health 86 percent">
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="6" />
    <circle class="nuda-sc2-ringcount__arc" cx="40" cy="40" r="34" fill="none"
            stroke="#e4ff54" stroke-width="6" stroke-linecap="round" />
  </svg>
  <span class="nuda-sc2-ringcount__num">86%</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Split-Flap Counter ─────────────── */
  {
    id: "sc2-splitflap",
    name: "Split-Flap Counter",
    category: CAT,
    preview: (
      <div className="nuda-sc2-splitflap" role="img" aria-label="847 tickets sold">
        <div className="nuda-sc2-splitflap__card" style={{ ["--i" as string]: "0" }}><span>8</span></div>
        <div className="nuda-sc2-splitflap__card" style={{ ["--i" as string]: "1" }}><span>4</span></div>
        <div className="nuda-sc2-splitflap__card" style={{ ["--i" as string]: "2" }}><span>7</span></div>
        <span className="nuda-sc2-splitflap__label">tickets sold</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-splitflap{display:flex;align-items:center;gap:8px;padding:10px}
      .nuda-sc2-splitflap__card{width:24px;height:32px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:4px;display:flex;align-items:center;justify-content:center;position:relative;perspective:120px}
      .nuda-sc2-splitflap__card span{font:700 16px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;display:inline-block;transform-origin:center;animation:_nuda-sc2splitflap-flip .5s cubic-bezier(.4,0,.2,1) backwards;animation-delay:calc(var(--i) * .14s)}
      .nuda-sc2-splitflap__card::after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(0,0,0,.5);pointer-events:none}
      .nuda-sc2-splitflap__label{font:500 9px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.08em;margin-left:2px}
      @keyframes _nuda-sc2splitflap-flip{from{transform:rotateX(-90deg);opacity:0}to{transform:rotateX(0deg);opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-splitflap__card span{animation:none !important;transform:rotateX(0deg);opacity:1}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Split-Flap Counter — each card flips its digit into place on a stagger -->
<div class="nuda-sc2-splitflap" role="img" aria-label="847 tickets sold">
  <div class="nuda-sc2-splitflap__card" style="--i:0"><span>8</span></div>
  <div class="nuda-sc2-splitflap__card" style="--i:1"><span>4</span></div>
  <div class="nuda-sc2-splitflap__card" style="--i:2"><span>7</span></div>
  <span class="nuda-sc2-splitflap__label">tickets sold</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Delta Pair ─────────────── */
  {
    id: "sc2-deltapair",
    name: "Delta Pair",
    category: CAT,
    preview: (
      <div className="nuda-sc2-deltapair">
        <div className="nuda-sc2-deltapair__row">
          <div className="nuda-sc2-deltapair__stat">
            <span className="nuda-sc2-deltapair__num">312</span>
            <span className="nuda-sc2-deltapair__tag">Last mo.</span>
          </div>
          <div className="nuda-sc2-deltapair__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path className="nuda-sc2-deltapair__arrowpath" d="M3 12 L21 12" />
              <path className="nuda-sc2-deltapair__arrowpath" d="M14 5 L21 12 L14 19" />
            </svg>
          </div>
          <div className="nuda-sc2-deltapair__stat nuda-sc2-deltapair__stat--now">
            <span className="nuda-sc2-deltapair__num">468</span>
            <span className="nuda-sc2-deltapair__tag">This mo.</span>
          </div>
        </div>
        <span className="nuda-sc2-deltapair__badge">+50%</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-deltapair{display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px}
      .nuda-sc2-deltapair__row{display:flex;align-items:center;gap:10px}
      .nuda-sc2-deltapair__stat{display:flex;flex-direction:column;align-items:center;gap:2px;opacity:0;animation:_nuda-sc2deltapair-pop .6s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-sc2-deltapair__stat--now{animation-delay:.15s}
      .nuda-sc2-deltapair__num{font:700 20px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-sc2-deltapair__stat--now .nuda-sc2-deltapair__num{color:#e4ff54}
      .nuda-sc2-deltapair__tag{font:500 8px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.06em}
      .nuda-sc2-deltapair__arrow{width:20px;height:20px;color:#e4ff54}
      .nuda-sc2-deltapair__arrow svg{width:100%;height:100%}
      .nuda-sc2-deltapair__arrowpath{stroke-dasharray:30;stroke-dashoffset:30;animation:_nuda-sc2deltapair-draw .5s ease-out .3s forwards}
      .nuda-sc2-deltapair__badge{font:700 10px ui-sans-serif,system-ui;color:#0a0a0a;background:#e4ff54;padding:2px 8px;border-radius:999px;opacity:0;transform:translateY(4px);animation:_nuda-sc2deltapair-badge .5s cubic-bezier(.4,0,.2,1) .6s forwards}
      @keyframes _nuda-sc2deltapair-pop{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _nuda-sc2deltapair-draw{to{stroke-dashoffset:0}}
      @keyframes _nuda-sc2deltapair-badge{to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-deltapair__stat,.nuda-sc2-deltapair__badge{animation:none !important;opacity:1;transform:translateY(0)}
        .nuda-sc2-deltapair__arrowpath{animation:none !important;stroke-dashoffset:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Delta Pair — two periods compared with a drawing arrow and a delta badge -->
<div class="nuda-sc2-deltapair">
  <div class="nuda-sc2-deltapair__row">
    <div class="nuda-sc2-deltapair__stat">
      <span class="nuda-sc2-deltapair__num">312</span>
      <span class="nuda-sc2-deltapair__tag">Last mo.</span>
    </div>
    <div class="nuda-sc2-deltapair__arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path class="nuda-sc2-deltapair__arrowpath" d="M3 12 L21 12" />
        <path class="nuda-sc2-deltapair__arrowpath" d="M14 5 L21 12 L14 19" />
      </svg>
    </div>
    <div class="nuda-sc2-deltapair__stat nuda-sc2-deltapair__stat--now">
      <span class="nuda-sc2-deltapair__num">468</span>
      <span class="nuda-sc2-deltapair__tag">This mo.</span>
    </div>
  </div>
  <span class="nuda-sc2-deltapair__badge">+50%</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Animated Fraction ─────────────── */
  {
    id: "sc2-fraction",
    name: "Animated Fraction",
    category: CAT,
    preview: (
      <div className="nuda-sc2-fraction" role="img" aria-label="847 of 1,000 seats filled">
        <div className="nuda-sc2-fraction__nums">
          <span className="nuda-sc2-fraction__num">847</span>
          <span className="nuda-sc2-fraction__slash">/</span>
          <span className="nuda-sc2-fraction__den">1,000</span>
        </div>
        <div className="nuda-sc2-fraction__track">
          <span className="nuda-sc2-fraction__fill" style={{ ["--f" as string]: "84.7%" }}></span>
        </div>
        <span className="nuda-sc2-fraction__label">Seats filled</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-fraction{display:flex;flex-direction:column;gap:6px;padding:10px;width:150px}
      .nuda-sc2-fraction__nums{display:flex;align-items:baseline;gap:4px;opacity:0;animation:_nuda-sc2fraction-pop .6s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-sc2-fraction__num{font:800 24px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-sc2-fraction__slash{font:500 16px ui-sans-serif,system-ui;color:#555}
      .nuda-sc2-fraction__den{font:600 13px ui-sans-serif,system-ui;color:#a1a1aa;font-variant-numeric:tabular-nums}
      .nuda-sc2-fraction__track{height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden}
      .nuda-sc2-fraction__fill{display:block;height:100%;width:var(--f);background:linear-gradient(90deg,rgba(228,255,84,.6),#e4ff54);border-radius:3px;transform:scaleX(0);transform-origin:left;animation:_nuda-sc2fraction-fill 1.3s cubic-bezier(.4,0,.2,1) .2s forwards}
      .nuda-sc2-fraction__label{font:500 9px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _nuda-sc2fraction-pop{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _nuda-sc2fraction-fill{to{transform:scaleX(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-fraction__nums{animation:none !important;opacity:1;transform:translateY(0)}
        .nuda-sc2-fraction__fill{animation:none !important;transform:scaleX(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Animated Fraction -->
<div class="nuda-sc2-fraction" role="img" aria-label="847 of 1,000 seats filled">
  <div class="nuda-sc2-fraction__nums">
    <span class="nuda-sc2-fraction__num">847</span>
    <span class="nuda-sc2-fraction__slash">/</span>
    <span class="nuda-sc2-fraction__den">1,000</span>
  </div>
  <div class="nuda-sc2-fraction__track">
    <span class="nuda-sc2-fraction__fill" style="--f:84.7%"></span>
  </div>
  <span class="nuda-sc2-fraction__label">Seats filled</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Abbreviated Expand ─────────────── */
  {
    id: "sc2-abbrexpand",
    name: "Abbreviated Expand",
    category: CAT,
    preview: (
      <button type="button" className="nuda-sc2-abbrexpand" aria-label="1,204,893 total downloads, shown abbreviated as 1.2M, hover or focus to expand">
        <span className="nuda-sc2-abbrexpand__stack">
          <span className="nuda-sc2-abbrexpand__short">1.2M</span>
          <span className="nuda-sc2-abbrexpand__full">1,204,893</span>
        </span>
        <span className="nuda-sc2-abbrexpand__label">downloads</span>
      </button>
    ),
    cssInline: `
      .nuda-sc2-abbrexpand{all:unset;cursor:pointer;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:12px;min-width:44px;min-height:44px;border-radius:8px;animation:_nuda-sc2abbrexpand-in .6s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-sc2-abbrexpand:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      .nuda-sc2-abbrexpand__stack{position:relative;display:grid;height:32px}
      .nuda-sc2-abbrexpand__short,.nuda-sc2-abbrexpand__full{grid-area:1/1;font:800 24px ui-sans-serif,system-ui;font-variant-numeric:tabular-nums;line-height:1;white-space:nowrap;transition:opacity .3s ease,transform .3s ease}
      .nuda-sc2-abbrexpand__short{opacity:1;transform:translateY(0);color:#fafafa}
      .nuda-sc2-abbrexpand__full{opacity:0;transform:translateY(4px);color:#e4ff54}
      .nuda-sc2-abbrexpand:hover .nuda-sc2-abbrexpand__short,.nuda-sc2-abbrexpand:focus-visible .nuda-sc2-abbrexpand__short{opacity:0;transform:translateY(-4px)}
      .nuda-sc2-abbrexpand:hover .nuda-sc2-abbrexpand__full,.nuda-sc2-abbrexpand:focus-visible .nuda-sc2-abbrexpand__full{opacity:1;transform:translateY(0)}
      .nuda-sc2-abbrexpand__label{font:500 9px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _nuda-sc2abbrexpand-in{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-abbrexpand{animation:none !important;opacity:1;transform:scale(1)}
        .nuda-sc2-abbrexpand__short,.nuda-sc2-abbrexpand__full{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Abbreviated Expand — hover or keyboard-focus swaps the short form for the full count -->
<button type="button" class="nuda-sc2-abbrexpand"
        aria-label="1,204,893 total downloads, shown abbreviated as 1.2M, hover or focus to expand">
  <span class="nuda-sc2-abbrexpand__stack">
    <span class="nuda-sc2-abbrexpand__short">1.2M</span>
    <span class="nuda-sc2-abbrexpand__full">1,204,893</span>
  </span>
  <span class="nuda-sc2-abbrexpand__label">downloads</span>
</button>`,
      },
    ],
  },

  /* ─────────────── 7. Tally Marks ─────────────── */
  {
    id: "sc2-tally",
    name: "Tally Marks",
    category: CAT,
    preview: (
      <div className="nuda-sc2-tally" role="img" aria-label="11 wins this season">
        <svg className="nuda-sc2-tally__marks" viewBox="0 0 74 24" aria-hidden="true" fill="none" stroke="#e4ff54" strokeWidth="2" strokeLinecap="round">
          <line className="nuda-sc2-tally__mark" x1="4" y1="4" x2="4" y2="20" style={{ ["--i" as string]: "0", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="10" y1="4" x2="10" y2="20" style={{ ["--i" as string]: "1", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="16" y1="4" x2="16" y2="20" style={{ ["--i" as string]: "2", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="22" y1="4" x2="22" y2="20" style={{ ["--i" as string]: "3", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="2" y1="20" x2="24" y2="4" style={{ ["--i" as string]: "4", ["--len" as string]: "28" }} />
          <line className="nuda-sc2-tally__mark" x1="34" y1="4" x2="34" y2="20" style={{ ["--i" as string]: "5", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="40" y1="4" x2="40" y2="20" style={{ ["--i" as string]: "6", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="46" y1="4" x2="46" y2="20" style={{ ["--i" as string]: "7", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="52" y1="4" x2="52" y2="20" style={{ ["--i" as string]: "8", ["--len" as string]: "16" }} />
          <line className="nuda-sc2-tally__mark" x1="32" y1="20" x2="54" y2="4" style={{ ["--i" as string]: "9", ["--len" as string]: "28" }} />
          <line className="nuda-sc2-tally__mark" x1="66" y1="4" x2="66" y2="20" style={{ ["--i" as string]: "10", ["--len" as string]: "16" }} />
        </svg>
        <span className="nuda-sc2-tally__num">11</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-tally{display:flex;align-items:center;gap:10px;padding:10px}
      .nuda-sc2-tally__marks{width:74px;height:24px}
      .nuda-sc2-tally__mark{stroke-dasharray:var(--len);stroke-dashoffset:var(--len);animation:_nuda-sc2tally-draw .35s ease-out forwards;animation-delay:calc(var(--i) * 90ms)}
      .nuda-sc2-tally__num{font:800 20px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      @keyframes _nuda-sc2tally-draw{to{stroke-dashoffset:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-tally__mark{animation:none !important;stroke-dashoffset:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tally Marks — strokes draw in one after another, grouped in fives -->
<div class="nuda-sc2-tally" role="img" aria-label="11 wins this season">
  <svg class="nuda-sc2-tally__marks" viewBox="0 0 74 24" aria-hidden="true"
       fill="none" stroke="#e4ff54" stroke-width="2" stroke-linecap="round">
    <line class="nuda-sc2-tally__mark" x1="4" y1="4" x2="4" y2="20" style="--i:0;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="10" y1="4" x2="10" y2="20" style="--i:1;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="16" y1="4" x2="16" y2="20" style="--i:2;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="22" y1="4" x2="22" y2="20" style="--i:3;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="2" y1="20" x2="24" y2="4" style="--i:4;--len:28" />
    <line class="nuda-sc2-tally__mark" x1="34" y1="4" x2="34" y2="20" style="--i:5;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="40" y1="4" x2="40" y2="20" style="--i:6;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="46" y1="4" x2="46" y2="20" style="--i:7;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="52" y1="4" x2="52" y2="20" style="--i:8;--len:16" />
    <line class="nuda-sc2-tally__mark" x1="32" y1="20" x2="54" y2="4" style="--i:9;--len:28" />
    <line class="nuda-sc2-tally__mark" x1="66" y1="4" x2="66" y2="20" style="--i:10;--len:16" />
  </svg>
  <span class="nuda-sc2-tally__num">11</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Milestone Flash ─────────────── */
  {
    id: "sc2-milestone",
    name: "Milestone Flash",
    category: CAT,
    preview: (
      <div className="nuda-sc2-milestone">
        <span className="nuda-sc2-milestone__ping" aria-hidden="true"></span>
        <span className="nuda-sc2-milestone__value">1,000</span>
        <span className="nuda-sc2-milestone__badge">Milestone reached</span>
      </div>
    ),
    cssInline: `
      .nuda-sc2-milestone{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px}
      .nuda-sc2-milestone__ping{position:absolute;top:16px;width:56px;height:56px;border-radius:50%;background:transparent;border:2px solid #e4ff54;opacity:0;animation:_nuda-sc2milestone-ping 1.1s cubic-bezier(0,0,.2,1) .3s forwards}
      .nuda-sc2-milestone__value{position:relative;font:800 26px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1;opacity:0;animation:_nuda-sc2milestone-pop .5s cubic-bezier(.34,1.56,.64,1) .2s forwards}
      .nuda-sc2-milestone__badge{position:relative;font:700 9px ui-sans-serif,system-ui;color:#0a0a0a;background:#e4ff54;padding:2px 8px;border-radius:999px;text-transform:uppercase;letter-spacing:.04em;opacity:0;transform:translateY(4px);animation:_nuda-sc2milestone-badge .5s cubic-bezier(.4,0,.2,1) .6s forwards}
      @keyframes _nuda-sc2milestone-ping{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.4);opacity:0}}
      @keyframes _nuda-sc2milestone-pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}
      @keyframes _nuda-sc2milestone-badge{to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-sc2-milestone__ping{animation:none !important;opacity:0}
        .nuda-sc2-milestone__value{animation:none !important;opacity:1;transform:scale(1)}
        .nuda-sc2-milestone__badge{animation:none !important;opacity:1;transform:translateY(0)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Milestone Flash — a single outward ping marks the threshold, then a badge settles in -->
<div class="nuda-sc2-milestone">
  <span class="nuda-sc2-milestone__ping" aria-hidden="true"></span>
  <span class="nuda-sc2-milestone__value">1,000</span>
  <span class="nuda-sc2-milestone__badge">Milestone reached</span>
</div>`,
      },
    ],
  },
];
