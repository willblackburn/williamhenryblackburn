import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (!prefersReducedMotion) {
  const lenisInstances = []

  const mainLenis = new Lenis({
    autoRaf: false,
    anchors: true,
  })

  lenisInstances.push(mainLenis)

  const onScroll = () => window.dispatchEvent(new Event('scroll'))

  lenisInstances.forEach((lenis) => lenis.on('scroll', onScroll))

  function raf(time) {
    lenisInstances.forEach((lenis) => lenis.raf(time))
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  window.lenis = mainLenis
  window.dispatchEvent(new Event('lenis-ready'))
}
