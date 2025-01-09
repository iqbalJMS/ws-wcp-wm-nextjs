'use server';

import { API_GetPromo } from '@/api/promo/api.get-promo';
import { T_PromoRequest } from '@/api/promo/api.get-promo.type';

export async function ACT_GetPromo(request: T_PromoRequest) {
  const response = await API_GetPromo(request);
  return response;
}
