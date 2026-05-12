import type { NudaComponent } from "./types";

export const fileUpload: NudaComponent[] = [
  /* ─────────────── DROP ZONE ─────────────── */
  {
    id: "drop-zone",
    name: "Drop Zone",
    category: "File Upload",
    preview: (
      <div className="nuda-dropzone" role="button" tabIndex={0} aria-label="Upload files">
        <svg className="nuda-dropzone__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 16V4M12 4l-4 4M12 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
        </svg>
        <p className="nuda-dropzone__title">Click or drop files here</p>
        <p className="nuda-dropzone__hint">PNG, JPG, PDF up to 10MB</p>
      </div>
    ),
    cssInline: `
      .nuda-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:2rem 1.5rem;background:#0c0c10;border:1.5px dashed rgba(255,255,255,.1);border-radius:12px;color:#a0a0a8;cursor:pointer;transition:border-color .2s,background .2s;min-width:280px}
      .nuda-dropzone:hover{border-color:rgba(228,255,84,.4);background:#111114}
      .nuda-dropzone__icon{width:32px;height:32px;color:#e4ff54;opacity:.8}
      .nuda-dropzone__title{margin:0;font-size:.95rem;color:#fafafa;font-weight:500}
      .nuda-dropzone__hint{margin:0;font-size:.8rem;color:#63636e}
      @media(prefers-reduced-motion:reduce){.nuda-dropzone{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dropzone" role="button" tabindex="0" aria-label="Upload files">
  <svg class="nuda-dropzone__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path d="M12 16V4M12 4l-4 4M12 4l4 4"
          stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke-linecap="round" />
  </svg>
  <p class="nuda-dropzone__title">Click or drop files here</p>
  <p class="nuda-dropzone__hint">PNG, JPG, PDF up to 10MB</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drop Zone
   Dashed area inviting click-or-drop uploads.
   Customize: --dz-bg, --dz-border, --dz-accent */

.nuda-dropzone {
  --dz-bg: #0c0c10;
  --dz-border: rgba(255, 255, 255, 0.1);
  --dz-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1.5rem;
  background: var(--dz-bg);
  border: 1.5px dashed var(--dz-border);
  border-radius: 12px;
  color: #a0a0a8;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  min-width: 280px;
}

.nuda-dropzone:hover {
  border-color: rgba(228, 255, 84, 0.4);
  background: #111114;
}

.nuda-dropzone__icon {
  width: 32px;
  height: 32px;
  color: var(--dz-accent);
  opacity: 0.8;
}

.nuda-dropzone__title {
  margin: 0;
  font-size: 0.95rem;
  color: #fafafa;
  font-weight: 500;
}

.nuda-dropzone__hint {
  margin: 0;
  font-size: 0.8rem;
  color: #63636e;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dropzone {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── DROP ZONE ACTIVE ─────────────── */
  {
    id: "drop-zone-active",
    name: "Drop Zone Active",
    category: "File Upload",
    preview: (
      <div className="nuda-dropzone-active" role="button" tabIndex={0} aria-label="Release to upload">
        <svg className="nuda-dropzone-active__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 16V4M12 4l-4 4M12 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
        </svg>
        <p className="nuda-dropzone-active__title">Release to upload</p>
        <p className="nuda-dropzone-active__hint">Files ready</p>
      </div>
    ),
    cssInline: `
      .nuda-dropzone-active{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:2rem 1.5rem;background:rgba(228,255,84,.06);border:1.5px solid #e4ff54;border-radius:12px;color:#fafafa;min-width:280px;box-shadow:0 0 0 4px rgba(228,255,84,.12),0 0 24px rgba(228,255,84,.2);animation:_dzpulse 1.6s ease-in-out infinite}
      .nuda-dropzone-active__icon{width:32px;height:32px;color:#e4ff54;animation:_dzbounce 1s ease-in-out infinite}
      .nuda-dropzone-active__title{margin:0;font-size:.95rem;color:#fafafa;font-weight:600}
      .nuda-dropzone-active__hint{margin:0;font-size:.8rem;color:#e4ff54}
      @keyframes _dzpulse{0%,100%{box-shadow:0 0 0 4px rgba(228,255,84,.12),0 0 24px rgba(228,255,84,.2)}50%{box-shadow:0 0 0 6px rgba(228,255,84,.2),0 0 32px rgba(228,255,84,.35)}}
      @keyframes _dzbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @media(prefers-reduced-motion:reduce){.nuda-dropzone-active,.nuda-dropzone-active__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dropzone-active" role="button" tabindex="0"
     aria-label="Release to upload">
  <svg class="nuda-dropzone-active__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path d="M12 16V4M12 4l-4 4M12 4l4 4"
          stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke-linecap="round" />
  </svg>
  <p class="nuda-dropzone-active__title">Release to upload</p>
  <p class="nuda-dropzone-active__hint">Files ready</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drop Zone Active
   Glowing solid-border state when files are hovered over it.
   Apply this class when a dragover event fires. */

.nuda-dropzone-active {
  --accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1.5rem;
  background: rgba(228, 255, 84, 0.06);
  border: 1.5px solid var(--accent);
  border-radius: 12px;
  color: #fafafa;
  min-width: 280px;
  box-shadow:
    0 0 0 4px rgba(228, 255, 84, 0.12),
    0 0 24px rgba(228, 255, 84, 0.2);
  animation: nuda-dz-pulse 1.6s ease-in-out infinite;
}

.nuda-dropzone-active__icon {
  width: 32px;
  height: 32px;
  color: var(--accent);
  animation: nuda-dz-bounce 1s ease-in-out infinite;
}

.nuda-dropzone-active__title {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.nuda-dropzone-active__hint {
  margin: 0;
  font-size: 0.8rem;
  color: var(--accent);
}

@keyframes nuda-dz-pulse {
  0%, 100% {
    box-shadow:
      0 0 0 4px rgba(228, 255, 84, 0.12),
      0 0 24px rgba(228, 255, 84, 0.2);
  }
  50% {
    box-shadow:
      0 0 0 6px rgba(228, 255, 84, 0.2),
      0 0 32px rgba(228, 255, 84, 0.35);
  }
}

@keyframes nuda-dz-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dropzone-active,
  .nuda-dropzone-active__icon {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── FILE LIST ITEM ─────────────── */
  {
    id: "file-list-item",
    name: "File List Item",
    category: "File Upload",
    preview: (
      <div className="nuda-fli">
        <div className="nuda-fli__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" strokeLinejoin="round" />
            <path d="M14 3v6h6" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="nuda-fli__meta">
          <p className="nuda-fli__name">presentation-final.pdf</p>
          <p className="nuda-fli__size">2.4 MB</p>
        </div>
        <button className="nuda-fli__remove" type="button" aria-label="Remove file">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-fli{display:flex;align-items:center;gap:.75rem;padding:.75rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:10px;min-width:280px}
      .nuda-fli__icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:#111114;border-radius:8px;color:#62b6ff;flex-shrink:0}
      .nuda-fli__icon svg{width:18px;height:18px}
      .nuda-fli__meta{flex:1;min-width:0}
      .nuda-fli__name{margin:0;font-size:.85rem;color:#fafafa;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}
      .nuda-fli__size{margin:0;font-size:.75rem;color:#63636e}
      .nuda-fli__remove{width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#a0a0a8;border-radius:6px;cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}
      .nuda-fli__remove:hover{background:rgba(255,94,122,.12);color:#ff5e7a}
      .nuda-fli__remove svg{width:14px;height:14px}
      @media(prefers-reduced-motion:reduce){.nuda-fli__remove{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fli">
  <div class="nuda-fli__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
            stroke-linejoin="round" />
      <path d="M14 3v6h6" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="nuda-fli__meta">
    <p class="nuda-fli__name">presentation-final.pdf</p>
    <p class="nuda-fli__size">2.4 MB</p>
  </div>
  <button class="nuda-fli__remove" type="button" aria-label="Remove file">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         aria-hidden="true">
      <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" />
    </svg>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File List Item
   A row showing one uploaded file: icon + name + size + remove. */

.nuda-fli {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  min-width: 280px;
}

.nuda-fli__icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111114;
  border-radius: 8px;
  color: #62b6ff;
  flex-shrink: 0;
}

.nuda-fli__icon svg { width: 18px; height: 18px; }

.nuda-fli__meta { flex: 1; min-width: 0; }

.nuda-fli__name {
  margin: 0;
  font-size: 0.85rem;
  color: #fafafa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}

.nuda-fli__size {
  margin: 0;
  font-size: 0.75rem;
  color: #63636e;
}

.nuda-fli__remove {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #a0a0a8;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
}

.nuda-fli__remove:hover {
  background: rgba(255, 94, 122, 0.12);
  color: #ff5e7a;
}

.nuda-fli__remove svg { width: 14px; height: 14px; }

@media (prefers-reduced-motion: reduce) {
  .nuda-fli__remove { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── UPLOAD PROGRESS BAR ─────────────── */
  {
    id: "upload-progress-bar",
    name: "Upload Progress Bar",
    category: "File Upload",
    preview: (
      <div className="nuda-upbar" role="group" aria-label="Upload progress">
        <div className="nuda-upbar__row">
          <span className="nuda-upbar__name">design-spec.fig</span>
          <span className="nuda-upbar__pct">62%</span>
        </div>
        <div className="nuda-upbar__track" role="progressbar" aria-valuenow={62} aria-valuemin={0} aria-valuemax={100}>
          <div className="nuda-upbar__fill" style={{ width: "62%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-upbar{display:flex;flex-direction:column;gap:.4rem;padding:.75rem .9rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:10px;min-width:280px}
      .nuda-upbar__row{display:flex;justify-content:space-between;align-items:center;gap:.5rem}
      .nuda-upbar__name{font-size:.82rem;color:#fafafa;font-weight:500}
      .nuda-upbar__pct{font-size:.78rem;color:#e4ff54;font-variant-numeric:tabular-nums}
      .nuda-upbar__track{position:relative;width:100%;height:6px;background:rgba(255,255,255,.06);border-radius:999px;overflow:hidden}
      .nuda-upbar__fill{height:100%;background:linear-gradient(90deg,#e4ff54,#a8ff54);border-radius:999px;transition:width .3s ease;box-shadow:0 0 8px rgba(228,255,84,.4)}
      @media(prefers-reduced-motion:reduce){.nuda-upbar__fill{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-upbar" role="group" aria-label="Upload progress">
  <div class="nuda-upbar__row">
    <span class="nuda-upbar__name">design-spec.fig</span>
    <span class="nuda-upbar__pct">62%</span>
  </div>
  <div class="nuda-upbar__track" role="progressbar"
       aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">
    <div class="nuda-upbar__fill" style="width: 62%"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Upload Progress Bar
   Per-file progress with name + percent label.
   Customize: --bar-grad-from, --bar-grad-to */

.nuda-upbar {
  --bar-grad-from: #e4ff54;
  --bar-grad-to: #a8ff54;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.75rem 0.9rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  min-width: 280px;
}

.nuda-upbar__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.nuda-upbar__name {
  font-size: 0.82rem;
  color: #fafafa;
  font-weight: 500;
}

.nuda-upbar__pct {
  font-size: 0.78rem;
  color: var(--bar-grad-from);
  font-variant-numeric: tabular-nums;
}

.nuda-upbar__track {
  position: relative;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
}

.nuda-upbar__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--bar-grad-from), var(--bar-grad-to));
  border-radius: 999px;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.4);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-upbar__fill { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── FILE TYPE ICONS GRID ─────────────── */
  {
    id: "file-type-icons",
    name: "File Type Icons Grid",
    category: "File Upload",
    preview: (
      <div className="nuda-ftypes" role="list" aria-label="Supported file types">
        <div className="nuda-ftype nuda-ftype--pdf" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" strokeLinejoin="round" /><path d="M14 3v6h6" strokeLinejoin="round" /></svg>
          <span>PDF</span>
        </div>
        <div className="nuda-ftype nuda-ftype--doc" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" strokeLinejoin="round" /><path d="M14 3v6h6M8 13h8M8 17h5" strokeLinecap="round" /></svg>
          <span>DOC</span>
        </div>
        <div className="nuda-ftype nuda-ftype--img" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-9 9" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>IMG</span>
        </div>
        <div className="nuda-ftype nuda-ftype--vid" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="5" width="14" height="14" rx="2" /><path d="M17 9l4-2v10l-4-2z" strokeLinejoin="round" /></svg>
          <span>VID</span>
        </div>
        <div className="nuda-ftype nuda-ftype--zip" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" strokeLinejoin="round" /><path d="M14 3v6h6M10 12v2M10 16v2" strokeLinecap="round" /></svg>
          <span>ZIP</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ftypes{display:grid;grid-template-columns:repeat(5,1fr);gap:.5rem;padding:.75rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px}
      .nuda-ftype{display:flex;flex-direction:column;align-items:center;gap:.35rem;padding:.6rem .25rem;background:#111114;border-radius:8px;font-size:.7rem;font-weight:600;letter-spacing:.04em;transition:transform .2s}
      .nuda-ftype:hover{transform:translateY(-2px)}
      .nuda-ftype svg{width:22px;height:22px}
      .nuda-ftype--pdf{color:#ff5e7a}
      .nuda-ftype--doc{color:#62b6ff}
      .nuda-ftype--img{color:#6ee7b7}
      .nuda-ftype--vid{color:#e4ff54}
      .nuda-ftype--zip{color:#a0a0a8}
      @media(prefers-reduced-motion:reduce){.nuda-ftype{transition:none}.nuda-ftype:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ftypes" role="list" aria-label="Supported file types">
  <div class="nuda-ftype nuda-ftype--pdf" role="listitem">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
         aria-hidden="true">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
            stroke-linejoin="round" />
      <path d="M14 3v6h6" stroke-linejoin="round" />
    </svg>
    <span>PDF</span>
  </div>
  <div class="nuda-ftype nuda-ftype--doc" role="listitem">
    <!-- doc icon --><span>DOC</span>
  </div>
  <div class="nuda-ftype nuda-ftype--img" role="listitem">
    <!-- img icon --><span>IMG</span>
  </div>
  <div class="nuda-ftype nuda-ftype--vid" role="listitem">
    <!-- vid icon --><span>VID</span>
  </div>
  <div class="nuda-ftype nuda-ftype--zip" role="listitem">
    <!-- zip icon --><span>ZIP</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File Type Icons Grid
   5-up grid of supported file types with color-coded icons. */

.nuda-ftypes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  padding: 0.75rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}

.nuda-ftype {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 0.6rem 0.25rem;
  background: #111114;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: transform 0.2s;
}

.nuda-ftype:hover { transform: translateY(-2px); }
.nuda-ftype svg { width: 22px; height: 22px; }

.nuda-ftype--pdf { color: #ff5e7a; }
.nuda-ftype--doc { color: #62b6ff; }
.nuda-ftype--img { color: #6ee7b7; }
.nuda-ftype--vid { color: #e4ff54; }
.nuda-ftype--zip { color: #a0a0a8; }

@media (prefers-reduced-motion: reduce) {
  .nuda-ftype { transition: none; }
  .nuda-ftype:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── IMAGE THUMBNAIL PREVIEW ─────────────── */
  {
    id: "image-thumbnail-preview",
    name: "Image Thumbnail Preview",
    category: "File Upload",
    preview: (
      <div className="nuda-thumb" role="group" aria-label="Uploaded image preview">
        <div className="nuda-thumb__img" aria-hidden="true">
          <svg viewBox="0 0 80 80" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="nuda-thumb-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#62b6ff" />
                <stop offset="50%" stopColor="#e4ff54" />
                <stop offset="100%" stopColor="#ff5e7a" />
              </linearGradient>
            </defs>
            <rect width="80" height="80" fill="url(#nuda-thumb-g)" />
            <circle cx="22" cy="22" r="7" fill="rgba(255,255,255,.5)" />
            <path d="M0 70 L25 50 L45 62 L70 38 L80 50 L80 80 L0 80 Z" fill="rgba(0,0,0,.25)" />
          </svg>
        </div>
        <button className="nuda-thumb__remove" type="button" aria-label="Remove image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
          </svg>
        </button>
        <p className="nuda-thumb__name">cover.jpg</p>
      </div>
    ),
    cssInline: `
      .nuda-thumb{position:relative;display:flex;flex-direction:column;gap:.4rem;width:120px}
      .nuda-thumb__img{position:relative;width:120px;height:120px;border-radius:10px;overflow:hidden;background:#111114;border:1px solid rgba(255,255,255,.08)}
      .nuda-thumb__img svg{width:100%;height:100%;display:block}
      .nuda-thumb__remove{position:absolute;top:6px;right:6px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:50%;color:#fafafa;cursor:pointer;padding:0;transition:background .15s,border-color .15s}
      .nuda-thumb__remove:hover{background:#ff5e7a;border-color:#ff5e7a}
      .nuda-thumb__remove svg{width:11px;height:11px}
      .nuda-thumb__name{margin:0;font-size:.75rem;color:#a0a0a8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      @media(prefers-reduced-motion:reduce){.nuda-thumb__remove{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-thumb" role="group" aria-label="Uploaded image preview">
  <div class="nuda-thumb__img" aria-hidden="true">
    <img src="/your-image.jpg" alt="" />
  </div>
  <button class="nuda-thumb__remove" type="button" aria-label="Remove image">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
         aria-hidden="true">
      <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" />
    </svg>
  </button>
  <p class="nuda-thumb__name">cover.jpg</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Image Thumbnail Preview
   Square preview with a floating remove badge. */

.nuda-thumb {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 120px;
}

.nuda-thumb__img {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.nuda-thumb__img img,
.nuda-thumb__img svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nuda-thumb__remove {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fafafa;
  cursor: pointer;
  padding: 0;
  transition: background 0.15s, border-color 0.15s;
}

.nuda-thumb__remove:hover {
  background: #ff5e7a;
  border-color: #ff5e7a;
}

.nuda-thumb__remove svg { width: 11px; height: 11px; }

.nuda-thumb__name {
  margin: 0;
  font-size: 0.75rem;
  color: #a0a0a8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-thumb__remove { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── UPLOAD ERROR STATE ─────────────── */
  {
    id: "upload-error-state",
    name: "Upload Error State",
    category: "File Upload",
    preview: (
      <div className="nuda-uperr" role="alert">
        <div className="nuda-uperr__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16.5v.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="nuda-uperr__meta">
          <p className="nuda-uperr__name">video-4k.mp4</p>
          <p className="nuda-uperr__msg">Upload failed — connection lost</p>
        </div>
        <button className="nuda-uperr__retry" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7" strokeLinecap="round" />
            <path d="M3 4v5h5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retry
        </button>
      </div>
    ),
    cssInline: `
      .nuda-uperr{display:flex;align-items:center;gap:.75rem;padding:.75rem;background:rgba(255,94,122,.06);border:1px solid #ff5e7a;border-radius:10px;min-width:300px}
      .nuda-uperr__icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(255,94,122,.12);border-radius:8px;color:#ff5e7a;flex-shrink:0}
      .nuda-uperr__icon svg{width:18px;height:18px}
      .nuda-uperr__meta{flex:1;min-width:0}
      .nuda-uperr__name{margin:0;font-size:.85rem;color:#fafafa;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-uperr__msg{margin:0;font-size:.75rem;color:#ff5e7a}
      .nuda-uperr__retry{display:inline-flex;align-items:center;gap:.35rem;padding:.4rem .65rem;background:#ff5e7a;color:#09090b;border:none;border-radius:6px;font-size:.78rem;font-weight:600;cursor:pointer;transition:filter .15s;flex-shrink:0}
      .nuda-uperr__retry:hover{filter:brightness(1.1)}
      .nuda-uperr__retry svg{width:13px;height:13px}
      @media(prefers-reduced-motion:reduce){.nuda-uperr__retry{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-uperr" role="alert">
  <div class="nuda-uperr__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16.5v.5" stroke-linecap="round" />
    </svg>
  </div>
  <div class="nuda-uperr__meta">
    <p class="nuda-uperr__name">video-4k.mp4</p>
    <p class="nuda-uperr__msg">Upload failed — connection lost</p>
  </div>
  <button class="nuda-uperr__retry" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7" stroke-linecap="round" />
      <path d="M3 4v5h5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    Retry
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Upload Error State
   Red-bordered card with a retry CTA. */

.nuda-uperr {
  --err: #ff5e7a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 94, 122, 0.06);
  border: 1px solid var(--err);
  border-radius: 10px;
  min-width: 300px;
}

.nuda-uperr__icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 94, 122, 0.12);
  border-radius: 8px;
  color: var(--err);
  flex-shrink: 0;
}
.nuda-uperr__icon svg { width: 18px; height: 18px; }

.nuda-uperr__meta { flex: 1; min-width: 0; }

.nuda-uperr__name {
  margin: 0;
  font-size: 0.85rem;
  color: #fafafa;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nuda-uperr__msg {
  margin: 0;
  font-size: 0.75rem;
  color: var(--err);
}

.nuda-uperr__retry {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.65rem;
  background: var(--err);
  color: #09090b;
  border: none;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.15s;
  flex-shrink: 0;
}

.nuda-uperr__retry:hover { filter: brightness(1.1); }
.nuda-uperr__retry svg { width: 13px; height: 13px; }

@media (prefers-reduced-motion: reduce) {
  .nuda-uperr__retry { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── MULTI-FILE COUNT PILL ─────────────── */
  {
    id: "multi-file-count-pill",
    name: "Multi-file Count Pill",
    category: "File Upload",
    preview: (
      <span className="nuda-fcount" role="status">
        <svg className="nuda-fcount__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" strokeLinejoin="round" />
          <path d="M14 3v6h6" strokeLinejoin="round" />
        </svg>
        <span className="nuda-fcount__num">3</span>
        files selected
      </span>
    ),
    cssInline: `
      .nuda-fcount{display:inline-flex;align-items:center;gap:.45rem;padding:.4rem .7rem;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.3);border-radius:999px;color:#fafafa;font-size:.8rem;font-weight:500}
      .nuda-fcount__icon{width:14px;height:14px;color:#e4ff54}
      .nuda-fcount__num{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 5px;background:#e4ff54;color:#09090b;border-radius:999px;font-size:.72rem;font-weight:700;font-variant-numeric:tabular-nums}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-fcount" role="status">
  <svg class="nuda-fcount__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
          stroke-linejoin="round" />
    <path d="M14 3v6h6" stroke-linejoin="round" />
  </svg>
  <span class="nuda-fcount__num">3</span>
  files selected
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Multi-file Count Pill
   Inline summary of how many files are queued. */

.nuda-fcount {
  --accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.7rem;
  background: rgba(228, 255, 84, 0.08);
  border: 1px solid rgba(228, 255, 84, 0.3);
  border-radius: 999px;
  color: #fafafa;
  font-size: 0.8rem;
  font-weight: 500;
}

.nuda-fcount__icon {
  width: 14px;
  height: 14px;
  color: var(--accent);
}

.nuda-fcount__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--accent);
  color: #09090b;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}`,
      },
    ],
  },

  /* ─────────────── FILE SIZE PILL ─────────────── */
  {
    id: "file-size-pill",
    name: "File Size Pill",
    category: "File Upload",
    preview: (
      <div className="nuda-fsize-row">
        <span className="nuda-fsize nuda-fsize--sm">42 KB</span>
        <span className="nuda-fsize">1.2 MB</span>
        <span className="nuda-fsize nuda-fsize--lg">86 MB</span>
      </div>
    ),
    cssInline: `
      .nuda-fsize-row{display:flex;gap:.4rem;flex-wrap:wrap}
      .nuda-fsize{display:inline-flex;align-items:center;padding:.2rem .55rem;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#a0a0a8;font-size:.72rem;font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:.01em}
      .nuda-fsize--sm{color:#6ee7b7;border-color:rgba(110,231,183,.25);background:rgba(110,231,183,.06)}
      .nuda-fsize--lg{color:#ff5e7a;border-color:rgba(255,94,122,.25);background:rgba(255,94,122,.06)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fsize-row">
  <span class="nuda-fsize nuda-fsize--sm">42 KB</span>
  <span class="nuda-fsize">1.2 MB</span>
  <span class="nuda-fsize nuda-fsize--lg">86 MB</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File Size Pill
   Compact KB/MB indicator. Color variants signal size buckets:
   --sm = small/light, default = medium, --lg = approaching limit. */

.nuda-fsize-row {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.nuda-fsize {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.55rem;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  color: #a0a0a8;
  font-size: 0.72rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.01em;
}

.nuda-fsize--sm {
  color: #6ee7b7;
  border-color: rgba(110, 231, 183, 0.25);
  background: rgba(110, 231, 183, 0.06);
}

.nuda-fsize--lg {
  color: #ff5e7a;
  border-color: rgba(255, 94, 122, 0.25);
  background: rgba(255, 94, 122, 0.06);
}`,
      },
    ],
  },

  /* ─────────────── UPLOAD SUCCESS CHECKMARK ─────────────── */
  {
    id: "upload-success-check",
    name: "Upload Success Checkmark",
    category: "File Upload",
    preview: (
      <div className="nuda-success" role="status" aria-label="Upload complete">
        <svg className="nuda-success__svg" viewBox="0 0 52 52" aria-hidden="true">
          <circle className="nuda-success__circle" cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path className="nuda-success__check" d="M14 27 L23 36 L39 18" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="nuda-success__label">Uploaded</p>
      </div>
    ),
    cssInline: `
      .nuda-success{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1rem;color:#6ee7b7}
      .nuda-success__svg{width:52px;height:52px}
      .nuda-success__circle{stroke-dasharray:152;stroke-dashoffset:152;animation:_succircle .6s ease forwards}
      .nuda-success__check{stroke-dasharray:60;stroke-dashoffset:60;animation:_succheck .4s ease .5s forwards}
      .nuda-success__label{margin:0;font-size:.85rem;font-weight:600;color:#6ee7b7;opacity:0;animation:_suclabel .3s ease .8s forwards}
      @keyframes _succircle{to{stroke-dashoffset:0}}
      @keyframes _succheck{to{stroke-dashoffset:0}}
      @keyframes _suclabel{to{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-success__circle,.nuda-success__check{animation:none;stroke-dashoffset:0}.nuda-success__label{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-success" role="status" aria-label="Upload complete">
  <svg class="nuda-success__svg" viewBox="0 0 52 52" aria-hidden="true">
    <circle class="nuda-success__circle"
            cx="26" cy="26" r="24" fill="none"
            stroke="currentColor" stroke-width="2.5" />
    <path class="nuda-success__check"
          d="M14 27 L23 36 L39 18" fill="none"
          stroke="currentColor" stroke-width="3.5"
          stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="nuda-success__label">Uploaded</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Upload Success Checkmark
   Circle draws, then check draws, then label fades in. */

.nuda-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  color: #6ee7b7;
}

.nuda-success__svg { width: 52px; height: 52px; }

.nuda-success__circle {
  stroke-dasharray: 152;
  stroke-dashoffset: 152;
  animation: nuda-success-circle 0.6s ease forwards;
}

.nuda-success__check {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: nuda-success-check 0.4s ease 0.5s forwards;
}

.nuda-success__label {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6ee7b7;
  opacity: 0;
  animation: nuda-success-label 0.3s ease 0.8s forwards;
}

@keyframes nuda-success-circle { to { stroke-dashoffset: 0; } }
@keyframes nuda-success-check  { to { stroke-dashoffset: 0; } }
@keyframes nuda-success-label  { to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-success__circle,
  .nuda-success__check {
    animation: none;
    stroke-dashoffset: 0;
  }
  .nuda-success__label { animation: none; opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── CANCEL UPLOAD BUTTON ─────────────── */
  {
    id: "cancel-upload-button",
    name: "Cancel Upload Button",
    category: "File Upload",
    preview: (
      <div className="nuda-cancel">
        <div className="nuda-cancel__progress" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}>
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <circle className="nuda-cancel__track" cx="18" cy="18" r="15" fill="none" />
            <circle className="nuda-cancel__fill" cx="18" cy="18" r="15" fill="none" />
          </svg>
          <button className="nuda-cancel__btn" type="button" aria-label="Cancel upload">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <span className="nuda-cancel__label">48% · cancel</span>
      </div>
    ),
    cssInline: `
      .nuda-cancel{display:inline-flex;align-items:center;gap:.6rem}
      .nuda-cancel__progress{position:relative;width:40px;height:40px}
      .nuda-cancel__progress svg{width:100%;height:100%;transform:rotate(-90deg)}
      .nuda-cancel__track{stroke:rgba(255,255,255,.08);stroke-width:3}
      .nuda-cancel__fill{stroke:#e4ff54;stroke-width:3;stroke-linecap:round;stroke-dasharray:94.25;stroke-dashoffset:49;transition:stroke-dashoffset .3s ease}
      .nuda-cancel__btn{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#fafafa;cursor:pointer;padding:0;border-radius:50%;transition:background .15s,color .15s}
      .nuda-cancel__btn:hover{background:rgba(255,94,122,.12);color:#ff5e7a}
      .nuda-cancel__btn svg{width:14px;height:14px}
      .nuda-cancel__label{font-size:.78rem;color:#a0a0a8;font-variant-numeric:tabular-nums}
      @media(prefers-reduced-motion:reduce){.nuda-cancel__fill,.nuda-cancel__btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cancel">
  <div class="nuda-cancel__progress" role="progressbar"
       aria-valuenow="48" aria-valuemin="0" aria-valuemax="100">
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <circle class="nuda-cancel__track" cx="18" cy="18" r="15" fill="none" />
      <circle class="nuda-cancel__fill"  cx="18" cy="18" r="15" fill="none" />
    </svg>
    <button class="nuda-cancel__btn" type="button" aria-label="Cancel upload">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" aria-hidden="true">
        <path d="M6 6l12 12M18 6l-12 12" stroke-linecap="round" />
      </svg>
    </button>
  </div>
  <span class="nuda-cancel__label">48% · cancel</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cancel Upload Button
   Ring-progress around an X that halts upload on click.
   Update stroke-dashoffset = circumference * (1 - progress).
   Circumference at r=15 is ~94.25. */

.nuda-cancel {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.nuda-cancel__progress {
  position: relative;
  width: 40px;
  height: 40px;
}

.nuda-cancel__progress svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.nuda-cancel__track {
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 3;
}

.nuda-cancel__fill {
  stroke: #e4ff54;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 94.25;
  stroke-dashoffset: 49;
  transition: stroke-dashoffset 0.3s ease;
}

.nuda-cancel__btn {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #fafafa;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: background 0.15s, color 0.15s;
}

.nuda-cancel__btn:hover {
  background: rgba(255, 94, 122, 0.12);
  color: #ff5e7a;
}

.nuda-cancel__btn svg { width: 14px; height: 14px; }

.nuda-cancel__label {
  font-size: 0.78rem;
  color: #a0a0a8;
  font-variant-numeric: tabular-nums;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cancel__fill,
  .nuda-cancel__btn { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── TOTAL PROGRESS ─────────────── */
  {
    id: "total-progress",
    name: "Total Progress",
    category: "File Upload",
    preview: (
      <div className="nuda-total" role="group" aria-label="Overall upload progress">
        <div className="nuda-total__head">
          <span className="nuda-total__title">Uploading 4 files</span>
          <span className="nuda-total__count">2 of 4 done</span>
        </div>
        <div className="nuda-total__track" role="progressbar" aria-valuenow={73} aria-valuemin={0} aria-valuemax={100}>
          <div className="nuda-total__fill" style={{ width: "73%" }}>
            <div className="nuda-total__shine" />
          </div>
        </div>
        <div className="nuda-total__foot">
          <span>14.2 / 19.5 MB</span>
          <span>00:12 remaining</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-total{display:flex;flex-direction:column;gap:.5rem;padding:.85rem 1rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:12px;min-width:300px}
      .nuda-total__head{display:flex;justify-content:space-between;font-size:.85rem}
      .nuda-total__title{color:#fafafa;font-weight:500}
      .nuda-total__count{color:#a0a0a8}
      .nuda-total__track{position:relative;width:100%;height:8px;background:rgba(255,255,255,.06);border-radius:999px;overflow:hidden}
      .nuda-total__fill{position:relative;height:100%;background:linear-gradient(90deg,#62b6ff,#e4ff54);border-radius:999px;transition:width .4s ease;overflow:hidden}
      .nuda-total__shine{position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);animation:_totshine 1.5s linear infinite}
      .nuda-total__foot{display:flex;justify-content:space-between;font-size:.72rem;color:#63636e;font-variant-numeric:tabular-nums}
      @keyframes _totshine{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-total__fill{transition:none}.nuda-total__shine{animation:none;display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-total" role="group" aria-label="Overall upload progress">
  <div class="nuda-total__head">
    <span class="nuda-total__title">Uploading 4 files</span>
    <span class="nuda-total__count">2 of 4 done</span>
  </div>
  <div class="nuda-total__track" role="progressbar"
       aria-valuenow="73" aria-valuemin="0" aria-valuemax="100">
    <div class="nuda-total__fill" style="width: 73%">
      <div class="nuda-total__shine"></div>
    </div>
  </div>
  <div class="nuda-total__foot">
    <span>14.2 / 19.5 MB</span>
    <span>00:12 remaining</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Total Progress
   Aggregate progress card across all queued files. */

.nuda-total {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  min-width: 300px;
}

.nuda-total__head {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}
.nuda-total__title { color: #fafafa; font-weight: 500; }
.nuda-total__count { color: #a0a0a8; }

.nuda-total__track {
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
}

.nuda-total__fill {
  position: relative;
  height: 100%;
  background: linear-gradient(90deg, #62b6ff, #e4ff54);
  border-radius: 999px;
  transition: width 0.4s ease;
  overflow: hidden;
}

.nuda-total__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: nuda-total-shine 1.5s linear infinite;
}

.nuda-total__foot {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #63636e;
  font-variant-numeric: tabular-nums;
}

@keyframes nuda-total-shine {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-total__fill { transition: none; }
  .nuda-total__shine { animation: none; display: none; }
}`,
      },
    ],
  },

  /* ─────────────── FILE VALIDATION ERROR ─────────────── */
  {
    id: "file-validation-error",
    name: "File Validation Error",
    category: "File Upload",
    preview: (
      <div className="nuda-valerr" role="alert">
        <svg className="nuda-valerr__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M10.3 3.86a2 2 0 0 1 3.4 0l8.3 13.92A2 2 0 0 1 20.3 21H3.7a2 2 0 0 1-1.7-3.22z" strokeLinejoin="round" />
          <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
        </svg>
        <div className="nuda-valerr__meta">
          <p className="nuda-valerr__title">File type not allowed</p>
          <p className="nuda-valerr__msg">
            <code>script.exe</code> · accepted: PDF, PNG, JPG, DOCX
          </p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-valerr{display:flex;align-items:flex-start;gap:.6rem;padding:.7rem .85rem;background:rgba(255,94,122,.06);border:1px solid rgba(255,94,122,.4);border-left:3px solid #ff5e7a;border-radius:8px;min-width:280px}
      .nuda-valerr__icon{width:18px;height:18px;color:#ff5e7a;flex-shrink:0;margin-top:1px}
      .nuda-valerr__meta{flex:1;min-width:0}
      .nuda-valerr__title{margin:0;font-size:.82rem;color:#fafafa;font-weight:600}
      .nuda-valerr__msg{margin:.15rem 0 0;font-size:.74rem;color:#a0a0a8}
      .nuda-valerr__msg code{padding:1px 5px;background:rgba(255,94,122,.12);color:#ff5e7a;border-radius:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.72rem}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-valerr" role="alert">
  <svg class="nuda-valerr__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <path d="M10.3 3.86a2 2 0 0 1 3.4 0l8.3 13.92A2 2 0 0 1 20.3 21H3.7a2 2 0 0 1-1.7-3.22z"
          stroke-linejoin="round" />
    <path d="M12 9v4M12 17h.01" stroke-linecap="round" />
  </svg>
  <div class="nuda-valerr__meta">
    <p class="nuda-valerr__title">File type not allowed</p>
    <p class="nuda-valerr__msg">
      <code>script.exe</code> · accepted: PDF, PNG, JPG, DOCX
    </p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File Validation Error
   Inline message for blocked extensions or oversize files. */

.nuda-valerr {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.7rem 0.85rem;
  background: rgba(255, 94, 122, 0.06);
  border: 1px solid rgba(255, 94, 122, 0.4);
  border-left: 3px solid #ff5e7a;
  border-radius: 8px;
  min-width: 280px;
}

.nuda-valerr__icon {
  width: 18px;
  height: 18px;
  color: #ff5e7a;
  flex-shrink: 0;
  margin-top: 1px;
}

.nuda-valerr__meta { flex: 1; min-width: 0; }

.nuda-valerr__title {
  margin: 0;
  font-size: 0.82rem;
  color: #fafafa;
  font-weight: 600;
}

.nuda-valerr__msg {
  margin: 0.15rem 0 0;
  font-size: 0.74rem;
  color: #a0a0a8;
}

.nuda-valerr__msg code {
  padding: 1px 5px;
  background: rgba(255, 94, 122, 0.12);
  color: #ff5e7a;
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.72rem;
}`,
      },
    ],
  },

  /* ─────────────── CLICK-TO-BROWSE BUTTON ─────────────── */
  {
    id: "click-to-browse-button",
    name: "Click-to-browse Button",
    category: "File Upload",
    preview: (
      <button className="nuda-browse" type="button">
        <svg className="nuda-browse__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21.5 11.5l-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Attach files</span>
      </button>
    ),
    cssInline: `
      .nuda-browse{display:inline-flex;align-items:center;gap:.5rem;padding:.55rem .95rem;background:#111114;color:#fafafa;border:1px solid rgba(255,255,255,.1);border-radius:8px;font-size:.85rem;font-weight:500;cursor:pointer;transition:background .15s,border-color .15s,transform .15s}
      .nuda-browse:hover{background:#0c0c10;border-color:rgba(228,255,84,.4)}
      .nuda-browse:hover .nuda-browse__icon{color:#e4ff54;transform:rotate(-12deg)}
      .nuda-browse:active{transform:translateY(1px)}
      .nuda-browse__icon{width:16px;height:16px;color:#a0a0a8;transition:transform .2s,color .15s}
      @media(prefers-reduced-motion:reduce){.nuda-browse,.nuda-browse__icon{transition:none}.nuda-browse:hover .nuda-browse__icon{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-browse" type="button">
  <svg class="nuda-browse__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <path d="M21.5 11.5l-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"
          stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <span>Attach files</span>
</button>

<!-- Pair with a hidden input for real uploads:
<input type="file" multiple hidden /> -->`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Click-to-browse Button
   Paperclip-style button to open the file picker. */

.nuda-browse {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.95rem;
  background: #111114;
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.15s,
    border-color 0.15s,
    transform 0.15s;
}

.nuda-browse:hover {
  background: #0c0c10;
  border-color: rgba(228, 255, 84, 0.4);
}

.nuda-browse:hover .nuda-browse__icon {
  color: #e4ff54;
  transform: rotate(-12deg);
}

.nuda-browse:active { transform: translateY(1px); }

.nuda-browse__icon {
  width: 16px;
  height: 16px;
  color: #a0a0a8;
  transition: transform 0.2s, color 0.15s;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-browse,
  .nuda-browse__icon { transition: none; }
  .nuda-browse:hover .nuda-browse__icon { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── PASTE FROM CLIPBOARD HINT ─────────────── */
  {
    id: "paste-clipboard-hint",
    name: "Paste from Clipboard Hint",
    category: "File Upload",
    preview: (
      <div className="nuda-paste" role="note">
        <svg className="nuda-paste__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="8" y="3" width="8" height="4" rx="1" strokeLinejoin="round" />
          <path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" strokeLinejoin="round" />
        </svg>
        <span className="nuda-paste__text">Or paste an image with</span>
        <kbd className="nuda-paste__kbd">Ctrl</kbd>
        <span className="nuda-paste__plus">+</span>
        <kbd className="nuda-paste__kbd">V</kbd>
      </div>
    ),
    cssInline: `
      .nuda-paste{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem .75rem;background:#0c0c10;border:1px dashed rgba(255,255,255,.1);border-radius:8px;color:#a0a0a8;font-size:.78rem}
      .nuda-paste__icon{width:14px;height:14px;color:#62b6ff;flex-shrink:0}
      .nuda-paste__text{color:#a0a0a8}
      .nuda-paste__kbd{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 5px;background:#111114;border:1px solid rgba(255,255,255,.1);border-bottom-width:2px;border-radius:4px;color:#fafafa;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.7rem;font-weight:500;line-height:1}
      .nuda-paste__plus{color:#63636e;font-size:.7rem}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-paste" role="note">
  <svg class="nuda-paste__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <rect x="8" y="3" width="8" height="4" rx="1" stroke-linejoin="round" />
    <path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"
          stroke-linejoin="round" />
  </svg>
  <span class="nuda-paste__text">Or paste an image with</span>
  <kbd class="nuda-paste__kbd">Ctrl</kbd>
  <span class="nuda-paste__plus">+</span>
  <kbd class="nuda-paste__kbd">V</kbd>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Paste from Clipboard Hint
   Inline tip showing the keyboard shortcut. */

.nuda-paste {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.75rem;
  background: #0c0c10;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #a0a0a8;
  font-size: 0.78rem;
}

.nuda-paste__icon {
  width: 14px;
  height: 14px;
  color: #62b6ff;
  flex-shrink: 0;
}

.nuda-paste__kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 20px;
  padding: 0 5px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom-width: 2px;
  border-radius: 4px;
  color: #fafafa;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1;
}

.nuda-paste__plus {
  color: #63636e;
  font-size: 0.7rem;
}`,
      },
    ],
  },

  /* ─────────────── UPLOAD QUEUE INDICATOR ─────────────── */
  {
    id: "upload-queue-indicator",
    name: "Upload Queue Indicator",
    category: "File Upload",
    preview: (
      <div className="nuda-queue" role="list" aria-label="Upload queue">
        <div className="nuda-queue__item nuda-queue__item--active" role="listitem">
          <span className="nuda-queue__spinner" aria-hidden="true" />
          <span className="nuda-queue__label">report-q4.pdf</span>
          <span className="nuda-queue__status">Uploading</span>
        </div>
        <div className="nuda-queue__item" role="listitem">
          <span className="nuda-queue__dot" aria-hidden="true">2</span>
          <span className="nuda-queue__label">photo-01.jpg</span>
          <span className="nuda-queue__status nuda-queue__status--wait">Waiting</span>
        </div>
        <div className="nuda-queue__item" role="listitem">
          <span className="nuda-queue__dot" aria-hidden="true">3</span>
          <span className="nuda-queue__label">archive.zip</span>
          <span className="nuda-queue__status nuda-queue__status--wait">Waiting</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-queue{display:flex;flex-direction:column;gap:.3rem;padding:.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:10px;min-width:280px}
      .nuda-queue__item{display:flex;align-items:center;gap:.6rem;padding:.45rem .6rem;border-radius:6px;font-size:.78rem;color:#a0a0a8}
      .nuda-queue__item--active{background:rgba(228,255,84,.06);color:#fafafa}
      .nuda-queue__dot{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:50%;color:#63636e;font-size:.65rem;font-weight:600;flex-shrink:0}
      .nuda-queue__spinner{width:14px;height:14px;border:1.5px solid rgba(228,255,84,.2);border-top-color:#e4ff54;border-radius:50%;animation:_qspin .8s linear infinite;flex-shrink:0;margin:2px}
      .nuda-queue__label{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-queue__status{font-size:.7rem;color:#e4ff54;font-weight:500}
      .nuda-queue__status--wait{color:#63636e}
      @keyframes _qspin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-queue__spinner{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-queue" role="list" aria-label="Upload queue">
  <div class="nuda-queue__item nuda-queue__item--active" role="listitem">
    <span class="nuda-queue__spinner" aria-hidden="true"></span>
    <span class="nuda-queue__label">report-q4.pdf</span>
    <span class="nuda-queue__status">Uploading</span>
  </div>
  <div class="nuda-queue__item" role="listitem">
    <span class="nuda-queue__dot" aria-hidden="true">2</span>
    <span class="nuda-queue__label">photo-01.jpg</span>
    <span class="nuda-queue__status nuda-queue__status--wait">Waiting</span>
  </div>
  <div class="nuda-queue__item" role="listitem">
    <span class="nuda-queue__dot" aria-hidden="true">3</span>
    <span class="nuda-queue__label">archive.zip</span>
    <span class="nuda-queue__status nuda-queue__status--wait">Waiting</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Upload Queue Indicator
   Active item shows spinner; waiting items show numeric slot. */

.nuda-queue {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  min-width: 280px;
}

.nuda-queue__item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  font-size: 0.78rem;
  color: #a0a0a8;
}

.nuda-queue__item--active {
  background: rgba(228, 255, 84, 0.06);
  color: #fafafa;
}

.nuda-queue__dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  color: #63636e;
  font-size: 0.65rem;
  font-weight: 600;
  flex-shrink: 0;
}

.nuda-queue__spinner {
  width: 14px;
  height: 14px;
  border: 1.5px solid rgba(228, 255, 84, 0.2);
  border-top-color: #e4ff54;
  border-radius: 50%;
  animation: nuda-queue-spin 0.8s linear infinite;
  flex-shrink: 0;
  margin: 2px;
}

.nuda-queue__label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nuda-queue__status {
  font-size: 0.7rem;
  color: #e4ff54;
  font-weight: 500;
}

.nuda-queue__status--wait { color: #63636e; }

@keyframes nuda-queue-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-queue__spinner { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── FILE REPLACED NOTIFICATION ─────────────── */
  {
    id: "file-replaced-notification",
    name: "File Replaced Notification",
    category: "File Upload",
    preview: (
      <div className="nuda-replaced" role="status">
        <div className="nuda-replaced__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 15-6.7L21 7" strokeLinecap="round" />
            <path d="M21 4v3h-3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 17" strokeLinecap="round" />
            <path d="M3 20v-3h3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="nuda-replaced__body">
          <p className="nuda-replaced__title">File replaced</p>
          <p className="nuda-replaced__meta">
            <span className="nuda-replaced__old">cover-v1.png</span>
            <span className="nuda-replaced__arrow" aria-hidden="true">→</span>
            <span className="nuda-replaced__new">cover-v2.png</span>
          </p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-replaced{display:flex;align-items:center;gap:.7rem;padding:.65rem .85rem;background:rgba(98,182,255,.06);border:1px solid rgba(98,182,255,.3);border-radius:10px;min-width:280px;animation:_replslide .35s ease}
      .nuda-replaced__icon{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:rgba(98,182,255,.12);border-radius:8px;color:#62b6ff;flex-shrink:0}
      .nuda-replaced__icon svg{width:16px;height:16px}
      .nuda-replaced__body{flex:1;min-width:0}
      .nuda-replaced__title{margin:0;font-size:.82rem;color:#fafafa;font-weight:600}
      .nuda-replaced__meta{margin:.1rem 0 0;display:flex;align-items:center;gap:.35rem;font-size:.74rem;flex-wrap:wrap}
      .nuda-replaced__old{color:#63636e;text-decoration:line-through}
      .nuda-replaced__arrow{color:#62b6ff}
      .nuda-replaced__new{color:#62b6ff;font-weight:500}
      @keyframes _replslide{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-replaced{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-replaced" role="status">
  <div class="nuda-replaced__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 7" stroke-linecap="round" />
      <path d="M21 4v3h-3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 17" stroke-linecap="round" />
      <path d="M3 20v-3h3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="nuda-replaced__body">
    <p class="nuda-replaced__title">File replaced</p>
    <p class="nuda-replaced__meta">
      <span class="nuda-replaced__old">cover-v1.png</span>
      <span class="nuda-replaced__arrow" aria-hidden="true">&rarr;</span>
      <span class="nuda-replaced__new">cover-v2.png</span>
    </p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File Replaced Notification
   Inline notice when a file overwrites an existing one. */

.nuda-replaced {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.65rem 0.85rem;
  background: rgba(98, 182, 255, 0.06);
  border: 1px solid rgba(98, 182, 255, 0.3);
  border-radius: 10px;
  min-width: 280px;
  animation: nuda-replaced-slide 0.35s ease;
}

.nuda-replaced__icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(98, 182, 255, 0.12);
  border-radius: 8px;
  color: #62b6ff;
  flex-shrink: 0;
}
.nuda-replaced__icon svg { width: 16px; height: 16px; }

.nuda-replaced__body { flex: 1; min-width: 0; }

.nuda-replaced__title {
  margin: 0;
  font-size: 0.82rem;
  color: #fafafa;
  font-weight: 600;
}

.nuda-replaced__meta {
  margin: 0.1rem 0 0;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.74rem;
  flex-wrap: wrap;
}

.nuda-replaced__old {
  color: #63636e;
  text-decoration: line-through;
}

.nuda-replaced__arrow { color: #62b6ff; }

.nuda-replaced__new {
  color: #62b6ff;
  font-weight: 500;
}

@keyframes nuda-replaced-slide {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-replaced { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── EMPTY STATE ─────────────── */
  {
    id: "empty-state",
    name: "Empty State No Files",
    category: "File Upload",
    preview: (
      <div className="nuda-empty" role="status">
        <div className="nuda-empty__art" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <rect x="12" y="18" width="32" height="40" rx="3" fill="#111114" stroke="rgba(255,255,255,.1)" strokeWidth="1.5" />
            <rect x="20" y="10" width="32" height="40" rx="3" fill="#0c0c10" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" />
            <path d="M28 24h16M28 30h16M28 36h10" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="48" cy="46" r="8" fill="#0c0c10" stroke="#e4ff54" strokeWidth="1.5" />
            <path d="M48 42v8M44 46h8" stroke="#e4ff54" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="nuda-empty__title">No files yet</p>
        <p className="nuda-empty__hint">Drop files here or browse to start uploading</p>
      </div>
    ),
    cssInline: `
      .nuda-empty{display:flex;flex-direction:column;align-items:center;gap:.4rem;padding:1.5rem 1.25rem;background:#0c0c10;border:1px dashed rgba(255,255,255,.08);border-radius:12px;min-width:280px}
      .nuda-empty__art{width:64px;height:64px;display:flex;align-items:center;justify-content:center;margin-bottom:.25rem;animation:_emptyfloat 3s ease-in-out infinite}
      .nuda-empty__art svg{width:100%;height:100%}
      .nuda-empty__title{margin:0;font-size:.9rem;color:#fafafa;font-weight:600}
      .nuda-empty__hint{margin:0;font-size:.78rem;color:#63636e;text-align:center}
      @keyframes _emptyfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @media(prefers-reduced-motion:reduce){.nuda-empty__art{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-empty" role="status">
  <div class="nuda-empty__art" aria-hidden="true">
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="12" y="18" width="32" height="40" rx="3"
            fill="#111114" stroke="rgba(255,255,255,.1)" stroke-width="1.5" />
      <rect x="20" y="10" width="32" height="40" rx="3"
            fill="#0c0c10" stroke="rgba(255,255,255,.15)" stroke-width="1.5" />
      <path d="M28 24h16M28 30h16M28 36h10"
            stroke="rgba(255,255,255,.2)" stroke-width="1.5"
            stroke-linecap="round" />
      <circle cx="48" cy="46" r="8" fill="#0c0c10"
              stroke="#e4ff54" stroke-width="1.5" />
      <path d="M48 42v8M44 46h8"
            stroke="#e4ff54" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  </div>
  <p class="nuda-empty__title">No files yet</p>
  <p class="nuda-empty__hint">Drop files here or browse to start uploading</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Empty State — No Files
   Friendly placeholder shown before any uploads exist. */

.nuda-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.5rem 1.25rem;
  background: #0c0c10;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  min-width: 280px;
}

.nuda-empty__art {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  animation: nuda-empty-float 3s ease-in-out infinite;
}

.nuda-empty__art svg {
  width: 100%;
  height: 100%;
}

.nuda-empty__title {
  margin: 0;
  font-size: 0.9rem;
  color: #fafafa;
  font-weight: 600;
}

.nuda-empty__hint {
  margin: 0;
  font-size: 0.78rem;
  color: #63636e;
  text-align: center;
}

@keyframes nuda-empty-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-empty__art { animation: none; }
}`,
      },
    ],
  },
];
