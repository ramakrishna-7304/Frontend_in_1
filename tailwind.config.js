/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#3B82F6',
				secondary: '#8B5CF6',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
			},
		},
	},
	plugins: [],
}
