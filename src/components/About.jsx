import { useEffect, useRef, useState } from 'react';
import { HiChip, HiCalendar, HiUserGroup, HiLightBulb } from 'react-icons/hi';

function Counter({ end, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        const duration = 1500;
        const steps = 30;
        const step = Math.floor(duration / steps);
        const inc = end / steps;
        let curr = 0;
        const t = setInterval(() => {
          curr += inc;
          if (curr >= end) {
            setVal(end);
            clearInterval(t);
          } else {
            setVal(Math.floor(curr));
          }
        }, step);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { id: 'dias', icon: HiCalendar, end: 3, suffix: '', label: 'Días de Evento', desc: '4, 6 y 8 de agosto' },
  { id: 'torneos', icon: HiChip, end: 3, suffix: '', label: 'Torneos', desc: 'Hackabot, Sumo Bot y Battlebot' },
  { id: 'talleres', icon: HiLightBulb, end: 4, suffix: '', label: 'Talleres', desc: 'De electrónica a control' },
  { id: 'participantes', icon: HiUserGroup, end: 100, suffix: '+', label: 'Estudiantes', desc: 'Construyendo el futuro, HOY' },
];

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Tilt effect calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="sobre" className={`section about${visible ? ' about--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Sobre el evento</h2>
        
        <div className="about__layout">
          <div className="about__bento">
            {stats.map(({ id, icon: Icon, end, suffix, label, desc }, i) => (
              <div 
                key={label} 
                className={`about__bento-card about__bento-card--${id}`} 
                style={{ animationDelay: `${i * 0.15}s` }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="about__card-glow" />
                <div className="about__card-content">
                  <div className="about__card-icon">
                    <Icon size={32} />
                  </div>
                  <div className="about__card-info">
                    <div className="about__card-number">
                      <Counter end={end} suffix={suffix} />
                    </div>
                    <h3 className="about__card-label">{label}</h3>
                    <p className="about__card-desc">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="about__text-content">
            <p className="section-subtitle" style={{ textAlign: 'left', marginInline: '0', marginBottom: '2rem' }}>
              La <strong>Mechatronic Week 2026</strong> es un evento académico y tecnológico orientado a fomentar el aprendizaje práctico, la innovación, el trabajo en equipo y la aplicación de conocimientos de robótica, electrónica, programación y diseño mecánico.
            </p>
            <div className="about__general-objective" style={{ color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1rem' }}>
                Las competencias buscan incentivar el interés por la ingeniería, la robótica y la innovación tecnológica mediante actividades prácticas que permitan aplicar conocimientos reales en escenarios desafiantes y colaborativos.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Fortaleciendo habilidades: Creatividad, Resolución de problemas, Liderazgo, Trabajo en equipo, Comunicación, Innovación, Pensamiento crítico y Gestión de proyectos.
              </p>
              <div style={{ marginTop: '2rem', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>
                <p>Facultad Politécnica – Universidad Nacional de Asunción</p>
                <p>Club de Robótica | San Lorenzo – Paraguay</p>
                <p style={{ color: 'var(--accent)', marginTop: '0.5rem' }}>4, 6 y 8 de agosto de 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
