import Link from 'next/link';
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiShield,
  FiUsers,
  FiTarget,
} from 'react-icons/fi';

import './AboutSection.css';

const highlights = [
  {
    icon: FiHeart,
    title: 'People First',
    description: 'Services built around real people and their needs.',
  },
  {
    icon: FiShield,
    title: 'Professional',
    description: 'A dependable approach across every service.',
  },
  {
    icon: FiUsers,
    title: 'Experienced Team',
    description: 'Dedicated professionals supporting every requirement.',
  },
  {
    icon: FiTarget,
    title: 'Focused Solutions',
    description: 'Practical solutions tailored to each situation.',
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">

        <div className="about-layout">

          {/* IMAGE SIDE */}
          <div className="about-visual">

            <div className="about-main-image">
              <img
                src="/images/about/about-main.jpg"
                alt="Vidhi Lifebloom Healthcare team"
              />
            </div>

            <div className="about-experience-card">
              <span className="about-experience-number">
                VLH
              </span>

              <span className="about-experience-text">
                Care & Service
              </span>
            </div>

            <div className="about-check-card">
              <FiCheckCircle />

              <div>
                <strong>Trusted Service</strong>
                <span>Across multiple sectors</span>
              </div>
            </div>

          </div>


          {/* CONTENT SIDE */}
          <div className="about-content">

            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              One trusted name,
              <span> multiple solutions.</span>
            </h2>

            <p className="about-intro">
              Vidhi Lifebloom Healthcare Private Limited brings
              together professional services across care, wellness,
              investigation and manpower support.
            </p>

            <p className="about-secondary">
              Our approach is simple — understand the requirement,
              provide dependable support and focus on delivering
              a professional experience.
            </p>


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