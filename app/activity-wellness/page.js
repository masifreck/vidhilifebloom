import ServicePage from '@/components/ServicePage/ServicePage';
import WellnessServices from '@/components/WellnessServices/WellnessServices';

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