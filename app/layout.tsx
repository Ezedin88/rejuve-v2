'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/Base/Header';
import Footer from './ui/Base/Footer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuth = pathname.includes('/sign') || pathname.includes('/my-account');

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {!isAuth && <Footer />}
      </body>
    </html>
  );
}
