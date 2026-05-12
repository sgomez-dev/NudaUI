import type { NudaComponent } from "./types";

export const skeletonVariants: NudaComponent[] = [
  /* ─────────────── 1. Message Skeleton ─────────────── */
  {
    id: "skeleton-message",
    name: "Message Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skmsg">
        <span className="nuda-skmsg__avatar" />
        <div className="nuda-skmsg__body">
          <span style={{ width: "80%" }} />
          <span style={{ width: "60%" }} />
          <span style={{ width: "40%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-skmsg{display:flex;gap:12px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px}
      .nuda-skmsg__avatar{width:32px;height:32px;border-radius:50%;flex-shrink:0;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skmsg__body{flex:1;display:flex;flex-direction:column;gap:6px}
      .nuda-skmsg__body span{height:10px;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skmsg__body span:nth-child(2){animation-delay:.1s}
      .nuda-skmsg__body span:nth-child(3){animation-delay:.2s;height:8px}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skmsg__avatar,.nuda-skmsg__body span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skmsg">
  <span class="nuda-skmsg__avatar"></span>
  <div class="nuda-skmsg__body">
    <span style="width:80%"></span>
    <span style="width:60%"></span>
    <span style="width:40%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skmsg__body span {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.04)
  );
  background-size: 200% 100%;
  animation: nuda-sk-shim 1.6s linear infinite;
}

@keyframes nuda-sk-shim { to { background-position: -200% 0; } }`,
      },
    ],
  },

  /* ─────────────── 2. Card Skeleton ─────────────── */
  {
    id: "skeleton-card",
    name: "Card Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skcard">
        <span className="nuda-skcard__img" />
        <span className="nuda-skcard__line" style={{ width: "70%" }} />
        <span className="nuda-skcard__line" style={{ width: "50%", height: 8 }} />
      </div>
    ),
    cssInline: `
      .nuda-skcard{display:flex;flex-direction:column;gap:8px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:180px}
      .nuda-skcard__img{height:90px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skcard__line{height:10px;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;animation-delay:.1s}
      .nuda-skcard__line:nth-child(3){animation-delay:.2s}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skcard__img,.nuda-skcard__line{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skcard">
  <span class="nuda-skcard__img"></span>
  <span class="nuda-skcard__line" style="width:70%"></span>
  <span class="nuda-skcard__line" style="width:50%;height:8px"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skcard__img,
.nuda-skcard__line {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.04)
  );
  background-size: 200% 100%;
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 3. List Skeleton ─────────────── */
  {
    id: "skeleton-list",
    name: "List Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-sklist">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="nuda-sklist__row" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="nuda-sklist__dot" />
            <span className="nuda-sklist__line" style={{ width: `${70 + (i % 3) * 10}%` }} />
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-sklist{display:flex;flex-direction:column;gap:8px;padding:10px;width:100%;max-width:240px}
      .nuda-sklist__row{display:flex;align-items:center;gap:10px;animation:_sklistIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-sklist__dot{width:16px;height:16px;border-radius:4px;flex-shrink:0;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-sklist__line{flex:1;height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @keyframes _sklistIn{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-sklist__row,.nuda-sklist__dot,.nuda-sklist__line{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sklist">
  <div class="nuda-sklist__row">
    <span class="nuda-sklist__dot"></span>
    <span class="nuda-sklist__line" style="width:70%"></span>
  </div>
  <!-- More rows -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-sklist__dot,
.nuda-sklist__line {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.04)
  );
  background-size: 200% 100%;
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 4. Table Skeleton ─────────────── */
  {
    id: "skeleton-table",
    name: "Table Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-sktable">
        <div className="nuda-sktable__head">
          <span style={{ width: "30%" }} />
          <span style={{ width: "25%" }} />
          <span style={{ width: "20%" }} />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="nuda-sktable__row">
            <span style={{ width: "35%" }} />
            <span style={{ width: "20%" }} />
            <span style={{ width: "25%" }} />
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-sktable{display:flex;flex-direction:column;gap:8px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px}
      .nuda-sktable__head{display:flex;gap:14px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-sktable__head span{height:8px;border-radius:3px;background:rgba(255,255,255,.12)}
      .nuda-sktable__row{display:flex;gap:14px}
      .nuda-sktable__row span{height:10px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-sktable__row span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sktable">
  <div class="nuda-sktable__head">
    <span style="width:30%"></span>
    <span style="width:25%"></span>
    <span style="width:20%"></span>
  </div>
  <div class="nuda-sktable__row">
    <span style="width:35%"></span>
    <span style="width:20%"></span>
    <span style="width:25%"></span>
  </div>
  <!-- More rows -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-sktable__row span {
  height: 10px;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.04)
  );
  background-size: 200% 100%;
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 5. Comment Skeleton ─────────────── */
  {
    id: "skeleton-comment",
    name: "Comment Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skcomment">
        <span className="nuda-skcomment__avatar" />
        <div className="nuda-skcomment__body">
          <div className="nuda-skcomment__head">
            <span className="nuda-skcomment__name" />
            <span className="nuda-skcomment__time" />
          </div>
          <span className="nuda-skcomment__line" style={{ width: "85%" }} />
          <span className="nuda-skcomment__line" style={{ width: "60%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-skcomment{display:flex;gap:10px;padding:12px;width:100%;max-width:280px}
      .nuda-skcomment__avatar{width:30px;height:30px;border-radius:50%;flex-shrink:0;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skcomment__body{flex:1;display:flex;flex-direction:column;gap:6px}
      .nuda-skcomment__head{display:flex;gap:10px;margin-bottom:2px}
      .nuda-skcomment__name{width:80px;height:9px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skcomment__time{width:40px;height:9px;border-radius:3px;background:rgba(255,255,255,.06)}
      .nuda-skcomment__line{height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skcomment__avatar,.nuda-skcomment__name,.nuda-skcomment__line{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skcomment">
  <span class="nuda-skcomment__avatar"></span>
  <div class="nuda-skcomment__body">
    <div class="nuda-skcomment__head">
      <span class="nuda-skcomment__name"></span>
      <span class="nuda-skcomment__time"></span>
    </div>
    <span class="nuda-skcomment__line" style="width:85%"></span>
    <span class="nuda-skcomment__line" style="width:60%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skcomment__line {
  height: 8px;
  border-radius: 3px;
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 6. Stat Card Skeleton ─────────────── */
  {
    id: "skeleton-stat",
    name: "Stat Card Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skstat">
        <span className="nuda-skstat__label" />
        <span className="nuda-skstat__num" />
        <span className="nuda-skstat__chart" />
      </div>
    ),
    cssInline: `
      .nuda-skstat{display:flex;flex-direction:column;gap:8px;padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:160px}
      .nuda-skstat__label{width:50%;height:9px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skstat__num{width:70%;height:22px;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;animation-delay:.1s}
      .nuda-skstat__chart{width:100%;height:32px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;animation-delay:.2s}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skstat > *{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skstat">
  <span class="nuda-skstat__label"></span>
  <span class="nuda-skstat__num"></span>
  <span class="nuda-skstat__chart"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skstat > * {
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 7. Feed Skeleton ─────────────── */
  {
    id: "skeleton-feed",
    name: "Feed Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skfeed">
        {[0, 1].map((i) => (
          <div key={i} className="nuda-skfeed__post">
            <div className="nuda-skfeed__head">
              <span className="nuda-skfeed__avatar" />
              <span className="nuda-skfeed__name" />
            </div>
            <span className="nuda-skfeed__line" style={{ width: "90%" }} />
            <span className="nuda-skfeed__line" style={{ width: "60%" }} />
            <span className="nuda-skfeed__img" />
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-skfeed{display:flex;flex-direction:column;gap:12px;width:100%;max-width:240px}
      .nuda-skfeed__post{display:flex;flex-direction:column;gap:6px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px}
      .nuda-skfeed__head{display:flex;align-items:center;gap:8px;margin-bottom:4px}
      .nuda-skfeed__avatar{width:24px;height:24px;border-radius:50%;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skfeed__name{width:60px;height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skfeed__line{height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skfeed__img{margin-top:4px;height:50px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skfeed__post *{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skfeed">
  <div class="nuda-skfeed__post">
    <div class="nuda-skfeed__head">
      <span class="nuda-skfeed__avatar"></span>
      <span class="nuda-skfeed__name"></span>
    </div>
    <span class="nuda-skfeed__line" style="width:90%"></span>
    <span class="nuda-skfeed__line" style="width:60%"></span>
    <span class="nuda-skfeed__img"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skfeed__post * {
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 8. Video Skeleton ─────────────── */
  {
    id: "skeleton-video",
    name: "Video Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skvid">
        <span className="nuda-skvid__player">
          <span className="nuda-skvid__play" />
        </span>
        <span className="nuda-skvid__title" style={{ width: "80%" }} />
        <div className="nuda-skvid__meta">
          <span className="nuda-skvid__avatar" />
          <span className="nuda-skvid__name" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-skvid{display:flex;flex-direction:column;gap:8px;width:100%;max-width:220px}
      .nuda-skvid__player{position:relative;height:120px;border-radius:8px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;display:flex;align-items:center;justify-content:center}
      .nuda-skvid__play{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.16)}
      .nuda-skvid__title{height:11px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;animation-delay:.1s}
      .nuda-skvid__meta{display:flex;align-items:center;gap:8px}
      .nuda-skvid__avatar{width:20px;height:20px;border-radius:50%;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skvid__name{flex:1;height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skvid__player,.nuda-skvid__title,.nuda-skvid__avatar,.nuda-skvid__name{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skvid">
  <span class="nuda-skvid__player">
    <span class="nuda-skvid__play"></span>
  </span>
  <span class="nuda-skvid__title" style="width:80%"></span>
  <div class="nuda-skvid__meta">
    <span class="nuda-skvid__avatar"></span>
    <span class="nuda-skvid__name"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skvid__player {
  position: relative;
  height: 120px;
  border-radius: 8px;
  animation: nuda-sk-shim 1.6s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      },
    ],
  },

  /* ─────────────── 9. Article Skeleton ─────────────── */
  {
    id: "skeleton-article",
    name: "Article Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skart">
        <span className="nuda-skart__title" />
        <span className="nuda-skart__meta" />
        <span className="nuda-skart__line" style={{ width: "100%" }} />
        <span className="nuda-skart__line" style={{ width: "95%" }} />
        <span className="nuda-skart__line" style={{ width: "60%" }} />
      </div>
    ),
    cssInline: `
      .nuda-skart{display:flex;flex-direction:column;gap:6px;padding:12px;width:100%;max-width:240px}
      .nuda-skart__title{height:14px;width:70%;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;margin-bottom:4px}
      .nuda-skart__meta{height:8px;width:40%;border-radius:3px;background:rgba(255,255,255,.06);margin-bottom:6px}
      .nuda-skart__line{height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skart > *{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skart">
  <span class="nuda-skart__title"></span>
  <span class="nuda-skart__meta"></span>
  <span class="nuda-skart__line" style="width:100%"></span>
  <span class="nuda-skart__line" style="width:95%"></span>
  <span class="nuda-skart__line" style="width:60%"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skart__line {
  height: 8px;
  border-radius: 3px;
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 10. Avatar Stack Skeleton ─────────────── */
  {
    id: "skeleton-avatar-stack",
    name: "Avatar Stack Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skstack">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={{ marginLeft: i ? "-6px" : 0, animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-skstack{display:inline-flex;align-items:center}
      .nuda-skstack span{width:24px;height:24px;border-radius:50%;border:2px solid #0c0c10;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skstack span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skstack">
  <span></span>
  <span style="margin-left:-6px"></span>
  <span style="margin-left:-6px"></span>
  <span style="margin-left:-6px"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skstack span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #0c0c10;
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 11. Dashboard Skeleton ─────────────── */
  {
    id: "skeleton-dashboard",
    name: "Dashboard Skeleton",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skdash">
        <div className="nuda-skdash__top">
          <span />
          <span />
          <span />
        </div>
        <div className="nuda-skdash__chart" />
      </div>
    ),
    cssInline: `
      .nuda-skdash{display:flex;flex-direction:column;gap:8px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px}
      .nuda-skdash__top{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
      .nuda-skdash__top span{height:42px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite}
      .nuda-skdash__top span:nth-child(2){animation-delay:.1s}
      .nuda-skdash__top span:nth-child(3){animation-delay:.2s}
      .nuda-skdash__chart{height:80px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;animation-delay:.3s}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skdash *{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skdash">
  <div class="nuda-skdash__top">
    <span></span><span></span><span></span>
  </div>
  <div class="nuda-skdash__chart"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skdash__top span,
.nuda-skdash__chart {
  animation: nuda-sk-shim 1.6s linear infinite;
}`,
      },
    ],
  },

  /* ─────────────── 12. Progressive Reveal ─────────────── */
  {
    id: "skeleton-progressive",
    name: "Progressive Reveal",
    category: "Skeleton Variants",
    preview: (
      <div className="nuda-skrev">
        <span className="is-loaded">Hello</span>
        <span className="is-loaded">there,</span>
        <span>welcome</span>
        <span>to</span>
        <span>NudaUI.</span>
      </div>
    ),
    cssInline: `
      .nuda-skrev{display:flex;flex-wrap:wrap;gap:4px;padding:12px;width:100%;max-width:240px}
      .nuda-skrev span{padding:2px 6px;border-radius:4px;color:transparent;background:linear-gradient(90deg,rgba(255,255,255,.04),rgba(255,255,255,.1),rgba(255,255,255,.04));background-size:200% 100%;animation:_skShim 1.6s linear infinite;font-size:13px;font-weight:500;transition:color .35s,background .35s}
      .nuda-skrev span.is-loaded{color:#fafafa;background:transparent;animation:none}
      @keyframes _skShim{to{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skrev span:not(.is-loaded){animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skrev">
  <span class="is-loaded">Hello</span>
  <span class="is-loaded">there,</span>
  <span>welcome</span>
  <span>to</span>
  <span>NudaUI.</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-skrev span {
  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.04)
  );
  background-size: 200% 100%;
  animation: nuda-sk-shim 1.6s linear infinite;
  transition: color 0.35s, background 0.35s;
}

.nuda-skrev span.is-loaded {
  color: #fafafa;
  background: transparent;
  animation: none;
}`,
      },
    ],
  },
];
