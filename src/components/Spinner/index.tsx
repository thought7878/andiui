import classNames from "classnames";
import { FC } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";
import Icon from "../Icon";

interface SpinnerProps {
	/**设置大小 */
	size?: "sm" | "md" | "lg" | "xl";
	/**设置类型 */
	type?: "ring" | "dot";
	/**设置颜色 */
	color?: string;
	/**自定义大小和颜色 */
	style?: React.CSSProperties; //Can overwrite size and color,  style={ { verticalAlign: 'middle' } }
	/**自定义大小和颜色 */
	className?: string; //自定义size的值
}

const Spinner: FC<SpinnerProps> = (props) => {
	const { size, type, className, ...otherProps } = props;

	//handle size
	let _size: string;

	if (size && size === "xl") {
		_size = `1.6rem`;
	} else if (size && size === "lg") {
		_size = `1.25rem`;
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

Spinner.defaultProps = {
	// size: "md",
	type: "ring",
};

export default Spinner;
