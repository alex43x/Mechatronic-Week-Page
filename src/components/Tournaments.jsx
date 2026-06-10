import { useEffect, useRef, useState } from 'react';
import { HiChevronDown, HiExternalLink, HiCode, HiCube, HiAcademicCap, HiFire } from 'react-icons/hi';

const tournaments = [
  {
    id: 'hackabot', icon: HiCode, color: '#00bcd4', gradient: 'linear-gradient(135deg, #00bcd4, #4dd0e1)',
    name: 'Hackabot',
    desc: 'Competencia de robótica libre donde los participantes programan y construyen robots para resolver desafíos.',
    rules: [
      'Cada equipo debe tener entre 2 y 4 integrantes.',
      'Los robots deben ser autónomos (sin control remoto).',
      'Tiempo límite por ronda: 3 minutos.',
      'No se permite interferir con los robots del oponente.',
      'El incumplimiento de las normas resulta en descalificación.',
    ],
  },
  {
    id: 'wedo', icon: HiAcademicCap, color: '#ffb300', gradient: 'linear-gradient(135deg, #ffb300, #ffd54f)',
    name: 'WeDo',
    desc: 'Categoría para los más jóvenes, usando kits LEGO WeDo para construir y programar robots.',
    rules: [
      'Participantes de 7 a 12 años.',
      'Se utiliza el kit LEGO WeDo 2.0.',
      'Los robots deben completar un recorrido establecido.',
      'Se permite la ayuda de un mentor por equipo.',
      'Gana el que complete el recorrido en menor tiempo.',
    ],
  },
  {
    id: 'sumobot', icon: HiCube, color: '#00bcd4', gradient: 'linear-gradient(135deg, #00bcd4, #26c6da)',
    name: 'Sumo Bot',
    desc: 'Dos robots se enfrentan en un ring. El primero que empuje al otro fuera del círculo gana.',
    rules: [
      'Peso máximo del robot: 3 kg.',
      'Dimensiones máximas: 20 cm x 20 cm.',
      'El robot debe ser completamente autónomo.',
      'Combates al mejor de 3 rondas.',
      'No se permiten armas cortantes ni elementos peligrosos.',
    ],
  },
  {
    id: 'battlebot', icon: HiFire, color: '#ffb300', gradient: 'linear-gradient(135deg, #ffb300, #ff8f00)',
    name: 'Battlebot',
    desc: 'Combates robot vs robot en un ring cerrado. Gana el que inhabilite a su oponente.',
    rules: [
      'Peso máximo: 6 kg.',
      'Dimensiones máximas: 30 cm x 30 cm.',
      'Se permiten armas rotativas, pero no cortantes.',
      'Tiempo máximo por combate: 3 minutos.',
      'El árbitro puede detener el combate si hay riesgo.',
    ],
  },
];

export default function Tournaments() {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="torneos" className={`section tournaments${visible ? ' tournaments--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Torneos</h2>
        <p className="section-subtitle">
          Elegí tu categoría y participá en la competencia
        </p>

        <div className="tournaments__grid">
          {tournaments.map((t, i) => {
            const isOpen = openId === t.id;
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className={`tournament-card${isOpen ? ' tournament-card--open' : ''}`}
                style={{ '--card-accent': t.color, '--card-gradient': t.gradient, animationDelay: `${i * 0.1}s` }}
              >
                <div className="tournament-card__badge">Inscripciones abiertas</div>
                <div className="tournament-card__header" onClick={() => setOpenId(isOpen ? null : t.id)}>
                  <div className="tournament-card__icon">
                    <Icon size={28} />
                  </div>
                  <div className="tournament-card__info">
                    <h3 className="tournament-card__name">{t.name}</h3>
                    <p className="tournament-card__desc">{t.desc}</p>
                  </div>
                  <button
                    className="tournament-card__toggle"
                    aria-label={isOpen ? 'Cerrar reglas' : 'Ver reglas'}
                  >
                    <HiChevronDown size={22} />
                  </button>
                </div>

                <div className={`tournament-card__rules-wrap${isOpen ? ' tournament-card__rules-wrap--open' : ''}`}>
                  <div className="tournament-card__rules">
                    <h4>Reglas</h4>
                    <ul>
                      {t.rules.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                    <a
                      href="#!"
                      className="btn btn-amber tournament-card__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Próximamente link de inscripción');
                      }}
                    >
                      Inscribirme <HiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
