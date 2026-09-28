'use client';

import { useEffect, useRef, useState,useLayoutEffect } from 'react';
import {
  FiChevronDown,
  FiCheck,
  FiGrid,
  FiHeart,
  FiShield,
  FiUsers,
  FiMoreHorizontal,
} from 'react-icons/fi';

import './ServiceSelector.css';

const serviceCategories = [
  {
    id: 'home-care',
    label: 'Home Care',
    icon: FiHeart,
    services: [
      'Caregiver & Elderly',
      'Nursing Assistance',
      'Physiotherapy',
      "Doctor's Consultation",
      'Medical Equipment',
      
    ],
  },

  {
    id: 'activity-wellness',
    label: 'Activity & Wellness',
    icon: FiGrid,
    services: [
      'Pre-Employment Health Checkup',
      'Pre-Policy Health Checkup',
      'Paid Health Checkup',
      'Doctor Consultation',
      'Lab Reports',
      'Medicines',
      'Cataract',
      'Hair Transplant',
      'LASIK',
      'Knee',
      'Hysterectomy',
      'Tonsillectomy',
      'Gallstone',
      'Fissure',
      'Piles',
      'Circumcision',
      'Kidney Stones',
      'IVF',
      'Gynecomastia',
      'Vaccination',
      'Health Screening',
      'Blood Testing',
      'General Health Checkup',
      'Onsite Medical Room',
    ],
  },

  {
    id: 'insurance-verification',
    label: 'Insurance & Verification',
    icon: FiShield,
    services: [
      'Insurance Investigation',
      'Health Claim Investigation',
      'Death Claim Investigation',
      'Personal Investigation',
      'Background Verification',
      'Corporate Investigation',
      'Surveillance Services',
    ],
  },

  {
    id: 'healthcare-staffing',
    label: 'Healthcare Staffing',
    icon: FiUsers,
    services: [
      'Nursing Staff (ANM, GNM & B.sc Nursing)',
      'Ward Boy / Patient Care Attendant',
      'Lab Technician',
      'Pharmacist',
      'Doctor',
      'Physiotherapist',
      'Caregiver',
      'Hospital Receptionist',
      'Hospital Support Staff',
      'GDA',
    ],
  },

  {
    id: 'other-services',
    label: 'Other Services',
    icon: FiMoreHorizontal,
    services: [
      'Other Services',
    ],
  },
];

const ServiceSelector = ({
  value = '',
  onChange,
  initialCategory = null,
  disabled = false,
}) => {
    const [openUpward, setOpenUpward] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(initialCategory);
  const selectorRef = useRef(null);

  /*
   * Find selected service category.
   */
  const selectedCategory = serviceCategories.find((category) =>
    category.services.includes(value)
  );

  /*
   * Open the correct category when a service is
   * already selected.
   */
  useEffect(() => {
    if (value && selectedCategory) {
      setOpenCategory(selectedCategory.id);
    }
  }, [value, selectedCategory]);

  /*
   * Close dropdown when clicking outside.
   */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      );
    };
  }, []);
useLayoutEffect(() => {
  if (!isOpen || !selectorRef.current) return;

  const calculateDropdownPosition = () => {
    const selector = selectorRef.current;

    const rect = selector.getBoundingClientRect();

    const dropdownSpaceBelow =
      window.innerHeight - rect.bottom;

    const dropdownSpaceAbove =
      rect.top;

    /*
     * Approximate dropdown height.
     * The actual dropdown has max-height in CSS,
     * so this gives us enough room to decide
     * which direction it should open.
     */
    const requiredSpace = Math.min(
      470,
      window.innerHeight * 0.65
    );

    if (
      dropdownSpaceBelow < requiredSpace &&
      dropdownSpaceAbove > dropdownSpaceBelow
    ) {
      setOpenUpward(true);
    } else {
      setOpenUpward(false);
    }
  };

  calculateDropdownPosition();

  window.addEventListener(
    'resize',
    calculateDropdownPosition
  );

  window.addEventListener(
    'scroll',
    calculateDropdownPosition,
    true
  );

  return () => {
    window.removeEventListener(
      'resize',
      calculateDropdownPosition
    );

    window.removeEventListener(
      'scroll',
      calculateDropdownPosition,
      true
    );
  };
}, [isOpen]);
  /*
   * Toggle category.
   * Only one category can remain open.
   */
  const handleCategoryClick = (categoryId) => {
    setOpenCategory((current) =>
      current === categoryId ? null : categoryId
    );
  };

  /*
   * Select service.
   */
  const handleServiceSelect = (service) => {
    if (onChange) {
      onChange(service);
    }

    setIsOpen(false);
  };

  /*
   * Display text.
   */
  const displayText = value || 'Select a service';

  return (
    <div
      ref={selectorRef}
      className={`service-selector ${
        disabled ? 'service-selector-disabled' : ''
      }`}
    >
      {/* Trigger */}
      <button
        type="button"
        className={`service-selector-trigger ${
          isOpen ? 'service-selector-trigger-open' : ''
        }`}
        onClick={() => {
          if (!disabled) {
            setIsOpen((previous) => !previous);
          }
        }}
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span
          className={
            value
              ? 'service-selector-value'
              : 'service-selector-placeholder'
          }
        >
          {displayText}
        </span>

        <FiChevronDown
          className={`service-selector-chevron ${
            isOpen ? 'service-selector-chevron-open' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
      <div
  className={`service-selector-dropdown ${
    openUpward
      ? 'service-selector-dropdown-up'
      : ''
  }`}
>

          <div className="service-selector-heading">
            <span>Choose a category</span>
            <small>Select a service below</small>
          </div>

          <div className="service-category-list">

            {serviceCategories.map((category) => {
              const Icon = category.icon;

              const isCategoryOpen =
                openCategory === category.id;

              const isSelectedCategory =
                selectedCategory?.id === category.id;

              return (
                <div
                  className={`service-category ${
                    isCategoryOpen
                      ? 'service-category-open'
                      : ''
                  }`}
                  key={category.id}
                >

                  {/* Category */}
                  <button
                    type="button"
                    className="service-category-trigger"
                    onClick={() =>
                      handleCategoryClick(category.id)
                    }
                    aria-expanded={isCategoryOpen}
                  >

                    <span className="service-category-left">

                      <span className="service-category-icon">
                        <Icon />
                      </span>

                      <span className="service-category-name">
                        {category.label}
                      </span>

                    </span>

                    <span className="service-category-right">

                      {isSelectedCategory && (
                        <span className="service-category-selected">
                          <FiCheck />
                        </span>
                      )}

                      <FiChevronDown
                        className={
                          isCategoryOpen
                            ? 'service-category-chevron-open'
                            : ''
                        }
                      />

                    </span>

                  </button>


                  {/* Services */}
                  {isCategoryOpen && (
                    <div className="service-items">

                      {category.services.map((service) => {
                        const isSelected =
                          value === service;

                        return (
                          <button
                            type="button"
                            key={service}
                            className={`service-item ${
                              isSelected
                                ? 'service-item-selected'
                                : ''
                            }`}
                            onClick={() =>
                              handleServiceSelect(service)
                            }
                          >

                            <span className="service-item-dot" />

                            <span className="service-item-text">
                              {service}
                            </span>

                            {isSelected && (
                              <FiCheck className="service-item-check" />
                            )}

                          </button>
                        );
                      })}

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      )}
    </div>
  );
};

export { serviceCategories };

export default ServiceSelector;