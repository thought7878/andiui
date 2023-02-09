import { FC } from "react";

interface ProgressProps {
	progress: number; //0~100
	wrapperClass?: string;
	innerClass?: string;
	// text?: string;
}

const Progress: FC<ProgressProps> = (props) => {
	const { wrapperClass, innerClass, progress = 0 } = props;

	return (
		<div
			className={`progress-wrapper relative h-4 overflow-hidden rounded-md bg-auiLight-border ${wrapperClass}`}
		>
			<div
				style={{ width: `${progress}%` }}
				className={`progress-inner absolute top-0 left-0 flex h-full items-center justify-end rounded-md bg-primary text-xs text-white transition-all  ${innerClass}`}
			>
				{progress}%
			</div>
		</div>
	);
};

export default Progress;
