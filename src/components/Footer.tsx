
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brik-purple-darker text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">thebrik<span className="text-brik-cream-light">.ai</span></div>
            <p className="text-white text-opacity-75 mb-4">
              Revolutionizing real estate investment with AI-powered analytics and data-driven insights.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Our Services</a></li>
              <li><a href="#impact" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Our Impact</a></li>
              <li><a href="#testimonials" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Testimonials</a></li>
              <li><a href="#team" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Property Identification</a></li>
              <li><a href="#services" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Investment Analysis</a></li>
              <li><a href="#services" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Market Intelligence</a></li>
              <li><a href="#services" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">Purchase Advisory</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-white text-opacity-75">Huda Market Complex, Sector 15, Part 2, Gurgaon, Haryana 122001</li>
              <li><a href="mailto:info@the-brick.ai" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">info@the-brick.ai</a></li>
              <li><a href="tel:+919873665414" className="text-white text-opacity-75 hover:text-opacity-100 transition-colors">+91 98736 65414</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white border-opacity-10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-60 text-sm">
            © {currentYear} thebrik.ai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-white text-opacity-60 text-sm">
            <a href="#" className="hover:text-opacity-100 mr-6 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-opacity-100 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
