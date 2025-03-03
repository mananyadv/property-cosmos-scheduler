
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Had a good chat with the team about term insurance. I always knew that smokers pay a higher premium, but not to the extent of 40%. Their AI analysis helped me find the perfect property for my investment goals.",
    author: "Rahul Sharma",
    position: "First-time Investor"
  },
  {
    id: 2,
    content: "The AI-powered market analysis provided by thebrik.ai was eye-opening. They identified a property that has already appreciated 15% in just 8 months. Truly impressed with their technology and insight.",
    author: "Priya Mehta",
    position: "Seasoned Investor"
  },
  {
    id: 3,
    content: "As an NRI, finding trustworthy real estate advisory was challenging until I found thebrik.ai. Their remote consultation and detailed data-driven reports made my investment decision easy and confident.",
    author: "Vikram Desai",
    position: "NRI Investor"
  },
  {
    id: 4,
    content: "The team's expertise in Gurgaon's micro-markets is unmatched. Their AI tool accurately predicted infrastructure developments that increased my property value substantially.",
    author: "Sneha Kapoor",
    position: "Property Developer"
  },
  {
    id: 5,
    content: "I was skeptical about AI in real estate, but thebrik.ai changed my mind. Their analysis was spot-on, and the investment has performed exactly as they projected.",
    author: "Arjun Singh",
    position: "Tech Entrepreneur"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(autoScroll);
  }, []);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">Testimonials</div>
          <h2 className="heading-lg mt-3">What People Think About Us</h2>
          <p className="subtitle mt-3 mx-auto">
            Hear from our clients about their experience with thebrik.ai
          </p>
        </div>

        <div 
          className="relative mx-auto max-w-4xl reveal-animation"
          onMouseLeave={handleMouseUp}
        >
          {/* Main testimonial */}
          <div 
            className="glass-panel p-8 md:p-12 rounded-xl mb-12 cursor-grab"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex flex-col items-center">
              <div className="mb-6 text-brik-purple">
                <MessageSquare size={36} />
              </div>
              
              <div className="relative w-full overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="w-full flex-shrink-0 text-center"
                    >
                      <p className="text-lg md:text-xl italic text-brik-black-light">
                        "{testimonial.content}"
                      </p>
                      <div className="mt-6">
                        <p className="font-semibold text-brik-black">{testimonial.author}</p>
                        <p className="text-sm text-brik-black-light opacity-75">{testimonial.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md border border-brik-cream-dark hover:bg-brik-cream transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-brik-purple" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-brik-purple w-8' 
                      : 'bg-brik-cream-dark hover:bg-brik-purple-light'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md border border-brik-cream-dark hover:bg-brik-cream transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-brik-purple" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-brik-cream-light to-white"></div>
    </section>
  );
};

export default Testimonials;
