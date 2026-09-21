import Link from 'next/link';
import Image from 'next/image';

import {
  FiArrowRight,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from 'react-icons/fi';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div className="footer-background" aria-hidden="true">
        <div className="footer-background-word">
          VIDHI
        </div>

        <div className="footer-wave footer-wave-one" />
        <div className="footer-wave footer-wave-two" />
        <div className="footer-wave footer-wave-three" />

        <div className="footer-bottom-wave" />
      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================== */}

      <div className="footer-content">

        {/* -----------------------------------------
            BRAND
        ------------------------------------------ */}

        <div className="footer-brand-area">

          <Link href="/" className="footer-brand">
            <div className="footer-brand-logo">
              <Image
                src="/logo/logo.png"
                alt="Vidhi Lifebloom logo"
                width={52}
                height={52}
              />
            </div>

            <div className="footer-brand-text">
              <strong>VIDHI LIFEBLOOM</strong>

              <span>
                HEALTHCARE &amp; PROFESSIONAL SERVICES
              </span>
            </div>
          </Link>


          <p className="footer-brand-description">
            Professional home care, wellness, investigation
            and workforce services. Built on trust, care and
            expertise.
          </p>


          <Link
            href="/contact"
            className="footer-get-in-touch"
          >
            <span>Get in Touch</span>
            <FiArrowRight />
          </Link>

        </div>


        {/* -----------------------------------------
            SERVICES
        ------------------------------------------ */}

        <div className="footer-navigation">

          <span className="footer-heading">
            SERVICES
          </span>

          <nav className="footer-link-list">

            <Link href="/home-care">
              <span>Home Care</span>
              <FiArrowRight />
            </Link>

            <Link href="/activity-wellness">
              <span>Wellness</span>
              <FiArrowRight />
            </Link>

            <Link href="/investigation-agency">
              <span>Investigation</span>
              <FiArrowRight />
            </Link>

            <Link href="/manpower-supply">
              <span>Workforce</span>
              <FiArrowRight />
            </Link>

          </nav>

        </div>


        {/* -----------------------------------------
            COMPANY
        ------------------------------------------ */}

        <div className="footer-navigation">

          <span className="footer-heading">
            COMPANY
          </span>

          <nav className="footer-link-list">

            <Link href="/">
              <span>Home</span>
              <FiArrowRight />
            </Link>

            <Link href="/about">
              <span>About Us</span>
              <FiArrowRight />
            </Link>

            <Link href="/contact">
              <span>Contact</span>
              <FiArrowRight />
            </Link>

          </nav>

        </div>


        {/* -----------------------------------------
            CONTACT CARD
        ------------------------------------------ */}

        <div className="footer-contact-area">

          <div className="footer-contact-card">

            <span className="footer-contact-heading">
              CONTACT US
            </span>


            {/* Phone */}

            <a
              href="tel:9090207519"
              className="footer-contact-item"
            >
              <div className="footer-contact-icon">
                <FiPhone />
              </div>

              <div className="footer-contact-info">
                <small>PHONE</small>

                <strong>
                  +91 90902 07519
                </strong>
              </div>
            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/919090207519"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <div className="footer-contact-icon">
                <FiMessageCircle />
              </div>

              <div className="footer-contact-info">
                <small>WHATSAPP</small>

                <strong className="footer-whatsapp-text">
                  Chat with our team
                  <FiArrowRight />
                </strong>
              </div>
            </a>


            {/* Location */}

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FiMapPin />
              </div>

              <div className="footer-contact-info">
                <small>LOCATION</small>

                <strong>
                  Bhubaneswar, Odisha
                </strong>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <div className="footer-bottom-brand">

            <div className="footer-bottom-logo">
              <Image
                src="/logo/logo.png"
                alt=""
                width={28}
                height={28}
              />
            </div>

            <span>
              VIDHI LIFEBLOOM
            </span>

          </div>


          <p>
            © {new Date().getFullYear()} Vidhi Lifebloom Healthcare
            Private Limited. All rights reserved.
          </p>


          {/* <div className="footer-bottom-links">

            <Link href="/privacy-policy">
              Privacy
            </Link>

            <span>|</span>

            <Link href="/terms">
              Terms
            </Link>

          </div> */}

        </div>


        {/* Decorative leaf */}

        <div className="footer-leaf" aria-hidden="true">
          <span />
          <span />
        </div>

      </div>

    </footer>
  );
};

export default Footer;