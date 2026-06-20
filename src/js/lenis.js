import '../main.css'
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
    prevent: (node) => Boolean(node.closest?.('.filter-grid-gallery')),
  })

  lenisInstances.push(mainLenis)

  document.querySelectorAll('.filter-grid-gallery').forEach((wrapper) => {
    const content = wrapper.querySelector('.gallery')
    if (!content) return

    lenisInstances.push(
      new Lenis({
        wrapper,
        content,
        eventsTarget: wrapper,
        autoRaf: false,
        overscroll: false,
      })
    )
  })

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
