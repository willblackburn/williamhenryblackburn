let isMenuOpen = false
let mq

const codaBody = document.querySelector('.coda-body')
const menuToggle = document.querySelector('.menu-toggle')

document.querySelectorAll('.collapsed-menu > li').forEach((el) => {
  el.addEventListener('click', (event) => {
    const textContainer = document.querySelector('.right > .text-container')
    if (textContainer) {
      textContainer.innerHTML = event.target.innerHTML
    }
    if (window.matchMedia) {
      mq = window.matchMedia('(min-width: 841px)')
      onMediaChange(mq)
    }
  })
})

menuToggle?.addEventListener('click', (event) => {
  event.stopPropagation()
  if (!isMenuOpen) {
    openMenu()
  } else {
    closeMenu()
  }
})

codaBody.addEventListener('click', (event) => {
  if (
    isMenuOpen &&
    !event.target.closest('.left') &&
    !event.target.closest('.menu-toggle') &&
    !event.target.closest('.mobile-top-bar')
  ) {
    closeMenu()
  }
})

if (window.matchMedia) {
  mq = window.matchMedia('(min-width: 841px)')
  mq.addEventListener('change', onMediaChange)
  onMediaChange(mq)
}

function closeMenu() {
  codaBody.classList.remove('nav-open')
  isMenuOpen = false
}

function openMenu() {
  codaBody.classList.add('nav-open')
  isMenuOpen = true
  setMobileNavHidden(false)
}

function onMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    closeMenu()
    setMobileNavHidden(false)
  }
}

const mobileBar = document.querySelector('.mobile-top-bar')
const mobileMq = window.matchMedia('(max-width: 840px)')
let lastScrollY = 0
const scrollThreshold = 8

function getScrollY() {
  if (window.lenis && typeof window.lenis.scroll === 'number') {
    return window.lenis.scroll
  }
  return window.scrollY || document.documentElement.scrollTop || 0
}

function setMobileNavHidden(hidden) {
  if (!mobileBar || !codaBody) return
  codaBody.classList.toggle('mobile-nav-hidden', hidden)
  mobileBar.classList.toggle('mobile-top-bar--hidden', hidden)
}

function updateMobileNavOnScroll() {
  if (!mobileBar || !mobileMq.matches) {
    setMobileNavHidden(false)
    lastScrollY = getScrollY()
    return
  }

  if (isMenuOpen) {
    setMobileNavHidden(false)
    lastScrollY = getScrollY()
    return
  }

  const scrollY = getScrollY()

  if (scrollY <= 0) {
    setMobileNavHidden(false)
  } else if (scrollY > lastScrollY + scrollThreshold) {
    setMobileNavHidden(true)
  } else if (scrollY < lastScrollY - scrollThreshold) {
    setMobileNavHidden(false)
  }

  lastScrollY = scrollY
}

window.addEventListener('scroll', updateMobileNavOnScroll, { passive: true })

window.addEventListener('lenis-ready', () => {
  window.lenis?.on('scroll', updateMobileNavOnScroll)
})

if (window.lenis) {
  window.lenis.on('scroll', updateMobileNavOnScroll)
}

mobileMq.addEventListener('change', () => {
  setMobileNavHidden(false)
  lastScrollY = getScrollY()
})
