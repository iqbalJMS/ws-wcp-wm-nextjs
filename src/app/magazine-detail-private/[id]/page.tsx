import React from 'react';

import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';

import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';
import PrivateHeader from '@/lib/element/global/header/private-header';
import { ACT_GetPrivateMenuNavbar } from '@/app/(views)/$action/private-header/action.get.private-menu-navbar';
import { ACT_GetHeaderLogoPrivate } from '@/app/(views)/$action/header-logo/action.get.header-logo-private';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const listPrivateNavbar = await ACT_GetPrivateMenuNavbar({ lang: 'id' });
  const itemPrivateLogo = await ACT_GetHeaderLogoPrivate({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  return (
    <>
      <PrivateHeader
        headerTop={listHeaderTop}
        headerBottom={listPrivateNavbar}
        variant={'no-transparent'}
        itemLogin={itemMenuLogin}
        privateLogo={itemPrivateLogo || undefined}
        headerLogo={itemHeaderLogo || undefined}
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
    </>
  );
}
