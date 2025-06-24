
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src="logo_dark.png" 
                    alt="Ecocifer Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Empowering sustainable AI innovation for a better tomorrow. Combining cutting-edge technology with environmental responsibility.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-rounded font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-eco-400 transition-colors">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-eco-400 transition-colors">About Us</a>
                <a href="#services" className="block text-gray-400 hover:text-eco-400 transition-colors">Services</a>
                <a href="#contact" className="block text-gray-400 hover:text-eco-400 transition-colors">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-rounded font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-eco-400 flex-shrink-0" />
                  <span className="text-gray-400">contact@ecocifer.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-eco-400 flex-shrink-0" />
                  <span className="text-gray-400">Toronto, Canada</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; {currentYear} Ecocifer. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                Building sustainable AI solutions for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
