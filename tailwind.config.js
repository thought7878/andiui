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
				primary: "#22c55e",
				inputFocusColor: "#bef264",
			},
			boxShadow: {
				input: "0 0 0 2px #bbf7d0",
			},
		},
	},
	plugins: [],
};
