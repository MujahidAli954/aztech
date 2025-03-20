'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Hidden Treasures Community',
    description: 'Together, we uncover treasures and create wealth for all members. Our collective strength is the key to unlocking crypto\'s full potential.',
    icon: '/images/shutterstock_2450963731.jpg',
  },
  {
    title: 'Zero-Fee Aztec Coin ATMs',
    description: 'Coming soon to multiple countries, Aztec Coin ATMs will offer zero-fee withdrawals and deposits, making your crypto journey smoother than ever.',
    icon: '/images/shutterstock_2425153103.jpg',
  },
  {
    title: 'Seamless Transactions',
    description: 'Experience the ease of using Aztec Coin with fast, secure, and convenient transactions that put you in control.',
    icon: '/images/shutterstock_2424677341.jpg',
  },
  {
    title: 'Wealth Generation',
    description: 'Not just a coin — Aztec Coin is a wealth-building tool that works for you and your community.',
    icon: '/images/shutterstock_2571870219.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-aztec-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-aztec-gold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Aztec Coin?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our mission is to be the most convenient cryptocurrency for everyday use, making transactions seamless and wealth generation effortless.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-black bg-opacity-50 rounded-xl overflow-hidden shadow-lg hover:shadow-aztec-gold/20 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-aztec-gold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 