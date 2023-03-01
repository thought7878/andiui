import { storiesOf } from "@storybook/react";

storiesOf("Welcome Page", module).add("welcome", () => {
	return (
		<>
			<h1>Welcome to aui components library</h1>
			<h3>have a try</h3>
			<code>npm install aui --save</code>
		</>
	);
});
