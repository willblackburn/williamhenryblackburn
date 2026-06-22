const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
)
const currentTheme =
  document.documentElement.getAttribute('data-theme') ||
  localStorage.getItem('theme') ||
  'dark'

if (toggleSwitch && currentTheme === 'dark') {
  toggleSwitch.checked = true
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

toggleSwitch?.addEventListener('change', switchTheme, false)
