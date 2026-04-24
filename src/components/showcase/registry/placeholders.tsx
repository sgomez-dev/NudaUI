import type { NudaComponent } from "./types";

export const placeholders: NudaComponent[] = [
  /* ─────────────── 1. Skeleton Shimmer ─────────────── */
  {
    id: "skeleton-shimmer",
    name: "Skeleton Shimmer",
    category: "Placeholders",
    preview: (
      <div className="nuda-skeleton-shimmer" role="status" aria-label="Loading content" aria-busy="true">
        <div className="nuda-skeleton-shimmer__line" style={{ width: "90%" }} />
        <div className="nuda-skeleton-shimmer__line" style={{ width: "75%" }} />
        <div className="nuda-skeleton-shimmer__line" style={{ width: "60%" }} />
      </div>
    ),
    cssInline: `
      .nuda-skeleton-shimmer{display:flex;flex-direction:column;gap:8px;padding:12px;width:200px}
      .nuda-skeleton-shimmer__line{height:10px;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_shm 1.5s ease-in-out infinite}
      @keyframes _shm{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Skeleton Shimmer -->
<div class="nuda-skeleton-shimmer" role="status" aria-label="Loading content" aria-busy="true">
  <div class="nuda-skeleton-shimmer__line" style="width: 90%"></div>
  <div class="nuda-skeleton-shimmer__line" style="width: 75%"></div>
  <div class="nuda-skeleton-shimmer__line" style="width: 60%"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Skeleton Shimmer
   Shimmer effect on placeholder text lines.
   Customize: --shimmer-base, --shimmer-highlight, --shimmer-line-height */

.nuda-skeleton-shimmer {
  --shimmer-base: rgba(255, 255, 255, 0.06);
  --shimmer-highlight: rgba(255, 255, 255, 0.12);
  --shimmer-line-height: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

.nuda-skeleton-shimmer__line {
  height: var(--shimmer-line-height);
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    var(--shimmer-base) 25%,
    var(--shimmer-highlight) 50%,
    var(--shimmer-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-shimmer 1.5s ease-in-out infinite;
}

@keyframes nuda-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-skeleton-shimmer__line {
    animation: none;
    background: var(--shimmer-base);
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Card Skeleton ─────────────── */
  {
    id: "card-skeleton",
    name: "Card Skeleton",
    category: "Placeholders",
    preview: (
      <div className="nuda-card-skeleton" role="status" aria-label="Loading card" aria-busy="true">
        <div className="nuda-card-skeleton__header">
          <div className="nuda-card-skeleton__avatar" />
          <div className="nuda-card-skeleton__meta">
            <div className="nuda-card-skeleton__shim" style={{ width: "60%" }} />
            <div className="nuda-card-skeleton__shim" style={{ width: "40%" }} />
          </div>
        </div>
        <div className="nuda-card-skeleton__body">
          <div className="nuda-card-skeleton__shim" style={{ width: "100%" }} />
          <div className="nuda-card-skeleton__shim" style={{ width: "85%" }} />
          <div className="nuda-card-skeleton__shim" style={{ width: "70%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-card-skeleton{width:220px;padding:14px;background:rgba(255,255,255,.04);border-radius:10px;border:1px solid rgba(255,255,255,.06)}
      .nuda-card-skeleton__header{display:flex;gap:10px;align-items:center;margin-bottom:12px}
      .nuda-card-skeleton__avatar{width:36px;height:36px;border-radius:50%;flex-shrink:0;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_csk 1.5s ease-in-out infinite}
      .nuda-card-skeleton__meta{flex:1;display:flex;flex-direction:column;gap:6px}
      .nuda-card-skeleton__body{display:flex;flex-direction:column;gap:6px}
      .nuda-card-skeleton__shim{height:8px;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_csk 1.5s ease-in-out infinite}
      @keyframes _csk{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Card Skeleton -->
<div class="nuda-card-skeleton" role="status" aria-label="Loading card" aria-busy="true">
  <div class="nuda-card-skeleton__header">
    <div class="nuda-card-skeleton__avatar"></div>
    <div class="nuda-card-skeleton__meta">
      <div class="nuda-card-skeleton__shim" style="width: 60%"></div>
      <div class="nuda-card-skeleton__shim" style="width: 40%"></div>
    </div>
  </div>
  <div class="nuda-card-skeleton__body">
    <div class="nuda-card-skeleton__shim" style="width: 100%"></div>
    <div class="nuda-card-skeleton__shim" style="width: 85%"></div>
    <div class="nuda-card-skeleton__shim" style="width: 70%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Card Skeleton
   Full card placeholder with avatar, title, and text shimmer.
   Customize: --card-skel-base, --card-skel-highlight, --card-skel-bg */

.nuda-card-skeleton {
  --card-skel-base: rgba(255, 255, 255, 0.06);
  --card-skel-highlight: rgba(255, 255, 255, 0.12);
  --card-skel-bg: rgba(255, 255, 255, 0.04);
  width: 100%;
  max-width: 320px;
  padding: 14px;
  background: var(--card-skel-bg);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-card-skeleton__header {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
}

.nuda-card-skeleton__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    var(--card-skel-base) 25%,
    var(--card-skel-highlight) 50%,
    var(--card-skel-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-card-shimmer 1.5s ease-in-out infinite;
}

.nuda-card-skeleton__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nuda-card-skeleton__body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.nuda-card-skeleton__shim {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    var(--card-skel-base) 25%,
    var(--card-skel-highlight) 50%,
    var(--card-skel-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-card-shimmer 1.5s ease-in-out infinite;
}

@keyframes nuda-card-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-card-skeleton__avatar,
  .nuda-card-skeleton__shim {
    animation: none;
    background: var(--card-skel-base);
  }
}`,
      },
    ],
  },

  /* ─────────────── 3. Image Skeleton ─────────────── */
  {
    id: "image-skeleton",
    name: "Image Skeleton",
    category: "Placeholders",
    preview: (
      <div className="nuda-image-skeleton" role="status" aria-label="Loading image" aria-busy="true">
        <div className="nuda-image-skeleton__box">
          <svg className="nuda-image-skeleton__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-image-skeleton{width:180px;margin:8px}
      .nuda-image-skeleton__box{width:100%;aspect-ratio:16/10;border-radius:8px;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.1) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_isk 1.5s ease-in-out infinite;display:flex;align-items:center;justify-content:center}
      .nuda-image-skeleton__icon{color:rgba(255,255,255,.15)}
      @keyframes _isk{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Image Skeleton -->
<div class="nuda-image-skeleton" role="status" aria-label="Loading image" aria-busy="true">
  <div class="nuda-image-skeleton__box">
    <svg class="nuda-image-skeleton__icon" viewBox="0 0 24 24"
         width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Image Skeleton
   Image placeholder with shimmer and a centered image icon.
   Customize: --img-skel-base, --img-skel-highlight, --img-skel-ratio */

.nuda-image-skeleton {
  --img-skel-base: rgba(255, 255, 255, 0.06);
  --img-skel-highlight: rgba(255, 255, 255, 0.1);
  --img-skel-ratio: 16 / 10;
  width: 100%;
}

.nuda-image-skeleton__box {
  width: 100%;
  aspect-ratio: var(--img-skel-ratio);
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    var(--img-skel-base) 25%,
    var(--img-skel-highlight) 50%,
    var(--img-skel-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-img-shimmer 1.5s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-image-skeleton__icon {
  color: rgba(255, 255, 255, 0.15);
}

@keyframes nuda-img-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-image-skeleton__box {
    animation: none;
    background: var(--img-skel-base);
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Table Skeleton ─────────────── */
  {
    id: "table-skeleton",
    name: "Table Skeleton",
    category: "Placeholders",
    preview: (
      <div className="nuda-table-skeleton" role="status" aria-label="Loading table" aria-busy="true">
        <div className="nuda-table-skeleton__row nuda-table-skeleton__row--header">
          <span /><span /><span />
        </div>
        <div className="nuda-table-skeleton__row"><span /><span /><span /></div>
        <div className="nuda-table-skeleton__row"><span /><span /><span /></div>
        <div className="nuda-table-skeleton__row"><span /><span /><span /></div>
      </div>
    ),
    cssInline: `
      .nuda-table-skeleton{width:240px;display:flex;flex-direction:column;gap:2px;margin:8px}
      .nuda-table-skeleton__row{display:flex;gap:6px;padding:6px 8px;background:rgba(255,255,255,.02);border-radius:4px}
      .nuda-table-skeleton__row--header{background:rgba(255,255,255,.05)}
      .nuda-table-skeleton__row span{flex:1;height:8px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_tsk 1.5s ease-in-out infinite}
      .nuda-table-skeleton__row--header span{height:6px;background:linear-gradient(90deg,rgba(255,255,255,.08) 25%,rgba(255,255,255,.16) 50%,rgba(255,255,255,.08) 75%);background-size:200% 100%}
      @keyframes _tsk{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Table Skeleton -->
<div class="nuda-table-skeleton" role="status" aria-label="Loading table" aria-busy="true">
  <!-- Header row -->
  <div class="nuda-table-skeleton__row nuda-table-skeleton__row--header">
    <span></span><span></span><span></span>
  </div>
  <!-- Data rows -->
  <div class="nuda-table-skeleton__row">
    <span></span><span></span><span></span>
  </div>
  <div class="nuda-table-skeleton__row">
    <span></span><span></span><span></span>
  </div>
  <div class="nuda-table-skeleton__row">
    <span></span><span></span><span></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Table Skeleton
   Table rows placeholder with shimmer effect.
   Customize: --tbl-skel-base, --tbl-skel-highlight, --tbl-skel-header-bg */

.nuda-table-skeleton {
  --tbl-skel-base: rgba(255, 255, 255, 0.06);
  --tbl-skel-highlight: rgba(255, 255, 255, 0.12);
  --tbl-skel-header-bg: rgba(255, 255, 255, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nuda-table-skeleton__row {
  display: flex;
  gap: 6px;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
}

.nuda-table-skeleton__row--header {
  background: var(--tbl-skel-header-bg);
}

.nuda-table-skeleton__row span {
  flex: 1;
  height: 8px;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    var(--tbl-skel-base) 25%,
    var(--tbl-skel-highlight) 50%,
    var(--tbl-skel-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-table-shimmer 1.5s ease-in-out infinite;
}

.nuda-table-skeleton__row--header span {
  height: 6px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.08) 25%,
    rgba(255, 255, 255, 0.16) 50%,
    rgba(255, 255, 255, 0.08) 75%
  );
  background-size: 200% 100%;
}

@keyframes nuda-table-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-table-skeleton__row span {
    animation: none;
    background: var(--tbl-skel-base);
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Profile Skeleton ─────────────── */
  {
    id: "profile-skeleton",
    name: "Profile Skeleton",
    category: "Placeholders",
    preview: (
      <div className="nuda-profile-skeleton" role="status" aria-label="Loading profile" aria-busy="true">
        <div className="nuda-profile-skeleton__photo" />
        <div className="nuda-profile-skeleton__info">
          <div className="nuda-profile-skeleton__shim nuda-profile-skeleton__shim--name" />
          <div className="nuda-profile-skeleton__shim nuda-profile-skeleton__shim--role" />
        </div>
        <div className="nuda-profile-skeleton__bio">
          <div className="nuda-profile-skeleton__shim" style={{ width: "100%" }} />
          <div className="nuda-profile-skeleton__shim" style={{ width: "90%" }} />
          <div className="nuda-profile-skeleton__shim" style={{ width: "75%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-profile-skeleton{width:200px;display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px;background:rgba(255,255,255,.04);border-radius:12px;border:1px solid rgba(255,255,255,.06)}
      .nuda-profile-skeleton__photo{width:56px;height:56px;border-radius:50%;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_psk 1.5s ease-in-out infinite}
      .nuda-profile-skeleton__info{display:flex;flex-direction:column;align-items:center;gap:6px;width:100%}
      .nuda-profile-skeleton__bio{display:flex;flex-direction:column;gap:5px;width:100%}
      .nuda-profile-skeleton__shim{height:8px;border-radius:4px;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_psk 1.5s ease-in-out infinite}
      .nuda-profile-skeleton__shim--name{width:50%;height:10px}
      .nuda-profile-skeleton__shim--role{width:35%;height:7px}
      @keyframes _psk{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Profile Skeleton -->
<div class="nuda-profile-skeleton" role="status" aria-label="Loading profile" aria-busy="true">
  <div class="nuda-profile-skeleton__photo"></div>
  <div class="nuda-profile-skeleton__info">
    <div class="nuda-profile-skeleton__shim nuda-profile-skeleton__shim--name"></div>
    <div class="nuda-profile-skeleton__shim nuda-profile-skeleton__shim--role"></div>
  </div>
  <div class="nuda-profile-skeleton__bio">
    <div class="nuda-profile-skeleton__shim" style="width: 100%"></div>
    <div class="nuda-profile-skeleton__shim" style="width: 90%"></div>
    <div class="nuda-profile-skeleton__shim" style="width: 75%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Profile Skeleton
   Profile page placeholder with photo, name, role, and bio lines.
   Customize: --prof-skel-base, --prof-skel-highlight, --prof-skel-bg */

.nuda-profile-skeleton {
  --prof-skel-base: rgba(255, 255, 255, 0.06);
  --prof-skel-highlight: rgba(255, 255, 255, 0.12);
  --prof-skel-bg: rgba(255, 255, 255, 0.04);
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background: var(--prof-skel-bg);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-profile-skeleton__photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    var(--prof-skel-base) 25%,
    var(--prof-skel-highlight) 50%,
    var(--prof-skel-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-profile-shimmer 1.5s ease-in-out infinite;
}

.nuda-profile-skeleton__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.nuda-profile-skeleton__bio {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.nuda-profile-skeleton__shim {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    var(--prof-skel-base) 25%,
    var(--prof-skel-highlight) 50%,
    var(--prof-skel-base) 75%
  );
  background-size: 200% 100%;
  animation: nuda-profile-shimmer 1.5s ease-in-out infinite;
}

.nuda-profile-skeleton__shim--name {
  width: 50%;
  height: 10px;
}

.nuda-profile-skeleton__shim--role {
  width: 35%;
  height: 7px;
}

@keyframes nuda-profile-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-profile-skeleton__photo,
  .nuda-profile-skeleton__shim {
    animation: none;
    background: var(--prof-skel-base);
  }
}`,
      },
    ],
  },
];
