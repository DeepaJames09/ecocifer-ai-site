
import { motion } from 'framer-motion';
import { Leaf, Brain, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Innovation",
      description: "We develop AI solutions that prioritize environmental responsibility and long-term sustainability."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Ethical AI",
      description: "Our AI systems are built with transparency, fairness, and human-centered design principles."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Approach",
      description: "We work closely with stakeholders to ensure our solutions meet real-world needs effectively."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact Focused",
      description: "Every project is designed to create measurable positive impact for society and the environment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              About <span className="text-eco-600">Ecocifer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a research-driven organization dedicated to developing sustainable AI solutions 
              that address real-world challenges while maintaining the highest ethical standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-eco-50 to-teal-50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-eco-100 rounded-2xl text-eco-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-rounded font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
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
