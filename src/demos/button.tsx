import Button from "../components/Button";

const ButtonDemos = () => {
	return (
		<div>
			<div>
				<Button
					btnType="primary"
					onClick={() => {
						alert("onClick");
					}}
					size="sm"
				>
					Primary Smaill
				</Button>
				<Button btnType="primary">Primary</Button>
				<Button className="px-28 py-8" btnType="primary" size="lg">
					Customize Primary Large Button
				</Button>
			</div>

			<div>
				<Button btnType="default" size="sm">
					Default Smaill
				</Button>
				<Button>Default</Button>
				<Button size="lg">Default Large</Button>
			</div>

			<div>
				<Button btnType="danger" size="sm">
					Danger Smaill
				</Button>
				<Button btnType="danger">Danger</Button>
				<Button btnType="danger" size="lg">
					Danger Large
				</Button>
			</div>

			<div>
				<Button disabled size="sm">
					Disabled Smaill
				</Button>
				<Button disabled>Disabled</Button>
				<Button disabled size="lg">
					Disabled Large
				</Button>
			</div>

			<div>
				<Button
					btnType="link"
					href="https://zh-hans.reactjs.org/docs/react-component.html#defaultprops"
				>
					Link
				</Button>
				<Button
					btnType="link"
					href="https://zh-hans.reactjs.org/docs/react-component.html#defaultprops"
					disabled
				>
					Link
				</Button>
			</div>
		</div>
	);
};

export default ButtonDemos;
