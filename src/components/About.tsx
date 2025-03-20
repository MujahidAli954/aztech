'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-aztec-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-aztec-gold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Discover the Future of Cryptocurrency
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Aztec Coin is a cryptocurrency designed to be convenient, community-driven, and focused on wealth generation through innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Limited Supply, Maximum Value
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              With only 15 million coins available, Aztec Coin is designed to be scarce and valuable. Our limited supply ensures that your investment has the potential to grow substantially over time.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-aztec-gold mr-2">✓</span>
                <span className="text-gray-300">Total supply of only 15 million coins</span>
              </li>
              <li className="flex items-start">
                <span className="text-aztec-gold mr-2">✓</span>
                <span className="text-gray-300">Designed for long-term wealth generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-aztec-gold mr-2">✓</span>
                <span className="text-gray-300">Community-driven development and governance</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/shutterstock_2425153259.jpg"
                alt="Aztec Coin Value Proposition"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h4 className="text-aztec-gold text-3xl font-display font-bold mb-4">
                  Invest in the Future
                </h4>
                <p className="text-white text-lg">
                  With 15 million Aztec coins, now is the right time to buy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 