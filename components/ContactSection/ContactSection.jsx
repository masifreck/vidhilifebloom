'use client';

import { useState } from 'react';
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
} from 'react-icons/fi';

import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello Vidhi Lifebloom Healthcare,

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/919090207519?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section">
      <div className="container">

        <div className="contact-heading">
          <span className="section-label">
            CONTACT US
          </span>

          <h2>
            Let&apos;s talk about
            <span> what you need.</span>
          </h2>

          <p>
            Have a question or need more information?
            Get in touch with our team.
          </p>
        </div>


        <div className="contact-layout">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiPhone />
              </div>

              <div>
                <span>CALL US</span>

                <a href="tel:9090207519">
                  +91 90902 07519
                </a>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiMapPin />
              </div>

              <div>
                <span>LOCATION</span>

                <p>
                  Bhubaneswar, Odisha, India
                </p>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL</span>

                <p>
                  Contact us through WhatsApp
                  for quick enquiries.
                </p>
              </div>

            </div>


            <a
              href="https://wa.me/919090207519"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-link"
            >
              Chat on WhatsApp
              <FiArrowUpRight />
            </a>

          </div>


          {/* FORM */}
          <div className="contact-form-card">

            <div className="contact-form-header">
              <h3>Send an enquiry</h3>

              <p>
                Tell us what you are looking for.
              </p>
            </div>


            <form onSubmit={handleSubmit}>

              <div className="contact-form-grid">

                <div className="contact-field">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              <div className="contact-field">

                <label htmlFor="service">
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="Home Care">
                    Home Care
                  </option>

                  <option value="Activity & Wellness">
                    Activity & Wellness
                  </option>

                  <option value="Investigation Agency">
                    Investigation Agency
                  </option>

                  <option value="Manpower Supply">
                    Manpower Supply
                  </option>
                </select>

              </div>


              <div className="contact-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send via WhatsApp
                <FiSend />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;