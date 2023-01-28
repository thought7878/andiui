import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationType =
	| "zoom-in-top"
	| "zoom-in-left"
	| "zoom-in-bottom"
	| "zoom-in-right";
type TransitionProps = CSSTransitionProps & { animation?: AnimationType };

const Transition: React.FC<TransitionProps> = (props) => {
	const { classNames, children, animation, ...otherProps } = props;
	return (
		<CSSTransition
			timeout={300}
			classNames={classNames ? classNames : animation}
			unmountOnExit
			// appear
			{...otherProps}
		>
			{children}
		</CSSTransition>
	);
};

Transition.defaultProps = {
	unmountOnExit: true,
};

export default Transition;
