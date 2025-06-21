import { Link } from 'react-router-dom';

import LF01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-01.png';
import LF02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-02.png';
import LF03 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-03.png';
import LF04 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-04.png';
import LF05 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-05.png';
import LF06 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-06.png';
import LF07 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-07.png';
import LF08 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-08.png';
import LF09 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-09.png';
import LF10 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-10.png';
import LF11 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-11.png';
import LF12 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-12.png';
import LF13 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-13.png';
import LF14 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-14.png';
import LF15 from '../assets/PORTFOLIO-CAD-FEA/PORTFOILO-3/LF-15.png';


export const PortfolioDetail3 = () => {
  const project = {
    title: 'Design and Finite Element Analysis of Leaf Spring',
    intro: 'Leaf springs are essential suspension components in automotive and heavy vehicle systems due to their simplicity, cost-effectiveness, and load-bearing capabilities. Made from high-strength steel, they absorb shocks, maintain vehicle height, and transmit loads from axle to chassis. The material used was Gray Cast Iron,Glass fibre epoxy,Carbon Fiber Reinforced Polymer',
    technologies: ['CATIA V5','Ansys','Onshape'],
    specifications: [
      { parameter: 'Material1', value: 'Cast Iron' },
      { parameter: 'Mateial2', value: 'Glass fibre epoxy' },
      { parameter: 'Mateial3', value: 'Carbon Fiber Reinforced Polymer' },
      // Add more specifications as needed
    ],
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'This design was created in CATIA V5, where the images of the parts are showcased having front,side and isometric views',
        images: [
          { id: 1, src: LF01},
          { id: 2, src: LF02},
        ]
      },
      {
        id: 2,
        title: 'Draft',
        content: 'The draft of the design was created in Onshape, \n A4 sheet is used while the drawing scale is 1:2 and the dimensions shown are in millimeters',
        images: [
          { id: 3, src: LF03},
        ]
      },
      {
        id: 3,
        title: 'Meshing and Boundary Conditions',
        content: 'The mesh sixe was given 3.5mm, and the 2 fixed support were applied and a force of 400N as shown.',
        images: [
          { id: 4, src: LF04},
          { id: 5, src: LF05},
          { id: 6, src: LF06},
        ]
      },
      {
        id: 4,
        title: 'Finite Element Analysis- ANSYS FEA Structural',
        content: 'The FEA analysis was performed where mesh were provided with required boundary conditions and the results were obtained - Total Deformationm, Equvivalent stress and strain, maximum shear and principal stress and shear stress ',
        images: [
          { id: 7, src: LF07},
          { id: 8, src: LF08},
          { id: 9, src: LF09},
          { id: 10, src: LF10},
          { id: 11, src: LF11},
          { id: 12, src: LF12},
          { id: 13, src: LF13},
          { id: 14, src: LF14},
          { id: 15, src: LF15},
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
