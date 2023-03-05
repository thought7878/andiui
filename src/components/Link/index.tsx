import classNames from "classnames";
import React from "react";
// import "./index.css";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
	className?: string;
	/**Setting size*/
	size?: "lg" | "md" | "sm";
	/**Setting disabled */
	disabled?: boolean;
	children: React.ReactNode;
	/**Setting url */
	href?: string;
}

//
const Link: React.FC<LinkProps> = (props) => {
	const { className, disabled, size, children, href, ...otherProps } = props;
	//
	const classes = classNames(
		"link",
		{
			[`link-${size}`]: size,
			disabled: disabled,
		},
		className
	);

	//return button
	return (
		<a href={href} className={classes} {...otherProps}>
			{children}
		</a>
	);
};
//
Link.defaultProps = {
	disabled: false,
	size: "md",
};
export default Link;
