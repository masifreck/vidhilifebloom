import './globals.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsApp/WhatsAppButton';

export const metadata = {
  title: {
    default: 'Vidhi Lifebloom Healthcare Private Limited',
    template: '%s | Vidhi Lifebloom',
  },

  description:
    'Vidhi Lifebloom Healthcare Private Limited provides professional home care, wellness, investigation and manpower services in Bhubaneswar, Odisha.',

  keywords: [
    'home care',
    'healthcare services',
    'wellness services',
    'investigation agency',
    'manpower supply',
    'Bhubaneswar',
    'Odisha',
    'Vidhi Lifebloom Healthcare',
  ],

  authors: [
    {
      name: 'Vidhi Lifebloom Healthcare Private Limited',
    },
  ],

  icons: {
    icon: '/favicon.png',
  },

  openGraph: {
    title: 'Vidhi Lifebloom Healthcare Private Limited',
    description:
      'Professional home care, wellness, investigation and manpower services.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}