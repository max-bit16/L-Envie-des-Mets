import { PhoneIcon, MapPinIcon } from './icons'

export default function StickyBar() {
  return (
    <div className="sticky-bar" role="region" aria-label="Actions rapides">
      <div className="sticky-bar__row">
        <a
          className="sticky-bar__call"
          href="tel:+33476473256"
          aria-label="Appeler le 04 76 47 32 56"
        >
          <PhoneIcon />
          Appeler 04 76 47 32 56
        </a>
        <a
          className="sticky-bar__route"
          href="https://www.google.com/maps/search/?api=1&query=7+Rue+Genissieu+38000+Grenoble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPinIcon />
          Itinéraire
        </a>
      </div>
    </div>
  )
}
