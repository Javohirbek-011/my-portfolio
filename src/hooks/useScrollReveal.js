import { useEffect } from 'react';
import { useSound } from './useSound';

export function useScrollReveal() {
  const { playReveal } = useSound();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
            entry.target.classList.add('revealed');
            playReveal();
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [playReveal]);
}
