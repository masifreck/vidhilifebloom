import Link from 'next/link';
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiShield,
  FiUsers,
  FiTarget,
  FiAward,
} from 'react-icons/fi';

import './AboutSection.css';

const highlights = [
  {
    icon: FiHeart,
    title: 'People First',
    description:
      'Meaningful care experiences built around people and their needs.',
  },
  {
    icon: FiShield,
    title: 'Integrity',
    description:
      'Professional, confidential and dependable service delivery.',
  },
  {
    icon: FiUsers,
    title: 'Experienced Team',
    description:
      'Experienced professionals bringing expertise across our services.',
  },
  {
    icon: FiTarget,
    title: 'Client Focused',
    description:
      'Responsive solutions designed around individual and organizational requirements.',
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">

        <div className="about-layout">

          {/* =========================
              IMAGE SIDE
          ========================== */}

          <div className="about-visual">

            <div className="about-main-image">
              <img
                src="/images/about/about-main.jpg"
                alt="Vidhi Lifebloom Healthcare team"
              />
            </div>

            {/* 25+ YEARS */}
            <div className="about-experience-card">

              <div className="about-experience-icon">
                <FiAward />
              </div>

              <div className="about-experience-number">
                25<span>+</span>
              </div>

              <div className="about-experience-text">
                Years of
                <strong>Professional Experience</strong>
              </div>

            </div>

            <div className="about-check-card">

              <FiCheckCircle />

              <div>
                <strong>Trusted Service</strong>
                <span>Across multiple sectors</span>
              </div>

            </div>

          </div>


          {/* =========================
              CONTENT SIDE
          ========================== */}

          <div className="about-content">

            <span className="section-label">
              ABOUT VIDHI LIFEBLOOM
            </span>

            <h2>
              Empowering Care.
              <span> Enabling Wellness.</span>
              Building Trust.
            </h2>

            <p className="about-intro">
              Vidhi Lifebloom Healthcare Private Limited is a dynamic
              healthcare and professional support organization delivering
              integrated solutions across Home Care, Wellness,
              Investigation, and Manpower Services.
            </p>

            <p className="about-secondary">
              With a strong foundation in the healthcare service industry,
              we are driven by experienced professionals who bring together
              expertise, integrity, innovation, and a commitment to excellence.
            </p>

            {/* EXPERIENCE HIGHLIGHT */}

            <div className="about-experience-highlight">

              <div className="about-experience-highlight-number">
                25<span>+</span>
              </div>

              <div className="about-experience-highlight-content">
                <strong>
                  Years of professional experience
                </strong>

                <p>
                  Our management team brings more than 25 years of
                  professional experience, strengthening our ability to
                  deliver responsive, reliable, confidential, and
                  client-centric services.
                </p>
              </div>

            </div>


            <p className="about-secondary about-final-text">
              We go beyond delivering services — we strive to create
              meaningful care experiences, dependable support, and lasting
              value for every individual and organization we serve.
            </p>


            {/* VALUES */}

            <div className="about-values">
              <span>EXPERTISE</span>
              <i>•</i>
              <span>INTEGRITY</span>
              <i>•</i>
              <span>INNOVATION</span>
              <i>•</i>
              <span>CARE</span>
            </div>


            {/* HIGHLIGHTS */}

            <div className="about-highlights">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    className="about-highlight"
                    key={index}
                  >
                    <div className="about-highlight-icon">
                      <Icon />
                    </div>

                    <div>
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;