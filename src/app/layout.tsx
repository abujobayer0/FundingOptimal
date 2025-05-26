import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';

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

      <body className={`${inter.variable} antialiased min-h-screen`}>
        <Header />
        <main className="mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
