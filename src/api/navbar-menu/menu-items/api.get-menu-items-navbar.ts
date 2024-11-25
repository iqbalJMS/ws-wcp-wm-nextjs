'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetMenuItemNavbar } from './api.get-menu-items-navbar.type';

export async function API_GetMenuItemNavbar({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMenuItemNavbar> {
  try {
    const response: T_ResponseGetMenuItemNavbar = await get(
      '/bricc-api/menu-items/wealth-management-login-dropdown?_format=json'
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Top Menu Navbar:', error);
    return [];
  }
}
