/**
 * Enhanced Sound Synthesizer & BGM Engine for English Quest
 * Generates rich RPG Sound Effects & procedural 8-bit Background Music
 * Uses native Web Audio API & Web Speech API
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.speechAvailable = 'speechSynthesis' in window;
    this.englishVoice = null;
    this.initSpeech();
  }

  initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initSpeech() {
    if (!this.speechAvailable) return;
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      this.englishVoice = voices.find(v => v.lang.startsWith('en-US')) ||
                          voices.find(v => v.lang.startsWith('en-GB')) ||
                          voices.find(v => v.lang.startsWith('en')) || null;
    };
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.bgmPlaying) {
      this.stopBGM();
      this.bgmPlaying = false;
    }
    return this.isMuted;
  }

  speakEnglish(text, onStart, onEnd) {
    if (!this.speechAvailable || this.isMuted) {
      if (onStart) onStart();
      setTimeout(() => { if (onEnd) onEnd(); }, 1200);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (this.englishVoice) {
      utterance.voice = this.englishVoice;
    }
    utterance.lang = 'en-US';
    utterance.rate = 0.88;
    utterance.pitch = 1.05;

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = () => { if (onEnd) onEnd(); };

    window.speechSynthesis.speak(utterance);
  }

  // BGM: Procedural Chiptune RPG Adventure Theme
  startBGM() {
    if (this.isMuted || this.bgmPlaying) return;
    this.initAudioContext();
    if (!this.ctx) return;
    this.bgmPlaying = true;

    // Melody notes (pentatonic adventure theme)
    const melody = [
      { note: 261.63, dur: 0.25 }, // C4
      { note: 329.63, dur: 0.25 }, // E4
      { note: 392.00, dur: 0.25 }, // G4
      { note: 523.25, dur: 0.50 }, // C5
      { note: 440.00, dur: 0.25 }, // A4
      { note: 392.00, dur: 0.25 }, // G4
      { note: 329.63, dur: 0.50 }, // E4
      { note: 293.66, dur: 0.25 }, // D4
      { note: 329.63, dur: 0.25 }, // E4
      { note: 392.00, dur: 0.50 }, // G4
      { note: 293.66, dur: 0.50 }, // D4
      { note: 261.63, dur: 0.75 }  // C4
    ];

    let noteIdx = 0;
    const playNext = () => {
      if (!this.bgmPlaying || this.isMuted || !this.ctx) return;
      const current = melody[noteIdx];
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(current.note, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + current.dur * 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + current.dur);

      noteIdx = (noteIdx + 1) % melody.length;
      this.bgmTimer = setTimeout(playNext, current.dur * 1000);
    };

    playNext();
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) clearTimeout(this.bgmTimer);
  }

  toggleBGM() {
    if (this.bgmPlaying) {
      this.stopBGM();
      return false;
    } else {
      this.startBGM();
      return true;
    }
  }

  // SFX: Correct Answer
  playCorrect() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    osc.frequency.setValueAtTime(783.99, now + 0.16);
    osc.frequency.setValueAtTime(1046.50, now + 0.24);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  // SFX: Combo Strike
  playCombo(comboCount) {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const baseFreq = 440 + Math.min(6, comboCount) * 80;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // SFX: Ultimate Strike Blast
  playUltimate() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Layer 1: Low rumble
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(120, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.6);
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.linearRampToValueAtTime(0.01, now + 0.6);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.6);

    // Layer 2: High shimmer
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(800, now);
    osc2.frequency.setValueAtTime(1200, now + 0.15);
    osc2.frequency.setValueAtTime(1600, now + 0.3);
    gain2.gain.setValueAtTime(0.3, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now);
    osc2.stop(now + 0.6);
  }

  // SFX: Wrong Answer
  playWrong() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.setValueAtTime(140, now + 0.15);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  // SFX: Hero Attack Slash
  playAttack() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  // SFX: Monster Hurt
  playMonsterHurt() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // SFX: Player Hurt
  playPlayerHurt() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.3);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  // SFX: Stage Victory
  playVictory() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.1;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  // SFX: Coin collected
  playCoin() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, now);
    osc.frequency.setValueAtTime(1318.51, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // SFX: Chest Open
  playChestOpen() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.setValueAtTime(554.37, now + 0.1);
    osc.frequency.setValueAtTime(659.25, now + 0.2);
    osc.frequency.setValueAtTime(880, now + 0.3);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  }

  // SFX: Click
  playClick() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }
}

const gameAudio = new SoundEngine();
