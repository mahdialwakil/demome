import React from 'react';
import { Rocket, Code, Database, Cloud } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Mission Control
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              As a passionate software engineer with a deep fascination for space and technology,
              I blend cutting-edge development practices with astronomical insights to create
              innovative solutions. My journey in tech has been guided by the same curiosity
              that drives space exploration.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-opacity-20 bg-blue-900 rounded-lg">
                <Code className="text-blue-400 mb-2" size={24} />
                <h4 className="text-white font-medium">Development</h4>
              </div>
              <div className="p-4 bg-opacity-20 bg-purple-900 rounded-lg">
                <Database className="text-purple-400 mb-2" size={24} />
                <h4 className="text-white font-medium">Data Science</h4>
              </div>
              <div className="p-4 bg-opacity-20 bg-indigo-900 rounded-lg">
                <Cloud className="text-indigo-400 mb-2" size={24} />
                <h4 className="text-white font-medium">Cloud Computing</h4>
              </div>
              <div className="p-4 bg-opacity-20 bg-pink-900 rounded-lg">
                <Rocket className="text-pink-400 mb-2" size={24} />
                <h4 className="text-white font-medium">Innovation</h4>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Space visualization"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] opacity-40 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}