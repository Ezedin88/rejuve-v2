import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/Base/Header';
import Footer from './ui/Base/Footer';
import Head from 'next/head';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Rejuve Clinics',
  description: 'Iv therapy',
};

type Params = {
  slug: string
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Params
}>) {

  const { slug } = params;
  const isAuth = slug === 'sign' || slug === 'my-account';

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
