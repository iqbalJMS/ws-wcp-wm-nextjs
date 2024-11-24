'use server';

import { API_GetPrivateMenuNavbar } from '@/api/navbar-menu/main-navbar/private-navbar/api.get-private-menu-navbar';
import { T_ResponseGetPrivateMenuNavbar } from '@/api/navbar-menu/main-navbar/private-navbar/api.get-private-menu-navbar.type';

export async function ACT_GetPrivateMenuNavbar({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetPrivateMenuNavbar> {
  const response = await API_GetPrivateMenuNavbar({ lang });
  return response;
}
