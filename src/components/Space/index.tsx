import { FC, ReactNode } from "react";

export interface SpaceProps {
	/**Set the direction, horizontal or vertical */
	direction?: "vertical" | "horizontal";
	/**Set the horizontal and vertical spacing */
	size?: "large" | "" | "small";
	/**Alignment of sub-components */
	align?: "";
	/**Whether to change the line when it exceeds one screen. It is only useful in the horizontal direction */
	wrap?: "";
	/**The component of the segmentation line */
	split?: ReactNode;
}

const Space: FC<SpaceProps> = (props) => {
	const {} = props;

	return <div></div>;
};

export default Space;
