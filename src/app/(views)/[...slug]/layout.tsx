/* eslint-disable no-restricted-imports */
import React from 'react';
import GlobalHeader from '@/lib/element/global/global.header';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetTopMenuNavbar } from '../$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '../$action/action.get.main-menu-navbar';
import { ACT_GetMenuItemNavbar } from '../$action/action.get-menu-item-navbar';

import { ACT_GetBottomRightFooter } from '../$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '../$action/bottom-footer/action.get.bottom.left.footer';
import CE_MenuMain from '../$element/client.menu.main';
import { ACT_GetFloatNavigation } from '../$action/action.get-float-navigation';

export default async function WmSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemMenuFloatNavigation = await ACT_GetFloatNavigation({ lang: 'en' });

  return (
    <>
      <GlobalHeader
        headerTop={listHeaderTop}
        headerBottom={listHeaderBottom}
        variant={'transparent'}
        itemLogin={itemMenuLogin}
      />
      <CE_MenuMain data={[]} />
      <main>{children}</main>
      <GlobalFooter
        bottom_right_footer={listBottomRightFooter}
        bottom_left_footer={listBottomLeftFooter}
        main_middle_footer={itemMenuFloatNavigation}
      />
    </>
  );
}
