import type { Metadata } from 'next';

const siteUrl = 'https://williamhenryblackburn.com';

export const siteConfig = {
  name: 'William Henry Blackburn',
  url: siteUrl,
  description:
    'William Henry Blackburn (1918–1995)—British artist, draughtsman, calligrapher, exhibition designer, and Art Director. Paintings, photography, India years, Royal Engineers work, and mid-century commercial design.',
  ogImage:
    'https://dww3q6eyff3p0.cloudfront.net/williamhenryblackburn/img/bg1.webp',
  keywords: [
    'William Henry Blackburn',
    'British artist in India',
    'D.J. Keymer art director',
    'mid-century advertising design',
    'Royal Engineers artist',
    'wartime exhibition design',
    'Indian drawings',
    'Ellora cave studies',
    'calligraphy and lettering',
    'British commercial art history',
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'William Henry Blackburn | British Artist, Draughtsman & Art Director',
    template: '%s | William Henry Blackburn',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'William Henry Blackburn Archive' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: siteConfig.name,
    title: 'William Henry Blackburn | British Artist, Draughtsman & Art Director',
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Henry Blackburn | British Artist, Draughtsman & Art Director',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export function pageMetadata(options: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${options.path}`;

  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: url },
    robots: options.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: options.ogTitle ?? options.title,
      description: options.description,
      url,
      images: [{ url: siteConfig.ogImage }],
    },
  };
}
