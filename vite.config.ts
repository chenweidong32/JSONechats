/*
 * @Author: cwd
 * @Date: 2022-11-30 15:02:48
 * @LastEditors: cwd
 * @LastEditTime: 2022-11-30 16:13:30
 * @FilePath: \cwdniubi\cwdniubi\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by cwd, All Rights Reserved. 
 */
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string): any => {
	return resolve(__dirname, '.', dir);
};
const alias: Record<string, string> = {
	'/@': pathResolve('./src/'),
	'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
};


const viteConfig = defineConfig((mode: ConfigEnv) => {
	const env = loadEnv(mode.mode, process.cwd());
	return {
		plugins: [vue()],
		root: process.cwd(),
		resolve: { alias },
		base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
		hmr: true,
		optimizeDeps: {
			include: [`monaco-editor/esm/vs/language/json/json.worker`,
			`monaco-editor/esm/vs/language/css/css.worker`,
			`monaco-editor/esm/vs/language/html/html.worker`,
			`monaco-editor/esm/vs/language/typescript/ts.worker`,
			`monaco-editor/esm/vs/editor/editor.worker` ],
		},
		server: {
			host: '0.0.0.0',
			port: env.VITE_PORT as unknown as number,
			open: env.VITE_OPEN,
			proxy: {
				'/api': {
					target: env.VITE_API_URL,
					ws: true,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
					
				},
			},
		},
		build: {
			outDir: 'dist',
			sourcemap: false,
			chunkSizeWarningLimit: 1500,
			rollupOptions: {
				output: {
					entryFileNames: `assets/[name].[hash].js`,
					chunkFileNames: `assets/[name].[hash].js`,
					assetFileNames: `assets/[name].[hash].[ext]`,
					compact: true,
					manualChunks: {
						vue: ['vue', 'vue-router', 'pinia'],
						echarts: ['echarts'],
					},
				},
			},
		},
		css: { preprocessorOptions: { css: { charset: false } } },
		define: {
			__VUE_I18N_LEGACY_API__: JSON.stringify(false),
			__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
			__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
		},
	};
});

export default viteConfig;
