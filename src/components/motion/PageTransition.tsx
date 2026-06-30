'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { useIsMobileLayout } from '@/hooks/useIsMobileLayout';

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobileLayout();
  const reducedMotion = useReducedMotion();
  const animate = !isMobile && !reducedMotion;

  return (
    <motion.div
      key={pathname}
      initial={animate ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ minHeight: 0 }}
    >
      {children}
    </motion.div>
  );
}
