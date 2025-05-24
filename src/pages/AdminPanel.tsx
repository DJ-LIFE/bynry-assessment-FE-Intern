import { profiles as dummyData } from "@/data/profiles";
import { useState } from "react";

export const AdminPanel = () => {
	const [data, setData] = useState(dummyData);
	const handleDelete = (index: number) => {
		setData(data.filter((_, i) => i !== index));
	};

	// const handleAdd = () => {
	//     setData([
	//         ...data,
	//         {
	//             name:
	//         }
	//     ])
	// }
	return (
		<div className="container mx-auto">
			<div className="flex flex-col justify-center gap-4 mt-6">
				<h4 className="text-3xl font-[700] text-left text-neutral-700">
					Admin Panel
				</h4>
				<div>
					<ul className="space-y-4">
						{data.map((p, i) => (
							<li
								key={i}
								className="border p-4 flex justify-between rounded-lg border-neutral-400"
							>
								<span className="text-neutral-700 font-medium">
									{p.name}
								</span>
								<div>
									<button
										className="text-purple-600 cursor-pointer text-xs py-1 px-2 font-semibold hover:bg-purple-50 transition ease-in-out rounded-md"
										// onClick={() => handleDelete(i)}
									>
										Edit
									</button>
									<button
										className="text-red-600 cursor-pointer text-xs font-semibold hover:bg-red-50 transition ease-in-out px-2 rounded-md"
										onClick={() => handleDelete(i)}
									>
										Delete
									</button>
								</div>
							</li>
						))}
					</ul>
					<div className="flex justify-center mt-10">
						<button
							className="bg-purple-600 text-white cursor-pointer py-1 px-4 font-semibold transition ease-in-out rounded-md"
							// onClick={() => handleDelete(i)}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const InputForm = () => {
    <div>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter yout Name..." />
    </div>
}
