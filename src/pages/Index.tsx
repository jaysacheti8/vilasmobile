import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ServicesPreview from '@/components/ServicesPreview';
import PortfolioPreview from '@/components/PortfolioPreview';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
