import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-between px-16 py-16 pt-32">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          HI, I AM<br />
          <span className="text-white">VIDHANSHU JADHAV.</span>
        </h1>
        
        <p className="text-gray-300 text-lg mb-8 max-w-md">
          Aspiring developer and designer learning CAD design, simulation, and 
          creativity to solve real-world problems.
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-900 text-white px-4 py-3 rounded-full font-semibold"
          >
            CONTACT ME
          </Button>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
              <a href="https://www.linkedin.com/in/vidhanshu-jadhav-b5b5b8239/" className="text-white font-bold">in</a>
            </div>
            <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
            <a href="https://github.com/VidhanshuJ21" className="text-white font-bold">G</a>
            </div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="mt-8">
        <a href="Vidhanshu_Jadhav-Resume.pdf" download className="border-2 border-gray-600 text-white px-6 py-2 rounded hover:border-orange-500 transition-colors">
            Download Resume
          </a>
        </div>
      </div>
      
      {/* Right Content - Profile Image Placeholder */}
      <div className="flex-1 flex justify-center">
        <div className="w-80 h-100 bg-gradient-to-br from-orange-300 to-orange-500 rounded-4xl shadow-4xl shadow-orange-500/30 flex items-center justify-center">
          <div className="w-72 h-90 bg-gray-300 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};