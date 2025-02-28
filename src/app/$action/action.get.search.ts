'use server';

import { API_GetSearch } from '@/api/search/api.get.search';
import { T_SearchRequest } from '@/api/search/api.get.search.type';

export async function ACT_GetSearch(request: T_SearchRequest) {
  const response = await API_GetSearch(request);
  return response;
}
