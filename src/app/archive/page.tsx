import { ArchiveTopicGrid } from '@/components/archive/ArchiveTopicGrid';
import { FadeIn } from '@/components/motion/FadeIn';
import { HoverHeading } from '@/components/motion/HoverHeading';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'Archive',
  description:
    'Themed collections from the William Henry Blackburn family archive.',
  path: '/archive',
  ogTitle: 'Archive | William Henry Blackburn',
});

export default function ArchivePage() {
  return (
    <div className="portfolio-item-container" id="archive">
      <div className="section project-about img7" id="archive-topics">
        <FadeIn className="biography-b archive-landing">
          <HoverHeading as="h1">Archive</HoverHeading>
          <p className="about-info">
            Themed collections from the family archive—agency work, wartime
            service, exhibitions, correspondence, and studies from India.
          </p>
          <ArchiveTopicGrid />
        </FadeIn>
      </div>
    </div>
  );
}
