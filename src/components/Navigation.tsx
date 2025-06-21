
export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6 fixed w-full top-0 bg-black/90 backdrop-blur-sm z-50">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-12 h-8 bg-orange-500 relative">
          <div className="absolute top-1 left-1 w-8 h-4 bg-orange-600 transform rotate-12"></div>
          <div className="absolute bottom-1 right-1 text-white font-bold text-sm">VJ</div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-8">
        <button onClick={() => scrollToSection('home')} className="text-orange-500 hover:text-orange-400 transition-colors">Home</button>
        <button onClick={() => scrollToSection('projects')} className="text-white hover:text-orange-400 transition-colors">My Projects</button>
        <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-orange-400 transition-colors">Portfolio</button>
        <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition-colors">About Me</button>
        <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-400 transition-colors">Contact Me</button>
      </div>
    </nav>
  );
};