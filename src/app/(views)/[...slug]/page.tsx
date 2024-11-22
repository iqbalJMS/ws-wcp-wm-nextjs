'use server';

import React from 'react';
import { ACT_GetSinglePage } from '@/app/(views)/$action/action.get.single-page';
import { Locale } from '@/i18n-config';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import ScrollToTop from '@/lib/element/global/scroll.top';
import { T_Widget } from '@/app/(views)/$constant/types';
import { COMPONENT_MAP_WIDGET } from '@/app/(views)/$constant';
import CE_FloatingMain from '@/app/(views)/$element/floating-menu/client.floating.main';
import { ACT_GetFloatNavigation } from '@/app/(views)/$action/action.get-float-navigation';

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

  const theme = data?.field_main_menu?.[0]?.target_id;

  return (
    <React.Fragment>
      <CE_FloatingMain data={itemMenuFloatNavigation} variant={theme} />
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
      <ScrollToTop />
    </React.Fragment>
  );
}
