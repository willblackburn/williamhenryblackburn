'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function CodaContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isTimeline = pathname === '/timeline';

  return (
    <div
      className={
        isTimeline ? 'coda-container coda-container--timeline' : 'coda-container'
      }
    >
      {children}
    </div>
  );
}
