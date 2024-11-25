'use server';

import { API_GetPriorityMenuNavbar } from '@/api/navbar-menu/main-navbar/priority-navbar/api.get-priority-menu-navbar';
import { T_ResponseGetPriorityMenuNavbar } from '@/api/navbar-menu/main-navbar/priority-navbar/api.get-priority-menu-navbar.type';

export async function ACT_GetPriorityMenuNavbar({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetPriorityMenuNavbar> {
  const response = await API_GetPriorityMenuNavbar({ lang });
  return response;
}
