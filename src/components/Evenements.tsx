export default function Evenements() {
  return (
    <section className="section evenements" id="evenements">
      <div className="evenements__bg" aria-hidden="true" />
      <div className="evenements__overlay" aria-hidden="true" />
      <div className="frame evenements__inner">
        <div className="evenements__content reveal">
          <span className="eyebrow">Événements · Privatisation</span>
          <h2>La salle, rien que pour vous —<br /><em>le soir qui compte.</em></h2>
          <div className="evenements__rule" aria-hidden="true" />
          <p>Groupes de 6 à 20 couverts&nbsp;: anniversaires, repas de famille, dîners entre collègues. Le service reste celui de la maison — attentif, personnel, à la minute.</p>
          <p>Pour une occasion particulière, le restaurant se privatise en soirée. Le chef compose un menu dédié à votre table, en accord avec la saison et vos envies.</p>
          <div className="evenements__rule" aria-hidden="true" />
          <dl className="evenements__specs">
            <div><dt>Groupes</dt><dd>6 à 20 personnes</dd></div>
            <div><dt>Privatisation</dt><dd>Soirée sur demande</dd></div>
            <div><dt>Menu chef</dt><dd>Sur-mesure possible</dd></div>
          </dl>
          <a
            href="tel:+33476473256"
            className="evenements__cta"
            aria-label="Appeler L'Envie des Mets pour organiser un événement au 04 76 47 32 56"
          >
            <span className="evenements__cta-label">Pour organiser votre événement</span>
            <span className="evenements__cta-phone">04 76 47 32 56</span>
          </a>
        </div>
      </div>
    </section>
  )
}
