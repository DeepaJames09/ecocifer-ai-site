
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedOrb from './AnimatedOrb';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating particles
      gsap.to('.floating-particle', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Animate hero content
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-animated"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-white/30 rounded-full floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Organic mesh overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="organic-mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50,10 Q80,30 70,60 Q50,90 20,70 Q10,40 30,20 Q40,10 50,10 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic-mesh)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="hero-content">
            <motion.div 
              className="flex items-center justify-center lg:justify-start mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full border border-white/30">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Sustainable AI Innovation</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-rounded font-bold text-white mb-6 leading-tight text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Empowering a{' '}
              <motion.span 
                className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                Sustainable Future
              </motion.span>{' '}
              with Ethical AI
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Combining sustainability and AI for real-world impact. We're building the future where technology serves both innovation and environmental responsibility.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="glassmorphism text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl pulse-glow border border-white/30"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glassmorphism text-white border-white/30 hover:bg-white/10 transition-all duration-300 rounded-full px-8 py-3 font-medium"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right side - 3D Orb */}
          <motion.div 
            ref={orbRef}
            className="flex justify-center items-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.3, duration: 1.2, type: "spring", stiffness: 100 }}
          >
            <AnimatedOrb />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
