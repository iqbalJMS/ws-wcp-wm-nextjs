'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_ApiGetSearchMenu } from './api.get-search-menu.type';

export async function API_GetSearchMenu(): Promise<any> {
  try {
    const response = await get<T_ApiGetSearchMenu[]>(`/bricc-api/menu-items/search?_format=json`);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Single Page:', error);
    redirect('/404');
  }
}
