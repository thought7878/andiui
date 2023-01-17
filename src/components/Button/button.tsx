import React from "react";
import classNames from "classnames";

export enum ButtonSize {
	Large = "lg",
	Smaill = "sm",
}

export enum ButtonType {
	Primary = "primary",
	Default = "default",
	Danger = "danger",
	Link = "link",
}

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	children: React.ReactNode;
	href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
	const { btnType, disabled, size, children, href } = props;
	//btn,btn-lg,btn-primary
	const classes = classNames("btn", {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled,
	});
	//return a
	if (btnType === ButtonType.Link && href) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	}
	//return button
	return (
		<button className={classes} disabled={disabled}>
			{children}
		</button>
	);
};
//
Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default,
};
export default Button;
