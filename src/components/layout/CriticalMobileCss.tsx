export default function CriticalMobileCss() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `@media (max-width: 840px) {
  .coda-body > .left {
    position: fixed;
    top: 5rem;
    right: 0;
    left: auto;
    bottom: 0;
    width: min(300px, 85vw);
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
    z-index: 1000;
    pointer-events: none;
    visibility: hidden;
  }

  .coda-body.nav-open > .left {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    pointer-events: auto;
    visibility: visible;
  }

  .mobile-nav-overlay {
    position: fixed;
    top: 5rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: rgba(33, 31, 31, 0.45);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .mobile-nav-overlay.is-visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .coda-body > .right {
    width: 100%;
    padding-top: 5rem;
  }

  [data-theme='light'] {
    --bg: #f7f3ed;
  }

  [data-theme='dark'] {
    --bg: #181715;
  }

  .mobile-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    padding: 0.75rem 1.2rem;
    z-index: 1001;
    background: var(--bg);
  }

  .left .logo-image {
    display: none;
  }

  .menu-toggle {
    display: flex;
    touch-action: manipulation;
  }
}`,
      }}
    />
  );
}
