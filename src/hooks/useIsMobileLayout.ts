'use client';

import { useSyncExternalStore } from 'react';

const MOBILE_LAYOUT_MQ = '(max-width: 840px)';

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_LAYOUT_MQ);
  mediaQuery.addEventListener('change', onStoreChange);
  return () => mediaQuery.removeEventListener('change', onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(MOBILE_LAYOUT_MQ).matches;
}

function getServerSnapshot() {
  return true;
}

export function useIsMobileLayout() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
