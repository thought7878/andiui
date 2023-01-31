import classNames from "classnames";
import { FC, ReactNode } from "react";
import "./index.css";

interface AlertProps {
	type?: "primary" | "success" | "warning" | "danger";
	children?: ReactNode;
	closeBtn?: boolean;
}

const Alert: FC<AlertProps> = (props) => {
	const { type, children } = props;

	const classes = classNames("alert-wrap", type, {});

	return (
		<div className={classes} role="alert">
			{children}
		</div>
	);
};

export default Alert;
