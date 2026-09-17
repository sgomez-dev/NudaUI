# NudaUI launch reel — source

The rendered video is **not** stored here. It was delivered and kept outside the
repo; this branch keeps the things that are expensive to reconstruct and cheap
to store: the creative decisions and the composition source.

Nothing on this branch is imported by the site. It exists only so the reel can
be changed later without starting over.

## What the reel is

23.0s, 1080x1920, 30fps — a vertical launch video for Instagram Reels.

Its premise: **the video is built out of the product.** NudaUI components are
pure HTML and CSS with no runtime, so six of them were pasted straight from the
registry into the composition and left to animate on their own. The wall in
scene 3 is not a mockup of the product — it is the product, running. That is the
one claim a competitor cannot fake, and it is why the components keep their own
purple/lime colours instead of being repainted to the brand.

## Files

| File | What it is |
| --- | --- |
| `brag-plan.md` | The creative contract — angle, hook, beat-by-beat storyboard, audio plan |
| `composition-brief.md` | What was handed to Hyperframes: source material, palette, verbatim copy, cue locks |
| `composition/` | The Hyperframes composition — `index.html` is the whole video |
| `_components.json` | The real source of the six registry components used in scene 3 |
| `build-report.md` | Build log, including the two layout defects found by frame inspection and fixed |
| `share-copy.txt` | Caption for posting |
| `brag.jpg` | Poster frame, for reference |

## Re-rendering

Two files were deliberately left out because they are large and reproducible:

- `brag.mp4` (2.6 MB) — the render output
- `composition/assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3` (3.8 MB) — ships with the `/brag` skill

Restore the music, then render:

```bash
cp ~/.claude/skills/brag/assets/music/happy-beats-business-moves-vol-1-by-ende-dot-app.mp3 \
   brag-output/composition/assets/music/

cd brag-output/composition
npx hyperframes check      # must pass with zero errors before rendering
npx hyperframes render
```

Requires Node 22+, FFmpeg on PATH, and the Hyperframes CLI (`npx hyperframes doctor`).

## Things to preserve if you edit it

- **Music starts at 3.02s into the track** so video t=0 lands on a beat. The 0.5s
  beat grid then maps directly onto video time.
- **Two beat locks:** the MCP reveal at t=17.00s and the wordmark at t=20.50s.
  Both sit on real strong cues; moving them loses the sync.
- **Reading floors:** a short label needs ~0.8s fully settled, a sentence ~0.3s
  per word. Pace comes from motion and cuts, never from pulling text early.
- **Instagram's unsafe zones:** keep everything above y≈1600 and below the top
  ~10%. The scene-3 caption was originally at y≈1830 and would have been covered
  by the platform's own chrome.
- **The component count is 1,503.** If the registry grows, scenes 2 and 7 and the
  share copy all quote it.
