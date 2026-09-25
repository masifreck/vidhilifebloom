'use client';

import Link from 'next/link';
import {
  MdOutlineArrowForward,
  MdOutlineVaccines,
  MdOutlineAccessibilityNew,
  MdOutlineMedicalServices,
  MdOutlineWheelchairPickup,
  MdOutlineMonitorHeart,
  MdOutlineCorporateFare,
  MdOutlineElderly,
} from 'react-icons/md';

import './HomeCareServices.css';

const services = [
  {
    id: 1,
    title: 'Caregiver & Elderly',
    description:
      'Trained attendants for daily-living care of chronically ill, disabled or aged family members.',
    icon: MdOutlineElderly,
    theme: 'teal',
  },
  {
    id: 2,
    title: 'Nursing Assistance',
    description:
      'Qualified nurses for personalized care at home — dressings, injections, ICU-level monitoring.',
    icon: MdOutlineVaccines,
    theme: 'blue',
  },
  {
    id: 3,
    title: 'Physiotherapy',
    description:
      'Home-based rehab and mobility support for stroke, surgery recovery, pain and more.',
    icon: MdOutlineAccessibilityNew,
    theme: 'violet',
  },
  {
    id: 4,
    title: "Doctor's Consultation",
    description:
      'Practising doctors who visit home for evaluation, prescriptions and disease management.',
    icon: MdOutlineMedicalServices,
    theme: 'orange',
  },
  {
    id: 5,
    title: 'Medical Equipment',
    description:
      'Wheelchairs, hospital beds, oxygen, nebulizers and more — for sale or rent, installed at home.',
    icon: MdOutlineWheelchairPickup,
    theme: 'green',
  },
  {
    id: 6,
    title: 'General Health Checkup',
    description:
      'Preventive screenings and health-check camps for schools and corporate clients.',
    icon: MdOutlineMonitorHeart,
    theme: 'rose',
  },
  {
    id: 7,
    title: 'Onsite Medical Room',
    description:
      'On-site medical rooms and health talks to support corporate employee well-being.',
    icon: MdOutlineCorporateFare,
    theme: 'indigo',
  },
];

const getContactUrl = (service) =>
  `/contact?service=${encodeURIComponent(service)}`;

const HomeCareServices = () => {
  return (
    <section className="home-care-page">

      {/* Decorative background */}
      <div className="home-care-bg-line home-care-bg-line-one" />
      <div className="home-care-bg-line home-care-bg-line-two" />
      <div className="home-care-bg-circle home-care-bg-circle-one" />

      <div className="home-care-container">

        {/* PAGE HEADER */}
        <header className="home-care-header">

          <div className="home-care-header-content">

            <span className="home-care-eyebrow">
              PROFESSIONAL HOME CARE
            </span>

            <h1>
              Compassionate care
              <span> where you need it.</span>
            </h1>

            <p>
              Trusted home-based healthcare and support services
              designed around patients, families and everyday needs.
            </p>

          </div>

          <div className="home-care-header-side">
            <span>07</span>
            <p>Professional services</p>
          </div>

        </header>


        {/* FEATURED INTRO */}
        <section className="home-care-feature">

          <div className="home-care-feature-content">

            <span className="home-care-section-kicker">
              CARE AT HOME
            </span>

            <h2>
              Support that makes
              <span> everyday care easier.</span>
            </h2>

            <p>
              From trained caregivers and nursing assistance to
              physiotherapy and medical equipment, choose the
              support that fits your requirement.
            </p>

          </div>

          <div className="home-care-feature-mark">
            <span>CARE</span>
            <span>01</span>
          </div>

        </section>


        {/* SERVICES */}
        <section className="home-care-services">

          <div className="home-care-section-heading">

            <div>
              <span className="home-care-section-kicker">
                OUR SERVICES
              </span>

              <h2>
                Care for every
                <span> stage of life.</span>
              </h2>
            </div>

            <p>
              Explore our home care, clinical and workplace
              healthcare support services.
            </p>

          </div>


          <div className="home-care-grid">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={getContactUrl(service.title)}
                  className={`home-care-card theme-${service.theme}`}
                >

                  <div className="home-care-card-top">

                    <span className="home-care-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="home-care-icon">
                      <Icon />
                    </div>

                  </div>


                  <div className="home-care-card-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>


                  <div className="home-care-card-footer">

                    <span>
                      Book service
                    </span>

                    <span className="home-care-arrow">
                      <MdOutlineArrowForward />
                    </span>

                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* BOTTOM CTA */}
        <section className="home-care-cta">

          <div className="home-care-cta-decoration" />

          <div className="home-care-cta-content">

            <span>
              NEED HOME CARE SUPPORT?
            </span>

            <h2>
              Tell us what kind of care
              <span> you are looking for.</span>
            </h2>

            <p>
              Choose a service and send us your requirement.
              Our team can help you with the next step.
            </p>

          </div>

          <Link
            href="/contact"
            className="home-care-cta-button"
          >
            Talk to our team
            <MdOutlineArrowForward />
          </Link>

        </section>

      </div>
    </section>
  );
};

export default HomeCareServices;