
import React, { useEffect, useRef } from 'react';

const ParticleNebula = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once to initialize
    setCanvasDimensions();

    // Listen for resize events
    window.addEventListener('resize', setCanvasDimensions);

    // Particle configuration
    const particleCount = 120;
    const particles: Particle[] = [];
    const colors = ['#9B87F5', '#7E69AB', '#6E59A5', '#F3F3F3'];
    const maxRadius = 2;
    const maxSpeed = 0.5;
    const connectionDistance = 150;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create cursor trails
    const maxTrails = 10;
    const trails: { x: number; y: number; life: number; size: number }[] = [];

    const addTrail = () => {
      if (trails.length >= maxTrails) trails.shift();
      trails.push({
        x: mouseX,
        y: mouseY,
        life: 30, // Frames the trail will live
        size: Math.random() * 8 + 4
      });
    };

    // Set up animation interval for trails
    const trailInterval = setInterval(addTrail, 50);

    // Define particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      originalRadius: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * maxRadius + 0.5;
        this.originalRadius = this.radius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * maxSpeed;
        this.vy = (Math.random() - 0.5) * maxSpeed;
      }

      update() {
        // Move particles
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Interaction with mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Subtle attraction to mouse
        if (distance < 300) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (300 - distance) / 3000;
          this.vx += forceDirectionX * force;
          this.vy += forceDirectionY * force;
          
          // Limit velocity
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > maxSpeed * 2) {
            this.vx = (this.vx / speed) * maxSpeed * 2;
            this.vy = (this.vy / speed) * maxSpeed * 2;
          }
          
          // Grow radius when near mouse
          this.radius = this.originalRadius + ((300 - distance) / 300) * this.originalRadius * 2;
        } else {
          // Return to original radius
          this.radius = this.originalRadius;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connections between particles
    const drawConnections = () => {
      if (!ctx) return;
      ctx.strokeStyle = 'rgba(155, 135, 245, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity based on distance
            ctx.globalAlpha = 1 - distance / connectionDistance;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(27, 31, 44, 0.6)');
      gradient.addColorStop(1, 'rgba(31, 26, 44, 0.6)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const trail = trails[i];
        trail.life--;
        if (trail.life <= 0) {
          trails.splice(i, 1);
          continue;
        }
        
        // Draw trail
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.size * (trail.life / 30), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${trail.life / 30 * 0.2})`;
        ctx.fill();
      }

      // Draw connections first
      drawConnections();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(trailInterval);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleNebula;
