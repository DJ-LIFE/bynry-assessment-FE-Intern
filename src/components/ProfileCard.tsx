interface ProfileProps {
	name: String;
	img: string;
	description: string;
}
export const ProfileCard = ({ name, img, description }: ProfileProps) => {
	return (
		<div className="flex flex-col justify-center items-center border border-neutral-200 shadow-lg rounded-4xl max-w-90 p-2 space-y-4">
			<img
				src={img}
				alt=""
				className="w-full h-70 object-cover rounded-3xl"
			/>
			<div className="w-full p-4 pb-10 space-y-4">
				<h5 className="text-3xl font-[700] text-left text-neutral-700">
					{name}
				</h5>
				<p className="text-neutral-500 font-[500]">{description}</p>
				<button className="flex justify-end w-full">
					<span className="bg-neutral-200 hover:bg-neutral-300 hover:transition-all hover:duration-300 text-neutral-800 px-6 py-2 rounded-3xl font-medium shadow-md cursor-pointer">Summary</span>
				</button>
			</div>
		</div>
	);
};
