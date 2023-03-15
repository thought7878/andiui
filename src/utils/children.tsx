import React from "react";
import * as ReactIs from "react-is";

export type OptionType = {
	// true:空节点不过滤掉，依然保留
	empty?: boolean;
};

export function toArray(
	children: React.ReactNode,
	option: OptionType = { empty: true }
): React.ReactElement[] {
	//
	let results: React.ReactElement[] = [];

	// 遍历 jsx 节点，对每个节点做下判断，如果是数组或 fragment 就递归处理，否则 push 到数组里
	React.Children.forEach(children, (child, index) => {
		//
		if ((child === undefined || child === null) && !option.empty) {
			return;
		}
		//
		if (Array.isArray(child)) {
			results = results.concat(toArray(child));
		} else if (ReactIs.isFragment(child) && child.props) {
			results = results.concat(toArray(child.props.children, option));
		} else {
			results.push(child);
		}
	});

	//
	return results;
}
