import { ArchiveCard } from '@/components/archive/ArchiveCard';
import { FadeIn } from '@/components/motion/FadeIn';
import { HoverHeading } from '@/components/motion/HoverHeading';
import { archiveTopics } from '@/data/archiveTopics';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'Archive',
  description:
    'Explore themed collections from the William Henry Blackburn family archive—D.J. Keymer advertising, wartime India, exhibitions, correspondence, Ellora drawings, calligraphy, and commercial client accounts.',
  path: '/archive',
  ogTitle: 'Archive | William Henry Blackburn',
});

export default function ArchivePage() {
  return (
    <div className="portfolio-item-container" id="archive">
      <div className="section project-about img7" id="archive-topics">
        <FadeIn className="biography-b">
          <HoverHeading as="h1">Archive</HoverHeading>
          <p className="about-info">
            Themed collections from the family archive—wartime India, commercial
            design, exhibitions, correspondence, and works on paper—organized for
            research and future publication.
          </p>
          <div
            className="archive-topics-grid"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(min(100%, 18rem), 1fr))',
              gap: 'clamp(1rem, 2vw, 1.75rem)',
              marginTop: '2rem',
            }}
          >
            {archiveTopics.map((topic) => (
              <ArchiveCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
