'use server';

import { API_GetProvince } from '@/api/province/api.get-province';
import { T_ResponGetProvince } from '@/api/province/api.get-province.type';

export async function ACT_GetProvince({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetProvince | null> {
  try {
    const response = await API_GetProvince({ lang });

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Action Get Province:', error);
    return null;
  }
}
