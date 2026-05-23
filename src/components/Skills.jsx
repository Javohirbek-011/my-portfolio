import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Skills.css';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+'],
  },
  {
    label: 'Frameworks',
    skills: ['React.js', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
  {
    label: 'Concepts',
    skills: ['Responsive Design', 'REST API', 'Component Architecture'],
  },
];

export default function Skills() {
  useScrollReveal();
  const { t } = useLang();

  return (
    <section className="section" id="skills">
      <div className="reveal">
        <p className="section-label">// 02</p>
        <h2 className="section-title">{t.skills.title}</h2>
      </div>

      <div className="skills-container reveal">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <p className="skill-group-label">{group.label}</p>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div key={skill} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
