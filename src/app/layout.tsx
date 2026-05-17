import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Canonical domain — driven from env, fallback to production URL ───────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://starego.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Starego | Best Wayanad Cab & Taxi Service | Sulthan Bathery | Airport Pickup",
    template: "%s | Starego Wayanad Taxi",
  },
  description:
    "Book the best cab & taxi service in Wayanad with Starego. We offer Wayanad cab service, Sulthan Bathery cab, airport pickup from Calicut Airport & Bangalore Airport, sightseeing tours, outstation taxi, and 24/7 Kerala taxi service. Call now for instant booking!",
  keywords: [
    // Core service keywords
    "Wayanad cab",
    "Wayanad cab service",
    "Wayanad taxi",
    "Wayanad taxi service",
    "cab service in Wayanad",
    "taxi service in Wayanad",
    "best cab in Wayanad",
    "best taxi in Wayanad",
    // Sulthan Bathery specific
    "Sulthan Bathery cab",
    "Sulthan Bathery cab service",
    "Sulthan Bathery taxi",
    "Sulthan Bathery taxi service",
    "cab in Sulthan Bathery",
    "taxi in Sulthan Bathery",
    // Airport pickups
    "airport pickup Wayanad",
    "Calicut airport pickup",
    "Calicut airport cab",
    "Calicut airport taxi",
    "Kozhikode airport to Wayanad taxi",
    "Calicut airport to Sulthan Bathery cab",
    "Bangalore airport pickup Wayanad",
    "Bangalore airport cab to Wayanad",
    "airport drop Wayanad",
    "airport transfer Wayanad",
    // Outstation & local
    "outstation taxi Wayanad",
    "local cab Wayanad",
    "Kalpetta cab service",
    "Mananthavady cab",
    "Vythiri cab service",
    "Lakkidi cab",
    // Kerala taxi
    "Kerala taxi service",
    "Kerala cab booking",
    "premium taxi Kerala",
    "taxi booking Kerala",
    // Sightseeing
    "Wayanad sightseeing cab",
    "Wayanad tour package taxi",
    "Wayanad tourism taxi",
    "Chembra Peak taxi",
    "Edakkal Caves cab",
    "Banasura Sagar cab",
    // Brand
    "Starego Travels",
    "Starego cab",
    "Starego taxi Wayanad",
    // Long-tail
    "24 hour taxi Wayanad",
    "round the clock cab Wayanad",
    "affordable taxi Wayanad",
    "cheap cab Wayanad",
    "Innova taxi Wayanad",
    "Ertiga cab Wayanad",
  ],
  authors: [{ name: "Starego Travels", url: SITE_URL }],
  creator: "Starego Travels",
  publisher: "Starego Travels",
  category: "Travel & Transportation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Starego | Best Wayanad Cab & Taxi Service | Airport Pickup",
    description:
      "Book premium cabs & taxis in Wayanad, Sulthan Bathery. Airport pickup from Calicut & Bangalore airports. 24/7 service. Call Starego Travels now!",
    url: SITE_URL,
    siteName: "Starego Travels — Wayanad Cab & Taxi Service",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/luxury-hero.png",
        width: 1200,
        height: 630,
        alt: "Starego Premium Wayanad Cab & Taxi Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starego | Best Wayanad Cab & Taxi Service",
    description:
      "Premium cab & taxi in Wayanad. Airport pickup from Calicut & Bangalore. 24/7 service from Sulthan Bathery. Book with Starego!",
    images: ["/images/luxury-hero.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "your-google-search-console-verification-code", // Replace with actual code from Google Search Console
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Sulthan Bathery, Wayanad, Kerala",
    "geo.position": "11.6478;76.2591",
    "ICBM": "11.6478, 76.2591",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${SITE_URL}/#business`,
    "name": "Starego Travels — Wayanad Cab & Taxi Service",
    "alternateName": ["Starego", "Starego Wayanad Taxi", "Starego Cab Service"],
    "description": "Starego is the best cab and taxi service in Wayanad, Kerala. We provide Sulthan Bathery cab service, airport pickup from Calicut Airport and Bangalore Airport, sightseeing tours, outstation trips, and 24/7 taxi service across Wayanad.",
    "url": SITE_URL,
    "telephone": "+919567196157",
    "priceRange": "₹₹",
    "image": `${SITE_URL}/logo.png`,
    "logo": `${SITE_URL}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sulthan Bathery",
      "addressLocality": "Sulthan Bathery",
      "addressRegion": "Wayanad",
      "addressCountry": "IN",
      "postalCode": "673592"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.6478,
      "longitude": 76.2591
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Sulthan Bathery" },
      { "@type": "City", "name": "Kalpetta" },
      { "@type": "City", "name": "Mananthavady" },
      { "@type": "City", "name": "Vythiri" },
      { "@type": "AdministrativeArea", "name": "Wayanad" },
      { "@type": "City", "name": "Kozhikode" },
      { "@type": "City", "name": "Calicut" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "City", "name": "Mysore" },
      { "@type": "AdministrativeArea", "name": "Kerala" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 11.6478,
        "longitude": 76.2591
      },
      "geoRadius": "200000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Starego Cab & Taxi Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wayanad Cab Service",
            "description": "Premium local cab service within Wayanad district"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Calicut Airport Pickup",
            "description": "Airport cab & taxi pickup from Calicut International Airport (Kozhikode) to Wayanad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bangalore Airport Pickup",
            "description": "Taxi service from Bangalore (Kempegowda) Airport to Wayanad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wayanad Sightseeing Tour",
            "description": "Full-day and multi-day sightseeing cab packages in Wayanad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outstation Taxi Wayanad",
            "description": "Outstation cab from Wayanad to Mysore, Ooty, Coorg, Bangalore, Calicut"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "248",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Rahul Nair" },
        "reviewBody": "Best cab service in Wayanad! Picked us up from Calicut airport on time, very comfortable Innova. Highly recommend Starego!"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Priya Menon" },
        "reviewBody": "Excellent Sulthan Bathery cab service. Driver was knowledgeable about all Wayanad tourist spots. Will book again!"
      }
    ],
    "sameAs": [
      "https://wa.me/919567196157"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": "Starego Wayanad Cab & Taxi Service",
    "description": "Book the best cab and taxi in Wayanad, Sulthan Bathery. Airport pickup from Calicut & Bangalore. 24/7 service.",
    "publisher": { "@id": `${SITE_URL}/#business` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best cab service in Wayanad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starego Travels is the best and most trusted cab service in Wayanad, operating from Sulthan Bathery with 24/7 availability. We offer local cabs, airport pickups, and sightseeing packages across Wayanad."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Calicut airport pickup to Wayanad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Starego provides airport cab & taxi pickup from Calicut International Airport (Kozhikode) directly to Wayanad, Sulthan Bathery, Kalpetta, and other destinations in Wayanad district."
        }
      },
      {
        "@type": "Question",
        "name": "Do you pick up from Bangalore airport to Wayanad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Starego offers comfortable taxi service from Kempegowda International Airport, Bangalore to Wayanad. Book in advance for a seamless journey."
        }
      },
      {
        "@type": "Question",
        "name": "What vehicles are available for Sulthan Bathery cab service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Toyota Innova, Suzuki Ertiga, and Toyota Glanza for Sulthan Bathery cab service. Choose based on your group size and comfort preference."
        }
      },
      {
        "@type": "Question",
        "name": "Is Starego taxi service available 24/7 in Wayanad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Starego Wayanad taxi service is available round the clock — 24 hours a day, 7 days a week. Call +91 95671 96157 for instant booking."
        }
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
