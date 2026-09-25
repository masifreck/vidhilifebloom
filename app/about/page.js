import AboutSection from '@/components/AboutSection/AboutSection';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Vidhi Lifebloom Healthcare Private Limited, our experience, values and integrated healthcare and professional support services.',
};

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* =========================
          ABOUT HERO
      ========================== */}

    


      {/* =========================
          MAIN ABOUT CONTENT
      ========================== */}

      <AboutSection />

    </div>
  );
}