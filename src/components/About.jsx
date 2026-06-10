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
  { icon: HiChip, end: 4, suffix: '', label: 'Torneos', desc: 'Hackabot, WeDo, Sumo Bot y Battlebot' },
  { icon: HiCalendar, end: 3, suffix: '', label: 'Días', desc: '4, 6 y 8 de agosto' },
  { icon: HiUserGroup, end: 100, suffix: '+', label: 'Participantes', desc: 'De todo el país' },
  { icon: HiLightBulb, end: 6, suffix: '', label: 'Charlas', desc: 'Expertos en robótica' },
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

  return (
    <section id="sobre" className={`section about${visible ? ' about--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Sobre el evento</h2>
        <p className="section-subtitle">
          Del 4 al 8 de agosto, la CDR Mechatronic Week reúne a los mejores talentos en robótica
          para competir, aprender y compartir proyectos innovadores.
        </p>

        <div className="about__grid">
          {stats.map(({ icon: Icon, end, suffix, label, desc }, i) => (
            <div key={label} className="about__card" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="about__card-icon">
                <Icon size={32} />
              </div>
              <div className="about__card-number">
                <Counter end={end} suffix={suffix} />
              </div>
              <h3 className="about__card-label">{label}</h3>
              <p className="about__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
