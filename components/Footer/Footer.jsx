import Link from 'next/link';
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
} from 'react-icons/fi';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/logo/logo.png"
                alt="Vidhi Lifebloom Healthcare Private Limited"
              />
            </Link>

            <p className="footer-description">
              Professional solutions across home care, wellness,
              investigation and manpower services.
            </p>

            <a
              href="https://wa.me/919090207519"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <FiMessageCircle />
              <span>Chat on WhatsApp</span>
              <FiArrowUpRight />
            </a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>

            <Link href="/home-care">
              Home Care
              <FiArrowUpRight />
            </Link>

            <Link href="/activity-wellness">
              Activity & Wellness
              <FiArrowUpRight />
            </Link>

            <Link href="/investigation-agency">
              Investigation Agency
              <FiArrowUpRight />
            </Link>

            <Link href="/manpower-supply">
              Manpower Supply
              <FiArrowUpRight />
            </Link>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <Link href="/">
              Home
              <FiArrowUpRight />
            </Link>

            <Link href="/about">
              About Us
              <FiArrowUpRight />
            </Link>

            <Link href="/contact">
              Contact
              <FiArrowUpRight />
            </Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <a href="tel:9090207519">
              <FiPhone />
              <span>+91 90902 07519</span>
            </a>

            <div className="footer-contact-item">
              <FiMapPin />
              <span>
                Bhubaneswar,
                <br />
                Odisha, India
              </span>
            </div>

            <Link href="/contact" className="footer-contact-link">
              Send an enquiry
              <FiArrowUpRight />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Vidhi Lifebloom Healthcare
            Private Limited. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;