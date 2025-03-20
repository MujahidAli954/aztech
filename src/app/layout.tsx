import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const rubik = Rubik({ 
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aztec Coin | The Future of Cryptocurrency',
  description: 'Aztec Coin is a cryptocurrency designed to be convenient, community-driven, and focused on wealth generation through innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable}`}>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
} 