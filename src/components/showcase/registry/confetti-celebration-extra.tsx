import type { NudaComponent } from "./types";

const CAT = "Confetti & Celebration";

export const confettiCelebrationExtra: NudaComponent[] = [
  /* ─────────────── 1. Streamer Unfurl ─────────────── */
  {
    id: "cc2-streamer-unfurl",
    name: "Streamer Unfurl",
    category: CAT,
    preview: (
      <div className="nuda-cc2-streamer-unfurl" role="img" aria-label="Streamer ribbons unfurling from above">
        {[
          { l: 8, c: "#e4ff54", d: "0s" },
          { l: 22, c: "#ff5db1", d: ".3s" },
          { l: 38, c: "#5dd0ff", d: ".6s" },
          { l: 54, c: "#fafafa", d: ".9s" },
          { l: 70, c: "#e4ff54", d: "1.2s" },
          { l: 86, c: "#ff5db1", d: "1.5s" },
        ].map((s, i) => (
          <span
            key={i}
            className="nuda-cc2-streamer-unfurl__strip"
            aria-hidden="true"
            style={{ left: `${s.l}%`, ["--c" as string]: s.c, ["--d" as string]: s.d }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cc2-streamer-unfurl{position:relative;width:200px;height:140px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-cc2-streamer-unfurl__strip{position:absolute;top:0;width:8px;height:76px;border-radius:0 0 4px 4px;background:var(--c);transform-origin:top center;opacity:0;will-change:transform,opacity;animation:_nuda-cc2streamerunfurl 4.5s ease-in-out var(--d) infinite}
      @keyframes _nuda-cc2streamerunfurl{0%{opacity:0;transform:scaleY(.05) rotate(0deg)}10%{opacity:1}24%{transform:scaleY(1.08) rotate(5deg)}34%{transform:scaleY(1) rotate(-3deg)}50%{transform:scaleY(1) rotate(2deg)}66%{transform:scaleY(1) rotate(-2deg)}84%{transform:scaleY(1) rotate(1deg);opacity:1}93%{opacity:.35;transform:scaleY(.5) rotate(0deg)}100%{opacity:0;transform:scaleY(.05) rotate(0deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-streamer-unfurl__strip{animation:none;opacity:1;transform:scaleY(1) rotate(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-streamer-unfurl" role="img" aria-label="Streamer ribbons unfurling from above">
  <span class="nuda-cc2-streamer-unfurl__strip" aria-hidden="true" style="left:8%;  --c:#e4ff54; --d:0s"></span>
  <span class="nuda-cc2-streamer-unfurl__strip" aria-hidden="true" style="left:22%; --c:#ff5db1; --d:.3s"></span>
  <span class="nuda-cc2-streamer-unfurl__strip" aria-hidden="true" style="left:38%; --c:#5dd0ff; --d:.6s"></span>
  <span class="nuda-cc2-streamer-unfurl__strip" aria-hidden="true" style="left:54%; --c:#fafafa; --d:.9s"></span>
  <span class="nuda-cc2-streamer-unfurl__strip" aria-hidden="true" style="left:70%; --c:#e4ff54; --d:1.2s"></span>
  <span class="nuda-cc2-streamer-unfurl__strip" aria-hidden="true" style="left:86%; --c:#ff5db1; --d:1.5s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Balloon Release ─────────────── */
  {
    id: "cc2-balloon-release",
    name: "Balloon Release",
    category: CAT,
    preview: (
      <div className="nuda-cc2-balloon-release" role="img" aria-label="Balloons floating upward">
        {[
          { l: 18, c: "#e4ff54", d: "0s" },
          { l: 40, c: "#ff5db1", d: "1.1s" },
          { l: 62, c: "#5dd0ff", d: "2.2s" },
          { l: 82, c: "#ffb454", d: "3.3s" },
        ].map((b, i) => (
          <span
            key={i}
            className="nuda-cc2-balloon-release__balloon"
            aria-hidden="true"
            style={{ left: `${b.l}%`, ["--c" as string]: b.c, ["--d" as string]: b.d }}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cc2-balloon-release{position:relative;width:180px;height:150px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-cc2-balloon-release__balloon{position:absolute;bottom:8px;width:22px;height:28px;border-radius:50% 50% 46% 46%/56% 56% 44% 44%;background:radial-gradient(circle at 32% 26%,#fff,var(--c) 55%,rgba(0,0,0,.35));opacity:0;will-change:transform,opacity;animation:_nuda-cc2balloonrise 5.5s ease-in-out var(--d) infinite}
      .nuda-cc2-balloon-release__balloon::before{content:"";position:absolute;left:50%;bottom:-5px;width:0;height:0;margin-left:-3px;border-left:3px solid transparent;border-right:3px solid transparent;border-top:5px solid var(--c)}
      .nuda-cc2-balloon-release__balloon::after{content:"";position:absolute;left:50%;top:100%;width:1px;height:44px;background:rgba(255,255,255,.35)}
      @keyframes _nuda-cc2balloonrise{0%{opacity:0;transform:translate(0,20px) rotate(0deg)}8%{opacity:1}30%{transform:translate(8px,-30px) rotate(4deg)}50%{transform:translate(-8px,-65px) rotate(-4deg)}70%{transform:translate(7px,-100px) rotate(3deg)}88%{opacity:1;transform:translate(-5px,-128px) rotate(-2deg)}100%{opacity:0;transform:translate(-5px,-140px) rotate(-2deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-balloon-release__balloon{animation:none;opacity:1;transform:translate(0,-50px) rotate(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-balloon-release" role="img" aria-label="Balloons floating upward">
  <span class="nuda-cc2-balloon-release__balloon" aria-hidden="true" style="left:18%; --c:#e4ff54; --d:0s"></span>
  <span class="nuda-cc2-balloon-release__balloon" aria-hidden="true" style="left:40%; --c:#ff5db1; --d:1.1s"></span>
  <span class="nuda-cc2-balloon-release__balloon" aria-hidden="true" style="left:62%; --c:#5dd0ff; --d:2.2s"></span>
  <span class="nuda-cc2-balloon-release__balloon" aria-hidden="true" style="left:82%; --c:#ffb454; --d:3.3s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Trophy Reveal ─────────────── */
  {
    id: "cc2-trophy-reveal",
    name: "Trophy Reveal",
    category: CAT,
    preview: (
      <div className="nuda-cc2-trophy-reveal" role="img" aria-label="Trophy reveal with a shine sweep">
        <svg className="nuda-cc2-trophy-reveal__trophy" viewBox="0 0 24 24" fill="#e4ff54" aria-hidden="true">
          <path d="M7 3h10v2h3v1.5c0 2.6-2 4.8-4.6 5.2A5 5 0 0 1 13 15.4V18h3v2H8v-2h3v-2.6a5 5 0 0 1-2.4-3.7C6 11.3 4 9.1 4 6.5V5h3V3zm0 4H5.2c.2 1.4 1.3 2.5 2.6 2.9-.1-.4-.2-.9-.2-1.4V7zm10 0h-1.8v1.5c0 .5-.1 1-.2 1.4C16.5 9.5 17.6 8.4 17.8 7z" />
        </svg>
        <span className="nuda-cc2-trophy-reveal__shine" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-cc2-trophy-reveal{position:relative;width:160px;height:140px;display:flex;align-items:center;justify-content:center;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-cc2-trophy-reveal__trophy{width:56px;height:56px;opacity:0;transform:scale(.4) rotate(-10deg);will-change:transform,opacity;animation:_nuda-cc2trophyreveal 4s cubic-bezier(.34,1.56,.64,1) infinite}
      .nuda-cc2-trophy-reveal__shine{position:absolute;top:0;left:0;width:36px;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:translateX(-160px) skewX(-20deg);opacity:0;will-change:transform,opacity;animation:_nuda-cc2trophyshine 4s ease-in-out infinite}
      @keyframes _nuda-cc2trophyreveal{0%{opacity:0;transform:scale(.4) rotate(-10deg)}12%{opacity:1}24%{transform:scale(1.12) rotate(4deg)}34%{transform:scale(1) rotate(0deg)}88%{transform:scale(1) rotate(0deg);opacity:1}96%{opacity:.3}100%{opacity:0;transform:scale(.4) rotate(-10deg)}}
      @keyframes _nuda-cc2trophyshine{0%,36%{transform:translateX(-160px) skewX(-20deg);opacity:0}42%{opacity:.6}58%{transform:translateX(160px) skewX(-20deg);opacity:0}100%{opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-trophy-reveal__trophy{animation:none;opacity:1;transform:scale(1) rotate(0deg)}.nuda-cc2-trophy-reveal__shine{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-trophy-reveal" role="img" aria-label="Trophy reveal with a shine sweep">
  <svg class="nuda-cc2-trophy-reveal__trophy" viewBox="0 0 24 24" fill="#e4ff54" aria-hidden="true">
    <path d="M7 3h10v2h3v1.5c0 2.6-2 4.8-4.6 5.2A5 5 0 0 1 13 15.4V18h3v2H8v-2h3v-2.6a5 5 0 0 1-2.4-3.7C6 11.3 4 9.1 4 6.5V5h3V3zm0 4H5.2c.2 1.4 1.3 2.5 2.6 2.9-.1-.4-.2-.9-.2-1.4V7zm10 0h-1.8v1.5c0 .5-.1 1-.2 1.4C16.5 9.5 17.6 8.4 17.8 7z"/>
  </svg>
  <span class="nuda-cc2-trophy-reveal__shine" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Medal Shockwave ─────────────── */
  {
    id: "cc2-medal-shockwave",
    name: "Medal Shockwave",
    category: CAT,
    preview: (
      <div className="nuda-cc2-medal-shockwave" role="img" aria-label="Medal stamping in with a shockwave ring">
        <span className="nuda-cc2-medal-shockwave__ring" aria-hidden="true" />
        <span className="nuda-cc2-medal-shockwave__medal" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="#09090b">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
          </svg>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-cc2-medal-shockwave{position:relative;width:150px;height:140px;display:flex;align-items:center;justify-content:center;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-cc2-medal-shockwave__ring{position:absolute;width:56px;height:56px;border-radius:50%;border:3px solid #e4ff54;opacity:0;transform:scale(.3);will-change:transform,opacity;animation:_nuda-cc2medalring 4s ease-out infinite}
      .nuda-cc2-medal-shockwave__medal{position:relative;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff6c4,#e4ff54 50%,#b9c93f);display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(-70px) scale(.6) rotate(-15deg);will-change:transform,opacity;animation:_nuda-cc2medaldrop 4s cubic-bezier(.34,1.56,.64,1) infinite}
      .nuda-cc2-medal-shockwave__medal svg{width:28px;height:28px}
      .nuda-cc2-medal-shockwave__medal::before,.nuda-cc2-medal-shockwave__medal::after{content:"";position:absolute;top:-14px;width:10px;height:20px;background:#ff5db1;border-radius:2px}
      .nuda-cc2-medal-shockwave__medal::before{left:8px;transform:rotate(-18deg)}
      .nuda-cc2-medal-shockwave__medal::after{right:8px;transform:rotate(18deg)}
      @keyframes _nuda-cc2medaldrop{0%{opacity:0;transform:translateY(-70px) scale(.6) rotate(-15deg)}10%{opacity:1}45%{transform:translateY(6px) scale(1.08) rotate(4deg)}58%{transform:translateY(-3px) scale(.97) rotate(-2deg)}70%{transform:translateY(0) scale(1) rotate(0deg)}90%{transform:translateY(0) scale(1) rotate(0deg);opacity:1}100%{opacity:0;transform:translateY(-70px) scale(.6) rotate(-15deg)}}
      @keyframes _nuda-cc2medalring{0%,42%{transform:scale(.3);opacity:0}48%{opacity:.65}68%{transform:scale(2.3);opacity:0}100%{opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-medal-shockwave__medal{animation:none;opacity:1;transform:translateY(0) scale(1) rotate(0deg)}.nuda-cc2-medal-shockwave__ring{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-medal-shockwave" role="img" aria-label="Medal stamping in with a shockwave ring">
  <span class="nuda-cc2-medal-shockwave__ring" aria-hidden="true"></span>
  <span class="nuda-cc2-medal-shockwave__medal" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="#09090b">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/>
    </svg>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Goal Burst ─────────────── */
  {
    id: "cc2-goal-burst",
    name: "Goal Burst",
    category: CAT,
    preview: (
      <div className="nuda-cc2-goal-burst" role="img" aria-label="Progress bar reaching its goal with a celebratory burst">
        <span className="nuda-cc2-goal-burst__caption" aria-hidden="true">Weekly Goal</span>
        <span className="nuda-cc2-goal-burst__track" aria-hidden="true">
          <span className="nuda-cc2-goal-burst__fill" />
          <span className="nuda-cc2-goal-burst__flag" aria-hidden="true">✓</span>
          {[
            { tx: -8, ty: -14 },
            { tx: 6, ty: -16 },
            { tx: 14, ty: -4 },
            { tx: 12, ty: 10 },
            { tx: -2, ty: 14 },
            { tx: -10, ty: 2 },
          ].map((s, i) => (
            <span
              key={i}
              className="nuda-cc2-goal-burst__spark"
              style={{ ["--tx" as string]: `${s.tx}px`, ["--ty" as string]: `${s.ty}px` }}
            />
          ))}
        </span>
      </div>
    ),
    cssInline: `
      .nuda-cc2-goal-burst{position:relative;width:200px;height:90px;display:flex;flex-direction:column;justify-content:center;gap:10px;padding:0 18px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
      .nuda-cc2-goal-burst__caption{font:600 11px/1 system-ui,sans-serif;color:#cfcfcf;letter-spacing:.02em}
      .nuda-cc2-goal-burst__track{position:relative;height:8px;border-radius:4px;background:rgba(255,255,255,.12);overflow:visible}
      .nuda-cc2-goal-burst__fill{position:absolute;inset:0;border-radius:4px;background:#e4ff54;transform-origin:left center;transform:scaleX(0);will-change:transform,opacity;animation:_nuda-cc2goalfill 4.5s ease-in-out infinite}
      .nuda-cc2-goal-burst__flag{position:absolute;right:-4px;top:50%;font:700 13px/1 system-ui,sans-serif;color:#e4ff54;opacity:0;transform:translate(50%,-50%) scale(.3);will-change:transform,opacity;animation:_nuda-cc2goalflag 4.5s cubic-bezier(.34,1.56,.64,1) infinite}
      .nuda-cc2-goal-burst__spark{position:absolute;right:0;top:50%;width:4px;height:4px;margin:-2px -2px 0 0;border-radius:50%;background:#e4ff54;opacity:0;will-change:transform,opacity;animation:_nuda-cc2goalspark 4.5s ease-out infinite}
      @keyframes _nuda-cc2goalfill{0%{transform:scaleX(0);opacity:1}6%{transform:scaleX(0)}55%{transform:scaleX(1)}88%{transform:scaleX(1);opacity:1}94%{opacity:0}100%{transform:scaleX(0);opacity:0}}
      @keyframes _nuda-cc2goalflag{0%,50%{opacity:0;transform:translate(50%,-50%) scale(.3)}58%{opacity:1;transform:translate(50%,-50%) scale(1.3)}66%{transform:translate(50%,-50%) scale(1)}88%{opacity:1}96%{opacity:0;transform:translate(50%,-50%) scale(.3)}100%{opacity:0}}
      @keyframes _nuda-cc2goalspark{0%,52%{opacity:0;transform:translate(0,0) scale(.3)}60%{opacity:1}78%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(1)}100%{opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-goal-burst__fill{animation:none;transform:scaleX(1);opacity:1}.nuda-cc2-goal-burst__flag{animation:none;opacity:1;transform:translate(50%,-50%) scale(1)}.nuda-cc2-goal-burst__spark{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-goal-burst" role="img" aria-label="Progress bar reaching its goal with a celebratory burst">
  <span class="nuda-cc2-goal-burst__caption" aria-hidden="true">Weekly Goal</span>
  <span class="nuda-cc2-goal-burst__track" aria-hidden="true">
    <span class="nuda-cc2-goal-burst__fill"></span>
    <span class="nuda-cc2-goal-burst__flag" aria-hidden="true">✓</span>
    <span class="nuda-cc2-goal-burst__spark" style="--tx:-8px;  --ty:-14px"></span>
    <span class="nuda-cc2-goal-burst__spark" style="--tx:6px;   --ty:-16px"></span>
    <span class="nuda-cc2-goal-burst__spark" style="--tx:14px;  --ty:-4px"></span>
    <span class="nuda-cc2-goal-burst__spark" style="--tx:12px;  --ty:10px"></span>
    <span class="nuda-cc2-goal-burst__spark" style="--tx:-2px;  --ty:14px"></span>
    <span class="nuda-cc2-goal-burst__spark" style="--tx:-10px; --ty:2px"></span>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Star Rating Pop ─────────────── */
  {
    id: "cc2-star-rating",
    name: "Star Rating Pop",
    category: CAT,
    preview: (
      <div className="nuda-cc2-star-rating" role="img" aria-label="Five-star rating popping in">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="nuda-cc2-star-rating__star"
            aria-hidden="true"
            style={{ ["--d" as string]: `${i * 0.12}s` }}
          >
            <svg viewBox="0 0 24 24" fill="#e4ff54">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
            </svg>
          </span>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cc2-star-rating{position:relative;display:flex;align-items:center;justify-content:center;gap:6px;width:180px;height:70px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px}
      .nuda-cc2-star-rating__star{width:26px;height:26px;opacity:0;transform:scale(.2) rotate(-25deg);will-change:transform,opacity;animation:_nuda-cc2starpop 3.4s cubic-bezier(.34,1.56,.64,1) var(--d) infinite}
      .nuda-cc2-star-rating__star svg{width:100%;height:100%;display:block}
      @keyframes _nuda-cc2starpop{0%{opacity:0;transform:scale(.2) rotate(-25deg)}8%{opacity:1}18%{transform:scale(1.3) rotate(8deg)}26%{transform:scale(1) rotate(0deg)}78%{transform:scale(1) rotate(0deg);opacity:1}90%{opacity:.3;transform:scale(.7) rotate(0deg)}100%{opacity:0;transform:scale(.2) rotate(-25deg)}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-star-rating__star{animation:none;opacity:1;transform:scale(1) rotate(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-star-rating" role="img" aria-label="Five-star rating popping in">
  <span class="nuda-cc2-star-rating__star" aria-hidden="true" style="--d:0s">
    <svg viewBox="0 0 24 24" fill="#e4ff54"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
  </span>
  <span class="nuda-cc2-star-rating__star" aria-hidden="true" style="--d:.12s">
    <svg viewBox="0 0 24 24" fill="#e4ff54"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
  </span>
  <span class="nuda-cc2-star-rating__star" aria-hidden="true" style="--d:.24s">
    <svg viewBox="0 0 24 24" fill="#e4ff54"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
  </span>
  <span class="nuda-cc2-star-rating__star" aria-hidden="true" style="--d:.36s">
    <svg viewBox="0 0 24 24" fill="#e4ff54"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
  </span>
  <span class="nuda-cc2-star-rating__star" aria-hidden="true" style="--d:.48s">
    <svg viewBox="0 0 24 24" fill="#e4ff54"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
  </span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Champagne Bubbles ─────────────── */
  {
    id: "cc2-champagne-bubbles",
    name: "Champagne Bubbles",
    category: CAT,
    preview: (
      <div className="nuda-cc2-champagne-bubbles" role="img" aria-label="Champagne bubbles rising in a flute">
        <span className="nuda-cc2-champagne-bubbles__bowl" aria-hidden="true">
          <span className="nuda-cc2-champagne-bubbles__liquid" aria-hidden="true">
            {[
              { l: 20, dur: "2.2s", d: "0s" },
              { l: 35, dur: "2.8s", d: ".4s" },
              { l: 50, dur: "2.4s", d: ".9s" },
              { l: 65, dur: "3.2s", d: "1.4s" },
              { l: 45, dur: "2.6s", d: "1.9s" },
              { l: 60, dur: "3s", d: "2.3s" },
            ].map((b, i) => (
              <span
                key={i}
                className="nuda-cc2-champagne-bubbles__bubble"
                aria-hidden="true"
                style={{ left: `${b.l}%`, ["--dur" as string]: b.dur, ["--d" as string]: b.d }}
              />
            ))}
          </span>
        </span>
        <span className="nuda-cc2-champagne-bubbles__stem" aria-hidden="true" />
        <span className="nuda-cc2-champagne-bubbles__base" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-cc2-champagne-bubbles{position:relative;width:120px;height:150px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding-bottom:10px;overflow:hidden}
      .nuda-cc2-champagne-bubbles__bowl{position:relative;width:64px;height:80px;clip-path:polygon(12% 0%,88% 0%,64% 100%,36% 100%);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.22);border-top:none;overflow:hidden}
      .nuda-cc2-champagne-bubbles__liquid{position:absolute;left:0;right:0;bottom:0;height:55%;background:linear-gradient(180deg,rgba(228,255,84,.55),rgba(185,201,63,.85))}
      .nuda-cc2-champagne-bubbles__bubble{position:absolute;bottom:2px;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.85);opacity:0;will-change:transform,opacity;animation:_nuda-cc2champagnerise var(--dur) linear var(--d) infinite}
      .nuda-cc2-champagne-bubbles__stem{width:6px;height:26px;background:rgba(255,255,255,.22)}
      .nuda-cc2-champagne-bubbles__base{width:38px;height:5px;border-radius:50%;background:rgba(255,255,255,.18)}
      @keyframes _nuda-cc2champagnerise{0%{opacity:0;transform:translateY(0) scale(.6)}12%{opacity:.9}85%{opacity:.7}100%{opacity:0;transform:translateY(-64px) scale(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-champagne-bubbles__bubble{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-champagne-bubbles" role="img" aria-label="Champagne bubbles rising in a flute">
  <span class="nuda-cc2-champagne-bubbles__bowl" aria-hidden="true">
    <span class="nuda-cc2-champagne-bubbles__liquid" aria-hidden="true">
      <span class="nuda-cc2-champagne-bubbles__bubble" aria-hidden="true" style="left:20%; --dur:2.2s; --d:0s"></span>
      <span class="nuda-cc2-champagne-bubbles__bubble" aria-hidden="true" style="left:35%; --dur:2.8s; --d:.4s"></span>
      <span class="nuda-cc2-champagne-bubbles__bubble" aria-hidden="true" style="left:50%; --dur:2.4s; --d:.9s"></span>
      <span class="nuda-cc2-champagne-bubbles__bubble" aria-hidden="true" style="left:65%; --dur:3.2s; --d:1.4s"></span>
      <span class="nuda-cc2-champagne-bubbles__bubble" aria-hidden="true" style="left:45%; --dur:2.6s; --d:1.9s"></span>
      <span class="nuda-cc2-champagne-bubbles__bubble" aria-hidden="true" style="left:60%; --dur:3s;   --d:2.3s"></span>
    </span>
  </span>
  <span class="nuda-cc2-champagne-bubbles__stem" aria-hidden="true"></span>
  <span class="nuda-cc2-champagne-bubbles__base" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Sparkler Fountain ─────────────── */
  {
    id: "cc2-sparkler-fountain",
    name: "Sparkler Fountain",
    category: CAT,
    preview: (
      <div className="nuda-cc2-sparkler-fountain" role="img" aria-label="Sparkler fountain of sparks">
        <span className="nuda-cc2-sparkler-fountain__stick" aria-hidden="true">
          <span className="nuda-cc2-sparkler-fountain__tip" aria-hidden="true" />
          {[
            { tx: -18, ty: -22, dur: ".8s", d: "0s" },
            { tx: 4, ty: -28, dur: "1s", d: ".15s" },
            { tx: 20, ty: -14, dur: ".7s", d: ".3s" },
            { tx: 22, ty: 6, dur: ".9s", d: ".45s" },
            { tx: -6, ty: 20, dur: "1.1s", d: ".6s" },
            { tx: -22, ty: 4, dur: ".8s", d: ".75s" },
            { tx: -10, ty: -30, dur: "1s", d: ".9s" },
            { tx: 14, ty: -34, dur: ".7s", d: "1.05s" },
            { tx: 28, ty: -4, dur: ".9s", d: "1.2s" },
            { tx: -2, ty: 26, dur: ".8s", d: "1.35s" },
          ].map((s, i) => (
            <span
              key={i}
              className="nuda-cc2-sparkler-fountain__spark"
              aria-hidden="true"
              style={{
                ["--tx" as string]: `${s.tx}px`,
                ["--ty" as string]: `${s.ty}px`,
                ["--dur" as string]: s.dur,
                ["--d" as string]: s.d,
              }}
            />
          ))}
        </span>
      </div>
    ),
    cssInline: `
      .nuda-cc2-sparkler-fountain{position:relative;width:140px;height:150px;display:flex;align-items:flex-end;justify-content:center;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden;padding-bottom:14px}
      .nuda-cc2-sparkler-fountain__stick{position:relative;width:4px;height:86px;border-radius:2px;background:linear-gradient(180deg,#d8d8d8,#8a8a8a);transform:rotate(14deg)}
      .nuda-cc2-sparkler-fountain__tip{position:absolute;top:-6px;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#fff6c4;box-shadow:0 0 10px 4px rgba(228,255,84,.8),0 0 22px 8px rgba(228,255,84,.35)}
      .nuda-cc2-sparkler-fountain__spark{position:absolute;top:-6px;left:50%;width:3px;height:3px;margin-left:-1.5px;border-radius:50%;background:#fff2a8;box-shadow:0 0 5px 1px rgba(255,220,120,.9);opacity:0;will-change:transform,opacity;animation:_nuda-cc2sparklershoot var(--dur) linear var(--d) infinite}
      @keyframes _nuda-cc2sparklershoot{0%{opacity:0;transform:translate(0,0) scale(1)}6%{opacity:1}60%{opacity:.6}100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(.3)}}
      @media (prefers-reduced-motion:reduce){.nuda-cc2-sparkler-fountain__spark{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cc2-sparkler-fountain" role="img" aria-label="Sparkler fountain of sparks">
  <span class="nuda-cc2-sparkler-fountain__stick" aria-hidden="true">
    <span class="nuda-cc2-sparkler-fountain__tip" aria-hidden="true"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:-18px; --ty:-22px; --dur:.8s; --d:0s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:4px;   --ty:-28px; --dur:1s;  --d:.15s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:20px;  --ty:-14px; --dur:.7s; --d:.3s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:22px;  --ty:6px;   --dur:.9s; --d:.45s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:-6px;  --ty:20px;  --dur:1.1s;--d:.6s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:-22px; --ty:4px;   --dur:.8s; --d:.75s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:-10px; --ty:-30px; --dur:1s;  --d:.9s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:14px;  --ty:-34px; --dur:.7s; --d:1.05s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:28px;  --ty:-4px;  --dur:.9s; --d:1.2s"></span>
    <span class="nuda-cc2-sparkler-fountain__spark" aria-hidden="true" style="--tx:-2px;  --ty:26px;  --dur:.8s; --d:1.35s"></span>
  </span>
</div>`,
      },
    ],
  },
];
