// See https://svelte.dev/docs/kit/types#app
declare global {
	namespace App {}
}

// <model-viewer> custom element used by the 3D eFoil viewer.
declare module 'svelte/elements' {
	interface SvelteHTMLElements {
		'model-viewer': HTMLAttributes<HTMLElement> & Record<string, unknown>
	}
}

import type { HTMLAttributes } from 'svelte/elements'

export {}
