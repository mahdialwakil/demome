import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Enthusiast Learner.',
          'Graphics Designer.',
          'Marketing & Ads Specialist.',
          'Researcher.',
          'Climate Activist.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; radius: number; velocity: number }[] = [];
    
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        velocity: Math.random() * 0.5
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        
        star.y += star.velocity;
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mahdi Al Wakil
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300">
              I'm a <span ref={typedRef}></span>
            </div>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 text-white rounded-full
                       hover:bg-gray-700 transition-all duration-300 inline-block"
            >
              Get In Touch
            </a>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1635107510862-53886e926b74?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-full w-80 h-80 object-cover mx-auto border-4 border-purple-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}