/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
				primary: "#a0d911", //hope-500
				inputFocusColor: "#a0d911", //hope-500
				success: "#a0d911", //hope-500
				warning: "#faad14", //gold 6
				danger: "#ff4d4f",
				hope: {
					50: "#fcffe6", //selected bg color
					100: "#f4ffb8",
					200: "#eaff8f",
					300: "#d3f261",
					400: "#bae637", //hover
					500: "#a0d911", //brand
					600: "#7cb305", //click
					700: "#5b8c00",
					800: "#3f6600",
					900: "#254000",
				},
				auiLight: {
					//antD
					title: "#262626", //black 85%
					primary: "#595959", //65%
					secondary: "#8c8c8c", //45%
					disable: "#bfbfbf", //25%
					border: "#d9d9d9", //15%
					divider: "#f0f0f0", //6%
					background: "#f5f5f5", //4%
					tableHeader: "#fafafa", //2%
				},
			},
			boxShadow: {
				input: `0 0 0 2px #a0d911`,
			},
			// borderRadius: {
			// 	input: `0 0 0 2px #a0d911`,
			// },
			// transition
		},
	},
	plugins: [],
};
