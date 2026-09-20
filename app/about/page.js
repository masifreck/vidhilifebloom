import Link from 'next/link';
import {
  FiArrowRight,
  FiCheckCircle,
} from 'react-icons/fi';
import AboutSection from '@/components/AboutSection/AboutSection';

export default function AboutPage() {
  return (
    <div className="simple-page">

      <section className="simple-page-hero">
        <div className="container">

          <span className="section-label">
            ABOUT US
          </span>

          <h1>
            Vidhi Lifebloom Healthcare
            <span> Private Limited</span>
          </h1>

          <p>
            A professional service organization providing
            solutions across home care, wellness, investigation
            and manpower support.
          </p>

        </div>
      </section>


      <section className="simple-page-content">
        <div className="container">

          <div className="about-company-grid">

            <div>
              <span className="section-label">
                OUR APPROACH
              </span>

              <h2>
                Professional service with
                <span> people at the centre.</span>
              </h2>
            </div>

            <div>
              <p>
                Vidhi Lifebloom Healthcare Private Limited
                focuses on providing dependable services
                across different areas of everyday life
                and organizational requirements.
              </p>

              <p>
                From home care and wellness support to
                investigation and manpower solutions,
                our aim is to provide practical,
                professional and responsive services.
              </p>

              <Link
                href="/contact"
                className="about-page-button"
              >
                Talk to us
                <FiArrowRight />
              </Link>
            </div>

          </div>

        </div>
      </section>
   <AboutSection />
    </div>
  );
}