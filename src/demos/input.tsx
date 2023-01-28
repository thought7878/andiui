import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Input from "../components/Input";

const InputDemo = () => {
	return (
		<div style={{ width: 200 }}>
			<Input placeholder="default" />
			<Input placeholder="lg" inputSize="lg" />
			<Input placeholder="sm" inputSize="sm" />
			<Input placeholder="disabled" disabled />
			<Input placeholder="icon download" icon={solid("download")} />
			<Input placeholder="prepend" prepend="prepend" />
			<Input placeholder="append" append="append" />
		</div>
	);
};

export default InputDemo;
