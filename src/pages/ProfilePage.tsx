import { useParams } from "react-router";
import { useProfileContext } from "@/contexts/ProfileContext";
import { Map } from "@/components/Map";
const ProfilePage = () => {
	const { id } = useParams();
	const { profiles } = useProfileContext();
	const profile = profiles[Number(id)];

	if (!profile) return <p>Profile Not Found</p>;
	return (
		<div className="container mx-auto p-6">
			<div className="flex flex-col md:flex-row items-start gap-4 bg-white p-4 rounded-2xl shadow-md">
				<img
					src={profile.img}
					alt={profile.name}
					className="w-80 h-110 object-cover rounded"
				/>
				<div className="flex flex-col justify-between w-full px-6 space-y-2">
					<h2 className="text-3xl font-[700] text-left text-neutral-700">
						{profile.name}
					</h2>
					<p className="text-neutral-700 text-base font-[400]">
						{profile.description}
					</p>

					{profile.contact && (
						<div className="space-y-1">
							<h3 className="text-lg font-[600] text-neutral-700">
								Contact
							</h3>
							<p className="text-neutral-600">
								{profile.contact}
							</p>
						</div>
					)}

					{profile.interests && profile.interests.length > 0 && (
						<div className="space-y-2">
							<h3 className="text-lg font-[600] text-neutral-700">
								Interests
							</h3>
							<div className="flex flex-wrap gap-2">
								{profile.interests.map((interest, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-neutral-100 shadow-sm text-neutral-800 rounded-full text-sm font-medium"
									>
										{interest}
									</span>
								))}
							</div>
						</div>
					)}

					<hr className="border-neutral-400 border-dashed" />
					<div className="w-full max-w-lg">
						<Map
							coordinates={profile.coordinates}
							name={profile.name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
