import ServicePage from '@/components/ServicePage/ServicePage';

const services = [
  {
    title: 'Elderly Care',
    description:
      'Compassionate assistance and everyday support for senior citizens.',
  },
  {
    title: 'Personal Care',
    description:
      'Support with personal routines and daily living activities.',
  },
  {
    title: 'Patient Support',
    description:
      'Reliable assistance for individuals who need additional care.',
  },
  {
    title: 'Attendant Services',
    description:
      'Dedicated attendants for home-based support and assistance.',
  },
];

export default function HomeCarePage() {
  return (
    <ServicePage
      eyebrow="HOME CARE"
      title="Care that feels closer to home."
      description="Professional and compassionate home care support designed around the needs of individuals and families."
      image="/images/home-care/home-care.jpg"
      services={services}
    />
  );
}