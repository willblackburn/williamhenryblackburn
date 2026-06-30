import { AboutPageContent } from '@/components/about/AboutPageContent';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'About William Henry Blackburn | Biography, India & D.J. Keymer',
  description:
    'Biography of William Henry Blackburn—Royal Engineers serviceman, exhibition designer in India, Art Director at D.J. Keymer in Bombay and Calcutta, calligrapher, painter, and mid-century commercial artist.',
  path: '/about',
  ogTitle: 'About William Henry Blackburn | Biography, India & D.J. Keymer',
});

export default function AboutPage() {
  return <AboutPageContent />;
}
