// import GlobalFooter from '@/lib/element/global/global.footer';
// import { ACT_GetTopMenuNavbar } from './$action/action.get.top-menu-navbar';
import { Metadata } from 'next';
import React from 'react';
// import { ACT_GetMainMenuNavbar } from './$action/action.get.main-menu-navbar';
// import GlobalHeader from '@/lib/element/global/global.header';
// import { ACT_GetMainMenuFooter } from './$action/action.get.main-footer';
// import { ACT_GetBottomMenuFooter } from './$action/action.get.bottom-footer';
// import CE_BannerMain from './$element/banner/client.banner.main';
// import CE_CarouselVariant3 from './$element/carousel/client.carousel.variant03';
// import CE_CardVariant2 from './$element/card/client.card.variant2';
// import CE_CardVariant3 from './$element/card/client.card.variant3';
// import CE_CardVariant4 from './$element/card/client.card.variant4';
// import CE_CardVariant5 from './$element/card/client.card.variant5';
// import CE_CardVariant6 from './$element/card/client.card.variant6';
// import CE_CardMegazine from './$element/card/client.card.megazine';
// import { ACT_GetMenuItemNavbar } from './$action/action.get-menu-item-navbar';
// import CE_CardVariant16 from './$element/card/client.card.variant16';
// import CE_CardVariant15 from './$element/card/client.card.variant15';

export const metadata: Metadata = {
  title: 'Homepage - Wealth Management',
};

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  // const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  // const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });

  // const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  // const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  return (
    <React.Fragment>
      {/* <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
        itemLogin={itemMenuLogin}
      /> */}
      {/* <div className="w-full">
        <CE_BannerMain data={[]} variant={'01'} />
      </div>
      <div className="space-y-16 pb-20 relative overflow-hidden">
        <CE_CarouselVariant3 />
        <CE_CardVariant2 />
        <CE_CardVariant4 />
        <CE_CardVariant5 />
        <CE_CardVariant6 />
        <CE_CardVariant3 />
        <CE_CardMegazine />
        <CE_CardVariant16 />
        <CE_CardVariant15 />
      </div> */}
      <>{children}</>
      {/* <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      /> */}
    </React.Fragment>
  );
}
