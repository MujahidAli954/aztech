'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function JoinSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    setIsSubmitted(true);
    setEmail('');
  };
  
  return (
    <section id="join" className="py-24 bg-gradient-to-b from-aztec-dark to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-black border border-aztec-gold/30 rounded-3xl overflow-hidden p-10 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-aztec-gold mb-4">
              Start Your Journey with Aztec Coin
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the Hidden Treasures community today and be part of the future of cryptocurrency.
            </p>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 bg-aztec-dark text-white rounded-full border border-aztec-gold/30 focus:outline-none focus:ring-2 focus:ring-aztec-gold/50"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-aztec-gold text-black font-bold rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Join Now
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                By joining, you agree to receive updates from Aztec Coin. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="text-aztec-gold text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You for Joining!</h3>
              <p className="text-gray-300">
                Welcome to the Hidden Treasures Community. We'll be in touch with updates soon.
              </p>
            </div>
          )}
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-aztec-gold text-2xl mb-2">🌐</div>
              <h3 className="text-xl font-bold text-white mb-1">Global Community</h3>
              <p className="text-gray-400 text-sm">Join members from around the world</p>
            </div>
            <div>
              <div className="text-aztec-gold text-2xl mb-2">💰</div>
              <h3 className="text-xl font-bold text-white mb-1">Wealth Generation</h3>
              <p className="text-gray-400 text-sm">Access unique wealth-building strategies</p>
            </div>
            <div>
              <div className="text-aztec-gold text-2xl mb-2">🔒</div>
              <h3 className="text-xl font-bold text-white mb-1">Secure & Trusted</h3>
              <p className="text-gray-400 text-sm">Built on robust blockchain technology</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 