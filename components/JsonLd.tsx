import React from 'react';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED',
    alternateName: ['Vidhi Lifebloom', 'ParaHome Care', 'E-Reliant Solutions', 'CAG Services'],
    url: 'https://www.vidhilifebloom.com',
    logo: 'https://www.vidhilifebloom.com/logo.png',
    description:
      'Integrated healthcare solutions providing 24/7 bedside nursing care, healthcare membership discount cards, and corporate insurance claims forensic auditing.',
    telephone: '+91-9438010959',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Kanchpada, Unit No. 102/A, Wing - C, Jaswanti Allied Business Centre, Off New Link Road, Malad West',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400064',
        addressCountry: 'IN'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Amlapada, Nimapara',
        addressLocality: 'Puri',
        addressRegion: 'Odisha',
        postalCode: '752106',
        addressCountry: 'IN'
      }
    ],
    medicalSpecialty: [
      'Nursing',
      'Physiotherapy',
      'CommunityHealth'
    ],
    award: 'ICICI Prudential Life Insurance Award of Excellence for Superior Performance in Claims Investigation'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}