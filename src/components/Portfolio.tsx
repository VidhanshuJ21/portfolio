import { Link } from 'react-router-dom';

export const Portfolio = () => {
  // Sample portfolio items data with image paths
  const portfolioItems = [
		{
			id: 1,
			title: "Design of MHD Thruster",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-01.png",
		},
		{
			id: 2,
			title: "Drone Frame Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-02.png",
		},
		{
			id: 3,
			title: "Design of Leaf Spring",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-03.png",
		},
		{
			id: 4,
			title: "Wing Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-04.png",
		},
		{
			id: 5,
			title: "Rover Model",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-05.png",
		},
		{
			id: 6,
			title: "Wing-Propeller model",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-06.png",
		},
		{
			id: 7,
			title: "Wind Tunnel Model",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-07.png",
		},
		{
			id: 8,
			title: "Furniture Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-08.png",
		},
		{
			id: 9,
			title: "Sofa Set Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-09.png",
		},
		{
			id: 10,
			title: "Centrifugal Impeller Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-10.png",
		},
		{
			id: 11,
			title: "Spring Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-11.png",
		},
		{
			id: 12,
			title: "Car Chassis Design",
			image: "/portfolio/src/assets/Poster_cover/Portfolio-12.png",
		},
  ];
   
  return (
		<section id="portfolio" className="px-4 sm:px-8 py-16">
			<h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">
				Portfolio
			</h2>
			{/* Portfolio Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
				{portfolioItems.map((item) => (
					<Link
						key={item.id}
						to={`/portfolio/models/${item.id}`}
						className="group aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
					>
						{/* Project Image */}
						<div className="w-full h-full">
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								onError={(e) => {
									// Fallback to a solid color if image fails to load
									const target = e.target as HTMLImageElement;
									target.src = `https://placehold.co/600x600/1f2937/ffffff?text=${encodeURIComponent(
										item.title
									)}`;
									target.className =
										"w-full h-full object-cover";
								}}
							/>
						</div>

						{/* Title Overlay */}
						<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
							<h3 className="text-lg font-bold text-white line-clamp-1">
								{item.title}
							</h3>
						</div>

						{/* Hover Overlay with View Button */}
						<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
								View Project
							</span>
						</div>
					</Link>
				))}
			</div>
		</section>
  );
};