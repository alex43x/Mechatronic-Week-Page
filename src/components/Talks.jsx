import { useEffect, useRef, useState } from 'react';
import { HiClock, HiUser, HiSun } from 'react-icons/hi';

const talks = [
  { time: '10:00', end: '10:45', title: 'Introducción a la robótica autónoma', speaker: 'Pendiente' },
  { time: '11:00', end: '11:45', title: 'Programación de microcontroladores', speaker: 'Pendiente' },
  { time: '12:00', end: '13:00', title: 'Almuerzo', speaker: '—', break: true },
  { time: '13:00', end: '13:45', title: 'Diseño mecánico para robots', speaker: 'Pendiente' },
  { time: '14:00', end: '14:45', title: 'Visión artificial aplicada', speaker: 'Pendiente' },
  { time: '15:00', end: '16:00', title: 'Presentación de proyectos', speaker: 'Participantes' },
];

export default function Talks() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalH = timeline.offsetHeight;

      if (rect.top > windowH) {
        setFillHeight(0);
      } else if (rect.bottom < 0) {
        setFillHeight(100);
      } else {
        const scrolled = windowH - rect.top;
        const pct = Math.min(Math.max((scrolled / (totalH + windowH * 0.3)) * 100, 0), 100);
        setFillHeight(pct);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="charlas" className={`section talks${visible ? ' talks--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Charlas & Proyectos</h2>
        <p className="section-subtitle">
          Cronograma de charlas y presentación de proyectos
        </p>

        <div className="talks__timeline" ref={timelineRef}>
          <div className="talks__line" />
          <div
            className="talks__line-fill"
            style={{ height: `${fillHeight}%` }}
          />
          {talks.map((t, i) => (
            <div
              key={i}
              className={`talks__item${t.break ? ' talks__item--break' : ''}${i === 0 ? ' talks__item--next' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="talks__dot">
                {t.break ? <HiSun size={14} /> : <div className="talks__dot-inner" />}
              </div>
              <div className="talks__card">
                <div className="talks__card-top">
                  <span className="talks__time">
                    <HiClock size={14} /> {t.time} &ndash; {t.end}
                  </span>
                  {!t.break && (
                    <span className="talks__speaker">
                      <HiUser size={14} /> {t.speaker}
                    </span>
                  )}
                </div>
                <h4 className="talks__card-title">{t.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
