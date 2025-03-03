
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white bg-opacity-80 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-brik-purple">thebrik<span className="text-brik-black-light">.ai</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#impact" className="nav-link">Impact</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="button-primary ml-4">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative w-6 h-5">
            <span className={cn(
              "absolute h-0.5 w-6 bg-brik-black-light transform transition duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
            )} />
            <span className={cn(
              "absolute h-0.5 bg-brik-black-light transform transition-opacity duration-300 ease-in-out",
              isMobileMenuOpen ? "opacity-0 w-0" : "opacity-100 w-6"
            )} style={{ top: '50%', transform: 'translateY(-50%)' }} />
            <span className={cn(
              "absolute h-0.5 w-6 bg-brik-black-light transform transition duration-300 ease-in-out",
              isMobileMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-5"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-hidden", 
        isMobileMenuOpen ? "transform-none" : "-translate-y-full opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#about" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#impact" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>Impact</a>
          <a href="#testimonials" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <a href="#team" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <a href="#faq" className="nav-link block py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="button-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
