import { useState, useEffect } from "react";

interface Profile {
	name: string;
	img: string;
	description: string;
	coordinates: { lat: number; lng: number };
	contact: string;
	interests: string[];
}

const InputForm = ({
	onAdd,
	onUpdate,
	editingProfile,
	editingIndex,
}: {
	onAdd: (profile: Profile) => void;
	onUpdate?: (index: number, profile: Profile) => void;
	editingProfile?: Profile;
	editingIndex?: number;
}) => {
	const [formData, setFormData] = useState({
		name: "",
		img: "",
		description: "",
		lat: "",
		lng: "",
		contact: "",
		interests: "",
	});
	useEffect(() => {
		if (editingProfile) {
			setFormData({
				name: editingProfile.name,
				img: editingProfile.img,
				description: editingProfile.description,
				lat: editingProfile.coordinates.lat.toString(),
				lng: editingProfile.coordinates.lng.toString(),
				contact: editingProfile.contact,
				interests: editingProfile.interests.join(", "),
			});
		} else {
			setFormData({
				name: "",
				img: "",
				description: "",
				lat: "",
				lng: "",
				contact: "",
				interests: "",
			});
		}
	}, [editingProfile]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const profileData = {
			name: formData.name,
			img: formData.img,
			description: formData.description,
			coordinates: {
				lat: parseFloat(formData.lat),
				lng: parseFloat(formData.lng),
			},
			contact: formData.contact,
			interests: formData.interests
				.split(",")
				.map((interest) => interest.trim()),
		};

		if (editingProfile && onUpdate && editingIndex !== undefined) {
			onUpdate(editingIndex, profileData);
		} else {
			onAdd(profileData);
		}

		setFormData({
			name: "",
			img: "",
			description: "",
			lat: "",
			lng: "",
			contact: "",
			interests: "",
		});
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4 mt-6 max-w-lg mx-auto"
		>
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-neutral-700 mb-1"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Enter your Name..."
					className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					required
				/>
			</div>
			<div>
				<label
					htmlFor="img"
					className="block text-sm font-medium text-neutral-700 mb-1"
				>
					Image URL
				</label>
				<input
					type="url"
					id="img"
					name="img"
					value={formData.img}
					onChange={handleChange}
					placeholder="Enter image URL..."
					className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					required
				/>
			</div>
			<div>
				<label
					htmlFor="description"
					className="block text-sm font-medium text-neutral-700 mb-1"
				>
					Description
				</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Enter description..."
					className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					rows={3}
					required
				/>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<label
						htmlFor="lat"
						className="block text-sm font-medium text-neutral-700 mb-1"
					>
						Latitude
					</label>
					<input
						type="number"
						id="lat"
						name="lat"
						value={formData.lat}
						onChange={handleChange}
						placeholder="e.g., 34.0522"
						step="any"
						className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="lng"
						className="block text-sm font-medium text-neutral-700 mb-1"
					>
						Longitude
					</label>
					<input
						type="number"
						id="lng"
						name="lng"
						value={formData.lng}
						onChange={handleChange}
						placeholder="e.g., -118.2437"
						step="any"
						className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
						required
					/>
				</div>
			</div>
			<div>
				<label
					htmlFor="contact"
					className="block text-sm font-medium text-neutral-700 mb-1"
				>
					Contact Email
				</label>
				<input
					type="email"
					id="contact"
					name="contact"
					value={formData.contact}
					onChange={handleChange}
					placeholder="Enter email..."
					className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					required
				/>
			</div>
			<div>
				<label
					htmlFor="interests"
					className="block text-sm font-medium text-neutral-700 mb-1"
				>
					Interests
				</label>
				<input
					type="text"
					id="interests"
					name="interests"
					value={formData.interests}
					onChange={handleChange}
					placeholder="Enter interests separated by commas..."
					className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					required
				/>
			</div>{" "}
			<button
				type="submit"
				className="w-full bg-purple-600 text-white cursor-pointer py-2 px-4 font-semibold transition ease-in-out rounded-md hover:bg-purple-700"
			>
				{editingProfile ? "Update Profile" : "Add Profile"}
			</button>
		</form>
	);
};

export default InputForm;
