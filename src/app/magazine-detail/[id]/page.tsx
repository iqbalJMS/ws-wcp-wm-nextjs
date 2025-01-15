import React from 'react';

import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';

import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import CE_HeaderMagazine from '@/app/magazine/$element/client.header.magazine';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });

  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  return (
    <>
      <div className="w-full h-screen">
        <CE_HeaderMagazine
          headerTop={listHeaderTop}
          headerBottom={listHeaderBottom}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
        />
        <section className="w-full h-screen">
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
              src={getOurstoryData?.field_link?.[0]?.uri}
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
