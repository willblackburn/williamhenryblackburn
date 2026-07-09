'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SECTION_SELECTOR =
  '.project-about.img0, .project-about.img1, .project-about.img2, .project-about.img3, .project-about.img4, .project-about.img5, .project-about.img6, .project-about.img7, .project-about.img8';

export function LazySectionBackgrounds() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    );
    if (!sections.length) return;

    // First section is usually LCP — load immediately.
    sections[0]?.classList.add('is-bg-visible');

    if (sections.length === 1) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-bg-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '280px 0px', threshold: 0.01 },
    );

    for (const section of sections.slice(1)) {
      if (!section.classList.contains('is-bg-visible')) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
