import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetTopMenuNavbar } from './$action/action.get.top-menu-navbar';
import { Metadata } from 'next';
import React from 'react';

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
      {children}
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
    </React.Fragment>
  );
}
