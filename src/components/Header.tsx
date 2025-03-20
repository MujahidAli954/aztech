'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/New Logo for Aztec.png" 
                alt="Aztec Coin Logo" 
                width={50} 
                height={50} 
                className="mr-2"
              />
              <span className="text-aztec-gold font-display text-2xl font-bold">AZT</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/#about" className="text-white hover:text-aztec-gold transition-colors">
              About
            </Link>
            <Link href="/#features" className="text-white hover:text-aztec-gold transition-colors">
              Features
            </Link>
            <Link href="/#community" className="text-white hover:text-aztec-gold transition-colors">
              Community
            </Link>
            <Link href="/#wealth" className="text-white hover:text-aztec-gold transition-colors">
              Wealth
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/#join" 
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-full 
                        text-black bg-aztec-gold hover:bg-opacity-90 transition-all"
            >
              Join Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <Link 
              href="/#about" 
              className="block px-3 py-2 text-white hover:text-aztec-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#features" 
              className="block px-3 py-2 text-white hover:text-aztec-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#community" 
              className="block px-3 py-2 text-white hover:text-aztec-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/#wealth" 
              className="block px-3 py-2 text-white hover:text-aztec-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Wealth
            </Link>
            <Link 
              href="/#join" 
              className="block px-3 py-2 text-black bg-aztec-gold rounded-full text-center font-medium mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 