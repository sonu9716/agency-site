import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Best Dentist Indirapuram | Dr. Amit Sharma | Sharma Dental Clinic',
  description:
    'Dr. Amit Sharma – 20+ years experienced Root Canal Specialist in Indirapuram, Ghaziabad. Offering Root Canal, Dental Implants, Braces, Teeth Whitening & Kids Dentistry. Book appointment today!',
  keywords:
    'dentist indirapuram, best dentist ghaziabad, root canal specialist, dental implants indirapuram, dr amit sharma dentist, sharma dental clinic vaibhav khand',
  authors: [{ name: 'Dr. Amit Sharma' }],
  openGraph: {
    title: 'Best Dentist Indirapuram | Dr. Amit Sharma',
    description:
      'Expert dental care in Indirapuram, Ghaziabad. 20+ years experience, 500+ happy patients.',
    url: 'https://docsitesolutions.online/demo1',
    siteName: 'Sharma Dental Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Sharma Dental Clinic',
              image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
              '@id': 'https://docsitesolutions.online/demo1',
              url: 'https://docsitesolutions.online/demo1',
              telephone: '+91-9990421048',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vaibhav Khand',
                addressLocality: 'Indirapuram',
                addressRegion: 'Ghaziabad',
                postalCode: '201010',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.6448,
                longitude: 77.3717,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '20:00',
                },
              ],
              priceRange: '₹₹',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
