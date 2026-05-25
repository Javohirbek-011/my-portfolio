import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { useSound } from '../hooks/useSound';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import '../styles/Hero.css';

export default function Hero() {
  const { t } = useLang();
  const { playTick, playClick, playTypeTick } = useSound();
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.hero.roles;
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex <= current.length) {
        setDisplayed(current.slice(0, charIndex));
        playTypeTick();
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex > current.length) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, t.hero.roles, playTypeTick]);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>

      {/* Ambient glow blobs */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <div className="hero-inner">
        {/* LEFT — text content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            // FRONTEND DEVELOPER
          </div>

          <h1 className="hero-name">
            {t.hero.greeting}<br />
            <span className="hero-name-first">Javohirbek</span>{' '}
            <span className="hero-name-last">Tojaliyev</span>
          </h1>

          <div className="hero-typing">
            <span className="hero-typing-prefix">&gt; </span>
            {displayed}
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">{t.hero.bio}</p>

          <div className="hero-btns">
            <a
              href="https://github.com/Javohirbek-011"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onMouseEnter={playTick}
              onClick={playClick}
            >
              <FaGithub /> {t.hero.btnGithub}
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onMouseEnter={playTick}
              onClick={playClick}
            >
              {t.hero.btnContact}
            </a>
            <a
              href="/Javohirbek_CV.zip"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-resume"
              onMouseEnter={playTick}
              onClick={playClick}
            >
              <HiDownload /> Resume
            </a>
          </div>

          {/* Scroll hint */}
          <div className="hero-scroll">
            <span className="hero-scroll-line"></span>
            <span className="hero-scroll-text">scroll</span>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring hero-photo-ring-outer"></div>
          <div className="hero-photo-ring hero-photo-ring-inner"></div>
          <div className="hero-photo-frame">
            <img src="/avatar.png" alt="Javohirbek Tojaliyev" className="hero-photo" />
          </div>
          {/* Floating badges */}
          <div className="hero-badge hero-badge-tl">
            <span>React.js</span>
          </div>
          <div className="hero-badge hero-badge-br">
            <span>Frontend Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}
