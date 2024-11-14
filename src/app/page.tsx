'use server';

import React from 'react';
import { COMPONENT_MAP_WIDGET } from './(views)/$constant';
import { ACT_GetSinglePage } from './(views)/$action/action.get.single-page';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { T_Widget } from './(views)/$constant/types';
// import { Locale } from '@/i18n-config';
import ScrollToTop from '@/lib/element/global/scroll.top';
import { ACT_GetTopMenuNavbar } from './(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from './(views)/$action/action.get.main-menu-navbar';
// import { ACT_GetMainMenuFooter } from './(views)/$action/action.get.main-footer';
import { ACT_GetBottomRightFooter } from './(views)/$action/bottom-footer/action.get.bottom.right.footer';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetMenuItemNavbar } from './(views)/$action/action.get-menu-item-navbar';
import { Locale } from '@/i18n-config';
import { ACT_GetBottomLeftFooter } from './(views)/$action/bottom-footer/action.get.bottom.left.footer';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetMiddleMenuFooter } from './(views)/$action/main-footer/action.get.main-footer';
import CE_MenuMain from './(views)/$element/client.menu.main';
import { ACT_GetFloatNavigation } from './(views)/$action/action.get-float-navigation';
export default async function PageWealth({
  searchParams,
}: {
  searchParams: { lang: Locale };
}) {
  const data = await ACT_GetSinglePage({
    lang: searchParams?.lang,
    alias: 'wealth',
  });

  const components = data?.field_components
    ?.map((component: T_FieldComponent) => {
      const entityBundle = component?.entity_bundle?.[0]?.value as T_Widget;

      const componentConfig = COMPONENT_MAP_WIDGET[entityBundle];
      if (componentConfig) {
        const { component: Component, props } = componentConfig;
        return {
          Component,
          props: props(component),
        };
      }

      return null;
    })
    .filter(Boolean) as Array<{
    Component: React.ComponentType<any>;
    props: Record<string, any>;
  }>;

  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemMainFooter = await ACT_GetMiddleMenuFooter({ lang: 'en' });
  const itemMenuFloatNavigation = await ACT_GetFloatNavigation({ lang: 'en' });
  return (
    <React.Fragment>
      <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
        itemLogin={itemMenuLogin}
      />
      <CE_MenuMain data={itemMenuFloatNavigation} />
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
      <GlobalFooter
        bottom_right_footer={listBottomRightFooter}
        bottom_left_footer={listBottomLeftFooter}
        main_middle_footer={itemMainFooter}
      />
      <ScrollToTop />
    </React.Fragment>
  );
}
