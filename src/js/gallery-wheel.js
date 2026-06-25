import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const DESKTOP_MQ = window.matchMedia('(min-width: 1000px)');
const REDUCED_MQ = window.matchMedia('(prefers-reduced-motion: reduce)');

const galleryWheel = document.querySelector('.gallery-wheel');
const scrollEl = document.querySelector('.gallery-wheel-scroll');
const trackEl = scrollEl?.querySelector('.gallery');

if (galleryWheel && scrollEl && trackEl) {
  let lenis = null;

  function initLenis() {
    if (!DESKTOP_MQ.matches || REDUCED_MQ.matches) return;

    lenis?.destroy();

    lenis = new Lenis({
      wrapper: scrollEl,
      content: trackEl,
      eventsTarget: galleryWheel,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    scrollEl.scrollLeft = 0;
    lenis.resize();
  }

  function destroyLenis() {
    lenis?.destroy();
    lenis = null;
    scrollEl.scrollLeft = 0;
  }

  function onBreakpointChange() {
    if (DESKTOP_MQ.matches) {
      initLenis();
    } else {
      destroyLenis();
    }
  }

  DESKTOP_MQ.addEventListener('change', onBreakpointChange);
  REDUCED_MQ.addEventListener('change', onBreakpointChange);
  window.addEventListener('resize', () => lenis?.resize());

  onBreakpointChange();
}
