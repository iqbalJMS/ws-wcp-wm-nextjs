import React from 'react';


import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';

import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';

import { ACT_GetMainMiddleFooter } from '@/app/(views)/$action/main-middle-footer/action.get.main-middle-footer';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import HomeHeader from '@/lib/element/global/header/home-header';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';
import CE_InputTester from './input';

export default async function page() {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHomeNavbar = await ACT_GetMainMenuNavbar({ lang: 'id' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });

    

  return (
    <>
      <div className="w-full">
        <HomeHeader
          headerTop={listHeaderTop}
          headerBottom={listHomeNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
        />
        <div className='h-screen pt-40' >
          <CE_InputTester/>
        </div>
        <GlobalFooter
          bottom_right_footer={listBottomRightFooter}
          bottom_left_footer={listBottomLeftFooter}
          main_footer={itemMainFooter || undefined}
          middle_main_footer={itemMiddleMainFooter}
          variant={'wm-main-navigation'}
        />
      </div>
    </>
  );
}
