import { Metadata } from 'next';
import Packages from '@/components/Packages';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://starego.in'),
  title: 'Wayanad Cab & Tour Packages | Sulthan Bathery Taxi Packages | Starego',
  description:
    'Explore the best Wayanad cab and taxi tour packages from Starego. Book affordable Wayanad sightseeing packages, airport pickup packages from Calicut & Bangalore, and customised Kerala tour packages departing from Sulthan Bathery.',
  keywords: [
    'Wayanad tour package cab',
    'Wayanad taxi package',
    'Sulthan Bathery tour package',
    'Wayanad sightseeing package',
    'Wayanad cab package price',
    'Kerala tour taxi package',
    'Calicut airport to Wayanad package',
    'Bangalore to Wayanad cab package',
    'Chembra Peak cab package',
    'Edakkal Caves tour cab',
    'Banasura Sagar taxi package',
    'Wayanad 2 day tour taxi',
    'Wayanad 3 day tour cab',
    'affordable Wayanad taxi package',
  ],
  alternates: {
    canonical: 'https://starego.in/packages',
  },
  openGraph: {
    title: 'Wayanad Cab & Tour Packages | Starego Travels',
    description:
      'Affordable and premium Wayanad cab packages for sightseeing, airport pickup, and outstation trips. Book from Sulthan Bathery with Starego.',
    url: 'https://starego.in/packages',
    siteName: 'Starego Travels — Wayanad Cab & Taxi Service',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PackagesPage() {
  return (
    <main className="pt-20 min-h-screen">
      <Navbar />
      <Packages />
    </main>
  );
}
