import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Input from "../components/Input";

const InputDemo = () => {
	return (
		<div style={{ width: 200 }}>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="default" />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="lg" inputSize="lg" />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="sm" inputSize="sm" />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="readonly" readOnly />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="disabled" disabled />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="icon download" icon={solid("download")} />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="prepend" prepend="prepend" />
			</div>
			<div style={{ marginBottom: 20 }}>
				<Input placeholder="append" append="append" />
			</div>
		</div>
	);
};

export default InputDemo;
