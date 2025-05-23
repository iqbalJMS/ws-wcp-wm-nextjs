'use server';

import { API_GetMagazine } from '@/api/e-magazine/api.get-e-magazine';
import { T_RequestMagazine } from '@/api/e-magazine/api.get-e-magazine.type';

export async function ACT_GetMagazine(
  request: T_RequestMagazine,
  path: string = 'all'
) {
  const response = await API_GetMagazine(request, path);

  return response;
}
