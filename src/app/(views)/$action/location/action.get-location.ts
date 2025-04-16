'use server';

import { API_GetLocation } from '@/api/location/api.get-location';
import {
  T_LocationRequest,
  T_ResponGetLocation,
} from '@/api/location/api.get-location.type';
import { API_GetLocationGetinvited } from '@/api/location/location-get-invited/api.get-location-get-invited';

export async function ACT_GetLocation(request: T_LocationRequest) {
  const response = await API_GetLocation(request);
  return response;
}

export async function ACT_GetLocationGetInvited({
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetLocation | null> {
  try {
    const response = await API_GetLocationGetinvited({ lang });

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Action Get Location:', error);
    return null;
  }
}
