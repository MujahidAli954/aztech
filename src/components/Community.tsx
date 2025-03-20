'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Community() {
  return (
    <section id="community" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-aztec-gold opacity-20 z-0"></div>
        <Image
          src="/images/New Logo for Aztec.png"
          alt="Aztec Coin Pattern"
          fill
          className="object-contain opacity-10 scale-150"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-aztec-gold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Hidden Treasures Community
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Together, we uncover treasures and create wealth for all members. Our collective strength is the key to unlocking crypto's full potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="relative bg-aztec-dark rounded-xl p-8 overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-aztec-gold mb-4">Community Overview</h3>
              <p className="text-gray-300">
                At Aztec Coin, our community is everything. Join the Hidden Treasures community today and unlock the power of collective wealth generation.
              </p>
            </div>
            <div className="absolute top-0 right-0 h-24 w-24 opacity-20">
              <Image
                src="/images/New Logo for Aztec.png"
                alt="Aztec Logo"
                width={96}
                height={96}
              />
            </div>
          </motion.div>

          <motion.div
            className="relative bg-aztec-dark rounded-xl p-8 overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-aztec-gold mb-4">Benefits of Joining</h3>
              <p className="text-gray-300">
                Share knowledge, tips, and opportunities. Together, we'll build wealth and uncover treasures that benefit everyone involved.
              </p>
            </div>
            <div className="absolute top-0 right-0 h-24 w-24 opacity-20">
              <Image
                src="/images/New Logo for Aztec.png"
                alt="Aztec Logo"
                width={96}
                height={96}
              />
            </div>
          </motion.div>

          <motion.div
            className="relative bg-aztec-dark rounded-xl p-8 overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-aztec-gold mb-4">How to Get Involved</h3>
              <p className="text-gray-300">
                Sign up, become an active participant, and help shape the future of Aztec Coin. Your voice matters in our community-driven approach.
              </p>
            </div>
            <div className="absolute top-0 right-0 h-24 w-24 opacity-20">
              <Image
                src="/images/New Logo for Aztec.png"
                alt="Aztec Logo"
                width={96}
                height={96}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#join" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full 
                    text-black bg-aztec-gold hover:bg-opacity-90 transition-all"
          >
            Join Our Community Today
          </a>
        </motion.div>
      </div>
    </section>
  );
} 