# Hyperframes Composition Brief: NudaUI

## Objective
Create a short launch-style brag video for NudaUI — a library of 1,503 copy-paste CSS & JS UI animations with zero dependencies, no npm install and no build step. Target platform is Instagram Reels.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: vertical — 1080x1920
- Duration: 23s

## Source Material
- Project root: `C:\Users\santiago.gomez\Desktop\Repos\NudaUI`
- Primary files read: `src/app/globals.css` (design tokens), `src/lib/landing-content.ts` (all copy), `README.md`, `src/components/showcase/registry/` (the component registry)
- Product name: NudaUI
- Tagline: *Animations without the baggage*
- Strongest claim: **"200kb for a loading spinner is insane."**

### The load-bearing source material: real component code

`brag-output/_components.json` contains the **real, complete source of six
NudaUI components**, extracted from the project's own registry. Each entry has
`id`, `name`, `category`, `html`, `css` and `cssInline`.

| id | name | category | css size |
| --- | --- | --- | --- |
| `pulse-dots` | Pulse Dots | Loaders | 895 B |
| `conic-spin-loader` | Conic Spin | Spinners | 798 B |
| `smooth-toggle` | Smooth Toggle | Toggles & Inputs | 2244 B |
| `stripe-progress` | Stripe Progress | Progress | 1042 B |
| `pulse-grid-skeleton` | Pulse Grid | Skeletons | 771 B |
| `shine-sweep` | Shine Sweep | Buttons | 1398 B |

**These must be used as-is — real HTML and CSS pasted into the composition, not
recreated or approximated.** They are pure CSS with no JS and no dependencies,
so they drop straight in and animate on their own.

This is the entire creative premise: the video's motion graphics *are* the
product, running. Do not substitute lookalikes; the authenticity is the point,
and recreating them would quietly destroy the only claim a competitor cannot
fake. Namespace or scope their selectors if needed to avoid collisions, but keep
the declarations intact.

### Copy that must appear verbatim
- `200kb for a loading spinner is insane.`
- `Grab the snippet. That's the whole install.`
- `If it renders markup, it runs NudaUI.`
- `prefers-reduced-motion, shipped by default.`
- `Zero install. For your agent too.`
- `1,503 components. Zero dependencies.`
- `nudaui.dev`
- `claude mcp add --transport http nudaui https://nudaui.dev/mcp`

Numbers are authoritative: **1,503 components, 81 categories.** Do not round or alter them.

## Creative Direction
- Tone preset: `app-store`
- Creative direction: high-energy motion-graphics product reel — punchy cuts, kinetic typography, scroll-stopping in the first second
- Interpretation: keep `app-store`'s credibility and feature-forward clarity — this is a real library with real numbers, not a joke product — but run it at the fast end of the pacing range. Hard cuts and 0.25–0.35s transitions rather than smooth wipes; type that slams in and then **holds** long enough to read; seven scenes rather than the usual four to six, because the ask was full-product coverage and Reels rewards density. Energy comes from motion and cut rhythm, never from pulling text before it can be read.
- Angle: The video is built out of the product itself. NudaUI components are pure HTML and CSS with no runtime, so the motion graphics in this reel can literally *be* NudaUI components — real loaders, buttons and toggles pasted from the registry. Nothing is a mockup; large parts of the video *are* the product, running. If the components were heavy, framework-bound or build-dependent, they could not have been dropped into this video at all — the medium proves the message.
- Hook: hard cut to near-black; the project's own sharpest opinion — *"200kb for a loading spinner is insane."* — slams in as kinetic type in three fragments, while a real NudaUI spinner is already running quietly in the lower third. The complaint and the fix in the same frame, before any feature is named. No logo first; the opinion earns the logo.
- Outro / punchline: `NudaUI` wordmark in acid lime, then `1,503 components. Zero dependencies.` and `nudaui.dev`.
- Avoid:
  - Generic SaaS language ("streamline your workflow" is banned)
  - Abstract filler visuals — no color washes, no generic particles
  - Unrelated visual redesign — the palette and fonts below are the project's, not a new brand
  - Recreating the six components by hand instead of pasting their real source
  - Any mention of an npm package or CLI as a way to install NudaUI — there is none, and the video's whole point is that there is none

## Visual Identity
- Background: `#09090b`; panels `#111113`; hover `#1a1a1f`
- Border: `#222228`, lighter `#2a2a32`
- Accent: `#e4ff54`; dim `#b8cc43`; glow `rgba(228, 255, 84, 0.15)`
- Text: `#fafafa` primary, `#a1a1aa` secondary, `#63636e` muted
- Display font: Inter (600/700 for headlines)
- Body font: Inter; **JetBrains Mono** for every number, code line and terminal line
- Visual references from the project: the near-black surface lit only by acid lime; panel-on-surface cards with hairline borders; mono type for all data; real component previews as the hero visual

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract. It carries per-scene detail on sequential reveals, audio coupling and transitions.

Scene summary:
1. **The opinion** — 3.0s (t=0.0–3.0) — `200kb / for a loading spinner / is insane.` in three beat-landed fragments, holding settled; a real `pulse-dots` or `conic-spin-loader` running in the lower third.
2. **The number** — 3.0s (t=3.0–6.0) — `0 → 1,503` counting up in mono, finishing by t=4.6; `components` then `81 categories` settling under it.
3. **The wall (SHOW THE THING)** — 4.0s (t=6.0–10.0) — the centerpiece: all six real components in a 2-column grid of bordered panels, arriving one per beat from t=6.0 to t=8.5, then the full wall held animating. Mono caption: `every one of these is CSS you paste`.
4. **The install that isn't** — 3.5s (t=10.0–13.5) — `$ npm install …` types, gets struck through in accent and evaporates at t=11.2; replaced by `Grab the snippet. That's the whole install.` plus a real component HTML block with a `Copied ✓` badge popping at t=12.6.
5. **Works everywhere, respects everyone** — 3.5s (t=13.5–17.0) — eight framework names cycling one per beat in a single slot (React, Vue, Svelte, Astro, Laravel, Django, Rails, plain HTML) under the held line `If it renders markup, it runs NudaUI.`; from t=15.5 `prefers-reduced-motion, shipped by default.` settles and holds.
6. **Now your agent can paste them** — 3.5s (t=17.0–20.5) — lands on a strong cue. `claude mcp add --transport http nudaui https://nudaui.dev/mcp` types out; a prompt bubble *"build me a pricing page"* at t=18.0; three component cards snap into a pricing layout on strong cues at t=19.0 and t=20.0; overlay `Zero install. For your agent too.`
7. **Wordmark** — 2.5s (t=20.5–23.0) — `NudaUI` slams in on the t=20.5 strong cue with the accent glow breathing behind it; `1,503 components. Zero dependencies.` at t=21.2 and `nudaui.dev` at t=21.8, both holding to the end.

Scene durations sum to **23.0s**. Boundaries are already snapped to the 0.5s beat grid.

## Audio
- Audio role: dense rhythmic layer — a driving bed that carries the cut rhythm
- Audio arc: cold open at full level (no fade-in — the hook must hit cold), sustained drive through the middle, one clean impact on the wordmark, 0.6s fade at the very end
- Music: `assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` (already copied into the composition), 120.19 BPM
- Music treatment: **start the track at 3.02s** so video t=0 lands on a beat; from there the 0.5s beat grid maps directly onto video time. Full level throughout; fade out over the final 0.6s.
- Music cue guidance: bundled preset, copied to `brag-output/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.json`. **Cue timestamps in that file are track time — subtract the 3.02s offset to get video time.** With the offset, strong cues land at video t = 13.0, 14.0, 14.5, 15.0, 15.5, 17.0, 18.0, 19.0, 20.0, 20.5. Lock only the two that matter: **t=17.0 for the MCP reveal (scene 6)** and **t=20.5 for the wordmark (scene 7)**. Beat grid is every 0.5s from t=0 — use it for the six card arrivals in scene 3 and the eight framework-name swaps in scene 5. For readable *sentences*, ignore the grid and honour the reading floor instead.
- Audio-reactive treatment: subtle — drive the accent glow behind the scene-3 component wall and behind the scene-7 wordmark from music RMS. No waveforms, no equalizer bars, no musical-note graphics, no text scaling that hurts readability.
- Audio-coupled moments:
  - Scene 1 — three type fragments landing on beats; light interface tick each
  - Scene 2 — the `0 → 1,503` count-up; sparse ticks, roughly every fifth increment, not per frame
  - Scene 3 — six component cards arriving one per beat; soft card/UI tick each, decreasing in volume as the wall fills
  - Scene 4 — `npm install` typing (keyboard), then a single soft click on `Copied ✓`
  - Scene 5 — eight name swaps; very light tick each, well under the music
  - Scene 6 — the mcp command typing (keyboard), then a distinct impact per snapped component
  - Scene 7 — one clean impact on the wordmark, then the fade
- SFX selection guidance: match sound to motion, not to schedule. Keyboard sounds only where text is actually being typed; card sounds for card-like arrivals; one short announcement/impact for the wordmark payoff. Restraint matters more than coverage — the component wall should animate near-silently under the music rather than becoming a pile of ticks.
- SFX analysis guidance: `~/.claude/skills/brag/assets/sfx/sfx-analysis.md` and `.json`. Prefer low high-frequency-risk files for the repeated ticks in scenes 3 and 5, since those fire six and eight times respectively.
- Exact SFX choice: Hyperframes chooses filenames, timestamps, density and volume based on the implemented animation.
- Audio files: music is already at `brag-output/composition/assets/music/`. Copy any selected SFX into `brag-output/composition/assets/` as well.

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). `/brag` is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- **Use the six real components from `_components.json` verbatim.** This satisfies "show something real from the product" and is the video's whole premise.
- Keep all text readable in the final render: short label ≈ 0.8s settled, a sentence ≈ 0.3s per word with a ~1.2s floor. The hook gets the most. Fast-in then hold — never fast-in then gone.
- Keep the video within 15–25 seconds (target 23.0s).
- Include the planned music and SFX layer.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat cue metadata as optional timing hints. Major reveals may move within ±0.15s of a strong cue; smaller entrances within ±0.10s of a beat. Use only the two strong-cue locks named above.
- Mark beat work in the source: `// beat-locked: 17.00s` and `// beat-grid: card 1 at 6.00s, card 2 at 6.50s, …`.
- Honour the music treatment: 3.02s track offset, no fade-in, 0.6s fade-out.
- Wire at least one visual element to per-frame audio data (the accent glow is the intended target). If extraction is unavailable, document it and skip — do not block the render.
- Use local assets only.
- Run `npx hyperframes check` before render — it is brag's single gate, and it must pass with zero errors.
