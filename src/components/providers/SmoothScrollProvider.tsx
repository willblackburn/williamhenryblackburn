'use client';

import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';

import 'lenis/dist/lenis.css';

const SmoothScrollContext = createContext<Lenis | null>(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const isMobile = window.matchMedia('(max-width: 840px)').matches;

    if (pathname === '/timeline' || reducedMotion || isMobile) {
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
    });

    lenisRef.current = lenis;
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    const onScroll = () => window.dispatchEvent(new Event('scroll'));
    lenis.on('scroll', onScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    window.dispatchEvent(new Event('lenis-ready'));

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, [pathname]);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const frame = requestAnimationFrame(() => {
      lenis.resize();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <SmoothScrollContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
