import AutoComplete from "../components/AutoComplete/autoComplete";

const AutoCompleteDemo = () => {
	const lakers = [
		"bradley",
		"pope",
		"caruso",
		"cook",
		"cousins",
		"james",
		"AD",
		"green",
		"howard",
		"kuzma",
		"McGee",
		"rando",
	];

	function fetchSuggestions(keyword: string) {
		return lakers.filter((item) => item.includes(keyword));
	}

	return (
		<div>
			<AutoComplete fetchSuggestions={fetchSuggestions} />
		</div>
	);
};

export default AutoCompleteDemo;
