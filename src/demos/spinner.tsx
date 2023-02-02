import Spinner from "../components/Spinner";

const SpinnerDemo = () => {
	return (
		<div className="m-10">
			{/* tailwind */}
			<Spinner className="text-8xl" />

			{/* 优先级：size>className */}
			<Spinner size="lg" className="text-8xl" />
			<Spinner size="lg" className="text-8xl" />
		</div>
	);
};

export default SpinnerDemo;
