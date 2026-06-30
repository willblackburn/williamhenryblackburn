import type { ElementType, ReactNode } from 'react';

type HoverHeadingProps = {
  as?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  className?: string;
  id?: string;
};

export function HoverHeading({
  as: Tag = 'h2',
  children,
  className,
  id,
}: HoverHeadingProps) {
  const Heading = Tag as ElementType;

  return (
    <Heading id={id} className={className ? `hover-a ${className}` : 'hover-a'}>
      {children}
    </Heading>
  );
}
