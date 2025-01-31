import React from 'react';

import background from '@/../public/images/dummy/bgOurStory.jpeg';
import Image from 'next/image';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';
import { ACT_GetOurStoryDetail } from '@/app/(views)/$action/action.get.our-story.detail';
import CE_BreadcrumbStory from '@/app/our-story/$element/client.breadcrumb.our-story';
import { ACT_GetMainMiddleFooter } from '@/app/(views)/$action/main-middle-footer/action.get.main-middle-footer';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import HomeHeader from '@/lib/element/global/header/home-header';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHomeNavbar = await ACT_GetMainMenuNavbar({ lang: 'id' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const getOurstoryData = await ACT_GetOurStoryDetail({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });
  const dataImage =
    getOurstoryData?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;

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
        <div className="relative overflow-hidden h-[65vh] lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          <Image
            src={background}
            alt="bg-image"
            width={100000}
            height={100000}
            className="w-full h-full object-cover object-top"
          />
          <h1 className="z-10 absolute text-4xl text-white font-bold uppercase">
            success stories
          </h1>
        </div>

        <CE_BreadcrumbStory currentPage={getOurstoryData?.title?.[0]?.value} />
        <section className="w-full flex justify-center">
          <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col items-center ">
            <div className="w-full p-5 flex flex-col md:flex-row ">
              <div className="w-full md:w-10/12 xl:w-9/12 2xl:w-7/12 md:pr-5">
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${dataImage}`}
                  width={1000}
                  height={1000}
                  alt="image profile"
                  className="w-full h-[50vh] md:h-[30vh] lg:h-[50vh] xl:w-[60vh] object-center object-cover"
                />
              </div>
              <div className="w-full pt-10 space-y-4 xl:pl-10">
                <h1 className="text-3xl md:text-2xl lg:text-3xl font-semibold">
                  {getOurstoryData?.title?.[0]?.value}
                </h1>
                <h2 className="w-full text-base xl:text-lg 2xl:w-11/12">
                  {getOurstoryData?.field_text?.[0]?.value}
                </h2>
              </div>
            </div>
            <div className="w-full p-5 h-screen space-y-10 pt-5 ">
              <h1 className="text-lg lg:text-xl font-bold">
                {getOurstoryData?.body?.[0]?.summary}
              </h1>
              <h2 className="leading-8 ">
                {parseHTMLToReact(getOurstoryData?.body?.[0]?.value)}
              </h2>
            </div>
          </div>
        </section>
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
