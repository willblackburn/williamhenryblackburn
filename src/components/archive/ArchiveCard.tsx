import type { ArchiveTopic } from '@/data/archiveTopics';

type ArchiveCardProps = {
  topic: ArchiveTopic;
};

export function ArchiveCard({ topic }: ArchiveCardProps) {
  return (
    <article
      className="archive-topic-card"
      style={{
        padding: 'var(--bio-box-padding)',
        background: 'var(--bio-box-surface)',
        border: '1px solid color-mix(in srgb, var(--text) 12%, transparent)',
        borderRadius: '0.25rem',
      }}
    >
      <h2
        className="about-period-heading"
        style={{ marginTop: 0, marginBottom: '0.75rem' }}
      >
        {topic.title}
      </h2>
      <p className="about-info" style={{ marginBottom: 0 }}>
        {topic.description}
      </p>
    </article>
  );
}
