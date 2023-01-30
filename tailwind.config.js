/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// fontFamily: {
		// 	sans: ["Graphik", "sans-serif"],
		// 	serif: ["Merriweather", "serif"],
		// },
		/* colors: {
			primary: "#a3e635",
		}, */

		extend: {
			colors: {
				primary: "#22c55e", //green-500
				inputFocusColor: "#86efac", //green-300
			},
			boxShadow: {
				input: "0 0 0 2px #86efac",
			},
			// transition
		},
	},
	plugins: [],
};
