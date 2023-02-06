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
		const fileList = e.target.files;
		if (fileList) {
			const files = Array.from(fileList);
			files.forEach((uploadFile) => {
				//
				const formData = new FormData();
				// formData.append(uploadFile.name, uploadFile);
				formData.append("file", uploadFile);

				//
				/* request({
					url: action,
					method: "post",
					headers: {
						"Content-Type": "multipart/form-data",
					},
					onUploadProgress: ({ progress = 0 }) => {
						console.log("progress:", progress);

						if (progress && progress < 1) {
							if (onProgress) {
								onProgress(progress, uploadFile);
							}
						}
					},
				}) */
				axios
					.post(action, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
						onUploadProgress: ({ progress }) => {
							if (progress && progress < 1) {
								if (onProgress) {
									onProgress(progress, uploadFile);
								}
							}
						},
					})
					.then((res) => {
						if (onSuccess) {
							onSuccess(res, uploadFile);
						}
					})
					.catch((error) => {
						if (onError) {
							onError(error, uploadFile);
						}
					});
			});
			if (inputRef.current) {
				inputRef.current.value = "";
			}
		}
	}

	return (
		<div>
			<Button btnType="primary" onClick={handleClick}>
				上传文件
			</Button>
			<input
				type="file"
				name="andi"
				className="hidden"
				onChange={handleUpload}
				ref={inputRef}
			/>
		</div>
	);
};

export default Upload;
