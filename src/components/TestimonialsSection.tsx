import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Selwyn Fernandes',
    text: 'I visited Vilas Photo Studio for visa and LinkedIn profile photos and was extremely happy with the experience. The staff was professional and guided me with the right poses and official requirements. Highly satisfied with the service.',
    rating: 5,
  },
  {
    name: 'Yusuf Shaikh',
    text: 'One of the oldest photo studios in Andheri West, maintaining the same quality and level of service over the years. Highly recommended for any photography-related work.',
    rating: 5,
  },
  {
    name: 'Puneet Shetty',
    text: 'Got my photos clicked for a Schengen visa and received them in less than 15 minutes. Excellent service and highly recommended for anyone needing quick and professional photos.',
    rating: 5,
  },
  {
    name: 'Charmi Nandu',
    text: 'Vilas Photo Studio is our go-to family photo place. They are experienced, polite, and extremely professional. Always a great experience.',
    rating: 5,
  },
  {
    name: 'Subrat Pani',
    text: 'High-quality service with great speed and excellent photography. I have been using their services since 2015 and they have always delivered above expectations. Very customer-friendly and supportive.',
    rating: 5,
  },
  {
    name: 'Pratima Bhaskar',
    text: 'Every important family event is always covered by Mr. Vikrant and his team. They have a natural sense of capturing beautiful moments through candid photography and video. I wouldn’t trust anyone else.',
    rating: 5,
  },
  {
    name: 'Aneeta Sharma',
    text: 'My family and I have been visiting Vilas Photo Studio for almost a decade. They are very professional and excellent at photo editing. Outstanding service and highly recommended.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-burgundy text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3 md:mb-4"
          >
            Testimonials
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-foreground mb-4 md:mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-sm p-6 sm:p-8 md:p-12 shadow-sm">
            <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-12 md:h-12 text-burgundy/20" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 md:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-burgundy text-burgundy" />
                ))}
              </div>

              {/* Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm sm:text-base md:text-xl text-center text-foreground leading-relaxed mb-6 md:mb-8 font-serif italic"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Name */}
              <motion.p
                key={`name-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center text-xs sm:text-sm md:text-base text-muted-foreground font-medium"
              >
                — {testimonials[currentIndex].name}
              </motion.p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
              <button
                onClick={prev}
                className="p-3 md:p-2 rounded-full border border-border hover:border-burgundy hover:text-burgundy transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-burgundy'
                        : 'bg-border hover:bg-burgundy/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 md:p-2 rounded-full border border-border hover:border-burgundy hover:text-burgundy transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
