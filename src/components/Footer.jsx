export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__bg-logo-wrap">
        <img src="/CDR%20BLANCO.png" alt="CDR" className="footer__bg-logo" />
      </div>
      <div className="footer__bg" />
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/CDR%20BLANCO.png" alt="CDR" className="footer__logo" />
            <span className="footer__name">CDR Mechatronic Week</span>
          </div>
          <div className="footer__links">
            <a href="#inicio" className="footer__link">Inicio</a>
            <a href="#sobre" className="footer__link">Sobre</a>
            <a href="#torneos" className="footer__link">Torneos</a>
            <a href="#charlas" className="footer__link">Charlas</a>
            <a href="#contacto" className="footer__link">Contacto</a>
          </div>
        </div>
        <div className="footer__divider" />
        <p className="footer__text">
          &copy; {year} CDR Mechatronic Week &mdash; Facultad Politécnica &middot; Universidad Nacional de Asunción
        </p>
      </div>
    </footer>
  );
}
