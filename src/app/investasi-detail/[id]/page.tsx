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
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail.page';
import CE_BCInvestasi from '@/app/investasi-detail/$element/client.breadcrumb.investasi';
import CE_AccordionInvestasi from '@/app/investasi-detail/$element/client.accordion.investasi';
import { ACT_GetPriorityMenuNavbar } from '@/app/(views)/$action/priority-header/action.get.priority-menu-navbar';
import HomeHeader from '@/lib/element/global/header/home-header';

export async function generateMetadata() {
  return {
    title: `Investasi Detail`,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listPriorityNavbar = await ACT_GetPriorityMenuNavbar({ lang: 'id' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
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

  return (
    <>
      <div>
        <HomeHeader
          headerTop={listHeaderTop}
          headerBottom={listPriorityNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
        />
        <section className="relative overflow-hidden h-[65vh] lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          <Image
            src={background ?? ''}
            alt="bg-image"
            width={100000}
            height={100000}
            className="w-full h-full object-cover object-top"
          />
          <div className="w-10/12 z-10 absolute text-center flex justify-center">
            <h1 className="text-4xl text-white font-bold uppercase line-clamp-2">
              {getOurstoryData?.title?.[0]?.value ?? ''}
            </h1>
          </div>
        </section>
        <CE_BCInvestasi
          currentPage={getOurstoryData?.title?.[0]?.value ?? ''}
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
              <CE_AccordionInvestasi
                renderContent={item?.field_content?.[0]?.value ?? ''}
                renderTitle={item?.field_title?.[0]?.value ?? ''}
              />
            </div>
          ))}
        </section>
        <GlobalFooter
          bottom_right_footer={listBottomRightFooter}
          bottom_left_footer={listBottomLeftFooter}
          main_footer={itemMainFooter || undefined}
          middle_main_footer={itemMiddleMainFooter}
          variant={'wm-prioritas-main-navigation'}
        />
      </div>
    </>
  );
}
