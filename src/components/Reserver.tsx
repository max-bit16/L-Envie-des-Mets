import { FacebookIcon, MapPinIcon } from './icons'

export default function Reserver() {
  return (
    <section className="section" id="reserver">
      <div className="frame">
        <div className="reserve-grid">
          <div className="reserve__photo reveal">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop"
              srcSet="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&auto=format&fit=crop 600w, https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop 1200w"
              sizes="(max-width: 900px) 100vw, 40vw"
              alt="Mur de bouteilles de vin alignées dans une cave éclairée."
              loading="lazy"
              width="900"
              height="1200"
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
              Le chef ou son équipe répondent pendant les services. Laissez un message en dehors, on rappelle. Des tables sont disponibles quelques jours à l'avance.
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
