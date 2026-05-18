const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
  </svg>
)

export default function Reserver() {
  return (
    <section className="section" id="reserver">
      <div className="frame">
        <div className="reserve-grid">
          <div className="reserve__photo reveal">
            <img
              src="https://images.unsplash.com/photo-CPMZguYURMw?auto=format&fit=crop&w=900&q=85"
              alt="Mur de bouteilles de vin alignées dans une cave éclairée."
            />
          </div>
          <div className="reserve__panel reveal">
            <span className="eyebrow">Réserver</span>
            <h2>Une table se prend <em>au téléphone.</em></h2>
            <a
              href="tel:+33476473256"
              className="reserve__phone"
              aria-label="Appeler L'Envie des Mets au 04 76 47 32 56"
            >
              04 76 47 32 56
            </a>
            <p className="reserve__phone-note">
              Le chef ou son équipe répondent pendant les services. Laissez un message en dehors, on rappelle.
            </p>

            <dl className="reserve__info">
              <dt>Adresse</dt>
              <dd>
                7 Rue Genissieu, 38000 Grenoble<br />
                <a
                  className="link-underline"
                  href="https://www.google.com/maps/search/?api=1&query=7+Rue+Genissieu+38000+Grenoble"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itinéraire Google Maps
                </a>
              </dd>
              <dt>Horaires</dt>
              <dd>
                <div className="reserve__hours">
                  <span>Mardi – Samedi</span><span>12h–14h · 20h–22h</span>
                  <span>Lundi &amp; Dimanche</span><span>Fermé</span>
                </div>
              </dd>
              <dt>Email</dt>
              <dd>
                <a className="link-underline" href="mailto:contact@lenvie-des-mets.fr">
                  contact@lenvie-des-mets.fr
                </a>
              </dd>
            </dl>

            <div className="reserve__socials">
              <a
                href="https://www.facebook.com/people/Lenvie-des-mets/100054598442769/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Rue+Genissieu+38000+Grenoble"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon />
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
