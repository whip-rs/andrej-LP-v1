/*
  fps-monitor.js

  Lightweight FPS & long task overlay for development.

  Usage (recommended):
  - Keep this file imported only for temporary testing and debugging.
  - By default `index.js` keeps the import commented out. To enable:
    1) Uncomment the import in `1-src/index.js` and run `npm run dev` or
    2) Open DevTools and run:
       import('./js/fps-monitor.js').then(m => m.startPerfMonitor())

  API:
    - startPerfMonitor(opts) => returns {stop, getStats, reset}
    - window.__perfMonitor is exposed when started for quick console access

  DevTools / integration notes (brief):
    - This is a page-script monitor; to pass data to DevTools you can:
       * Emit `performance` marks/measurements (performance.mark/measure) to use
         the Performance panel.
       * Expose metrics via window.__perfMonitor and poll them from a custom
         DevTools panel or content script via postMessage.
       * Use CDP (Chrome DevTools Protocol) to remotely collect and show values.
*/

const DEFAULT_CONFIG = {
  overlayPosition: 'bottom-right', // bottom-right, bottom-left, top-left, top-right
  colorOK: '#0f0',
  colorWarn: '#ffcc00',
  colorBad: '#ff5555',
  threshold50: 50,
  threshold100: 100,
  showLongTasks: true,
  reportFn: null // function(stats) -> send to server or other reporting channel
}

export function startPerfMonitor(opts = {}) {
  const config = Object.assign({}, DEFAULT_CONFIG, opts)

  if (typeof window === 'undefined' || !document) {
    // Not running in a browser
    return null
  }

  let overlay = document.getElementById('perf-overlay');
  if (overlay) {
    // Already running. Return existing API
    return window.__perfMonitor
  }

  // Create overlay
  overlay = document.createElement('div')
  overlay.id = 'perf-overlay'
  Object.assign(overlay.style, {
    position: 'fixed',
    zIndex: '99999',
    bottom: config.overlayPosition.includes('bottom') ? '8px' : 'auto',
    top: config.overlayPosition.includes('top') ? '8px' : 'auto',
    right: config.overlayPosition.includes('right') ? '8px' : 'auto',
    left: config.overlayPosition.includes('left') ? '8px' : 'auto',
    background: 'rgba(0,0,0,0.65)',
    color: config.colorOK,
    fontFamily: 'monospace',
    fontSize: '12px',
    padding: '6px 8px',
    borderRadius: '6px',
    lineHeight: '1.3',
    pointerEvents: 'none',
    whiteSpace: 'pre',
    minWidth: '140px',
    boxShadow: '0 0 0 1px rgba(0,255,0,0.12), 0 4px 12px rgba(0,0,0,0.4)'
  })
  overlay.textContent = 'perf: initializing...'
  document.body.appendChild(overlay)

  // Frames & stats
  let lastFrameTime = performance.now()
  let framesThisSecond = 0
  let lastSecondStamp = Math.floor(lastFrameTime / 1000)
  let fpsCurrent = 0
  const recentFPS = [] // per second FPS for last 10s
  let hickups50 = 0
  let hickups100 = 0
  let worstDelta = 0
  let longTasks = 0

  // Optional reporting interval
  let reportIntervalMs = 1000
  let lastReport = performance.now()

  // Long task observer
  try {
    const obs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // `longtask` entries include duration
        if (entry.duration && entry.duration > 0) longTasks++
      }
    })
    obs.observe({ entryTypes: ['longtask'] })
  } catch (e) {
    // Not supported in all browsers; that's ok
  }

  function formatStats() {
    const avgFps = recentFPS.length ? (recentFPS.reduce((a, b) => a + b, 0) / recentFPS.length).toFixed(1) : '0'
    const health = fpsCurrent >= 55 && hickups100 === 0 && longTasks === 0 ? 'OK' : 'CHECK'
    overlay.style.color = health === 'OK' ? config.colorOK : config.colorWarn
    if (fpsCurrent < 45 || hickups100 > 0) overlay.style.color = config.colorBad

    return (
      `FPS: ${String(fpsCurrent).padStart(2, ' ')} | Avg10s: ${avgFps}\n` +
      `> ${config.threshold50}ms: ${hickups50}  > ${config.threshold100}ms: ${hickups100}\n` +
      `W Δ: ${worstDelta.toFixed(1)}ms  Long: ${longTasks}`
    )
  }

  function tick(now) {
    const delta = now - lastFrameTime
    framesThisSecond++
    if (delta > config.threshold50) {
      hickups50++
      if (delta > config.threshold100) hickups100++
      if (delta > worstDelta) worstDelta = delta
    }

    const currentSecond = Math.floor(now / 1000)
    if (currentSecond !== lastSecondStamp) {
      fpsCurrent = framesThisSecond
      recentFPS.push(fpsCurrent)
      if (recentFPS.length > 10) recentFPS.shift()
      framesThisSecond = 0
      lastSecondStamp = currentSecond
      overlay.textContent = formatStats()
      worstDelta = 0
    }
    lastFrameTime = now

    const nowMs = performance.now()
    if (config.reportFn && nowMs - lastReport >= reportIntervalMs) {
      try {
        config.reportFn(getStats())
      } catch (err) {
        // ignore
      }
      lastReport = nowMs
    }

    rafId = requestAnimationFrame(tick)
  }

  // Keep rafId handle to stop it later
  let rafId = requestAnimationFrame(tick)

  function stop() {
    try { cancelAnimationFrame(rafId) } catch (e) {}
    try { document.body.removeChild(overlay) } catch (e) {}
    window.__perfMonitor = null
  }

  function reset() {
    hickups50 = 0
    hickups100 = 0
    worstDelta = 0
    longTasks = 0
    recentFPS.length = 0
  }

  function getStats() {
    return {
      fpsCurrent,
      avgFPS: recentFPS.length ? (recentFPS.reduce((a, b) => a + b, 0) / recentFPS.length) : 0,
      hickups50,
      hickups100,
      worstDelta,
      longTasks,
      recentFPS: recentFPS.slice()
    }
  }

  const api = { start: () => {}, stop, reset, getStats }
  // Expose on window for console convenience
  window.__perfMonitor = api
  // If DEV env set (Vite), auto start. You can also set window.__perfMonitorAutoStart = true
  const isDev = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) || window.__perfMonitorAutoStart === true
  if (!isDev && !config.force) {
    // If not dev and not forced, stop and display nothing
    stop();
    return api
  }

  // Allow programmatic start to control overlay visibility
  api.start = () => {
    // If overlay is already present just return
    if (document.getElementById('perf-overlay')) return api
    // otherwise re-create overlay and start
    overlay = document.createElement('div')
    overlay.id = 'perf-overlay'
    Object.assign(overlay.style, { pointerEvents: 'none' })
    document.body.appendChild(overlay)
    rafId = requestAnimationFrame(tick)
    return api
  }

  // Return API for direct usage
  return api
}

// Default export for convenience
export default startPerfMonitor

// If this module is imported directly in dev, start the monitor automatically
// You can comment this section or keep it. It's safe because startPerfMonitor
// stops itself on non-dev unless forced by config.force.
if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
  // The caller can provide forced opts by writing window.__perfMonitorForce = true
  const force = !!(window.__perfMonitorForce)
  startPerfMonitor({ force })
}
