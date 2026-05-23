import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/About.css';

export default function About() {
  useScrollReveal();
  const { t } = useLang();

  return (
    <section className="section" id="about">
      <div className="reveal">
        <p className="section-label">// 01</p>
        <h2 className="section-title">{t.about.title}</h2>
      </div>

      <div className="about-grid reveal">
        <div className="about-visual">
          <div className="about-avatar">JT</div>
          <div className="about-code">
            <span>const dev = {'{'}</span>
            <span>&nbsp;&nbsp;name: "Javohirbek",</span>
            <span>&nbsp;&nbsp;age: 15,</span>
            <span>&nbsp;&nbsp;role: "Frontend",</span>
            <span>{'}'}</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-text">{t.about.text}</p>
          <div className="about-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">{t.about.location}</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <span className="info-label">Email</span>
                <a href="mailto:javohirtojaliyev15@gmail.com" className="info-value info-link">
                  {t.about.email}
                </a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <div>
                <span className="info-label">Phone</span>
                <a href="tel:+998501003059" className="info-value info-link">
                  {t.about.phone}
                </a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🐙</span>
              <div>
                <span className="info-label">GitHub</span>
                <a
                  href="https://github.com/Javohirbek-011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-value info-link"
                >
                  Javohirbek-011
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
