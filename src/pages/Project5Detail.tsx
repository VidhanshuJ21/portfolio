import { Link } from 'react-router-dom';
// Import images
import W01 from '../assets/PROJECT/PROJECT-05/W-01.png';
import W02 from '../assets/PROJECT/PROJECT-05/W-02.png';
import W03 from '../assets/PROJECT/PROJECT-05/W-03.png';
import W04 from '../assets/PROJECT/PROJECT-05/W-04.jpg';
import W05 from '../assets/PROJECT/PROJECT-05/W-05.jpg';
import W06 from '../assets/PROJECT/PROJECT-05/W-06.jpg';
import W07 from '../assets/PROJECT/PROJECT-05/W-07.jpg';
import W08 from '../assets/PROJECT/PROJECT-05/W-08.jpg';
import W09 from '../assets/PROJECT/PROJECT-05/W-09.png';
import W10 from '../assets/PROJECT/PROJECT-05/W-10.png';
import W11 from '../assets/PROJECT/PROJECT-05/W-11.png';
import W12 from '../assets/PROJECT/PROJECT-05/W-12.png';

export const Project5Detail = () => {
  const project = {
    title: ' Design And Structural Analysis of a Planetary Rover Wheel',
    intro: 'This study explores the structural integrity and performance of a rover wheel under lunar surface conditions using Finite Element Analysis, aiming to optimize wheel performance and adaptability.',
    technologies: ['ANSYS Structural and Modal Analysis', 'Solidworks'],
    
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'Rover wheels are designed with high compliance and traction to handle soft, irregular terrain; they rely on low pressure and high surface area to minimize sinkage and improve stability on lunar or Martian soil.',
        images: [
          { id: 1, src: W09, alt: 'Experimental Set-Up' },
          { id: 2, src: W10, alt: 'Set-Up switch ' },
          { id: 3, src: W11, alt: 'Propeller design in CATIA V5' },
        ]
      },
      {
        id: 2,
        title: 'Design Methodology',
        content: 'SolidWorks was used to create a 3D model of a rubber-free rover wheel, focusing on spoke design, hub assembly, wheel diameter, and material distribution for optimal performance.',
        images: [
          { id: 4, src: W01, alt: 'Static Computational Domain' },
          { id: 5, src: W02, alt: 'Rotary Computational Domain' },
          { id: 6, src: W03, alt: 'Rotary Domain mesh' },
        ]
      },
      {
        id: 3,
        title: 'Results & Analysis',
        content: 'The study found that the structural behavior of the vehicle was satisfactory, with maximum von Mises stress at spoke-hub junctions below the yield limit of structural steel. The design of lighter spoke shapes with curvature showed better flexibility while maintaining load-bearing capability. The terramechanics insights showed improved vertical stability with wider rims and lower spoke count, enabling better traction and sinkage resistance. Future designs should incorporate real-time soil feedback for adaptive performance.',
        images: [
          { id: 7, src: W04, alt: 'Velocity Contours' },
          { id: 8, src: W05, alt: 'Pressure Contours' },
          { id: 9, src: W06, alt: 'Pressure Contours' },
          { id: 10, src: W07, alt: 'Thrust Comparison result of CFD and Experimental' },
          { id: 11, src: W08, alt: 'Velocity Contours' },
          { id: 12, src: W12, alt: 'Velocity Contours' },
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

