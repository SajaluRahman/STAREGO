import { Metadata } from 'next';
import VehicleShowcase from '@/components/VehicleShowcase';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://starego.in'),
  title: 'Wayanad Cab Vehicles | Innova, Ertiga & Glanza Taxi | Starego',
  description:
    'Starego offers a premium fleet of cabs and taxis in Wayanad — Toyota Innova, Suzuki Ertiga, and Toyota Glanza. Book comfortable, well-maintained vehicles for airport pickup, sightseeing, and outstation travel from Sulthan Bathery.',
  keywords: [
    'Innova cab Wayanad',
    'Ertiga taxi Wayanad',
    'Glanza cab Wayanad',
    'Toyota Innova taxi Sulthan Bathery',
    'Suzuki Ertiga cab Kerala',
    'luxury cab Wayanad',
    'SUV taxi Wayanad',
    'comfortable cab Wayanad',
    'Innova airport pickup Calicut',
    'Ertiga airport taxi Kerala',
    'vehicle hire Wayanad',
    'cab fleet Wayanad',
  ],
  alternates: {
    canonical: 'https://starego.in/vehicles',
  },
  openGraph: {
    title: 'Wayanad Cab Vehicles — Innova, Ertiga, Glanza | Starego',
    description:
      'Choose from our fleet of Innova, Ertiga and Glanza taxis in Wayanad. Perfect for airport pickups, sightseeing tours and outstation trips.',
    url: 'https://starego.in/vehicles',
    siteName: 'Starego Travels — Wayanad Cab & Taxi Service',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function VehiclesPage() {
  return (
    <main className="pt-20 min-h-screen">
      <Navbar />
      <VehicleShowcase />
    </main>
  );
}
