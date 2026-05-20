export default function Chef() {
  return (
    <section className="section" id="chef">
      <div className="frame">
        <div className="chef-grid">
          <div className="chef-photo reveal">
            <img
              src="/images/marche-couvert-1200.webp"
              srcSet="/images/marche-couvert-800.webp 800w, /images/marche-couvert-1200.webp 1200w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Marché couvert, vendeur de légumes verts au travail parmi les étals."
              loading="lazy"
              width="1200"
              height="1500"
            />
          </div>
          <div className="chef-text reveal" data-delay="100">
            <span className="eyebrow">Le chef</span>
            <span className="deco-quote" aria-hidden="true">"</span>
            <h2>Une table à Grenoble,<br /><em>par un enfant de la maison.</em></h2>
            <p>
              Fils de restaurateur, diplômé de l'école hôtelière de Grenoble, le chef a longtemps travaillé en cuisine pour les autres avant d'ouvrir sa propre table. L'Envie des Mets est l'aboutissement d'un métier appris jeune et d'une exigence patiente.
            </p>
            <p>
              Il dessine la carte chaque semaine en fonction du marché, et passe en salle à chaque service. On vient ici parce qu'on mange bien — pas parce qu'on doit s'y comporter d'une certaine manière.
            </p>
            <div className="chef-signature">Le chef-propriétaire, présent en salle.</div>
            <a href="tel:+33476473256" className="chef__cta" aria-label="Appeler L'Envie des Mets au 04 76 47 32 56">
              Réserver une table — 04 76 47 32 56
            </a>
          </div>
        </div>

        <figure className="chef-breath reveal">
          <img
            className="chef-breath__img"
            src="/images/marche-legumes-1200.webp"
            srcSet="/images/marche-legumes-400.webp 400w, /images/marche-legumes-900.webp 900w, /images/marche-legumes-1200.webp 1200w"
            sizes="100vw"
            alt="Étal de marché abondant : melons, tomates, courges, fleurs, sous des platanes."
            loading="lazy"
            width="1200"
            height="675"
          />
          <figcaption className="chef-breath__cap">Le marché, chaque matin.</figcaption>
        </figure>
      </div>
    </section>
  )
}
