<script lang="ts">
	import '../app.css'
	import { startRegistration } from '@simplewebauthn/browser'
	import gsap from 'gsap'
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
	import { onMount } from 'svelte'
	export let data
	let scrollY: number
	let goingUp = false
	let lastScroll = 0
	$: {
		if (scrollY < lastScroll) {
			goingUp = false
		} else {
			goingUp = true
		}
		lastScroll = scrollY
	}
	onMount(() => {
		console.log('mounted')
		gsap.registerPlugin(ScrollTrigger)
		let fromLefts = gsap.utils.toArray('#fromLeft')
		fromLefts.forEach((fromLeft) => {
			gsap.fromTo(
				// @ts-ignore
				fromLeft,
				{
					x: '110%',
				},
				{
					x: '0%',
					scrollTrigger: {
						trigger: fromLeft,
						scrub: 1,
						start: 'top 95%',
						end: 'bottom 95%',
					},
				},
			)
		})
	})

	async function tryLogin() {
		const genOptions = await fetch('/api/auth/generate')
		try {
			const res = await startRegistration(await genOptions.json())
			console.log(res)
		} catch {
			console.log('error')
		}
	}

	let dialogEl: HTMLDialogElement
</script>

<svelte:window bind:scrollY />
<header
	class="sticky top-0 z-10 flex flex-col items-center justify-center gap-4 bg-zinc-900 p-3 font-mono text-white transition-all duration-300 ease-in-out md:flex-row md:justify-start"
	class:goingUp>
	<h1 class="text-3xl font-bold text-lime-400 sm:text-6xl">Derek Hearst</h1>
	<nav class="flex items-center gap-4 underline md:text-2xl">
		<a href="#projects">Projects</a>
		<a href="https://github.com/derekhearst" target="_blank" rel="noreferrer">GitHub</a>
	</nav>
	<nav class="ml-auto">
		<button class="cursor-pointer" on:click={tryLogin}> Login </button>
	</nav>
</header>

<slot />

<!-- <dialog class="dialog" bind:this={dialogEl}><div>AGH</div></dialog> -->

<style>
	.goingUp {
		top: -180px;
	}
	@media (max-width: 768px) {
		.goingUp {
			top: -400px;
		}
	}
</style>
