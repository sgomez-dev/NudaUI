# Brag Plan: NudaUI

## What is this app?
NudaUI is a library of 1,503 copy-paste CSS & JS UI animations across 81 categories with zero dependencies, no npm install and no build step — you paste the source and own it from that moment.

## The angle
**The video is built out of the product itself.**

NudaUI components are pure HTML and CSS with no runtime. That means the motion
graphics in this reel can literally *be* NudaUI components — real loaders, real
buttons, real toggles, pasted from the registry into the composition. Nothing in
the video is a mockup of the product; large parts of it *are* the product,
running.

That is the one claim a competitor cannot fake, and it is the whole thesis in a
single visual gag: if the components were heavy, framework-bound or
build-dependent, they could not have been dropped into this video at all.

The script never says "streamline your workflow." Every line is the project's
own voice, taken from its landing copy.

## Hook (first 2-3 seconds)
Hard cut to near-black. The project's own sharpest opinion slams in as kinetic
type, one clause at a time:

> **200kb for a loading spinner is insane.**

Underneath it, a real NudaUI spinner is already running — small, quiet, perfect.
The viewer reads a complaint they have personally felt, and sees the fix in the
same frame before a single feature has been named.

No logo first. The opinion earns the logo.

## Key moments (the middle)
- **The count.** `0 → 1,503` ticking up fast in JetBrains Mono, `81 categories`
  settling underneath. The number is the product.
- **The wall of real components.** A vertical grid of actual NudaUI components
  animating simultaneously — loaders, a toggle, a progress ring, a shimmer
  skeleton, a border-beam button. Pasted source, not video of a screen.
- **The install that isn't.** A terminal line types `npm install …`, then the
  whole line is struck through and evaporates. Replaced by the project's line:
  *"Grab the snippet. That's the whole install."* A code block shows real
  component HTML with a `Copied ✓` badge.
- **Works everywhere.** Framework names cycle on the beat — React, Vue, Svelte,
  Astro, Laravel, Django, Rails, plain HTML — over the claim
  *"If it renders markup, it runs NudaUI."* Then the accessibility line holds:
  *"prefers-reduced-motion, shipped by default."*
- **The new thing: the agent.** `claude mcp add --transport http nudaui
  https://nudaui.dev/mcp` types out, a prompt bubble says *"build me a pricing
  page"*, and three components snap into place on the beat. Zero install for the
  human, zero install for the agent.

## Outro / punchline
Wordmark **NudaUI** in acid lime on near-black. Two lines, no CTA fluff:

> 1,503 components. Zero dependencies.
> **nudaui.dev**

## User flow worth showing
The product's own three-step, which is also its landing page's spine:

**Browse → Copy → Paste**

- *Entry:* the component wall (browse — the gallery is the product).
- *Key action:* the copy moment — real component source, `Copied ✓`.
- *Result:* the component rendered and running, and then the same result reached
  by an agent through the MCP endpoint without a human copying anything.

Scenes 3, 4 and 6 are the centerpiece and carry this flow. The stat card (scene
2) and the wordmark (scene 7) frame it; they do not replace it.

## Tone
- Preset: `app-store`
- Creative direction: high-energy motion-graphics product reel — punchy cuts, kinetic typography, scroll-stopping in the first second
- Interpretation: keep `app-store`'s credibility and feature-forward clarity — this is a real library with real numbers, not a joke product — but run it at the fast end of the pacing range. Hard cuts and 0.25-0.35s transitions instead of smooth wipes, type that slams in and then *holds* long enough to read, and seven scenes instead of the preset's usual four to six, because the user asked for coverage of the whole product and Reels rewards density. Energy comes from motion and cut rhythm, never from pulling text before it can be read.

## Format: vertical — 1080x1920
## Duration: 23s

## Visual identity (from the project)
- Background: `#09090b` (`--color-surface`); panels `#111113`, hover `#1a1a1f`
- Border: `#222228` / `#2a2a32`
- Accent: `#e4ff54` (`--color-accent`); dim `#b8cc43`; glow `rgba(228, 255, 84, 0.15)`
- Text: `#fafafa` primary, `#a1a1aa` secondary, `#63636e` muted
- Display font: Inter (600/700 for headlines)
- Body font: Inter; **JetBrains Mono** for all numbers, code and terminal lines
- Strongest visual element: real NudaUI components rendered live, on near-black, lit by the acid-lime accent

## Share copy (draft)
1,503 copy-paste CSS & JS components. No npm install, no build step, no runtime — and now an MCP server so your agent can paste them for you. The whole reel is built out of the components themselves.

## Audio direction
- Role: dense rhythmic layer — driving bed that carries the cut rhythm
- Music: `happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` (120.19 BPM, the fastest bundled track)
- Music treatment: start the track at **3.02s** so the video's t=0 lands on a beat and the 0.5s beat grid maps cleanly onto video time. Full level from the first frame — no fade-in, the hook needs to hit cold. Fade out over the last 0.6s of the outro.
- Music cue guidance: preset cue file read (`cues/happy-beats-business-moves-vol-1-by-ende-dot-app.music-cues.md`). With the 3.02s offset, strong cues land at video **t=13.0, 14.0, 14.5, 15.0, 15.5, 17.0, 18.0, 19.0, 20.0, 20.5**. Target the two that matter: **t=17.0 for the MCP reveal** and **t=20.5 for the wordmark**. Beat grid for sequential reveals is every 0.5s from t=0; for sequential *text*, use every other beat (1.0s) so each line clears the reading floor.
- Audio-reactive treatment: subtle — let the accent glow behind the component wall and the wordmark breathe with RMS. No waveforms, no equalizer bars, no text scaling that hurts readability.
- SFX posture: moderate, motion-matched. Keyboard ticks on typed terminal lines, a soft UI click on the `Copied ✓` badge, light interface ticks on the count-up, one clean impact on the wordmark.
- Audio-coupled moments: the `0 → 1,503` count-up ticks; component cards arriving one by one on the beat; both terminal lines typing character by character; the three agent-placed components snapping in on consecutive strong cues.
- Restraint rule: no sound on every element. The component wall animates near-silently under the music — it is a visual crescendo, not a sound effect pile. Nothing comedic; this product is credible and the audio must not undercut it.

## Storyboard

### Scene 1 — The opinion — 3.0s (t=0.0–3.0)
Near-black. In JetBrains Mono, small and muted at the top: `// an opinion`. Then the line slams in as kinetic Inter 700, broken across three lines, accent lime on `200kb`:
**200kb** / for a loading spinner / **is insane.**
Bottom third: a real NudaUI spinner component already running, small, unlabelled.
Sequential/interaction: yes — the three type fragments land on beats t=0.0, 0.5, 1.0, then the whole line HOLDS settled until 3.0s (7 words ≈ 2.1s floor, satisfied).
Audio intent: cold open at full level. The bed is already moving.
Audio-coupled idea: a light interface tick on each of the three fragments.
Music: driving, no fade-in.
Transition mood: hard cut → Scene 2

### Scene 2 — The number — 3.0s (t=3.0–6.0)
Centred. `0` counts up to **1,503** in JetBrains Mono at large scale, accent lime, finishing by t=4.6. Label below in Inter: `components`. Then `81 categories` settles beneath in secondary grey.
Sequential/interaction: yes — counter ticks, then the two labels arrive at t=4.8 and t=5.2.
Audio intent: mechanical, satisfying accumulation.
Audio-coupled idea: sparse interface ticks during the count — every ~5th increment, not every frame.
Transition mood: hard cut → Scene 3

### Scene 3 — The wall (SHOW THE THING) — 4.0s (t=6.0–10.0)
The centerpiece. A vertical 2-column grid of **real NudaUI components**, pasted from the registry as real HTML/CSS and running live: a pulse-dots loader, a conic spinner, an animated toggle, a progress ring, a shimmer skeleton card, a border-beam button. Each in a `#111113` panel with a `#222228` border.
Cards arrive one by one on the beat grid (t=6.0, 6.5, 7.0, 7.5, 8.0, 8.5), then the full wall holds animating until 10.0s.
A small mono caption pinned bottom-left, secondary grey: `every one of these is CSS you paste`.
Sequential/interaction: yes — six cards, one per beat, then a held full-wall moment.
Audio intent: build. The wall filling should feel like accumulation resolving.
Audio-coupled idea: a soft UI tick per card arrival, dropping in volume as the wall fills so it does not become a pile.
Transition mood: hard cut → Scene 4

### Scene 4 — The install that isn't — 3.5s (t=10.0–13.5)
A terminal panel. `$ npm install …` types out in JetBrains Mono, then at t=11.2 the entire line gets struck through in accent lime and evaporates upward.
Replacing it, Inter 600: **"Grab the snippet. That's the whole install."**
Under it, a compact code block of real component HTML with a `Copied ✓` badge that pops in accent lime at t=12.6.
Sequential/interaction: yes — simulated typing, then a simulated copy action with the badge.
Audio intent: the strike-through is the joke landing; let it have a clean moment.
Audio-coupled idea: keyboard ticks on the typed npm line; a single soft UI click on `Copied ✓`.
Transition mood: hard cut → Scene 5

### Scene 5 — Works everywhere, respects everyone — 3.5s (t=13.5–17.0)
Top half: framework names cycle fast in the accent, one per beat from t=13.5 — React, Vue, Svelte, Astro, Laravel, Django, Rails, plain HTML — each replacing the last in the same slot. Under them, held the whole scene in Inter: **"If it renders markup, it runs NudaUI."**
Bottom half from t=15.5, settling and holding to 17.0: `prefers-reduced-motion, shipped by default.` in secondary grey with a small accent check.
Sequential/interaction: yes — eight names on the beat in one slot; the two full sentences each hold past their reading floor (the framework names are a texture, the sentences are the read).
Audio intent: rhythmic, mechanical certainty.
Audio-coupled idea: a very light tick per name swap, well under the music.
Transition mood: hard cut on the t=17.0 strong cue → Scene 6

### Scene 6 — Now your agent can paste them — 3.5s (t=17.0–20.5)
Lands exactly on a strong cue. Terminal panel types:
`claude mcp add --transport http nudaui https://nudaui.dev/mcp`
At t=18.0 a chat bubble appears above it: *"build me a pricing page"*. On the strong cues at t=19.0 and t=20.0, three small component cards snap into place forming a pricing layout.
Overlay line, Inter 600, holding to the cut: **"Zero install. For your agent too."**
Sequential/interaction: yes — typed command, then a prompt, then components snapping in on consecutive strong cues.
Audio intent: this is the news. Give it the cleanest hit in the video.
Audio-coupled idea: keyboard ticks on the command; a distinct impact on each snapped component.
Transition mood: hard cut on the t=20.5 strong cue → Scene 7

### Scene 7 — Wordmark — 2.5s (t=20.5–23.0)
Near-black. **NudaUI** wordmark in accent lime slams in on the t=20.5 strong cue, with the accent glow breathing behind it. Two lines settle beneath in Inter:
`1,503 components. Zero dependencies.`
**nudaui.dev**
Sequential/interaction: yes — wordmark on the cue, then the two lines at t=21.2 and t=21.8, all holding to the end.
Audio intent: one clean impact, then let the bed carry out.
Audio-coupled idea: a single impact hit on the wordmark; music fades over the final 0.6s.
Transition mood: hold to black.

**Music mood for this video:** upbeat, driving, 120 BPM — confident product energy, not comedy.
**Audio summary:** a cold-open driving bed at full level throughout, with motion-matched ticks and keyboard sounds carrying the typed and sequential moments, resolving into a single clean impact on the wordmark and a 0.6s fade — the MCP reveal and the wordmark both landing on real strong beats at t=17.0 and t=20.5.
