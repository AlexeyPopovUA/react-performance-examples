import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import clsx from 'clsx';
import { Footer } from '@/app/Footer';

const inter = Inter({ subsets: ['latin'] });

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
