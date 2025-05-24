import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { AdminPanel } from "./pages/AdminPanel";

function App() {
	return (
		<BrowserRouter>
			<div className="h-16 bg-purple-500 border-b border-neutral-500 shadow-md sticky flex justify-between items-center font-inter ">
				<nav className="container mx-auto ">
					<a href="">
						<span className="text-white font-semibold">
							Bynry Assessment
						</span>
					</a>
				</nav>
			</div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/admin" element={<AdminPanel />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
