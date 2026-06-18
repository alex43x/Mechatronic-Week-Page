import { useEffect, useRef, useState } from 'react';
import { HiCode, HiCube, HiFire, HiCheckCircle, HiDownload } from 'react-icons/hi';

const tournaments = [
  {
    id: 'hackabot', icon: HiCode, color: '#00bcd4', gradient: 'linear-gradient(135deg, #00bcd4, #4dd0e1)',
    name: 'HACKABOT 2026',
    desc: 'Competencia de innovación tecnológica y robótica en la que los participantes deberán diseñar, construir y presentar una solución robótica para resolver un problema de la vida cotidiana.',
    pdf: '/REGLAMENTO OFICIAL HACKABOT.pdf',
    rules: [
      'Estudiantes desde los 14 años.',
      'Equipos de 3 a 5 integrantes.',
      'Instituciones educativas públicas y privadas.',
      'Áreas posibles: Educación, Salud, Medio ambiente, Inclusión, Seguridad, Movilidad, Agricultura, Automatización.',
    ],
  },
  {
    id: 'sumobot', icon: HiCube, color: '#00bcd4', gradient: 'linear-gradient(135deg, #00bcd4, #26c6da)',
    name: 'CDR SUMO BOT CUP',
    desc: 'Competencia de robots autónomos inspirada en el sumo japonés. Mini Sumo Autónomo 500 g.',
    pdf: '/Reglamento CDR Sumobot.pdf',
    rules: [
      'Desde los 15 años.',
      'Participación individual o por equipos (hasta 5 integrantes).',
      'Peso máximo: 500 g. Dimensiones máx: 10 cm × 10 cm.',
      'Operación completamente autónoma sobre un dohyo circular.',
    ],
  },
  {
    id: 'battlebot', icon: HiFire, color: '#ffb300', gradient: 'linear-gradient(135deg, #ffb300, #ff8f00)',
    name: 'CDR BATTLEBOT CUP',
    desc: 'Competencia de combate de robots de control remoto. Categoría Antweight 500 g.',
    pdf: '/Reglamento CDR Battlebot.pdf',
    rules: [
      'Mayores de 18 años.',
      'Participación individual o por equipos (hasta 5 integrantes).',
      'Peso máximo: 500 gramos.',
      'Armas activas permitidas.',
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
                  
                  <div className="tournament-row__actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    <button className="btn btn-primary tournament-row__btn" style={{ background: t.gradient, marginTop: 0 }}>
                      <span className="btn__shimmer" />
                      Inscribirse a {t.name}
                    </button>
                    <a href={t.pdf} download className="btn btn-outline tournament-row__btn" style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                      <HiDownload size={20} />
                      Descargar Reglamento
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
