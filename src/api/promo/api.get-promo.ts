'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_PromoRequest } from './api.get-promo.type';
const user = process.env.DRUPAL_AUTH;
const pass = process.env.DRUPAL_PASSWORD;

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetPromo(request: T_PromoRequest) {
  try {
    let queryString = objectToQueryString(request);
    const url = `/promo?_format=json_recursive&${queryString}`;

    if (!url) return undefined;

    const response = await get(url, {
      Authorization: `Basic ${btoa(`${user}:${pass}`)}`,
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during api Get Promo:', error);
    redirect('/404');
  }
}
