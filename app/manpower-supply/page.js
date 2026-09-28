import HealthcareStaffServices from '@/components/HealthcareStaffServices/HealthcareStaffServices';

export const metadata = {
  title: 'Healthcare Staffing Solutions | Vidhi Lifebloom',
  description:
    'Healthcare staffing solutions for nurses, doctors, lab technicians, caregivers, patient care attendants and hospital support staff.',
  alternates: {
    canonical: 'https://vlhpl.com/manpower-supply',
  },
};

export default function ManpowerSupplyPage() {
  return <HealthcareStaffServices />;
}