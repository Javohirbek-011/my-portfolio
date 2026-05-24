import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { HiDownload } from 'react-icons/hi';
import '../styles/Hero.css';

export default function Hero() {
  const { t } = useLang();
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
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex > current.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, t.hero.roles]);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>

      <div className="hero-code hero-code-tl">
        <span>&lt;div className=</span>
      </div>
      <div className="hero-code hero-code-tr">
        <span>useState()</span>
      </div>
      <div className="hero-code hero-code-bl">
        <span>import React</span>
      </div>

      <div className="hero-content">
        <div className="hero-tag">// FRONTEND DEVELOPER</div>

        {/* Avatar with animated ring */}
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring"></div>
          <div className="hero-avatar">JT</div>
        </div>

        <p className="hero-greeting">{t.hero.greeting}</p>
        <h1 className="hero-name">Javohirbek <span>Tojaliyev</span></h1>
        <div className="hero-typing">
          {displayed}<span className="cursor">|</span>
        </div>
        <p className="hero-bio">{t.hero.bio}</p>
        <div className="hero-btns">
          <a
            href="https://github.com/Javohirbek-011"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.hero.btnGithub} →
          </a>
          <a href="#contact" className="btn-outline">{t.hero.btnContact}</a>
          <a
            href="/Javohirbek_CV.zip"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline btn-resume"
          >
            <HiDownload /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
