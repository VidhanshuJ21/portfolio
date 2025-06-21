import { Link } from 'react-router-dom';

import WT01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-7/WT-01.png';
import WT02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-7/WT-02.png';
import WT04 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-7/WT-04.png';

export const PortfolioDetail7 = () => {
  const project = {
    title: 'Wind Tunnel Design',
    intro: 'The project aims to design a compact wind tunnel system in Onshape for experimental and educational use, weighing approximately 580 kg. The wind tunnel, made of rosewood, combines structural integrity with portability and manufacturability, making it ideal for low-speed aerodynamic experiments.',
    technologies: ['Onshape'],
    specifications: [
      { parameter: 'Material', value: 'Rosewood' },
      { parameter: 'Weight', value: '580 kg' },
      // Add more specifications as needed
    ],
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'The wind tunnel was designed using parametric CAD modeling in Onshape, featuring modular components. It includes an inlet section with a smooth converging profile, a test section with a rectangular cross-section optimized for scale models, and an outlet section with a gradient expansion for suction-based airflow generation. The material used is rosewood due to its high density and stiffness, ensuring minimal vibration and deformation during testing.',
        images: [
          { id: 1, src: WT01},
          { id: 2, src: WT02},
        ]
      },
      {
        id: 2,
        title: 'Draft',
        content: 'The draft of the design was created in Onshape, \n A4 sheet is used while the drawing scale is 1:2 and the dimensions shown are in millimeters',
        images: [
          { id: 4, src: WT04},
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