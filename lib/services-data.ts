// lib/services-data.ts

export interface ServiceItem {
  id: string;
  category: 'parahome' | 'ereliant' | 'cag';
  categoryLabel: string;
  title: string;
  badge: string;
  shortDesc: string;
  features: string[];
  ctaText: string;
  slug: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  // ================= 1. PARAHOME CARE DIVISION =================
  {
    id: 'ph-nursing',
    category: 'parahome',
    categoryLabel: 'ParaHome Care',
    title: '24/7 Bedside ICU & Nursing Care',
    badge: 'Clinical Care',
    shortDesc: 'Certified GNM/B.Sc nurses for critical bedside care, vitals monitoring, tracheostomy, and catheter management.',
    features: ['Continuous Vitals Tracking', 'Ryle’s Tube & Catheterization', 'Post-ICU Home Support'],
    ctaText: 'Book Nursing Attendant',
    slug: 'bedside-nursing-care'
  },
  {
    id: 'ph-elderly',
    category: 'parahome',
    categoryLabel: 'ParaHome Care',
    title: 'Elderly Care & Assisted Daily Living',
    badge: 'Senior Care',
    shortDesc: 'Background-verified caregivers for daily mobility, personal hygiene, feeding, companionship, and medication administration.',
    features: ['Hygiene & Bath Assistance', 'Medication Reminders', 'Fall Prevention & Mobility'],
    ctaText: 'Hire Elder Companion',
    slug: 'elderly-care-assistance'
  },
  {
    id: 'ph-physio',
    category: 'parahome',
    categoryLabel: 'ParaHome Care',
    title: 'Home Physiotherapy & Rehabilitation',
    badge: 'Therapy at Home',
    shortDesc: 'Certified therapists for stroke rehabilitation, joint replacements, neurological recovery, and back/neck pain management.',
    features: ['Neuro & Stroke Rehab', 'Post-Surgical Joint Mobility', 'Personalized Exercise Charts'],
    ctaText: 'Book Physiotherapist',
    slug: 'home-physiotherapy'
  },
  {
    id: 'ph-postop',
    category: 'parahome',
    categoryLabel: 'ParaHome Care',
    title: 'Post-Surgical & Sterile Wound Dressing',
    badge: 'Wound Care',
    shortDesc: 'Aseptic surgical dressing, stitch/staple removal, and infection control supervised by clinical specialists.',
    features: ['Sterile Dressing Kits', 'Bed Sore Management', 'Suture & Staple Care'],
    ctaText: 'Request Wound Nurse',
    slug: 'post-operative-care'
  },
  {
    id: 'ph-equipment',
    category: 'parahome',
    categoryLabel: 'ParaHome Care',
    title: 'Medical Equipment Rental & Setup',
    badge: 'Home ICU',
    shortDesc: 'Prompt delivery and on-site setup of hospital beds, oxygen concentrators, BiPAP/CPAP, suction pumps, and multi-para monitors.',
    features: ['Same-Day Delivery', 'Technician Demonstration', 'Flexible Monthly Rentals'],
    ctaText: 'Rent Equipment',
    slug: 'medical-equipment-rental'
  },
  {
    id: 'ph-doctor',
    category: 'parahome',
    categoryLabel: 'ParaHome Care',
    title: 'Doctor & Paramedical Home Visits',
    badge: 'At-Home Consult',
    shortDesc: 'Qualified general physicians and diagnostic phlebotomists visiting your residence for comprehensive examinations.',
    features: ['In-Home Blood Collection', 'Physical Vitals Evaluation', 'Prescription Issuance'],
    ctaText: 'Schedule Doctor Visit',
    slug: 'doctor-home-visit'
  },

  // ================= 2. E-RELIANT HEALTH CARD DIVISION =================
  {
    id: 'er-hospital-bill',
    category: 'ereliant',
    categoryLabel: 'E-Reliant Card',
    title: 'Hospitalization (IPD) Bill Discounts',
    badge: 'Up to 20% Off',
    shortDesc: 'Negotiated discounts on in-patient hospital admission bills, room tariffs, and procedural charges at partner hospitals.',
    features: ['Direct Network Concessions', 'Admission Desk Support', 'Bill Verification'],
    ctaText: 'Get Card Savings',
    slug: 'hospitalization-bill-discount'
  },
  {
    id: 'er-consultation',
    category: 'ereliant',
    categoryLabel: 'E-Reliant Card',
    title: 'Super Speciality Consultations',
    badge: 'Free Monthly Visit',
    shortDesc: 'Privileged consultations with top cardiologists, oncologists, neurologists, and orthopedics with zero queue wait times.',
    features: ['1 Free Monthly Consult', 'High-Priority Booking', 'Second Medical Opinions'],
    ctaText: 'Book Specialist',
    slug: 'super-speciality-consultation'
  },
  {
    id: 'er-radiology',
    category: 'ereliant',
    categoryLabel: 'E-Reliant Card',
    title: 'Radiology & Pathology Diagnostics',
    badge: 'Up to 20% Off',
    shortDesc: 'Exclusive member discounts across MRI, CT scans, 2D Echo, Ultrasound, and comprehensive routine blood tests.',
    features: ['NABL Network Labs', 'Doorstep Blood Collection', 'Fast Digital Reports'],
    ctaText: 'Book Diagnostics',
    slug: 'radiology-pathology-services'
  },
  {
    id: 'er-pharma',
    category: 'ereliant',
    categoryLabel: 'E-Reliant Card',
    title: 'Pharmaceutical Services',
    badge: 'Pharmacy Savings',
    shortDesc: 'Flat savings on genuine prescription medicines, routine maintenance drugs (diabetes, cardiac), and wellness supplies.',
    features: ['Doorstep Delivery', 'Authentic Medicines Only', 'Refill Auto-Alerts'],
    ctaText: 'Order Medicines',
    slug: 'pharmacy-services'
  },
  {
    id: 'er-membership',
    category: 'ereliant',
    categoryLabel: 'E-Reliant Card',
    title: 'Free Health Card Registration',
    badge: '100% Free Signup',
    shortDesc: 'Enroll in the Vidhi Lifebloom Health Privilege Card program at zero cost and unlock member benefits for the whole family.',
    features: ['Lifetime Digital Card', 'Instant Approval', 'Family Add-on Support'],
    ctaText: 'Apply For Free Card',
    slug: 'free-health-card-registration'
  },
  {
    id: 'er-marketing',
    category: 'ereliant',
    categoryLabel: 'E-Reliant Card',
    title: 'Hospital Marketing & Clinic Tie-ups',
    badge: 'Institutional B2B',
    shortDesc: 'Empanelment and strategic networking to expand clinic and hospital patient outreach across regional healthcare hubs.',
    features: ['Hospital Empanelment', 'Doctor Referrals', 'Regional Outreach Drives'],
    ctaText: 'Partner Your Hospital',
    slug: 'hospital-marketing-tieups'
  },

  // ================= 3. CAG ENTERPRISE & AUDIT DIVISION =================
  {
    id: 'cag-claims-investigation',
    category: 'cag',
    categoryLabel: 'CAG Enterprise',
    title: 'Complete Claims Investigation',
    badge: 'Fraud Inquest',
    shortDesc: 'Rigorous ground-level verification of Life, Health, and Personal Accident insurance claims to eliminate staged claims.',
    features: ['Early Death Investigations', 'Accident Site Inquests', 'Field Investigation Across 6+ States'],
    ctaText: 'Request Investigation',
    slug: 'claims-investigation'
  },
  {
    id: 'cag-claims-audit',
    category: 'cag',
    categoryLabel: 'CAG Enterprise',
    title: 'Insurance Claims Auditing',
    badge: 'Forensic Audit',
    shortDesc: 'Post-settlement and pre-settlement medical file auditing to uncover billing anomalies, overcharging, and billing leakage.',
    features: ['Settled File Re-audit', 'Billing Code Verification', 'Systemic Leakage Reports'],
    ctaText: 'Initiate Audit Desk',
    slug: 'insurance-claims-auditing'
  },
  {
    id: 'cag-claims-verification',
    category: 'cag',
    categoryLabel: 'CAG Enterprise',
    title: 'Specific Parameter Claims Verification',
    badge: 'Underwriting Support',
    shortDesc: 'Tailored underwriting and claim verification checks against custom parameters requested by insurance underwriters.',
    features: ['Stay Authenticity Checks', 'Doctor Verification', 'Pre-existing Disease Validation'],
    ctaText: 'Verify Claim File',
    slug: 'claims-verification'
  },
  {
    id: 'cag-doc-pickup',
    category: 'cag',
    categoryLabel: 'CAG Enterprise',
    title: 'Document Procurement & Retrieval',
    badge: 'Legal Logistics',
    shortDesc: 'Rapid retrieval and formal verification of Indoor Case Papers (ICPs), police panchnamas, and municipal death registers.',
    features: ['Chain-of-Custody Delivery', 'Hospital Record Indexing', 'Government Registry Checks'],
    ctaText: 'Procure Documents',
    slug: 'document-procurement'
  },
  {
    id: 'cag-hospital-audit',
    category: 'cag',
    categoryLabel: 'CAG Enterprise',
    title: 'Hospital Billing & Infrastructure Audit',
    badge: 'Cost Containment',
    shortDesc: 'On-site physical inspection of hospital setups, ICU facilities, tariff card compliance, and legitimate treatment verification.',
    features: ['Bedside Patient Verification', 'Tariff Discrepancy Audits', 'Phantom Billing Detection'],
    ctaText: 'Schedule Audit',
    slug: 'hospital-infrastructure-audit'
  },
  {
    id: 'cag-nabh',
    category: 'cag',
    categoryLabel: 'CAG Enterprise',
    title: 'NABH Accreditation Consultancy',
    badge: 'Accreditation',
    shortDesc: 'Comprehensive advisory for clinics and hospitals to achieve entry-level and full NABH accreditation with SOP setup.',
    features: ['Quality SOP Drafting', 'Mock Pre-Assessments', 'Clinical Governance Training'],
    ctaText: 'Consult NABH Advisor',
    slug: 'nabh-consultancy'
  }
];