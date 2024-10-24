'use server';

import React from 'react';
import { COMPONENT_MAP_WIDGET } from './$constant';
import { ACT_GetSinglePage } from './$action/action.get.single-page';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { T_Widget } from './$constant/types';
import { Locale } from '@/i18n-config';
import ScrollToTop from '@/lib/element/global/scroll.top';

export default async function PageAether({
  searchParams,
}: {
  searchParams: { lang: Locale };
}) {
  const data = await ACT_GetSinglePage({
    lang: searchParams?.lang,
    node: '15',
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
