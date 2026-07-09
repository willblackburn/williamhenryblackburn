import {
  Archive,
  Bridge,
  Buildings,
  Camera,
  CaretLeft,
  ClockCounterClockwise,
  Columns,
  CompassTool,
  EnvelopeSimple,
  FileText,
  Images,
  MapTrifold,
  NewspaperClipping,
  PaintBrush,
  Palette,
  PenNib,
  PencilLine,
  PresentationChart,
  ShoppingBag,
  SpeakerHigh,
  SpeakerSlash,
  User,
  type Icon,
  type IconProps,
  type IconWeight,
} from '@phosphor-icons/react';

import type {
  WhbIconName,
  WhbIconSize,
  WhbIconTone,
} from '@/components/icons/types';

export type { WhbIconName, WhbIconSize, WhbIconTone };

const iconMap: Record<WhbIconName, Icon> = {
  about: User,
  archive: Archive,
  artwork: Palette,
  painting: PaintBrush,
  drawing: PencilLine,
  photography: Camera,
  architecture: Buildings,
  correspondence: EnvelopeSimple,
  document: FileText,
  'dj-keymer': NewspaperClipping,
  advertising: NewspaperClipping,
  exhibition: PresentationChart,
  timeline: ClockCounterClockwise,
  india: MapTrifold,
  ellora: Columns,
  calligraphy: PenNib,
  'royal-engineers': CompassTool,
  bridge: Bridge,
  shop: ShoppingBag,
  contact: EnvelopeSimple,
  audio: SpeakerHigh,
  'audio-muted': SpeakerSlash,
  works: Images,
  'nav-collapse': CaretLeft,
};

const sizeMap: Record<WhbIconSize, number> = {
  sm: 16,
  md: 20,
  lg: 28,
};

type WhbIconProps = {
  name: WhbIconName;
  className?: string;
  size?: WhbIconSize | number;
  tone?: WhbIconTone;
  weight?: IconWeight;
  decorative?: boolean;
  label?: string;
} & Omit<IconProps, 'ref' | 'size' | 'weight' | 'color'>;

export function WhbIcon({
  name,
  className = '',
  size = 'md',
  tone = 'inherit',
  weight = 'light',
  decorative = true,
  label,
  ...rest
}: WhbIconProps) {
  const IconComponent = iconMap[name];
  const pixelSize = typeof size === 'number' ? size : sizeMap[size];
  const classes = ['whb-icon', `whb-icon--${tone}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <IconComponent
      className={classes}
      size={pixelSize}
      weight={weight}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : 'img'}
      {...rest}
    />
  );
}
