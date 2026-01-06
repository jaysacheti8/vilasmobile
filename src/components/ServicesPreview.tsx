import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import weddingImage from '@/assets/weddingcam.jpeg';
import corporateImage from '@/assets/corporate-event.webp';
import fashionImage from '@/assets/fashion.webp';
import industrialImage from '@/assets/industry.webp';
import socialImage from '@/assets/birthday.webp';
import framesImage from '@/assets/customframe.webp';
import albumImage from '@/assets/album.webp';
import mugsImage from '@/assets/mug.jpg';
import tshirtsImage from '@/assets/photo-tshirts.jpg';

const services = [
  {
    title: 'Wedding Photography & Videography',
    description: 'Capturing your special day with cinematic elegance and timeless artistry.',
    image: weddingImage,
  },
  {
    title: 'Corporate Events',
    description: 'Professional coverage for conferences, product launches, and corporate celebrations.',
    image: corporateImage,
  },
  {
    title: 'Fashion Photography',
    description: 'Editorial and commercial fashion shoots that showcase style and creativity.',
    image: fashionImage,
  },
  {
    title: 'Industrial Photography',
    description: 'Documenting manufacturing processes, facilities, and industrial environments.',
    image: industrialImage,
  },
  {
    title: 'Social Events',
    description: 'Birthday parties, anniversaries, and family celebrations captured beautifully.',
    image: socialImage,
  },
  {
    title: 'Custom Photo Frames',
    description: 'Premium quality frames in various sizes and styles to display your memories.',
    image: framesImage,
  },
  {
    title: 'Wedding Albums',
    description: 'Elegant, handcrafted wedding albums with premium binding and print quality.',
    image: albumImage,
  },
  {
    title: 'Photo Mugs & Pillows',
    description: 'Personalized photo gifts including ceramic mugs and custom printed cushions.',
    image: mugsImage,
  },
  {
    title: 'Photo T-Shirts',
    description: 'High-quality printed t-shirts with your favorite photos and designs.',
    image: tshirtsImage,
  },
];

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-burgundy text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-elegant max-w-2xl mx-auto"
          >
            From intimate weddings to grand corporate events, we bring the same level of 
            dedication and artistry to every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`card-elegant image-hover-zoom ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-serif text-primary-foreground mb-2 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {service.description}
                  </p>
                </div>
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
            to="/services"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-burgundy transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;