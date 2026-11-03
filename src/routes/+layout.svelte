<script lang="ts">
	import '../app.css'
	import Icon from '#lib/Icon.svelte'

	let { children } = $props()

	const links = [
		{ href: '#work', label: 'Work' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#about', label: 'About' },
	]
</script>

<header class="sticky top-0 z-20 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
	<nav class="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
		<a href="#top" class="font-mono text-lg font-semibold text-white">
			derek<span class="text-accent">hearst</span>
		</a>
		<ul class="ml-auto hidden items-center gap-6 text-sm md:flex">
			{#each links as link (link.href)}
				<li><a href={link.href} class="transition hover:text-white">{link.label}</a></li>
			{/each}
		</ul>
		<a
			href="/Derek_Hearst_Resume.pdf"
			class="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition hover:bg-accent hover:text-zinc-950 md:ml-0">
			<Icon name="file" class="size-4" />Resume
		</a>
	</nav>
</header>

{@render children()}
