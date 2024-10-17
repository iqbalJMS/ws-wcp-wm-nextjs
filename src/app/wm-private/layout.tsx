import React from 'react';
import { Metadata } from 'next';
import GlobalFooter from '@/lib/element/global/global.footer';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetTopMenuNavbar } from '@/app/wm-private/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/wm-private/$action/action.get.main-menu-navbar';
import { ACT_GetMainMenuFooter } from '@/app/wm-private/$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from '@/app/wm-private/$action/action.get.bottom-footer';
import CardVariant1 from '@/lib/element/global/card-variant1';
import CardVariant2 from '@/lib/element/global/card-variant2';
import CardVariant4 from '@/app/wealth-management/$element/client.card.variant4';
import CardVariant6 from '@/app/wealth-management/$element/client.card.variant6';
import CardVariant5 from '@/app/wealth-management/$element/client.card.variant5';
import CardVariant3 from '@/app/wealth-management/$element/client.card.variant3';

export const metadata: Metadata = {
  title: 'Homepage - Wealth Management',
};

export default async function WealthManagement({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
      <div className="space-y-12 px-2">
        <CardVariant1 />
        <CardVariant2 />
        <CardVariant4 />
        <CardVariant5 />
        <CardVariant6 />
        <CardVariant3 />
      </div>
      {children}
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
    </React.Fragment>
  );
}
