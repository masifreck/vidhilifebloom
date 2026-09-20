import ServicePage from '@/components/ServicePage/ServicePage';

const services = [
  {
    title: 'Skilled Workforce',
    description:
      'Workforce solutions for roles requiring specific skills and experience.',
  },
  {
    title: 'Support Staff',
    description:
      'Reliable staff solutions for day-to-day operational requirements.',
  },
  {
    title: 'Contract Manpower',
    description:
      'Flexible workforce support based on organizational requirements.',
  },
  {
    title: 'Staffing Solutions',
    description:
      'Practical manpower solutions tailored to business needs.',
  },
];

export default function ManpowerSupplyPage() {
  return (
    <ServicePage
      eyebrow="MANPOWER SUPPLY"
      title="The right people for your needs."
      description="Reliable manpower and staffing solutions for businesses, organizations and operational requirements."
      image="/images/manpower/manpower.jpg"
      services={services}
    />
  );
}