import { WorksGallery } from '@/components/gallery/WorksGallery';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'William Henry Blackburn Photography | India & Mid-Century Archive',
  description:
    'Photographs by William Henry Blackburn—British artist and Art Director active in England and India from the 1940s to the 1980s. Documentary, portraiture, and commercial photography from the family archive.',
  path: '/works/photography',
  ogTitle: 'William Henry Blackburn Photography | India & Mid-Century Archive',
});

export default function PhotographyPage() {
  return <WorksGallery category="photography" />;
}
