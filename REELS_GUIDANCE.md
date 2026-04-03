# 🎬 Reels Project Guide: Fintech With AI

This project now supports multiple Reels in a single repository. Each Reel has its own folder in `src/reels/` and its own assets in `public/`.

## 🚀 Local Development

To start the Remotion Studio and preview all reels:
```pwsh
npm run dev
```

To focus on and preview a **specific reel** (e.g., SSY):
```pwsh
npx remotion preview src/index.ts --composition=SSYReel
```

## 🎥 Rendering / Exporting Videos

To export a specific Reel as an MP4 file, use the following commands:

### 1. Sukanya Samriddhi Yojana (SSY)
```pwsh
npx remotion render src/index.ts SSYReel out/ssy_reel.mp4
```

### 2. Tiara Credit Card benefits
```pwsh
npx remotion render src/index.ts TiaraCardReel out/tiara_card.mp4
```

### 3. New RBI Rules (April 2026)
```pwsh
npx remotion render src/index.ts RBIRulesReel out/rbi_rules.mp4
```

## 📁 Project Structure

- **`src/reels/ssy/`**: Logic and scenes for the SSY Reel.
- **`src/reels/tiara-card/`**: Logic and scenes for the Tiara Card Reel.
- **`src/reels/rbi-rules-apr2026/`**: Logic and scenes for the RBI Rules Reel.
- **`public/`**: Assets organized by folder (`ssy/`, `tiara-card/`).

## 🔊 Voiceover Generation

To regenerate voiceovers for the **SSY** Reel:
```pwsh
node generate-voiceovers.mjs
```
*(Files are saved into `public/ssy/` automatically)*

---
**Note:** If you add a new Reel, remember to register it in `src/Root.tsx` as a new `Composition`.

----------------
start prompt eg. for antigravity agent

create new reel, named __________ ,
with all above details in this pic. create 3-4 scenes. 
use text-based representations or high-quality icons for the logos.
Also create voiceovers for all the scenes in sync with the texts coming on screen.

Since there are speerate voiceovers for each scene. after making the speed for voiceover to 1.35x, calculate the time that it will take for each voiceover to end. and then accordingly decide and assign that much time for that particular scene and likewise do this for all scene.

always keep all texts on each screen little below the top and bottom, so that there is enough margins in top and bottom, so that when the reel is posted on instagram or youtube, the main content of the reel doesnot get hidden because of top and bottom texts in instgram and youtube that comes by default.

--
Prompt for last scene

also in last scene mention to like share follow and save our instgram and youtube channel. 
instgram/facebook - fintech_with_ai
yt - @FinTechwithAI
x - https://x.com/FinTechWithAI

----------------------------------
logos and images use prompt

ok now create and use logos, images in each screen wherever required to make this reel more professional.

---------------------------------
instead of random logos of the branded companies, use their own logos , for eg, axis bank logo and accor logos are different in real. 
also the fintech_with_ai watermark can be moved little down, since now it is coinciding with the reel texts