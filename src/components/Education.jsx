import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Education.css';

export default function Education() {
  useScrollReveal();
  const { t } = useLang();

  return (
    <section className="section" id="education">
      <div className="reveal">
        <p className="section-label">// 04</p>
        <h2 className="section-title">{t.education.title}</h2>
      </div>

      <div className="timeline">
        {t.education.items.map((item, i) => (
          <div key={i} className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-place">{item.place}</h3>
              <p className="timeline-course">{item.course}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
