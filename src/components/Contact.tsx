import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from 'framer-motion';

const socialLinks = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/vidhanshu-jadhav-b5b5b8239/",
		icon: (
			<svg
				className="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
		color: "hover:bg-orange-700",
	},
	{
		name: "GitHub",
		url: "https://github.com/VidhanshuJ21",
		icon: (
			<svg
				className="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clipRule="evenodd"
				/>
			</svg>
		),
		color: "hover:bg-orange-700",
	},
	{
		name: "Email",
		url: "mailto:jadhavvidhanshu@gmail.com",
		icon: (
			<svg
				className="w-5 h-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
		color: "hover:bg-orange-700",
	},
	{
		name: "Behance",
		url: "https://www.behance.net/vidhanshujadhav",
		icon: (
			<svg
				className="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M22 7h-7v-2h7v2zm1.77 9.77a4.28 4.28 0 01-3.81 2.23h-5.34a4.28 4.28 0 01-4.27-4.27A4.28 4.28 0 0114.62 10.5h5.34a4.28 4.28 0 013.81 6.27zM15.67 12.5a2.78 2.78 0 00-2.77-2.77h-2.9v5.54h2.9a2.78 2.78 0 002.77-2.77zM1.5 6.5h5.5a4.5 4.5 0 110 9H1.5v-9zm2 2v5h3.5a2.5 2.5 0 100-5h-3.5z" />
			</svg>
		),
		color: "hover:bg-orange-700",
	},
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [mailtoError, setMailtoError] = useState(false);

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    // Try to open mailto link
    const mailtoUrl = `mailto:jadhavvidhanshu@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    // Fallback: show popup if mail client not configured (after short delay)
    setTimeout(() => {
      // Heuristic: if still on the same page, likely mailto failed
      if (document.hasFocus()) {
        setMailtoError(true);
      }
    }, 1000);
  };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.2
  //     }
  //   }
  // };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
		<section
			id="contact"
			className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12 md:mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.5 },
						},
					}}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						Get In <span className="text-orange-500">Touch</span>
					</h2>
					<div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg">
						Have a project in mind or want to discuss potential
						opportunities? Feel free to reach out!
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={itemVariants}
						className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl"
					>
						<h3 className="text-2xl font-semibold text-white mb-6">
							Send me a message
						</h3>
						<form onSubmit={handleMailto} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-300 mb-2"
									>
										Your Name
									</label>
									<Input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
										placeholder="John Doe"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300 mb-2"
									>
										Your Email
									</label>
									<Input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
										placeholder="john@example.com"
										required
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									Subject
								</label>
								<Input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
									placeholder="What's this about?"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									Your Message
								</label>
								<Textarea
									id="message"
									name="message"
									rows={5}
									value={formData.message}
									onChange={handleChange}
									className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
									placeholder="Hi Vidhanshu, I'd like to talk about..."
									required
								/>
							</div>
							<div className="pt-2">
								<Button
									type="submit"
									className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
								>
									Send Message
								</Button>
							</div>
						</form>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={itemVariants}
						className="space-y-8"
					>
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl h-full">
							<h3 className="text-2xl font-semibold text-white mb-6">
								Contact Information
							</h3>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
										<svg
											className="w-5 h-5 text-orange-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-sm font-medium text-gray-300 mb-1">
											Email
										</h4>
										<a
											href="mailto:jadhavvidhanshu@gmail.com"
											className="text-white hover:text-orange-500 transition-colors"
										>
											jadhavvidhanshu@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
										<svg
											className="w-5 h-5 text-orange-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-sm font-medium text-gray-300 mb-1">
											Phone
										</h4>
										<a
											href="tel:+919881441558"
											className="text-white hover:text-orange-500 transition-colors"
										>
											+91 9881441558
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
										<svg
											className="w-5 h-5 text-orange-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-sm font-medium text-gray-300 mb-1">
											Location
										</h4>
										<p className="text-white">
											Pune, Maharashtra, India
										</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="mt-10">
								<h4 className="text-sm font-medium text-gray-300 mb-4">
									Follow Me
								</h4>
								<div className="flex space-x-4">
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.name}
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white ${social.color} transition-all duration-300 transform hover:scale-110`}
											aria-label={social.name}
											whileHover={{ y: -3 }}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.1 * index }}
										>
											{social.icon}
										</motion.a>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
  );
};