
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-brik-cream-light relative">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">Contact Us</div>
          <h2 className="heading-lg mt-3">Let's Talk</h2>
          <p className="subtitle mt-3 mx-auto">
            Connect with our team of AI-powered real estate experts to discuss your investment goals and discover prime opportunities in Gurgaon's primary market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1 reveal-animation">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="heading-sm mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-brik-purple bg-opacity-10 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-brik-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-brik-black-light mt-1">
                      Huda Market Complex, Sector 15, Part 2<br />
                      Gurgaon, Haryana 122001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brik-purple bg-opacity-10 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-brik-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-brik-black-light mt-1">
                      <a href="mailto:info@the-brick.ai" className="hover:text-brik-purple transition-colors">
                        info@the-brick.ai
                      </a>
                      <br />
                      <a href="mailto:support@the-brick.ai" className="hover:text-brik-purple transition-colors">
                        support@the-brick.ai
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brik-purple bg-opacity-10 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-brik-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-brik-black-light mt-1">
                      <a href="tel:+919873665414" className="hover:text-brik-purple transition-colors">
                        +91 98736 65414
                      </a>
                      <br />
                      <span className="text-sm opacity-75">Mon-Sat, 9:00 AM - 6:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-2">Visit Our Office</h4>
                <p className="text-brik-black-light text-sm">
                  Located in the heart of Gurgaon's prime real estate district, our office offers a tech-forward environment where AI meets real estate expertise.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2 reveal-animation">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="heading-sm mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-primary w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-brik-purple opacity-5 rounded-full blur-3xl translate-x-1/2"></div>
    </section>
  );
};

export default Contact;
