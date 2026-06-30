import type { ReactNode } from 'react';

import { CodaContainer } from '@/components/layout/CodaContainer';
import { MobileNav } from '@/components/layout/MobileNav';
import { PageTransition } from '@/components/motion/PageTransition';
import SidebarCollapseInit from '@/components/layout/SidebarCollapseInit';
import { SidebarNav } from '@/components/layout/SidebarNav';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="coda-body">
      <SidebarCollapseInit />
      <SidebarNav />
      <div className="right">
        <MobileNav />
        <CodaContainer>
          <PageTransition>{children}</PageTransition>
        </CodaContainer>
      </div>
    </div>
  );
}
