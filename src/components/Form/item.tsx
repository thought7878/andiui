import { FC, ReactNode } from "react";

interface ItemProps {
	label?: string;
	children?: ReactNode;
}

const Item: FC<ItemProps> = (props) => {
	const { label, children } = props;

	//没有label的，右对齐
	let noLabelClass = "";
	if (!label) {
		noLabelClass = "flex-row-reverse";
	}
	//
	return (
		<div className={`mb-3 flex  items-center ${noLabelClass}`}>
			{label && (
				<label
					htmlFor=""
					title={label}
					className="shrink-0 basis-[30%] pr-3 text-right"
				>
					{label}
				</label>
			)}
			<div className="basis-[70%]">{children}</div>
		</div>
	);
};

export default Item;
