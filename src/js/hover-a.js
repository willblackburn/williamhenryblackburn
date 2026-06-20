(function () {
  const titles = document.querySelectorAll('.hover-a')
  if (!titles.length) return

  const delay = 600

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const title = entry.target
        observer.unobserve(title)

        setTimeout(() => {
          title.classList.add('in-view')
        }, delay)
      })
    },
    { threshold: 0.4 }
  )

  titles.forEach((title) => observer.observe(title))
})()
