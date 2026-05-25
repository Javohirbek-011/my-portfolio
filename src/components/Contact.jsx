import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSound } from '../hooks/useSound';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const contactItems = [
  {
    icon: <MdEmail />,
    label: 'Email',
    value: 'javohirtojaliyev15@gmail.com',
    href: 'mailto:javohirtojaliyev15@gmail.com',
    color: '#38BDF8',
  },
  {
    icon: <MdPhone />,
    label: 'Phone',
    value: '+998 50 100 30 59',
    href: 'tel:+998501003059',
    color: '#34D399',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'Javohirbek-011',
    href: 'https://github.com/Javohirbek-011',
    external: true,
    color: '#818CF8',
  },
  {
    icon: <FaTelegramPlane />,
    label: 'Telegram',
    value: '@javohirbekjonn',
    href: 'https://t.me/javohirbekjonn',
    external: true,
    color: '#38BDF8',
  },
];

export default function Contact() {
  useScrollReveal();
  const { t } = useLang();
  const { playTick, playClick } = useSound();

  return (
    <section className="section" id="contact">
      <div className="reveal">
        <p className="section-label">// 06</p>
        <h2 className="section-title">{t.contact.title}</h2>
      </div>

      <div className="contact-grid reveal">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="contact-card"
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            onClick={playClick}
          >
            <span className="contact-icon" style={{ color: item.color }}>
              {item.icon}
            </span>
            <div>
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
