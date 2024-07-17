import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#FF7652',
				purple: '#6C5ECF',
				'light-blue': '#32A8E2',
				gray: {
					400: '#9898ad',
					500: '#6B6B7B',
					600: '#5B5B6B',
					800: '#353340',
					900: '#272532',
				},
				svg: '#4e4e5d',
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(.9)',
					},
					'50%': {
						opacity: '.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
		},
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.shadow-block': {
					display: 'block',
					boxShadow:
						'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
					animation: 'scaleIn .35s ease-in-out',
					backgroundColor: '#272532',
				},
			})
		}),
	],
}
export default config
