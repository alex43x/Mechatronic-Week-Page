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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__logo">
          <img src="/CDR%20BLANCO.png" alt="CDR" className="navbar__logo-img" />
          <span>Mechatronic Week</span>
        </a>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
