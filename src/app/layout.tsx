import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Suspense } from 'react';
import Spinner from '@/lib/element/global/spinner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Home BRI - Melayani setulus hati',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </body>
    </html>
  );
}
