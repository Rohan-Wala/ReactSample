import Profile from "./Profile";

export default function Anotherpage() {
	var post = [
		{ images: "1678426832687sinhgad1.jpg" },
		{ images: "1678426832655sinhgad1.jpg" },
		{ images: "1678343838896lohagad.jpg" },
		{ images: "1678260468439sinhgad.jpg" },
	];
	return (
		<div>
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
