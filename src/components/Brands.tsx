
import React, { useEffect } from 'react';

const brands = [
  "Danube Properties", "IGL", "HOUSR", "SWIGGY", "BLINKIT", 
  "SOLHOUSE", "FLOCK", "COLOVING", "BLOSSOM", "STAYZ", 
  "TREVOC", "DELLOITE", "EMAAR", "DLF"
];

const Brands = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
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

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10 reveal-animation">
          <h2 className="heading-md text-brik-black-light">Trusted by Leading Brands</h2>
          <p className="subtitle mt-3 mx-auto">We partner with industry leaders to deliver exceptional real estate solutions</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-8 stagger-children">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center p-4 reveal-animation`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div 
                className="text-brik-black-light font-medium opacity-60 hover:opacity-100 hover:text-brik-purple transition-all duration-500"
              >
                {brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
