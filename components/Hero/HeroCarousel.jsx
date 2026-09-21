'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

import './HeroCarousel.css';

const slides = [
  {
    id: 1,
    title: 'Professional Home Care',
    description:
      'Compassionate and reliable support for you and your loved ones.',
    image: '/images/hero/home-care.jpeg',
    href: '/home-care',
    label: 'Professional Home Care',
  },
  {
    id: 2,
    title: 'Activity & Wellness',
    description:
      'Services designed to support an active and healthier lifestyle.',
    image: '/images/hero/well.jpeg',
    href: '/activity-wellness',
    label: 'Activity & Wellness',
  },
  {
    id: 3,
    title: 'Verification & Investigation',
    description:
      'Professional and confidential investigation services.',
    image: '/images/hero/investi.jpeg',
    href: '/investigation-agency',
    label: 'Verification & Investigation',
  },
  {
    id: 4,
    title: 'Professional Workforce Solutions',
    description:
      'Reliable workforce solutions for businesses and organizations.',
    image: '/images/hero/man.jpeg',
    href: '/manpower-supply',
    label: 'Professional Workforce Solutions',
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * AUTOMATIC SLIDER
   */

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((previous) => {
        if (previous === slides.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /*
   * NEXT SLIDE
   */

  const nextSlide = () => {
    setActiveIndex((previous) => {
      if (previous === slides.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  /*
   * PREVIOUS SLIDE
   */

  const previousSlide = () => {
    setActiveIndex((previous) => {
      if (previous === 0) {
        return slides.length - 1;
      }

      return previous - 1;
    });
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero-carousel-section">

      <div className="hero-carousel-container">

        <div
          className="hero-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* =========================
              CLICKABLE BANNER
          ========================= */}

          <Link
            href={currentSlide.href}
            className="hero-carousel-slide"
            key={currentSlide.id}
          >

            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="hero-carousel-image"
            />

            {/* IMAGE OVERLAY */}

            <div className="hero-carousel-overlay" />

            {/* CONTENT */}

            <div className="hero-carousel-content">

              <span className="hero-carousel-label">
                {currentSlide.label}
              </span>

              <h1>
                {currentSlide.title}
              </h1>

              <p>
                {currentSlide.description}
              </p>

              <span className="hero-carousel-link">
                Explore service
                <FiArrowRight />
              </span>

            </div>

          </Link>


          {/* =========================
              PREVIOUS
          ========================= */}

          <button
            type="button"
            className="hero-carousel-arrow hero-carousel-arrow-left"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <FiChevronLeft />
          </button>


          {/* =========================
              NEXT
          ========================= */}

          <button
            type="button"
            className="hero-carousel-arrow hero-carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FiChevronRight />
          </button>


          {/* =========================
              DOTS
          ========================= */}

          <div className="hero-carousel-dots">

            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  index === activeIndex
                    ? 'hero-carousel-dot active'
                    : 'hero-carousel-dot'
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${slide.title}`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroCarousel;