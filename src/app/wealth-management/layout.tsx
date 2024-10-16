import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetTopMenuNavbar } from './$action/action.get.top-menu-navbar';
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import { ACT_GetMainMenuNavbar } from './$action/action.get.main-menu-navbar';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetMainMenuFooter } from './$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from './$action/action.get.bottom-footer';
import CE_BannerMain from './$element/client.banner.main';
import CE_CardVariant2 from './$element/client.card.variant2';
import CE_CardVariant3 from './$element/client.card.variant3';
import CE_CardVariant4 from './$element/client.card.variant4';
import CE_CardVariant6 from './$element/client.card.variant6';
import CE_CardVariant5 from './$element/client.card.variant5';
import CE_CarouselVariant1 from './$element/client.carousel.variant01';

export const metadata: Metadata = {
  title: 'Homepage - Wealth Management',
};

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });

  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  return (
    <React.Fragment>
      <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
      />
      <div className="w-full">
        <CE_BannerMain data={[]} variant={'03'} />
        {/* <TesterBanner /> */}
      </div>
      <div className=" relative overflow-hidden">
        <Image
          src={'/images/dummy/bg-investment-min.jpg'}
          alt="bg-main-img"
          width={1000}
          height={1000}
          className="w-full absolute -z-10 bottom-52"
        />
        <CE_CarouselVariant1 />
        <CE_CardVariant2 />
        <CE_CardVariant5 />
        <CE_CardVariant4 />
        <CE_CardVariant6 />
        <CE_CardVariant3 />
      </div>
      {children}
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
    </React.Fragment>
  );
}
