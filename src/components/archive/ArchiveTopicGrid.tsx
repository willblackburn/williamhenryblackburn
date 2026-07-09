'use client';

import Link from 'next/link';

import { WhbIcon } from '@/components/icons/WhbIcon';
import { archiveTopics } from '@/data/archiveTopics';

export function ArchiveTopicGrid() {
  return (
    <ul className="archive-topic-grid">
      {archiveTopics.map((topic) => {
        const content = (
          <>
            <WhbIcon
              name={topic.icon}
              className="archive-topic-icon"
              size="lg"
              tone="muted"
            />
            <span className="archive-topic-copy">
              <span className="archive-topic-title">{topic.title}</span>
              <span className="archive-topic-description">
                {topic.description}
              </span>
            </span>
          </>
        );

        return (
          <li key={topic.slug} className="archive-topic-item">
            {topic.href ? (
              <Link href={topic.href} className="archive-topic-link">
                {content}
              </Link>
            ) : (
              <div className="archive-topic-link archive-topic-link--static">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
