import { useEffect, useRef, useState } from 'react';
import { HiCode, HiCube, HiFire, HiCheckCircle } from 'react-icons/hi';

const tournaments = [
  {
    id: 'hackabot', icon: HiCode, color: '#00bcd4', gradient: 'linear-gradient(135deg, #00bcd4, #4dd0e1)',
    name: 'Hackabot',
    desc: 'Creá una solución real con robótica.',
    rules: [
      'Equipos de 3 a 5 integrantes.',
      'Desarrollo durante la semana.',
      'Mentorías técnicas.',
      'Presentación final y premiación.',
    ],
  },
  {
    id: 'sumobot', icon: HiCube, color: '#00bcd4', gradient: 'linear-gradient(135deg, #00bcd4, #26c6da)',
    name: 'Sumo Bot Cup',
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
    name: 'Battlebot Cup',
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

        <div className="tournaments__list">
          {tournaments.map((t, i) => {
            const Icon = t.icon;
            const isReversed = i % 2 !== 0;
            return (
              <article
                key={t.id}
                className={`tournament-row ${isReversed ? 'tournament-row--reversed' : ''}`}
                style={{ '--accent': t.color, animationDelay: `${i * 0.2}s` }}
              >
                <div className="tournament-row__visual" style={{ background: t.gradient }}>
                  <div className="tournament-row__icon-wrap">
                    <Icon size={80} color="var(--dark)" />
                  </div>
                  <div className="tournament-row__bg-pattern" />
                </div>
                
                <div className="tournament-row__content">
                  <h3 className="tournament-row__title">{t.name}</h3>
                  <p className="tournament-row__desc">{t.desc}</p>
                  
                  <div className="tournament-row__rules">
                    <h4>Reglamento Oficial</h4>
                    <ul>
                      {t.rules.map((r, idx) => (
                        <li key={idx}>
                          <HiCheckCircle size={20} className="rule-icon" style={{ color: t.color }} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn btn-primary tournament-row__btn" style={{ background: t.gradient }}>
                    <span className="btn__shimmer" />
                    Inscribirse a {t.name}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
