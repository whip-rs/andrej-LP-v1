import { createApp } from 'vue'
import App from './index.vue'

import './css/index.styl'

import './js/anchor-link-smooth-scrolling.js'

// To enable a lightweight FPS + longtask monitor for development, uncomment the
// import below. The monitor is disabled by default so it doesn't affect
// production builds or normal dev usage. You can also enable programmatically
// via `window.__perfMonitor.start()`.
//
// NOTE: This file is intentionally commented out to avoid accidental usage.
// To enable:
//  - Uncomment the import line below
//  - Or call `import('./js/fps-monitor.js').then(m => m.startPerfMonitor())` from
//    the dev console.
//
// import './js/fps-monitor.js'

createApp(App).mount('#app')
