import Link from 'next/link';
import {
  FiHeart,
  FiActivity,
  FiSearch,
  FiUsers,
  FiArrowUpRight,
} from 'react-icons/fi';

import './ServiceCategories.css';

const services = [
  {
    id: 1,
    title: 'Home Care',
    description: 'Reliable care and support for everyday living.',
    image: '/images/home-care/home-care.jpg',
    href: '/home-care',
    icon: FiHeart,
  },
  {
    id: 2,
    title: 'Activity & Wellness',
    description: 'Programs designed for a healthier, active lifestyle.',
    image: '/images/hero/well1.jpeg',
    href: '/activity-wellness',
    icon: FiActivity,
  },
  {
    id: 3,
    title: 'Investigation Agency',
    description: 'Professional and confidential investigation services.',
    image: '/images/investigation/investigation.jpg',
    href: '/investigation-agency',
    icon: FiSearch,
  },
  {
    id: 4,
    title: 'Manpower Supply',
    description: 'Dependable workforce solutions for organizations.',
    image: '/images/manpower/man1.jpeg',
    href: '/manpower-supply',
    icon: FiUsers,
  },
];

const ServiceCategories = () => {
  return (
    <section className="services-section">
      <div className="container">

        <div className="services-heading">
          <div>
            <span className="section-label">
              OUR SERVICES
            </span>

            <h2>
              Services designed around
              <span> your needs</span>
            </h2>
          </div>

          <p>
            Explore our specialized services built to provide
            dependable support for individuals, families and businesses.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={service.href}
                className="service-card"
                key={service.id}
              >
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-card-icon">
                    <Icon />
                  </div>

                  <div className="service-card-arrow">
                    <FiArrowUpRight />
                  </div>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-card-link">
                    Explore service
                    <FiArrowUpRight />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceCategories;