'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetPriorityMenuNavbar } from './api.get-priority-menu-navbar.type';

export async function API_GetPriorityMenuNavbar({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetPriorityMenuNavbar> {
  try {
    const response: T_ResponseGetPriorityMenuNavbar = await get(
      '/bricc-api/menu-items/wm-prioritas-main-navigation?_format=json'
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Menu Navbar:', error);
    return [];
  }
}
