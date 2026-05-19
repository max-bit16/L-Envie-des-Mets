export default function Valeurs() {
  return (
    <>
      <section className="section values" id="valeurs" style={{ paddingTop: 0 }}>
        <div className="frame">
          <div className="values__heading reveal">
            <span className="eyebrow">Trois gestes, en cuisine</span>
            <h2>Le marché commande, <em>la cuisine répond.</em></h2>
          </div>
          <div className="values-grid">
            <article className="value reveal">
              <div className="value__img">
                <img
                  src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=800&q=80&auto=format&fit=crop"
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
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop"
                  alt="Halle couverte d'un marché, un maraîcher prépare un bouquet de poireaux."
                  loading="lazy"
                  width="800"
                  height="1000"
                />
              </div>
              <h3><em>Du marché.</em></h3>
              <p>Les producteurs locaux, la halle, l'ardoise du jour. Rien ne dort en chambre froide pendant des jours.</p>
            </article>

            <article className="value value--minute reveal">
              <p className="value__big">À la minute.</p>
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
