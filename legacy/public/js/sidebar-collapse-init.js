;(function () {
  var codaBody = document.querySelector('.coda-body')
  if (!codaBody) return

  try {
    if (
      localStorage.getItem('sidebar-collapsed') === 'true' &&
      window.matchMedia('(min-width: 841px)').matches
    ) {
      codaBody.classList.add('sidebar-collapsed')
    }
  } catch (err) {}
})()
