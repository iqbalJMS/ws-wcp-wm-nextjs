'use server';
import { get } from '@/api/common/fetch';
import { T_ResponGetLocation } from '@/api/location/api.get-location.type';

export async function API_GetLocationGetinvited({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetLocation | null> {
  try {
    const result: any = await get('/api/brimw/location/location');

    return (result?.data as T_ResponGetLocation) || null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during API Get Location:', error);
    return null;
  }
}
