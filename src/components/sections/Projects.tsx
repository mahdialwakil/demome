import React from 'react';
import { Globe, Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Climate Data Visualization",
      description: "Interactive platform showcasing climate change data through immersive visualizations",
      technologies: ["React", "D3.js", "Python"],
      image: "https://images.unsplash.com/photo-1593288942460-e321b92a6cde?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Space Weather Monitor",
      description: "Real-time monitoring system for solar activity and space weather phenomena",
      technologies: ["TypeScript", "Node.js", "WebGL"],
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Eco-Friendly Shopping Assistant",
      description: "AI-powered app helping users make sustainable shopping choices",
      technologies: ["React Native", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Stellar Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-opacity-20 bg-blue-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500 bg-opacity-20 rounded-full text-purple-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}