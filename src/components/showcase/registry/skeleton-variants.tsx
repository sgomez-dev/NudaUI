import type { NudaComponent } from "./types";

export const skeletonVariants: NudaComponent[] = [
  /* ─────────────── 1. Message Skeleton ─────────────── */
  {
    id: "skeleton-message",
    name: "Message Skeleton",
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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
    category: "Skeletons",
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

  /* ─────────────── 13. Shimmer Card ─────────────── */
  {
    id: "shimmer-card-skeleton",
    name: "Shimmer Card",
    category: "Skeletons",
    preview: (
      <div className="nuda-shimcard" aria-hidden="true">
        <span className="nuda-shimcard__media" />
        <span className="nuda-shimcard__line" style={{ width: "80%" }} />
        <span className="nuda-shimcard__line" style={{ width: "55%" }} />
        <div className="nuda-shimcard__foot">
          <span className="nuda-shimcard__pill" />
          <span className="nuda-shimcard__pill" style={{ width: "40px" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-shimcard{position:relative;display:flex;flex-direction:column;gap:9px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:200px;overflow:hidden}
      .nuda-shimcard__media{height:96px;border-radius:8px;background:rgba(255,255,255,.06)}
      .nuda-shimcard__line{height:10px;border-radius:4px;background:rgba(255,255,255,.06)}
      .nuda-shimcard__foot{display:flex;gap:8px;margin-top:2px}
      .nuda-shimcard__pill{width:56px;height:14px;border-radius:7px;background:rgba(255,255,255,.06)}
      .nuda-shimcard::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(228,255,84,.12) 50%,transparent 70%);transform:translateX(-100%);animation:_shimcard 1.6s ease-in-out infinite}
      @keyframes _shimcard{to{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-shimcard::after{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-shimcard" aria-hidden="true">
  <span class="nuda-shimcard__media"></span>
  <span class="nuda-shimcard__line" style="width:80%"></span>
  <span class="nuda-shimcard__line" style="width:55%"></span>
  <div class="nuda-shimcard__foot">
    <span class="nuda-shimcard__pill"></span>
    <span class="nuda-shimcard__pill" style="width:40px"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Shimmer Card Skeleton
   Card placeholder with a single lime shimmer sweep passing over it.
   Customize: --shimcard-glow, --shimcard-block */

.nuda-shimcard {
  --shimcard-glow: rgba(228, 255, 84, 0.12);
  --shimcard-block: rgba(255, 255, 255, 0.06);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  width: 100%;
  max-width: 200px;
  overflow: hidden;
}

.nuda-shimcard__media { height: 96px; border-radius: 8px; background: var(--shimcard-block); }
.nuda-shimcard__line  { height: 10px; border-radius: 4px; background: var(--shimcard-block); }
.nuda-shimcard__foot  { display: flex; gap: 8px; margin-top: 2px; }
.nuda-shimcard__pill  { width: 56px; height: 14px; border-radius: 7px; background: var(--shimcard-block); }

.nuda-shimcard::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 30%, var(--shimcard-glow) 50%, transparent 70%);
  transform: translateX(-100%);
  animation: nuda-shimcard 1.6s ease-in-out infinite;
}

@keyframes nuda-shimcard {
  to { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-shimcard::after { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 14. Avatar + Lines ─────────────── */
  {
    id: "avatar-line-skeleton",
    name: "Avatar + Lines",
    category: "Skeletons",
    preview: (
      <div className="nuda-avline" aria-hidden="true">
        <span className="nuda-avline__avatar" />
        <div className="nuda-avline__body">
          <span style={{ width: "70%" }} />
          <span style={{ width: "90%" }} />
          <span style={{ width: "50%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-avline{display:flex;gap:12px;align-items:center;padding:12px;width:100%;max-width:260px}
      .nuda-avline__avatar{width:40px;height:40px;border-radius:50%;flex-shrink:0;background:rgba(255,255,255,.06);animation:_avlinePulse 1.5s ease-in-out infinite}
      .nuda-avline__body{flex:1;display:flex;flex-direction:column;gap:7px}
      .nuda-avline__body span{height:9px;border-radius:4px;background:rgba(255,255,255,.06);animation:_avlinePulse 1.5s ease-in-out infinite}
      .nuda-avline__body span:nth-child(2){animation-delay:.15s}
      .nuda-avline__body span:nth-child(3){animation-delay:.3s}
      @keyframes _avlinePulse{0%,100%{opacity:.4}50%{opacity:.9}}
      @media(prefers-reduced-motion:reduce){.nuda-avline__avatar,.nuda-avline__body span{animation:none;opacity:.55}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-avline" aria-hidden="true">
  <span class="nuda-avline__avatar"></span>
  <div class="nuda-avline__body">
    <span style="width:70%"></span>
    <span style="width:90%"></span>
    <span style="width:50%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Avatar + Lines Skeleton
   Avatar circle beside stacked text lines, gently pulsing in opacity.
   Customize: --avline-block */

.nuda-avline {
  --avline-block: rgba(255, 255, 255, 0.06);
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  width: 100%;
  max-width: 260px;
}

.nuda-avline__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--avline-block);
  animation: nuda-avline-pulse 1.5s ease-in-out infinite;
}

.nuda-avline__body { flex: 1; display: flex; flex-direction: column; gap: 7px; }

.nuda-avline__body span {
  height: 9px;
  border-radius: 4px;
  background: var(--avline-block);
  animation: nuda-avline-pulse 1.5s ease-in-out infinite;
}

.nuda-avline__body span:nth-child(2) { animation-delay: 0.15s; }
.nuda-avline__body span:nth-child(3) { animation-delay: 0.3s; }

@keyframes nuda-avline-pulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 0.9; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-avline__avatar,
  .nuda-avline__body span { animation: none; opacity: 0.55; }
}`,
      },
    ],
  },

  /* ─────────────── 15. Table Skeleton ─────────────── */
  {
    id: "table-skeleton-sk",
    name: "Table Skeleton",
    category: "Skeletons",
    preview: (
      <div className="nuda-sktbl" aria-hidden="true">
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="nuda-sktbl__row" style={{ animationDelay: `${r * 0.12}s` }}>
            <span style={{ width: "30%" }} />
            <span style={{ width: "22%" }} />
            <span style={{ width: "18%" }} />
            <span style={{ width: "15%" }} />
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-sktbl{display:flex;flex-direction:column;gap:9px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px}
      .nuda-sktbl__row{display:flex;gap:12px;align-items:center;animation:_sktblPulse 1.6s ease-in-out infinite}
      .nuda-sktbl__row:first-child span{background:rgba(228,255,84,.18)}
      .nuda-sktbl__row span{height:10px;border-radius:3px;background:rgba(255,255,255,.07)}
      @keyframes _sktblPulse{0%,100%{opacity:.45}50%{opacity:.9}}
      @media(prefers-reduced-motion:reduce){.nuda-sktbl__row{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sktbl" aria-hidden="true">
  <div class="nuda-sktbl__row">
    <span style="width:30%"></span>
    <span style="width:22%"></span>
    <span style="width:18%"></span>
    <span style="width:15%"></span>
  </div>
  <!-- repeat rows; first row reads as the header -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Table Skeleton
   Rows and columns placeholder; rows pulse in staggered opacity.
   The first row is tinted to read as a header.
   Customize: --sktbl-block, --sktbl-head */

.nuda-sktbl {
  --sktbl-block: rgba(255, 255, 255, 0.07);
  --sktbl-head: rgba(228, 255, 84, 0.18);
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  width: 100%;
  max-width: 280px;
}

.nuda-sktbl__row {
  display: flex;
  gap: 12px;
  align-items: center;
  animation: nuda-sktbl-pulse 1.6s ease-in-out infinite;
}

.nuda-sktbl__row:first-child span { background: var(--sktbl-head); }
.nuda-sktbl__row span { height: 10px; border-radius: 3px; background: var(--sktbl-block); }

@keyframes nuda-sktbl-pulse {
  0%, 100% { opacity: 0.45; }
  50%      { opacity: 0.9; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sktbl__row { animation: none; opacity: 0.6; }
}`,
      },
    ],
  },

  /* ─────────────── 16. Chart Skeleton ─────────────── */
  {
    id: "chart-skeleton",
    name: "Chart Skeleton",
    category: "Skeletons",
    preview: (
      <div className="nuda-skchart" aria-hidden="true">
        <div className="nuda-skchart__bars">
          {[40, 70, 50, 90, 60, 80].map((h, i) => (
            <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <span className="nuda-skchart__axis" />
      </div>
    ),
    cssInline: `
      .nuda-skchart{padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:220px}
      .nuda-skchart__bars{display:flex;align-items:flex-end;gap:8px;height:88px}
      .nuda-skchart__bars span{flex:1;border-radius:4px 4px 0 0;background:linear-gradient(180deg,rgba(228,255,84,.28),rgba(255,255,255,.05));transform-origin:bottom;animation:_skchart 1.5s ease-in-out infinite}
      .nuda-skchart__axis{display:block;height:2px;margin-top:6px;border-radius:1px;background:rgba(255,255,255,.1)}
      @keyframes _skchart{0%,100%{transform:scaleY(.7);opacity:.5}50%{transform:scaleY(1);opacity:.95}}
      @media(prefers-reduced-motion:reduce){.nuda-skchart__bars span{animation:none;transform:scaleY(1);opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skchart" aria-hidden="true">
  <div class="nuda-skchart__bars">
    <span style="height:40%"></span>
    <span style="height:70%"></span>
    <span style="height:50%"></span>
    <span style="height:90%"></span>
    <span style="height:60%"></span>
    <span style="height:80%"></span>
  </div>
  <span class="nuda-skchart__axis"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chart Skeleton
   Bar-chart placeholder; bars breathe via scaleY (their heights are inline).
   Customize: --skchart-bar */

.nuda-skchart {
  --skchart-bar: rgba(228, 255, 84, 0.28);
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  width: 100%;
  max-width: 220px;
}

.nuda-skchart__bars { display: flex; align-items: flex-end; gap: 8px; height: 88px; }

.nuda-skchart__bars span {
  flex: 1;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, var(--skchart-bar), rgba(255, 255, 255, 0.05));
  transform-origin: bottom;
  animation: nuda-skchart 1.5s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-skchart__axis {
  display: block;
  height: 2px;
  margin-top: 6px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.1);
}

@keyframes nuda-skchart {
  0%, 100% { transform: scaleY(0.7); opacity: 0.5; }
  50%      { transform: scaleY(1);   opacity: 0.95; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-skchart__bars span { animation: none; transform: scaleY(1); opacity: 0.6; }
}`,
      },
    ],
  },

  /* ─────────────── 17. Image Skeleton ─────────────── */
  {
    id: "image-skeleton-sk",
    name: "Image Skeleton",
    category: "Skeletons",
    preview: (
      <div className="nuda-skimg" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="34" height="34" className="nuda-skimg__icon" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9" r="1.6" />
          <path d="M21 16l-5-5-9 9" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-skimg{position:relative;width:100%;max-width:200px;height:130px;border-radius:10px;background:rgba(255,255,255,.05);display:flex;align-items:center;justify-content:center;overflow:hidden}
      .nuda-skimg__icon{color:rgba(255,255,255,.18)}
      .nuda-skimg::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(228,255,84,.12) 50%,transparent 70%);transform:translateX(-100%);animation:_skimg 1.7s ease-in-out infinite}
      @keyframes _skimg{to{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-skimg::after{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skimg" aria-hidden="true">
  <svg viewBox="0 0 24 24" width="34" height="34" class="nuda-skimg__icon"
       fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8.5" cy="9" r="1.6" />
    <path d="M21 16l-5-5-9 9" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Image Skeleton
   Image placeholder with a centered icon and a lime shimmer sweep.
   Customize: --skimg-block, --skimg-glow */

.nuda-skimg {
  --skimg-block: rgba(255, 255, 255, 0.05);
  --skimg-glow: rgba(228, 255, 84, 0.12);
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 130px;
  border-radius: 10px;
  background: var(--skimg-block);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.nuda-skimg__icon { color: rgba(255, 255, 255, 0.18); }

.nuda-skimg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 30%, var(--skimg-glow) 50%, transparent 70%);
  transform: translateX(-100%);
  animation: nuda-skimg 1.7s ease-in-out infinite;
}

@keyframes nuda-skimg {
  to { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-skimg::after { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 18. Wave Skeleton ─────────────── */
  {
    id: "wave-skeleton",
    name: "Wave Skeleton",
    category: "Skeletons",
    preview: (
      <div className="nuda-skwave" aria-hidden="true">
        <span className="nuda-skwave__block" />
        <span className="nuda-skwave__block" style={{ width: "75%" }} />
        <span className="nuda-skwave__block" style={{ width: "55%" }} />
      </div>
    ),
    cssInline: `
      .nuda-skwave{display:flex;flex-direction:column;gap:10px;padding:12px;width:100%;max-width:240px}
      .nuda-skwave__block{height:14px;border-radius:5px;background:linear-gradient(90deg,rgba(255,255,255,.05) 0%,rgba(255,255,255,.05) 40%,rgba(228,255,84,.18) 50%,rgba(255,255,255,.05) 60%,rgba(255,255,255,.05) 100%);background-size:220% 100%;animation:_skwave 1.6s ease-in-out infinite}
      .nuda-skwave__block:nth-child(2){animation-delay:.18s}
      .nuda-skwave__block:nth-child(3){animation-delay:.36s}
      @keyframes _skwave{0%{background-position:120% 0}100%{background-position:-120% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-skwave__block{animation:none;background-position:50% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skwave" aria-hidden="true">
  <span class="nuda-skwave__block"></span>
  <span class="nuda-skwave__block" style="width:75%"></span>
  <span class="nuda-skwave__block" style="width:55%"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Wave Skeleton
   Blocks with a lime highlight wave traveling across them in sequence
   (background-position only).
   Customize: --skwave-glow */

.nuda-skwave {
  --skwave-glow: rgba(228, 255, 84, 0.18);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  width: 100%;
  max-width: 240px;
}

.nuda-skwave__block {
  height: 14px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.05) 40%,
    var(--skwave-glow) 50%,
    rgba(255, 255, 255, 0.05) 60%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 220% 100%;
  animation: nuda-skwave 1.6s ease-in-out infinite;
}

.nuda-skwave__block:nth-child(2) { animation-delay: 0.18s; }
.nuda-skwave__block:nth-child(3) { animation-delay: 0.36s; }

@keyframes nuda-skwave {
  0%   { background-position: 120% 0; }
  100% { background-position: -120% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-skwave__block { animation: none; background-position: 50% 0; }
}`,
      },
    ],
  },

  /* ─────────────── 19. Pulse Grid ─────────────── */
  {
    id: "pulse-grid-skeleton",
    name: "Pulse Grid",
    category: "Skeletons",
    preview: (
      <div className="nuda-skpgrid" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <span key={i} style={{ animationDelay: `${((Math.floor(i / 3)) + (i % 3)) * 0.12}s` }} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-skpgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:12px;width:fit-content}
      .nuda-skpgrid span{width:32px;height:32px;border-radius:8px;background:rgba(228,255,84,.16);transform-origin:center;animation:_skpgrid 1.5s ease-in-out infinite}
      @keyframes _skpgrid{0%,100%{transform:scale(.82);opacity:.35}50%{transform:scale(1);opacity:.85}}
      @media(prefers-reduced-motion:reduce){.nuda-skpgrid span{animation:none;opacity:.55}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-skpgrid" aria-hidden="true">
  <!-- 3x3 tiles; stagger delays diagonally: (row + col) * 0.12s -->
  <span style="animation-delay:0s"></span>
  <span style="animation-delay:.12s"></span>
  <span style="animation-delay:.24s"></span>
  <span style="animation-delay:.12s"></span>
  <span style="animation-delay:.24s"></span>
  <span style="animation-delay:.36s"></span>
  <span style="animation-delay:.24s"></span>
  <span style="animation-delay:.36s"></span>
  <span style="animation-delay:.48s"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pulse Grid Skeleton
   3x3 grid of tiles pulsing in a diagonal wave (transform: scale + opacity).
   Customize: --skpgrid-tile */

.nuda-skpgrid {
  --skpgrid-tile: rgba(228, 255, 84, 0.16);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
  width: fit-content;
}

.nuda-skpgrid span {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--skpgrid-tile);
  transform-origin: center;
  animation: nuda-skpgrid 1.5s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes nuda-skpgrid {
  0%, 100% { transform: scale(0.82); opacity: 0.35; }
  50%      { transform: scale(1);    opacity: 0.85; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-skpgrid span { animation: none; opacity: 0.55; }
}`,
      },
    ],
  },
];
