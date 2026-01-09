import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/h12.png';

const HeroSection = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* EST */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#FFFFFF] text-sm sm:text-base md:text-xl font-semibold tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-9 drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]"
          >
            Est. 1975
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-3xl sm:text-4xl md:text-7xl font-bold tracking-wide mb-4 md:mb-6 drop-shadow-[0_6px_20px_rgba(0,0,0,0.75)]"
          >
            Vilas Photo Studio
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-lg md:text-3xl font-semibold text-white mb-3 md:mb-4 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]"
          >
            25+ Years of Excellence in Photography & Videography
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm sm:text-base md:text-xl text-white font-medium max-w-2xl mx-auto mb-6 md:mb-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]"
          >
            Specializing in Corporate Events • Weddings • Social Events • Fashion • Industrial Photography
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link to="/our-work" className="btn-hero w-full sm:w-auto">
              View Our Work
            </Link>
            <Link to="/contact" className="btn-hero-outline w-full sm:w-auto">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (hidden on small screens) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        onClick={scrollToContent}
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-[#2A2A2A] hover:text-[#8B1E1E] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
