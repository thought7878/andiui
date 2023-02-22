import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Button from "../Button";
import Icon from "../Icon";
import Upload from "./";

const uploadMeta: ComponentMeta<typeof Upload> = {
	title: "Upload 组件",
	component: Upload,
};
export default uploadMeta;

//
const Template: ComponentStory<typeof Upload> = (args) => (
	<div className="w-[300px]">
		<Upload {...args}>
			<Button btnType="primary">Upload Files</Button>
		</Upload>
	</div>
);

//
export const UploadWithDefault = Template.bind({});
UploadWithDefault.args = {
	action: "https://jsonplaceholder.typicode.com/posts",
};

//
export const UploadWithButton: ComponentStory<typeof Upload> = (args) => {
	return (
		<Upload
			action="https://jsonplaceholder.typicode.com/posts"
			accept=".jpg"
			multiple
			onProgress={(percentage, file) => {
				// console.log("onProgress:", percentage);
			}}
			onSuccess={(res, file) => {
				console.log("onSuccess:");
			}}
			onError={(error, file) => {
				console.log("onError:", error);
			}}
		>
			<Button btnType="primary">Upload Files</Button>
		</Upload>
	);
};
UploadWithButton.storyName = "使用Button的upload";

//
export const UploadWithBeforeFun: ComponentStory<typeof Upload> = (args) => {
	return (
		<div>
			<div className="mb-8">
				<Upload
					action="https://jsonplaceholder.typicode.com/posts"
					beforeUpload={() => {
						alert("beforeUpload返回false，不会执行上传文件");
						return false;
					}}
				>
					<Button btnType="primary">beforeUpload:false</Button>
				</Upload>
			</div>
			<div className="mb-8">
				<Upload
					action="https://jsonplaceholder.typicode.com/posts"
					beforeUpload={() => {
						alert("beforeUpload返回true，执行上传文件");
						return true;
					}}
				>
					<Button btnType="primary">beforeUpload:true</Button>
				</Upload>
			</div>
		</div>
	);
};
UploadWithBeforeFun.storyName = "beforeUpload 函数";

//
export const UploadWithSize: ComponentStory<typeof Upload> = (args) => {
	return (
		<div className="w-[300px]">
			<Upload
				// action="http://localhost:3100/files/upload"
				// defaultFileList={defaultFileList}

				// action="http://localhost:3000/request/upload"
				// action="http://0.0.0.0:3200/files/v3/files"
				// action="https://run.mocky.io/v3/3712e2a8-3b41-4f4b-ab7b-9a4e5eb4d4b9"
				// action="http://localhost:3000/v2/5cc8019d300000980a055e76"
				action="https://jsonplaceholder.typicode.com/posts"
				// beforeUpload={handleBeforeUpload}

				accept=".jpg"
				multiple
				drag
				// fileName="av"
				// httpHeader={{ cangjing: "kong" }}
				// formData={{ goHome: "001.av" }}
				onProgress={(percentage, file) => {
					// console.log("onProgress:", percentage);
				}}
				onSuccess={(res, file) => {
					console.log("onSuccess:");
				}}
				onError={(error, file) => {
					console.log("onError:", error);
				}}
			>
				<>
					<div className="mb-5 flex justify-center">
						<Icon icon={<AiOutlineCloudUpload />} className="text-5xl" />
					</div>
					<p>Drag and Drop to Upload Files</p>
				</>
			</Upload>
		</div>
	);
};
UploadWithSize.storyName = "设置size";
