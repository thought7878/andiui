import "./App.css";
import AlertDemo from "./demos/alert";
import UploadDemo from "./demos/upload";

function App() {
	return (
		<div className="App">
			<UploadDemo />
			<AlertDemo />
			{/* <SpinnerDemo />
			<ButtonDemos></ButtonDemos> */}
			{/* <InputDemo></InputDemo> */}
			{/* <AutoCompleteDemo></AutoCompleteDemo> */}
			{/* <MenuDemo></MenuDemo> */}
		</div>
	);
}

export default App;
