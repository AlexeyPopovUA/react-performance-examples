import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/app/Header';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto flex min-h-screen flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
