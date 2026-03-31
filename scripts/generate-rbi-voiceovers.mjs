import * as fs from 'fs';
import * as path from 'path';
import * as googleTTS from 'google-tts-api';

const scenes = [
  { id: 'scene1', text: "RBI is changing everything about your bank account from April 1st, 2026. Here is what is changing." },
  { id: 'scene2', text: "UPI ATM withdrawals will now count towards your monthly free limit. 6th withdrawal onwards will cost 20 to 25 rupees." },
  { id: 'scene3', text: "Income Tax will track high-value transactions automatically. This includes cash deposits above 10 lakh per year." },
  { id: 'scene4', text: "Section 269ST Penalty is brutal. You cannot make cash transactions above 2 lakh in a single day or you face a 100% penalty." },
  { id: 'scene5', text: "Income Tax can now check your social media lifestyles. What you show online can trigger tax investigations." },
  { id: 'scene6', text: "Zero balance accounts get more benefits like unlimited cash deposits and free debit cards without hidden charges." },
  { id: 'scene7', text: "Futures and Options trading tax increased. STT is up by 150% for futures and 50% for options." },
  { id: 'scene8', text: "Digital fraud compensation of up to 25,000 rupees will be available from July 1, 2026, under specific conditions." },
  { id: 'scene9', text: "New rules protect you from abusive loan recovery agents. They cannot harass you or contact you outside 8 AM to 7 PM." },
  { id: 'scene10', text: "These rules can save you or cost you money. Be smart, save this post, and follow Fintech with AI for more updates." }
];

async function generateVoiceovers() {
  const publicDir = path.join(process.cwd(), 'public', 'rbi-rules-apr2026');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const scene of scenes) {
    try {
      console.log(`Generating audio for ${scene.id}...`);
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
