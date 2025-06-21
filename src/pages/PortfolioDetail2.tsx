import { Link } from 'react-router-dom';

import D_01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/D-01.png';
import D_02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/D-02.png';
import D_03 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/D-03.png';
import D_05 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/D-05.png';
import DF_01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-01.png';
import DF_02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-02.png';
import DF_03 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-03.png';
import DF_04 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-04.png';
import DF_05 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-05.png';
import DF_06 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-06.png';
import DF_07 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-07.png';
import DF_08 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-08.png';
import DF_09 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-2/DF-09.png';

export const PortfolioDetail2 = () => {
  const project = {
    title: 'Design and Finite Element Analysis of Drone Frame',
    intro: 'The drone frame was designed using CATIA V5, followed by a structural analysis to evaluate its mechanical performance. ',
    technologies: ['CATIA V5','Ansys','Onshape'],
    specifications: [
      { parameter: 'Material1', value: 'PC/ABS' },
      { parameter: 'Density', value: '1.11e-06kg/mm^3' },
      { parameter: 'Poissons Ratio', value: '0.353' },
      { parameter: 'Weight', value: '0.90kg' },
      // Add more specifications as needed
    ],
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'This design was created in CATIA V5, where the images of the parts are showcased having front,side and isometric views',
        images: [
          { id: 1, src: D_01},
          { id: 2, src: D_02},
          { id: 3, src: D_03},
        ]
      },
      {
        id: 2,
        title: 'Draft',
        content: 'The draft of the design was created in Onshape, \n A4 sheet is used while the drawing scale is 1:2 and the dimensions shown are in millimeters',
        images: [
          { id: 4, src: D_05},
        ]
      },
      {
        id: 3,
        title: 'Finite Element Analysis- ANSYS FEA Structural',
        content: 'The FEA analysis was performed where mesh were provided with required boundary conditions and the results were obtained - Total Deformationm, Equvivalent stress and strain, maximum shear and principal stress and shear stress ',
        images: [
          { id: 6, src: DF_01},
          { id: 7, src: DF_02},
          { id: 8, src: DF_03},
          { id: 9, src: DF_04},
          { id: 10, src: DF_05},
          { id: 11, src: DF_06},
          { id: 12, src: DF_07},
          { id: 13, src: DF_08},
          { id: 14, src: DF_09},
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
