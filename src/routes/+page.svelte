<script>
	import ProfilePic from '$lib/images/profile.jpg';
</script>

<svelte:head>
	<meta name="description" content="Derek Hearst's personal portfolio page" />
	<meta name="keywords" content="Svelte, Portfolio, Derek, Derek Hearst, Web Developer, Software Developer" />
	<meta name="author" content="Derek Hearst" />
	<title>Derek Hearst</title>
</svelte:head>

<header class="flex flex-col flex-wrap items-center justify-center gap-6 p-3 py-3 font-mono text-3xl text-center bg-zinc-900 text-lime-400 sm:py-5 sm:flex-row sm:justify-start ">
	<h1 class="text-6xl font-bold">Derek Hearst</h1>
	<nav class="flex flex-wrap items-center justify-center gap-6 text-white underline">
		<a href="/">Home</a>
		<a href="#aboutme">About</a>
		<a href="#projects">Projects</a>
		<a href="https://github.com/derekhearst" target="_blank" rel="noreferrer">GitHub</a>
		<a href="https://www.linkedin.com/in/derekhearst/" target="_blank" rel="noreferrer">LinkedIn</a>
	</nav>
	<img src={ProfilePic} alt="Derek Hearst" class="block rounded-full w-52 -mb-28 sm:mb-0 sm:ml-auto sm:hidden" />
</header>

<body class="flex items-center justify-center gap-2 p-3 py-10 text-white bg-gray-800 min-h-96 niceBg border-t-lime-400 pt-28 sm:pt-10">
	<div class="flex flex-col items-center gap-4">
		<h2 class="text-4xl">Hi, I'm <span class="font-mono text-lime-400">Derek Hearst</span></h2>
		<h3 class="text-3xl italic">Full Stack Web Developer</h3>
		<p class="text-xl">A software developer with a passion for learning and creating.</p>
	</div>
	<img src={ProfilePic} alt="Derek Hearst" class="hidden border-2 rounded-full border-lime-400 w-52 -mb-28 sm:mb-0 sm:block" />
</body>

<body id="aboutme" class="flex flex-col items-center gap-10 p-4 text-white bg-zinc-900 py-9 ">
	<h3 class="font-mono text-5xl font-bold">About me</h3>
	<div class="flex flex-col max-w-5xl gap-8 text-xl">
		<p>My interest in development started with game modding with Lua, leading me to web development and full stack development. I enjoy learning new technologies and creating projects with them.</p>
		<p>In the past I owned and operated ChronoGaming, a online gaming community with servers that I created custom content for.</p>
	</div>

	<p class="text-xl text-white/70">My frontend technologies include JavaScript, TypeScript, Svelte, Vue, Tailwind CSS, and Bootstrap.</p>
	<div class="flex flex-wrap items-center justify-center w-full gap-5">
		<a href="https://github.com/derekhearst">
			<img src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg" width="80" alt="typescript" />
		</a>

		<a href="https://github.com/derekhearst">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="javascript" width="80" />
		</a>
		<a href="https://github.com/derekhearst">
			<img src="https://cdn.cdnlogo.com/logos/s/6/svelte.svg" alt="svelte" width="80" />
		</a>
		<a href="https://github.com/derekhearst">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="vue" width="80" />
		</a>

		<a href="https://github.com/derekhearst">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="tailwin" width="80" />
		</a>

		<a href="https://github.com/derekhearst">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="bootstrap" width="80" />
		</a>
	</div>

	<p class="text-xl text-white/70">My backend technologies includes Node.js, Express, MongoDB, SQL, C#, and ASP.NET .</p>
	<div class="flex flex-wrap items-center justify-center w-full gap-5">
		<img src="https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg" width="80" alt="nodejs" />
		<img src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" width="80" alt="mongodb" />
		<img src="https://cdn.cdnlogo.com/logos/m/78/mysql.svg" width="80" alt="mysql " />
		<img src="https://cdn.cdnlogo.com/logos/c/27/c.svg" width="80" alt="c sharp" />
	</div>
</body>

<body id="projects" class="flex flex-col items-center gap-4 p-3 pt-8 text-white bg-gray-900 min-h-96 border-lime-500">
	<h2 class="font-mono text-5xl font-bold">Projects</h2>
	<article class="flex flex-col max-w-6xl gap-4 p-4 border-2 items border-lime-400">
		<div class="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
			<img src="https://movieknight.uk/assets/logo.d36755ad.png" class="w-36" alt="movie knight" />
			<h3 class="font-mono text-4xl">Movie Knight</h3>
			<a href="https://movieknight.uk" target="_blank" class="text-xl underline text-lime-400" rel="noreferrer">https://movieknight.uk</a>
		</div>
		<p class="text-xl">The movie knight platform enables users are able to browse through a selection of popular and classic films, select a movie to watch at a specific date and time, and invite their friends to join them. They are also be able to create watch lists of movies they want to see and share these lists with their friends, allowing them to easily plan future movie nights and discover new films to watch together.</p>
	</article>

	<article />
</body>

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
