'use server';

import { API_GetMenuItemNavbar } from '@/api/navbar-menu/menu-items/api.get-menu-items-navbar';
import { T_ResponseGetMenuItemNavbar } from '@/api/navbar-menu/menu-items/api.get-menu-items-navbar.type';

export async function ACT_GetMenuItemNavbar({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMenuItemNavbar> {
  const response = await API_GetMenuItemNavbar({ lang });
  return response;
}
