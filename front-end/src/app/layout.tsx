import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import clsx from 'clsx';
import { Footer } from '@/app/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://https://full-rc-upgrade.dev.react-performance-examples.examples.oleksiipopov.com/'),
  title: {
    default: 'React 19 Performance Examples - Interactive Demo with React Compiler',
    template: '%s | React 19 Performance Examples',
  },
  description: 'Explore React 19 rendering patterns with automatic memoization from the React Compiler. Learn how React 19 optimizes performance without manual optimization techniques.',
  keywords: ['React 19', 'React Compiler', 'React performance', 'React optimization', 'React rendering', 'automatic memoization', 'React examples'],
  authors: [{ name: 'Oleksii Popov' }],
  openGraph: {
    title: 'React 19 Performance Examples - Interactive Demo with React Compiler',
    description: 'Explore React 19 rendering patterns with automatic memoization from the React Compiler.',
    url: 'https://https://full-rc-upgrade.dev.react-performance-examples.examples.oleksiipopov.com/',
    siteName: 'React Performance Examples',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React 19 Performance Examples - Interactive Demo with React Compiler',
    description: 'Explore React 19 rendering patterns with automatic memoization from the React Compiler.',
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
