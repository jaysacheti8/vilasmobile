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
// /import wdv1 from '@/assets/wdv1.webp';
//import wdv2 from '@/assets/wdv2.webp';
//import wdv3 from '@/assets/wdv3.webp';
import fdv3 from '@/assets/fdv3.webp';
import fdv4 from '@/assets/fdv4.webp';
import idv3 from '@/assets/idv3.webp';
import idv4 from '@/assets/idv4.webp';
import idv5 from '@/assets/idv5.webp';
import scd8 from '@/assets/scd8.webp';
import svd2 from '@/assets/svd2.webp';
import svd7 from '@/assets/svd7.webp';
import ptv1 from '@/assets/ptv1.webp';
import pdv2 from '@/assets/pdv2.webp';
import w1 from '@/assets/w1.png';
import w2 from '@/assets/w2.png';
import f3 from '@/assets/f3.png';
import lady from '@/assets/LADY.png';
import foot from '@/assets/foot.png';
import ss from '@/assets/bd.webp';
import sc from '@/assets/hey.webp';
import event from '@/assets/eventme.webp';
import chess from '@/assets/chess.webp';
import jd from '@/assets/jd.webp';
import chair from '@/assets/chair.webp';
import whi from '@/assets/whi.webp';
import bcg from '@/assets/bcg.webp';
import bicep from '@/assets/bic.webp';
import jeans from '@/assets/jean.webp';
import jeans2 from '@/assets/j2.webp';
import hans from '@/assets/hand.webp';



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
  //{ src: wdv1, alt: 'Wedding Portrait', category: 'Weddings' },
  //{ src: wdv2, alt: 'Wedding Portrait', category: 'Weddings' },
  //{ src: wdv3, alt: 'Wedding Portrait', category: 'Weddings' },
  { src: fdv3, alt: 'Fashion Editorial', category: 'Fashion' },
  { src: fdv4, alt: 'Fashion Editorial', category: 'Fashion' },
  { src: f3, alt: 'Fashion Editorial', category: 'Fashion' },
  
  { src: idv3, alt: 'Manufacturing Facility', category: 'Industrial' },
  { src: idv4, alt: 'Manufacturing Facility', category: 'Industrial' },
  { src: idv5, alt: 'Manufacturing Facility', category: 'Industrial' },
  { src: scd8, alt: 'Republic Day', category: 'Social' },
  { src: svd2, alt: 'Holi Festival', category: 'Social' },
  { src: svd7, alt: 'Republic Day', category: 'Social' },
  { src: ptv1, alt: 'Family Portrait', category: 'Portraits' },
  { src: pdv2, alt: 'Family Portrait', category: 'Portraits' },
  { src: w1, alt: 'Wedding Portrait', category: 'Weddings' },
  { src: w2, alt: 'Wedding Portrait', category: 'Weddings' },
  { src: lady, alt: 'Wedding Portrait', category: 'Weddings' },
  { src: foot, alt: 'Wedding Portrait', category: 'Weddings' },
  { src: ss, alt: 'Body Building Competition Photoshoot', category: 'Social' },
  { src: sc, alt: 'Body Building Competition Photoshoot', category: 'Social' },
  { src: event, alt: 'Corporate Conference', category: 'Corporate' },
  { src: chess, alt: 'Corporate Conference', category: 'Corporate' },
  { src: jd, alt: 'Corporate Conference', category: 'Corporate' },
  { src: bcg, alt: 'Corporate Conference', category: 'Corporate' },
  { src: chair, alt: 'Corporate Conference', category: 'Corporate' },
  { src: whi, alt: 'Social Event', category: 'Social' },
  { src: bicep, alt: 'Body Building Competition Photoshoot', category: 'Social' },
  { src: jeans, alt: 'Fashion Photography', category: 'Fashion' },
  { src: jeans2, alt: 'Fashion Photography', category: 'Fashion' },
  { src: hans, alt: 'Wedding Portrait', category: 'Wedding' },


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