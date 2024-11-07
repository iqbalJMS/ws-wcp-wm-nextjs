'use server';

import { API_GetTopMenuNavbar } from '@/api/navbar-menu/top-navbar/api.get-top-menu-navbar';
import { T_ResponseGetTopMenuNavbar } from '@/api/navbar-menu/top-navbar/api.get-top-menu-navbar.type';

export async function ACT_GetTopMenuNavbar({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetTopMenuNavbar> {
  const response = await API_GetTopMenuNavbar({ lang });
  return response;
}
