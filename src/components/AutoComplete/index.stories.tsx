import { ComponentMeta, ComponentStory } from "@storybook/react";
import AutoComplete from "./";

const autoCompleteMeta: ComponentMeta<typeof AutoComplete> = {
	title: "AutoComplete 组件",
	component: AutoComplete,
};
export default autoCompleteMeta;

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
AutoCompleteWithDefault.storyName = "默认的AutoComplete";

//
export const AutoCompleteWithCustomInput: ComponentStory<
	typeof AutoComplete
> = (args) => {
	return (
		<div style={{ width: "300px", height: "500px" }}>
			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>

			<div className="mb-8">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					inputStyle={{ padding: "2rem 3rem" }}
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>
		</div>
	);
};
AutoCompleteWithCustomInput.storyName = "自定义AutoComplete的input样式";

//
export const AutoCompleteWithCustomSpinner: ComponentStory<
	typeof AutoComplete
> = (args) => {
	return (
		<div style={{ width: "300px", height: "500px" }}>
			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					spinnerStyle={{ color: "#3b82f6", fontSize: "2rem" }}
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>

			<div className="mb-8">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					spinnerStyle={{ color: "#a855f7", fontSize: "3rem" }}
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>
		</div>
	);
};
AutoCompleteWithCustomSpinner.storyName = "自定义AutoComplete的spinner样式";
