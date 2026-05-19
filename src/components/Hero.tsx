import { PhoneIcon } from './icons'

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__bg"
        id="heroBg"
        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&q=85&auto=format&fit=crop"
        srcSet="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=85&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=85&auto=format&fit=crop 1200w, https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&q=85&auto=format&fit=crop 1920w"
        sizes="100vw"
        alt=""
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1080"
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Restaurant gastronomique · Grenoble</span>
          <h1>Une cuisine de saison,<br /><em>cuisinée à la minute.</em></h1>
          <p className="hero__lede">
            Une petite salle feutrée, une carte courte, un chef en salle. 7 Rue Genissieu, à deux pas de Victor Hugo.
          </p>
          <div className="hero__ctas">
            <a href="tel:+33476473256" className="btn btn--primary" aria-label="Appeler le 04 76 47 32 56 pour réserver">
              <PhoneIcon />
              Appeler 04 76 47 32 56
            </a>
            <a href="#carte" className="btn btn--secondary">Voir la carte</a>
          </div>
          <div className="hero__meta">
            <span>Mardi–Samedi · 12h–14h · 20h–22h</span>
            <span className="hero__meta-sep" aria-hidden="true" />
            <span>Déjeuner dès 20&nbsp;€</span>
            <span className="hero__meta-sep" aria-hidden="true" />
            <span><span className="stars" aria-hidden="true">★</span> 4,7 · 326 avis Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}
