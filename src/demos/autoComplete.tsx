import AutoComplete, {
	DataSourceType,
} from "../components/AutoComplete/autoComplete";

interface LakerPlayerProps {
	value: string;
	number: number;
}
const AutoCompleteDemo = () => {
	const lakers = [
		{ value: "bradley", number: 11 },
		{ value: "pope", number: 1 },
		{ value: "caruso", number: 4 },
		{ value: "cook", number: 2 },
		{ value: "cousins", number: 15 },
		{ value: "james", number: 23 },
		{ value: "AD", number: 3 },
		{ value: "green", number: 14 },
		{ value: "howard", number: 39 },
		{ value: "kuzma", number: 0 },
	];

	type PromiseData = { items?: object[] };

	function fetchSuggestions(keyword: string) {
		// return lakers.filter((item) => item.value.includes(keyword));
		return fetch(`https://api.github.com/search/users?q=${keyword}`)
			.then((res) => {
				return res.json();
			})
			.then(({ items }) => {
				return items.slice(0, 10).map((item: { login: any }) => {
					return { value: item.login, ...item };
				});
			});
	}
	function renderOption(item: DataSourceType<LakerPlayerProps>) {
		return (
			<>
				<h2>Name:{item.value}</h2>
				<p>Numeber:{item.number}</p>
			</>
		);
	}

	return (
		<div style={{ width: "200px" }}>
			<AutoComplete
				fetchSuggestions={fetchSuggestions}
				renderOption={renderOption}
			/>
		</div>
	);
};

export default AutoCompleteDemo;
