import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
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
	return (
		<div className="App">
			<div className="w-[800px]">
				<Form>
					<Form.Item
						label="Username:"
						name="username"
						//////////////// rules:START ////////////////
						rules={[{ type: "email", required: true }]}
						//////////////// rules:END ////////////////
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Password:"
						name="password"
						//////////////// rules:START ////////////////
						rules={[{ type: "string", required: true, min: 3, max: 8 }]}
						//////////////// rules:END ////////////////
					>
						<Input type="password" />
					</Form.Item>
					<Form.Item>
						<Button btnType="primary">Login</Button>
					</Form.Item>
				</Form>
			</div>
			{/* <FormDemo></FormDemo> */}
			{/* <UploadDemo /> */}
			{/* <AlertDemo /> */}
			{/* <SpinnerDemo />*/}
			{/* <ButtonDemos></ButtonDemos> */}
			{/* <InputDemo></InputDemo> */}
			{/* <AutoCompleteDemo></AutoCompleteDemo> */}
			{/* <MenuDemo></MenuDemo> */}
		</div>
	);
}

export default App;
