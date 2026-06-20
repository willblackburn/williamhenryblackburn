$(document).ready(function () {
  const $toggle = $('.musicplayer .toggle')
  const audio = $('#audio-player')[0]

  if (!$toggle.length || !audio) return

  function syncToggle() {
    const isPaused = audio.paused
    $toggle.toggleClass('active', isPaused)
    $toggle.attr('aria-pressed', String(!isPaused))
  }

  syncToggle()

  $toggle.on('click', function () {
    if (audio.paused) {
      audio.play().catch(() => syncToggle())
    } else {
      audio.pause()
    }
  })

  audio.addEventListener('play', syncToggle)
  audio.addEventListener('pause', syncToggle)
})
