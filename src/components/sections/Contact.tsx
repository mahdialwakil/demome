import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#0a0a1f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Interstellar Contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-blue-400">Get in Touch</h3>
            <p className="text-gray-300">
              Ready to collaborate on something amazing? Send me a message and let's create something extraordinary together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-purple-400" size={20} />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-purple-400" size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="text-purple-400" size={20} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}