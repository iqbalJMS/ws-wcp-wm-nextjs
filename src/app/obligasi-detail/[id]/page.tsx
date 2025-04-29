import React from 'react';

import background from '@/../public/images/dummy/banner-investment-detail.jpg';
import Image from 'next/image';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';
import { ACT_GetMainMiddleFooter } from '@/app/(views)/$action/main-middle-footer/action.get.main-middle-footer';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import { ACT_GetPrivateMenuNavbar } from '@/app/(views)/$action/private-header/action.get.private-menu-navbar';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import PrivateHeader from '@/lib/element/global/header/private-header';
import { ACT_GetHeaderLogoPrivate } from '@/app/(views)/$action/header-logo/action.get.header-logo-private';
import CE_AccordionObligasi from '@/app/obligasi-detail/$element/client.accordion.obligasi';
import CE_BCObligasiPrivate from '@/app/obligasi-detail/$element/client.BC-oblogasi-private';

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listPrivateNavbar = await ACT_GetPrivateMenuNavbar({ lang: 'id' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const itemPriorityLogo = await ACT_GetHeaderLogoPrivate({ lang: 'en' });

  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  return (
    <>
      <div>
        <PrivateHeader
          headerTop={listHeaderTop}
          headerBottom={listPrivateNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
          privateLogo={itemPriorityLogo || undefined}
        />
        <section className="relative overflow-hidden h-[65vh] lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          <Image
            src={background}
            alt="bg-image"
            width={100000}
            height={100000}
            className="w-full h-full object-cover object-top"
          />
          <div className="z-10 absolute text-center ">
            {getOurstoryData?.title?.[0]?.value && (
              <h1 className="text-4xl text-white font-bold uppercase">
                {getOurstoryData?.title?.[0]?.value}
              </h1>
            )}
            {getOurstoryData?.field_summary?.[0]?.value && (
              <h2 className="text-sm text-white w-full pt-10">
                {parseHTMLToReact(getOurstoryData?.field_summary?.[0]?.value)}
              </h2>
            )}
          </div>
        </section>
        <CE_BCObligasiPrivate
          currentPage={getOurstoryData?.title?.[0]?.value}
        />
        <div className="w-full flex justify-center pb-14 pt-4">
          {getOurstoryData?.field_items?.[0]?.field_content?.[0]?.value && (
            <h1 className="text-xl xl:text-3xl text-prioritycolor font-bold uppercase text-center">
              rincian produk
            </h1>
          )}
        </div>
        <section className="w-full flex flex-col justify-center items-center pb-10">
          {getOurstoryData?.field_items?.map((item: any, index: number) => (
            <div key={index} className=" w-full px-5 md:w-9/12 xl:w-5/12">
              <CE_AccordionObligasi
                renderContent={item?.field_content?.[0]?.value}
                renderTitle={item?.field_title?.[0]?.value}
              />
            </div>
          ))}
        </section>
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
