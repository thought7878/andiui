import React, { ChangeEvent, useState } from "react";
import Input, { InputProps } from "../Input/input";

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
	fetchSuggestions: (keyword: string) => string[];
	onSelect?: (item: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
	const { fetchSuggestions, onSelect, value, ...otherProps } = props;
	const [inputValue, setInputValue] = useState(value);
	const [suggestions, setSuggestions] = useState<string[]>([]);

	//
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setInputValue(value);
		const results = fetchSuggestions(value);
		setSuggestions(results);
	};

	//
	function handleClick(suggestion: string) {
		setInputValue(suggestion);
		setSuggestions([]);
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
				{suggestion}
			</li>
		));
	}

	return (
		<div className="aui-auto-complete">
			<Input value={inputValue} onChange={handleChange} {...otherProps} />
			{suggestions.length > 0 && renderSuggestions()}
		</div>
	);
};

AutoComplete.defaultProps = {
	value: "",
};

export default AutoComplete;
