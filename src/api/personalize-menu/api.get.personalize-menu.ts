'use server';

import { get } from '@/api/common/fetch';
import { T_PersonalizeMenu } from './api.get.personalize-menu.type';

export async function API_GetPersonalizeMenu(): Promise<T_PersonalizeMenu[]> {
  try {
    const response = await get<T_PersonalizeMenu[]>(
      '/bricc-api/menu-items/personalized-menu?_format=json'
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Personlize Menu:', error);
    return [];
  }
}
