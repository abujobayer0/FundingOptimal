import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import Script from 'next/script';

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
        <Script id="helpcrunch-settings" strategy="beforeInteractive">
          {`
            window.helpcrunchSettings = {
              organization: 'plexifly',
              appId: '20bdedd6-1a8a-4343-bec1-78f08ff21e89',
            };
          `}
        </Script>
        <Script id="helpcrunch-loader" strategy="beforeInteractive">
          {`
            (function(w,d){var hS=w.helpcrunchSettings;if(!hS||!hS.organization){return;}var widgetSrc='https://embed.helpcrunch.com/sdk.js';w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[];function r(){if (d.querySelector('script[src="' + widgetSrc + '"')) { return; }var s=d.createElement('script');s.async=1;s.type='text/javascript';s.src=widgetSrc;(d.body||d.head).appendChild(s);}if(d.readyState === 'complete'||hS.loadImmediately){r();} else if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}})(window, document)
          `}
        </Script>
      </head>

      <body className={`${inter.variable} antialiased bg-black min-h-screen`}>
        <AuthProvider>
          <main className="mx-auto pt-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
