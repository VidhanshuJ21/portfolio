import { Link } from 'react-router-dom';
// Import images
import CU01 from '../assets/PROJECT/PROJECT-06/CU-01.png';
import CU02 from '../assets/PROJECT/PROJECT-06/CU-02.png';
import CU03 from '../assets/PROJECT/PROJECT-06/CU-03.png';
import CU04 from '../assets/PROJECT/PROJECT-06/CU-04.png';
import CU05 from '../assets/PROJECT/PROJECT-06/CU-05.png';
import CU06 from '../assets/PROJECT/PROJECT-06/CU-06.png';
import CU07 from '../assets/PROJECT/PROJECT-06/CU-07.png';

export const Project6Detail = () => {
  const project = {
    title: ' Cost-Effective CubeSat Design and Reliability Estimation',
    intro: 'This study aims to enhance CubeSat reliability and cost-efficiency by implementing probabilistic durability modeling, improving propulsion with cold gas thrusters, designing fuel-integrated structures, and minimizing mission failure.',
    technologies: ['Onshape'],
    
    sections: [
      {
        id: 1,
        title: 'Overview',
        content: 'This study aims to enhance CubeSat reliability and cost-efficiency by implementing probabilistic durability modeling improving propulsion with cold gas thrusters designing fuel-integrated structures and minimizing mission failure.',
        images: [
          { id: 1, src: CU01, alt: 'Experimental Set-Up' },
          { id: 4, src: CU02, alt: 'Static Computational Domain' },
          { id: 5, src: CU03, alt: 'Rotary Computational Domain' },
          { id: 6, src: CU04, alt: 'Rotary Domain mesh' },
        ]
      },
      {
        id: 2,
        title: 'Design Methodology',
        content: 'The 3D model was created in Onshape to simulate modular fuel storage integration, using cold gas thrusters for their simplicity, safety, and lightweight design. The model was optimized for center of mass and structural integrity. Reliability modeling was performed using non-parametric failure data and belief-based expert surveys. Probabilistic models were applied to predict infant mortality rate, Mean Time To Failure, and propulsion subsystem reliability. The proposed design methodology allows functional builds for under $5,000, using Commercial Off-The-Shelf components and open-source design tools.The shell-integrated fuel tank passed FEA simulations with acceptable von Mises stress and deformation limits, with thrust benefits outweighing structural compromise. Mixed Weibull models provided the best fit for real-world CubeSat failures, with predicted early-life failure rates dropping by 23%. The Cold Gas Thruster subsystem achieved reliability',
        images: [
          { id: 7, src: CU05, alt: 'Velocity Contours' },
          { id: 8, src: CU06, alt: 'Pressure Contours' },
          { id: 9, src: CU07, alt: 'Pressure Contours' },
        ]
      },
      {
        id: 3,
        title: 'Conference Presentation',
        content: 'The project was presented at the 1st ISRO SMOP International Conference, underscoring its practical relevance and impact on space mission design.',
        images: []
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
