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
/* 
module.exports = {
	plugins: [
		"postcss-import",
		"tailwindcss/nesting",
		// "postcss-nested",
		"postcss-simple-vars",
		"tailwindcss",
		"postcss-flexbugs-fixes",

		[
			"postcss-preset-env",
			{
				autoprefixer: {
					flexbox: "no-2009",
				},
				stage: 1, //3
			},
		],
	],
}; */

module.exports = {
	plugins: [
		require("postcss-import"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		// require('postcss-mixins'),
		// require("stylelint"),
		require("postcss-preset-env")({ stage: 1 }),
		// require('cssnano'),
	],
};
