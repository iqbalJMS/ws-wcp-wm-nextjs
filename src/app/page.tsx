'use server';

import React from 'react';
import { COMPONENT_MAP_WIDGET } from './(views)/$constant';
import { ACT_GetSinglePage } from './(views)/$action/action.get.single-page';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { T_Widget } from './(views)/$constant/types';
import { ACT_GetTopMenuNavbar } from './(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from './(views)/$action/action.get.main-menu-navbar';
import { ACT_GetBottomRightFooter } from './(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetMenuItemNavbar } from './(views)/$action/action.get-menu-item-navbar';
import { Locale } from '@/i18n-config';
import { ACT_GetBottomLeftFooter } from './(views)/$action/bottom-footer/action.get.bottom.left.footer';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetMainMenuFooter } from './(views)/$action/main-footer/action.get.main-footer';
import { ACT_GetFloatNavigation } from './(views)/$action/action.get-float-navigation';
import CE_FloatingMain from './(views)/$element/floating-menu/client.floating.main';
import HomeHeader from '@/lib/element/global/header/home-header';
import PriorityHeader from '@/lib/element/global/header/priority-header';
import PrivateHeader from '@/lib/element/global/header/private-header';
import { ACT_GetPriorityMenuNavbar } from './(views)/$action/priority-header/action.get.priority-menu-navbar';
import { ACT_GetPrivateMenuNavbar } from './(views)/$action/private-header/action.get.private-menu-navbar';
import ScrollToTopHome from '@/lib/element/global/scroll-top/scroll.top-home';
import ScrollToTopPrivate from '@/lib/element/global/scroll-top/scroll.top-private';
import ScrollToTopPriority from '@/lib/element/global/scroll-top/scroll.top-priority';
import { ACT_GetMainMiddleFooter } from './(views)/$action/main-middle-footer/action.get.main-middle-footer';
import { ACT_GetHeaderLogo } from './(views)/$action/header-logo/action.get.header-logo';
import { ACT_GetHeaderLogoPrivate } from './(views)/$action/header-logo/action.get.header-logo-private';

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

      const componentConfig = COMPONENT_MAP_WIDGET(
        entityBundle,
        data?.field_main_menu?.[0]?.target_id
      );
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

  const theme = data?.field_main_menu?.[0]?.target_id;

  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHomeNavbar = await ACT_GetMainMenuNavbar({ lang: 'id' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const itemMenuFloatNavigation = await ACT_GetFloatNavigation({ lang: 'en' });
  const listPriorityNavbar = await ACT_GetPriorityMenuNavbar({ lang: 'id' });
  const listPrivateNavbar = await ACT_GetPrivateMenuNavbar({ lang: 'id' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const itemPrivateLogo = await ACT_GetHeaderLogoPrivate({ lang: 'en' });

  return (
    <React.Fragment>
      {theme === 'wm-main-navigation' && (
        <HomeHeader
          headerTop={listHeaderTop}
          headerBottom={listHomeNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
        />
      )}
      {theme === 'wm-priority-main-navigation' && (
        <PriorityHeader
          headerTop={listHeaderTop}
          headerBottom={listPriorityNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
        />
      )}
      {theme === 'wm-private-main-navigation' && (
        <PrivateHeader
          headerTop={listHeaderTop}
          headerBottom={listPrivateNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          privateLogo={itemPrivateLogo || undefined}
          headerLogo={itemHeaderLogo || undefined}
        />
      )}
      <CE_FloatingMain data={itemMenuFloatNavigation} variant={theme} />
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
      <GlobalFooter
        bottom_right_footer={listBottomRightFooter}
        bottom_left_footer={listBottomLeftFooter}
        main_footer={itemMainFooter || undefined}
        middle_main_footer={itemMiddleMainFooter}
      />
      {theme === 'wm-main-navigation' && <ScrollToTopHome />}
      {theme === 'wm-private-main-navigation' && <ScrollToTopPrivate />}
      {theme === 'wm-priority-main-navigation' && <ScrollToTopPriority />}
    </React.Fragment>
  );
}
