'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    __closeMobileNav?: () => void;
    __initResponsiveNav?: () => boolean;
    __initHoverA?: () => void;
  }
}

export function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    window.__closeMobileNav?.();
    window.__initResponsiveNav?.();
    window.__initHoverA?.();
  }, [pathname]);

  return (
    <>
      <Script src="/js/responsive-nav.js?v=2" strategy="afterInteractive" />
      <Script src="/js/hover-a.js?v=4" strategy="afterInteractive" />
    </>
  );
}
