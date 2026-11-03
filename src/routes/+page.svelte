<script lang="ts">
	import Icon from '#lib/Icon.svelte'
	import EfoilModel from '#lib/EfoilModel.svelte'
	import GithubActivity from '#lib/GithubActivity.svelte'

	let showSmokey = $state(false)

	const aiStats = [
		{ value: '2,700+', label: 'commits on my own projects since August, about 90% written with Claude' },
		{ value: '6 weeks', label: 'to 2,400 commits on a co-op VR game, from the very first one' },
		{ value: '3×', label: 'my monthly output at work after adopting Claude Code' },
	]

	const efoilThread =
		'https://foil.zone/t/dereks-first-efoil-build-65161-75200-gong-v2-14s9p-diy-from-boise/26247'

	const efoilFacts = [
		{ label: 'Board', value: 'Hand-built foam and fiberglass, 1.6 m' },
		{ label: 'Battery', value: '2.3 kWh lithium pack I welded myself' },
		{ label: 'Drive', value: 'VESC motor controller and a 3D-printed prop' },
		{ label: 'Takeoff', value: '4.2 kW measured from ride logs' },
	]

	type Project = { name: string; tagline: string; body: string; tags: string[]; href?: string; status?: string }
	const projects: Project[] = [
		{
			name: 'The Merrow Deep',
			tagline: 'Co-op VR submarine game',
			body: 'A 1–4 player co-op VR game in Godot 4 for PCVR. You crew a diesel-electric submarine, hunt convoys and dodge destroyers, and in crew-versus-crew matches each team sees only its own sonar. About 2,400 commits since September, mostly written with Claude agents.',
			tags: ['Godot 4', 'GDScript', 'OpenXR', 'Multiplayer'],
			status: 'In development',
		},
		{
			name: 'FoundryAI',
			tagline: 'AI game-master assistant for Foundry VTT',
			body: 'An open-source module for running tabletop games: streaming chat that knows your game world, 40+ AI tools for tokens, combat, dice and audio, NPC roleplay and session recaps.',
			tags: ['TypeScript', 'Svelte', 'RAG', 'OpenRouter'],
			href: 'https://github.com/derekhearst/FoundryAI',
		},
		{
			name: 'agent-runner',
			tagline: 'Issue-to-PR coding agents',
			body: 'Label a GitHub issue and a Claude agent works it on my home server and opens a pull request, with budget caps, session recovery and every outcome reported back on the issue.',
			tags: ['Claude Agents', 'Docker', 'GitHub'],
			href: 'https://github.com/derekhearst/agent-runner',
		},
		{
			name: 'SimpleSvelte',
			tagline: 'UI component library',
			body: 'The component library behind the internal apps I build at work. 141 releases on npm, used by 6 apps.',
			tags: ['Svelte 5', 'Tailwind CSS', 'npm'],
			href: 'https://github.com/derekhearst/SimpleSvelte',
		},
	]

	const highlights = [
		{ value: '2,500+', label: 'employees a month use the self-service portal I built' },
		{ value: '250K+', label: 'requests a month to the data API behind every internal app' },
		{ value: '5', label: 'production apps built from scratch, from payroll to job-site safety' },
	]

	const experience = [
		{ role: 'Lead Web Developer', org: 'Brown & Root Industrial Services', when: '2025 – Present' },
		{ role: 'Full-Stack Web Developer', org: 'Brown & Root Industrial Services', when: '2023 – 2025' },
		{ role: 'Full-Stack Web Development Certificate', org: 'Boise CodeWorks', when: '2022 – 2023' },
		{ role: 'Software Engineer', org: 'HP', when: '2021 – 2022' },
	]
</script>

<svelte:head>
	<title>Derek Hearst</title>
	<meta
		name="description"
		content="Derek Hearst is a developer and maker in Boise, Idaho who builds whatever he wants: software, an electric hydrofoil, a VR game and AI agents, with AI multiplying his output." />
	<meta property="og:title" content="Derek Hearst" />
	<meta property="og:description" content="I build whatever I want: software, an electric hydrofoil, a VR game, and a home server full of AI agents." />
	<meta property="og:image" content="https://derekhearst.com/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:url" content="https://derekhearst.com" />
	<meta name="author" content="Derek Hearst" />
</svelte:head>

<main id="top">
	<!-- Hero -->
	<section class="relative overflow-hidden">
		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,--theme(--color-accent/0.12),transparent_60%)]">
		</div>
		<div class="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:py-24">
			<div class="flex flex-col gap-6">
				<p class="flex items-center gap-2 font-mono text-sm text-accent">
					<Icon name="pin" class="size-4" />Boise, Idaho · Developer · Maker
				</p>
				<h1 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
					Hi, I’m Derek. <span class="block text-accent">I build whatever I want.</span>
				</h1>
				<p class="max-w-2xl text-xl text-pretty">
					If I want something to exist, I figure out how to make it: software, an electric hydrofoil, a VR game, a home
					server full of AI agents. AI is the best tool I’ve ever had for it, because it lets one person build like a
					whole team.
				</p>
				<div class="flex flex-wrap gap-3">
					<a
						href="mailto:derekallenhearst@gmail.com"
						class="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-zinc-950 transition hover:brightness-110">
						<Icon name="mail" class="size-4" />Say hi
					</a>
					<a
						href="https://github.com/derekhearst"
						class="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40">
						<Icon name="github" class="size-4" />GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/derekhearst/"
						class="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40">
						<Icon name="linkedin" class="size-4" />LinkedIn
					</a>
				</div>
			</div>
			<img
				src="/derek.webp"
				alt="Derek Hearst"
				width="288"
				height="288"
				class="size-48 justify-self-center rounded-3xl object-cover ring-1 ring-white/10 sm:size-64 md:size-72" />
		</div>
	</section>

	<!-- About -->
	<section id="about" class="border-t border-white/5 bg-zinc-900/30">
		<div class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">About me</h2>
			<div class="mt-6 flex flex-col gap-5 text-lg leading-relaxed">
				<p>
					I got into programming by making addons and maps for Garry’s Mod in Lua. That led to software classes in high
					school, computer science in college, and building tools for my coworkers at HP, which is when I realized I
					wanted to do this full time. Boise CodeWorks turned that into a career in web development.
				</p>
				<p>
					My rule is simple: if I want something and it doesn’t exist, or costs too much, I build it. That’s how I ended
					up shaping and glassing my own eFoil with zero foiling experience, welding its battery pack, and designing the
					next version as code that draws its own CNC plans. I rarely know how to do the thing when I start. I figure it
					out on the way, with a keyboard, a 3D printer or a sheet of fiberglass.
				</p>
				<p>
					When I’m not building, I’m out on the water at Lucky Peak, playing ping pong or video games, reading science
					fiction, or hanging out with my cat
					<button
						type="button"
						class="cursor-pointer font-semibold text-white underline decoration-accent underline-offset-4"
						aria-expanded={showSmokey}
						onclick={() => (showSmokey = !showSmokey)}>Smokey</button
					>, who I rescued off the street as a kitten.
				</p>
				{#if showSmokey}
					<img
						src="/smokey.webp"
						alt="My cat Smokey"
						loading="lazy"
						class="w-full max-w-md self-center rounded-2xl ring-1 ring-white/10" />
				{/if}
				<figure class="mt-4 flex flex-col gap-3">
					<img
						src="/efoil.webp"
						alt="Derek and his dad carrying his homebuilt eFoil down a boat ramp"
						width="692"
						height="919"
						loading="lazy"
						class="aspect-[4/3] w-full rounded-2xl object-cover object-bottom ring-1 ring-white/10" />
					<figcaption class="text-center text-sm text-zinc-500">
						Carrying the eFoil down to the water at Lucky Peak with my dad.
					</figcaption>
				</figure>
			</div>
		</div>
	</section>

	<!-- AI -->
	<section id="ai" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
		<h2 class="font-mono text-sm tracking-widest text-accent uppercase">Building with AI</h2>
		<p class="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-white">
			AI turned my side projects from someday into this weekend.
		</p>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed">
			I love AI because it multiplies what one person can make. I decide what to build, set the direction, and review
			and test everything. Claude agents do a lot of the typing, often on my home server while I’m doing something
			else. It means I can chase every idea instead of picking one.
		</p>
		<dl class="mt-10 grid gap-4 sm:grid-cols-3">
			{#each aiStats as stat (stat.label)}
				<div class="rounded-2xl border border-white/5 bg-zinc-900/60 p-6">
					<dt class="sr-only">{stat.label}</dt>
					<dd class="font-mono text-3xl font-semibold text-white">{stat.value}</dd>
					<dd class="mt-2 text-sm leading-relaxed text-zinc-400">{stat.label}</dd>
				</div>
			{/each}
		</dl>
		<div class="mt-4">
			<GithubActivity />
		</div>
	</section>

	<!-- eFoil -->
	<section id="efoil" class="border-t border-white/5">
		<div class="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[2fr_3fr]">
			<figure class="flex flex-col gap-3">
				<video
					src="/efoil-ride.mp4"
					poster="/efoil-ride.webp"
					width="540"
					height="674"
					autoplay
					muted
					loop
					playsinline
					preload="metadata"
					aria-label="Derek riding his homebuilt eFoil above the water"
					class="aspect-[4/5] w-full rounded-2xl object-cover ring-1 ring-white/10"></video>
				<figcaption class="text-center text-sm text-zinc-500">V1 flying at Lucky Peak.</figcaption>
			</figure>
			<div class="flex flex-col gap-5">
				<h2 class="font-mono text-sm tracking-widest text-accent uppercase">The eFoil</h2>
				<p class="text-3xl font-semibold tracking-tight text-white">I built my own electric hydrofoil.</p>
				<p class="leading-relaxed">
					An eFoil is a surfboard with an electric motor on a hydrofoil wing, so it lifts off the water and flies a
					couple of feet above it. I started with zero foiling experience and only hand tools. I shaped and glassed the
					board, welded the battery pack, printed the propeller, and tuned the motor controller from my own ride logs.
				</p>
				<dl class="grid gap-3 sm:grid-cols-2">
					{#each efoilFacts as fact (fact.label)}
						<div class="rounded-xl border border-white/5 bg-zinc-900/60 p-4">
							<dt class="font-mono text-xs text-zinc-500 uppercase">{fact.label}</dt>
							<dd class="mt-1 text-sm text-white">{fact.value}</dd>
						</div>
					{/each}
				</dl>
				<p class="leading-relaxed">
					I logged the whole build on foil.zone, the DIY eFoil forum, where experienced builders helped shape it, and
					kept detailed build notes along the way.
				</p>
				<div class="flex flex-wrap gap-3">
					<a
						href={efoilThread}
						class="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-zinc-950 transition hover:brightness-110">
						Read the build log <Icon name="external" class="size-4" />
					</a>
					<a
						href="https://github.com/derekhearst/efoil-v2/tree/main/docs/v1"
						class="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40">
						<Icon name="file" class="size-4" />V1 build notes
					</a>
				</div>
			</div>
		</div>

		<!-- V2 in 3D -->
		<div class="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
			<div class="grid overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 lg:grid-cols-[3fr_2fr]">
				<div
					class="h-80 bg-[radial-gradient(circle_at_center,--theme(--color-accent/0.08),transparent_70%)] sm:h-[28rem]">
					<EfoilModel />
				</div>
				<div class="flex flex-col justify-center gap-4 p-6 sm:p-8">
					<h3 class="font-mono text-sm tracking-widest text-accent uppercase">Version 2, in 3D</h3>
					<p class="text-2xl font-semibold tracking-tight text-white">Designed in code. Drag it to look around.</p>
					<p class="leading-relaxed">
						V2 is a parametric Blender model that generates its own CNC drawings, cutting patterns, fiberglass
						templates and a fully sourced bill of materials. Change one dimension and every document updates with it.
						This is the real model, straight from the repo.
					</p>
					<a
						href="https://github.com/derekhearst/efoil-v2"
						class="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40">
						<Icon name="github" class="size-4" />V2 model on GitHub
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects -->
	<section id="projects" class="border-t border-white/5 bg-zinc-900/30">
		<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">Projects</h2>
			<p class="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white">Other things I’m building</p>
			<div class="mt-10 grid gap-4 md:grid-cols-2">
				{#each projects as project (project.name)}
					<article
						class="group relative flex flex-col gap-3 rounded-2xl border border-white/5 bg-zinc-950/60 p-6 transition hover:border-accent/30">
						<div class="flex items-start justify-between gap-4">
							<div>
								<h3 class="text-lg font-semibold text-white">
									{#if project.href}
										<a href={project.href} class="after:absolute after:inset-0">{project.name}</a>
									{:else}
										{project.name}
									{/if}
								</h3>
								<p class="text-sm text-zinc-400">{project.tagline}</p>
							</div>
							{#if project.href}
								<Icon name="external" class="size-4 shrink-0 text-zinc-500 transition group-hover:text-accent" />
							{:else if project.status}
								<span class="shrink-0 rounded-full border border-accent/30 px-2.5 py-0.5 text-xs text-accent">
									{project.status}
								</span>
							{/if}
						</div>
						<p class="grow text-sm leading-relaxed">{project.body}</p>
						<ul class="flex flex-wrap gap-1.5">
							{#each project.tags as tag (tag)}
								<li class="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-xs text-zinc-400">{tag}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Work -->
	<section id="work" class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[3fr_2fr]">
		<div class="flex flex-col gap-5">
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">By day</h2>
			<p class="text-3xl font-semibold tracking-tight text-white">Lead web developer at Brown & Root</p>
			<p class="leading-relaxed">
				I build the internal software that a 10,000-person industrial contractor runs on, from payroll and timekeeping
				to job-site safety, working directly with the people who use it.
			</p>
			<dl class="grid gap-3 sm:grid-cols-3">
				{#each highlights as item (item.label)}
					<div class="rounded-xl border border-white/5 bg-zinc-900/60 p-4">
						<dt class="sr-only">{item.label}</dt>
						<dd class="font-mono text-2xl font-semibold text-white">{item.value}</dd>
						<dd class="mt-1 text-sm text-zinc-400">{item.label}</dd>
					</div>
				{/each}
			</dl>
			<a
				href="/Derek_Hearst_Resume.pdf"
				class="inline-flex items-center gap-2 self-start rounded-full border border-accent/40 px-4 py-2 text-sm text-accent transition hover:bg-accent hover:text-zinc-950">
				<Icon name="file" class="size-4" />Full details in my resume
			</a>
		</div>
		<ol class="flex flex-col gap-6 self-center border-l border-white/10 pl-6">
			{#each experience as job (job.role)}
				<li class="relative">
					<span class="absolute top-1.5 -left-[1.82rem] size-2.5 rounded-full bg-accent ring-4 ring-zinc-950"></span>
					<p class="font-mono text-xs text-zinc-500">{job.when}</p>
					<h3 class="mt-1 font-semibold text-white">{job.role}</h3>
					<p class="text-sm text-zinc-400">{job.org}</p>
				</li>
			{/each}
		</ol>
	</section>
</main>

<footer class="border-t border-white/5">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-zinc-500 sm:flex-row sm:px-6">
		<p>© {new Date().getFullYear()} Derek Hearst · Built with SvelteKit and Tailwind CSS</p>
		<div class="flex items-center gap-4">
			<a href="mailto:derekallenhearst@gmail.com" class="hover:text-white" aria-label="Email"><Icon name="mail" /></a>
			<a href="https://github.com/derekhearst" class="hover:text-white" aria-label="GitHub"><Icon name="github" /></a>
			<a href="https://www.linkedin.com/in/derekhearst/" class="hover:text-white" aria-label="LinkedIn"
				><Icon name="linkedin" /></a>
		</div>
	</div>
</footer>
