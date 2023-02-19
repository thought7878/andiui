import "../src/index.css";
import "../src/styles/index.scss";
// import "../src/components/Input/index.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
