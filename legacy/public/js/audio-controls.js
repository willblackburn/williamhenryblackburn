const YOUTUBE_AUDIO_ID = '-0JquOJfkLE'

let player = null
let playerReady = false
let pendingPlay = false
let initialized = false
let $toggle = null

function isPlaying() {
  return (
    playerReady &&
    player &&
    player.getPlayerState &&
    player.getPlayerState() === YT.PlayerState.PLAYING
  )
}

function syncToggle() {
  if (!$toggle || !$toggle.length) return

  const paused = !isPlaying()
  $toggle.toggleClass('active', paused)
  $toggle.attr('aria-pressed', String(!paused))
}

function playAudio() {
  if (!playerReady || !player) {
    pendingPlay = true
    return
  }

  player.playVideo()
}

function pauseAudio() {
  pendingPlay = false
  if (playerReady && player) {
    player.pauseVideo()
  }
}

function initPlayer() {
  if (initialized || !document.getElementById('youtube-audio-player')) return
  initialized = true

  player = new YT.Player('youtube-audio-player', {
    height: '1',
    width: '1',
    videoId: YOUTUBE_AUDIO_ID,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      playlist: YOUTUBE_AUDIO_ID,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
    },
    events: {
      onReady: function () {
        playerReady = true
        if (pendingPlay) {
          player.playVideo()
          pendingPlay = false
        }
        syncToggle()
      },
      onStateChange: function () {
        syncToggle()
      },
      onError: function () {
        pendingPlay = false
        syncToggle()
      },
    },
  })
}

window.onYouTubeIframeAPIReady = initPlayer

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) {
    initPlayer()
    return
  }

  if (document.getElementById('youtube-iframe-api')) return

  const tag = document.createElement('script')
  tag.id = 'youtube-iframe-api'
  tag.src = 'https://www.youtube.com/iframe_api'
  document.head.appendChild(tag)
}

$(document).ready(function () {
  $toggle = $('.musicplayer .toggle')
  const playerHost = document.getElementById('youtube-audio-player')

  if (!$toggle.length || !playerHost) return

  syncToggle()

  $toggle.on('click', function () {
    if (isPlaying()) {
      pauseAudio()
    } else {
      playAudio()
    }
    syncToggle()
  })

  loadYouTubeApi()
})
