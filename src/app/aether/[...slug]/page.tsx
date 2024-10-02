'use server';

import React from 'react';
import { ACT_GetSinglePage } from '@/app/aether/$action/action.get.single-page';
import { Locale } from '@/i18n-config';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import ScrollToTop from '@/lib/element/global/scroll.top';
import { T_Widget } from '@/app/aether/$constant/types';
import { COMPONENT_MAP_WIDGET } from '@/app/aether/$constant';

export default async function PageAetherDetail({
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
    node: getNodeId,
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

  return (
    <React.Fragment>
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
      <ScrollToTop />
    </React.Fragment>
  );
}
