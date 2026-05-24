import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { HiDownload } from 'react-icons/hi';
import '../styles/Navbar.css';

export default function Navbar() {
  const { lang, changeLang, t } = useLang();
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
      <a href="#hero" className="nav-logo">
        <span className="nav-logo-box">JT</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.key}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
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
        >
          <HiDownload /> Resume
        </a>

        <div className="lang-switcher">
          {['uz', 'en', 'ru'].map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => changeLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
