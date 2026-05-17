'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  TreePine, Calendar, MapPin, MessageSquare, FileText,
  ArrowRight, Mountain, Sun, Compass, Zap, Camera,
  ChevronRight, Plane, Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

/* ─── Package Cards Data ─── */
const packages = [
  {
    title: 'Wayanad Explorer',
    days: '1 Day Tour',
    destination: 'Lakkidi View Point, Chain Tree, Teenzania Park, Pookode Lake, Honey Museum, Vythiri Farm, Vythiri Park, Karapuzha Dam (Evening)',
    price: '₹3,000',
    limit: '100km limit, extra ₹20/km',
    image: '/images/wayanad_sightseeing.png',
    icon: <Mountain className="w-6 h-6" />,
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    title: 'Wayanad Highlights',
    days: '2 Days / 1 Night',
    destination: 'Banasura Sagar, Pookode Lake, Edakkal Caves',
    price: '',
    image: '/images/wayanad_lakes_caves.png',
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Airport Transfers',
    days: '24/7 Pickup & Drop',
    destination: 'Calicut (CCJ), Kannur (CNN), Kochi (COK), Mysore, Bangalore Airports to Wayanad',
    price: '',
    image: '/images/airport_pickup.png',
    icon: <Plane className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'Customized Packages',
    days: 'Flexible / On-Demand',
    destination: 'Tailor-made itineraries for honeymoon, group tours, or corporate trips. Your choice of destinations, our expertise.',
    price: '',
    image: '/images/wayanad_mountains_peaks.png',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-amber-500/20 to-orange-500/20'
  }
];

/* ─── 4-Day Itinerary Data ─── */
const itinerary = [
  {
    day: 1,
    label: 'Day 1',
    theme: 'Western Wayanad Wonders',
    image: '/images/wayanad_sightseeing.png',
    icon: <Sun className="w-5 h-5" />,
    accent: 'from-violet-500 to-purple-600',
    accentLight: 'from-violet-500/20 to-purple-500/20',
    glow: 'rgba(139,92,246,0.25)',
    spots: [
      'Lakkidi View Point',
      'Pookode Lake',
      'Vythiri Park',
      'Ultra Park',
      'Honey Museum',
      'Chain Tree (Ancient Banyan)',
    ],
  },
  {
    day: 2,
    label: 'Day 2',
    theme: 'Heritage & History Trail',
    image: '/images/wayanad_lakes_caves.png',
    icon: <Compass className="w-5 h-5" />,
    accent: 'from-amber-500 to-orange-600',
    accentLight: 'from-amber-500/20 to-orange-500/20',
    glow: 'rgba(245,158,11,0.25)',
    spots: [
      'Jain Temple',
      'Edakkal Caves',
      'Heritage Museum',
      'Karapuzha Dam',
      'Phantom Rock',
    ],
  },
  {
    day: 3,
    label: 'Day 3',
    theme: 'Adventure & Thrills',
    image: '/images/wayanad_waterfall_adventure.png',
    icon: <Zap className="w-5 h-5" />,
    accent: 'from-emerald-500 to-teal-600',
    accentLight: 'from-emerald-500/20 to-teal-500/20',
    glow: 'rgba(16,185,129,0.25)',
    spots: [
      'Kanthanpara Waterfalls',
      '900 Kandi Glass Bridge',
      'Attamala View Point',
      'Sentinel Rock',
      'Zip Line',
      'Tea Plantation Cycling',
    ],
  },
  {
    day: 4,
    label: 'Day 4',
    theme: 'Wildlife & Nature Trails',
    image: '/images/wayanad_wildlife.png',
    icon: <Camera className="w-5 h-5" />,
    accent: 'from-cyan-500 to-blue-600',
    accentLight: 'from-cyan-500/20 to-blue-500/20',
    glow: 'rgba(6,182,212,0.25)',
    spots: [
      'Banasura Sagar Dam',
      'Muthanga Wildlife Sanctuary',
      'Tholpetty Wildlife Reserve',
      'Kuruva Island',
      'Soochipara Waterfalls',
      'Chembra Peak Viewpoint',
    ],
  },
];

/* ─── Package Card ─── */
const PackageCard = ({ pkg, index }: { pkg: typeof packages[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    [index === 0 ? -3 : index === 2 ? 3 : 0, 0, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.25], [80, 0]);
  const iconY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I am interested in booking the "${pkg.title}" package for ${pkg.days}. Please provide more details.`);
    window.open(`https://wa.me/919567196157?text=${message}`, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateZ, scale, opacity, y }}
      className={`glass-card group relative overflow-hidden h-full flex flex-col`}
    >
      {/* Header Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating icon with parallax */}
        <motion.div
          style={{ y: iconY, rotate: iconRotate }}
          className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 border border-white/10"
        >
          <div className="text-primary">{pkg.icon}</div>
        </motion.div>
      </div>

      <div className="p-8 pt-6 relative z-10 flex flex-col h-full">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pkg.color} blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 opacity-50`} />

        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{pkg.days}</span>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{pkg.title}</h3>

        <div className="mt-auto space-y-3 mb-6">
          <p className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-white shrink-0 font-medium">Covers:</span>
            {pkg.destination}
          </p>
          {(pkg.price || pkg.limit) && (
            <div className="flex justify-between items-end pt-2">
              {pkg.price && <p className="text-xl font-bold text-white">{pkg.price}</p>}
              {pkg.limit && (
                <p className="text-[10px] text-primary font-bold uppercase tracking-tighter mb-1">{pkg.limit}</p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <button
            onClick={handleWhatsApp}
            className="premium-button flex items-center justify-center gap-2 w-full"
          >
            <MessageSquare className="w-4 h-4" />
            Book on WhatsApp
          </button>
          {/* <a
            href="/brochure.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            See Full Details
          </a> */}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── 4-Day Itinerary Section ─── */
const ItinerarySection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const current = itinerary[activeDay];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I am interested in the 4-Day Wayanad Package. Please provide more details and pricing.`
    );
    window.open(`https://wa.me/919567196157?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mt-24"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
          4-Day Itinerary
        </span>
        <h3 className="text-3xl md:text-5xl font-black mb-4">
          Explore Day by{' '}
          <span className="text-glow text-primary">Day</span>
        </h3>
        <div className="h-1 w-16 bg-primary mx-auto mb-5" />
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          A carefully crafted 4-day journey through the best of Wayanad — choose any day to preview your adventure.
        </p>
      </div>

      {/* Day Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {itinerary.map((item, i) => (
          <motion.button
            key={item.day}
            id={`itinerary-day-${item.day}`}
            onClick={() => setActiveDay(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border overflow-hidden ${
              activeDay === i
                ? 'border-transparent text-black shadow-lg shadow-primary/20'
                : 'border-white/10 text-gray-300 hover:border-white/20 hover:text-white bg-white/[0.03]'
            }`}
          >
            {activeDay === i && (
              <motion.span
                layoutId="day-pill"
                className={`absolute inset-0 bg-gradient-to-r ${current.accent}`}
                style={{ zIndex: 0, borderRadius: '0.75rem' }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {item.icon}
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Itinerary Card */}
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="glass-card relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[500px]"
          >
            {/* Left: Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image 
                src={current.image} 
                alt={current.theme} 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              
              {/* Day Badge on Image */}
              <div className={`absolute top-6 left-6 px-4 py-2 rounded-lg bg-gradient-to-r ${current.accent} text-black font-black text-sm shadow-xl`}>
                {current.label}
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-10 relative z-10 flex flex-col justify-center">
              {/* Glow bg */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${current.glow}, transparent 70%)`,
                }}
              />

              {/* Day header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.accent} flex items-center justify-center shadow-lg shrink-0`}
                  style={{ boxShadow: `0 0 20px ${current.glow}` }}
                >
                  <div className="text-white">{current.icon}</div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                    {current.label}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-black text-white">
                    {current.theme}
                  </h4>
                </div>
              </div>

              {/* Spots grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {current.spots.map((spot, idx) => (
                  <motion.div
                    key={spot}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.35 }}
                    className="flex items-center gap-3 group/spot"
                  >
                    <div
                      className={`w-7 h-7 rounded-lg bg-gradient-to-br ${current.accentLight} flex items-center justify-center shrink-0 group-hover/spot:scale-110 transition-transform duration-200`}
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-gray-200 font-medium text-sm group-hover/spot:text-white transition-colors">
                      {spot}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-7 border-t border-white/[0.07] flex flex-col sm:flex-row items-center gap-4 justify-between relative z-10">
                <p className="text-gray-400 text-sm">
                  All 4 days included in our{' '}
                  <span className="text-primary font-semibold">Heritage &amp; Peaks</span> package
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="premium-button flex items-center gap-2 shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book This Tour
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
const Packages = () => {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section ref={sectionRef} id="packages" className="py-24 bg-black/20 snap-section">
      {/* Parallax background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] floating-orb" />
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] floating-orb-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            className="max-w-2xl"
            style={{ y: headingY, opacity: headingOpacity, scale: headingScale }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black mb-4"
            >
              Exclusive <span className="text-glow text-primary">Wayanad Taxi</span> Packages
            </motion.h2>
            <div className="h-1 w-20 bg-primary mb-6" />
            <p className="text-gray-400">
              Handpicked destinations and perfectly timed itineraries for the best Wayanad experience.
              Custom packages are also available upon request.
            </p>
          </motion.div>
          {pathname !== "/packages" && (
            <Link href="/packages" className="pointer- ">
              <motion.button
                whileHover={{ x: 8 }}
                className="text-primary font-bold flex items-center gap-2 h-fit"
              >
                View All Packages <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          )}
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.title} pkg={pkg} index={i} />
          ))}
        </div>

        {/* 4-Day Itinerary */}
        <ItinerarySection />
      </div>
    </section>
  );
};

export default Packages;
