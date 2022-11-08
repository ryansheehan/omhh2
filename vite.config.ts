import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	envPrefix: ['OMHH_', 'SANITY_', 'VITE_']
};

export default config;
