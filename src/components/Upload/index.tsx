import axios from "axios";
import React, { ChangeEvent, FC, ReactElement, useRef, useState } from "react";
import Dragger from "./dragger";
import UploadFileList from "./uploadFileList";

//
export interface UploadProps {
	/**设置url */
	action: string;
	/**设置children */
	children: ReactElement;
	/**设置 */
	defaultFileList?: UploadFile[];
	/**上传之前的回调函数  */
	beforeUpload?: (file: File) => boolean | Promise<File>;
	/**上传进度的回调函数 */
	onProgress?: (percentage: number, file: UploadFile) => void;
	/**上传成功的回调函数 */
	onSuccess?: (data: any, file: UploadFile) => void;
	/**上传失败的回调函数 */
	onError?: (err: any, file: UploadFile) => void;
	/**文件改变的回调函数 */
	onChange?: (file: UploadFile) => void;
	/**文件删除的回调函数 */
	onRemove?: (file: UploadFile) => void;
	/**设置http header */
	httpHeader?: { [key: string]: any };
	/**设置表单数据 */
	formData?: { [key: string]: any };
	/**设置上传文件名 */
	fileName?: string;
	/**设置 */
	withCredentials?: boolean;
	/**设置接受的文件类型 */
	accept?: string;
	/**设置是否可以多文件上传 */
	multiple?: boolean;
	/**设置是否拖拽上传 */
	drag?: boolean;
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
		fileName = "file",
		httpHeader,
		formData,
		withCredentials,
		accept,
		multiple,
		drag,
		children,
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
			uploadFiles(fileList);
		}
	}
	function uploadFiles(fileList: FileList) {
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
		setFileList((prevFileList) => {
			return [_file, ...prevFileList];
		});

		//construct form data
		const _formData = new FormData();
		_formData.append(fileName || "file", file);
		// add custom form data
		if (formData) {
			Object.keys(formData).forEach((key) => {
				_formData.append(key, formData[key]);
			});
			/* for (const key in formData) {
				_formData.append(key, formData[key]);
			} */
		}
		// ajax
		axios
			.post(action, _formData, {
				withCredentials,
				headers: {
					"Content-Type": "multipart/form-data",
					...httpHeader,
				},
				onUploadProgress: ({ progress }) => {
					if (progress && progress <= 1) {
						// update current uploading file state
						updateFileList(_file, { status: "uploading", percent: progress });
						// call onProgress property
						if (onProgress) {
							onProgress(progress, _file);
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
					onSuccess(res, _file);
				}
				if (onChange) {
					onChange(_file);
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
					onError(error, _file);
				}
				if (onChange) {
					onChange(_file);
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

	// 如果不是拖拽上传，给children添加onClick
	let _children = children;
	if (!drag) {
		_children = React.cloneElement(children, { onClick: handleClick });
	}

	return (
		<div className="rounded-lg">
			{/*  */}
			{drag ? (
				<Dragger onClick={handleClick} onFileDrop={uploadFiles}>
					{children}
				</Dragger>
			) : (
				_children
			)}
			{/*  */}
			<input
				type="file"
				// name="file"
				className="hidden"
				onChange={handleFileChange}
				ref={inputRef}
				accept={accept}
				multiple={multiple}
			/>
			{/*  */}
			{fileList && (
				<UploadFileList uploadFileList={fileList} onRemove={handleRemove} />
			)}
		</div>
	);
};

export default Upload;
