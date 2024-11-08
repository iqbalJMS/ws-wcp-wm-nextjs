import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Homepage - Wealth Management',
};

export default async function WealthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
