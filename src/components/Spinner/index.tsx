import { FC } from "react";
import { FaSpinner } from "react-icons/fa";
// import { ImSpinner3 } from "react-icons/im";
import classNames from "classnames";
import { CgSpinner } from "react-icons/cg";
import Icon from "../Icon";

interface SpinnerProps {
	size?: "sm" | "md" | "lg";
	type?: "ring" | "dot";
	color?: string;
	style?: React.CSSProperties; //Can overwrite size and color,  style={ { verticalAlign: 'middle' } }
	className?: string; //自定义size的值
}

const Spinner: FC<SpinnerProps> = (props) => {
	const { size, type, className, ...otherProps } = props;

	//handle size
	let _size: string;
	if (size && size === "lg") {
		_size = `1.125rem`;
	} else if (size && size === "sm") {
		_size = `0.875rem`;
	} else if (size && size === "md") {
		_size = `1rem`;
	}
	//handle class
	const classes = classNames("animate-spin", className);

	// render icon by 'type'
	function renderIcon() {
		return (
			<Icon size={_size} className={classes} {...otherProps}>
				{type === "dot" ? <FaSpinner /> : <CgSpinner />}
			</Icon>
		);
	}

	return <>{renderIcon()}</>;
};

export default Spinner;
