import React from 'react';
import background from '@/../public/images/dummy/banner-reksa-dana.jpg';
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
import HomeHeader from '@/lib/element/global/header/home-header';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import CE_PromoCardDetailWm from '@/app/promo-detail/$element/card-promo-detail-wm';
import CE_BreadCrumbPromoWM from '@/app/promo-detail/$element/client.BC-promo-wm';

export async function generateMetadata() {
  return {
    title: `Promo Detail`,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHomeNavbar = await ACT_GetMainMenuNavbar({ lang: 'id' });
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
  const termsPromo = getOurstoryData?.field_term_and_condition?.[0]?.value;
  const merchantPromo = getOurstoryData?.field_promo_merchant?.[0]?.value;
  const imagePromo =
    getOurstoryData?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;
  const startPromo = getOurstoryData?.field_promo_start_date?.[0]?.value;
  const endPromo = getOurstoryData?.field_promo_end_date?.[0]?.value;
  const titlePromo = getOurstoryData?.title?.[0]?.value;
  const locationPromo =
    getOurstoryData?.field_promo_location?.[0]?.title?.[0]?.value;

  return (
    <>
      <div>
        <HomeHeader
          headerTop={listHeaderTop}
          headerBottom={listHomeNavbar}
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
          <div className="absolute w-full z-10 flex justify-center">
            {getOurstoryData?.title?.[0]?.value && (
              <h1 className="w-9/12 text-2xl text-white text-center font-bold uppercase line-clamp-3">
                {getOurstoryData?.title?.[0]?.value ?? ''}
              </h1>
            )}
          </div>
        </section>
        <CE_BreadCrumbPromoWM
          currentPage={getOurstoryData?.title?.[0]?.value ?? ''}
        />
        <section className="w-full flex flex-col justify-center items-center pb-10">
          <CE_PromoCardDetailWm
            title={titlePromo ?? ''}
            image={imagePromo ?? ''}
            terms={termsPromo ?? ''}
            startDate={startPromo ?? ''}
            endDate={endPromo ?? ''}
            merchant={merchantPromo ?? ''}
            lokasi={locationPromo ?? ''}
          />
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
