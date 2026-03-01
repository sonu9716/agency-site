import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://docsitesolutions.online'),
  title: {
    default: 'Best Gynecologist Indirapuram | Dr. Priya Gupta | Women\'s Clinic',
    template: '%s | Dr. Priya Gupta – Gynecologist',
  },
  description: 'Dr. Priya Gupta – Senior Gynecologist & Obstetrician in Niti Khand, Indirapuram. 15+ years experience in Pregnancy Care, PCOS, Menopause, IVF Counseling. Evening consultations available.',
  keywords: ['gynecologist indirapuram', 'best gynecologist ghaziabad', 'pregnancy doctor indirapuram', 'PCOS treatment indirapuram', 'Dr Priya Gupta gynecologist'],
  openGraph: {
    title: 'Best Gynecologist Indirapuram | Dr. Priya Gupta',
    description: 'Compassionate women\'s healthcare in Niti Khand, Indirapuram. 15+ years of experience.',
    url: 'https://docsitesolutions.online/demo2',
    siteName: 'Dr. Priya Gupta – Women\'s Clinic',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: "Dr. Priya Gupta – Women's Clinic",
              description: 'Senior Gynecologist & Obstetrician. Pregnancy Care, PCOS, Menopause, IVF Counseling.',
              url: 'https://docsitesolutions.online/demo2',
              telephone: '+91-99904-21048',
              address: { '@type': 'PostalAddress', streetAddress: 'Niti Khand', addressLocality: 'Indirapuram', addressRegion: 'Uttar Pradesh', postalCode: '201014', addressCountry: 'IN' },
              openingHours: ['Mo-Sa 17:00-21:00', 'Su 10:00-13:00'],
              medicalSpecialty: 'Gynecology',
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '180' },
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
