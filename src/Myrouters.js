import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Anotherpage from "./Anotherpage";
import Home from "./Home";
import Profile from "./Profile";

export default function Myrouter() {
	return (
		<BrowserRouter>
			<Home></Home>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/profile" element={<Profile></Profile>}></Route>
				<Route path="/secondpage" element={<Anotherpage></Anotherpage>}></Route>
			</Routes>
		</BrowserRouter>
	);
}
