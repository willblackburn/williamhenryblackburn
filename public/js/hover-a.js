(function () {
  const titles = document.querySelectorAll('.hover-a')
  if (!titles.length) return

  const delay = 600
  const activated = new WeakSet()

  function activate(title) {
    if (activated.has(title)) return
    activated.add(title)
    observer.unobserve(title)
    setTimeout(() => {
      title.classList.add('in-view')
    }, delay)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(entry.target)
      })
    },
    { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
  )

  titles.forEach((title) => observer.observe(title))
})()
