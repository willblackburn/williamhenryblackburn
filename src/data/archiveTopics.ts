import type { WhbIconName } from '@/components/icons/types';

export type ArchiveTopic = {
  slug: string;
  title: string;
  description: string;
  icon: WhbIconName;
  href?: string;
};

export const archiveTopics: ArchiveTopic[] = [
  {
    slug: 'dj-keymer',
    title: 'D.J. Keymer & Co. Ltd.',
    description:
      'Art direction, advertising campaigns, and commercial design work from Bombay and Calcutta.',
    icon: 'advertising',
    href: '/archive/dj-keymer',
  },
  {
    slug: 'wartime-india-royal-engineers',
    title: 'Wartime India & Royal Engineers',
    description:
      'Royal Engineers service, India detachment, and wartime visual communication.',
    icon: 'royal-engineers',
  },
  {
    slug: 'exhibitions-public-design',
    title: 'Exhibitions & Public Design',
    description:
      'Government exhibitions, pavilion work, and public-information design across India and Britain.',
    icon: 'exhibition',
  },
  {
    slug: 'correspondence-documents',
    title: 'Correspondence & Documents',
    description:
      'Letters, contracts, design briefs, and institutional records from the family archive.',
    icon: 'correspondence',
  },
  {
    slug: 'ellora-ajanta-indian-drawings',
    title: 'Ellora, Ajanta & Indian Drawings',
    description:
      'Cave studies, architectural drawings, and Indian subject matter from wartime and postwar years.',
    icon: 'ellora',
  },
  {
    slug: 'calligraphy-lettering',
    title: 'Calligraphy & Lettering',
    description:
      'Inscription designs, decorative lettering, and formal calligraphic layouts.',
    icon: 'calligraphy',
  },
  {
    slug: 'family-personal-archive',
    title: 'Family & Personal Archive',
    description:
      'Family photographs, personal records, and material connected to Dhanlaxmi and Nigel Blackburn.',
    icon: 'archive',
  },
  {
    slug: 'commercial-agencies-client-accounts',
    title: 'Commercial Agencies & Client Accounts',
    description:
      'Client lists, agency work, and commercial design across India and Britain.',
    icon: 'document',
  },
];
