'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Instagram, Facebook, Award, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 3D perspective entrance for the two columns
  const leftRotateY = useTransform(scrollYProgress, [0, 0.3], [12, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0, 0.3], [-60, 0]);

  const rightRotateY = useTransform(scrollYProgress, [0, 0.3], [-12, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  // Parallax for background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      vehicle: formData.get('vehicle'),
      passengers: formData.get('passengers'),
      package: formData.get('package'),
      message: formData.get('message'),
    };

    // Construct WhatsApp Message
    const waMessage = `*New Website Enquiry*
*Name:* ${data.name}
*Phone:* ${data.phone}
*Vehicle:* ${data.vehicle}
*Passengers:* ${data.passengers}
*Package:* ${data.package}
*Message:* ${data.message || 'N/A'}`;

    const waLink = `https://wa.me/919567196157?text=${encodeURIComponent(waMessage)}`;

    // Redirect to WhatsApp
    window.open(waLink, '_blank');
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const contactItems = [
    { icon: <MapPin className="text-primary w-6 h-6" />, label: 'Office', value: 'Sulthan Bathery, Wayanad' },
    { icon: <Phone className="text-primary w-6 h-6" />, label: 'Call Us', value: '+91 95671 96157' },
    { icon: <Mail className="text-primary w-6 h-6" />, label: 'Email', value: 'knoushid16@gmail.com' },
  ];

  return (
    <section ref={sectionRef} id="enquiry" className="py-24 relative overflow-hidden snap-section min-h-screen flex items-center">
      {/* Parallax Panoramic Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 grayscale brightness-50"
        style={{ y: bgY }}
      >
        <Image 
          src="/images/wayanad_panoramic_mist_contact.png" 
          alt="Panoramic Wayanad" 
          fill 
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start perspective-2000">
          
          {/* Info Side — 3D entrance from left */}
          <motion.div
            style={{ rotateY: leftRotateY, opacity: leftOpacity, x: leftX }}
            className="preserve-3d scroll-3d"
          >
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Starego Premium <br /><span className="text-primary text-glow">Travel Agency</span></h2>
            
            {/* Map Graphic Box */}
            <div className="relative h-64 w-full mb-10 rounded-2xl overflow-hidden glass-card group border-primary/20">
              <Image 
                src="/images/wayanad_local_map_graphic.png" 
                alt="Wayanad Destinations Map" 
                fill 
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-black/50 px-2 py-1 rounded">Local Expertise</span>
                <p className="text-white font-bold text-sm mt-1">Covering all major spots in Wayanad</p>
              </div>
            </div>

            <div className="prose prose-invert mb-12 text-gray-400">
              <p>
                Based in Wayanad, Starego is a premium travel agency dedicated to providing more than just a ride; we offer an experience of comfort, luxury, and authentic hospitality.
              </p>
            </div>

            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social icons with staggered bounce */}
            <div className="flex gap-4 mt-12">
              {[
                { icon: <Instagram className="w-5 h-5" />, delay: 0.4 },
                { icon: <Facebook className="w-5 h-5" />, delay: 0.5 },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: social.delay, type: 'spring', stiffness: 300, damping: 15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors border border-white/10"
                >
                  {social.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side — 3D entrance from right */}
          <motion.div
            style={{ rotateY: rightRotateY, opacity: rightOpacity, x: rightX }}
            className="glass-card p-8 md:p-12 preserve-3d scroll-3d relative overflow-hidden"
          >
            {/* Subtle background texture for the form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32" />
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 relative z-10"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/30">
                  <Award className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Enquiry Sent!</h3>
                <p className="text-gray-400">Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Send an Enquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:shadow-[0_0_15px_rgba(245,158,11,0.15)] outline-none transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="+91 ..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:shadow-[0_0_15px_rgba(245,158,11,0.15)] outline-none transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Preferred Vehicle</label>
                      <select 
                        name="vehicle"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:shadow-[0_0_15px_rgba(245,158,11,0.15)] outline-none transition-all duration-300 appearance-none"
                      >
                        <option className="bg-gray-900">No Preference</option>
                        <option className="bg-gray-900">Toyota Glanza</option>
                        <option className="bg-gray-900">Toyota Innova Crysta</option>
                        <option className="bg-gray-900">Toyota Innova 2015</option>
                        <option className="bg-gray-900">Maruti Ertiga</option>
                      </select>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">No. of Passengers</label>
                      <input 
                        name="passengers"
                        type="number" 
                        min="1"
                        max="20"
                        placeholder="e.g. 4"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:shadow-[0_0_15px_rgba(245,158,11,0.15)] outline-none transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Interested Package</label>
                    <select 
                      name="package"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:shadow-[0_0_15px_rgba(245,158,11,0.15)] outline-none transition-all duration-300 appearance-none"
                    >
                      <option className="bg-gray-900">Enquiry Only</option>
                      <option className="bg-gray-900">Wayanad Explorer (1 Day)</option>
                      <option className="bg-gray-900">Wayanad Highlights (2 Days)</option>
                      <option className="bg-gray-900">Airport Transfers (CCJ/CNN/COK)</option>
                      <option className="bg-gray-900">Customized Packages</option>
                    </select>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Travel Details</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Date of travel, number of passengers, etc..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:shadow-[0_0_15px_rgba(245,158,11,0.15)] outline-none transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`premium-button w-full flex items-center justify-center gap-2 py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'} <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
