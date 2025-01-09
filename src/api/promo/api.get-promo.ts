'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_PostResponse } from '@/api/common/fetch.type';
import { T_PromoRequest, T_ResponGetPromo } from './api.get-promo.type';

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetPromo(request: T_PromoRequest) {
  try {
    let queryString = objectToQueryString(request);
    const url = `/id/promo?_format=json_recursive${queryString}`;

    if (!url) return undefined;
    const response = await get<T_PostResponse<T_ResponGetPromo>>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Location:', error);
    redirect('/404');
  }
}
