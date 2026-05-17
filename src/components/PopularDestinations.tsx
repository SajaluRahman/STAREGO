'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MapPin, ArrowRight, Plane, Mountain, TreePine, Waves, Building2, Compass } from 'lucide-react';

/* ─── Destination Data with Grid Span Info ─── */
const destinations = [
  {
    name: 'Chembra Peak',
    tagline: 'Heart-shaped lake atop Wayanad\'s highest peak',
    distance: '15 km',
    image: '/images/destinations/chembra.png',
    icon: <Mountain className="w-3.5 h-3.5" />,
    span: 'md:col-span-2 md:row-span-1',        // Large — Row 1
    aspect: 'aspect-[16/9] md:aspect-[2/1]',
  },
  {
    name: 'Banasura Sagar Dam',
    tagline: 'India\'s largest earth dam surrounded by lush hills',
    distance: '20 km',
    image: '/images/destinations/banasura.png',
    icon: <Waves className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 1
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Edakkal Caves',
    tagline: 'Ancient cave with prehistoric stone-age carvings',
    distance: '12 km',
    image: '/images/destinations/edakkal.png',
    icon: <Compass className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 1
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Wildlife Sanctuary',
    tagline: 'Home to elephants, tigers, and rare wildlife',
    distance: '18 km',
    image: '/images/destinations/wildlife.png',
    icon: <TreePine className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 2
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Meenmutty Falls',
    tagline: 'Magnificent three-tiered waterfall in dense forest',
    distance: '25 km',
    image: '/images/destinations/meenmutty.png',
    icon: <Waves className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 2
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Pookode Lake',
    tagline: 'Serene freshwater lake surrounded by evergreen forest',
    distance: '10 km',
    image: '/images/destinations/pookode.png',
    icon: <Waves className="w-3.5 h-3.5" />,
    span: 'md:col-span-2 md:row-span-1',         // Large — Row 2
    aspect: 'aspect-[16/9] md:aspect-[2/1]',
  },
  {
    name: 'All Major Airports',
    tagline: 'Transfers to Calicut, Cochin, Bangalore & more',
    distance: 'Varies',
    image: '/images/destinations/cochin.png',
    icon: <Plane className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 3
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Calicut Town',
    tagline: 'Historic port city with beaches and culture',
    distance: '95 km',
    image: '/images/destinations/calicut.png',
    icon: <Building2 className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 3
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Mysore Heritage',
    tagline: 'City of palaces and heritage splendor',
    distance: '140 km',
    image: '/images/destinations/mysore.png',
    icon: <Building2 className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 3
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Ooty Hills',
    tagline: 'Queen of the Nilgiris hill station',
    distance: '120 km',
    image: '/images/destinations/ooty.png',
    icon: <Mountain className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 3
    aspect: 'aspect-[4/3]',
  },
  {
    name: 'Bangalore City',
    tagline: 'India\'s Silicon Valley garden city',
    distance: '280 km',
    image: '/images/destinations/bangalore.png',
    icon: <Building2 className="w-3.5 h-3.5" />,
    span: 'md:col-span-1 md:row-span-1',         // Normal — Row 4
    aspect: 'aspect-[4/3]',
  },
];

const PopularDestinations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const handleBook = (name: string) => {
    const message = encodeURIComponent(
      `Hello Starego! I'm interested in booking a trip to "${name}". Please provide more details and pricing.`
    );
    window.open(`https://wa.me/919567196157?text=${message}`, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-24 px-4 md:px-20 relative overflow-hidden snap-section"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full -ml-36 -mb-36 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
            Travel Anywhere
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Popular <span className="text-primary text-glow">Destinations</span>{' '}
            From Wayanad
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            From local gems to outstation journeys — we take you everywhere.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              viewport={{ once: true }}
              onClick={() => handleBook(dest.name)}
              className={`relative ${dest.aspect} ${dest.span} rounded-2xl overflow-hidden group cursor-pointer`}
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={`${dest.name} - Wayanad taxi destination`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Distance Pill */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-[11px] font-bold text-white">
                  {dest.distance}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-black text-white mb-1 group-hover:text-primary transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-1">
                    {dest.tagline}
                  </p>
                </div>

                {/* Book Now — visible on hover */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleBook(dest.name); }}
                  className="shrink-0 ml-4 flex items-center gap-2 bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-xl font-bold text-xs translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg"
                >
                  Book Trip <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
