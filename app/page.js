import { Suspense } from 'react';

import HeroCarousel from '@/components/Hero/HeroCarousel';
import ServiceCategories from '@/components/Services/ServiceCategories';
import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <ServiceCategories />



      <Suspense
        fallback={
          <section className="contact-loading">
            <div className="container">
              <p>Loading contact form...</p>
            </div>
          </section>
        }
      >
        <ContactSection />
      </Suspense>
    </>
  );
}