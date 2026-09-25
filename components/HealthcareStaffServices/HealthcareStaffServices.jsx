'use client';

import Link from 'next/link';

import {
  MdOutlineArrowForward,
  MdOutlineMedicalServices,
  MdOutlineAccessibilityNew,
  MdOutlineElderly,
  MdOutlineHealthAndSafety,
  MdOutlineHealing,
  MdOutlineScience,
  MdOutlineLocalHospital,
  MdOutlineSupportAgent,
  MdOutlineBusinessCenter,
  MdOutlineCleaningServices,
} from 'react-icons/md';

import './HealthcareStaffServices.css';

const featuredServices = [
  {
    id: 1,
    title: 'Nursing Staff',
    description:
      'Qualified nursing professionals for hospitals, healthcare facilities and home-based requirements.',
    icon: MdOutlineMedicalServices,
    theme: 'teal',
  },
  {
    id: 2,
    title: 'Patient Care Attendants',
    description:
      'Trained attendants providing dependable assistance and everyday patient support.',
    icon: MdOutlineAccessibilityNew,
    theme: 'blue',
  },
  {
    id: 3,
    title: 'Caregivers',
    description:
      'Dedicated caregivers for elderly, patients and individuals requiring personal support.',
    icon: MdOutlineElderly,
    theme: 'violet',
  },
];

const workforceServices = [
  {
    id: 1,
    title: 'Doctors & Medical Professionals',
    description:
      'Healthcare professionals to support clinical and medical service requirements.',
    icon: MdOutlineHealthAndSafety,
    theme: 'orange',
  },
  {
    id: 2,
    title: 'Physiotherapists',
    description:
      'Qualified physiotherapy professionals for rehabilitation and mobility support.',
    icon: MdOutlineHealing,
    theme: 'green',
  },
  {
    id: 3,
    title: 'Lab Technicians',
    description:
      'Skilled laboratory personnel for diagnostic and healthcare support operations.',
    icon: MdOutlineScience,
    theme: 'blue',
  },
  {
    id: 4,
    title: 'Hospital Support Staff',
    description:
      'Reliable support workforce for day-to-day hospital and healthcare operations.',
    icon: MdOutlineLocalHospital,
    theme: 'rose',
  },
  {
    id: 5,
    title: 'Front Office & Administrative Staff',
    description:
      'Professional staff for reception, coordination and administrative responsibilities.',
    icon: MdOutlineBusinessCenter,
    theme: 'indigo',
  },
  {
    id: 6,
    title: 'Housekeeping Staff',
    description:
      'Trained housekeeping personnel for healthcare facilities and workplace environments.',
    icon: MdOutlineCleaningServices,
    theme: 'mint',
  },
];

const getContactUrl = (service) =>
  `/contact?service=${encodeURIComponent(service)}`;

const HealthcareStaffServices = () => {
  return (
    <section className="healthcare-staff-page">

      {/* Background decoration */}
      <div className="healthcare-staff-bg-line healthcare-staff-bg-line-one" />
      <div className="healthcare-staff-bg-line healthcare-staff-bg-line-two" />

      <div className="healthcare-staff-container">

        {/* ================= HERO ================= */}

        <header className="healthcare-staff-hero">

          <div className="healthcare-staff-hero-image">

            <img
              src="/images/manpower/man1.jpg"
              alt="Healthcare staff solutions"
            />

            <div className="healthcare-staff-hero-overlay" />

            <div className="healthcare-staff-hero-content">

              <span>
                HEALTHCARE STAFF SOLUTIONS
              </span>

              <h1>
                The right people
                <br />
                <strong>for better care.</strong>
              </h1>

              <p>
                Reliable healthcare workforce solutions for hospitals,
                healthcare organizations, businesses and individuals.
              </p>

            </div>

            <div className="healthcare-staff-hero-index">
              <span>05</span>
              <small>WORKFORCE</small>
            </div>

          </div>

        </header>


        {/* ================= FEATURED ================= */}

        <section className="healthcare-staff-feature-section">

          <div className="healthcare-staff-section-heading">

            <div>

              <span className="healthcare-staff-kicker">
                FEATURED STAFFING
              </span>

              <h2>
                Healthcare professionals
                <span> when you need them.</span>
              </h2>

            </div>

            <p>
              Workforce solutions designed to connect organizations
              and families with dependable healthcare support.
            </p>

          </div>


          <div className="healthcare-staff-feature-grid">

            {featuredServices.map((service, index) => {

              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={getContactUrl(service.title)}
                  className={`healthcare-staff-feature-card theme-${service.theme}`}
                >

                  <div className="healthcare-staff-card-top">

                    <span className="healthcare-staff-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="healthcare-staff-icon">
                      <Icon />
                    </div>

                  </div>

                  <div className="healthcare-staff-card-content">

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  <div className="healthcare-staff-card-footer">

                    <span>Enquire now</span>

                    <span className="healthcare-staff-arrow">
                      <MdOutlineArrowForward />
                    </span>

                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* ================= WORKFORCE ================= */}

        <section className="healthcare-staff-workforce-section">

          <div className="healthcare-staff-section-heading compact">

            <div>

              <span className="healthcare-staff-kicker">
                WORKFORCE SOLUTIONS
              </span>

              <h2>
                Staff for every
                <span> healthcare requirement.</span>
              </h2>

            </div>

            <p>
              From clinical professionals to operational support,
              explore workforce categories for different requirements.
            </p>

          </div>


          <div className="healthcare-staff-workforce-grid">

            {workforceServices.map((service, index) => {

              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={getContactUrl(service.title)}
                  className={`healthcare-staff-workforce-card service-${service.theme}`}
                >

                  <div className="healthcare-staff-workforce-icon">
                    <Icon />
                  </div>

                  <div className="healthcare-staff-workforce-content">

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                  </div>

                  <div className="healthcare-staff-workforce-arrow">
                    <MdOutlineArrowForward />
                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="healthcare-staff-cta">

          <div className="healthcare-staff-cta-content">

            <span>
              NEED HEALTHCARE STAFF?
            </span>

            <h2>
              Tell us what kind of
              <span> workforce you need.</span>
            </h2>

            <p>
              Share your staffing requirement and our team
              can help you find the appropriate service.
            </p>

          </div>

          <Link
            href="/contact"
            className="healthcare-staff-cta-button"
          >
            Send an enquiry
            <MdOutlineArrowForward />
          </Link>

        </section>

      </div>
    </section>
  );
};

export default HealthcareStaffServices;