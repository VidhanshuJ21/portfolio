import { Link, useParams } from "react-router-dom";
import { ImageGallery } from "../components/ui/ImageGallery";
import { useState } from "react";
import type { Project } from "../interfaces/project";
import { useEffect } from "react";

export default function ProjectDetail() {
    const [data, setData] = useState<Project | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`/portfolio/data/projects/project${id}.json`)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.error(err));
    }, [id]);

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

					{data &&
						data.software_project &&
						data.software_project.link && (
							<div className="flex flex-wrap gap-4 mb-8">
								<a
									href={data.software_project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm font-medium transition-colors"
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clipRule="evenodd"
										/>
									</svg>
									View on GitHub
								</a>
							</div>
						)}

					{/* Sections */}
					{data?.sections.map((section, index) => (
						<section
							key={section.id}
							className={`mb-12 ${
								index > 0 ? "pt-8 border-t border-gray-700" : ""
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

					{/* Technologies Used */}
					<div className="mt-12 pt-6 border-t border-gray-700">
						<h2 className="text-xl font-semibold mb-4 text-gray-300">
							Technologies Used
						</h2>
						<div className="flex flex-wrap gap-2">
							{data?.technologies.map((tech, index) => (
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