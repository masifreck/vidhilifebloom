'use client';

import { useState } from 'react';
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
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
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

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
      body: JSON.stringify(form),
    });

    const responseText = await response.text();

    let data = null;

    try {
      data = responseText ? JSON.parse(responseText) : null;
    } catch (parseError) {
      console.error('Invalid API response:', responseText);
      throw new Error(
        'The server returned an invalid response. Please try again.'
      );
    }

  if (!response.ok || !data?.success) {
  console.error('Contact API response:', {
    status: response.status,
    data,
  });

  throw new Error(
    data?.message ||
      `Unable to send your enquiry. Server status: ${response.status}`
  );
}

    setStatus('success');
    setForm(initialForm);

  } catch (error) {
    console.error('Contact form error:', error);

    setStatus('error');

    setErrorMessage(
      error.message ||
        'Something went wrong. Please try again.'
    );
  }
};

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-intro">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let’s find the right
            <span> solution for you.</span>
          </h2>

          <p className="contact-intro-text">
            Tell us what you need and our team will get back
            to you. Whether it’s care, wellness, investigation
            or workforce support, we’re here to help.
          </p>

          <div className="contact-details">

            <a
              href="tel:9090207519"
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <FiPhone />
              </div>

              <div>
                <span>Call us</span>
                <strong>+91 90902 07519</strong>
              </div>

              <FiArrowUpRight className="contact-detail-arrow" />
            </a>

            <a
              href="https://wa.me/919090207519"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <FiMessageCircle />
              </div>

              <div>
                <span>WhatsApp</span>
                <strong>Chat with our team</strong>
              </div>

              <FiArrowUpRight className="contact-detail-arrow" />
            </a>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>
                <strong>Bhubaneswar, Odisha</strong>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form-card">

          {status === 'success' ? (
            <div className="contact-success">

              <div className="contact-success-icon">
                <FiCheck />
              </div>

              <span className="contact-success-label">
                ENQUIRY RECEIVED
              </span>

              <h3>
                Thank you for
                <span> contacting us.</span>
              </h3>

              <p>
                Your enquiry has been sent successfully.
                Our team will review your requirement and
                get back to you soon.
              </p>

              <button
                type="button"
                className="contact-new-enquiry"
                onClick={() => setStatus('idle')}
              >
                Send another enquiry
                <FiArrowUpRight />
              </button>

            </div>
          ) : (
            <>
              <div className="contact-form-header">

                <div>
                  <span>QUICK ENQUIRY</span>

                  <h3>
                    Tell us what you need.
                  </h3>
                </div>

                <div className="contact-form-mail-icon">
                  <FiMail />
                </div>

              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Your name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
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
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      required
                    />
                  </div>

                </div>

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-service">
                      Service
                    </label>

                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Professional Home Care">
                        Professional Home Care
                      </option>

                      <option value="Activity & Wellness">
                        Activity & Wellness
                      </option>

                      <option value="Investigation Services">
                        Investigation Services
                      </option>

                      <option value="Manpower Solutions">
                        Manpower Solutions
                      </option>
                    </select>
                  </div>

                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    How can we help?
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly tell us about your requirement..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="contact-error">
                    {errorMessage}
                  </div>
                )}

                <div className="contact-form-footer">

                  <p>
                    Your information will only be used to
                    respond to your enquiry.
                  </p>

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