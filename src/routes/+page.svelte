<script>
	import { Divider } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<meta name="description" content="Derek Hearst's personal portfolio" />
	<meta
		name="keywords"
		content="HTML, CSS, JavaScript, Derek Hearst, Derek, Hearst, Developer, Software Developer"
	/>
	<meta name="author" content="Derek Hearst" />
	<title>Derek Hearst</title>
</svelte:head>

<div class="h-full mx-auto flex flex-col px-3 mt-10  md:px-60 font-thin">
	<header class="text-center mb-10	">
		<h2 class="font-bold text-primary-500 text-8xl">Derek Hearst</h2>
		<a href="https://github.com/derekhearst">Github</a>
		<a href="/projects">Projects</a>
		<Divider borderStyle="border-double" borderWidth="border-3" />
	</header>

	<article class="flex flex-col gap-4">
		<h2 class="text-center">
			Hello I'm Derek, software developer by day, and sometimes by night too.
		</h2>
		<div class="flex flex-col gap-4 px-10">
			<h4 class="text-center">Here are some things about me you might find interesting.</h4>
			<ul class="list-disc">
				<li>I lived on a boat for three years</li>
				<li>Owner of ChronoGaming, a garry's mod server i ran and developed</li>
				<li>Software Developer / Sysadmin</li>
				<li>Currently studying at Boise CodeWorks</li>
				<li>Great at focusing at one task and forgetting about the world outside.</li>
			</ul>
		</div>
	</article>
</div>
