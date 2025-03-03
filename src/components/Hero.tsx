
import React from 'react';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+919873665414', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="section-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="badge animate-fade-in">AI-Powered Real Estate</div>
              <h1 className="heading-xl text-brik-black">
                Revolutionizing <span className="text-brik-purple">real estate</span> with artificial intelligence
              </h1>
              <p className="subtitle mt-6 text-lg">
                We leverage cutting-edge AI technology to analyze properties, predict market trends, and find the perfect investment opportunities tailored to your needs in Gurgaon's primary real estate market.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="button-primary group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Consultation
                <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="button-secondary group"
                onClick={handleWhatsApp}
              >
                Chat With Us
                <MessageSquare className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center text-sm text-brik-black opacity-80">
              <span className="mr-2">Discover how AI transforms your investment journey</span>
              <ArrowRight className="h-4 w-4 text-brik-purple" />
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden glass-panel backdrop-blur-lg animate-fade-in animate-float">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto relative animate-float">
                  <div className="absolute inset-0 bg-brik-purple rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-display font-bold text-brik-purple">B</span>
                  </div>
                </div>
                <h2 className="heading-md mt-6 text-brik-purple">thebrik.ai</h2>
                <p className="text-sm md:text-base opacity-75 mt-2 max-w-md mx-auto">
                  Transforming real estate investment with data-driven insights and AI-powered analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-64 h-64 bg-brik-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-brik-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
