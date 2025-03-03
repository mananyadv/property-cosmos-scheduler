
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are the best areas to invest in Gurgaon?",
    answer: "The most promising investment areas in Gurgaon include Golf Course Road, Golf Course Extension Road, Dwarka Expressway, and Sohna Road. Each area offers different investment potential based on infrastructure development, appreciation prospects, and rental yields."
  },
  {
    question: "How do you use AI in real estate analysis?",
    answer: "We use artificial intelligence to analyze over 40+ data points for each property including historical price trends, infrastructure development timelines, rental yields, and future appreciation potential. Our AI algorithms provide unbiased investment recommendations based on your specific goals."
  },
  {
    question: "What is the typical return on investment for Gurgaon properties?",
    answer: "Gurgaon properties typically offer annual returns of 8-12% through a combination of appreciation and rental yield. Luxury properties in prime locations like Golf Course Road may see higher appreciation, while emerging areas like Dwarka Expressway offer better entry prices with higher long-term growth potential."
  },
  {
    question: "What services do you provide for NRI investors?",
    answer: "For NRI investors, we offer end-to-end services including property identification, legal due diligence, purchase assistance, documentation support, and property management. We provide virtual tours and detailed AI-generated investment analysis reports to facilitate remote decision-making."
  },
  {
    question: "How much budget do I need to invest in Gurgaon real estate?",
    answer: "Investment options in Gurgaon start from approximately ₹50 lakhs for small apartments in developing areas, to ₹5+ crores for luxury properties in premium locations. We can help identify the best opportunities based on your budget and investment goals."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-brik-cream-light to-white relative">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">FAQ</div>
          <h2 className="heading-lg mt-3">Frequently Asked Questions</h2>
          <p className="subtitle mt-3 mx-auto">
            Find answers to common questions about our services and Gurgaon's real estate market
          </p>
        </div>
        
        <div className="space-y-4 reveal-animation">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-panel overflow-hidden rounded-xl border border-white border-opacity-40"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-lg text-brik-black">{faq.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-brik-purple transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-6 pt-0 text-brik-black-light">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-animation">
          <p className="text-brik-black-light opacity-75 mb-6">
            Still have questions? We're here to help you.
          </p>
          <a 
            href="#contact" 
            className="button-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl translate-x-1/2"></div>
    </section>
  );
};

export default FAQ;
