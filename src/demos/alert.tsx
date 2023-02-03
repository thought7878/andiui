import Alert from "../components/Alert";

const AlertDemo = () => {
	return (
		<div className="m-10 w-80">
			<div className="mb-5">
				<Alert className="bg-sky-600" closeBtn>
					bg-sky-600
				</Alert>
			</div>
			<div className="mb-5">
				<Alert className="bg-rose-600" closeBtn>
					bg-sky-600
				</Alert>
			</div>
			<div className="mb-5">
				<Alert className="px-18 bg-sky-600 py-16" closeBtn>
					自定义padding
				</Alert>
			</div>
			<div className="mb-5">
				<Alert type="primary" closeBtn className="fixed top-1/2 left-8">
					自定义位置：right-center
				</Alert>
			</div>
		</div>
	);
};

export default AlertDemo;
