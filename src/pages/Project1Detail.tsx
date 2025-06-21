import { Link } from 'react-router-dom';

export const Project1Detail = () => {
  const project = {
    title: 'Computational Study of Aerodynamic Effects in MultiPropeller Distributed Propulsion Aircraft',
    intro: 'A comprehensive analysis of distributed propulsion systems and their aerodynamic impacts on aircraft performance.',
    technologies: ['ANSYS-CFD-Fluent', 'SimScale', 'Onshape', 'Fusion360', 'XFLR5'],
    
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'This project investigates the computational analysis of a Distributed Propulsion System (DPS) and propeller-wing interaction, detailing the geometry, meshing, and simulation results.',
        images: [
          { id: 1, src: '/src/assets/PROJECT/PROJECT-01/DPS-01.png', alt: '4-bladed propeller-geometry' },
          { id: 2, src: '/src/assets/PROJECT/PROJECT-01/DPS-03.png', alt: 'propeller-wing intergrated geometry' },
          { id: 3, src: '/src/assets/PROJECT/PROJECT-01/DPS-08.png', alt: '3-bladed propeller-geometry' },
          { id: 4, src: '/src/assets/PROJECT/PROJECT-01/DPS-09.png', alt: '2-propeller aircraft configuration' },
          { id: 5, src: '/src/assets/PROJECT/PROJECT-01/DPS-10.png', alt: '4-propeller aircraft configuration' },
          { id: 6, src: '/src/assets/PROJECT/PROJECT-01/DPS-11.png', alt: '6-propeller aircraft configuration' },
        ]
      },
      {
        id: 2,
        title: 'Methodology',
        content: 'The study employed advanced computational fluid dynamics (CFD) techniques to analyze various propeller configurations and their interaction with the wing surface.',
        images: [
          { id: 4, src: '/src/assets/PROJECT/PROJECT-01/DPS-04.png', alt: 'ANSYS-Computation Domain' },
          { id: 5, src: '/src/assets/PROJECT/PROJECT-01/DPS-05.png', alt: 'ANSYS-Meshing' },
          { id: 6, src: '/src/assets/PROJECT/PROJECT-01/DPS-12.png', alt: 'SimScale-Computation Domain' },
          { id: 7, src: '/src/assets/PROJECT/PROJECT-01/DPS-13.png', alt: 'SimScale-Meshing' },
        ]
      },
      {
        id: 3,
        title: 'Results',
        content: 'The analysis revealed significant improvements in aerodynamic efficiency and thrust distribution across different propeller configurations.',
        images: [
          { id: 8, src: '/src/assets/PROJECT/PROJECT-01/DPS-06.png', alt: 'ANSYS- Velocity Contours' },
          { id: 9, src: '/src/assets/PROJECT/PROJECT-01/DPS-07.png', alt: 'Airfoil Comparison' },
          { id: 10, src: '/src/assets/PROJECT/PROJECT-01/DPS-14.png', alt: 'SimScale- Velocity Contours' },
          { id: 11, src: '/src/assets/PROJECT/PROJECT-01/DPS-15.png', alt: 'Thrust graph' },
        ]
      }
    ]
  };

  const ImageGallery = ({ images }: { images: Array<{id: number, src: string, alt: string}> }) => (
    <div className="my-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <div 
            key={image.id}
            className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-600 hover:border-orange-500 transition-colors p-2"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-auto object-cover rounded"
            />
            <p className="text-center text-sm text-gray-300 mt-2">{image.alt}</p>
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
