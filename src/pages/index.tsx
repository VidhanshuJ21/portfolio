import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutMe } from '@/components/AboutMe';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
		<div className="min-h-screen bg-gray-900 text-white">
			<Head>
				<title>Vidhanshu Jadhav | Portfolio</title>
				<meta
					name="description"
					content="Portfolio of Vidhanshu Jadhav - Aspiring developer and designer"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<Navigation />

			<main className="pt-16">
				{/* Hero Section */}
				<section
					id="home"
					className="flex min-h-screen  items-center justify-center"
				>
					<Hero />
				</section>

				{/* Projects Section */}
				<motion.section
					id="projects"
					className="py-20 sm:py-24 md:py-28 lg:py-32 relative"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900 -z-10"></div>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<ProjectsSection />
					</div>
				</motion.section>

				{/* About Me Section */}
				<motion.section
					id="about"
					className="py-20 sm:py-24 md:py-28 lg:py-32 bg-gray-900"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<AboutMe />
					</div>
				</motion.section>

				{/* Portfolio/Work Section */}
				<motion.section
					id="portfolio"
					className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900 -z-10"></div>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<Portfolio />
					</div>
				</motion.section>

				{/* Contact Section */}
				<motion.section
					id="contact"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<Contact />
				</motion.section>
			</main>

			<footer className="bg-gray-900 border-t border-gray-800 py-8">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<p className="text-gray-400 text-sm">
								&copy; {new Date().getFullYear()} Vidhanshu
								Jadhav. All rights reserved.
							</p>
						</div>
						<div className="flex space-x-4">
							<a
								href="https://www.linkedin.com/in/vidhanshu-jadhav-b5b5b8239/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-orange-500 transition-colors"
								aria-label="LinkedIn"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
							<a
								href="https://github.com/VidhanshuJ21"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-orange-500 transition-colors"
								aria-label="GitHub"
							>
								<span className="sr-only">GitHub</span>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="https://www.behance.net/vidhanshujadhav"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-orange-500 transition-colors"
								aria-label="Behance"
							>
								<span className="sr-only">Behance</span>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M22 7h-7v-2h7v2zm1.77 9.77a4.28 4.28 0 01-3.81 2.23h-5.34a4.28 4.28 0 01-4.27-4.27A4.28 4.28 0 0114.62 10.5h5.34a4.28 4.28 0 013.81 6.27zM15.67 12.5a2.78 2.78 0 00-2.77-2.77h-2.9v5.54h2.9a2.78 2.78 0 002.77-2.77zM1.5 6.5h5.5a4.5 4.5 0 110 9H1.5v-9zm2 2v5h3.5a2.5 2.5 0 100-5h-3.5z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
  );
};

export default Home;