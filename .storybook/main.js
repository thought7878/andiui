const path = require("path");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		// "@storybook/preset-create-react-app",
		"@storybook/addon-interactions",
		"@storybook/preset-scss",
	],
	framework: "@storybook/react",
	core: {
		builder: "webpack5",
	},

	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/i,
			use: [
				{
					loader: "postcss-loader",
					options: { implementation: require.resolve("postcss") },
				},
			],
			include: path.resolve(__dirname, "../"),
		});
		// Return the altered config
		return config;
	},
};
