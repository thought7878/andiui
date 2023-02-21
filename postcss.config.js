// module.exports = {
// 	plugins: [
// 		require("postcss-import"),
// 		require("postcss-nested")({
// 			bubble: ["screen"],
// 		}),
// 		require("postcss-simple-vars"),
// 		// require("tailwindcss")("./src/components/tailwind.config.js"),
// 		// require("autoprefixer"),
// 	],
// };

// postcss.config.js

module.exports = {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		tailwindcss: {},
		autoprefixer: {},
	},
};
