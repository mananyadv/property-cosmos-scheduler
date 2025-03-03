
import React, { useEffect } from 'react';
import { Users, Lightbulb, BarChart, Shield } from 'lucide-react';

const principles = [
  {
    title: "Client-Centric Approach",
    description: "We put our clients' needs first, providing personalized service tailored to each individual's goals.",
    icon: <Users className="h-10 w-10 text-brik-purple" />
  },
  {
    title: "Innovation & Technology",
    description: "We leverage cutting-edge AI and data analysis to provide insights that traditional brokers cannot.",
    icon: <Lightbulb className="h-10 w-10 text-brik-purple" />
  },
  {
    title: "Data-Driven Decisions",
    description: "Our recommendations are backed by comprehensive market data and AI-powered analytics.",
    icon: <BarChart className="h-10 w-10 text-brik-purple" />
  },
  {
    title: "Integrity & Transparency",
    description: "We believe in complete transparency in all our dealings, building trust through honest communication.",
    icon: <Shield className="h-10 w-10 text-brik-purple" />
  }
];

const Principles = () => {
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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">Our Principles</div>
          <h2 className="heading-lg mt-3">Guided by Excellence</h2>
          <p className="subtitle mt-3 mx-auto">
            Our core values drive everything we do at thebrik.ai
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="card card-hover overflow-hidden reveal-animation"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 w-fit bg-brik-purple bg-opacity-10 rounded-full">
                  {principle.icon}
                </div>
                <h3 className="heading-sm text-brik-black">{principle.title}</h3>
                <p className="mt-3 text-brik-black-light opacity-75 flex-grow">
                  {principle.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-purple opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-animation">
          <h3 className="heading-md text-brik-purple">Welcome to the thebrik.ai Universe</h3>
          <p className="subtitle mt-4 mx-auto text-lg">
            We help you choose the best property for your needs. We help you invest. Basically, we do everything.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl translate-x-1/2"></div>
    </section>
  );
};

export default Principles;
