'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetPrivateMenuNavbar } from './api.get-private-menu-navbar.type';

export async function API_GetPrivateMenuNavbar({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetPrivateMenuNavbar> {
  try {
    const response: T_ResponseGetPrivateMenuNavbar = await get(
      '/bricc-api/menu-items/wm-private-main-navigation?_format=json'
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Menu Navbar:', error);
    return [];
  }
}
