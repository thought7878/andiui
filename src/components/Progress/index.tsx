import { FC } from "react";

interface ProgressProps {
	progress: number; //0~100

	/* TODO: unfinished custom class */
	/**Set the style of outer container */
	outerClass?: string;
	/**Set the style of the inner container */
	innerClass?: string;
	// text?: string;
}

/**
 * Progress component
 *
 * ```js
 * // import like this
 * import { Progress } from 'aui'
 * ```
 *
 */
export const Progress: FC<ProgressProps> = (props) => {
	const { outerClass, innerClass, progress = 0 } = props;

	return (
		<div
			className={`progress-outer relative h-4 overflow-hidden rounded-md bg-auiLight-border ${outerClass}`}
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
