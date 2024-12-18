'use server';

import React from 'react';
import { ACT_GetSinglePage } from '@/app/(views)/$action/action.get.single-page';
import { Locale } from '@/i18n-config';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { T_Widget } from '@/app/(views)/$constant/types';
import { COMPONENT_MAP_WIDGET } from '@/app/(views)/$constant';
import CE_FloatingMain from '@/app/(views)/$element/floating-menu/client.floating.main';
import { ACT_GetFloatNavigation } from '@/app/(views)/$action/action.get-float-navigation';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetPriorityMenuNavbar } from '@/app/(views)/$action/priority-header/action.get.priority-menu-navbar';
import { ACT_GetPrivateMenuNavbar } from '@/app/(views)/$action/private-header/action.get.private-menu-navbar';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-item-navbar';
import PriorityHeader from '@/lib/element/global/header/priority-header';
import PrivateHeader from '@/lib/element/global/header/private-header';
import OurStoryHeader from '@/lib/element/global/header/our-story-header';
import ScrollToTopHome from '@/lib/element/global/scroll-top/scroll.top-home';
import ScrollToTopPrivate from '@/lib/element/global/scroll-top/scroll.top-private';
import ScrollToTopPriority from '@/lib/element/global/scroll-top/scroll.top-priority';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetMainMiddleFooter } from '@/app/(views)/$action/main-middle-footer/action.get.main-middle-footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/main-footer/action.get.main-footer';
import { ACT_GetBottomLeftFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.left.footer';
import { ACT_GetBottomRightFooter } from '@/app/(views)/$action/bottom-footer/action.get.bottom.right.footer';
import { ACT_GetHeaderLogoPrivate } from '@/app/(views)/$action/header-logo/action.get.header-logo-private';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/header-logo/action.get.header-logo';
import { ACT_GetHeaderLogoPriority } from '@/app/(views)/$action/header-logo/action.get.header-logo-priority';

export default async function PageWealthDetail({
  params: { slug },
  searchParams: { lang },
}: {
  params: {
    slug: Array<string>;
  };
  searchParams: {
    lang: Locale;
  };
}) {
  const getNodeId = slug?.[0];
  const data = await ACT_GetSinglePage({
    lang: lang ?? 'en',
    alias: getNodeId ?? '',
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
  const itemMenuFloatNavigation = await ACT_GetFloatNavigation({ lang: 'en' });

  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHomeNavbar = await ACT_GetMainMenuNavbar({ lang: 'id' });
  const listPriorityNavbar = await ACT_GetPriorityMenuNavbar({ lang: 'id' });
  const listPrivateNavbar = await ACT_GetPrivateMenuNavbar({ lang: 'id' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemMiddleMainFooter = await ACT_GetMainMiddleFooter({ lang: 'en' });
  const itemMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomLeftFooter = await ACT_GetBottomLeftFooter({ lang: 'en' });
  const listBottomRightFooter = await ACT_GetBottomRightFooter({ lang: 'en' });
  const itemPrivateLogo = await ACT_GetHeaderLogoPrivate({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const itemPriorityLogo = await ACT_GetHeaderLogoPriority({ lang: 'en' });

  const theme = data?.field_main_menu?.[0]?.target_id;

  return (
    <React.Fragment>
      {theme === 'wm-main-navigation' && (
        <OurStoryHeader
          headerTop={listHeaderTop}
          headerBottom={listHomeNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
        />
      )}
      {theme === 'wm-prioritas-main-navigation' && (
        <PriorityHeader
          headerTop={listHeaderTop}
          headerBottom={listPriorityNavbar}
          variant={'transparent'}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
          priorityLogo={itemPriorityLogo || undefined}
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
        variant={theme}
      />
      {theme === 'wm-main-navigation' && <ScrollToTopHome />}
      {theme === 'wm-private-main-navigation' && <ScrollToTopPrivate />}
      {theme === 'wm-prioritas-main-navigation' && <ScrollToTopPriority />}
    </React.Fragment>
  );
}
