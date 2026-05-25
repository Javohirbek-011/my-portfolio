import { useState, useEffect, useRef } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll tick sound — Web Audio API
function createScrollSound() {
  let audioCtx = null;
  let lastPlayed = 0;

  return function playScrollTick() {
    const now = Date.now();
    if (now - lastPlayed < 220) return; // throttle: max once per 220ms
    lastPlayed = now;

    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      const t = audioCtx.currentTime;

      // Deep thud only — no sharp transient
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.connect(g); g.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(55, t + 0.08);
      g.gain.setValueAtTime(0.09, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.start(t); osc.stop(t + 0.1);
    } catch (e) {}
  };
}

const playScrollTick = createScrollSound();

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Scroll tick sound
      playScrollTick();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Cursor />
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
