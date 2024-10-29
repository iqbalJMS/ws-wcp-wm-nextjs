import React from 'react';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetTopMenuNavbar } from '../wealth-management/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '../wealth-management/$action/action.get.main-menu-navbar';

export default async function page() {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  return (
    <div className="w-full h-screen bg-black">
      <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
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
