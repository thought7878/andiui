import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import Icon from "../Icon/icon";
import Input, { InputProps } from "../Input/input";

//
interface DataSourceObject {
	value: string; //suggestion string
}
export type DataSourceType<T = {}> = Partial<T & DataSourceObject>;

//
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
	fetchSuggestions: (
		keyword: string
	) => DataSourceType[] | Promise<DataSourceType[]>;
	/**选中suggestion的回调函数 */
	onSelect?: (item: DataSourceType) => void;
	/**自定义option列表   */
	renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
	const { fetchSuggestions, onSelect, value, renderOption, ...otherProps } =
		props;
	const [inputValue, setInputValue] = useState(value);
	const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	//
	useEffect(() => {
		if (inputValue) {
			const results = fetchSuggestions(inputValue as string);
			if (results instanceof Promise) {
				setIsLoading(true);
				results.then((data) => {
					setIsLoading(false);
					setSuggestions(data);
				});
			} else {
				setSuggestions(results);
			}
		}
	}, [inputValue]);

	//
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setInputValue(value);
	};
	//
	function handleClick(suggestion: DataSourceType) {
		setInputValue(suggestion.value);
		setSuggestions([]);
	}

	// render li option
	function _renderOption(item: DataSourceType) {
		return renderOption ? renderOption(item) : item.value;
	}
	// render suggestions
	function renderSuggestions() {
		return suggestions.map((suggestion, index) => (
			<li
				key={index}
				onClick={() => {
					handleClick(suggestion);
				}}
			>
				{_renderOption(suggestion)}
			</li>
		));
	}
	//
	function renderLoadingIcon() {
		return (
			<ul>
				<Icon icon={solid("spinner")} spin />
			</ul>
		);
	}

	//
	return (
		<div className="aui-auto-complete">
			<Input value={inputValue} onChange={handleChange} {...otherProps} />
			{isLoading && renderLoadingIcon()}
			{suggestions.length > 0 && renderSuggestions()}
		</div>
	);
};

AutoComplete.defaultProps = {
	value: "",
};

export default AutoComplete;
