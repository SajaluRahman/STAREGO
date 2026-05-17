'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Car, Shield, Clock, Star, MapPin, Headphones, Route, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import PopularDestinations from '@/components/PopularDestinations';

/* ─── Horizontal Scroll Feature Strip ─── */
const features = [
  { icon: <Shield className="w-8 h-8" />, title: 'Safety First', desc: 'Verified drivers & well-maintained fleet' },
  { icon: <Clock className="w-8 h-8" />, title: '24/7 Available', desc: 'Round the clock service across Wayanad' },
  { icon: <Star className="w-8 h-8" />, title: 'Premium Quality', desc: 'Luxury vehicles for every journey' },
  { icon: <MapPin className="w-8 h-8" />, title: 'Local Experts', desc: 'Drivers who know every trail & shortcut' },
  { icon: <Headphones className="w-8 h-8" />, title: 'Dedicated Support', desc: 'Personal assistance throughout your trip' },
  { icon: <Route className="w-8 h-8" />, title: 'Custom Routes', desc: 'Flexible itineraries tailored for you' },
  { icon: <Award className="w-8 h-8" />, title: '10+ Years', desc: 'A decade of trusted travel excellence' },
  { icon: <Car className="w-8 h-8" />, title: 'Fleet Variety', desc: 'Hatchbacks, SUVs & luxury MUVs' },
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden snap-section">
      {/* Subtle background image */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ y: bgY }}
      >
        <Image 
          src="/images/wayanad_panoramic_mist_contact.png" 
          alt="Background Texture" 
          fill 
          className="object-cover grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1] pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div style={{ y: headingY, opacity: headingOpacity }} className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Why Choose <span className="text-primary text-glow">Starego</span>?
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            <span className="hidden md:inline">Scroll sideways to explore what makes us the best taxi service in Wayanad.</span>
            <span className="md:hidden">What makes us the best taxi service in Wayanad.</span>
          </p>
        </motion.div>
      </div>

      {/* Cards: grid on mobile, horizontal scroll on desktop */}
      <div className="md:hidden grid grid-cols-2 gap-4 px-6 pb-4 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col items-center text-center group border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-all duration-300">
              {f.icon}
            </div>
            <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:flex horizontal-scroll-container gap-8 px-12 pb-10 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="horizontal-scroll-item w-[300px] glass-card p-8 flex flex-col items-center text-center group cursor-default border-white/5 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-primary/10">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ─── About Section with Scroll Zoom ─── */
const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll zoom on the stat box
  const statScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.6, 1.05, 1]);
  const statOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const statRotateX = useTransform(scrollYProgress, [0, 0.3, 0.5], [20, -3, 0]);

  // Right column entrance
  const rightX = useTransform(scrollYProgress, [0, 0.35], [80, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const benefits = ['24/7 Availability', 'Clear Pricing', 'Local Knowledgeable Drivers', 'Well Maintained Fleet'];

  return (
    <section ref={sectionRef} className="py-24 container mx-auto px-6 snap-section relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] floating-orb pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] floating-orb-delayed pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 perspective-2000">
        {/* Left: Zoom stat */}
        <motion.div 
          style={{ scale: statScale, opacity: statOpacity, rotateX: statRotateX }}
          className="relative preserve-3d scroll-3d"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-amber-600/30 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-[#0a0a0a] p-2 aspect-square flex items-center justify-center text-center rounded-full overflow-hidden border border-white/10">
            {/* Background Image inside the circle */}
            <div className="absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-110">
              <Image 
                src="/images/wayanad_tea_plantation_road.png" 
                alt="Wayanad Road" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            
            <div className="relative z-10 p-12">
              {/* Shimmer accent */}
              <div className="absolute inset-0 shimmer opacity-30" />
              <h3 className="text-7xl md:text-9xl font-black text-primary mb-2 text-glow tracking-tighter">10+</h3>
              <p className="text-xl font-bold uppercase tracking-[0.2em] text-white">Years of Service</p>
              <div className="h-0.5 w-12 bg-primary mx-auto my-6" />
              <p className="text-gray-300 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
                Dedicated to providing the most reliable and premium travel experience in Wayanad and across Kerala.
              </p>
            </div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border border-primary/20 shadow-xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="text-primary w-5 h-5 fill-primary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-primary uppercase">Trusted</p>
                <p className="text-xs font-black">5-Star Rated</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right: Text */}
        <motion.div
          style={{ x: rightX, opacity: rightOpacity }}
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">About Starego Travels</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">Your Trusted <br /><span className="text-primary text-glow">Wayanad Taxi</span> Partner</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Located in the heart of Sulthan Bathery, Starego has been the leading <strong>Wayanad taxi agency</strong> for over a decade. We specialize in sightseeing tours, airport transfers, and reliable <strong>Kerala taxi services</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((item, i) => (
              <motion.li 
                key={item} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 glass-card p-4 border-white/5 hover:border-primary/20 transition-colors"
              >
                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#f59e0b]" />
                <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
              </motion.li>
            ))}
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="premium-button inline-flex items-center gap-2 group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Footer with Reveal ─── */
const Footer = () => (
  <motion.footer 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="py-16 border-t border-white/5 bg-black snap-section relative overflow-hidden"
  >
    {/* Subtle footer background */}
    <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/wayanad_panoramic_mist_contact.png')] opacity-[0.02] grayscale bg-cover" />
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="flex items-center justify-center mb-8">
        <Image 
          src="/logo.png" 
          alt="STAREGO Logo" 
          width={180} 
          height={50} 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      <p className="text-sm text-gray-500 mb-6 tracking-widest uppercase font-bold">Starego Premium Travel Service — Wayanad</p>
      <div className="flex justify-center gap-8 mb-8 text-gray-400 text-sm">
        <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
        <Link href="/vehicles" className="hover:text-primary transition-colors">Vehicles</Link>
        <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
      <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2026 Starego. All rights reserved. Designed for Excellence.</p>
    </div>
  </motion.footer>
);

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main className="min-h-screen snap-container overflow-x-hidden">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <PopularDestinations />
        <VehicleShowcase />
        <HorizontalScrollSection />
        <AboutSection />
        <Packages />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
