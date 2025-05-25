import InputForm from "@/components/InputForm";
import { useProfileContext } from "@/contexts/ProfileContext";
import { useState } from "react";
import { useNavigate } from "react-router";

export const AdminPanel = () => {
	const { profiles, addProfile, deleteProfile, updateProfile } =
		useProfileContext();
	const [showForm, setShowForm] = useState(false);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);
	const navigate = useNavigate();
	const handleAdd = (newProfile: any) => {
		addProfile(newProfile);
		setShowForm(false);
		// Remove immediate navigation to let user see the updated list
		// navigate("/");
	};

	const handleEdit = (index: number) => {
		setEditingIndex(index);
		setShowForm(true);
	};

	const handleUpdate = (index: number, updatedProfile: any) => {
		updateProfile(index, updatedProfile);
		setShowForm(false);
		setEditingIndex(null);
		// Remove immediate navigation to let user see the updated list
		// navigate("/");
	};

	const handleCancel = () => {
		setShowForm(false);
		setEditingIndex(null);
	};

	const editingProfile =
		editingIndex !== null ? profiles[editingIndex] : undefined;

	return (
		<div className="container mx-auto">
			<div className="flex flex-col justify-center gap-4 mt-6 mx-2">
				<div className="flex justify-between items-center">
					<h4 className="text-3xl font-[700] text-left text-neutral-700">
						Admin Panel
					</h4>
					<button
						className="bg-blue-600 text-white cursor-pointer py-2 px-4 font-semibold transition ease-in-out rounded-md hover:bg-blue-700"
						onClick={() => navigate("/")}
					>
						← Back to Home
					</button>
				</div>

				{showForm ? (
					<div>
						<div className="flex justify-between items-center mb-4">
							<h5 className="text-xl font-semibold text-neutral-700">
								{editingIndex !== null
									? "Edit Profile"
									: "Add New Profile"}
							</h5>
							<button
								className="text-red-600 cursor-pointer text-sm font-semibold hover:bg-red-50 transition ease-in-out py-1 px-2 rounded-md"
								onClick={handleCancel}
							>
								Cancel
							</button>
						</div>
						<InputForm
							onAdd={handleAdd}
							onUpdate={handleUpdate}
							editingProfile={editingProfile}
							editingIndex={editingIndex || undefined}
						/>
					</div>
				) : (
					<div>
						<div className="mb-6">
							<h5 className="text-xl font-semibold text-neutral-700 mb-4">
								Manage Profiles ({profiles.length} total)
							</h5>
						</div>
						<ul className="space-y-4">
							{profiles.map((p, i) => (
								<li
									key={i}
									className="border p-4 flex justify-between items-center rounded-lg border-neutral-400 bg-white shadow-sm"
								>
									<div className="flex flex-col">
										<span className="text-neutral-700 font-medium text-lg">
											{p.name}
										</span>
										<span className="text-neutral-500 text-sm">
											{p.contact}
										</span>
									</div>
									<div className="flex gap-2">
										<button
											className="text-purple-600 cursor-pointer text-xs py-2 px-3 font-semibold hover:bg-purple-50 transition ease-in-out rounded-md border border-purple-200"
											onClick={() => handleEdit(i)}
										>
											Edit
										</button>
										<button
											className="text-red-600 cursor-pointer text-xs font-semibold hover:bg-red-50 transition ease-in-out py-2 px-3 rounded-md border border-red-200"
											onClick={() => deleteProfile(i)}
										>
											Delete
										</button>
									</div>
								</li>
							))}
						</ul>
						<div className="flex justify-center mt-10">
							<button
								className="bg-purple-600 text-white cursor-pointer py-1 px-4 font-semibold transition ease-in-out rounded-md hover:bg-purple-700"
								onClick={() => setShowForm(true)}
							>
								Add Profile
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
