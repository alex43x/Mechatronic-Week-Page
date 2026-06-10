import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#torneos', label: 'Torneos' },
  { href: '#charlas', label: 'Charlas' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sections = links.map((l) => l.href.slice(1));
      let current = '#inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__logo" onClick={(e) => handleClick(e, '#inicio')}>
          <img src="/CDR%20BLANCO.png" alt="CDR" className="navbar__logo-img" />
          <span>Mechatronic Week</span>
        </a>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={activeSection === l.href ? 'navbar__link--active' : ''}
                onClick={(e) => handleClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
