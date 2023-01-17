import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
	return (
		<div className="App">
			<Button disabled>my button</Button>
			<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
				my button
			</Button>
			<Button
				btnType={ButtonType.Link}
				href="https://zh-hans.reactjs.org/docs/react-component.html#defaultprops"
				disabled
			>
				reactjs
			</Button>
		</div>
	);
}

export default App;
