<h1 align=center>Hi, I'm Derek Hearst</h1>
<h4 align=center>I build whatever I want · <a href="https://derekhearst.com">derekhearst.com</a></h4>

I'm a developer and maker in Boise, Idaho. By day I'm the lead web developer at Brown & Root Industrial Services, building the internal apps a 10,000-person company runs on. The rest of the time I build whatever I want: a homebuilt electric hydrofoil, a co-op VR submarine game, and a home server full of AI agents.

#### What I'm building

- [**efoil-v2**](https://github.com/derekhearst/efoil-v2) · a parametric Blender model of my eFoil that generates its own CNC drawings and bill of materials. V1 is built and riding ([build log](https://foil.zone/t/dereks-first-efoil-build-65161-75200-gong-v2-14s9p-diy-from-boise/26247)).
- [**FoundryAI**](https://github.com/derekhearst/FoundryAI) · an AI game-master assistant for Foundry VTT.
- [**agent-runner**](https://github.com/derekhearst/agent-runner) · label a GitHub issue and a Claude agent on my home server opens a pull request.
- [**SimpleSvelte**](https://github.com/derekhearst/SimpleSvelte) · the Svelte 5 component library behind the apps I build at work.
- **The Merrow Deep** · a co-op VR submarine game in Godot 4 (private for now).

#### What I use

TypeScript · SvelteKit · Svelte 5 · Bun · PostgreSQL · SQL Server · Azure · Cloudflare · Docker · Temporal · Claude Code · MCP · Godot · Blender

<hr/>
<p align="center">
  <img src="https://github-readme-stats-fast.vercel.app/api?username=DerekHearst&show_icons=true&theme=gruvbox" alt="GitHub Stats" />
  <br/>
  <img src="https://github-readme-stats-fast.vercel.app/api/streak?username=DerekHearst&theme=gruvbox" alt="GitHub Streak" />
  <br/>
  <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=DerekHearst&layout=compact&theme=gruvbox" alt="Top Languages" />
</p>

<details>
<summary>About this repo</summary>

This repo is also the source for [derekhearst.com](https://derekhearst.com): a single prerendered page built with SvelteKit 3, Svelte 5 and Tailwind CSS 4. Every push to `master` deploys it through Cloudflare Pages.

```bash
bun install
bun run dev      # local site at http://localhost:5173
bun run build
```

- `scripts/export-efoil.py` exports the 3D eFoil model from the eFoil repo's Blender file to `static/efoil.glb`.
- `scripts/make-images.sh` renders the link-preview image and favicons from `scripts/og.html`.
- `.node-version` pins Node 22, because the Pages build image defaults to Node 18 and Vite 8 needs 20.19+.

</details>
