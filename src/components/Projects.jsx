import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

// Fallback visuals for projects without screenshots
const fallbackVisuals = [
  { gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', content: <span className="project-code-icon">&lt;/&gt;</span> },
  { gradient: 'linear-gradient(135deg, #0F172A 0%, #1F1035 100%)', content: <span className="project-emoji">🛍️</span> },
  { gradient: 'linear-gradient(135deg, #0F172A 0%, #1F1035 100%)', content: <span className="project-emoji">🎬</span> },
];

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

            {/* Screenshot or fallback */}
            {project.image ? (
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image project-image-link"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-screenshot"
                />
                <div className="project-image-overlay">
                  <FaExternalLinkAlt />
                </div>
              </a>
            ) : (
              <div
                className="project-image"
                style={{ background: fallbackVisuals[i]?.gradient }}
              >
                {fallbackVisuals[i]?.content}
              </div>
            )}

            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <div className="project-stack">{project.stack}</div>
              <p className="project-desc">{project.desc}</p>

              <div className="project-footer">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-gh-link"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-link"
                  >
                    <FaExternalLinkAlt /> {t.projects.btnLive}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <a
          href="https://github.com/Javohirbek-011"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          <FaGithub /> View All Projects
        </a>
      </div>
    </section>
  );
}
