'use client';

import { useEffect } from 'react';

function shouldSkipLightbox(trigger: Element) {
  return (
    trigger.closest('.gallery-wheel') !== null &&
    window.matchMedia('(min-width: 1000px)').matches
  );
}

export function GalleryPopup() {
  useEffect(() => {
    let overlay = document.getElementById('gallery-lightbox');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'gallery-lightbox';
      overlay.className = 'gallery-lightbox';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Image preview');

      const img = document.createElement('img');
      overlay.appendChild(img);
      document.body.appendChild(overlay);
    }

    const img = overlay.querySelector('img');

    function openLightbox(src: string, alt: string) {
      if (!img) return;
      img.src = src;
      img.alt = alt;
      overlay!.classList.add('is-open');
      document.body.classList.add('gallery-lightbox-open');
    }

    function closeLightbox() {
      overlay!.classList.remove('is-open');
      document.body.classList.remove('gallery-lightbox-open');
    }

    function onOverlayClick() {
      closeLightbox();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeLightbox();
    }

    function onDocumentClick(event: MouseEvent) {
      const target = event.target as Element;
      const trigger = target.closest('.gallery div, .about-archive .image-wrapper');
      if (!trigger) return;
      if (shouldSkipLightbox(trigger)) return;

      const image = trigger.querySelector('img');
      if (!image) return;

      openLightbox(
        (image as HTMLImageElement).currentSrc || image.getAttribute('src') || '',
        image.getAttribute('alt') || '',
      );
    }

    overlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocumentClick);

    return () => {
      overlay?.removeEventListener('click', onOverlayClick);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  return null;
}
