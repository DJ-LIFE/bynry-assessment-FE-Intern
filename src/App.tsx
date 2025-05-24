import { Map } from "./components/Map";
import { ProfileCard } from "./components/ProfileCard";

function App() {
	return (
		<>
			<div className="h-16 bg-purple-500 border-b border-neutral-500 shadow-md sticky flex justify-between items-center font-inter ">
				<div className="container mx-auto ">
					<a href="">
						<span className="text-white font-semibold">
							Bynry Assessment
						</span>
					</a>
				</div>
			</div>
			<div className="container mx-auto flex justify-center items-center mt-20 gap-4">
				{profile.map((data, index) => (
					<div key={index}>
						<ProfileCard
							name={data.name}
							description={data.description}
							img={data.img}
							key={index}
						/>
					</div>
				))}
			</div>
			<Map
				coordinates={{ lat: 38.76530051187938, lng: -75.21166973231308 }}
				name="Gaurav"
			/>
		</>
	);
}

export default App;

const profile = [
	{
		name: "Shophie Bennet",
		img: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png",
		description:
			"Product designer who focuses on simplicity and usuability",
	},
	{
		name: "Marcus Johnson",
		img: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png",
		description:
			"Full-stack developer passionate about clean code and performance",
	},
	{
		name: "Elena Rodriguez",
		img: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png",
		description: "UX researcher dedicated to understanding user behavior",
	},
];
