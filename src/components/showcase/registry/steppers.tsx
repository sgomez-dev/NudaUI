import type { NudaComponent } from "./types";

export const steppers: NudaComponent[] = [
  /* ─────────────── 1. Linear Stepper ─────────────── */
  {
    id: "linear-stepper",
    name: "Linear Stepper",
    category: "Steppers & Wizards",
    preview: (
      <ol className="nuda-step-linear">
        <li className="is-done">
          <span className="nuda-step-linear__circle">✓</span>
          <span className="nuda-step-linear__label">Account</span>
        </li>
        <li className="is-done">
          <span className="nuda-step-linear__circle">✓</span>
          <span className="nuda-step-linear__label">Profile</span>
        </li>
        <li className="is-active">
          <span className="nuda-step-linear__circle">3</span>
          <span className="nuda-step-linear__label">Plan</span>
        </li>
        <li>
          <span className="nuda-step-linear__circle">4</span>
          <span className="nuda-step-linear__label">Done</span>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-step-linear{display:flex;align-items:flex-start;justify-content:space-between;gap:6px;padding:0;margin:0;list-style:none;width:100%;max-width:340px}
      .nuda-step-linear li{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;color:#63636e;font-size:11px}
      .nuda-step-linear li::before{content:'';position:absolute;top:11px;left:calc(-50% + 14px);right:calc(50% + 14px);height:2px;background:rgba(255,255,255,.06);transition:background .5s ease}
      .nuda-step-linear li:first-child::before{display:none}
      .nuda-step-linear__circle{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);color:#a0a0a8;font-size:10px;font-weight:600;transition:background .35s,border-color .35s,color .35s,transform .25s}
      .nuda-step-linear li.is-done .nuda-step-linear__circle{background:#e4ff54;border-color:#e4ff54;color:#09090b;transform:scale(1.05)}
      .nuda-step-linear li.is-done::before{background:#e4ff54}
      .nuda-step-linear li.is-active .nuda-step-linear__circle{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54;animation:_stepPulse 2s ease-in-out infinite}
      .nuda-step-linear li.is-active{color:#fafafa}
      .nuda-step-linear li.is-done{color:#a0a0a8}
      @keyframes _stepPulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.4)}50%{box-shadow:0 0 0 6px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-step-linear li.is-active .nuda-step-linear__circle{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ol class="nuda-step-linear">
  <li class="is-done">
    <span class="nuda-step-linear__circle">✓</span>
    <span class="nuda-step-linear__label">Account</span>
  </li>
  <li class="is-done">
    <span class="nuda-step-linear__circle">✓</span>
    <span class="nuda-step-linear__label">Profile</span>
  </li>
  <li class="is-active">
    <span class="nuda-step-linear__circle">3</span>
    <span class="nuda-step-linear__label">Plan</span>
  </li>
  <li>
    <span class="nuda-step-linear__circle">4</span>
    <span class="nuda-step-linear__label">Done</span>
  </li>
</ol>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-step-linear li {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #63636e;
}

.nuda-step-linear li::before {
  content: "";
  position: absolute;
  top: 11px;
  left: calc(-50% + 14px);
  right: calc(50% + 14px);
  height: 2px;
  background: rgba(255, 255, 255, 0.06);
  transition: background 0.5s ease;
}

.nuda-step-linear li:first-child::before { display: none; }

.nuda-step-linear li.is-done .nuda-step-linear__circle {
  background: #e4ff54;
  border-color: #e4ff54;
  color: #09090b;
  transform: scale(1.05);
}

.nuda-step-linear li.is-done::before { background: #e4ff54; }

.nuda-step-linear li.is-active .nuda-step-linear__circle {
  background: rgba(228, 255, 84, 0.1);
  border-color: #e4ff54;
  color: #e4ff54;
  animation: nuda-step-pulse 2s ease-in-out infinite;
}

@keyframes nuda-step-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(228, 255, 84, 0.4); }
  50%      { box-shadow: 0 0 0 6px rgba(228, 255, 84, 0);   }
}`,
      },
    ],
  },

  /* ─────────────── 2. Vertical Stepper ─────────────── */
  {
    id: "vertical-stepper",
    name: "Vertical Stepper",
    category: "Steppers & Wizards",
    preview: (
      <ol className="nuda-step-vert">
        <li className="is-done">
          <span className="nuda-step-vert__dot" />
          <div>
            <strong>Verify email</strong>
            <p>Confirm your address</p>
          </div>
        </li>
        <li className="is-active">
          <span className="nuda-step-vert__dot" />
          <div>
            <strong>Set password</strong>
            <p>Use 12+ characters</p>
          </div>
        </li>
        <li>
          <span className="nuda-step-vert__dot" />
          <div>
            <strong>Invite team</strong>
            <p>Optional — skip if solo</p>
          </div>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-step-vert{padding:0 0 0 8px;margin:0;list-style:none;position:relative;width:100%;max-width:240px}
      .nuda-step-vert li{position:relative;display:flex;gap:14px;padding-bottom:18px}
      .nuda-step-vert li:last-child{padding-bottom:0}
      .nuda-step-vert li::before{content:'';position:absolute;left:5px;top:14px;bottom:-4px;width:2px;background:rgba(255,255,255,.06);transition:background .5s}
      .nuda-step-vert li:last-child::before{display:none}
      .nuda-step-vert__dot{position:relative;width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.1);flex-shrink:0;margin-top:1px;transition:background .35s,border-color .35s,transform .25s}
      .nuda-step-vert li.is-done::before{background:#e4ff54}
      .nuda-step-vert li.is-done .nuda-step-vert__dot{background:#e4ff54;border-color:#e4ff54}
      .nuda-step-vert li.is-active .nuda-step-vert__dot{background:#e4ff54;border-color:#e4ff54;animation:_vstepPulse 2s ease-in-out infinite}
      .nuda-step-vert strong{color:#fafafa;font-size:12px;font-weight:600;display:block;line-height:1.3}
      .nuda-step-vert p{color:#a0a0a8;font-size:11px;margin:1px 0 0}
      .nuda-step-vert li.is-active strong{color:#e4ff54}
      @keyframes _vstepPulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.5)}50%{box-shadow:0 0 0 6px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-step-vert li.is-active .nuda-step-vert__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<ol class="nuda-step-vert">
  <li class="is-done">
    <span class="nuda-step-vert__dot"></span>
    <div>
      <strong>Verify email</strong>
      <p>Confirm your address</p>
    </div>
  </li>
  <!-- More steps -->
</ol>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-step-vert li::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 14px;
  bottom: -4px;
  width: 2px;
  background: rgba(255, 255, 255, 0.06);
  transition: background 0.5s;
}

.nuda-step-vert__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: background 0.35s, border-color 0.35s;
}

.nuda-step-vert li.is-done::before { background: #e4ff54; }
.nuda-step-vert li.is-done .nuda-step-vert__dot {
  background: #e4ff54;
  border-color: #e4ff54;
}

.nuda-step-vert li.is-active .nuda-step-vert__dot {
  background: #e4ff54;
  border-color: #e4ff54;
  animation: nuda-vstep-pulse 2s ease-in-out infinite;
}`,
      },
    ],
  },

  /* ─────────────── 3. Progress Wizard ─────────────── */
  {
    id: "progress-wizard",
    name: "Progress Wizard",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-pwiz">
        <div className="nuda-pwiz__head">
          <span>Step 2 of 5</span>
          <span className="nuda-pwiz__pct">40%</span>
        </div>
        <div className="nuda-pwiz__bar">
          <span style={{ width: "40%" }} />
        </div>
        <div className="nuda-pwiz__title">Tell us about your team</div>
      </div>
    ),
    cssInline: `
      .nuda-pwiz{padding:18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:300px}
      .nuda-pwiz__head{display:flex;justify-content:space-between;align-items:center;color:#a0a0a8;font-size:11px;margin-bottom:8px}
      .nuda-pwiz__pct{color:#e4ff54;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-pwiz__bar{position:relative;height:6px;background:rgba(255,255,255,.06);border-radius:99px;overflow:hidden;margin-bottom:14px}
      .nuda-pwiz__bar span{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#e4ff54,#6ee7b7);border-radius:99px;transition:width .6s cubic-bezier(.16,1,.3,1)}
      .nuda-pwiz__bar span::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);transform:translateX(-100%);animation:_pwizShine 1.6s ease-in-out infinite}
      .nuda-pwiz__title{color:#fafafa;font-size:13px;font-weight:600}
      @keyframes _pwizShine{50%{transform:translateX(100%)}100%{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-pwiz__bar span::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pwiz">
  <div class="nuda-pwiz__head">
    <span>Step 2 of 5</span>
    <span class="nuda-pwiz__pct">40%</span>
  </div>
  <div class="nuda-pwiz__bar">
    <span style="width: 40%"></span>
  </div>
  <div class="nuda-pwiz__title">Tell us about your team</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-pwiz__bar {
  position: relative;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  overflow: hidden;
}

.nuda-pwiz__bar span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #e4ff54, #6ee7b7);
  border-radius: 99px;
  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-pwiz__bar span::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transform: translateX(-100%);
  animation: nuda-pwiz-shine 1.6s ease-in-out infinite;
}

@keyframes nuda-pwiz-shine {
  50%, 100% { transform: translateX(100%); }
}`,
      },
    ],
  },

  /* ─────────────── 4. Numbered Steps ─────────────── */
  {
    id: "numbered-steps",
    name: "Numbered Steps",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-numsteps">
        <div className="nuda-numsteps__item is-done">
          <span className="nuda-numsteps__num">01</span>
          <div>Choose plan</div>
        </div>
        <div className="nuda-numsteps__sep" />
        <div className="nuda-numsteps__item is-active">
          <span className="nuda-numsteps__num">02</span>
          <div>Add billing info</div>
        </div>
        <div className="nuda-numsteps__sep" />
        <div className="nuda-numsteps__item">
          <span className="nuda-numsteps__num">03</span>
          <div>Confirm</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-numsteps{display:flex;align-items:center;gap:8px;padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:380px;flex-wrap:wrap}
      .nuda-numsteps__item{display:flex;align-items:center;gap:8px;color:#63636e;font-size:11px;font-weight:500;flex:1}
      .nuda-numsteps__num{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid rgba(255,255,255,.1);border-radius:7px;font-size:10px;font-variant-numeric:tabular-nums;color:#a0a0a8;font-weight:700;transition:background .35s,border-color .35s,color .35s,transform .25s}
      .nuda-numsteps__item.is-active{color:#fafafa}
      .nuda-numsteps__item.is-active .nuda-numsteps__num{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54;transform:rotate(-4deg)}
      .nuda-numsteps__item.is-done{color:#a0a0a8}
      .nuda-numsteps__item.is-done .nuda-numsteps__num{background:#e4ff54;border-color:#e4ff54;color:#09090b}
      .nuda-numsteps__sep{height:1px;flex:0 0 14px;background:rgba(255,255,255,.06)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-numsteps">
  <div class="nuda-numsteps__item is-done">
    <span class="nuda-numsteps__num">01</span>
    <div>Choose plan</div>
  </div>
  <div class="nuda-numsteps__sep"></div>
  <div class="nuda-numsteps__item is-active">
    <span class="nuda-numsteps__num">02</span>
    <div>Add billing info</div>
  </div>
  <div class="nuda-numsteps__sep"></div>
  <div class="nuda-numsteps__item">
    <span class="nuda-numsteps__num">03</span>
    <div>Confirm</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-numsteps__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  color: #a0a0a8;
  font-weight: 700;
  transition:
    background 0.35s,
    border-color 0.35s,
    color 0.35s,
    transform 0.25s;
}

.nuda-numsteps__item.is-active .nuda-numsteps__num {
  background: rgba(228, 255, 84, 0.1);
  border-color: #e4ff54;
  color: #e4ff54;
  transform: rotate(-4deg);
}

.nuda-numsteps__item.is-done .nuda-numsteps__num {
  background: #e4ff54;
  border-color: #e4ff54;
  color: #09090b;
}`,
      },
    ],
  },

  /* ─────────────── 5. Onboarding Carousel ─────────────── */
  {
    id: "onboarding-carousel",
    name: "Onboarding Carousel",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-onboard">
        <div className="nuda-onboard__slide">
          <div className="nuda-onboard__icon" aria-hidden="true">✨</div>
          <h4>Welcome to NudaUI</h4>
          <p>Animations without the baggage.</p>
        </div>
        <div className="nuda-onboard__dots">
          <span className="is-active" />
          <span />
          <span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-onboard{display:flex;flex-direction:column;align-items:center;text-align:center;padding:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:280px;animation:_obIn .65s cubic-bezier(.16,1,.3,1) both}
      .nuda-onboard__slide{margin-bottom:16px}
      .nuda-onboard__icon{font-size:36px;margin-bottom:10px;animation:_obFloat 3s ease-in-out infinite}
      .nuda-onboard h4{margin:0 0 4px;color:#fafafa;font-size:14px;font-weight:600}
      .nuda-onboard p{margin:0;color:#a0a0a8;font-size:11px}
      .nuda-onboard__dots{display:flex;gap:6px}
      .nuda-onboard__dots span{width:6px;height:6px;border-radius:99px;background:rgba(255,255,255,.1);transition:width .35s cubic-bezier(.16,1,.3,1),background .25s}
      .nuda-onboard__dots span.is-active{width:24px;background:#e4ff54}
      @keyframes _obIn{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
      @keyframes _obFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      @media(prefers-reduced-motion:reduce){.nuda-onboard,.nuda-onboard__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-onboard">
  <div class="nuda-onboard__slide">
    <div class="nuda-onboard__icon">✨</div>
    <h4>Welcome to NudaUI</h4>
    <p>Animations without the baggage.</p>
  </div>
  <div class="nuda-onboard__dots">
    <span class="is-active"></span>
    <span></span>
    <span></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-onboard__icon {
  font-size: 40px;
  animation: nuda-ob-float 3s ease-in-out infinite;
}

.nuda-onboard__dots span {
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.1);
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.25s;
}

.nuda-onboard__dots span.is-active {
  width: 24px;
  background: #e4ff54;
}

@keyframes nuda-ob-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}`,
      },
    ],
  },

  /* ─────────────── 6. Stripe-style Tabs ─────────────── */
  {
    id: "stripe-tabs",
    name: "Wizard Tabs",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-wizardtabs">
        <button className="nuda-wizardtabs__tab is-done">
          <span>1</span>Account
        </button>
        <button className="nuda-wizardtabs__tab is-active">
          <span>2</span>Workspace
        </button>
        <button className="nuda-wizardtabs__tab">
          <span>3</span>Done
        </button>
      </div>
    ),
    cssInline: `
      .nuda-wizardtabs{display:inline-flex;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:4px;gap:4px}
      .nuda-wizardtabs__tab{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:transparent;border:0;border-radius:7px;color:#63636e;font-size:11px;font-weight:500;cursor:pointer;transition:background .25s,color .25s}
      .nuda-wizardtabs__tab span{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.06);font-size:10px;font-weight:700;transition:background .35s,color .35s,transform .25s}
      .nuda-wizardtabs__tab.is-done{color:#a0a0a8}
      .nuda-wizardtabs__tab.is-done span{background:#e4ff54;color:#09090b}
      .nuda-wizardtabs__tab.is-active{background:rgba(228,255,84,.08);color:#e4ff54}
      .nuda-wizardtabs__tab.is-active span{background:#e4ff54;color:#09090b;transform:scale(1.1)}
      .nuda-wizardtabs__tab:hover:not(.is-active):not(.is-done){color:#fafafa;background:rgba(255,255,255,.04)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-wizardtabs">
  <button class="nuda-wizardtabs__tab is-done">
    <span>1</span>Account
  </button>
  <button class="nuda-wizardtabs__tab is-active">
    <span>2</span>Workspace
  </button>
  <button class="nuda-wizardtabs__tab">
    <span>3</span>Done
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-wizardtabs__tab span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition:
    background 0.35s,
    color 0.35s,
    transform 0.25s;
}

.nuda-wizardtabs__tab.is-done span {
  background: #e4ff54;
  color: #09090b;
}

.nuda-wizardtabs__tab.is-active {
  background: rgba(228, 255, 84, 0.08);
  color: #e4ff54;
}

.nuda-wizardtabs__tab.is-active span {
  background: #e4ff54;
  color: #09090b;
  transform: scale(1.1);
}`,
      },
    ],
  },

  /* ─────────────── 7. Step Connector Trace ─────────────── */
  {
    id: "step-trace",
    name: "Trace Stepper",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-step-trace">
        <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="8" x2="240" y2="8" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
          <line className="nuda-step-trace__draw" x1="0" y1="8" x2="240" y2="8" stroke="#e4ff54" strokeWidth="2" />
        </svg>
        <div className="nuda-step-trace__nodes">
          <span className="is-done" />
          <span className="is-done" />
          <span className="is-active" />
          <span />
        </div>
        <div className="nuda-step-trace__labels">
          <span>Plan</span><span>Build</span><span>Test</span><span>Ship</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-step-trace{position:relative;width:100%;max-width:280px;padding:12px 0}
      .nuda-step-trace svg{position:absolute;top:18px;left:0;right:0;width:100%;height:8px}
      .nuda-step-trace__draw{stroke-dasharray:240;stroke-dashoffset:120;animation:_traceDraw 2s cubic-bezier(.16,1,.3,1) forwards;filter:drop-shadow(0 0 4px #e4ff54)}
      .nuda-step-trace__nodes{position:relative;display:grid;grid-template-columns:repeat(4,1fr);justify-items:center;align-items:center;height:16px;z-index:1}
      .nuda-step-trace__nodes span{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.08);border:2px solid #0c0c10;transition:background .35s,box-shadow .35s,transform .25s}
      .nuda-step-trace__nodes span.is-done{background:#e4ff54}
      .nuda-step-trace__nodes span.is-active{background:#e4ff54;box-shadow:0 0 0 4px rgba(228,255,84,.25);transform:scale(1.2);animation:_tracePing 2s ease-in-out infinite}
      .nuda-step-trace__labels{display:grid;grid-template-columns:repeat(4,1fr);justify-items:center;color:#a0a0a8;font-size:10px;margin-top:6px}
      @keyframes _traceDraw{to{stroke-dashoffset:0}}
      @keyframes _tracePing{0%,100%{box-shadow:0 0 0 4px rgba(228,255,84,.25)}50%{box-shadow:0 0 0 8px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-step-trace__draw{animation:none;stroke-dashoffset:0}.nuda-step-trace__nodes span.is-active{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-step-trace">
  <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
    <line x1="0" y1="8" x2="240" y2="8"
          stroke="rgba(255,255,255,0.06)" stroke-width="2" />
    <line class="nuda-step-trace__draw" x1="0" y1="8" x2="240" y2="8"
          stroke="#e4ff54" stroke-width="2" />
  </svg>
  <div class="nuda-step-trace__nodes">
    <span class="is-done"></span>
    <span class="is-done"></span>
    <span class="is-active"></span>
    <span></span>
  </div>
  <div class="nuda-step-trace__labels">
    <span>Plan</span><span>Build</span><span>Test</span><span>Ship</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-step-trace__draw {
  stroke-dasharray: 240;
  stroke-dashoffset: 120;
  animation: nuda-trace-draw 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  filter: drop-shadow(0 0 4px #e4ff54);
}

.nuda-step-trace__nodes span.is-active {
  background: #e4ff54;
  transform: scale(1.2);
  animation: nuda-trace-ping 2s ease-in-out infinite;
}

@keyframes nuda-trace-draw {
  to { stroke-dashoffset: 0; }
}

@keyframes nuda-trace-ping {
  0%, 100% { box-shadow: 0 0 0 4px rgba(228, 255, 84, 0.25); }
  50%      { box-shadow: 0 0 0 8px rgba(228, 255, 84, 0);    }
}`,
      },
    ],
  },

  /* ─────────────── 8. Wizard Card Slide ─────────────── */
  {
    id: "wizard-slide",
    name: "Wizard Card Slide",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-wcard">
        <div className="nuda-wcard__head">
          <span>Step 2 / 3</span>
          <span>Profile</span>
        </div>
        <div className="nuda-wcard__viewport">
          <div className="nuda-wcard__track" style={{ transform: "translateX(-100%)" }}>
            <div className="nuda-wcard__panel">First panel</div>
            <div className="nuda-wcard__panel is-active">
              <div className="nuda-wcard__title">Tell us your name</div>
              <input placeholder="Jane Doe" readOnly />
              <button>Continue</button>
            </div>
            <div className="nuda-wcard__panel">Third panel</div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-wcard{display:flex;flex-direction:column;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:280px;overflow:hidden}
      .nuda-wcard__head{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;color:#a0a0a8;font-size:11px;border-bottom:1px solid rgba(255,255,255,.04)}
      .nuda-wcard__viewport{overflow:hidden}
      .nuda-wcard__track{display:flex;width:300%;transition:transform .55s cubic-bezier(.16,1,.3,1)}
      .nuda-wcard__panel{flex:0 0 33.333%;padding:18px 14px;color:#63636e;font-size:11px;display:flex;flex-direction:column;gap:8px}
      .nuda-wcard__panel.is-active{color:#fafafa}
      .nuda-wcard__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-wcard__panel input{padding:8px 10px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:#fafafa;font-size:12px;outline:none;transition:border-color .2s,box-shadow .25s}
      .nuda-wcard__panel input:focus{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-wcard__panel button{padding:8px;background:#e4ff54;color:#09090b;border:0;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
      .nuda-wcard__panel button:hover{transform:translateY(-1px);filter:brightness(1.08)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-wcard">
  <div class="nuda-wcard__head">
    <span>Step 2 / 3</span>
    <span>Profile</span>
  </div>
  <div class="nuda-wcard__viewport">
    <div class="nuda-wcard__track" style="transform: translateX(-100%)">
      <div class="nuda-wcard__panel">First panel</div>
      <div class="nuda-wcard__panel is-active">
        <div class="nuda-wcard__title">Tell us your name</div>
        <input placeholder="Jane Doe" />
        <button>Continue</button>
      </div>
      <div class="nuda-wcard__panel">Third panel</div>
    </div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root  = document.querySelector('.nuda-wcard');
const track = root.querySelector('.nuda-wcard__track');
const panels = root.querySelectorAll('.nuda-wcard__panel');
const next  = root.querySelector('.nuda-wcard__panel.is-active button');

let index = 1;

next?.addEventListener('click', () => {
  index = Math.min(panels.length - 1, index + 1);
  track.style.transform = \`translateX(-\${index * 33.333}%)\`;
  panels.forEach((p, i) => p.classList.toggle('is-active', i === index));
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-wcard__track {
  display: flex;
  width: 300%;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-wcard__panel {
  flex: 0 0 33.333%;
  padding: 18px 14px;
  color: #63636e;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nuda-wcard__panel.is-active {
  color: #fafafa;
}`,
      },
    ],
  },

  /* ─────────────── 9. Done Confetti Step ─────────────── */
  {
    id: "done-step",
    name: "Done Step",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-done">
        <div className="nuda-done__check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path className="nuda-done__path" d="M5 13l4 4L19 7" />
          </svg>
          <span className="nuda-done__ring" />
        </div>
        <div className="nuda-done__title">All set!</div>
        <div className="nuda-done__sub">Your workspace is ready</div>
      </div>
    ),
    cssInline: `
      .nuda-done{display:flex;flex-direction:column;align-items:center;text-align:center;padding:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:280px;animation:_doneIn .65s cubic-bezier(.16,1,.3,1) both}
      .nuda-done__check{position:relative;width:54px;height:54px;border-radius:50%;background:rgba(110,231,183,.1);color:#6ee7b7;display:flex;align-items:center;justify-content:center;margin-bottom:14px;animation:_donePop .65s cubic-bezier(.16,1,.3,1) .15s both}
      .nuda-done__check svg{width:26px;height:26px}
      .nuda-done__path{stroke-dasharray:30;stroke-dashoffset:30;animation:_doneDraw .55s ease forwards .55s}
      .nuda-done__ring{position:absolute;inset:0;border-radius:50%;border:2px solid #6ee7b7;opacity:.6;animation:_doneRing 1.4s ease-out .4s 1 both}
      .nuda-done__title{color:#fafafa;font-size:15px;font-weight:600;margin-bottom:3px}
      .nuda-done__sub{color:#a0a0a8;font-size:11px}
      @keyframes _doneIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
      @keyframes _donePop{from{transform:scale(0)}to{transform:scale(1)}}
      @keyframes _doneDraw{to{stroke-dashoffset:0}}
      @keyframes _doneRing{0%{transform:scale(.8);opacity:.7}100%{transform:scale(1.6);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-done,.nuda-done__check,.nuda-done__ring{animation:none}.nuda-done__path{stroke-dashoffset:0;animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-done">
  <div class="nuda-done__check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path class="nuda-done__path" d="M5 13l4 4L19 7" />
    </svg>
    <span class="nuda-done__ring"></span>
  </div>
  <div class="nuda-done__title">All set!</div>
  <div class="nuda-done__sub">Your workspace is ready</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-done__check {
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(110, 231, 183, 0.1);
  color: #6ee7b7;
  animation: nuda-done-pop 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.nuda-done__path {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: nuda-done-draw 0.55s ease forwards 0.55s;
}

.nuda-done__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #6ee7b7;
  opacity: 0.6;
  animation: nuda-done-ring 1.4s ease-out 0.4s 1 both;
}

@keyframes nuda-done-ring {
  0%   { transform: scale(0.8); opacity: 0.7; }
  100% { transform: scale(1.6); opacity: 0;   }
}`,
      },
    ],
  },

  /* ─────────────── 10. Step Pill Indicator ─────────────── */
  {
    id: "step-pill",
    name: "Step Pill Indicator",
    category: "Steppers & Wizards",
    preview: (
      <div className="nuda-steppill">
        <span className="nuda-steppill__num">2</span>
        <span className="nuda-steppill__sep">/</span>
        <span className="nuda-steppill__total">5</span>
        <span className="nuda-steppill__label">Workspace</span>
      </div>
    ),
    cssInline: `
      .nuda-steppill{display:inline-flex;align-items:center;gap:6px;padding:6px 14px 6px 8px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.2);border-radius:99px;color:#a0a0a8;font-size:11px;font-variant-numeric:tabular-nums}
      .nuda-steppill__num{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#e4ff54;color:#09090b;border-radius:50%;font-size:11px;font-weight:700;animation:_stepPillBeat 1.6s ease-in-out infinite}
      .nuda-steppill__sep{color:#63636e}
      .nuda-steppill__total{color:#63636e}
      .nuda-steppill__label{color:#fafafa;font-weight:500;margin-left:4px}
      @keyframes _stepPillBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.08);box-shadow:0 0 0 3px rgba(228,255,84,.25)}}
      @media(prefers-reduced-motion:reduce){.nuda-steppill__num{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-steppill">
  <span class="nuda-steppill__num">2</span>
  <span class="nuda-steppill__sep">/</span>
  <span class="nuda-steppill__total">5</span>
  <span class="nuda-steppill__label">Workspace</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-steppill__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: #e4ff54;
  color: #09090b;
  border-radius: 50%;
  font-weight: 700;
  animation: nuda-step-pill-beat 1.6s ease-in-out infinite;
}

@keyframes nuda-step-pill-beat {
  0%, 100% { transform: scale(1); }
  50%      {
    transform: scale(1.08);
    box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.25);
  }
}`,
      },
    ],
  },
];
