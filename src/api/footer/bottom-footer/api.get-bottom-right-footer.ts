'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetBottomRightFooter } from './api.get-bottom-right-footer.type';

export async function API_GetFooterBottomRight({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomRightFooter> {
  try {
    const response: T_ResponseGetBottomRightFooter = await get(
      '/bricc-api/menu-items/wealth-management-social-media?_format=json'
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Menu Navbar:', error);
    return [];
  }
}
