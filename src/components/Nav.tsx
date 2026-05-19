import { useState, useEffect, useRef } from 'react'
import { PhoneIcon } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const firstLink = document.querySelector<HTMLAnchorElement>('#nav-mobile a')
    firstLink?.focus()

    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true, once: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const close = () => {
    setOpen(false)
    burgerRef.current?.focus()
  }

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
            <li><a href="#evenements">Événements</a></li>
          </ul>
        </nav>
        <div className="nav__right">
          <a href="tel:+33476473256" className="nav__phone" aria-label="Appeler L'Envie des Mets au 04 76 47 32 56">
            <PhoneIcon />
            04 76 47 32 56
          </a>
          <button
            ref={burgerRef}
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
      <nav
        id="nav-mobile"
        className="nav__mobile"
        aria-label="Navigation mobile"
        hidden={!open}
      >
        <ul>
          <li><a href="#chef" onClick={close}>Présentation</a></li>
          <li><a href="#valeurs" onClick={close}>Valeurs</a></li>
          <li><a href="#carte" onClick={close}>Carte</a></li>
          <li><a href="#reserver" onClick={close}>Réserver</a></li>
          <li><a href="#evenements" onClick={close}>Événements</a></li>
        </ul>
        <a href="tel:+33476473256" className="nav__mobile-phone" onClick={close} aria-label="Appeler L'Envie des Mets au 04 76 47 32 56">
          04 76 47 32 56
        </a>
      </nav>
    </header>
  )
}
