import ServicePage from '@/components/ServicePage/ServicePage';

const services = [
  {
    title: 'Personal Investigation',
    description:
      'Confidential investigation support for personal matters.',
  },
  {
    title: 'Background Verification',
    description:
      'Structured verification services for important decisions.',
  },
  {
    title: 'Corporate Investigation',
    description:
      'Professional investigation support for business requirements.',
  },
  {
    title: 'Surveillance Services',
    description:
      'Discreet and professionally managed investigation assignments.',
  },
];

export default function InvestigationAgencyPage() {
  return (
    <ServicePage
      eyebrow="INVESTIGATION AGENCY"
      title="Professional. Discreet. Confidential."
      description="Investigation services delivered with professionalism, confidentiality and attention to detail."
      image="/images/investigation/investigation.jpg"
      services={services}
    />
  );
}