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

menuToggle.addEventListener('click', (event) => {
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
    !event.target.closest('.menu-toggle')
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
}

function onMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    closeMenu()
  }
}
