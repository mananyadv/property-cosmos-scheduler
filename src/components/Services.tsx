
import React, { useState, useEffect } from 'react';
import { Search, BarChart2, Globe, ShieldCheck } from 'lucide-react';

const serviceData = [
  {
    id: "property-identification",
    icon: <Search className="h-10 w-10 text-brik-purple" />,
    title: "Property Identification",
    description: "Our AI algorithms scan the Gurgaon primary market to identify properties with the highest investment potential based on your criteria and goals.",
    features: [
      "Personalized property matching",
      "Comparison with similar investments",
      "Detailed property specifications",
      "Developer reputation analysis",
      "Construction quality assessment"
    ]
  },
  {
    id: "investment-analysis",
    icon: <BarChart2 className="h-10 w-10 text-brik-purple" />,
    title: "Investment Analysis",
    description: "Get comprehensive analysis of potential returns, risks, and growth projections for your selected property investments in Gurgaon.",
    features: [
      "Expected ROI calculations",
      "Capital appreciation projections",
      "Rental yield estimates",
      "Risk assessment scores",
      "Market volatility analysis"
    ]
  },
  {
    id: "market-intelligence",
    icon: <Globe className="h-10 w-10 text-brik-purple" />,
    title: "Market Intelligence",
    description: "Access real-time data and insights about Gurgaon's real estate market trends, upcoming developments, and investment opportunities.",
    features: [
      "Micro-market analysis",
      "Price trend forecasting",
      "Infrastructure development tracking",
      "Regulatory impact assessment",
      "Competitive property landscape"
    ]
  },
  {
    id: "purchase-advisory",
    icon: <ShieldCheck className="h-10 w-10 text-brik-purple" />,
    title: "Purchase Advisory",
    description: "End-to-end guidance through the property purchase process, ensuring you make informed decisions at every step.",
    features: [
      "Payment plan optimization",
      "Documentation verification",
      "Legal due diligence",
      "Negotiation support",
      "Post-purchase support"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(serviceData[0].id);

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
    <section id="services" className="py-24 bg-gradient-to-b from-white to-brik-cream-light relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">Our Services</div>
          <h2 className="heading-lg mt-3">Comprehensive Real Estate Solutions</h2>
          <p className="subtitle mt-3 mx-auto">
            We provide end-to-end solutions for investors looking to maximize their returns in Gurgaon's primary real estate market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible reveal-animation">
            {serviceData.map((service) => (
              <button
                key={service.id}
                className={`px-4 py-3 text-left rounded-lg transition-all duration-300 min-w-[200px] lg:min-w-0 ${
                  activeService === service.id 
                    ? 'bg-brik-purple text-white shadow-lg'
                    : 'bg-white hover:bg-brik-cream hover:text-brik-purple-dark'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="font-medium">{service.title}</div>
              </button>
            ))}
          </div>
          
          {/* Service Details */}
          <div className="lg:col-span-4 reveal-animation">
            {serviceData.map((service) => (
              <div 
                key={service.id}
                className={`glass-panel p-8 rounded-xl transition-all duration-500 ${
                  activeService === service.id 
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
                style={{ display: activeService === service.id ? 'block' : 'none' }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="p-3 w-fit bg-brik-purple bg-opacity-10 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="heading-md text-brik-black">{service.title}</h3>
                    <p className="mt-4 text-brik-black-light opacity-75">
                      {service.description}
                    </p>
                    <button className="button-primary mt-8">
                      Book a Consultation
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-4">Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-brik-purple bg-opacity-10 flex items-center justify-center mr-3 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-brik-purple"></div>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>
    </section>
  );
};

export default Services;
