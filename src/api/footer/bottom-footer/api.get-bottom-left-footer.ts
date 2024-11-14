'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetBottomLeftFooter } from '@/api/footer/bottom-footer/api.get-bottom-left-footer.type';

export async function API_GetFooterBottomLeft({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomLeftFooter> {
  try {
    const response: T_ResponseGetBottomLeftFooter = await get(
      '/bricc-api/menu-items/wealth-management-footer-seconda?_format=json'
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Left Item Footer:', error);
    return [];
  }
}
