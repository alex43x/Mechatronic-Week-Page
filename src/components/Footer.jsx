import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__organizer">
          <span className="footer__label">ORGANIZA:</span>
          <div className="footer__brand">
            <img src="/CDR%20BLANCO.png" alt="CDR" className="footer__logo" />
            <div className="footer__brand-text">
              <strong>CLUB DE ROBÓTICA</strong>
              <span>FP-UNA</span>
            </div>
          </div>
        </div>

        <div className="footer__social">
          <span className="footer__label">SEGUINOS EN NUESTRAS REDES</span>
          <div className="footer__social-links">
            <a href="https://instagram.com/roboticafpuna" target="_blank" rel="noopener noreferrer" className="footer__link">
              <FaInstagram size={20} /> @roboticafpuna
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__link">
              <FaFacebook size={20} /> Club de Robótica FP-UNA
            </a>
          </div>
        </div>

        <div className="footer__slogan">
          <span>CONSTRUIMOS EL FUTURO, <strong style={{ color: 'var(--cyan)' }}>HOY.</strong></span>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; {year} MECATRONIC WEEK FP-UNA
      </div>
    </footer>
  );
}
