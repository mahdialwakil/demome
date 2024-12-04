import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Marketing Specialist",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led digital marketing campaigns and increased conversion rates by 45%"
    },
    {
      title: "Research Assistant",
      company: "Climate Research Institute",
      period: "2018 - 2020",
      description: "Conducted research on climate change impact and published 3 papers"
    },
    {
      title: "Graphic Designer",
      company: "Creative Studio",
      period: "2016 - 2018",
      description: "Created visual content for major brands and won 2 design awards"
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Professional Journey
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-purple-500"
            >
              <div className="absolute -left-3 top-0">
                <div className="bg-purple-500 rounded-full p-2">
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>
              <div className="bg-opacity-20 bg-purple-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <div className="flex items-center text-gray-400 mt-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-300 mt-4">{exp.company}</p>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}