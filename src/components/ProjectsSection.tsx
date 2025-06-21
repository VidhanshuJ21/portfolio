import { Link } from 'react-router-dom';

export const ProjectsSection = () => {
  const projects = [
    { 
      id: '1', 
      image: '/assets/projects/project1.jpg',
      title: 'Distributed Propulsion System',
      description: 'Computational analysis of multi-propeller configurations and their aerodynamic effects on aircraft performance.',
      tags: ['ANSYS Fluent', 'SimScale', 'XFLR5','Onshape','Fusion360']
    },
    { 
      id: '2', 
      image: '/assets/projects/project2.jpg',
      title: 'Variable Sweep Wing on Missile Body',
      description: 'Study of various high-lift devices and their impact on wing performance using advanced CFD techniques.',
      tags: ['ANSYS Fluent', 'SolidWorks','DATCOM','Fusion360']
    },
    { 
      id: '3', 
      title: 'Experimental vs Computation Analysis of Propeller',
      description: 'Computational analysis of missile aerodynamic parameters and their impact on missile performance.',
      tags: ['ANSYS Fluent', 'Experimental Setup','Solidworks']
    },
    { 
      id: '4', 
      title: 'Pomodoro App',
      description: 'Set Timer for Pomodoro Technique',
      tags: ['Rust', 'TypeScript']
    },
    { 
      id: '5', 
      title: 'Rover Wheel Finite Element Analysis',
      description: 'Finite Element Analysis of Rover Wheel spoke with optimized design',
      tags: ['ANSYS-Static Structure and Modal Analysis','SolidWorks']
    },
    { 
      id: '6', 
      title: 'CubeSat Design and Analysis',
      description: 'This project involves design and propulsion system of CubeSat',
      tags: ['Onshape', 'Real Time data', 'Propulsion system','Review']
    },
  ];

  return (
    <div id="projects" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link 
            key={project.id}
            to={`/projects/${project.id}`}
            className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative group"
          >
            {/* Project Image */}
            <div className="w-full h-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
            </div>
            
            {/* Tags - Shown on hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};