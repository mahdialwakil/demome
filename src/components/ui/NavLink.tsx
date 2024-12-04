import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-200 origin-left hover:scale-x-100" />
    </a>
  );
}