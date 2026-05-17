import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://starego.in'),
  title: 'Contact Starego | Book Wayanad Cab & Taxi | Sulthan Bathery',
  description:
    'Contact Starego to book the best cab and taxi service in Wayanad. Call us for Sulthan Bathery cab, airport pickup from Calicut or Bangalore, and custom sightseeing tours. Available 24/7.',
  keywords: [
    'contact Wayanad taxi',
    'book cab Wayanad',
    'book taxi Wayanad',
    'call Wayanad cab',
    'Sulthan Bathery taxi booking',
    'Wayanad cab booking number',
    'Starego contact',
    'Wayanad taxi phone number',
    'airport pickup booking Wayanad',
    'Calicut airport cab booking',
    'Bangalore airport taxi booking',
  ],
  alternates: {
    canonical: 'https://starego.in/contact',
  },
  openGraph: {
    title: 'Contact Starego | Book Wayanad Cab & Taxi',
    description:
      'Book your Wayanad cab today. Airport pickups, sightseeing tours, outstation taxis — call Starego Travels in Sulthan Bathery, Wayanad.',
    url: 'https://starego.in/contact',
    siteName: 'Starego Travels — Wayanad Cab & Taxi Service',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
