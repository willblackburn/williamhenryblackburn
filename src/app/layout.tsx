import '@/styles/main.css';

import CriticalMobileCss from '@/components/layout/CriticalMobileCss';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SiteScripts } from '@/components/layout/SiteScripts';
import ThemeInit from '@/components/layout/ThemeInit';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { defaultMetadata } from '@/data/siteMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeInit />
        <CriticalMobileCss />
        <SiteScripts />
        <ClientProviders>
          <SiteLayout>{children}</SiteLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
