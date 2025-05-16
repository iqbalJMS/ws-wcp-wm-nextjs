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
import CE_BreadCrumbProgram from '@/app/program-detail/$element/client.breadcrumb.program';
import Accordion from '@/lib/element/global/accordion';
import CE_ShareContent from '@/lib/element/global/share-content';
import noImage from '@/../public/images/no-image.png';
export async function generateMetadata() {
  return {
    title: `Program Private Detail`,
  };
}

export default async function page({
  params,
}: {
  params: { id: string; variant?: string };
}) {
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

  const bgImage =
    getOurstoryData?.field_components?.[0]?.field_image?.[0]?.thumbnail?.[0]
      ?.uri?.[0]?.url;

  return (
    <>
      <div>
        <PrivateHeader
          headerTop={listHeaderTop}
          headerBottom={listPrivateNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          privateLogo={itemPrivateLogo || undefined}
          headerLogo={itemHeaderLogo || undefined}
        />
        <section className="relative overflow-hidden h-[65vh] lg:mb-[3.125rem] w-full bg-cover before:absolute before:left-0 before:top-0 before:w-full before:h-full flex justify-center items-center before:bg-gradient-to-b before:from-black before:to-black before:opacity-40 z-0 border-b-[15px] border-[#D2D2D2]">
          {bgImage ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${bgImage ?? ''}`}
              alt="bg-image"
              width={100000}
              height={100000}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <Image
              src={noImage}
              alt="bg-image"
              width={100000}
              height={100000}
              className="w-full h-full object-cover object-top"
            />
          )}

          <div className="absolute w-full z-10 flex justify-center">
            {getOurstoryData?.title?.[0]?.value && (
              <h1 className="w-9/12 text-2xl text-white text-center font-bold uppercase line-clamp-3">
                {getOurstoryData?.title?.[0]?.value ?? ''}
              </h1>
            )}
          </div>
        </section>
        <CE_BreadCrumbProgram
          currentPage={getOurstoryData?.title?.[0]?.value ?? ''}
        />
        <div className="w-full px-4 py-6 lg:px-8 2xl:px-40 flex justify-end ">
          <CE_ShareContent />
        </div>
        <div className="w-full flex justify-center pb-14 pt-4">
          {getOurstoryData?.title?.[0]?.value && (
            <div className="w-9/12">
              <h1 className="text-xl xl:text-2xl text-privatecolor font-bold uppercase text-center line-clamp-3">
                {getOurstoryData?.title?.[0]?.value ?? ''}
              </h1>
            </div>
          )}
        </div>
        <section className="w-full flex flex-col justify-center items-center pb-10">
          {getOurstoryData?.field_items?.map((item: any, index: number) => (
            <div key={index} className=" w-full px-5 md:w-9/12 xl:w-5/12">
              <Accordion
                isOpen={index === 0}
                renderContent={item?.field_content?.[0]?.processed ?? ''}
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
          variant={'wm-private-main-navigation'}
        />
      </div>
    </>
  );
}
