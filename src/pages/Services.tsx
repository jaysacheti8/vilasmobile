import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Frame, Book, Shirt, Printer, FileText, Gift, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import weddingImage from '@/assets/weddingcam.jpeg';
import corporateImage from '@/assets/corporate-event.webp';
import fashionImage from '@/assets/fashion.webp';
import industrialImage from '@/assets/industry.webp';
import socialImage from '@/assets/birthday.webp';
import albumImage from '@/assets/album.webp';
import framesImage from '@/assets/customframe.webp';
import mugsImage from '@/assets/mug.jpg';
import pillowsImage from '@/assets/pillowimg.webp';
import tshirtsImage from '@/assets/photo-tshirts.jpg';
import laserImage from '@/assets/laser-printing.jpg';
import xeroxImage from '@/assets/xerox-services.jpg';

const photographyServices = [
  {
    title: 'Wedding Photography & Videography',
    description: 'From pre-wedding shoots to the grand ceremony, we capture every precious moment of your special day with cinematic excellence. Our team ensures no emotion goes unrecorded.',
    image: weddingImage,
    icon: Camera,
  },
  {
    title: 'Corporate Events',
    description: 'Professional coverage for conferences, seminars, product launches, and corporate celebrations. We deliver high-quality images that reflect your brand\'s professionalism.',
    image: corporateImage,
    icon: Video,
  },
  {
    title: 'Social Events',
    description: 'Birthday parties, anniversaries, family gatherings, and celebrations of all kinds. We capture the joy and togetherness that makes these moments special.',
    image: socialImage,
    icon: Camera,
  },
  {
    title: 'Fashion Photography',
    description: 'Editorial and commercial fashion shoots with creative direction and expert lighting. Perfect for portfolios, catalogs, and brand campaigns.',
    image: fashionImage,
    icon: Camera,
  },
  {
    title: 'Industrial Photography',
    description: 'Documentation of manufacturing facilities, machinery, processes, and industrial environments for catalogs, reports, and marketing materials.',
    image: industrialImage,
    icon: Camera,
  },
];

const additionalServices = [
  {
    title: 'Custom Photo Frames',
    description: 'Premium quality frames in various sizes and styles to beautifully display your cherished memories.',
    icon: Frame,
    images: [framesImage, weddingImage, corporateImage, fashionImage, socialImage, albumImage],
  },
  {
    title: 'Wedding Albums',
    description: 'Elegant, handcrafted wedding albums with premium binding and print quality that last a lifetime.',
    icon: Book,
    images: [albumImage, weddingImage, corporateImage, socialImage, fashionImage, framesImage],
  },
  {
    title: 'Photo Mugs & Pillows',
    description: 'Personalized photo gifts including ceramic mugs and custom printed cushions.',
    icon: Gift,
    images: [mugsImage, pillowsImage, framesImage, albumImage, tshirtsImage, weddingImage],
  },
  {
    title: 'Photo T-Shirts',
    description: 'High-quality printed t-shirts with your favorite photos and designs.',
    icon: Shirt,
    images: [tshirtsImage, mugsImage, pillowsImage, fashionImage, corporateImage, socialImage],
  },
  {
    title: 'Laser Printing',
    description: 'Professional laser printing services for documents, photos, and marketing materials.',
    icon: Printer,
    images: [laserImage, xeroxImage, corporateImage, industrialImage, framesImage, albumImage],
  },
  {
    title: 'Xerox Services',
    description: 'Quick and reliable photocopy services for all your document needs.',
    icon: FileText,
    images: [xeroxImage, laserImage, corporateImage, industrialImage, framesImage, albumImage],
  },
];

const ServiceCard = ({ service, index, isPhoto }: { service: typeof photographyServices[0], index: number, isPhoto: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-elegant overflow-hidden ${isPhoto ? '' : 'p-6'}`}
    >
      {isPhoto && 'image' in service && (
        <div className="image-hover-zoom aspect-[16/10]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={isPhoto ? 'p-6' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center">
            <service.icon className="w-5 h-5 text-burgundy" />
          </div>
          <h3 className="heading-card text-foreground">{service.title}</h3>
        </div>
        <p className="text-elegant">{service.description}</p>
      </div>
    </motion.div>
  );
};

interface ProductServiceCardProps {
  service: typeof additionalServices[0];
  index: number;
  onOpenGallery: (images: string[], title: string) => void;
}

const ProductServiceCard = ({ service, index, onOpenGallery }: ProductServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-elegant overflow-hidden cursor-pointer group"
      onClick={() => onOpenGallery(service.images, service.title)}
    >
      <div className="image-hover-zoom aspect-[16/10] relative">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium text-sm">Click to view gallery</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center">
            <service.icon className="w-5 h-5 text-burgundy" />
          </div>
          <h3 className="heading-card text-foreground">{service.title}</h3>
        </div>
        <p className="text-elegant">{service.description}</p>
        <p className="text-burgundy text-sm mt-3 font-medium">{service.images.length} photos available</p>
      </div>
    </motion.div>
  );
};

interface GalleryModalProps {
  images: string[];
  title: string;
  onClose: () => void;
}

const GalleryModal = ({ images, title, onClose }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-burgundy transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <h3 className="text-white text-xl font-serif mb-4 text-center">{title}</h3>
        
        <div className="relative">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-[60vh] object-contain rounded-lg"
          />
          
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                idx === currentIndex ? 'border-burgundy' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        
        <p className="text-white/60 text-center mt-4 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState('');

  const openGallery = (images: string[], title: string) => {
    setGalleryImages(images);
    setGalleryTitle(title);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero text-foreground mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-elegant max-w-2xl mx-auto text-lg"
          >
            From professional photography to custom photo products, we offer a complete 
            range of services to capture and preserve your memories.
          </motion.p>
        </div>
      </section>

      {/* Photography Services */}
      <section className="section-padding" ref={ref}>
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="heading-section text-foreground mb-4">Photography & Videography</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              Professional photography and videography services for all occasions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photographyServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} isPhoto={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">Photo Products & Printing</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              Turn your photos into beautiful keepsakes and gifts. Click on any service to view gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ProductServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-wide text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Contact us today to discuss your photography needs and get a personalized quote.
          </p>
          <Link to="/contact" className="btn-hero bg-burgundy text-white hover:bg-burgundy-light">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <GalleryModal images={galleryImages} title={galleryTitle} onClose={closeGallery} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Services;