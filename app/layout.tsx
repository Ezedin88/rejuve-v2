'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/Base/Header';
import Footer from './ui/Base/Footer';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Rejuve Clinics',
  description: 'Iv therapy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuth = pathname.includes('/sign') || pathname.includes('/my-account');


  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description || ''} />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        {!isAuth && <Footer />}
      </body>
    </html>
  );
}
