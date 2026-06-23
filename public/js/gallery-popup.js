;(function () {
  let overlay = document.getElementById('gallery-lightbox')

  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'gallery-lightbox'
    overlay.className = 'gallery-lightbox'
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-modal', 'true')
    overlay.setAttribute('aria-label', 'Image preview')

    const img = document.createElement('img')
    overlay.appendChild(img)
    document.body.appendChild(overlay)

    overlay.addEventListener('click', closeLightbox)

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox()
    })
  }

  function openLightbox(src, alt) {
    const img = overlay.querySelector('img')
    img.src = src
    img.alt = alt || ''
    overlay.classList.add('is-open')
    document.body.classList.add('gallery-lightbox-open')
  }

  function closeLightbox() {
    overlay.classList.remove('is-open')
    document.body.classList.remove('gallery-lightbox-open')
  }

  function bindLightboxTriggers(selector) {
    document.querySelectorAll(selector).forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const img = trigger.querySelector('img')
        if (!img) return
        openLightbox(img.currentSrc || img.src, img.alt)
      })
    })
  }

  bindLightboxTriggers('.gallery div')
  bindLightboxTriggers('.about-archive .image-wrapper')
})()
