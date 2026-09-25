'use client';

import Link from 'next/link';

import {
  MdOutlineArrowForward,
  MdOutlinePolicy,
  MdOutlineHealthAndSafety,
  MdOutlinePersonSearch,
  MdOutlineSearch,
  MdOutlineBusinessCenter,
  MdOutlineVisibility,
} from 'react-icons/md';

import './InvestigationServices.css';

const insuranceServices = [
  {
    id: 1,
    title: 'Insurance Investigation',
    description:
      'Professional investigation support for insurance-related verification and claim requirements.',
    icon: MdOutlinePolicy,
    theme: 'blue',
  },
  {
    id: 2,
    title: 'Health Claim Investigation',
    description:
      'Structured investigation support for healthcare and medical insurance claims.',
    icon: MdOutlineHealthAndSafety,
    theme: 'teal',
  },
  {
    id: 3,
    title: 'Death Claim Investigation',
    description:
      'Confidential investigation support for death claim verification and documentation.',
    icon: MdOutlinePersonSearch,
    theme: 'violet',
  },
];

const services = [
  {
    id: 1,
    title: 'Personal Investigation',
    description:
      'Confidential investigation support for personal matters.',
    icon: MdOutlineSearch,
    theme: 'orange',
  },
  {
    id: 2,
    title: 'Background Verification',
    description:
      'Structured verification services for important decisions.',
    icon: MdOutlinePersonSearch,
    theme: 'blue',
  },
  {
    id: 3,
    title: 'Corporate Investigation',
    description:
      'Professional investigation support for business requirements.',
    icon: MdOutlineBusinessCenter,
    theme: 'green',
  },
  {
    id: 4,
    title: 'Surveillance Services',
    description:
      'Discreet and professionally managed investigation assignments.',
    icon: MdOutlineVisibility,
    theme: 'violet',
  },
];

const getContactUrl = (service) =>
  `/contact?service=${encodeURIComponent(service)}`;

const InvestigationServices = () => {
  return (
    <section className="investigation-page">

      {/* Background decoration */}
      <div className="investigation-bg-line investigation-bg-line-one" />
      <div className="investigation-bg-line investigation-bg-line-two" />

      <div className="investigation-container">

        {/* HERO */}
        <header className="investigation-hero">

          <div className="investigation-hero-image">
            <img
              src="/images/hero/investigation1.jpeg"
              alt="Insurance and investigation services"
            />

            <div className="investigation-hero-overlay" />

            <div className="investigation-hero-content">
              <span>INSURANCE &amp; INVESTIGATION</span>

              <h1>
                Professional investigation
                <br />
                <strong>when it matters.</strong>
              </h1>

              <p>
                Reliable investigation and verification support
                for insurance, healthcare and business requirements.
              </p>
            </div>

            <div className="investigation-hero-index">
              <span>04</span>
              <small>SERVICES</small>
            </div>
          </div>

        </header>


        {/* INSURANCE INVESTIGATION */}
        <section className="investigation-feature-section">

          <div className="investigation-section-heading">

            <div>
              <span className="investigation-kicker">
                INSURANCE INVESTIGATION
              </span>

              <h2>
                Investigation support
                <span> for every claim.</span>
              </h2>
            </div>

            <p>
              Structured and confidential investigation services
              supporting insurance and claim-related requirements.
            </p>

          </div>


          <div className="insurance-grid">

            {insuranceServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={getContactUrl(service.title)}
                  className={`insurance-card insurance-${service.theme}`}
                >

                  <div className="insurance-card-top">

                    <span className="insurance-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="insurance-icon">
                      <Icon />
                    </div>

                  </div>

                  <div className="insurance-card-content">

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  <div className="insurance-card-footer">

                    <span>Enquire now</span>

                    <span className="insurance-arrow">
                      <MdOutlineArrowForward />
                    </span>

                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* GENERAL INVESTIGATION */}
        <section className="investigation-services-section">

          <div className="investigation-section-heading compact">

            <div>
              <span className="investigation-kicker">
                INVESTIGATION SERVICES
              </span>

              <h2>
                Professional investigation
                <span> support.</span>
              </h2>
            </div>

            <p>
              Confidential services designed around personal,
              corporate and verification requirements.
            </p>

          </div>


          <div className="investigation-services-grid">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={getContactUrl(service.title)}
                  className={`investigation-service-card service-${service.theme}`}
                >

                  <div className="investigation-service-icon">
                    <Icon />
                  </div>

                  <div className="investigation-service-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="investigation-service-content">

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  <div className="investigation-service-arrow">
                    <MdOutlineArrowForward />
                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* BOTTOM CTA */}
        <section className="investigation-cta">

          <div className="investigation-cta-content">

            <span>NEED INVESTIGATION SUPPORT?</span>

            <h2>
              Tell us what you
              <span> need to investigate.</span>
            </h2>

            <p>
              Select a service and share your requirement
              with our team.
            </p>

          </div>

          <Link
            href="/contact"
            className="investigation-cta-button"
          >
            Send an enquiry
            <MdOutlineArrowForward />
          </Link>

        </section>

      </div>
    </section>
  );
};

export default InvestigationServices;