import { WorksGallery } from '@/components/gallery/WorksGallery';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'William Henry Blackburn Architectural Design | Exhibition Archive',
  description:
    'Architectural and exhibition design work by William Henry Blackburn—pavilion studies, interior layouts, and display design from India and Britain.',
  path: '/works/architecture',
  ogTitle: 'William Henry Blackburn Architectural Design | Exhibition Archive',
});

export default function ArchitecturePage() {
  return <WorksGallery category="architecture" />;
}
