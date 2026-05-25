import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { useSound } from '../hooks/useSound';
import { HiDownload } from 'react-icons/hi';
import '../styles/Navbar.css';

export default function Navbar() {
  const { lang, changeLang, t } = useLang();
  const { playTick, playClick, playSwoosh } = useSound();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Premium logo */}
      <a href="#hero" className="nav-logo" onMouseEnter={playTick} onClick={playClick}>
        <span className="nav-logo-box">JT</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              onMouseEnter={playTick}
              onClick={() => { playClick(); setMenuOpen(false); }}
            >
              {t.nav[link.key]}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        {/* Resume button */}
        <a
          href="/Javohirbek_CV.zip"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          onMouseEnter={playTick}
          onClick={playClick}
        >
          <HiDownload /> Resume
        </a>

        <div className="lang-switcher">
          {['uz', 'en', 'ru'].map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onMouseEnter={playTick}
              onClick={() => { playSwoosh(); changeLang(l); }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className="hamburger"
          onClick={() => { playClick(); setMenuOpen(!menuOpen); }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
