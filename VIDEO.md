# Video Guide — Pool Leak Inspections

You asked whether I could create a video. Here's the honest answer and a working plan.

## What I built right now (live today)

**[video.html](video.html)** — a self-contained HTML/CSS/SVG animated explainer.
Plays a 6-scene, ~60-second animation on your site:
1. Brand intro + tagline
2. The problem (water loss, cost)
3. Three detection methods (hydrophone / pressure / dye)
4. Trust signals (licensed, insured, since 2004)
5. Guarantee card ("No find, no fee")
6. Animated CTA with tap-to-call phone number

It's a real "video" in the sense that a visitor sees a timed, animated sequence.
It's **not** an MP4 — it's web code. Tradeoffs:
- ✅ Loads fast (no 30MB file)
- ✅ Crisp on any screen, edits in minutes (change text/colors in code)
- ✅ Tap-to-call phone number is live inside the animation
- ❌ Can't upload to YouTube / Google Business Profile / Meta Ads
- ❌ No real footage of pools, technicians, equipment — it's graphic/motion, not photographic
- ❌ No voiceover (we can add background audio if you want)

**Best use:** embed on the homepage above the fold while a real MP4 loads lazily, OR use as a standalone lightweight hero if you don't want to shoot real video yet.

To embed on `index.html`: copy the `<div class="explainer-stage">` block + the `<style>` + `<script>` from `video.html` into the hero section.

---

## The honest answer: I can't render real MP4 video

I can write code and research tools, but I can't actually render pixels into an MP4 file. So for a "real" video with real footage of a real pool and a real voiceover, you need to use one of the tools below.

## Recommended path for a real video (my top pick)

**Canva Free + Pexels stock footage + YouTube Audio Library music.**

Why this wins:
- Drag-and-drop timeline, minimal learning curve
- Free tier exports 1080p MP4 with **no watermark** on your uploads and free-library assets (avoid anything with a crown icon — those are premium)
- Massive library of free pool/water/technician clips, all license-cleared for commercial use
- Built-in text animations, logo placement, royalty-free music, AI voiceover
- Realistic time investment: **2–4 hours**

Tradeoff: output looks "template-y." For a local trades business, that's actually the right register — it signals legitimate small business, not overproduced.

### Other good options

| Tool | Free tier | Watermark | Why pick |
|------|-----------|-----------|----------|
| **Canva Free** | Unlimited projects | None on free assets | 👑 Top pick, fastest path |
| **CapCut Free** | Full editor | None on manual edits | Stronger editing controls than Canva |
| **Clipchamp** | Full editor, Microsoft-owned | None on free stock | Great alt if you use Windows |
| **Google Vids** | Free with Workspace | None | Emerging, Gemini-powered |
| **DaVinci Resolve** | Pro-grade desktop | None | Best polish, 6–10 hr learning curve |
| **iMovie** | Mac built-in | None | Fast but output "looks like iMovie" |

### AI video tools (if you want to play)

If you want AI-generated shots for hero B-roll (technician by pool, dye swirling, hydrophone in water):
- **Google Veo 3** via Gemini — best realism for water shots, limited daily free generations
- **Kling 2.0** — ~6 free generations/day
- **Luma Dream Machine** — ~30 free/month
- **Runway Gen-4** — 125 one-time credits; free tier does NOT grant commercial rights

Use these for 4–6 disconnected atmospheric shots, then cut them into a Canva timeline. Don't try to generate a consistent "character" across shots — AI video still fails at that.

---

## Ready-to-use script (75 seconds, ~185 words)

Hand this directly to any tool. Voiceover cadence: ~150 words/min.

### SCENE 1 — Brand intro (0:00–0:08)
- **Visual:** Logo fades in centered over soft out-of-focus pool water. Tagline appears.
- **On-screen text:** [Logo] + "If we can't find your leak — it's FREE."
- **VO:** "Losing water? We'll find your leak — or it's free."
- **Music:** Confident, mid-tempo instrumental starts.

### SCENE 2 — The problem (0:08–0:18)
- **Visual:** Close-up of pool water level showing a drop. Homeowner looking concerned at equipment pad. *(Pexels search: "pool equipment", "pool water surface")*
- **VO:** "A hidden leak can waste thousands of gallons — and hundreds of dollars — every month. But most leaks are invisible to the eye."

### SCENE 3A — Hydrophones (0:18–0:26)
- **Visual:** Technician lowering electronic listening device into pool. Animated sound-wave overlay.
- **Lower-third:** "ELECTRONIC LEAK DETECTION"
- **VO:** "We use professional hydrophones to listen for leaks underwater."

### SCENE 3B — Pressure testing (0:26–0:35)
- **Visual:** Hands on plumbing manifold, pressure gauge in frame.
- **Lower-third:** "PRESSURE TESTING"
- **VO:** "We pressure-test your plumbing lines to pinpoint breaks you can't see."

### SCENE 3C — Dye test (0:35–0:43)
- **Visual:** Slow-motion colored dye dispersing in pool water near a light fixture.
- **Lower-third:** "DYE TESTING"
- **VO:** "And dye testing confirms the exact location — so repairs are fast and targeted."

### SCENE 4 — Trust (0:43–0:58)
- **Visual:** Three icon cards animating in sequence with checkmarks.
- **On-screen text:** "LICENSED" / "INSURED" / "SERVING LA SINCE 2004"
- **VO:** "We're licensed, fully insured, and we've been finding leaks across Los Angeles for over 20 years."

### SCENE 5 — Guarantee (0:58–1:05)
- **Visual:** Bold text card, brand colors.
- **On-screen text:** "If we can't find your leak — it's FREE."
- **VO:** "And our promise is simple: if we can't find your leak, you don't pay."

### SCENE 6 — CTA (1:05–1:15)
- **Visual:** Large animated phone number with call icon. Logo in corner.
- **On-screen text:** "CALL NOW — (818) 858-0484"
- **VO:** "Call us today at eight one eight, eight five eight, oh four eight four. We'll come find it."

---

## Free assets — stock footage & music

### Free stock video (all commercial-use safe)
- **[Pexels Videos](https://www.pexels.com/videos/)** — best overall. Search: `swimming pool`, `pool water`, `pool equipment`, `plumber`, `water leak`
- **[Pixabay Videos](https://pixabay.com/videos/)** — broader library
- **[Mixkit](https://mixkit.co/free-stock-video/)** — curated, cinematic hero shots
- **[Coverr](https://coverr.co/)** — short loops, good as background under text
- **[Videvo](https://www.videvo.net/)** — mix; filter to "Free"

### Free music (commercial use)
- **[YouTube Audio Library](https://studio.youtube.com)** (Studio → Audio Library) — filter "Attribution not required." Best single source.
- **[Pixabay Music](https://pixabay.com/music/)** — no attribution
- **[Uppbeat free tier](https://uppbeat.io/)** — 10 tracks/month (with attribution)
- **[Incompetech](https://incompetech.com/)** — CC-BY, requires credit

### Free voiceover
- **[ElevenLabs free tier](https://elevenlabs.io/)** — 10,000 chars/month, best realism. For ~185 words (~1000 chars) you can generate 10 takes easily.
- **Canva built-in TTS** — convenient if already in Canva.
- **Record yourself** with a $30 USB mic + free Audacity — often beats AI voice for local trades credibility.

---

## Workflow recipe (2–4 hours end to end)

1. **Open Canva** → create video → 1920×1080.
2. **Grab stock clips** from Pexels: 3 × pool water, 1 × technician at equipment, 1 × slow-mo dye/drops, 1 × pool wide.
3. **Drop in the script** scene by scene, matching each VO line to a clip.
4. **Add logo** as overlay in scene 1 and scene 6 corner.
5. **Voiceover:** paste script into ElevenLabs → pick a voice → download MP3 → drop into Canva timeline.
6. **Music:** YouTube Audio Library → "Attribution not required" → mid-tempo corporate → drop in and reduce volume to ~20% under VO.
7. **Lower-thirds**: Canva text elements for "HYDROPHONE / PRESSURE TESTING / DYE TESTING" and the trust chips.
8. **Export** as MP4 1080p.
9. **Upload to YouTube** (public, unlisted, or just embed). Copy the iframe code.
10. **Embed on the homepage** inside the hero section using:
    ```html
    <div style="aspect-ratio:16/9;max-width:800px;margin:0 auto;">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Pool Leak Inspections" frameborder="0" allowfullscreen loading="lazy"></iframe>
    </div>
    ```
11. **Also upload** to Google Business Profile + Facebook + Instagram. Same MP4, new distribution.

---

## When the real video is ready

Replace the `<section>` in `index.html` that contains the animated explainer with the YouTube iframe above.
Keep `video.html` around — you can still link to it or strip out the animated stage for use elsewhere.

---

## Summary

- I built a real-feeling animated explainer **today** at `video.html` — drop it in the homepage if you want something live immediately.
- For a proper MP4 with real footage: **Canva Free + Pexels + ElevenLabs** is the 2–4 hour path.
- I can't render MP4 myself — but the script, shot list, tool picks, and workflow above are everything you need to have one done this weekend.
