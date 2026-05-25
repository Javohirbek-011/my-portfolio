import { useRef, useCallback } from 'react';

// Preload audio instances once at module level
const clickAudio = new Audio('/button_click.mp3');
const scrollAudio = new Audio('/scroll.mp3');
clickAudio.volume = 0.5;
scrollAudio.volume = 0.4;

// Clone and play — allows overlapping sounds
function playSound(audio) {
  try {
    const clone = audio.cloneNode();
    clone.volume = audio.volume;
    clone.play().catch(() => {});
  } catch (e) {}
}

export function useSound() {
  // Button click sound
  const playClick = useCallback(() => {
    playSound(clickAudio);
  }, []);

  // Scroll reveal sound
  const playReveal = useCallback(() => {
    playSound(scrollAudio);
  }, []);

  // Silent stubs — kept so existing imports don't break
  const playTick      = useCallback(() => {}, []);
  const playWhoosh    = useCallback(() => {}, []);
  const playTypeTick  = useCallback(() => {}, []);
  const playSwoosh    = useCallback(() => {}, []);

  return { playClick, playReveal, playTick, playWhoosh, playTypeTick, playSwoosh };
}
