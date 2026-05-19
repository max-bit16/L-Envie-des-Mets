export default function Chef() {
  return (
    <section className="section" id="chef">
      <div className="frame">
        <div className="chef-grid">
          <div className="chef-photo reveal">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=85&auto=format&fit=crop"
              alt="Toits anciens de Grenoble en contrebas de la chaîne de Belledonne enneigée."
              loading="lazy"
              width="800"
              height="1000"
            />
          </div>
          <div className="chef-text reveal">
            <span className="eyebrow">Le chef</span>
            <h2>Une table à Grenoble,<br /><em style={{ fontStyle: 'italic' }}>par un enfant de la maison.</em></h2>
            <p style={{ marginTop: 32 }}>
              Fils de restaurateur, diplômé de l'école hôtelière de Grenoble, le chef a longtemps travaillé en cuisine pour les autres avant d'ouvrir sa propre table. L'Envie des Mets est l'aboutissement d'un métier appris jeune et d'une exigence patiente.
            </p>
            <p>
              Il dessine la carte chaque semaine en fonction du marché, et passe en salle à chaque service. On vient ici parce qu'on mange bien — pas parce qu'on doit s'y comporter d'une certaine manière.
            </p>
            <div className="chef-signature">Le chef-propriétaire, présent en salle.</div>
          </div>
        </div>

        <figure className="chef-breath reveal" style={{ marginBlockEnd: 0 }}>
          <img
            className="chef-breath__img"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop"
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
