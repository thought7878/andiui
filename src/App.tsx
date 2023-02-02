import "./App.css";
import ButtonDemos from "./demos/button";
import SpinnerDemo from "./demos/spinner";

function App() {
	return (
		<div className="App">
			<SpinnerDemo />
			<ButtonDemos></ButtonDemos>
			{/* <InputDemo></InputDemo> */}
			{/* <AutoCompleteDemo></AutoCompleteDemo> */}
			{/* <MenuDemo></MenuDemo> */}
		</div>
	);
}

export default App;
