import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Skills.css';

const skillGroups = [
  { label: 'Languages', skills: ['HTML5', 'CSS3', 'JavaScript ES6+'] },
  { label: 'Frameworks', skills: ['React.js', 'Tailwind CSS'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'npm'] },
  { label: 'Concepts', skills: ['Responsive Design', 'REST API', 'Component Architecture'] },
];

const codeLines = [
  { num: 1,  content: <><span className="kw">const</span> <span className="var">skills</span> <span className="op">=</span> {'{'}</> },
  { num: 2,  content: <>&nbsp;&nbsp;<span className="key">languages</span><span className="op">:</span> [</> },
  { num: 3,  content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"HTML5"</span><span className="op">,</span> <span className="str">"CSS3"</span><span className="op">,</span></> },
  { num: 4,  content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"JavaScript"</span></> },
  { num: 5,  content: <>&nbsp;&nbsp;]<span className="op">,</span></> },
  { num: 6,  content: <>&nbsp;&nbsp;<span className="key">frameworks</span><span className="op">:</span> [</> },
  { num: 7,  content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"React.js"</span><span className="op">,</span> <span className="str">"Tailwind"</span></> },
  { num: 8,  content: <>&nbsp;&nbsp;]<span className="op">,</span></> },
  { num: 9,  content: <>&nbsp;&nbsp;<span className="key">tools</span><span className="op">:</span> [</> },
  { num: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"Git"</span><span className="op">,</span> <span className="str">"GitHub"</span><span className="op">,</span> <span className="str">"VS Code"</span></> },
  { num: 11, content: <>&nbsp;&nbsp;]<span className="op">,</span></> },
  { num: 12, content: <>&nbsp;&nbsp;<span className="key">level</span><span className="op">:</span> <span className="str">"Growing everyday 🚀"</span></> },
  { num: 13, content: <>{'}'}</> },
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

      <div className="skills-wrapper reveal">
        {/* Left: skill badges */}
        <div className="skills-container">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <p className="skill-group-label">{group.label}</p>
              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-badge">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: animated code window */}
        <div className="code-window">
          <div className="code-window-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="code-filename">skills.js</span>
          </div>
          <div className="code-body">
            {codeLines.map((line) => (
              <div
                key={line.num}
                className="code-line"
                style={{ animationDelay: `${line.num * 0.12}s` }}
              >
                <span className="line-num">{line.num}</span>
                {line.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
