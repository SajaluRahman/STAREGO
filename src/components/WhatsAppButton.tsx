'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Starego! I'm interested in booking a taxi in Wayanad. Could you please provide more information?");
    window.open(`https://wa.me/919567196157?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 2, 
        duration: 0.5, 
        type: 'spring', 
        stiffness: 260, 
        damping: 20 
      }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        {/* Pulsing Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 group-hover:scale-150 transition-all duration-500 animate-pulse" />
        
        {/* Main Button */}
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all">
          <MessageSquare className="text-white w-8 h-8 fill-white" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[10px] text-white font-bold">1</span>
          </div>
        </div>

        {/* Hover Label */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Chat with us
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-white rotate-45" />
        </div>
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;
