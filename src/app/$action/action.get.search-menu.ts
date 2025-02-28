'use server';

import { API_GetSearchMenu } from '@/api/search/api.get-search-menu';

export async function ACT_GetSearchMenu(): Promise<any> {
  const response = await API_GetSearchMenu();
  return response;
}
