
import { Target, Shield, Cpu, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const sectionRef = useScrollAnimation();

  const features = [
    {
      icon: Target,
      title: "Research-Driven",
      description: "Focused on sustainable AI research with measurable real-world impact"
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "Prioritizing responsible AI development and deployment practices"
    },
    {
      icon: Cpu,
      title: "Green Computing",
      description: "Optimizing computational efficiency to reduce environmental footprint"
    },
    {
      icon: Heart,
      title: "Purpose-Built",
      description: "Technology solutions designed to benefit both society and environment"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,300 Q200,200 300,300 T500,300 Q600,400 700,300" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="200" cy="250" r="50" fill="url(#eco-gradient)" opacity="0.3"/>
          <circle cx="600" cy="350" r="30" fill="url(#eco-gradient)" opacity="0.5"/>
          <defs>
            <linearGradient id="eco-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6FCF97"/>
              <stop offset="100%" stopColor="#27AE60"/>
            </linearGradient>
          </defs>
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
            <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 gradient-eco mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-rounded font-semibold text-gray-900 mb-6">
                About Ecocifer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ecocifer is a research-driven company focused on sustainable AI. We explore agentic AI in cybersecurity, green computing, and ethical technology applications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to bridge the gap between cutting-edge artificial intelligence and environmental responsibility, creating solutions that advance both technological innovation and ecological sustainability.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 gradient-eco rounded-full"></div>
                <span className="text-eco-600 font-medium">Innovation × Sustainability</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Abstract AI-Nature Fusion Illustration */}
              <div className="relative glassmorphism rounded-3xl p-8 bg-gradient-to-br from-eco-50 to-teal-50">
                <svg width="100%" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Neural network nodes */}
                  <g className="opacity-70">
                    {[...Array(12)].map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={50 + (i % 4) * 80}
                        cy={50 + Math.floor(i / 4) * 80}
                        r="8"
                        fill="#27AE60"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </g>
                  
                  {/* Connecting lines */}
                  <g className="opacity-50">
                    <path d="M50,50 L130,130 M130,50 L210,130 M210,50 L290,130" stroke="#6FCF97" strokeWidth="2"/>
                    <path d="M50,130 L130,210 M130,130 L210,210 M210,130 L290,210" stroke="#6FCF97" strokeWidth="2"/>
                  </g>
                  
                  {/* Organic elements */}
                  <motion.path
                    d="M320,50 Q350,100 320,150 Q290,200 320,250"
                    stroke="#00BFA5"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Leaves */}
                  <motion.ellipse
                    cx="340"
                    cy="80"
                    rx="15"
                    ry="25"
                    fill="#6FCF97"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 15 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </svg>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-eco-600/10 to-teal-600/10 rounded-3xl"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="text-center p-6 rounded-2xl neumorphic hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-rounded font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
