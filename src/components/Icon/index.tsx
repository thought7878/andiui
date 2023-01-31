import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
export type ThemeProps =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "light"
	| "dark";

export interface IconProps extends FontAwesomeIconProps {
	theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
	const { className, theme, ...restProps } = props;
	const classes = classNames("aui-icon", className, {
		[`icon-${theme}`]: theme,
	});

	//
	return (
		<FontAwesomeIcon
			// icon={solid(name)}
			// icon={_icon(iconInfo)}
			// icon={icon({ name: "coffee", style: "solid" })}
			className={classes}
			{...restProps}
		/>
	);
};

export default Icon;
