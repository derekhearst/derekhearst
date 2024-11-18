<script lang="ts">
	let hideSmokey = true
</script>

<svelte:head>
	<meta
		name="description"
		content="Hi, my name is Derek Hearst. I'm a full stack web developer with a love for Svelte. This site contains some of the projects I've created." />
	<meta name="keywords" content="Svelte, Portfolio, Derek, Derek Hearst, Web Developer, Software Developer" />
	<meta name="author" content="Derek Hearst" />
	<title>Derek Hearst</title>
</svelte:head>

<body
	class="niceBg -mb-36 flex min-h-96 flex-col items-center justify-center gap-2 border-t-lime-400 bg-gray-800 p-3 py-10 text-white md:mb-0 md:flex-row">
	<div class="flex flex-col items-center gap-4">
		<h2 class="text-4xl">Hi, I'm <span class="font-mono text-lime-400">Derek Hearst</span></h2>
		<h3 class="text-3xl italic">Full Stack Web Developer</h3>
		<p class="text-xl">A software developer with a love for Svelte and WebDev</p>
		<p>
			You can contact me a:
			<a class="underline underline-offset-2" href="mailto:derekallenhearst@gmail.com"> derekallenhearst@gmail.com </a>
		</p>
	</div>
	<img src="/derek.jpg" alt="Derek Hearst" class="w-52 rounded-full border-2 border-lime-400" />
</body>

<body id="aboutme" class="flex flex-col items-center gap-10 bg-zinc-900 p-4 py-9 pt-32 text-white md:pt-4">
	<h3 class="font-mono text-5xl font-bold">About me</h3>
	<div class="flex max-w-5xl flex-col gap-8 text-xl">
		<p>
			My interest in development started with creating game addons and maps for Garrys Mod. Learning Lua for game
			modding led me to taking software development courses in high school, then computer science in college. My passion
			for development really took off when I created tools for my coworkers while working at HP, and I decided to take a
			web development course at Boise CodeWorks.
		</p>
		<p>
			I love my cat <button
				class="cursor-pointer select-none font-bold underline underline-offset-4"
				on:keydown={() => (hideSmokey = !hideSmokey)}
				on:click={() => (hideSmokey = !hideSmokey)}>Smokey</button> who I rescued off the street as a kitten, ping pong,
			video games, and science fiction.
		</p>
		<img
			src="/smokey.webp"
			loading="lazy"
			title="My cat Smokey"
			hidden={hideSmokey}
			class="h-auto w-1/2 self-center"
			alt="my cat smokey" />
		<p>
			I created custom content for an online gaming community called Chrono Gaming, which I owned and operated. I plan
			on recreating this server when the game <a
				href="https://sbox.facepunch.com/news"
				class="cursor-pointer underline"
				target="_blank"
				rel="noreferrer">S&Box</a> comes out of alpha.
		</p>
	</div>

	<p class="text-xl text-white/70">
		My front-end technologies include JavaScript, TypeScript, Svelte, Vue, Tailwind CSS, and Bootstrap.
	</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-5">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
			alt="javascript"
			width="80" />
		<img src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg" width="80" alt="typescript" />
		<img src="https://cdn.cdnlogo.com/logos/s/6/svelte.svg" alt="svelte" width="80" />
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
			alt="vue"
			width="80" />
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
			alt="tailwind css"
			width="80" />
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
			alt="bootstrap"
			width="80" />
	</div>

	<p class="text-xl text-white/70">
		My back-end technologies includes Node.js, Express, MongoDB, SQL, C#, and ASP.NET .
	</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-5">
		<img src="https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg" width="80" alt="nodejs" />
		<img src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" width="80" alt="mongodb" />
		<img src="https://cdn.cdnlogo.com/logos/m/78/mysql.svg" width="80" alt="mysql " />
		<img src="https://cdn.cdnlogo.com/logos/c/27/c.svg" width="80" alt="c sharp" />
	</div>
</body>

<body
	id="projects"
	class="flex min-h-96 flex-col items-center gap-8 overflow-hidden border-lime-500 bg-gray-900 p-3 pt-8 text-white">
	<h2 class="font-mono text-5xl font-bold">Projects</h2>
	<article id="fromLeft" class="flex w-full max-w-6xl flex-col gap-4 border-lime-400 bg-slate-800 p-4">
		<div class="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
			<img src="/Keeprlogo.webp" loading="lazy" class="h-20 invert" alt="keepr" />
			<a href="https://keepr.derekhearst.com" target="_blank" class="text-3xl underline" rel="noreferrer">Keepr 🔗</a>
		</div>
		<p class="text-xl">
			Keepr is a Pinterest clone designed to be an example of serverless DB connections, and strongly typed prisma
			queries
		</p>
		<p class="sp font-mono text-lime-400">
			-Svelte -TailwindCSS -SvelteKit -Prisma -Prisma Data Proxy -MongoDB -TypeScript -API's
		</p>
	</article>

	<article id="fromLeft" class="flex w-full max-w-6xl flex-col gap-4 border-lime-400 bg-slate-800 p-4">
		<div class="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
			<img src="/logo.webp" class="w-36" loading="lazy" alt="movie knight" />
			<a href="https://movieknight.uk" target="_blank" class="text-3xl underline" rel="noreferrer">Movie Knight 🔗</a>
		</div>
		<p class="text-xl">
			The movie knight platform enables users are able to browse through a selection of popular and classic films,
			select a movie to watch at a specific date and time, and invite their friends to join them. They are also be able
			to create watch lists of movies they want to see and share these lists with their friends, allowing them to easily
			plan future movie nights and discover new films to watch together.
		</p>
		<p class="sp font-mono text-lime-400">-Vue -Express.js -MongoDB -Mongoose -Cloudflare Pages</p>
	</article>

	<article id="fromLeft" class="flex w-full max-w-6xl flex-col gap-4 border-lime-400 bg-slate-800 p-4">
		<div class="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
			<img src="/printtool.ico" loading="lazy" class="w-auto" alt="movie knight" />
			<a href="https://github.com/derekhearst/printtool" target="_blank" class="text-3xl underline" rel="noreferrer"
				>Print Tool 🔗
			</a>
		</div>
		<p class="text-xl">
			PrintTool is an automated testing and printer management tool I designed while working at HP. It allows for
			complex logging of printer operations, runtime generated print jobs, and automatic firmware upgrading. It can
			communicate over serial connections, WebSockets, and telnet
		</p>
		<p class="sp font-mono text-lime-400">-C# -WPF -WebSockets -Serial Connections -IPP -Web Scraping</p>
	</article>

	<article id="fromLeft" class="flex w-full max-w-6xl flex-col gap-4 border-lime-400 bg-slate-800 p-4">
		<div class="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
			<img src="/LogotowerLogo.webp" loading="lazy" class="w-36" alt="movie knight" />
			<a href="https://tower.derekhearst.com" target="_blank" class="text-3xl underline" rel="noreferrer">Tower 🔗</a>
		</div>
		<p class="text-xl">
			Tower is a event sharing and creation platform, deigned to quickly create social gatherings of all scale.
		</p>
		<p class="sp font-mono text-lime-400">-Vue -Express.js -MongoDB -Bootstrap -Auth0</p>
	</article>

	<article id="fromLeft" class="flex w-full max-w-6xl flex-col gap-4 border-lime-400 bg-slate-800 p-4">
		<div class="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
			<img src="/inspire.webp" loading="lazy" class="h-14" alt="inspire" />
			<a href="https://inspire.derekhearst.com" target="_blank" class="text-3xl underline" rel="noreferrer"
				>Inspire 🔗</a>
		</div>
		<p class="text-xl">
			Inspire is an expanded upon todo-list that fetches from multiple apis to include, weather, time, to-dos, quotes,
			and a random background image.
		</p>
		<p class="sp font-mono text-lime-400">-Svelte -TailwindCSS -Vite -API's</p>
	</article>
</body>

<footer class="flex flex-col items-center justify-center gap-6 bg-zinc-900 p-3 py-5 text-white">
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
</style>
