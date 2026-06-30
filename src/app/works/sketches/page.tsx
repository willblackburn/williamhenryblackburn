import { WorksGallery } from '@/components/gallery/WorksGallery';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'William Henry Blackburn Sketches | Draughtsmanship Archive',
  description:
    'Drawings and sketches by William Henry Blackburn—wartime studies, Indian subjects, and works on paper from the family archive.',
  path: '/works/sketches',
  ogTitle: 'William Henry Blackburn Sketches | Draughtsmanship Archive',
});

export default function SketchesPage() {
  return <WorksGallery category="sketches" />;
}
