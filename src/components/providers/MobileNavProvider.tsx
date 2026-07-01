'use client';

import { usePathname } from 'next/navigation';
import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';

import { navigationItems } from '@/data/navigation';

type MobileNavContextValue = {
  openSubmenus: Record<string, boolean>;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const openSubmenus = useMemo(() => {
    const states: Record<string, boolean> = {};

    for (const item of navigationItems) {
      if (item.type !== 'submenu') continue;
      states[item.menuId] =
        pathname === item.pathPrefix ||
        pathname.startsWith(`${item.pathPrefix}/`);
    }

    return states;
  }, [pathname]);

  const value = useMemo(() => ({ openSubmenus }), [openSubmenus]);

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
