
import { Brain, Lightbulb, Wrench, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Research & Strategy",
      description: "Comprehensive AI research and strategic planning for sustainable technology implementation.",
      features: ["Agentic AI Development", "Cybersecurity Applications", "Performance Optimization"]
    },
    {
      icon: Lightbulb,
      title: "Sustainable Tech Consulting",
      description: "Expert guidance on integrating green computing practices and eco-friendly technology solutions.",
      features: ["Green Computing", "Energy Efficiency", "Carbon Footprint Analysis"]
    },
    {
      icon: Wrench,
      title: "Prototype & POC Development",
      description: "Rapid prototyping and proof-of-concept development for innovative sustainable AI solutions.",
      features: ["MVP Development", "Technical Validation", "Scalability Planning"]
    },
    {
      icon: FileText,
      title: "Custom Reports & Workshops",
      description: "Tailored research reports and educational workshops on sustainable AI practices.",
      features: ["Industry Analysis", "Training Programs", "Best Practices Guide"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-eco-subtle relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor"/>
              <path d="M25,5 L25,20 M25,30 L25,45 M5,25 L20,25 M30,25 L45,25" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-rounded font-bold text-gray-900 mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            
            <div className="w-24 h-1 gradient-eco mx-auto rounded-full mb-8"></div>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Comprehensive solutions combining artificial intelligence with environmental consciousness
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <TiltCard key={service.title} index={index}>
                <div className="glassmorphism bg-white/90 rounded-3xl p-8 shadow-xl border border-eco-100 group h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div 
                      className="w-14 h-14 gradient-eco rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-rounded font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: (index * 0.2) + (featureIndex * 0.1) + 0.5,
                          duration: 0.5
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 gradient-eco rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      variant="outline" 
                      className="glassmorphism border-eco-300 text-eco-700 hover:bg-eco-50 transition-all duration-300 rounded-xl group-hover:border-eco-500"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
