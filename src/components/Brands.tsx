
import React, { useEffect, useState } from 'react';

const brands = [
  "Danube Properties", "IGL", "HOUSR", "SWIGGY", "BLINKIT", 
  "SOLHOUSE", "FLOCK", "COLOVING", "BLOSSOM", "STAYZ", 
  "TREVOC", "DELLOITE", "EMAAR", "DLF"
];

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.id === 'brands-section') {
            setIsVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach(el => observer.observe(el));

    const brandsSection = document.getElementById('brands-section');
    if (brandsSection) {
      observer.observe(brandsSection);
    }

    return () => {
      elements.forEach(el => observer.unobserve(el));
      if (brandsSection) {
        observer.unobserve(brandsSection);
      }
    };
  }, []);

  return (
    <section id="brands-section" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10 reveal-animation">
          <h2 className="heading-md text-brik-black">Trusted by Leading Brands</h2>
          <p className="subtitle mt-3 mx-auto">We partner with industry leaders to deliver exceptional real estate solutions</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center p-4 reveal-animation brand-item ${isVisible ? 'active' : ''}`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="brand-float">
                <div 
                  className="text-brik-black font-medium hover:text-brik-purple transition-all duration-500"
                >
                  {brand}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
