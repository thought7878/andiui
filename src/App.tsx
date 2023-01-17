import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
	return (
		<div className="App">
			<div>
				<Button btnType={ButtonType.Primary} size={ButtonSize.Smaill}>
					Primary Smaill
				</Button>
				<Button btnType={ButtonType.Primary}>Primary</Button>
				<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
					Primary Large
				</Button>
			</div>

			<div>
				<Button btnType={ButtonType.Default} size={ButtonSize.Smaill}>
					Default Smaill
				</Button>
				<Button btnType={ButtonType.Default}>Default</Button>
				<Button btnType={ButtonType.Default} size={ButtonSize.Large}>
					Default Large
				</Button>
			</div>

			<div>
				<Button btnType={ButtonType.Danger} size={ButtonSize.Smaill}>
					Danger Smaill
				</Button>
				<Button btnType={ButtonType.Danger}>Danger</Button>
				<Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
					Danger Large
				</Button>
			</div>

			<div>
				<Button disabled size={ButtonSize.Smaill}>
					Disabled Smaill
				</Button>
				<Button disabled>Disabled</Button>
				<Button disabled size={ButtonSize.Large}>
					Disabled Large
				</Button>
			</div>

			<div>
				<Button
					btnType={ButtonType.Link}
					href="https://zh-hans.reactjs.org/docs/react-component.html#defaultprops"
				>
					Link
				</Button>
				<Button
					btnType={ButtonType.Link}
					href="https://zh-hans.reactjs.org/docs/react-component.html#defaultprops"
					disabled
				>
					Link
				</Button>
			</div>
		</div>
	);
}

export default App;
