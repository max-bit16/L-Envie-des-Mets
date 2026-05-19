import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Chef from './components/Chef'
import Valeurs from './components/Valeurs'
import Carte from './components/Carte'
import Reserver from './components/Reserver'
import Evenements from './components/Evenements'
import Footer from './components/Footer'
import MentionsLegales from './components/MentionsLegales'
import StickyBar from './components/StickyBar'

export default function App() {
  useEffect(() => {
    const nav = document.getElementById('nav') as HTMLElement
    const hero = document.querySelector('.hero') as HTMLElement
    const heroBg = document.getElementById('heroBg') as HTMLElement
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function onScroll() {
      const y = window.scrollY
      if (y > 24) nav.classList.add('is-scrolled')
      else nav.classList.remove('is-scrolled')

      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - 80
        if (y < heroBottom - 40 && !nav.classList.contains('is-scrolled')) {
          nav.classList.add('is-light')
        } else {
          nav.classList.remove('is-light')
        }
      }

      if (!prefersReduced && heroBg && y < window.innerHeight) {
        heroBg.style.transform = `translate3d(0,${Math.min(40, y * 0.15)}px,0)`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const items = document.querySelectorAll('.reveal')
    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach(i => i.classList.add('is-in'))
      return () => window.removeEventListener('scroll', onScroll)
    }

    const sectionIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const link = document.querySelector<HTMLElement>(`.nav__links a[href="#${e.target.id}"]`)
        if (link) link.classList.toggle('is-active', e.isIntersecting)
      })
    }, { rootMargin: '-80px 0px -40% 0px' })
    document.querySelectorAll<HTMLElement>('section[id]').forEach(s => sectionIO.observe(s))

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' })

    items.forEach(i => io.observe(i))

    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); sectionIO.disconnect() }
  }, [])

  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <Nav />
      <main id="main">
        <Hero />
        <Chef />
        <Valeurs />
        <Carte />
        <Reserver />
        <Evenements />
      </main>
      <Footer />
      <MentionsLegales />
      <StickyBar />
    </>
  )
}
