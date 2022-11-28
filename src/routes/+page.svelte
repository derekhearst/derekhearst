<script>
</script>

<svelte:head>
	<title>Derek Hearst</title>
	<meta name="description" content="Derek Hearst's portfolio" />
</svelte:head>

<main>
	<header>
		<h1>Derek Hearst</h1>
		<a href="https://www.github.com/derekhearst">GitHub</a>
		<hr />
	</header>

	<article class="mt-10 flex flex-col gap-4">
		<h2 class="text-3xl text-center">
			Hello I'm Derek, software developer by day, and sometimes by night too.
		</h2>
		<p class="text-center">Here are some things about me you might find interesting.</p>
		<ul>
			<li>I lived on a boat for three years</li>
			<li>Owner of ChronoGaming, a garry's mod server i ran and developed</li>
			<li>Software Developer / Sysadmin</li>
			<li>Currently studying at Boise CodeWorks</li>
			<li>Great at focusing at one task and forgetting about the world outside.</li>
		</ul>
	</article>

	<article>
		<h2>Projects</h2>
	</article>
</main>

<style>
	main {
		@apply flex flex-col items-center text-white p-10 min-h-screen;
		background-color: #181818;
		font-family: 'PT Mono', monospace;
	}
	header {
		@apply w-full flex flex-col gap-1;
	}
	h1 {
		@apply text-lime-400 font-bold text-center pb-10;
		font-size: 5rem;
	}
	ul {
		list-style-type: disc;
	}
	a {
		@apply text-lime-200 italic underline text-base;
	}
</style>
