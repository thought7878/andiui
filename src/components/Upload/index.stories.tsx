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
UploadWithDefault.storyName = "默认upload";

//
export const UploadWithAccept = Template.bind({});
UploadWithAccept.args = {
	action: "https://jsonplaceholder.typicode.com/posts",
	accept: ".jpg",
};
UploadWithAccept.storyName = "设置accept2";

//
export const UploadWithButton: ComponentStory<typeof Upload> = (args) => {
	return (
		<div className="w-[300px]">
			<Upload
				{...args}
				action="https://jsonplaceholder.typicode.com/posts"
				accept=".jpg"
			>
				<Button btnType="primary">Upload Files</Button>
			</Upload>
		</div>
	);
};
UploadWithButton.storyName = "设置接受的文件类型";

//
export const UploadWithMultiple: ComponentStory<typeof Upload> = (args) => {
	return (
		<div className="w-[300px]">
			<Upload action="https://jsonplaceholder.typicode.com/posts" multiple>
				<Button btnType="primary">Upload Files</Button>
			</Upload>
		</div>
	);
};
UploadWithMultiple.storyName = "设置多文件上传";

//
export const UploadWithDrag: ComponentStory<typeof Upload> = (args) => {
	return (
		<div className="w-[300px]">
			<Upload action="https://jsonplaceholder.typicode.com/posts" drag>
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
UploadWithDrag.storyName = "拖拽上传";

//
export const UploadWithBeforeFun: ComponentStory<typeof Upload> = (args) => {
	return (
		<div>
			<div className="mb-8 w-[300px]">
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
			<div className="mb-8 w-[300px]">
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
