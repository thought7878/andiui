import classNames from "classnames";
import { FC, ReactNode, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import Icon from "../Icon";
import "./index.css";

interface AlertProps extends React.HTMLAttributes<HTMLElement> {
	type?: "primary" | "success" | "warning" | "danger";
	children?: ReactNode;
	className?: string; //comstomise style
	position?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
	closeBtn?: boolean; //TODO:未完成
	autoClose?: boolean;
	duration?: number; //ms
}

const Alert: FC<AlertProps> = (props) => {
	const {
		type,
		children,
		closeBtn,
		autoClose,
		position,
		duration,
		className,
		style,
	} = props;
	const [remove, setRemove] = useState(false);

	//
	useEffect(() => {
		if (autoClose) {
			let timer = setTimeout(() => {
				setRemove(true);
			}, duration);

			return () => {
				clearTimeout(timer);
			};
		}
	}, []);

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
		setRemove(true);
	}

	return (
		<CSSTransition
			in={!remove}
			timeout={300}
			classNames="aui-show-hide"
			unmountOnExit
		>
			<div className={classes} style={style} role="alert">
				{children}
				{closeBtn && (
					<div onClick={handleClose} className="inline-flex">
						<Icon className="ml-12 cursor-pointer" icon={<IoClose />} />
					</div>
				)}
			</div>
		</CSSTransition>
	);
};

Alert.defaultProps = {
	type: "primary",
	autoClose: false,
	duration: 300,
};

export default Alert;
