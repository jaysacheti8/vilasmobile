import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

import weddingImage from '@/assets/weddingcam.jpeg';
import corporateImage from '@/assets/corporate-event.webp';
import fashionImage from '@/assets/fashion.webp';
import preweddingImage from '@/assets/prewedding.webp';
import portraitImage from '@/assets/familypic.webp';
import socialImage from '@/assets/birthday.webp';

const portfolioImages = [
  { src: weddingImage, alt: 'Wedding Photography', category: 'Wedding' },
  { src: preweddingImage, alt: 'Pre-Wedding Shoot', category: 'Wedding' },
  { src: corporateImage, alt: 'Corporate Event', category: 'Corporate' },
  { src: fashionImage, alt: 'Fashion Photography', category: 'Fashion' },
  { src: portraitImage, alt: 'Portrait Session', category: 'Portrait' },
  { src: socialImage, alt: 'Social Event', category: 'Events' },
];

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="section-padding bg-secondary/30" ref={ref}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-burgundy text-sm font-medium tracking-[0.2em] uppercase mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-section text-foreground mb-6"
            >
              Our Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-elegant max-w-2xl mx-auto"
            >
              A glimpse into our portfolio showcasing the artistry and excellence 
              we bring to every project.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="image-hover-zoom cursor-pointer relative group aspect-square rounded-sm overflow-hidden"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium tracking-wide">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-burgundy transition-colors group"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-burgundy transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </>
  );
};

export default PortfolioPreview;