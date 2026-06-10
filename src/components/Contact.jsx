import { useEffect, useRef, useState } from 'react';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
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

  return (
    <section id="contacto" className={`section contact${visible ? ' contact--visible' : ''}`} ref={sectionRef}>
      <div className="contact__bg-shapes">
        <div className="contact__shape" />
        <div className="contact__shape" />
      </div>

      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">Seguinos en redes o escribinos</p>

        <div className="contact__grid">
          <div className="contact__cards">
            <div className="contact__card" style={{ animationDelay: '0s' }}>
              <div className="contact__card-icon">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <h4>Ubicación</h4>
                <p>Facultad Politécnica - UNA<br />San Lorenzo, Paraguay</p>
              </div>
            </div>
            <div className="contact__card" style={{ animationDelay: '0.1s' }}>
              <div className="contact__card-icon">
                <HiMail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p>cdr.mechatronic@email.com</p>
              </div>
            </div>
            <div className="contact__card" style={{ animationDelay: '0.2s' }}>
              <div className="contact__card-icon">
                <HiPhone size={24} />
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>+595 981 234 567</p>
              </div>
            </div>
          </div>

          <div className="contact__social">
            <p className="contact__social-label">Seguinos en redes</p>
            <div className="contact__social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Instagram" style={{ '--social-color': '#E4405F' }}>
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/595981234567" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="WhatsApp" style={{ '--social-color': '#25D366' }}>
                <FaWhatsapp size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Facebook" style={{ '--social-color': '#1877F2' }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="TikTok" style={{ '--social-color': '#000000' }}>
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
