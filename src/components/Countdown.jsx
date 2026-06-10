import { useState, useEffect, useRef } from 'react';

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

function FlipDigit({ value, label }) {
  const [display, setDisplay] = useState(String(value).padStart(2, '0'));
  const [flipping, setFlipping] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    const newVal = String(value).padStart(2, '0');
    if (prevRef.current !== value) {
      setFlipping(true);
      const timer1 = setTimeout(() => {
        setDisplay(newVal);
      }, 200); // Change digit halfway through the 400ms animation
      const timer2 = setTimeout(() => {
        setFlipping(false);
      }, 400); // Finish animation
      prevRef.current = value;
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [value]);

  return (
    <div className="countdown__item">
      <div className={`countdown__flip${flipping ? ' countdown__flip--active' : ''}`}>
        <span className="countdown__value">{display}</span>
      </div>
      <span className="countdown__label">{label}</span>
    </div>
  );
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
        <FlipDigit key={label} value={value} label={label} />
      ))}
    </div>
  );
}
