'use server';
import { get } from '@/api/common/fetch';
import { T_ResponGetProvince } from '@/api/province/api.get-province.type';

export async function API_GetProvince({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetProvince | null> {
  try {
    const result: any = await get('/api/brimw/location/province');

    return (result?.data as T_ResponGetProvince) || null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Province:', error);
    return null;
  }
}
