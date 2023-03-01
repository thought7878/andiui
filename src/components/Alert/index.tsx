import classNames from "classnames";
import { FC, ReactNode, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import Icon from "../Icon";
// import "./index.css";

interface AlertProps extends React.HTMLAttributes<HTMLElement> {
	/**4种类型 */
	type?: "primary" | "success" | "warning" | "danger";
	/**设置定位 */
	position?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
	/**是否显示关闭按钮 */
	closeBtn?: boolean;
	/**是否自动关闭 */
	autoClose?: boolean;
	/**自动关闭的持续时间，单位是毫秒 ms */
	duration?: number; //ms
	/**自定义样式 */
	className?: string; //comstomise style
	/**自定义样式 */
	style?: React.CSSProperties;
	children?: ReactNode;
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
		...rest
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
	const classes = classNames("alert", type, className, {
		[position + ""]: position,
	});

	//
	function handleClose() {
		setRemove(true);
	}

	return (
		<CSSTransition
			in={!remove}
			timeout={300}
			classNames="aui-show-hide"
			unmountOnExit
		>
			<div className={classes} style={style} role="alert" {...rest}>
				{children}
				{closeBtn && (
					<div
						onClick={handleClose}
						className="ml-12 inline-flex cursor-pointer"
					>
						<Icon icon={<IoClose />} />
					</div>
				)}
			</div>
		</CSSTransition>
	);
};

Alert.defaultProps = {
	type: "primary",
	// position: "right-top",
	closeBtn: true,
	autoClose: false,
	duration: 3000,
};

export default Alert;
