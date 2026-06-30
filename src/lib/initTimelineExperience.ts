import Lenis from 'lenis';

const panelTiers = [0.42, 0.66, 0.38, 0.68, 0.4, 0.67, 0.39, 0.69, 0.41, 0.65];

export function initTimelineExperience(container: HTMLElement): () => void {
  const experienceEl = container;
  const scrollEl = container.querySelector<HTMLElement>('.timeline-scroll');
  const trackEl = container.querySelector<HTMLElement>('.timeline-track');
  const stageEl = container.querySelector<HTMLElement>('.timeline-stage');
  const svgEl = container.querySelector<SVGSVGElement>('#timeline-ecg-svg');
  const pathBase = container.querySelector<SVGPathElement>('#timeline-ecg-base');
  const pathGlow = container.querySelector<SVGPathElement>('#timeline-ecg-glow');
  const pulseEl = container.querySelector<HTMLElement>('.timeline-pulse-dot');
  const introEl = container.querySelector<HTMLElement>('.timeline-intro');

  if (
    !scrollEl ||
    !trackEl ||
    !stageEl ||
    !svgEl ||
    !pathBase ||
    !pathGlow
  ) {
    return () => {};
  }

  const scrollElement = scrollEl;
  const trackElement = trackEl;
  const stageElement = stageEl;
  const svgElement = svgEl;
  const pathBaseElement = pathBase;
  const pathGlowElement = pathGlow;

  let events = Array.from(container.querySelectorAll<HTMLElement>('.timeline-event'));

  if (events.length === 0) {
    return () => {};
  }

  const desktopMq = window.matchMedia('(min-width: 841px)');
  const reducedMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  let lenis: Lenis | null = null;
  let observer: ResizeObserver | undefined;

  function isDesktop() {
    return desktopMq.matches;
  }

  function getEventBaseOffset(eventEl: HTMLElement) {
    const eventsContainerEl = events[0].parentElement;
    if (!eventsContainerEl) {
      return { left: 0, top: 0 };
    }

    return {
      left:
        stageElement.offsetLeft +
        eventsContainerEl.offsetLeft +
        eventEl.offsetLeft,
      top:
        stageElement.offsetTop + eventsContainerEl.offsetTop + eventEl.offsetTop,
    };
  }

  function applyEventHeights() {
    events.forEach((eventEl, index) => {
      const tier = panelTiers[index % panelTiers.length];
      eventEl.style.setProperty('--event-y', `${tier * 100}%`);
      eventEl.dataset.panel = tier > 0.52 ? 'above' : 'below';
    });
  }

  function getEventWidth() {
    return events[0].offsetWidth;
  }

  function getPanelBounds(eventEl: HTMLElement) {
    const panel = eventEl.querySelector<HTMLElement>('.timeline-event__panel');
    if (!panel) {
      return { left: 0, right: 0, top: 0, bottom: 0, midY: 0 };
    }

    const base = getEventBaseOffset(eventEl);
    const top = base.top + panel.offsetTop;
    const left = base.left + panel.offsetLeft;
    const right = left + panel.offsetWidth;
    const bottom = top + panel.offsetHeight;

    return {
      left,
      right,
      top,
      bottom,
      midY: top + panel.offsetHeight / 2,
    };
  }

  function getExitPoint(bounds: ReturnType<typeof getPanelBounds>) {
    return { x: bounds.right, y: bounds.midY };
  }

  function getEntryPoint(
    bounds: ReturnType<typeof getPanelBounds>,
    gapIndex: number,
    exitPoint: { x: number; y: number },
  ) {
    if (gapIndex === 0) {
      return { x: bounds.left, y: bounds.bottom };
    }

    return {
      x: bounds.left,
      y:
        Math.abs(exitPoint.y - bounds.top) <=
        Math.abs(exitPoint.y - bounds.bottom)
          ? bounds.top
          : bounds.bottom,
    };
  }

  function getGapConnections() {
    const stageLeft = stageElement.offsetLeft;
    const stageTop = stageElement.offsetTop;
    const connections: Array<{
      exit: { x: number; y: number };
      entry: { x: number; y: number };
      exitStage: { x: number; y: number };
      entryStage: { x: number; y: number };
    }> = [];

    for (let i = 0; i < events.length - 1; i += 1) {
      const current = getPanelBounds(events[i]);
      const next = getPanelBounds(events[i + 1]);
      const exit = getExitPoint(current);
      const entry = getEntryPoint(next, i, exit);

      connections.push({
        exit,
        entry,
        exitStage: { x: exit.x - stageLeft, y: exit.y - stageTop },
        entryStage: { x: entry.x - stageLeft, y: entry.y - stageTop },
      });
    }

    return connections;
  }

  function positionNodes() {
    if (!isDesktop()) return;

    const connections = getGapConnections();

    events.forEach((eventEl, index) => {
      const node = eventEl.querySelector<HTMLElement>('.timeline-event__node');
      if (!node) return;

      const base = getEventBaseOffset(eventEl);
      let point: { x: number; y: number };

      if (index < events.length - 1) {
        point = connections[index].exit;
      } else {
        point = connections[connections.length - 1].entry;
      }

      node.style.left = `${point.x - base.left}px`;
      node.style.top = `${point.y - base.top}px`;
    });
  }

  function buildPath() {
    if (!isDesktop()) {
      pathBaseElement.removeAttribute('d');
      pathGlowElement.removeAttribute('d');
      return;
    }

    if (events.length < 2) {
      pathBaseElement.removeAttribute('d');
      pathGlowElement.removeAttribute('d');
      return;
    }

    const width = stageElement.scrollWidth;
    const height = stageElement.offsetHeight;
    const connections = getGapConnections();
    const segments = connections.map(
      ({ exitStage, entryStage }) =>
        `M ${exitStage.x} ${exitStage.y} L ${entryStage.x} ${entryStage.y}`,
    );

    const d = segments.join(' ');

    svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svgElement.style.width = `${width}px`;
    svgElement.style.height = `${height}px`;
    pathBaseElement.setAttribute('d', d);
    pathGlowElement.setAttribute('d', d);

    const len = pathBaseElement.getTotalLength();
    pathGlowElement.style.strokeDasharray = `${Math.max(len * 0.1, 40)} ${len}`;
  }

  function updateActive() {
    if (!isDesktop()) {
      events.forEach((eventEl) => eventEl.classList.remove('is-active'));
      return;
    }

    const center = scrollElement.scrollLeft + scrollElement.clientWidth / 2;
    const trackRect = trackElement.getBoundingClientRect();
    let closest = events[0];
    let closestDist = Infinity;

    events.forEach((eventEl) => {
      const eventRect = eventEl.getBoundingClientRect();
      const eventCenter =
        scrollElement.scrollLeft +
        (eventRect.left - trackRect.left) +
        eventRect.width / 2;
      const dist = Math.abs(center - eventCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = eventEl;
      }
    });

    events.forEach((eventEl) => {
      eventEl.classList.toggle('is-active', eventEl === closest);
    });
  }

  function updatePulse() {
    if (!isDesktop() || reducedMotionMq.matches || !pathBaseElement.getTotalLength()) {
      if (pulseEl) pulseEl.style.opacity = '0';
      return;
    }

    if (pulseEl) pulseEl.style.opacity = '1';

    const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
    const progress = maxScroll > 0 ? scrollElement.scrollLeft / maxScroll : 0;
    const len = pathBaseElement.getTotalLength();
    const point = pathBaseElement.getPointAtLength(progress * len);

    if (pulseEl) {
      pulseEl.style.transform = `translate(${point.x}px, ${point.y}px)`;
    }

    pathGlowElement.style.strokeDashoffset = `${-progress * len}`;
  }

  function updateEdgePad() {
    if (!isDesktop()) return;

    const endPad = Math.max(32, (scrollElement.clientWidth - getEventWidth()) / 2);
    scrollElement.style.setProperty('--timeline-edge-pad-end', `${endPad}px`);
  }

  function refresh() {
    events = Array.from(container.querySelectorAll<HTMLElement>('.timeline-event'));
    applyEventHeights();
    positionNodes();
    updateEdgePad();
    buildPath();
    updateActive();
    updatePulse();
    lenis?.resize();
  }

  function onScroll() {
    updateActive();
    updatePulse();
  }

  function initLenis() {
    if (!isDesktop() || reducedMotionMq.matches) return;

    lenis?.destroy();

    lenis = new Lenis({
      wrapper: scrollElement,
      content: trackElement,
      eventsTarget: experienceEl,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      autoRaf: true,
    });

    lenis.on('scroll', onScroll);
    window.timelineLenis = lenis;
    scrollElement.scrollLeft = 0;
    refresh();
  }

  function destroyLenis() {
    lenis?.destroy();
    lenis = null;
    window.timelineLenis = null;
  }

  function onBreakpointChange() {
    if (isDesktop()) initLenis();
    else destroyLenis();
    refresh();
  }

  function boot() {
    onBreakpointChange();
  }

  scrollElement.addEventListener('scroll', onScroll, { passive: true });
  desktopMq.addEventListener('change', onBreakpointChange);
  reducedMotionMq.addEventListener('change', onBreakpointChange);
  window.addEventListener('resize', refresh);

  if (typeof ResizeObserver !== 'undefined') {
    observer = new ResizeObserver(refresh);
    observer.observe(trackElement);
    observer.observe(stageElement);
    observer.observe(scrollElement);
    observer.observe(events[0]);
    if (introEl) observer.observe(introEl);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(boot);
  } else {
    boot();
  }

  return () => {
    scrollElement.removeEventListener('scroll', onScroll);
    desktopMq.removeEventListener('change', onBreakpointChange);
    reducedMotionMq.removeEventListener('change', onBreakpointChange);
    window.removeEventListener('resize', refresh);
    observer?.disconnect();
    destroyLenis();
  };
}
