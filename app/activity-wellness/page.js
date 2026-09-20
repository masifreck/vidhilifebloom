import ServicePage from '@/components/ServicePage/ServicePage';

const services = [
  {
    title: 'Wellness Activities',
    description:
      'Activities that encourage an active and balanced lifestyle.',
  },
  {
    title: 'Fitness Support',
    description:
      'Supportive programs focused on movement and everyday fitness.',
  },
  {
    title: 'Lifestyle Activities',
    description:
      'Engaging activities designed to encourage participation and wellbeing.',
  },
  {
    title: 'Personal Wellness',
    description:
      'Approaches that support healthier everyday routines.',
  },
];

export default function ActivityWellnessPage() {
  return (
    <ServicePage
      eyebrow="ACTIVITY & WELLNESS"
      title="Make wellness part of everyday life."
      description="Thoughtfully designed activity and wellness services that encourage healthier, more active routines."
      image="/images/wellness/wellness.jpg"
      services={services}
    />
  );
}