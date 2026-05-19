const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
  </svg>
)

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
