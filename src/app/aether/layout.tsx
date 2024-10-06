import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetTopMenuNavbar } from './$action/action.get.top-menu-navbar';
import { Metadata } from 'next';
import React from 'react';
import { GlobalBanner } from '@/lib/element/global/global.banner';
import CardVariant3 from '@/lib/element/global/card-variant3';
import CardVariant2 from '@/lib/element/global/card-variant2';
import CardVariant1 from '@/lib/element/global/card-variant1';
import CardVariant4 from '@/lib/element/global/card-variant4';
import CardVariant5 from '@/lib/element/global/card-variant5';
import CardVariant6 from '@/lib/element/global/card-variant6';
import CardVariant7 from '@/lib/element/global/card-variant7';
import CardVariant8 from '@/lib/element/global/card-variant8';
import CardVariant9 from '@/lib/element/global/card-variant9';
import CardVariant10 from '@/lib/element/global/card-variant10';
import CardVariant12 from '@/lib/element/global/card-variant12';
import CardVariant13 from '@/lib/element/global/card-variant13';

import { ACT_GetMainMenuNavbar } from './$action/action.get.main-menu-navbar';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetMainMenuFooter } from './$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from './$action/action.get.bottom-footer';
export const metadata: Metadata = {
  title: 'Home - Bank BRI | Melayani Dengan Setulus Hati',
};

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });

  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  return (
    <React.Fragment>
      <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
      />
      <GlobalBanner />
      <div className="space-y-12 px-5">
        <CardVariant1 />
        <CardVariant2 />
        <CardVariant3 />
        <CardVariant4 />
        <CardVariant5 />
        <CardVariant6 />
        <CardVariant7 />
        <CardVariant8 />
        <CardVariant9 />
        <CardVariant10 />
        <CardVariant12 />
        <CardVariant13 />
      </div>
      {children}
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
    </React.Fragment>
  );
}
