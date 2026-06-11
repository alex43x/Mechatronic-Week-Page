import { useEffect, useRef, useState } from 'react';
import { HiMail, HiLocationMarker, HiPhone, HiTerminal, HiPaperAirplane } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Contact() {
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

  const handleMagnetic = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMagneticReset = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  return (
    <section id="contacto" className={`section contact${visible ? ' contact--visible' : ''}`} ref={sectionRef}>
      <div className="contact__bg-mesh" />

      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">Conéctate con nosotros o déjanos un mensaje</p>

        <div className="contact__grid">
          
          <div className="contact__info">
            <div className="contact__card" style={{ animationDelay: '0s' }}>
              <div className="contact__card-icon">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <h4>Ubicación</h4>
                <p>Facultad Politécnica - UNA<br />San Lorenzo, Paraguay</p>
              </div>
            </div>
            <div className="contact__card" style={{ animationDelay: '0.15s' }}>
              <div className="contact__card-icon">
                <HiMail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p>cdr.mechatronic@email.com</p>
              </div>
            </div>
            <div className="contact__card" style={{ animationDelay: '0.3s' }}>
              <div className="contact__card-icon">
                <HiPhone size={24} />
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>+595 981 234 567</p>
              </div>
            </div>

            <div className="contact__social">
              <p className="contact__social-label">Redes Sociales</p>
              <div className="contact__social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Instagram" style={{ '--social-color': '#E4405F' }} onMouseMove={handleMagnetic} onMouseLeave={handleMagneticReset}>
                  <FaInstagram size={24} />
                </a>
                <a href="https://wa.me/595981234567" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="WhatsApp" style={{ '--social-color': '#25D366' }} onMouseMove={handleMagnetic} onMouseLeave={handleMagneticReset}>
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Facebook" style={{ '--social-color': '#1877F2' }} onMouseMove={handleMagnetic} onMouseLeave={handleMagneticReset}>
                  <FaFacebook size={24} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="TikTok" style={{ '--social-color': '#00bcd4' }} onMouseMove={handleMagnetic} onMouseLeave={handleMagneticReset}>
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper">
            <div className="contact__form-header">
              <HiTerminal size={20} />
              <span>terminal_contacto.exe</span>
            </div>
            <form className="contact__form" onSubmit={e => e.preventDefault()}>
              <div className="contact__form-group">
                <label>user@name:~#</label>
                <input type="text" placeholder="Ingresa tu nombre..." className="contact__input" />
              </div>
              <div className="contact__form-group">
                <label>user@email:~#</label>
                <input type="email" placeholder="tucorreo@ejemplo.com..." className="contact__input" />
              </div>
              <div className="contact__form-group">
                <label>sys.message:~#</label>
                <textarea rows="4" placeholder="Escribe tu mensaje aquí..." className="contact__input contact__textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                <span className="btn__shimmer" />
                Ejecutar envío <HiPaperAirplane size={18} style={{ transform: 'rotate(90deg)' }} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
