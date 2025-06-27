import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Content - Text */}
          <div className="w-full lg:w-1/2 xl:w-5/12 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="block text-gray-300">HI, I AM</span>
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  VIDHANSHU JADHAV
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0">
                Aspiring developer and designer learning CAD design,
                simulation, and creativity to solve real-world problems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  CONTACT ME
                </Button>

                <a
                  href="/Vidhanshu_Jadhav_Resume.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-gray-700 text-white rounded-full hover:border-orange-500 transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-8 sm:mt-10">
                {[
                  { 
                    name: 'LinkedIn', 
                    url: 'https://www.linkedin.com/in/vidhanshu-jadhav-b5b5b8239/', 
                    icon: 'in',
                    bg: 'bg-blue-600 hover:bg-blue-700'
                  },
                  { 
                    name: 'GitHub', 
                    url: 'https://github.com/VidhanshuJ21', 
                    icon: 'G',
                    bg: 'bg-gray-800 hover:bg-gray-700'
                  },
                  { 
                    name: 'Email', 
                    url: 'mailto:jadhavvidhanshu@gmail.com', 
                    icon: '@',
                    bg: 'bg-gray-800 hover:bg-gray-700'
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 transform hover:scale-110 ${social.bg}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="w-full lg:w-1/2 xl:w-7/12 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] xl:w-[32rem] xl:h-[36rem]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-3xl blur-2xl -z-10"></div>
              {/* Image Container */}
              <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20">
                <img 
                  src="/src/assets/Poster_cover/VJportfolio-image.jpg" 
                  alt="Vidhanshu Jadhav" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};