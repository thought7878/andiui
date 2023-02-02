import { BiDownload } from "react-icons/bi";
import Input from "../components/Input";

const InputDemo = () => {
	return (
		<div style={{ width: 400 }}>
			<div style={{ padding: 20 }}>
				<Input placeholder="default" />
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="lg" inputSize="lg" />
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="sm" inputSize="sm" />
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="readonly" readOnly />
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="disabled" disabled />
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="icon download" icon={<BiDownload size="18px" />} />
				{/* <FontAwesomeIcon icon={["fa", "coffee"]} /> */}
				{/* <FontAwesomeIcon icon="coffee" /> */}
				{/* <FontAwesomeIcon icon={faCoffee} /> */}
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="prepend" type={"email"} prepend="prepend" />
			</div>
			<div style={{ padding: 20 }}>
				<Input placeholder="append" append="append" />
			</div>
		</div>
	);
};

export default InputDemo;
