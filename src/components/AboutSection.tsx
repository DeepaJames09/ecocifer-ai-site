
import { Target, Shield, Cpu, Heart } from 'lucide-react';

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 gradient-eco mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
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
            </div>

            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Innovation and Environment" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-eco-600/20 to-teal-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-eco-50 to-teal-50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 gradient-eco rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-rounded font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
