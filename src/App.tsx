import React from "react";
import "./App.css";
import AutoCompleteDemo from "./demos/autoComplete";
import ButtonDemos from "./demos/button";
import InputDemo from "./demos/input";
import MenuDemo from "./demos/menu";

function App() {
	return (
		<div className="App">
			{/* <ButtonDemos></ButtonDemos> */}
			<InputDemo></InputDemo>
			<AutoCompleteDemo></AutoCompleteDemo>
			<MenuDemo></MenuDemo>
		</div>
	);
}

export default App;
