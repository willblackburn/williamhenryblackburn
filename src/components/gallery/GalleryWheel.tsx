'use client';

import Lenis from 'lenis';
import { useEffect, useRef, type ReactNode } from 'react';

import 'lenis/dist/lenis.css';

type GalleryWheelProps = {
  children: ReactNode;
};

export function GalleryWheel({ children }: GalleryWheelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const galleryWheel = scrollEl?.closest('.gallery-wheel');
    const trackEl = scrollEl?.querySelector('.gallery');

    if (!scrollEl || !galleryWheel || !trackEl) return;

    const desktopMq = window.matchMedia('(min-width: 1000px)');
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    function initLenis() {
      if (!desktopMq.matches || reducedMq.matches) return;

      lenisRef.current?.destroy();

      lenisRef.current = new Lenis({
        wrapper: scrollEl!,
        content: trackEl as HTMLElement,
        eventsTarget: galleryWheel as HTMLElement,
        orientation: 'horizontal',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        lerp: 0.08,
        wheelMultiplier: 1.2,
        touchMultiplier: 1.5,
        autoRaf: true,
      });

      scrollEl!.scrollLeft = 0;
      lenisRef.current.resize();
    }

    function destroyLenis() {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      scrollEl!.scrollLeft = 0;
    }

    function onBreakpointChange() {
      if (desktopMq.matches) initLenis();
      else destroyLenis();
    }

    function onResize() {
      lenisRef.current?.resize();
    }

    desktopMq.addEventListener('change', onBreakpointChange);
    reducedMq.addEventListener('change', onBreakpointChange);
    window.addEventListener('resize', onResize);
    onBreakpointChange();

    return () => {
      desktopMq.removeEventListener('change', onBreakpointChange);
      reducedMq.removeEventListener('change', onBreakpointChange);
      window.removeEventListener('resize', onResize);
      destroyLenis();
    };
  }, []);

  return (
    <div className="gallery-wheel-scroll" tabIndex={0} ref={scrollRef}>
      {children}
    </div>
  );
}
