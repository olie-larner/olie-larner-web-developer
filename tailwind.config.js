/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				lead: ['lead', 'sans-serif'],
				arastin_pro: ['arastin_pro_free_demoregular', 'sans-serif'],
				arastin_script: ['arastin_script_free_demoRg', 'sans-serif'],
				arastin_std: ['arastin_std_free_demoregular', 'sans-serif'],
				star_avenue: ['star_avenueregular', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
			},
			backgroundImage: {
				road: 'url(../media/images/road_to_mist.jpg)',
				faith: "url('../media/images/faith.jpg')",
				invertfaith: "url('../media/images/invert-faith.jpg')",
			},
		},
	},
	variants: {
		extend: {
			// prettier-ignore
			transitionDelay: {
				'200': '200ms',
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'1000': '1000ms',
				'1200': '1200ms',
				'1400': '1400ms',
				'1600': '1600ms',
				'1800': '1800ms',
				'2000': '2000ms',
				'2200': '2200ms',
			},
		},
	},
	plugins: [],
};
