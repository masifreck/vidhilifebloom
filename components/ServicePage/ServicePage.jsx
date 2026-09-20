import Link from 'next/link';
import {
  FiArrowRight,
  FiCheck,
  FiPhone,
} from 'react-icons/fi';

import './ServicePage.css';

const ServicePage = ({
  eyebrow,
  title,
  description,
  image,
  services,
}) => {
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="service-page-hero">

        <div className="service-page-hero-image">
          <img
            src={image}
            alt={title}
          />

          <div className="service-page-hero-overlay" />
        </div>

        <div className="container service-page-hero-container">

          <div className="service-page-hero-content">

            <span className="service-page-eyebrow">
              {eyebrow}
            </span>

            <h1>{title}</h1>

            <p>{description}</p>

            <div className="service-page-actions">

              <a
                href="https://wa.me/919090207519"
                target="_blank"
                rel="noopener noreferrer"
                className="service-primary-button"
              >
                Enquire on WhatsApp
                <FiArrowRight />
              </a>

              <a
                href="tel:9090207519"
                className="service-phone-button"
              >
                <FiPhone />
                Call us
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="service-list-section">

        <div className="container">

          <div className="service-list-heading">

            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Services that make
              <span> a difference</span>
            </h2>

          </div>


          <div className="service-list-grid">

            {services.map((service, index) => (

              <div
                className="service-list-card"
                key={index}
              >

                <div className="service-list-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="service-list-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-list-check">
                    <FiCheck />
                    Professional support
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="service-page-cta">

        <div className="container">

          <div className="service-page-cta-box">

            <div>
              <span className="service-page-cta-label">
                NEED MORE INFORMATION?
              </span>

              <h2>
                Let's discuss how we can help.
              </h2>

              <p>
                Contact our team for service details,
                availability and enquiries.
              </p>
            </div>

            <Link
              href="/contact"
              className="service-cta-button"
            >
              Contact us
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ServicePage;