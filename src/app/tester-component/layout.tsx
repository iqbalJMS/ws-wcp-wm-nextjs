// import GlobalFooter from '@/lib/element/global/global.footer';

import { Metadata } from 'next';
import React from 'react';

import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
// import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/action.get.main-footer';
// import { ACT_GetBottomMenuFooter } from '@/app/(views)/$action/action.get.bottom-footer';
import CE_MenuMain from '@/app/(views)/$element/client.menu.main';

export const metadata: Metadata = {
  title: 'Homepage - Wealth Management',
};

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });

  // const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  // const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  return (
    <React.Fragment>
      <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
        itemLogin={[]}
      />
      <CE_MenuMain />
      <div className="h-screen bg-blue-300"></div>

      {children}
      {/* <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      /> */}
    </React.Fragment>
  );
}
