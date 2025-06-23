
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-eco-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-eco-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-eco-300/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-eco-200">
              <Sparkles className="w-4 h-4 text-eco-600" />
              <span className="text-sm font-medium text-eco-700">Sustainable AI Innovation</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-rounded font-bold text-gray-900 mb-6 leading-tight">
            Empowering a{' '}
            <span className="bg-gradient-to-r from-eco-600 to-teal-600 bg-clip-text text-transparent">
              Sustainable Future
            </span>{' '}
            with Ethical AI
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Combining sustainability and AI for real-world impact. We're building the future where technology serves both innovation and environmental responsibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-eco text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-eco-300 text-eco-700 hover:bg-eco-50 transition-all duration-300 rounded-full px-8 py-3 font-medium"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
