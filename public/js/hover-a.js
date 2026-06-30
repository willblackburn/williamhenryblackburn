(function () {
  function isAboveFold(title) {
    var rect = title.getBoundingClientRect()
    var viewportBottom = window.innerHeight * 0.92
    return rect.top < viewportBottom && rect.bottom > 0
  }

  function initHoverA() {
    var titles = document.querySelectorAll('.hover-a:not([data-hover-a-init])')
    if (!titles.length) return

    var delay = 600
    var activated = new WeakSet()

    function activate(title) {
      if (activated.has(title)) return
      activated.add(title)
      title.setAttribute('data-hover-a-init', 'true')
      observer.unobserve(title)
      window.setTimeout(function () {
        title.classList.add('in-view')
      }, delay)
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) activate(entry.target)
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    titles.forEach(function (title) {
      observer.observe(title)
      if (isAboveFold(title)) {
        activate(title)
      }
    })
  }

  window.__initHoverA = initHoverA

  function boot() {
    initHoverA()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }
})()
