(function () {
  var isMenuOpen = false
  var codaBody = null
  var menuToggle = null
  var overlay = null

  function ensureOverlay() {
    if (!codaBody) return null
    overlay = codaBody.querySelector('.mobile-nav-overlay')
    if (overlay) return overlay

    overlay = document.createElement('div')
    overlay.className = 'mobile-nav-overlay'
    overlay.setAttribute('aria-hidden', 'true')
    codaBody.appendChild(overlay)
    return overlay
  }

  function setMenuOpen(open) {
    if (!codaBody || !menuToggle) return
    isMenuOpen = open
    codaBody.classList.toggle('nav-open', open)
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    if (overlay) overlay.classList.toggle('is-visible', open)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function openMenu() {
    setMenuOpen(true)
  }

  function toggleMenu(event) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    if (isMenuOpen) closeMenu()
    else openMenu()
  }

  function onBodyClick(event) {
    if (!isMenuOpen || !codaBody) return
    var target = event.target
    if (!target || !target.closest) return
    if (
      target.closest('.left') ||
      target.closest('.menu-toggle') ||
      target.closest('.mobile-top-bar')
    ) {
      return
    }
    closeMenu()
  }

  function onOverlayClick(event) {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    closeMenu()
  }

  function onMediaChange(mediaQuery) {
    if (mediaQuery.matches) closeMenu()
  }

  function syncSubmenus() {
    var pathname = window.location.pathname
    var submenus = document.querySelectorAll('.nav-item-has-submenu > input')

    submenus.forEach(function (input) {
      if (!(input instanceof HTMLInputElement)) return

      var prefix =
        input.id === 'menu-works'
          ? '/works'
          : input.id === 'menu-archive'
            ? '/archive'
            : null

      if (!prefix) return

      input.checked =
        pathname === prefix || pathname.indexOf(prefix + '/') === 0
    })
  }

  var listenersBound = false

  function onNavLinkClick(event) {
    if (event.target.closest && event.target.closest('.left a.nav-link')) {
      closeMenu()
    }
  }

  function initResponsiveNav() {
    codaBody = document.querySelector('.coda-body')
    menuToggle = document.querySelector('.menu-toggle')
    if (!codaBody || !menuToggle) return false

    ensureOverlay()
    syncSubmenus()

    if (!listenersBound) {
      listenersBound = true
      menuToggle.addEventListener('click', toggleMenu)
      if (overlay) overlay.addEventListener('click', onOverlayClick)
      codaBody.addEventListener('click', onBodyClick)
      codaBody.addEventListener('click', onNavLinkClick)

      if (window.matchMedia) {
        var mq = window.matchMedia('(min-width: 841px)')
        mq.addEventListener('change', onMediaChange)
        onMediaChange(mq)
      }
    }

    return true
  }

  window.__closeMobileNav = closeMenu
  window.__initResponsiveNav = initResponsiveNav

  function boot() {
    if (initResponsiveNav()) return
    window.setTimeout(function () {
      if (!initResponsiveNav()) {
        window.setTimeout(initResponsiveNav, 500)
      }
    }, 0)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }
})()
