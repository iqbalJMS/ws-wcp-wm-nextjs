'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_RequestMagazine,
  T_ResponGetEmagazine,
} from './api.get-e-magazine.type';

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetMagazine(
  request: T_RequestMagazine,
  path: string = 'all'
) {
  try {
    let queryString = objectToQueryString(request);
    const url = `/api/bri/external-magazine/${path}?_format=json_recursive&${queryString}`;

    if (!url) return undefined;
    const response = await get<T_PostResponse<T_ResponGetEmagazine>>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get api Magazine:', error);
    redirect('/404');
  }
}
