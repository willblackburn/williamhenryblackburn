'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from 'react';

import { useIsMobileLayout } from '@/hooks/useIsMobileLayout';

const FADE_DURATION = 2;
const VIEWPORT_OFFSET = 45;

const motionTags = {
  div: motion.div,
  header: motion.header,
  section: motion.section,
} as const;

type FadeInTag = keyof typeof motionTags;

type FadeInProps = {
  as?: FadeInTag;
  children: ReactNode;
  className?: string;
  id?: string;
};

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - VIEWPORT_OFFSET && rect.bottom > 0
  );
}

export function FadeIn({
  as = 'div',
  children,
  className,
  id,
}: FadeInProps) {
  const isMobile = useIsMobileLayout();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const startVisibleRef = useRef(true);
  const motionEnabled = !isMobile && !reducedMotion;

  useLayoutEffect(() => {
    if (!motionEnabled) return;

    startVisibleRef.current = ref.current
      ? isInViewport(ref.current)
      : false;
  }, [motionEnabled]);

  if (!motionEnabled) {
    const Tag = as as ElementType;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motionTags[as] ?? motion.div;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      id={id}
      initial={startVisibleRef.current ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        margin: `0px 0px -${VIEWPORT_OFFSET}px 0px`,
      }}
      transition={{ duration: FADE_DURATION, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  );
}
