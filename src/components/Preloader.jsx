import { useState, useEffect } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setHidden(true), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader${fadeOut ? ' preloader--fade' : ''}`}>
      <div className="preloader__content">
        <div className="preloader__logo-wrap">
          <img src="/CDR%20BLANCO.png" alt="CDR" className="preloader__logo" />
          <div className="preloader__ring" />
          <div className="preloader__ring preloader__ring--2" />
        </div>
        <div className="preloader__bar">
          <div className="preloader__bar-fill" />
        </div>
        <p className="preloader__text">Mechatronic Week</p>
      </div>
    </div>
  );
}
