const STORAGE_KEY = 'sidebar-collapsed'

function setCollapsed(collapsed) {
  const codaBody = document.querySelector('.coda-body')
  const toggleBtn = document.querySelector('.sidebar-toggle')
  if (!codaBody) return

  codaBody.classList.toggle('sidebar-collapsed', collapsed)

  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', String(!collapsed))
    toggleBtn.setAttribute(
      'aria-label',
      collapsed ? 'Expand navigation' : 'Collapse navigation'
    )
  }
}

function readSavedState() {
  return localStorage.getItem(STORAGE_KEY) === 'true'
}

function applyDesktopState() {
  const desktopMq = window.matchMedia('(min-width: 841px)')

  if (desktopMq.matches) {
    setCollapsed(readSavedState())
  } else {
    setCollapsed(false)
  }
}

document.addEventListener('click', (event) => {
  const toggleBtn = event.target.closest('.sidebar-toggle')
  if (!toggleBtn) return
  if (!window.matchMedia('(min-width: 841px)').matches) return

  const codaBody = document.querySelector('.coda-body')
  if (!codaBody) return

  const collapsed = !codaBody.classList.contains('sidebar-collapsed')
  setCollapsed(collapsed)
  localStorage.setItem(STORAGE_KEY, String(collapsed))
})

window.matchMedia('(min-width: 841px)').addEventListener('change', applyDesktopState)
applyDesktopState()
