import { Link } from 'react-router-dom';

import FUR01 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-8/FUR-01.png';
import FUR02 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-8/FUR-02.png';
import FUR05 from '../assets/PORTFOLIO-CAD-FEA/PORTFOLIO-8/FUR-05.png';



export const PortfolioDetail8 = () => {
  const project = {
    title: 'Design of a Furniture',
    intro: 'The furniture was designed in Onshape',
    technologies: ['Onshape'],
    specifications: [
      { parameter: 'Material', value: 'Redwood' },
      { parameter: 'Weight', value: '745 kg' },
      // Add more specifications as needed
    ],
    sections: [
      {
        id: 1,
        title: 'Overview',
        images: [
          { id: 1, src: FUR01},
          { id: 2, src: FUR02},
        ]
      },
      {
        id: 2,
        title: 'Draft',
        content: 'The draft of the design was created in Onshape, \n A4 sheet is used while the drawing scale is 1:2 and the dimensions shown are in millimeters',
        images: [
          { id: 3, src: FUR05},

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