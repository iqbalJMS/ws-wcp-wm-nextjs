'use server';

import { API_GetLocation } from '@/api/location/api.get-location';
import { T_LocationRequest } from '@/api/location/api.get-location.type';

export async function ACT_GetLocation(request: T_LocationRequest) {
  const response = await API_GetLocation(request);
  return response;
}
