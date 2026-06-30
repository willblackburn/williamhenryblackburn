import Link from 'next/link';

import { FadeIn } from '@/components/motion/FadeIn';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'Shop | William Henry Blackburn Art Archive',
  description:
    'Prints and reproductions from the William Henry Blackburn archive—coming soon. Enquire about artworks from the official family archive.',
  path: '/shop',
  ogTitle: 'Shop | William Henry Blackburn Art Archive',
  noIndex: true,
});

export default function ShopPage() {
  return (
    <div className="portfolio-item-container" id="home">
      <div className="section project-about img-shop" id="shop">
        <FadeIn className="biography-b">
          <h2>Shop</h2>
          <p className="about-info">
            Prints and reproductions from the William Henry Blackburn archive
            will be available here soon.
          </p>
          <p className="about-info">
            For enquiries about artworks, licensing, or reproductions in the
            meantime, please <Link href="/contact">get in touch</Link>.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
