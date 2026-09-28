'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ServiceSelector from '@/components/ServiceSelector/ServiceSelector';
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

import './ContactSection.css';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const ContactSection = () => {
  const searchParams = useSearchParams();
const categoryFromUrl = searchParams.get('category');
const [initialCategory, setInitialCategory] = useState(
  categoryFromUrl || null
); 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: searchParams.get('service') || '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  /*
   * -------------------------------------------------------
   * AUTO SELECT SERVICE FROM URL
   *
   * Example:
   * /contact?service=Physiotherapy
   * -------------------------------------------------------
   */

  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');

    if (serviceFromUrl) {
      setFormData((previous) => ({
        ...previous,
        service: serviceFromUrl,
      }));
    }
  }, [searchParams]);

  /*
   * -------------------------------------------------------
   * HANDLE INPUT CHANGE
   * -------------------------------------------------------
   */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /*
   * -------------------------------------------------------
   * SUBMIT CONTACT FORM
   * -------------------------------------------------------
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();

      let data = null;

      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch {
        throw new Error(
          'The server returned an invalid response. Please try again.'
        );
      }

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ||
            `Unable to send your enquiry. Server status: ${response.status}`
        );
      }

      setStatus('success');

      setFormData(initialForm);
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus('error');

      setErrorMessage(
        error.message || 'Something went wrong. Please try again.'
      );
    }
  };

  /*
   * -------------------------------------------------------
   * RESET FORM
   * -------------------------------------------------------
   */

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
    setFormData(initialForm);
  };

  return (
    <section className="contact-section">
      <div className="contact-background-line contact-background-line-one" />
      <div className="contact-background-line contact-background-line-two" />

      <div className="contact-container">

        {/* =================================================
            LEFT INFORMATION PANEL
        ================================================= */}

        <aside className="contact-intro">

          <div className="contact-intro-top">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <div className="contact-intro-index">
              01
            </div>

          </div>


          <div className="contact-intro-main">

            <h1>
              Let&apos;s find the
              <span> right solution.</span>
            </h1>

            <p className="contact-intro-text">
              Tell us what you are looking for and our team
              will help you with the right service for your needs.
            </p>

          </div>


          <div className="contact-intro-bottom">

            <div className="contact-location">

              <div className="contact-location-icon">
                <FiMapPin />
              </div>

              <div>
                <span>OUR LOCATION</span>
                <strong>Bhubaneswar, Odisha</strong>
              </div>

            </div>


            <div className="contact-intro-note">

              <div className="contact-note-line" />

              <p>
                Professional support across care, wellness,
                investigation and workforce services.
              </p>

            </div>

          </div>


          <div className="contact-intro-decoration">
            <span>VIDHI</span>
            <span>LIFEBLOOM</span>
          </div>

        </aside>


        {/* =================================================
            FORM PANEL
        ================================================= */}

        <div className="contact-form-card">

          {/* =================================================
              SUCCESS STATE
          ================================================= */}

          {status === 'success' ? (

            <div className="contact-success">

              <div className="contact-success-icon">
                <FiCheck />
              </div>

              <span className="contact-success-label">
                ENQUIRY RECEIVED
              </span>

              <h2>
                Thank you for
                <span> contacting us.</span>
              </h2>

              <p>
                Your enquiry has been submitted successfully.
                Our team will review your requirement and get
                back to you soon.
              </p>

              <button
                type="button"
                className="contact-new-enquiry"
                onClick={resetForm}
              >
                Send another enquiry
                <FiArrowUpRight />
              </button>

            </div>

          ) : (

            <>
              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div className="contact-form-header">

                <div>

                  <span className="contact-form-kicker">
                    QUICK ENQUIRY
                  </span>

                  <h2>
                    Tell us what you need.
                  </h2>

                  <p>
                    Complete the form and we&apos;ll take it from here.
                  </p>

                </div>


                <div className="contact-form-mail-icon">
                  <FiMail />
                </div>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* ================================
                    NAME + PHONE
                ================================= */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="contact-name">
                      Your name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-phone">
                      Phone number
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />

                  </div>

                </div>


                {/* ================================
                    EMAIL + SERVICE
                ================================= */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="contact-email">
                      Email address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-service">
    Service
  </label>

  <ServiceSelector
    value={formData.service}
    onChange={(service) =>
      setFormData((previous) => ({
        ...previous,
        service,
      }))
    }
    initialCategory={initialCategory}
  />


                  </div>

                </div>


                {/* ================================
                    MESSAGE
                ================================= */}

                <div className="contact-field">

                  <label htmlFor="contact-message">
                    How can we help?
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly tell us about your requirement..."
                    required
                  />

                </div>


                {/* ================================
                    ERROR
                ================================= */}

                {status === 'error' && (

                  <div className="contact-error">
                    {errorMessage}
                  </div>

                )}


                {/* ================================
                    FORM FOOTER
                ================================= */}

                <div className="contact-form-footer">

                  <div className="contact-privacy">

                    <span className="contact-privacy-dot" />

                    <p>
                      Your information is only used to respond
                      to your enquiry.
                    </p>

                  </div>


                  <button
                    type="submit" 
                    className="contact-submit"
                    disabled={status === 'loading'}
                  >

                    {status === 'loading' ? (

                      <>
                        <span className="contact-spinner" />
                        <span>Sending...</span>
                      </>

                    ) : (

                      <>
                        <span>Send enquiry</span>
                        <FiArrowUpRight />
                      </>

                    )}

                  </button>

                </div>

              </form>
            </>

          )}

        </div>

      </div>
    </section>
  );
};

export default ContactSection;