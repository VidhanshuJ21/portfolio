import { Link } from 'react-router-dom';
// Import images
import PCE01 from '../assets/PROJECT/PROJECT-03/PCE-01.png';
import PCE02 from '../assets/PROJECT/PROJECT-03/PCE-02.png';
import PC03 from '../assets/PROJECT/PROJECT-03/PROP-01.png';
import PCE05 from '../assets/PROJECT/PROJECT-03/PCE-05.png';
import PCE06 from '../assets/PROJECT/PROJECT-03/PCE-06.png';
import PCE07 from '../assets/PROJECT/PROJECT-03/PCE07.png';
import PCE08 from '../assets/PROJECT/PROJECT-03/PCE-08.png';
import PCE09 from '../assets/PROJECT/PROJECT-03/PCE-09.png';
import PCE10 from '../assets/PROJECT/PROJECT-03/PCE-10.png';
import PCE11 from '../assets/PROJECT/PROJECT-03/PCE-11.png';

export const Project3Detail = () => {
  const project = {
    title: ' 3D CFD Simulation and Experimental Investigation of a Wooden Two Blade Propeller at different velocities ',
    intro: 'This study analyzes the aerodynamic performance of a 1200 mm propeller using experimental testing and Computational Fluid Dynamics (CFD). It validates the accuracy and reliability of the simulation method by comparing experimental thrust measurements with predicted thrust at varying RPMs.',
    technologies: ['ANSYS Fluent', 'CATIA V5', 'Experimental Setup'],
    
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'The aircraft propeller, modeled in CATIA V5, was designed with precision aerodynamic profiling to replicate realistic performance. It has a diameter of 1200 mm, a blade configuration of 0 rake and skew angle, and a clark Y airfoil.',
        images: [
          { id: 1, src: PCE01, alt: 'Experimental Set-Up' },
          { id: 2, src: PCE02, alt: 'Set-Up switch ' },
          { id: 3, src: PC03, alt: 'Propeller design in CATIA V5' },
        ]
      },
      {
        id: 2,
        title: 'Methodology',
        content: 'The CFD model was created using ANSYS DesignModeler, with a computational domain divided into a rotating domain for resolving rotational effects and a static domain for steady-state interaction with ambient conditions.A structured/unstructured mesh was created, validated, fine-tuned near blade surfaces for accurate boundary layer resolution, and mesh independence was verified for consistency in results.The ANSYS Fluent solver is a steady-state model with RANS turbulence model. It operates under various 500,600,700 and 800 RPMs and boundary conditions, including uniform velocity or pressure inlet, pressure outlet, and no-slip wall on propeller surfaces, ensuring accurate results.',
        images: [
          { id: 5, src: PCE05, alt: 'Static Computational Domain' },
          { id: 6, src: PCE06, alt: 'Rotary Computational Domain' },
          { id: 7, src: PCE07, alt: 'Rotary Domain mesh' },
          { id: 8, src: PCE08, alt: 'Static Domain mesh' },
        ]
      },
      {
        id: 3,
        title: 'Results & Analysis',
        content: 'The CFD analysis accurately predicted thrust force  with propulsion efficiency peaking at 43.18%, aligning with experimental data, particularly at high RPM. Velocity magnitude plots validated increasing tip speed and flow acceleration effects. Constant magnitude lines helped identify high-thrust zones near blade tips. Thrust increased with RPM, validating both experimental and CFD trends. The reliability of the turbulence model and meshing strategy was confirmed, and helical tip speeds confirmed the consistent trend with thrust increase.',
        images: [
          { id: 9, src: PCE09, alt: 'Velocity Contours' },
          { id: 10, src: PCE10, alt: 'Pressure Contours' },
          { id: 11, src: PCE11, alt: 'Thrust Comparison result of CFD and Experimental' },
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
