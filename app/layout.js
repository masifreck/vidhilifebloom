import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsApp/WhatsAppButton';

export const metadata = {
  title: {
    default: 'Vidhi Lifebloom',
    template: '%s | Vidhi Lifebloom',
  },

  description:
    'Professional home care, wellness, investigation and manpower services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}