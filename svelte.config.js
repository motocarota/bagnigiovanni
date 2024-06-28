import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// outDir: 'build',
			// pages: 'build',
			// assets: 'build',
			precompress: false,
			strict: true,
			fallback: undefined,
			// fallback: '404.html',
		}),
		paths: {
			assets: '',
			base: '',
			relative: true,
		},
	},
	preprocess: vitePreprocess()
};

export default config;
