import React from 'react';
import CE_HeaderMagazine from '@/app/magazine/$element/client.header.magazine';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const getMagazineData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  return (
    <>
      <div className="w-full h-screen bg-black">
        <CE_HeaderMagazine
          headerTop={listHeaderTop}
          headerBottom={listHeaderBottom}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
        />
        {getMagazineData.map((item: any, index: number) => (
          <section key={index}>
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
                src={item?.field_link?.[0]?.uri}
                sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
              ></iframe>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
