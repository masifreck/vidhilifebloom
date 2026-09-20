'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiPhone,
  FiX,
} from 'react-icons/fi';

import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  

  return (
    <header className="modern-header">

      <div className="modern-header-container">

        {/* Logo */}
      <Link href="/" className="modern-logo" onClick={closeMenu}>
  <Image
    src="/logo/logo.png"
    alt="Vidhi Lifebloom"
    width={52}
    height={52}
    priority
  />

  <div className="brand-text">
    <span className="brand-name">VIDHI LIFEBLOOM</span>
    <span className="brand-tagline">
      Healthcare &amp; Professional Services
    </span>
  </div>
</Link>


        {/* Desktop Navigation */}
        <nav className="desktop-navigation">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/home-care" className="nav-link">
            Care
          </Link>

          <Link href="/activity-wellness" className="nav-link">
            Wellness
          </Link>

          <Link href="/investigation-agency" className="nav-link">
            Investigation
          </Link>

          <Link href="/manpower-supply" className="nav-link">
            Workforce
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

        </nav>


        {/* Header Actions */}
        <div className="header-actions">

          <a
            href="tel:9090207519"
            className="header-phone"
            aria-label="Call us"
          >
            <FiPhone />
          </a>

          <Link
            href="/contact"
            className="header-contact"
          >
            <span>Contact Us</span>
            <FiArrowUpRight />
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>


      {/* Mobile Navigation */}
      <div
        className={
          menuOpen
            ? 'mobile-navigation open'
            : 'mobile-navigation'
        }
      >

        <div className="mobile-navigation-inner">

          <Link href="/" onClick={closeMenu}>
            <span>Home</span>
            <FiArrowUpRight />
          </Link>

          <Link href="/home-care" onClick={closeMenu}>
            <span>Care</span>
            <FiArrowUpRight />
          </Link>

          <Link
            href="/activity-wellness"
            onClick={closeMenu}
          >
            <span>Wellness</span>
            <FiArrowUpRight />
          </Link>

          <Link
            href="/investigation-agency"
            onClick={closeMenu}
          >
            <span>Investigation</span>
            <FiArrowUpRight />
          </Link>

          <Link
            href="/manpower-supply"
            onClick={closeMenu}
          >
            <span>Workforce</span>
            <FiArrowUpRight />
          </Link>

          <Link href="/about" onClick={closeMenu}>
            <span>About Us</span>
            <FiArrowUpRight />
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            <span>Contact Us</span>
            <FiArrowUpRight />
          </Link>


          {/* Mobile contact box */}
          <div className="mobile-contact-box">

            <div>
              <small>Need assistance?</small>

              <a href="tel:9090207519">
                +91 90902 07519
              </a>
            </div>

            <a
              href="https://wa.me/919090207519"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp"
            >
              WhatsApp
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;