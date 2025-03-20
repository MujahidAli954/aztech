'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shutterstock_2571870219.jpg"
          alt="Aztec Background"
          fill
          priority
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            <span className="text-aztec-gold">AZTEC COIN</span>
            <br />
            <span className="text-white">The Future of Cryptocurrency</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Limited supply of 15 million coins. Designed to be convenient, community-driven, and focused on wealth generation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link 
              href="/#about"
              className="px-8 py-3 rounded-full bg-aztec-gold text-black font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Learn More
            </Link>
            <Link 
              href="/#join"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-aztec-gold text-aztec-gold font-bold text-lg hover:bg-aztec-gold hover:text-black transition-all"
            >
              Join Community
            </Link>
          </div>
        </motion.div>
        
        {/* Floating coin animation */}
        <motion.div 
          className="absolute bottom-20 right-20 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image
            src="/images/New Logo for Aztec.png"
            alt="Aztec Coin"
            width={150}
            height={150}
            className="drop-shadow-[0_0_15px_rgba(255,204,51,0.7)]"
          />
        </motion.div>
      </div>
    </section>
  );
} 