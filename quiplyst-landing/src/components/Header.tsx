'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-teal to-indigo-night rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="font-montserrat font-bold text-xl text-indigo-night">
                  Quiplyst
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-indigo-night hover:text-electric-teal transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#capabilities" className="text-indigo-night hover:text-electric-teal transition-colors duration-200 font-medium">
                Capabilities
              </a>
              <a href="#testimonials" className="text-indigo-night hover:text-electric-teal transition-colors duration-200 font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-indigo-night hover:text-electric-teal transition-colors duration-200 font-medium">
                Pricing
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-indigo-night hover:text-electric-teal transition-colors duration-200 font-medium">
                Sign In
              </button>
              <button className="bg-electric-teal hover:bg-indigo-night text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover-lift focus-ring">
                Get Free Demo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-indigo-night hover:text-electric-teal transition-colors duration-200 focus-ring"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-white hover:text-electric-teal transition-colors duration-200">
              Features
            </a>
            <a href="#capabilities" className="block px-3 py-2 text-white hover:text-electric-teal transition-colors duration-200">
              Capabilities
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-white hover:text-electric-teal transition-colors duration-200">
              Testimonials
            </a>
            <a href="#pricing" className="block px-3 py-2 text-white hover:text-electric-teal transition-colors duration-200">
              Pricing
            </a>
            <div className="px-3 py-2 space-y-2">
              <button className="block w-full text-left text-white hover:text-electric-teal transition-colors duration-200">
                Sign In
              </button>
              <button className="block w-full bg-electric-teal hover:bg-indigo-night text-white px-4 py-2 rounded-full font-medium transition-all duration-200">
                Get Free Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}