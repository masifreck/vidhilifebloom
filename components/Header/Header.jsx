'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  FiArrowUpRight,
  FiMenu,
  FiPhone,
  FiX,
} from 'react-icons/fi';

import './Header.css';

const navigation = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Care',
    href: '/home-care',
  },
  {
    label: 'Wellness',
    href: '/activity-wellness',
  },
  {
    label: 'Investigation',
    href: '/investigation-agency',
  },
  {
    label: 'Workforce',
    href: '/manpower-supply',
  },
  {
    label: 'About',
    href: '/about',
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      <div className="site-header-inner">

        {/* =====================================
            BRAND
        ====================================== */}

        <Link
          href="/"
          className="site-brand"
          onClick={closeMenu}
          aria-label="Vidhi Lifebloom Home"
        >

          <div className="site-brand-mark">
            <Image
              src="/logo/logo.png"
              alt="Vidhi Lifebloom logo"
              width={52}
              height={52}
              priority
            />
          </div>


          <div className="site-brand-copy">

            <div className="site-brand-name">
              <span>VIDHI</span>
              <span>LIFEBLOOM</span>
            </div>

            <span className="site-brand-line" />

            <span className="site-brand-tagline">
              Healthcare <b>•</b> Professional Services
            </span>

          </div>

        </Link>


        {/* =====================================
            DESKTOP NAVIGATION
        ====================================== */}

        <nav
          className="site-navigation"
          aria-label="Main navigation"
        >

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-link"
            >
              {item.label}
            </Link>
          ))}

        </nav>


        {/* =====================================
            ACTIONS
        ====================================== */}

       

      </div>


      {/* =====================================
          MOBILE NAVIGATION
      ====================================== */}

      <div
        className={
          menuOpen
            ? 'mobile-navigation mobile-navigation-open'
            : 'mobile-navigation'
        }
      >

        <div className="mobile-navigation-inner">

          <div className="mobile-navigation-header">

            <span>
              MENU
            </span>

            <span>
              VIDHI LIFEBLOOM
            </span>

          </div>


          <div className="mobile-navigation-links">

            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >

                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="mobile-nav-label">
                  {item.label}
                </span>

                <FiArrowUpRight />

              </Link>
            ))}

          </div>


          {/* Mobile contact */}

    

        </div>

      </div>

    </header>
  );
};

export default Header;