import classNames from "classnames";
import React from "react";
import Icon from "../Icon";
import Spinner from "../Spinner";
// import "./index.css";

interface BaseButtonProps {
	className?: string;
	// TODO: refactor link
	/**Setting type */
	btnType?: "primary" | "default" | "danger";
	/**Setting size*/
	size?: "lg" | "md" | "sm";
	/**Setting disabled */
	disabled?: boolean;
	/**Setting left icon */
	leftIcon?: React.ReactElement;
	/**Setting right icon*/
	rightIcon?: React.ReactElement;
	// TODO: style bug
	/**Setting loading */
	loading?: boolean;

	children: React.ReactNode;
	href?: string;
	// icon?: IconProp;
}
//
type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

//
const Button: React.FC<ButtonProps> = (props) => {
	const {
		btnType,
		className,
		loading,
		leftIcon,
		rightIcon,
		disabled,
		size,
		children,
		href,
		...otherProps
	} = props;
	//btn,btn-lg,btn-primary
	const classes = classNames(
		"btn",
		{
			[`btn-${btnType}`]: btnType,
			[`btn-${size}`]: size,
			disabled: disabled || loading,
		},
		className
	);

	//return button
	return (
		<div className="inline-flex">
			<button className={classes} disabled={disabled} {...otherProps}>
				{leftIcon && <Icon icon={leftIcon} className="mr-1" />}
				{loading && <Spinner className="mr-1" />}
				{children}
				{rightIcon && <Icon icon={rightIcon} className="ml-1" />}
			</button>
		</div>
	);
};
//
Button.defaultProps = {
	disabled: false,
	btnType: "default",
	size: "md",
};
export default Button;
