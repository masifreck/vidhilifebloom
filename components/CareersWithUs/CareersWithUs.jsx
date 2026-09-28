'use client';

import { useState } from 'react';

import {
  MdOutlineMedicalServices,
  MdOutlineAccessibilityNew,
  MdOutlineScience,
  MdOutlineMedication,
  MdOutlineHealthAndSafety,
  MdOutlineHealing,
  MdOutlineElderly,
  MdOutlineSupportAgent,
  MdOutlineLocalHospital,
  MdOutlineArrowForward,
  MdOutlineWorkOutline,
} from 'react-icons/md';

import './CareersWithUs.css';

const careerRoles = [
  {
    id: 'nursing-staff',
    title: 'Nursing Staff',
    icon: MdOutlineMedicalServices,
    theme: 'teal',
  },
  {
    id: 'staff-nurse',
    title: 'Staff Nurse',
    icon: MdOutlineHealthAndSafety,
    theme: 'blue',
  },
  {
    id: 'ward-boy',
    title: 'Ward Boy / Patient Care Attendant',
    icon: MdOutlineAccessibilityNew,
    theme: 'violet',
  },
  {
    id: 'lab-technician',
    title: 'Lab Technician',
    icon: MdOutlineScience,
    theme: 'orange',
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    icon: MdOutlineMedication,
    theme: 'green',
  },
  {
    id: 'doctor',
    title: 'Doctor',
    icon: MdOutlineHealthAndSafety,
    theme: 'rose',
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist',
    icon: MdOutlineHealing,
    theme: 'indigo',
  },
  {
    id: 'caregiver',
    title: 'Caregiver',
    icon: MdOutlineElderly,
    theme: 'teal',
  },
  {
    id: 'medical-receptionist',
    title: 'Medical Receptionist',
    icon: MdOutlineSupportAgent,
    theme: 'blue',
  },
  {
    id: 'healthcare-support',
    title: 'Healthcare Support Staff',
    icon: MdOutlineLocalHospital,
    theme: 'violet',
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping Staff',
    icon: MdOutlineLocalHospital,
    theme: 'green',
  },
  {
    id: 'home-care',
    title: 'Home Care Staff',
    icon: MdOutlineElderly,
    theme: 'orange',
  },
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  experience: '',
  employmentType: '',
  message: '',
};

const CareersWithUs = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);

    setFormData((previous) => ({
      ...previous,
      position: role,
    }));

    // Scroll to application form
    setTimeout(() => {
      document
        .getElementById('career-application-form')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }, 100);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedRole) {
      alert('Please select a position you are interested in.');
      return;
    }

    if (!formData.employmentType) {
      alert('Please select Full Time or Part Time.');
      return;
    }

    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your name, phone and email.');
      return;
    }

    const recipient = 'careers@vlhpl.com';

    const subject = `Career Application - ${selectedRole}`;

    const body = `
CAREER APPLICATION
==============================

Applicant Name:
${formData.name}

Phone:
${formData.phone}

Email:
${formData.email}

Position Applied For:
${selectedRole}

Employment Type:
${formData.employmentType}

Experience:
${formData.experience || 'Not specified'}

Message:
${formData.message || 'Not provided'}

==============================
Vidhi Lifebloom Healthcare Private Limited
    `.trim();

    const mailtoUrl =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <main className="careers-page">

      {/* Background decoration */}
      <div className="careers-bg-line careers-bg-line-one" />
      <div className="careers-bg-line careers-bg-line-two" />
      <div className="careers-bg-circle careers-bg-circle-one" />

      <div className="careers-container">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="careers-hero">

          <div className="careers-hero-content">

            <span className="careers-eyebrow">
              CAREERS WITH US
            </span>

            <h1>
              Build your career
              <span> in healthcare.</span>
            </h1>

            <p>
              Join a growing team of healthcare professionals
              and support staff helping people receive better
              care, every day.
            </p>

          </div>

          <div className="careers-hero-mark">

            <MdOutlineWorkOutline />

            <span>
              JOIN
              <br />
              OUR
              <br />
              TEAM
            </span>

          </div>

        </section>


        {/* =========================================
            ROLES
        ========================================= */}

        <section className="careers-roles-section">

          <div className="careers-section-heading">

            <div>

              <span className="careers-kicker">
                OPPORTUNITIES
              </span>

              <h2>
                Find your place
                <span> with us.</span>
              </h2>

            </div>

            <p>
              Explore healthcare roles and select the position
              that matches your experience and interest.
            </p>

          </div>


          <div className="careers-role-grid">

            {careerRoles.map((role) => {

              const Icon = role.icon;

              const isSelected =
                selectedRole === role.title;

              return (
                <button
                  key={role.id}
                  type="button"
                  className={`career-role-card theme-${role.theme} ${
                    isSelected ? 'selected' : ''
                  }`}
                  onClick={() =>
                    handleRoleSelect(role.title)
                  }
                >

                  <div className="career-role-icon">
                    <Icon />
                  </div>

                  <div className="career-role-content">

                    <span>
                      HEALTHCARE OPPORTUNITY
                    </span>

                    <h3>
                      {role.title}
                    </h3>

                  </div>

                  <div className="career-role-arrow">
                    <MdOutlineArrowForward />
                  </div>

                </button>
              );

            })}

          </div>

        </section>


        {/* =========================================
            APPLICATION FORM
        ========================================= */}

        <section
          id="career-application-form"
          className="career-application-section"
        >

          {/* LEFT SIDE */}

          <div className="career-application-intro">

            <span className="careers-kicker">
              JOIN OUR TEAM
            </span>

            <h2>
              Interested in
              <span> joining us?</span>
            </h2>

            <p>
              Select a position and share a few details
              about yourself. Our team can review your
              application and get in touch if there is
              a suitable opportunity.
            </p>


            {/* Selected Position */}

            {selectedRole && (
              <div className="selected-role-box">

                <span>
                  SELECTED POSITION
                </span>

                <strong>
                  {selectedRole}
                </strong>

              </div>
            )}

          </div>


          {/* RIGHT SIDE FORM */}

          <form
            className="career-application-form"
            onSubmit={handleSubmit}
          >

            {/* =====================================
                SELECTED POSITION
            ====================================== */}

            <div className="career-form-field">

              <label htmlFor="career-position">
                Position
              </label>

              <input
                id="career-position"
                name="position"
                type="text"
                value={formData.position || ''}
                placeholder="Select a position above"
                readOnly
                required
              />

              {!selectedRole && (
                <small className="career-field-hint">
                  Please select a position from the
                  opportunities above.
                </small>
              )}

            </div>


            {/* =====================================
                NAME + PHONE
            ====================================== */}

            <div className="career-form-grid">

              <div className="career-form-field">

                <label htmlFor="career-name">
                  Full Name
                </label>

                <input
                  id="career-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="career-form-field">

                <label htmlFor="career-phone">
                  Phone Number
                </label>

                <input
                  id="career-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* =====================================
                EMAIL + EXPERIENCE
            ====================================== */}

            <div className="career-form-grid">

              <div className="career-form-field">

                <label htmlFor="career-email">
                  Email Address
                </label>

                <input
                  id="career-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="career-form-field">

                <label htmlFor="career-experience">
                  Experience
                </label>

                <select
                  id="career-experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >

                  <option value="">
                    Select experience
                  </option>

                  <option value="Fresher">
                    Fresher
                  </option>

                  <option value="1-2 Years">
                    1–2 Years
                  </option>

                  <option value="3-5 Years">
                    3–5 Years
                  </option>

                  <option value="5+ Years">
                    5+ Years
                  </option>

                </select>

              </div>

            </div>


            {/* =====================================
                EMPLOYMENT TYPE
            ====================================== */}

            <div className="career-form-field">

              <label>
                Employment Type
              </label>

              <div className="employment-type-options">

                <label
                  className={`employment-type-option ${
                    formData.employmentType === 'Full Time'
                      ? 'active'
                      : ''
                  }`}
                >

                  <input
                    type="radio"
                    name="employmentType"
                    value="Full Time"
                    checked={
                      formData.employmentType ===
                      'Full Time'
                    }
                    onChange={handleChange}
                  />

                  <span className="employment-radio">
                    <span />
                  </span>

                  <span className="employment-type-text">
                    Full Time
                  </span>

                </label>


                <label
                  className={`employment-type-option ${
                    formData.employmentType === 'Part Time'
                      ? 'active'
                      : ''
                  }`}
                >

                  <input
                    type="radio"
                    name="employmentType"
                    value="Part Time"
                    checked={
                      formData.employmentType ===
                      'Part Time'
                    }
                    onChange={handleChange}
                  />

                  <span className="employment-radio">
                    <span />
                  </span>

                  <span className="employment-type-text">
                    Part Time
                  </span>

                </label>

              </div>

            </div>


            {/* =====================================
                MESSAGE
            ====================================== */}

            <div className="career-form-field">

              <label htmlFor="career-message">
                Short Message
              </label>

              <textarea
                id="career-message"
                name="message"
                rows="4"
                placeholder="Tell us briefly about yourself..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            {/* =====================================
                SUBMIT
            ====================================== */}

            <button
              type="submit"
              className="career-submit-button"
            >

              Submit Application

              <MdOutlineArrowForward />

            </button>


            <p className="career-form-note">
              Your email application will open in your
              default email application with the details
              filled in.
            </p>

          </form>

        </section>

      </div>

    </main>
  );
};

export default CareersWithUs;