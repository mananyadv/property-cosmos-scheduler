
import { Button } from "@/components/ui/button";
import ParticleNebula from "@/components/ParticleNebula";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Impact from "@/components/Impact";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll(".reveal-animation");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  // Mouse trail effect for 3D scene
  useEffect(() => {
    const createTrailElement = () => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      document.body.appendChild(trail);
      return trail;
    };

    const trails = Array.from({ length: 5 }, createTrailElement);
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateTrails = () => {
      trails.forEach((trail, index) => {
        const delay = index * 0.1;
        setTimeout(() => {
          trail.style.left = `${mouseX}px`;
          trail.style.top = `${mouseY}px`;
        }, delay * 1000);
      });
      requestAnimationFrame(animateTrails);
    };

    animateTrails();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trails.forEach((trail) => trail.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-brik-cream-light overflow-hidden font-sans">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section with Particle Nebula */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <ParticleNebula />
        </div>
        <div className="container mx-auto z-10 relative">
          <Hero />
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-white">
        <div className="container mx-auto">
          <Brands />
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-cream">
        <div className="container mx-auto">
          <Impact />
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-20 bg-white">
        <div className="container mx-auto">
          <Principles />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-cream">
        <div className="container mx-auto">
          <Services />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-cream">
        <div className="container mx-auto">
          <Team />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-cream">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full w-12 h-12 bg-brik-purple hover:bg-brik-purple-dark"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Index;
