<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	let scrollY: number;
	let hideSmokey = true;
	let goingUp = false;
	let lastScroll = 0;
	$: {
		if (scrollY < lastScroll) {
			goingUp = false;
		} else {
			goingUp = true;
		}
		lastScroll = scrollY;
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let fromLefts = gsap.utils.toArray('#fromLeft');
		fromLefts.forEach((fromLeft) => {
			gsap.fromTo(
				// @ts-ignore
				fromLeft,
				{
					x: '110%'
				},
				{
					x: '0%',
					scrollTrigger: {
						trigger: fromLeft,
						scrub: 1,
						start: 'top 95%',
						end: 'bottom 95%'
					}
				}
			);
		});
	});
</script>

<svelte:head>
	<meta name="description" content="Hi, my name is Derek Hearst. I'm a full stack web developer with passion for learning new technologies. This site contains some of the projects I've created." />
	<meta name="keywords" content="Svelte, Portfolio, Derek, Derek Hearst, Web Developer, Software Developer" />
	<meta name="author" content="Derek Hearst" />
	<title>Derek Hearst</title>
</svelte:head>
<svelte:window bind:scrollY />

<header class="bg-zinc-900 text-lime-400 sm:py-5 sm:flex-row md:justify-start sticky top-0 z-10 flex flex-col flex-wrap items-center justify-center gap-6 p-3 py-3 font-mono text-3xl text-center transition-all duration-300 ease-in-out" class:goingUp>
	<h1 class="sm:text-6xl font-bold">Derek Hearst</h1>
	<nav class="md:text-2xl flex flex-wrap items-center justify-center gap-6 text-lg text-white underline">
		<a href="#projects">Projects</a>
		<a href="https://github.com/derekhearst" target="_blank" rel="noreferrer">GitHub</a>
		<a href="https://www.linkedin.com/in/derekhearst/" target="_blank" rel="noreferrer">LinkedIn</a>
	</nav>
</header>

<body class="md:flex-row min-h-96 niceBg border-t-lime-400 -mb-36 md:mb-0 flex flex-col items-center justify-center gap-2 p-3 py-10 text-white bg-gray-800">
	<div class="flex flex-col items-center gap-4">
		<h2 class="text-4xl">Hi, I'm <span class="text-lime-400 font-mono">Derek Hearst</span></h2>
		<h3 class="text-3xl italic">Full Stack Web Developer</h3>
		<p class="text-xl">A software developer with a passion for learning and creating.</p>
	</div>
	<img src="/profile.jpg" alt="Derek Hearst" class="border-lime-400 w-52 border-2 rounded-full" />
</body>

<body id="aboutme" class="bg-zinc-900 py-9 md:pt-4 flex flex-col items-center gap-10 p-4 pt-32 text-white">
	<h3 class="font-mono text-5xl font-bold">About me</h3>
	<div class="flex flex-col max-w-5xl gap-8 text-xl">
		<p>My interest in development started with creating game addons and maps for Garrys Mod. Learning Lua for game modding led me to taking software development courses in high school, then computer science in college. My passion for development really took off when I created tools for my coworkers while working at HP, and I decided to take a web development course at Boise CodeWorks.</p>
		<p>I love my cat <span class="font-bold underline underline-offset-4 cursor-pointer select-none" on:keydown={() => (hideSmokey = !hideSmokey)} on:click={() => (hideSmokey = !hideSmokey)}>Smokey</span> who I rescued off the street as a kitten, ping pong, video games, and science fiction.</p>
		<img src="/smokey.jpg" title="My cat Smokey" hidden={hideSmokey} class="w-1/2 h-auto self-center" alt="my cat smokey" />
		<p>I created custom content for an online gaming community called Chrono Gaming, which I owned and operated. I plan on recreating this server when the game <a href="https://sbox.facepunch.com/news" class="underline cursor-pointer" target="_blank" rel="noreferrer">S&Box</a> comes out of alpha.</p>
	</div>

	<p class="text-white/70 text-xl">My front-end technologies include JavaScript, TypeScript, Svelte, Vue, Tailwind CSS, and Bootstrap.</p>
	<div class="flex flex-wrap items-center justify-center w-full gap-5">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="javascript" width="80" />
		<img src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg" width="80" alt="typescript" />
		<img src="https://cdn.cdnlogo.com/logos/s/6/svelte.svg" alt="svelte" width="80" />
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="vue" width="80" />
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="tailwind css" width="80" />
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="bootstrap" width="80" />
	</div>

	<p class="text-white/70 text-xl">My back-end technologies includes Node.js, Express, MongoDB, SQL, C#, and ASP.NET .</p>
	<div class="flex flex-wrap items-center justify-center w-full gap-5">
		<img src="https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg" width="80" alt="nodejs" />
		<img src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" width="80" alt="mongodb" />
		<img src="https://cdn.cdnlogo.com/logos/m/78/mysql.svg" width="80" alt="mysql " />
		<img src="https://cdn.cdnlogo.com/logos/c/27/c.svg" width="80" alt="c sharp" />
	</div>
</body>

<body id="projects" class="min-h-96 border-lime-500 flex flex-col items-center gap-8 p-3 pt-8 overflow-hidden text-white bg-gray-900">
	<h2 class="font-mono text-5xl font-bold">Projects</h2>
	<article id="fromLeft" class="bg-slate-800 border-lime-400 flex flex-col w-full max-w-6xl gap-4 p-4">
		<div class="sm:justify-start flex flex-wrap items-center justify-center gap-4">
			<img src="/Keeprlogo.png" class="h-20 invert" alt="keepr" />
			<a href="https://keepr.derekhearst.com" target="_blank" class="text-3xl underline" rel="noreferrer">Keepr 🔗</a>
		</div>
		<p class="text-xl">Keepr is a Pinterest clone designed to be an example of serverless DB connections, and strongly typed prisma queries</p>
		<p class="text-lime-400 sp font-mono">-Svelte -TailwindCSS -SvelteKit -Prisma -Prisma Data Proxy -MongoDB -TypeScript -API's</p>
	</article>

	<article id="fromLeft" class="bg-slate-800 border-lime-400 flex flex-col w-full max-w-6xl gap-4 p-4">
		<div class="sm:justify-start flex flex-wrap items-center justify-center gap-4">
			<img src="https://movieknight.uk/assets/logo.d36755ad.png" class="w-36" alt="movie knight" />
			<a href="https://movieknight.uk" target="_blank" class="text-3xl underline" rel="noreferrer">Movie Knight 🔗</a>
		</div>
		<p class="text-xl">The movie knight platform enables users are able to browse through a selection of popular and classic films, select a movie to watch at a specific date and time, and invite their friends to join them. They are also be able to create watch lists of movies they want to see and share these lists with their friends, allowing them to easily plan future movie nights and discover new films to watch together.</p>
		<p class="text-lime-400 sp font-mono">-Vue -Express.js -MongoDB -Mongoose -Cloudflare Pages</p>
	</article>

	<article id="fromLeft" class="bg-slate-800 border-lime-400 flex flex-col w-full max-w-6xl gap-4 p-4">
		<div class="sm:justify-start flex flex-wrap items-center justify-center gap-4">
			<img src="/printtool.ico" class="w-auto" alt="movie knight" />
			<a href="https://github.com/derekhearst/printtool" target="_blank" class="text-3xl underline" rel="noreferrer">Print Tool 🔗 </a>
		</div>
		<p class="text-xl">PrintTool is an automated testing and printer management tool I designed while working at HP. It allows for complex logging of printer operations, runtime generated print jobs, and automatic firmware upgrading. It can communicate over serial connections, WebSockets, and telnet</p>
		<p class="text-lime-400 sp font-mono">-C# -WPF -WebSockets -Serial Connections -IPP -Web Scraping</p>
	</article>

	<article id="fromLeft" class="bg-slate-800 border-lime-400 flex flex-col w-full max-w-6xl gap-4 p-4">
		<div class="sm:justify-start flex flex-wrap items-center justify-center gap-4">
			<img src="/LogotowerLogo.png" class="w-36" alt="movie knight" />
			<a href="https://tower.derekhearst.com" target="_blank" class="text-3xl underline" rel="noreferrer">Tower 🔗</a>
		</div>
		<p class="text-xl">Tower is a event sharing and creation platform, deigned to quickly create social gatherings of all scale.</p>
		<p class="text-lime-400 sp font-mono">-Vue -Express.js -MongoDB -Bootstrap -Auth0</p>
	</article>

	<article id="fromLeft" class="bg-slate-800 border-lime-400 flex flex-col w-full max-w-6xl gap-4 p-4">
		<div class="sm:justify-start flex flex-wrap items-center justify-center gap-4">
			<img src="/inspire.png" class="h-14" alt="inspire" />
			<a href="https://inspire.derekhearst.com" target="_blank" class="text-3xl underline" rel="noreferrer">Inspire 🔗</a>
		</div>
		<p class="text-xl">Inspire is an expanded upon todo-list that fetches from multiple apis to include, weather, time, to-dos, quotes, and a random background image.</p>
		<p class="text-lime-400 sp font-mono">-Svelte -TailwindCSS -Vite -API's</p>
	</article>
</body>

<footer class="bg-zinc-900 flex flex-col items-center justify-center gap-6 p-3 py-5 text-white">
	<p class="text-xl">Made with SvelteKit and Tailwind CSS</p>
	<p class="text-xl">© 2023 Derek Hearst</p>
</footer>

<style>
	.niceBg {
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-color: rgba(0, 0, 0, 0.46);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		background-blend-mode: color;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	.goingUp {
		top: -180px;
	}
	@media (max-width: 768px) {
		.goingUp {
			top: -400px;
		}
	}
</style>
