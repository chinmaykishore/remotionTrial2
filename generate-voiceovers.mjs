import * as fs from 'fs';
import * as path from 'path';
import * as googleTTS from 'google-tts-api';

const scenes = [
  {
    id: 'scene1',
    text: "Secure Your Girl Child's Future! Start investing 5,000 rupees a month today, and make a corpus of 22.6 Lakhs in 18 years!",
  },
  {
    id: 'scene2',
    text: "Sukanya Samriddhi Yojana is an Official Government of India Scheme, giving you a high 8.2% Interest rate that is completely Tax Free.",
  },
  {
    id: 'scene3',
    text: "Watch your investment grow over time from 3.6 lakhs to 22.6 lakhs. A stable and guaranteed return.",
  },
  {
    id: 'scene4',
    text: "A step towards empowerment. Start with just 250 rupees a year. Open an account at your nearest post office or bank today!",
  }
];

async function generateVoiceovers() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const scene of scenes) {
    try {
      console.log(`Generating audio for ${scene.id}...`);
      // getAudioBase64 returns a base64 string
      const base64Audio = await googleTTS.getAudioBase64(scene.text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
      });
      
      const audioBuffer = Buffer.from(base64Audio, 'base64');
      fs.writeFileSync(path.join(publicDir, `${scene.id}.mp3`), audioBuffer);
      console.log(`Successfully saved ${scene.id}.mp3`);
    } catch (err) {
      console.error(`Error generating audio for ${scene.id}:`, err);
    }
  }
}

generateVoiceovers();
