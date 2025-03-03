
import React, { useEffect, useState, useRef } from 'react';
import { ChartBar, Heart, Database } from 'lucide-react';

const impactData = [
  {
    icon: <ChartBar className="h-10 w-10 text-brik-purple" />,
    number: 200,
    label: "Properties Analyzed",
    suffix: "+",
  },
  {
    icon: <Heart className="h-10 w-10 text-brik-purple" />,
    number: 95,
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    icon: <Database className="h-10 w-10 text-brik-purple" />,
    number: 40,
    label: "AI Data Points",
    suffix: "+",
  },
  {
    icon: <ChartBar className="h-10 w-10 text-brik-purple" />,
    number: 249,
    label: "Successful Rankings",
    suffix: "K+",
  }
];

const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 16));
    let timer: number;

    const updateCount = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        cancelAnimationFrame(timer);
        return;
      }
      setCount(start);
      timer = requestAnimationFrame(updateCount);
    };

    timer = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(timer);
  }, [isVisible, target]);

  return (
    <div ref={counterRef} className="stat-counter">
      {count}{suffix}
    </div>
  );
};

const Impact = () => {
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
    <section id="impact" className="py-24 relative overflow-hidden bg-gradient-to-b from-brik-cream-light to-white">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">Our Impact</div>
          <h2 className="heading-lg mt-3">Transforming Real Estate With Data</h2>
          <p className="subtitle mt-3 mx-auto">
            Leveraging AI to analyze properties and provide valuable insights for our clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {impactData.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-xl flex flex-col items-center text-center reveal-animation"
            >
              <div className="mb-4 p-3 bg-brik-purple bg-opacity-10 rounded-full">
                {item.icon}
              </div>
              <Counter target={item.number} suffix={item.suffix} />
              <p className="mt-2 text-brik-black-light">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
    </section>
  );
};

export default Impact;
