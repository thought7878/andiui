import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { IoClose } from "react-icons/io5";
import Icon from "../Icon";
import "./index.css";

interface AlertProps {
	type?: "primary" | "success" | "warning" | "danger";
	children?: ReactNode;
	className?: string; //comstomise style
	position?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
	closeBtn?: boolean; //TODO:未完成
	duration?: number; //ms
}

const Alert: FC<AlertProps> = (props) => {
	const { type, children, closeBtn, position, duration, className } = props;
	const [alerts, setAlerts] = useState([]);

	// 不同情况，不同样式
	const classes = classNames(
		"alert-wrap flex justify-between items-center",
		type,
		{
			[position + ""]: position,
		},
		className
	);
	// TODO: unfinished
	function handleClose() {
		console.log("close");
	}

	return (
		<div className={classes} role="alert" onClick={handleClose}>
			{children}
			{closeBtn && <Icon className="ml-12 cursor-pointer" icon={<IoClose />} />}
		</div>
	);
};

export default Alert;
