'use client';

import { useEffect, useRef } from 'react';

import { FadeIn } from '@/components/motion/FadeIn';
import { HoverHeading } from '@/components/motion/HoverHeading';
import { timelineEvents } from '@/data/timelineEvents';
import { initTimelineExperience } from '@/lib/initTimelineExperience';

export function TimelineExperience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanup = initTimelineExperience(container);
    return cleanup;
  }, []);

  return (
    <div className="portfolio-item-container portfolio-item-container--timeline">
      <section
        className="timeline-experience"
        aria-labelledby="timeline-heading"
        ref={containerRef}
      >
          <div className="timeline-scroll" tabIndex={0}>
            <div className="timeline-track">
              <FadeIn as="header" className="timeline-intro">
                <HoverHeading as="h1" id="timeline-heading">
                  Timeline
                </HoverHeading>
                <p className="timeline-intro__lede">
                  Key dates in the life and career of William Henry Blackburn
                  (1918–1995), drawn from the family archive and surviving
                  records.
                </p>
                <p className="timeline-intro__hint" aria-hidden="true">
                  Scroll to explore →
                </p>
              </FadeIn>

              <div className="timeline-stage">
                <div className="timeline-ecg-layer" aria-hidden="true">
                  <svg
                    id="timeline-ecg-svg"
                    className="timeline-ecg-svg"
                    preserveAspectRatio="none"
                  >
                    <path id="timeline-ecg-base" className="timeline-ecg-base" />
                    <path id="timeline-ecg-glow" className="timeline-ecg-glow" />
                  </svg>
                  <span className="timeline-pulse-dot" />
                </div>

                <div className="timeline-events" id="timeline-events">
                  {timelineEvents.map((event, index) => (
                    <article
                      className="timeline-event"
                      data-index={index}
                      key={`${event.title}-${index}`}
                    >
                      <span className="timeline-event__node" aria-hidden="true" />
                      <div className="timeline-event__panel">
                        <figure className="timeline-event__figure">
                          <div className="timeline-event__figure-placeholder" />
                        </figure>
                        <div className="timeline-event__copy">
                          <time
                            className="timeline-event__year"
                            dateTime={event.datetime}
                          >
                            {event.year}
                          </time>
                          {event.location ? (
                            <p className="timeline-event__location">
                              {event.location}
                            </p>
                          ) : null}
                          <h2 className="timeline-event__title">{event.title}</h2>
                          <p className="timeline-event__text">{event.text}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
