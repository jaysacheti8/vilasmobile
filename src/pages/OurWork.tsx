import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import weddingImage from '@/assets/weddingcam.jpeg';
import corporateImage from '@/assets/corporate-event.webp';
import fashionImage from '@/assets/fashion.webp';
import preweddingImage from '@/assets/prewedding.webp';
import portraitImage from '@/assets/familypic.webp';
import socialImage from '@/assets/birthday.webp';
import industrialImage from '@/assets/industry.webp';
import heroImage from '@/assets/image.png';
import corporatemeet from '@/assets/corporatemeet.webp';
import corporate2 from '@/assets/image (2).webp';
import corporate3 from '@/assets/image (3).webp';
import corporate4 from '@/assets/image (4).webp';
import corporate5 from '@/assets/image (5).webp';
import fashion1 from '@/assets/f1.webp';
import fashion2 from '@/assets/f2.webp';

const categories = ['All', 'Weddings', 'Corporate', 'Fashion', 'Industrial', 'Social', 'Portraits'];

const portfolioItems = [
  { src: weddingImage, alt: 'Indian Wedding Ceremony', category: 'Weddings' },
  { src: heroImage, alt: 'Wedding Portrait', category: 'Weddings' },
  { src: preweddingImage, alt: 'Pre-Wedding Shoot', category: 'Weddings' },
  { src: corporateImage, alt: 'Corporate Conference', category: 'Corporate' },
  { src: fashionImage, alt: 'Fashion Editorial', category: 'Fashion' },
  { src: industrialImage, alt: 'Manufacturing Facility', category: 'Industrial' },
  { src: portraitImage, alt: 'Family Portrait', category: 'Portraits' },
  { src: socialImage, alt: 'Birthday Celebration', category: 'Social' },
  { src: corporatemeet, alt: 'Corporate Conference', category: 'Corporate' },
  { src: corporate2, alt: 'Corporate Conference', category: 'Corporate' },
  { src: corporate3, alt: 'Corporate Conference', category: 'Corporate' },
  { src: corporate4, alt: 'Corporate Conference', category: 'Corporate' },
  { src: corporate5, alt: 'Corporate Conference', category: 'Corporate' },
  { src: fashion1, alt: 'Fashion Editorial', category: 'Fashion' },
  { src: fashion2, alt: 'Fashion Editorial', category: 'Fashion' },
];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-burgundy text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero text-foreground mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-elegant max-w-2xl mx-auto text-lg"
          >
            Explore our collection of photographs capturing weddings, corporate events, 
            fashion shoots, and more. Each image tells a unique story.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-burgundy text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.alt}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="image-hover-zoom cursor-pointer relative group aspect-[4/3] rounded-sm overflow-hidden"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex flex-col items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-serif">
                    {item.alt}
                  </span>
                  <span className="text-primary-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm mt-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

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
            className="absolute top-6 right-6 text-primary-foreground hover:text-burgundy-light transition-colors"
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
    </main>
  );
};

export default OurWork;