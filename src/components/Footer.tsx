export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg" aria-hidden="true" />
      <div className="footer__overlay" aria-hidden="true" />
      <div className="footer__inner frame">
        <div className="footer__mark">L'<em>Envie</em> des Mets</div>
        <a
          href="tel:+33476473256"
          className="footer__phone"
          aria-label="Appeler L'Envie des Mets au 04 76 47 32 56"
        >
          04 76 47 32 56
        </a>
        <p className="footer__line">7 Rue Genissieu, 38000 Grenoble</p>
        <p className="footer__line">Mardi–Samedi · 12h–14h · 20h–22h</p>
        <nav className="footer__links" aria-label="Liens secondaires">
          <a
            href="https://www.facebook.com/people/Lenvie-des-mets/100054598442769/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=7+Rue+Genissieu+38000+Grenoble"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>

        </nav>
        <p className="footer__legal">© 2026 L'Envie des Mets · Tous droits réservés.</p>
      </div>
    </footer>
  )
}
