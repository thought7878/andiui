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
const Template: ComponentStory<typeof AutoComplete> = (args) => {
	return (
		<div style={{ width: "300px", height: "350px" }}>
			<AutoComplete
				// fetchSuggestions={fetchSuggestions}
				{...args}
			/>
		</div>
	);
};

//
export const AutoCompleteWithDefault = Template.bind({});
AutoCompleteWithDefault.args = {
	fetchSuggestions: (keyword: string) => {
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
	},
};
AutoCompleteWithDefault.storyName = "default";

//
export const AutoCompleteWithCustomSpinnerColor: ComponentStory<
	typeof AutoComplete
> = (args) => {
	return (
		<div className="mb-[200px] h-[300px] w-[300px]">
			<AutoComplete
				fetchSuggestions={fetchSuggestions}
				spinnerColor="#a855f7"
			/>
		</div>
	);
};
AutoCompleteWithCustomSpinnerColor.storyName = "自定义spinner color";

//
export const AutoCompleteWithCustomSpinner: ComponentStory<
	typeof AutoComplete
> = (args) => {
	return (
		<div className="w-[300px]">
			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					spinnerClass="text-green-500 text-[2rem]"
					// spinnerStyle={{ color: "#3b82f6", fontSize: "2rem" }}
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>

			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					spinnerStyle={{ color: "#22c55e", fontSize: "2rem" }}
				/>
			</div>
		</div>
	);
};
AutoCompleteWithCustomSpinner.storyName = "自定义spinner color和size";

//
export const AutoCompleteWithCustomInput: ComponentStory<
	typeof AutoComplete
> = (args) => {
	return (
		<div className="w-[300px]">
			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					inputClass="px-6 py-3  rounded-full hover:border-green-500 focus:border-green-500 focus:shadow-green-500"
					spinnerClass="text-green-500 text-[2rem]"
				/>
			</div>

			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					inputStyle={{ padding: "0.75rem 1.5rem", borderRadius: "2rem" }}
					spinnerClass="text-primary text-[2rem]"
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>
		</div>
	);
};
AutoCompleteWithCustomInput.storyName = "自定义input样式";

//
export const AutoCompleteWithCustomItem: ComponentStory<typeof AutoComplete> = (
	args
) => {
	return (
		<div className="w-[300px]">
			<div className="mb-[200px]">
				<AutoComplete
					fetchSuggestions={fetchSuggestions}
					itemClass="hover:bg-green-500"
					inputClass="px-6 py-3  rounded-full hover:border-green-500 focus:border-green-500 focus:shadow-green-500"
					spinnerClass="text-primary text-[2rem]"
					// inputClass="px-8 py-6 hover:enabled:border-green-500 focus:enabled:border-green-500 focus:enabled:shadow-green-500"
					// renderOption={renderOption}
				/>
			</div>
		</div>
	);
};
AutoCompleteWithCustomItem.storyName = "自定义Item样式";
