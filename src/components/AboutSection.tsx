import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Award, Heart } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Camera,
      title: 'Professional Excellence',
      description: 'State-of-the-art equipment and techniques for stunning results.',
    },
    {
      icon: Award,
      title: '50+ Years Legacy',
      description: "A trusted name in Mumbai's photography industry since 1975.",
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Every project receives our dedicated attention and creative passion.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-burgundy text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3 md:mb-4"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-foreground mb-4 md:mb-6"
          >
            A Legacy of Capturing Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-elegant text-sm sm:text-base md:text-lg"
          >
            For over 50 years, Vilas Photo Studio has been at the forefront of photography and
            videography in Mumbai. Our commitment to quality, consistency, and professionalism
            has made us the trusted choice for weddings, corporate events, fashion shoots, and
            industrial documentation. We don't just take photos—we preserve your most precious memories.
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 md:p-8 bg-background rounded-sm shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-burgundy/10 mb-4 md:mb-6">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-burgundy" />
              </div>
              <h3 className="heading-card text-foreground mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-elegant text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
