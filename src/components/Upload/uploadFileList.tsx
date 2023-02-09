import { FC } from "react";
import {
	AiFillCheckCircle,
	AiFillCloseCircle,
	AiOutlineFileText,
} from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import { UploadFile } from ".";
import Icon from "../Icon";
import Progress from "../Progress";
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
				<li className="file-item">
					<div
						key={file.uid}
						className=" flex items-center justify-between hover:bg-auiLight-border"
					>
						<div className="flex items-center">
							<Icon icon={<AiOutlineFileText />} className="file-icon mr-2" />
							<span className="file-name mr-4">{file.name}</span>
						</div>
						<div className="flex items-center">
							<button
								className="file-remove-btn"
								onClick={() => {
									onRemove && onRemove(file);
								}}
							>
								<IoMdClose className="text-base" />
							</button>
							{statusIcon}
						</div>
					</div>
					<Progress
						progress={(file.percent && Math.round(file.percent * 100)) || 0}
					/>
				</li>
			);
		});
	}

	return <ul>{renderFileList()}</ul>;
};

export default UploadFileList;
