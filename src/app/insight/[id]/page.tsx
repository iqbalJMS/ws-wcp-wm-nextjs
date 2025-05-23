import React from 'react';

import Image from 'next/image';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';
import { ACT_GetMainMiddleFooter } from '@/app/(views)/$action/main-middle-footer/action.get.main-middle-footer';

import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';

import PrivateHeader from '@/lib/element/global/header/private-header';
import { ACT_GetPrivateMenuNavbar } from '@/app/(views)/$action/private-header/action.get.private-menu-navbar';
import { ACT_GetHeaderLogoPrivate } from '@/app/(views)/$action/header-logo/action.get.header-logo-private';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';
import CE_WYSIWSGVariant02 from '@/app/$element/client.wysiwsg.variant02';
import CE_BreadCrumbInsightPrivate from '@/app/insight/$element/client.breadcrumb.insight-private';
import noImage from '@/../public/images/no-image.png';

export async function generateMetadata() {
  return {
    title: `Wawasan Private Detail`,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listPrivateNavbar = await ACT_GetPrivateMenuNavbar({ lang: 'id' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemPrivateLogo = await ACT_GetHeaderLogoPrivate({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });

  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });
  const headerImage =
    getOurstoryData?.field_header_image_insight?.[0]?.thumbnail?.[0]?.uri?.[0]
      ?.url;
  return (
    <>
      <div className="w-full">
        <PrivateHeader
          headerTop={listHeaderTop}
          headerBottom={listPrivateNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          privateLogo={itemPrivateLogo || undefined}
          headerLogo={itemHeaderLogo || undefined}
        />
        <div className="relative overflow-hidden h-[65vh] lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          {headerImage ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${headerImage ?? ''}`}
              alt="bg-image"
              width={100000}
              height={100000}
              className="w-full h-[600px] object-cover object-top"
            />
          ) : (
            <Image
              src={noImage}
              alt="bg-image"
              width={100000}
              height={100000}
              className="w-full h-[600px] object-cover object-top"
            />
          )}
          <div className="z-0 absolute w-full flex justify-center">
            <h1 className="text-4xl text-white font-bold uppercase">wawasan</h1>
          </div>
        </div>

        <CE_BreadCrumbInsightPrivate
          currentPage={getOurstoryData?.title?.[0]?.value ?? ''}
        />
        <CE_WYSIWSGVariant02
          category={
            getOurstoryData?.field_items?.[0]?.field_title?.[0]?.value ?? ''
          }
          title={getOurstoryData?.field_summary?.[0]?.value ?? ''}
          date={getOurstoryData?.created?.[0]?.value ?? ''}
          body={
            getOurstoryData?.field_items?.[0]?.field_content?.[0]?.processed ??
            ''
          }
        />
        <GlobalFooter
          bottom_right_footer={listBottomRightFooter}
          bottom_left_footer={listBottomLeftFooter}
          main_footer={itemMainFooter || undefined}
          middle_main_footer={itemMiddleMainFooter}
          variant={'wm-private-main-navigation'}
        />
      </div>
    </>
  );
}
