import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="bg-[#0a0a1f]/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-sans font-medium text-white hover:text-gray-200 transition-colors">
                Mahdi Al Wakil
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About me</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#awards">Awards</NavLink>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors duration-200"
              >
                Contact me
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a1f]/95 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#about">About me</MobileNavLink>
              <MobileNavLink href="#education">Education</MobileNavLink>
              <MobileNavLink href="#experience">Experience</MobileNavLink>
              <MobileNavLink href="#projects">Projects</MobileNavLink>
              <MobileNavLink href="#awards">Awards</MobileNavLink>
              <MobileNavLink href="#contact" isButton>Contact me</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function MobileNavLink({ href, children, isButton = false }: { href: string; children: React.ReactNode; isButton?: boolean }) {
  return (
    <a
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isButton
          ? 'bg-gray-800 text-white hover:bg-gray-700'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      } transition-colors duration-200`}
    >
      {children}
    </a>
  );
}