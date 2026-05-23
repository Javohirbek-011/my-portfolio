import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Projects.css';

export default function Projects() {
  useScrollReveal();
  const { t } = useLang();

  return (
    <section className="section" id="projects">
      <div className="reveal">
        <p className="section-label">// 03</p>
        <h2 className="section-title">{t.projects.title}</h2>
      </div>

      <div className="projects-grid">
        {t.projects.items.map((project, i) => (
          <div key={i} className="project-card reveal">
            <div className="project-card-header">
              <span className="project-icon">⬡</span>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.projects.btnGithub}
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-live"
                  >
                    {t.projects.btnLive} ↗
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-stack">{project.stack}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
