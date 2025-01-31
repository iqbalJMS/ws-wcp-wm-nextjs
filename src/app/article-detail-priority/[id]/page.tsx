import React from 'react';

import background from '@/../public/images/dummy/banner-insight.jpg';
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
import CE_WYSIWSGVariant01 from '@/app/$element/client.wysiwsg.variant01';
import CE_BreadCrumbArticle from '@/app/article-detail/$element/client.breadcrumb.article';
import PriorityHeader from '@/lib/element/global/header/priority-header';
import { ACT_GetHeaderLogoPriority } from '@/app/(views)/$action/header-logo/action.get.header-logo-priority';
import { ACT_GetPriorityMenuNavbar } from '@/app/(views)/$action/priority-header/action.get.priority-menu-navbar';

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listPriorityNavbar = await ACT_GetPriorityMenuNavbar({ lang: 'id' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const itemPriorityLogo = await ACT_GetHeaderLogoPriority({ lang: 'en' });

  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  const imageArticle =
    getOurstoryData?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;

  return (
    <>
      <div>
        <PriorityHeader
          headerTop={listHeaderTop}
          headerBottom={listPriorityNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          priorityLogo={itemPriorityLogo || undefined}
          headerLogo={itemHeaderLogo || undefined}
        />
        <section className="relative overflow-hidden h-[65vh] lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          <Image
            src={background}
            alt="bg-image"
            width={100000}
            height={100000}
            className="w-full h-full object-cover object-top"
          />
          <h1 className="z-10 absolute text-4xl text-white font-bold uppercase">
            article
          </h1>
        </section>
        <CE_BreadCrumbArticle currentPage={'Detail Article'} />
        <CE_WYSIWSGVariant01
          category={
            getOurstoryData?.field_article_category?.[0]?.name?.[0]?.value
          }
          title={getOurstoryData?.title?.[0]?.value}
          date={getOurstoryData?.created?.[0]?.value}
          image={imageArticle}
          body={getOurstoryData?.body?.[0]?.value}
        />
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
