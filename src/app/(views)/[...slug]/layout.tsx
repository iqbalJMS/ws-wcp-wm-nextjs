import React from 'react';
import ScrollToTop from '@/lib/element/global/scroll-to-top';

export default async function WmSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollToTop />
      <main>{children}</main>
    </>
  );
}
