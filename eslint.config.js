import typescript from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import prettier from 'eslint-config-prettier'

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	// Default typescript rules
	...typescript.configs.recommended,
	{
		ignores: ['**/.svelte-kit/', '**/node_modules/', '**/build/'],
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: typescript.parser,
			},
		},
	},
	{
		plugins: {
			svelte: svelte,
			prettier: prettier,
		},

		rules: {
			...prettier.rules,
			...svelte.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'prefer-const': 'error',
			'svelte/valid-compile': 'warn',
		},
	},
]
