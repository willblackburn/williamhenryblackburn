import { FadeIn } from '@/components/motion/FadeIn';
import { HoverHeading } from '@/components/motion/HoverHeading';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'D.J. Keymer & Co. Ltd. Archive | William Henry Blackburn',
  description:
    'Art direction, advertising campaigns, and commercial design work from D.J. Keymer & Co. Ltd. in Bombay and Calcutta.',
  path: '/archive/dj-keymer',
  ogTitle: 'D.J. Keymer & Co. Ltd. Archive | William Henry Blackburn',
});

export default function DjKeymerArchivePage() {
  return (
    <div className="portfolio-item-container" id="archive-dj-keymer">
      <div className="section project-about img6" id="dj-keymer">
        <FadeIn className="biography-a">
          <HoverHeading as="h1">D.J. Keymer &amp; Co. Ltd.</HoverHeading>
          <p className="about-info">
            Art direction, advertising campaigns, and commercial design work
            from William Henry Blackburn&apos;s years as Art Director at D.J.
            Keymer &amp; Co. Ltd. in Bombay and Calcutta.
          </p>
          <p className="about-info">
            Much of this material from D.J. Keymer &amp; Co. Ltd. has remained
            in the family archive for more than thirty years. This page brings
            together agency work, staff photographs, and related documents from
            that period.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
