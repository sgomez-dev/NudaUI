# Build Report — NudaUI Brag Reel

## What was built

A single-file, monolithic Hyperframes composition (`composition/index.html`, 1080×1920,
23.0s, one paused GSAP timeline registered as `nudaui-brag`) implementing all seven
scenes from `brag-plan.md` at the exact boundaries required by the brief:

| Scene | Window | Content |
|---|---|---|
| 1 — The opinion | 0.0–3.0s | `200kb` / `for a loading spinner` / `is insane.` landing on beats 0.0/0.5/1.0, real Conic Spin running small in the lower third |
| 2 — The number | 3.0–6.0s | `0 → 1,503` count-up finishing at 4.6s, `components` at 4.8s, `81 categories` at 5.2s |
| 3 — The wall | 6.0–10.0s | All six real components in a 2-col grid, arriving on the 0.5s beat grid (6.0→8.5), held animating; audio-reactive glow behind the wall |
| 4 — The install that isn't | 10.0–13.5s | `$ npm install …` types, strikes through at 11.2s, evaporates; `Grab the snippet. That's the whole install.`; real Conic Spin HTML in a code block; `Copied ✓` at 12.6s |
| 5 — Works everywhere | 13.5–17.0s | 8 framework names cycling in one slot; `If it renders markup, it runs NudaUI.` held; `✓ prefers-reduced-motion, shipped by default.` from 15.5s |
| 6 — Agent reveal | 17.0–20.5s (beat-locked 17.00s) | `claude mcp add --transport http nudaui https://nudaui.dev/mcp` types; bubble `"build me a pricing page"` at 18.0s; 3 pricing cards snap in at 19.0/19.15/20.0; `Zero install. For your agent too.` |
| 7 — Wordmark | 20.5–23.0s (beat-locked 20.50s) | `NudaUI` slams in with audio-reactive glow; `1,503 components. Zero dependencies.` at 21.2s; `nudaui.dev` at 21.8s |

All seven scene boundaries (0.0, 3.0, 6.0, 10.0, 13.5, 17.0, 20.5, 23.0) match the brief
exactly. Palette (`#09090b` surface, `#e4ff54` accent, etc.), Inter for display copy, and
JetBrains Mono for every number/code/terminal line are implemented as CSS custom
properties on `#root`. Both families are in Hyperframes' pre-bundled font set, so no
`@font-face` was needed and they render deterministically offline.

## How the six real components were embedded

`_components.json`'s `html` and `css` fields for `pulse-dots`, `conic-spin-loader`,
`smooth-toggle`, `stripe-progress`, `pulse-grid-skeleton`, and `shine-sweep` were parsed
programmatically (Node reading the JSON directly, never retyped by hand) and pasted
verbatim into `index.html`:

- The CSS is consolidated once in the `<style>` block (each component's full, commented
  source, unmodified) and referenced by class from multiple scenes (Conic Spin appears
  in both scene 1 and scene 3; the same declarations, no duplication of logic).
- The HTML markup is pasted as-is into scene 3's wall (all six) and scene 1 / scene 4
  (Conic Spin, once each) — comments, ARIA attributes, and inline `style="width:65%"`
  on Stripe Progress all preserved exactly as shipped.
- Two deliberate, additive, non-destructive touches were needed because the render has
  no pointer input and no user interaction:
  - **Smooth Toggle**: its own shipped `:checked` transition CSS is fired once via
    `document.querySelector('#s3-card-3 .nuda-toggle__input').checked = true` inside a
    `tl.call()` at t=8.3s — a scripted, deterministic state change, not a recreation of
    the toggle's motion.
  - **Shine Sweep**: its sweep only fires on `:hover`, which never happens in a headless
    render. An *additional* selector was appended after the component's own CSS —
    `.s3-card[data-demo-active] .nuda-shine-sweep::after { animation: nuda-shine-sweep-anim 1.8s ease-in-out infinite; }`
    — running the exact same keyframe declared by the component, triggered by a
    timeline-toggled `data-demo-active` attribute instead of a mouse. The component's own
    `:hover` rule and keyframe are untouched.
- No component was recreated, approximated, or restyled. No customization CSS variables
  (e.g. `--pulse-dots-color`, `--nuda-tg-bg-on`) were overridden — each component's
  shipped default colors (purple pulse-dots, lime conic-spin, indigo toggle/progress/
  shine-sweep) appear as-is, which is why the wall shows a mix of brand colors rather
  than being forced into the surrounding lime/near-black palette.

## `hyperframes check` result

Clean on the final pass:

```
Lint      0 error(s), 2 warning(s), 0 info(s)   (both warnings are organizational:
                                                   "split into sub-compositions" —
                                                   expected for a single 23s file)
Runtime   0 errors, 0 warnings
Layout    0 issues across 9 sample(s)
Motion    0 errors, 0 warnings
Contrast  14/14 text checks pass WCAG AA
◇ Check passed
```

Errors fixed along the way (all resolved before the clean run above):
- `gsap_css_transform_conflict` on the scene-4 strike-through line — moved the initial
  `scaleX(0)` out of CSS into `gsap.set()`.
- `audio_volume_tween_overrides_gain` on `#bgm` — removed the redundant `data-volume`/
  `tl.set` pairing; `data-volume="1"` is now the sole baseline and the tween owns only
  the final 0.6s fade.
- `gsap_timeline_set_initial_hide` (×3) — moved `#s1-eyebrow`, `#s4-strike`, and
  `#s4-copied`'s initial hidden states from `tl.set(..., 0)` to immediate `gsap.set()`
  calls outside the timeline.
- A real layout bug: `.scene` had no explicit `width`/`height`, so under flex layout it
  shrank to content height instead of filling the 1080×1920 canvas. This made the scene-1
  spinner (positioned `bottom: 230px` relative to the collapsed box) render on top of the
  "200kb" headline instead of in the lower third, and caused scene-6's typed command to
  overflow its container. Fixed by adding `width: 100%; height: 100%;` to `.scene`, then
  visually re-verified via snapshot.
- Scene-6 terminal text overflow (real font metrics run slightly wider than my initial
  estimate) — widened the terminal panel and dropped the command line to 24px (the
  in-feed data-label floor), re-checked with `hyperframes snapshot`.
- Two intentional-occlusion info findings (the strike-through is *supposed* to cover the
  npm text) were suppressed with `data-layout-allow-occlusion="true"` on the line's
  container rather than hidden from the audit blindly — confirmed by re-running `check`.

## Render

```
npx hyperframes render --quality delivery --output ../brag.mp4
```
Rendered in 1m 21.2s (690 frames @ 30fps, screenshot capture, hardware GPU, 3 workers).
Output: 3.9 MB before the poster bake.

Poster frame baked afterward with ffmpeg (overlay on frame 0 only, `-c:v libx264 -crf 18
-preset slow`, `-c:a copy`), which re-encoded the video stream — final file is 2.6 MB,
same duration/dimensions/audio.

## ffprobe (final `brag.mp4`)

```
video: h264, 1080x1920, 30 fps, 690 frames, yuv420p
audio: aac, 48000 Hz, stereo
format: duration=23.000000, size=2,696,748 bytes
```

## Frames inspected

Pre-render CSS snapshots (`hyperframes snapshot`) at 0.9, 1.28, 2.9, 5.5, 9.5, 11.3,
11.5, 12.8, 16.2, 17.9, 19.17, 19.3, 22.0s — used to catch and fix the `.scene` sizing
bug and the scene-6 overflow above.

Post-render frames pulled from the actual `brag.mp4` with ffprobe/ffmpeg at 0 (poster),
1.0, 4.0, 7.5, 11.5, 14.5, 17.9, 19.5, 21.5, 22.2s. Confirmed in every frame: text fully
legible and unclipped, palette correct (`#09090b` surface / `#e4ff54` accent throughout),
JetBrains Mono on all numbers/code/terminal lines, and — the load-bearing check — the
real components visibly animating and distinguishable from each other in the scene-3
wall (purple Pulse Dots, lime Conic Spin ring rotating, white toggle thumb, indigo
striped progress bar, dim Pulse Grid tiles, indigo Shine Sweep button). The scene-1 and
scene-4 Conic Spin instances are visibly mid-rotation at different frames, confirming
the CSS animation is live, not a static image. One frame (14.5s, scene 5) was captured
mid-snap on a name-swap tween (`Svelte` at ~35% into its 0.18s scale/opacity-in), which
reads as a dim flash rather than a defect — by design, since the swap is meant to feel
like a quick snap-in on the beat.

## SFX chosen

Chosen only after the animation existed, matched to the actual motion (per
`~/.claude/skills/brag/references/audio.md`):

- **Scenes 1, 2, 3, 5 (repeated ticks)**: `interface/click_003.ogg` — explicitly listed
  as low high-frequency-risk in `sfx-analysis.md`, reused for every repeated tick (3
  fragment lands, 6 sparse count ticks, 6 card arrivals, 8 name swaps = 23 uses of the
  same low-HF file) rather than mixing families, so the repeated moments in scenes 3 and
  5 stay coherent instead of becoming a pile of different tones. Volume decreases across
  the scene-3 card arrivals (0.50→0.20) and stays flat and quiet for scene 5 (0.18,
  "well under the music" per the brief).
- **Scenes 4 and 6 (typing)**: `keyboard/keypress-001..008.wav`, cycled deterministically
  by index (not `Math.random`) — every 2nd character for the short npm line (7 ticks),
  every 4th character for the long mcp command (16 ticks) to keep the count reasonable
  for a 61-character line typed in 0.8s without turning it into 61 overlapping clicks.
- **Scene 4 `Copied ✓`**: `interface/click_005.ogg` — a distinct click from the card/tick
  family, for the one simulated user action in the video.
- **Scene 6 pricing-card snaps**: `impact/impactSoft_medium_001.ogg` — low HF risk,
  "major reveal" per `sfx-analysis.md`, three hits at 19.0/19.15/20.0s (one per card).
- **Scene 7 wordmark**: `impact/impactBell_heavy_000.ogg` — "logo payoff" per
  `sfx-analysis.md`, the one deliberately bigger/brighter cue in the whole video, reserved
  for the single clean payoff moment.

Total: 51 SFX `<audio>` elements + the music bed, each on its own ascending
`data-track-index` (11–61) so no two ever share a lane. All copied into
`composition/assets/sfx/{interface,keyboard,impact}/`.

## Music

`assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3`, played via
`data-media-start="3.02"` so video t=0 lands on a beat, full level (`data-volume="1"`,
no fade-in) until a single `tl.to(volume: 0, duration: 0.6)` fade at 22.4–23.0s. Strong
cues locked exactly as required: `// beat-locked: 17.00s` (scene 6 MCP reveal) and
`// beat-locked: 20.50s` (scene 7 wordmark). The scene-3 card grid and scene-5 name
swaps are marked `// beat-grid: ...` inline. Scene 5's eighth swap (`HTML`) lands at
16.75s rather than a 0.5s grid point — documented in the code: the 3.5s window only
contains 7 grid points (13.50→16.50) before the 17.0s hard cut, so the last of the eight
required framework names was placed just ahead of the cut rather than dropped.

## Audio-reactive glow

Implemented per `hyperframes-creative`'s audio-reactive sampling pattern (a `for` loop of
`tl.call()`, not runtime Web Audio analysis): the music was trimmed to the video's exact
3.02s-offset 23.6s window with ffmpeg, per-frame RMS extracted with the bundled
`extract-audio-data.py` at 30fps, and the resulting 708-value array embedded as
`composition/assets/audio-rms.js`. Two full-bleed radial-gradient divs (`#s3-glow` behind
the scene-3 wall, `#s7-glow` behind the scene-7 wordmark) have their `opacity` sampled
every frame (`0.42 + rms * 0.55`) across their respective windows — 120 + 75 = 195
scheduled calls. No waveforms, EQ bars, or note graphics; just the accent glow breathing.

## What could not be implemented / concerns

- Nothing from the brief was skipped. The only deliberate deviations from a literal
  reading are documented above (the two additive component-trigger touches, and the
  scene-5 8th-name timing) and are both explained in code comments.
- `composition_file_too_large` / `timeline_track_too_dense` lint warnings are expected
  and accepted: this is one monolithic 23s file by design (simpler to review as a single
  artifact) rather than split into `compositions/*.html` sub-files.
- I did not verify audio playback by ear (no audio device in this environment) — SFX
  and music timing were verified structurally (ffprobe stream presence, track-index
  allocation, `check`'s runtime pass) and by design intent, not by listening.

---

## Fix round: vertical-centering defect (post-review)

A reviewer pulled frames from the rendered mp4 and found scenes 1, 4 and 6 top-aligned
(content ending 40–45% down the canvas, bottom half empty) while scenes 2, 3 and 7 were
properly centered — a real layout inconsistency, not a stylistic choice.

### Root cause

`#s1`, `#s4` and `#s6` were authored with `justify-content: flex-start` plus a manual
`padding-top` (150px / 210px / 260px) instead of `justify-content: center` like scenes
2/3/7. Scene 1's spinner was also `position: absolute; bottom: 230px`, isolated in the
lower-left corner rather than composed with the text above it.

### Changes made

- **`#s1`**: `justify-content: flex-start; padding: 150px 84px 0` → `align-items:
  flex-start; justify-content: center; padding: 0 84px`. `#s1-spinner-dock` moved from
  `position: absolute; bottom: 230px` to a normal-flow element with `margin-top: 60px`,
  so it sits directly under the third line as part of the same centered block (still
  scaled 1.9× in place — no size/timing change, purely a positioning change).
- **`#s4`**: `justify-content: flex-start; padding-top: 210px` → `justify-content:
  center` (padding removed). A second, subtler bug surfaced here: the terminal
  (`#s4-terminal`) fades out at t=11.35s but, as a normal flex child, still reserved its
  flow height — so once it faded, the visible replace-text + code-block that follow it
  sat in the lower half of the centered flex block instead of true canvas-center. Fixed
  by taking `#s4-terminal` out of flow (`position: absolute; left: 50%; margin-left:
  -460px; top: 886px` — the top value centers its own 148px height on the 1920px
  canvas), so it centers independently while visible, and the remaining flex children
  (replace text + code block) center correctly on their own once it's gone.
- **`#s6`**: `justify-content: flex-start; padding-top: 260px` → `justify-content:
  center` (padding removed). No absolute-positioning fix was needed here — nothing in
  scene 6 fades out mid-scene, so all flow height stays visible and centers correctly.
- **Scene-3 caption**: confirmed present but mistimed, not missing — `#s3-caption`'s
  entrance was scheduled at t=9.0s, so a frame pulled at t=8.8s (before the tween starts)
  legitimately showed nothing. Moved the entrance to **t=8.6s** (right after the 6th card
  settles at 8.5s) so it's visible for 1.4s of the hold instead of 1.0s, and is now
  present well before t=8.8s. This is a reveal-timing nudge, not a beat-lock or
  scene-duration change — the two beat locks (17.00s, 20.50s) and the scene-3/5
  beat-grid reveals are untouched.

No font sizes, scene durations, beat locks, or beat-grid reveal times were changed.

### Re-verification

- `npx hyperframes check` → still **0 errors** (Lint 0 error/2 warning, Runtime 0/0,
  Layout 0 issues across 9 samples, Motion 0/0, Contrast 14/14 WCAG AA pass). The two
  lint warnings are the same pre-existing organizational notes (file size / track
  density) from the original build.
- Re-rendered: `npx hyperframes render --quality delivery --output ../brag.mp4`,
  58.5s render time, 690 frames @ 30fps. `ffprobe` confirms `1080x1920`, `duration=
  23.000000`, h264 + aac streams intact.
- Pulled fresh frames from the **rendered mp4** at t=1.5, 12.8, 16.0, 19.5s and looked at
  them:
  - **t=1.5s (scene 1)**: eyebrow, three hook lines, and the Conic Spin spinner now read
    as one centered composed block — spinner directly under "is insane.", not isolated
    in a corner. Vertically balanced, comfortably inside the safe band.
  - **t=12.8s (scene 4)**: "Grab the snippet..." + the real component code block +
    `Copied ✓` badge are centered as a block, matching scenes 2/3/7's balance. The
    (by-then invisible) terminal no longer drags the visible content downward.
  - **t=16.0s (scene 5, sampled as the closest of the four)**: "Django" + claim line +
    `prefers-reduced-motion` line centered — included for reference; scene 5 was already
    correct and untouched.
  - **t=19.5s (scene 6)**: "Zero install..." headline, mcp terminal, prompt bubble, and
    both pricing cards read as one centered block with even margins top and bottom.
  - Also re-checked t=8.8s directly: the scene-3 caption **is now visible**
    (`every one of these is CSS you paste`), confirming the timing fix.
  - Nothing new is clipped, overlapping, or pushed into the top ~10% / bottom ~20%
    unsafe bands in any of the four frames.
- Poster re-extracted at t=22.2s (unchanged scene 7) and re-baked as frame 0 of the new
  `brag.mp4` (same `ffmpeg overlay=enable='eq(n,0)'` recipe); duration/dimensions/audio
  confirmed unchanged (23.000000s, 1080×1920, h264+aac) after the bake.

---

## Fix round 2: scene-3 caption in the Reels-unsafe zone (post-review)

A reviewer confirmed the vertical-centering fix worked (scenes 1/4/6 balanced, scene-3
caption visible at t=8.8s) but flagged one remaining defect: the scene-3 caption
(`every one of these is CSS you paste`) sat at roughly y=1830 of 1920 — inside
Instagram Reels' bottom-chrome overlay band (username/caption/audio-strip/action
buttons, roughly the final 250–320px), where it would be partly or fully covered in
the actual feed. That line is the one that tells the viewer the wall is real product
code, not decoration, so losing it to platform UI would quietly undercut the scene.

### Change made

`#s3-caption` moved from `bottom: 76px` (bottom edge ~y=1844, top edge ~y=1808) to
`bottom: 440px` (bottom edge ~y=1480, top edge ~y=1444) — directly beneath the
component wall (which ends ~y=1350) with a ~94px gap that reads as "caption on the
grid," and ~156px of margin above the y≈1600 safe limit. `left: 70px` (aligned with
the wall's left edge) was left unchanged. No font-size, timing, or duration change.

### Sanity-check of the rest of the timeline

Checked scene 2 (labels ~t=5.0–6.0s) and scene 5 (~t=15.5–17.0s) specifically, since the
reviewer had not sampled them, plus re-confirmed scenes 1/4/6/7:

- **Scene 2**: counter + `components` + `81 categories` centered as a flex block,
  content spans roughly y=774–1145. Well clear of y≈1600.
- **Scene 5**: framework-name slot + claim sentence + `prefers-reduced-motion` line
  centered as a flex block, spans roughly y=717–1203. Well clear of y≈1600.
- **Scenes 1, 4, 6, 7**: unchanged since the previous fix round, all end well above
  y≈1600 (confirmed again visually below).

The scene-3 caption was the only element anywhere in the timeline sitting below
y≈1600.

### Re-verification

- `npx hyperframes check` → still **0 errors** (Lint 0 error/2 warning — same
  pre-existing file-size/track-density notes; Runtime 0/0; Layout 0 issues across 9
  samples; Motion 0/0; Contrast 14/14 WCAG AA pass).
- Re-rendered: `npx hyperframes render --quality delivery --output ../brag.mp4`, 1m
  3.2s, 690 frames @ 30fps. `ffprobe` confirms `1080x1920`, `duration=23.000000`,
  h264+aac intact.
- Pulled a fresh frame from the rendered mp4 at **t=8.8s**: the caption is now clearly
  visible directly beneath the six-card wall, comfortably inside the safe band, reading
  as a caption on the grid rather than a stray footer.
- Poster re-extracted at t=22.2s (scene 7, unchanged) and re-baked as frame 0 of the new
  `brag.mp4`; duration/dimensions/audio confirmed unchanged after the bake.

Beat locks at 17.00s and 20.50s, all scene durations, and every other font size /
timing were untouched in this fix round.
