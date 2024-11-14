'use server';
import { T_ResponseGetMiddleFooterMenu } from './api.get-middle-footer.type';
import { get } from '@/api/common/fetch';

export async function API_GetMiddleFooterMenu({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMiddleFooterMenu> {
  try {
    const response: T_ResponseGetMiddleFooterMenu = await get(
      '/bricc-api/menu-items/wm-middle-footer?_format=json'
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return [];
  }
}
