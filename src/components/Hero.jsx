import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import ParticleCanvas from './ParticleCanvas';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="inicio" className={`hero${loaded ? ' hero--loaded' : ''}`}>
      <div className="hero__bg" />
      <ParticleCanvas />

      <div className="hero__grid" />

      <div className="container hero__content">
        <div className="hero__logos">
          <img src="/CDR%20BLANCO.png" alt="CDR" className="hero__logo" />
        </div>

        <div className="hero__text">
          <span className="hero__badge">4, 6 y 8 de agosto 2026</span>
          <h1 className="hero__title">
            MECATRONIC <span className="hero__title--highlight">WEEK</span>
            <br />
            <span style={{ fontSize: '0.6em', opacity: 0.9, display: 'inline-block', marginTop: '10px' }}>FP-UNA 2026</span>
          </h1>
          <p className="hero__subtitle">
            Aprendé &middot; Creá &middot; Competí
          </p>
          <p className="hero__location">Facultad Politécnica &middot; UNA</p>
        </div>

        <Countdown />

        <a href="#torneos" className="btn btn-primary hero__cta">
          <span className="btn__shimmer" />
          Inscríbete ahora <HiArrowRight size={20} />
        </a>
      </div>

      <a href="#sobre" className="hero__scroll" aria-label="Scroll">
        <HiChevronDown size={28} />
      </a>
    </section>
  );
}
