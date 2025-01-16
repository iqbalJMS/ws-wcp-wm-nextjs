'use server';

import { post } from '@/api/common/fetch';
import { T_Search, T_SearchRequest } from './api.get.search.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSearch(request: T_SearchRequest) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString()); 
    });
    
    const response = await post<T_PostResponse<T_Search>>('/api/brimw/search', formData);
    
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Kurs:', error);
    return undefined;
  }
}
