'use server';

import { get } from '@/api/common/fetch';
import { T_ResponGetFloatNavigation } from '@/api/floating-navigation/api.get-main-navigation.type';
export async function API_GetFloatNavPrivate({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetFloatNavigation> {
  try {
    const response: T_ResponGetFloatNavigation = await get(
      '/bricc-api/menu-items/wm-private-floating-navigation?_format=json'
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Menu Navbar:', error);
    return [];
  }
}
