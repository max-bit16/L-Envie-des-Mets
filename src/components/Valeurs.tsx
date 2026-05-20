export default function Valeurs() {
  return (
    <>
      <section className="section values" id="valeurs">
        <div className="frame">
          <div className="values__heading reveal">
            <div className="label-lined"><span className="eyebrow">Trois gestes, en cuisine</span></div>
            <h2>Le marché commande, <em>la cuisine répond.</em></h2>
          </div>
          <div className="values-grid">
            <article className="value reveal">
              <div className="value__img">
                <img
                  src="/images/vignes-terroir-800.webp"
                  srcSet="/images/vignes-terroir-400.webp 400w, /images/vignes-terroir-800.webp 800w"
                  sizes="(max-width: 900px) 100vw, 33vw"
                  alt="Halle d'un marché provençal, paniers de légumes sous les platanes."
                  loading="lazy"
                  width="800"
                  height="1000"
                />
              </div>
              <h3><em>De saison.</em></h3>
              <p>La carte change quand le marché change. Le printemps appelle l'asperge, l'automne le potimarron — on suit, sans s'inventer.</p>
            </article>

            <article className="value reveal">
              <div className="value__img">
                <img
                  src="/images/marche-legumes-900.webp"
                  srcSet="/images/marche-legumes-400.webp 400w, /images/marche-legumes-900.webp 900w"
                  sizes="(max-width: 900px) 100vw, 33vw"
                  alt="Halle couverte d'un marché, un maraîcher prépare un bouquet de poireaux."
                  loading="lazy"
                  width="900"
                  height="1125"
                />
              </div>
              <h3><em>Du marché.</em></h3>
              <p>Les producteurs locaux, la halle, l'ardoise du jour. Rien ne dort en chambre froide pendant des jours.</p>
            </article>

            <article className="value value--minute reveal">
              <h3 className="value__big">À la minute.</h3>
              <p>Chaque assiette est dressée quand vous la commandez. C'est plus long, c'est plus juste — c'est comme ça.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="transition-band" aria-label="Citation de Grenoble Tourisme">
        <div className="transition-band__bg" aria-hidden="true" />
        <div className="transition-band__overlay" aria-hidden="true" />
        <blockquote className="quote reveal">
          <div className="quote__rule" aria-hidden="true" />
          <p className="quote__text">
            Cuisine de qualité et inventive, à base de produits de saison, jouant sur l'harmonie des couleurs et des saveurs.
          </p>
          <div className="quote__rule quote__rule--bottom" aria-hidden="true" />
          <cite className="quote__src">Grenoble Tourisme</cite>
        </blockquote>
      </section>
    </>
  )
}
