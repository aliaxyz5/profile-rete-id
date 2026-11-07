/**
 * Procedural Natural Ecosystem Audio Synthesizer (Web Audio API)
 * Generates an organic ambient loop of gentle mountain breeze and peaceful bird chirps.
 */

class NatureAudioEcosystem {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private windNode: AudioBufferSourceNode | null = null;
  private chirpTimer: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate pink noise buffer for soft wind breeze
  private createWindBuffer(): AudioBuffer | null {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 4; // 4 seconds loop
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  // Play a natural bird chirp chord
  private playBirdChirp() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const baseFreq = 1600 + Math.random() * 800; // 1.6kHz - 2.4kHz
      const chirpCount = 2 + Math.floor(Math.random() * 3);

      for (let i = 0; i < chirpCount; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const start = now + i * 0.11;
        const duration = 0.08;

        osc.frequency.setValueAtTime(baseFreq + (i % 2 === 0 ? 150 : -80), start);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.3, start + duration * 0.5);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, start + duration);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.045, start + duration * 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(start);
        osc.stop(start + duration + 0.02);
      }
    } catch {
      // Audio node cleanup safeguard
    }

    // Schedule next natural chirp at irregular serene intervals (3 - 6 seconds)
    if (this.isPlaying) {
      const nextDelay = 3000 + Math.random() * 3500;
      this.chirpTimer = window.setTimeout(() => this.playBirdChirp(), nextDelay);
    }
  }

  public start(): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      this.isPlaying = true;

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.7, this.ctx.currentTime + 1.2);
      this.masterGain.connect(this.ctx.destination);

      // 1. Gentle Wind Atmosphere
      const windBuffer = this.createWindBuffer();
      if (windBuffer) {
        this.windNode = this.ctx.createBufferSource();
        this.windNode.buffer = windBuffer;
        this.windNode.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, this.ctx.currentTime);

        // Slow wind swell LFO
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
        lfoGain.gain.setValueAtTime(150, this.ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();

        this.windNode.connect(filter);
        filter.connect(this.masterGain);
        this.windNode.start();
      }

      // 2. Initial bird chirp sequence
      this.playBirdChirp();
      return true;
    } catch {
      this.isPlaying = false;
      return false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.chirpTimer) {
      window.clearTimeout(this.chirpTimer);
      this.chirpTimer = null;
    }
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
        setTimeout(() => {
          if (this.windNode) {
            try { this.windNode.stop(); } catch { /* ignore */ }
            this.windNode.disconnect();
            this.windNode = null;
          }
        }, 700);
      } catch {
        // Safe fail
      }
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      return this.start();
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const natureAudio = new NatureAudioEcosystem();
