const path = require("path");

export default {
	chainWebpack(memo) {
		memo.plugins.delete("copy");
	},
	extraPostCSSPlugins: [
		"postcss-import",
		"postcss-nested",
		"postcss-simple-vars",
		"tailwindcss",
		"postcss-flexbugs-fixes",
		"postcss-preset-env",
	],

	resolve: {
		atomDirs: [{ type: "component", dir: "../src" }],
	},
	alias: {
		// aui: "../src",
		aui: require.resolve(path.join(__dirname, "../src/")),
		// aui: require.resolve("../../../src/components"),
	},
	/*themeConfig: {
		name: "aui",
	},
	
	alias: {
		aui: require.resolve("/src/components"),
	}, */
};
