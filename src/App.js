import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-10">
        <div className="container flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">Your Name</div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                } font-medium transition-colors`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I'm <span className="text-blue-600">Your Name</span></h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">Frontend Developer</h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-8">
            I build exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="btn">Get In Touch</a>
            <a href="#projects" className="btn bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">View My Work</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-12">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto">
                {/* Add your photo here */}
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="mb-4">
                Hello! I'm a passionate frontend developer with a keen eye for design and a love for creating
                beautiful, functional websites and applications.
              </p>
              <p className="mb-4">
                My journey in web development started [X] years ago, and since then I've had the privilege of working
                with amazing teams and clients to bring their ideas to life.
              </p>
              <p>
                When I'm not coding, you can find me [your hobbies/interests].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                    <a href="#" className="text-blue-600 hover:underline">Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git'].map((skill) => (
              <div key={skill} className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">
                  {/* Add skill icons here */}
                  {skill === 'HTML5' && '📄'}
                  {skill === 'CSS3' && '🎨'}
                  {skill === 'JavaScript' && '📜'}
                  {skill === 'React' && '⚛️'}
                  {skill === 'Node.js' && '🖥️'}
                  {skill === 'Git' && '🐙'}
                </div>
                <h4 className="font-medium">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {['github', 'linkedin', 'twitter'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com/yourusername`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">{social}</span>
                <span className="text-2xl">
                  {social === 'github' && '🐙'}
                  {social === 'linkedin' && '💼'}
                  {social === 'twitter' && '🐦'}
                </span>
              </a>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

