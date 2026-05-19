export default function Carte() {
  return (
    <section className="section" id="carte">
      <div className="frame">
        <div className="values__heading reveal" style={{ marginBottom: 64 }}>
          <span className="eyebrow">Carte de saison · Mai 2026</span>
          <h2>Trois plats, <em>en mémoire d'un service.</em></h2>
        </div>

        <div className="gallery">
          <figure className="reveal">
            <div className="gallery__img gallery__img--tall">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop"
                srcSet="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop 800w"
                sizes="(max-width: 900px) 100vw, 55vw"
                alt="Assiette dressée : queue de homard, caviar, fleurs comestibles."
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <figcaption className="gallery__caption">
              Noix de Saint-Jacques, beurre noisette.
              <span>Plat signature des soirées d'automne.</span>
            </figcaption>
          </figure>

          <div className="gallery__col">
            <figure className="reveal">
              <div className="gallery__img gallery__img--wide">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&auto=format&fit=crop"
                  srcSet="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=85&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&auto=format&fit=crop 800w"
                  sizes="(max-width: 900px) 100vw, 35vw"
                  alt="Pavé de poisson grillé, betterave dorée, suprêmes d'orange, sauce orange."
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              <figcaption className="gallery__caption gallery__caption--sm">
                Dos de cabillaud, agrumes confits.
                <span>Vu en hiver, retravaillé chaque saison.</span>
              </figcaption>
            </figure>

            <figure className="reveal">
              <div className="gallery__img gallery__img--wide">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=85&auto=format&fit=crop"
                  srcSet="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=85&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=85&auto=format&fit=crop 800w"
                  sizes="(max-width: 900px) 100vw, 35vw"
                  alt="Assiette végétale colorée : carottes glacées, figue, grenade, herbes."
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              <figcaption className="gallery__caption gallery__caption--sm">
                Gratin de framboises, cœur glacé.
                <span>Le dessert chaud-froid, signature de la maison.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="menus" style={{ marginTop: 96 }}>
        <div className="frame">
          <div className="menus__head reveal">
            <span className="eyebrow eyebrow--wood">Les menus</span>
            <h2>Trois formules, <em>une saison.</em></h2>
          </div>

          <div className="menus-grid">
            <article className="menu-card reveal">
              <span className="menu-card__kicker">Midi en semaine</span>
              <h3>Déjeuner</h3>
              <p className="menu-card__price">à partir de <strong>20 €</strong></p>
              <p className="menu-card__note">Servi du mardi au samedi midi.</p>
              <div className="menu-card__rule" />
              <ul className="menu-card__steps">
                <li>Entrée</li>
                <li>Plat</li>
                <li>Dessert</li>
              </ul>
            </article>

            <article className="menu-card reveal">
              <span className="menu-card__kicker">Cinq étapes</span>
              <h3>Menu intermédiaire</h3>
              <p className="menu-card__price"><strong>29 €</strong></p>
              <p className="menu-card__note">Le menu qu'on prend le plus souvent.</p>
              <div className="menu-card__rule" />
              <ul className="menu-card__steps">
                <li>Amuse-bouche</li>
                <li>Entrée</li>
                <li>Plat</li>
                <li>Fromage</li>
                <li>Dessert</li>
              </ul>
            </article>

            <article className="menu-card reveal">
              <span className="menu-card__kicker">Pour s'installer</span>
              <h3>Menu supérieur</h3>
              <p className="menu-card__price"><strong>39 €</strong> / <strong>45 €</strong></p>
              <p className="menu-card__note">39 € le midi · 45 € le soir</p>
              <div className="menu-card__rule" />
              <ul className="menu-card__steps">
                <li>Amuse-bouche</li>
                <li>Entrée</li>
                <li>Plat signature</li>
                <li>Fromage</li>
                <li>Dessert chef</li>
              </ul>
            </article>
          </div>

          <p className="menus__cta reveal">
            Réserver une table — <a href="tel:+33476473256" aria-label="Appeler L'Envie des Mets au 04 76 47 32 56">04 76 47 32 56</a>
          </p>
        </div>
      </div>
    </section>
  )
}
