AOS.init({
  disable: function () {
    return window.innerWidth <= 840
  },
  offset: 45,
  delay: 0,
  duration: 2000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
})
