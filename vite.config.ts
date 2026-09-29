import { fileRoutes } from 'filesystem-routing/vite';
import { defineConfig } from 'vitest/config';
import solid from '@solidjs/vite-plugin';
import { nitro } from "nitro/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "@rollup/plugin-yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [
		solid({
			start: true,
			ssr: true,
			extensions: ['.jsx', '.tsx'],
			diagnostics: true
		}),
		fileRoutes({ types: true }),
		nitro({
			static: true,
			prerender: {
				routes: ["/", "/404"],
			},
		}),
		yaml(),
	],
	server: { port: 3000 },
	test: {
		environment: 'jsdom',
		globals: false,
		setupFiles: ['./vitest-setup.ts'],
		isolate: false,
	},
	build: {
		target: 'esnext',
		assetsInlineLimit: 0,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
});
