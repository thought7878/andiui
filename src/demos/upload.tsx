import { AiOutlineCloudUpload } from "react-icons/ai";
import Icon from "../components/Icon";
import Upload, { UploadFile } from "../components/Upload";

const UploadDemo = () => {
	//
	function handleBeforeUpload(file: File) {
		let newFile = new File([file], "file", { type: file.type });
		return Promise.resolve(newFile);

		/* if (file.size > 1024 * 1024) {
			alert("文件超过了1M");
			return false;
		}
		return true; */
	}
	//
	const defaultFileList: UploadFile[] = [
		{
			uid: "123",
			name: "123.png",
			status: "ready",
			size: 123,
		},
		{
			uid: "456",
			name: "456.png",
			status: "success",
			size: 456,
		},
		{
			uid: "789",
			name: "789.png",
			status: "error",
			size: 789,
		},
		{
			uid: "888",
			name: "888.png",
			status: "uploading",
			size: 888,
		},
	];

	return (
		<div className="m-10 w-[300px]">
			<Upload
				action="http://localhost:3100/files/upload"
				// defaultFileList={defaultFileList}

				// action="http://localhost:3000/request/upload"
				// action="http://0.0.0.0:3200/files/v3/files"
				// action="https://run.mocky.io/v3/3712e2a8-3b41-4f4b-ab7b-9a4e5eb4d4b9"
				// action="http://localhost:3000/v2/5cc8019d300000980a055e76"
				// action="https://jsonplaceholder.typicode.com/posts"
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
				<div className="mb-5 flex justify-center">
					<Icon icon={<AiOutlineCloudUpload />} className="text-5xl" />
				</div>
				<p>Drag and Drop to Upload Files</p>
			</Upload>
		</div>
	);
};

export default UploadDemo;
