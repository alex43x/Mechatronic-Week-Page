import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function GlobalUI() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);

      // Back to top button
      setShowBackToTop(totalScroll > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress})` }} 
      />
      
      <button 
        className={`back-to-top${showBackToTop ? ' back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <HiArrowUp size={24} />
      </button>
    </>
  );
}
