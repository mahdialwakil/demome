import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Educational Background
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center">
              <GraduationCap className="mr-2" />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="bg-opacity-20 bg-blue-900 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white">Master's in Environmental Science</h4>
                <p className="text-gray-400">University of Science, 2018-2020</p>
                <p className="text-gray-300 mt-2">Focus on Climate Change and Sustainability</p>
              </div>
              
              <div className="bg-opacity-20 bg-blue-900 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white">Bachelor's in Graphic Design</h4>
                <p className="text-gray-400">Design Institute, 2014-2018</p>
                <p className="text-gray-300 mt-2">Specialization in Digital Media</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-purple-400 flex items-center">
              <Award className="mr-2" />
              Honors & Awards
            </h3>
            
            <div className="space-y-6">
              <div className="bg-opacity-20 bg-purple-900 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white">Climate Action Award</h4>
                <p className="text-gray-400">2021</p>
                <p className="text-gray-300 mt-2">Recognition for environmental advocacy</p>
              </div>
              
              <div className="bg-opacity-20 bg-purple-900 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white">Design Excellence Award</h4>
                <p className="text-gray-400">2019</p>
                <p className="text-gray-300 mt-2">Best Digital Campaign Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}