import { useLang } from '../context/LanguageContext';
import '../styles/Footer.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/Javohirbek-011' },
  { label: 'Telegram', href: 'https://t.me/javohirbek_011' },
  { label: 'Email', href: 'mailto:javohirtojaliyev15@gmail.com' },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-logo">JT</span>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social-link"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-rights">
            © {new Date().getFullYear()} Javohirbek Tojaliyev — {t.footer.rights}
          </p>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
