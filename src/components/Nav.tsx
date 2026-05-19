import { useState, useEffect } from 'react'

const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true, once: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="nav is-light" id="nav">
      <div className="nav__inner">
        <a href="#" className="wordmark" aria-label="L'Envie des Mets, retour en haut">
          <span>L'</span><span className="wordmark__accent">Envie</span><span> des Mets</span>
        </a>
        <nav aria-label="Navigation principale">
          <ul className="nav__links">
            <li><a href="#chef">Présentation</a></li>
            <li><a href="#valeurs">Valeurs</a></li>
            <li><a href="#carte">Carte</a></li>
            <li><a href="#reserver">Réserver</a></li>
          </ul>
        </nav>
        <div className="nav__right">
          <a href="tel:+33476473256" className="nav__phone" aria-label="Appeler L'Envie des Mets au 04 76 47 32 56">
            <PhoneIcon />
            04 76 47 32 56
          </a>
          <button
            className={`nav__burger${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen(o => !o)}
          >
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <nav id="nav-mobile" className="nav__mobile" aria-label="Navigation mobile">
          <ul>
            <li><a href="#chef" onClick={close}>Présentation</a></li>
            <li><a href="#valeurs" onClick={close}>Valeurs</a></li>
            <li><a href="#carte" onClick={close}>Carte</a></li>
            <li><a href="#reserver" onClick={close}>Réserver</a></li>
          </ul>
          <a href="tel:+33476473256" className="nav__mobile-phone" onClick={close} aria-label="Appeler L'Envie des Mets au 04 76 47 32 56">
            04 76 47 32 56
          </a>
        </nav>
      )}
    </header>
  )
}
