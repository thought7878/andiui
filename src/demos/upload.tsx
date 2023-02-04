import Upload from "../components/Upload";

const UploadDemo = () => {
	return (
		<div className="m-10">
			<Upload action="https://jsonplaceholder.typicode.com/posts" />
		</div>
	);
};

export default UploadDemo;
