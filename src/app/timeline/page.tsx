import { TimelineExperience } from '@/components/timeline/TimelineExperience';
import { pageMetadata } from '@/data/siteMetadata';

export const metadata = pageMetadata({
  title: 'Timeline',
  description:
    'Chronology of William Henry Blackburn (1918–1995)—Royal College of Art, wartime Royal Engineers service in India, D.J. Keymer, exhibitions, and the family archive.',
  path: '/timeline',
  ogTitle: 'Timeline | William Henry Blackburn',
});

export default function TimelinePage() {
  return <TimelineExperience />;
}
