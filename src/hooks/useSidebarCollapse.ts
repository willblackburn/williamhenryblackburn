'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'sidebar-collapsed';
const DESKTOP_MQ = '(min-width: 841px)';

function applyCollapsedState(collapsed: boolean) {
  const codaBody = document.querySelector('.coda-body');
  if (!codaBody) return;

  codaBody.classList.toggle('sidebar-collapsed', collapsed);

  const toggleBtn = document.querySelector('.sidebar-toggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', String(!collapsed));
    toggleBtn.setAttribute(
      'aria-label',
      collapsed ? 'Expand navigation' : 'Collapse navigation',
    );
  }
}

export function useSidebarCollapse() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const applyDesktopState = () => {
      if (window.matchMedia(DESKTOP_MQ).matches) {
        const saved = localStorage.getItem(STORAGE_KEY) === 'true';
        applyCollapsedState(saved);
        setCollapsed(saved);
      } else {
        applyCollapsedState(false);
        setCollapsed(false);
      }
    };

    applyDesktopState();
    const mq = window.matchMedia(DESKTOP_MQ);
    mq.addEventListener('change', applyDesktopState);
    return () => mq.removeEventListener('change', applyDesktopState);
  }, []);

  const toggle = useCallback(() => {
    if (!window.matchMedia(DESKTOP_MQ).matches) return;

    const codaBody = document.querySelector('.coda-body');
    const nextCollapsed = !codaBody?.classList.contains('sidebar-collapsed');
    applyCollapsedState(nextCollapsed);
    setCollapsed(nextCollapsed);
    localStorage.setItem(STORAGE_KEY, String(nextCollapsed));
  }, []);

  return { collapsed, toggle };
}
