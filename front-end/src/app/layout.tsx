import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import clsx from 'clsx';
import { Footer } from '@/app/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://react-performance-examples.oleksiipopov.com'),
  title: {
    default: 'React 18 Performance Examples - Interactive Demo',
    template: '%s | React 18 Performance Examples',
  },
  description: 'Explore React 18 rendering patterns and performance optimization techniques through interactive examples. Learn about component re-rendering, memoization, and best practices.',
  keywords: ['React 18', 'React performance', 'React optimization', 'React rendering', 'React memoization', 'React examples'],
  authors: [{ name: 'Oleksii Popov' }],
  openGraph: {
    title: 'React 18 Performance Examples - Interactive Demo',
    description: 'Explore React 18 rendering patterns and performance optimization techniques through interactive examples.',
    url: 'https://react-performance-examples.oleksiipopov.com',
    siteName: 'React Performance Examples',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React 18 Performance Examples - Interactive Demo',
    description: 'Explore React 18 rendering patterns and performance optimization techniques through interactive examples.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'min-h-screen')}>
        <main className="container mx-auto flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
