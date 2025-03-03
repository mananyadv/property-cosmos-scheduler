
import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Akash Yadav",
    position: "Founder & CEO",
    bio: "Akash has over 15 years of experience in real estate and technology. He founded thebrik.ai to bring transparency to Gurgaon's property market.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    isMain: true,
  },
  {
    id: 2,
    name: "Manan Yadav",
    position: "Head of Technology",
    bio: "Manan leads our tech team, developing AI models that analyze property values and investment potential across Gurgaon.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    isMain: false,
  },
  {
    id: 3,
    name: "Vikram Singh",
    position: "Real Estate Expert",
    bio: "With a decade of experience in Gurgaon's property market, Vikram provides invaluable insights into neighborhood trends and investment opportunities.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    isMain: false,
  }
];

const Team = () => {
  const [showTeam, setShowTeam] = useState(false);

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
    <section id="team" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 reveal-animation">
          <div className="badge mx-auto">Our Team</div>
          <h2 className="heading-lg mt-3">Meet Our Team</h2>
          <p className="subtitle mt-3 mx-auto">
            Our diverse team of real estate professionals, data scientists, and technology experts are committed to bringing transparency and data-driven insights to your property investments.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Main team member (CEO) */}
          <div className="mb-12 max-w-md mx-auto text-center reveal-animation">
            <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="heading-md">{teamMembers[0].name}</h3>
            <p className="text-brik-purple font-medium">{teamMembers[0].position}</p>
            <p className="mt-3 text-brik-black-light opacity-75">
              {teamMembers[0].bio}
            </p>
            <div className="flex justify-center mt-4 space-x-3">
              <a 
                href={teamMembers[0].instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brik-purple bg-opacity-10 hover:bg-opacity-20 text-brik-purple transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={teamMembers[0].linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brik-purple bg-opacity-10 hover:bg-opacity-20 text-brik-purple transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <button 
              className="mt-8 flex items-center mx-auto text-brik-purple font-medium"
              onClick={() => setShowTeam(!showTeam)}
            >
              {showTeam ? "Hide Team" : "View Team"} 
              {showTeam ? 
                <ChevronUp className="ml-1 h-5 w-5" /> : 
                <ChevronDown className="ml-1 h-5 w-5" />
              }
            </button>
          </div>
          
          {/* Team members (shown conditionally) */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full transition-all duration-700 ease-in-out ${
              showTeam ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
            }`}
          >
            {teamMembers.slice(1).map((member, index) => (
              <div 
                key={member.id} 
                className={`glass-panel p-6 rounded-xl flex items-center space-x-6 reveal-animation ${
                  showTeam ? 'transform-none' : 'translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="heading-sm">{member.name}</h3>
                  <p className="text-brik-purple font-medium">{member.position}</p>
                  <p className="mt-2 text-sm text-brik-black-light opacity-75">
                    {member.bio}
                  </p>
                  <div className="flex mt-3 space-x-2">
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-brik-purple bg-opacity-10 hover:bg-opacity-20 text-brik-purple transition-colors duration-300"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-brik-purple bg-opacity-10 hover:bg-opacity-20 text-brik-purple transition-colors duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
