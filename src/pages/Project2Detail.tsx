import { Link } from 'react-router-dom';
// Import images
import MSW01 from '../assets/PROJECT/PROJECT-02/MSW-01.png';
import MSW02 from '../assets/PROJECT/PROJECT-02/MSW-02.png';
import MSW03 from '../assets/PROJECT/PROJECT-02/MSW-03.png';
import MSW04 from '../assets/PROJECT/PROJECT-02/MSW-04.png';
import MSW05 from '../assets/PROJECT/PROJECT-02/MSW-05.png';
import MSW06 from '../assets/PROJECT/PROJECT-02/MSW-06.png';
import MSW07 from '../assets/PROJECT/PROJECT-02/MSW-07.png';
import MSW08 from '../assets/PROJECT/PROJECT-02/MSW-08.png';

export const Project2Detail = () => {
  const project = {
    title: 'Computation Analysis of Aerodynamic Parameters on different sweep angles on the missile',
    intro: 'This project conducted a computational fluid dynamics analysis on a missile with diamond airfoil wings to determine the optimal wing sweep angle for improved flight performance, enhancing supersonic projectile stability and range.',
    technologies: ['ANSYS Fluent', 'Fusion360', 'Solidworks', 'DATCOM'],
    
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'The missile geometry was designed in SolidWorks and Fusion 360. The missile features a streamlined fuselage with a diamond airfoil wing configuration. The wings were parametrically varied by sweep angles of 0°, 15°, 30°, 45°, 60°, and 75°, maintaining consistent span and chord dimensions. Each configuration was modeled as a 3D solid body suitable for high-speed external flow simulations',
        images: [
          { id: 1, src: MSW01, alt: 'Different sweep anglesMissile Configuration' },
        ]
      },
      {
        id: 2,
        title: 'Methodology',
        content: 'A cylindrical computational domain was created to simulate realistic far-field aerodynamic behavior, with an input of pressure far-field (Mach 4) and walls modeled as no-slip walls, an outlet of pressure outlet, and a density-based, steady-state solution and k-ω SST turbulence model for accurate high-speed boundary layer modeling.The mesh was generated using a unstructured tetrahedron approach, with refinement near the missile body and leading and trailing edges of wings to capture shock waves and boundary layers effectively. Inflation layers were applied to resolve near-wall gradients for accurate lift and drag prediction.',
        images: [
          { id: 2, src: MSW02, alt: 'Computational Domain' },
          { id: 3, src: MSW03, alt: 'Unstructured Mesh' },
        ]
      },
      {
        id: 3,
        title: 'Results & Analysis',
        content: 'The study evaluated the aerodynamic efficiency of a machine at Mach 4 by extracting lift and drag coefficients at each sweep angle, with the optimal sweep angle being 30°.Wings with higher sweep angles suffer from increased drag due to vortex generation and disturbed flow patterns. These insights are vital for optimizing missile designs for supersonic regimes.',
        images: [
          { id: 4, src: MSW04, alt: 'Coeff of Lift and drag Coefficient Comparison' },
          { id: 5, src: MSW05, alt: 'Cl comparison with ANSYS-CFD and DATCOM' },
          { id: 6, src: MSW06, alt: 'Cd comparison with ANSYS-CFD and DATCOM' },
          { id: 7, src: MSW07, alt: 'Mach Contours' },
          { id: 8, src: MSW08, alt: 'Pressure COntours' },
        ]
      }
    ]
  };

  const ImageGallery = ({ images }: { images: Array<{id: number, src: any, alt: string}> }) => (
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
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
            {project.title}
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            {project.intro}
          </p>
          
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
