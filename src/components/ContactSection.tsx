import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the Supabase Edge Function to send emails
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your interest. We'll get back to you soon. Check your email for a confirmation.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data?.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 gradient-eco mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your sustainable AI journey? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glassmorphism bg-gradient-to-br from-eco-50/80 to-teal-50/80 rounded-3xl p-8 h-full backdrop-blur-sm border border-eco-200/50">
                <h3 className="text-2xl font-rounded font-bold text-gray-900 mb-8">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 gradient-eco rounded-2xl flex items-center justify-center flex-shrink-0 pulse-glow">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600">contact@ecocifer.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 gradient-eco rounded-2xl flex items-center justify-center flex-shrink-0 pulse-glow">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">Toronto, Canada</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 pt-8 border-t border-eco-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Why Choose Ecocifer?</h4>
                  <div className="space-y-3">
                    {[
                      "Cutting-edge AI research",
                      "Sustainability-focused approach",
                      "Proven industry expertise",
                      "Collaborative partnership model"
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-eco-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glassmorphism bg-white/90 rounded-3xl p-8 shadow-xl border border-eco-100/50 backdrop-blur-sm">
                <h3 className="text-2xl font-rounded font-bold text-gray-900 mb-6">
                  Send us a message
                </h3>

                <div className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-eco-200 focus:border-eco-500 focus:ring-eco-500 glassmorphism bg-white/50"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-eco-200 focus:border-eco-500 focus:ring-eco-500 glassmorphism bg-white/50"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-xl border-eco-200 focus:border-eco-500 focus:ring-eco-500 resize-none glassmorphism bg-white/50"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-eco text-white hover:opacity-90 transition-all duration-300 rounded-xl py-3 font-medium shadow-lg hover:shadow-xl pulse-glow"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
