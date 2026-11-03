<script lang="ts">
	import Icon from '#lib/Icon.svelte'

	let showSmokey = $state(false)

	const stats = [
		{ value: '2,500+', label: 'employees use my portal each month' },
		{ value: '250K+', label: 'requests a month to the data API I built' },
		{ value: '5', label: 'production apps built from scratch' },
		{ value: '3×', label: 'monthly output after adopting Claude Code' },
	]

	const work = [
		{
			title: 'Workforce and safety platform',
			body: 'The company’s largest internal app, used daily at job sites: timekeeping to replace the legacy payroll system, safety management, certifications, about 135 reports, and client reporting for Shell, Lubrizol, Celanese and CF Industries.',
			tags: ['SvelteKit', 'PostgreSQL', 'Playwright'],
		},
		{
			title: 'Payroll rules engine',
			body: 'Turned hard-coded payroll rules into 69 configurable rules across 250+ business units. Authorized users change them in an audited grid, so rule changes no longer need a code deploy.',
			tags: ['Rules engine', 'Legacy migration'],
		},
		{
			title: 'Central data API',
			body: 'Supplies employee, business unit, cost code and work order data from JD Edwards and Microsoft Fabric to every internal app. Handles 250,000+ requests a month through a typed npm client.',
			tags: ['REST', 'JD Edwards', 'Microsoft Fabric'],
		},
		{
			title: 'Employee self-service portal',
			body: 'My first project there, now used by 2,500+ employees a month for card and reimbursement requests, mobile devices, IT scheduling and safety forms.',
			tags: ['SvelteKit', 'Temporal', 'Entra ID'],
		},
		{
			title: 'AI development platform',
			body: 'A knowledge base and Claude Code plugin with skills, hooks and MCP servers, used company-wide so every developer’s AI assistant works from the same docs and standards.',
			tags: ['Claude Code', 'MCP', 'RAG'],
		},
		{
			title: 'Delivery and monitoring',
			body: 'Moved 11 apps to GitHub Actions with signed images, made tests and reviewed migrations standard, and rolled out Sentry monitoring across every app.',
			tags: ['GitHub Actions', 'Docker', 'Sentry'],
		},
	]

	type Project = { name: string; tagline: string; body: string; tags: string[]; href?: string; status?: string }
	const projects: Project[] = [
		{
			name: 'The Merrow Deep',
			tagline: 'Co-op VR submarine game',
			body: 'A 1–4 player co-op VR game in Godot 4 for PCVR, with a host-run tactical simulation, sonar and noise modeling, and crew-versus-crew play where each team sees only its own sensors. About 2,400 commits since September 2026, mostly written with Claude agents.',
			tags: ['Godot 4', 'GDScript', 'OpenXR', 'Multiplayer'],
			status: 'In development',
		},
		{
			name: 'FoundryAI',
			tagline: 'AI game-master assistant for Foundry VTT',
			body: 'Open-source module with streaming chat, retrieval over the game world from a client-side vector store, 40+ AI tools for tokens, combat, dice and audio, NPC roleplay and session recaps.',
			tags: ['TypeScript', 'Svelte', 'RAG', 'OpenRouter'],
			href: 'https://github.com/derekhearst/FoundryAI',
		},
		{
			name: 'agent-runner',
			tagline: 'Issue-to-PR coding agents',
			body: 'Label a GitHub issue and a Claude Managed Agent works it on my home server and opens a pull request, with budget caps, session recovery and every outcome reported on the issue.',
			tags: ['Claude Agents', 'Docker', 'GitHub'],
			href: 'https://github.com/derekhearst/agent-runner',
		},
		{
			name: 'SimpleSvelte',
			tagline: 'UI component library',
			body: 'The component library behind my company’s internal apps. 141 releases on npm, used by 6 apps.',
			tags: ['Svelte 5', 'Tailwind CSS', 'npm'],
			href: 'https://github.com/derekhearst/SimpleSvelte',
		},
		{
			name: 'eFoil v2',
			tagline: 'Parametric electric hydrofoil',
			body: 'A Blender model of a DIY electric hydrofoil that generates its own CNC drawings, cutting patterns, glass ply templates and a fully sourced bill of materials.',
			tags: ['Blender', 'Python', 'CAD'],
			href: 'https://github.com/derekhearst/efoil-v2',
		},
	]

	const experience = [
		{
			role: 'Lead Web Developer',
			org: 'Brown & Root Industrial Services',
			when: 'Jan 2025 – Present',
			body: 'Lead internal app development for HR, Payroll, Safety, Procurement, Finance and Project Controls, from requirements with business owners through release and support.',
		},
		{
			role: 'Full-Stack Web Developer',
			org: 'Brown & Root Industrial Services',
			when: 'Feb 2023 – Jan 2025',
			body: 'Built the employee portal and the procurement and equipment system from scratch, and launched the field operations platform.',
		},
		{
			role: 'Software Engineer',
			org: 'HP',
			when: 'Aug 2021 – Aug 2022',
			body: 'Built C# printer test and automation software, led specification meetings, and supported beta customers on site.',
		},
		{
			role: 'Full-Stack Web Development Certificate',
			org: 'Boise CodeWorks',
			when: 'Aug 2022 – Feb 2023',
			body: 'Earned the “Golden Duck” award for a perfect score on every assignment.',
		},
	]

	const skills = [
		{ group: 'Languages', items: ['TypeScript', 'JavaScript', 'SQL', 'C#', 'GDScript', 'Python'] },
		{ group: 'Frameworks', items: ['SvelteKit', 'Svelte', 'Node.js', 'Bun', 'ASP.NET'] },
		{ group: 'Data', items: ['PostgreSQL', 'SQL Server', 'Prisma', 'Drizzle', 'Redis', 'JD Edwards'] },
		{ group: 'Cloud and DevOps', items: ['Azure', 'Docker', 'GitHub Actions', 'Temporal', 'Sentry', 'Cloudflare'] },
		{ group: 'AI', items: ['Claude Code', 'MCP servers', 'RAG', 'pgvector', 'OpenAI'] },
		{ group: 'Game development', items: ['Godot 4', 'OpenXR', 'Multiplayer', 'Blender'] },
	]
</script>

<svelte:head>
	<title>Derek Hearst · Lead Full-Stack Developer</title>
	<meta
		name="description"
		content="Derek Hearst is a lead full-stack developer in Boise, Idaho, building internal software for a 10,000-employee industrial contractor with SvelteKit, TypeScript and AI-assisted development." />
	<meta property="og:title" content="Derek Hearst · Lead Full-Stack Developer" />
	<meta property="og:description" content="Internal apps, data APIs and AI-assisted development. Boise, Idaho." />
	<meta property="og:image" content="https://derekhearst.com/derek.webp" />
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
					<Icon name="pin" class="size-4" />Boise, Idaho · Lead Full-Stack Developer
				</p>
				<h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
					I build the internal software a <span class="whitespace-nowrap">10,000-person</span> company runs on.
				</h1>
				<p class="max-w-2xl text-lg text-pretty">
					At Brown & Root Industrial Services I’ve built five production apps from scratch, including an employee
					portal used by 2,500+ people a month and the data API behind every internal app. I work directly with the
					business, run delivery end to end, and use AI-assisted development to ship a lot more of it.
				</p>
				<div class="flex flex-wrap gap-3">
					<a
						href="mailto:derekallenhearst@gmail.com"
						class="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-zinc-950 transition hover:brightness-110">
						<Icon name="mail" class="size-4" />Email me
					</a>
					<a
						href="/Derek_Hearst_Resume.pdf"
						class="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40">
						<Icon name="file" class="size-4" />Resume
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

	<!-- Numbers -->
	<section class="border-y border-white/5 bg-zinc-900/40">
		<dl class="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
			{#each stats as stat (stat.label)}
				<div>
					<dt class="sr-only">{stat.label}</dt>
					<dd class="font-mono text-3xl font-semibold text-white sm:text-4xl">{stat.value}</dd>
					<dd class="mt-1 text-sm text-zinc-400">{stat.label}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<!-- Work -->
	<section id="work" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
		<h2 class="font-mono text-sm tracking-widest text-accent uppercase">Work</h2>
		<p class="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white">What I build at Brown & Root</p>
		<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each work as item (item.title)}
				<article class="flex flex-col gap-3 rounded-2xl border border-white/5 bg-zinc-900/60 p-6">
					<h3 class="text-lg font-semibold text-white">{item.title}</h3>
					<p class="grow text-sm leading-relaxed">{item.body}</p>
					<ul class="flex flex-wrap gap-1.5">
						{#each item.tags as tag (tag)}
							<li class="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-xs text-zinc-400">{tag}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</section>

	<!-- Projects -->
	<section id="projects" class="border-t border-white/5 bg-zinc-900/30">
		<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">Projects</h2>
			<p class="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-white">Things I build on my own time</p>
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

	<!-- Experience and skills -->
	<section id="experience" class="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[3fr_2fr]">
		<div>
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">Experience</h2>
			<ol class="mt-8 flex flex-col gap-8 border-l border-white/10 pl-6">
				{#each experience as job (job.role)}
					<li class="relative">
						<span class="absolute top-1.5 -left-[1.82rem] size-2.5 rounded-full bg-accent ring-4 ring-zinc-950"></span>
						<p class="font-mono text-xs text-zinc-500">{job.when}</p>
						<h3 class="mt-1 font-semibold text-white">{job.role}</h3>
						<p class="text-sm text-zinc-400">{job.org}</p>
						<p class="mt-2 text-sm leading-relaxed">{job.body}</p>
					</li>
				{/each}
			</ol>
		</div>
		<div>
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">Skills</h2>
			<dl class="mt-8 flex flex-col gap-5">
				{#each skills as skill (skill.group)}
					<div>
						<dt class="text-sm font-medium text-white">{skill.group}</dt>
						<dd class="mt-2 flex flex-wrap gap-1.5">
							{#each skill.items as item (item)}
								<span class="rounded-full border border-white/10 px-2.5 py-0.5 text-xs">{item}</span>
							{/each}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- About -->
	<section id="about" class="border-t border-white/5 bg-zinc-900/30">
		<div class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
			<h2 class="font-mono text-sm tracking-widest text-accent uppercase">About</h2>
			<div class="mt-6 flex flex-col gap-5 text-lg leading-relaxed">
				<p>
					I got into programming by making addons and maps for Garry’s Mod in Lua. That led to software classes in high
					school, computer science in college, and building tools for my coworkers at HP, which is when I realized I
					wanted to do this full time. Boise CodeWorks turned that into web development.
				</p>
				<p>
					Outside work I’m usually building something: a VR submarine game, AI agents that run on my home server, or a
					DIY electric hydrofoil. I also love ping pong, video games, science fiction, and my cat
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
			</div>
		</div>
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
