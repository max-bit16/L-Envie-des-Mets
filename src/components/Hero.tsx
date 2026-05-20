import { PhoneIcon } from './icons'

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__bg"
        id="heroBg"
        src="/images/hero-marche-1920.webp"
        srcSet="/images/hero-marche-800.webp 800w, /images/hero-marche-1920.webp 1920w"
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
          <h1>
            <span className="hero__line">Une cuisine de saison,<br /></span>
            <span className="hero__line"><em>cuisinée à la minute.</em></span>
          </h1>
          <p className="hero__lede hero__line hero__subtitle">
            Une petite salle feutrée, une carte courte, un chef en salle. 7 Rue Genissieu, à deux pas de Victor Hugo.
          </p>
          <hr className="hero__divider" aria-hidden="true" />
          <div className="hero__ctas hero__line hero__cta">
            <a href="tel:+33476473256" className="btn btn--primary" aria-label="Appeler le 04 76 47 32 56 pour réserver">
              <PhoneIcon />
              Appeler 04 76 47 32 56
            </a>
            <a href="#carte" className="btn btn--secondary">Voir la carte</a>
          </div>
          <div className="hero__meta hero__line hero__stats">
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
