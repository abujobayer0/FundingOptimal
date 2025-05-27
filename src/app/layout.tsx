import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';
import Footer from '@/components/layout/Footer';

const inter = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'FundingOptimal',
  description: 'Your trusted partner in funding solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>

      <body className={`${inter.variable} antialiased bg-black min-h-screen`}>
        <Header />
        <main className="mx-auto pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
