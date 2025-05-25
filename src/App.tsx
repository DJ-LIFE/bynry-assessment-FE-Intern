import { Route, Routes, useNavigate } from "react-router";
import HomePage from "./pages/HomePage";
import { AdminPanel } from "./pages/AdminPanel";
import ProfilePage from "./pages/ProfilePage";
import { ProfileProvider } from "./contexts/ProfileContext";

function App() {
	const navigate = useNavigate();
	return (
		<ProfileProvider>
			<div className="bg-slate-50 min-h-screen">
				<div className="h-16 bg-purple-500 border-b border-neutral-500 shadow-md sticky flex justify-between items-center font-inter ">
					<nav className="container mx-auto flex justify-between items-center">
						<a href="/">
							<span className="text-white font-semibold">
								Bynry Assessment
							</span>
						</a>
						<button
							onClick={() => {
								navigate("/admin");
							}}
							className="bg-purple-200 hover:bg-purple-100 hover:transition-all hover:duration-300 text-neutral-800 px-6 py-2 rounded-3xl font-medium shadow-md cursor-pointer"
						>
							Admin
						</button>
					</nav>
				</div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/admin" element={<AdminPanel />} />
					<Route path="/profile/:id" element={<ProfilePage />} />
				</Routes>
			</div>
		</ProfileProvider>
	);
}

export default App;
