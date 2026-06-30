import { WorksGallery } from '@/components/gallery/WorksGallery';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'William Henry Blackburn Paintings | British Artist Archive',
  description:
    'Paintings by William Henry Blackburn—British artist active in England and India. Figurative works, landscapes, and studies from the family archive.',
  path: '/works/paintings',
  ogTitle: 'William Henry Blackburn Paintings | British Artist Archive',
});

export default function PaintingsPage() {
  return <WorksGallery category="paintings" />;
}
