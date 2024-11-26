import React from 'react';
import CE_HeaderMagazine from './$element/client.header.magazine';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';

export default async function page() {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  return (
    <div className="w-full h-screen bg-black">
      <CE_HeaderMagazine
        headerTop={listHeaderTop}
        headerBottom={listHeaderBottom}
        variant={'transparent'}
        itemLogin={itemMenuLogin}
      />
      <div
        style={{
          position: 'relative',
          paddingTop: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            border: 'none',
            width: '100%',
            height: '100%',
            left: 0,
            top: 130,
          }}
          src="https://online.fliphtml5.com/vgsnb/rwfb/"
        ></iframe>
      </div>
    </div>
  );
}
