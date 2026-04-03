import * as fs from 'fs';
import * as path from 'path';
import { EdgeTTS } from 'node-edge-tts';

const REELS_CONFIG = {
  ssy: {
    publicPath: 'ssy',
    scenes: [
      { id: 'scene1', text: "Secure Your Girl Child's Future! Start investing 5,000 rupees a month today, and make a corpus of 22.6 Lakhs in 18 years!" },
      { id: 'scene2', text: "Sukanya Samriddhi Yojana is an Official Government of India Scheme, giving you a high 8.2% Interest rate that is completely Tax Free." },
      { id: 'scene3', text: "Watch your investment grow over time from 3.6 lakhs to 22.6 lakhs. A stable and guaranteed return." },
      { id: 'scene4', text: "A step towards empowerment. Start with just 250 rupees a year. Open an account at your nearest post office or bank today!" }
    ]
  },
  accor: {
    publicPath: 'accor-axis-end',
    scenes: [
      { id: 'scene1', text: "Axis Bank Reward Shock! Massive changes are coming this April 2026. Key travel partners like Accor, Marriott Bonvoy, and Qatar Airways are being REMOVED from the EDGE transfer program." },
      { id: 'scene2', text: "It's not just removals. We're seeing a massive reward devaluation. EDGE Reward Points and EDGE Miles transfer ratios are being slashed, leading to a value drop of over 50%!" },
      { id: 'scene3', text: "If you're a frequent traveler or use premium cards like Magnus or Atlas, this hits hard. Axis cards are now significantly less competitive for travel rewards." },
      { id: 'scene4', text: "Stay ahead of the curve! Like, share, and follow Fintech with AI on Instagram, YouTube, and X for the latest updates on your credit cards and rewards." }
    ]
  }
  // Add other reels here as needed
};

const VOICES = [
  { name: 'christopher', edgeName: 'en-US-ChristopherNeural' },
  { name: 'guy', edgeName: 'en-US-GuyNeural' },
  { name: 'prabhat', edgeName: 'en-IN-PrabhatNeural' }
];

async function generateAll() {
  for (const [reelKey, config] of Object.entries(REELS_CONFIG)) {
    console.log(`\n🎬 Processing Reel: ${reelKey.toUpperCase()}`);
    
    for (const voice of VOICES) {
      console.log(`\n🎙️ Generating for Voice: ${voice.name} (${voice.edgeName})`);
      
      const tts = new EdgeTTS({
        voice: voice.edgeName,
        lang: voice.edgeName.split('-').slice(0, 2).join('-'), // e.g. en-US
        outputFormat: 'audio-24khz-48kbitrate-mono-mp3'
      });

      const outputDir = path.join(process.cwd(), 'public', config.publicPath, voice.name);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      for (const scene of config.scenes) {
        const filePath = path.join(outputDir, `${scene.id}.mp3`);
        console.log(`   - Generating ${scene.id}...`);
        try {
          await tts.ttsPromise(scene.text, filePath);
          console.log(`     ✅ Saved to ${filePath}`);
        } catch (err) {
          console.error(`     ❌ Error for ${scene.id}:`, err);
        }
      }
    }
  }
}

generateAll().then(() => console.log('\n✨ All voiceovers generated successfully!'));
