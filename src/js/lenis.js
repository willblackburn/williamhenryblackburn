import '../main.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (!prefersReducedMotion) {
  const lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    allowNestedScroll: true,
  })

  document.querySelectorAll('.filter-grid-gallery').forEach((element) => {
    element.setAttribute('data-lenis-prevent', '')
  })

  lenis.on('scroll', () => {
    window.dispatchEvent(new Event('scroll'))
  })

  window.lenis = lenis
}
