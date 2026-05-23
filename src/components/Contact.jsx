import { useLang } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Contact.css';

const contactItems = [
    {
        icon: '📧',
        label: 'Email',
        value: 'javohirtojaliyev15@gmail.com',
        href: 'mailto:javohirtojaliyev15@gmail.com',
    },
    {
        icon: '📱',
        label: 'Phone',
        value: '+998 50 100 30 59',
        href: 'tel:+998501003059',
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'Javohirbek-011',
        href: 'https://github.com/Javohirbek-011',
        external: true,
    },
    {
        icon: '✈️',
        label: 'Telegram',
        value: '@javohirbekjonn',
        href: 'https://t.me/@javohirbekjonn',
        external: true,
    },
];

export default function Contact() {
    useScrollReveal();
    const { t } = useLang();

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
                    >
                        <span className="contact-icon">{item.icon}</span>
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
