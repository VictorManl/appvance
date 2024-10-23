import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'foreground-light': 'var(--foreground-light)',
			},
			fontFamily: {
				geist: 'var(--font-geist)',
				'space-grotesk': 'var(--font-space-grotesk)',
			},
		},
	},
	plugins: [],
}
export default config
