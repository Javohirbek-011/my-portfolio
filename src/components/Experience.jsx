import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Experience.css';

export default function Experience() {
  useScrollReveal();
  const { t } = useLang();

  return (
    <section className="section" id="experience">
      <div className="reveal">
        <p className="section-label">// 05</p>
        <h2 className="section-title">{t.experience.title}</h2>
      </div>

      <div className="experience-list">
        {t.experience.items.map((item, i) => (
          <div key={i} className="experience-card reveal">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-company">{item.company}</p>
              </div>
              <span className="experience-year">{item.year}</span>
            </div>
            <p className="experience-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
