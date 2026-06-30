'use client';

import { usePathname } from 'next/navigation';
import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';

const WORKS_PATHS = [
  '/works/photography',
  '/works/paintings',
  '/works/sketches',
  '/works/architecture',
];

type MobileNavContextValue = {
  worksSubmenuOpen: boolean;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const worksSubmenuOpen = WORKS_PATHS.some((path) => pathname.startsWith(path));

  const value = useMemo(() => ({ worksSubmenuOpen }), [worksSubmenuOpen]);

  return (
    <MobileNavContext.Provider value={value}>{children}</MobileNavContext.Provider>
  );
}

export function useMobileNav() {
  const context = useContext(MobileNavContext);
  if (!context) {
    throw new Error('useMobileNav must be used within MobileNavProvider');
  }
  return context;
}
