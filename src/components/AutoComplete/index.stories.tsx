import { ComponentMeta, ComponentStory } from "@storybook/react";
import AutoComplete from "./";

const alertMeta: ComponentMeta<typeof AutoComplete> = {
	title: "AutoComplete 组件",
	component: AutoComplete,
};
export default alertMeta;

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

//
export const AutoCompleteWithDefault: ComponentStory<typeof AutoComplete> = (
	args
) => {
	return (
		<div style={{ width: "300px", height: "500px" }}>
			<AutoComplete
				fetchSuggestions={fetchSuggestions}
				// renderOption={renderOption}
			/>
		</div>
	);
};
AutoCompleteWithDefault.storyName = "默认AutoComplete";

//
export const AutoCompleteWithCustom: ComponentStory<typeof AutoComplete> = (
	args
) => {
	return (
		<div style={{ width: "300px", height: "500px" }}>
			<AutoComplete
				fetchSuggestions={fetchSuggestions}
				inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
				// renderOption={renderOption}
			/>
		</div>
	);
};
AutoCompleteWithCustom.storyName = "自定义AutoComplete的样式";
