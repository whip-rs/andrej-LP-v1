import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from 'vite-plugin-pug'
import svgLoader from 'vite-svg-loader'
// import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	base: './',
	root: path.resolve(__dirname, '../1-src'),
	publicDir: false, // Disable public folder entirely
	plugins: [
		vue(),
		// vueDevTools(),
		pugPlugin(),
		svgLoader()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../1-src')
		}
	},
	build: {
		outDir: path.resolve(__dirname, '../4-public'),
		emptyOutDir: true
	},
	server: {
		port: 5173,
		open: true
	},
	preview: {
		port: 4173
	}
})
