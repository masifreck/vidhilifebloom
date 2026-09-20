// data/categories.ts
export interface ServiceItem {
  id: string;
  name: string;
  badge?: string;
  iconBg: string;
  link: string;
  iconName: string;
}

export interface Category {
  id: string;
  title: string;
  shortDesc: string;
  bannerImage: string;
  ctaText: string;
  ctaLink: string;
  services: ServiceItem[];
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'home-care',
    title: 'Home Care',
    shortDesc: 'Certified bedside attendants, nurses & physiotherapy at home',
    bannerImage: '/banners/home-care.jpg',
    ctaText: 'Explore Home Care',
    ctaLink: '/services#home-care',
    services: [
      { id: 'hc-1', name: '24/7 Bedside Nursing', iconBg: 'bg-rose-50 text-rose-600', link: '/services/home-care/nursing', iconName: 'Stethoscope' },
      { id: 'hc-2', name: 'Elder Care Attendant', iconBg: 'bg-amber-50 text-amber-600', link: '/services/home-care/elderly', iconName: 'HeartPulse' },
      { id: 'hc-3', name: 'Home Physiotherapy', iconBg: 'bg-emerald-50 text-emerald-600', link: '/services/home-care/physio', iconName: 'Activity' },
      { id: 'hc-4', name: 'Post-Surgery Dressing', iconBg: 'bg-blue-50 text-blue-600', link: '/services/home-care/post-op', iconName: 'ShieldPlus' },
      { id: 'hc-5', name: 'Medical Equipment Rental', iconBg: 'bg-purple-50 text-purple-600', link: '/services/home-care/equipment', iconName: 'Package' },
      { id: 'hc-6', name: 'Doctor Home Visit', iconBg: 'bg-sky-50 text-sky-600', link: '/services/home-care/doctor', iconName: 'UserCheck' },
    ],
  },
  {
    id: 'wellness',
    title: 'Wellness Activity',
    shortDesc: 'Preventive healthcare, doctor checkups & diagnostic discounts',
    bannerImage: '/banners/wellness.jpg',
    ctaText: 'Get Health Card',
    ctaLink: '/services#wellness',
    services: [
      { id: 'wl-1', name: 'Free Health Card', badge: '100% Free', iconBg: 'bg-teal-50 text-teal-600', link: '/become-member', iconName: 'CreditCard' },
      { id: 'wl-2', name: 'Super Specialist Consult', iconBg: 'bg-indigo-50 text-indigo-600', link: '/services/wellness/consultation', iconName: 'Stethoscope' },
      { id: 'wl-3', name: 'Lab Tests & Scans', badge: 'Up to 20% Off', iconBg: 'bg-cyan-50 text-cyan-600', link: '/services/wellness/diagnostics', iconName: 'FileText' },
      { id: 'wl-4', name: 'Pharmacy Discounts', iconBg: 'bg-emerald-50 text-emerald-600', link: '/services/wellness/pharmacy', iconName: 'Pill' },
      { id: 'wl-5', name: 'Hospital Bill Waiver', badge: 'Save Bill', iconBg: 'bg-rose-50 text-rose-600', link: '/services/wellness/hospital-bill', iconName: 'Building2' },
      { id: 'wl-6', name: 'Corporate Health Camps', iconBg: 'bg-orange-50 text-orange-600', link: '/services/wellness/camps', iconName: 'Users' },
    ],
  },
  {
    id: 'investigation',
    title: 'Investigation Agency',
    shortDesc: 'Insurance claim inquests, hospital audits & fraud detection',
    bannerImage: '/banners/investigation.jpg',
    ctaText: 'Corporate Desk',
    ctaLink: '/services#investigation',
    services: [
      { id: 'inv-1', name: 'Health Claim Inquest', iconBg: 'bg-red-50 text-red-600', link: '/services/investigation/health-claims', iconName: 'Search' },
      { id: 'inv-2', name: 'Life & Death Verification', iconBg: 'bg-slate-100 text-slate-700', link: '/services/investigation/life-claims', iconName: 'FileSearch' },
      { id: 'inv-3', name: 'Settled Files Audit', iconBg: 'bg-blue-50 text-blue-600', link: '/services/investigation/audit', iconName: 'FileCheck2' },
      { id: 'inv-4', name: 'Hospital Bill Audit', iconBg: 'bg-amber-50 text-amber-600', link: '/services/investigation/hospital-audit', iconName: 'Receipt' },
      { id: 'inv-5', name: 'Document Retrieval', iconBg: 'bg-emerald-50 text-emerald-600', link: '/services/investigation/documents', iconName: 'FolderDown' },
      { id: 'inv-6', name: 'NABH Consultancy', iconBg: 'bg-violet-50 text-violet-600', link: '/services/investigation/nabh', iconName: 'Award' },
    ],
  },
  {
    id: 'manpower',
    title: 'Manpower Supply',
    shortDesc: 'Verified clinical & general staff deployed for hospitals & corporates',
    bannerImage: '/banners/manpower.jpg',
    ctaText: 'Hire Staff',
    ctaLink: '/services#manpower',
    services: [
      { id: 'mp-1', name: 'ICU & Ward Nurses', iconBg: 'bg-sky-50 text-sky-600', link: '/services/manpower/nurses', iconName: 'Stethoscope' },
      { id: 'mp-2', name: 'Ward Boys & Ayahs', iconBg: 'bg-emerald-50 text-emerald-600', link: '/services/manpower/attendants', iconName: 'Users' },
      { id: 'mp-3', name: 'Paramedical Technicians', iconBg: 'bg-indigo-50 text-indigo-600', link: '/services/manpower/paramedical', iconName: 'Activity' },
      { id: 'mp-4', name: 'Hospital Housekeeping', iconBg: 'bg-amber-50 text-amber-600', link: '/services/manpower/housekeeping', iconName: 'Sparkles' },
      { id: 'mp-5', name: 'Security Personnel', iconBg: 'bg-slate-100 text-slate-700', link: '/services/manpower/security', iconName: 'Shield' },
      { id: 'mp-6', name: 'Corporate Pantry Staff', iconBg: 'bg-rose-50 text-rose-600', link: '/services/manpower/pantry', iconName: 'Coffee' },
    ],
  },
];