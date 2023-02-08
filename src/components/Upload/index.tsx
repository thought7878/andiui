import axios from "axios";
import { ChangeEvent, FC, useRef, useState } from "react";
import Button from "../Button";

//
interface UploadProps {
	action: string;
	beforeUpload?: (file: File) => boolean | Promise<File>;
	onProgress?: (percentage: number, file: File) => void;
	onSuccess?: (data: any, file: File) => void;
	onError?: (err: any, file: File) => void;
	onChange?: (file: File) => void;
}
//
export interface UploadFile {
	uid: string;
	name: string;
	size: number;
	status?: "ready" | "uploading" | "success" | "error";
	percent?: number;
	originalFile?: File;
	response?: any;
	error?: any;
}

//
const Upload: FC<UploadProps> = (props) => {
	const { action, beforeUpload, onChange, onProgress, onSuccess, onError } =
		props;
	//
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	//file input
	const inputRef = useRef<HTMLInputElement>(null);

	//更新数组中的指定文件
	function updateFileList(file: UploadFile, newValue: Partial<UploadFile>) {
		setFileList((prevFileList) => {
			return prevFileList.map((_file) => {
				if (file.uid === _file.uid) {
					return { ..._file, ...newValue };
				}
				return _file;
			});
		});
		// console.log("***", fileList);
	}

	// 点击button，trigger input click
	function handleClick() {
		if (inputRef) {
			inputRef.current?.click();
		}
	}

	//处理上传
	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const fileList = e.target.files;
		if (fileList) {
			const files = Array.from(fileList);
			files.forEach((file) => {
				// 如果没有beforeUpload，上传。有beforeUpload，返回值是true，执行上传；返回值是Promise
				if (beforeUpload) {
					let result = beforeUpload(file);
					if (typeof result === "boolean" && result) {
						uploadFile(file);
					} else if (result instanceof Promise) {
						result.then((processedFile) => {
							uploadFile(processedFile);
						});
					}
				} else {
					uploadFile(file);
				}
			});
		}
	}
	function uploadFile(file: File) {
		// ajax之前，把新的file加入fileList[0]
		let _file: UploadFile = {
			uid: Date.now() + "file",
			name: file.name,
			size: file.size,
			status: "ready",
			percent: 0,
			originalFile: file,
		};
		setFileList([_file, ...fileList]);

		//
		const formData = new FormData();
		formData.append(file.name, file);
		// formData.append("file", file);

		axios
			.post(action, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: ({ progress }) => {
					if (progress && progress <= 1) {
						// update current uploading file state
						console.log("---", progress);

						updateFileList(_file, { status: "uploading", percent: progress });
						// console.log(fileList);

						// call onProgress property
						if (onProgress) {
							onProgress(progress, file);
						}
					}
				},
			})
			.then((res) => {
				// update current uploading file success state
				updateFileList(_file, {
					status: "success",
					percent: 1,
					response: res.data,
				});
				// call onSuccess property
				if (onSuccess) {
					onSuccess(res, file);
				}
				if (onChange) {
					onChange(file);
				}
			})
			.catch((error) => {
				// update current uploading file error state
				updateFileList(_file, {
					status: "error",
					percent: 1,
					error: error,
				});
				// call onError property
				if (onError) {
					onError(error, file);
				}
				if (onChange) {
					onChange(file);
				}
			});

		//
		if (inputRef.current) {
			inputRef.current.value = "";
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
				onChange={handleFileChange}
				ref={inputRef}
			/>
		</div>
	);
};

export default Upload;
