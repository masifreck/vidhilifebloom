import HomeCareServices from '@/components/HomeCareServices/HomeCareServices';

export const metadata = {
  title: 'Home Care Services | Vidhi Lifebloom Healthcare',
  description:
    'Professional home care services including nursing assistance, elderly care, physiotherapy, doctor consultation and medical equipment support.',
  alternates: {
    canonical: 'https://vlhpl.com/home-care',
  },
};

export default function HomeCarePage() {
  return <HomeCareServices />;
}