'use client';

/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_PromoRequest,
  T_ResponGetPromo,
} from '@/api/promo/api.get-promo.type';
import { ACT_GetPromo } from '@/app/(views)/$action/promo/action.get-promo';

export function CFN_GetPromo(
  transit: Call,
  data: T_PromoRequest,
  onSuccess?: (data: T_PostResponse<T_ResponGetPromo> | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToPromoPayload(data);
    const actionResult = await ACT_GetPromo(payload);
    if (onSuccess) {
      onSuccess(actionResult as any);
    }
  });
}

export function CFN_MapToPromoPayload(form: T_PromoRequest): T_PromoRequest {
  return {
    limit: form.limit,
    page: form.page,
  };
}

export function CFN_ValidateGetPromoFields(
  limit: keyof T_PromoRequest,
  value: any
): string {
  switch (limit) {
    default:
      return '';
  }
}
