import ServicePage from '@/components/ServicePage/ServicePage';
import WellnessServices from '@/components/WellnessServices/WellnessServices';

export const metadata = {
  title: 'Health & Wellness Services | Vidhi Lifebloom Healthcare',
  description:
    'Healthcare and wellness services including health checkups, doctor consultation, lab reports, medicines and preventive health screening.',
  alternates: {
    canonical: 'https://vlhpl.com/activity-wellness',
  },
};
export default function ActivityWellnessPage() {
  return (
    <>
      <ServicePage
        eyebrow="ACTIVITY & WELLNESS"
        title="Supporting healthier,
        more active lives."
        description="..."
        image="\images\hero\well1.jpeg"
      />

      <WellnessServices />
    </>
  );                                                   
}      