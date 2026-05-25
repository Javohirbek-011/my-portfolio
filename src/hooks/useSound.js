import { useRef, useCallback } from 'react';

// Button click — real MP3 file
const clickAudio = new Audio('/button_click.mp3');
clickAudio.volume = 0.5;

function playSound(audio) {
  try {
    const clone = audio.cloneNode();
    clone.volume = audio.volume;
    clone.play().catch(() => {});
  } catch (e) {}
}

export function useSound() {
  const audioCtx = useRef(null);

  const getCtx = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx.current;
  };

  // Button click — MP3
  const playClick = useCallback(() => {
    playSound(clickAudio);
  }, []);

  // Scroll reveal — Web Audio API "tik" (mechanical key press feel)
  const playReveal = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;

      // Sharp attack transient
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(2200, now);
      osc1.frequency.exponentialRampToValueAtTime(900, now + 0.018);
      gain1.gain.setValueAtTime(0.22, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.022);
      osc1.start(now);
      osc1.stop(now + 0.022);

      // Body — low thud underneath
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(160, now);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.06);
      gain2.gain.setValueAtTime(0.18, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc2.start(now);
      osc2.stop(now + 0.07);
    } catch (e) {}
  }, []);

  // Silent stubs
  const playTick     = useCallback(() => {}, []);
  const playWhoosh   = useCallback(() => {}, []);
  const playTypeTick = useCallback(() => {}, []);
  const playSwoosh   = useCallback(() => {}, []);

  return { playClick, playReveal, playTick, playWhoosh, playTypeTick, playSwoosh };
}
