'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetMainMiddleFooter } from './api.get-main-middle-footer.type';

export async function API_GetMainMiddleFooter({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainMiddleFooter> {
  try {
    const response: T_ResponseGetMainMiddleFooter = await get(
      '/bricc-api/menu-items/wm-middle-footer?_format=json'
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Left Item Footer:', error);
    return [];
  }
}
