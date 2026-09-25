'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import {
  MdOutlineArrowForward,
  MdOutlineAdd,
  MdOutlineWorkOutline,
  MdOutlinePolicy,
  MdOutlineHealthAndSafety,
  MdOutlineMedicalServices,
  MdOutlineScience,
  MdOutlineMedication,
  MdOutlineRemoveRedEye,
  MdOutlineFace,
  MdOutlineAccessibility,
  MdOutlineHealing,
  MdOutlineFavoriteBorder,
  MdOutlineLocalHospital,
  MdOutlinePregnantWoman,
  MdOutlineVaccines,
  MdOutlineMonitorHeart,
  MdOutlineBloodtype,
  MdOutlineSearch,
  MdOutlinePerson

} from 'react-icons/md';

import './WellnessServices.css';


/* =========================================================
   HEALTH CHECKUPS
========================================================= */

const healthCheckups = [
  {
    id: 1,
    title: 'Pre-Employment Health Checkup',
    shortTitle: 'Pre-Employment',
    description:
      'Complete health assessments designed for employment and workforce requirements.',
    label: 'EMPLOYMENT',
    icon: MdOutlineWorkOutline,
    theme: 'blue',
  },
  {
    id: 2,
    title: 'Pre-Policy Health Checkup',
    shortTitle: 'Pre-Policy',
    description:
      'Health assessment support for insurance and policy-related requirements.',
    label: 'INSURANCE',
    icon: MdOutlinePolicy,
    theme: 'violet',
  },
  {
    id: 3,
    title: 'Paid Health Checkup',
    shortTitle: 'Paid Checkup',
    description:
      'Preventive health assessments designed around your personal wellness needs.',
    label: 'PREVENTIVE',
    icon: MdOutlineHealthAndSafety,
    theme: 'orange',
  },
];


/* =========================================================
   HEALTHCARE SERVICES
========================================================= */

const healthcareServices = [
  {
    id: 1,
    title: 'Doctor Consultation',
    description:
      'Consult healthcare professionals for medical guidance and health concerns.',
    icon: MdOutlineMedicalServices,
    theme: 'teal',
  },
  {
    id: 2,
    title: 'Lab Reports',
    description:
      'Diagnostic testing and laboratory reports for informed healthcare decisions.',
    icon: MdOutlineScience,
    theme: 'blue',
  },
  {
    id: 3,
    title: 'Medicines',
    description:
      'Access essential medicines and medical support for your healthcare needs.',
    icon: MdOutlineMedication,
    theme: 'orange',
  },
];


/* =========================================================
   SPECIALIZED SERVICES
========================================================= */

const procedures = [
  {
    id: 1,
    name: 'Cataract',
    icon: MdOutlineRemoveRedEye,
    theme: 'blue',
  },
  {
    id: 2,
    name: 'Hair Transplant',
    icon: MdOutlineFace,
    theme: 'pink',
  },
  {
    id: 3,
    name: 'LASIK',
    icon: MdOutlineRemoveRedEye,
    theme: 'violet',
  },
  {
    id: 4,
    name: 'Knee',
    icon: MdOutlineAccessibility,
    theme: 'orange',
  },
  {
    id: 5,
    name: 'Hysterectomy',
    icon: MdOutlineFavoriteBorder,
    theme: 'rose',
  },
  {
    id: 6,
    name: 'Tonsillectomy',
    icon: MdOutlineMedicalServices,
    theme: 'red',
  },
  {
    id: 7,
    name: 'Gallstone',
    icon: MdOutlineHealing,
    theme: 'green',
  },
  {
    id: 8,
    name: 'Fissure',
    icon: MdOutlineAccessibility,
    theme: 'purple',
  },
  {
    id: 9,
    name: 'Piles',
    icon: MdOutlinePerson,
    theme: 'amber',
  },
  {
    id: 10,
    name: 'Circumcision',
    icon: MdOutlineHealing,
    theme: 'sky',
  },
  {
    id: 11,
    name: 'Kidney Stones',
    icon: MdOutlineLocalHospital,
    theme: 'coral',
  },
  {
    id: 12,
    name: 'IVF',
    icon: MdOutlinePregnantWoman,
    theme: 'pink',
  },
  {
    id: 13,
    name: 'Gynecomastia',
    icon: MdOutlinePerson,
    theme: 'indigo',
  },
  {
    id: 14,
    name: 'Vaccination',
    icon: MdOutlineVaccines,
    theme: 'mint',
  },
  {
    id: 15,
    name: 'Health Screening',
    icon: MdOutlineMonitorHeart,
    theme: 'teal',
  },
  {
    id: 16,
    name: 'Blood Testing',
    icon: MdOutlineBloodtype,
    theme: 'red',
  },
];


/* =========================================================
   CONTACT URL
========================================================= */

const getContactUrl = (service) =>
  `/contact?service=${encodeURIComponent(service)}`;


/* =========================================================
   COMPONENT
========================================================= */

const WellnessServices = () => {
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredProcedures = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (searchValue) {
      return procedures.filter((procedure) =>
        procedure.name.toLowerCase().includes(searchValue)
      );
    }

    return showAll ? procedures : procedures.slice(0, 12);
  }, [search, showAll]);


  return (
    <section className="wellness-page">

      {/* =====================================================
          BACKGROUND DESIGN
      ===================================================== */}

      <div className="wellness-bg-line wellness-bg-line-one" />
      <div className="wellness-bg-line wellness-bg-line-two" />
      <div className="wellness-bg-line wellness-bg-line-three" />

      <div className="wellness-bg-circle wellness-bg-circle-one" />
      <div className="wellness-bg-circle wellness-bg-circle-two" />


      <div className="wellness-container">

        {/* =================================================
            PAGE INTRO
        ================================================= */}

        <div className="wellness-header">

          <div className="wellness-header-content">

            <span className="wellness-eyebrow">
              ACTIVITY &amp; WELLNESS
            </span>

            <h1>
              Healthcare services
              <span> for every need.</span>
            </h1>

            <p>
              Explore health checkups, consultations, diagnostics,
              medicines and specialized healthcare services.
            </p>

          </div>


          <div className="wellness-search">

            <MdOutlineSearch />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search healthcare services"
              aria-label="Search healthcare services"
            />

          </div>

        </div>


        {/* =================================================
            HEALTH CHECKUPS
        ================================================= */}

        <section className="health-check-section">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                FEATURED CHECKUPS
              </span>

              <h2>
                Health checks for
                <span> every need.</span>
              </h2>

            </div>

            <p>
              Choose a health assessment based on
              your personal, employment or insurance needs.
            </p>

          </div>


          <div className="health-check-grid">

            {healthCheckups.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                 href={getContactUrl(item.title)}
  className={`healthcare-card service-${item.theme}`}
                >

                  <div className="health-check-glow" />

                  <div className="health-check-top">

                    <span className="health-check-number">
                      0{index + 1}
                    </span>

                    <div className="health-check-icon">

                      <div className="health-check-icon-bg" />

                      <Icon />

                    </div>

                  </div>


                  <div className="health-check-content">

                    <span className="health-check-label">
                      {item.label}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>


                  <div className="health-check-footer">

                    <span>
                      Enquire now
                    </span>

                    <span className="round-arrow">
                      <MdOutlineArrowForward />
                    </span>

                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* =================================================
            EVERYDAY HEALTHCARE
        ================================================= */}

        <section className="healthcare-section">

          <div className="section-heading compact">

            <div>

              <span className="section-kicker">
                EVERYDAY HEALTHCARE
              </span>

              <h2>
                Essential health services
              </h2>

            </div>

          </div>


          <div className="healthcare-grid">

            {healthcareServices.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  href={getContactUrl(item.title)}
                  className={`healthcare-card service-${item.theme}`}
                >

                  <div className="healthcare-icon">

                    <span />

                    <Icon />

                  </div>


                  <div className="healthcare-content">

                    <span>
                      HEALTHCARE SERVICE
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>


                  <div className="healthcare-arrow">
                    <MdOutlineArrowForward />
                  </div>

                </Link>
              );
            })}

          </div>

        </section>


        {/* =================================================
            SPECIALIZED SERVICES
        ================================================= */}

        <section className="procedures-section">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                SPECIALIZED HEALTHCARE
              </span>

              <h2>
                Popular procedures
              </h2>

            </div>


            {!search && (
              <button
                type="button"
                className="view-all-button"
                onClick={() => setShowAll((previous) => !previous)}
              >
                {showAll ? 'Show less' : 'View all'}
                <MdOutlineArrowForward />
              </button>
            )}

          </div>


          <div className="procedure-grid">

            {filteredProcedures.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                   href={getContactUrl(item.name)}
                  className="procedure-card"
                >

                  <div
                    className={`procedure-icon procedure-${item.theme}`}
                  >

                    <div className="procedure-icon-shape" />

                    <Icon />

                  </div>


                  <div className="procedure-bottom">

                    <span>
                      {item.name}
                    </span>

                    <span className="procedure-arrow">
                      <MdOutlineArrowForward />
                    </span>

                  </div>

                </Link>
              );
            })}


            {!search && !showAll && (
              <button
                type="button"
                className="procedure-card more-procedure-card"
                onClick={() => setShowAll(true)}
              >

                <div className="more-procedure-icon">
                  <MdOutlineAdd />
                </div>

                <div className="procedure-bottom">

                  <span>
                    +{procedures.length - 12} More
                  </span>

                  <span className="procedure-arrow">
                    <MdOutlineArrowForward />
                  </span>

                </div>

              </button>
            )}

          </div>

        </section>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <section className="wellness-bottom-cta">

          <div className="cta-line-one" />
          <div className="cta-line-two" />

          <div className="cta-content">

            <span>
              NEED HELP CHOOSING?
            </span>

            <h3>
              Not sure which healthcare service you need?
            </h3>

            <p>
              Tell us what you're looking for and our team
              can help you with the right service.
            </p>

          </div>


          <Link
            href="/contact"
            className="cta-button"
          >
            Talk to our team
            <MdOutlineArrowForward />
          </Link>

        </section>

      </div>

    </section>
  );
};

export default WellnessServices;