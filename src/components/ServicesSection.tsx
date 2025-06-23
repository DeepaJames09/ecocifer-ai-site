
import { Brain, Lightbulb, Wrench, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="services" className="py-20 gradient-eco-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 gradient-eco mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions combining artificial intelligence with environmental consciousness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-eco-100 animate-fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 gradient-eco rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
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
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 gradient-eco rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="border-eco-300 text-eco-700 hover:bg-eco-50 transition-all duration-300 rounded-xl group-hover:border-eco-500"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
