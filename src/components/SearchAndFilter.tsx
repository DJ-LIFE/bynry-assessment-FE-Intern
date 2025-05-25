const SearchandFilter = ({
	searchTerm,
	onChange,
}: {
	searchTerm: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<div className="relative w-80 mx-auto border bg-white border-neutral-300 rounded-full focus-within:outline-2 focus-within:outline-purple-500">
			<input
				type="text"
				placeholder="Enter your search..."
				onChange={onChange}
				value={searchTerm}
				className="w-full appearance-none py-2 px-4 focus:outline-none rounded-full"
			/>
			<span className="absolute top-2.5 right-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-search text-neutral-400"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
					<path d="M21 21l-6 -6" />
				</svg>
			</span>
		</div>
	);
};

export default SearchandFilter;
