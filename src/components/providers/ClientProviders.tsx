'use client';

import { AudioProvider } from '@/components/providers/AudioProvider';
import { MobileNavProvider } from '@/components/providers/MobileNavProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { GalleryPopup } from '@/components/gallery/GalleryPopup';
import type { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AudioProvider>
      <MobileNavProvider>
        <SmoothScrollProvider>
          {children}
          <GalleryPopup />
        </SmoothScrollProvider>
      </MobileNavProvider>
    </AudioProvider>
  );
}
