import { Link } from 'react-router-dom';

import MHD01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-1/MHD-01.png';
import MHD02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-1/MHD-02.png';
import MHD03 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-1/MHD-03.png';
import MHD04 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-1/MHD-04.png';
import MHD05 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-1/MHD-05.png';
import MHD06 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-1/MHD-06.png';

export const PortfolioDetail1 = () => {
  const project = {
    title: 'Design of Magnetohydrodynamic (MHD) Thruster',
    intro: 'Inspired by the Plasma channel this design has been optimized with the pervious design. The thruster is attached with 4-neodymium magnets fastened by fasteners and the electrodes are attached to provide the desired voltage ',
    technologies: ['Onshape',],
    specifications: [
      { parameter: 'Material1', value: 'Glass-filled epoxy' },
      { parameter: 'Material2', value: 'Glass-filled nylon' },
      { parameter: 'Material3', value: 'Neodymium magnets ' },
      { parameter: 'Weight', value: '0.206kg' },
      { parameter: 'Volume', value: '73.6 cm³' },
      // Add more specifications as needed
    ],
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'This design was created in Onshape, where the images of the parts are showcased having front,side and isometric views',
        images: [
          { id: 1, src: MHD01},
          { id: 2, src: MHD02},
          { id: 3, src: MHD03},
        ]
      },
      {
        id: 2,
        title: 'Draft',
        content: 'The draft of the design was created in Onshape, \n A1 sheet is used while the drawing scale is 1:1 and the dimensions shown are in millimeters',
        images: [
          { id: 4, src: MHD06},
        ]
      },
      {
        id: 3,
        title: 'Exploded View',
        content: 'The exploded views shows all the parts which are then assembled ',
        images: [
          { id: 5, src: MHD04},
        ]
      },
      {
        id: 4,
        title: 'Exploded View Draft',
        content: 'This shows the draft of the parts - Inlet Bellmouth, Inlet Duct, Flow Region, Converging Section, Venturi Opening Exhaust, and Outlet are shown. ',
        images: [
          { id: 6, src: MHD05},
        ]
      }
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
          {/* Specifications Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-400">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <tbody className="divide-y divide-gray-700">
                {project.specifications.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300 w-1/3">
                      {item.parameter}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-400">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
