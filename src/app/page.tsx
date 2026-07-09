import { FadeIn } from '@/components/motion/FadeIn';
import { HoverHeading } from '@/components/motion/HoverHeading';

export default function HomePage() {
  return (
    <>
      {/* Default theme is dark — preload the matching hero sketch for LCP. */}
      <link rel="preload" as="image" href="/img/woman-leaning-dark.png" />
      <div className="portfolio-item-container" id="home">
        <FadeIn className="section project-full-width">
          <div className="home-header">
            <HoverHeading as="h1">William Henry Blackburn</HoverHeading>
            <div className="dob">
              <p>{'{1918-1995}'}</p>
            </div>
            <p>
              British artist, draughtsman, and art director whose work moved from
              wartime India through exhibition design and commercial art
              direction to a lifelong archive of paintings, drawings, and
              photography.
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
