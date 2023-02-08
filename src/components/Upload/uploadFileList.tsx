import { FC } from "react";
import {
	AiFillCheckCircle,
	AiFillCloseCircle,
	AiOutlineFileText,
} from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import { UploadFile } from ".";
import Icon from "../Icon";
import Spinner from "../Spinner";

import "./uploadFileList.css";

export interface UploadFileListProps {
	uploadFileList?: UploadFile[];
	onRemove?: (file: UploadFile) => void;
}

const UploadFileList: FC<UploadFileListProps> = (props) => {
	const { uploadFileList, onRemove } = props;

	function renderFileList() {
		return uploadFileList?.map((file) => {
			//
			let statusIcon;
			if (file.status === "success") {
				statusIcon = (
					<Icon
						type=""
						icon={<AiFillCheckCircle />}
						className="file-success-icon text-success"
					/>
				);
			} else if (file.status === "uploading") {
				statusIcon = <Spinner className="file-uploading-icon " />;
			} else if (file.status === "error") {
				statusIcon = (
					<Icon
						type=""
						icon={<AiFillCloseCircle />}
						className="file-error-icon text-danger"
					/>
				);
			}

			//
			return (
				<li key={file.uid} className="file-item flex items-center">
					<Icon icon={<AiOutlineFileText />} className="file-icon mr-2" />
					<span className="file-name mr-4">{file.name}</span>
					{statusIcon}
					<button
						className="file-remove-btn ml-4"
						onClick={() => {
							onRemove && onRemove(file);
						}}
					>
						<IoMdClose />
					</button>
				</li>
			);
		});
	}

	return <ul>{renderFileList()}</ul>;
};

export default UploadFileList;
