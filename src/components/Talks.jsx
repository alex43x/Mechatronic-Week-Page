import { useEffect, useRef, useState } from 'react';
import { HiLightningBolt, HiWifi, HiCode, HiCog } from 'react-icons/hi';

const workshops = [
  { icon: HiLightningBolt, title: 'Electrónica', desc: 'Circuitos y componentes' },
  { icon: HiWifi, title: 'Sensores', desc: 'Detectá y medí' },
  { icon: HiCode, title: 'Programación', desc: 'Código y control' },
  { icon: HiCog, title: 'Control', desc: 'Mové tu robot' },
];

export default function Workshops() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="talleres" className={`section workshops${visible ? ' workshops--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Talleres de Robótica</h2>
        <p className="section-subtitle">
          Aprende desde cero hasta avanzado
        </p>

        <div className="about__bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {workshops.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={i}
                className="about__bento-card"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="about__card-glow" />
                <div className="about__card-content">
                  <div className="about__card-icon" style={{ marginBottom: '16px', color: 'var(--cyan)' }}>
                    <Icon size={40} />
                  </div>
                  <h3 className="about__card-label">{w.title}</h3>
                  <p className="about__card-desc">{w.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
