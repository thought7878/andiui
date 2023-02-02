import { FC } from "react";
import { FaSpinner } from "react-icons/fa";
import Icon from "../Icon";

interface SpinnerProps {
	size?:
		| "2xs"
		| "xs"
		| "sm"
		| "lg"
		| "xl"
		| "2xl"
		| "1x"
		| "2x"
		| "3x"
		| "4x"
		| "5x"
		| "6x"
		| "7x"
		| "8x"
		| "9x"
		| "10x";
	className?: string;
	type?: "spinner" | "circle-notch";
}

const Spinner: FC<SpinnerProps> = (props) => {
	const { size, type, className } = props;

	// render icon by 'type'
	function renderIcon() {
		if (type === "circle-notch") {
			return (
				<Icon size={size} className="text-green-600">
					<FaSpinner />
				</Icon>
				// <Icon
				// 	size={size}
				// 	className="text-green-600"
				// 	icon={solid("circle-notch")}
				// 	spin
				// />
			);
		}
		//
		return (
			<Icon size={size} className="text-green-600">
				<FaSpinner />
			</Icon>
		);
	}

	return <div className="inline-block">{renderIcon()}</div>;
};

Spinner.defaultProps = {
	size: "lg",
	type: "spinner",
};

export default Spinner;
