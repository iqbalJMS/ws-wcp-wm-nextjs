/* eslint-disable no-restricted-imports */
import React from 'react';
import GlobalHeader from '@/lib/element/global/global.header';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetTopMenuNavbar } from '../$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '../$action/action.get.main-menu-navbar';
import { ACT_GetMenuItemNavbar } from '../$action/action.get-menu-item-navbar';
import { ACT_GetMainMenuFooter } from '../$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from '../$action/action.get.bottom-footer';

export default async function WmSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });

  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  return (
    <>
      <GlobalHeader
        headerTop={listHeaderTop}
        headerBottom={listHeaderBottom}
        variant={'transparent'}
        itemLogin={itemMenuLogin}
      />
      <main>{children}</main>
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
    </>
  );
}
