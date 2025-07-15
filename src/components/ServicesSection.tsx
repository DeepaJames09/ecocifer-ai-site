
import { motion } from 'framer-motion';
import { Code, Database, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "AI Development",
      description: "Custom AI solutions tailored to your specific needs, built with sustainability and ethics at the core.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Solutions",
      description: "Comprehensive data management and analysis services to unlock insights and drive decision-making.",
      features: ["Data Pipeline Design", "Analytics Platforms", "Data Visualization", "Database Optimization"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Process Automation",
      description: "Intelligent automation solutions that improve efficiency while reducing environmental impact.",
      features: ["Workflow Automation", "Smart Scheduling", "Resource Optimization", "Energy Management"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Consulting",
      description: "Strategic guidance on implementing sustainable AI practices and ethical technology adoption.",
      features: ["AI Strategy", "Ethics Assessment", "Sustainability Audit", "Implementation Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-eco-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-900 mb-6">
              Our <span className="text-eco-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive AI and technology solutions designed to create positive impact 
              while maintaining the highest standards of sustainability and ethics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-eco-100 rounded-2xl text-eco-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-rounded font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-eco-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
