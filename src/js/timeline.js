import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { timelineEvents } from '../data/timeline-events.js'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderTimelineEvents(container, items) {
  container.innerHTML = items
    .map((event, index) => {
      const datetimeAttr = event.datetime
        ? ` datetime="${escapeHtml(event.datetime)}"`
        : ''
      const location = event.location
        ? `<p class="timeline-event__location">${escapeHtml(event.location)}</p>`
        : ''

      return `
        <article class="timeline-event" data-index="${index}">
          <span class="timeline-event__node" aria-hidden="true"></span>
          <div class="timeline-event__panel">
            <figure class="timeline-event__figure">
              <div class="timeline-event__figure-placeholder"></div>
            </figure>
            <div class="timeline-event__copy">
              <time class="timeline-event__year"${datetimeAttr}>${escapeHtml(event.year)}</time>
              ${location}
              <h2 class="timeline-event__title">${escapeHtml(event.title)}</h2>
              <p class="timeline-event__text">${escapeHtml(event.text)}</p>
            </div>
          </div>
        </article>
      `
    })
    .join('')
}

const eventsContainer = document.querySelector('.timeline-events')

if (eventsContainer) {
  renderTimelineEvents(eventsContainer, timelineEvents)
}

const experienceEl = document.querySelector('.timeline-experience')
const scrollEl = document.querySelector('.timeline-scroll')
const trackEl = document.querySelector('.timeline-track')
const stageEl = document.querySelector('.timeline-stage')
const svgEl = document.querySelector('#timeline-ecg-svg')
const pathBase = document.querySelector('#timeline-ecg-base')
const pathGlow = document.querySelector('#timeline-ecg-glow')
const pulseEl = document.querySelector('.timeline-pulse-dot')
const events = document.querySelectorAll('.timeline-event')

if (
  experienceEl &&
  scrollEl &&
  trackEl &&
  stageEl &&
  svgEl &&
  pathBase &&
  pathGlow &&
  events.length > 0
) {
  const desktopMq = window.matchMedia('(min-width: 841px)')
  const reducedMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)')

  const panelTiers = [0.42, 0.66, 0.38, 0.68, 0.4, 0.67, 0.39, 0.69, 0.41, 0.65]

  let lenis = null

  function isDesktop() {
    return desktopMq.matches
  }

  function getEventBaseOffset(eventEl) {
    const eventsContainerEl = events[0].parentElement

    return {
      left:
        stageEl.offsetLeft +
        eventsContainerEl.offsetLeft +
        eventEl.offsetLeft,
      top:
        stageEl.offsetTop +
        eventsContainerEl.offsetTop +
        eventEl.offsetTop,
    }
  }

  function applyEventHeights() {
    events.forEach((eventEl, index) => {
      const tier = panelTiers[index % panelTiers.length]
      eventEl.style.setProperty('--event-y', `${tier * 100}%`)
      eventEl.dataset.panel = tier > 0.52 ? 'above' : 'below'
    })
  }

  function getEventWidth() {
    return events[0].offsetWidth
  }

  function getPanelBounds(eventEl) {
    const panel = eventEl.querySelector('.timeline-event__panel')
    const base = getEventBaseOffset(eventEl)
    const top = base.top + panel.offsetTop
    const left = base.left + panel.offsetLeft
    const right = left + panel.offsetWidth
    const bottom = top + panel.offsetHeight

    return {
      left,
      right,
      top,
      bottom,
      midY: top + panel.offsetHeight / 2,
    }
  }

  function getExitPoint(bounds) {
    return { x: bounds.right, y: bounds.midY }
  }

  function getEntryPoint(bounds, gapIndex, exitPoint) {
    if (gapIndex === 0) {
      return { x: bounds.left, y: bounds.bottom }
    }

    return {
      x: bounds.left,
      y:
        Math.abs(exitPoint.y - bounds.top) <=
        Math.abs(exitPoint.y - bounds.bottom)
          ? bounds.top
          : bounds.bottom,
    }
  }

  function getGapConnections() {
    const stageLeft = stageEl.offsetLeft
    const stageTop = stageEl.offsetTop
    const connections = []

    for (let i = 0; i < events.length - 1; i += 1) {
      const current = getPanelBounds(events[i])
      const next = getPanelBounds(events[i + 1])
      const exit = getExitPoint(current)
      const entry = getEntryPoint(next, i, exit)

      connections.push({
        exit,
        entry,
        exitStage: { x: exit.x - stageLeft, y: exit.y - stageTop },
        entryStage: { x: entry.x - stageLeft, y: entry.y - stageTop },
      })
    }

    return connections
  }

  function positionNodes() {
    if (!isDesktop()) return

    const connections = getGapConnections()

    events.forEach((eventEl, index) => {
      const node = eventEl.querySelector('.timeline-event__node')
      const base = getEventBaseOffset(eventEl)
      let point

      if (index < events.length - 1) {
        point = connections[index].exit
      } else {
        point = connections[connections.length - 1].entry
      }

      node.style.left = `${point.x - base.left}px`
      node.style.top = `${point.y - base.top}px`
    })
  }

  function buildPath() {
    if (!isDesktop()) {
      pathBase.removeAttribute('d')
      pathGlow.removeAttribute('d')
      return
    }

    if (events.length < 2) {
      pathBase.removeAttribute('d')
      pathGlow.removeAttribute('d')
      return
    }

    const width = stageEl.scrollWidth
    const height = stageEl.offsetHeight
    const connections = getGapConnections()
    const segments = connections.map(
      ({ exitStage, entryStage }) =>
        `M ${exitStage.x} ${exitStage.y} L ${entryStage.x} ${entryStage.y}`
    )

    const d = segments.join(' ')

    svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`)
    svgEl.style.width = `${width}px`
    svgEl.style.height = `${height}px`
    pathBase.setAttribute('d', d)
    pathGlow.setAttribute('d', d)

    const len = pathBase.getTotalLength()
    pathGlow.style.strokeDasharray = `${Math.max(len * 0.1, 40)} ${len}`
  }

  function updateActive() {
    if (!isDesktop()) {
      events.forEach((eventEl) => eventEl.classList.remove('is-active'))
      return
    }

    const center = scrollEl.scrollLeft + scrollEl.clientWidth / 2
    const trackRect = trackEl.getBoundingClientRect()
    let closest = events[0]
    let closestDist = Infinity

    events.forEach((eventEl) => {
      const eventRect = eventEl.getBoundingClientRect()
      const eventCenter =
        scrollEl.scrollLeft +
        (eventRect.left - trackRect.left) +
        eventRect.width / 2
      const dist = Math.abs(center - eventCenter)
      if (dist < closestDist) {
        closestDist = dist
        closest = eventEl
      }
    })

    events.forEach((eventEl) => {
      eventEl.classList.toggle('is-active', eventEl === closest)
    })
  }

  function updatePulse() {
    if (!isDesktop() || reducedMotionMq.matches || !pathBase.getTotalLength()) {
      if (pulseEl) pulseEl.style.opacity = '0'
      return
    }

    if (pulseEl) pulseEl.style.opacity = '1'

    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth
    const progress = maxScroll > 0 ? scrollEl.scrollLeft / maxScroll : 0
    const len = pathBase.getTotalLength()
    const point = pathBase.getPointAtLength(progress * len)

    if (pulseEl) {
      pulseEl.style.transform = `translate(${point.x}px, ${point.y}px)`
    }

    pathGlow.style.strokeDashoffset = `${-progress * len}`
  }

  function updateEdgePad() {
    if (!isDesktop()) return

    const endPad = Math.max(32, (scrollEl.clientWidth - getEventWidth()) / 2)
    scrollEl.style.setProperty('--timeline-edge-pad-end', `${endPad}px`)
  }

  function refresh() {
    applyEventHeights()
    positionNodes()
    updateEdgePad()
    buildPath()
    updateActive()
    updatePulse()
    lenis?.resize()
  }

  function onScroll() {
    updateActive()
    updatePulse()
  }

  function initLenis() {
    if (!isDesktop() || reducedMotionMq.matches) return

    lenis?.destroy()

    lenis = new Lenis({
      wrapper: scrollEl,
      content: trackEl,
      eventsTarget: experienceEl,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      autoRaf: true,
    })

    lenis.on('scroll', onScroll)
    window.timelineLenis = lenis
    scrollEl.scrollLeft = 0
    refresh()
  }

  function destroyLenis() {
    lenis?.destroy()
    lenis = null
    window.timelineLenis = null
  }

  function onBreakpointChange() {
    if (isDesktop()) {
      initLenis()
    } else {
      destroyLenis()
    }
    refresh()
  }

  scrollEl.addEventListener('scroll', onScroll, { passive: true })
  desktopMq.addEventListener('change', onBreakpointChange)
  reducedMotionMq.addEventListener('change', onBreakpointChange)
  window.addEventListener('resize', refresh)

  const introEl = document.querySelector('.timeline-intro')

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(refresh)
    observer.observe(trackEl)
    observer.observe(stageEl)
    observer.observe(scrollEl)
    observer.observe(events[0])
    if (introEl) observer.observe(introEl)
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(onBreakpointChange)
  } else {
    onBreakpointChange()
  }
}
