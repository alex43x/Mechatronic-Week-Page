import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="inicio" className={`hero${loaded ? ' hero--loaded' : ''}`}>
      <div className="hero__bg" />

      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
        <div className="hero__shape hero__shape--4" />
        <div className="hero__shape hero__shape--5" />
      </div>

      <div className="hero__grid" />

      <div className="container hero__content">
        <div className="hero__logos">
          <img src="/CDR%20BLANCO.png" alt="CDR" className="hero__logo" />
        </div>

        <div className="hero__text">
          <span className="hero__badge">4, 6 y 8 de agosto 2026</span>
          <h1 className="hero__title">
            CDR <span className="hero__title--highlight">Mechatronic</span> Week
          </h1>
          <p className="hero__subtitle">
            Torneos de robótica &middot; Charlas &middot; Presentación de proyectos
          </p>
          <p className="hero__location">Facultad Politécnica &middot; Universidad Nacional de Asunción</p>
        </div>

        <Countdown />

        <a href="#torneos" className="btn btn-primary hero__cta">
          Inscríbete ahora <HiArrowRight size={20} />
        </a>
      </div>

      <a href="#sobre" className="hero__scroll" aria-label="Scroll">
        <HiChevronDown size={28} />
      </a>
    </section>
  );
}
