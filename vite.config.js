import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	envPrefix: ['OMHH_', 'CMS_', 'VITE_'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
