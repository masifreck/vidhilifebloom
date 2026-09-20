import HeroCarousel from '@/components/Hero/HeroCarousel';
import ServiceCategories from '@/components/Services/ServiceCategories';
import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <ServiceCategories />



      <ContactSection />
    </>
  );
}