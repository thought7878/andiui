import axios from "axios";
import { ChangeEvent, FC, useRef, useState } from "react";
import Button from "../Button";
import UploadFileList from "./uploadFileList";

//
export interface UploadProps {
	action: string;
	defaultFileList?: UploadFile[];
	beforeUpload?: (file: File) => boolean | Promise<File>;
	onProgress?: (percentage: number, file: File) => void;
	onSuccess?: (data: any, file: File) => void;
	onError?: (err: any, file: File) => void;
	onChange?: (file: File) => void;
	onRemove?: (file: UploadFile) => void;
}
//upload file status type
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
	const {
		action,
		defaultFileList,
		beforeUpload,
		onChange,
		onProgress,
		onSuccess,
		onError,
		onRemove,
	} = props;
	//
	const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
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
					if (result && typeof result === "boolean") {
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

		//construct form data
		const formData = new FormData();
		formData.append(file.name, file);
		// formData.append("file", file);
		// ajax
		axios
			.post(action, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: ({ progress }) => {
					if (progress && progress <= 1) {
						// update current uploading file state
						updateFileList(_file, { status: "uploading", percent: progress });
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

	// 删除指定的file
	function handleRemove(file: UploadFile) {
		setFileList((prevFileList) => {
			return prevFileList.filter((_file) => {
				return file.uid !== _file.uid;
			});
		});
		//call onRemove property
		if (onRemove) {
			onRemove(file);
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
			{fileList && (
				<UploadFileList uploadFileList={fileList} onRemove={handleRemove} />
			)}
		</div>
	);
};

export default Upload;
