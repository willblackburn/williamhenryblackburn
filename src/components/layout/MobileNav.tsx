import Link from 'next/link';

import { homeHref } from '@/data/navigation';

export function MobileNav() {
  return (
    <header className="mobile-top-bar">
      <Link
        href={homeHref}
        className="logo-image mobile-top-bar__logo"
        aria-label="William Henry Blackburn home"
      >
        <span className="logo-monogram" aria-hidden="true">
          WHB
        </span>
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="site-sidebar-nav"
      >
        <div />
        <div />
        <div />
      </button>
    </header>
  );
}
