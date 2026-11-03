<script lang="ts">
	// <model-viewer> is a browser-only custom element, so it is imported after the page hydrates.
	// loading="lazy" keeps the 2.7 MB model from downloading until the viewer scrolls into view.
	let ready = $state(false)

	$effect(() => {
		import('@google/model-viewer').then(() => (ready = true))
	})
</script>

<div class="relative h-full w-full">
	{#if ready}
		<model-viewer
			src="/efoil.glb"
			alt="3D model of Derek's eFoil V2 board and hydrofoil"
			camera-controls
			disable-zoom
			auto-rotate
			auto-rotate-delay="0"
			rotation-per-second="18deg"
			camera-orbit="-40deg 68deg auto"
			field-of-view="28deg"
			shadow-intensity="1"
			environment-image="neutral"
			exposure="1.1"
			interaction-prompt="auto"
			touch-action="pan-y"
			loading="lazy"
			style="width: 100%; height: 100%; background: transparent;">
		</model-viewer>
	{:else}
		<div class="flex h-full items-center justify-center font-mono text-sm text-zinc-500">Loading 3D model…</div>
	{/if}
</div>
