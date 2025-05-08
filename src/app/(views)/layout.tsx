import { Metadata } from 'next';
import React from 'react';
import ScrollToTop from '@/lib/element/global/scroll-to-top';

export const metadata: Metadata = {
  title: 'Home - BRI PRIVATE - Bank BRI | Melayani Dengan Setulus Hati',
};

export default async function WealthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
