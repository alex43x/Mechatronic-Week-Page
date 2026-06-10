import { useState, useEffect } from 'react';

const TARGET = new Date('2026-08-04T23:59:59');

function calc() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: 'Días', value: t.days },
    { label: 'Horas', value: t.hours },
    { label: 'Minutos', value: t.minutes },
    { label: 'Segundos', value: t.seconds },
  ];

  return (
    <div className="countdown">
      {items.map(({ label, value }) => (
        <div key={label} className="countdown__item">
          <span className="countdown__value">{String(value).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
