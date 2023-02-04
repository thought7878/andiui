import axios from "axios";
import { ChangeEvent, FC, useRef } from "react";
import Button from "../Button";

interface UploadProps {
	action: string;
	onProgress?: (percentage: number, file: File) => void;
	onSuccess?: (data: any, file: File) => void;
	onError?: (err: any, file: File) => void;
}

const Upload: FC<UploadProps> = (props) => {
	const { action, onProgress, onSuccess, onError } = props;
	const inputRef = useRef<HTMLInputElement>(null);
	// 点击button，trigger input click
	function handleClick() {
		if (inputRef) {
			inputRef.current?.click();
		}
	}

	//
	function handleUpload(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (files) {
			const uploadFile = files[0];
			const formData = new FormData();
			formData.append(uploadFile.name, uploadFile);
			axios
				.post("https://jsonplaceholder.typicode.com/posts", FormData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					console.log(res);
				});
		}
	}

	return (
		<div>
			<Button btnType="primary" onClick={handleClick}>
				上传文件
			</Button>
			<input
				type="file"
				name="resume"
				className="hidden"
				onChange={handleUpload}
				ref={inputRef}
			/>
		</div>
	);
};

export default Upload;
