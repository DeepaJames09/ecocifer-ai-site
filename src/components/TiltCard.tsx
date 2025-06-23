
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

const TiltCard = ({ children, className = '', index = 0 }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out'
    });
    
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`card-3d relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.6,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-eco-400/20 to-teal-400/20 rounded-3xl blur-xl -z-10 animate-pulse" />
      )}
      
      {children}
    </motion.div>
  );
};

export default TiltCard;
