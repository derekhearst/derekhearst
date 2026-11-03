<script lang="ts">
	// Lucide icons (ISC license), inlined so nothing is hot-linked from a CDN.
	const paths = {
		github: [
			'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
			'M9 18c-4.51 2-5-2-7-2',
		],
		linkedin: [
			'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
			'M2 9h4v12H2z',
			'M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z',
		],
		mail: ['M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
		file: [
			'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z',
			'M14 2v4a2 2 0 0 0 2 2h4',
			'M10 13H8',
			'M16 17H8',
			'M16 13h-2',
		],
		external: ['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'],
		pin: [
			'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
			'M12 7a3 3 0 1 0 0 6 3 3 0 1 0 0-6z',
		],
	} as const

	let { name, class: className = 'size-5' }: { name: keyof typeof paths; class?: string } = $props()
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true">
	{#each paths[name] as d (d)}
		<path {d} />
	{/each}
</svg>
