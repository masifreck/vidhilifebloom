import { Suspense } from 'react';
import ContactSection from '@/components/ContactSection/ContactSection';

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Vidhi Lifebloom Healthcare Private Limited for healthcare, wellness, investigation and manpower services.',
};

export default function ContactPage() {
  return (
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
  );
}