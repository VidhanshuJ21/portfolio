import { Link } from 'react-router-dom';

import WP01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-6/WP-01.png';
import WP02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-6/WP-02.png';
import WP03 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-6/WP-03.png';
import WP04 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-6/WP-04.png';
import P01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-6/P-01.png';


export const PortfolioDetail6 = () => {
  const project = {
    title: 'Design of a Wing-Integrated Propulsion System',
    intro: 'The main wing was designed using the NACA 66-212 airfoil, a laminar flow airfoil with a high lift-to-drag ratio, 12% maximum thickness, and good stall characteristics for medium-speed flight, accommodating embedded nacelles and providing structural support.The propeller configuration consists of four symmetrical propellers with four blades, and the Clark Y airfoil is chosen for its flat lower surface, good lift characteristics, and proven use in small propeller and RC aircraft applications.The nacelle, designed to house brushless electric motors, ESCs, and actuators, is streamlined and faired into the wing to minimize interference drag.',
    technologies: ['CATIA V5','Ansys','Onshape'],
    sections: [
      {
        id: 1,
        title: 'Overview',
        images: [
          { id: 1, src: WP01},
          { id: 2, src: WP02},
          { id: 3, src: WP03},
        ]
      },
      {
        id: 2,
        title: 'Draft',
        content: 'The draft of the design was created in Onshape, \n A4 sheet is used while the drawing scale is 1:2 and the dimensions shown are in millimeters',
        images: [
          { id: 4, src: WP04},
          { id: 5, src: P01},
        ]
      },
    ]
  };

  const ImageGallery = ({ images }: { images: Array<{id: number, src: string}> }) => (
    <div className="my-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <div 
            key={image.id}
            className="w-full sm:w-[calc(50%-0.1rem)] 0.000001g:w-[calc(50%-0.1rem)] bg-gray-600 rounded-lg overflow-hidden border-2 border-white hover:border-orange-500 transition-colors p-2"
          >
            <img 
              src={image.src} 
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
            {project.title}
          </h1>
          
          {/* Introduction */}
          <p className="text-gray-300 text-lg mb-8">
            {project.intro}
          </p>
          
          {/* Sections */}
          {project.sections.map((section, index) => (
            <section key={section.id} className={`mb-12 ${index > 0 ? 'pt-8 border-t border-gray-700' : ''}`}>
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
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
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
};