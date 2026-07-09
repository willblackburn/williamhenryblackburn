'use client';

import { LazySectionBackgrounds } from '@/components/about/LazySectionBackgrounds';
import { GalleryPopup } from '@/components/gallery/GalleryPopup';
import { AudioProvider } from '@/components/providers/AudioProvider';
import { MobileNavProvider } from '@/components/providers/MobileNavProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import type { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AudioProvider>
      <MobileNavProvider>
        <SmoothScrollProvider>
          {children}
          <LazySectionBackgrounds />
          <GalleryPopup />
        </SmoothScrollProvider>
      </MobileNavProvider>
    </AudioProvider>
  );
}
