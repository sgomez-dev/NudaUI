import type { NudaComponent } from "./types";

export const auth: NudaComponent[] = [
  /* ─────────────── 1. Sign-in Card ─────────────── */
  {
    id: "signin-card",
    name: "Sign-in Card",
    category: "Login & Auth",
    preview: (
      <form className="nuda-signin" onSubmit={(e) => e.preventDefault()}>
        <div className="nuda-signin__title">Welcome back</div>
        <div className="nuda-signin__sub">Sign in to continue</div>
        <label className="nuda-signin__field">
          <input type="email" required placeholder=" " />
          <span>Email</span>
        </label>
        <label className="nuda-signin__field">
          <input type="password" required placeholder=" " />
          <span>Password</span>
        </label>
        <button className="nuda-signin__cta" type="submit">Sign in</button>
      </form>
    ),
    cssInline: `
      .nuda-signin{display:flex;flex-direction:column;gap:12px;padding:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;width:100%;max-width:320px;animation:_signinIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-signin__title{color:#fafafa;font-size:18px;font-weight:600;letter-spacing:-.01em}
      .nuda-signin__sub{color:#a0a0a8;font-size:12px;margin-bottom:6px}
      .nuda-signin__field{position:relative;display:block}
      .nuda-signin__field input{width:100%;padding:14px 12px 8px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#fafafa;font-size:13px;outline:none;transition:border-color .2s,box-shadow .25s}
      .nuda-signin__field span{position:absolute;left:12px;top:13px;font-size:13px;color:#63636e;pointer-events:none;transition:transform .25s cubic-bezier(.16,1,.3,1),color .2s,font-size .25s}
      .nuda-signin__field input:focus,.nuda-signin__field input:not(:placeholder-shown){border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-signin__field input:focus + span,.nuda-signin__field input:not(:placeholder-shown) + span{transform:translateY(-9px);font-size:10px;color:#e4ff54}
      .nuda-signin__cta{margin-top:6px;padding:10px;background:#e4ff54;color:#09090b;border:0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:transform .15s,filter .2s}
      .nuda-signin__cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
      @keyframes _signinIn{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-signin{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<form class="nuda-signin">
  <div class="nuda-signin__title">Welcome back</div>
  <div class="nuda-signin__sub">Sign in to continue</div>
  <label class="nuda-signin__field">
    <input type="email" required placeholder=" " />
    <span>Email</span>
  </label>
  <label class="nuda-signin__field">
    <input type="password" required placeholder=" " />
    <span>Password</span>
  </label>
  <button class="nuda-signin__cta" type="submit">Sign in</button>
</form>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sign-in Card with float-label fields */
.nuda-signin {
  --accent: #e4ff54;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  animation: nuda-signin-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-signin__field { position: relative; }

.nuda-signin__field input {
  width: 100%;
  padding: 14px 12px 8px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #fafafa;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.25s;
}

.nuda-signin__field span {
  position: absolute;
  left: 12px;
  top: 13px;
  font-size: 13px;
  color: #63636e;
  pointer-events: none;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s, font-size 0.25s;
}

.nuda-signin__field input:focus,
.nuda-signin__field input:not(:placeholder-shown) {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.12);
}

.nuda-signin__field input:focus + span,
.nuda-signin__field input:not(:placeholder-shown) + span {
  transform: translateY(-9px);
  font-size: 10px;
  color: var(--accent);
}

@keyframes nuda-signin-in {
  from { opacity: 0; transform: translateY(14px) scale(0.98); }
  to   { opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. OAuth Buttons ─────────────── */
  {
    id: "oauth-buttons",
    name: "OAuth Buttons",
    category: "Login & Auth",
    preview: (
      <div className="nuda-oauth">
        <button className="nuda-oauth__btn nuda-oauth__btn--google">
          <svg viewBox="0 0 48 48"><path fill="#fbbc05" d="M9.8 24c0-1.5.3-2.9.7-4.3l-7.7-5.9C1.4 17.1 0 20.4 0 24s1.4 6.9 2.8 10.2l7.7-5.9c-.4-1.4-.7-2.8-.7-4.3z"/><path fill="#ea4335" d="M24 9.5c4.2 0 8 1.5 11 4l6.7-6.7C37.6 2.4 31.2 0 24 0 14.6 0 6.6 5.4 2.8 13.2l7.7 5.9C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#34a853" d="M24 38.5c-6.3 0-11.6-4.1-13.5-9.6L2.8 34.8C6.6 42.6 14.6 48 24 48c7.2 0 13.6-2.4 18.4-6.5L34.8 35c-2.7 1.7-6.1 2.7-10.8 2.7z"/><path fill="#4285f4" d="M48 24c0-1.6-.1-3.2-.4-4.8H24v9.6h13.5c-.6 3-2.4 5.6-5 7.2L42.4 41c4.6-4.2 5.6-10.4 5.6-17z"/></svg>
          Continue with Google
        </button>
        <button className="nuda-oauth__btn nuda-oauth__btn--gh">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.05.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 0z"/></svg>
          Continue with GitHub
        </button>
      </div>
    ),
    cssInline: `
      .nuda-oauth{display:flex;flex-direction:column;gap:8px;width:100%;max-width:280px}
      .nuda-oauth__btn{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#fafafa;font-size:13px;font-weight:500;cursor:pointer;transition:background .2s,border-color .2s,transform .15s}
      .nuda-oauth__btn svg{width:16px;height:16px;flex-shrink:0;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-oauth__btn:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.16);transform:translateY(-1px)}
      .nuda-oauth__btn:hover svg{transform:rotate(-12deg) scale(1.12)}
      .nuda-oauth__btn::after{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.08) 50%,transparent 70%);transform:translateX(-100%);transition:transform .6s}
      .nuda-oauth__btn:hover::after{transform:translateX(100%)}
      .nuda-oauth__btn--gh svg{color:#fafafa}
      @media(prefers-reduced-motion:reduce){.nuda-oauth__btn:hover svg{transform:none}.nuda-oauth__btn::after{display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-oauth">
  <button class="nuda-oauth__btn nuda-oauth__btn--google">
    <svg viewBox="0 0 48 48"><!-- Google logo paths --></svg>
    Continue with Google
  </button>
  <button class="nuda-oauth__btn nuda-oauth__btn--gh">
    <svg viewBox="0 0 24 24" fill="currentColor"><!-- GitHub mark --></svg>
    Continue with GitHub
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-oauth__btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #fafafa;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}

.nuda-oauth__btn svg {
  width: 16px;
  height: 16px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-oauth__btn:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-1px);
}

.nuda-oauth__btn:hover svg {
  transform: rotate(-12deg) scale(1.12);
}

/* Sweep highlight */
.nuda-oauth__btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.nuda-oauth__btn:hover::after { transform: translateX(100%); }`,
      },
    ],
  },

  /* ─────────────── 3. OTP Code Input ─────────────── */
  {
    id: "otp-auth-input",
    name: "OTP Code Input",
    category: "Login & Auth",
    preview: (
      <div className="nuda-otp">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            className={`nuda-otp__cell${i < 3 ? " is-filled" : ""}`}
            value={i < 3 ? String(i + 1) : ""}
            readOnly
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-otp{display:flex;gap:8px}
      .nuda-otp__cell{width:36px;height:46px;border:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.3);border-radius:10px;color:#fafafa;text-align:center;font-size:18px;font-weight:600;outline:none;transition:border-color .2s,box-shadow .25s,transform .2s,background .25s}
      .nuda-otp__cell:focus{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15);transform:translateY(-2px)}
      .nuda-otp__cell.is-filled{border-color:#e4ff54;background:rgba(228,255,84,.06);color:#e4ff54;animation:_otpPop .4s cubic-bezier(.16,1,.3,1)}
      @keyframes _otpPop{0%{transform:scale(.85)}60%{transform:scale(1.08)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-otp__cell.is-filled{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-otp">
  <input class="nuda-otp__cell" maxlength="1" inputmode="numeric" />
  <input class="nuda-otp__cell" maxlength="1" inputmode="numeric" />
  <input class="nuda-otp__cell" maxlength="1" inputmode="numeric" />
  <input class="nuda-otp__cell" maxlength="1" inputmode="numeric" />
  <input class="nuda-otp__cell" maxlength="1" inputmode="numeric" />
  <input class="nuda-otp__cell" maxlength="1" inputmode="numeric" />
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Auto-advance + paste support for the OTP cells
const cells = document.querySelectorAll('.nuda-otp__cell');

cells.forEach((cell, i) => {
  cell.addEventListener('input', (e) => {
    if (e.target.value.length === 1) {
      cell.classList.add('is-filled');
      cells[i + 1]?.focus();
    } else {
      cell.classList.remove('is-filled');
    }
  });
  cell.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !cell.value) cells[i - 1]?.focus();
  });
});

cells[0].addEventListener('paste', (e) => {
  const text = (e.clipboardData?.getData('text') ?? '').slice(0, cells.length);
  e.preventDefault();
  [...text].forEach((char, i) => {
    if (cells[i]) {
      cells[i].value = char;
      cells[i].classList.add('is-filled');
    }
  });
  cells[Math.min(text.length, cells.length - 1)]?.focus();
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-otp { display: flex; gap: 8px; }

.nuda-otp__cell {
  width: 40px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: #fafafa;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.25s, transform 0.2s, background 0.25s;
}

.nuda-otp__cell:focus {
  border-color: #e4ff54;
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.15);
  transform: translateY(-2px);
}

.nuda-otp__cell.is-filled {
  border-color: #e4ff54;
  background: rgba(228, 255, 84, 0.06);
  color: #e4ff54;
  animation: nuda-otp-pop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes nuda-otp-pop {
  0%   { transform: scale(0.85); }
  60%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}`,
      },
    ],
  },

  /* ─────────────── 4. Password Reveal ─────────────── */
  {
    id: "password-reveal",
    name: "Password Reveal",
    category: "Login & Auth",
    preview: (
      <label className="nuda-pwreveal">
        <input type="text" defaultValue="hunter2" readOnly />
        <button type="button" className="nuda-pwreveal__btn is-active" aria-label="Toggle visibility">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="nuda-pwreveal__eye" d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" />
            <circle className="nuda-pwreveal__pupil" cx="12" cy="12" r="3" />
            <path className="nuda-pwreveal__slash" d="M3 3l18 18" />
          </svg>
        </button>
      </label>
    ),
    cssInline: `
      .nuda-pwreveal{position:relative;display:flex;align-items:center;width:100%;max-width:280px}
      .nuda-pwreveal input{width:100%;padding:10px 38px 10px 12px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#fafafa;font-size:13px;outline:none;letter-spacing:.04em;transition:border-color .2s,box-shadow .25s}
      .nuda-pwreveal input:focus{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-pwreveal__btn{position:absolute;right:6px;top:50%;transform:translateY(-50%);background:transparent;border:0;color:#a0a0a8;cursor:pointer;padding:6px;border-radius:6px;transition:color .2s,background .2s}
      .nuda-pwreveal__btn:hover{color:#fafafa;background:rgba(255,255,255,.06)}
      .nuda-pwreveal__btn svg{width:16px;height:16px;overflow:visible}
      .nuda-pwreveal__slash{stroke-dasharray:30;stroke-dashoffset:30;transition:stroke-dashoffset .35s ease}
      .nuda-pwreveal__pupil,.nuda-pwreveal__eye{transition:transform .25s,opacity .25s}
      .nuda-pwreveal__btn.is-active .nuda-pwreveal__slash{stroke-dashoffset:0}
      .nuda-pwreveal__btn.is-active .nuda-pwreveal__pupil{transform:scale(0);transform-origin:12px 12px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<label class="nuda-pwreveal">
  <input type="password" />
  <button type="button" class="nuda-pwreveal__btn" aria-label="Toggle visibility">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path class="nuda-pwreveal__eye"
            d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" />
      <circle class="nuda-pwreveal__pupil" cx="12" cy="12" r="3" />
      <path class="nuda-pwreveal__slash" d="M3 3l18 18" />
    </svg>
  </button>
</label>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const wrap = document.querySelector('.nuda-pwreveal');
const input = wrap.querySelector('input');
const btn = wrap.querySelector('.nuda-pwreveal__btn');

btn.addEventListener('click', () => {
  const reveal = input.type === 'password';
  input.type = reveal ? 'text' : 'password';
  btn.classList.toggle('is-active', reveal);
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-pwreveal { position: relative; display: flex; align-items: center; }

.nuda-pwreveal input {
  width: 100%;
  padding: 10px 38px 10px 12px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #fafafa;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.25s;
}

.nuda-pwreveal__btn {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  color: #a0a0a8;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
}

.nuda-pwreveal__slash {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  transition: stroke-dashoffset 0.35s ease;
}

.nuda-pwreveal__pupil {
  transition: transform 0.25s;
  transform-origin: 12px 12px;
}

.nuda-pwreveal__btn.is-active .nuda-pwreveal__slash {
  stroke-dashoffset: 0;
}

.nuda-pwreveal__btn.is-active .nuda-pwreveal__pupil {
  transform: scale(0);
}`,
      },
    ],
  },

  /* ─────────────── 5. Magic Link ─────────────── */
  {
    id: "magic-link",
    name: "Magic Link",
    category: "Login & Auth",
    preview: (
      <div className="nuda-magic" role="status">
        <div className="nuda-magic__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7l8 6 8-6" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
          </svg>
          <span className="nuda-magic__sparkle nuda-magic__sparkle--1" />
          <span className="nuda-magic__sparkle nuda-magic__sparkle--2" />
          <span className="nuda-magic__sparkle nuda-magic__sparkle--3" />
        </div>
        <div className="nuda-magic__body">
          <h4>Check your inbox</h4>
          <p>We sent a magic link to you@nudaui.dev</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-magic{display:flex;align-items:center;gap:14px;padding:18px;background:rgba(228,255,84,.04);border:1px solid rgba(228,255,84,.18);border-radius:14px;width:100%;max-width:320px;animation:_magicIn .65s cubic-bezier(.16,1,.3,1) both}
      .nuda-magic__icon{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:10px;background:rgba(228,255,84,.1);color:#e4ff54;flex-shrink:0;animation:_magicPulse 2.2s ease-in-out infinite}
      .nuda-magic__icon svg{width:20px;height:20px}
      .nuda-magic__sparkle{position:absolute;width:5px;height:5px;background:#e4ff54;border-radius:50%;box-shadow:0 0 8px #e4ff54;animation:_magicSparkle 2.4s ease-in-out infinite}
      .nuda-magic__sparkle--1{top:-2px;right:-2px;animation-delay:0s}
      .nuda-magic__sparkle--2{bottom:0;left:-3px;animation-delay:.6s;width:3px;height:3px}
      .nuda-magic__sparkle--3{top:50%;right:-6px;animation-delay:1.2s;width:4px;height:4px}
      .nuda-magic__body h4{margin:0 0 2px;color:#fafafa;font-size:14px;font-weight:600}
      .nuda-magic__body p{margin:0;color:#a0a0a8;font-size:12px}
      @keyframes _magicIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @keyframes _magicPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
      @keyframes _magicSparkle{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1.2)}}
      @media(prefers-reduced-motion:reduce){.nuda-magic,.nuda-magic__icon,.nuda-magic__sparkle{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-magic" role="status">
  <div class="nuda-magic__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 7l8 6 8-6" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
    <span class="nuda-magic__sparkle nuda-magic__sparkle--1"></span>
    <span class="nuda-magic__sparkle nuda-magic__sparkle--2"></span>
    <span class="nuda-magic__sparkle nuda-magic__sparkle--3"></span>
  </div>
  <div class="nuda-magic__body">
    <h4>Check your inbox</h4>
    <p>We sent a magic link to you@nudaui.dev</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-magic {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: rgba(228, 255, 84, 0.04);
  border: 1px solid rgba(228, 255, 84, 0.18);
  border-radius: 14px;
  animation: nuda-magic-in 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-magic__icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(228, 255, 84, 0.1);
  color: #e4ff54;
  animation: nuda-magic-pulse 2.2s ease-in-out infinite;
}

.nuda-magic__sparkle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #e4ff54;
  border-radius: 50%;
  box-shadow: 0 0 8px #e4ff54;
  animation: nuda-magic-sparkle 2.4s ease-in-out infinite;
}

.nuda-magic__sparkle--1 { top: -2px; right: -2px; }
.nuda-magic__sparkle--2 { bottom: 0; left: -3px; animation-delay: 0.6s; }
.nuda-magic__sparkle--3 { top: 50%; right: -6px; animation-delay: 1.2s; }

@keyframes nuda-magic-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}

@keyframes nuda-magic-pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
}

@keyframes nuda-magic-sparkle {
  0%, 100% { opacity: 0; transform: scale(0.4); }
  50%      { opacity: 1; transform: scale(1.2); }
}`,
      },
    ],
  },

  /* ─────────────── 6. Password Strength Meter ─────────────── */
  {
    id: "auth-strength",
    name: "Password Strength Meter",
    category: "Login & Auth",
    preview: (
      <div className="nuda-strength is-good">
        <input type="password" defaultValue="superSecret9!" />
        <div className="nuda-strength__bar">
          <span style={{ width: "75%" }} />
        </div>
        <div className="nuda-strength__label">Strong</div>
      </div>
    ),
    cssInline: `
      .nuda-strength{display:flex;flex-direction:column;gap:8px;width:100%;max-width:280px}
      .nuda-strength input{padding:10px 12px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#fafafa;font-size:13px;outline:none;letter-spacing:.04em;transition:border-color .2s,box-shadow .25s}
      .nuda-strength input:focus{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-strength__bar{position:relative;height:4px;background:rgba(255,255,255,.06);border-radius:99px;overflow:hidden}
      .nuda-strength__bar span{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7);background-size:300% 100%;animation:_strBg 4s linear infinite;border-radius:99px;transition:width .5s cubic-bezier(.16,1,.3,1)}
      .nuda-strength__label{font-size:11px;color:#a0a0a8;font-weight:500;text-align:right}
      .nuda-strength.is-weak .nuda-strength__label{color:#ff5e7a}
      .nuda-strength.is-medium .nuda-strength__label{color:#ffb45e}
      .nuda-strength.is-good .nuda-strength__label{color:#6ee7b7}
      @keyframes _strBg{to{background-position:300% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-strength__bar span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-strength is-good">
  <input type="password" />
  <div class="nuda-strength__bar"><span style="width:75%"></span></div>
  <div class="nuda-strength__label">Strong</div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root  = document.querySelector('.nuda-strength');
const input = root.querySelector('input');
const bar   = root.querySelector('.nuda-strength__bar span');
const label = root.querySelector('.nuda-strength__label');

input.addEventListener('input', () => {
  const v = input.value;
  let score = 0;
  if (v.length > 6) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/\\d/.test(v)) score++;
  if (/[^\\w\\s]/.test(v)) score++;

  const states = [
    { w: 10,  cls: 'is-weak',   text: 'Too weak' },
    { w: 35,  cls: 'is-weak',   text: 'Weak' },
    { w: 60,  cls: 'is-medium', text: 'Okay' },
    { w: 75,  cls: 'is-good',   text: 'Strong' },
    { w: 100, cls: 'is-good',   text: 'Excellent' },
  ];

  const s = states[score];
  bar.style.width = s.w + '%';
  label.textContent = s.text;
  root.classList.remove('is-weak', 'is-medium', 'is-good');
  root.classList.add(s.cls);
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-strength__bar {
  position: relative;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  overflow: hidden;
}

.nuda-strength__bar span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #ff5e7a, #ffb45e, #e4ff54, #6ee7b7);
  background-size: 300% 100%;
  animation: nuda-str-bg 4s linear infinite;
  border-radius: 99px;
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes nuda-str-bg { to { background-position: 300% 0; } }`,
      },
    ],
  },

  /* ─────────────── 7. Auth Tabs (Sign in / Sign up) ─────────────── */
  {
    id: "auth-tabs",
    name: "Sign in / Sign up Tabs",
    category: "Login & Auth",
    preview: (
      <div className="nuda-authtabs is-signin">
        <div className="nuda-authtabs__head">
          <button className="is-active">Sign in</button>
          <button>Sign up</button>
          <span className="nuda-authtabs__pill" />
        </div>
        <div className="nuda-authtabs__body">
          <div>Email and password to log in</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-authtabs{padding:6px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:280px}
      .nuda-authtabs__head{position:relative;display:grid;grid-template-columns:1fr 1fr;background:rgba(0,0,0,.3);border-radius:10px;padding:4px}
      .nuda-authtabs__head button{position:relative;z-index:1;background:transparent;border:0;padding:8px 10px;color:#a0a0a8;font-size:12px;font-weight:500;cursor:pointer;border-radius:7px;transition:color .25s}
      .nuda-authtabs__head button.is-active{color:#09090b}
      .nuda-authtabs__pill{position:absolute;left:4px;top:4px;width:calc(50% - 4px);height:calc(100% - 8px);background:#e4ff54;border-radius:7px;transition:transform .35s cubic-bezier(.16,1,.3,1);box-shadow:0 4px 12px -4px rgba(228,255,84,.5)}
      .nuda-authtabs.is-signup .nuda-authtabs__pill{transform:translateX(100%)}
      .nuda-authtabs__body{padding:14px 6px 6px;color:#a0a0a8;font-size:12px}
      .nuda-authtabs__body div{animation:_tabFade .35s ease both}
      @keyframes _tabFade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-authtabs is-signin">
  <div class="nuda-authtabs__head">
    <button class="is-active">Sign in</button>
    <button>Sign up</button>
    <span class="nuda-authtabs__pill"></span>
  </div>
  <div class="nuda-authtabs__body">
    <div>Email and password to log in</div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root = document.querySelector('.nuda-authtabs');
const tabs = root.querySelectorAll('.nuda-authtabs__head button');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    root.classList.toggle('is-signup', i === 1);
    root.classList.toggle('is-signin', i === 0);
  });
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-authtabs__head {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 4px;
}

.nuda-authtabs__head button {
  position: relative;
  z-index: 1;
  background: transparent;
  border: 0;
  padding: 8px 10px;
  color: #a0a0a8;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.25s;
}

.nuda-authtabs__head button.is-active {
  color: #09090b;
}

.nuda-authtabs__pill {
  position: absolute;
  left: 4px;
  top: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: #e4ff54;
  border-radius: 7px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-authtabs.is-signup .nuda-authtabs__pill {
  transform: translateX(100%);
}`,
      },
    ],
  },

  /* ─────────────── 8. Biometric Prompt ─────────────── */
  {
    id: "biometric-prompt",
    name: "Biometric Prompt",
    category: "Login & Auth",
    preview: (
      <div className="nuda-biometric">
        <div className="nuda-biometric__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12c0-3.5 3.5-7 7-7s7 3.5 7 7" />
            <path d="M5 12v3" />
            <path d="M9 8c1-1 2-1 3-1s2 0 3 1" />
            <path d="M8 14v2" />
            <path d="M12 9v6" />
            <path d="M16 14v2" />
            <path d="M9 19c1 .5 2 1 3 1s2-.5 3-1" />
          </svg>
          <span className="nuda-biometric__ring" />
        </div>
        <div className="nuda-biometric__label">Touch sensor to sign in</div>
      </div>
    ),
    cssInline: `
      .nuda-biometric{display:flex;flex-direction:column;align-items:center;gap:14px;padding:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;width:100%;max-width:240px}
      .nuda-biometric__icon{position:relative;width:64px;height:64px;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.06);border-radius:50%;color:#e4ff54}
      .nuda-biometric__icon svg{width:32px;height:32px;animation:_bioFlick 2.4s ease-in-out infinite}
      .nuda-biometric__ring{position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(228,255,84,.4);animation:_bioRing 2.4s ease-out infinite}
      .nuda-biometric__label{font-size:12px;color:#a0a0a8;font-weight:500;text-align:center}
      @keyframes _bioFlick{0%,100%{filter:drop-shadow(0 0 0 transparent)}50%{filter:drop-shadow(0 0 8px #e4ff54)}}
      @keyframes _bioRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.6);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-biometric__icon svg,.nuda-biometric__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-biometric">
  <div class="nuda-biometric__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12c0-3.5 3.5-7 7-7s7 3.5 7 7" />
      <path d="M5 12v3" />
      <path d="M9 8c1-1 2-1 3-1s2 0 3 1" />
      <path d="M8 14v2" />
      <path d="M12 9v6" />
      <path d="M16 14v2" />
      <path d="M9 19c1 .5 2 1 3 1s2-.5 3-1" />
    </svg>
    <span class="nuda-biometric__ring"></span>
  </div>
  <div class="nuda-biometric__label">Touch sensor to sign in</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-biometric__icon {
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(228, 255, 84, 0.06);
  border-radius: 50%;
  color: #e4ff54;
}

.nuda-biometric__icon svg {
  width: 32px;
  height: 32px;
  animation: nuda-bio-flick 2.4s ease-in-out infinite;
}

.nuda-biometric__ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(228, 255, 84, 0.4);
  animation: nuda-bio-ring 2.4s ease-out infinite;
}

@keyframes nuda-bio-flick {
  0%, 100% { filter: drop-shadow(0 0 0 transparent); }
  50%      { filter: drop-shadow(0 0 8px #e4ff54); }
}

@keyframes nuda-bio-ring {
  0%   { transform: scale(1);   opacity: 0.7; }
  100% { transform: scale(1.6); opacity: 0;   }
}`,
      },
    ],
  },

  /* ─────────────── 9. Verify Email Inline ─────────────── */
  {
    id: "verify-email",
    name: "Verify Email",
    category: "Login & Auth",
    preview: (
      <div className="nuda-verify is-success">
        <div className="nuda-verify__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path className="nuda-verify__check" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="nuda-verify__body">
          <div className="nuda-verify__title">Email verified</div>
          <div className="nuda-verify__sub">you@nudaui.dev is good to go</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-verify{display:flex;align-items:center;gap:12px;padding:14px 16px;background:rgba(110,231,183,.06);border:1px solid rgba(110,231,183,.2);border-radius:12px;width:100%;max-width:300px;animation:_verifyIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-verify__icon{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:rgba(110,231,183,.18);color:#6ee7b7;flex-shrink:0;animation:_verifyPop .6s cubic-bezier(.16,1,.3,1) .2s both}
      .nuda-verify__icon svg{width:18px;height:18px}
      .nuda-verify__check{stroke-dasharray:30;stroke-dashoffset:30;animation:_verifyDraw .55s ease forwards .55s}
      .nuda-verify__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-verify__sub{color:#a0a0a8;font-size:11px;margin-top:1px}
      @keyframes _verifyIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
      @keyframes _verifyPop{from{transform:scale(0)}to{transform:scale(1)}}
      @keyframes _verifyDraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-verify,.nuda-verify__icon{animation:none}.nuda-verify__check{stroke-dashoffset:0;animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-verify is-success">
  <div class="nuda-verify__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path class="nuda-verify__check" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div class="nuda-verify__body">
    <div class="nuda-verify__title">Email verified</div>
    <div class="nuda-verify__sub">you@nudaui.dev is good to go</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-verify {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(110, 231, 183, 0.06);
  border: 1px solid rgba(110, 231, 183, 0.2);
  border-radius: 12px;
  animation: nuda-verify-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-verify__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(110, 231, 183, 0.18);
  color: #6ee7b7;
  animation: nuda-verify-pop 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.nuda-verify__check {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: nuda-verify-draw 0.55s ease forwards 0.55s;
}

@keyframes nuda-verify-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}

@keyframes nuda-verify-pop {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}

@keyframes nuda-verify-draw {
  to { stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Auth Loading Spinner ─────────────── */
  {
    id: "auth-loading-button",
    name: "Auth Loading Button",
    category: "Login & Auth",
    preview: (
      <button className="nuda-authload is-loading" type="button">
        <span className="nuda-authload__text">Sign in</span>
        <span className="nuda-authload__spinner" />
      </button>
    ),
    cssInline: `
      .nuda-authload{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:10px 22px;min-width:160px;background:#e4ff54;color:#09090b;border:0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;overflow:hidden;transition:background .3s,padding .3s}
      .nuda-authload__text{transition:opacity .25s,transform .35s}
      .nuda-authload__spinner{position:absolute;width:14px;height:14px;border-radius:50%;border:2px solid rgba(9,9,11,.25);border-top-color:#09090b;opacity:0;transform:scale(.6);transition:opacity .25s,transform .35s;animation:_authSpin .9s linear infinite}
      .nuda-authload.is-loading{background:#b8cc43;cursor:progress}
      .nuda-authload.is-loading .nuda-authload__text{opacity:0;transform:translateX(8px)}
      .nuda-authload.is-loading .nuda-authload__spinner{opacity:1;transform:scale(1)}
      .nuda-authload.is-success{background:#6ee7b7}
      .nuda-authload.is-success .nuda-authload__spinner{display:none}
      @keyframes _authSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-authload__spinner{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-authload" type="button">
  <span class="nuda-authload__text">Sign in</span>
  <span class="nuda-authload__spinner"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const btn = document.querySelector('.nuda-authload');

btn.addEventListener('click', () => {
  btn.classList.add('is-loading');
  setTimeout(() => {
    btn.classList.remove('is-loading');
    btn.classList.add('is-success');
    btn.querySelector('.nuda-authload__text').textContent = 'Signed in';
  }, 1600);
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-authload {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  min-width: 160px;
  background: #e4ff54;
  color: #09090b;
  border: 0;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}

.nuda-authload__text {
  transition: opacity 0.25s, transform 0.35s;
}

.nuda-authload__spinner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(9, 9, 11, 0.25);
  border-top-color: #09090b;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.25s, transform 0.35s;
  animation: nuda-auth-spin 0.9s linear infinite;
}

.nuda-authload.is-loading { background: #b8cc43; cursor: progress; }
.nuda-authload.is-loading .nuda-authload__text { opacity: 0; transform: translateX(8px); }
.nuda-authload.is-loading .nuda-authload__spinner { opacity: 1; transform: scale(1); }

.nuda-authload.is-success { background: #6ee7b7; }
.nuda-authload.is-success .nuda-authload__spinner { display: none; }

@keyframes nuda-auth-spin { to { transform: rotate(360deg); } }`,
      },
    ],
  },
];
