import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function Home() {
	var post = [
		{ images: "1678426832687sinhgad1.jpg" },
		{ images: "1678426832655sinhgad1.jpg" },
		{ images: "1678343838896lohagad.jpg" },
		{ images: "1678260468439sinhgad.jpg" },
	];
	return (
		<div>
			<div className="text-center">
				<img
					src="postImages/1678260468439sinhgad.jpg"
					class="img-fluid p-2"
					alt="Responsive image"
				></img>
			</div>
			<h1>welcome</h1>
			<Link to={"/secondpage"}>hiii</Link>

			{
				<div className="row">
					{post
						.slice(0)
						.reverse()
						.map((each, index) => {
							// console.log(each);
							return <Profile data={each}></Profile>;
						})}
				</div>
			}
		</div>
	);
}
