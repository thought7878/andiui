import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classNames from "classnames";
import React, {
	ChangeEvent,
	KeyboardEvent,
	ReactElement,
	useEffect,
	useRef,
	useState,
} from "react";
import useDebounce from "../../hooks/useDebounce";
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
	const [highlightIndex, setHighlightIndex] = useState(-1);
	const debouncedInputValue = useDebounce(inputValue, 500);
	let shouldSearch = useRef(false);

	//
	useEffect(() => {
		if (debouncedInputValue && shouldSearch.current) {
			const results = fetchSuggestions(debouncedInputValue as string);
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
		//TODO: why here?
		setHighlightIndex(-1);
	}, [debouncedInputValue]);

	//
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setInputValue(value);
		shouldSearch.current = true;
	};
	//
	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		switch (e.code) {
			case "ArrowDown":
				if (highlightIndex < suggestions.length - 1) {
					setHighlightIndex(highlightIndex + 1);
				}
				console.log("ArrowDown");

				break;
			case "ArrowUp":
				if (highlightIndex > 0) {
					setHighlightIndex(highlightIndex - 1);
				}
				console.log("ArrowUp");
				break;
			case "Enter":
				if (suggestions[highlightIndex]) {
					handleClick(suggestions[highlightIndex]);
				}
				// setHighlightIndex(-1);
				break;
			case "Escape":
				setSuggestions([]);
				break;
			default:
				break;
		}
	}

	//
	function handleClick(suggestion: DataSourceType) {
		setInputValue(suggestion.value);
		setSuggestions([]);
		shouldSearch.current = false;
	}

	// render li option
	function _renderOption(item: DataSourceType) {
		return renderOption ? renderOption(item) : item.value;
	}
	// render suggestions
	function renderSuggestions() {
		let lis = suggestions.map((suggestion, index) => {
			// classes
			let suggestionClasses = classNames("suggestion-item", {
				"is-active": index === highlightIndex,
			});
			//
			return (
				<li
					key={index}
					className={suggestionClasses}
					onClick={() => {
						handleClick(suggestion);
					}}
				>
					{_renderOption(suggestion)}
				</li>
			);
		});
		return <ul className="aui-suggestion-list">{lis}</ul>;
	}
	//
	function renderLoadingIcon() {
		return (
			<div className="suggstions-loading-icon">
				<Icon icon={solid("spinner")} spin />
			</div>
		);
	}

	//
	return (
		<div className="aui-auto-complete">
			<Input
				value={inputValue}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				{...otherProps}
			/>
			{isLoading && renderLoadingIcon()}
			{suggestions.length > 0 && renderSuggestions()}
		</div>
	);
};

AutoComplete.defaultProps = {
	value: "",
};

export default AutoComplete;
