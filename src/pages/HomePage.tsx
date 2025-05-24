import { Map } from "@/components/Map";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/data/profiles";
import { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
	const [popup, setPopup] = useState<number | null>(null);
	const navigate = useNavigate();
	const handleMap = (id: number) => {
		setPopup(popup === id ? null : id);
	};
	return (
		<>
			<div className="container mx-auto flex justify-center items-center mt-20 gap-4">
				{profiles.map((data, index) => (
					<>
						<div
							key={index}
							onClick={() => navigate(`/profile/${index}`)}
						>
							<ProfileCard
								name={data.name}
								description={data.description}
								img={data.img}
								onClickSummary={(e) => {
									e.stopPropagation();
									handleMap(index);
								}}
							/>
						</div>
						{popup === index && (
							<div className="fixed inset-0 bg-black/80 bg-opacity-10 flex justify-center items-center z-50">
								<div className="bg-white rounded-lg p-6 max-w-110 max-h-100 w-full mx-4 relative">
									<button
										onClick={() => setPopup(null)}
										className="absolute top-4 right-4 text-red-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
									>
										×
									</button>
									<Map
										coordinates={data.coordinates}
										name={data.name}
									/>
								</div>
							</div>
						)}
					</>
				))}
			</div>
		</>
	);
};

export default HomePage;
