import { BiDownload } from "react-icons/bi";
import Button from "../components/Button";

const ButtonDemos = () => {
	return (
		<div>
			<div className="m-5 flex items-center space-x-5">
				<Button btnType="primary">
					<BiDownload size="18px" />
				</Button>
				<Button leftIcon={<BiDownload size="18px" />} btnType="primary">
					show code
				</Button>
				<Button rightIcon={<BiDownload size="18px" />} btnType="primary">
					show code
				</Button>
				<Button
					leftIcon={<BiDownload size="18px" />}
					rightIcon={<BiDownload size="18px" />}
					btnType="primary"
				>
					show code
				</Button>
				<Button leftIcon={<BiDownload size="18px" />}>left button</Button>
				<Button rightIcon={<BiDownload size="18px" />}>left button</Button>
				<Button leftIcon={<BiDownload size="18px" />} btnType="danger">
					left button
				</Button>
				<Button rightIcon={<BiDownload size="18px" />} btnType="danger">
					left button
				</Button>
			</div>
			<div className="m-5 flex items-center space-x-5">
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

			<div className="m-5 flex items-center space-x-5">
				<Button btnType="default" size="sm">
					Default Smaill
				</Button>
				<Button>Default</Button>
				<Button size="lg">Default Large</Button>
			</div>

			<div className="m-5 flex items-center space-x-5">
				<Button btnType="danger" size="sm">
					Danger Smaill
				</Button>
				<Button btnType="danger">Danger</Button>
				<Button btnType="danger" size="lg">
					Danger Large
				</Button>
			</div>

			<div className="m-5 flex items-center space-x-5">
				<Button disabled size="sm">
					Disabled Smaill
				</Button>
				<Button disabled>Disabled</Button>
				<Button disabled size="lg">
					Disabled Large
				</Button>
			</div>

			<div className="m-5 flex items-center space-x-5">
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
