import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Portfolio } from "../interfaces/portfolio";
import { useParams } from "react-router-dom";
import { ImageGallery } from "../components/ui/ImageGallery";


export default function PortfolioDetail() {
	const [data, setData] = useState<Portfolio | null>(null);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		fetch(`/portfolio/data/cad/model${id}.json`)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
			<div className="max-w-6xl mx-auto">
				<Link
					to="/portfolio"
					className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors"
				>
					<svg
						className="w-5 h-5 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Back to Projects
				</Link>

				<div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
					{/* Main Title */}
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
						{data?.title}
					</h1>

					{/* Introduction */}
					<p className="text-gray-300 text-lg mb-8">{data?.intro}</p>

					{/* Sections */}
					{data &&
						data?.sections &&
						data.sections.map((section, index) => (
							<section
								key={section.id}
								className={`mb-12 ${
									index > 0
										? "pt-8 border-t border-gray-700"
										: ""
								}`}
							>
								<h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-400">
									{section.title}
								</h2>

								<div className="prose prose-invert max-w-none mb-6">
									<p className="text-gray-300">
										{section.content}
									</p>
								</div>
								<ImageGallery images={section.images} />
							</section>
						))}
					{/* Specifications Table */}
					<div className="mb-16">
						{data &&
						data.specifications &&
						data.specifications.length > 0 ? (
							<div className="mb-6">
								<h2 className="text-2xl font-semibold mb-6 text-orange-400">
									Technical Specifications
								</h2>
							</div>
						) : null}
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-700">
								<tbody className="divide-y divide-gray-700">
									{data &&
										data.specifications &&
										data.specifications.map(
											(item, index) => (
												<tr
													key={index}
													className="hover:bg-gray-800/50"
												>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300 w-1/3">
														{item.parameter}
													</td>
													<td className="px-6 py-4 whitespace-normal text-sm text-gray-400">
														{item.value}
													</td>
												</tr>
											)
										)}
								</tbody>
							</table>
						</div>
					</div>
					{/* Technologies Used */}
					<div className="mt-12 pt-6 border-t border-gray-700">
						<h2 className="text-xl font-semibold mb-4 text-gray-300">
							Technologies Used
						</h2>
						<div className="flex flex-wrap gap-2">
							{data &&
								data.technologies &&
								data.technologies.map((tech, index) => (
									<span
										key={index}
										className="bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300"
									>
										{tech}
									</span>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
