import "./App.css";
import AlertDemo from "./demos/alert";
import ButtonDemos from "./demos/button";
import SpinnerDemo from "./demos/spinner";

function App() {
	return (
		<div className="App">
			<AlertDemo />
			<SpinnerDemo />
			<ButtonDemos></ButtonDemos>
			{/* <InputDemo></InputDemo> */}
			{/* <AutoCompleteDemo></AutoCompleteDemo> */}
			{/* <MenuDemo></MenuDemo> */}
		</div>
	);
}

export default App;
