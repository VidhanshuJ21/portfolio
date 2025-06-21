export const AboutMe = () => {
  return (
    <section id="about" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">About Me</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gray-800 rounded-2xl p-8">
          <p className="text-gray-400 text-lg text-center leading-relaxed">
            I am a passionate developer and designer with expertise in CAD design, simulation, and creative problem-solving. 
            I enjoy working on innovative projects that challenge me to learn new technologies and create meaningful solutions 
            for real-world problems. My goal is to bridge the gap between technical functionality and aesthetic design.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-orange-400 mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-white">Bachelor of Technology in Aerospace Engineering</h4>
              <p className="text-gray-400">MIT ADT University, Pune</p>
              <p className="text-gray-400">CGPA: 7.7</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">HSC</h4>
              <p className="text-gray-400">Fergusson College, Pune</p>
              <p className="text-gray-400">Percentage: 85%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
