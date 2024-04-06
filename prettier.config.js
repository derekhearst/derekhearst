/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	bracketSpacing: true,
	bracketSameLine: true,
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
}
